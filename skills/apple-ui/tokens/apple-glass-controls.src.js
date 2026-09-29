// SOURCE of tokens/apple-glass-controls.js — `node tools/build-glass-controls.mjs` copies the numbers from
// apple-glass-controls.json into the DATA line and writes the shipped file. Edit here or in the JSON, never in the output.
//
// Liquid Glass slider thumb + segmented control for the web. Motion curves and geometry are MEASURED from the two
// demo videos on Apple's "Adopting Liquid Glass" page (see references/liquid-glass/controls-motion.md).
// Rendering = an opaque rest pill that crossfades into a glass lens: a veil gradient + the control's own content
// drawn INSIDE the lens and pushed through an SVG feDisplacementMap (thin bevel refraction, chromatic dispersion).
// Refraction is verified in Chromium; other engines get the same lens without the displacement (options.refraction).
// ES module; also window.GlassControls (see apple-glass-controls.global.js).
const DATA = /*DATA*/ {} /*END*/;

const S = DATA.slider, G = DATA.segmented, FR = DATA.frame;
const reduce = () => typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const isChromium = () => typeof navigator !== "undefined" && /Chrome|Chromium|Edg\//.test(navigator.userAgent) && !/OPR\//.test(navigator.userAgent) || false;

/** piecewise-linear sample of a per-frame table at time t (seconds); holds the last value */
export function sample(table, t) {
  const f = t / FR, i = Math.floor(f);
  if (f <= 0) return table[0];
  if (i >= table.length - 1) return table[table.length - 1];
  return lerp(table[i], table[i + 1], f - i);
}
/** piecewise-linear over [[x,y],...] */
function pw(pts, x) {
  if (x <= pts[0][0]) return pts[0][1];
  for (let i = 1; i < pts.length; i++) if (x <= pts[i][0]) return lerp(pts[i - 1][1], pts[i][1], (x - pts[i - 1][0]) / (pts[i][0] - pts[i - 1][0]));
  return pts[pts.length - 1][1];
}

/** press progress p(t), t seconds since finger-down (0 = rest pill, 1 = pressed lens) */
export function sliderPress(t) { return sample(S.press.samples, t); }
export function sliderRelease(t) { return sample(S.release.samples, t); }
export function segPress(t) { return sample(G.press.samples, t); }
export function segRelease(t) { const s = G.release.samples; return sample(s, t) / s[0]; }
/** lens size of the slider thumb for progress p and aspect asp (area law: w*h = area) */
export function sliderLensSize(p, asp) {
  const a = lerp(S.lens.areaRest, S.lens.area, p), r = lerp(S.lens.aspectRest, asp, p);
  return { w: Math.sqrt(a * r), h: Math.sqrt(a / r) };
}
export const aspectFromAccel = (a) => S.lens.aspectLaw.base + S.lens.aspectLaw.gain * Math.tanh(a / S.lens.aspectLaw.accelScale);

// ---------- SVG displacement lens (Chromium) ----------
let defs = null, uid = 0;
function ensureDefs() {
  if (defs) return defs;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "0"); svg.setAttribute("height", "0"); svg.setAttribute("aria-hidden", "true");
  svg.style.cssText = "position:absolute;width:0;height:0;pointer-events:none";
  defs = document.createElementNS("http://www.w3.org/2000/svg", "defs"); svg.appendChild(defs);
  document.body.appendChild(svg); return defs;
}
const mapCache = new Map();
/** inward-displacement map: R,G = 0.5 + 0.5 * (-outwardNormal * D / Dmax); D = Dmax outside/at the rim falling to 0 at `edge` inside */
function mapURL(w, h, r, dmax, edge) {
  const q = 2, W0 = Math.max(q, Math.round(w / q) * q), H0 = Math.max(q, Math.round(h / q) * q), R0 = Math.min(Math.round(r), Math.min(W0, H0) / 2);
  const key = `${W0}x${H0}x${R0}x${edge.toFixed(1)}`;
  if (mapCache.has(key)) return mapCache.get(key);
  const K = 3, W = Math.ceil(W0 * K), H = Math.ceil(H0 * K), cv = document.createElement("canvas"); cv.width = W; cv.height = H;
  const ctx = cv.getContext("2d"), im = ctx.createImageData(W, H), d = im.data, hx = W0 / 2 - R0, hy = H0 / 2 - R0;
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
    const x = (i + .5) / K - W0 / 2, y = (j + .5) / K - H0 / 2, qx = Math.abs(x) - hx, qy = Math.abs(y) - hy;
    const ox = Math.max(qx, 0), oy = Math.max(qy, 0), len = Math.hypot(ox, oy), dep = -(len + Math.min(Math.max(qx, qy), 0) - R0);
    let nx = 0, ny = 0;
    if (len > 0) { nx = Math.sign(x) * ox / len; ny = Math.sign(y) * oy / len; } else if (qx > qy) nx = Math.sign(x); else ny = Math.sign(y);
    const D = dep < 0 ? 1 : dep < edge ? 1 - dep / edge : 0, k = (j * W + i) * 4;
    d[k] = Math.round((.5 + .5 * (-nx * D)) * 255); d[k + 1] = Math.round((.5 + .5 * (-ny * D)) * 255); d[k + 2] = 128; d[k + 3] = 255;
  }
  ctx.putImageData(im, 0, 0);
  const url = cv.toDataURL("image/png"); if (mapCache.size > 120) mapCache.clear(); mapCache.set(key, url); return url;
}
class LensFilter {
  constructor() {
    this.id = "gcf" + (++uid); const NS = "http://www.w3.org/2000/svg";
    const f = document.createElementNS(NS, "filter"); f.id = this.id; f.setAttribute("filterUnits", "userSpaceOnUse"); f.setAttribute("color-interpolation-filters", "sRGB");
    const mk = (n, a) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); return e; };
    const mat = (c) => { const v = new Array(20).fill(0); v[c * 5 + c] = 1; v[18] = 1; return v.join(" "); };
    this.img = mk("feImage", { result: "map", preserveAspectRatio: "none" }); f.appendChild(this.img);
    this.ch = [0, 1, 2].map((c) => { f.appendChild(mk("feColorMatrix", { in: "SourceGraphic", type: "matrix", values: mat(c), result: "c" + c })); const dm = mk("feDisplacementMap", { in: "c" + c, in2: "map", xChannelSelector: "R", yChannelSelector: "G", result: "d" + c }); f.appendChild(dm); return dm; });
    f.appendChild(mk("feBlend", { in: "d0", in2: "d1", mode: "screen", result: "rg" })); f.appendChild(mk("feBlend", { in: "rg", in2: "d2", mode: "screen", result: "all" }));
    this.blur = mk("feGaussianBlur", { in: "all", stdDeviation: "0" }); f.appendChild(this.blur);
    ensureDefs().appendChild(f); this.f = f; this.last = "";
  }
  set(w, h, r, dmax, edge, disp, blur) {
    const sig = [Math.round(w / 2), Math.round(h / 2), Math.round(r), dmax.toFixed(2), edge.toFixed(2), blur.toFixed(2)].join();
    if (sig === this.last) return; this.last = sig;
    const f = this.f; f.setAttribute("x", 0); f.setAttribute("y", 0); f.setAttribute("width", w); f.setAttribute("height", h);
    this.img.setAttribute("x", 0); this.img.setAttribute("y", 0); this.img.setAttribute("width", w); this.img.setAttribute("height", h);
    this.img.setAttribute("href", mapURL(w, h, r, dmax, edge));
    this.ch.forEach((dm, i) => dm.setAttribute("scale", 2 * dmax * disp[i]));
    this.blur.setAttribute("stdDeviation", blur);
  }
  dispose() { this.f.remove(); }
}

const el = (cls, parent, css) => { const d = document.createElement("div"); if (cls) d.className = cls; if (css) Object.assign(d.style, css); if (parent) parent.appendChild(d); return d; };
const px = (n) => n + "px";

// ---------- shared: a fixed-step clock so the demo and the checker run the same code ----------
class Clock {
  constructor(step) { this.step = step; this.raf = 0; this.last = 0; this.manual = false; }
  start() { if (this.raf || this.manual) return; const loop = (ts) => { const dt = this.last ? Math.min(0.05, (ts - this.last) / 1000) : 0; this.last = ts; this.step(dt); this.raf = requestAnimationFrame(loop); }; this.raf = requestAnimationFrame(loop); }
  stop() { cancelAnimationFrame(this.raf); this.raf = 0; this.last = 0; }
}
function spring(state, target, omega, zeta, dt) {           // semi-implicit, sub-stepped
  const n = Math.max(1, Math.ceil(dt / 0.004)), h = dt / n;
  for (let i = 0; i < n; i++) { const a = -omega * omega * (state.x - target) - 2 * zeta * omega * state.v; state.v += a * h; state.x += state.v * h; }
}

// =====================================================================================================
// SLIDER
// =====================================================================================================
export class GlassSlider {
  /** host: an empty element. options: {value 0..1, min, max, width, scale, refraction:'auto'|'on'|'off', onInput(v)} */
  constructor(host, o = {}) {
    this.o = Object.assign({ value: 0.5, width: 476.5, scale: 1, refraction: "auto", onInput: null }, o);
    const k = this.o.scale, TH = S.stage.trackHeight * k;
    this.k = k; this.host = host; host.classList.add("gc-slider"); host.style.cssText += `;position:relative;touch-action:none;user-select:none;width:${this.o.width * k}px;height:${100 * k}px;cursor:default`;
    this.track = el("gc-track", host, { position: "absolute", left: 0, top: px(50 * k - TH / 2), width: "100%", height: px(TH), borderRadius: px(TH / 2), background: S.stage.trackColor });
    this.fill = el("gc-fill", host, { position: "absolute", left: 0, top: px(50 * k - TH / 2), height: px(TH), borderRadius: `${TH / 2}px 0 0 ${TH / 2}px`, background: S.stage.fillColor });
    this.thumb = el("gc-thumb", host, { position: "absolute", left: 0, top: 0, width: "100%", height: "100%", pointerEvents: "none" });
    this.filter = null; this.useRefraction = this.o.refraction === "on" || (this.o.refraction === "auto" && isChromium());
    this.value = clamp(this.o.value); this.reduced = reduce();
    const T = S.track; this.c0 = T.thumbInsetLeft * k; this.c1 = this.o.width * k - T.thumbInsetRight * k;   // thumb-centre travel
    this.cx = this.c0 + (this.c1 - this.c0) * this.value; this.cxPrev = this.cx; this.vs = 0; this.vsPrev = 0;
    this.phase = "rest"; this.t = 0; this.p = 0; this.p0 = 0; this.asp = S.lens.aspectStatic; this.down = false;
    host.setAttribute("role", "slider"); host.tabIndex = 0; host.setAttribute("aria-valuemin", 0); host.setAttribute("aria-valuemax", 1); this._aria();
    host.addEventListener("keydown", (e) => { const d = { ArrowRight: .02, ArrowUp: .02, ArrowLeft: -.02, ArrowDown: -.02 }[e.key]; if (d) { e.preventDefault(); this.setValue(this.value + d); this.o.onInput && this.o.onInput(this.value); } });
    this.clock = new Clock((dt) => this.advance(dt));
    this._bind(); this.render(); this.clock.start();
  }
  _bind() {
    const h = this.host, X = (e) => e.clientX - h.getBoundingClientRect().left;
    h.addEventListener("pointerdown", (e) => { h.setPointerCapture(e.pointerId); this.press(X(e)); });
    h.addEventListener("pointermove", (e) => { if (this.down) this.moveTo(X(e)); });
    const up = () => { if (this.down) this.release(); }; h.addEventListener("pointerup", up); h.addEventListener("pointercancel", up);
  }
  _aria() { this.host.setAttribute("aria-valuenow", this.value.toFixed(3)); }
  press(x) { this.down = true; this.phase = "press"; this.t = 0; this.moveTo(x); }
  moveTo(x) { this.value = clamp((x - this.c0) / (this.c1 - this.c0)); this.cx = this.c0 + (this.c1 - this.c0) * this.value; this._aria(); this.o.onInput && this.o.onInput(this.value); }
  release() { this.down = false; this.phase = "release"; this.t = 0; this.p0 = this.p; }
  setValue(v) { this.value = clamp(v); this.cx = this.c0 + (this.c1 - this.c0) * this.value; this._aria(); this.render(); }
  /** advance the simulation by dt seconds (the clock calls this; the checker calls it directly with clock.manual = true) */
  advance(dt) {
    if (this.reduced) { this.p = 0; this.render(); return; }
    this.t += dt;
    if (this.phase === "press") { this.p = sliderPress(this.t); if (this.t >= (S.press.samples.length - 1) * FR) this.phase = "hold"; }
    else if (this.phase === "release") { this.p = this.p0 * sliderRelease(this.t); if (this.t > S.release.frames * FR) { this.p = 0; this.phase = "rest"; } }
    if (dt > 0) {   // lens shape sloshes with the thumb's acceleration (measured law)
      const A = S.lens.aspectLaw, v = (this.cx - this.cxPrev) / dt / this.k; this.cxPrev = this.cx;
      this.vs += (v - this.vs) * (1 - Math.exp(-dt / A.velocityTau)); const a = (this.vs - this.vsPrev) / dt; this.vsPrev = this.vs;
      this.asp += (aspectFromAccel(a) - this.asp) * (1 - Math.exp(-dt / A.responseTau));
    }
    this.render();
  }
  render() { this.draw({ cx: this.cx, p: this.p, asp: this.asp, rel: this.phase === "release" }); }
  /** paint one frame: cx = thumb centre (px), p = press progress, asp = lens aspect */
  draw({ cx, p, asp, value, rel }) {
    const k = this.k, m = S.lens.material, cy = 50 * k - (0.75 + 0.75 * p) * k, sz = p > 0 ? sliderLensSize(p, asp) : { w: S.rest.width, h: S.rest.height };
    const w = sz.w * k, h = sz.h * k, L = cx - w / 2, T = cy - h / 2, rad = h / 2, TH = S.stage.trackHeight * k;
    const tip = ((value != null ? value : (cx - this.c0) / (this.c1 - this.c0))) * this.host.clientWidth; this.fill.style.width = px(tip);
    const t = this.thumb; t.textContent = "";
    const box = { left: px(L), top: px(T), width: px(w), height: px(h), borderRadius: px(rad) };
    const CF = S.crossfade, restFill = pw(rel ? CF.releaseFill : CF.pressFill, p), restRim = rel ? restFill * 0.6 : pw(CF.pressRim, p);
    const lensA = clamp((p - 0.1) / 0.5), restSh = 1 - lensA;
    const blur = pw(CF.blur, p) * k, dk = smooth(0.1, 0.6, p);
    const restShadow = S.rest.shadow.replace(/rgba\(0,0,0,([.\d]+)\)/g, (_, a) => `rgba(0,0,0,${(+a * restSh).toFixed(3)})`);
    if (restSh > 0.01) el("", t, { ...box, position: "absolute", boxShadow: restShadow });
    if (p > 0) {
      const sh = m.shadow; el("", t, { ...box, position: "absolute", boxShadow: `0 ${sh.dy * k}px ${sh.blur * k}px ${sh.spread * k}px rgba(${sh.color},${(sh.alpha * lensA).toFixed(3)})` });
      const lens = el("gc-lens", t, { ...box, position: "absolute", overflow: "hidden", clipPath: `inset(0 round ${rad}px)` });
      const top = 205 - 8 * smooth(0, 0.6, p), bandTop = 50 * k - TH / 2 - T, bandBot = bandTop + TH;
      el("", lens, { position: "absolute", inset: 0, background: `linear-gradient(to bottom, rgb(${top},${top},${top}) 0px, rgb(${m.veil.ramp2},${m.veil.ramp2},${m.veil.ramp2}) ${m.veil.topRamp * k}px, rgb(${m.veil.above},${m.veil.above},${m.veil.above}) ${bandTop}px, rgb(${m.veil.below},${m.veil.below},${m.veil.below}) ${bandBot}px, rgb(${m.veil.below},${m.veil.below},${m.veil.below}) 100%)` });
      el("", lens, { position: "absolute", left: px(-L), top: px(bandTop), width: px(this.host.clientWidth || this.o.width * k), height: px(TH), background: m.band });
      el("", lens, { position: "absolute", left: px(-L), top: px(bandTop), width: px(tip), height: px(TH), background: m.fillInside, borderRadius: `0 ${TH / 2}px ${TH / 2}px 0` });
      if (this.useRefraction && dk > 0.01) {
        this.filter = this.filter || new LensFilter(); const r = m.refraction;
        this.filter.set(w, h, rad, r.dmax * k * dk, Math.max(1, r.edgeWidth * k * dk), r.dispersion, (r.blur * k) + blur); lens.style.filter = `url(#${this.filter.id})`;
      } else if (blur > 0.05) lens.style.filter = `blur(${blur}px)`;
      const rimA = 0.85 * smooth(0.1, 0.6, p);
      if (rimA > 0.01 && m.glow) { const gl = el("", t, { ...box, position: "absolute", opacity: rimA * m.glow.alpha, padding: px(m.glow.width * k), background: `conic-gradient(from 0deg at 50% 50%, ${m.glow.conic})`, clipPath: `inset(0 round ${rad}px)`, filter: `blur(${m.glow.blur * k}px)`, webkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", webkitMaskComposite: "xor", maskComposite: "exclude" }); gl.style.pointerEvents = "none"; }
      if (rimA > 0.01) { const rim = el("", t, { ...box, position: "absolute", opacity: rimA, padding: px(m.rim.width * k), background: `conic-gradient(from 0deg at 50% 50%, ${m.rim.conic})`, webkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", webkitMaskComposite: "xor", maskComposite: "exclude" }); rim.style.pointerEvents = "none"; }
    }
    if (restFill > 0.005) el("", t, { ...box, position: "absolute", background: `rgba(217,217,217,${restFill.toFixed(3)})` });
    if (restRim > 0.005) el("", t, { ...box, position: "absolute", boxShadow: `0 0 0 ${k}px rgba(255,255,255,${(0.95 * restRim).toFixed(3)}) inset` });
    this.geom = { cx, cy, w, h, p, asp, tip };
  }
  destroy() { this.clock.stop(); this.filter && this.filter.dispose(); this.host.textContent = ""; }
}

// =====================================================================================================
// SEGMENTED CONTROL
// =====================================================================================================
export class GlassSegmented {
  /** host: empty element. options: {items:['For You','Library'], value:0, scale, refraction, onChange(i)} */
  constructor(host, o = {}) {
    this.o = Object.assign({ items: ["For You", "Library"], value: 0, scale: 1, refraction: "auto", onChange: null }, o);
    const k = this.o.scale; this.k = k; this.host = host; this.n = this.o.items.length;
    const tw = G.track.width * k, th = G.track.height * k; this.tw = tw; this.th = th; this.pad = 34 * k;
    host.classList.add("gc-seg"); host.style.cssText += `;position:relative;touch-action:none;user-select:none;width:${tw}px;height:${th}px;cursor:default;margin:${this.pad}px 0`;
    // segment geometry: measured centres/pill widths for the two-segment control; equal split for other counts
    const gap = G.segments.gap, eq = (G.track.width - 2 * G.segments.inset) / this.n; this.seg = this.o.items.map((_, i) => {
      const pw_ = this.n === 2 ? G.segments.pillWidths[i] : eq - gap, c = this.n === 2 ? G.segments.centers[i] : G.segments.inset + eq * (i + 0.5);
      return { c: c * k, pw: pw_ * k };
    });
    this.track = el("gc-track", host, { position: "absolute", inset: 0, borderRadius: px(th / 2), background: G.stage.trackColor, boxShadow: "inset 0 1px 0 rgba(0,0,0,.03)" });
    this.base = el("gc-labels", host, { position: "absolute", inset: 0, pointerEvents: "none" });
    this.items = this.o.items; this.items.forEach((t, i) => this._label(this.base, t, this.seg[i].c, G.label.unselected));
    this.layer = el("gc-lens-layer", host, { position: "absolute", inset: 0, pointerEvents: "none", overflow: "visible" });
    this.filter = null; this.useRefraction = this.o.refraction === "on" || (this.o.refraction === "auto" && isChromium());
    this.reduced = reduce(); this.index = clamp(this.o.value, 0, this.n - 1) | 0; this.target = this.index; this.st = { x: this.seg[this.index].c, v: 0 };
    this.phase = "rest"; this.t = 0; this.p = 0; this.p0 = 0; this.glass = 0; this.down = false; this.delay = 0; this.tapTo = null; this.from = this.index; this.tp = 1e9;
    this.clock = new Clock((dt) => this.advance(dt)); this._bind(); this.render(); this.clock.start();
  }
  _label(parent, text, cx, color) {
    const k = this.k, d = el("gc-label", parent, { position: "absolute", left: px(cx), top: px(this.th / 2), transform: "translate(-50%,-50%)", whiteSpace: "nowrap", font: `${G.label.weight} ${G.label.fontSizeApprox * k}px/1 -apple-system,"SF Pro Text","Helvetica Neue",Arial,"Liberation Sans",sans-serif`, color, letterSpacing: "-0.01em" });
    d.textContent = text; return d;
  }
  _bind() {
    const h = this.host, X = (e) => e.clientX - h.getBoundingClientRect().left;
    h.addEventListener("pointerdown", (e) => { h.setPointerCapture(e.pointerId); this.press(X(e)); });
    h.addEventListener("pointermove", (e) => { if (this.down) this.drag(X(e)); });
    const up = (e) => { if (this.down) this.release(X(e)); }; h.addEventListener("pointerup", up); h.addEventListener("pointercancel", up);
  }
  _nearest(x) { let b = 0, d = 1e9; this.seg.forEach((s, i) => { const dd = Math.abs(s.c - x); if (dd < d) { d = dd; b = i; } }); return b; }
  press(x) { this.down = true; this.phase = "press"; this.t = 0; this.moved = false; const i = this._nearest(x); this.tapTo = i; this.dragX = null; this.delay = i !== this.index ? G.transit.delay : 0; this.from = this.index; this.tp = 0; this.dragging = false; this.pressX = x; }
  drag(x) { if (Math.abs(x - this.pressX) > 6 * this.k) this.dragging = true; if (this.dragging) this.dragX = clamp(x, this.seg[0].c, this.seg[this.n - 1].c); }
  release(x) { const i = this.dragging ? this._nearest(this.st.x) : this.tapTo; this.down = false; this.dragging = false; this.dragX = null; this.select(i, true); }
  select(i, viaRelease) {
    const changed = i !== this.index; this.target = i; this.index = i;
    if (viaRelease) { this.phase = "settle"; this.t = 0; this.p0 = this.p; this.dist = Math.abs(this.seg[i].c - this.st.x); } else this.phase = "rest";
    if (changed) this.o.onChange && this.o.onChange(i);
  }
  advance(dt) {
    if (this.reduced) { this.st.x = this.seg[this.target != null ? this.index : 0].c; this.p = 0; this.glass = 0; this.render(); return; }
    this.t += dt;
    if (this.phase === "press") { this.p = segPress(this.t); if (this.t > (G.press.samples.length - 1) * FR) this.p = 1; }
    else if (this.phase === "settle") {       // finger is up but the lens is still travelling: it droops slowly, then shrinks once ~70 % of the way there
      const R = G.release, rem = this.dist > 1e-3 ? Math.abs(this.seg[this.index].c - this.st.x) / this.dist : 0;
      this.p = Math.max(R.droopFloor, this.p0 - R.droopPerSecond * this.t);
      if (rem <= R.startAtRemaining) { this.phase = "release"; this.t = 0; this.p0 = this.p; }
    }
    else if (this.phase === "release") { this.p = this.p0 * segRelease(this.t); if (this.t > G.release.frames * FR) { this.p = 0; this.phase = "rest"; } }
    // glass on at p>=0.8 while growing, off at p<0.5 while shrinking (hysteresis measured in the video)
    if ((this.phase === "press" || this.phase === "settle") && this.p >= 0.8) this.glass = 1; if (this.phase === "release" && this.p < 0.5) this.glass = 0; if (this.phase === "rest") this.glass = 0;
    this.tp += dt; let tgt = this.seg[this.index].c, om = G.transit.omega, ze = G.transit.zeta;
    if (this.down) { if (this.dragX != null) { tgt = this.dragX; om = 10; ze = 0.8; } else tgt = this.seg[this.tapTo].c; }
    if (this.dragX == null && this.tp < this.delay) tgt = this.seg[this.from].c;     // a tap on another segment starts moving 0.29 s after finger-down
    spring(this.st, tgt, om, ze, dt);
    this.render();
  }
  render() { this.draw({ cx: this.st.x, p: this.p, glass: this.glass }); }
  draw({ cx, p, glass }) {
    const k = this.k, th = this.th, cy = th / 2, sg = this.seg;
    let pillW = sg[sg.length - 1].pw; if (cx <= sg[0].c) pillW = sg[0].pw; else for (let i = 1; i < sg.length; i++) if (cx <= sg[i].c) { pillW = lerp(sg[i - 1].pw, sg[i].pw, smooth(G.pill.widthSwitch[0], G.pill.widthSwitch[1], (cx - sg[i - 1].c) / (sg[i].c - sg[i - 1].c))); break; }
    const pillH = G.pill.height * k;
    const w = pillW + G.lens.growWidth * k * p, h = pillH + G.lens.growHeight * k * p, L = cx - w / 2, T = cy - h / 2, rad = h / 2, m = 1 + (G.lens.magnification - 1) * p;
    const layer = this.layer; layer.textContent = "";
    const box = { left: px(L), top: px(T), width: px(w), height: px(h), borderRadius: px(rad) }, mat = G.lens.material;
    const g = glass, rest = 1 - g;
    el("", layer, { ...box, position: "absolute", background: G.pill.fill, boxShadow: `0 ${3 * k}px ${10 * k}px rgba(0,0,0,${(0.05 * rest + 0.10 * g).toFixed(3)})` });
    const lens = el("gc-lens", layer, { ...box, position: "absolute", overflow: "hidden", clipPath: `inset(0 round ${rad}px)` });
    if (g > 0) {
      const stops = mat.veil.map(([f, v]) => `rgb(${v},${v},${v}) ${(f * 100).toFixed(0)}%`).join(", ");
      el("", lens, { position: "absolute", inset: 0, opacity: g, background: `linear-gradient(to bottom, ${stops})` });
    }
    const scene = el("", lens, { position: "absolute", left: 0, top: 0, width: 0, height: 0, transform: `translate(${w / 2}px,${h / 2}px) scale(${m}) translate(${-cx}px,${-cy}px)` });
    this.items.forEach((t, i) => this._label(scene, t, this.seg[i].c, G.label.selected));
    if (g > 0.5 && this.useRefraction) {
      this.filter = this.filter || new LensFilter(); const r = mat.refraction;
      this.filter.set(w, h, rad, r.dmax * k, r.edgeWidth * k, r.dispersion, r.blur * k); lens.style.filter = `url(#${this.filter.id})`;
    }
    el("", layer, { ...box, position: "absolute", boxShadow: `0 0 0 ${1.5 * k * (0.6 + 0.4 * g)}px rgba(255,255,255,${(0.9 * rest + 0.95 * g).toFixed(3)}) inset` });
    this.geom = { cx, cy, w, h, p, glass, m };
  }
  destroy() { this.clock.stop(); this.filter && this.filter.dispose(); this.host.textContent = ""; }
}

export const GlassControls = { data: DATA, GlassSlider, GlassSegmented, sliderPress, sliderRelease, segPress, segRelease, sliderLensSize, aspectFromAccel, slider: (h, o) => new GlassSlider(h, o), segmented: (h, o) => new GlassSegmented(h, o) };
export default GlassControls;
if (typeof window !== "undefined") window.GlassControls = GlassControls;
