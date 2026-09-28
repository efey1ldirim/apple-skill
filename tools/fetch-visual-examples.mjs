#!/usr/bin/env node
// Collects Apple's "don't / do" visual comparisons (image pairs marked with ✗ crossout and
// ✓ checkmark) from HIG pages, downloads the images locally, and writes an index that pairs each
// comparison with the rule it illustrates. Claude can then Read the images and compare its own
// rendered UI against Apple's correct and incorrect examples.
//
// Usage:
//   node tools/fetch-visual-examples.mjs                 # all pages listed in PAGES below
//   node tools/fetch-visual-examples.mjs color layout    # specific HIG slugs (added to PAGES run)
//
// Output (inside skills/apple-ui/references/visual-examples/):
//   manifest.json, INDEX.md, images/ – all LOCAL ONLY (.gitignore): they contain Apple's images
//   and alt text. Re-create them any time by running this script. The committed, hand-written
//   catalog (our own words) is visual-examples/README.md.

import { mkdir, writeFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "skills/apple-ui/references/visual-examples");
const IMG = join(OUT, "images");
const DATA = "https://developer.apple.com/tutorials/data/design/human-interface-guidelines/";
const ASSET = "https://developer.apple.com/tutorials";

// Keep in sync with ingested pages (INDEX.md). Pages without pairs are harmless.
const PAGES = [
  "design-principles", "designing-for-ios", "designing-for-ipados", "designing-for-macos",
  "designing-for-tvos", "designing-for-visionos", "designing-for-watchos", "designing-for-games",
  "designing-for-iphone-duo", "accessibility", "app-icons", "branding", "color", "dark-mode", "icons", "images", "immersive-experiences", "inclusion", "layout",
  "materials", "privacy", "right-to-left", "sf-symbols", "typography", "writing",
  "charting-data", "collaboration-and-sharing", "drag-and-drop",
  "entering-data", "feedback", "file-management", "going-full-screen",
  "launching", "live-viewing-apps", "loading",
  "managing-accounts", "managing-notifications", "modality",
  "multitasking", "offering-help", "onboarding",
];
// Stand-alone images that are comparisons on their own (before/after drawn inside one image, or
// a sequence of single images under one rule). Consecutive singles under the same rule are grouped.
const SINGLES = {
  typography: ["game-typography-incorrect", "game-typography-correct"],
  icons: [
    "custom-icon-sizes.png", "custom-icon-line-weights.png", "asymmetric-glyph.png",
    "asymmetric-glyph-optically-centered.png", "asymmetric-glyph-before-and-after.png",
    "icons-selection-correct", "doc-icon-parts-margins.png",
  ],
  layout: ["layout-background-extention-view.png", "visual-design-safe-zone.png", "visual-design-padding.png", "layout-controls.png"],
  materials: [
    "materials-ios-liquid-glass-clear", "materials-tvos-media-player.png",
    "visionos-materials-window-example.png", "watchos-modal-view-material-background.png",
  ],
  "right-to-left": [
    "download-uneven-vertical-height.png", "download-even-vertical-height.png",
    "directional-symbols-ltr.png", "directional-symbols-rtl.png",
    "text-icon-localized-latin.png", "text-icon-localized-hebrew.png", "text-icon-localized-arabic.png",
  ],
  "sf-symbols": [
    "sf-three-layers-color.png", "sf-monochrome.png", "sf-hierarchical.png", "sf-palette.png", "sf-multicolor.png",
    "sf-variable-color.png", "sf-scales-weights.png", "sf-variants.png", "sf-localized.png",
  ],
};
const slugs = [...new Set([...PAGES, ...process.argv.slice(2)])];

const inline = (items = [], refs) =>
  items.map((it) => {
    if (it.type === "text") return it.text;
    if (it.type === "codeVoice") return it.code;
    if (it.type === "reference") return it.overridingTitle ?? refs[it.identifier]?.title ?? "";
    if (it.inlineContent) return inline(it.inlineContent, refs);
    return "";
  }).join("");

const imagesIn = (blocks = []) => {
  const found = [];
  const walk = (bs) => {
    for (const b of bs ?? []) {
      for (const it of b.inlineContent ?? []) if (it.type === "image") found.push(it.identifier);
      if (b.content) walk(b.content);
      if (b.columns) for (const c of b.columns) walk(c.content);
    }
  };
  walk(blocks);
  return found;
};
// Visible caption: a text paragraph in the column, or the image's own caption (metadata.abstract).
const captionIn = (blocks = [], refs) => {
  for (const b of blocks) if (b.type === "paragraph") {
    const t = inline(b.inlineContent, refs).trim();
    if (t && !(b.inlineContent ?? []).every((i) => i.type === "image")) return t;
  }
  for (const b of blocks) for (const it of b.inlineContent ?? [])
    if (it.type === "image" && it.metadata?.abstract && !/^(crossout|checkmark)\.png$/.test(it.identifier))
      return inline(it.metadata.abstract, refs).trim();
  return "";
};

async function download(url, file) {
  try { await access(file); return true; } catch {}
  const res = await fetch(url);
  if (!res.ok) return false;
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
  return true;
}

await mkdir(IMG, { recursive: true });
const manifest = [];

for (const slug of slugs) {
  const res = await fetch(`${DATA}${slug}.json`);
  if (!res.ok) { console.error(`skip ${slug}: HTTP ${res.status}`); continue; }
  const doc = await res.json();
  const refs = doc.references ?? {};
  let section = "", rule = "", n = 0, last = null;

  const scan = async (blocks) => {
    for (const b of blocks ?? []) {
      if (b.type === "heading") { section = b.text; rule = ""; last = null; }
      if (b.type === "paragraph") {
        const first = b.inlineContent?.[0];
        // Only the bold lead-in (short) — the full Apple paragraph is not copied.
        if (first?.type === "strong") { rule = inline(first.inlineContent, refs).trim(); last = null; }
        const single = (b.inlineContent ?? []).find((it) => it.type === "image" && SINGLES[slug]?.includes(it.identifier));
        if (single) {
          if (!last || last.rule !== rule || last.section !== section) {
            n++;
            last = { id: `${slug}-${String(n).padStart(2, "0")}`, page: slug, section, rule, kind: "single", items: [] };
            manifest.push(last);
          }
          const i = last.items.length;
          const r = refs[single.identifier] ?? {};
          const item = { verdict: "neutral", caption: inline(single.metadata?.abstract ?? [], refs).trim(), alt: r.alt ?? "", files: {} };
          for (const v of r.variants ?? []) {
            const mode = v.traits?.includes("dark") ? "dark" : "light";
            const file = `${last.id}-single-${i + 1}-${mode}.png`;
            const ok = await download(ASSET + v.url, join(IMG, file));
            item.files[mode] = { local: `images/${file}`, url: ASSET + v.url, downloaded: ok };
          }
          last.items.push(item);
        }
      }
      // A row is a comparison when it has ≥2 columns, or when a single column carries its own
      // ✗/✓ verdict (Privacy shows its ✓ pre-alert screen alone and its two ✗ variants in a
      // separate row, each under a different rule).
      const verdictIn = (c) => imagesIn(c.content).some((x) => x === "crossout.png" || x === "checkmark.png");
      if (b.type === "row" && (b.columns?.length >= 2 || b.columns?.some(verdictIn))) {
        const cols = b.columns.map((c) => ({ imgs: imagesIn(c.content), caption: captionIn(c.content, refs) }));
        const isDont = (c) => c.imgs.includes("crossout.png");
        const isDo = (c) => c.imgs.includes("checkmark.png");
        // Decorative glyph grids (e.g. the eight principle symbols) are not comparisons.
        const DECORATIVE = /icon-padding/;
        const art = (c) => c.imgs.some((x) => x !== "crossout.png" && x !== "checkmark.png" && !DECORATIVE.test(x));
        const marked = cols.some(isDont) || cols.some(isDo);
        const compare = !cols.some(isDont) && !cols.some(isDo) && cols.filter(art).length >= 2;
        if (marked || compare) {
          n++; last = null;
          const id = `${slug}-${String(n).padStart(2, "0")}`;
          const entry = { id, page: slug, section, rule, kind: marked ? "do-dont" : "compare", items: [] };
          for (const [i, c] of cols.entries()) {
            const verdict = isDont(c) ? "dont" : isDo(c) ? "do" : "neutral";
            const art = c.imgs.find((x) => x !== "crossout.png" && x !== "checkmark.png");
            if (!art) continue;
            const r = refs[art] ?? {};
            const item = { verdict, caption: c.caption, alt: r.alt ?? "", files: {} };
            for (const v of r.variants ?? []) {
              const mode = v.traits?.includes("dark") ? "dark" : "light";
              const file = `${id}-${verdict}-${i + 1}-${mode}.png`;
              const ok = await download(ASSET + v.url, join(IMG, file));
              item.files[mode] = { local: `images/${file}`, url: ASSET + v.url, downloaded: ok };
            }
            entry.items.push(item);
          }
          manifest.push(entry);
        }
      }
      // Tabbed image sets (e.g. "Without / With dimmed passthrough") are comparisons too.
      if (b.type === "tabNavigator" && b.tabs?.length >= 2) {
        const tabs = b.tabs.map((t) => ({ title: t.title, imgs: imagesIn(t.content) })).filter((t) => t.imgs.length);
        if (tabs.length >= 2) {
          n++; last = null;
          const id = `${slug}-${String(n).padStart(2, "0")}`;
          const entry = { id, page: slug, section, rule, kind: "tabs", items: [] };
          for (const [i, t] of tabs.entries()) {
            const r = refs[t.imgs[0]] ?? {};
            const item = { verdict: "neutral", caption: t.title, alt: r.alt ?? "", files: {} };
            for (const v of r.variants ?? []) {
              const mode = v.traits?.includes("dark") ? "dark" : "light";
              const file = `${id}-tab-${i + 1}-${mode}.png`;
              const ok = await download(ASSET + v.url, join(IMG, file));
              item.files[mode] = { local: `images/${file}`, url: ASSET + v.url, downloaded: ok };
            }
            entry.items.push(item);
          }
          manifest.push(entry);
          continue;
        }
      }
      if (b.content) await scan(b.content);
      if (b.columns) for (const c of b.columns) await scan(c.content);
      if (b.tabs) for (const t of b.tabs) await scan(t.content);
    }
  };
  for (const s of doc.primaryContentSections ?? []) await scan(s.content);
  console.log(`${slug}: ${n} comparison(s)`);
}

await writeFile(join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");

const md = [
  "# Visual examples — Apple's don't / do and comparison images (local, generated)",
  "",
  "Generated by `tools/fetch-visual-examples.mjs` — do not edit by hand.",
  "",
  "**How to use:** when a design touches one of these rules, `Read` the ✗ and ✓ images (light and",
  "dark) and compare them with a screenshot of your own rendered UI. If `images/` is empty (fresh",
  "clone — Apple's images are not committed), run `node tools/fetch-visual-examples.mjs` first.",
  "",
];
for (const e of manifest) {
  md.push(`## ${e.id} · ${e.page} › ${e.section}`, "", `**Rule:** ${e.rule}`, "");
  for (const it of e.items) {
    const mark = it.verdict === "dont" ? "✗ DON'T" : it.verdict === "do" ? "✓ DO" : "◇ COMPARE";
    md.push(`- **${mark}** — ${it.caption || it.alt}`);
    if (it.caption && it.alt) md.push(`  - image: ${it.alt}`);
    for (const [mode, f] of Object.entries(it.files)) md.push(`  - ${mode}: \`${f.local}\``);
  }
  md.push("");
}
await writeFile(join(OUT, "INDEX.md"), md.join("\n"));
console.log(`total: ${manifest.length} comparisons → ${OUT}`);
