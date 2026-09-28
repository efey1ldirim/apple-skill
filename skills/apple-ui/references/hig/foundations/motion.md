# Motion
Source: https://developer.apple.com/design/human-interface-guidelines/motion · Section: Foundations ·
Supported platforms: all six (iOS, iPadOS, macOS, tvOS, visionOS, watchOS) · Ingested: 2026-09-28 ·
Screenshots: 6 (dark-mode page, hero → change log heading). Body text, both notes, related links and
video titles were cross-checked line by line against the fetched content — all match. The page has
**no ✗/✓ pairs or comparison images** (only the hero), so it adds no visual-example ids. Text that
exists only in the screenshots is marked **(from screenshot)**.

Apple change log:
- **2025-09-09**: guidance for Liquid Glass added (the input-dependent glass motion example).
- 2024-06-10: game-specific examples; stronger guidance for motion in games.
- 2024-02-02: stronger guidance on minimising peripheral motion in visionOS apps.
- 2023-06-21: visionOS guidance added.

## In one line
Motion exists to **inform** — status, feedback, instruction, continuity — not to decorate. Keep it
short, precise and faithful to the gesture that caused it; never let it be the only carrier of
meaning; never make people wait for it; and in immersive/full-view contexts protect comfort
(nothing moving at the edges, no rotating world, a fixed frame of reference, no slow sustained
oscillation around 0.2 Hz).

## Rules

### Framing (intro)
- The page frames motion as having four jobs: bring the interface to life, **convey status**,
  **give feedback and instruction**, and enrich the visual experience.
- Many **system components already animate**. Using them gives people familiar, consistent motion
  across the app or game for free.
- System components may **change their motion** in response to accessibility settings or the
  **input method**.
  - Example: **Liquid Glass** moves with **more emphasis under direct touch** (to feel tactile), and
    with a **more subdued effect when driven by a trackpad**.
- The guidelines below apply when you design **custom** motion.

### Best practices
- **must — Add motion only with a purpose; it supports the experience and never upstages it.**
  - No motion for its own sake.
  - Gratuitous or excessive animation distracts, and can leave people feeling disconnected or even
    **physically unwell**.
- **must — Make motion optional.**
  - Some people can't, and some don't want to, experience motion.
  - Therefore motion must **never be the only channel** for important information.
  - Back visual feedback with other channels, e.g. **haptics** and **audio**.

### Providing feedback
- **should — Make feedback motion realistic: it follows the person's gesture and matches what they
  expect.**
  - In non-game apps, accurate physical motion teaches how something works; motion that makes no
    sense disorients.
  - Example: a view revealed by **sliding down from the top** should not be dismissed by **sliding
    sideways**. Dismiss along the path it came in.
- **should — Keep feedback animations brief and precise.**
  - Brief, precise feedback feels light and unobtrusive, and often communicates **better** than a
    big animation.
  - Game example: a short animation tied exactly to a successful action lets players read the result
    instantly without losing focus on play.
  - visionOS example: tapping a panorama in Photos makes it expand **quickly and smoothly** to fill
    the space in front of the person. They can follow the transition, and they don't wait to see the
    content.
- **should — In apps, avoid adding motion to frequent UI interactions.**
  - Standard elements already have subtle system animations.
  - For custom elements, don't make people spend attention on needless motion **every time** they
    use them.
- **must — Let people cancel motion.**
  - Wherever possible, never make people wait for an animation to finish before they can act.
  - This matters most for animations they will see **more than once**.
- **may — Use animated symbols where they make sense.**
  - With **SF Symbols 5 or later**, animations can be applied to SF Symbols and to custom symbols.
  - Guidance lives on SF Symbols § Animations (✓ `sf-symbols.md`); the presets are measured and rebuilt
    for the web in `references/symbol-effects.md` (`tokens/apple-symbol-effects.*`).

### Leveraging platform capabilities (games)
- **should — Make the game's motion look great by default on every supported platform.**
  - A **consistent 30–60 fps** usually gives smooth, attractive motion in most games.
  - Use each device's graphics capabilities to pick **good default settings**, so people don't have
    to change settings before they can enjoy the game.
- **should — Let people tune visuals for performance or battery life.**
  - Example: offer switching between **power modes** when the system detects an **external power
    source**.

## Specs & values
| Item | Value |
|---|---|
| Game frame rate for smooth motion | consistent **30–60 fps** |
| Oscillation frequency to avoid (visionOS) | around **0.2 Hz** (≈ one cycle every **5 s**) |
| SF Symbols animation availability | **SF Symbols 5** or later (SF Symbols and custom symbols) |
| watchOS easing | built into every layout/appearance animation, at **start and end**; **cannot** be turned off or customised |
| Durations / curves | **none given** on this page — web values in the field notes are FN/CONV, not HIG |

APIs named: SwiftUI (*Animating views and transitions* tutorial), WatchKit `WKInterfaceImage`
(layout/appearance animation and animated image sequences).

## Platform considerations

### iOS, iPadOS, macOS, tvOS
- No additional considerations.

### visionOS
- Motion here does the usual jobs (subtle context, drawing attention, enriching immersion), and it
  can also combine with **depth** to give essential feedback when people **look at** interactive
  elements.
- Because motion is likely to be a **large part** of a visionOS experience, avoiding distraction,
  confusion and discomfort is **crucial**.
- **should — Keep motion away from the edges of the field of view as much as possible.**
  - People are especially sensitive to peripheral motion.
  - Beyond distraction, it can cause discomfort because it feels like the person or the room is
    moving.
  - If an object must move in the periphery during an immersive experience, keep its **brightness
    similar to the rest of the visible content**.
- **should — Keep people comfortable when large virtual objects move.**
  - An object that fills much of the field of view and hides most or all of passthrough gets read as
    **part of the surroundings**, so its movement can feel like the world moving.
  - Remedies: **raise its translucency** (so people see through it) or **lower its contrast** (so
    the motion is less noticeable).
  - **Note:** discomfort can occur even when the person is the one moving the large object (e.g. a
    window). Translucency and contrast help; also consider keeping **windows fairly small**.
- **may — Relocate objects with fades.**
  - People naturally watch an object travel.
  - If the journey tells them nothing useful, **fade out, move, fade back in** at the new place.
- **should — Generally don't let people rotate a virtual world.**
  - Rotation upsets the sense of stability, even when the person controls it and even when it is
    subtle.
  - Instead, use **instant direction changes hidden inside a quick fade-out**.
- **may — Give people a stationary frame of reference.**
  - Movement is easier to handle when it's contained inside an area that doesn't move.
  - When the whole surrounding appears to move (e.g. a game that carries the player through space
    automatically), people can feel unwell.
- **should — Avoid sustained oscillation.**
  - Especially avoid oscillation at about **0.2 Hz**; people are very sensitive to it.
  - If objects must oscillate, keep the **amplitude low** and consider making the content
    **translucent**.

### watchOS
- SwiftUI is the recommended, streamlined way to add motion.
- For WatchKit layout/appearance animation or **animated image sequences**, use `WKInterfaceImage`.
- **Note:** every layout- and appearance-based animation has **built-in easing at start and end**;
  it can't be disabled or customised.

## Resources listed
- Related: Feedback (✓ CRITICAL, `hig/patterns/feedback.md`); **Accessibility** — note this link goes to
  **apple.com/accessibility**, not the HIG page (our HIG Accessibility note ✓ covers Reduce Motion);
  Spatial layout (not yet); Immersive experiences (✓).
- Developer documentation: *Animating views and transitions* — SwiftUI.
- Videos: *Enhance your UI animations and transitions* (WWDC24 10145), *Create custom visual effects
  with SwiftUI* (WWDC24 10151), *Design considerations for vision and motion* (WWDC23 10078).
- In-text links: Materials § Liquid Glass (✓), Playing haptics, Playing audio, SF Symbols §
  Animations, Spatial layout § Depth / § Field of view, Immersive experiences § Immersion and
  passthrough (✓).

## Visual notes (from screenshots)
- **Page chrome (from screenshot):**
  - "Supported platforms" shows all six platform glyphs.
  - The on-page TOC reads: Motion · Best practices · Providing feedback · Leveraging platform
    capabilities · Platform considerations · Resources · Change log.
  - The left nav marks Motion as selected with a blue focus ring.
- **Hero:**
  - Yellow gradient card (Foundations colour) with a construction grid of rectangles, diagonals and
    concentric circles.
  - Right: a solid, pale-yellow rounded **diamond**.
  - Left of it: a **chevron**, the visible sliver of a second diamond behind the first.
  - Further left: an **arc of ~11 dots** tracing the leading edge of a third.
  - Reading left to right, it's a motion trail: dots → chevron → solid shape. The motion sits in the
    **path**, with no blur or streaks.
  - The alt text calls it three overlapping diamonds moving left to right.
- **Notes:** the two "Note" asides are rounded dark-grey boxes with a grey "Note" label, the same
  style as on other pages.
- **Video cards (from screenshot):** three rounded white thumbnails.
  - First: an iPad showing a wavy line of purple letter-circles, with a row of purple dots below.
  - Second: a red→orange→blue S-shaped gradient field.
  - Third: a line drawing of a head with eye/ear-canal lines and three coloured flower sprites
    streaking toward it.
  - Captions match the fetched titles.
- **Change log:** only the heading and the start of the table header are visible in the last
  screenshot. The four rows come from the fetch.

## Web translation
The HIG gives principles and a few hard numbers (30–60 fps, 0.2 Hz). It gives **no durations or
curves**; those come from the field notes (**FN**) and Apple's own web (**APPLE-WEB**) and are labelled
as such.

| HIG rule | Web implementation |
|---|---|
| Purposeful motion only | Every animation must name its job: **state change**, **spatial continuity** (where did it go/come from), **feedback**, or **attention to something new**. No decorative infinite loops, no "entrance" animations on every scroll section by default, no hover wiggles. |
| Prefer system motion | Use native/platform behaviour where it exists (`<details>`, `<dialog>`, native scrolling and scroll-snap, the View Transitions API) instead of re-animating it by hand. In a project with a surface module, reuse its transitions. |
| Input-dependent intensity (Liquid Glass example) | Stronger press feedback for touch, subtler for pointer: `@media (pointer: coarse)` → `active:scale-[0.97]`; `@media (pointer: fine)` → `hover` tone shift plus `active:scale-[0.985–0.99]` (FN press scale values). Never animate hover on touch-only devices (`@media (hover: hover)` gate). |
| Motion optional; never the only channel | Every animated state change also changes **text/icon/label** and is announced when relevant (`aria-live="polite"` for async results, `aria-busy` while loading). Under `prefers-reduced-motion: reduce`, replace slide/scale/zoom/parallax with an opacity fade or an instant change (see Accessibility). Haptics: `navigator.vibrate` exists only on Android Chromium and must never be the sole cue. Audio cues are opt-in. |
| Realistic, gesture-following | Swipe/drag UIs track the pointer 1:1 (Pointer Events + `transform`), then finish with a velocity-aware settle. **Dismiss along the entry path**: a bottom sheet goes back down, a left drawer goes back left, a toast goes back to the edge it came from. Never exit sideways something that entered vertically. |
| Brief and precise | UI transitions **150–300 ms** (FN); sliding selection and sheets `cubic-bezier(0.32,0.72,0,1)` (FN, Apple's sheet curve); menus **~320 ms in / ~160 ms out**, staggered 20 ms (APPLE-WEB, `site-patterns.md`); larger enter/exit of full-view media 250–400 ms (FN, `immersive-experiences.md`). Exits are faster than entrances. Success feedback is one short, precise beat (check draws, row settles), never a celebration sequence. |
| No motion on frequent interactions | No custom animation on actions people repeat constantly: typing, list-row taps, tab switches, checkbox/toggle flips beyond the control's own thumb slide, pagination, table sorting. Use an instant update or at most a ≤ 150 ms colour/opacity transition. |
| Let people cancel motion | Animations never block input: no `pointer-events: none` or disabled buttons for the length of an animation, and no awaiting `animation.finished` before accepting the next action. CSS transitions and the Web Animations API retarget mid-flight, so use them rather than chained `setTimeout`s. Intros, splash screens and onboarding animations are **skippable** and shown **once** (remember that they were seen). Route changes don't wait for exit animations. |
| Animated symbols | Use the measured SF-style kit (`references/symbol-effects.md`, `tokens/apple-symbol-effects.*`): bounce/replace/wiggle to confirm an action, pulse/breathe/variable colour only while a state is live (e.g. a mic pulsing while recording). One run, not a loop, unless the state is ongoing. Reduced motion handled by the kit. See `icons.md`. |
| Games: 30–60 fps, good defaults | Web: target a steady **60 fps**. Animate **only `transform` and `opacity`**; use `requestAnimationFrame` for JS-driven motion; no layout reads/writes inside animation frames. Canvas/WebGL picks defaults from the device (`devicePixelRatio` cap, quality tier) and never makes people open settings first. |
| Performance / battery options | Offer a "reduce effects" setting for heavy scenes (WebGL heroes, particle fields). Pause animation when off-screen (`IntersectionObserver`) and when the tab is hidden (`visibilitychange`). `navigator.getBattery()` is Chromium-only, so treat it as a hint and never as a requirement. |
| visionOS: no peripheral motion | Nothing animates along the **viewport edges** in fullscreen or immersive views (ambient edge glows, marquee tickers, drifting particles near the edges). Unavoidable edge motion keeps the **same brightness** as surrounding content, with no bright flashes. |
| Large moving objects | Full-viewport movers (hero video pans, big panels sliding across the screen) get **lower contrast or translucency** while moving. Prefer smaller moving surfaces; don't slide a full-screen panel when a crossfade works. |
| Relocate with fades | When an element's travel carries no meaning (reflowing grids, jumping to a far list position), **fade out → move → fade in** instead of animating a long flight. Use FLIP/shared-element travel only when the path itself teaches something (e.g. thumbnail → lightbox). |
| No rotating world | No auto-rotating 360° panoramas or globes that fill the view, no scroll-driven camera orbits of the whole scene, no page-tilt effects. Turn by **jump-cutting inside a quick fade**. |
| Stationary frame of reference | Keep a fixed frame (header, borders, a still background) while content moves inside it. Avoid scroll-jacking, full-viewport parallax where everything moves, and auto-travelling camera fly-throughs. |
| No sustained ~0.2 Hz oscillation | Avoid infinite "breathing", floating or bobbing loops with periods around **3–8 s** (0.2 Hz = 5 s) on large or prominent elements. If one is unavoidable, use a tiny amplitude (≤ 2–4 px or ≤ 1.02 scale), a translucent/low-contrast element, and stop it under reduced motion. |
| watchOS built-in easing | UI movement is **never linear**: ease both ends (`ease-in-out`, or the FN sheet curve for movement that starts under the finger). `linear` is only for continuous indeterminate spinners and progress that tracks real time. |

Field-note cross-links:
- `field-notes/landing-and-motion.md` § Motion rules: "motion shows where something went" is
  **confirmed** (realistic, gesture-following, continuity). "Press feedback is scale" fits the HIG's
  input-dependent emphasis. The 150–300 ms range and the sheet curve are **FN**; the HIG gives no
  numbers, so there is no conflict.
- `field-notes/tokens.md` § Motion: the values stand as FN tokens. The HIG adds that frequent
  interactions should carry little or no custom motion. The `duration-500` progress fill is fine
  because it tracks real progress, and it is not decorative.
- `hig/foundations/accessibility.md` § Motion: Reduce Motion behaviours (no zoom/scale/peripheral
  motion, tighter springs, gesture tracking, no z-depth or blur animation) are the **mandatory**
  fallback for everything above.
- `hig/foundations/materials.md`: never animate into or out of a blur; fade instead.
- `apple-web/site-patterns.md` § Motion: Apple's own menus (0.32 s staggered in, faster out, 0.12 s
  cross-fade) are a live instance of "brief and precise".

## Checklist
- [ ] Every animation has a named job (state, continuity, feedback, attention). None is decorative-only.
- [ ] No information is conveyed **only** by motion; the text/icon/ARIA state changes too.
- [ ] `prefers-reduced-motion: reduce` swaps slide/scale/zoom/parallax/loops for fades or instant changes.
- [ ] Gesture-driven UI tracks the finger, and dismissal follows the entry path.
- [ ] Transitions are short (≈ 150–300 ms UI), exits faster than entrances, never linear for movement.
- [ ] Frequently repeated interactions have no custom animation (or ≤ 150 ms tone only).
- [ ] Nothing blocks input while animating; intros and onboarding animations are skippable and shown once.
- [ ] Only `transform`/`opacity` are animated; steady 60 fps; heavy scenes pause off-screen and in hidden tabs.
- [ ] Fullscreen/immersive views: no motion at the edges, no rotating world, a fixed frame of reference, no sustained ~0.2 Hz (≈ 5 s period) oscillation on prominent elements.
- [ ] Large moving surfaces are translucent or low-contrast while moving, and meaningless relocations fade instead of flying.

## Related (ingestion status)
SF Symbols (✓ § Animations → measured kit `symbol-effects.md`). Spatial layout (✓). Feedback, Playing haptics, Playing audio — not yet
ingested. Accessibility (✓), Immersive experiences (✓), Materials (✓ CRITICAL, § Liquid Glass),
Icons (✓).
