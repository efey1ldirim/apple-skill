# Outline views
Source: https://developer.apple.com/design/human-interface-guidelines/outline-views · Section: Components › Layout and organization · Supported platforms: **macOS only** ("Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS"; only the Mac icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 4 screenshots (light-mode page, hero → the *Stacks, Grids, and Outlines in SwiftUI* video thumbnail) were compared with the fetched text and image alt text line by line: everything matches; the four screenshots are contiguous. **The last Related link (Split views) is visible in the last screenshot; the video link URL was read from the fetch only.** Text that exists only inside the hero picture is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
An outline view is a **hierarchical table**: a scrolling list of rows and columns where **only the first column carries the hierarchy** (disclosure triangles on parents) and the other columns show attributes. Use it for **hierarchical text-based data** (a table if the data isn't hierarchical), with **sortable and resizable columns**, **expansion state remembered**, **easy expand/collapse (including all-levels)**, **middle-ellipsis truncation**, **search** for long outlines, and **single-click editing** where editing makes sense.

## Rules

### Framing (intro)
- An outline view shows **hierarchical data** in a **scrolling list of cells organised in columns and rows**.
- It has **at least one column** with the **primary hierarchical data** (parent containers and their children); you can **add columns** for supplementary attributes (sizes, modification dates). **Parent containers carry disclosure triangles** that expand to show their children.
- Example: **Finder windows** use an outline view to navigate the file system.

### Best practices
- Outline views **suit text-based content** and often appear in the **leading side of a split view**, with related content on the opposite side.
- **should** **Use a table, not an outline view, for non-hierarchical data** (see Lists and tables).
- **should** **Expose the hierarchy in the first column only.** Other columns show **attributes** of the items in the primary column.
- **should** **Use descriptive column headings.** **Nouns or short noun phrases**, **title-style capitalisation**, **no punctuation** (specifically **no trailing colon**). **Always** give column headings in a **multi-column** outline view; without a heading in a **single-column** one, provide a **label or other context**.
- **may** **Let people click column headings to sort.** Clicking sorts **ascending or descending** by that column; secondary-column sorting may happen **behind the scenes**. Clicking the **primary column heading** sorts **at each hierarchy level** (Finder: top-level folders sorted, then the items inside each folder). Clicking an **already sorted** column re-sorts folders **and their contents** in the **opposite direction**.
- **should** **Let people resize columns**, since data widths vary and wide values must be revealable.
- **should** **Make expanding and collapsing nested containers easy.** In the Finder, clicking a folder's disclosure triangle expands **only that folder**, while **Option-clicking** it expands **all its subfolders**.
- **should** **Retain people's expansion choices.** Store which levels were expanded to reach an item, so they don't have to navigate to the same place again next time.
- **may** **Use alternating row colours** in multi-column outline views to help track values across columns, especially in wide ones.
- **should** **Let people edit data when it makes sense.** In an editable cell people expect to **single-click to edit**; a cell may respond differently to a **double-click** (e.g. single-click a file name to rename, double-click to open the file). Reordering, adding and removing rows can be offered too.
- **may** **Truncate cell text with a centred (middle) ellipsis** instead of clipping: it keeps the **beginning and end**, making content more distinct and recognisable.
- **may** **Offer a search field** to find values in a **lengthy** outline view; windows whose main feature is an outline view often put the search field in the **toolbar** (see Search fields).

### Platform considerations
- **macOS:** the only supported platform. **iOS, iPadOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Structure | ≥ 1 hierarchical (primary) column + optional attribute columns; rows scroll |
| Hierarchy | only in the first column; parents have disclosure triangles |
| Typical placement | leading side of a split view, related content opposite |
| Non-hierarchical data | use a table |
| Column headings | nouns/short noun phrases · title-style capitalisation · no punctuation (no colon) · always in multi-column views · label/context in single-column ones |
| Sorting | click a heading to sort asc/desc; primary heading sorts within every level; click again to reverse; optional secondary sort behind the scenes |
| Expand/collapse | click = that container; Option-click = all descendants |
| State | remember expanded levels between sessions |
| Row colours | alternating rows (multi-column, wide) |
| Editing | single-click edits a cell; double-click may open; reorder/add/remove rows optional |
| Truncation | centred ellipsis rather than clipping |
| Search | search field in the toolbar for long outlines |
| Not supported | iOS, iPadOS, tvOS, visionOS, watchOS |
| Developer docs | SwiftUI `OutlineGroup` · AppKit `NSOutlineView` |
| Related HIG pages | Column views ✓ · Lists and tables ✓ · Split views ✓ · Search fields (not yet ingested) |
| Video | *Stacks, Grids, and Outlines in SwiftUI* (WWDC20 10031) |

## Visual notes (from screenshots)
- **Hero:** a peach-to-pink card holding a **four-column outline**: header row **Name · Date Modified · Size · Kind** with thin vertical dividers between the last three and a rule under the header. Rows **(from screenshot)**: **Folder A** (chevron **down**, expanded; 6/6/22 · 88 MB · Folder) containing **Image A** (selected: a strong red rounded row; 6/6/22 · 42 MB · PNG), **Image B** (6/5/22 · 21 MB · PNG) and **Image C** (5/12/22 · 22 MB · PNG), indented one level with picture glyphs; then **Folder B** (chevron right; 10/20/21 · 312 MB · Folder) and **Folder C** (1/2/22 · 67 MB · Folder). Dashed guides mark the **indent step**, the **disclosure column** and the **row height**. The **Size** values are **right-aligned**; dates and kinds are left-aligned; the hierarchy (chevron + folder/image glyph + name) lives only in the Name column.
- **Page chrome (from screenshot):** the platform strip lights only the **Mac** icon; the TOC reads Outline views · Best practices · Platform considerations · Resources (**no Change log**). The side navigation highlights **Outline views** in the Layout group after Lockups. The last screenshot shows the video thumbnail (a laptop on a dark card) titled *Stacks, Grids, and Outlines in SwiftUI*.
- The page has **no ✗/✓ pairs, no comparison images and no videos of its own** (fetch script run; catalog IDs unchanged, total 111). Nothing is measured.
- **Text that is not in the fetch:** the hero's column names, folder/image names, dates, sizes and kinds, and the chrome above.

## Web translation
Web equivalents: **tree tables / treegrids** (file managers, org charts with attributes, permission and category trees, CMS page trees, log/trace viewers, project/task hierarchies, nested settings). Use one **only for hierarchical data**; otherwise a plain table (`lists-and-tables.md`). It complements `disclosure-controls.md` (the triangles) and `column-views.md` (the alternative browser).

| HIG rule | Web implementation |
|---|---|
| Hierarchical data only | Nested data → **`role="treegrid"`** (tabular, with attribute columns) or **`role="tree"`** (single column); flat data → `<table>`. The DOM stays a flat sequence of rows with `aria-level`, `aria-posinset`, `aria-setsize` and `aria-expanded` on parents (the ARIA treegrid pattern), so sorting/virtualisation stay tractable. |
| Hierarchy in the first column only | The first (**Name**) cell holds indentation, the **chevron** (leading edge, `aria-hidden`; expanded points down, collapsed points inward, mirrored in RTL: `disclosure-controls.md`), the icon and the name; other cells show **attributes only** (date, size, kind, owner, status). Indent per level with a fixed step (CONV: 16–20 px); the chevron sits in a reserved gutter so labels align. |
| Descriptive column headings | `<th scope="col">` nouns/short noun phrases without punctuation or colon; **always present** in multi-column trees; a single-column tree gets a visible label/`aria-label` ("Files"). Column headings use **Title Case**, as Apple specifies (`writing.md` › Capitalisation table). |
| Sorting | Header buttons with `aria-sort`; sorting acts **within each parent** (siblings are re-ordered at every level, children stay under their parents); clicking the primary column sorts every level, clicking again reverses; secondary keys (e.g. name, then date) are used silently for ties; the current sort survives expand/collapse and is reflected in the URL; announce "Sorted by Size, descending". |
| Resizable columns | Drag handle (`role="separator"`, ← → keyboard steps, double-click to fit), min widths, persisted per view; **long cell text: middle ellipsis** (helper keeping the start and the end/extension; full text in a tooltip on hover **and** focus); numeric columns **right-aligned** with `font-variant-numeric: tabular-nums` (as the hero's Size column); sticky header and sticky first column. |
| Easy expand/collapse | Click the chevron or the row (per product) to toggle one container; **Alt/Option-click the chevron expands all descendants** (and Alt-click again collapses them); keyboard per ARIA: **→** expands (or moves to first child), **←** collapses (or moves to parent), **\*** expands all siblings, **Shift+→/←** may expand/collapse all descendants (document it); an **Expand all / Collapse all** control in the toolbar for lengthy trees. |
| Retain expansion choices | Persist the set of expanded node ids (`localStorage` keyed by view + account, or in the URL/hash for shareable state) and the sort/column widths; restore on load and re-expand the path to a deep-linked or previously selected item; drop ids that no longer exist. |
| Alternating row colours | Zebra striping for wide multi-column trees (`tr:nth-child(even)` in a subtle surface tone; striping counts visible rows only, recompute on expand/collapse), keeping 4.5 : 1 text contrast and a clearly different selected/hover state (`color.md`). |
| Editing | **Single-click on the selected row's name (or F2/Enter) starts inline rename** (input replaces the text, Enter commits, Esc cancels, live validation, `feedback.md`); **double-click/Enter on the row opens** the item; don't make single-click both select and edit (first click selects, second click on the selected name edits, as Finder does). Reorder by drag with keyboard alternatives (Move up/down/in/out), add/remove with Undo (`drag-and-drop.md`, `undo-and-redo.md`). |
| Search in long outlines | A **search/filter field in the toolbar**: filter to matches and **auto-expand their ancestors**, highlight the match, show the count ("12 results"), keep the path visible, and clear restores the previous expansion state (`searching.md`). |
| Split-view placement | The outline usually occupies the **leading pane** (a sidebar/master) with the selected item's detail on the trailing pane; on narrow screens the outline becomes a full-screen list that pushes the detail (drill-in), as for column views (`column-views.md`, Split views not yet ingested). |
| Loading and scale | **Lazy-load children** on first expand with a named spinner row (`loading.md`); **virtualise** long trees (`aria-rowcount`, `aria-rowindex`) without breaking keyboard and screen-reader navigation; keep selection and scroll when data refreshes. |
| Not on touch platforms | Apple offers no outline view on iOS/iPadOS; on touch-first web use a **disclosure list** (grouped rows with chevrons, `disclosure-controls.md`) or **drill-in** navigation instead of a dense treegrid. |
| Accessibility | ARIA treegrid keyboard model (arrows, Home/End, Enter, Space to select), visible focus ring on the row/cell, selected state not by colour alone, announce level and position ("Image A, level 2, 1 of 3, selected"), sufficient contrast for chevrons and stripes, 200 % zoom without clipping columns (horizontal scroll inside the grid with sticky first column). |

Field-note cross-links:
- `hig/components/layout/disclosure-controls.md` (✓): the triangle/chevron direction, Alt-expand, and expansion behaviour are the same pattern; `column-views.md` (✓): the alternative for deep browsing with preview.
- `hig/components/layout/lists-and-tables.md` (✓): sorting, resizing, zebra and column-heading rules are shared (macOS section); **both use Title Case for column headings (follows Apple)**.
- `hig/patterns/file-management.md` (✓), `searching.md` (✓), `drag-and-drop.md` (✓), `undo-and-redo.md` (✓), `loading.md` (✓), `feedback.md` (CRITICAL): file trees, filtering, reorder, rename undo and per-node loading states.
- `hig/foundations/color.md` (CRITICAL), `typography.md` (CRITICAL), `layout.md` (CRITICAL): stripes and selected-row contrast, tabular numerals and text sizes, resizable panes and reflow.
- `field-notes/principles.md` § 3 "Groups, not cards" and `components.md` § Settings list: trees are one group with hairlines, not a card per node; **compatible**.
- No conflict with a field note (no field-note rule on column headings); headings use Title Case.

## Checklist
- [ ] A treegrid/tree is used only for hierarchical data; flat data uses a table.
- [ ] Only the first column carries hierarchy (indent, chevron, icon, name); other columns are attributes; numeric columns are right-aligned with tabular numerals.
- [ ] Multi-column trees always have column headings (nouns in Title Case, no punctuation); single-column trees have a visible label.
- [ ] Sortable headings use `aria-sort`; sorting applies at every level; clicking again reverses; the state is announced and persisted.
- [ ] Columns are resizable by mouse and keyboard, with min widths, persisted sizes, middle-ellipsis truncation and a full-text tooltip on hover and focus.
- [ ] Expand/collapse works by click, keyboard (→ ←, `*`) and Alt-click for all descendants; Expand all/Collapse all exists for long trees.
- [ ] Expansion, selection, sort and widths are remembered and restored; deep links re-expand their path.
- [ ] Editing follows single-click/F2 rename, double-click/Enter open, with validation, Undo and keyboard alternatives for reorder.
- [ ] Search filters and auto-expands ancestors and restores the earlier expansion when cleared; children lazy-load with a named spinner; long trees are virtualised with correct `aria-*`.
- [ ] Touch-first surfaces use a disclosure list or drill-in navigation instead of a dense treegrid; Layout, Color and Typography gates pass.

## Related
- Ingested: Column views (✓), Lists and tables (✓), Disclosure controls (✓), Collections (✓), Labels (✓), File management (✓), Searching (✓), Drag and drop (✓), Undo and redo (✓), Loading (✓), Feedback (✓ CRITICAL), Layout/Color/Typography (✓ CRITICAL).
- Ingested since: Split views (✓ `split-views.md`). Not yet ingested: **Search fields**.
- Developer docs: `OutlineGroup`, `NSOutlineView`. Video: *Stacks, Grids, and Outlines in SwiftUI* (WWDC20 10031).
