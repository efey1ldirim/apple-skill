# Column views
Source: https://developer.apple.com/design/human-interface-guidelines/column-views · Section: Components › Layout and organization · Supported platforms: **macOS only** ("Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS"; on the platform strip only the Mac icon is lit **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 3 screenshots (light-mode page, hero → Developer documentation) were compared with the fetched text line by line: everything matches; the three screenshots are contiguous. The page has no Videos section. Text that exists only inside the hero picture is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
A column view (a **browser**) lets people **drill through a deep hierarchy in side-by-side columns**: root in the first column, children of the selected parent in the next, details or a preview when an item has no children, and **resizable columns**. Choose it over a list/table when people move **back and forth between levels** and **don't need sorting**.

## Rules

### Framing (intro)
- A column view, also called a **browser**, lets people **view and navigate a data hierarchy** through **a series of vertical columns**.
- Each column is **one level** of the hierarchy and holds **horizontal rows of data items**.
- A **parent** item (one with nested children) is marked with a **triangle icon**. **Selecting a parent** shows its children in the **next column**. People continue until they reach an item **with no children**, and can **navigate back up** to explore other branches.
- **Note (callout):** to manage the presentation of hierarchical content in an **iPadOS or visionOS** app, consider a **split view**.

### Best practices
- **should** **Consider a column view for a deep hierarchy** where people **often navigate back and forth between levels** and **don't need the sorting** a list or table provides. Example: the Finder offers a column view (besides icon, list and gallery views) for navigating directory structures.
- **should** **Show the root level in the first column.** People know they can **scroll back to the first column** to start again from the top.
- **should** **Consider showing information about the selected item when it has no nested items.** The Finder shows a **preview** and details such as **creation date, modification date, file type and size**.
- **should** **Let people resize columns**, especially when some item names are **too long for the default column width**.

### Platform considerations
- **macOS:** the only supported platform. **iOS, iPadOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Structure | one column per hierarchy level; rows inside each column |
| Parent marker | triangle icon (a chevron in the picture) |
| Selection | selecting a parent fills the next column with its children; a leaf shows a preview/details |
| First column | the root of the hierarchy |
| Detail for a leaf | preview + creation date, modification date, file type, size (Finder) |
| Sorting | not provided; use a list/table when sorting matters |
| Column width | resizable; needed for long names |
| Alternatives | iPadOS/visionOS: split view · lists and tables · outline views |
| Not supported | iOS, iPadOS, tvOS, visionOS, watchOS |
| Developer docs | AppKit `NSBrowser` |
| Related HIG pages | Lists and tables (not yet ingested) · Outline views (not yet ingested) · Split views (not yet ingested) |

## Visual notes (from screenshots)
- **Hero:** a pale coral card split by two vertical red rules into **three columns**. Column 1 lists **Folder A, Folder B, Folder C**, each with a folder glyph and a trailing **chevron** (parent marker); **Folder A** is highlighted with a soft filled row. Column 2 lists **Image A … Image E** with picture glyphs; **Image B** is selected with a strong solid red row and white text. Column 3 shows a **large image preview** tile, the file name **"Image B.png"**, **"Format - 42 MB"**, and an **"Information"** section with **Created · January 24, 1984** and **Modified · June 6, 2022**, key on the left and value on the right, separated by a thin rule **(from screenshot)**. The selection state cascades: parent highlight (soft) in the first column, leaf selection (strong) in the last list column.
- **Note callout:** a grey card with a dark outline and the bold word "Note" (neutral, not a warning colour).
- **Page chrome (from screenshot):** the platform strip lights only the **Mac** icon; the TOC reads Column views · Best practices · Platform considerations · Resources (**no Change log**). The side navigation highlights **Column views** (focus ring) in the Layout group, third after Boxes and Collections.
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 107). Nothing is measured.
- **Text that is not in the fetch:** the hero's labels (Folder A–C, Image A–E, Image B.png, Format - 42 MB, Information, Created, Modified and the two dates) and the chrome above.

## Web translation
Apple supports this on macOS only, but the pattern is common on **desktop web**: file and asset browsers, category or taxonomy pickers, cascading selects, CMS folder trees, Miller-column navigators, "Finder-like" data explorers. It needs **width**; on narrow screens it must become a **stack (drill-in list with a back button)** or a split view (`navigation-and-search` pages, not yet ingested).

| HIG rule | Web implementation |
|---|---|
| Deep hierarchy, back-and-forth, no sorting | Use a Miller-column browser when depth ≥ 3 and people revisit upper levels often; for flat or sortable data use a **table/list** (`collections.md`, Lists and tables), for a compact tree use an **outline/tree** with expand/collapse. |
| Column per level, parent marker | Layout: a horizontal row of columns (`display: flex; overflow-x: auto`), each column a scrollable list of rows; parents carry a **trailing chevron** (`aria-hidden` glyph) and children appear in the next column on selection. Show the **path** in a heading or breadcrumb ("Folder A › Images") so people know where they are. |
| Root in the first column | The first column is always the root and stays reachable: when the browser scrolls horizontally to keep the deepest columns in view, keep the first column **scroll-snapped/sticky at the start** or add a "Go to top" control; scrolling back reveals the root. Optionally auto-scroll so the newly opened column is fully visible. |
| Leaf → information | When the selected item has no children, the last column shows a **preview and metadata** (name, type, size, created, modified) as a definition list (`<dl>`), with actions (Open, Download, Copy link). Use `Intl.DateTimeFormat` and unit-aware sizes (`Intl.NumberFormat` with `unit`). |
| Resizable columns | A **drag handle between columns** (`role="separator" aria-orientation="vertical" aria-valuenow/min/max`, `tabindex="0"`; **← →** resize by 10–20 px steps, `Shift` for larger; double-click resets; CONV steps, Apple gives none), a sensible **min width** (~160 px) and **max width**, persisted per column/level; truncate long names with an ellipsis and reveal the full name in a **tooltip on hover and focus** (and in the leaf preview). Never fixed widths that clip names permanently. |
| Keyboard | Column browsers are tree-like: **↑ ↓** move within a column, **→** opens the selected parent and moves focus into the next column (first child), **←** returns to the parent column, **Home/End** first/last, type-ahead by name; one tab stop for the whole browser (roving tabindex / `aria-activedescendant`). Selection and focus are visible in every column (soft highlight for the **path** of selected parents, strong highlight for the **active** item, mirroring the hero). |
| Semantics | Wrap in a labelled region (`role="group"` / `aria-label="File browser"`); each column a `role="listbox"` (or `list`) labelled by its parent ("Contents of Folder A"); rows `role="option"` with `aria-selected`, parents with `aria-expanded`. Announce navigation politely ("Folder A, 3 items"). For simpler needs a `role="tree"` (outline) is a well-supported alternative (`aria-level`, `aria-setsize`, `aria-posinset`). Don't rely on colour alone for the selected path. |
| Narrow screens (no iOS/iPadOS support) | Apple offers no column view on touch platforms and points iPadOS/visionOS to a **split view**. On the web below ~768 px (CONV breakpoint) collapse to a **single visible column at a time with a Back button and breadcrumb** (drill-in stack), or a sidebar + detail split; never squeeze three columns into a phone. |
| Loading and empty states | Show a named skeleton in the column being opened (`loading.md`); an empty parent shows "This folder is empty" (with the next action), errors appear in that column with Retry (`feedback.md`); keep column heights stable while loading. |
| Drag, select, edit | Support multi-select, drag-and-drop between columns and context menus where the data is editable (`drag-and-drop.md`), with keyboard equivalents; deletions offer Undo (`undo-and-redo.md`). |
| Accessibility and zoom | Columns remain usable at 200 % zoom (horizontal scroll inside the browser, focus never lost); sufficient contrast for selected and path rows (Color gate); target rows ≥ 44 px on touch-capable desktops. |

Field-note cross-links:
- `hig/components/layout/collections.md` and `boxes.md` (✓): choose a collection for image grids, a table/list for sortable text, a column view for deep browsing; don't box each column inside another box (`field-notes/principles.md` § 3: columns are separated by hairlines, not nested cards).
- `hig/foundations/layout.md` (CRITICAL): resizable panes, minimum widths and reflow at 320 px/200 % zoom; `right-to-left.md`: column order and chevron direction mirror in RTL (the hierarchy advances in the reading direction).
- `hig/patterns/file-management.md` (✓): the Finder example: browsing and previewing files; `searching.md` for filtering; `drag-and-drop.md`, `undo-and-redo.md`; `feedback.md` and `loading.md` for per-column states.
- `field-notes/components.md` § Settings list: hairline separators and 52 px rows apply inside each column's rows.
- No conflict with a field note.

## Checklist
- [ ] Column browsing is used only for deep hierarchies with frequent back-and-forth and no sorting need; otherwise a list/table or an outline is used.
- [ ] The first column is the root and always reachable; the current path is visible (soft highlight for parents, strong for the active item, plus a breadcrumb/heading).
- [ ] Parents show a chevron and open their children in the next column; leaves show a preview and metadata with actions.
- [ ] Columns are resizable by mouse **and** keyboard (`separator` with arrow keys), have min/max widths, persist their widths, and reveal full names in a tooltip.
- [ ] Keyboard: arrows move within and between columns, → opens, ← goes back, type-ahead works; one tab stop; roles/labels per column; navigation is announced.
- [ ] Below ~768 px the browser becomes a single-column drill-in with Back and breadcrumb (or a split view); no cramped multi-column phone layouts.
- [ ] Loading, empty and error states exist per column; drag/multi-select and delete-with-Undo are supported where data is editable.
- [ ] Layout and Color gates pass; the pattern mirrors correctly in RTL.

## Related
- Ingested: Collections (✓), Boxes (✓), Layout (✓ CRITICAL), File management (✓), Searching (✓), Drag and drop (✓), Undo and redo (✓), Loading (✓), Feedback (✓ CRITICAL), Right to left (✓).
- Not yet ingested: **Lists and tables**, **Outline views**, **Split views**.
- Developer docs: `NSBrowser`.
