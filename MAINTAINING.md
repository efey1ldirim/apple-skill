# Maintaining this skill — ingestion protocol

Written for the agent (Claude) that adds pages to this skill in later sessions. Follow it
exactly so every page note has the same shape and nothing is skipped.

## The goal
Anyone who installs this plugin should get Apple-quality UI/UX from Claude. The HIG notes are
the "why and what" from Apple; the field notes are the "exactly how, on the web" from real,
approved screens. Notes are read later by Claude, so optimise for **retrieval and precision**,
not prose.

## Priority **[user decision]**
What the page **says** (its guidance, messages, rules, examples, the ideas behind linked items)
is the most important thing to capture — completely. Page structure and measured CSS are
useful but secondary: put them after the content in each note.

## Workflow per page (the user sends a URL + screenshots)
1. **Fetch the full content.**
   - HIG pages (`/design/human-interface-guidelines/...`): `node tools/hig-fetch.mjs <url>` —
     the HTML is an empty JS shell; this reads the DocC JSON and prints every heading,
     paragraph, list, table, aside, image alt text and related-page link.
     It also prints each image's visible **caption** (`CAPTION="…"`, from the image's
     `metadata.abstract` in the JSON — added 2026-09-28; before that, captions were only read from
     screenshots). Captions are page text, not "(from screenshot)". Videos print as
     `[VIDEO id] alt="…" CAPTION="…" light: url | dark: url` (added 2026-09-28).
   - **Pages with demo videos [user decision]**: when motion is the point (e.g. SF Symbols animations),
     measure the videos frame by frame in the browser (same-origin canvas on developer.apple.com) and
     store only the **numbers** (durations, scales, curves) as a token JSON tagged `MEASURED`; rebuild
     the effect for the web and verify it with a checker. Never commit Apple's videos or frames. Method:
     `references/symbol-effects.md` § provenance.
   - Other `/design/...` pages (landing, resources, whats-new, videos, awards…): WebFetch or the
     browser's `get_page_text`.
   - Read the **entire** output. Do not sample.
2. **Read every screenshot** the user sends. Describe what the text cannot tell: proportions,
   spacing, visual hierarchy, colours, how the example UI is composed. Screenshot descriptions
   go into the page note (§ Visual notes) — screenshots themselves are not committed.
   - **Cross-check screenshot text against the fetched text [user decision].** Read every
     word visible in the screenshots and compare it line by line with the fetch output. Some
     text never reaches the fetch (text baked into images, UI kits in illustrations, nav/menus,
     footers, dynamic widgets, content rendered by scripts). Anything found only in a
     screenshot is recorded in the note with the marker **(from screenshot)**.
   - **Visual examples [user decision]**: if the page has don't/do image pairs (✗/✓) or
     side-by-side comparison images, add the slug to `PAGES` in `tools/fetch-visual-examples.mjs`,
     run it, and add each new pair to the catalog table in
     `skills/apple-ui/references/visual-examples/README.md` (our words). Reference the pair id in
     the page note's § Visual notes.
     Stand-alone images that are comparisons by themselves (before/after inside one image, e.g.
     optical centring) are not in rows — add their image names to `SINGLES` in the script.
   - **Critical pages [user decision]**: pages the user marks critical (so far: **Color**, **Layout**, **Materials**) get a
     ⚠️ CRITICAL header, an exact machine-readable token file under `skills/apple-ui/tokens/`, a
     checker in `tools/`, and a gate in `SKILL.md`. Extract every value from the JSON (never
     retype from screenshots) and cross-check against the screenshots.
3. **Write the note** at `skills/apple-ui/references/hig/<section>/<slug>.md` using the
   template below. Sections: `overview`, `getting-started`, `foundations`, `patterns`,
   `components/<group>`, `inputs`, `technologies`, `other`.
4. **Update `skills/apple-ui/references/INDEX.md`**: add the row to the ingestion table
   (page, file, date) and, if the page affects a task type, add it to the routing table.
5. **Cross-link**: if the page confirms, refines, or conflicts with a field note, say so in
   the page note's § Web translation and, if needed, update the field note.
6. **Report to the user** in Turkish: what was captured, counts (rules, specs, platform
   notes), anything unclear.

## Copyright rule — important
Apple's HIG text is copyrighted and this repo is public. Notes must be written **in our own
words**: capture every rule, number, do/don't, platform difference and example — completely —
but never paste Apple's sentences. Numbers, API names, colour values and sizes are facts and
are recorded exactly. Short quotes (< 15 words) only when the exact wording matters, and at
most one per note. Never commit Apple's images; describe them.

## Page note template
```markdown
# <Page title>
Source: <url> · Section: <Foundations/…> · Ingested: <YYYY-MM-DD> · Apple last updated: <if shown>

## In one line
<the page's core idea, our words>

## Rules
<Every guideline on the page, one bullet each, imperative voice, grouped by the page's own
headings. Keep Apple's heading structure so we can find things. Mark strength:
**must** (Apple says always/never), **should** (prefer/avoid), **may** (consider).>

## Specs & values
<Every number: sizes, pt/px, ratios, durations, colour values, type sizes, contrast ratios,
tables reproduced as tables (facts), API names.>

## Platform considerations
<iOS / iPadOS / macOS / tvOS / visionOS / watchOS — each difference, or "none noted".>

## Visual notes (from screenshots)
<What the example images show: composition, proportions, spacing, states.>

## Web translation
<How this maps to web/React/Tailwind/CSS: concrete classes, CSS, ARIA; which field-note
components implement it; any conflict with a field note and which wins.>

## Checklist
<3–10 yes/no checks to verify a design against this page.>

## Related
<Other HIG pages linked from this one (and whether they're ingested).>
```

## Style
- English (portable, matches Apple terminology). The user communicates in Turkish; reply to
  them in Turkish.
- Bullets over paragraphs. One fact per bullet. No filler.
- Never drop a rule because it "seems obvious" — completeness is the point.
- If the page is platform-native only (e.g. a SwiftUI API), still record it, and say in
  § Web translation whether/how it applies to the web.
