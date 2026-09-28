# Immersive experiences
Source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences ·
Section: Foundations · Supported platforms: **visionOS only** (not iOS, iPadOS, macOS, tvOS,
watchOS) · Ingested: 2026-09-28 · Screenshots: 17 (dark-mode page, hero → change log); text
cross-checked against the fetched content — matching; tab captions and video thumbnails marked
"(from screenshot)". Apple change log: **2025-06-09** clarified guidance + portrait-oriented
progressive immersion · **2024-11-19** refined immersion styles, added artwork · **2024-06-10**
passthrough tinting; initial/min/max immersion levels · **2024-05-07** creating an environment ·
**2024-02-02** choosing a style that matches the experience · **2023-10-24** artwork · **2023-06-21** new.

## In one line
Immersion is a **dial the person controls**, not a mode the app forces: launch in the Shared Space
(or `mixed`), reserve deeper immersion for meaningful moments, enter and exit through clear,
gentle, labelled transitions, keep people comfortable and grounded, and use the subtlest cue
(dim, tint, motion, scale, sound) that does the job.

## What the page says

### Framing
- visionOS apps/games can launch in the **Shared Space** (runs alongside other apps; people switch
  like on a Mac) or a **Full Space** (runs alone, hides other experiences). Apps can move between
  them fluidly at any time.

### Immersion and passthrough
- **Passthrough** = real-time video from external cameras; keeps people comfortable and connected
  to their physical context.
- **Digital Crown**, any time: press-and-hold → recenter content in the field of view; double-click →
  briefly hide all content and show passthrough.
- System comfort behaviours: in `mixed`, getting too close to a physical object briefly **dims**
  content in front of the person. In `progressive` and `full`, a boundary ≈ **1.5 m** from the initial
  head position: approaching it fades the experience and increases passthrough; beyond it the visuals
  are replaced by the **app's icon** in space, restored on return or recenter.

### Immersion styles
- Full Space → system hides other apps; 3D content not bound by a window, plus windows/volumes
  (API `automatic`).
- Options (Shared Space and Full Space):
  - **Dimmed passthrough** to focus attention — subtly dim or tint passthrough and other content;
    in the Shared Space without hiding other apps, or for a more focused Full Space. Default tint is
    **black**; a custom tint colour is possible (`SurroundingsEffect`). (Visual **immersive-01**,
    tabs: Without / With dimmed passthrough — the whole room darkens, the app window stays bright.)
  - **Unbounded 3D — `mixed`** in a Full Space: blend content with passthrough; may request nearby
    objects / room layout (ARKit). **No boundary**; content near physical objects turns
    semi-opaque automatically.
  - **`progressive`**: custom environment partially replacing passthrough; define your own
    immersion range; **portrait or landscape**; people adjust with the Digital Crown within the
    default **120°–360°** range or your custom range; ≈1.5 m boundary. (Video: adjusting the
    immersion level — a lake scene opening as a portal within real surroundings.)
  - **`full`**: 360° custom environment that **completely replaces** passthrough; ≈1.5 m boundary.
  - (Visual **immersive-02**, tabs: Full Space Mixed / Progressive / Immersive.)
    tab captions: *Mixed* — in-app objects blended with real-world surroundings
    (director's chair and film camera in a real living room); *Progressive* — the app's custom
    environment blended with the room, the environment appearing as a soft-edged portal behind the
    window; *Immersive* — a 360° custom environment (a gallery with paintings) replacing the room.

### Best practices
- **must — Offer multiple ways to use the app**, supporting the accessibility features people use.
- **should — Launch in the Shared Space or `mixed`**; for fully immersive/progressive apps, start
  in `mixed` or a window in the Shared Space so people choose when to go deeper.
- **should — Reserve immersion for meaningful moments/content.** Not every task needs immersion,
  and not every immersive task needs to be full. Example: Photos — browse albums in a window, go
  immersive only to examine one photo.
- **should — Draw attention with graded cues** (dimming, tinting, motion, scale, Spatial Audio):
  start subtle, strengthen only with good reason.
- **should — Subtle passthrough tint** (visionOS 2+) to coordinate surroundings (and hands) with the
  content; avoid bright/dramatic tints that distract.

### Promoting comfort
- **must — Visual comfort**: place 3D content within the **field of view**; comfortable motion in
  Full Space (see Motion).
- **must — Choose a style that fits expected movement**: minor movement (shifting weight, turning,
  sit/stand) is fine; excessive movement can interrupt. If people may move beyond 1.5 m, don't use
  `progressive`/`full` (or transition back to `mixed`).
- **should not — Encourage moving** in progressive/full; some can't or won't move — let them bring
  objects closer instead.
- **should not — Obscure passthrough too much in `mixed`**; if content would block much of the view,
  use `full` or `progressive`.
- **must — ARKit for blending with surroundings** (scene reconstruction, hand positions) requires
  **permission** for sensitive data (see Privacy).

### Transitioning between immersive styles
- **must — Smooth, predictable transitions** that let people visually track changes; no sudden,
  jarring changes.
- **must — Let people choose when to enter/exit**: clear action to enter and to exit (Keynote's
  prominent **Exit** button in its immersive Rehearsal environment). Don't make people use system
  controls to reduce immersion.
- **must — Label the exit's purpose**: back to a less immersive context vs quit entirely; if exiting
  quits, offer pause / save progress first.

### Displaying virtual hands
- A Full Space app can ask permission to hide real hands and show virtual ones.
- **should — Match familiar characteristics** (positions, gestures).
- **should — Caution with oversized hands**: they block content, feel clumsy, look too close to the face.
- **must — On tracking interruption, fade virtual hands out and reveal real hands**; never frozen
  hands; fade back in when data returns.

### Creating an environment
- **Minimize distraction**: little movement / high-contrast detail behind a primary task (e.g. video);
  to direct attention use the best textures and shapes in the important area, lower quality and
  dimming elsewhere.
- **Interactive vs decorative by distance**: people try to touch near objects, not far ones.
- **Subtle animation** (drifting clouds); **no busy motion at the edges** of the field of view.
- **Expansive**, never small/claustrophobic, whatever place it depicts.
- **Spatial Audio** for atmosphere; avoid repetitive loops; lower/stop the soundscape when other
  audio plays (e.g. a movie).
- **Avoid a flat 360° image** (no sense of scale); prefer lit meshes and shader animation (clouds,
  leaves, reflections).
- **Ground plane mesh always** so people don't feel they float (helps even a 360° image).
- **Minimize asset redundancy** — repeated models feel less real.

### Resources listed
Related: Spatial layout, Motion. Developer docs: Creating fully immersive experiences in your app;
Incorporating real-world surroundings in an immersive experience; `ImmersionStyle`; Immersive spaces
(SwiftUI). Videos: *Design immersive environments for visionOS apps and the spatial web* (**WWDC26**
234), *Principles of spatial design* (WWDC23 10072), *Design spatial SharePlay experiences* (WWDC23
10075). **(from screenshot)** thumbnails: Jupiter over a dark landscape (WWDC26 badge), neon "hello"
sign, glowing globe with small figures.

## Specs & values
- Comfort boundary: **≈1.5 m** from initial head position (`progressive`, `full`); none in `mixed`.
- Progressive immersion range: **120°–360°** default, or a custom range; portrait or landscape.
- Passthrough dim tint: **black** by default; custom tint allowed (visionOS 2+), keep subtle.
- Digital Crown: hold = recenter; double-click = show passthrough.

## Visual notes (from screenshots)
- Hero: yellow Foundations panel with a Vision Pro silhouette (rounded rectangle pinched at top and
  bottom) on a construction grid.
- Tabs on the page: text tabs with a 2px underline on the active tab, inactive tabs grey — a quiet
  segmented pattern (same as the site's "selected = underline" rule).
- visionOS windows in the photos: frosted glass panes, a small grab bar below each window.

## Web translation
visionOS-only, but the ideas map to any web "focus mode" (video/lightbox/presentation, spatial web):
| HIG | Web |
|---|---|
| Launch non-immersive; person chooses to go deeper | Never auto-open fullscreen/lightbox/video on load; provide an explicit "Enter full screen / Focus" action; `requestFullscreen()` only from a user gesture. |
| Dimmed passthrough (black default, subtle tint) | Focus mode = dim the page behind with a scrim `rgb(0 0 0 / .4–.6)` (subtle, not pitch black); keep the focused element at full brightness; any tinted scrim must be subtle. |
| Smooth, trackable transitions | Enter/exit via scale+fade from the source element (shared-element / View Transitions API), 250–400 ms, Apple easing; honour `prefers-reduced-motion` (crossfade). |
| Clear, labelled exit | Always-visible close control with a specific label ("Exit presentation" vs "Close"), `Esc` works, focus returns to the trigger; if exiting loses state, confirm or save first. |
| Graded attention cues | Start with the weakest cue (tone, scale 1.02, subtle motion) before sound, colour or animation loops. |
| Minimize distraction / subtle ambient motion | Ambient hero backgrounds: slow, low-contrast motion, nothing busy at the viewport edges, pause offscreen and under reduced motion; mute ambient audio when media plays. |
| Frozen state → reveal the real thing | If a live/realtime layer loses data, fade it out and show the underlying content instead of a stale frozen view. |
| Permission for sensitive sensors | Camera/motion/location on the web: ask in context with a clear reason (see Privacy). |
| Spatial web | WebXR/`<model>` content: start inline, offer an explicit immersive button, include a ground reference, avoid flat 360° images when 3D is feasible. |

## Checklist
- [ ] Starts non-immersive; entering focus/fullscreen is an explicit user action?
- [ ] Enter/exit animated and trackable; reduced-motion fallback?
- [ ] Exit control always visible, specifically labelled, keyboard (Esc) accessible, state safe?
- [ ] Backdrop dim subtle; focused content at full brightness?
- [ ] Ambient motion slow, low contrast, not at the edges; audio ducks for media?
- [ ] Sensitive-data access requested with context?

## Related (ingestion status)
Spatial layout, Motion, Privacy, Digital Crown, Playing audio, Accessibility (✓), Designing for
visionOS (✓) — not yet ingested (except ✓).
