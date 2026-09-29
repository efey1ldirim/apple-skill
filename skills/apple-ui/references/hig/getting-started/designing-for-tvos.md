# Designing for tvOS
Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-tvos ·
Section: Getting started · Ingested: 2026-09-28 · Screenshots: 4 (text cross-checked: matches
the fetched content) · Apple change log: **September 14, 2022 — refined best practices for
multiuser support.**

## In one line
Apple TV is a shared, very large screen watched from 2.5 m+ away and driven indirectly (remote,
controller, voice, phone) — so the UI is built on a **focus system** that always shows where you
are, on **cinematic edge-to-edge artwork** legible across the room, on **fluid remote gestures**,
and on **effortless multi-user** sign-in and profile switching.

## What the page says

### Why people use Apple TV (framing)
People enjoy tvOS for **vibrant content**, **immersive experiences** and **streamlined
interactions** — in media and games, and also **fitness, education and home-utility** apps.

### The five defining characteristics
1. **Display** — **very large**, high-resolution.
2. **Ergonomics** — the TV is **stationary**; people usually sit **many feet away — often 8 ft
   (~2.4 m) or more** — and **may keep interacting while moving around the room** (UI must stay
   readable/usable from anywhere in the room, not only from the sofa).
3. **Inputs** — the **Siri Remote**, a **game controller**, **voice** (Siri), and **apps on
   people's other devices** (iPhone as remote/keyboard) — all *indirect* input; there is no
   touch on the screen and no pointer.
4. **App interactions** — deep, **single-experience immersion, often for hours**; but people also
   like **picture-in-picture** to follow another app or video at the same time.
5. **System features** people expect apps to integrate with: **the TV app** (see Playing video),
   **SharePlay** (watching/playing together), **Top Shelf** (content shown when the app is
   focused in the Home Screen top row), **TV provider accounts** (single sign-on with a TV
   provider — see Managing accounts).

### Best practices (prioritise these to feel at home on tvOS)
- **should — Use the Siri Remote's fluid, familiar gestures** (swipe, click, press) to create
  powerful and delightful interactions.
- **must — Embrace the tvOS focus system**: let it **gently highlight and enlarge** items as
  people move between them, so they **always know where they are and what they can do**. (Focus
  replaces a cursor — the focused item is the only "you are here" signal.)
- **should — Be cinematic**: **edge-to-edge artwork**, **subtle, fluid animations** and
  **engaging audio** that immerse people — while staying **clear, legible and captivating from
  across the room**.
- **should — Strong multi-user support** (refined 2022-09-14): make **sign-in easy and
  infrequent**, handle **shared sign-in** (one household account on a shared device), and
  **switch profiles automatically** when the current viewer changes.

### Resources listed
- Related: Apple Design Resources (tvOS kits). Developer documentation: tvOS Pathway.
- Video: *Build SwiftUI apps for tvOS* (WWDC20 session 10042).

## Platform comparison (distance & input drive everything)
| | iOS | iPadOS | macOS | tvOS |
|---|---|---|---|---|
| Distance | ≤ 30–60 cm | ≤ ~90 cm | ~30–90 cm | **≥ ~2.4 m (8 ft+), moving around** |
| Input | direct touch | touch + keyboard/pointer/Pencil | keyboard + precise pointer | **indirect: remote, controller, voice, phone** |
| Where am I? | touch target | touch/hover | cursor + selection | **focus highlight (scale/lift)** |
| Screen use | one person | one person | one person | **shared, multi-user** |

## Specs & values
- Typical viewing distance: **8 ft (~2.4 m) or more**.
- No sizes on this page (see Layout, Typography, Focus and selection, Remotes, Top Shelf).

## Visual notes (from screenshots)
- Hero: green-gradient construction-grid panel with a dark-green TV glyph (wide rounded screen
  above a short flat base).
- Same doc grammar as the other platform pages. **(from screenshot)** The right-hand "On this
  page" TOC here has four entries — Designing for tvOS · Best practices · Resources · **Change
  log** — because this page carries a change log.
- **(from screenshot)** Video card "Build SwiftUI apps for tvOS": a TV showing a lavender tvOS
  app — a wide landscape hero image on top, then horizontal **shelves**: a row of circular
  avatar/album items and a row of rectangular artwork posters — with a black **Siri Remote**
  standing beside the TV. Illustrates the canonical tvOS layout: hero artwork + horizontally
  scrolling content rows.
- Change log table: Date | Changes, dark rule under the header, grey rows.

## Web translation
Most web products are not TV apps, but two lessons transfer directly, and "10-foot UI" rules
apply to TV web apps, smart-TV/HTML5 apps, kiosks, digital signage and presentation modes.

| tvOS guidance | What to do on the web |
|---|---|
| Focus system always shows where you are | For keyboard/D-pad users make focus **unmistakable and graceful**: a `:focus-visible` treatment that lifts the item (slight scale ~1.05–1.1, stronger shadow, brighter edge) rather than a thin browser outline; animate focus moves (~150–250ms). Never remove focus styling. On TV/kiosk builds implement **spatial (arrow-key) navigation** between items in grids/rows, with focus memory per row. |
| Legible from across the room | 10-foot UI: very large type (body ≥ 24–29px equivalent at 1080p), high contrast, fewer words, no dense tables, big targets, safe margins from screen edges (TV overscan ~5%). |
| Cinematic, edge-to-edge artwork | Media/landing pages: full-bleed imagery, poster shelves (horizontal scroll rows with snap), subtle parallax/motion, sound only if expected. Keep text on imagery legible with scrims/gradients. |
| Siri Remote gestures | Support swipe/scroll inertia and click semantics mapped to arrow keys/Enter/Back (`Escape`/`Backspace` = back). |
| Multi-user | "Who's using?" profile picker; remember the last profile; switch profiles without full re-login; **sign in via another device** (QR code or short device code — OAuth device authorization flow) instead of typing on a TV keyboard; keep sign-in rare (long-lived sessions on trusted devices). |
| Picture-in-picture | Allow PiP for video (Picture-in-Picture API; use `disablePictureInPicture` only when truly needed); keep playback state when navigating. |
| Integrations | Watch-together features, deep links into content, provider SSO where relevant. |

## Checklist
- [ ] Is the current focus always obvious from a distance (and for keyboard users on any site)?
- [ ] Is every screen legible across a room (type size, contrast, word count)?
- [ ] Full-bleed artwork with legible overlays; motion subtle and fluid?
- [ ] Remote/arrow-key/back navigation works everywhere, with focus memory?
- [ ] Sign-in easy and rare (other-device sign-in), shared accounts and profile switching handled?
- [ ] PiP and playback continuity supported?

## Related (ingestion status)
Siri, Playing video (TV app), SharePlay, Top Shelf (✓ `components/system-experiences/top-shelf.md`), Managing accounts
(TV provider accounts) — not yet ingested; Focus and selection (✓ `inputs/focus-and-selection.md`); Game controls (✓ `inputs/game-controls.md`). Ingested since: Remotes (✓ `inputs/remotes.md`), Lockups (✓ `components/layout/lockups.md`), Collections (✓), Lists and tables (✓), Image views (✓).
