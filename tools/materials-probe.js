// MATERIALS GATE (live part) — evaluate in the page (devtools, Playwright page.evaluate, or the
// Claude browser javascript tool). The HIG Materials page is CRITICAL for this skill.
//
// Usage (in the page):
//   <paste this file>                               // defines window.materialsProbe
//   materialsProbe()                                // current appearance
//   materialsProbe({ reducedTransparency: true })   // after emulating prefers-reduced-transparency: reduce
//   materialsProbe({ contrastMore: true })          // after emulating prefers-contrast: more
// tools/run-materials-probe.mjs runs every mode (light, dark, reduce transparency, increase contrast).
// Result: { pass, mode, failures[], warnings[], surfaces } — pass must be true in every mode.

(() => {
  const FUNCTIONAL_SEL = 'dialog,[popover],[role=dialog],[role=alertdialog],[role=menu],[role=listbox],[role=tooltip],[role=toolbar],[role=tablist],[role=navigation],[role=banner],[role=contentinfo],[role=complementary],nav,header,footer,aside';
  const MEDIA_SEL = "img,video,canvas,picture,svg image";

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
  const backdrop = (el) => { const cs = getComputedStyle(el); const v = cs.backdropFilter || cs.webkitBackdropFilter; return v && v !== "none" ? v : null; };
  const has = (el, re) => typeof el.className === "string" && re.test(el.className);
  const isGlass = (el) => has(el, /(^|\s)glass(-clear)?(\s|$)/) || el.dataset.material === "glass";
  const isStandard = (el) => has(el, /(^|\s)(material-(ultrathin|thin|regular|thick)|veil)(\s|$)/) || el.dataset.material === "standard";
  const looksGlassy = (el) => /inset/.test(getComputedStyle(el).boxShadow);

  // An absolutely positioned control laid over an image/video/canvas or a background-image.
  const overMedia = (el) => {
    for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
      if (getComputedStyle(n).position !== "absolute" || !n.parentElement) continue;
      const host = n.parentElement;
      if (host.querySelector(MEDIA_SEL) || getComputedStyle(host).backgroundImage !== "none") return true;
    }
    return false;
  };
  // Functional layer = pinned/overlay/landmark chrome, or controls laid over media.
  const functional = (el) => {
    for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
      const p = getComputedStyle(n).position;
      if (p === "fixed" || p === "sticky") return true;
      if (n.matches(FUNCTIONAL_SEL)) return true;
    }
    return overMedia(el);
  };

  const canvasColor = () => {
    for (const n of [document.body, document.documentElement]) { const c = rgba(getComputedStyle(n).backgroundColor); if (c[3] > 0) return over(c, [255, 255, 255, 1]); }
    return [255, 255, 255, 1];
  };

  // Stack of backgrounds from the surface down to (and including) the text's own element.
  const layersBetween = (surface, el) => {
    const chain = [];
    for (let n = el; n; n = n.parentElement) { chain.unshift(n); if (n === surface) break; }
    return chain.map((n) => rgba(getComputedStyle(n).backgroundColor)).filter((c) => c[3] > 0);
  };
  const opacityChain = (el, stop) => { let o = 1; for (let n = el; n && n !== stop.parentElement; n = n.parentElement) o *= +getComputedStyle(n).opacity; return o; };
  const disabled = (el) => el.closest("[disabled],[aria-disabled=true],[inert]");
  const large = (cs) => { const px = parseFloat(cs.fontSize), w = +cs.fontWeight || 400; return px >= 24 || (px >= 18.66 && w >= 700); };

  function check(opts) {
    const failures = [], warnings = [];
    const all = [...document.querySelectorAll("body *")].filter((el) => backdrop(el) && visible(el));
    const outer = all.filter((el) => !all.some((o) => o !== el && o.contains(el)));
    const page = canvasColor();

    // 1. Layer discipline (HIG: never Liquid Glass in the content layer; standard materials there).
    for (const el of all) {
      const fn = functional(el), glass = isGlass(el), std = isStandard(el);
      if (glass && !fn) failures.push({ rule: "glass-in-content-layer", el: label(el), detail: "Liquid Glass on in-flow content → use .material-* or make it a floating control" });
      else if (!glass && !std && !fn && looksGlassy(el)) failures.push({ rule: "glass-in-content-layer", el: label(el), detail: "glass-looking blur (edge highlight) on in-flow content" });
      else if (!glass && !std) warnings.push({ rule: "untyped-material", el: label(el), detail: `raw backdrop-filter (${backdrop(el)}) — declare the family: .glass (functional) or .material-* (content)` });
    }

    // 2. Sparingly (HIG). CONV threshold: > 4 glass surfaces in view = warn, > 8 = fail.
    const vh = innerHeight, vw = innerWidth;
    const inView = outer.filter((el) => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < vh && r.right > 0 && r.left < vw; });
    const glassInView = inView.filter((el) => isGlass(el) || (functional(el) && !isStandard(el)));
    if (glassInView.length > 8) failures.push({ rule: "glass-sparingly", detail: `${glassInView.length} glass surfaces in view (> 8)`, els: glassInView.slice(0, 10).map(label) });
    else if (glassInView.length > 4) warnings.push({ rule: "glass-sparingly", detail: `${glassInView.length} glass surfaces in view — group related controls into one glass container`, els: glassInView.slice(0, 10).map(label) });

    // 3. Legibility on materials (HIG: vibrant colours; thicker for text). Text is composited over
    //    the surface tint over (a) the page canvas → FAIL below 4.5/3, (b) black and white → WARN below 3.
    for (const s of outer) {
      // Over media the backdrop is the photo/video, not the canvas: rule 4 (35 % dim) covers it.
      if (overMedia(s) && !opts.reducedTransparency) continue;
      const walker = document.createTreeWalker(s, NodeFilter.SHOW_TEXT);
      const seen = new Set();
      for (let t = walker.nextNode(); t; t = walker.nextNode()) {
        const el = t.parentElement;
        if (!t.textContent.trim() || seen.has(el) || !visible(el) || disabled(el)) continue;
        seen.add(el);
        const cs = getComputedStyle(el);
        const layers = layersBetween(s, el);
        const fg0 = rgba(cs.color); fg0[3] *= opacityChain(el, s);
        const onto = (base) => { let bg = base; for (const l of layers) bg = over(l, bg); return [over(fg0, bg), bg]; };
        const need = large(cs) ? 3 : 4.5;
        const [fgP, bgP] = onto(page);
        const cP = ratio(fgP, bgP);
        if (cP < need) failures.push({ rule: "material-text-contrast", el: label(el), detail: `${cP.toFixed(2)}:1 over the page canvas (< ${need})` });
        else {
          const worst = Math.min(...[[0, 0, 0, 1], [255, 255, 255, 1]].map((b) => { const [f, g] = onto(b); return ratio(f, g); }));
          if (worst < 3) warnings.push({ rule: "material-text-worst-case", el: label(el), detail: `${worst.toFixed(2)}:1 when dark/bright content scrolls under — use a thicker material or the primary label` });
        }
      }
    }

    // 4. Clear glass needs a 35 % dim over bright media (HIG).
    for (const el of all.filter((e) => has(e, /(^|\s)glass-clear(\s|$)/))) {
      const scope = el.parentElement;
      if (!scope?.querySelector(".material-dim") && !el.closest(".material-dim"))
        warnings.push({ rule: "clear-glass-dim", el: label(el), detail: "no .material-dim (rgb(0 0 0 / .35)) behind clear glass — required when the media is bright" });
    }

    // 5. Reduce Transparency (runner emulates it): nothing may stay translucent. A global rule that
    //    only removes the blur is not enough — a see-through tint without blur is even less legible.
    if (opts.reducedTransparency) {
      for (const el of all) {
        const a = rgba(getComputedStyle(el).backgroundColor)[3];
        failures.push({ rule: "reduce-transparency", el: label(el), detail: `still blurred (${backdrop(el)}, tint alpha ${a.toFixed(2)}) → opaque fallback required` });
      }
      const MARKED = /(^|\s)(glass(-clear)?|material-(ultrathin|thin|regular|thick))(\s|$)|backdrop-blur|backdrop-filter/;
      for (const el of document.querySelectorAll("body *")) {
        if (all.includes(el) || !visible(el) || !(has(el, MARKED) || /backdrop/.test(el.getAttribute("style") || ""))) continue;
        const a = rgba(getComputedStyle(el).backgroundColor)[3];
        if (a > 0 && a < 0.9) failures.push({ rule: "reduce-transparency", el: label(el), detail: `blur removed but tint alpha ${a.toFixed(2)} is still see-through → make it opaque` });
      }
    }

    // 6. Increase Contrast (runner emulates it): materials get more opaque or an edge.
    if (opts.contrastMore) for (const el of outer) {
      const cs = getComputedStyle(el), a = rgba(cs.backgroundColor)[3];
      const edged = parseFloat(cs.outlineWidth) >= 1 && cs.outlineStyle !== "none" || parseFloat(cs.borderTopWidth) >= 1;
      if (a < 0.7 && !edged) warnings.push({ rule: "increase-contrast", el: label(el), detail: `tint alpha ${a.toFixed(2)} and no border under prefers-contrast: more` });
    }

    // 7. Opaque full-screen overlays (HIG visionOS/watchOS: prefer translucency, keep context).
    for (const el of document.querySelectorAll("body *")) {
      const cs = getComputedStyle(el);
      if (cs.position !== "fixed" || !visible(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.width * r.height < vw * vh * 0.9) continue;
      const a = rgba(cs.backgroundColor)[3];
      // Only an overlay if other content sits underneath it (an app-shell root is not an overlay).
      const beneath = document.elementsFromPoint(vw / 2, vh / 2).some((n) => !el.contains(n) && !n.contains(el));
      if (a >= 0.95 && !opts.reducedTransparency && beneath)
        warnings.push({ rule: "opaque-overlay", el: label(el), detail: "full-screen overlay is opaque — prefer a translucent veil (.veil) so people keep context" });
    }

    return { failures, warnings, surfaces: all.length };
  }

  window.materialsProbe = (opts = {}) => {
    const out = check(opts);
    out.mode = opts.reducedTransparency ? "reduce-transparency" : opts.contrastMore ? "increase-contrast" : matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    out.pass = out.failures.length === 0;
    out.summary = `MATERIALS GATE (live) ${innerWidth}×${innerHeight} ${out.mode}: ${out.surfaces} material surface(s), ${out.failures.length} failure(s), ${out.warnings.length} warning(s) → ${out.pass ? "PASS" : "FAIL"}`;
    return out;
  };
  return "materialsProbe ready";
})();
