# Principles — the design language, with reasons

Origin: distilled from 20 curated Apple-style reference shots (see
`../screenshots-described/curated-references.md`) and then validated screen by screen on a
production SaaS web app (Nonplo, 2026-08 → 2026-09). Rules marked **[user decision]** were
explicit calls by the product owner after seeing alternatives rendered; treat them as binding.

The owner's recurring complaint about rejected designs was "looks AI / generic template /
cheap". Almost every rule below exists to remove one specific source of that feeling.

---

## 1. Canvas: binary, no mid-tones
- Light canvas `#F5F5F7` (Apple's own off-white; `#EFEFEF` / warm off-white also appear in refs).
- Dark canvas `#08080A` (near-black; refs range `#000`–`#0A0A0A`).
- **Never a mid-grey page background.** Not one reference uses it.
- The page paints its own canvas (`min-h-screen bg-[#F5F5F7] dark:bg-[#08080A]`) so embedded
  screens look identical inside or outside an app shell.

## 2. Depth: shadow and light, not borders
- Shadows are wide, very soft, low opacity, **colourless** (black at low alpha).
- Card edge is either nothing or a 1px hairline (`black/[0.04–0.07]`). Pronounced frames: never.
- Dark mode: shadows are invisible, so the edge becomes an **inset light line**
  (`ring-white/[0.08]` or `inset 0 0 0 1px rgba(255,255,255,.08)`), or the surface is a
  translucent white (`white/[0.055]`) lifting off the black.
- A floating tile gets a second, blurred "puddle" shadow underneath (`blur-xl` blob) so it
  looks like it hovers above the canvas — this is the anchor of a screen.

## 3. Groups, not cards — "the fewer layers the better" **[user decision]**
- Related rows live in **one** soft rounded block; rows are separated by **hairlines**, not
  borders or gaps. The hairline starts at the text, i.e. right of the icon (iOS inset).
- **No box inside a box.** A group is already a white rounded surface; putting a grey filled
  rounded input inside it creates a second layer. Inside groups, fields are **bare**
  (transparent, borderless) — the row *is* the field.
- A grey filled input is correct only on surfaces that live *outside* a group.
- Same logic: a segmented control sits **above** the group (it has its own grey rail); a file
  drop area is the group's only content, not a dashed frame inside it; a long text block does
  not get its own grey box.
- Controls attached to a row (switch, colour dot, stepper) go on the **right** of the row, not
  on a line below the label (iOS style). Only full-width controls (segmented) stack below.

## 4. One filled button per screen
- Primary: full pill, black on light / white on dark. Exactly one visible.
- Secondary: plain text (grey, darkens on hover) or a quiet grey pill (`black/[0.06]`).
- Back/close in a header are **text**, not boxed icon buttons — boxed buttons compete with the
  one filled pill.
- Pricing-style lists: only one card's button is filled; the others are muted. Hierarchy is
  built by *which one is filled*, not by colour.
- A destructive secondary action is red text with no fill; a filled red pill only when repair
  is *the* action (e.g. "Reconnect" on a broken item).
- Exception with a reason: an upgrade/plan CTA may be the brand blue, matching the pricing
  page, because its job ends on another page and colour tells the user where they're going.

## 5. Colour belongs to content, not chrome
- The skeleton stays neutral. Colour comes from photos, album art, gradient imagery, brand
  logos, or a single tinted icon tile.
- Brand colour never floods the background; it lives in one element.
- iOS Settings pattern: **28px coloured squircle icon tiles** in system colours
  (`#007AFF` blue, `#5856D6` indigo, `#34C759` green, `#FF3B30` red, `#AF52DE` purple,
  `#FF9500` orange, `#8E8E93` grey). Colour lives only in the tile; the row stays neutral.
  Monochrome grey glyphs make six rows indistinguishable.
- Third-party marks are shown **in their own colours and whole** — never recoloured to a single
  monochrome glyph, never cropped **[user decision]**: "use the logo I gave you".
- In an editor, colour swatches are resolved against **the panel's surface**, not the preview's
  theme — otherwise a white swatch vanishes on a white group.

## 6. Status is dot-sized
- Status colour lives in a 5–8px dot or a short tinted word — never a coloured banner/box.
  **The dot is never alone**: always paired with a word or an icon shape (HIG Accessibility:
  never convey information by colour alone).
- Verification line example: `✓ recognised` (green check) · `• not recognised` (amber dot),
  one line, grey text.
- A healthy item: small green dot at the tile's top-left. A broken item: red "!" badge in the
  **same** corner (user shouldn't hunt), thin red outline on the card, red pill action.
  The rest of the card does not change.
- "Coming soon" is a state, not an action: a non-interactive grey pill (`span`, not a
  disabled `button`, or people keep clicking it).

## 7. Typography jumps
- Big headline (24px in compact screens; 34–44px page titles; 44–104px hero) vs small body
  (13–17px). Almost no intermediate sizes.
- Headlines semibold/bold with **negative tracking** (−0.02em to −0.03em). Body −0.01em.
- **Two-tone headline**: one line primary, the next grey. Emphasis by **tone**, not colour.
- Big faint background typography (a product name) floating behind a composition — a
  marketing-only device.
- **Big number + small label** pairing (tabular numerals, grey label).
- Titles are **nouns** ("Channels"), not questions ("Which channel brings business?"); the
  answer goes in the headline itself.
- Secondary text by opacity tones — **accessibility-corrected**: `black/60` sub-line,
  `black/55` description and footnote (dark: `white/60`, `white/55`, `white/50`). The originally
  approved `/45`, `/40`, `/30` look softer but fail WCAG AA 4.5:1 for small text (see tokens.md
  and `../hig/foundations/accessibility.md`).

## 8. No uppercase eyebrows **[user decision, rejected twice]**
- Small (~11px) + UPPERCASE + wide tracking (.14em) + grey section labels are banned.
- Use sentence case, 17–22px, semibold, −0.015 to −0.021em tracking, **primary** colour.
- A count next to a title is a quiet grey numeral, not a dark filled badge — no second dark
  blot on the title line.
- Also banned: uppercase status badges like "MAKES CHANGES". Move that information into the
  row's description sentence.

## 9. Squircles, scaled
- Icon tile radius ≈ 23–25% of size (60px → 14px, 72px → 17px, 28px → 8px, 36px → 11px).
- Groups/cards 18–20px; large marketing cards 20–32px.
- Buttons and segmented rails: always fully round (`rounded-full`).
- Selection marks: **circles** (21px), not square checkboxes — square boxes feel like a form.

## 10. One vertical axis, one column **[user decision]**
- Everything starts from the same left edge or is fully centred; no mixed alignment.
- Space between sections = 2–3× space within a section.
- **No two-column desktop layouts for flows.** A System-Settings-style left sidebar was tried
  and rejected. Solve "squeezed in the middle" by widening the column (30rem → 38rem, 46rem
  for wide content), stepping type up at `lg` (title 26 → 30 → 36px, tile 60 → 72px), and
  vertically centring short steps (`my-auto`).

## 11. One surface, one idea
- A widget shows one datum; a card tells one thing; a screen has one grammar. Never two
  different row/card grammars on the same page.
- If a card carries two ideas, split it or move one idea to where it belongs.
- Charts: hierarchy by **tone** (largest bar fully opaque, others ~35%) rather than rainbow
  colour; colouring that carries no information is removed.

## 12. Glass only on the floating layer
- `backdrop-filter: blur` + low-opacity white/black + a 1px light top edge.
- For nav bars, sticky footers, panels, overlays — never for the base layer.
- A sticky footer melts into content with a gradient fade above it, not a hard top border
  (a border makes it look like a second screen).

## 13. Minimal endings **[user decision]**
- The last screen of a wizard is just a huge headline ("You're ready", up to 104px on large
  screens) and one button. Summary lists and dark hero cards were tried and rejected.
- Hero sections: keep only headline + the one object + the one action. Extra kicker lines,
  intros and footnotes were removed at the owner's request ("screen is too busy").

## 14. Nothing covers the flow
- Chat bubbles, cookie banners, promo toasts must not overlap the primary action on focused
  flows (consent, checkout, wizards) — suppress or defer them on those routes.

## 15. No-scroll focused screens
- Consent/permission screens fit in `100dvh`; header and actions fixed; only the list shrinks
  and scrolls internally. Scrolling a consent screen = approving without seeing.
- Copy is trimmed until it fits: one-line trust line, one-line footnote (measured, not guessed).

## 16. Copy
- One sentence says *what* to do; the controls themselves say *how*.
- Remove sentences that duplicate an adjacent control ("if you don't recognise it, cancel" next
  to a Cancel button).
- Security/trust copy states facts calmly ("not recognised · it named itself") rather than
  generic warning templates.
- Don't show percentages that drive no decision ("38% complete"); show phase + a filling bar.
