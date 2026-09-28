#!/usr/bin/env node
// TYPOGRAPHY GATE (static part). HIG: legibility, Dynamic Type and readable leading.
// Usage: node tools/check-typography.mjs <file|dir> [...]
// A justified line may opt out with: // typography-ok: <reason>
// Static checks cannot establish visual legibility. Complete the gate with the layout probe
// at 200% text size, platform Dynamic Type tests, and a visual hierarchy review.

import { readFile, readdir, stat } from "node:fs/promises";
import { extname, join, basename } from "node:path";

const EXT = new Set([".css", ".scss", ".html", ".tsx", ".jsx", ".ts", ".js", ".vue", ".svelte", ".mdx"]);
const SKIP = new Set(["node_modules", ".git", ".claude", "dist", "build", ".next", "coverage", "tests", "__tests__", "vendor", "playwright-report"]);
const TOKEN_FILE = "apple-typography.css";

async function* walk(path) {
  const info = await stat(path);
  if (info.isDirectory()) {
    for (const entry of await readdir(path)) if (!SKIP.has(entry)) yield* walk(join(path, entry));
  } else if (EXT.has(extname(path))) yield path;
}

function sizeBelowTen(line) {
  const css = /\bfont-size\s*:\s*(\d*\.?\d+)\s*(px|pt|rem)\b/i.exec(line);
  const tw = /\btext-\[(\d*\.?\d+)(px|pt|rem)\]/.exec(line);
  const m = css ?? tw;
  if (!m) return false;
  const px = Number(m[1]) * (m[2] === "rem" ? 16 : 1);
  return px < 10;
}

function tightLeading(line) {
  if (/\bleading-none\b/.test(line)) return true;
  const value = /\bline-height\s*:\s*(\d*\.?\d+)(px|pt|rem|em|%)?/i.exec(line);
  return Boolean(value && !value[2] && Number(value[1]) <= 1);
}

const RULES = [
  ["ERROR", "below-platform-floor", sizeBelowTen,
    "Text below 10 pt/px: even macOS's listed minimum is 10 pt. Increase it; use the platform's default where possible."],
  ["ERROR", "zoom-disabled", (l) => /user-scalable\s*=\s*["']?no\b|maximum-scale\s*=\s*["']?1(?:\.0)?["'\s,>]/i.test(l),
    "Viewport zoom disabled: text must remain scalable."],
  ["ERROR", "text-size-adjust-none", (l) => /(?:-webkit-)?text-size-adjust\s*:\s*(?:none|0%)/i.test(l),
    "Text size adjustment disabled: allow user/system text scaling."],
  ["WARN", "light-weight", (l) => /\bfont-weight\s*:\s*(?:100|200|300)\b|\bfont-(?:thin|extralight|light)\b/i.test(l),
    "Light text weights can be hard to read; prefer Regular/Medium/Semibold/Bold, especially for small text."],
  ["WARN", "tight-leading", tightLeading,
    "Tight leading may hurt multiline readability; avoid it for three or more lines."],
  ["WARN", "forced-truncation", (l) => /\btext-overflow\s*:\s*ellipsis\b/i.test(l) || /(?:class(?:Name)?\s*=|@apply\s)[^\n]*\b(?:truncate|line-clamp-\d+)\b/.test(l),
    "Review at the largest text size: important text should wrap or open in a full view."],
];

const args = process.argv.slice(2);
if (!args.length) {
  console.error("usage: node tools/check-typography.mjs <file|dir> [...]");
  process.exit(2);
}

let errors = 0, warnings = 0;
for (const arg of args) for await (const file of walk(arg)) {
  if (basename(file) === TOKEN_FILE) continue;
  const lines = (await readFile(file, "utf8")).split("\n");
  for (const [i, line] of lines.entries()) {
    if (/typography-ok:\s*\S/.test(line)) continue;
    for (const [level, id, match, message] of RULES) if (match(line)) {
      level === "ERROR" ? errors++ : warnings++;
      console.log(`${level.padEnd(5)} ${file}:${i + 1} [${id}] ${message}\n      ${line.trim().slice(0, 160)}`);
    }
  }
}
console.log(`\nTYPOGRAPHY GATE (static): ${errors} error(s), ${warnings} warning(s).`);
process.exit(errors ? 1 : 0);
