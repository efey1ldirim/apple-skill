#!/usr/bin/env node
// MATERIALS GATE runner — loads a URL and runs tools/materials-probe.js in every appearance the HIG
// says materials must respond to: light, dark, Reduce Transparency, Increase Contrast; at a compact
// and a regular width. Needs Playwright (uses installed Google Chrome if Playwright's browsers
// aren't downloaded). Reduce Transparency is emulated through the Chrome DevTools Protocol.
//
// Usage:
//   node tools/run-materials-probe.mjs http://localhost:5173/settings
// Exit code 1 if any mode fails.

import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const url = process.argv[2];
if (!url) { console.error("usage: node tools/run-materials-probe.mjs <url>"); process.exit(2); }

let chromium;
for (const base of [process.cwd() + "/", import.meta.url]) {
  try { ({ chromium } = createRequire(base)("playwright")); break; } catch {}
}
if (!chromium) { console.error("Playwright not found — install it in the project: npm i -D playwright"); process.exit(2); }

const probe = await readFile(join(dirname(fileURLToPath(import.meta.url)), "materials-probe.js"), "utf8");
const VIEWPORTS = [[375, 812], [1440, 900]];
const MODES = [
  { name: "light", scheme: "light", features: [] },
  { name: "dark", scheme: "dark", features: [] },
  { name: "reduce-transparency", scheme: "light", features: [{ name: "prefers-reduced-transparency", value: "reduce" }], opts: { reducedTransparency: true } },
  { name: "reduce-transparency-dark", scheme: "dark", features: [{ name: "prefers-reduced-transparency", value: "reduce" }], opts: { reducedTransparency: true } },
  { name: "increase-contrast", scheme: "light", features: [{ name: "prefers-contrast", value: "more" }], opts: { contrastMore: true } },
];

let browser;
try { browser = await chromium.launch(); } catch { browser = await chromium.launch({ channel: "chrome" }); }
let failed = 0;
for (const [width, height] of VIEWPORTS) for (const m of MODES) {
  const page = await browser.newPage({ viewport: { width, height } });
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-color-scheme", value: m.scheme }, ...m.features],
  });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(probe);
  const r = await page.evaluate((o) => window.materialsProbe(o), m.opts ?? {});
  console.log(r.summary.replace(/ (light|dark|reduce-transparency|increase-contrast):/, ` ${m.name}:`));
  for (const f of r.failures) console.log("  ✗", JSON.stringify(f));
  for (const w of r.warnings.slice(0, 10)) console.log("  !", JSON.stringify(w));
  if (!r.pass) failed++;
  await page.close();
}
await browser.close();
console.log(failed ? `\nMATERIALS GATE: FAIL in ${failed} run(s).` : "\nMATERIALS GATE: PASS in every mode.");
process.exit(failed ? 1 : 0);
