#!/usr/bin/env node
// COLOR GATE — verifies that every colour literal in the given files is an exact Apple system
// colour (or an approved neutral), flags outdated Apple values, and checks contrast pairs.
// The HIG Color page is marked CRITICAL for this skill: run this before calling any UI done.
//
// Usage:
//   node tools/check-colors.mjs <file|dir> [...]         # scan CSS/TSX/JSX/HTML/SVG/Vue/Svelte
//   node tools/check-colors.mjs --pair "#FFFFFF" "#0088FF" # contrast ratio of fg on bg
//   node tools/check-colors.mjs --brand "#5B21B6" src/      # allow a declared brand colour
//
// Exit code 1 if any ERROR is found (outdated Apple values, contrast pair failures).
// WARN = colour not in the palette: allowed only as brand/content colour and must be justified.

import { readFile, readdir, stat } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(await readFile(join(ROOT, "skills/apple-ui/tokens/apple-system-colors.json"), "utf8"));

// exact hex → "blue (light)" etc.
const APPLE = new Map();
for (const [name, modes] of Object.entries(tokens.colors))
  for (const [mode, hex] of Object.entries(modes)) APPLE.set(hex.toUpperCase(), `${name} (${mode})`);

// Approved neutrals (skill field notes + Apple web + iOS system backgrounds/labels)
const NEUTRAL = new Map(Object.entries({
  "#000000": "black", "#FFFFFF": "white",
  "#F5F5F7": "canvas light (Apple web/field notes)", "#08080A": "canvas dark (field notes)",
  "#1D1D1F": "Apple web primary text", "#1C1C1F": "floating tile dark (field notes)",
  "#6E6E73": "Apple web secondary text", "#86868B": "Apple web tertiary (large text only)",
  "#0066CC": "Apple web link (light)", "#2997FF": "Apple web link (dark)",
  "#FAFAFC": "Apple web flyout (light)", "#161617": "Apple web flyout (dark)",
  "#333336": "Apple web nav link text", "#48484A": "segmented thumb dark (field notes)",
  "#0040DD": "deep blue for white labels (7.6:1)",
  "#3C3C43": "UIKit label base (light) — tertiary/quaternary/separator on materials",
  "#EBEBF5": "UIKit label base (dark) — secondary/tertiary/quaternary on materials",
  "#545458": "UIKit separator base (dark)",
}));

// Pre-2025 Apple values that must be replaced (HIG updated system colours 2025-06-09)
const OUTDATED = new Map(Object.entries({
  "#007AFF": "blue → light #0088FF (dark #0091FF)", "#0A84FF": "blue dark → #0091FF",
  "#FF3B30": "red → light #FF383C (dark #FF4245)", "#FF453A": "red dark → #FF4245",
  "#34C759": null, // unchanged green light — kept valid
  "#30D158": null,
  "#FF9500": "orange → light #FF8D28 (dark #FF9230)", "#FF9F0A": "orange dark → #FF9230",
  "#5856D6": "indigo → light #6155F5 (dark #6D7CFF)", "#5E5CE6": "indigo dark → #6D7CFF",
  "#AF52DE": "purple → light #CB30E0 (dark #DB34F2)", "#BF5AF2": "purple dark → #DB34F2",
  "#FFCC00": null, "#FFD60A": "yellow dark → #FFD600",
  "#FF2D55": null, "#FF375F": null,
  "#5AC8FA": "old teal/cyan → teal #00C3D0 or cyan #00C0E8", "#64D2FF": "old cyan dark → #3CD3FE",
  "#32ADE6": "old cyan → #00C0E8", "#30B0C7": "old teal → #00C3D0", "#40C8E0": "old teal dark → #00D2E0",
  "#00C7BE": "old mint → #00C8B3", "#63E6E2": "old mint dark → #00DAC3",
  "#A2845E": "old brown → #AC7F5E", "#AC8E68": "old brown dark → #B78A66",
  "#D70015": "old accessible red → #E9152D (light HC)",
}).filter(([, v]) => v !== null));

const lum = (hex) => {
  const n = hex.replace("#", "");
  const c = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const norm = (h) => {
  h = h.toUpperCase();
  if (h.length === 4) h = "#" + [...h.slice(1)].map((c) => c + c).join("");
  return h.slice(0, 7);
};
const rgbToHex = (r, g, b) => "#" + [r, g, b].map((v) => Number(v).toString(16).padStart(2, "0")).join("").toUpperCase();

const args = process.argv.slice(2);
if (args[0] === "--pair") {
  const [fg, bg] = [norm(args[1]), norm(args[2])];
  const r = ratio(fg, bg);
  console.log(`${fg} on ${bg}: ${r.toFixed(2)}:1  →  body text ${r >= 4.5 ? "PASS" : "FAIL"} (4.5) · large/bold ${r >= 3 ? "PASS" : "FAIL"} (3.0) · UI parts ${r >= 3 ? "PASS" : "FAIL"} (3.0)`);
  process.exit(r >= 4.5 ? 0 : 1);
}
const brand = new Set();
while (args[0] === "--brand") { brand.add(norm(args[1])); args.splice(0, 2); }

const EXT = new Set([".css", ".scss", ".tsx", ".jsx", ".ts", ".js", ".html", ".svg", ".vue", ".svelte", ".mdx"]);
async function* files(p) {
  const s = await stat(p);
  if (s.isFile()) { if (EXT.has(extname(p))) yield p; return; }
  for (const e of await readdir(p)) {
    if (["node_modules", ".git", "dist", "build", ".next"].includes(e)) continue;
    yield* files(join(p, e));
  }
}

let errors = 0, warns = 0, ok = 0;
const HEX = /#(?:[0-9a-fA-F]{6}(?:[0-9a-fA-F]{2})?|[0-9a-fA-F]{3})\b/g;
const RGB = /rgba?\(\s*(\d{1,3})[\s,]+(\d{1,3})[\s,]+(\d{1,3})/g;
for (const target of args.length ? args : ["."]) {
  for await (const f of files(target)) {
    const lines = (await readFile(f, "utf8")).split("\n");
    lines.forEach((line, i) => {
      const found = [...line.matchAll(HEX)].map((m) => norm(m[0]))
        .concat([...line.matchAll(RGB)].map((m) => rgbToHex(m[1], m[2], m[3])));
      for (const hex of found) {
        const where = `${f}:${i + 1}`;
        if (OUTDATED.has(hex)) { errors++; console.log(`ERROR ${where}  ${hex} is an OUTDATED Apple value: ${OUTDATED.get(hex)}`); }
        else if (APPLE.has(hex) || NEUTRAL.has(hex) || brand.has(hex)) ok++;
        else { warns++; console.log(`WARN  ${where}  ${hex} not in Apple palette/neutrals — must be a declared brand/content colour (use --brand) with light+dark+high-contrast variants`); }
      }
    });
  }
}
console.log(`\ncolours ok: ${ok} · warnings: ${warns} · errors: ${errors}`);
process.exit(errors ? 1 : 0);
