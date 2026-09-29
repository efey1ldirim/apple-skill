# CarPlay
Source: https://developer.apple.com/design/human-interface-guidelines/carplay · Section: Technologies · Supported platforms: **iOS only** (page data; the platform text: "No additional considerations for iOS. **Not supported in iPadOS, macOS, tvOS, visionOS, or watchOS**"; the experience appears on the vehicle's display) · Ingested: 2026-09-29 · Apple last updated: **May 2, 2023** (the only Change log row: guidance consolidated into one page; same date in the page's data; the video list is newer: WWDC25 and **WWDC26**). **Link-only ingestion: one DocC fetch, read in full (77 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt text only. Not marked critical: no token file, checker or gate. Numbers on the page: **4 common display sizes** (800×480, 960×540, 1280×720, 1920×720), **3 aspect ratios** (5:3, 16:9, 8:3), **@2x / @3x**, icon **120×120 px (@2x) and 180×180 px (@3x)**, **upper half** of the screen for primary content.

## In one line
**CarPlay** puts **apps from a connected iPhone on the car display**, **for drivers to use while driving**, so **features must be fast and need minimal interaction**. **Use the system templates (audio, communication, navigation, fuelling…); iOS renders your content and handles resolutions and inputs (touch, knobs, touch pads).** **iPhone rules:** **no app interaction on iPhone while CarPlay is active (do setup before driving), never lock people out because iPhone needs input, and work with iPhone locked.** **Audio:** **let people start playback (autoplay only for a single-source app or resuming interrupted audio), don't open an audio session until you can play (it silences the radio), start as soon as audio is loaded, show Now Playing immediately, resume only after resumable interruptions, adjust mixes but never the overall volume.** **Layout:** clean and scannable, consistent, **important content in the upper half**, big actionable items. **Colour:** limited palette matching the logo, **interactive ≠ non-interactive colours**, **test in a real car in varied light**, **works in light and dark (may switch automatically)**, inclusive colour. **Icons:** **@2x and @3x for all artwork, mirror the iPhone app icon (120 and 180 px), no black icon background.** **Errors:** rare, and **reported in CarPlay, never "pick up your iPhone"**. On the web: **CarPlay itself is native-only**; **apply the same rules to in-vehicle, hands-busy and glanceable web experiences (Media Session, autoplay policy, large targets, no phone dependence)**.

## Rules

### Framing (intro)
- **CarPlay lets people get directions, make calls, send and receive messages, listen to music and more from the car's built-in display, staying focused on the road.**
- People **download CarPlay apps from the App Store and install them on iPhone like any app**; **when the iPhone connects to the vehicle, installed CarPlay apps' icons appear on the CarPlay Home screen**.
- **CarPlay is designed for drivers to use while driving**: **provide features that help people do tasks quickly with minimal interaction.**
- **Templates:** the interface uses **system-defined templates suited to the app type (audio, communication, navigation, fuelling…)**; **your app provides content and iOS renders it**. Because **the system draws UI components and handles the vehicle interface**, you **don't adjust for screen resolutions or manage input from different hardware (touchscreens, knobs, touch pads)**. (How-to: the CarPlay App Programming Guide; the design guidance here **applies to all CarPlay apps**.)

### iPhone interactions
- CarPlay shows **compatible apps from the connected iPhone in simplified interfaces optimised for driving**.
- **must** **Eliminate app interactions on iPhone when CarPlay is active.** **Interactions occur through the car's controls and display**; **if the app needs setup on iPhone, make sure it is done before the vehicle moves**.
- **must not** **Lock people out of CarPlay because the connected iPhone needs input.** **The app must work when iPhone is inaccessible** (**in a bag or the trunk**); **if a problem must be solved on iPhone, let people do it after the vehicle stops.**
- **must** **Work without unlocking iPhone.** **Most people use CarPlay with iPhone locked**, so the CarPlay features **must work in that state**.

#### Audio
- **The app coexists with other audio sources** (**the car's radio, voice prompts from navigation**). **Even if audio isn't your main feature**, **know how people expect audio to behave**.
- **should** **Let people choose when to start playback.** **Avoid automatic playback unless the app's purpose is a single audio source, or it resumes previously interrupted audio.** **Don't start an audio session until you're ready to play**: **starting a session silences other sources such as the radio**.
- **should** **Start playback as soon as the audio has loaded enough.** After a selection **it may take several seconds (buffering, network)**; **the system keeps the selection highlighted and shows a spinning indicator until the app signals readiness**.
- **should** **Show the Now Playing screen as soon as audio can play.** **Don't delay playback until descriptive information loads**; **load it in the background and show it when available**.
- **should** **Resume after an interruption only when appropriate.** **Temporary interruptions (a phone call)**: **resume when it ends if audio was actively playing**; **permanent interruptions (e.g. a playlist started by Siri) are non-resumable.**
- **should** **Adjust relative audio levels for a good mix if needed, but never change the overall volume**: **people control the final output volume**.

### Layout
- CarPlay supports **many resolutions, pixel densities and aspect ratios**; **the system scales icons and interfaces so they appear at roughly the same size**. Common sizes:
| Dimensions (pixels) | Aspect ratio |
|---|---|
| 800 × 480 | 5:3 |
| 960 × 540 | 16:9 |
| 1280 × 720 | 16:9 |
| 1920 × 720 | 8:3 |
- **should** **Provide useful, high-value information in a clean layout that's easy to scan from the driver's seat.** **No clutter with nonessential details or unnecessary visual embellishment.**
- **should** **Keep a consistent appearance**: **elements with similar functions look similar.**
- **should** **Make primary content stand out and feel actionable.** **Large items look more important and are easier to tap**; **place the most important content and controls in the upper half of the screen.**

### Color
- Colour **indicates interactivity, adds vitality and gives visual continuity**.
- **should** **Prefer a limited colour palette that coordinates with the app logo**; **subtle colour communicates the brand**.
- **must not** **Use the same colour for interactive and non-interactive elements** (people can't tell where to tap).
- **should** **Test the colour scheme under varied lighting in an actual car.** **Light varies by time of day, weather, window tinting**; **colours at a desk look different in the real world**; **consider brightness at night** and **low-contrast colours washing out in direct sunlight**; **adjust for the majority of cases**.
- **should** **Look good in both dark and light environments.** **CarPlay supports light and dark appearances and may switch automatically with lighting conditions.**
- **should** **Choose colours that communicate with everyone**: **people see and interpret colour differently** (→ Color › Inclusive color).

### Icons and images
- CarPlay supports **landscape and portrait displays** and **@2x (low resolution) and @3x (high resolution)**.
- **must** **Supply @2x and @3x images for all CarPlay artwork**; **the system picks and scales the right image for the display**.
- **should** **Mirror the iPhone app icon.** **A well-designed icon works on both**, **no second design needed**.
- **must not** **Use black for the icon background**: **lighten it or add a border** so it doesn't blend into the display background.
- **App icon sizes:** **@2x 120 × 120 px; @3x 180 × 180 px.**

### Error handling
- A CarPlay app **handles errors gracefully and reports them only when absolutely necessary.**
- **must** **Report errors in CarPlay, not on the connected iPhone.** **If you must notify people, do it clearly in CarPlay**; **never tell people to pick up their iPhone to read or resolve an error.**

### Platform considerations
- **iOS:** no additional considerations. **iPadOS, macOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
| Item | Value |
|---|---|
| Context | drivers, while driving: minimal interaction, tasks completed quickly |
| App types (templates) | audio · communication · navigation · fuelling (examples named) |
| Display sizes | **800×480 (5:3)** · **960×540 (16:9)** · **1280×720 (16:9)** · **1920×720 (8:3)** |
| Content position | most important content and controls in the **upper half** |
| Icon | mirror the iPhone icon; **120×120 px @2x, 180×180 px @3x**; **no black background** (lighten or border) |
| Artwork | **@2x and @3x** for all CarPlay images; landscape and portrait |
| Colour | limited palette; interactive ≠ non-interactive; test in a car; light and dark |
| iPhone | no interaction while CarPlay is active; no lockout; works locked; setup before driving |
| Audio | user starts playback; no early audio session; ready → play; Now Playing immediately; resume only resumable interruptions; never change overall volume |
| Errors | only when necessary; **in CarPlay**, never on iPhone |
| Developer docs | **CarPlay App Programming Guide** (PDF) · CarPlay developer page |
| Videos (links only, not watched) | Rev up your CarPlay app (WWDC26 212) · Turbocharge your app for CarPlay (WWDC25 216) |
| Apple's Related list | CarPlay (developer page) |
| Change log | May 2 2023: consolidated into one page |

## Visual notes (link-only: from alt text)
- **Hero:** a sketch of the **CarPlay icon** over grid lines, **tinted blue** (alt).
- **No other images, videos, callouts or comparison images** on the page (two tables: display sizes and icon sizes).
- **Mismatches / notes:**
  1. **The Change log's only row is May 2023**, while **the video list includes WWDC25 and WWDC26 sessions**: **the resource list is newer than the log**.
  2. **The audio section says apps must coexist with the radio and navigation prompts** but **doesn't name the audio session category** (a developer detail).
  3. **The page doesn't cover "CarPlay Dashboard", widgets or Live Activities in the car**, which **`widgets.md` and `live-activities.md`** record (CarPlay Dashboard, deactivated buttons).
  4. **"The system scales icons and interfaces"** yet **the page also says to test colour in a real car**: **scaling is automatic; appearance isn't**.
  5. **The page gives no minimum touch-target sizes or type sizes**; **those come from the templates**.
  6. **Icons are specified for @2x and @3x only**; **larger displays rely on scaling**.
- **Catalog:** the script found **0 comparisons** (one hero image). Catalog stays **252**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
**CarPlay has no web app surface** (apps use system templates; there is no browser in CarPlay). **The design rules transfer to any glanceable, hands-busy or in-vehicle context**: **in-car infotainment browsers, PWAs used on a dashboard, voice-first pages, kiosks, and the phone while a person is driving** (where **the web can't detect driving**, so **don't require interaction anyway**). Statements about browser behaviour are background knowledge, not from the page.

| HIG rule | Web implementation |
|---|---|
| Minimal interaction while driving; quick tasks | **Few, large, single-purpose screens**; **one obvious primary action**; **no typing, no long lists**; **voice-friendly alternatives** (Web Speech API where available); **never require reading paragraphs**. |
| System templates; system handles inputs | **Use native controls and semantic HTML** so **any input device (touch, rotary knob, D-pad, voice)** works: **real `<button>`/`<a>`, logical focus order, arrow/Enter operable** (`focus-and-selection.md`, `keyboards.md`, `remotes.md`). |
| No interaction on the phone while connected | **Design so a connected companion device (a car head unit) needs no second-screen input**: **no "confirm on your phone" steps in a driving flow**; **do setup earlier (a "Set up before you drive" prompt)**. |
| Never lock people out because the phone needs input | **Every driving-relevant feature works without a phone-side prompt**: **no modal blockers**, **defer account/permission problems** until stopped ("Fix this when you park"). |
| Work without unlocking the phone | **Media Session API** (`navigator.mediaSession`) exposes **play/pause/next/previous and metadata on the lock screen and to the vehicle**; **audio continues with the screen locked**; **push/notification actions** don't require unlocking (`notifications.md`). |
| Let people start playback; no autoplay (except single source or resuming) | **Respect autoplay policy**: **start audio only from a user gesture**; **resume only previously interrupted audio** (`playing-audio.md`); **`<audio>` `preload="metadata"`** until the user chooses. |
| Don't open an audio session early (silences other audio) | **Don't create an `AudioContext`/play a sound until playback is wanted**; **don't request audio focus for UI sounds**; on iOS Safari a **web `<audio>` interrupts other apps' audio** when it plays, so **create it lazily**. |
| Start as soon as audio has loaded; spinner; Now Playing immediately | **`canplay` → `play()`**; **selected item stays highlighted with a spinner (`aria-busy`)** until ready; **show the Now Playing view immediately with placeholder metadata**, **fill artwork/title when loaded** (`loading.md`). |
| Resume only after resumable interruptions | **`pause` events from the OS (call, another app)**: **remember `wasPlaying`**; **resume on `ended interruption` only for temporary ones**; **don't auto-resume after the user (or Siri) started something else**; **Media Session `setActionHandler`** for the rest. |
| Adjust mixes, never overall volume | **Control only your own element's `volume` for ducking/mix**; **never try to set the system volume** (**not possible in browsers**), **provide a volume UI only if the page owns a mixer**. |
| Layout: scannable, consistent, upper-half importance | **A clean, high-contrast, glanceable layout**: **large type (CONV ≥ 24 px for driver-facing text)**, **primary content and controls in the top half**, **no decoration**; **consistent component look** (`layout.md`, `typography.md`). |
| Scales across resolutions/aspect ratios | **Responsive by viewport units and `clamp()`** for **wide short displays (8:3, 5:3) and 16:9**; **test at 800×480, 960×540, 1280×720, 1920×720**; **container queries** for panes. |
| Colour: limited palette, interactive vs not, real-light tests | **A restrained palette from the brand colour**; **interactive elements share one accent, non-interactive don't** (`color.md`); **test in sunlight and at night on the target hardware**; **≥ 7:1 contrast for driver-facing text (CONV)**. |
| Light and dark; automatic switching | **`prefers-color-scheme` plus a manual override**; **support both** (`dark-mode.md`); **avoid pure white flashes at night**. |
| Inclusive colour | **Never colour alone** (icon + label + shape); **colour-blind-safe pairs** (`color.md` inclusive colour, `accessibility.md`). |
| Icons: @2x/@3x; mirror the app icon; no black background | **`<link rel="apple-touch-icon" sizes="180x180">`, a 120 px variant, plus a maskable 192/512 px icon in the manifest** (**the app icon reused, not redesigned**); **`srcset` 1x/2x/3x for artwork**; **no black icon background (lighten or add a border)**. |
| Errors: only when necessary; in CarPlay, not on the phone | **Report the error where the person is looking** (in the car UI or the active screen), **short and actionable**; **never "check your phone"**; **prefer silent retry and graceful degradation**; **`aria-live="polite"` for the message** (`feedback.md`). |
| Native-only | **CarPlay templates (`CPTemplate`, audio, communication, navigation, fuelling), CarPlay entitlement, CarPlay Dashboard/widgets, the CarPlay scene delegate** are native; **there is no way to build a CarPlay app from the web**. |

Field-note cross-links:
- `field-notes/*`: **no in-car recipe**; nothing conflicts.
- `hig/components/system-experiences/widgets.md` (✓): **StandBy/CarPlay large-display rendering**; `hig/components/system-experiences/live-activities.md` (✓): **CarPlay Dashboard, deactivated buttons, dimension table**; `hig/patterns/playing-audio.md` (✓): **audio sessions, interruptions, volume ownership**; `hig/patterns/playing-video.md` (✓) and `hig/technologies/airplay.md` (✓): **media control**; `hig/inputs/remotes.md` (✓) and `keyboards.md` (✓): **non-touch input on 10-foot and vehicle UIs**; `hig/inputs/focus-and-selection.md` (✓): **directional focus**; `hig/foundations/color.md` (✓ CRITICAL) and `dark-mode.md` (✓): **contrast, light and dark**; `hig/foundations/app-icons.md` (✓): **icon design and sizes**; `hig/patterns/loading.md` (✓) and `feedback.md` (✓ CRITICAL): **loading states and errors**; `hig/foundations/layout.md` (✓ CRITICAL): **scaling and hierarchy**.
- Not yet ingested (linked from this page): none (the CarPlay developer page and the programming guide are external).

## Checklist
- [ ] **Each screen supports one quick task**, with **large, clear controls and no typing**.
- [ ] **Nothing requires the phone during a driving flow**; **setup happens before driving**; **problems are deferred until stopped**.
- [ ] **Features work with the phone locked** (Media Session, lock-screen controls).
- [ ] **Audio starts from a user action** (or resumes interrupted audio), **the audio context is created lazily**, **Now Playing appears immediately**, **only resumable interruptions resume**, **overall volume is never touched**.
- [ ] **Primary content is in the upper half**; **layout is clean, consistent and scannable**; **works at 800×480 to 1920×720**.
- [ ] **Limited palette; interactive and non-interactive elements differ; colour is never the only cue**; **tested in real light**.
- [ ] **Light and dark modes both work** (automatic with an override).
- [ ] **Icons: 120/180 px touch icons, a maskable manifest icon, no black background.**
- [ ] **Errors are rare, short, shown in place, never "look at your phone"**.

## Related
- Ingested: Widgets (✓), Live Activities (✓), Playing audio (✓), Playing video (✓), AirPlay (✓), Remotes (✓), Keyboards (✓), Focus and selection (✓), Color (✓ CRITICAL), Dark Mode (✓), App icons (✓), Loading (✓), Feedback (✓ CRITICAL), Layout (✓ CRITICAL).
- Not yet ingested (linked from this page): none.
- Developer docs: CarPlay App Programming Guide (PDF). External: CarPlay developer page.
- Videos: Rev up your CarPlay app (WWDC26 212), Turbocharge your app for CarPlay (WWDC25 216).
