# Landing pages & motion — marketing-surface language

Validated on two product landing pages (a dark-only one and a theme-aware one).

## Composition
- Giant **masked headline lines** (each line reveals from behind a mask on scroll/entry).
- Glass surfaces for floating cards (see principles §12).
- One WebGL/canvas stage per page at most; everything else is DOM.
- Hero keeps exactly three things: headline, the one hero object, the one action/field
  (e.g. an address pill with Copy). Kicker text, intro sentence, footnote, second CTA and a
  giant outline wordmark behind the hero were all removed as "too busy"; the freed space went
  to making the object bigger (15rem → 19rem).
- Giant faint outline typography (product name) is allowed once — in the closing section.

## Colour per section
- Each section may own a palette (e.g. indigo/violet hero, mint capabilities, graphite-green,
  ember-cream, violet dusk close) — colour lives in the **background and surfaces only**.
- Buttons are identical in every section: black pill on light theme, white pill on dark.
- Keep palettes in one source file feeding both CSS variables and WebGL uniforms; a test
  should fail if a section has no palette entry.
- A theme-aware page must define every colour twice; a `forceTheme('dark')` page doesn't —
  decide up front, it doubles the colour work.

## Hero object choreography (scroll-driven, GSAP ScrollTrigger)
- A 3D card at the hero centre grows and turns ~1.5 revolutions while scrolling, becomes the
  next section's tile at the exact end of the turn, and lands **pixel-exactly** on that tile.
- Fragile points:
  1. Hero must be exactly `100svh` with symmetric padding, or the `absolute → fixed` handoff jumps.
  2. The landing target is **measured by a function** with `invalidateOnRefresh` — never
     hard-code coordinates.
  3. The object passes **under** content so it never covers text; on dark it disappears behind
     glass cards unless a palette-coloured halo sits behind it.
- Pointer tilt on hero: put tilt on a wrapper (`__tilt`) and rotation on an inner layer
  (`__inner`) — writing both to one element makes them overwrite each other. Fade tilt strength
  to zero as the journey progresses, or the pixel-exact landing breaks.
- Floating labels around the hero face the centre, sit back in depth, and far ones are blurred
  (depth of field) rather than laid flat.

## Motion rules
- UI transitions 150–300ms; Apple's sheet curve `cubic-bezier(0.32,0.72,0,1)` for sliding
  selection; `ease-out` for progress fills.
- Press feedback is scale (0.97–0.99), not colour flashes.
- Motion shows **where something went** (sliding thumb) instead of blinking state changes.
- Respect `prefers-reduced-motion`: disable scale/translate/scroll choreography.
