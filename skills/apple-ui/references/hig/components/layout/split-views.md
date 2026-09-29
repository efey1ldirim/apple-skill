# Split views
Source: https://developer.apple.com/design/human-interface-guidelines/split-views · Section: Components › Layout and organization · Supported platforms: all six on the platform strip (specific guidance for iOS, iPadOS, macOS, tvOS, visionOS, watchOS) · Ingested: 2026-09-29 · Apple last updated: 2025-06-09 (added iOS and iPadOS platform considerations). Change log: **2025-06-09** iOS and iPadOS · **2023-12-05** visionOS · **2023-06-05** watchOS; the three rows were read from the fetch (the screenshots stop at the Videos heading). One DocC fetch, read in full. 9 screenshots (light-mode page, hero → the top of the Videos list) were compared with the fetched text and image alt text line by line: everything matches; the nine screenshots are contiguous. **The video title and link, and the change-log rows, were read from the fetch only.** Text that exists only inside pictures (hero labels, the watch screen) is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page's numbers are the one-point divider and the tvOS one-third / two-thirds split.

## In one line
A split view shows **several adjacent panes at once**, usually **levels of a hierarchy** (primary → secondary → optional tertiary) so that **choosing an item in one pane fills the next**. **Persistently highlight the selection** in every pane that leads to the detail, let people **drag between panes**, and adapt per platform: **regular width only on iPhone**, **fluid widths on iPad**, **resizable/hideable panes and a thin divider on Mac**, **balanced 1/3–2/3 layout with one title on tvOS**, **prefer it over a new window on visionOS**, **full-screen list or detail on watchOS**.

## Rules

### Framing (intro)
- A split view **manages several adjacent panes**, each holding **tables, collections, images or custom views**.
- **Typical use:** show **several levels of the app's hierarchy at once** and support **navigation between them**: selecting an item in the **primary pane** shows its contents in the **secondary pane**; a **tertiary pane** appears if secondary-pane items have more content.
- Common use: a **sidebar** for navigation, where the **leading pane** lists top-level items or collections and the **secondary and optional tertiary panes** show child collections and item details.
- **Rare use:** groups of **supplementary functionality**, e.g. **Keynote on macOS** uses panes for the **slide navigator, presenter notes and inspector** around the **main slide canvas**.

### Best practices
- **should** **Persistently highlight the current selection in each pane that leads to the detail view.** The selected look clarifies how the panes relate and helps people **stay oriented**.
- **may** **Let people drag and drop content between panes.** With several hierarchy levels reachable, dragging items to another pane moves content between parts of the app (see Drag and drop).

### Platform considerations
#### iOS
- **should** **Prefer a split view in a regular, not a compact, environment.** Multiple panes need **horizontal space**; on a **compact** environment such as **iPhone in portrait**, showing several panes forces **wrapping or truncation**, making content **less legible and harder to use**.
#### iPadOS
- A split view can have **two vertical panes** (like **Mail**) or **three** (like **Keynote**).
- **should** **Account for narrow, compact and intermediate window widths.** iPad windows are **fluidly resizable**, so design the layout at **multiple widths** and make sure people can **navigate between panes in a logical way** (see Layout; developer: `NavigationSplitView`, `UISplitViewController`).
#### macOS
- Panes can be arranged **vertically, horizontally or both**; **dividers between panes can be dragged to resize** them (developer: `VSplitView`, `HSplitView`). Three arrangements shown: **Vertical** (two panes stacked), **Horizontal** (two side by side, narrower left and wider right), **Multiple** (three panes split both ways).
- **should** **Set reasonable minimum and maximum pane sizes.** If panes are resizable, pick sizes that **keep the divider visible**: if a pane gets too small the divider can **seem to disappear** and be hard to use.
- **may** **Let people hide a pane when it makes sense**, e.g. an **editing area**: hide other panes to reduce distraction or give room (Keynote lets people hide the **navigator and presenter-notes** panes).
- **should** **Provide multiple ways to reveal hidden panes**: e.g. a **toolbar button** or a **menu command with a keyboard shortcut**.
- **should** **Prefer the thin divider style.** It is **one point wide**, leaving maximum space for content yet easy to use. Avoid thicker styles **unless there's a specific need**; e.g. if both sides of the divider show **table rows with strong linear elements** that make a thin divider hard to see, a **thicker divider** may help (`NSSplitView.DividerStyle`).
#### tvOS
- A split view works well to **filter content**: choosing a **filter category in the primary pane** shows the **results in the secondary pane**.
- **should** **Choose a layout that keeps panes balanced.** By default: **one third of the screen width for the primary pane and two thirds for the secondary**; a **half-and-half** layout is also possible.
- **should** **Show a single title above the split view** so people understand the content as a whole; they already know how to navigate and filter, so **don't title each pane**.
- **should** **Align the title by the secondary pane's content**: a **content collection** → **centre the title in the window**; a **single main view of important content** → place the title **above the primary view** to give the content more room.
#### visionOS
- **should** **To show supplementary information, prefer a split view over opening a new window.** It gives convenient access **without leaving the current context**; a new window may **confuse people navigating or repositioning content** and forces you to **manage relationships between views**. For a **small request or simple task** to finish before returning, use a **sheet**.
#### watchOS
- The split view shows **either the list or a detail view as a full-screen view**.
- **should** **Automatically show the most relevant detail view** at launch (information relevant to **location, time or recent actions**).
- **should** **If there are several detail pages, put them in a vertical tab view**: people use the **Digital Crown** to scroll between tabs, and watchOS shows a **page indicator** beside the Crown with the **number of tabs and the selected one**.

## Specs & values
| Item | Value |
|---|---|
| Panes | primary · secondary · optional tertiary (sidebar/list → content → details/inspector) |
| Selection | persistently highlighted in every pane that leads to the detail |
| Drag and drop | between panes, where useful |
| iOS | regular width only; avoid compact (iPhone portrait) |
| iPadOS | 2 or 3 vertical panes; design for narrow, compact and intermediate window widths; logical navigation between panes |
| macOS layouts | vertical · horizontal · multiple (both); draggable dividers |
| macOS divider | **thin = 1 point wide** (preferred); thicker only for a specific need; keep it visible through min/max pane sizes |
| macOS hiding | allow hiding panes; reveal via toolbar button and menu command + keyboard shortcut |
| tvOS default split | **1/3 primary : 2/3 secondary**, or **1/2 : 1/2**; one title above the split view; title centred for collections, above the primary view for a single main view |
| visionOS | prefer split view to a new window; sheet for small tasks |
| watchOS | full-screen list **or** detail; auto-show the most relevant detail; multiple details → vertical tab view with Digital Crown and page indicator |
| Developer docs | SwiftUI `NavigationSplitView`, `VSplitView`, `HSplitView` · UIKit `UISplitViewController` · AppKit `NSSplitViewController`, `NSSplitView.DividerStyle` |
| Related HIG pages | Sidebars (not yet ingested) · Tab bars (not yet ingested) · Layout ✓ · Drag and drop ✓ · Sheets (not yet ingested) · Tab views (not yet ingested) |
| Video | *Make your UIKit app more flexible* (WWDC25 282) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card holding a window mock-up (three traffic-light dots) divided into three vertical panes labelled **"Sidebar"**, **"Canvas"** and **"Inspector"** in monospaced type **(from screenshot)**; the sidebar is a lighter tint, the canvas has a soft shadow gradient at its leading edge, and dimension arrows mark the span of the sidebar plus canvas along the top, the sidebar's own width at the bottom-leading corner and the inspector's width at the bottom-trailing corner. A split view = navigation + main + details.
- **macOS arrangements (tabbed illustrations, catalog `split-views-01`):** the same laptop drawing in three states, panes in pale blue with thin blue dividers: **Vertical** (one horizontal divider, the upper pane taller), **Horizontal** (one vertical divider, a narrow left pane and a wide right pane), **Multiple** (a narrow left pane at full height and the right area split into a large top pane and a smaller bottom pane). The dividers are **hairlines**.
- **watchOS example:** an Apple Watch showing a list: a round list-button at the top-leading corner, the time **"10:09"** and a blue title **"Title"** at the top-trailing corner, a **"Section Header"** line, and three rounded dark rows labelled **"Item"**; a thin **page indicator** runs along the trailing edge beside the Crown, with the current position marked **(from screenshot)**.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Split views · Best practices · Platform considerations · Resources · Change log. The side navigation highlights **Split views** in the Layout group after Outline views. The last screenshot ends at the Videos heading with the top of a thumbnail.
- The fetch script found **1 comparison** (a three-tab set, all macOS): `split-views-01`. Catalog total is now **112**; existing ids unchanged. No ✗/✓ pairs. Nothing is measured.
- **Text that is not in the fetch:** the hero labels, the strings inside the watch picture and the chrome above.

## Web translation
Web equivalents: **master-detail layouts**, **sidebar + content + inspector**, **email-style 2/3-pane apps**, **IDE/file-manager splits**, **resizable panels**, and (on small screens) **drill-in navigation**. The platform rules map onto **breakpoints and input modes**.

| HIG rule | Web implementation |
|---|---|
| Several levels at once; selection fills the next pane | A CSS grid (`grid-template-columns: minmax(220px, 300px) minmax(0, 1fr) minmax(260px, 340px)`) with landmarks: primary pane `<nav>`/`<aside aria-label="Folders">`, secondary `<section>`/`<main>` list, tertiary detail `<article>`/`<aside aria-label="Details">`. Selecting in a pane **updates the next** (and the URL: `/folders/12/items/345`), so links, back button and reload keep state. Each pane scrolls independently (`overflow: auto`, `min-height: 0`). |
| Persistently highlight the selection in each pane | The selected row in **every pane on the path** stays highlighted (`aria-current="true"`/`aria-selected`), the parent panes with a softer tone and the active pane's selection stronger (as in `column-views.md`); not colour alone. The highlight survives focus moving to another pane. |
| Drag and drop between panes | Support dragging items from a list to a folder in the sidebar (`drag-and-drop.md`): drop targets highlight, keyboard/menu alternatives ("Move to…"), Undo (`undo-and-redo.md`). |
| iOS: regular, not compact | **Only show multiple panes when there's room.** Below a breakpoint (CONV: ~768 px, and use container queries for embedded layouts) **collapse to one pane at a time with push navigation** (list → detail, a visible Back button, focus moved to the new pane's heading, scroll restored on return); above it show 2 panes; above ~1100–1200 px allow 3 (CONV). Never squeeze three columns into a phone; don't truncate. |
| iPadOS: fluid widths, logical navigation | Test at many widths (`resize` between 320 and 1600 px), including **intermediate** ones where the tertiary pane becomes an **overlay/inspector drawer** or is hidden behind a toolbar toggle; navigation between panes must stay reachable by keyboard and touch; keep selection when the layout changes. Use `ResizeObserver`/container queries rather than device sniffing. |
| macOS: resizable dividers | Dividers are `role="separator"` (`aria-orientation`, `aria-valuenow/min/max`, `tabindex="0"`), draggable with `pointer` events and **keyboard resizable** (← → in steps, Shift for larger, Home/End to min/max, double-click to reset); persist pane sizes per view; vertical/horizontal/nested combinations are just nested grids/flex containers. |
| Sensible min/max, divider stays visible | Enforce `min-width`/`max-width` on panes (CONV starting points: sidebar 200–320 px, list 280–480 px, inspector 240–360 px; Apple gives none) so a pane never collapses so far that the handle **vanishes**; the **hit area** of the divider is larger than its line (8–12 px transparent padding) so it stays easy to grab even when the line is 1 px. |
| Thin divider | Draw the divider as a **1 px hairline** (`border`/`box-shadow` in the separator tone), matching Apple's one-point default, with a wider invisible hit area; use a thicker or filled handle **only** when both sides have strong lines (tables with row rules) that make a hairline hard to see, and show a hover/focus highlight on the handle. |
| Hide a pane; reveal in several ways | Toolbar **toggle buttons** for the sidebar and inspector (`aria-expanded`, `aria-controls`, icon + tooltip), a **menu item** ("Show/Hide sidebar") and a **keyboard shortcut** (CONV: ⌘/Ctrl+\\ or ⌘/Ctrl+B for the sidebar, ⌘/Ctrl+Alt+I for the inspector), collapsing with a short animation (reduced-motion safe) and remembering the state. While editing a document, offer a **focus/edit mode** that hides side panes (`going-full-screen.md`). |
| tvOS: filter → results, 1/3 : 2/3 | For 10-foot UIs: primary pane = **filter categories** (about one third), secondary = **results grid/list** (about two thirds) or half-and-half where the two panes are visually balanced; focus moves from the filter list to the results; **one page title above the whole split** (no per-pane titles); title centred over a **collection** of results, placed above the primary view for a **single main content view** (`designing-for-tvos.md`, `lockups.md`). |
| visionOS: split view over a new window | Web analogue: **prefer an in-page pane, drawer or inspector over opening a new tab or window** for supplementary information; use a **modal sheet** only for a small request or a short task to finish before returning (`modality.md`); keep context (the list stays visible while details open). |
| watchOS: full-screen list or detail; auto-detail; vertical tabs | On glanceable/very narrow surfaces show **list or detail full-screen**, open the **most relevant detail automatically** (based on time, place or recent use), and for several detail pages use **paging** (vertical or horizontal scroll-snap) with a **page indicator** showing count and position (`workouts.md`, `tab-views` not yet ingested). |
| Accessibility | Panes are landmarks with names; focus order follows visual order left → right; collapsed panes are removed from the tab order (`inert`/`hidden`); toggles announce state; resizers have `aria-valuenow` and labels ("Resize sidebar"); moving between panes on collapse moves focus to the new pane's heading; support 200 % zoom (panes stack, no clipped headings); respect `prefers-reduced-motion`. |
| Loading and empty states | Show a **named empty state** in the secondary/tertiary pane when nothing is selected ("Select a message to read it"); skeletons while loading; keep pane sizes stable while content loads (`loading.md`). |

Field-note cross-links:
- `hig/getting-started/designing-for-ipados.md`, `designing-for-macos.md`, `designing-for-tvos.md`, `designing-for-visionos.md`, `designing-for-watchos.md` (✓): the per-platform sections here are those platforms' layout expression.
- `hig/components/layout/column-views.md`, `outline-views.md`, `lists-and-tables.md`, `collections.md` (✓): the panes usually hold these components (an outline in the leading pane is the classic pairing).
- `hig/foundations/layout.md` (CRITICAL layout gate): behaviour at any window size, safe areas and resizable panes; **the responsive collapse rules are the Layout gate's "adapt to any width"**.
- `hig/patterns/drag-and-drop.md`, `undo-and-redo.md`, `multitasking.md`, `going-full-screen.md`, `modality.md`, `launching.md`: dragging between panes, resizable windows, focus mode, sheets vs panes, restoring the last selection and pane sizes.
- `field-notes/components.md` (12-column grid, `max-w-[1400px]`) and `principles.md` § 3 "Groups, not cards": panes are separated by hairlines, not nested cards; **compatible**.
- No conflict with a field note.

## Checklist
- [ ] Panes are landmarks (`nav`, `main`/`section`, `aside`) with names; selection in one pane updates the next and the URL.
- [ ] The current selection is highlighted in every pane on the path and stays so when focus moves.
- [ ] Below a compact breakpoint the layout becomes one pane at a time with a Back button, focus management and restored scroll; three panes appear only when there is room.
- [ ] Dividers are 1 px hairlines with a larger hit area, mouse and keyboard resizable (`role="separator"` with `aria-value*`), with min/max widths that keep them visible, persisted per view.
- [ ] Side panes can be hidden via toolbar toggle, menu item and keyboard shortcut; state is remembered; hidden panes leave the tab order.
- [ ] Drag between panes (where useful) has drop-target feedback, a "Move to…" alternative and Undo.
- [ ] On TV-style UIs: filter pane ≈ 1/3 and results ≈ 2/3 (or 1/2 : 1/2), one title above the split, focus flows filter → results.
- [ ] Supplementary info opens in a pane/drawer instead of a new window; sheets only for small tasks.
- [ ] On glanceable surfaces list or detail is shown full-screen, the most relevant detail opens first, multiple details use paging with an indicator.
- [ ] Empty, loading and resized states are named and stable; Layout gate passes at 320 px and 200 % zoom.

## Related
- Ingested: Layout (✓ CRITICAL), Outline views (✓), Column views (✓), Lists and tables (✓), Collections (✓), Drag and drop (✓), Undo and redo (✓), Multitasking (✓), Going full screen (✓), Modality (✓), Launching (✓), Loading (✓), Designing for iPadOS/macOS/tvOS/visionOS/watchOS (✓), Lockups (✓), Workouts (✓).
- Not yet ingested: **Sidebars**, **Tab bars**, **Tab views**, **Sheets**.
- Developer docs and video: see Specs & values.
