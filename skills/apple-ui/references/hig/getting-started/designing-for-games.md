# Designing for games
Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-games ·
Section: Getting started · Ingested: 2026-09-28 · Screenshots: 12 (text cross-checked: matches
the fetched content, all three tables included) · Apple change log: **2025-06-09** updated
guidance for touch-based controls and Game Center · **2024-06-10** new page.

## In one line
Players dive into *your* world but still rely on the platform they love: get them playing
immediately, keep text and controls legible and reachable on every device (with Apple's per-
platform minimum sizes), support each platform's native input plus alternatives, welcome every
player, and plug into Apple technologies.

## What the page says

### Framing
When people play on an Apple device they enter the world you designed **while relying on the
platform features they love**. Integrate each platform's fundamentals (see the six "Designing
for …" platform pages) so the game feels at home everywhere. Developer guidance: Games Pathway.

### 1. Jump into gameplay
- **must — Let people play as soon as installation completes.** The first experience must not
  be waiting on a long download. Ship as much **playable** content as possible in the initial
  install while keeping **download time ≤ 30 minutes**; fetch the rest **in the background**.
  (→ Loading)
- **should — Provide great default settings.** People want to start without tweaking. Use
  device information to pick defaults: the **resolution** that makes graphics look best,
  **automatic detection of paired accessories and controllers**, and the player's
  **accessibility settings**. Support the platform's most common interaction methods out of the
  box. (→ Settings)
- **should — Teach through play.** People learn best by discovering mechanics inside the game
  world, so fold configuration and onboarding into a **playable tutorial** that engages quickly
  and makes players feel **successful right away**. A written tutorial should be a **reference
  to consult**, not a **prerequisite** to playing. (→ Onboarding)
- **must — Defer requests until the right time.** Don't bombard people with requests before
  they play. If you use sensors or personal data (e.g. **hand-tracking**), you **must** get
  permission first (→ Privacy) — and ask **inside the scenario that needs it** so the reason is
  obvious (e.g. between the opening cutscene and the first moment hands control the action).
  Only ask for a **rating/review after people have spent quality time** with the game (→ Ratings
  and reviews).
- Related pages shown as tiles: Launching · Onboarding · Loading.

### 2. Look stunning on every display
- **must — Text always legible**: good **contrast** with the background and at least the
  platform **minimum text size** (hard-to-read text breaks narrative, instructions and
  engagement). (→ Typography; dev: *Adapting your game interface for smaller screens*)

| Platform | Default text size | Minimum text size |
|---|---|---|
| iOS, iPadOS | 17 pt | 11 pt |
| macOS | 13 pt | 10 pt |
| tvOS | 29 pt | 23 pt |
| visionOS | 17 pt | 12 pt |
| watchOS | 16 pt | 12 pt |

- **must — Buttons always easy to use**: too small or too close together frustrates players.
  Each platform has a recommended minimum based on its default input — e.g. **iOS buttons must
  be at least 44×44 pt** for touch. (→ Buttons)

| Platform | Default button size | Minimum button size |
|---|---|---|
| iOS, iPadOS | 44×44 pt | 28×28 pt |
| macOS | 28×28 pt | 20×20 pt |
| tvOS | 66×66 pt | 56×56 pt |
| visionOS | 60×60 pt | 28×28 pt |
| watchOS | 44×44 pt | 28×28 pt |

- **should — Prefer resolution-independent textures and graphics**; if impossible, match the
  game's resolution to the device's. In **visionOS prefer vector art** that stays sharp as the
  system scales it for different distances and angles. (→ Images)
- **must — Integrate device features into the layout**: rounded corners, camera housings etc.
  affect the UI — accommodate them, relying on platform **safe areas** where possible. (→
  Layout; Apple Design Resources templates include safe-area guides)
- **must — In-game menus adapt to aspect ratios** such as **16:10, 19.5:9 and 4:3**, staying
  legible and usable on every device — and in **both orientations on iPhone/iPad** if supported
  — **without obscuring other content**. Use **dynamic layouts with relative constraints**;
  avoid fixed layouts; build a device-specific layout **only when necessary**. (→ Menus › In-game
  menus)
- **should — Design for full screen**: players like distraction-free play. macOS/iOS/iPadOS
  full-screen hides other apps and system UI; in visionOS a **Full Space** can surround people
  entirely. (→ Going full screen)
- Related tiles: Layout · Typography · Going full screen.

### 3. Enable intuitive interactions
- **must — Support each platform's default interaction method** (touch on iPhone; keyboard +
  mouse/trackpad on Mac; eyes + hands with indirect/direct gestures on visionOS). Watch **control
  sizing and menu behaviour**, especially when porting from **pointer-based to touch-based**.

| Platform | Default interaction | Additional interaction |
|---|---|---|
| iOS | Touch | Game controller |
| iPadOS | Touch | Game controller, keyboard, mouse, trackpad, Apple Pencil |
| macOS | Keyboard, mouse, trackpad | Game controller |
| tvOS | Remote | Game controller, keyboard, mouse, trackpad |
| visionOS | Touch | Game controller, keyboard, mouse, trackpad, spatial game controller |
| watchOS | Touch | – |

- **should — Support physical game controllers, but offer alternatives.** Every platform
  **except watchOS** supports controllers; they simplify porting and complex mappings, but **not
  every player can use one** — provide other ways to play. (→ Game controls › Physical
  controllers)
- **should — Offer touch controls that embrace the touchscreen** on iPhone/iPad: direct
  interaction with game elements plus **virtual controls overlaid on the content**. (→ Game
  controls › Touch controls; updated 2025-06-09)
- Related tiles: Game controls · Gestures · Pointing devices.

### 4. Welcome everyone
- **must — Prioritise perceivability**: content perceivable by **sight, hearing or touch**.
  E.g. **never rely on colour alone** for important details; cutscenes need **descriptive
  subtitles** or another way to read them. Specific areas to check: **text sizes, colour and
  effects, motion, interactions, buttons**.
- **should — Let players personalise**: no single configuration suits everyone — allow
  customising **type size, control mapping, motion intensity, sound balance**. Use Apple's
  built-in accessibility technologies (system frameworks or Apple's **Unity plug-ins**).
- **should — Let players represent themselves**: avatar/name/description creation should
  support the **spectrum of self-identity** and as many human characteristics as possible.
- **must — Avoid stereotypes** in stories and characters (e.g. enemies defined by race, gender
  or cultural heritage). Review to find and remove bias; if real cultures/languages are
  referenced, make it **respectful**.
- Related tiles: Accessibility · Inclusion.

### 5. Adopt Apple technologies
- **Game Center** — Apple's social gaming network on all platforms: progress, achievements,
  leaderboards, challenges, multiplayer; helps discovery across devices and connecting with
  friends. (→ Game Center; dev: GameKit; updated 2025-06-09)
- **GameSave** — with one iCloud account across devices, save state and **resume exactly where
  they left off on another device**.
- **Haptics** — Core Haptics: custom haptic patterns, optionally synced with audio; available in
  **iOS, iPadOS, tvOS, visionOS** and many controllers. (→ Playing haptics)
- **Spatial Audio** — provide **multichannel** audio so sound adapts to the device and becomes
  immersive where supported. (→ Playing audio › visionOS)
- **Unique mechanics** from AR, machine learning, HealthKit, location, camera, microphone (with
  permission). (→ Technologies)
- Related tiles: Game Center · iCloud · Apple In-App Purchase.

### Resources listed
Related: Game Center, Game controls. Developer documentation: Games Pathway, *Create games for
Apple platforms*. Videos: *Bringing Cyberpunk 2077 to Mac* (WWDC26 356), *Design no-code games
with Reality Composer Pro 3* (WWDC26 252), *Level up your games* (WWDC25 209).

## Specs & values (the most reusable numbers so far)
- Default / minimum **text** sizes and **button** sizes per platform — tables above.
- Initial download ≤ 30 minutes; aspect ratios to test 16:10, 19.5:9, 4:3.

## Visual notes (from screenshots)
- Hero: green construction-grid panel with a game-controller glyph (D-pad + two buttons).
- Longer page with **section headings** (Jump into gameplay, Look stunning on every display,
  Enable intuitive interactions, Welcome everyone, Adopt Apple technologies); right TOC lists all
  of them + Resources + Change log.
- Tables: header row bold, **1px dark rule under the header**, light hairlines between rows, grey
  body text, generous row height (~54px).
- **(from screenshot)** Each section ends with **2–3 related-page tiles** (16:9-ish rounded
  cards, gradient fill, one large dark SF Symbol in the centre, bold title below). **The tile
  colour encodes the HIG section the linked page belongs to** — Getting started = **green**,
  Foundations = **yellow** (Layout, Typography, Accessibility, Inclusion), Patterns = **orange**
  (Launching, Onboarding, Loading, Going full screen), Inputs = **purple/magenta** (Game controls,
  Gestures, Pointing devices), Technologies = **blue** (Game Center, iCloud, In-App Purchase).
  Glyph colour is a darker shade of the tile's hue (duotone, same family).
- **(from screenshot)** Video thumbnails: *Cyberpunk 2077* running on a MacBook with a hand
  holding a game controller; a presenter holding a Vision Pro next to a MacBook (Reality Composer
  Pro 3); the same game scene on MacBook, iPad and iPhone (Level up your games).

## Web translation
| Games guidance | Web equivalent |
|---|---|
| Play immediately | Time-to-value: show usable content first, lazy-load the rest; no blocking splash; skeletons instead of spinners; progressive web app caching. |
| Great defaults | Infer from the environment: locale, time zone, `prefers-color-scheme`, `prefers-reduced-motion`, `prefers-contrast`, device pixel ratio; pre-fill what's known; settings optional, not a gate. |
| Teach through play | Interactive, in-context onboarding (empty states with a first action, contextual tips) instead of a tour or docs wall; docs as reference. |
| Defer requests | Ask for notifications/location/camera **at the moment of need** with the reason visible; never on page load. Ask for reviews/NPS only after meaningful use. |
| Minimum text sizes | Web body ≥ 16px (≈ iOS 17pt body), secondary ≥ 12–13px, never < 11px; desktop dense UI floor ~12px; TV/10-foot ≥ 24–29px. |
| Minimum targets | Touch: 44×44px default, 28px absolute floor only for secondary/dense controls with spacing; fine pointer: 28px default, 20px floor; TV 66/56px. Keep gaps so targets don't collide. |
| Resolution-independent graphics | SVG icons/illustrations; `srcset`/`image-set()` for raster at 1×/2×/3×. |
| Device features / safe areas | `env(safe-area-inset-*)`, notch/Dynamic Island, rounded corners. |
| Aspect ratios & menus | Menus/overlays built with flex/grid + relative units; test 4:3 tablets, 16:10 laptops, 19.5:9 phones, both orientations; overlays must not hide critical content. |
| Default input + alternatives | Primary input per device (touch/pointer/keyboard), with alternatives always available (keyboard for everything, Gamepad API optional). Re-check control size and menu behaviour when a desktop UI goes to touch. |
| Welcome everyone | Never colour-only meaning; captions/transcripts for video; settings for text size, motion, sound; inclusive identity fields (free-text names, pronouns optional, no forced binary gender); review copy/imagery for stereotypes. |
| Continuity across devices | Sync state server-side so people resume on another device exactly where they left. |

## Checklist
- [ ] Usable within seconds; heavy content loads in the background?
- [ ] Sensible defaults from device/user settings; settings not a gate?
- [ ] Onboarding happens by doing; docs are optional reference?
- [ ] Permissions/reviews requested in context, after value?
- [ ] Text ≥ platform minimums with good contrast; targets ≥ platform minimums with spacing?
- [ ] Layout respects safe areas and works at 16:10, 19.5:9, 4:3 and both orientations?
- [ ] Primary input per platform + alternatives; control sizing re-checked for touch?
- [ ] Perceivable without colour/sound alone; personalisation for text, motion, sound, controls?
- [ ] Inclusive identity options; no stereotypes?
- [ ] State resumes across devices?

## Related (ingestion status)
Loading, Settings, Onboarding, Privacy (✓ `hig/foundations/privacy.md`), Ratings and reviews, Launching, Typography, Buttons,
Images, Layout, Menus (in-game menus), Going full screen, Game controls, Gestures, Pointing
devices, Accessibility, Inclusion, Game Center, iCloud, Apple In-App Purchase, Playing haptics,
Technologies — not yet ingested (Playing audio ✓).
