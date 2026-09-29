#!/usr/bin/env node
// Verifies the glass slider + segmented control kit against per-frame numbers MEASURED from Apple's two demo
// videos (tools/fixtures/glass-controls/measured.json - numbers only, no Apple frames).
// Loads the demo page in headless Chrome (Playwright), drives the controls with the fixed-step clock
// (clock.manual, dt = 1/30 s = one video frame), records the rendered lens geometry and compares.
//
//   node tools/check-glass-controls.mjs
// Exit 1 if any check exceeds its tolerance. Tolerances are the kit's honest accuracy (video px / 2 = CSS px).

import { createRequire } from "node:module";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { readFileSync } from "node:fs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(join(process.cwd(), "noop.js"));
let chromium;
try { ({ chromium } = require("playwright")); } catch { try { ({ chromium } = require("playwright-core")); } catch { ({ chromium } = await import("playwright")); } }
const M = JSON.parse(readFileSync(join(ROOT, "tools/fixtures/glass-controls/measured.json"), "utf8"));
const D = JSON.parse(readFileSync(join(ROOT, "skills/apple-ui/tokens/apple-glass-controls.json"), "utf8"));
let browser; try { browser = await chromium.launch(); } catch { browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium", args: ["--no-sandbox"] }); }
const page = await browser.newPage({ viewport: { width: 900, height: 1000 }, deviceScaleFactor: 2 });
page.on("pageerror", (e) => { console.error("page error:", e.message); process.exitCode = 1; });
await page.goto(pathToFileURL(join(ROOT, "skills/apple-ui/examples/glass-controls/index.html")).href);
await page.waitForFunction(() => window.__gc && window.GlassControls);

let fails = 0;
const rmse = (a) => Math.sqrt(a.reduce((s, x) => s + x * x, 0) / a.length);
function check(name, value, tol, unit = "", op = "<=") {
  const ok = op === "<=" ? value <= tol : value >= tol; if (!ok) fails++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name.padEnd(58)} ${value.toFixed(3)}${unit}  (${op} ${tol}${unit})`);
}

// ---------- pure curves ----------
const curves = await page.evaluate(() => {
  const G = window.GlassControls, S = G.data.slider, out = { press: [], rel: [] };
  S.press.samples.forEach((v, i) => out.press.push(G.sliderPress(i / 30) - v));
  S.release.samples.forEach((v, i) => out.rel.push(G.sliderRelease(i / 30) - v));
  out.seg = G.data.segmented.press.samples.map((v, i) => G.segPress(i / 30) - v);
  return out;
});
check("slider press table reproduces its samples (max)", Math.max(...curves.press.map(Math.abs)), 1e-6);
check("slider release table reproduces its samples (max)", Math.max(...curves.rel.map(Math.abs)), 1e-6);
check("segmented press table reproduces its samples (max)", Math.max(...curves.seg.map(Math.abs)), 1e-6);

// ---------- slider: replay the measured thumb path, compare the lens ----------
const sl = await page.evaluate((ext) => {
  const s = window.__gc.slider; s.clock.manual = true; s.clock.stop(); const dt = 1 / 30, rows = [];
  const X = (f) => (ext[f][1] + ext[f][2]) / 4 - 28.5, f0 = 10, f1 = 163;   // finger-down so that the first advance lands on video frame 10 (p = 0.10); finger-up at frame 163
  s.setValue(((X(f0) - s.c0) / (s.c1 - s.c0))); s.advance(dt); s.press(X(f0));
  for (let f = f0; f < 230; f++) {
    if (f < f1) s.moveTo(X(f)); if (f === f1) s.release(); s.advance(dt);
    const g = s.geom, r = s.thumb.querySelector(".gc-lens"), b = r && r.getBoundingClientRect(), h = s.host.getBoundingClientRect();
    rows.push({ f, w: g.w, h: g.h, p: g.p, asp: g.asp, dom: b ? [b.width, b.height] : null });
  }
  // rest geometry
  s.advance(1); const g = s.geom; rows.rest = [g.w, g.h];
  return { rows, rest: [g.w, g.h] };
}, M.slider);
const at = (f) => M.slider[f]; const wh = (f) => [(at(f)[2] - at(f)[1]) / 2, (at(f)[4] - at(f)[3]) / 2];
const drag = sl.rows.filter((r) => r.f >= 16 && r.f <= 160), dw = [], dh = [], asp = [];
drag.forEach((r) => { const [w, h] = wh(r.f); dw.push(r.w - w); dh.push(r.h - h); asp.push([r.asp, w / h]); });
const mean = (a) => a.reduce((s, x) => s + x, 0) / a.length, ma = mean(asp.map((a) => a[0])), mb = mean(asp.map((a) => a[1]));
const corr = asp.reduce((s, [a, b]) => s + (a - ma) * (b - mb), 0) / Math.sqrt(asp.reduce((s, [a]) => s + (a - ma) ** 2, 0) * asp.reduce((s, [, b]) => s + (b - mb) ** 2, 0));
check("slider drag (frames 16-160): lens width rmse", rmse(dw), 5, " px");
check("slider drag (frames 16-160): lens height rmse", rmse(dh), 4, " px");
check("slider drag: lens aspect correlation with the measured aspect", corr, 0.8, "", ">=");
const press = sl.rows.filter((r) => r.f >= 9 && r.f <= 15).map((r) => { const [w, h] = wh(r.f); return Math.max(Math.abs(r.w - w), Math.abs(r.h - h)); });
check("slider press-in (frames 9-15): max size error", Math.max(...press), 7, " px");
const rel = sl.rows.filter((r) => r.f >= 164 && r.f <= 173).map((r) => { const [w, h] = wh(r.f); return Math.max(Math.abs(r.w - w), Math.abs(r.h - h)); });
check("slider release (frames 164-173): max size error", Math.max(...rel), 4, " px");
check("slider rest pill width vs 58.5", Math.abs(sl.rest[0] - D.slider.rest.width), 0.5, " px");
check("slider rest pill height vs 40", Math.abs(sl.rest[1] - D.slider.rest.height), 0.5, " px");
const domErr = sl.rows.filter((r) => r.dom).map((r) => Math.max(Math.abs(r.dom[0] - r.w), Math.abs(r.dom[1] - r.h)));
check("slider: rendered lens element matches the model (max)", Math.max(...domErr), 0.6, " px");

// ---------- segmented: one tap on the other segment (video 1) ----------
const sg = await page.evaluate(() => {
  const s = window.__gc.seg; s.speed = 1; s.clock.manual = true; s.clock.stop(); const dt = 1 / 30, rows = []; s.press(s.seg[1].c);
  for (let i = 0; i < 70; i++) { if (i * dt >= 0.3 && s.down) s.release(s.seg[1].c); s.advance(dt); const g = s.geom, el = s.layer.querySelector(".gc-lens"), b = el.getBoundingClientRect(); rows.push({ i, cx: g.cx + 71, w: g.w, h: g.h, p: g.p, g: g.glass, dom: [b.width / g.m, b.height / g.m] }); }
  return rows;
});
const E = Object.fromEntries(M.segmented.map((r) => [r[0], r]));
const ex = [], ew = [], eh = [];
sg.slice(0, 40).forEach((r) => { const e = E[Math.round(r.i + 7.5)]; ex.push(r.cx - (e[1] + e[2]) / 4); ew.push(r.w - (e[2] - e[1]) / 2); eh.push(r.h - (e[4] - e[3]) / 2); });
check("segmented tap: lens centre rmse (video updates at 15 fps here)", rmse(ex), 12, " px");
check("segmented tap: lens width rmse", rmse(ew), 8, " px");
check("segmented tap: lens height rmse", rmse(eh), 8, " px");
const minH = Math.min(...sg.map((r) => r.h)), fin = sg[sg.length - 1];
check("segmented: undershoot below the rest height (video 69.5 of 75)", Math.abs(minH - 70), 3, " px");
check("segmented: settles to the Library pill width 159.5", Math.abs(fin.w - 159.5), 1, " px");
check("segmented: settles to the pill height 75", Math.abs(fin.h - 75), 1, " px");
check("segmented: settles at the Library centre 275.25 (+71)", Math.abs(fin.cx - (275.25 + 71)), 1.5, " px");
check("segmented: peak lens height (video 103)", Math.abs(Math.max(...sg.map((r) => r.h)) - 103), 2.5, " px");

await browser.close();
console.log(fails ? `\n${fails} check(s) FAILED` : "\nall checks passed");
process.exit(fails ? 1 : 0);
