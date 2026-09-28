---
name: apple-ui
description: >
  Build and review UI/UX at Apple quality — web (React/Tailwind/CSS), iOS, macOS, and
  cross-platform. Grounded in Apple's Human Interface Guidelines (distilled page by page in
  references/hig/) plus field-proven web patterns with exact values (references/field-notes/).
  Use whenever the user asks for an "Apple-style" / "Apple-quality" / "premium" / "minimal"
  screen, a new page, settings screen, onboarding wizard, consent/permission screen, landing
  section, dashboard, or a design review — and whenever a design "looks generic", "looks AI",
  or "looks cheap". Also use before writing any new UI component in a project that already
  follows this language.
---

# Apple-quality UI

You are designing as an Apple design engineer would: restraint first, one idea per surface,
depth from light and tone instead of borders and colour, and every number chosen on purpose.

This skill has two knowledge sources. **Read the relevant files before you write UI — do not
work from memory of this summary.**

| Source | Path | What it is |
|---|---|---|
| Apple HIG, distilled | `references/hig/` | One file per developer.apple.com/design page: every rule, value, do/don't, platform difference. Start at `references/INDEX.md`. |
| Field notes | `references/field-notes/` | Patterns validated on a production web app, with exact Tailwind/CSS values, components, rejected ideas and engineering traps. |
| Apple's web patterns | `references/apple-web/` | Apple's own websites measured live (mega-menu, nav, cards, docs layout) — the closest reference for web work. |
| Visual references | `references/screenshots-described/` | Text descriptions of screenshots (Apple pages and curated reference shots) so proportions can be recalled without the images. |

## Workflow

1. **Classify the task.** New screen? Component? Review? Platform (web / iOS / macOS / visionOS)?
2. **Route.** Open `references/INDEX.md` and read every file the routing table lists for this
   task type. Always read `field-notes/principles.md` and `field-notes/anti-patterns.md`.
   For web work also read `field-notes/tokens.md` and `field-notes/components.md`.
3. **Check the host project first.** If it already has an Apple-style surface module (shared
   group/row/button primitives), import from it — never re-invent a second grammar on the
   same page. Match its tokens exactly.
4. **Compose, then justify.** For each surface state its one idea, its single filled action,
   and where colour lives. If you cannot name them, the design is not done.
5. **Verify visually.** Render it (browser preview / simulator), check light AND dark, check
   375px width, check that nothing scrolls that should not. Measure; don't eyeball.
6. **Run the checklist** at the bottom before calling it finished.

## Apple's eight design principles (HIG, reintroduced June 2026)
Purpose (make something meaningful) · Agency (let people do things their own way) ·
Responsibility (act in people's best interest) · Familiarity (build on what people know) ·
Flexibility (adapt to diverse contexts and needs) · Simplicity (be clear and direct —
simplicity is *not* minimalism) · Craft (care about every detail) · Delight (make it human —
never decoration). Use them to resolve trade-offs; details and web translations in
`references/hig/getting-started/design-principles.md`.

## Visual language (short form — details live in the references)

- **Clarity, deference, depth.** Content leads; chrome recedes; hierarchy comes from layering,
  tone and motion — not ornaments. (Expanded in `hig/` as pages are ingested.)
- **Binary backgrounds.** Very light (`#F5F5F7`) or near-black (`#08080A`). No mid-grey canvas.
- **Depth from shadow and light, not borders.** Wide, soft, colourless shadows; at most a 1px
  hairline. In dark mode, an inset highlight replaces the shadow.
- **Groups, not cards.** Related rows share one soft rounded block with hairline separators
  that start after the icon. No box inside a box — the fewer layers, the better.
- **One filled button per screen.** Black pill on light, white pill on dark. Secondary actions
  are plain text or a quiet grey pill.
- **Colour comes from content, not chrome.** Brand/system colour lives in one element (icon
  tile, image, a single CTA). Status colour is dot-sized, never a banner.
- **Typography jumps.** Big semibold headlines with negative tracking against small calm body
  text; almost no in-between sizes. Emphasis by **tone** (grey vs black), not by colour.
- **No uppercase eyebrow labels.** Small + UPPERCASE + wide-tracked section labels read as
  generic/AI. Section titles are sentence case, ~17–22px, semibold, primary colour.
- **Squircles everywhere, scaled.** Icon tiles ≈ 23–25% radius; groups 18–20px; buttons fully
  round.
- **One vertical axis, single column.** Everything aligns to one left edge or is centred.
  On desktop grow the column and the type — don't split into two columns.
- **Circle selection marks**, whole row tappable; iOS-style segmented control with a sliding
  thumb; 52px minimum row height; 44px+ touch targets.

## Pre-ship checklist

- [ ] Exactly one filled button visible per screen/state.
- [ ] No uppercase/wide-tracked eyebrow labels; no count badges shouting next to titles.
- [ ] No bordered card inside a rounded group; inputs inside groups are bare.
- [ ] Background is `#F5F5F7` / `#08080A` (or the host project's equivalent pair).
- [ ] Every light-mode colour has its dark pair; hairlines/shadows adapted for dark.
- [ ] Status colour is a dot or a short tinted word — no coloured banners/boxes.
- [ ] Headlines have negative tracking; body 13–17px; secondary text ≥ 4.5:1 contrast (black/55+ light, white/50+ dark — not /40).
- [ ] Layout works at 375px with no horizontal overflow (grid `min-w-0` trap checked).
- [ ] Fixed-height flows use `100dvh`, not `100vh`; the primary action is always visible.
- [ ] `prefers-reduced-motion` respected; transitions ≤ 300ms with Apple-like easing.
- [ ] Touch targets ≥ 44px; focus is visible for keyboard users.
- [ ] Rendered and looked at in both themes — screenshot, not assumption.
