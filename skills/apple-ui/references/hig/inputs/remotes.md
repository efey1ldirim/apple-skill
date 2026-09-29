# Remotes
Source: https://developer.apple.com/design/human-interface-guidelines/remotes · Section: Inputs · Supported platforms: **tvOS only** (page data; the platform section says "Not supported in iOS, iPadOS, macOS, visionOS, or watchOS") · Ingested: 2026-09-29 · Apple last updated: **not shown** (the page has **no Change log**, and no date in its data). **Link-only ingestion: one DocC fetch, read in full (45 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)" and the Visual notes come from the alt text only. Not marked critical: no token file, checker or gate. The page has **no numbers or measurements**; its concrete content is **2 gestures, 1 four-row behaviour table (touch surface swipe, touch surface press, Back, Play/Pause) and 2 EPG-button rules**.

## In one line
The **Siri Remote** (a **clickpad plus touch surface and a few buttons**) is **the primary input for Apple TV**, so an app should **behave exactly as the remote is expected to behave**: **standard gestures do standard things, focus moves in the same direction as the swipe, a press is intentional and a tap may be accidental (ignore taps during live video), Back opens the parent screen (or pauses a game, then closes the pause menu), and Play/Pause plays, pauses or resumes media**. **Custom gestures only inside gameplay.** **Show what a gesture will do** (resting a thumb shows where to swipe). **Compatible remotes** with guide / browse / page up / page down buttons: **open the EPG on guide or browse, page through it with page up/down, change channel with page up/down while content plays.** On the web (smart-TV browsers): **`keydown` for arrows, Enter, Back, `MediaPlayPause`, `PageUp`/`PageDown`, `ChannelUp`/`ChannelDown`, spatial navigation, a Back handler that goes to the parent screen, and the Media Session API**.

## Rules

### Framing (intro)
- The Siri Remote is **the main input method for Apple TV** and helps people **feel connected to onscreen content from across the room**. Besides **several specific buttons**, it has a **clickpad and touch surface** that support the **familiar gestures swipe and press** people use to **navigate tvOS apps, browse channels and content, play and pause media, and make selections**.

### Best practices
- **should** **Prefer standard gestures for standard actions.** Unless people are **actively playing a game**, they expect the remote to behave **the standard way in every app**; **redefining or repurposing standard remote behaviour confuses and complicates**.
- **should** **Be consistent with the tvOS focus experience.** Focus creates a strong connection with the content; **combine gestures and focus in familiar ways, e.g. always move focus in the same direction as the gesture** (→ Focus and selection).
- **should** **Give clear feedback about what a gesture will do.** Example: **lightly resting a thumb on the remote shows where to swipe down** to reveal an info area.
- **should** **Define new gestures only when it makes sense.** In **gameplay** custom gestures can be fun; **elsewhere people expect standard gestures** and **won't enjoy discovering or remembering new ones**.
- **should** **Tell press and tap apart, and don't react to an inadvertent tap.** **Pressing is intentional**: good for **choosing a button, confirming a selection, and starting an action in gameplay**. **Taps** suit **navigation or showing extra information**, but people **tap by accident when they rest a thumb, pick the remote up, move it or hand it over**, so it often works to **ignore taps during live video playback**.
- **may** **Use the position of a tap for navigation or gameplay.** The remote **tells apart up, down, left and right taps** on the touch surface. Respond to **positional taps only if it fits the app and is intuitive and discoverable**.
- **must** **In almost all cases, open the parent of the current screen on Back.** At the **top level** the parent is the **Apple TV Home Screen**; inside an app the parent is **defined by the app hierarchy and isn't necessarily the previous screen**. **Exception: active gameplay**, where it is easy to press Back repeatedly by accident: **open an in-game pause menu** (with a different interaction to reach the main menu), and **when the pause menu is open, Back closes it and resumes**. **Press and hold Back goes to the Home Screen from anywhere.**
- **must** **Respond correctly to Play/Pause during media playback.** When music or video plays, **Play/Pause plays, pauses or resumes** it.

### Gestures
- The **clickpad's touch surface detects swipes and presses.**
- **Swipe:** scroll through **large numbers of items** with motion that **starts fast and slows down according to the swipe's strength**; **swiping up or down on the remote's edge speeds through items very quickly**.
- **Press:** **activates a control or selects an item**; people **also press before swiping to enter scrubbing mode**.

### Buttons
- Make the app or game respond to these presses as follows (table under Specs).

### Compatible remotes
- Some **compatible remotes** have buttons for **browsing live TV or channel-based content**, e.g. one that **opens an electronic program guide (EPG)** and others to **browse the guide or change channels** (developer: "Providing Channel Navigation"; design: Live-viewing apps › EPG experience).
- **should** **If your live-viewing app has an EPG, respond to the remote's EPG buttons as expected.** **"Guide" or "browse" opens the EPG.** While the EPG is open, **"page up" / "page down" navigate through it**; **don't use these buttons for anything else while people browse**. On the Siri Remote and compatible remotes, people can also **tap the upper or lower area of the touch surface to browse the EPG**. If the app has **no EPG**, **the system routes these presses to the device's default guide app**.
- **should** **While content plays, treat a compatible remote's "page up" / "page down" as change channel.** People expect these buttons to behave **differently when viewing content and when browsing an EPG**.

### Platform considerations
- **tvOS only.** Not supported in iOS, iPadOS, macOS, visionOS or watchOS.

## Specs & values
**Expected behaviour of remote controls**
| Button or area | In an app | In a game |
|---|---|---|
| Touch surface (swipe) | Navigates; changes focus | Acts as a **directional pad** |
| Touch surface (press) | Activates a control or item; navigates deeper | Acts as the **primary button** |
| Back | Returns to the previous screen; exits to the Apple TV Home Screen | **Pauses / resumes gameplay**; returns to the previous screen, exits to the main game menu, or exits to the Home Screen |
| Play/Pause | Starts media playback; pauses / resumes it | Acts as the **secondary button**; **skips an intro video** |

| Item | Value |
|---|---|
| Remote parts named | **clickpad**, **touch surface**, **Back**, **Play/Pause**, **"guide" / "browse"**, **"page up" / "page down"** (compatible remotes) |
| Gestures | **swipe** (inertial; edge swipe = very fast), **press** (activate/select; press before swipe = scrubbing) |
| Tap | positional (up/down/left/right); ignore during live video; also browses the EPG (upper/lower area) |
| Back rule | parent screen (app hierarchy), **not** necessarily the previous screen; game: pause menu → Back closes it; **hold Back = Home Screen** |
| Fallback | no EPG in the app → the system sends guide/browse presses to the default guide app |
| Developer docs | "Providing Channel Navigation" (TVServices), linked inline |
| Related list | "Use your Siri Remote or Apple TV Remote with Apple TV" (Apple Support article, not a HIG page) |
| Videos / Change log | none on the page |

## Visual notes (link-only: from alt text)
- **Hero:** a sketch of an **Apple TV remote** over grid lines, **tinted purple** (alt). Light and dark variants exist.
- **No other images, videos or callouts** on the page.
- **Mismatches / notes:**
  1. **The Gestures section defines only swipe and press**, but the best practices also rely on **tap** (positional taps, inadvertent taps, EPG browsing) and on **resting a thumb** to reveal where to swipe; tap is **never defined as a gesture** on this page.
  2. **The buttons table lists only touch surface, Back and Play/Pause.** The page **names no other buttons** (Home/TV, Siri, volume, mute); the **only path to the Home Screen it describes is press-and-hold Back**.
  3. **"Related" links to an Apple Support article**, not a HIG page; there is **no Change log**, **no video** and **no developer-documentation list** (the one developer link is inline, in *Compatible remotes*).
  4. **The "Gestures" link inside Best practices** points to this page's own section (`#Gestures`), and so does the "Buttons" link.
  5. **In games the same controls change role**: swipe becomes a d-pad, press the primary button, Play/Pause the secondary button, Back the pause/resume control. The page explains **why** only for Back.
- **Catalog:** the script found **0 comparisons** (one hero image). Catalog stays **220**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
Smart-TV browsers (Apple TV has no general web browser; the target here is **web apps on TVs, set-top boxes, Fire TV, Android TV, webOS, Tizen and kiosks**) receive the remote as **keyboard events**. The design rules carry over unchanged: **standard behaviour, direction-consistent focus, careful Back, Play/Pause**. Key names are from the UI Events key-value list, and the platform key codes are background knowledge; **verify on each TV platform**.

| HIG rule | Web implementation |
|---|---|
| Swipe navigates and changes focus; d-pad in games | **Arrow keys** (`ArrowUp/Down/Left/Right`) move focus with **CSS spatial navigation** where available or a **focus manager** (the next focusable item in that direction); **swipe/edge-swipe speed** has no web signal, so **repeat keys should accelerate** (**CONV**: after ~400 ms of held key, step faster) (`focus-and-selection.md`). |
| Focus moves in the same direction as the gesture | **Never reverse arrow keys**; scrolling follows focus (`scrollIntoView({block:"nearest"})`); in RTL, **mirror left/right** (`right-to-left.md`). |
| Press activates / selects / navigates deeper | **`Enter`** (`OK`/`Select` key) **triggers `click`**; use native `<button>`/`<a>` so it works; **`Space` also activates** on buttons. **Press-vs-tap doesn't exist** on the web (no touch surface signal): treat **only `Enter` as a press** and **don't infer taps**. |
| Ignore inadvertent taps during live video | During **live playback**, **don't let a stray arrow or `Enter` change channel, seek or leave**: require a **confirmation surface** (a focused control, a **short debounce ≈ 300 ms, CONV**) before destructive or disruptive actions (`live-viewing-apps.md`, `playing-video.md`). |
| Resting a thumb / swipe reveals the info area | Show **on-screen hints** (an **"info" affordance with a key label**, a **peeking panel**) and **reveal the info area on `ArrowDown` from the player**; **never depend on a hover or touch cue**. |
| Positional taps (up/down/left/right) | **No web signal.** Map **`ArrowUp/Down/Left/Right`** to the same actions **only if discoverable** (a visible d-pad legend or on-screen prompts). |
| Custom gestures only in gameplay | **Standard key set everywhere else**; a **game** can define its own keys (`game-controls.md`), documented in a **controls screen** with remapping. |
| Back opens the **parent** screen (not the previous one); game pause; hold = Home | Handle the **Back key** explicitly: **`Escape`**, **`Backspace`** (outside text fields), **`BrowserBack`**, and **platform key codes** (Tizen **10009**, webOS **461**, Android TV/Fire TV: `keyCode 4` / `XF86Back`; **CONV, verify**) → **route to the screen's parent in your hierarchy**, **not `history.back()`** unless the two coincide; at the **root**, let the platform exit (**don't trap the user**; **holding Back = system Home** is the OS's, not the page's). In a **game**: Back **opens the pause menu**, then **closes it** (`game-controls.md`: Menu/pause). |
| Play/Pause plays, pauses, resumes | **`MediaPlayPause`** (and `MediaPlay`, `MediaPause`, `MediaStop`, `MediaTrackNext/Previous`, `MediaFastForward`, `MediaRewind`) **`keydown`** handlers, plus the **Media Session API** (`navigator.mediaSession.setActionHandler("play" | "pause" | "seekbackward" | "seekforward", …)`, `metadata`, `playbackState`) so **hardware keys, OS overlays and voice** all control the same player; in a game Play/Pause is the **secondary button**. |
| Scrubbing mode (press before swipe) | **`ArrowLeft/Right` seek** with **repeat acceleration** and a **visible preview/time**; **`Enter` commits**; **`Esc`/Back cancels** and restores the position. |
| Guide / browse opens the EPG; page up/down pages it; page up/down changes channel during playback | **`Guide`** (UI Events key) or **`ChannelUp`/`ChannelDown`** and **`PageUp`/`PageDown`**: **open the EPG on `Guide`**, **`PageUp/Down` scroll the EPG one screen while it is open** and **change channel while content plays** (`live-viewing-apps.md`); **don't repurpose these keys otherwise**. **If the app has no EPG**, **don't call `preventDefault()`** so the platform's default guide still gets the key. |
| Tap the upper/lower area to browse the EPG | **Not available** on the web; keep **`ArrowUp/Down`** and **`PageUp/Down`** as the browsing keys. |
| tvOS-only | **10-foot UI**: **large type and targets**, **visible focus**, **no hover-dependent UI** (`focus-and-selection.md`, `designing-for-tvos.md`); remote **text entry** uses the platform on-screen keyboard (`virtual-keyboards.md`); **voice (Siri) is native**. |
| Native-only | **`GCMicroGamepad`/`GCController` Siri Remote support, `UIPress`/`pressesBegan`, `UITapGestureRecognizer` with `allowedPressTypes`, `TVServices` channel navigation** are native tvOS; the web has **`keydown`, Media Session, spatial navigation** and **HbbTV/`tizen`/`webOS` platform APIs** for extra keys. |

Field-note cross-links:
- `field-notes/*`: **no TV or remote recipe**; nothing conflicts.
- `hig/inputs/focus-and-selection.md` (✓): **Apple's own focus link**; tvOS focus states, "full-screen gestures act on content", "no pointer"; **consistent**. `hig/patterns/live-viewing-apps.md` (✓): **EPG experience** (the page's *Compatible remotes* section points there); `hig/patterns/playing-video.md` (✓): **Play/Pause and gestures on Apple TV**, ignoring accidental input during live video; `hig/inputs/game-controls.md` (✓): **Menu/Back pauses, A activates, B cancels** for controllers, the remote's Back plays the same role; `hig/inputs/gestures.md` (✓): **standard gestures on tvOS** (the tvOS section points here); `hig/getting-started/designing-for-tvos.md` (✓): **Siri Remote gestures** and the web mapping (arrows, Enter, Back); `hig/inputs/gyro-and-accelerometer.md` (✓): **Siri Remote gyroscope** data for tvOS apps; `hig/inputs/pointing-devices.md` (✓): **no pointer on tvOS**; `hig/components/selection-and-input/virtual-keyboards.md` (✓): **linear keyboard with the Siri Remote**; `hig/patterns/offering-help.md` (✓): **don't show game-controller imagery for the Siri Remote**; `hig/components/layout/lockups.md` (✓), `top-shelf.md` (✓), `collections.md` (✓): **focus-driven tvOS layouts**.
- Not yet ingested (linked from this page): none.

## Checklist
- [ ] **Arrow keys move focus in the direction pressed**; nothing reverses or skips; scrolling follows focus.
- [ ] **`Enter` activates** the focused control; no action fires on movement alone.
- [ ] **Back goes to the parent screen** in the app hierarchy (not blindly `history.back()`), **never traps** at the root, and in a **game** opens the **pause menu** first and closes it on the next press.
- [ ] **`MediaPlayPause`** and the Media Session actions **play, pause and resume** the current media; hardware and OS controls agree.
- [ ] **Live playback ignores stray input** (debounce or a confirmation surface); seek/scrub shows a **preview** and **Back cancels**.
- [ ] If there is an **EPG**: **`Guide`/browse opens it**, **`PageUp/Down` page it** and **change channel during playback**, and **no other meaning** is given to these keys; without an EPG the keys are **left alone**.
- [ ] **Custom key gestures exist only in gameplay** and are shown in a **controls screen** with rebinding.
- [ ] **Hints on screen** show what a key or gesture will do; nothing depends on hover or touch.
- [ ] **Text sizes and targets suit a 10-foot UI** with **visible focus** on every focusable element.

## Related
- Ingested: Focus and selection (✓), Live-viewing apps (✓), Playing video (✓), Game controls (✓), Gestures (✓), Designing for tvOS (✓), Gyroscope and accelerometer (✓), Pointing devices (✓), Virtual keyboards (✓), Offering help (✓), Lockups (✓), Top Shelf (✓), Collections (✓).
- Not yet ingested (linked from this page): none.
- Developer docs: "Providing Channel Navigation" (TVServices). External: Apple Support article "Use your Siri Remote or Apple TV Remote with Apple TV".
- Videos: none listed.
