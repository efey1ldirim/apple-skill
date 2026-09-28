#!/usr/bin/env node
// FEEDBACK GATE runner — loads a URL and runs tools/feedback-probe.js in light, dark and reduced
// motion, at a compact and a regular width. Needs Playwright (uses installed Google Chrome if
// Playwright's browsers aren't downloaded).
//
// Usage:
//   node tools/run-feedback-probe.mjs http://localhost:5173/settings
//   node tools/run-feedback-probe.mjs <url> --click "#save" --click "button.delete"
//     (--click runs before probing, so toasts, errors and alerts are on screen; the probe then
//      runs with afterInteraction: true)
//   node tools/run-feedback-probe.mjs <url> --fill "#email=not-an-email" --click "#submit"
// Exit code 1 if any mode fails.

import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const argv = process.argv.slice(2);
const url = argv[0];
if (!url || url.startsWith("--")) { console.error('usage: node tools/run-feedback-probe.mjs <url> [--click "<selector>"] [--fill "<selector>=<value>"]'); process.exit(2); }
const steps = [];
for (let i = 1; i < argv.length; i++) {
  if (argv[i] === "--click") steps.push({ click: argv[++i] });
  else if (argv[i] === "--fill") { const [sel, ...v] = argv[++i].split("="); steps.push({ fill: sel, value: v.join("=") }); }
}

let chromium;
for (const base of [process.cwd() + "/", import.meta.url]) {
  try { ({ chromium } = createRequire(base)("playwright")); break; } catch {}
}
if (!chromium) { console.error("Playwright not found — install it in the project: npm i -D playwright"); process.exit(2); }

const probe = await readFile(join(dirname(fileURLToPath(import.meta.url)), "feedback-probe.js"), "utf8");
const VIEWPORTS = [[375, 812], [1440, 900]];
const MODES = [
  { name: "light", scheme: "light", motion: "no-preference" },
  { name: "dark", scheme: "dark", motion: "no-preference" },
  { name: "reduced-motion", scheme: "light", motion: "reduce", opts: { reducedMotion: true } },
];

let browser;
try { browser = await chromium.launch(); } catch { browser = await chromium.launch({ channel: "chrome" }); }
let failed = 0;
for (const [width, height] of VIEWPORTS) for (const m of MODES) {
  const page = await browser.newPage({ viewport: { width, height } });
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: m.scheme }, { name: "prefers-reduced-motion", value: m.motion }] });
  await page.goto(url, { waitUntil: "networkidle" });
  for (const s of steps) {
    try {
      if (s.click) await page.click(s.click, { timeout: 3000 });
      if (s.fill) await page.fill(s.fill, s.value, { timeout: 3000 });
      await page.waitForTimeout(150);
    } catch (e) { console.log(`  ! step failed: ${JSON.stringify(s)} (${e.message.split("\n")[0]})`); }
  }
  await page.evaluate(probe);
  const r = await page.evaluate((o) => window.feedbackProbe(o), { ...(m.opts ?? {}), afterInteraction: steps.length > 0 });
  console.log(r.summary.replace(/ (light|dark|reduced-motion):/, ` ${m.name}:`));
  for (const f of r.failures) console.log("  ✗", JSON.stringify(f));
  for (const w of r.warnings.slice(0, 10)) console.log("  !", JSON.stringify(w));
  if (!r.pass) failed++;
  await page.close();
}
await browser.close();
console.log(failed ? `\nFEEDBACK GATE: FAIL in ${failed} run(s).` : "\nFEEDBACK GATE: PASS in every mode.");
process.exit(failed ? 1 : 0);
