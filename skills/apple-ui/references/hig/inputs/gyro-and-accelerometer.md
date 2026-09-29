# Gyroscope and accelerometer
Source: https://developer.apple.com/design/human-interface-guidelines/gyro-and-accelerometer · Section: Inputs · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (the page data lists all six and the platform section says "No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS"; the platform strip shows six device icons, and the screenshots do not show whether any is dimmed **(from screenshot)**; the **intro** names only **iOS, iPadOS, watchOS** and **tvOS (Siri Remote gyroscope only)**, see Mismatches) · Ingested: 2026-09-29 · Apple last updated: **not shown** (the page has **no Change log**: none in the fetch, none in the table of contents **(from screenshot)**). One DocC fetch, read in full. **3 screenshots (hero → Videos card and the page footer)** were compared with the fetched text and image alt text line by line; they cover the **whole page**. The browser was in **dark appearance**; the content is identical. **Read from the fetch only (not in screenshots):** the hero alt text and the Core Motion / device-motion / video link targets (the screenshots show the link labels). Text that exists only inside pictures or page chrome is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **no numbers or measurements** (a short page: **3 rules, 1 callout, 1 developer link, 1 video**).

## In one line
Use the device's **motion sensors only to give people a real benefit** (a fitness app's activity and health feedback, a game's more engaging play) and **never collect motion data just to have it**. You **must supply the reason text** that the system shows in the **permission request** the first time you ask. **Outside active gameplay, don't use tilting or shaking for direct manipulation of the interface**: such gestures are hard to repeat precisely, physically hard for some people, and drain battery. On the web: **`devicemotion` / `deviceorientation` (iOS needs `requestPermission()` from a user gesture), explain the reason next to the trigger, always give a non-motion control, listen only while needed, respect WCAG 2.5.4**.

## Rules

### Framing (intro)
- **Accelerometer and gyroscope data** let you build experiences from **real-time, motion-based information** in **apps and games on iOS, iPadOS and watchOS**. **tvOS apps** can use **gyroscope data from the Siri Remote**. (Developer: **Core Motion**.)

### Best practices
- **should** **Use motion data only to offer a tangible benefit.** Examples: a **fitness app** gives feedback on **activity and general health**; a **game** uses the data to **enhance gameplay**. **Avoid gathering data simply to have it.**
- **must** **Provide copy that explains why you need motion data** (Important callout). The **first time** the app or game tries to read this data, the **system puts your copy in a permission request**, where people **grant or deny** access.
- **should** **Outside active gameplay, avoid accelerometer or gyroscope input for direct manipulation of the interface.** Reasons: some motion gestures are **hard to reproduce precisely**, **physically demanding for some people**, and **can affect battery life**.

### Platform considerations
- **None additional** for iOS, iPadOS, macOS, tvOS, visionOS or watchOS (the intro's platform scope still applies, see Mismatches).

## Specs & values
The page has **no numbers, sizes or timings**. Its concrete content:

| Item | Value |
|---|---|
| Data sources | on-device **accelerometer** and **gyroscope** (movement of the device in the physical world) |
| Where usable | apps and games on **iOS, iPadOS, watchOS**; **tvOS**: **Siri Remote gyroscope** data only |
| Good reasons (Apple's examples) | fitness feedback on activity and general health · better gameplay |
| Permission | **first access** triggers a system permission request that **shows your explanatory copy**; people **grant or deny** |
| Interface use | **only in active gameplay**; otherwise **not** for direct manipulation of the UI |
| Costs named | imprecise motion gestures · physical difficulty · **battery usage** |
| Developer docs | **Core Motion** (framework) · "Getting processed device-motion data" |
| Video (link only, not watched) | Measure health with motion (WWDC21 10287) |
| Apple's Related list | Feedback (✓) |
| Change log | none on the page |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a **purple-magenta gradient card** (tinted purple on purpose, per the alt) with a **pale-lilac gyroscope drawing**: a **circular ring**, **two elliptical loops crossing inside it to form an X-like shape**, and a **diagonal bar passing through the ring** from the lower left to the upper right, over **construction lines** (grid, diagonals, nested circles). Alt: "A sketch of a gyroscope, suggesting movement."
- **Important callout (screenshot 2):** a box with an **amber border and a dark amber fill**, an **amber "Important" title** and light body text (the fetch marks it `> [Important]`). This is the **only callout** on the page.
- **Platform section (screenshot 2):** the single sentence is set **in italics**.
- **Video card (screenshot 3):** a **dark thumbnail** with a small **line chart**: a **dotted curve** that dips and then rises, with an **orange walking figure at its right end**, a **y-axis labelled "OK / Low / Very Low"** and an **x-axis labelled "Age"** **(from screenshot: the tiny axis labels; the fetch gives only the title "Measure health with motion")**.
- **Page chrome (from screenshot):** TOC = Gyroscope and accelerometer · Best practices · Platform considerations · Resources (**no Change log**); side navigation: **Inputs** open with **Gyroscope and accelerometer** ringed (browser focus) after **Gestures**, then Keyboards, Nearby interactions, Pointing devices, Remotes; **Technologies** (AirPlay, Always On, App Clips…) below; the **page footer breadcrumb "Developer › Documentation"** appears at the bottom of screenshot 3.
- **Mismatches / notes:**
  1. The **intro limits use to iOS, iPadOS, watchOS and the tvOS Siri Remote**, but the **platform strip and page data list all six platforms** and the platform section says "no additional considerations" for **macOS and visionOS** too. The page never says what macOS or visionOS apps can do with these sensors.
  2. The page has **no Change log**, so **no "Apple last updated" date** exists in the source.
  3. The **video card has no alt text** in the fetch (a link with a title only); the **chart** on the thumbnail is visible only in the screenshot.
  4. The screenshots were taken in **dark appearance**; the hero is a single image (its light and dark variants come from the fetch only).
- **Catalog:** the script found **0 comparisons** (one hero image, no ✗/✓ pairs, no tabs). Catalog stays at **219**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries: the page has **no comparison images**. The script reports **0 comparisons** for this page.

## Web translation
The web exposes the same sensors through the **Device Motion / Device Orientation events** and the **Generic Sensor API**. The design message carries over unchanged: **a sensor needs a real purpose, an explained permission, a non-motion alternative, and a small battery footprint**. Numbers marked **CONV** are conventions, not Apple values. Statements about browser behaviour are background knowledge, not from the page; **verify on a device**.

| HIG rule | Web implementation |
|---|---|
| Tangible benefit only; don't collect to have the data | Add a sensor listener **only for a feature people can see** (tilt-steering in a game, a level or compass tool, a step/activity counter, a viewer that follows device rotation). **No sensor reads for analytics, fingerprinting or "just in case".** Prefer **summaries computed on the device** (a step count, a tilt angle) over sending raw streams to a server; say so in the data-use text (`privacy.md`, transparency row). |
| Must explain why; the system shows the copy in a permission request | **Browsers show no custom reason text**, so put **one short, active sentence next to the trigger** (`privacy.md` purpose-string rule), e.g. "Tilt your phone to steer the ball." Ask **only from a user gesture** (a **"Turn on tilt"** button), never on load. **iOS Safari (13+)** requires **`DeviceMotionEvent.requestPermission()`** / **`DeviceOrientationEvent.requestPermission()`** from that gesture on an **HTTPS** page; it resolves to **`"granted"` or `"denied"`**. Feature-detect with `typeof DeviceMotionEvent.requestPermission === "function"`; **Chromium/Android** need no prompt for these events but the page needs **HTTPS**, and **iframes need `allow="accelerometer; gyroscope"`** and the **`Permissions-Policy`** header must not block them. An optional pre-permission screen follows the **single "Continue" button** rule (`privacy.md`). |
| Handle grant / deny | Treat **denied, unsupported and "no data"** (desktop browsers often fire one event with `null` values) as **normal states**: check that `event.rotationRate` / `event.acceleration` / `event.beta` are **not null**, then **fall back to touch or keyboard controls** and say once, in plain words, how to re-enable the sensor (browser/OS settings; a denial can be **hard to undo**, **verify on a device**). |
| Outside active gameplay: no direct manipulation of the interface by motion | **Don't drive the UI by tilt or shake** (tilt-to-scroll, shake-to-undo or shake-to-refresh as the only route). **WCAG 2.5.4 Motion Actuation (Level A):** anything triggered by moving the device **also works through a normal control**, and **people can turn motion actuation off**. Give a **"Use motion controls" toggle**, default **off** unless motion is the point (game, level). Undo/redo stays on **⌘/Ctrl+Z and buttons** (`undo-and-redo.md`, `gestures.md`). |
| Motion is fine **in active gameplay** | Tilt steering, marble mazes and camera-look are the legitimate cases: still offer a **touch alternative** (`game-controls.md`), let people **re-calibrate the zero position** at start (so playing lying down works), apply a **dead zone** (**CONV**, ~2–3° or a small acceleration threshold) and a **low-pass filter** (**CONV**, smoothing factor ~0.1–0.2) against jitter, and **pause when the tab is hidden** (`visibilitychange`). |
| Hard to replicate precisely / physically demanding | Don't require **large, fast or repeated shakes or tilts**; make **thresholds adjustable**; show a **live indicator** of the current tilt/level so people can correct themselves (`feedback.md`); support **one-handed, seated and reclined** use. |
| Battery | Attach **`devicemotion` / `deviceorientation` listeners only while the feature is on screen**, **remove them** when the feature is toggled off, on route changes and on **`visibilitychange` → hidden**; **coalesce readings** into one **`requestAnimationFrame`** update instead of running work per event; **don't poll** sensors in the background. |
| Decorative tilt effects (parallax on tilt) | Treat them as **motion effects**: **optional, never carrying essential information**, off under **`prefers-reduced-motion`** (`accessibility.md`, `motion.md`); a **pointer-based parallax or none** on devices without sensors. |
| tvOS: Siri Remote gyroscope | **No web equivalent** (the Gamepad API doesn't expose motion sensors; some controllers' sensors are reachable only through WebHID in Chromium, **verify**). On TV web UIs use **D-pad/arrow focus** (`focus-and-selection.md`). |
| iOS, iPadOS, watchOS | iOS/iPadOS: the events above. **watchOS: no web access** to the watch's sensors. |
| macOS, visionOS (intro silent) | Desktop browsers usually **have no motion sensors**, so **never require motion**; **WebXR** supplies head/hand pose through its own session permission, not through these events (`gestures.md`). **Verify what Safari on visionOS exposes** before relying on any sensor. |
| Native-only | **Core Motion** (`CMMotionManager`, processed device-motion data) and the **motion usage description string** in the app's Info.plist (background: the page doesn't name the key) are native; the web has **Device Motion events**, **Generic Sensor API** (`Accelerometer`, `Gyroscope`, `AbsoluteOrientationSensor`, Chromium) and **WebXR**. |

Field-note cross-links:
- `field-notes/*`: **no motion-sensor recipe**; nothing conflicts. **No tension with Apple** on this page (its rules are about purpose, consent and restraint, which match the skill's permission conventions).
- `hig/foundations/privacy.md` (✓): the **purpose-string** rule (one short active sentence, sentence case, ends with a period; on the web it sits next to the trigger), **request only from a user action**, the **single "Continue" pre-permission button**, and **transparency**; this page is the **motion-data case** of the same rules. `hig/inputs/gestures.md` (✓): **more than one way to interact**, **motion-based gestures aren't standard**, WCAG 2.5.1 / 2.5.7 sibling of 2.5.4; `hig/inputs/game-controls.md` (✓): **gameplay is the exception** where motion may drive the interface; `hig/foundations/accessibility.md` (✓) and `motion.md` (✓): **reduced motion**, alternatives to motion; `hig/patterns/feedback.md` (✓): **Apple's Related page**, feedback on activity and results; `hig/patterns/playing-haptics.md` (✓): **haptics must not disturb gyroscope experiences** (its side-effects rule); `hig/getting-started/designing-for-ios.md` (✓) and `designing-for-watchos.md` (✓): **motion input** and **device data** as expectations of those platforms.
- Not yet ingested (linked from this page): none.

## Checklist
- [ ] Every sensor listener serves a **visible feature**; **no reads for analytics or fingerprinting**; raw streams **stay on the device** where possible.
- [ ] The **reason is one short active sentence next to the trigger**; the permission is requested **only from a user gesture** (`requestPermission()` on iOS Safari, HTTPS, iframe `allow`).
- [ ] **Denied, unsupported and null-data** states work and **fall back to touch/keyboard**.
- [ ] **Outside active gameplay** nothing in the UI is **driven by tilt or shake**; any motion-triggered function has a **normal control** and a **switch to turn motion off** (WCAG 2.5.4).
- [ ] In gameplay: **touch alternative**, **calibration**, **dead zone and smoothing**, **pause on hidden**.
- [ ] Listeners are **added only while needed**, **removed on hide/route change/toggle off**, and updates are **coalesced per frame**.
- [ ] Tilt parallax and other **motion effects** are decorative, **optional**, and **off under `prefers-reduced-motion`**.
- [ ] Thresholds are **not hard to hit**: no large or repeated shakes; a **live tilt indicator** where precision matters.
- [ ] No feature depends on sensors on **desktop, TV or headset browsers**.

## Related
- Ingested: Feedback (✓), Privacy (✓), Gestures (✓), Game controls (✓), Accessibility (✓), Motion (✓), Playing haptics (✓), Designing for iOS (✓), Designing for watchOS (✓).
- Not yet ingested (linked from this page): none.
- Developer docs: Core Motion · "Getting processed device-motion data" (Core Motion).
- Videos: Measure health with motion (WWDC21 10287).
