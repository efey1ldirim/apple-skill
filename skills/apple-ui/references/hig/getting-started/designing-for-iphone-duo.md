# Designing for iPhone Duo
Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo ·
Section: Getting started · Ingested: 2026-09-28 · Screenshots: 20 so far (text cross-checked
up to "Vertical controls › Split View multitasking"; remaining screenshots pending — see
§ Visual notes) · Apple change log: **September 9, 2026 — new page** (device poses, dynamic
layouts across dual displays, toolbars and tab bars on the vertical axis).

## In one line
iPhone Duo is a foldable iPhone with an **outer** (compact, wide-and-short) and an **inner**
(regular) display, a centre hinge and many poses — build one resizable layout (size classes,
margins, safe areas, reserved regions) that expands rather than reinvents itself, keep
functionality and control positions consistent, and move toolbars/tab bars to the **side**
(vertical axis) where the system does.

## What the page says

### Framing
- Two displays, **each with its own front camera**; a **centre hinge** lets people open/close it
  and hold/position it in many ways → an **adaptable layout matters more than ever**.
- Apps built with **standard system components** that already **support resizing** adapt to the
  poses **automatically with little adjustment**. (Dev: *Preparing your app for iPhone Duo*.)
- It's a new form factor but **still an iPhone** — everything in *Designing for iOS* applies.

### Anatomy
- **Outer display**: used when **closed**; the system puts **toolbars and tab bars on the side**
  to maximise vertical space. Controls **stay on the side when opened in landscape** so the
  experience is consistent between displays.
- **Centre hinge**: supports many holds/positions and **reduces usable space as the device folds**.
- **Outer front camera**: in the **corner**, **always visible**, **vertically aligned with the side
  controls**. **Inner camera**: **behind the display**, hidden until the camera is active.

#### Device poses
- Held or set down: **partially folded like a book**, **flat on a surface**, **standing on its
  edges** (six poses illustrated).
- Don't design a custom layout per pose: use **size classes** — a **compact-width layout for the
  outer display** and a **regular-width layout for the inner display** cover every pose. **Don't
  reinvent the app on resize; let the existing layout expand** into the space.
- Preview poses in Xcode **Device Hub**.

### Best practices
- **must — Build your app to resize.** Two displays + many poses + **Split View multitasking** =
  many sizes. Use size classes, **layout margins** and **safe-area insets**; **avoid fixed widths
  and display-specific dependencies**.
- **must — Consistent experience across displays.** Same functionality and **element state** on
  both displays; same information hierarchy, but the inner display **may show one extra level**.
  Example: **Mail** closed shows the email list (primary) *or* an email (secondary); open shows
  **both side by side**.
- **must — Same functionality in every pose.** Controls may overflow and content may move/resize,
  but the **same controls and content stay reachable** however the device is held.
- **should — Follow the system's vertical layout** for toolbars, tab bars, navigation controls:
  the outer display is **wider and shorter** than other iPhones, so the system moves controls to
  the **side** to keep vertical space and reflect the display's asymmetry; on the inner display
  controls **stay on the side in landscape** for continuity at the same height. Standard
  components get this automatically; refine as needed.
- **should — Games playable in every pose.** You may lock portrait or landscape but must **fill
  the screen** as the pose changes; keep **text and control sizes consistent** across resizes;
  prefer **changing the aspect ratio** over letter-/pillar-boxing; if bars are unavoidable, put
  **artwork in the padding** so it still feels full screen.

### Dynamic layouts
- Account for many hardware/software configurations: layout margins + safe-area insets, **no fixed
  widths, nothing tied to one display**. (Layout page; Apple Design Resources for margins/safe
  areas; dev: `safeAreaInsets` SwiftUI/UIKit.)

#### Reserved regions
Beyond safe areas, space is shaped by **reserved regions** — areas content avoids covering or that
components adapt around (like iPad's window controls):
- **Outer front camera** — **always present**; **expands into the Dynamic Island** for Live
  Activities; with side controls the system accounts for it automatically.
- **Inner front camera** — present **only while the camera is active**; then the **UI moves aside**
  to signal the camera.
- **Folding region** — **conditional**: when **partially open**, it splits the inner display into
  several usable regions and **excludes the centre strip** as it folds.
- System components adapt automatically: **alerts, context menus, sheets move to avoid the fold**;
  **split views adjust column widths and margins** to the inner display's symmetry. Custom
  components: `ReservedRegion` (SwiftUI) / `UIView.ReservedRegion` (UIKit).
- **should — Adapt the layout when it folds**: prefer containers that adapt automatically (e.g.
  **Notes' split view** — fully open: narrow list + wide note; partially folded: **equal halves**
  either side of the fold). In **grids, prefer an even number of columns** so content divides at
  the fold. Use `ReservedRegion` to keep important elements off the centre if the system doesn't.
- **must — Avoid extreme layout changes while folding**: move only what's needed to stay visible
  and tappable; controls that vanish or jump are hard to find — **small adjustments over
  rearrangement**.

#### Split views
Expand on the inner display, **collapse to a single pane** on the outer display (same as
regular ↔ compact on other iPhones); standard split views adapt to reserved regions (width,
margins) automatically. (Split views page; dev: `NavigationSplitView`, `UISplitViewController`.)

#### Arrangement views
- An **arrangement view** is a container holding a **primary** and a **secondary** view and laying
  them out by display size, orientation and reserved regions. Two types:
  - **Split** — divides the area: **side by side when wider than tall**, **stacked when taller than
    wide**.
  - **Overlay** — views on top of each other; when **partially folded** they move to **each side**;
    otherwise the **primary sits atop the secondary** (diagram: secondary fills the screen, a
    smaller bottom-aligned primary card overlays it).
- You can **limit the axes** a split uses, and **collapse the secondary** in an overlay when it
  shouldn't appear. (Dev: `ArrangementView`, `UIArrangementViewController`.)
- **should — Use an arrangement view when the layout already resembles one**: HStack/VStack →
  split; ZStack → overlay.
- **must — Keep navigation outside arrangement views**: they lay out content but don't navigate;
  put navigation split views and tab views **around** them, not inside.

### Vertical controls
- Toolbars, tab bars and navigation controls normally at top/bottom **move to the side**,
  preserving vertical space and keeping controls **within reach**. **Exception: inner display in
  portrait** keeps standard horizontal bars (enough height).
- Side column contains system + app elements, top → bottom: **Dynamic Island, status bar, toolbar
  (incl. navigation buttons), tab bar**.
- In **Split View multitasking** on the inner display, **each app puts its controls along its
  outer edge** (left app → controls on the left).
- Side controls are **aligned to the hardware**: same position relative to the outer camera, and
  **same side even in right-to-left languages**.
- **must — Account for asymmetry**: controls sit on one edge, so content space is asymmetric; use
  **safe areas** so controls (including another app's on the opposite edge) never cover content.
- **must — Keep controls consistent across poses**: not every pose puts controls on the side and
  space varies — keep **relative positions as similar as possible** so people don't relearn.
- **should — Standard placement order**: top of the vertical axis = **primary navigation** (Back,
  Close), then **prominent actions** (Done); keep other items in their original groups; the system
  inserts **vertical space between items from the former top and bottom bars** to keep them
  distinct.
- **should — Prioritise frequent items**: items **overflow from bottom to top** by default; set a
  **visibility priority** per group, then per item, to change it
  (`ToolbarItemVisibilityPriority` / `UIBarButtonItemVisibilityPriority`). Keep frequent actions
  (Compose in Mail, New Note in Notes) and **status-bearing items (badges)** visible longest.
- **should not — Override default bar placement** in general: side controls are a **core iPhone
  Duo pattern**; familiar positions help people learn apps immediately.
- **may — Use the full display width** for bar-less, visual, **non-scrolling** interfaces, provided
  nothing conflicts with the Dynamic Island/status bar — e.g. **Calculator** fills the width (iPhone
  16 portrait: 4 columns × 5 rows of buttons; iPhone Duo outer display: **5 columns × 4 rows**). Or
  mix: full-width background/header with inset scrollable content.
- **should — Group related toolbar items** (`ToolbarItemGroup` / `UIBarButtonItemGroup`) instead of
  manual spacing — groups add spacing and adapt to space automatically. (→ Toolbars)
- **should — Keep controls near the content they affect**: controls belonging to a non-trailing
  content area stay with that area. E.g. **Mail**: list controls stay **above the leading pane**;
  email controls go **vertically on the trailing edge**.
- **must — Give every non-text toolbar item both a title and a symbol**: the system chooses the
  representation; titles appear in **overflow menus and expanded forms**. (`Label`,
  `UIBarButtonItem`)
- **should — Minimise text-only buttons**: text labels stay in a horizontal bar; prefer symbols.
- **should — When space is short, keep the toolbar *or* the tab bar depending on the view**:
  - **Navigation-focused** views → toolbar items go to the **overflow menu**, tab bar and
    destinations stay (**default** compression).
  - **Task-oriented** views → **minimise the tab bar** (collapses to a single control) and keep the
    task's toolbar actions (mirrors the minimised tab bar on other iPhones).
    (`ToolbarVerticalCompressionBehavior` / `UIVerticalBarCompressionBehavior`)
- **must — Use the system overflow menu**: move your own overflow actions into it so everything is
  in one place; **reserve the ellipsis (…) symbol for overflow**; other menus get a distinct symbol.
  (`ToolbarOverflowMenu` / `additionalOverflowItems`)

### Resources listed
Related: Apple Design Resources (iOS), Screenshot specifications, Designing for iOS, Layout.
Developer documentation: Preparing your app for iPhone Duo, ReservedRegion, UIView.ReservedRegion,
ArrangementView, UIArrangementViewController. Videos (Tech Talks): *Design for iPhone Duo*
(111466), *Raise the bar with iPhone Duo* (111462), *Strike a pose with adaptive layouts on iPhone
Duo* (111463).

## Specs & values
- Size classes: outer = **compact width**, inner = **regular width**; inner portrait keeps
  horizontal bars.
- Calculator example: 5 × 4 button grid on the outer display vs 4 × 5 on iPhone 16.
- Grids: even column counts on the inner display (fold falls between columns).
- Toolbar overflow order: bottom → top by default.

## Visual notes (from screenshots)
- **(from screenshot)** A **grey rounded "latest change" banner** sits **above the page title**
  (`#F5F5F7`, ~18px radius): date "September 9, 2026" in grey semibold, then the change text —
  Apple surfaces a brand-new page's change-log entry at the top.
- **(from screenshot)** **Image tabs**: plain text tabs ("Outer display | Inner display", "Fully
  open | Partially folded", "Split arrangement | Overlay arrangement") with a **thin dark underline
  under the active tab** and grey inactive labels, sitting on a light full-width hairline — switch
  the illustration below without changing the page.
- **(from screenshot)** Home Screen, outer display: portrait-ish wide device, widgets (Weather,
  Calendar) top, 4-column app grid, and the **Dock as a vertical glass column on the right edge**
  (Phone, Safari, Messages, Music) under the corner camera, with the time "9:41" and Wi-Fi stacked
  vertically beneath the camera; Search button bottom-right. Inner display (landscape): two app
  columns sets, vertical Dock on the right, status top-right.
- **(from screenshot)** Anatomy diagrams: outer — **hinge** as a grey bar on the **left** edge,
  camera at **top-right corner**; inner — **hinge** as a light-blue **vertical band in the centre**,
  camera near the top in the **right half**.
- **(from screenshot)** Six pose icons: closed portrait; standing tent; flat open landscape; book
  (partially folded, open like a book); open portrait (tall); laptop-like partially folded.
- **(from screenshot)** Mail outer: email content with a **vertical glass toolbar on the right** —
  back chevron, up/down pair (grouped), then lower group trash / folder / reply, and compose apart
  at the bottom. Mail inner: **Inbox list on the leading pane with its own controls at the top of
  that pane** (sidebar, filter, more) and search at the bottom of the list; email on the trailing
  pane with the **vertical toolbar on the trailing edge** (compose, then reply / reply-all /
  forward / trash / folder).
- **(from screenshot)** Notes: fully open — narrow list pane (~⅓) + wide note; partially folded —
  **equal halves**, content avoids the fold; vertical toolbar on the right (expand, share, more;
  then checklist, attach, markup, compose).
- **(from screenshot)** Reserved-region diagrams: outer camera region as a dark dot top-right;
  inner camera region as a **light-blue halo** around the camera; folding region as a **light-blue
  centre band**.
- **(from screenshot)** Arrangement diagrams: split — **lavender primary** (leading) + **light-blue
  secondary** (trailing); overlay — light-blue secondary full screen with a **smaller rounded
  lavender primary card, bottom-centred**, purple border.
- **(from screenshot)** Vertical-controls diagram (outer display): trailing edge top → bottom —
  Dynamic Island (camera), status bar (9:41 + Wi-Fi), toolbar (back chevron, ellipsis) in a glass
  capsule, empty middle, **tab bar at the bottom** (three items: photos, stack, search) in a glass
  capsule.
- Pending (not yet received): Split View multitasking diagram, Calculator comparison, Mail with
  tinted panes, toolbar-/tab-bar-compressed diagrams, video thumbnails.

## Web translation
Browsers expose foldables and wide-short viewports too; the lessons generalise to responsive UI.

| iPhone Duo guidance | Web equivalent |
|---|---|
| One resizable layout, expand don't reinvent | Container queries + fluid grids; the same components grow; avoid device-specific templates. Test at "wide & short" sizes (e.g. 700×420) as well as tall ones. |
| Folding region / dual displays | Viewport Segments: `@media (horizontal-viewport-segments: 2)` and `env(viewport-segment-width 0 0)` etc. to place panes on either side of the fold; keep interactive elements off the fold. |
| Even columns on the inner display | Use even column counts (2/4/6) on two-segment/tablet layouts so the gutter aligns with the fold/centre. |
| Side controls on wide-short screens | In landscape phones / short viewports (`(max-height: 500px) and (orientation: landscape)`), turn the bottom tab bar and top toolbar into a **vertical navigation rail** on one edge; keep content full height. Use logical properties but keep the rail hardware-/layout-anchored consistently. |
| Controls consistent across sizes | Keep the relative order and grouping of actions identical between breakpoints; don't reshuffle toolbars. |
| Toolbar placement order | Back/Close first, then the primary action (Done/Save), then grouped secondary actions. |
| Visibility priority & overflow | "Priority+" toolbars: actions carry a priority; lowest-priority ones collapse into one "…" overflow menu first; frequent and badge-bearing actions stay visible; reserve "…" exclusively for overflow. |
| Title + symbol per action | Icon buttons always have an accessible name (`aria-label`) and a visible label in overflow menus/tooltips; minimise text-only buttons in compact toolbars. |
| Controls near their content | Pane-specific actions live in that pane's header, not in a global toolbar. |
| Split view collapses to one pane | List + detail side by side at regular width, single pane with navigation at compact width — same state, same data. |
| Arrangement split/overlay | Two-region layouts that switch between side-by-side, stacked, and overlay (bottom sheet/card over content) based on the container's aspect ratio; keep routing/navigation outside these layout wrappers. |
| Navigation-focused vs task-focused compression | On small screens, navigation apps keep the tab bar and hide toolbar actions in overflow; task screens (editor, checkout) hide/minimise global navigation and keep task actions. |
| Full-width immersive layouts | Visual, non-scrolling screens may go edge to edge as long as they avoid safe-area insets (notch/Dynamic Island). |
| Avoid extreme changes on resize | Animate small repositioning; never make controls disappear or jump across the screen on resize. |

## Checklist
- [ ] Same layout expands from compact to regular without a separate design?
- [ ] No fixed widths; safe areas/reserved regions (fold, camera) respected?
- [ ] Functionality and state identical on every size/pose?
- [ ] Wide-short screens use a side rail; control order consistent across sizes?
- [ ] Toolbar: Back/Close first, primary next, groups intact, priorities set, single "…" overflow?
- [ ] Every icon action has a title/label; few text-only buttons?
- [ ] Pane controls sit with their pane?
- [ ] Right compression choice (navigation vs task) when space is short?
- [ ] Even-column grids at two-pane widths; nothing interactive on the fold?

## Related (ingestion status)
Layout (size classes), Split views, Toolbars, Tab bars, Designing for iOS (✓), Designing for games
(✓), Live Activities — not yet ingested (except ✓).
