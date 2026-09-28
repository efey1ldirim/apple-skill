#!/usr/bin/env node
// LAYOUT GATE (static part) — scans source for layout mistakes the HIG Layout page (marked
// CRITICAL for this skill) and the field notes rule out. The live part is tools/layout-probe.js.
//
// Usage:
//   node tools/check-layout.mjs <file|dir> [...]   # CSS/SCSS/TSX/JSX/TS/JS/HTML/Vue/Svelte/MDX
//   node tools/check-layout.mjs --strict <files>   # also RTL (physical sides) + grid min-w-0 hints
// Run it on the files you changed (the gate is per change, not a legacy-codebase audit).
// Opt out on one line only with a reason:  // layout-ok: <why>
//
// Exit code 1 if any ERROR is found. WARN = review by hand and justify in the handoff.

import { readFile, readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const EXT = new Set([".css", ".scss", ".tsx", ".jsx", ".ts", ".js", ".html", ".vue", ".svelte", ".mdx"]);
const SKIP = new Set(["node_modules", ".git", "dist", "build", ".next", "coverage"]);

// [level, id, regex, message]. Keep regexes line-based and specific (low false positives).
const RULES = [
  ["ERROR", "vh-height", /\b100vh\b|\bh-screen\b|\bmin-h-screen\b|\bmax-h-screen\b/,
    "100vh / h-screen hides content under mobile browser chrome → use 100dvh (h-dvh, min-h-dvh)."],
  ["ERROR", "zoom-blocked", /user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0)?\b/,
    "Viewport blocks zoom → text scaling to 200% impossible (HIG: be prepared for text-size changes)."],
  ["ERROR", "device-sniffing", /navigator\.(userAgent|platform)\b.*(iPhone|iPad|Android|Mobi)|\/(iPhone|iPad|Android|Mobi)[^/]*\/i?\.test\(\s*navigator/,
    "Layout by device type (idiom) — HIG: decide by available space (size classes), never device."],
  ["ERROR", "orientation-query", /@media[^{]*\(\s*orientation\s*:|matchMedia\(\s*['"`]\(orientation/,
    "Orientation media query — HIG: use available width/height (size classes), not orientation."],
  ["ERROR", "text-fixed-height", /\b(h|height)-\[\d+px\][^"'`]*\b(truncate|line-clamp-1|whitespace-nowrap)\b|\b(truncate|whitespace-nowrap)\b[^"'`]*\bh-\[\d+px\]/,
    "Fixed pixel height + single-line text → crops at larger text sizes. Use min-h and let it wrap."],
  ["WARN", "viewport-fit", /<meta[^>]+name=["']viewport["'](?![^>]*viewport-fit=cover)[^>]*>/,
    "Viewport meta without viewport-fit=cover → env(safe-area-inset-*) stays 0 on notched devices."],
  ["WARN", "fixed-edge-no-safe-area", /\b(fixed|sticky)\b[^"'`\n]*\b(bottom-0|inset-x-0 bottom|bottom:\s*0)\b(?![^\n]*safe-area)/,
    "Fixed/sticky bottom bar without env(safe-area-inset-bottom) padding (use --bar-pad-bottom)."],
  ["STRICT", "physical-side", /\b(ml|mr|pl|pr|left|right)-(?!0\b)[\w[\].-]+/,
    "Physical left/right spacing — prefer logical ms/me/ps/pe/start/end so layouts flip in RTL."],
  ["WARN", "wide-fixed-width", /\b(w|min-w)-\[(4[0-9]{2}|[5-9][0-9]{2}|[1-9][0-9]{3,})px\]|\bwidth:\s*(4[0-9]{2}|[5-9][0-9]{2}|[1-9][0-9]{3,})px/,
    "Fixed width ≥ 400px can overflow compact widths (320–375). Use max-w-* + w-full."],
  ["STRICT", "grid-no-min-w-0", /\bgrid-cols-(?!1\b)\d+\b(?![^"'`\n]*\bmin-w-0\b)/,
    "Multi-column grid: make sure cells/scrollers have min-w-0 (overflow trap) and a 1-column base."],
  ["WARN", "nowrap-primary", /\bwhitespace-nowrap\b|white-space:\s*nowrap/,
    "nowrap on text — verify it can't be primary content that must wrap at 200% text."],
  ["WARN", "tiny-target", /\bonClick\b[^\n]*\b(h|w|size)-(3|4|5|6)\b(?![^"'`\n]*\b(p-\d|px-|py-|min-h-|min-w-|after:|before:))|\b(h|w|size)-(3|4|5|6)\b(?![^"'`\n]*\b(p-\d|px-|py-|min-h-|min-w-))[^\n]*\bonClick\b/,
    "Clickable element ≤ 24px with no padding — touch targets need ≥ 44px hit area."],
  ["WARN", "stretched-art", /object-fit:\s*fill|\bobject-fill\b/,
    "object-fit: fill distorts artwork — HIG: never change the aspect ratio; use cover."],
];

async function* walk(p) {
  const s = await stat(p);
  if (s.isDirectory()) {
    for (const e of await readdir(p)) if (!SKIP.has(e)) yield* walk(join(p, e));
  } else if (EXT.has(extname(p))) yield p;
}

const strict = process.argv.includes("--strict");
const args = process.argv.slice(2).filter((a) => a !== "--strict");
if (!args.length) {
  console.error("usage: node tools/check-layout.mjs <file|dir> [...]");
  process.exit(2);
}

let errors = 0, warns = 0;
for (const a of args) {
  for await (const f of walk(a)) {
    const lines = (await readFile(f, "utf8")).split("\n");
    lines.forEach((line, i) => {
      if (/layout-ok/.test(line)) return; // explicit, justified opt-out: // layout-ok: <reason>
      for (const [lvl, id, re, msg] of RULES) {
        if (lvl === "STRICT" && !strict) continue;
        const level = lvl === "STRICT" ? "WARN" : lvl;
        if (re.test(line)) {
          level === "ERROR" ? errors++ : warns++;
          console.log(`${level.padEnd(5)} ${f}:${i + 1} [${id}] ${msg}\n      ${line.trim().slice(0, 160)}`);
        }
      }
    });
  }
}
console.log(`\nLAYOUT GATE (static): ${errors} error(s), ${warns} warning(s).` +
  (errors ? " FAIL — fix every ERROR." : " Static part passed; now run tools/layout-probe.js in the browser."));
process.exit(errors ? 1 : 0);
