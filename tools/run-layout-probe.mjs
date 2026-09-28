#!/usr/bin/env node
// LAYOUT GATE runner — loads a URL at every required viewport (+ 200% text) and runs
// tools/layout-probe.js. Needs Playwright (project dependency or `npm i -D playwright`); uses the
// installed Google Chrome if Playwright's own browsers aren't downloaded.
//
// Usage:
//   node tools/run-layout-probe.mjs http://localhost:5173/settings [--pointer] [--dark]
// Exit code 1 if any viewport fails.

import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const url = process.argv[2];
if (!url) { console.error("usage: node tools/run-layout-probe.mjs <url> [--pointer] [--dark]"); process.exit(2); }
const pointer = process.argv.includes("--pointer");
const dark = process.argv.includes("--dark");

// Resolve playwright from the current project first, then from this repo.
let chromium;
for (const base of [process.cwd() + "/", import.meta.url]) {
  try { ({ chromium } = createRequire(base)("playwright")); break; } catch {}
}
if (!chromium) { console.error("Playwright not found — install it in the project: npm i -D playwright"); process.exit(2); }

const probe = await readFile(join(dirname(fileURLToPath(import.meta.url)), "layout-probe.js"), "utf8");
// Size classes: compact/regular width × compact/regular height (HIG Layout).
const VIEWPORTS = [[320, 640], [375, 812], [667, 375], [768, 1024], [1024, 768], [1440, 900]];

let browser;
try { browser = await chromium.launch(); } catch { browser = await chromium.launch({ channel: "chrome" }); }
let failed = 0;
for (const [width, height] of VIEWPORTS) {
  const page = await browser.newPage({ viewport: { width, height }, colorScheme: dark ? "dark" : "light", hasTouch: !pointer });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(probe);
  const r = await page.evaluate((o) => window.layoutProbe(o), { textScale: 2, pointer });
  console.log(r.summary);
  for (const f of r.failures) console.log("  ✗", JSON.stringify(f));
  for (const w of r.warnings.slice(0, 10)) console.log("  !", JSON.stringify(w));
  if (!r.pass) failed++;
  await page.close();
}
await browser.close();
console.log(failed ? `\nLAYOUT GATE: FAIL at ${failed} viewport(s).` : "\nLAYOUT GATE: PASS at all viewports.");
process.exit(failed ? 1 : 0);
