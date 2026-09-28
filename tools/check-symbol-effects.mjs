#!/usr/bin/env node
// Verifies the web symbol-effect kit against the MEASURED Apple curves.
// Loads skills/apple-ui/examples/symbol-effects/index.html in headless Chrome (Playwright), starts each
// effect, freezes every running animation at sample times and reads the rendered transform/opacity
// (getComputedStyle), then compares with tokens/apple-symbol-effects.json. Optional screenshots.
//
// Usage (Playwright must be resolvable from the cwd; falls back to system Chrome):
//   node tools/check-symbol-effects.mjs [--shots <dir>]
// Exit 1 if any effect deviates more than the tolerance (scale ±0.01, opacity ±0.02, rotate ±1°, px ±0.5).

import { createRequire } from "node:module";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { readFileSync, mkdirSync } from "node:fs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(join(process.cwd(), "noop.js"));
let chromium;
try { ({ chromium } = require("playwright")); } catch { ({ chromium } = await import("playwright")); }
const data = JSON.parse(readFileSync(join(ROOT, "skills/apple-ui/tokens/apple-symbol-effects.json"), "utf8"));
const shotsIdx = process.argv.indexOf("--shots"); const shots = shotsIdx > 0 ? process.argv[shotsIdx + 1] : null;
if (shots) mkdirSync(shots, { recursive: true });

let browser;
try { browser = await chromium.launch(); } catch { browser = await chromium.launch({ channel: "chrome" }); }
const page = await browser.newPage({ viewport: { width: 900, height: 900 }, deviceScaleFactor: 2 });
await page.goto(pathToFileURL(join(ROOT, "skills/apple-ui/examples/symbol-effects/index.html")).href);
await page.waitForFunction(() => window.SymbolEffects && document.querySelectorAll(".cell svg").length > 30);

const lerp = (ts, vs, t) => { if (t <= ts[0]) return vs[0]; for (let i = 1; i < ts.length; i++) if (t <= ts[i]) { const f = (t - ts[i - 1]) / (ts[i] - ts[i - 1]); return vs[i - 1] + f * (vs[i] - vs[i - 1]); } return vs.at(-1); };
// Sample a whole-symbol effect: call fn in page, pause at t, read matrix of the svg.
async function sample(effectCall, sel, times) {
  return page.evaluate(async ({ effectCall, sel, times }) => {
    const svg = document.querySelector(sel); const out = [];
    for (const t of times) {
      svg.getAnimations().forEach((a) => a.cancel());
      // eslint-disable-next-line no-new-func
      new Function("SE", "svg", effectCall)(window.SymbolEffects, svg);
      const anims = svg.getAnimations(); anims.forEach((a) => { a.pause(); a.currentTime = t * 1000; });
      const cs = getComputedStyle(svg); const m = new DOMMatrixReadOnly(cs.transform === "none" ? undefined : cs.transform);
      out.push({ t, sx: Math.hypot(m.a, m.b), rot: Math.atan2(m.b, m.a) * 180 / Math.PI, tx: m.e, ty: m.f, op: +cs.opacity, h: svg.getBoundingClientRect().height / Math.hypot(m.c, m.d) });
      anims.forEach((a) => a.cancel());
    }
    return out;
  }, { effectCall, sel, times });
}
const results = [];
function compare(name, got, expect, tol, key) {
  const errs = got.map((g, i) => Math.abs(g[key] - expect[i])); const max = Math.max(...errs);
  results.push({ name, max: +max.toFixed(4), tol, pass: max <= tol });
}
const E = data.effects;
const svgSel = (row, col) => `section:nth-of-type(${row}) .cell:nth-child(${col}) svg`;
// Bounce (whole symbol), Scale, Breathe, Rotate, Wiggle (px), Pulse/Variable colour (opacity on layers)
for (const [key, call] of [["bounce-up", "SE.bounce(svg,{direction:'up',byLayer:false})"], ["bounce-down", "SE.bounce(svg,{direction:'down',byLayer:false})"]]) {
  const e = E[key]; const ts = e.keyframes.t.map((t) => t + 0.001);
  const got = await sample(call, svgSel(3, 3), ts); compare(key + " scale", got, ts.map((t) => lerp(e.keyframes.t, e.keyframes.scale, t)), 0.01, "sx");
}
for (const [key, call] of [["scale-down", "SE.scale(svg,{direction:'down'})"], ["scale-up", "SE.scale(svg,{direction:'up'})"]]) {
  const e = E[key]; const ts = e.keyframes.t.map((t) => t + 0.001);
  const got = await sample(call, svgSel(4, 2), ts); compare(key + " scale", got, ts.map((t) => lerp(e.keyframes.t, e.keyframes.scale, t)), 0.01, "sx");
}
{ const e = E.breathe; const ts = e.keyframes.t.filter((_, i) => i % 3 === 0).map((t) => Math.min(t, 2.99));
  const got = await sample("SE.breathe(svg)", svgSel(10, 3), ts);
  compare("breathe scale", got, ts.map((t) => lerp(e.keyframes.t, e.keyframes.scale, t)), 0.01, "sx");
  compare("breathe opacity", got, ts.map((t) => lerp(e.keyframes.t, e.keyframes.opacity, t)), 0.02, "op"); }
{ const e = E.rotate; const ts = [0.1, 0.3, 0.5, 0.8, 1.2, 1.6, 1.95];
  const got = await sample("SE.rotate(svg)", svgSel(11, 1), ts);
  const want = ts.map((t) => { let d = lerp(e.keyframes.t, e.keyframes.degrees, t); d = ((d + 180) % 360) - 180; return d; });
  got.forEach((g) => (g.rot = ((g.rot + 180) % 360 + 360) % 360 - 180));
  compare("rotate degrees", got, want, 1, "rot"); }
{ const w = E.wiggle; const ts = w.translate.t.filter((_, i) => i % 2 === 0).map((t) => t + 0.001);
  const got = await sample("SE.wiggle(svg,{direction:'down'})", svgSel(9, 1), ts);
  const size = got[0].h; compare("wiggle translate (px)", got, ts.map((t) => lerp(w.translate.t, w.translate.offset, t) * w.translate.amplitude * size), 0.5, "ty");
  const gr = await sample("SE.wiggle(svg,{direction:'clockwise'})", svgSel(9, 2), w.rotate.t.map((t) => t + 0.001));
  compare("wiggle rotate (deg)", gr, w.rotate.t.map((t) => lerp(w.rotate.t, w.rotate.degrees, t + 0.001)), 1, "rot"); }
{ // pulse on the marked layer
  const got = await page.evaluate(() => { const svg = document.querySelector("section:nth-of-type(5) .cell:nth-child(1) svg"); const el = svg.querySelector("[data-sfx-pulse]"); const out = [];
    for (const t of [0, 0.5, 1, 1.5, 2]) { const [a] = window.SymbolEffects.pulse(svg); a.pause(); a.currentTime = Math.min(t, 1.999) * 1000; out.push({ op: +getComputedStyle(el).opacity }); a.cancel(); } return out; });
  compare("pulse opacity", got, [1, 0.75, 0.5, 0.75, 1], 0.02, "op"); }
{ // variable colour (iterative speaker waves): wave i peaks at (i+1)*step
  const v = E["variable-color"]; const got = await page.evaluate((step) => { const svg = document.querySelector("section:nth-of-type(6) .cell:nth-child(1) svg"); const waves = [...svg.children].slice(1); const out = [];
    const anims = window.SymbolEffects.variableColor(svg, { layers: waves }); for (const t of waves.map((_, i) => (i + 1) * step)) { anims.forEach((a) => { a.pause(); a.currentTime = t * 1000; }); out.push(waves.map((w) => +getComputedStyle(w).opacity)); } anims.forEach((a) => a.cancel()); return out; }, v.step);
  const peaks = got.map((row, i) => ({ op: row[i] })), lows = got.map((row, i) => ({ op: row[(i + 1) % row.length] }));
  compare("variable colour peak", peaks, peaks.map(() => 1), 0.02, "op"); compare("variable colour inactive", [{ op: got[0][got[0].length - 1] }], [v.inactiveOpacity], 0.02, "op"); }

if (shots) for (const [row, label, call, t] of [[3, "bounce-up-peak", "SE.bounce(svg,{direction:'up',byLayer:false})", 0.2], [4, "scale-down-end", "SE.scale(svg,{direction:'down'})", 0.27], [10, "breathe-peak", "SE.breathe(svg)", 1.5]]) {
  await page.evaluate(({ row, call, t }) => { const svg = document.querySelector(`section:nth-of-type(${row}) .cell:nth-child(1) svg`); new Function("SE", "svg", call)(window.SymbolEffects, svg); svg.getAnimations().forEach((a) => { a.pause(); a.currentTime = t * 1000; }); }, { row, call, t });
  await page.locator(`section:nth-of-type(${row})`).screenshot({ path: join(shots, `${label}.png`) });
}
await browser.close();
let fail = 0;
for (const r of results) { if (!r.pass) fail++; console.log(`${r.pass ? "PASS" : "FAIL"}  ${r.name.padEnd(26)} max error ${r.max} (tol ${r.tol})`); }
console.log(`\nSYMBOL EFFECTS: ${results.length - fail}/${results.length} match the measured Apple curves.`);
process.exit(fail ? 1 : 0);
