#!/usr/bin/env node
// Fetches a developer.apple.com HIG page as DocC JSON and flattens it to readable text,
// so every heading, paragraph, list, table, aside and image caption can be read in full.
// The HTML pages are a JS shell; the JSON is the real content.
//
// Usage:
//   node tools/hig-fetch.mjs <url-or-slug>
//   node tools/hig-fetch.mjs https://developer.apple.com/design/human-interface-guidelines/color
//   node tools/hig-fetch.mjs color
//
// Output is a local reading aid (stdout) — it is NOT committed. Notes in references/hig/ are
// written in our own words from it.

const arg = process.argv[2];
if (!arg) {
  console.error("usage: node tools/hig-fetch.mjs <url-or-slug>");
  process.exit(1);
}

function jsonUrl(input) {
  if (input.endsWith(".json")) return input;
  if (/^https?:/.test(input) && !input.includes("/design/human-interface-guidelines")) {
    console.error(
      "Not a HIG (DocC) page. Pages like developer.apple.com/design/, /design/resources/ or\n" +
        "/design/whats-new/ are server-rendered HTML: read them with WebFetch or the browser\n" +
        "(get_page_text) instead.",
    );
    process.exit(2);
  }
  const m = input.match(/developer\.apple\.com\/design\/(.+?)\/?$/);
  const path = m ? m[1] : `human-interface-guidelines/${input.replace(/^\/+|\/+$/g, "")}`;
  return `https://developer.apple.com/tutorials/data/design/${path}.json`;
}

const url = jsonUrl(arg);
const res = await fetch(url);
if (!res.ok) {
  console.error(`HTTP ${res.status} for ${url}`);
  process.exit(1);
}
const doc = await res.json();
const refs = doc.references ?? {};
const out = [];

function inline(items = []) {
  return items
    .map((it) => {
      switch (it.type) {
        case "text": return it.text;
        case "codeVoice": return `\`${it.code}\``;
        case "emphasis": return `*${inline(it.inlineContent)}*`;
        case "strong": return `**${inline(it.inlineContent)}**`;
        case "newTerm": return `**${inline(it.inlineContent)}**`;
        case "reference": {
          const r = refs[it.identifier];
          const title = it.overridingTitle ?? r?.title ?? it.identifier;
          return `[${title}](${r?.url ?? it.identifier})`;
        }
        case "link": return `[${it.title ?? it.destination}](${it.destination})`;
        case "image": {
          const r = refs[it.identifier];
          return `![${r?.alt ?? it.identifier}]`;
        }
        case "superscript": return `^${inline(it.inlineContent)}`;
        case "subscript": return `_${inline(it.inlineContent)}`;
        case "strikethrough": return `~~${inline(it.inlineContent)}~~`;
        default: return it.inlineContent ? inline(it.inlineContent) : "";
      }
    })
    .join("");
}

function imageInfo(id, item = {}) {
  const r = refs[id];
  // The visible caption under an image lives on the inline item (metadata.abstract), not in refs.
  const cap = item.metadata?.abstract ? ` CAPTION="${inline(item.metadata.abstract)}"` : "";
  if (!r) return `[image ${id}]${cap}`;
  const variants = (r.variants ?? []).map((v) => `${(v.traits ?? []).join("+")}: ${v.url}`).join(" | ");
  return `[IMAGE ${id}] alt="${r.alt ?? ""}"${cap} ${variants}`;
}

function blocks(items = [], depth = 0) {
  const pad = "  ".repeat(depth);
  for (const b of items) {
    switch (b.type) {
      case "heading": out.push("", `${"#".repeat(Math.min(b.level + 1, 6))} ${b.text}`); break;
      case "paragraph": out.push(pad + inline(b.inlineContent)); break;
      case "aside": out.push(`${pad}> [${b.name ?? b.style}]`); blocks(b.content, depth + 1); break;
      case "unorderedList":
      case "orderedList":
        b.items.forEach((li, i) => {
          const bullet = b.type === "orderedList" ? `${i + 1}.` : "-";
          const before = out.length;
          blocks(li.content, depth + 1);
          if (out.length > before) out[before] = `${pad}${bullet} ${out[before].trim()}`;
        });
        break;
      case "table": {
        for (const row of b.rows ?? []) {
          const cells = row.map((cell) => {
            const saved = out.length;
            blocks(cell, 0);
            const text = out.splice(saved).join(" ").trim();
            return text || " ";
          });
          out.push(`${pad}| ${cells.join(" | ")} |`);
        }
        if (b.metadata?.title) out.push(`${pad}(table: ${b.metadata.title})`);
        break;
      }
      case "row":
        for (const col of b.columns ?? []) { out.push(`${pad}[column span=${col.size}]`); blocks(col.content, depth + 1); }
        break;
      case "tabNavigator":
        for (const tab of b.tabs ?? []) { out.push(`${pad}[tab: ${tab.title}]`); blocks(tab.content, depth + 1); }
        break;
      case "links":
        for (const id of b.items ?? []) { const r = refs[id]; out.push(`${pad}- link: ${r?.title ?? id} (${r?.url ?? ""})`); }
        break;
      case "codeListing": out.push("```" + (b.syntax ?? ""), ...(b.code ?? []), "```"); break;
      case "termList":
        for (const it of b.items ?? []) { out.push(`${pad}- ${inline(it.term.inlineContent)}:`); blocks(it.definition.content, depth + 1); }
        break;
      case "small": out.push(pad + inline(b.inlineContent)); break;
      case "thematicBreak": out.push("---"); break;
      case "video": out.push(`${pad}[VIDEO ${b.identifier}]`); break;
      default:
        if (b.inlineContent) out.push(pad + inline(b.inlineContent));
        else if (b.content) blocks(b.content, depth);
        else out.push(`${pad}[unhandled block: ${b.type}]`);
    }
    // Standalone images inside paragraphs
    for (const it of b.inlineContent ?? []) if (it.type === "image") out.push(pad + imageInfo(it.identifier, it));
  }
}

out.push(`SOURCE: ${arg}`, `JSON: ${url}`, "");
out.push(`# ${doc.metadata?.title ?? "(untitled)"}`);
if (doc.abstract) out.push("", `ABSTRACT: ${inline(doc.abstract)}`);
for (const section of doc.primaryContentSections ?? []) blocks(section.content);
for (const group of doc.topicSections ?? []) {
  out.push("", `## [topics] ${group.title ?? ""}`);
  for (const id of group.identifiers ?? []) out.push(`- ${refs[id]?.title ?? id} (${refs[id]?.url ?? ""})`);
}
for (const group of doc.seeAlsoSections ?? []) {
  out.push("", `## [see also] ${group.title ?? ""}`);
  for (const id of group.identifiers ?? []) out.push(`- ${refs[id]?.title ?? id} (${refs[id]?.url ?? ""})`);
}
console.log(out.join("\n"));
