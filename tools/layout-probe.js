// LAYOUT GATE (live part) — paste/evaluate in the page (browser devtools, Playwright
// page.evaluate, or the Claude browser javascript tool). The HIG Layout page is CRITICAL for this
// skill: run this at every required width before calling a layout done.
//
// Usage (in the page):
//   <paste this file>                       // defines window.layoutProbe
//   layoutProbe()                           // current viewport
//   layoutProbe({ textScale: 2 })           // also re-checks with root font-size at 200%
//   layoutProbe({ pointer: true })          // desktop-only UI: 28px targets instead of 44px
// Required widths: 320, 375, 768, 1024, 1440 (and 667×375 landscape-phone for compact height).
// Result: { pass, viewport, failures[], warnings[] } — pass must be true at every width.

(() => {
  const INTERACTIVE = 'a[href],button,input:not([type=hidden]),select,textarea,summary,[role=button],[role=link],[role=tab],[role=switch],[role=checkbox],[role=radio],[role=menuitem],[tabindex]:not([tabindex="-1"])';

  const visible = (el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none" && +cs.opacity !== 0;
  };
  const label = (el) => {
    const id = el.id ? `#${el.id}` : "";
    const cls = typeof el.className === "string" && el.className ? "." + el.className.trim().split(/\s+/).slice(0, 3).join(".") : "";
    const txt = (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 40);
    return `${el.tagName.toLowerCase()}${id}${cls}${txt ? ` "${txt}"` : ""}`;
  };
  const inlineTextLink = (el) =>
    el.tagName === "A" && getComputedStyle(el).display === "inline" &&
    el.parentElement && /^(P|LI|SPAN|TD|DD|LABEL)$/.test(el.parentElement.tagName);

  function check(opts) {
    const failures = [], warnings = [];
    const vw = document.documentElement.clientWidth, vh = window.innerHeight;
    const minTarget = opts.pointer ? 28 : 44;

    // 1. Horizontal overflow (HIG: adapt to every size; FN: page never scrolls sideways).
    const sw = document.documentElement.scrollWidth;
    if (sw > vw + 1) {
      const culprits = [...document.querySelectorAll("body *")]
        .filter((el) => visible(el) && el.getBoundingClientRect().right > vw + 1)
        .filter((el) => !el.closest("[data-scroll-x], .overflow-x-auto, .overflow-x-scroll"))
        .slice(0, 8).map((el) => `${label(el)} right=${Math.round(el.getBoundingClientRect().right)}`);
      failures.push({ rule: "no-horizontal-overflow", detail: `scrollWidth ${sw} > viewport ${vw}`, culprits });
    }

    // 2. Target size (HIG Accessibility: 44×44 touch, 28×28 pointer; inline text links exempt).
    const targets = [...document.querySelectorAll(INTERACTIVE)].filter(visible);
    for (const el of targets) {
      if (inlineTextLink(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.width < minTarget - 0.5 || r.height < minTarget - 0.5) {
        const hard = r.width < 24 || r.height < 24; // below the WCAG 2.5.8 floor
        (hard ? failures : warnings).push({ rule: "target-size", detail: `${Math.round(r.width)}×${Math.round(r.height)} < ${minTarget}`, el: label(el) });
      }
    }

    // 3. Spacing between adjacent targets (HIG: ~12 bezeled / ~24 bare; floor 8px).
    const rects = targets.filter((el) => !inlineTextLink(el)).map((el) => [el, el.getBoundingClientRect()]);
    for (let i = 0; i < rects.length; i++) for (let j = i + 1; j < rects.length; j++) {
      const [a, ra] = rects[i], [b, rb] = rects[j];
      if (a.contains(b) || b.contains(a)) continue;
      const dx = Math.max(0, Math.max(ra.left, rb.left) - Math.min(ra.right, rb.right));
      const dy = Math.max(0, Math.max(ra.top, rb.top) - Math.min(ra.bottom, rb.bottom));
      const sameRow = dy === 0 && dx < 8, sameCol = dx === 0 && dy < 8;
      const ix = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left);
      const iy = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
      const overlap = ix > 0.5 && iy > 0.5;
      if (overlap) {
        // A fixed/sticky bar over scrolling content is fine if the content can scroll clear of it.
        const pinned = (el) => { for (let n = el; n && n !== document.body; n = n.parentElement) { const p = getComputedStyle(n).position; if (p === "fixed" || p === "sticky") return n; } return null; };
        const pa = pinned(a), pb = pinned(b);
        if (!pa !== !pb) {
          const bar = (pa || pb).getBoundingClientRect(), r = pa ? rb : ra;
          const docH = document.documentElement.scrollHeight;
          const absTop = r.top + scrollY, absBottom = r.bottom + scrollY;
          const clearBelow = bar.bottom >= vh - 1 && docH - absBottom >= bar.height - 1;
          const clearAbove = bar.top <= 1 && absTop >= bar.height - 1;
          if (clearBelow || clearAbove) continue;
          failures.push({ rule: "content-under-bar", detail: "content can never scroll clear of the fixed bar — add padding equal to the bar height", el: `${label(a)} ↔ ${label(b)}` });
          continue;
        }
        failures.push({ rule: "targets-overlap", el: `${label(a)} ↔ ${label(b)}` });
      }
      else if (sameRow || sameCol) warnings.push({ rule: "target-spacing<8px", el: `${label(a)} ↔ ${label(b)}`, gap: Math.round(dx || dy) });
    }

    // 4. Safe areas (HIG: respect safe areas). Fixed/sticky edge bars need viewport-fit=cover.
    const meta = document.querySelector('meta[name="viewport"]')?.content || "";
    if (/user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0)?\b/.test(meta))
      failures.push({ rule: "zoom-blocked", detail: meta });
    const edgeBars = [...document.querySelectorAll("body *")].filter((el) => {
      const p = getComputedStyle(el).position;
      if (p !== "fixed" && p !== "sticky") return false;
      const r = el.getBoundingClientRect();
      return visible(el) && (r.bottom >= vh - 1 || r.top <= 1) && r.width >= vw * 0.6;
    });
    if (edgeBars.length && !/viewport-fit\s*=\s*cover/.test(meta))
      warnings.push({ rule: "safe-area", detail: "edge bars present but viewport-fit=cover missing → env(safe-area-inset-*) is 0", bars: edgeBars.slice(0, 4).map(label) });

    // 5. Clipped text (HIG: containers grow with text; nothing cropped or overlapping).
    for (const el of document.querySelectorAll("body *")) {
      if (!visible(el) || !el.childNodes.length) continue;
      const hasText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
      if (!hasText) continue;
      const cs = getComputedStyle(el);
      const clipsY = /(hidden|clip)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 2 && !/-webkit-box/.test(cs.display);
      const clipsX = /(hidden|clip)/.test(cs.overflowX) && el.scrollWidth > el.clientWidth + 2 && cs.textOverflow !== "ellipsis";
      if (clipsY || clipsX) failures.push({ rule: "text-clipped", el: label(el), detail: clipsY ? "vertical" : "horizontal" });
      if (parseFloat(cs.fontSize) < 11) warnings.push({ rule: "text<11px", el: label(el), size: cs.fontSize });
    }

    // 6. Viewport-height traps: element sized exactly to the large viewport while visual viewport is shorter.
    const vv = window.visualViewport?.height ?? vh;
    for (const el of document.querySelectorAll("body > *, main, [role=main]")) {
      const h = el.getBoundingClientRect().height;
      if (vv < vh - 1 && Math.abs(h - vh) < 1 && getComputedStyle(el).overflowY !== "visible")
        warnings.push({ rule: "100vh-suspect", el: label(el), detail: "height == layout viewport; use 100dvh" });
    }

    return { failures, warnings, viewport: `${vw}×${vh}` };
  }

  window.layoutProbe = (opts = {}) => {
    const out = check(opts);
    if (opts.textScale) {
      const root = document.documentElement, prev = root.style.fontSize;
      root.style.fontSize = `${opts.textScale * 100}%`;
      const scaled = check(opts);
      root.style.fontSize = prev;
      // Only text-size-dependent findings; skip ones already reported at 100%.
      const seen = new Set(out.failures.map((f) => f.rule + (f.el || "")));
      const SCALE = new Set(["no-horizontal-overflow", "text-clipped", "targets-overlap", "content-under-bar"]);
      for (const f of scaled.failures)
        if (SCALE.has(f.rule) && !seen.has(f.rule + (f.el || ""))) out.failures.push({ ...f, at: `text ${opts.textScale * 100}%` });
    }
    out.pass = out.failures.length === 0;
    out.summary = `LAYOUT GATE (live) ${out.viewport}: ${out.failures.length} failure(s), ${out.warnings.length} warning(s) → ${out.pass ? "PASS" : "FAIL"}`;
    return out;
  };
  return "layoutProbe ready";
})();
