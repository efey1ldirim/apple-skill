// BUTTONS GATE (live part) — evaluate in the page (devtools, Playwright page.evaluate, or the
// Claude browser javascript tool). The HIG Buttons page is CRITICAL for this skill.
//
// Usage (in the page):
//   <paste this file>        // defines window.buttonsProbe and window.__btnSnap
//   buttonsProbe()           // rules that need only the DOM
// tools/run-buttons-probe.mjs runs this at 375 and 1440 px in light and dark, and adds the checks that
// need real state: press/hover styles (CDP forced pseudo-classes) and a visible focus indicator (real Tab).
// Result: { pass, failures[], warnings[], controls } — pass must be true in every run.
//
// What it checks (each rule maps to the HIG Buttons page or to the WCAG rule named):
//   button-no-name          icon-only control with no accessible name (HIG: clearly communicates purpose; WCAG 4.1.2)
//   hit-region              hit region < 44 x 44 at 375 px (HIG; FAIL) · < 24 anywhere (WCAG 2.5.8; FAIL) · 24-43 on desktop [WARN]
//   pointer-not-button      element that looks/acts clickable but is not a button/link and not focusable (Return/Space, keyboard)
//   too-many-prominent      more than two prominent (solid, high-contrast/saturated) buttons in the view or open dialog (HIG: one or two)
//   option-set-size-mismatch  sibling text buttons of different height in a row / different width in a stack (HIG: style, not size)
//   primary-destructive     a prominent button whose label is destructive (HIG: never the primary role for a destructive action)
//   destructive-autofocus   destructive button with autofocus (Return would destroy data)
//   button-contrast         label < 4.5:1 (3:1 large) against the button fill (WCAG 1.4.3); icon < 3:1 (1.4.11)
//   buttons-overlap         two standalone buttons whose hit regions overlap [FAIL]
//   buttons-crowded         less than 8 px between two standalone buttons [WARN]
//   disabled-looks-enabled  disabled button rendered like its enabled sibling [WARN]
//   icon-only-no-tooltip    icon-only button with a name but no title/tooltip (macOS/visionOS show one) [WARN]
//   opens-view-no-ellipsis  button that opens a dialog/window but whose label lacks a trailing ellipsis (macOS) [WARN]
//   help-button-count       more than one help button (HIG macOS: at most one per window) [WARN]
//   busy-not-blocked        aria-busy button that is still clickable (double submit) [WARN]
// Added by the runner: no-press-state (FAIL) · no-hover-state (WARN) · no-focus-indicator (FAIL).

(() => {
  const CONTROL = "button,input[type=button],input[type=submit],input[type=reset],[role=button],summary,a[role=button]";
  const LINK_BTN = /(^|[\s_-])(btn|button|cta)([\s_-]|$)/i;
  const INTERACTIVE = "a[href],button,[role=button],[role=link],[role=tab],[role=menuitem],[role=menuitemcheckbox],[role=menuitemradio],[role=option],[role=checkbox],[role=switch],[role=radio],[role=treeitem],[role=combobox],label,summary,select,input,textarea,[tabindex]";
  const MODAL = "dialog[open],[role=alertdialog],[role=dialog][aria-modal=true],[aria-modal=true]";
  const GROUPED = "[role=group],[role=toolbar],[role=tablist],[role=radiogroup],[role=menubar],[class*=segment],[class*=btn-group],[class*=button-group],[class*=pagination],[class*=join]";
  const DESTRUCTIVE = /(?<![\p{L}])(delete|remove|erase|destroy|discard|reset|clear all|disconnect|revoke|terminate|deactivate|sil|silmek|kald[ıi]r|s[ıi]f[ıi]rla|temizle|ba[ğg]lant[ıi]y[ıi] kes)(?![\p{L}])/iu;

  // ---- colour helpers (canvas normalises rgb/hsl/oklch/color() to sRGB bytes) ----
  const cv = document.createElement("canvas"); cv.width = cv.height = 1;
  const cx = cv.getContext("2d", { willReadFrequently: true });
  const rgba = (css) => { if (!css || css === "transparent") return [0, 0, 0, 0]; cx.clearRect(0, 0, 1, 1); cx.fillStyle = "#000"; cx.fillStyle = css; cx.fillRect(0, 0, 1, 1); const [r, g, b, a] = cx.getImageData(0, 0, 1, 1).data; return [r, g, b, a / 255]; };
  const over = (t, b) => { const a = t[3]; return [0, 1, 2].map((i) => t[i] * a + b[i] * (1 - a)).concat(1); };
  const lum = ([r, g, b]) => { const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  const sat = ([r, g, b]) => { const mx = Math.max(r, g, b), mn = Math.min(r, g, b); return mx ? (mx - mn) / mx : 0; };
  const canvasColor = () => { for (const n of [document.body, document.documentElement]) { const c = rgba(getComputedStyle(n).backgroundColor); if (c[3] > 0) return over(c, [255, 255, 255, 1]); } return [255, 255, 255, 1]; };
  const effectiveBg = (el, skipSelf) => { const chain = []; for (let n = skipSelf ? el.parentElement : el; n; n = n.parentElement) chain.unshift(n); let bg = canvasColor(); for (const n of chain) { const c = rgba(getComputedStyle(n).backgroundColor); if (c[3] > 0) bg = over(c, bg); } return bg; };
  const opacityChain = (el) => { let o = 1; for (let n = el; n; n = n.parentElement) o *= +getComputedStyle(n).opacity; return o; };

  const visible = (el) => { const r = el.getBoundingClientRect(), cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none" && +cs.opacity !== 0 && !el.closest("[hidden],[aria-hidden=true],[inert]"); };
  const text = (el) => (el.textContent || "").trim().replace(/\s+/g, " ");
  const visibleText = (el) => { const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let t = ""; for (let n = w.nextNode(); n; n = w.nextNode()) { const p = n.parentElement; if (p && !p.closest("[aria-hidden=true],.sr-only,[class*=visually-hidden]") && getComputedStyle(p).display !== "none") t += n.textContent; } return t.trim().replace(/\s+/g, " "); };
  const label = (el) => { const id = el.id ? `#${el.id}` : ""; const cls = typeof el.className === "string" && el.className ? "." + el.className.trim().split(/\s+/).slice(0, 3).join(".") : ""; return `${el.tagName.toLowerCase()}${id}${cls} "${(el.getAttribute("aria-label") || text(el)).slice(0, 28)}"`; };
  const accName = (el) => {
    const lb = (el.getAttribute("aria-labelledby") || "").split(/\s+/).map((id) => document.getElementById(id)).filter(Boolean).map(text).join(" ").trim();
    if (lb) return lb;
    const al = (el.getAttribute("aria-label") || "").trim(); if (al) return al;
    if (el.matches("input")) return (el.value || el.getAttribute("aria-label") || "").trim();
    const t = text(el); if (t) return t;
    const img = el.querySelector("img[alt]:not([alt=''])"); if (img) return img.getAttribute("alt");
    const st = el.querySelector("svg title"); if (st && st.textContent.trim()) return st.textContent.trim();
    return (el.getAttribute("title") || "").trim();
  };
  const isIconOnly = (el) => !visibleText(el) && !el.matches("input");

  // Hit region = element box ∪ absolutely positioned ::before/::after boxes (the usual way to extend a small button).
  const hitBox = (el) => {
    const r = el.getBoundingClientRect(); let L = r.left, T = r.top, R = r.right, B = r.bottom;
    const cs = getComputedStyle(el), bl = parseFloat(cs.borderLeftWidth) || 0, bt = parseFloat(cs.borderTopWidth) || 0;
    for (const pe of ["::before", "::after"]) {
      const p = getComputedStyle(el, pe);
      if (p.content === "none" || p.content === "normal" || !/absolute|fixed/.test(p.position) || p.display === "none") continue;
      const pl = r.left + bl + (parseFloat(p.left) || 0), pt = r.top + bt + (parseFloat(p.top) || 0);
      const pw = parseFloat(p.width), ph = parseFloat(p.height);
      if (!(pw > 0 && ph > 0)) continue;
      L = Math.min(L, pl); T = Math.min(T, pt); R = Math.max(R, pl + pw); B = Math.max(B, pt + ph);
    }
    return { left: L, top: T, right: R, bottom: B, width: R - L, height: B - T };
  };

  function controls() {
    const set = new Set();
    for (const el of document.querySelectorAll(CONTROL)) if (visible(el)) set.add(el);
    for (const el of document.querySelectorAll("a[href]")) if (visible(el) && typeof el.className === "string" && LINK_BTN.test(el.className)) set.add(el);
    return [...set].filter((el) => !el.closest("[role=tab],[role=menuitem],[role=option]") || el.matches("button"));
  }
  const isProminent = (el, page) => {
    const cs = getComputedStyle(el); const bg = rgba(cs.backgroundColor);
    if (bg[3] < 0.9 || el.disabled || el.getAttribute("aria-disabled") === "true") return false;
    const solid = bg.slice(0, 3);
    return ratio(solid, page) >= 3 || sat(solid) >= 0.5;
  };

  function check(opts) {
    const failures = [], warnings = [];
    const cs0 = controls();
    const page = canvasColor();
    const touch = innerWidth <= 600;
    cs0.forEach((el, i) => el.setAttribute("data-btnprobe", String(i)));

    // 1. Accessible name (HIG: each button clearly communicates its purpose; WCAG 4.1.2).
    for (const el of cs0) {
      const name = accName(el);
      if (!name) failures.push({ rule: "button-no-name", el: label(el), detail: "control has no accessible name (icon-only? add aria-label or visually hidden text)" });
      else if (isIconOnly(el) && !el.getAttribute("title") && !el.hasAttribute("data-tooltip") && !el.getAttribute("aria-describedby") && !el.closest("[role=toolbar],[role=tablist]"))
        warnings.push({ rule: "icon-only-no-tooltip", el: label(el), detail: "icon-only button with a name but no tooltip (macOS/visionOS show one after hover/dwell)" });
    }

    // 2. Hit region (HIG: at least 44 x 44; WCAG 2.5.8 floor 24).
    for (const el of cs0) {
      if (el.disabled) continue;
      const h = hitBox(el), w = Math.round(h.width), hh = Math.round(h.height);
      if (w < 24 || hh < 24) failures.push({ rule: "hit-region", el: label(el), detail: `hit region ${w}×${hh} px < 24 px (WCAG 2.5.8)` });
      else if (touch && (w < 44 || hh < 44)) failures.push({ rule: "hit-region", el: label(el), detail: `hit region ${w}×${hh} px < 44×44 at ${innerWidth} px width (HIG); extend with padding or ::after inset` });
      else if (!touch && (w < 44 || hh < 44)) warnings.push({ rule: "hit-region", el: label(el), detail: `hit region ${w}×${hh} px < 44×44 (HIG general rule; acceptable on dense desktop UI only with a reason)` });
    }

    // 3. Clickable-looking non-buttons (Return/Space, keyboard, assistive tech).
    const seen = new Set();
    for (const el of document.querySelectorAll("body *")) {
      if (!visible(el) || getComputedStyle(el).cursor !== "pointer") continue;
      if (el.closest(INTERACTIVE) || el.querySelector(INTERACTIVE)) continue;
      const r = el.getBoundingClientRect();
      if (r.width > 420 || r.height > 140 || (!text(el) && !el.querySelector("svg,img"))) continue;
      const par = el.parentElement; if (par && seen.has(par)) continue;
      seen.add(el);
      failures.push({ rule: "pointer-not-button", el: label(el), detail: "cursor:pointer element with no button/link semantics and no tabindex — use <button>" });
    }

    // 4. Prominent buttons per view or open dialog (HIG: one or two).
    const modals = [...document.querySelectorAll(MODAL)].filter(visible);
    const scope = modals.length ? cs0.filter((el) => modals[modals.length - 1].contains(el)) : cs0.filter((el) => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth; });
    const prominent = scope.filter((el) => isProminent(el, page));
    if (prominent.length > 2) failures.push({ rule: "too-many-prominent", detail: `${prominent.length} prominent (solid, high-contrast/saturated) buttons in one ${modals.length ? "dialog" : "view"} (HIG: one or two)`, els: prominent.map(label) });

    // 5. Same-size set: differ by style, not size (HIG).
    const byParent = new Map();
    for (const el of cs0) { if (!visibleText(el)) continue; const cs = getComputedStyle(el); const chrome = rgba(cs.backgroundColor)[3] > 0.02 || parseFloat(cs.borderTopWidth) > 0; if (!chrome) continue; const p = el.parentElement; if (!byParent.has(p)) byParent.set(p, []); byParent.get(p).push(el); }
    for (const [, list] of byParent) {
      if (list.length < 2) continue;
      list.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top || a.getBoundingClientRect().left - b.getBoundingClientRect().left);
      for (let i = 0; i < list.length - 1; i++) {
        const a = list[i].getBoundingClientRect(), b = list[i + 1].getBoundingClientRect();
        const sameRow = Math.abs((a.top + a.bottom) / 2 - (b.top + b.bottom) / 2) < Math.min(a.height, b.height) / 2;
        const stacked = !sameRow && Math.abs((a.left + a.right) / 2 - (b.left + b.right) / 2) < Math.min(a.width, b.width) / 2;
        if (sameRow && Math.abs(a.height - b.height) > 2) failures.push({ rule: "option-set-size-mismatch", detail: `adjacent buttons in a row differ in height (${Math.round(a.height)} vs ${Math.round(b.height)} px): mark the preferred one by style, not size`, els: [label(list[i]), label(list[i + 1])] });
        if (stacked && Math.abs(a.width - b.width) > 4) failures.push({ rule: "option-set-size-mismatch", detail: `stacked buttons differ in width (${Math.round(a.width)} vs ${Math.round(b.width)} px): use one width per stack`, els: [label(list[i]), label(list[i + 1])] });
      }
    }

    // 6. Roles: never primary + destructive; never autofocus a destructive button (HIG).
    for (const el of cs0) {
      const name = accName(el);
      if (!DESTRUCTIVE.test(name)) continue;
      if (isProminent(el, page)) {
        // A red-filled destructive button is the destructive role itself (system red), not the accent-coloured primary role.
        const bg = rgba(getComputedStyle(el).backgroundColor); const redish = bg[0] > 180 && bg[1] < 110 && bg[2] < 110;
        if (!redish) failures.push({ rule: "primary-destructive", el: label(el), detail: "destructive label on a prominent (accent/primary) button — HIG: never give a destructive action the primary role" });
      }
      if (el.hasAttribute("autofocus")) failures.push({ rule: "destructive-autofocus", el: label(el), detail: "destructive button has autofocus: Return would destroy data" });
      const form = el.closest("form,dialog"); const firstSubmit = form && form.querySelector("button:not([type]),button[type=submit],input[type=submit]");
      if (form && firstSubmit === el && !el.disabled) warnings.push({ rule: "primary-destructive", el: label(el), detail: "destructive button is the default (Enter) submit of its form/dialog — make a safe action the default" });
    }

    // 7. Label contrast (WCAG 1.4.3 text, 1.4.11 icon-only).
    for (const el of cs0) {
      if (el.disabled || el.getAttribute("aria-disabled") === "true") continue;
      const cs = getComputedStyle(el), fg0 = rgba(cs.color); fg0[3] *= opacityChain(el);
      const bg = effectiveBg(el), fg = over(fg0, bg), t = visibleText(el);
      const px = parseFloat(cs.fontSize), w = +cs.fontWeight || 400, large = px >= 24 || (px >= 18.66 && w >= 700);
      const need = t ? (large ? 3 : 4.5) : 3, c = ratio(fg, bg);
      if ((t || el.querySelector("svg")) && c < need) failures.push({ rule: "button-contrast", el: label(el), detail: `${c.toFixed(2)}:1 (< ${need}) ${t ? "label" : "icon"} on the button fill — use a deeper fill or a black/white pill` });
    }

    // 8. Spacing between standalone buttons (HIG: enough space; CONV: ≥ 8 px).
    const boxes = cs0.map((el) => ({ el, h: hitBox(el), r: el.getBoundingClientRect() }));
    for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i], b = boxes[j];
      if (a.el.closest(GROUPED) && a.el.closest(GROUPED) === b.el.closest(GROUPED)) continue;
      if (a.el.contains(b.el) || b.el.contains(a.el)) continue;
      const gapX = Math.max(b.r.left - a.r.right, a.r.left - b.r.right), gapY = Math.max(b.r.top - a.r.bottom, a.r.top - b.r.bottom);
      const gap = Math.max(gapX, gapY);
      const overlapH = Math.min(a.h.right, b.h.right) - Math.max(a.h.left, b.h.left) > 0 && Math.min(a.h.bottom, b.h.bottom) - Math.max(a.h.top, b.h.top) > 0;
      if (overlapH && gap < 8) failures.push({ rule: "buttons-overlap", detail: "hit regions of two standalone buttons overlap", els: [label(a.el), label(b.el)] });
      else if (gap >= 0 && gap < 8 && ((gapX >= 0 && Math.min(a.r.bottom, b.r.bottom) - Math.max(a.r.top, b.r.top) > 0) || (gapY >= 0 && Math.min(a.r.right, b.r.right) - Math.max(a.r.left, b.r.left) > 0)))
        warnings.push({ rule: "buttons-crowded", detail: `only ${Math.round(gap)} px between two standalone buttons (< 8 px)`, els: [label(a.el), label(b.el)] });
    }

    // 9. Disabled must look unavailable (visionOS "unavailable" state; HIG states).
    for (const el of cs0) {
      if (!(el.disabled || el.getAttribute("aria-disabled") === "true")) continue;
      const sib = [...(el.parentElement?.querySelectorAll(CONTROL) ?? [])].find((s) => s !== el && !s.disabled && s.getAttribute("aria-disabled") !== "true" && s.className === el.className);
      if (!sib) continue;
      const a = getComputedStyle(el), b = getComputedStyle(sib);
      if (a.opacity === b.opacity && a.color === b.color && a.backgroundColor === b.backgroundColor && a.cursor === b.cursor) warnings.push({ rule: "disabled-looks-enabled", el: label(el), detail: "disabled button renders exactly like its enabled sibling" });
    }

    // 10. macOS conventions: trailing ellipsis when a button opens more input; at most one help button.
    for (const el of cs0) {
      const hp = el.getAttribute("aria-haspopup");
      const opens = hp === "dialog" || (el.getAttribute("aria-controls") && document.getElementById(el.getAttribute("aria-controls"))?.matches("dialog,[role=dialog]"));
      const name = accName(el);
      if (opens && visibleText(el) && !/(…|\.\.\.)$/.test(name.trim())) warnings.push({ rule: "opens-view-no-ellipsis", el: label(el), detail: "button opens a dialog/window but its label has no trailing ellipsis (macOS convention: more input needed)" });
    }
    const helps = cs0.filter((el) => /^(help|yard[ıi]m)$/i.test(accName(el).replace(/[?\s]/g, "")) || accName(el).trim() === "?");
    if (helps.length > 1) warnings.push({ rule: "help-button-count", detail: `${helps.length} help buttons in one view (HIG macOS: at most one per window)`, els: helps.map(label) });

    // 11. Busy buttons must block a second press (iOS activity indicator pattern).
    for (const el of cs0) if (el.getAttribute("aria-busy") === "true" && !el.disabled && el.getAttribute("aria-disabled") !== "true") warnings.push({ rule: "busy-not-blocked", el: label(el), detail: "aria-busy button is still clickable — set aria-disabled=\"true\" (keeps focus) while busy" });

    return { failures, warnings, controls: cs0.length };
  }

  // Style snapshot used by the runner for press / hover / focus comparisons.
  window.__btnSnap = (i) => {
    const el = document.querySelector(`[data-btnprobe="${i}"]`); if (!el) return null;
    const c = getComputedStyle(el);
    return { backgroundColor: c.backgroundColor, color: c.color, transform: c.transform, opacity: c.opacity, boxShadow: c.boxShadow, filter: c.filter, borderColor: c.borderTopColor, outline: `${c.outlineStyle} ${c.outlineWidth} ${c.outlineColor}`, textDecoration: c.textDecorationLine, disabled: !!el.disabled || el.getAttribute("aria-disabled") === "true", name: accName(el).slice(0, 28) };
  };
  window.__btnActive = () => { const a = document.activeElement; return a && a.hasAttribute("data-btnprobe") ? +a.getAttribute("data-btnprobe") : null; };

  window.buttonsProbe = (opts = {}) => {
    const out = check(opts);
    out.pass = out.failures.length === 0;
    out.summary = `BUTTONS GATE (live) ${innerWidth}×${innerHeight}: ${out.controls} button(s), ${out.failures.length} failure(s), ${out.warnings.length} warning(s) → ${out.pass ? "PASS" : "FAIL"}`;
    return out;
  };
  return "buttonsProbe ready";
})();
