# Going full screen
Source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen · Section: Patterns · Supported platforms: **iOS, iPadOS, macOS** (tvOS, visionOS and watchOS dimmed on the platform strip **(from screenshot)** and stated as "Not supported") · Ingested: 2026-09-28 · Apple last updated: 2025-06-09. Change log: 2024-06-10 enhanced game guidance · 2025-06-09 updated guidance for hiding toolbars and navigation controls, and deferring Home Screen indicator gestures. One DocC fetch, read in full. 4 screenshots (dark-mode page, hero → Developer documentation) were compared with the fetched text line by line: everything they show matches. **The screenshots stop inside Developer documentation; the last doc link, the Videos and the change-log rows were read from the fetch only** (the TOC in the screenshots lists Change log). The page has no text inside images. Not marked critical: no gate, token file or checker.

## In one line
Full screen is the **person's choice, entered and left by them**, with the system's own mechanism. Inside it, keep the essential controls reachable, keep the layout consistent, pause when they leave, and never let a stray swipe kick them out.

## Rules

### Framing (intro)
- iPhone, iPad and Mac have full-screen modes: a window expands to fill the screen, system controls hide, the environment is distraction-free.
- **Apple TV and Apple Watch** have none, because apps and games already fill the screen.
- **Apple Vision Pro** has none, because people can expand a window to fill more of their view, or use the **Digital Crown** to hide passthrough and move to a more immersive experience (Apple links Immersive experiences ✓).

### Best practices
- **should** **Support full-screen mode when it fits the experience.** People want it to concentrate on a task or be immersed in content. Consider it for: playing a game; viewing media such as videos or photo slideshows; an in-depth task that benefits from no distractions.
- **should** **Adjust the layout in full screen if necessary, but don't resize the window programmatically.**
  - A window is usually larger in full screen. Keep essential content prominent and use the extra space well.
  - Example: change the **proportions** of the interface **without changing which items appear**.
  - Keep any adjustment **subtle** so the interface stays consistent and the transition between modes isn't visually jarring.
- **must** **Keep essential features and controls accessible so people can finish their task without leaving full screen.** Example: a full-screen media experience keeps playback controls **always available or easy to reveal**.
- **should** **Let people reveal the Dock in an iPadOS or macOS full-screen app** (games excepted).
  - In iPadOS and macOS the Dock is how people quickly open other apps and Dock items, so preserve access.
  - For a **game**, to stop accidental Dock reveals: on iPadOS ask the system to **ignore an initial swipe up from the bottom edge**; on macOS **hide the Dock** entirely. (APIs: `preferredScreenEdgesDeferringSystemGestures` in SwiftUI/UIKit, `hideDock` in AppKit.)
- **should** **Help people resume where they left off** after they switch away. Example: a game or slideshow **pauses automatically** when people leave, so nothing is missed.
- **must** **Let people choose when to exit full screen.** People don't expect it to end by itself when they switch to another experience or finish an absorbing activity (a game, a movie).
- **should** **Prioritise content by temporarily hiding toolbars and navigation controls** (2025 update).
  - Good for content-first moments: full-screen photos, reading a document.
  - If you do this, let people **restore** the hidden elements with a familiar gesture or action: **tap, swipe down, or move the cursor to the top of the screen**.
  - **must** Keep controls visible when they are essential for navigation or for performing tasks.
  - On visionOS a window *can* hide toolbars and navigation, but people expect different kinds of immersive experiences on Vision Pro (Apple links Immersive experiences).

### Platform considerations
- **Not supported in tvOS, visionOS or watchOS.**

#### iOS, iPadOS
- **should** **Consider deferring system gestures to prevent accidental exits in a full-screen app or game** (2025 update).
  - By default the **Home Screen indicator hides automatically** shortly after someone switches to the app. It **reappears when they touch the bottom portion of the screen**, so they can swipe **once** to exit.
  - **Keep this default whenever possible**, because it is familiar and expected.
  - If it causes **unexpected exits**, enable **two swipes instead of one** to exit (`preferredScreenEdgesDeferringSystemGestures`).

#### macOS
- **should** **Use the system-provided full-screen experience** so the window works in every context.
  - Example: some Mac models have a **camera housing** in the top-centre of the screen; the system's full-screen support **accommodates it automatically** (`toggleFullScreen(_:)`).
- **should not** **In a game, change the display mode when players go full screen.** People expect to control their display mode, and switching it automatically **doesn't improve performance**. (Developer doc: *Managing your game window for Metal in macOS*.)
- **should** **Let people choose when to enter full screen** with the window's **Enter Full Screen** button, the **View** menu item or the **Control-Command-F** shortcut.
  - **should not** offer a custom menu of window modes.
  - In a game you **may** add a custom **toggle** that turns full screen on and off (Apple links Toggles, not yet ingested).

## Specs & values
The page has **no sizes, timings or colours**. Its concrete facts:

| Item | Value |
|---|---|
| Supported | iOS, iPadOS, macOS |
| Not supported | tvOS, watchOS (apps already fill the screen), visionOS (expand windows / Digital Crown) |
| Restore hidden bars (gestures/actions named) | tap · swipe down · move the cursor to the top of the screen |
| iOS/iPadOS default exit | Home Screen indicator hides, reappears on bottom-edge touch, **one** swipe exits; optional **two** swipes |
| macOS enter methods | Enter Full Screen button · View menu item · **Control-Command-F** |
| Dock | keep reachable (iPadOS, macOS); games may defer/hide it |
| Layout change on entering | proportions only, not which items appear; subtle |
| Games (macOS) | don't change the display mode on going full screen |
| Camera housing | handled by the system's full-screen support |
| Developer docs | `fullScreenCover(item:onDismiss:content:)` · `NSScreen` · `NSWindow.CollectionBehavior` · `toggleFullScreen(_:)` · `preferredScreenEdgesDeferringSystemGestures` · `hideDock` · *Managing your game window for Metal in macOS* |
| Related HIG pages | Layout ✓ · Multitasking ✓ · Windows ✓ · The menu bar ✓ |
| Video | *Elevate the design of your iPad app* (WWDC25 208) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with two arrows pointing outward from a common centre along the top-leading ↔ bottom-trailing diagonal (the "expand" glyph), over construction circles.
- **Page chrome (from screenshot):** the platform strip lights iPhone, iPad and Mac only; the TOC reads Going full screen · Best practices · Platform considerations · Resources · Change log. The side navigation shows the Patterns list from Collaboration and sharing to Settings.
- The page has **no ✗/✓ pairs, no comparison images and no in-page videos** (fetch script run; catalog IDs unchanged, total 99). Nothing is measured.
- **Text that is not in the fetch:** none beyond the page chrome above. Every heading, bold lead-in, sentence and link in screenshots 46–49 is in the fetched text.

## Web translation
On the web, "full screen" means the **Fullscreen API** (`element.requestFullscreen()`), a standalone/fullscreen PWA, or a content-first "focus/reader mode" inside the page. The immersive-mode rules (`hig/foundations/immersive-experiences.md`) apply too.

| HIG rule | Web implementation |
|---|---|
| Offer it for games, media, slideshows, deep tasks | Provide a clear full-screen control on players, galleries/lightboxes, presentations, editors, dashboards on a wall display. Not on ordinary pages. Icon-only: `aria-label="Enter full screen"` / "Exit full screen", the standard expand glyph (`icons.md`). |
| Person chooses when to enter | Call `requestFullscreen()` **only from a user gesture** (the browser requires it anyway) and never on load. Provide the button and a keyboard shortcut (`F` in media/gallery views is the web convention; on macOS browsers ⌃⌘F also toggles the browser's own full screen — don't fight it). No custom menu of "window modes"; a single toggle. |
| Person chooses when to exit | Never call `exitFullscreen()` automatically when a video ends, a tab switches or an action finishes; only the person (Esc, the button) exits. Listen to `fullscreenchange` and keep your state in sync (button label, layout). Don't trap Esc (`navigator.keyboard.lock()` only when really needed, and never for Esc alone). |
| Adjust layout, don't resize the window | Never `window.resizeTo`/`moveTo`. Adapt with the `:fullscreen` pseudo-class and container/media queries: change **proportions** (wider content column, larger media), never remove or add features. Transition subtly (no re-layout flash; respect `prefers-reduced-motion`). |
| Keep essential controls available | Player/gallery controls persistent or revealed on tap/mouse move/keyboard focus; the full-screen element must **contain** its controls (put the controls inside the element you fullscreen, otherwise they vanish). Exit control always reachable; focus stays inside. |
| Hide toolbars temporarily; restore with a familiar action | Auto-hide bars after ~3 s idle only when content is primary (viewing a photo, reading), restore on **tap, swipe down, or moving the pointer to the top edge**, and on any keyboard focus. Hidden ≠ removed: keep them in the DOM, `inert` only while hidden, and never hide essential navigation (WCAG 2.4.x). The HIG gives no idle delay; the 3 s value is CONV. |
| Reveal the Dock (game exception) | The browser owns the OS chrome; you cannot show or hide the Dock. Don't try to lock the pointer or keyboard beyond what a game needs (`requestPointerLock()` only during active play, released on pause and Esc). |
| Pause and resume | On `visibilitychange` (hidden), `pagehide`, `blur` or leaving full screen: pause the game/video/slideshow automatically, keep position and state, and resume where they left off on return (offer a "Resume" button rather than auto-playing sound). |
| Accidental exits (iOS/iPadOS gestures) | Web can't defer OS gestures, but avoid *self-inflicted* exits: `overscroll-behavior: none` on the full-screen surface, `touch-action` on game canvases so swipes don't scroll or navigate back, no accidental edge-swipe handlers. Where accidental exit costs progress, autosave (`file-management.md`) and confirm before losing state. |
| System full screen (macOS camera housing) | Use the real Fullscreen API rather than a fake `position: fixed; inset: 0` window; it lets the browser handle the camera notch, safe areas and multi-display. If you must fake it (iOS Safari only fullscreens `<video>` on iPhone), honour `env(safe-area-inset-*)` with `viewport-fit=cover`, use `100dvh` (Layout gate), and keep the exit control inside the safe area. |
| Games: don't change the display mode | Don't switch resolution, refresh rate or orientation (`screen.orientation.lock`) unasked on entering full screen; render at the device's pixel ratio and let the person choose quality/resolution in settings. |
| PWAs | `display: standalone` / `fullscreen` in the manifest is the installed-app equivalent; still provide in-app exit/back and don't hide the only way to navigate. |
| Presentation / lightbox | Follow `immersive-experiences.md` §Web: dim the backdrop, keep an obvious close (Esc + button), trap focus inside while open, restore focus on close. |

Field-note cross-links:
- `hig/foundations/immersive-experiences.md` (web "focus mode": never auto-open fullscreen/lightbox/video; provide an explicit entry; easy exit): **confirmed** and made specific here; this page adds "person chooses to exit; never auto-exit".
- `hig/foundations/layout.md` (CRITICAL): safe areas, `100dvh` and "no content stuck under fixed bars" apply to fake and real full screen; run the layout probe with the full-screen element open.
- `hig/patterns/feedback.md` (CRITICAL): pausing a game/video when people leave is feedback-safe (no surprise); an exit-confirm interruption only if progress would be lost.
- `hig/foundations/motion.md`: entering/leaving full screen is a layout change: keep it short, cancellable, and free of edge motion.
- `hig/patterns/file-management.md`: the document launcher is itself a full-screen start experience; autosave protects against accidental exits.
- `hig/getting-started/designing-for-macos.md` and `designing-for-ipados.md` ("support full-screen mode", "avoid full-screen takeovers"): **consistent**: full screen is opt-in and user-initiated; iPad content should not take over the whole screen for small tasks.
- No conflict with a field note.

## Checklist
- [ ] Full screen is offered only where content or task benefits (games, media, slideshows, deep work) and is entered only by the person (button/shortcut), never on load.
- [ ] The full-screen element contains its own controls; exiting is always possible (button + Esc), and the app never exits by itself.
- [ ] Entering full screen changes proportions only, never which features exist; no programmatic window resizing; transitions are subtle and respect reduced motion.
- [ ] Essential controls stay visible or one tap/move away; auto-hidden bars restore on tap, swipe down, pointer-to-top or keyboard focus.
- [ ] Leaving the tab/app pauses playback or the game and resumes at the same point.
- [ ] Safe areas, `dvh` units and camera-notch areas are respected; the exit control sits inside the safe area.
- [ ] Games don't change resolution/orientation on their own; pointer lock only during play and released on pause.
- [ ] Accidental exits are prevented where they cost progress (overscroll/touch-action guards, autosave), without removing the standard exit.
- [ ] Layout and Feedback gates re-run with the full-screen state open.

## Related
- Ingested: Immersive experiences (✓), Layout (✓ CRITICAL), Feedback (✓ CRITICAL), Motion (✓), File management (✓), Designing for macOS (✓), Designing for iPadOS (✓).
- Ingested since: Modality (✓). Windows (✓ `components/presentation/windows.md`: iPadOS full screen vs windowed, macOS window states), Multitasking (✓). Not yet ingested: Toggles. Ingested since: Toolbars (✓). Playing video ✓, Launching ✓.
- Developer docs: listed in Specs & values. Video: *Elevate the design of your iPad app* (WWDC25 208).
