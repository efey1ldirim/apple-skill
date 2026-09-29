# Playing haptics
Source: https://developer.apple.com/design/human-interface-guidelines/playing-haptics · Section: Patterns · Supported platforms: iOS, macOS and watchOS have their own pattern sets; game controllers, Apple Pencil Pro and some trackpads also play haptics · Ingested: 2026-09-28 · Apple last updated: 2024-05-07 (Apple Pencil Pro guidance). Change log: 2023-06-21 visionOS guidance · 2024-05-07 Apple Pencil Pro. One DocC fetch, read in full. **No screenshots were supplied** for this page (the user asked for the fetch and the demo media only), so the fetched text and the 18 demo videos are the whole source; nothing is marked "(from screenshot)". The page has no ✗/✓ pairs (fetch script run; catalog IDs unchanged, total 103). **User decision: not critical, not mandatory.** It is a recommended reference for **mobile app** builders (see § Recommendation for mobile app builders).

## In one line
Haptics are a **tactile layer that confirms cause and effect**: use the system's patterns only for what they mean, keep them consistent and rare, pair them with matching visuals and sound, prefer short events, make them optional, and don't let vibration disturb the camera, gyroscope or microphone.

## Rules

### Framing (intro)
- Haptics engage the sense of touch and bring familiarity with the physical world into an app or game. The system can play them **in addition to** visual and audio feedback.
- **iPhone:** standard components (switches, sliders, pickers) play haptics **automatically** on supported models.
- **Apple Watch:** the **Taptic Engine** produces haptics for built-in feedback patterns; watchOS **combines them with an audible tone**.
- **Mac with a Force Touch trackpad:** an app can play haptics while people drag content or force click to change the speed of media controls.
- External devices: **game controllers** (iPadOS, macOS, tvOS, visionOS; Core Haptics), **Apple Pencil Pro** and some **trackpads** (with certain iPad models).

### Best practices
- **must** **Use system haptic patterns only for their documented meanings.** People learn them because the system plays them consistently on standard controls. If a pattern's documented use doesn't fit, don't repurpose it: use a generic pattern or build your own (§ Custom haptics).
- **must** **Use haptics consistently.** Keep a **clear causal link** between each haptic and the action that causes it. A haptic without cause and effect is confusing and seems gratuitous. Example: a game plays one pattern when a mission fails; reusing that pattern for a level completion confuses people.
- **should** **Complement other feedback.** When visual, audio and touch agree, the result is coherent and natural: **match the haptic's intensity and sharpness to the animation** it accompanies, and optionally **synchronise sound** with it (Core Haptics: *Delivering Rich App Experiences with Haptics*).
- **should** **Avoid overuse.** A haptic that feels right occasionally becomes tiresome when frequent; test with users to find a balance. Often the best haptic is one people **don't notice but miss when it's off**.
- **should** **Prefer short haptics for discrete events in most apps.** Long-running ones suit gameplay flow but in an app they **dilute the meaning** and distract; on **Apple Pencil Pro**, continuous or long haptics don't clarify writing or drawing and can make holding the pencil less pleasant.
- **must** **Make haptics optional.** People can turn them off or mute them, and the app must still be enjoyable without them.
- **should** **Consider side effects.** Haptics carry enough physical force to be felt; make sure vibration **doesn't disrupt camera, gyroscope or microphone** experiences.

### Custom haptics
- Games often use custom haptics; non-game apps occasionally do, for a richer, more delightful experience.
- Patterns can **vary dynamically** with input or context: the impact when a character jumps from a tree is stronger than when it jumps in place; a collision or hit feels very different from approaching footsteps or looming danger.
- Two building blocks:
  - **Transient**: brief, compact, tap or impulse-like (e.g. the Home Screen Flashlight button).
  - **Continuous**: a sustained vibration (e.g. the *lasers* message effect).
- Two controls on either type:
  - **Sharpness**: abstracts the sensation into a waveform and states your intent: **soft, rounded, organic** vs **crisp, precise, mechanical**.
  - **Intensity**: the strength.
- Combine transient and continuous events, vary sharpness and intensity, and optionally add **audio** (Core Haptics).

### Platform considerations
#### iOS
- Two ways to add haptics on supported iPhones:
  - use **standard components** (toggles, sliders, pickers) that play Apple-designed haptics by default;
  - where it makes sense, a **feedback generator** (`UIFeedbackGenerator`) plays one of the predefined patterns in three categories:
    - **Notification**: the outcome of a task or action (depositing a check, unlocking a vehicle).
      - **Success**: a task or action completed.
      - **Warning**: it produced a warning of some kind.
      - **Error**: an error occurred.
    - **Impact**: a physical metaphor complementing a visual (a tap when a view snaps into place, a thud when heavy objects collide).
      - **Light**: small or lightweight UI objects collide. **Medium**: medium-sized or medium-weight. **Heavy**: large or heavy. **Rigid**: hard or inflexible. **Soft**: soft or flexible.
    - **Selection**: feedback while the **values of a UI element are changing**.
#### macOS
- With a **Magic Trackpad**, an app can play one of three patterns in response to a **drag** or **force click** (`NSHapticFeedbackPerformer`):
  - **Alignment**: a dragged item aligns (a shape snaps to another; scaling to fit dimensions; reaching a preferred position; hitting the start/end or min/max of something like a scrubber).
  - **Level change**: movement between **discrete pressure levels** (e.g. pressing a fast-forward button: playback speed changes as levels are reached).
  - **Generic**: general feedback when the others don't apply.
#### watchOS
- **Apple Watch Series 4 and later** gives haptics for the **Digital Crown**: by default **linear haptic detents** while rotating; some system controls (table views) add detents as new items scroll in (`WKHapticType`).
- watchOS defines nine haptics, each with a specific meaning:
  - **Notification**: something significant or out of the ordinary needs attention; also played when a local or remote notification arrives.
  - **Up**: an important value **rose above** a significant threshold. **Down**: **fell below** one.
  - **Success**: an action completed successfully. **Failure**: an action failed. **Retry**: it failed but **can be retried**.
  - **Start**: an activity started (a timer, or anything the person can start and stop); **Stop** usually follows it. **Stop**: an activity the person started has stopped.
  - **Click**: the sensation of a dial clicking, to communicate progress at predefined increments; **overuse diminishes its usefulness and overlapping clicks are confusing**.
#### tvOS, visionOS
- Game controllers can provide haptics in tvOS, visionOS, iPadOS and macOS apps and games. No further platform text.

## Specs & values
Hard numbers in the page text: **none** (no durations, strengths or frequencies; "Series 4 and later" and the pattern names are the only specifics). The numbers below come from **measuring the demo videos** (see § What the demo media show). Full tagged data: `tokens/apple-haptics.json` (**MEASURED** / **MEASURED-APPROX** / **CONV**).

| Item | Value |
|---|---|
| iOS pattern set | 3 notification (success, warning, error) · 5 impact (light, medium, heavy, rigid, soft) · 1 selection |
| watchOS pattern set | 9: notification, up, down, success, failure, retry, start, stop, click |
| macOS pattern set | 3: alignment, level change, generic |
| Custom building blocks | transient · continuous; parameters sharpness · intensity |
| Digital Crown haptics | Apple Watch Series 4 and later; linear detents by default |
| Developer docs | `UIFeedbackGenerator` · `NSHapticFeedbackPerformer` · `WKHapticType` · Core Haptics · *Playing Haptics on Game Controllers* · *Delivering Rich App Experiences with Haptics* |
| Related HIG pages | Feedback ✓ · Gestures (not yet ingested) |
| Videos | *Practice audio haptic design* (WWDC21 10278) · *Introducing Core Haptics* (WWDC19 520) |

## What the demo media show (measured 2026-09-28)
**How this was done.** All 18 demo clips (9 iOS, 9 watchOS; light and dark variants carry the **same audio**, MD5-identical) were downloaded to a scratch folder, decoded with ffmpeg (48 kHz audio, 60 fps video) and analysed: envelope, onsets, per-event pitch (FFT/STFT), bar geometry and playhead flashes. **Nothing from Apple is committed**, only numbers. I could not "listen"; I measured. **Caveat that matters:** the clips are **illustrations**. Apple describes bars plus "audio tones of different pitches" (iOS) and "thin vertical lines that symbolize sound waves" (watchOS); the tone is a stand-in for the haptic, **not the Taptic Engine's waveform**. So absolute Hz/dB belong to the illustration; **timing, ordering, rising/falling, crescendo/decrescendo and relative strength** are the transferable facts.

### iOS: how to read the picture
- Frame 0 of each clip shows the whole pattern as **bars on a centre line**; a playhead sweeps and **flashes each bar as its sound plays** (flash and audio agree within 17 ms).
- **Bar height = relative strength**, in five steps **0.6 / 0.7 / 0.8 / 0.9 / 1.0** (heavy impact = 1.0). **Bar width** tracks how *soft* the event feels (see below). The spacing between bars is layout only (the playhead speed varies), so event times come from the audio.

### iOS: the nine patterns
| Pattern | Events (ms from the first) | Strength (bar) | Peak level of the tone | Pitch of the tone | Character |
|---|---|---|---|---|---|
| **Success** | 0, 116 | 0.7 → 1.0 | 0.60 → 0.69 | 141 → 158 Hz | **crescendo, rising**: two taps, the second stronger and higher |
| **Warning** | 0, 134 | 0.9 → 0.7 | 0.69 → 0.60 | 158 → 147 Hz | **decrescendo, falling**, and slower than success |
| **Error** | 0, 50, 135, 236 | 0.8, 0.8, 1.0, 0.6 | 0.39, 0.38, 0.69, 0.59 | 164, 164, 164, 123 Hz | two quick equal taps, a strong hit, then a weaker **lower** one; gaps widen 50 → 85 → 101 ms |
| **Impact light** | 0 | 0.6 | 0.185 | ~188 Hz | 19 ms, time-to-peak 6.6 ms |
| **Impact medium** | 0 | 0.8 | 0.387 | ~166 Hz | 17 ms, time-to-peak 3.5 ms |
| **Impact heavy** | 0 | 1.0 | 0.692 | ~162 Hz | 23 ms, time-to-peak 3.9 ms |
| **Impact rigid** | 0 | 0.9 | **1.10** (the loudest) | broadband click | **3.3 ms**, time-to-peak 1.4 ms; **narrowest bar** |
| **Impact soft** | 0 | 0.7 | 0.678 | ~508 Hz | 23 ms, **time-to-peak 14.5 ms** (4× slower); **widest bar** |
| **Selection** | 0 | 0.6 | 0.303 | ~220 Hz | 12 ms, time-to-peak 4.5 ms; the shortest tonal event |

### iOS: what I infer from it
- **Direction carries meaning.** Success climbs (louder, higher); warning **falls**; error is a **stutter that ends low**. If your custom haptic must sit next to these, respect the same direction: rising for good news, falling for caution.
- **Rhythm is part of the message.** Success and warning are both two taps; only strength/pitch direction and the gap (116 vs 134 ms) tell them apart. Error needs four events to read as "wrong".
- **Weight = louder and lower.** Light → medium → heavy raises the level 0.19 → 0.39 → 0.69 and drops the pitch 188 → 166 → 162 Hz: heavier objects feel bigger *and* deeper.
- **Rigid vs soft are not "strong vs weak"; they are "sharp vs slow".** Rigid is the shortest (3 ms) and hardest edge; soft is the slowest onset (14.5 ms) and widest. Apple's bar width and the measured time-to-peak line up: **narrow = crisp, wide = cushioned**. This is the same idea as Core Haptics **sharpness**.
- **Selection is the lightest thing that still counts as feedback**; it is meant to repeat while a value scrubs, which is why it is short and quiet.
- **Strength steps are coarse.** Apple uses five steps between 0.6 and 1.0; nothing on the page is below 0.6 of the heaviest impact. Don't fake finer gradations.

### watchOS: the nine haptics
| Haptic | Onsets (ms) | Pitch of the tone | Audible / to 10 % | Character |
|---|---|---|---|---|
| **Notification** | 0 | 1.52 kHz | 777 / 520 ms | one onset, **long decaying tail**: the longest pattern |
| **Up** | 0, 50 | 1.52 → **1.81 kHz** | 239 / 206 ms | two-step, pitch **steps up** |
| **Down** | 0, 56 | 1.81 → **1.52 kHz** | 261 / 216 ms | the exact mirror of Up |
| **Success** | 0, 87, 172 | 1.52 → 1.81 → **2.42 kHz** | 453 / 395 ms | three onsets, pitch **climbs** |
| **Failure** | 0, 87, 185 | 2.42, 2.42 → **1.21 kHz** | 463 / 424 ms | two light high taps, then one strong **low** hit with a ~100 ms plateau; drops **an octave** |
| **Retry** | 0, 91, 180 | **1.52 kHz (flat)** | 388 / 356 ms | three onsets at **one pitch**: a rhythm with no direction |
| **Start** | 0 | 1.52 kHz | 231 / 192 ms | one onset, short tail |
| **Stop** | 0, 294 | 1.52 kHz | 598 / 498 ms | **two Starts** 294 ms apart |
| **Click** | 2 | broadband (≈ 4.9 kHz) | **9** / 12 ms | a single click: the shortest pattern |

### watchOS: what I infer from it
- **A tiny vocabulary of pitch does most of the work:** about four tones (1.21, 1.52, 1.81, 2.42 kHz). **Up = a step up, Down = a step down, Success = a climb, Failure = a fall, Retry = flat repetition.** The intervals are musical (minor third 1.52 → 1.81, perfect fourth 1.81 → 2.42, exact octave down 2.42 → 1.21).
- **Count of onsets is a second code:** 1 = state or notice (notification, start, click); 2 = a change of level (up, down) or an end (stop); 3 = an outcome or a retry (success, failure, retry).
- **Failure and Retry are siblings on purpose:** three-beat rhythm; failure falls and hits hard (final, wrong), retry stays level (try again). Success is the same three-beat rhythm but rising. **Same rhythm, different contour = different meaning.**
- **Stop is Start twice**, so the pair reads as begin / end.
- **Duration is ranked by importance:** click 9 ms < start 231 < up 239 < down 261 < retry 388 < success 453 < failure 463 < stop 598 < notification 777. Only notification is long; people should feel it even when distracted.
- **Click must stay rare:** it is 9 ms, so overlapping clicks smear into a buzz (this is exactly Apple's warning).

## Visual notes
- **Hero:** an orange grid card with three slightly overlapping circles in a row (vibration), over construction circles.
- **iOS demo clips (measured):** 980 × 552, 60 fps, ≈ 1.02 s: a light or dark panel, a grey centre line, **green** bars (the same green in every clip), a thin dark playhead with end dots; each bar lightens as it plays.
- **watchOS demo clips (measured):** 1000 × 320, 60 fps, 1.5–2.4 s: black panel, a **dotted blue centre line**, and a schematic of **pink solid bars and pink ramps plus thin blue comb lines** with a white playhead. In Notification the picture is more elaborate than the audio measurement: two short bars, a blue decaying comb, then a large ramp-down; the audio measured as **one onset with a long decay**. Treat the watchOS pictures as schematics.
- No screenshots were provided, so nothing here comes from screenshots.

## Recommendation for mobile app builders
**Verdict: worth adopting, in a small, disciplined way.** Haptics are among the cheapest ways to make a mobile UI feel "Apple". Use **Apple's vocabulary, not your own**, and spend it on **state changes and value changes**, not on every tap.

### 1. The vocabulary to adopt (iOS first)
| When | Use | Why |
|---|---|---|
| a switch, slider or picker (system control) | **nothing to add**: the system plays it | already Apple-designed |
| a value is changing while dragging or scrubbing (custom slider, wheel, segmented drag) | **Selection** | lightest event; repeats per step |
| a view **snaps** into place, a card lands, a sheet reaches a detent | **Impact** (light/medium/heavy by size of the object; **rigid** for hard, **soft** for cushioned) | a physical metaphor that matches the animation |
| a task **finished** (saved, sent, paid, unlocked) | **Notification › Success** | rising two-tap |
| something needs a second look (limit near, unsaved, offline) | **Notification › Warning** | falling two-tap |
| the action failed (payment declined, upload failed, wrong code) | **Notification › Error** | the four-event stutter |
| pull-to-refresh threshold, long-press armed, drag start | **Impact light/medium** | one clear moment |
| destructive confirm | **Warning** on the prompt, **Success/none** after | don't celebrate deletions |

**Rules that follow from Apple's page and the measurements:** one meaning per pattern; never reuse Error for anything positive; match strength to the animation; at most one haptic per user action; never two haptics inside ~100 ms of each other (the built-in multi-event patterns already use that time); short over long.

### 2. How to call it
- **Native iOS (Swift):** SwiftUI `sensoryFeedback(_:trigger:)` (iOS 17+) or UIKit `UINotificationFeedbackGenerator`, `UIImpactFeedbackGenerator(style: .light/.medium/.heavy/.soft/.rigid)`, `UISelectionFeedbackGenerator`. Call **`prepare()`** just before a likely event to cut latency, and keep a single haptics service so every call goes through one place (and one setting). Custom patterns: **Core Haptics** (`CHHapticEvent` transient/continuous, `sharpness`, `intensity`). *(API names are from the developer docs the page links; version notes such as iOS 17 are outside the page.)*
- **React Native / Expo:** `expo-haptics`: `impactAsync(Light|Medium|Heavy|Soft|Rigid)`, `notificationAsync(Success|Warning|Error)`, `selectionAsync()` map one-to-one to the iOS set. Wrap them in a `haptics.ts` with your semantic names (`haptics.confirm()`, `haptics.snap()`).
- **Android (outside Apple's page; check current docs):** `View.performHapticFeedback` with `HapticFeedbackConstants` (e.g. CONFIRM and REJECT on newer versions, CLOCK_TICK for selection-like ticks, LONG_PRESS). Android has **no Apple-equivalent "light/rigid/soft"** set: pick the nearest constant and accept differences; don't ship custom vibration timings unless you test on real devices.
- **Web/PWA:** `navigator.vibrate` works on Android Chrome-like browsers, **not on iOS Safari**. `tokens/apple-haptics.json → webConv` has patterns **derived from the measured timings** (clamp each pulse to ≥ 10 ms and tune on device).

### 3. Product rules (from the page, turned into a checklist)
- A **Settings › Haptics** switch (default on) and honour the OS setting; the app must be fully usable without haptics.
- No haptic while the **camera, microphone or motion sensors** are being used for capture.
- **No haptics for content**, only for interaction results (don't buzz on incoming feed items).
- Test on a **real device**: simulators don't feel anything, and motors differ between phones.
- Pair every haptic with a visible state change (never the only signal; accessibility).
- Review the haptic map like copy: a table of *event → pattern*, one owner, no duplicates.

### 4. What I'd build first (highest value, lowest risk)
1. Selection on every custom scrubber/segmented drag.
2. Success/Error on submits (payments, forms, uploads).
3. Impact on snaps (sheets, cards, drag-and-drop drop).
4. Warning on near-limit and destructive prompts.
Everything else waits for user testing.

## Web translation
Haptics on the web are limited: `navigator.vibrate` (Android only; user gesture required; not on iOS Safari). Use it as an **enhancement**, never as the only feedback.

| HIG rule | Web implementation |
|---|---|
| System patterns for documented meanings | Keep the same semantic map (`success`, `warning`, `error`, `selection`, `impact-*`) in a `haptics()` helper; patterns from `tokens/apple-haptics.json → webConv`. |
| Consistent cause and effect | One event → one pattern; test that no negative pattern is reused positively. |
| Complement other feedback | Trigger the vibration in the same frame as the visual change (Feedback gate: text + icon remain the primary signal). |
| Don't overuse; short events | Cap the rate (≥ 100 ms between calls, ≤ ~1 per action); never loop or use long patterns. |
| Optional | A visible **Haptics** setting persisted per user; honour `prefers-reduced-motion` as a reason to default off (CONV, not Apple). |
| Side effects | Don't vibrate while `getUserMedia` camera/mic capture is active. |
| Feature detection | `if ("vibrate" in navigator)`; silent no-op otherwise; never assume support. |

Field-note cross-links:
- `hig/patterns/feedback.md` (CRITICAL): haptics are one of the channels for "feedback through more than one channel"; they never replace text and icon, and Feedback's watchOS "avoid indeterminate progress" rule is the same family as "haptics complement, they don't lead".
- `hig/patterns/playing-audio.md` and `hig/foundations/motion.md`: sound, motion and touch are three optional feedback channels; keep them aligned in intensity and time.
- `references/symbol-effects.md`: pair a symbol effect with an impact haptic (e.g. **Bounce** + Impact medium) so the animation and touch agree in time.
- `hig/patterns/drag-and-drop.md`: macOS **Alignment** haptic = snap/alignment feedback while dragging.
- `hig/patterns/managing-notifications.md`: the watchOS **Notification** haptic is played by the system when a notification arrives; apps shouldn't imitate it.
- No conflict with a field note.

## Checklist (recommended, not a gate)
- [ ] Every haptic maps to one documented meaning (selection, impact, success, warning, error…); none reused for a different meaning.
- [ ] Each haptic accompanies a visible or audible change in the same instant; strength matches the animation.
- [ ] Haptics are used for state and value changes, at most one per action, never looping or long.
- [ ] A Haptics setting exists, defaults on, and the app is fine without it; OS setting honoured.
- [ ] No vibration during camera, microphone or motion capture.
- [ ] Verified on real devices (iOS and Android separately); no reliance on simulators.
- [ ] Web fallback uses feature detection and never carries information alone.

## Related
- Ingested: Feedback (✓ CRITICAL), Playing audio (✓), Motion (✓), Drag and drop (✓), Managing notifications (✓), symbol-effects kit (✓).
- Pickers (✓ `components/selection-and-input/pickers.md`). Sliders (✓ `components/selection-and-input/sliders.md`). Toggles (✓ `components/selection-and-input/toggles.md`). Not yet ingested: **Gestures**, Game controls, Apple Pencil and Scribble.
- Developer docs: Core Haptics and the APIs listed in Specs & values. Videos: *Practice audio haptic design* (WWDC21 10278), *Introducing Core Haptics* (WWDC19 520).
