# Maintaining this skill — ingestion protocol

Written for the agent (Claude) that adds pages to this skill in later sessions. Follow it
exactly so every page note has the same shape and nothing is skipped.

## The goal
Anyone who installs this plugin should get Apple-quality UI/UX from Claude. The HIG notes are
the "why and what" from Apple; the field notes are the "exactly how, on the web" from real,
approved screens. Notes are read later by Claude, so optimise for **retrieval and precision**,
not prose.

## Workflow per page (the user sends a URL + screenshots)
1. **Fetch the full content.**
   - HIG pages (`/design/human-interface-guidelines/...`): `node tools/hig-fetch.mjs <url>` —
     the HTML is an empty JS shell; this reads the DocC JSON and prints every heading,
     paragraph, list, table, aside, image alt text and related-page link.
   - Other `/design/...` pages (landing, resources, whats-new, videos, awards…): WebFetch or the
     browser's `get_page_text`.
   - Read the **entire** output. Do not sample.
2. **Read every screenshot** the user sends. Describe what the text cannot tell: proportions,
   spacing, visual hierarchy, colours, how the example UI is composed. Screenshot descriptions
   go into the page note (§ Visual notes) — screenshots themselves are not committed.
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
