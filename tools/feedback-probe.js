// FEEDBACK GATE (live part) — evaluate in the page (devtools, Playwright page.evaluate, or the
// Claude browser javascript tool). The HIG Feedback page is CRITICAL for this skill.
//
// Usage (in the page):
//   <paste this file>                               // defines window.feedbackProbe
//   feedbackProbe()                                 // current state of the page
//   feedbackProbe({ reducedMotion: true })          // after emulating prefers-reduced-motion: reduce
// tools/run-feedback-probe.mjs runs light, dark and reduced motion at 375 and 1440 px, and can click
// elements first (--click "<selector>") so toasts, alerts and errors are on screen when probed.
// Result: { pass, mode, failures[], warnings[], surfaces } — pass must be true in every mode.
//
// What it checks (each rule maps to the HIG Feedback page or to the WCAG rule named):
//   feedback-not-announced   visible message surfaces that assistive tech is never told about (HIG: accessible feedback; ARIA 4.1.3)
//   feedback-no-text         a status/alert surface with no text alternative (HIG: more than one channel)
//   invalid-without-message  aria-invalid / :user-invalid control with no associated message (HIG: help people correct; WCAG 3.3.1)
//   color-only-status        a bare coloured dot/chip with no text alternative (WCAG 1.4.1)
//   status-text-contrast     text in a feedback surface below 4.5:1 (3:1 large) — WCAG 1.4.3
//   interruptions            alertdialog open at first paint = FAIL; more than one alert, or more than one non-alert modal, at once = FAIL
//                            (HIG Feedback: alerts lose impact; HIG Modality: one modal at a time, only an alert may sit on top of one)
//   spinner-unnamed          endless spinner with no name or status text (HIG: reach people not watching the screen)   [WARN]
//   disabled-no-reason       disabled/aria-disabled primary control with no associated reason (HIG: show why)         [WARN]
//   feedback-motion          infinite animation in a feedback surface under reduced motion                           [WARN]

(() => {
  const SURFACE_CLASS = /(^|[\s_-])(toast|snackbar|alert|notice|notification|flash|banner|callout|form-?error|field-?error|error-?(message|text)|helper-?error|validation|fb-(status|inline|toast|alert))([\s_-]|$)/i;
  const SURFACE_ATTR = "[data-sonner-toast],[data-radix-toast-viewport] li,[data-toast],[data-notification]";
  const LIVE = "[role=status],[role=alert],[role=alertdialog],[role=log],[aria-live=polite],[aria-live=assertive]";
  const MODAL = "dialog[open],[role=alertdialog],[role=dialog][aria-modal=true],[aria-modal=true]";

  // ---- colour helpers (canvas normalises rgb/hsl/oklch/color() to sRGB bytes) ----
  const cv = document.createElement("canvas"); cv.width = cv.height = 1;
  const cx = cv.getContext("2d", { willReadFrequently: true });
  const rgba = (css) => {
    if (!css || css === "transparent") return [0, 0, 0, 0];
    cx.clearRect(0, 0, 1, 1); cx.fillStyle = "#000"; cx.fillStyle = css; cx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = cx.getImageData(0, 0, 1, 1).data;
    return [r, g, b, a / 255];
  };
  const over = (top, bottom) => { const a = top[3]; return [0, 1, 2].map((i) => top[i] * a + bottom[i] * (1 - a)).concat(1); };
  const lum = ([r, g, b]) => { const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  const hsv = ([r, g, b]) => { r /= 255; g /= 255; b /= 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn; let h = 0;
    if (d) h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; return { h: (h * 60 + 360) % 360, s: mx ? d / mx : 0, v: mx }; };

  const visible = (el) => {
    const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none" && +cs.opacity !== 0;
  };
  const label = (el) => {
    const id = el.id ? `#${el.id}` : "";
    const cls = typeof el.className === "string" && el.className ? "." + el.className.trim().split(/\s+/).slice(0, 4).join(".") : "";
    const txt = (el.getAttribute("aria-label") || el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 32);
    return `${el.tagName.toLowerCase()}${id}${cls}${txt ? ` "${txt}"` : ""}`;
  };
  const text = (el) => (el.textContent || "").trim();
  const hasName = (el) => !!(el.getAttribute("aria-label") || el.getAttribute("aria-labelledby") || el.getAttribute("title") || text(el));
  const large = (cs) => { const px = parseFloat(cs.fontSize), w = +cs.fontWeight || 400; return px >= 24 || (px >= 18.66 && w >= 700); };
  const canvasColor = () => {
    for (const n of [document.body, document.documentElement]) { const c = rgba(getComputedStyle(n).backgroundColor); if (c[3] > 0) return over(c, [255, 255, 255, 1]); }
    return [255, 255, 255, 1];
  };
  const effectiveBg = (el) => {
    const chain = [];
    for (let n = el; n; n = n.parentElement) chain.unshift(n);
    let bg = canvasColor();
    for (const n of chain) { const c = rgba(getComputedStyle(n).backgroundColor); if (c[3] > 0) bg = over(c, bg); }
    return bg;
  };
  const opacityChain = (el) => { let o = 1; for (let n = el; n; n = n.parentElement) o *= +getComputedStyle(n).opacity; return o; };

  // A message is announced when it is (inside) a live region or dialog, or when a control points at it
  // (aria-describedby / aria-errormessage / aria-labelledby), which is how inline field errors are read.
  const referenced = (el) => !!el.id && !!document.querySelector(`[aria-describedby~="${CSS.escape(el.id)}"],[aria-errormessage~="${CSS.escape(el.id)}"],[aria-labelledby~="${CSS.escape(el.id)}"]`);
  const announced = (el) => !!(el.closest(LIVE) || el.closest("[aria-hidden=true]") || el.closest("dialog,[role=dialog]") || referenced(el) || [...el.querySelectorAll("[id]")].some(referenced));

  function check(opts) {
    const failures = [], warnings = [];

    // Collect message surfaces: by role, live region, marker class or known toast attributes.
    const surfaces = new Set();
    for (const el of document.querySelectorAll(`${LIVE},${SURFACE_ATTR},body *`)) {
      if (!visible(el)) continue;
      if (el.matches(LIVE) || el.matches(SURFACE_ATTR) || (typeof el.className === "string" && SURFACE_CLASS.test(el.className))) surfaces.add(el);
    }
    // Keep only outermost surfaces that carry text, plus role surfaces even when empty (to catch empty alerts).
    const list = [...surfaces].filter((el) => ![...surfaces].some((o) => o !== el && o.contains(el) && (o.matches(LIVE) || text(o))));

    // 1. Announced to assistive tech (HIG: accessible feedback; ARIA 4.1.3 status messages).
    for (const el of list) {
      if (text(el) && !announced(el) && !el.matches(LIVE)) failures.push({ rule: "feedback-not-announced", el: label(el), detail: "visible message with no role=status/alert/aria-live (or aria-describedby target) — screen-reader users never hear it" });
    }

    // 2. A role=status/alert surface needs text (more than one channel; colour/icon alone is not enough).
    for (const el of document.querySelectorAll("[role=status],[role=alert],[aria-live=polite],[aria-live=assertive]")) {
      if (!visible(el) || el.getAttribute("aria-hidden") === "true") continue;
      if (!hasName(el) && !el.querySelector("img[alt]:not([alt=''])")) failures.push({ rule: "feedback-no-text", el: label(el), detail: "live/status surface is visible but has no text or aria-label" });
    }

    // 3. Invalid controls need an associated, visible message (HIG: help people correct; WCAG 3.3.1).
    for (const el of document.querySelectorAll("input,select,textarea")) {
      if (!visible(el)) continue;
      const invalid = el.getAttribute("aria-invalid") === "true" || (el.matches(":user-invalid"));
      if (!invalid) continue;
      const ids = [(el.getAttribute("aria-errormessage") || ""), (el.getAttribute("aria-describedby") || "")].join(" ").split(/\s+/).filter(Boolean);
      const msg = ids.map((id) => document.getElementById(id)).find((n) => n && text(n) && visible(n));
      const sibling = el.parentElement && [...el.parentElement.querySelectorAll("*")].some((n) => n !== el && !n.contains(el) && SURFACE_CLASS.test(n.className?.toString?.() ?? "") && text(n));
      if (!msg && !sibling) failures.push({ rule: "invalid-without-message", el: label(el), detail: "control is invalid but no visible message is associated (aria-describedby / aria-errormessage)" });
    }

    // 4. Colour-only status: a bare dot/chip in a status hue with no text alternative (WCAG 1.4.1).
    for (const el of document.querySelectorAll("body *")) {
      if (!visible(el) || el.children.length || text(el) || hasName(el) || el.getAttribute("aria-hidden") === "true") continue;
      const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
      if (r.width > 20 || r.height > 20 || r.width < 4) continue;
      const rounded = parseFloat(cs.borderTopLeftRadius) >= Math.min(r.width, r.height) / 2 - 0.5;
      const c = rgba(cs.backgroundColor);
      if (!rounded || c[3] < 0.5) continue;
      const { h, s, v } = hsv(c);
      const statusHue = s > 0.4 && v > 0.35 && (h < 50 || h > 330 || (h > 80 && h < 160));   // red/orange/yellow/green
      if (!statusHue) continue;
      const parentText = (el.parentElement?.textContent || "").trim();
      const labelled = el.closest("[aria-label],[title]") || el.parentElement?.querySelector(".sr-only,[class*=visually-hidden]");
      if (!parentText && !labelled) failures.push({ rule: "color-only-status", el: label(el), detail: "coloured dot with no text, aria-label or hidden text next to it — colour is the only channel" });
    }

    // 5. Contrast of message text (WCAG 1.4.3; system hues on white fail as text — keep hue on the icon).
    for (const s of list) {
      const walker = document.createTreeWalker(s, NodeFilter.SHOW_TEXT);
      const seen = new Set();
      for (let t = walker.nextNode(); t; t = walker.nextNode()) {
        const el = t.parentElement;
        if (!t.textContent.trim() || seen.has(el) || !visible(el)) continue;
        if (el.closest("[aria-hidden=true]")) continue;   // decorative/redundant icon glyph: the text carries the message
        seen.add(el);
        const cs = getComputedStyle(el);
        const bg = effectiveBg(el);
        const fg0 = rgba(cs.color); fg0[3] *= opacityChain(el);
        const fg = over(fg0, bg);
        const need = large(cs) ? 3 : 4.5;
        const c = ratio(fg, bg);
        if (c < need) failures.push({ rule: "status-text-contrast", el: label(el), detail: `${c.toFixed(2)}:1 (< ${need}) — keep the hue on the icon, message text in the label colour` });
      }
    }

    // 6. Interruptions (HIG: alerts disrupt by design; overuse robs them of impact).
    const modals = [...document.querySelectorAll(MODAL)].filter((m) => visible(m));
    const alertdialogs = modals.filter((m) => m.matches("[role=alertdialog]"));
    if (!opts.afterInteraction && alertdialogs.length) failures.push({ rule: "interruptions", detail: `${alertdialogs.length} alertdialog(s) open at first paint — an unprompted interruption`, els: alertdialogs.map(label) });
    const plainModals = modals.filter((m) => !m.matches("[role=alertdialog]"));
    if (alertdialogs.length > 1) failures.push({ rule: "interruptions", detail: `${alertdialogs.length} alerts visible at once (> 1)`, els: alertdialogs.map(label) });
    if (plainModals.length > 1) failures.push({ rule: "interruptions", detail: `${plainModals.length} non-alert modal views visible at once (> 1); only an alert may appear on top of a modal`, els: plainModals.map(label) });
    if (!opts.afterInteraction && modals.length && !alertdialogs.length) warnings.push({ rule: "interruptions", detail: "a modal dialog is open at first paint — justify (e.g. consent) or open it after an action", els: modals.map(label) });

    // 7. Endless spinners need a name (HIG: feedback must reach people who are not watching).
    for (const el of document.querySelectorAll("[role=progressbar],body *")) {
      if (!visible(el) || el.getAttribute("aria-hidden") === "true") continue;
      const running = el.getAnimations?.().some((a) => a.effect?.getComputedTiming?.().iterations === Infinity && /spin|rotate|loading|spinner/i.test(a.animationName || a.id || ""));
      const isBar = el.getAttribute("role") === "progressbar";
      if (!running && !isBar) continue;
      const near = el.closest("[aria-live],[role=status],[aria-busy=true],button,a,[role=button]");
      const named = hasName(el) || (near && text(near)) || el.closest("[role=status]");
      if (!named) warnings.push({ rule: "spinner-unnamed", el: label(el), detail: "endless spinner / progressbar with no accessible name or status text" });
    }

    // 8. Disabled primary controls need a reason (HIG: show people when a command can't be carried out, and why).
    for (const b of document.querySelectorAll("button[type=submit],input[type=submit],[role=button]")) {
      if (!visible(b)) continue;
      const dis = b.disabled || b.getAttribute("aria-disabled") === "true";
      if (!dis) continue;
      const described = (b.getAttribute("aria-describedby") || "").split(/\s+/).map((id) => document.getElementById(id)).some((n) => n && text(n));
      const nearReason = b.closest("form,[role=form],section,div")?.querySelector(".fb-reason,[data-reason]");
      if (!described && !b.title && !nearReason) warnings.push({ rule: "disabled-no-reason", el: label(b), detail: "disabled submit/primary control with no associated reason (aria-describedby → .fb-reason)" });
    }

    // 9. Reduced motion: no endless animation inside feedback surfaces.
    if (opts.reducedMotion) for (const s of list) for (const el of [s, ...s.querySelectorAll("*")]) {
      if (el.getAnimations?.().some((a) => a.effect?.getComputedTiming?.().iterations === Infinity && a.playState === "running"))
        warnings.push({ rule: "feedback-motion", el: label(el), detail: "endless animation in a feedback surface under prefers-reduced-motion: reduce" });
    }

    return { failures, warnings, surfaces: list.length };
  }

  window.feedbackProbe = (opts = {}) => {
    const out = check(opts);
    out.mode = opts.reducedMotion ? "reduced-motion" : matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    out.pass = out.failures.length === 0;
    out.summary = `FEEDBACK GATE (live) ${innerWidth}×${innerHeight} ${out.mode}: ${out.surfaces} feedback surface(s), ${out.failures.length} failure(s), ${out.warnings.length} warning(s) → ${out.pass ? "PASS" : "FAIL"}`;
    return out;
  };
  return "feedbackProbe ready";
})();
