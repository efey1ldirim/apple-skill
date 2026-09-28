# Multitasking
Source: https://developer.apple.com/design/human-interface-guidelines/multitasking · Section: Patterns · Supported platforms: iOS, iPadOS, macOS, tvOS, visionOS (**not watchOS**: "Not supported in watchOS"; watchOS is dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-28 · Apple last updated: 2025-06-09. Change log: 2023-06-21 visionOS guidance · 2023-12-05 artwork for primary and auxiliary windows in iPadOS · 2025-06-09 platform considerations reorganised, multiple-windows guidance added for iPadOS. One DocC fetch, read in full. 10 screenshots (dark-mode page, hero → Videos) were compared with the fetched text and captions line by line: everything matches and the ten screenshots are contiguous. **The change-log rows were read from the fetch only** (the TOC in the screenshots lists Change log). Text that exists only inside the illustrations is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
People expect every app to survive being switched away from, split, windowed and reopened at any size: **save and restore context at any moment**, pause what needs attention, let user-started work finish in the background, keep media playing where the platform expects it, adapt to any window size, and don't interfere with the system's window behaviour.

## Rules

### Framing (intro)
- **must** People **expect** multitasking, and may think something is **wrong** if an app doesn't allow it. Except **rare cases** (some games; **visionOS apps running in a Full Space**), **every app must work well with multitasking**.
- Multitasking is more than app switching; it looks different per platform (see Platform considerations).

### Best practices
- **must** **Always be ready to save and restore context.** You don't know when people will start multitasking, so the app or game must be prepared at any moment. A great experience manages content across several simultaneous contexts.
- **should** **Pause activities that need attention or active participation when people switch away.** Example: a game or a media-viewing app must ensure people **don't miss anything**; when they return, they **continue as if they never left**.
- **should** **Respond smoothly to audio interruptions** (another app or the system may interrupt: an incoming call, a music playlist started by Siri):
  - **primary** audio interruptions (music, podcasts, audiobooks): **pause indefinitely**;
  - **shorter** interruptions (e.g. GPS directions): **temporarily lower the volume or pause**, then **resume the original volume or playback** when it ends.
  - (Apple links Playing audio ✓: `hig/patterns/playing-audio.md`.)
- **should** **Finish user-initiated tasks in the background.** When someone starts a download or processes a video file, they expect it to **finish even after they switch away**. If a task needs no more input, **complete it in the background before suspending**.
- **should** **Use notifications sparingly.**
  - The app can notify while suspended or in the background.
  - **Important or time-sensitive** task started by the person and then left → a notification on **completion** is appreciated (so they can come back for the next step).
  - **Routine or secondary** task → **don't** notify; let people check when they return.
  - (Apple links Managing notifications ✓.)

### Platform considerations
- **Not supported in watchOS.**

#### iOS
- **iPhone:** multitasking lets people use **FaceTime** or watch a video in **Picture in Picture (PiP)** while using a different app.
  - Illustrations: the **app switcher** ("displays all currently open apps") and Mail with a **small FaceTime image** overlaid at the bottom-leading corner ("a current FaceTime call can continue while people use another app").

#### iPadOS
- People can see and use the **windows of several apps at the same time**. **One app can have several windows** open too (so people can use more than one window of the same app).
- People use iPad **full screen** (apps fill the screen; switch windows with the **app switcher**) or **windowed**.
- **Windowed apps** are **resizable**; people arrange them with behaviour **similar to macOS**.
  - The system provides window controls for **common tiling configurations, full screen, minimise and close**.
  - The system marks the **frontmost window** by **colouring its window controls** and casting a **drop shadow on windows behind it** (Apple links Windows › iPadOS, not yet ingested).
- **Picture in Picture:** videos and FaceTime calls can also play in a PiP overlay above other content, whether apps are full screen or windowed.
- **Note (aside):** apps **don't control** multitasking configurations and **receive no indication** of which one people choose.
- **should** So that the app responds correctly when opened windowed, **adapt gracefully to different screen sizes** (Layout ✓, Windows; developer doc *Multitasking on iPad, Mac, and Apple Vision Pro*).

#### macOS
- Multitasking is the **default experience**: people usually run several apps and switch between windows and tasks.
- With several app windows open, macOS adds **drop shadows** so windows look **layered** on the desktop and applies other visual effects to distinguish **window states** (Apple links macOS window states).

#### tvOS
- People can play or browse content while also playing movies or TV shows in **Picture in Picture** (where supported).

#### visionOS
- People run **multiple apps at once in the Shared Space**, viewing and switching between **windows and volumes**.
- **Only one window is active at a time.** When people look from one window to another, the one they look at becomes **active** and the previous one becomes **more translucent and appears to recede along the z-axis**. **Closing** an app window in the Shared Space moves the app to the **background without quitting** it.
- **Note (aside):** for the **Now Playing** app, closing its window **automatically pauses audio**; people can resume in **Control Center** without opening the window.
- **should** **Avoid interfering with the system's multitasking behaviour.** visionOS applies a **feathered mask** to the window people look away from to show its changed state; **don't change the appearance of a window's edges**, so that feedback isn't disturbed.
  - (Video, **not measured**: Notes and Settings in the Shared Space; the viewer drags Notes to slightly overlap Settings, activates Settings, then Notes again; each time the system **feathers the inactive window**.)
- **should not** **Pause a window's video when people look away.** In visionOS, as in macOS, playback started in one window should **continue** while people use another window.
- **should** **Be ready for audio ducking:** unless the app is the Now Playing app, its audio can **duck** when people look away to another app.

## Specs & values
The page has **no sizes, timings or colours**. Its concrete facts:

| Item | Value |
|---|---|
| Support | required for every app, except rare cases: some games, visionOS apps in a Full Space |
| Save/restore | at any time; the app can't know when multitasking starts |
| Audio interruption handling | primary (music/podcasts/audiobooks) → pause indefinitely · shorter (GPS etc.) → duck or pause, then resume the original volume/playback |
| Background tasks | user-initiated tasks (downloads, video processing) finish in the background |
| Notifications | only for important/time-sensitive completions; not for routine tasks |
| iPhone | PiP for video and FaceTime; app switcher |
| iPadOS | several apps and several windows per app; full-screen or windowed; resizable; tiling, full screen, minimise, close controls; frontmost = coloured controls + shadow on windows behind; PiP over anything; apps aren't told the configuration |
| macOS | layered drop shadows; window states |
| tvOS | PiP (where supported) |
| visionOS | one active window; inactive = more translucent, recedes on z; closing = background, not quit; Now Playing: closing pauses audio (resume from Control Center); feathered mask: don't change edge appearance; don't pause video on look-away; audio may duck |
| Developer docs | UIKit *Responding to the launch of your app* · *Multitasking on iPad, Mac, and Apple Vision Pro* |
| Related HIG pages | Layout ✓ · Windows · Playing video (last two not yet ingested) |
| Videos | *Elevate the design of your iPad app* (WWDC25 208) · *Make your UIKit app more flexible* (WWDC25 282) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a rounded square split vertically into two panes by a narrow dark gutter (a split-view sketch), over construction circles.
- **iPhone app switcher (multitasking-01, from screenshot):** a stack of app cards fanned in perspective with small app icons and names above them ("Music", "Notes"…): the Music card shows a "Library" list (Playlists, Artists, Albums, Songs, a "Not Playing" mini-player and a Home/Radio/Library tab bar); a Mail card and a Maps card sit behind; a Notes card with a botanical sketch is in front-right, cut off by the screen edge.
- **iPhone PiP (multitasking-01, from screenshot):** Mail showing an email "New hiking trail" from a sender to "Danny Rico" dated 8/28/22 with a short body; a **small rounded portrait video tile** of the FaceTime caller floats over the bottom-leading part of the message, covering part of the address text.
- **iPad app switcher (from screenshot):** landscape grid of five app thumbnails with names and small sublabels under each (Maps "Santa Clara County", Landmarks, Calendar "Today", WritingApp, Photos) above the Dock, on a blue-teal wallpaper.
- **iPad windowed apps (from screenshot):** Maps (larger, behind) and Landmarks ("Mount Fuji" hero with a "Learn More" pill and rows for Asia and Africa) overlapping; the front window casts a **soft shadow** on the one behind and shows **coloured window controls**; the Dock sits at the bottom.
- **visionOS poster (from screenshot):** a living room with a Notes-like window (botanical drawings) in front and a Settings "General" window behind, softly feathered; a blue "Play ⊙" link sits below.
- **Video thumbnails (from screenshot):** *Elevate the design of your iPad app*: a WWDC25 badge with red, yellow and green window controls and a pointer; *Make your UIKit app more flexible*: a presenter in a room.
- **Page chrome (from screenshot):** watchOS is dimmed on the platform strip, matching "Not supported in watchOS"; the TOC reads Multitasking · Best practices · Platform considerations · Resources · Change log.
- **Visual pair added to the catalog:** `multitasking-01` (iPhone app switcher vs PiP), kind *compare*, no ✗/✓. Existing 99 IDs unchanged; total now **100**.
- **Text that is not in the fetch:** only the strings inside the illustrations described above, the video thumbnails and the chrome.

## Web translation
On the web, "multitasking" = **many tabs, several windows, resizable and snapped windows, split-screen browsers, PiP, background tabs, and OS-level app switching for PWAs**. The app never knows the configuration (mirrors the iPad note).

| HIG rule | Web implementation |
|---|---|
| Every app works with multitasking | Assume the app can be hidden, frozen, discarded or resized at any time (Page Lifecycle: `visibilitychange`, `pagehide`, `freeze`/`resume`, bfcache). Test the back/forward cache (`pageshow` with `persisted`) and tab restore. |
| Save and restore context anytime | Persist state continuously (route, scroll, form drafts, selection, media position) to `sessionStorage`/`localStorage`/IndexedDB on change and on `visibilitychange:hidden`/`pagehide` (`navigator.sendBeacon`/`fetch keepalive` for the last write); restore on load (`launching.md`). Never rely on `unload`/`beforeunload` alone (unreliable on mobile). |
| Pause what needs attention | Games, timed quizzes, live auctions, slideshows: on `visibilitychange` (hidden) pause the loop (`requestAnimationFrame` already stops), timers and audio; show a **Resume** overlay and continue from the same state. Differentiate `document.hidden` (tab hidden) from `window.blur` (another window has focus, page still visible): on desktop with windows side by side, **blur must not pause** ongoing media or a dashboard. |
| Media keeps playing where expected | Video/audio the person started **keeps playing** when they switch windows (visionOS/macOS rule); on mobile use **Picture-in-Picture** (`video.requestPictureInPicture()`, `disablePictureInPicture` unset) and the **Media Session API** (metadata, play/pause/seek handlers). Offer **Document Picture-in-Picture** for richer floating tools where supported. Don't autoplay-pause solely on blur. |
| Audio interruptions | Handle `pause`/`ended` from the system (calls, other players); don't fight for audio focus; resume only if the person had been playing and the interruption was short; use `navigator.audioSession` (where supported) to declare `playback`/`ambient` so the browser can duck or mix appropriately. Duck your own effects when speech/narration plays. |
| Finish user-started tasks in the background | Uploads/exports/processing continue while hidden: Service Worker + **Background Fetch / Background Sync** where supported, `fetch(..., { keepalive: true })` for small final requests, Web Locks for one-writer tasks, Web Workers for long compute; queue and retry when the tab returns. Show status in-app ("Uploading 3 of 5") and warn before leaving only if the task **can't** continue (`beforeunload`). |
| Notifications sparingly | Notify only when an important/time-sensitive user-started task completes and the tab is hidden (`document.visibilityState`); otherwise show an in-app status when they return (`managing-notifications.md`). |
| Windowed and resizable: adapt to any size | The browser window can be any size at any time: responsive layouts by **width** (container/media queries), never device or user-agent sniffing (LAYOUT GATE); test 320 px → wide, both orientations, and mid-drag resizes without state loss. Never assume full-screen. |
| Several windows/tabs of the same app | Design for concurrent sessions: keep state per window/tab (or sync on purpose via `BroadcastChannel`, `storage` events, Web Locks, server push); avoid "only one tab" assumptions and destructive conflicts (last-write-wins with a visible conflict prompt); one tab owns polling/websocket if needed (leader election). |
| Frontmost window identification | Mirror the OS: in windowed layouts style the active window from `document.hasFocus()` / `:focus-within` (inactive = quieter title, reduced emphasis) and never fake OS window chrome. On visionOS Safari the system feathers/recedes inactive windows itself: **don't draw custom edge glows or bezels** that fight that feedback; keep page edges plain. |
| PiP over other content | Floating players and call windows may overlay any content: use browser PiP; for in-page mini-players keep them above content without hiding essential controls, draggable and dismissible (`drag-and-drop.md`), and never block safe areas. |
| Don't pause a window's video on look-away (visionOS, macOS) | Pausing on tab/window `blur` is wrong for media the person started; pause only on `hidden` if the platform requires (mobile background), and honour "background audio" where the product promises it. |
| Now Playing / closing | Closing the media window/tab pauses audio (expected); provide resume through the Media Session (lock screen, headset) controls. |

Field-note cross-links:
- `hig/patterns/launching.md`: "restore the previous state" is the launch-time half of "save and restore context anytime".
- `hig/patterns/file-management.md`: autosave on `visibilitychange` and unsaved-change guards are the document version of the same rule.
- `hig/patterns/loading.md`: background downloads/uploads and "let people do other things while loading".
- `hig/patterns/managing-notifications.md`: notify only for important completions.
- `hig/patterns/live-viewing-apps.md`: audio matches context; PiP while browsing the guide.
- `hig/patterns/going-full-screen.md`: pause and resume on leaving full screen; the same rule applies to switching away.
- `hig/foundations/layout.md` (CRITICAL) and `hig/getting-started/designing-for-ipados.md` (✓: multitasking, windows any size ~320 px to full screen): the LAYOUT GATE probe is the test for "adapt to any window size".
- `hig/foundations/spatial-layout.md` and `designing-for-visionos.md` (✓): visionOS window recession/feathering; don't fight system feedback.
- `hig/patterns/feedback.md` (CRITICAL): "Resume" overlays and background-task status are quiet status feedback.
- No conflict with a field note.

## Checklist
- [ ] State (route, scroll, drafts, selection, media position) is saved continuously and on `visibilitychange`/`pagehide`, and restored on return and after bfcache/tab discard.
- [ ] Attention-demanding activity (games, timed tasks, live pages) pauses when the tab is hidden and resumes at the same point; blur alone doesn't pause media or dashboards.
- [ ] Media the person started keeps playing (PiP/Media Session); audio interruptions pause/duck and resume sensibly.
- [ ] User-started uploads, exports and downloads continue in the background and report status; leaving is only blocked if the task truly can't continue.
- [ ] Notifications are sent only for important or time-sensitive completions.
- [ ] The layout adapts to any window width/height without device sniffing; verified 320 px → wide, both orientations and live resizing (Layout gate).
- [ ] Multiple tabs/windows of the app coexist without corrupting state (sync or per-window state, conflict handling).
- [ ] No custom fake window chrome or edge effects; the active/inactive state uses `document.hasFocus()`/`:focus-within` styling only.

## Related
- Ingested: Launching (✓), File management (✓), Loading (✓), Managing notifications (✓), Live-viewing apps (✓), Going full screen (✓), Layout (✓ CRITICAL), Feedback (✓ CRITICAL), Spatial layout (✓), Designing for iPadOS (✓), Designing for visionOS (✓).
- Ingested since: Offering help (✓). Not yet ingested: **Windows**, **Playing video**, Split views, Sidebars.
- Developer docs and videos: listed in Specs & values.
