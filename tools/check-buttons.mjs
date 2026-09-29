#!/usr/bin/env node
// BUTTONS GATE (static part) — scans source for button mistakes that the HIG Buttons page
// (marked CRITICAL for this skill) and WCAG rule out: clickable non-buttons, icon-only buttons with no
// name, removed focus outlines, destructive actions given the primary role, tiny hit regions, custom
// buttons with no press state. The live part is tools/buttons-probe.js (run-buttons-probe.mjs).
//
// Usage:
//   node tools/check-buttons.mjs <file|dir> [...]   # CSS/SCSS/TSX/JSX/TS/JS/HTML/Vue/Svelte/MDX
// Run it on the files you changed. Opt out on one line only with a reason:  // buttons-ok: <why>
// Exit code 1 if any ERROR is found. WARN = review by hand and justify in the handoff.

import { readFile, readdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const EXT = new Set([".css", ".scss", ".tsx", ".jsx", ".ts", ".js", ".html", ".vue", ".svelte", ".mdx"]);
const SKIP = new Set(["node_modules", ".git", "dist", "build", ".next", "coverage", "fixtures-ignored"]);
const TOKEN_FILE = "apple-buttons.css";

const DESTRUCTIVE = /(?<![\p{L}])(delete|remove|erase|destroy|discard|reset|clear all|disconnect|revoke|terminate|deactivate|sil|silmek|kald[ıi]r|s[ıi]f[ıi]rla|temizle|ba[ğg]lant[ıi]y[ıi] kes)(?![\p{L}])/iu;
const PRIMARY_CLASS = /variant\s*=\s*["'{`]*(default|primary)["'}`]|\b(btn-primary|btn-prominent|bg-primary|bg-blue-[5-7]00|bg-\[#(0a84ff|0088ff|1e6ef4))\b|data-role\s*=\s*["']primary["']|type\s*=\s*["']submit["'][^>]*\bprimary\b/i;
const NAMED = /aria-label(ledby)?\s*=|\btitle\s*=|\bsr-only\b|visually-?hidden|<VisuallyHidden|aria-describedby/i;

// Find the end of an opening tag, respecting quotes and {…} (JSX arrow functions contain ">").
function tagEnd(t, i) {
  let depth = 0, q = null;
  for (let p = i; p < t.length; p++) {
    const c = t[p];
    if (q) { if (c === q && t[p - 1] !== "\\") q = null; continue; }
    if (c === '"' || c === "'" || c === "`") { q = c; continue; }
    if (c === "{") depth++; else if (c === "}") depth--;
    else if (c === ">" && depth <= 0) return p;
  }
  return -1;
}
const lineOf = (t, idx) => t.slice(0, idx).split("\n").length;

async function* walk(p) {
  const s = await stat(p);
  if (s.isDirectory()) { for (const e of await readdir(p)) if (!SKIP.has(e)) yield* walk(join(p, e)); }
  else if (EXT.has(extname(p))) yield p;
}

const args = process.argv.slice(2);
if (!args.length) { console.error("usage: node tools/check-buttons.mjs <file|dir> [...]"); process.exit(2); }

let errors = 0, warns = 0;
const report = (level, f, line, id, msg, snippet) => {
  level === "ERROR" ? errors++ : warns++;
  console.log(`${level.padEnd(5)} ${f}:${line} [${id}] ${msg}\n      ${snippet.replace(/\s+/g, " ").trim().slice(0, 160)}`);
};

for (const a of args) for await (const f of walk(a)) {
  if (basename(f) === TOKEN_FILE) continue;
  const text = await readFile(f, "utf8");
  const lines = text.split("\n");
  const okLine = (n) => /buttons-ok/.test(lines[n - 1] ?? "") || /buttons-ok/.test(lines[n - 2] ?? "");
  const isStyle = /\.(css|scss)$/.test(f);
  const hasFocusVisible = /:focus-visible|focus-visible:/.test(text);

  if (!isStyle) {
    // 1. Clickable non-button elements (keyboard, Return/Space, assistive tech).
    for (const m of text.matchAll(/<(div|span|li|td|tr|p|img|svg|h[1-6]|section|article|label)\b/g)) {
      const end = tagEnd(text, m.index); if (end < 0) continue;
      const tag = text.slice(m.index, end + 1);
      if (!/\bonClick\s*=|\bonclick\s*=|\s@click\b|\s\(click\)\s*=|\bv-on:click\b/.test(tag)) continue;
      if (/role\s*=\s*["'{`]*(button|link|tab|menuitem|option|checkbox|switch|radio|presentation|none)/.test(tag) || /tabIndex|tabindex/.test(tag)) continue;
      if (/stopPropagation|aria-hidden\s*=\s*["'{]*true/.test(tag)) continue;   // wrappers that only stop bubbling
      if (/\binset-0\b|\bfixed\b|backdrop|overlay|scrim|role\s*=\s*["'{`]*(dialog|alertdialog)/i.test(tag)) continue;   // click-outside-to-close scrims (Esc must also close)
      const ln = lineOf(text, m.index); if (okLine(ln)) continue;
      report("ERROR", f, ln, "clickable-non-button", "Click handler on a non-interactive element: no keyboard, no role, no Return/Space. Use <button> (or <a href>). HIG Buttons + WCAG 2.1.1/4.1.2.", tag);
    }
    // 2. Button blocks: icon-only without a name; destructive label on a primary-styled button; small hit region.
    for (const m of text.matchAll(/<(button|Button)\b/g)) {
      const end = tagEnd(text, m.index); if (end < 0) continue;
      const tag = text.slice(m.index, end + 1);
      const selfClosing = tag.endsWith("/>");
      let inner = "";
      if (!selfClosing) { const close = text.indexOf(`</${m[1]}>`, end); inner = close < 0 ? "" : text.slice(end + 1, close); }
      const ln = lineOf(text, m.index); if (okLine(ln)) continue;
      const hasText = /[\p{L}\p{N}]/u.test(inner.replace(/<[^>]*>/g, " ").replace(/\{\s*["'`]\s*["'`]\s*\}/g, "")) || /\{[^}]*[\p{L}]/u.test(inner.replace(/<[^>]*>/g, " "));
      const iconish = /<svg\b|<img\b|<i\s|<[A-Z][A-Za-z0-9]*(Icon)?\b[^>]*\/>|<Icon\b|<[A-Z][A-Za-z0-9]*\b[^>]*\/>/.test(inner);
      if (!hasText && iconish && !NAMED.test(tag) && !NAMED.test(inner))
        report("ERROR", f, ln, "icon-button-no-name", "Icon-only button with no accessible name (aria-label / visually hidden text). HIG: each button clearly communicates its purpose; WCAG 4.1.2.", tag + inner.slice(0, 60));
      const label = inner.replace(/<[^>]*>/g, " ") + " " + (tag.match(/aria-label\s*=\s*["']([^"']+)/)?.[1] ?? "");
      if (DESTRUCTIVE.test(label) && PRIMARY_CLASS.test(tag))
        report("ERROR", f, ln, "destructive-primary", "Destructive action styled/assigned as the primary button. HIG: never give a destructive action the primary role, even when it is the most likely choice.", tag + label.slice(0, 40));
      if (DESTRUCTIVE.test(label) && /\bautoFocus\b|\bautofocus\b/.test(tag))
        report("ERROR", f, ln, "destructive-autofocus", "Destructive button has autofocus: Return would destroy data.", tag + label.slice(0, 40));
      // small visual size with no hit-region extension (the probe measures the real hit region)
      if (/\b(h|size)-([1-8])\b|\bh-\[(\d|1\d|2\d|30|3[0-2])px\]/.test(tag) && !/after:|before:|min-h-|min-w-|\bp-\d|\bpy-\d/.test(tag))
        report("WARN", f, ln, "small-hit-target", "Button under 36 px with no hit-region extension. HIG: hit region at least 44×44 pt. Extend with after:-inset-*, min-h-11 or padding; the live probe measures the real region.", tag);
    }
    // 3. role=button on a non-button without keyboard support.
    for (const m of text.matchAll(/<(div|span|li|a)\b/g)) {
      const end = tagEnd(text, m.index); if (end < 0) continue;
      const tag = text.slice(m.index, end + 1);
      if (!/role\s*=\s*["'{`]*button/.test(tag)) continue;
      if (!/tabIndex|tabindex/.test(tag) || !/onKeyDown|onKeyUp|onKeyPress|@keydown|@keyup|\(keydown\)/.test(tag)) {
        const ln = lineOf(text, m.index); if (okLine(ln)) continue;
        report("WARN", f, ln, "role-button-no-keyboard", "role=\"button\" on a non-button needs tabIndex=0 and Enter/Space handlers; prefer <button>.", tag);
      }
    }
  }

  // 4. Removed focus outline with no visible replacement — only on buttons (inputs are the Feedback/Entering-data pages).
  const outlineOff = /outline\s*:\s*(none|0)\b|outline-none|outline-hidden/;
  const replaced = /ring|shadow|focus-visible|outline-2|outline-offset|underline/;
  const flag = (idx, snippet) => {
    const ln = lineOf(text, idx); if (okLine(ln)) return;
    report(hasFocusVisible ? "WARN" : "ERROR", f, ln, "outline-removed", "Focus outline removed on a button with no visible replacement (WCAG 2.4.7; HIG: usable with any input). Add a :focus-visible ring/outline.", snippet);
  };
  if (isStyle || f.endsWith(".html") || /<style/.test(text)) {
    for (const m of text.matchAll(/([^{}@]+)\{([^{}]*)\}/g)) {
      const sel = m[1].trim(), body = m[2];
      if (!/(^|[\s,>+~])(button|\.btn|\[role=["']?button|input\[type=["']?(button|submit)|\.b\b)|\bbutton\b/i.test(sel) && !/\.(b|btn[\w-]*|button[\w-]*)\b/.test(sel)) continue;
      if (outlineOff.test(body) && !replaced.test(body) && !/:focus-visible/.test(sel)) flag(m.index + m[1].length, sel + " { " + body.trim().slice(0, 80));
    }
  }
  if (!isStyle) {
    for (const m of text.matchAll(/<(button|Button)\b/g)) {
      const end = tagEnd(text, m.index); if (end < 0) continue;
      const tag = text.slice(m.index, end + 1);
      if (outlineOff.test(tag) && !replaced.test(tag)) flag(m.index, tag);
    }
  }
}
console.log(`\nBUTTONS GATE (static): ${errors} error(s), ${warns} warning(s).` +
  (errors ? " FAIL — fix every ERROR." : " Static part passed; now run tools/run-buttons-probe.mjs <url>."));
process.exit(errors ? 1 : 0);
