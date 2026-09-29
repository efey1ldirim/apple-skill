# Nearby interactions
Source: https://developer.apple.com/design/human-interface-guidelines/nearby-interactions · Section: Inputs · Supported platforms: **iOS, iPadOS, watchOS** (page data; the platform section says "No additional considerations for iPadOS. **Not supported in macOS, tvOS, or visionOS**"; the feature needs a device with **Ultra Wideband**, and the page does not say which iPads have it) · Ingested: 2026-09-29 · Apple last updated: **June 21, 2023** (the only Change log row: the page title changed from **"Spatial interactions"**; the same date is in the page's data alert). **Link-only ingestion: one DocC fetch, read in full (48 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)" and the Visual notes come from the alt text only. Not marked critical: no token file, checker or gate. The page has **no numbers or measurements**; it names one hardware comparison (a field of view **similar to the Ultra Wide camera in iPhone 11 and later**).

## In one line
A **nearby interaction** uses **Ultra Wideband** to tell an app **how far away and in which direction another device is**, so a task can feel rooted in the physical world (bring an iPhone to a HomePod mini to move the music). **Take inspiration from the physical version of the task, let distance, direction and context shape the interaction, let feedback change as the distance changes and never stop, mix visual, audible and haptic feedback to fit the moment, and never make it the only way to do the task.** Device rules: **encourage portrait (implicitly), design for the sensor's limited field of view, and warn people that bodies, pets and large objects in between reduce accuracy.** iPhone gets **distance and direction**; Apple Watch gets **distance only** and the watch app **must be in the foreground**. On the web there is **no Ultra Wideband access**; the principles still apply to any proximity feature (Web Bluetooth, Web NFC, WebXR, geolocation) and to **fallbacks (QR code, code, link)**.

## Rules

### Framing (intro)
- A great nearby interaction feels **intuitive and natural because it builds on people's awareness of the world around them**. Example: someone playing music on iPhone **continues on HomePod mini by bringing the devices together**, which **transfers the audio output**.
- **Availability:** only on devices with **Ultra Wideband** (Apple's availability list is linked), through the **Nearby Interaction** framework.
- **Permission:** before taking part, people **grant permission for their device to interact while they use your app**.
- **Privacy:** the APIs use **randomly generated device identifiers that last only as long as the interaction session your app starts**.

### Best practices
- **should** **Find inspiration by looking at the task from the physical world.** Moving a song can be done with UI, but **starting the transfer by bringing the devices close together roots the task in the physical world**. Look for **the physical action behind the task's concept** to make it feel easy and natural.
- **should** **Use distance, direction and context to inform an interaction.** **Prioritise nearby, contextually relevant information** to make experiences feel organic. Example: sharing in a **crowded room**, the **iOS share sheet** suggests a likely recipient from **on-device knowledge of frequent and recent contacts**, and combining it with **nearby devices that have the U1 chip** lets it **suggest the closest contact the person is facing**.
- **should** **Let changes in physical distance guide the interaction.** People expect **perception to sharpen as they get closer**; mirror it with **feedback that changes with proximity**. Example: finding an **AirTag** with iPhone, the display goes from a **directional arrow to a pulsing circle** as the person gets close.
- **should** **Provide continuous feedback.** It **reflects the dynamism of the physical world** and ties the interaction to the task. Example: **Find My** gives **continuous updates on an item's direction and proximity**. Keep people engaged with **uninterrupted feedback that responds to their movements**.
- **should** **Consider several feedback types together.** **Move fluidly between visual, audible and haptic feedback** so the task feels more engaging and real, and **vary the mix with context**: **visual while people look at the screen**; **audible and haptic while they interact with their surroundings**.
- **should not** **Make a nearby interaction the only way to do a task.** **Not everyone can experience it**, so **provide alternative ways to get things done**.

### Device usage
- **should** **Encourage people to hold the device in portrait.** **Landscape can reduce the accuracy and availability of distance and relative direction.** If you support **only portrait** while the feature runs, **prefer implicit, visual cues** about how to hold the device, and **when possible avoid explicitly telling people to hold it in portrait**.
- **should** **Design for the device's directional field of view.** The **hardware sensor has a specific field of view, similar to the Ultra Wide camera in iPhone 11 and later**. If a participating device is **outside it**, the app **may get distance but not relative direction**.
- **should** **Help people understand how intervening objects affect the experience.** **People, animals or large objects between two participating devices can lower the accuracy or availability of distance and direction.** Consider **advice in onboarding or tutorial content** to avoid it.

### Platform considerations
- **iPadOS:** no additional considerations. **macOS, tvOS, visionOS:** not supported.
- **iOS:** the Nearby Interaction APIs give a peer device's **distance and direction**.
- **watchOS:** the APIs give a peer's **distance only**, and **every watchOS app taking part must be in the foreground**.

## Specs & values
The page has **no numbers, sizes or timings**. Its concrete content:

| Item | Value |
|---|---|
| Technology | **Ultra Wideband** (U1 chip and later), Nearby Interaction framework |
| Data | iOS/iPadOS: **distance + direction**; watchOS: **distance only** |
| Field of view | like the **Ultra Wide camera of iPhone 11 and later**; outside it: distance possible, **direction may be missing** |
| Orientation | **portrait** gives the best distance/direction; landscape lowers accuracy and availability |
| Obstructions | people, animals, large objects reduce accuracy or availability |
| Feedback pattern | direction arrow → **pulsing circle** when near (AirTag); continuous updates (Find My); visual ↔ audible ↔ haptic by context |
| Permission and privacy | permission granted per app use; **random identifiers valid only for the session the app starts** |
| watchOS constraint | **foreground only** |
| Not supported | macOS, tvOS, visionOS |
| Developer docs | **Nearby Interaction** framework |
| Videos (links only, not watched) | Design for spatial interaction (WWDC21 10245) · Meet Nearby Interaction (WWDC20 10668) |
| Apple's Related list | Feedback (✓) |
| Change log | Jun 21 2023: page title changed from "Spatial interactions" |

## Visual notes (link-only: from alt text, no screenshots)
- **Hero:** a sketch of **curved lines beside a circular area holding a smaller circle**, suggesting **audio arriving at a person in a room from a particular direction**; overlaid grid lines, **tinted purple** (alt). Light and dark variants exist.
- **No other images** on the page (no tables, callouts, videos or comparison images).
- **Mismatches / notes:**
  1. **iPadOS is listed as supported** ("no additional considerations") but the intro limits the feature to **Ultra Wideband devices** and never says which iPads have it.
  2. **The intro promises "distance and direction"** for the framework, but **watchOS gets distance only**; the direction advice (arrow, field of view) applies **only to iPhone**.
  3. **The portrait advice is worded softly**: the page prefers **implicit visual cues** and says to **avoid explicitly telling people to hold the device in portrait when possible**, so explicit wording is only a fallback.
  4. **The page was renamed** (from "Spatial interactions", Jun 2023): `designing-for-ios.md` still records a link to a **"spatial interactions" page missing from the navigator**; that is this page under its old title (see Web translation notes below).
- **Catalog:** the script found **0 comparisons** (one hero image). Catalog stays **219**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
**Ultra Wideband ranging is not available to web pages** (no browser API exposes distance or direction to a nearby device). What transfers is the **design language of proximity**, and the nearest web building blocks. Statements about browser support are background knowledge, not from the page; **verify on the target browsers and devices**.

| HIG rule | Web implementation |
|---|---|
| Physical-world inspiration ("bring devices together") | **Web NFC** (`NDEFReader`, Chrome on Android) for tap-to-share/pair; **QR code + camera** for "point at the other device"; **Web Share / Web Share Target** (`navigator.share`) for handing content over. Design the **gesture and its words** around the physical action ("Tap the tag with the back of your phone"). No UWB. |
| Distance, direction and context inform the interaction | Use **what the platform gives**: **Web Bluetooth** advertising **RSSI** (`watchAdvertisements()`, Chromium; coarse and noisy: **treat as "near / nearer / far" bands, never metres**), **Geolocation** (outdoor, coarse), **WebXR** device pose for **direction to an anchored object** (headsets and AR-capable phones). Prefer **relevance over raw sources**: sort suggestions by recency/frequency **on the device**, then by proximity if available (`privacy.md`). |
| Feedback follows distance (arrow → pulsing circle) | **State-based UI**: **far** = direction cue (rotating arrow from **`deviceorientation`**, `gyro-and-accelerometer.md`), **near** = **pulsing ring** (CSS animation, **`prefers-reduced-motion` → steady ring plus text**), **arrived** = confirmation state. **Interpolate between states** (opacity, scale) instead of jumping; add a **text/`aria-live="polite"` status** ("Getting closer", "Very close") so the feedback isn't visual-only. |
| Continuous feedback that responds to movement | **Update every frame or reading** (`requestAnimationFrame`, throttle to the sensor rate), **no blank or spinner gaps** when a reading drops: **hold the last state with a "searching" hint**. Debounce **announcements** for screen readers (**CONV**: at most every ~2 s). |
| Several feedback types by context | **Visual** while the screen is in use, **Web Audio** tones or spoken cues (`speechSynthesis`) and **`navigator.vibrate`** (Android only; **never rely on it**) when eyes are elsewhere (`playing-haptics.md`); **start audio only after a user gesture**; give **volume/mute and "vibration off"** switches. |
| Never the only way | Always offer **a manual route**: a **pairing code**, a **share link**, a **list of nearby/recent contacts**, or a **normal button flow**. **Feature-detect** (`"NDEFReader" in window`, `navigator.bluetooth`) and say plainly when the device can't do it (`accessibility.md`, `gestures.md`). |
| Portrait for best accuracy (implicit cues) | Web can't ask the OS for better ranging, but for **orientation-sensitive features** show an **on-screen device silhouette or a layout that reads best in portrait** rather than a "please rotate" banner; **don't lock orientation** (`screen.orientation.lock` works only in fullscreen and Android) and keep the UI usable in landscape. |
| Field of view (direction missing outside it) | When a sensor gives **distance but not bearing**, **switch the UI to a distance-only cue** (**ring pulse rate** or **bar**) and **say so** ("Move the phone around to find the direction") instead of showing a wrong arrow. |
| Intervening objects reduce accuracy | Put a **one-line tip** in onboarding or the empty/searching state (**"Keep the space between the two devices clear"**), not a modal (`onboarding.md`). |
| Permission before taking part | Every proximity API is **permission- and gesture-gated** (Bluetooth chooser, NFC scan, camera, location, motion): **explain the reason next to the trigger**, **ask only from a user action**, and **handle denial** (`privacy.md`). |
| Random identifiers, session-length only | **Don't use a stable device identifier for proximity**: **generate a random per-session ID** (`crypto.randomUUID()`), **discard it when the session ends**, **don't persist or log it**, and **don't reveal a person's identity to nearby strangers** before consent. |
| watchOS: foreground only, distance only | **Keep the page visible while ranging**: stop on **`visibilitychange` → hidden**, and use the **Screen Wake Lock API** (`navigator.wakeLock.request("screen")`) so the screen doesn't sleep mid-search; release it when done. |
| Unsupported on macOS, tvOS, visionOS | On the web **hide the feature (or show the fallback)** when the needed APIs are missing; **never show a dead button**. |
| Native-only | The **Nearby Interaction framework** (`NISession`, distance and direction, U1/UWB, peer tokens) is native iOS/iPadOS/watchOS; the web has **no UWB**. |

Field-note cross-links:
- `field-notes/*`: **no proximity or sensor recipe**; nothing conflicts. **No tension with Apple** on this page (its rules are about physical metaphor, continuous feedback and fallbacks, which match existing feedback and privacy conventions).
- `hig/patterns/feedback.md` (✓): **Apple's Related page**; continuous and multi-channel feedback; `hig/patterns/playing-haptics.md` (✓): the haptic channel (`navigator.vibrate` Android-only); `hig/foundations/privacy.md` (✓): **permission timing, purpose text and identifier hygiene** (the random session identifiers here); `hig/inputs/gyro-and-accelerometer.md` (✓): **motion/orientation permission and battery** for direction cues; `hig/inputs/gestures.md` (✓): physical actions as input and "more than one way"; `hig/patterns/onboarding.md` (✓): where to place the tip about obstructions; `hig/patterns/playing-audio.md` (✓): the HomePod hand-off example concerns **audio output routing**; `hig/foundations/accessibility.md` (✓): **non-visual and alternative routes**; `hig/getting-started/designing-for-ios.md` (✓) and `designing-for-watchos.md` (✓): platform pages.
- **Renamed page:** `designing-for-ios.md` notes a link to a "spatial interactions" page that is not in the navigator. **This page was called "Spatial interactions" until June 21, 2023**, so that link points here (the old URL slug is inferred; the rename itself is in this page's Change log).
- Not yet ingested (linked from this page): none.

## Checklist
- [ ] The interaction is **based on a physical action** (bring together, point at) with **words that describe that action**.
- [ ] **Distance, direction and context** shape what is shown; on the web, **coarse proximity is shown as bands**, not false precision.
- [ ] Feedback **changes with proximity** (far cue → near cue → arrived) and is **continuous**: no blank gaps, the last state is held with a "searching" hint.
- [ ] **Visual, audio and haptic** cues are **mixed by context**, each **switchable**, and **nothing is conveyed by one channel only** (text/`aria-live` mirrors the visual state).
- [ ] The feature is **never the only route**: **code, link, QR or a plain list** exists, and **unsupported browsers see the fallback**.
- [ ] **Orientation hints are implicit** (layout, silhouette), orientation is **not locked**, and **landscape still works**.
- [ ] When **direction is unavailable**, the UI **falls back to distance-only** and says so.
- [ ] Onboarding or the searching state has a **short tip about obstructions**.
- [ ] Permissions are **explained beside the trigger** and **requested from a user action**; denial is handled.
- [ ] Proximity IDs are **random, per-session and never stored**.
- [ ] Ranging **stops when the page is hidden**; a **wake lock** is held only during the search.

## Related
- Ingested: Feedback (✓), Playing haptics (✓), Privacy (✓), Gyroscope and accelerometer (✓), Gestures (✓), Onboarding (✓), Playing audio (✓), Accessibility (✓), Designing for iOS (✓), Designing for watchOS (✓).
- Not yet ingested (linked from this page): none.
- Developer docs: Nearby Interaction framework. External: Apple's "Ultra Wideband availability" support article.
- Videos: Design for spatial interaction (WWDC21 10245), Meet Nearby Interaction (WWDC20 10668).
