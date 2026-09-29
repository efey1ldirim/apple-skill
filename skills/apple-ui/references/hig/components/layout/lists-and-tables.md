# Lists and tables
Source: https://developer.apple.com/design/human-interface-guidelines/lists-and-tables · Section: Components › Layout and organization · Supported platforms: all six on the platform strip (specific guidance for iOS/iPadOS/visionOS, macOS, tvOS, watchOS) · Ingested: 2026-09-29 · Apple last updated: 2023-06-21 (updated to include guidance for visionOS). Change log: **2023-06-21** visionOS · **2023-06-05** watchOS 10 changes; both rows read from the fetch (the screenshots stop before the change log). One DocC fetch, read in full. 6 screenshots (light-mode page, hero → the top of the Videos list) were compared with the fetched text and image alt text line by line: everything matches; the six screenshots are contiguous. **The video title and link, and the change-log rows, were read from the fetch only.** Text that exists only inside pictures (hero and the two list illustrations) is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
Lists and tables show **data as rows in one or more columns**: prefer them **for text** (a collection for images or widely varying sizes), keep **row text short**, choose a **style and row layout that match the data and the platform**, give **selection feedback that fits the task** (persistent highlight for navigation, brief highlight + checkmark for options), and use **info button vs disclosure indicator correctly**. Multicolumn tables add **sortable, resizable columns**; hierarchies want an **outline view**.

## Rules

### Framing (intro)
- A table or list can represent data **organised in groups or hierarchies** and support **selecting, adding, deleting and reordering**. Apps and games on **all platforms** can use tables for content and options.
- Many apps use **lists to express an information hierarchy** and help people navigate it (iOS **Settings** is a hierarchy of lists); several apps, such as **Mail on iPadOS and macOS**, use a **table within a split view**.
- For **complex data** people use a **multicolumn table or spreadsheet**: productivity apps show characteristics of the data in **separate, sortable columns**.

### Best practices
- **should** **Prefer lists or tables for text.** A table can hold any content, but the **row format is best for scanning and reading text**. For items that **vary widely in size**, or **many images**, consider a **collection**.
- **should** **Let people edit a table when it makes sense.** People like to **reorder** a list even if they can't add or remove items. In **iOS and iPadOS** people must enter an **edit mode** before selecting table items.
- **should** **Give appropriate feedback on selection**, depending on whether selecting **reveals a new view** or **toggles the item's state**:
  - a table that helps people **navigate a hierarchy** **persistently highlights the selected row** to show the path;
  - a table that **lists options** highlights a row **only briefly**, then adds an **image such as a checkmark** to show the item is selected.

### Content
- **should** **Keep item text succinct** so rows are comfortable to read (less truncation and wrapping, easier scanning). If each item has a lot of text, avoid over-large rows: e.g. **list titles only** and reveal the content in a **detail view**.
- **should** **Preserve readability of text that may be clipped or truncated.** When a table is narrow (e.g. people can vary its width) content must stay recognisable; an **ellipsis in the middle** can help because it keeps **both the beginning and the end**.
- **should** **Use descriptive column headings in a multicolumn table:** **nouns or short noun phrases**, **title-style capitalisation**, **no ending punctuation**. In a **single-column** table without a heading, use a **label or header** for context.

### Style
- **should** **Choose a table or list style that fits the data and the platform.** Some styles carry grouping/hierarchy cues: iOS/iPadOS **grouped** style uses **headers, footers and extra space** between groups; watchOS **elliptical** style makes items look like they **roll off a rounded surface** while scrolling; macOS **bordered** style uses **alternating row backgrounds** for large tables (developer: `ListStyle`).
- **should** **Choose a row style that fits the information**, e.g. a **small image at the leading end followed by a brief label**; platforms provide built-in row layouts (`UIListContentConfiguration` on iOS, iPadOS, tvOS).

### Platform considerations
#### iOS, iPadOS, visionOS
- **should** **Use an info button only to reveal more information about a row's content.** An info button (a **detail disclosure button** in a row) **doesn't support navigation** through a hierarchy. To let people **drill into a row's subviews**, use a **disclosure indicator** accessory (`UITableViewCell.AccessoryType.disclosureIndicator`).
  - Info button in a row: **shows details about the item; doesn't navigate.**
  - Disclosure indicator in a row: **reveals the next level in the hierarchy; doesn't show details.**
- **should not** **Add an index to a table that shows controls such as disclosure indicators at the trailing end of its rows.** An **index** (often the alphabet, vertical, at the trailing side) lets people jump to a section; because **both the index and trailing controls sit on the trailing side**, it is hard to use one **without activating the other**.
#### macOS
- **should** **Let people sort by clicking a column heading when it adds value**; clicking the heading of an already-sorted column **re-sorts in the opposite direction**.
- **should** **Let people resize columns**, since data widths vary; resizing helps them focus on different areas or reveal clipped data.
- **should** **Consider alternating row colours in a multicolumn table** to help track values across columns, especially in a wide table.
- **should** **Use an outline view rather than a table view for hierarchical data.** An outline view looks like a table but has **disclosure triangles** for nested levels (e.g. folders and their contents).
#### tvOS
- **should** **Check that images near a table still look good** when a row **highlights and grows slightly on focus**; a focused row's **corners may become rounded**, which can affect adjacent images. Account for it when preparing images and **don't add your own rounding masks**.
#### watchOS
- **should** **Limit the number of rows when possible.** Short lists scan easily, but people sometimes expect long ones (e.g. many subscribed podcasts; they may think something is wrong if items are missing). Make a long list manageable by **listing the most relevant items and a way to see more**.
- **should** **Keep detail views short if you want vertical page-based navigation.** People can swipe **vertically between the details of different rows** without returning to the list, but only if detail views **don't scroll**.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Use for | text and options in rows; hierarchies via lists; complex data via multicolumn tables |
| Not for | widely varying item sizes or many images → collection |
| Editing | reorder even without add/remove; iOS/iPadOS need an edit mode before selecting rows |
| Selection feedback | navigation table → persistent highlight; options table → brief highlight then checkmark |
| Row text | succinct; titles only + detail view for long text; middle ellipsis to keep both ends |
| Column headings | nouns/short noun phrases, title-style capitalisation, no ending punctuation; single-column without heading → label/header |
| Styles | iOS/iPadOS grouped (headers, footers, spacing) · watchOS elliptical · macOS bordered (alternating rows) |
| Row layout | leading small image + brief label; built-in row APIs |
| Trailing accessories (iOS/iPadOS/visionOS) | info button (details, no navigation) vs disclosure indicator (next level); no alphabet index alongside trailing controls |
| macOS | click heading to sort, click again to reverse · resizable columns · alternating row colours · outline view for hierarchy |
| tvOS | row grows and rounds on focus; don't add your own corner masks; check adjacent images |
| watchOS | few rows + "view more"; short detail views to allow vertical page navigation |
| Developer docs | SwiftUI `List`, `Tables` · UIKit `UITableView` · AppKit `NSTableView` · `ListStyle`, `UIListContentConfiguration` |
| Related HIG pages | Collections ✓ · Outline views ✓ · Layout ✓ · Split views ✓ |
| Video | *Stacks, Grids, and Outlines in SwiftUI* (WWDC20 10031) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a white rounded **grouped table**: header text **"Grouped Table View Header"** above, three rows **"Table Row 1 / 2 / 3"** each with a trailing **chevron** and hairline separators that start at the text, and **"Grouped Table View Footer"** below **(from screenshot)**. It shows the iOS grouped style: section header and footer outside the rounded group.
- **Info button vs disclosure indicator (catalog `lists-and-tables-01`):** two grouped lists on a pale grey background, each a white rounded block with three rows titled **"Title"** and hairlines between. Left: an **info button** (a blue outlined circled "i") at the trailing end of each row. Right: each row also shows grey **"Detail"** text and a light grey **right-pointing chevron**. The blue "i" is an **action colour**; the chevron is **muted** (secondary), matching their roles: the button acts, the chevron is only a cue **(from screenshot)**.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Lists and tables · Best practices · Content · Style · Platform considerations · Resources · Change log. The side navigation highlights **Lists and tables** in the Layout group after Labels. The last screenshot shows the top of the video thumbnail (a laptop on a dark card).
- The fetch script found **1 comparison**: `lists-and-tables-01` (info button vs disclosure indicator). Catalog total is now **111**; existing ids unchanged. No ✗/✓ pairs. Nothing is measured.
- **Text that is not in the fetch:** the hero's header/row/footer strings and the "Title"/"Detail" strings in the two lists, plus the chrome above.

## Web translation
Web equivalents: **`<ul>/<ol>` lists** (settings, menus, navigation lists, feeds), **`<table>`** for multicolumn data, **data grids**, and **grouped settings lists**. Apple's platform-specific rules (index, tvOS focus, watchOS paging, macOS column resize) each have a web reading.

| HIG rule | Web implementation |
|---|---|
| Prefer lists/tables for text | Text and records → `<ul>`/`<table>`; a **card grid only** for images or widely varying sizes (`collections.md`). Tabular data always gets a real **`<table>`** with `<caption>` or `aria-labelledby`, `<thead>`/`<th scope="col">`, and row headers where a row has a key column (`<th scope="row">`). Lists of navigable items use links; lists of options use radio/checkbox semantics. |
| Edit when it makes sense | **Reorder** with drag handles **plus** keyboard/button alternatives (Move up/down); **select** with checkboxes revealed in an **Edit/Select mode** (iOS-style) or on hover/focus (desktop); bulk actions bar with count ("3 selected") and Undo for deletes (`drag-and-drop.md`, `undo-and-redo.md`). |
| Selection feedback | **Navigation lists** (master-detail, sidebar, folder trees): the selected row stays **persistently highlighted** (`aria-current="page"`/`aria-selected="true"`, tone + non-colour cue). **Option lists** (choose one/many): brief pressed/hover highlight, then a **checkmark** at the row's trailing (or leading) end; `role="radio"/"checkbox"` or `<input>` inside the row, `aria-checked`. Whole row is the target (≥ 44 px). |
| Short row text, readability when truncated | Keep row titles brief; long text lives in a detail view/expander. Truncate with `text-overflow: ellipsis` and a full-text tooltip (hover **and** focus), or **middle truncation** for file names/IDs (CSS can't; use a small helper that keeps the start and the extension/end: "Quarterly-rep…final.pdf"). Let rows wrap for accessibility rather than clip when zoomed (`typography.md`). |
| Column headings | Nouns or short noun phrases, **no ending punctuation**. Apple specifies **title-style capitalisation** for column headings; Nonplo's copy convention and `writing.md` default to **sentence case** for UI text. **Flagged difference:** there is no field-note rule about column headings, so keep **one convention per product** (sentence case is our default, Apple-style products use Title Case) and never mix them. In a single-column list without headings, give a section header or `aria-label`. |
| Styles: grouped, elliptical, bordered | **Grouped** = the field-note Settings list: rounded group, hairlines starting at the text, optional section **header above** and **footnote below** the group (`field-notes/components.md` § Group), for settings and option lists on any screen size. **Bordered/alternating rows** (macOS) = zebra striping for wide data tables (`tr:nth-child(even)` in a subtle tone that keeps 4.5 : 1 for text, plus a hover/selected state that is clearly different). **Elliptical** (watchOS) has no web equivalent; use a short scrolling list with fade edges at most. |
| Row style: leading image + label | Row grid: **icon or thumbnail** (about 28–40 px, CONV; `icons.md`/`image-views.md`) → title (+ secondary line, `labels.md` levels) → optional value → trailing control. Keep alignment identical in every row. |
| Info button vs disclosure indicator | **ⓘ info button** = a `<button>` with `aria-label="Details for {item}"` that opens a **popover/sheet/inline expansion**; it never navigates. **Chevron (disclosure indicator)** = the row is a **link** to the next level; the chevron is decorative (`aria-hidden`), trailing, in a **muted colour** (secondary), optionally preceded by a value ("Detail"). Don't put both on the same row for the same purpose; don't make a navigating row's chevron a separate button. |
| No index next to trailing controls | An **alphabet jump rail** (A–Z) on the trailing side clashes with trailing chevrons/⋯ buttons (mis-taps on touch). Put the index on the **opposite (leading) side**, make it a **sticky sidebar for desktop**, or replace it with **search/filter** (`searching.md`); if kept, give the rail its own gutter and ≥ 44 px targets. |
| macOS: click heading to sort | Sortable headings are **`<button>`s inside `<th aria-sort="ascending|descending|none">`**; clicking cycles ascending → descending (and back), clicking an already-sorted column **reverses** it; show a **chevron/arrow** in the header, announce the change politely ("Sorted by Name, ascending"), keep the current sort in the URL, and provide a stable secondary sort. Only make columns sortable where it helps (`aria-sort` only on the sorted column). |
| macOS: resizable columns | A **drag handle** (`role="separator"`, keyboard **← →** resizing, double-click to auto-fit), minimum widths, persisted widths; long cells truncate with tooltip; a sticky header and a sticky first column for wide tables (`column-views.md`). |
| Outline for hierarchy | For nested data use a **tree table/outline**: `role="treegrid"` (or a tree) with `aria-level`/`aria-expanded`, chevrons at the leading edge (`disclosure-controls.md`); don't fake hierarchy with indentation in a plain table. |
| Responsive tables | On narrow screens **don't just shrink**: switch a wide table to **stacked label/value rows** or a **card list**, or allow **horizontal scroll with a sticky first column** and a visible scroll cue; keep row actions reachable; test at 320 px and 200 % zoom (Layout gate). |
| Long lists | Paginate or **virtualise** (`aria-rowcount`/`aria-rowindex`, `aria-setsize`/`aria-posinset`), keep keyboard navigation and find-in-page working, preserve scroll and selection on refresh; empty state with the next action; loading skeleton rows (`loading.md`). |
| tvOS: focus grows and rounds | For 10-foot UIs: focused row scales slightly with a clear border/shadow and **rounded corners**; don't hard-code masks on adjacent images; keep one focus at a time (`designing-for-tvos.md`). |
| watchOS: fewer rows, page navigation | On glanceable surfaces show the **most relevant few rows** plus **"View all/More"**; keep detail views short so people can step between items (Next/Previous) without going back to the list. |
| Accessibility | Semantic list/table roles; row and column headers associated; focus ring on the row; keyboard: ↑/↓ move rows, Space toggles selection, Enter activates, Home/End; `aria-selected`/`aria-checked` reflect state; don't rely on colour alone for selected/sorted; sufficient contrast for stripes and hairlines. |

Field-note cross-links:
- `field-notes/components.md` § Settings list (Group/Row): the **grouped list** is Apple's iOS grouped style; hairlines start at the text, controls sit on the trailing side, footnote under the group. **Compatible**; this page adds the info-button/disclosure-indicator distinction and selection-feedback rules.
- `field-notes/principles.md` § 3 "Groups, not cards": lists are one soft group with hairlines, not one card per row; `anti-patterns.md`: "each option in its own bordered box".
- `hig/foundations/color.md` (CRITICAL) and `typography.md` (CRITICAL): zebra contrast, highlight tones, row text sizes; `layout.md` (CRITICAL): row heights ≥ 44 px, margins, responsive reflow.
- `hig/components/layout/collections.md` (✓): choose collection vs list; `column-views.md`, `disclosure-controls.md`, `labels.md`: neighbouring components; `hig/patterns/searching.md`, `drag-and-drop.md`, `undo-and-redo.md`, `loading.md`, `feedback.md`.
- `hig/patterns/settings.md` and `entering-data.md`: settings lists and option lists.
- `hig/foundations/writing.md`: column heading and row copy (with the capitalisation difference flagged above).
- No conflict with a field note apart from the flagged column-heading capitalisation, which the field notes don't cover.

## Checklist
- [ ] Text and records are in a list or `<table>`; card grids are used only for images or widely varying sizes.
- [ ] Tables have a caption, `<th scope>` headers and `aria-sort` on sortable columns; sortable headings are buttons that reverse on repeat click; the sort is announced and kept in the URL.
- [ ] Row text is short; long text goes to a detail view; truncation keeps the meaningful ends (middle ellipsis for names/IDs) with a full-text tooltip on hover and focus.
- [ ] Navigation lists keep the selected row highlighted (`aria-current`); option lists show a brief highlight then a checkmark; whole rows are ≥ 44 px targets.
- [ ] ⓘ buttons only show details (popover/sheet); chevron rows are links to the next level; the chevron is decorative and muted.
- [ ] No alphabet index shares the trailing edge with row controls (move it, or use search).
- [ ] Reordering and selection have keyboard/button alternatives, a select mode with a count, and Undo for deletes.
- [ ] Wide tables offer resizable columns, sticky header/first column and zebra striping that keeps 4.5 : 1; at narrow widths they stack or scroll with a cue.
- [ ] Hierarchies use a tree/treegrid with `aria-expanded`/`aria-level`; long lists are paginated or virtualised with correct `aria-*` counts.
- [ ] Column headings are nouns without punctuation and one capitalisation convention is used across the product.
- [ ] Layout, Color and Typography gates pass on list and table screens.

## Related
- Ingested: Collections (✓), Column views (✓), Disclosure controls (✓), Labels (✓), Boxes (✓), Layout (✓ CRITICAL), Color (✓ CRITICAL), Typography (✓ CRITICAL), Settings (✓), Searching (✓), Drag and drop (✓), Undo and redo (✓), Loading (✓), Feedback (✓ CRITICAL), Writing (✓).
- Ingested since: Outline views (✓ `outline-views.md`), Split views (✓ `split-views.md`).
- Developer docs and video: see Specs & values.
