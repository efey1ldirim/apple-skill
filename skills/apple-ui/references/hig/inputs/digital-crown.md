# Digital Crown
Source: https://developer.apple.com/design/human-interface-guidelines/digital-crown · Section: Inputs · Supported platforms: **visionOS and watchOS** ("Not supported in iOS, iPadOS, macOS, or tvOS"; the Vision Pro and Watch icons are lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **December 5, 2023** (added artwork for Apple Vision Pro and Apple Watch and clarified that **visionOS apps don't receive direct information from the Digital Crown**; earlier rows: June 21, 2023 visionOS guidance · June 5, 2023 guidelines on the crown's central role in navigation). One DocC fetch, read in full. **5 screenshots (hero → the start of Apple's site footer)** were compared with the fetched text, image alt text, captions and the change log line by line; they cover the **whole page** (the Change log table is visible in the last one). The browser was in **dark appearance**; the content is identical. Everything visible matches the fetch except the notes under **Mismatches**. **Read from the fetch only (not in screenshots):** the alt text of the images and the dark variant of the hero. The page has **no videos**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **no measurements** (only "watchOS 10" as a threshold).

## In one line
The **Digital Crown** is **a hardware dial on Apple Vision Pro and Apple Watch**. **On Vision Pro** it is **system-only** (volume, immersion level, recentre, Accessibility settings, exit to Home View) and apps get **no direct input from it**. **On Apple Watch** it also drives **apps**: **from watchOS 10 it is the primary navigation input** (Smart Stack, Home Screen app list, vertically paginated tabs, lists, variable-height pages). Rules: **anchor navigation to the crown but back it up with touch**, **use it to inspect data where navigation isn't needed** (World Clock time scrubbing), **always give visual feedback**, **match update speed to how fast it turns**, **keep the default haptic detents unless they clash** (then turn them off or use linear detents for tables), and **remember that presses belong to the system**. Hardware input; on the web the nearest ideas are **wheel/scroll input, scroll-snap paging, scrubbers with detents and haptics, and keyboard/touch alternatives**.

## Rules

### Framing (intro)
- On **both Apple Vision Pro and Apple Watch** people use the Digital Crown **to interact with the system**; on **Apple Watch** they **also use it to interact with apps**. (Photos: a finger on the crown of Vision Pro; a close-up of Apple Watch with the crown prominent.)

### Apple Vision Pro
- People use the crown to: **adjust volume**; **adjust the amount of immersion** in **a portal, an Environment, or an app or game in a Full Space** (see Immersive experiences); **recentre content** so it is in front of them; **open Accessibility settings**; **exit an app and return to the Home View**.
- **Apps don't receive direct information from the crown on visionOS** (Dec 5, 2023 clarification): these are system behaviours.

### Apple Watch
- **Turning** the crown **generates information you can use to enhance or ease app interactions**: scrolling, **standard or custom controls**.
- **watchOS 10 and later: the crown is the primary navigation input.** On the **watch face** turning it **shows widgets in the Smart Stack**; on the **Home Screen** it moves **vertically through the app collection**; **inside apps** it **switches between vertically paginated tabs** and **scrolls list views and variable-height pages**.
- Beyond navigation, turning gives data you can use for **inspecting data or operating standard or custom controls**.
- **Note (callout):** **apps don't respond to crown presses**: **watchOS reserves presses** for system functions such as **revealing the Home Screen**.
- **Haptics:** most Apple Watch models give **haptic feedback** for the crown for a more tactile scroll. **By default** the system gives **linear haptic detents (taps)** for a **specific turned distance**; **some system controls (table views)** give **detents as new items scroll onto the screen**.
- **should** **Anchor the app's navigation to the Digital Crown.** From watchOS 10 turning it is **the main way to move within and between apps**; **list, tab and scroll views are vertical**, so the crown moves easily between the important elements. **Also back crown interactions with corresponding touch interactions.**
- **may** **Use the crown to inspect data where navigation isn't needed**: where it needn't move through lists or pages it is a great inspection tool. Example: in **World Clock**, turning it **advances the time of day at the selected location**, so people **compare times with the current time**.
- **must** **Provide visual feedback for crown interactions**: e.g. **pickers change the displayed value** as it turns; **if you track turns directly, update the UI programmatically**; **without feedback people assume the crown does nothing in your app**.
- **should** **Update the interface to match how fast the crown turns**: people expect **precise control**, so use **the turning speed to set the speed of change**; **don't update at a rate that makes selecting values hard**.
- **should** **Use the default haptic feedback when it fits.** If the default detents **don't match the app's animation**, **turn detents off**; for tables you can **switch from row-based to linear detents** (useful when **rows have very different heights**, giving a more consistent feel).

### Platform considerations
- **visionOS and watchOS** only. Not supported in iOS, iPadOS, macOS, tvOS.

## Specs & values
| Item | Value |
|---|---|
| Vision Pro uses | volume · immersion (portal, Environment, Full Space app/game) · recentre · Accessibility settings · exit to Home View |
| Vision Pro app access | **none** (apps don't receive crown input) |
| Watch: navigation (watchOS 10+) | watch face → Smart Stack widgets; Home Screen → vertical app list; in apps → vertical tabs, lists, variable-height pages |
| Presses | **reserved by the system** (e.g. reveal Home Screen); apps can't respond |
| Haptics | default **linear detents** per turned distance; tables: **row-based** detents by default; optional linear or off |
| Feedback rule | visual response to every turn (pickers, programmatic updates) |
| Speed rule | change rate follows the turning speed; keep values selectable |
| Fallback rule | back crown interactions with touch |
| Developer API named | `WKCrownDelegate` (WatchKit) |
| Apple's Related list | Feedback (✓), Action button (✓), Immersive experiences (✓) |
| Change log | Dec 5 2023 · Jun 21 2023 · Jun 5 2023 |
| Videos | none |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a **purple gradient card** (tinted purple on purpose) with a **pale-lilac crown drawn side-on**: **a rounded cylinder with ridged edge** and **a curved arrow beside it pointing up** (turning), over **construction lines** (rectangular grid, diagonals, nested circles) **(from screenshot)**. Alt: "A sketch of a curved arrow beside a Digital Crown, that suggests turning the Digital Crown."
- **Photos (screenshot 2):** left **"The Digital Crown on Apple Vision Pro"**: a close-up of the **headset's light fabric band** with a **fingertip on the crown button** (skin-tone hand on a beige background); right **"The Digital Crown on Apple Watch"**: a **dark watch case at an angle** on a lavender band, **10:09**, a **"Sleep / Sleep Stages"** blue-bar chart on the screen and the **crown ringed in red** **(from screenshot: the watch-face text and the red ring are not in the alt)**.
- **Callout (screenshot 3):** the **Note** about presses as a dark rounded box with a light border.
- **Page chrome (from screenshot):** TOC = Digital Crown · Apple Vision Pro · Apple Watch · Platform considerations · Resources · Change log; platform strip: **Vision Pro and Watch lit**; side navigation: **Inputs** open with **Digital Crown** bold (the blue ring is on Camera Control: the browser's keyboard focus, not page design), **Technologies** below.
- **Resources (screenshots 4–5):** Related **Feedback, Action button, Immersive experiences**; developer link **WKCrownDelegate — WatchKit**; the **Change log table** with three rows; then Apple's site footer. No videos.
- **Mismatches / notes:**
  1. The watch photo's screen text ("Sleep · Sleep Stages") is **only in the picture**; the alt only says the crown is prominent.
  2. The intro says **on Apple Watch people also use the crown to interact with apps**, while **Vision Pro apps get no crown data**; the Dec 2023 change-log row confirms it.
  3. The screenshots were taken in **dark appearance**.
- **Catalog:** the two photos are filed as **one neutral pair** (`digital-crown-01`, light variants only); the hero is not a row. Catalog total **215** (was 214); existing IDs unchanged.

## Visual examples (catalog)
`visual-examples` gains **digital-crown-01**: neutral pair **Digital Crown on Apple Vision Pro / on Apple Watch** (photographs; no rule text in the auto catalog).

## Web translation
The Digital Crown is **hardware** with no web API. What transfers: **rotary-style input mapped to a vertical scroll or a value**, **detents with tactile feedback**, **speed-aware scrubbing**, **feedback for every step**, **touch and keyboard backups**, and **leaving "press" semantics to the system**. Web stand-ins: **mouse-wheel and trackpad scroll**, **`scroll-snap`**, **`<input type="range">` with detents**, **arrow keys**, **Media Session seek**, and, on **Wear OS/wearables**, **rotary events surfaced as `wheel`**.

| HIG rule | Web implementation |
|---|---|
| Crown = primary navigation on watch (vertical tabs, lists, pages) | On **small, glanceable screens** make **vertical scroll and paging the main navigation**: **vertical `scroll-snap-type: y mandatory`** pages, tabs that page vertically; map **wheel** to it; avoid horizontal-only carousels for primary navigation (`tab-views.md`, `scroll-views.md`). |
| Back crown interactions with touch | **Every wheel/rotary action has a touch and keyboard equivalent** (swipe, ↑/↓, PageUp/PageDown, on-screen buttons); never wheel-only (Accessibility). |
| Inspect data where navigation isn't needed (World Clock) | On a **detail chart or clock**, let **wheel/arrow keys scrub a time or value** (a **scrubber** with `role="slider"`, `aria-valuetext` "10:09 in Tokyo") instead of scrolling the page; capture the wheel **only while the control is focused or hovered** (`overscroll-behavior: contain`, `preventDefault` on `wheel` **only inside** the widget, passive elsewhere). |
| Visual feedback for every turn | The UI **updates immediately** per wheel step (highlight, value, position); if the wheel is captured and **nothing changes**, people assume it's broken; show **a visible current value** and **focus**. |
| Match update speed to turning speed | **Scale the step by `deltaY` magnitude and velocity** (slow = fine steps, fast = coarse), **clamp** the rate so values stay selectable, **debounce/animate** at ≤ 60 fps; provide **fine/coarse modifiers** (`Shift`/`Alt`). |
| Haptic detents; turn off when they clash; linear vs row-based | Give **tick feedback per step** (visual tick; **`navigator.vibrate(5–10)`** where supported, **not on iOS**; audio ticks off by default); **offer a setting to disable haptics**; for lists with **very different row heights** use **fixed-distance (linear) steps** rather than one-per-row. |
| Presses are reserved by the system | **Don't hijack system keys/gestures** (browser Back/Home, Esc for OS exit, pull-to-refresh) for app actions; keep **press = activate the focused item** only, as native controls do. |
| Vision Pro: crown = volume, immersion, recentre, accessibility, exit | For immersive/WebXR or fullscreen media, expose **volume and "immersion/dimming" level as sliders** the system-independent UI can drive, a **"recenter view" control** (`xrSession` reference-space reset) and a **clear exit** (`Esc`); **don't expect to read the system control** (visionOS gives apps no crown data). |
| Watchface Smart Stack by turning | For **glanceable dashboards** allow **vertical paging through tiles** by wheel/scroll with **snap** and a **position indicator** (`page-controls.md`). |
| Feedback pattern link | Use the **Feedback** rules (`feedback.md`): status and confirmation for every input; Action button parity (`action-button.md`) for quick launch. |
| Native-only | For native watchOS apps use **`WKCrownDelegate`/SwiftUI `digitalCrownRotation`**; the web can't read the crown. |

Field-note cross-links:
- `hig/patterns/feedback.md` (✓ CRITICAL): Apple's Related page, **visual feedback for every input** (this page's rule) and **Feedback gate**; `hig/patterns/playing-haptics.md` (✓): detent design, haptics on/off; `hig/inputs/action-button.md` (✓): the sibling Watch hardware input (Watch Ultra: crown navigates, Action button triggers); `hig/foundations/immersive-experiences.md` (✓): the **immersion level** the crown adjusts on Vision Pro; `hig/components/layout/tab-views.md` (✓), `hig/components/presentation/scroll-views.md` (✓), `hig/components/presentation/page-controls.md` (✓), `hig/components/selection-and-input/pickers.md` (✓) and `sliders.md` (✓): vertical tabs/lists, pickers and value controls driven by rotary input; `hig/getting-started/designing-for-watchos.md` (✓) and `designing-for-visionos.md` (✓); `hig/foundations/accessibility.md` (✓): input alternatives.
- `field-notes/*`: no rotary-input recipe; **no conflict**.
- Not yet ingested (linked from this page): none.

## Checklist
- [ ] Small-screen navigation is **vertical** (paging, lists) and works with **wheel/scroll snap**; **touch and keyboard do the same things**.
- [ ] Data-inspection controls accept **wheel/arrow scrubbing only while focused**, with `aria-valuetext`; the page still scrolls elsewhere.
- [ ] **Every step updates the UI immediately**; the **current value is visible**.
- [ ] Step size **follows input speed** and stays **selectable**; fine/coarse modifiers exist.
- [ ] **Tick feedback per step**, **user-disableable**; row-based vs **fixed-distance** steps chosen for uneven lists.
- [ ] **System keys and gestures are not hijacked**; press = activate the focused item.
- [ ] Immersive/fullscreen media has **volume, dimming/immersion, recenter and an obvious exit**.

## Related
- Ingested: Feedback (✓ CRITICAL), Immersive experiences (✓), Action button (✓), Playing haptics (✓), Tab views (✓), Scroll views (✓), Page controls (✓), Pickers (✓), Sliders (✓), Designing for watchOS (✓), Designing for visionOS (✓), Accessibility (✓).
- Not yet ingested (linked from this page): none.
- Developer docs: `WKCrownDelegate` (WatchKit).
