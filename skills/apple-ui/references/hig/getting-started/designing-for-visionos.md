# Designing for visionOS
Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos ·
Section: Getting started · Ingested: 2026-09-28 · Screenshots: 6 (text cross-checked: matches
the fetched content) · Apple change log: **2024-02-02** added link to Apple Vision Pro User
Guide · **2023-09-12** updated intro artwork · **2023-06-21** new page.

## In one line
Apple Vision Pro puts people in an infinite 3D space while keeping them connected to the real
world: content lives in windows, volumes and immersive spaces; people act with eyes + light
hand gestures; comfort is paramount — so use the **minimum immersion** each moment needs,
**familiar windows** for normal tasks, content **in the field of view**, **calm motion**, and
**resting hands**.

## What the page says

### Framing
Wearing Vision Pro, people enter an **infinite 3D space** where they use your app or game
**while staying connected to their surroundings**. Understand the characteristics below to make
immersive yet engaging experiences.

### The seven defining characteristics
1. **Space** — a **limitless canvas**: people view **windows**, **volumes** (3D bounded
   containers) and **3D objects**, and can choose **deeply immersive** experiences that transport
   them elsewhere.
2. **Immersion** — people move **fluidly between levels of immersion**. Apps launch by default in
   the ***Shared Space***: many apps side by side; people open, close and **relocate windows**.
   People can move an app into a ***Full Space*** where it is the **only app running**; there they
   can see 3D content **blended with their surroundings**, open a **portal** to another place, or
   **enter a different world** (fully immersive).
3. **Passthrough** — live video from the external cameras lets people see their real
   surroundings while using virtual content; they turn the **Digital Crown** to show **more or
   less** of their surroundings.
4. **Spatial Audio** — acoustic + visual sensing model the room's sound so audio **automatically
   sounds natural in the space**; with the person's **permission** to access surroundings
   information, an app can **fine-tune** Spatial Audio for custom experiences.
5. **Eyes and hands** — most actions: **look** at an object with the eyes, then make an
   ***indirect* gesture** (e.g. a tap of the fingers) to activate it. People can also use
   ***direct* gestures**, e.g. touching a virtual object with a finger.
6. **Ergonomics** — people see **everything, real and virtual, through the cameras**, so **visual
   comfort is paramount**. The system keeps content placed **relative to the wearer's head**
   regardless of height or posture (sitting, standing, **lying down**). visionOS **brings content
   to people** instead of making them move to it, so people can **stay at rest**.
7. **Accessibility** — supports **VoiceOver, Switch Control, Dwell Control, Guided Access, Head
   Pointer** and many more. As on every platform, **system UI components include accessibility by
   default**, and frameworks let you enhance it further.

### Important (safety callout on the page)
- Design with the device's spatial-computing characteristics in mind and pay **special attention
  to user safety** (details in the Apple Vision Pro User Guide).
- Vision Pro **must not be used while operating a vehicle or heavy machinery**, and is **not
  designed for moving around unsafe environments** — near balconies, streets, stairs or other
  hazards.
- Designed to be fitted and used **only by people aged 13 or older**.

### Best practices
Overall goal: great visionOS apps are **approachable and familiar** while offering
**extraordinary** experiences — surrounding people with beautiful content, expanded capabilities
and captivating adventures.
- **should — Embrace the unique features**: use space, Spatial Audio and immersion to bring
  experiences to life, and integrate **passthrough** and **eyes-and-hands input** so it feels
  native to the device.
- **must — Choose the minimum immersion per moment.** Experiences can be **windowed/UI-centric**,
  **fully immersive**, or **in between**. For each key moment find the **least immersion that
  fits** — **don't assume every moment must be fully immersive**.
- **should — Use windows for contained, UI-centric tasks.** For standard tasks prefer standard
  **windows** (planes in space with familiar controls). People can put windows anywhere, and the
  system's **dynamic scaling** keeps window content legible near or far.
- **must — Prioritise comfort** (keep people physically relaxed):
  - Keep content **within the field of view**, positioned **relative to the head**; don't place
    content where people must **turn their head or change position** to use it.
  - Avoid **motion** that is overwhelming, jarring, too fast, or **lacks a stationary frame of
    reference**.
  - Support **indirect gestures** so people can interact with **hands resting in their lap or at
    their sides**.
  - If you support **direct gestures**, keep interactive content **close enough** and don't
    require **long periods** of direct interaction (arm fatigue).
  - In **fully immersive** experiences, **don't encourage people to move around much**.
- **should — Help people share activities**: with **SharePlay**, people see other participants'
  ***spatial Personas***, so it feels like being together in the same space.

### Resources listed
- Related: Apple Design Resources (visionOS kits). Developer documentation: visionOS Pathway;
  *Creating your first visionOS app*.
- Videos: *Design interactive experiences for visionOS* (WWDC24 10096), *Design great visionOS
  apps* (WWDC24 10086), *Principles of spatial design* (WWDC23 10072).

## Platform comparison (adds visionOS)
| | iOS | iPadOS | macOS | tvOS | visionOS |
|---|---|---|---|---|---|
| Canvas | phone screen | tablet screen | desktop + displays | TV | **infinite 3D space + real room** |
| Input | touch | touch/keys/pointer/Pencil | keys + pointer | remote/controller/voice | **eyes + indirect/direct hand gestures**, voice |
| "Where am I" | touch | touch/hover | cursor | focus highlight | **gaze highlight (hover effect)** |
| Comfort focus | reach zone | posture | desk | distance | **field of view, motion sickness, arm fatigue, at rest** |

## Specs & values
- Minimum age: 13+. No sizes on this page (see Spatial layout — field of view, scale; Eyes;
  Gestures; Windows; Immersive experiences).

## Visual notes (from screenshots)
- Hero: green-gradient construction-grid panel with the Vision Pro glyph (goggle outline with the
  nose bridge curve).
- **(from screenshot)** The "Important" callout renders as a **rounded box with an amber/orange
  1px border, very light cream fill, and an amber "Important" title**, body text in regular
  black — Apple's documentation style for important asides.
- **(from screenshot)** Video thumbnails: (1) *Design interactive experiences* — isometric
  white room with a sofa where one wall opens as a **blue portal** with a creature stepping
  through (portal/immersion idea); (2) *Design great visionOS apps* — a living room with a
  virtual **DJ turntable and mixer** floating in front and a glass window with playback controls
  above (volumes + windows in a real room); (3) *Principles of spatial design* — a white neon
  cursive **"hello"** floating over a wooden table in a real room.
- Right-hand TOC: Designing for visionOS · Best practices · Resources · Change log.
- Change log table with three dated rows.

## Web translation
visionOS runs websites in Safari (and WebXR for immersive web). Principles transfer well beyond
headsets:

| visionOS guidance | What to do on the web |
|---|---|
| Minimum immersion per moment | Don't default to full-screen/immersive/auto-playing experiences; escalate (inline → expanded → full screen / WebXR) only for moments that truly need it, and let people step back easily. |
| Windows with familiar controls for tasks | Keep standard, recognisable UI for normal tasks; save novel 3D/visual spectacle for signature moments. |
| Eyes + indirect tap | In Safari on Vision Pro, looking at an element shows a system highlight but **gaze is not reported to the page** (privacy) — hover-only UI (menus/tooltips/controls revealed only on `:hover`) will not work. Use real `<button>`/`<a>`/form controls with clear shapes and rounded hit areas so the system highlight fits them; generous target sizes and spacing; never rely on hover to reveal essential actions. |
| Comfort: motion | Avoid large, fast, full-viewport motion and parallax without a fixed reference; respect `prefers-reduced-motion`; no autoplaying camera-like moves. |
| Comfort: content in view | Keep key content and actions near the centre of the viewport; avoid forcing wide scanning across ultra-wide layouts. |
| Resting hands / short direct interaction | Prefer simple taps over long drags, precise gestures or sustained holds. |
| Accessibility built in | Semantic HTML gets VoiceOver/Switch Control/Dwell support for free; custom widgets need full ARIA + keyboard support. |
| Safety | Immersive/WebXR experiences must not encourage walking around; show clear exits. |
| Shared activities | Co-presence features (live cursors/avatars, "watch together") make shared tasks feel together. |

Documentation-callout note: an amber-bordered "Important" box is Apple's *documentation*
pattern; in app chrome keep the field-note rule (status colour dot-sized, no coloured banners).

## Checklist
- [ ] Each moment uses the least immersion that works; easy to step back?
- [ ] Standard, familiar UI for standard tasks?
- [ ] Nothing essential depends on hover; targets generous with clear shapes?
- [ ] Motion calm, with a stable frame of reference; reduced-motion respected?
- [ ] Key content in the central field of view; interactions short and low-effort?
- [ ] Accessible by default (semantic HTML/system components)?
- [ ] Safety: no encouragement to move in immersive modes?

## Related (ingestion status)
Windows (incl. volumes), Immersive experiences, Digital Crown, Playing audio (visionOS), Eyes,
Accessibility — not yet
ingested. Ingested since: SharePlay (✓ `hig/technologies/shareplay.md`). Gestures (✓ `hig/inputs/gestures.md`: indirect vs direct, system overlays). Motion (✓ `hig/foundations/motion.md`, visionOS comfort rules). Spatial layout (✓ `hig/foundations/spatial-layout.md`: field of view, depth, scale).
