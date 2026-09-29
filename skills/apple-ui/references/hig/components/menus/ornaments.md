# Ornaments
Source: https://developer.apple.com/design/human-interface-guidelines/ornaments · Section: Components › Menus and actions · Supported platforms: **visionOS only** ("Not supported in iOS, iPadOS, macOS, tvOS, or watchOS"; only the visionOS icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **February 2, 2024** (multiple-ornaments guidance). One DocC fetch, read in full. 3 screenshots (light-mode page, hero → the "Videos" heading with its thumbnail) were compared with the fetched text and image alt text line by line: everything matches. **Read from the fetch only:** the three **change-log rows**, the video link's URL, and the dark hero variant. The page has **no comparison images**; the hero is not a pair. Text that exists only inside the hero picture is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
An ornament is **a strip of controls or information that floats just in front of its window, attached to an edge, and moves with the window** without crowding the content. Use it for **frequently needed controls in a predictable place** (Music's Now Playing controls), **keep it visible** in most cases, **limit how many** you add, keep it **no wider than the window**, put **borderless buttons** on its glass background, and **let the system make toolbars and tab bars** (they become ornaments automatically). visionOS only.

## Rules

### Framing (intro)
- An ornament **floats in a plane parallel to its associated window, slightly in front of it along the z-axis**.
- **If the window moves, the ornament moves with it** and keeps its relative position; **if the window's content scrolls, the ornament's controls or information stay unchanged**.
- Ornaments can appear on **any edge** of a window and can contain **buttons, segmented controls and other views**.
- The **system uses ornaments** for **toolbars, tab bars and video playback controls**; you can use one to build a **custom component**.

### Best practices
- **should** **Use an ornament for frequently needed controls or information in a consistent place that doesn't clutter the window.** It stays **close to its window**, so people always know where to find it: **Music** puts **Now Playing** controls in one, a **predictable, easy-to-find** location.
- **should** **In general, keep an ornament visible.** Hiding it can make sense **when people dive into content** (watching a video, viewing a photo), but in most cases people **appreciate consistent access** to its controls.
- **should** **With several ornaments, prioritise the window's overall visual balance.** Ornaments **elevate important actions** but can **distract from content**. When necessary **limit the total number** so the window doesn't gain visual weight and feel more complicated. **If you remove an ornament, move its elements into the main window.**
- **should** **Keep an ornament's width the same as or narrower than its window's.** A wider one can **interfere with a tab bar or other vertical content on the window's side**.
- **may** **Use borderless buttons in an ornament.** Its background is **glass** by default, so a button placed directly on it **may not need a visible border**. When people **look at** a borderless button in an ornament, the system **automatically applies the hover effect** (see *Eyes*).
- **should** **Use the system's toolbars and tab bars unless you need a custom component.** In visionOS **toolbars and tab bars automatically appear as ornaments**, so **don't build an ornament for them** (SwiftUI `Toolbars`, `TabView`).

### Platform considerations
- **visionOS:** the only supported platform. **iOS, iPadOS, macOS, tvOS, watchOS:** not supported.

## Specs & values
The page has **no sizes or timings**. Facts it states:

| Item | Value |
|---|---|
| Position | in front of the window along the z-axis, parallel plane; on **any edge** |
| Behaviour | moves with the window; its content **doesn't scroll** with the window's content |
| Contents | buttons, segmented controls, other views |
| System uses | toolbars, tab bars, video playback controls (automatic; don't rebuild) |
| Best use | frequently needed controls/info in a consistent place (Music: Now Playing) |
| Visibility | keep visible; hide only when people dive into content (video, photo) |
| Count | limit the number for visual balance; removed → move elements into the window |
| Width | ≤ the associated window's width |
| Background | glass by default; borderless buttons OK; system applies the gaze hover effect |
| Not for | supplemental content (use an adjacent window, see `layout.md`) |
| Change log | Feb 2, 2024 multiple-ornaments guidance · Dec 5, 2023 removed the "supplementary items" statement · Jun 21, 2023 new page |
| Developer docs | SwiftUI `ornament(visibility:attachmentAnchor:contentAlignment:ornament:)` |
| Video | "Design for spatial user interfaces" (WWDC23) |
| Related HIG pages | Layout ✓ CRITICAL · Toolbars ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-pink card with a paler rounded **window** whose **bottom edge is crossed by a wide, light, fully rounded pill** (the ornament) that hangs below the window; a **red double-headed arrow above the pill** shows its width and a **red vertical arrow on its right** shows its height; **a small dot and a short bar sit under the pill** (window-control handles) **(from screenshot)**. It shows the ornament **attached outside the window's bottom edge**, **narrower than the window**, capsule-shaped, with a measuring arrow for width.
- **Page chrome (from screenshot):** the TOC reads Ornaments · Best practices · Platform considerations · Resources · Change log. The side navigation is scrolled and shows **Menus and actions** open with **Ornaments** in bold and **Toolbars** ringed (the pointer target), then Navigation and search (Path controls, Search fields, Sidebars, Tab bars, Token fields), Presentation (Action sheets, Alerts, Page controls, Panels, Popovers, Scroll views, Sheets, Windows) and Selection and input (Color wells, Combo boxes, Digit entry views, Image wells, Pickers…), consistent with the INDEX groups.
- **Videos:** the last screenshot ends on the **Videos** heading with a grey app-interface thumbnail; the video title and link URL come from the fetch ("Design for spatial user interfaces").
- The page has **no ✗/✓ pairs, no comparison images and no in-page videos to measure** (fetch script run; catalog IDs unchanged, total 118). Nothing is measured.
- **Text that is not in the fetch:** the hero shapes and the chrome above.

## Web translation
visionOS ornaments have no direct web counterpart, but the concept, **a control strip attached to the edge of a window/panel/card, moving with it, never covering its content**, maps to **attached action bars** (media player controls under a video, a floating toolbar under a document canvas, a panel's footer actions, a "now playing" dock). Treat it as **an anchored, container-level control bar**, not a page-level navigation bar (that is a header/`nav`, see `tab-views.md` and `sidebars`).

| HIG rule | Web implementation |
|---|---|
| Floats parallel to and in front of the window, on any edge, moves with it | A bar **positioned relative to its container**: `.panel { position: relative } .panel > .ornament { position: absolute; inset-inline: 0; inset-block-end: calc(-1 * var(--ornament-h) - var(--gap)); margin-inline: auto; }` (attach outside the edge) or `position: sticky; bottom: 0` inside a scroller. The container and its bar move together (same transform when dragged, resized or animated). A soft shadow or `translateZ` in a `perspective` scene is the only "depth" cue; don't fake real 3D on flat pages. |
| Scrolling content leaves the ornament unchanged | The bar lives **outside the scrolling element** (a sibling of the scroller) so it never scrolls or reflows; reserve space (`scroll-padding-block-end`, `padding-block-end`) so the last content row isn't hidden behind it. |
| Contents: buttons, segmented controls, other views | Real controls (`<button>`, `role="toolbar"` with arrow-key roving focus, `role="radiogroup"` for segments); one job per bar; group with `role="group"` and `aria-label`. |
| Frequently needed controls in a consistent location | Put **the same three to five actions** in the same place on every screen of that window (playback: previous, play/pause, next; canvas: undo, redo, zoom); never move them per state. |
| Keep it visible; hide only when diving into content | **Don't auto-hide** by default. Hide only in **immersive content modes** (full-screen video, photo viewer), reveal on tap/move/focus, and never trap keyboard users: any keypress or focus inside brings it back; respect `prefers-reduced-motion` for the fade. |
| Several ornaments: balance and limit | **At most one or two bars per container** (CONV, the page gives no count); if a third appears, fold actions into the container's header or a menu (`menus.md`). Removing a bar means moving its controls into the container, not deleting them. |
| Width ≤ window width | `max-inline-size: 100%` (or `min(100%, 40rem)`); on narrow viewports it spans the container and **wraps or overflows into a ⋯ menu**, never wider than the container so it can't collide with a side tab bar or sidebar. |
| Borderless buttons on a glass background | A glass bar (see `materials.md`: translucent surface, `backdrop-filter` with an opaque fallback under `prefers-reduced-transparency`/`forced-colors`) with **`btn-plain` style buttons** (no border, transparent fill) that still show **hover, `:active` and `:focus-visible`** tones (the gate's `no-hover-state`/`no-press-state` rules); keep labels ≥ 4.5:1 on the blended background and hit regions ≥ 44 × 44 px (`buttons.md`). The visionOS gaze hover has no web twin; **hover + focus ring** stand in. |
| Use system toolbars and tab bars | Use the platform's real elements: `<nav>`/`role="tablist"` (`tab-views.md`), a semantic header toolbar; don't rebuild them as floating bars. |
| Supplemental content is not an ornament | Extra information (details, notes) goes into an **adjacent panel or side sheet** (`layout.md`), not into the bar. |
| Not supported outside visionOS | On iOS/Android/desktop the same job is a **bottom toolbar, floating action bar or player control bar**, using the platform's toolbar rules; don't copy visionOS depth or gaze behaviour. |

Field-note cross-links:
- `hig/foundations/layout.md` (✓ CRITICAL): ornaments' min/max sizes, "supplemental content in an adjacent window, not an ornament", space around controls (the same rules the gate applies to bars).
- `hig/foundations/materials.md` (✓ CRITICAL): the glass background, contrast on blended surfaces, reduced-transparency fallbacks.
- `hig/components/menus/buttons.md` (✓ CRITICAL): borderless buttons in an ornament are the documented exception to "give a button a background shape"; states, hit regions and names still apply.
- `hig/patterns/playing-video.md` (✓): the system player's playback controls sit in an ornament in visionOS; inline video controls stay in the video's plane.
- `hig/components/layout/tab-views.md` (✓): tab bars appear as ornaments in visionOS; labels use Title Case.
- No conflict with a field note.

## Checklist
- [ ] The bar is **attached to its container's edge**, moves with it, and **does not scroll** with the container's content (content has matching bottom/edge padding).
- [ ] It holds **frequently needed, same-place controls**; supplemental content lives in an adjacent panel instead.
- [ ] It is **visible by default**; auto-hide happens only for immersive content and is undone by focus, keypress or tap.
- [ ] There are **one or two bars per container** at most, none wider than the container, and they collapse to a ⋯ menu when narrow.
- [ ] Borderless buttons have hover, press and focus states, ≥ 44 px hit regions, readable labels on the glass, and an opaque fallback for reduced transparency.
- [ ] Real toolbars, tabs and nav use their native semantics instead of custom floating bars.

## Related
- Ingested: Layout (✓ CRITICAL), Materials (✓ CRITICAL), Buttons (✓ CRITICAL), Playing video (✓), Tab views (✓), Menus (✓).
- Ingested since: Toolbars (✓). Tab bars (✓ `components/navigation/tab-bars.md`). Not yet ingested: Eyes (gaze hover).
- Developer docs: SwiftUI `ornament(visibility:attachmentAnchor:contentAlignment:ornament:)`.
- Video: "Design for spatial user interfaces" (WWDC23).
