#!/usr/bin/env node
// BUTTONS GATE runner — loads a URL and runs tools/buttons-probe.js at a compact (375) and a regular
// (1440) width in light and dark, then adds the checks that need real browser state:
//   press state   forces :active with the DevTools protocol and compares computed styles   (HIG: always include a press state) [FAIL]
//   hover state   forces :hover the same way                                                                                    [WARN]
//   focus ring    presses Tab through the page and checks each button shows a visible indicator (WCAG 2.4.7)                    [FAIL]
// Needs Playwright (uses installed Google Chrome if Playwright's browsers aren't downloaded).
//
// Usage:
//   node tools/run-buttons-probe.mjs http://localhost:5173/settings
//   node tools/run-buttons-probe.mjs <url> --click "#open-dialog"      (click first, e.g. to open a dialog, then probe)
// Exit code 1 if any run fails.

import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const argv = process.argv.slice(2);
const url = argv[0];
if (!url || url.startsWith("--")) { console.error('usage: node tools/run-buttons-probe.mjs <url> [--click "<selector>"]'); process.exit(2); }
const steps = [];
for (let i = 1; i < argv.length; i++) if (argv[i] === "--click") steps.push(argv[++i]);

let chromium;
for (const base of [process.cwd() + "/", import.meta.url]) { try { ({ chromium } = createRequire(base)("playwright")); break; } catch {} }
if (!chromium) { console.error("Playwright not found — install it in the project: npm i -D playwright"); process.exit(2); }

const probe = await readFile(join(dirname(fileURLToPath(import.meta.url)), "buttons-probe.js"), "utf8");
const VIEWPORTS = [[375, 812], [1440, 900]];
const MODES = [{ name: "light", scheme: "light" }, { name: "dark", scheme: "dark" }];
const VISUAL = ["backgroundColor", "color", "transform", "opacity", "boxShadow", "filter", "borderColor", "textDecoration"];
const differs = (a, b) => VISUAL.some((k) => a[k] !== b[k]);

let browser;
try { browser = await chromium.launch(); } catch { browser = await chromium.launch({ channel: "chrome" }); }
let failed = 0;
for (const [width, height] of VIEWPORTS) for (const m of MODES) {
  const page = await browser.newPage({ viewport: { width, height }, hasTouch: width <= 600 });
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: m.scheme }] });
  await page.goto(url, { waitUntil: "networkidle" });
  for (const s of steps) { try { await page.click(s, { timeout: 3000 }); await page.waitForTimeout(150); } catch (e) { console.log(`  ! step failed: ${s} (${e.message.split("\n")[0]})`); } }
  await page.evaluate(probe);
  const r = await page.evaluate(() => window.buttonsProbe({}));

  // ---- state checks (CDP forced pseudo-classes); transitions off so computed styles are final values ----
  await page.addStyleTag({ content: "*,*::before,*::after{transition:none!important;animation:none!important}" });
  await cdp.send("DOM.enable"); await cdp.send("CSS.enable");
  const { root } = await cdp.send("DOM.getDocument", { depth: 0 });
  const N = Math.min(r.controls, 40);
  const idle = [];
  for (let i = 0; i < N; i++) idle[i] = await page.evaluate((k) => window.__btnSnap(k), i);
  for (let i = 0; i < N; i++) {
    const base = idle[i]; if (!base || base.disabled) continue;
    let nodeId; try { ({ nodeId } = await cdp.send("DOM.querySelector", { nodeId: root.nodeId, selector: `[data-btnprobe="${i}"]` })); } catch { continue; }
    if (!nodeId) continue;
    for (const [state, level, rule] of [["active", "failures", "no-press-state"], ["hover", "warnings", "no-hover-state"]]) {
      if (state === "hover" && width <= 600) continue;
      await cdp.send("CSS.forcePseudoState", { nodeId, forcedPseudoClasses: [state] });
      const s = await page.evaluate((k) => window.__btnSnap(k), i);
      await cdp.send("CSS.forcePseudoState", { nodeId, forcedPseudoClasses: [] });
      if (s && !differs(base, s)) r[level].push({ rule, el: `"${base.name}"`, detail: state === "active" ? "no visible :active (press) change — HIG: always include a press state, or the button feels unresponsive" : "no visible :hover change (pointer UIs)" });
    }
  }
  // ---- focus ring (real Tab) ----
  await page.evaluate(() => document.activeElement && document.activeElement.blur());
  const seenFocus = new Set();
  for (let t = 0; t < 80; t++) {
    await page.keyboard.press("Tab");
    const idx = await page.evaluate(() => window.__btnActive());
    if (idx == null || seenFocus.has(idx) || !idle[idx] || idle[idx].disabled) continue;
    seenFocus.add(idx);
    const s = await page.evaluate((k) => window.__btnSnap(k), idx);
    const ring = (!s.outline.startsWith("none") && !/ 0px /.test(s.outline)) || s.boxShadow !== idle[idx].boxShadow || s.backgroundColor !== idle[idx].backgroundColor || s.borderColor !== idle[idx].borderColor;
    if (!ring) r.failures.push({ rule: "no-focus-indicator", el: `"${idle[idx].name}"`, detail: "no visible focus indicator on keyboard focus (WCAG 2.4.7) — add :focus-visible outline/ring" });
  }
  r.pass = r.failures.length === 0;
  console.log(r.summary.replace(/ (\d+)×(\d+):/, ` $1×$2 ${m.name}:`).replace(/\d+ failure\(s\), \d+ warning\(s\) → \w+/, `${r.failures.length} failure(s), ${r.warnings.length} warning(s) → ${r.pass ? "PASS" : "FAIL"}`));
  for (const f of r.failures) console.log("  ✗", JSON.stringify(f));
  for (const w of r.warnings.slice(0, 12)) console.log("  !", JSON.stringify(w));
  if (r.warnings.length > 12) console.log(`  … ${r.warnings.length - 12} more warning(s)`);
  if (!r.pass) failed++;
  await page.close();
}
await browser.close();
console.log(failed ? `\nBUTTONS GATE: FAIL in ${failed} run(s).` : "\nBUTTONS GATE: PASS in every run.");
process.exit(failed ? 1 : 0);
