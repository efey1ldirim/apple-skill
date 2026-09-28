# Launching
Source: https://developer.apple.com/design/human-interface-guidelines/launching · Section: Patterns · Supported platforms: all six on the platform strip (launch **screens** apply only to iOS, iPadOS and tvOS) · Ingested: 2026-09-28 · Apple last updated: 2024-06-10 (splash screen guidance). Change log: 2023-06-21 visionOS guidance · 2024-06-10 splash screen guidance. One DocC fetch, read in full. 5 screenshots (dark-mode page, hero → change log + site footer) were compared with the fetched text line by line: everything matches, including the change-log rows. Only the video thumbnails and page chrome are marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
Launching is the time from "open" to "first screen is ready". Make it feel instant, show a **quiet static launch screen that is nearly identical to the first screen** (no text, no branding), and bring people back to exactly where they left off. Put branding and welcome content in a splash or onboarding screen **after** launch.

## Rules

### Framing (intro)
- Launching **begins** when someone opens the app or game, **includes an initial download**, and **ends** when the first screen is ready.
- After launching completes you may offer **onboarding**, which gives people a high-level view of the app or game (Onboarding ✓: `hig/patterns/onboarding.md`).

### Best practices
- **must** **Launch instantly.** People want to start right away and sometimes won't wait more than **a couple of seconds**.
- **must** **If the platform requires it, provide a launch screen.**
  - iOS, iPadOS, tvOS: the system shows your launch screen the moment the app or game starts and quickly swaps it for your first screen, so the experience feels fast and responsive.
  - **macOS, visionOS, watchOS** don't require launch screens.
- **may** **If you need a splash screen, show it at the start of the onboarding flow.**
  - A splash screen is a beautiful graphic that briefly communicates branding and other information you must present.
  - With **no** onboarding, show the splash screen **as soon as launching completes** (2024 addition).
- **should** **Restore the previous state when the app restarts** so people continue where they left off.
  - Don't make them retrace steps to reach their earlier location.
  - Restore fine-grained state as far as possible: scroll to the person's most recent position; show windows in the same state and place where they left them.

### Launch screens
- Not applicable to macOS, visionOS or watchOS.
- **should** **Downplay the launch experience.** A launch screen is **not** part of onboarding, **not** a splash screen and **not** a chance for artistic expression. Its **sole function** is to make the app seem quick to launch and immediately ready to use.
- **must** **Make it nearly identical to the first screen of the app or game.**
  - Elements that look different once launch completes cause an unpleasant **flash** between the two screens.
  - If the first thing shown is a **solid colour**, the launch screen is **only that solid colour**.
  - Match the device's **current orientation** and **appearance mode** (light/dark).
- **must not** **Include text**, even if the first screen has text. The launch screen's content never changes, so any text on it **won't be localised**.
- **must not** **Advertise.** It is not a branding opportunity: don't make it look like a splash screen or an "About" window, and don't include logos or other branding **unless they're a fixed part of the app's first screen**.

### Platform considerations
- **macOS, watchOS:** no additional considerations.
- **iOS, iPadOS:** **launch in the appropriate orientation.**
  - If the app supports portrait and landscape, launch in the device's **current** orientation.
  - If the interface runs in one orientation only, launch in that one and let people rotate if needed.
  - Make sure a **landscape-only** interface responds correctly whether people enter landscape by rotating **left or right** (Apple links Layout ✓).
- **tvOS:**
  - **Note:** unlike the layered images used through much of a tvOS app, the launch screen is **static**.
  - **may** In a **live-viewing app**, consider **starting playback automatically** shortly after the app starts: people come to watch TV, so after **a few seconds of inactivity** start new or recently viewed live content (Apple links Live-viewing apps).
- **visionOS:** **consider launching in the Shared Space even if the app is fully immersive.**
  - A window in the Shared Space gives more context and time to load, and lets you present a **control that opens the fully immersive experience**.
  - People like choosing **when** to go to a Full Space, especially when other apps run in the Shared Space (Apple links Immersive experiences ✓).

## Specs & values
The page has **no sizes or colours**. Its numbers are vague durations, recorded as written:

| Item | Value |
|---|---|
| Acceptable wait | "a couple of seconds" at most (some people won't wait that long) |
| Launch defined as | open → (initial download included) → first screen ready |
| Launch screen required | iOS, iPadOS, tvOS · **not** macOS, visionOS, watchOS |
| Launch screen content | ≈ first screen; solid colour only if the first screen is a solid colour; **no text, no logos** (unless fixed in the first screen); matches orientation and appearance mode |
| Splash screen | at the start of onboarding, or right after launch when there is no onboarding |
| State restoration | scroll position, window state and location, previous location in the app |
| iOS/iPadOS orientation | current orientation if both supported; else the supported one; landscape-only works with either landscape direction |
| tvOS launch screen | static (not layered) |
| tvOS live-viewing autoplay | after "a few seconds of inactivity" |
| visionOS | start in the Shared Space, offer a control to enter the immersive Full Space |
| Developer docs | Xcode *Specifying your app's launch screen* · UIKit *Responding to the launch of your app* |
| Related HIG pages | Onboarding ✓ · Loading ✓ |
| Videos | *Optimizing App Launch* (WWDC19 423) · *Love at First Launch* (WWDC17 816) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a rounded square containing a diagonal arrow pointing to the upper-trailing corner, over construction circles.
- **tvOS note (from screenshot):** a Note aside in a rounded dark box: the launch screen, unlike layered images elsewhere in a tvOS app, is static.
- **Video thumbnails (from screenshot):**
  - *Optimizing App Launch*: "162 days" with the small text "For each millisecond saved", beside a red planet and a small rocket.
  - *Love at First Launch*: two phones side by side; the left shows a screen headed "iTravel" over a mountain photo with login buttons, the right a listing screen with photos and small text **(from screenshot)**; the small text is not legible enough to transcribe.
- **Page chrome (from screenshot):** the browser address bar in the first screenshot shows the page URL; the platform strip lights all six devices; the TOC reads Launching · Best practices · Launch screens · Platform considerations · Resources · Change log. The last screenshot ends with the Apple developer site footer (site chrome, not page content).
- The page has **no ✗/✓ pairs, no comparison images and no in-page videos** (fetch script run; catalog IDs unchanged, total 99). Nothing is measured.
- **Text that is not in the fetch:** only the video thumbnail strings and the chrome above.

## Web translation
A web "launch" is the **first load** of a page or installed PWA. The launch screen is your **app shell before content**, not a loading screen.

| HIG rule | Web implementation |
|---|---|
| Launch instantly (≈ "a couple of seconds") | Budget it: aim for first meaningful content quickly (Largest Contentful Paint ≲ 2.5 s on a mid-range phone; CONV / Web Vitals, not Apple). Inline critical CSS, defer non-critical JS, preload the first-screen font/image, cache the shell with a service worker, avoid blocking network calls before first paint. Measure with the browser's performance panel, not by eye. |
| Launch screen ≈ first screen | Paint the **real layout skeleton** immediately: same header, same background, same grid, with placeholder shapes where data will land (skeletons match final sizes so nothing jumps: no layout shift). If the first screen is a solid colour, the shell is that colour. The launch state and the first screen are the same document, never two different designs. |
| No flash: match appearance and orientation | Set the page background **in inline CSS** before JS runs, per `prefers-color-scheme` (and `data-theme`), plus `<meta name="theme-color" media="(prefers-color-scheme: dark)" …>`. For a PWA set `background_color` / `theme_color` in the manifest to the first screen's colour; on iOS add `apple-touch-startup-image` only if it matches (a solid-colour image is safest). Don't lock orientation (`screen.orientation.lock`); render for the current one. |
| No text on the launch screen | The shell shows **no words**: text would not be localised (and may be wrong-language before i18n loads). Skeleton bars, not "Loading…" headlines. If assistive tech needs a status, use a visually hidden `role="status"` string that is localised (Feedback gate), never visible brand copy. |
| Don't advertise | No logo splash, tagline or "Powered by" on load unless that exact logo is part of the real first screen (e.g. the header logo already there). Branding belongs to the splash/onboarding step. |
| Splash screen at the start of onboarding | A brand moment only as **step 1 of a first-run flow** (or right after load when there is no flow), skippable, shown **once per install/session**, never on every visit or route change; keep it short and non-blocking. |
| Restore previous state | Restore route, scroll position (`history.scrollRestoration = "manual"` plus your saved offset, or the browser default with correct heights), open panels, selected tab, unsent drafts, media position; keep it in `localStorage`/IndexedDB (never secrets, `privacy.md`). Reopening a tab/PWA lands where people left; only ask to start over if the state is stale or invalid. |
| Orientation (iOS/iPadOS) | Use the current orientation; support both unless the product is truly one-orientation; verify the landscape layout in both directions (Layout gate probe at 667×375). |
| tvOS live autoplay | For live/linear video on a TV or kiosk surface: start playing after a few seconds idle, muted if the browser policy requires (autoplay policies), with a visible unmute and pause; never autoplay full-volume audio on load elsewhere. |
| visionOS Shared Space first | WebXR / immersive web: open as a normal page with a clear **"Enter immersive"** button (`navigator.xr.requestSession` needs a user gesture anyway); never launch straight into immersive; give context while assets load (`immersive-experiences.md`). |
| Loading after launch | Anything slower than the first screen belongs to the Loading pattern (not yet ingested): a determinate progress or skeleton, named for assistive tech (Feedback gate); no endless bare spinner. |

Field-note cross-links:
- `hig/foundations/branding.md` already says "no branded launch screen / render the app shell immediately"; **confirmed** and completed here (the splash belongs to onboarding).
- `hig/foundations/layout.md` (CRITICAL): orientation and the first-screen skeleton must pass the layout probe; `100dvh` prevents a jump when browser bars settle.
- `hig/foundations/dark-mode.md` and `color.md` (CRITICAL): launch background follows the appearance mode with no white flash in dark.
- `hig/patterns/feedback.md` (CRITICAL): a spinner-only launch screen fails the gate; use skeleton + named status.
- `hig/patterns/file-management.md` and `going-full-screen.md`: autosave and "resume where they left off" are the counterpart of state restoration.
- `hig/foundations/immersive-experiences.md`: the visionOS "launch in the Shared Space, then offer immersion" rule.
- `hig/getting-started/designing-for-visionos.md` ("apps launch by default in the Shared Space"): **consistent**.
- No conflict with a field note.

## Checklist
- [ ] First meaningful content appears within about two seconds on a mid-range device; the shell is cached and non-blocking.
- [ ] The launch state is the first screen's own skeleton: same background, layout and sizes; no layout shift or flash when data arrives.
- [ ] Background and theme colour match the current appearance mode before JS runs; orientation is respected, never locked.
- [ ] The launch state has **no visible text, logo or tagline** (unless a fixed part of the real first screen); no artistic splash on every load.
- [ ] Any splash/brand moment sits at the start of onboarding, is skippable and appears once, not on every launch.
- [ ] The previous state (route, scroll, selections, drafts, media position) is restored on return.
- [ ] Live-video surfaces may autoplay after a few idle seconds within browser policy; immersive experiences start from a normal page with an explicit entry control.
- [ ] Layout gate (incl. landscape) and Feedback gate pass on the launch state; no unnamed spinner.

## Related
- Ingested: Branding (✓), Layout (✓ CRITICAL), Feedback (✓ CRITICAL), Immersive experiences (✓), Dark Mode (✓), Color (✓ CRITICAL), File management (✓), Going full screen (✓), Designing for visionOS (✓).
- Ingested: also Images (✓, covers layered images). Ingested since: Loading (✓), Multitasking (✓). Onboarding (✓). Playing video (✓). Live-viewing apps ✓ (`hig/patterns/live-viewing-apps.md`).
- Developer docs: Xcode *Specifying your app's launch screen*; UIKit *Responding to the launch of your app*. Videos: *Optimizing App Launch* (WWDC19 423), *Love at First Launch* (WWDC17 816).
