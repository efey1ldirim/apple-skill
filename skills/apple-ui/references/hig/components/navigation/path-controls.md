# Path controls
Source: https://developer.apple.com/design/human-interface-guidelines/path-controls · Section: Components › Navigation and search · Supported platforms: **macOS only** ("Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS"; only the Mac icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources **(from screenshot)**). One DocC fetch, read in full. 3 screenshots (light-mode page, hero → the "Developer documentation" link) were compared with the fetched text and image alt text line by line: everything matches; the three screenshots are contiguous and cover the whole page (the last one ends on the `NSPathControl` link, before the footer). **Read from the fetch only:** the dark variants of the three images and the developer-doc name (also visible in the last screenshot). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
A path control **shows where a file or folder lives in the file system** as a **linear list of icon + name** (root disk → parent folders → selected item) or as a **compact pop-up** that shows the selected item and opens a menu of the same path. It belongs **in the window body, never in a toolbar or status bar**. Mac only; on the web it is the **breadcrumb / location picker** for file-like hierarchies.

## Rules

### Framing (intro)
- A path control **displays the file-system path of a selected file or folder**.
- Example: in the Finder, **View > Show Path Bar** adds a path bar at the **bottom of the window**. It shows the path of the **selected item**, or the path of the **window's folder** when nothing is selected.
- There are **two styles**: **Standard** and **Pop up**.

### Styles
- **Standard**: a **linear list** with the **root disk, parent folders and the selected item**.
  - **Each item shows an icon and a name.**
  - When the list is **too long to fit**, the control **hides the names between the first and the last items** (the ends stay visible).
  - If you make the control **editable**, people can **drag an item onto the control** to select it and show its path there.
- **Pop up**: works like a **pop-up button** and shows **the icon and name of the selected item only**.
  - Clicking the item **opens a menu** with the **root disk, parent folders and the selected item**.
  - If you make it **editable**, the menu gets **one extra "Choose" command** for picking an item, which is then displayed in the control.
  - People can also **drag an item onto the control** to select it and show its path.

### Best practices
- **should** **Use a path control in the window body, not the window frame.** Path controls are **not intended for toolbars or status bars**. Even in the Finder the control sits **at the bottom of the window body**, not in the status bar.

### Platform considerations
- **macOS:** the only supported platform. **iOS, iPadOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Purpose | show the file-system path of the selected file/folder (or the window's folder when nothing is selected) |
| Styles | **Standard** (linear list, icon + name per item) · **Pop up** (icon + name of the selected item, menu of the path) |
| Items in the path | root disk → parent folders → selected item |
| Overflow (standard) | names **between the first and the last item are hidden** |
| Editable | standard: **drag an item onto the control**; pop up: drag **or** an extra **Choose** menu command |
| Placement | window **body** (Finder: bottom of the body); **not** toolbar, **not** status bar |
| Menu entry | View > Show Path Bar (Finder) |
| Not supported | iOS, iPadOS, tvOS, visionOS, watchOS |
| Developer docs | AppKit `NSPathControl` |
| Related HIG pages | File management ✓ · Pop-up buttons ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange rounded card. A **document icon tile** (outlined rounded square with a folded-corner page glyph) sits above a red label **"HIG Design"**. Below, three small monospaced labels — **Root Disk**, **Parent Folder**, **Selected Item** — each have a **thin vertical leader line** down to the matching item in a **pale pink standard path bar** along the bottom: a **disk glyph + "iCloud Drive"** › **folder glyph + "Documents"** › **document glyph + "HIG Design"**, with **chevron separators** between items. The image explains which path part is which; the last item is the selected one **(from screenshot)**.
- **Style pair (standard | pop-up):** **left**, a light grey rounded strip showing a small **disk icon** and three **blue folder icons**, each followed by "Title" and separated by thin dark chevrons; **right**, the same grey strip with **one blue folder icon and "Title"** at the left and a **small up/down stepper glyph at the far right edge**, the visual cue that it opens a menu. Both are shown as low-contrast bars, not bordered buttons (catalog `path-controls-01`).
- **Page chrome (from screenshot):** the platform strip lights only the **Mac** icon; the TOC reads Path controls · Best practices · Platform considerations · Resources (**no Change log**). The side navigation shows **Navigation and search** open with Path controls in bold, then Search fields, Sidebars, Tab bars, Token fields, and **Presentation** open below it (Action sheets, Alerts, Page controls, Panels, Popovers, Scroll views, Sheets, Windows).
- **Related block:** one link, **File management**; developer documentation: **NSPathControl — AppKit**.
- The page has **1 neutral pair** (standard vs pop-up, catalog `path-controls-01`), **no ✗/✓ pairs and no videos** (fetch script run; existing catalog IDs unchanged, total 129). Nothing is measured.

## Web translation
There is no path control on the web, but the concept **"show where the selected thing lives and let people jump up the chain"** maps to **breadcrumbs for file-like hierarchies** (drives, folders, documents, repository paths, storage buckets) and to a **location picker** for choosing a destination. Apple gives it **only for file-system paths**; for other hierarchies treat the mapping as an analogue, not a rule.

| HIG rule | Web implementation |
|---|---|
| Standard style: root → parents → selected, icon + name each | `<nav aria-label="Path"><ol>` with one `<li>` per level; each ancestor is a **link or button** (icon + name), the **last item is the current one** with `aria-current="page"` (or `"location"`) and is **not a link**. Separators are **decorative** (CSS `::before`/`aria-hidden` chevron), never text nodes read aloud. Icon library: Lucide/Phosphor folder/drive/file glyphs, **never SF Symbols artwork** (`icons.md`). |
| Long path hides the middle, keeps first and last | Measure the container (`ResizeObserver`) or use CSS truncation, and collapse **the middle segments into one "…" button** that opens a menu of the hidden levels (`aria-haspopup="menu"`, `aria-label="Show hidden folders"`); **the first (root) and last (selected) always stay visible**; long single names truncate with `text-overflow: ellipsis` and full name in a tooltip/`title` plus accessible name. Do not wrap onto a second line (CONV). |
| Pop-up style: one item, menu of the whole path | A **menu button** showing icon + name of the selected item and a **stepper (up/down) glyph**; opens a menu listing root, parents, selected item (`aria-haspopup="menu"`, `aria-expanded`; items are `role="menuitem"`; selected item marked). Reuse the pop-up implementation in `hig/components/menus/pop-up-buttons.md` (same look, same keyboard model). Good on narrow widths where the full trail cannot fit (CONV: switch from standard to pop-up below ~480 px). |
| Editable: drag an item onto the control to select it | Accept **file/folder drops** with `dragenter/dragover/drop` and a visible **drop highlight**; always give the **non-drag equivalent** (`hig/patterns/drag-and-drop.md`). |
| Editable pop-up: extra "Choose" command | Last menu item **"Choose…"** (ellipsis because it opens a picker; Title Case per `writing.md`) that opens a file/folder dialog (`<input type="file" webkitdirectory>`, `showDirectoryPicker()` where supported) or an in-app folder browser sheet. |
| Window body, not toolbar or status bar | Put the path/breadcrumb **inside the content region** (top of the pane it describes, or a footer strip of the pane as in the Finder), **not** in the app toolbar, header chrome or a global status bar; keep the title/actions in the toolbar (`hig/components/menus/toolbars.md`). The Finder's **bottom-of-body** placement is a valid choice for file browsers; a top-of-content trail is the common web equivalent (CONV). |
| Not on iOS/iPadOS/tvOS/visionOS/watchOS | On touch, don't rely on a wide trail: **Back** in the navigation bar plus a **pop-up** trail (menu of ancestors), or a **sidebar/column drill-in** (`hig/components/layout/column-views.md`, `split-views.md`). |

Interaction and accessibility (CONV unless stated):
- **Hit region:** every segment is a button/link and must meet the **Buttons GATE** hit-region minimum (≥ 44 px on touch) even if the glyphs are small; keep spacing so neighbouring segments are not mis-tapped (`hig/components/menus/buttons.md`).
- **Keyboard:** Tab reaches each segment in order; Enter/Space activates; the pop-up follows the menu keyboard model (Arrow keys, Esc closes, focus returns to the button).
- **Contrast:** icons and text use the system colour tokens; the current item is distinguished by **weight or colour plus position**, not colour alone (`hig/foundations/color.md`).
- **Localisation:** in right-to-left locales the trail **reverses** and the separator chevrons flip (`hig/foundations/right-to-left.md`).
- **Labels:** show names as people know them ("iCloud Drive", "Documents"), not raw IDs; use sentence-case explanations but **Title Case for names/labels** per the capitalisation table in `writing.md`.

Field-note cross-links:
- `hig/patterns/file-management.md` (✓): where files live, the document model; path controls are the location readout for it.
- `hig/components/menus/pop-up-buttons.md` (✓): the pop-up style is one; `menus.md` for the menu itself.
- `hig/components/layout/column-views.md` (✓) and `outline-views.md` (✓): browsers whose current path a path control can echo; column views keep the **current path visible** (highlight + breadcrumb).
- `hig/patterns/drag-and-drop.md` (✓): the drop-to-select behaviour.
- No conflict with a field note.

## Checklist
- [ ] The control shows **root → parents → selected item**, each with an icon and a name; the **last item is marked current**.
- [ ] When the path is too long, **middle names collapse** and the **first and last stay visible**; single long names truncate with the full name available.
- [ ] A **pop-up style** exists (or is planned) where width is tight, and it lists the same path in a menu.
- [ ] If editable, **drop-to-select** works with a visible drop target **and** a non-drag alternative (a **Choose…** command or picker).
- [ ] The control lives **in the content region**, not in the toolbar/header or a status bar.
- [ ] Every segment is keyboard reachable, named, and meets the **44 px** hit-region gate on touch; separators are not read aloud.
- [ ] It is used for **file-system-like paths**; other navigation uses the pattern that fits (tab bar, sidebar, back button).

## Related
- Ingested: File management (✓), Pop-up buttons (✓), Menus (✓), Column views (✓), Outline views (✓), Drag and drop (✓), Toolbars (✓), Buttons (✓ CRITICAL).
- Not yet ingested: none linked from this page beyond the ones above.
- Developer docs: AppKit `NSPathControl`.
