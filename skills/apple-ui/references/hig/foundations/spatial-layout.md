# Spatial layout
Source: https://developer.apple.com/design/human-interface-guidelines/spatial-layout · Section: Foundations ·
Supported platforms: **visionOS only** (not iOS, iPadOS, macOS, tvOS or watchOS) · Ingested: 2026-09-28 ·
Screenshots: 10 (dark-mode page, hero → change-log heading). Body text, the Important aside, image and
video alt texts, related links and video titles were cross-checked line by line against the fetched content;
all match. Text that exists only inside images is marked **(from screenshot)**. The page has **no ✗/✓ image
pairs**: its two comparisons, upright vs angled viewing and dynamic vs fixed scale, are **videos**. They
illustrate concepts rather than timing, so they were not measured.

Apple change log:
- **2024-03-29**: stressed keeping interactive elements from overlapping.
- 2023-06-21: new page.

## In one line
On an infinite canvas, keep what matters **centred in the field of view but anchored in the room, not to
the head**.
- Use depth sparingly and truthfully to show hierarchy. Never float text.
- Let windows keep a constant apparent size (dynamic scale). Use real-world size (fixed scale) only for
  non-interactive objects.
- Keep the scene uncluttered, operable without moving, and generously spaced for eye targeting.

## Rules

### Field of view
- The **field of view** is what someone sees without moving their head. On Vision Pro it varies per
  person, with the **Light Seal** configuration and peripheral acuity.
  - (Image: a blank visionOS window in a living room. Concentric rings mark **30°, 60° and 90°** fields of
    view; the ring labels are **(from screenshot)**. The window fills roughly the 60° ring.)
- **Important:** the system gives the app **no information** about a person's field of view.
- **must — Centre important content in the field of view.**
  - visionOS launches apps directly in front of people by default.
  - In immersive experiences, keep key content centred. Avoid distracting motion and bright, high-contrast
    objects in the periphery.
  - (Tabbed videos: *Upright viewing*, a seated person facing a centred window; *Angled viewing*, a
    reclining person with the window raised, closer and tilted toward them so it stays centred. A dotted
    sight line runs from the eyes to the window centre.)
- **must — Don't anchor content to the wearer's head.**
  - Content that stays fixed in front of someone feels stuck, confining and uncomfortable, especially when
    it hides much of passthrough and makes the surroundings feel less stable.
  - Anchor content **in the space** instead, so people can look around naturally and find objects in
    different places.

### Depth
- People read depth from **distance, occlusion and shadow**.
- Vision Pro automatically adds **colour temperature, reflections and shadow** to virtual content. These
  change as the object or the person moves, which makes the scene feel real.
- Content can be seen from any angle, so **small amounts of depth everywhere**, even in standard windows,
  look more natural. SwiftUI views in a 2D window get depth effects automatically (*Adding 3D content to your
  app*).
  - (Image: a 2D Notes window with a Folders sidebar, a notes list and a "Nature Walks" note with leaf
    sketches. The app strings are **(from screenshot)**.)
- For more depth, build 3D objects with **RealityKit**. Place them anywhere or in a **volume**: like a
  window, but with **no visible frame** (see Windows § visionOS volumes).
  - (Video: a satellite model in a volume. The reflections shift as the viewer approaches and rotates it. A
    "Scene" ornament label is visible **(from screenshot)**.)
- **must — Depth cues must be accurate.** Missing cues, or cues that contradict real-world experience,
  cause visual discomfort.
- **should — Use depth to show hierarchy.**
  - Nearer reads as more important, and people notice depth changes.
  - Example: when a **sheet** appears, the window behind it **recedes along z** so the sheet comes forward.
- **must — Generally don't give text depth.** Text hovering above its background is hard to read, slows
  people down and can strain the eyes.
- **should — Make depth earn its place.**
  - Use it to clarify and delight, not everywhere.
  - It works for separating **large, important** elements, such as a tab bar or toolbar standing out from
    a window.
  - It works poorly on **small** ones. A button's symbol lifted off its background becomes less legible and
    harder to use.
  - Limit how many different depths the app uses and how often they change. Each change means the eyes
    must refocus, which is tiring.

### Scale
- visionOS has **two kinds of scale**.
  - **Dynamic scale:**
    - Windows grow as they move away and shrink as they come closer, so their **apparent size stays
      constant** and they stay legible and usable at any distance.
    - (Video: a window pushed back grows, with the original frame outline shown for comparison. The
      camera then orbits to show it looks the same size from the viewer's seat.)
  - **Fixed scale:**
    - The object keeps its physical size, so it looks smaller farther away, like real objects.
    - (Video: the same push-back, but the window shrinks into the distance.)
- A visionOS **point is an angle**, not a pixel count. That is what enables dynamic scaling and depth.
  Other platforms define a point in pixels, which vary with display resolution (see Images § Resolution).
- **may — Use fixed scale for virtual objects that must look exactly like physical ones** (e.g. a life-size
  product preview).
  - Interactive content must scale to stay usable, so apply fixed scale **sparingly**, to
    **non-interactive** objects only.

### Best practices
- **should — Don't show too many windows.** They hide the surroundings, feel overwhelming and confining,
  and make the app tedious to move (many windows to relocate).
- **should — Prefer standard indirect gestures.**
  - **Indirect** gestures (look + pinch with the hand at rest) work on anything people look at, at any
    distance.
  - **Direct** gestures (touching the object) are tiring, especially at or above eye level.
  - Keep direct gestures for **nearby** objects that invite close inspection or brief manipulation (see
    Gestures § visionOS).
- **Rely on the Digital Crown for recentering.** Pressing it recentres content in front of the person. The
  app needs **no** code for this.
- **must — Leave enough space around interactive elements for eye targeting.**
  - Looking at an element shows a **hover effect**. Space makes targeting comfortable and keeps the effect
    from crowding neighbours.
  - Example: regular-size buttons with **centres ≥ 60 pt apart**, i.e. **≥ 16 pt gap** between them.
  - **Never overlap** controls with other interactive elements or views; that makes selecting one element
    hard (2024 update).
- **should — Allow use with minimal or no physical movement**, unless movement is essential to the
  experience.
- **should — Anchor large immersive content that rises from the floor to a flat horizontal plane aligned
  with the floor**, so it blends in and feels intuitive.
- More: Windows § visionOS (windows and volumes), Layout § visionOS (laying out content inside a window).

## Specs & values
| Item | Value |
|---|---|
| Field-of-view rings in the diagram | 30° · 60° · 90° |
| FOV data available to apps | none |
| Interactive element spacing (regular buttons) | centres ≥ **60 pt** apart, gap ≥ **16 pt** |
| visionOS point | an **angle** (other platforms: pixels, resolution-dependent) |
| Scale types | dynamic (constant apparent size; default for windows) · fixed (physical size; non-interactive objects) |
| System depth cues | colour temperature · reflections · shadow (plus distance, occlusion) |
| Volume | window-like container for 3D content, no visible frame |
| APIs / docs | RealityKit; *Presenting windows and spaces*; *Positioning and sizing windows*; *Adding 3D content to your app* |

## Platform considerations
- **visionOS only.** Not supported in iOS, iPadOS, macOS, tvOS or watchOS.

## Resources listed
- Related: Eyes (✓ `inputs/eyes.md`), Layout (✓ CRITICAL), Immersive experiences (✓).
- Developer docs: *Presenting windows and spaces*, *Positioning and sizing windows*, *Adding 3D content to
  your app* (all visionOS).
- Videos: *Meet SwiftUI spatial layout* (WWDC25 273), *Principles of spatial design* (WWDC23 10072),
  *Design for spatial user interfaces* (WWDC23 10076).
- In-text links: Adding 3D content to your app; RealityKit; Windows § visionOS volumes; Images §
  Resolution; Gestures § visionOS; Digital Crown; Buttons § visionOS; Windows § visionOS; Layout § visionOS.

## Visual notes (from screenshots)
- **Hero:** a yellow grid card with three arrows from one origin (up, lower-left, lower-right): x/y/z
  axes.
- **FOV image:** orange concentric rings over a real living room, with a frosted blank window centred. The
  30° ring sits inside the window, and the 60° ring roughly touches its edges.
- **Viewing videos:** white line drawings on a dark grey stage (a seated person wearing Vision Pro), with a
  blue **"Play ⊙"** link below.
- **Notes window:** a glass window with a sidebar, list and white content pane; a floating glass toolbar at
  the bottom (undo, redo, Aa, checklist, table, attachment, markup icons) **(from screenshot)**.
- **Scale videos:** a light-grey floor grid with a white rounded window and a window bar under it.
- **Videos (from screenshot):** *Meet SwiftUI spatial layout* (robots in a gallery, WWDC25 badge),
  *Principles of spatial design* ("hello" neon script), *Design for spatial user interfaces* (a grid of
  visionOS UI).

## Web translation
Spatial layout is visionOS-native. It applies to the web in three places: **WebXR/immersive** web
experiences, **visionOS Safari** (web pages shown in a visionOS window), and, as principles, ordinary
screens (depth for hierarchy, target spacing).

| HIG rule | Web implementation |
|---|---|
| Centre key content; nothing busy in the periphery | Fullscreen/immersive/hero views put the primary object in the central ~60° equivalent (the middle half of the viewport). No bright, high-contrast or moving elements at the edges (see Motion § visionOS). |
| Don't anchor to the head | WebXR: attach UI panels to the world (`XRReferenceSpace` `local-floor`/`unbounded`), never to the viewer's head pose. Flat web: avoid large `position: fixed` panels that follow the viewport and cover content; keep fixed chrome slim (bars, not slabs). |
| Depth cues accurate | Shadows must agree with one light direction (top-down, soft) and with stacking order. A nearer layer always casts a shadow onto a farther one, never the reverse. |
| Depth for hierarchy (sheet over window) | When a sheet or dialog opens, recede the page: `scale(0.94–0.97)` + dim veil + slight blur on the page, and the sheet on top with a larger shadow (as iOS sheets do). Apply the same pattern for every modal. |
| No depth on text | Never give text `text-shadow` or 3D transforms to make it "float". Depth belongs to containers (cards, bars), not to glyphs. |
| Depth only where it adds value; few depth levels | Use at most ~3 elevation levels (base, raised bar/card, overlay). No shadow/lift on small icons or inside buttons. Don't animate between depths often. |
| Dynamic scale (constant apparent size) | CSS pixels are already angle-based: the CSS reference pixel is defined as a visual angle (~0.0213°, 1 px at arm's length ≈ 1/96 in). So size UI in `px`/`rem`, **never in `vw`** for text or controls, which would change apparent size with the window. |
| Fixed scale for real-world objects only | Life-size product previews (AR Quick Look / `<model>` / WebXR) may use physical units; interactive UI never does. |
| Too many windows | Don't open multiple popups, detached panels or `window.open` tabs for one task. Keep one surface, with at most one overlay. |
| Indirect over direct input | On visionOS Safari the eyes + pinch act as the pointer. Keep standard `<button>`/links (hover effect provided by the system). Avoid hover-only UI and tiny drag handles. |
| Spacing for eye targeting | For visionOS / touch-first layouts: interactive targets ≥ 44 px (60 pt on visionOS) with **≥ 16 px gaps** and centres ≥ 60 px apart for dense button rows. Never overlap clickable areas (no buttons inside clickable cards without separate hit areas). This matches LAYOUT GATE target checks. |
| Recentering | Nothing to build. Don't hijack recentering or orientation gestures in WebXR. |
| Minimal physical movement | WebXR: everything reachable while seated; teleport or scroll instead of walking. Flat web: no required device-motion interactions. |
| Floor anchoring | WebXR: place ground-rising content on a detected floor plane (`local-floor`), not floating mid-air. |

Field-note cross-links:
- `hig/foundations/layout.md` (CRITICAL): target and spacing minimums (visionOS 60 pt) are **confirmed**,
  and the new rule is "no overlapping interactive elements".
- `hig/foundations/immersive-experiences.md` and `motion.md` § visionOS: field of view, peripheral motion
  and comfort are **consistent**.
- `hig/foundations/materials.md`: sheets/overlays over a receded, veiled page match the visionOS
  translucency guidance.
- `field-notes/principles.md` ("depth from shadow and light, not borders"): **confirmed**. The HIG adds:
  depth for large elements only, never on text.

## Checklist
- [ ] The primary content is centred; the periphery has no bright, high-contrast or moving elements.
- [ ] Nothing is head-locked (WebXR) or a large viewport-following slab (flat web).
- [ ] Depth cues are consistent (one light direction, shadows match stacking); ≤ 3 elevation levels.
- [ ] No text floats (no text-shadow or 3D on glyphs); no depth effects on small icons or inside buttons.
- [ ] A modal opening recedes the page behind it (scale + dim), and the sheet comes forward.
- [ ] UI is sized in px/rem, not vw; fixed real-world scale only for non-interactive 3D previews.
- [ ] One task, one surface: no swarm of windows or popups.
- [ ] Targets are ≥ 44 px (60 pt visionOS) with ≥ 16 px gaps; no overlapping hit areas.
- [ ] Usable seated, with no required physical movement.

## Related (ingestion status)
Eyes (✓ `inputs/eyes.md`), Gestures (✓ `inputs/gestures.md`); Digital Crown (✓ `inputs/digital-crown.md`); Windows (✓ `components/presentation/windows.md`: visionOS windows and volumes); Buttons ✓ CRITICAL (visionOS sizes, shapes, 60 pt spacing). Layout (✓ CRITICAL),
Immersive experiences (✓), Motion (✓), Images (✓), Materials (✓ CRITICAL).
