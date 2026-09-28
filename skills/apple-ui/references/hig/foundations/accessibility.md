# Accessibility
Source: https://developer.apple.com/design/human-interface-guidelines/accessibility ·
Section: Foundations · Supported platforms: iOS, iPadOS, macOS, tvOS, visionOS, watchOS ·
Ingested: 2026-09-28 · Screenshots: 20 (text cross-checked end to end: matches the fetched
content, all 3 tables) · Apple change log: **2025-06-09** Assistive Access, Switch Control,
Accessibility Nutrition Labels added · **2025-03-07** all guidance expanded/refined; Dynamic Type
moved to Typography, VoiceOver moved to its own page · **2024-06-10** link to Unity plug-ins for
Dynamic Type · **2023-12-05** visionOS Zoom artwork updated · **2023-06-21** visionOS guidance added.

## In one line
Accessible interfaces let everyone have a great experience: make the UI **intuitive** (familiar,
consistent), **perceivable** (never one channel only — sight, hearing, speech, touch) and
**adaptable** (system accessibility features + personal settings), and design explicitly for
**vision, hearing, mobility, speech and cognition**.

## What the page says

### Framing
- Designing for accessibility reaches a **larger audience** and makes a **more inclusive**
  experience; people use the app **regardless of capabilities or how they use their devices**.
- An accessible interface is:
  - **Intuitive** — familiar, consistent interactions make tasks straightforward.
  - **Perceivable** — never relies on a **single method** to convey information; content works
    through **sight, hearing, speech or touch**.
  - **Adaptable** — adapts to how people want to use the device: **system accessibility features**
    and **personalised settings**.
- **Audit** as you design: **Accessibility Inspector** highlights issues and shows how the app
  presents itself to assistive features. Declare support on the App Store with **Accessibility
  Nutrition Labels** (App Store Connect).

### Vision
People may be **blind, colour blind, low vision, light-sensitive** — or simply in bad lighting /
low brightness.
- **must — Support larger text sizes.** Let people enlarge text *and icons*. Ideally allow
  enlarging text **by at least 200%** (**140% in watchOS**). Either custom UI or adopt **Dynamic
  Type** (systemwide text-size setting). (→ Typography › Supporting Dynamic Type)
- **must — Use recommended defaults for custom type sizes:**

| Platform | Default size | Minimum size |
|---|---|---|
| iOS, iPadOS | 17 pt | 11 pt |
| macOS | 13 pt | 10 pt |
| tvOS | 29 pt | 23 pt |
| visionOS | 17 pt | 12 pt |
| watchOS | 16 pt | 12 pt |

- **should — Font weight affects legibility**: with a **thin** custom font, go **larger** than the
  recommended sizes. Illustrated: small "Hello" in bold is easy to read; "Hello" in a thin weight
  needs a much larger size.
- **must — Meet colour-contrast minimums** between text/icons and backgrounds. Two standards:
  **WCAG** and **APCA**; use standard contrast calculators. Accessibility Inspector uses **WCAG
  Level AA**:

| Text size | Text weight | Minimum contrast ratio |
|---|---|---|
| Up to 17 pt | All | **4.5:1** |
| 18 pt | All | **3:1** |
| All | Bold | **3:1** |

  - If the default scheme can't meet this, at least provide a **higher-contrast scheme when
    Increase Contrast is on**.
  - Supporting Dark Mode → check contrast in **both** appearances.
  - Illustrated: a bright-blue button with dark-blue title = insufficient ✗; a deep-blue button with
    white title = sufficient ✓.
- **should — Prefer system-defined colours**: they have **accessible variants** that adapt
  automatically to **Increase Contrast** and light/dark. Illustrated: iOS `systemRed` default vs
  its accessible variant (darker on light backgrounds, lighter on dark).
- **must — Convey information with more than colour alone.** Colour-blind people struggle with
  **red–green** and **blue–orange** pairs. Add **shapes or icons** to show differences in function
  and state (✗ green circle vs red circle; ✓ green circle with a check vs red octagon with an X).
  Consider letting people **customise colour schemes** (e.g. chart colours, game characters).
- **must — Describe the interface and content for VoiceOver** (screen reader). (→ VoiceOver page)

### Hearing
People may be **deaf or hard of hearing**, or in **noisy/public** places.
- **must — Support text-based ways to enjoy audio and video**; dialogue and crucial info never by
  audio alone; let people **customise how the text looks**:
  - **Captions** — textual equivalent of audible info, synced live (cutscenes, clips).
  - **Subtitles** — onscreen dialogue in the person's preferred language (TV, movies).
  - **Audio descriptions** — spoken narration of visual-only info, placed in natural pauses.
  - **Transcripts** — complete text of audible + visual info (podcasts, audiobooks), reviewable as
    a whole or highlighted during playback.
- **should — Pair audio cues with haptics** (success chime, error sound, game feedback) for people
  who can't hear or have sound off. iOS/iPadOS: **Music Haptics** and **Audio graphs** let people
  feel music and infographics. (→ Playing haptics)
- **should — Augment audio cues with visual cues**, especially in games/spatial apps where content
  may be **off screen**; add visual indicators pointing where to act.

### Mobility
Comfortable for people with **limited dexterity or mobility**.
- **must — Sufficiently sized controls** (tapping and clicking):

| Platform | Default control size | Minimum control size |
|---|---|---|
| iOS, iPadOS | 44×44 pt | 28×28 pt |
| macOS | 28×28 pt | 20×20 pt |
| tvOS | 66×66 pt | 56×56 pt |
| visionOS | 60×60 pt | 28×28 pt |
| watchOS | 44×44 pt | 28×28 pt |

- **must — Spacing matters as much as size**: about **12 pt padding around elements with a
  bezel**; about **24 pt around the visible edges of elements without a bezel** (illustrated:
  rewind/play/forward crammed ✗ vs padded ✓).
- **should — Simple gestures for common interactions**; avoid custom **multifinger/multihand**
  gestures for frequent actions.
- **must — Alternatives to gestures**: core functions reachable by more than one physical
  interaction; e.g. swipe-to-dismiss also needs a **button** (illustrated: edit mode with delete
  buttons ✓ alongside swipe-to-delete).
- **should — Voice Control**: people operate the device entirely by voice (gestures, elements,
  dictation/editing) — **label interface elements appropriately**.
- **should — Siri and Shortcuts**: automate important repetitive tasks, triggered from Siri, the
  **Action button**, Home Screen shortcuts, Control Center.
- **must — Support mobility assistive technologies**: VoiceOver, **AssistiveTouch, Full Keyboard
  Access, Pointer Control, Switch Control**. **Test** with them and label elements properly.

### Speech
For people with speech disabilities and people who prefer **text-based** interaction.
- **must — Keyboard alone** must navigate and operate the app (**Full Keyboard Access**). Don't
  **override system-defined keyboard shortcuts** (incl. accessibility shortcuts); test with Full
  Keyboard Access. (→ Keyboards)
- **should — Support Switch Control**: control via separate hardware, game controllers or sounds
  (click, pop) — selecting, tapping, typing, drawing.

### Cognitive
Reducing complexity benefits everyone.
- **must — Keep actions simple and intuitive**: easy-to-remember, consistent interactions; prefer
  **system gestures/behaviours** over custom gestures people must learn.
- **must — Minimise time-boxed UI**: auto-dismissing views/controls hurt people who need longer and
  assistive-tech users; **dismiss with an explicit action**.
- **should — Difficulty accommodations in games**: lower completion criteria, adjust reaction time,
  control assistance.
- **must — Let people control audio/video playback**: no autoplay without discoverable start/stop
  controls; consider a **global opt-out of autoplay**.
- **must — Respect Dim Flashing Lights** in video playback (system detects, mitigates, informs).
- **must — Be careful with fast-moving and blinking animation** (distraction, dizziness, **seizures**).
  With **Reduce Motion** on, cut automatic and repetitive animation incl. **zooming, scaling,
  peripheral motion**. Also:
  - tighten springs to reduce **bounce**;
  - make animations **track the person's gesture** directly;
  - avoid animating **z-axis depth** changes;
  - replace x/y/z **slides with fades**;
  - avoid animating **into/out of blurs**.
- **should — Optimise for Assistive Access** (iOS/iPadOS streamlined mode for cognitive
  disabilities; system sets a simplified layout — e.g. Camera with huge Photo/Video/Back buttons).
  When it's on:
  - keep the **core functionality**, remove non-critical workflows and UI;
  - **one interaction per screen** — split multistep flows;
  - **confirm twice** before hard-to-undo actions (e.g. deleting a file).

### Platform considerations
- No additional considerations for iOS, iPadOS, macOS, tvOS, watchOS.
- **visionOS**: features include **head and hand Pointer Control** and **Zoom** (a lens magnifying
  content beneath it). **Prioritise comfort** (higher risk of motion sickness and visual/ergonomic
  strain):
  - keep elements **in the field of view**; prefer **horizontal** layouts to vertical ones (neck
    strain); don't demand attention in different places in quick succession;
  - reduce **speed and intensity** of animation, especially in **peripheral vision**;
  - be gentle with **camera/video motion**; never make the world seem to move without control;
  - **don't head-anchor content** (feels confining; breaks Pointer Control);
  - minimise **large, repetitive gestures**.

### Resources listed
Related: Inclusion, Typography, VoiceOver. Developer documentation: Building accessible apps,
Accessibility framework, Overview of Accessibility Nutrition Labels. Videos: *Refine accessibility
for custom controls* (WWDC26 220), *Principles of inclusive app design* (WWDC25 316), *Evaluate
your app for Accessibility Nutrition Labels* (WWDC25 224). Also referenced: *Create accessible
spatial experiences* (WWDC23 10034), *Design considerations for vision and motion* (WWDC23 10078).

## Specs & values (summary)
- Text scaling: ≥ **200%** (watchOS ≥ **140%**).
- Type defaults/minimums, control defaults/minimums — tables above.
- Contrast (WCAG AA): **4.5:1** up to 17 pt; **3:1** at 18 pt+ or bold.
- Spacing: **~12 pt** around bezeled controls; **~24 pt** around bezel-less ones.
- System colour values: see `color.md` (current 2025 values; e.g. red `#FF383C` / dark `#FF4245`;
  increased contrast `#E9152D` / `#FF6165`).

## Visual notes (from screenshots)
- **(from screenshot)** Foundations pages add a **"Supported platforms"** block at the top of the
  right column: six small monochrome device glyphs (iPhone, iPad, Mac, TV, Vision Pro, Watch)
  above the "On this page" TOC. Foundations imagery is **yellow** (confirms the section colour).
- **(from screenshot)** Each section opens with a wide yellow banner of five duotone SF Symbols:
  Vision (text size "AA", magnifier +, VoiceOver figure with speaker, a large "a" glyph, quote
  bubble); Hearing (speaker + eye, waveform + magnifier, caption bubble, ear, waveform bubble);
  Mobility (keyboard, moving dot, waveform with arrows, 2×2 grid, pointing hand); Speech (waveform
  with arrow, person with waveform, waveform with arrows, keyboard with waveform, bubble with
  panels); Cognitive (music notes, dotted lock, phone with grid, document, text bubble).
- **(from screenshot)** Do/Don't pairs sit side by side with captions and a **grey ✗ circle** under
  the wrong one and a **green ✓ circle** under the right one — Apple's standard doc pattern.
- **(from screenshot)** Contrast example: bright blue pill with dark-blue "Button" (✗) vs deep
  blue pill with white "Button" (✓). Colour-only example: plain green/red circles (✗) vs green
  circle with ✓ + red **octagon** with ✗ (✓). Spacing example: tightly packed media controls (✗)
  vs the same controls with pink padding boxes showing clear space (✓).
- **(from screenshot)** Assistive Access Camera: black UI; big title "📷 Photo"; two large dark
  tiles each with a huge coloured circle icon (yellow Photo, green Video) and a label; full-width
  dark "← Back" button at the bottom; photo mode shows the preview with a full-width **yellow
  "Take Photo"** button above Back.
- **(from screenshot)** visionOS tabs (Pointer Control hand / head / Zoom) with videos showing a
  whiteboard-like window of rocket images and a glass toolbar (undo, redo, 100 %, tools) at the
  bottom; a **blue "Play ⊙"** link under each video. Zoom tab shows a rounded lens magnifying a
  handwritten recipe.

Visual pairs: `visual-examples` ids accessibility-01 … 07.

## Web translation (WCAG mapping)
| HIG guidance | Web implementation |
|---|---|
| Larger text 200% | `rem`/`em` sizing, fluid layout that reflows at 200% zoom and 400% (WCAG 1.4.4/1.4.10); never `user-scalable=no`; test Safari "Text size" and Chrome zoom. |
| Default/min type sizes | Body 16–17 px, minimum ~11–12 px for captions only; thin weights only at large sizes. |
| Contrast 4.5:1 / 3:1 | WCAG 1.4.3 (text) and 1.4.11 (UI components & graphics 3:1). **Opacity-based grey text needs checking** — see the table below. Test both themes. |
| Increase Contrast | `@media (prefers-contrast: more)` → stronger text tones, visible borders; `@media (forced-colors: active)` → use system colours (`CanvasText`, `ButtonText`, `Highlight`), keep focus visible. |
| System colours with accessible variants | Define colour tokens with a normal and a high-contrast value; swap under `prefers-contrast: more`. |
| Not colour alone | Status = icon/shape + text (WCAG 1.4.1). Charts: patterns/labels + a colour-blind-safe palette option. |
| VoiceOver | Semantic HTML, landmarks, headings, `alt`, accessible names, `aria-live` for updates; test with VoiceOver/NVDA. |
| Captions, subtitles, audio description, transcripts | `<track kind="captions|subtitles|descriptions">`, transcript links, customisable caption styling (WCAG 1.2.x). |
| Haptics + visual cues for sounds | `navigator.vibrate()` where supported (Android); always a visual equivalent for any sound cue. |
| Control size & spacing | Touch targets **44×44 px** (WCAG 2.5.5 AAA; 2.5.8 AA floor 24×24 with spacing); ≥ 12 px gap around bezeled buttons, ~24 px around bare icons/text links. |
| Simple gestures + alternatives | Every swipe/drag/pinch has a button alternative (WCAG 2.5.1 Pointer Gestures, 2.5.7 Dragging Movements). |
| Voice Control | Visible label text must be contained in the accessible name (WCAG 2.5.3 Label in Name); every control named. |
| Keyboard only | Everything operable by keyboard, logical order, visible focus (WCAG 2.1.1, 2.4.7, 2.4.11); don't hijack browser/OS shortcuts; single-key shortcuts must be remappable/disable-able (2.1.4). |
| No time-boxed UI | Toasts that contain actions must not auto-dismiss (or give ≥ 20 s + a way to extend) (WCAG 2.2.1); prefer explicit dismiss. |
| Playback control | No autoplay with sound; pause/stop for anything moving > 5 s (WCAG 1.4.2, 2.2.2). |
| Flashing | ≤ 3 flashes per second (WCAG 2.3.1). |
| Reduce Motion | `@media (prefers-reduced-motion: reduce)`: replace slides/zooms/parallax with fades, remove bounce/overshoot, no blur transitions, no autoplaying carousels. |
| Assistive Access mindset | Offer a simplified mode or ensure core flows are one decision per screen, big labelled buttons, double confirmation for destructive actions. |

### Contrast check of this skill's own tone tokens (computed)
| Token | on `#F5F5F7` | on `#FFF` | Verdict for text ≤ 17 px |
|---|---|---|---|
| `black/30` | 2.08 | 2.12 | ✗ decorative / disabled only |
| `black/40` | 2.82 | 2.85 | ✗ |
| `black/45` | 3.30 | 3.36 | ✗ (OK only ≥ 18 pt or bold large) |
| `black/50` | 3.93 | 3.95 | ✗ |
| `black/55` | 4.68 | 4.74 | ✓ minimum for small secondary text |
| `black/60` | 5.60 | 5.74 | ✓ |
| `#6E6E73` (Apple web secondary) | 4.66 | 5.07 | ✓ |
| `#86868B` (Apple web tertiary) | 3.33 | 3.62 | ✗ small text |
| `white/40` on `#08080A` | 3.76 | — | ✗ |
| `white/45` on `#08080A` | 4.47 | — | borderline ✗ |
| `white/50` on `#08080A` | 5.35 | — | ✓ minimum for small secondary text (dark) |
| white on blue `#0088FF` (2025 value) | 3.52 | — | ✗ for body-size labels |
| white on `#0040DD` | 7.56 | — | ✓ |
| white on red `#FF383C` / incr. contrast `#E9152D` | 3.57 / 4.56 | — | ✗ / ✓ |
| white on `#34C759` | 2.22 | — | ✗ (don't put white text on system green) |
→ `field-notes/tokens.md` now carries an accessible ink scale.

## Checklist
- [ ] Text scales to 200% (reflows, nothing clipped); no fixed px font sizes?
- [ ] All text ≥ 4.5:1 (≥ 3:1 for ≥ 18 pt/bold) in light **and** dark; UI parts ≥ 3:1?
- [ ] High-contrast mode (`prefers-contrast`, `forced-colors`) handled?
- [ ] No meaning by colour alone; status has icon/shape + text?
- [ ] Screen reader: semantic structure, names, alt text, live regions?
- [ ] Media: captions/subtitles/transcripts; no autoplay with sound; ≤ 3 flashes/s?
- [ ] Targets ≥ 44 px (touch) with spacing; every gesture has a button alternative?
- [ ] Fully keyboard operable with visible focus; no hijacked shortcuts?
- [ ] No auto-dismissing UI that holds information or actions?
- [ ] Reduced motion: fades instead of motion, no bounce, no blur transitions?
- [ ] Simple, consistent interactions; destructive actions confirmed?

## Related (ingestion status)
Inclusion, Typography (Dynamic Type), VoiceOver, Color, Dark Mode, Playing haptics, Keyboards,
Siri — not yet ingested. Spatial layout (✓). Motion (✓ `motion.md`).
