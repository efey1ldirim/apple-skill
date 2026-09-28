#!/usr/bin/env node
// MATERIALS GATE (static part) — scans source for material/glass mistakes that the HIG Materials
// page (marked CRITICAL for this skill) rules out. The live part is tools/materials-probe.js.
//
// Usage:
//   node tools/check-materials.mjs <file|dir> [...]   # CSS/SCSS/TSX/JSX/TS/JS/HTML/Vue/Svelte/MDX
// Run it on the files you changed. Opt out on one line only with a reason:  // material-ok: <why>
// Exit code 1 if any ERROR is found. WARN = review by hand and justify in the handoff.

import { readFile, readdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const EXT = new Set([".css", ".scss", ".tsx", ".jsx", ".ts", ".js", ".html", ".vue", ".svelte", ".mdx"]);
const SKIP = new Set(["node_modules", ".git", "dist", "build", ".next", "coverage"]);
const TOKEN_FILE = "apple-materials.css"; // defines the families + fallbacks; exempt

const RAW_BACKDROP = /\bbackdrop-filter\s*:|\bbackdrop-blur(-[\w[\].]+)?\b|\bbackdropFilter\s*:/;
const MATERIAL_CTX = /\b(glass(-clear|-transient)?|material-(ultrathin|thin|regular|thick))\b|\bbackdrop-blur\b|\bbackdrop-filter\b|\b(ultraThin|thin|regular|thick)Material\b/;
// Light greys are illegible on light materials; dark greys on dark materials (dark: variant).
const GRAY_TEXT = /(?<!dark:)\btext-(gray|zinc|neutral|slate|stone)-(200|300|400)\b|\bdark:text-(gray|zinc|neutral|slate|stone)-(600|700|800)\b|--apple-gray3\b|#C7C7CC\b|systemGray3\b/i;

// [level, id, test(line, file) → bool, message]
const RULES = [
  ["ERROR", "gray-on-material", (l) => MATERIAL_CTX.test(l) && GRAY_TEXT.test(l),
    "Grey palette colour for text/glyphs on a material (HIG materials-03 ✗) → use the vibrant ladder var(--on-material-*)."],
  ["ERROR", "quaternary-on-thin", (l) => /\b(material-(thin|ultrathin)|(ultraThin|thin)Material)\b/.test(l) && /quaternary/i.test(l),
    "quaternary label on thin/ultraThin — contrast too low (HIG). Use secondary, or a regular/thick material."],
  ["ERROR", "no-transparency-fallback", (l, f) => RAW_BACKDROP.test(l) && !f.hasReducedTransparency && !/reduced-transparency/.test(l),
    "Raw backdrop blur with no Reduce Transparency fallback (HIG: glass must respond to it) → use .glass/.material-* from tokens/apple-materials.css."],
  ["WARN", "raw-backdrop", (l, f) => RAW_BACKDROP.test(l) && f.hasReducedTransparency,
    "Hand-written blur — prefer .glass (functional layer) or .material-* (content layer) so tints and fallbacks come from tokens."],
  ["WARN", "glass-on-content", (l) => /\bglass(-clear)?\b/.test(l) && /\b(card|tile|row|list-item|article)\b|<(li|article)\b/i.test(l) && !/\b(fixed|sticky)\b/.test(l),
    "Liquid Glass on what looks like content (HIG: never in the content layer) → use .material-* or move it to a floating control."],
  ["WARN", "clear-without-dim", (l) => /\bglass-clear\b/.test(l) && !/material-dim/.test(l),
    "Clear glass: over BRIGHT media add a .material-dim (35 % black) layer behind it (HIG). Justify if the media is dark."],
  ["WARN", "blur-transition", (l) => /transition[^;\n"'`]*\b(backdrop-filter|filter|blur)\b|transition-\[[^\]]*(backdrop|filter)/.test(l) && !/reduced-motion|motion-safe/.test(l),
    "Animating into/out of blur — guard with prefers-reduced-motion (Accessibility) or fade opacity instead."],
  ["WARN", "opaque-overlay", (l) => /\bfixed\b[^"'`\n]*\binset-0\b[^"'`\n]*\bbg-(black|white|gray-\d+|zinc-\d+|neutral-\d+|slate-\d+)\b(?!\/)/.test(l),
    "Full-screen overlay with an opaque colour — HIG prefers translucency (veil); use .veil or a /opacity tint."],
];

async function* walk(p) {
  const s = await stat(p);
  if (s.isDirectory()) {
    for (const e of await readdir(p)) if (!SKIP.has(e)) yield* walk(join(p, e));
  } else if (EXT.has(extname(p))) yield p;
}

const args = process.argv.slice(2);
if (!args.length) {
  console.error("usage: node tools/check-materials.mjs <file|dir> [...]");
  process.exit(2);
}

let errors = 0, warns = 0;
for (const a of args) {
  for await (const f of walk(a)) {
    if (basename(f) === TOKEN_FILE) continue;
    const text = await readFile(f, "utf8");
    const lines = text.split("\n");
    const ctx = { hasReducedTransparency: /prefers-reduced-transparency/.test(text) };
    lines.forEach((line, i) => {
      if (/material-ok/.test(line)) return; // explicit, justified opt-out: // material-ok: <reason>
      for (const [level, id, test, msg] of RULES) {
        if (test(line, ctx)) {
          level === "ERROR" ? errors++ : warns++;
          console.log(`${level.padEnd(5)} ${f}:${i + 1} [${id}] ${msg}\n      ${line.trim().slice(0, 160)}`);
        }
      }
    });
    const glassCount = (text.match(/\bglass(-clear)?\b/g) ?? []).length;
    if (glassCount > 6) {
      warns++;
      console.log(`WARN  ${f} [glass-sparingly] ${glassCount} glass usages in one file — HIG: use sparingly; group related controls in ONE glass container.`);
    }
  }
}
console.log(`\nMATERIALS GATE (static): ${errors} error(s), ${warns} warning(s).` +
  (errors ? " FAIL — fix every ERROR." : " Static part passed; now run tools/run-materials-probe.mjs <url>."));
process.exit(errors ? 1 : 0);
