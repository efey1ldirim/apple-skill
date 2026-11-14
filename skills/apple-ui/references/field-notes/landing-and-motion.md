# Landing pages & motion — marketing-surface language

Validated on four production landing surfaces: a dark-only product page rebuilt on Apple's
product-page architecture, a theme-aware homepage, a dark-only MCP page and a theme-aware
integration page. Section-by-section measured values (Apple's own CSS) live in
`../apple-web/product-pages.md`; this file holds the decisions, what to put in each section,
what was rejected and the traps.

## Process — how a hero gets approved
- **Propose before coding.** For a new hero or section concept, send 3–5 short written ideas
  (image · motion · one message · why · cost/risk), no code. The owner picks one; then build only
  that, show it, and move section by section ("now the highlights", "now the closer look").
- When a direction is rejected, ask for (or infer) the one-sentence reason before the next round;
  two prototypes in a row were rejected for being "too creative".
- Every claim on the page is checked against the code or the policy before it ships. If it can't
  be verified (a tool count behind feature flags, "not used for model training" when the policy
  only says it for one integration), leave it out and raise it as a decision.

## Hero
- Exactly three things: the **one object**, **one message**, **one action** (a second quiet link
  is allowed on product pages). Kicker, intro sentence, footnote, second CTA and a giant outline
  wordmark behind the hero were all removed as "too busy"; the freed space went to making the
  object bigger (15rem → 19rem).
- "Impressive visuals + one main message" beats a clever concept. Rejected: a thermal receipt
  printing and tearing, a product screen on a reflective desk, a thick-glass composer, a lock-screen
  notification, a single giant number — see `anti-patterns.md`. Accepted: the product's own brand
  object (an orb) **born** on black — a pinpoint of warm light opens into the orb in ~1.5 s, then
  the name, the line and the buttons sharpen in after it ("light first, then words"); the orb
  breathes and follows the pointer with lag; on scroll the camera dives into it and it dissolves
  into the next section's colour.
- The hero object must not promise something not every customer has (a voice orb used as the
  brand's face, not as "talk to it", while voice is plan-gated).
- Homepage hero is full-screen with no bottom padding: only the hero is visible at first paint,
  and the next section's title arrives with the first scroll.
- A rotating phrase in the headline gets a thin underline in content colours, drawn left→right
  after each new phrase settles, so the eye knows which word changes.

## Composition
- Giant **masked headline lines** (each line reveals from behind a mask on scroll/entry).
- Glass only on functional layers (nav, control bars, floating buttons) — see principles §12 and
  the MATERIALS GATE. Never on cards.
- One WebGL/canvas stage per page at most; everything else is DOM. Text is real HTML; the canvas
  sits on top with `pointer-events: none`, so the page reads fully without WebGL.
- Giant faint outline typography (product name) is allowed once — in the closing section.
- Section order and the one question each section answers: `../apple-web/product-pages.md` § 1.
- The product's real UI beats illustration: closer-look stages use real screenshots captured from
  the app at @3x; showcase devices show the real UI drawn 1:1.

## Photography (real-life sections)
- The photo must tell the section headline literally (Apple's night drive = "anywhere, for hours").
  A good photo with the wrong story (shop open and busy when the headline is about after closing)
  was rejected.
- Real people only. AI-generated humans are exactly the "smells like AI" feeling the page fights.
  Best: a custom shoot with a real customer (shot on a phone, 16:9 ≥ 2560 px + a 4:5 crop). Write
  the shoot brief at the top of the component and keep a `PHOTO = null` slot that falls back to a
  product shot in the same framing.
- Free stock (Unsplash, Pexels) is allowed commercially, but: signage must match the audience's
  locale; a **recognisable face in an ad implies endorsement** (Pexels' licence forbids it) — prefer
  scenes where nobody is identifiable; record source, author and licence next to the asset.
  Paid stock ranges ~$10–135 per image (Stocksy is the least "stocky"); the owner declined paid.
- Framing for overlay: dark top-left for the headline, dark bottom third for the stat card,
  subject in the right half. Produce desktop and phone crops (`sips`/`sharp`), ~1 MB / ~0.45 MB.

## Highlights cards (content rules)
- One feature per card, each a concrete output playing out (see `../apple-web/product-pages.md` § 3).
- Name things the way the product names them; copy short labels from the real UI; keep the card
  title the user approves verbatim.
- Real hardware, current details (Dynamic Island size, battery glyph, logo on the lid), real OS
  chrome drawn 1:1, a consistent wallpaper across all phones.
- Timing is tuned by eye with the owner: first event early (the phone enters from fully off-screen
  and the first notification arrives fast), equal intervals, the zoom right after the first event,
  zoom speed brisk. Nothing pokes into a card before its moment (no notification edge visible at frame 0).
- People in scenes (digital employees, customers) get real avatars from free-licence sources,
  recorded with their licence.
- Partner claims: say what the user does ("Connect your store in one click"), put the partner
  status in a small badge — not "we are the official partner of X" as the headline.

## Colour per section
- Each section may own a palette (e.g. indigo/violet hero, mint capabilities, graphite-green,
  ember-cream, violet dusk close) — colour lives in the **background and surfaces only**.
- Buttons are identical in every section: black pill on light theme, white pill on dark (or the
  product's one accent on a dark product page).
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
  selection; `ease-out` for progress fills. Page-level reveals and camera moves use Apple's
  product-page curve `cubic-bezier(.28,.11,.32,1)` (full table: `../apple-web/product-pages.md` § 10).
- Press feedback is scale (0.97–0.99), not colour flashes.
- Motion shows **where something went** (sliding thumb) instead of blinking state changes.
- Respect `prefers-reduced-motion`: disable scale/translate/scroll choreography; scenes show their final frame.
- 60 fps is a requirement, not a nice-to-have: animate `transform`/`opacity` only, write per-frame
  values straight to the DOM, pause off-screen work, and measure on the real machine.
- HIG cross-check (`hig/foundations/motion.md`): Apple confirms purposeful, brief, gesture-following
  motion and gives no durations — the values above are ours (FN). Apple adds: no motion as the only
  signal, never block input on an animation, no custom motion on frequent interactions, no motion at
  the viewport edges, no sustained ~0.2 Hz (≈ 5 s) oscillation, no rotating/fly-through scenes.

## Traps found while building these pages
- **Theme switch zeroes animations.** A theme helper that disables transitions for two frames
  (`animation-duration: 0s !important`) fires every `animationend` at load — an autoplay gallery
  skipped to card 3. Ignore progress ends with `event.elapsedTime < 0.5`.
- **`offsetLeft` rounds** — measure the card step from layout with fractions, or the position
  drifts by the last card.
- **Phone gallery end**: with only gutter padding the last card can't snap to the start; pad the
  end by `100vw − gutter − card width`.
- **Stretched link + `:active { transform }`**: a button whose `::after` covers the card becomes
  its own containing block when pressed and the click lands on the card. Use opacity for press there.
- **`backdrop-filter` on a fixed bar** traps fixed children (menus) inside it — blur a separate layer.
- **Cookie banner / chat bubble** must not cover a showcase or the primary action; defer or hide
  them on those routes and leave bottom room in the footer.
- **Descenders clipped at first paint** (e.g. Turkish "ş" tails) in masked headline lines: give the
  mask line box enough bottom padding before fonts load.
