# Collections
Source: https://developer.apple.com/design/human-interface-guidelines/collections · Section: Components › Layout and organization · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS** ("No additional considerations for macOS, tvOS, or visionOS. **Not supported in watchOS**"; the watch icon is dimmed on the platform strip **(from screenshot)**; one iOS/iPadOS rule) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 3 screenshots (light-mode page, hero → the start of the page footer) were compared with the fetched text line by line: everything matches; the three screenshots are contiguous and cover the whole page. Only the hero drawing and the page chrome are screenshot-only (the first screenshot also shows Safari's address bar with the page URL selected: browser chrome, ignored). Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
A collection presents an **ordered set of content, mostly images**, in a customisable, highly visual layout. Use the **standard row or grid**, keep items **easy to reach and hover/focus-visible** with real padding, add custom gestures and animations only when needed, prefer a **table for text**, and don't reshuffle the layout while people are using it.

## Rules

### Framing (intro)
- A collection **manages an ordered set of content** and presents it in a **customisable, highly visual layout**.
- Generally, collections are **ideal for showing image-based content**.

### Best practices
- **should** **Use the standard row or grid layout whenever possible.** By default a collection shows content in a **horizontal row or a grid**, simple and effective layouts people expect. **Avoid a custom layout** that might confuse people or draw undue attention to itself.
- **should** **Consider a table (list) rather than a collection for text.** Text is generally **simpler and more efficient** to view and digest in a **scrollable list**.
- **should** **Make it easy to choose an item.** If getting to an item is too hard, people get **frustrated and lose interest** before reaching their content. Use **adequate padding around images** so **focus or hover effects stay easy to see** and content doesn't overlap.
- **should** **Add custom interactions when necessary.** By default people can **tap to select, touch and hold to edit, and swipe to scroll**; add more gestures for custom actions only if the app needs them.
- **should** **Consider animations as feedback when people insert, delete or reorder items.** Collections support **standard animations** for these actions; custom ones are possible too.

### Platform considerations
- **macOS, tvOS, visionOS:** no additional considerations. **watchOS:** not supported.
#### iOS, iPadOS
- **should** **Be cautious with dynamic layout changes.** A collection's layout can change dynamically: make sure changes **make sense and are easy to follow**. If possible, **avoid changing the layout while people are viewing and interacting with it**, unless it's **in response to an explicit action**.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Content | ordered set; best for image-based content |
| Default layouts | horizontal row · grid |
| Text content | prefer a table (scrollable list) |
| Item spacing | padding around images so focus/hover effects are visible and nothing overlaps |
| Default interactions | tap = select · touch and hold = edit · swipe = scroll |
| Custom gestures | add only when the app requires them |
| Feedback animations | standard (insert, delete, reorder) plus optional custom |
| iOS/iPadOS | avoid layout changes while people interact, unless the change answers an explicit action |
| Not supported | watchOS |
| Developer docs | UIKit `UICollectionView` · AppKit `NSCollectionView` |
| Related HIG pages | Lists and tables (not yet ingested) · Image views ✓ · Layout ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange gradient card containing a dashed **content area** (the margin) around **eight photo glyphs in two rows of four**; dimension arrows show the margin at the top, bottom, leading and trailing edges and a small marker shows the **gap between two items** (horizontal between the third and fourth in the top row, vertical between the third items of the two rows): equal gaps, consistent item size, even margins. (Matches the alt text: eight image icons, two rows of four.)
- **Page chrome (from screenshot):** the platform strip lights iPhone, iPad, Mac, TV and Vision; **Watch is dimmed**. The TOC reads Collections · Best practices · Platform considerations · Resources (**no Change log**). The side navigation shows **Layout and organization** expanded with **Collections** highlighted second, after Boxes, and the other seven groups (Content, Menus and actions, Navigation and search, Presentation, Selection and input, Status, System experiences) plus **Inputs** and **Technologies** below Components.
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 107). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above.

## Web translation
On the web a collection is a **gallery/grid/carousel of items**, most often images (photo library, product grid, media shelf, template picker, icon set, app grid). Text-only lists belong in a list/table (`lists-and-tables`, not yet ingested).

| HIG rule | Web implementation |
|---|---|
| Standard row or grid | **CSS Grid** for grids: `grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--item-min)), 1fr))` (or a fixed column count per breakpoint), uniform item size and equal `gap`; a **horizontal row** = a scroll-snap container (`display: flex; overflow-x: auto; scroll-snap-type: x proximity`). Don't invent masonry/scatter/rotating layouts unless the content genuinely needs it (photo walls); if you do, keep the reading/focus order logical (`layout.md`). |
| Table for text | If items are mostly text (names, titles, records), use a **list/table** with sort and search (`<ul>`/`<table>`, `searching.md`), not a card grid; if a grid item has both image and text, keep the text short and outside the image. |
| Easy to choose an item | **Generous, even gaps** (CONV starting point 8–16 px on phones, 16–24 px on desktop; Apple gives none), whole item is the hit target (≥ 44 × 44 px), **focus ring and hover state fully visible**: use `outline-offset` and padding so `overflow: hidden` on the container never clips rings, scale-up hover effects or shadows (give the grid padding equal to the maximum lift). Items never overlap. Provide a keyboard path (below). |
| Semantics | A list of items = `<ul role="list">` with each item a **link** or **button** (a link to a detail page; a button that opens a viewer/selects). Use `role="grid"` only for a real 2-D navigable widget with arrow keys; otherwise Tab moves through items (with a **roving tabindex** for very large sets and `Home/End/PageUp/PageDown`). Each item has an accessible name (`alt` or `aria-label`; decorative thumbnails don't repeat the caption). |
| Default interactions: select, edit, scroll | **Tap/click** opens or selects; **selection mode** (checkboxes appear on hover/focus or after "Select") with Shift/Ctrl-click range/multi-select, `aria-selected`/`aria-pressed` and a live count ("3 selected"); **touch-and-hold / right-click / ⋯ button** opens the edit/context menu (never hover-only, never long-press-only: also a visible ⋯ or Edit action); native scrolling, never hijack it. |
| Custom gestures only when needed | Swipe-to-delete, drag-to-reorder or pinch-to-resize are optional accelerators with **keyboard and button alternatives** (Move up/down, Delete, ± zoom); drag interactions follow `drag-and-drop.md`; deletions offer Undo (`undo-and-redo.md`). |
| Animate insert, delete, reorder | Use **FLIP/`View Transitions`/layout animations** so neighbours slide to fill or make room (150–300 ms, ease-out; CONV, Apple gives none), a removed item fades/shrinks out; **no motion under `prefers-reduced-motion`** (instant swap); announce the result politely ("Photo deleted. Undo") and keep focus on the next item (`motion.md`, `feedback.md`). |
| Avoid dynamic layout changes | Don't reflow the grid **under people's fingers**: no re-sorting on data refresh, no items jumping when images finish loading. Reserve space with **fixed `aspect-ratio` per item** and skeletons, load more with a **Load more** button or a stable infinite scroll that appends **below** without moving existing items; when a filter/sort/view-size change is user-triggered it may reflow (with a short transition); preserve scroll position and the focused item across re-renders. Keep column counts stable while a drag or selection is in progress. |
| Visual, image-based content | Use consistent aspect ratios and `object-fit: cover`; thumbnails at the right size with `srcset`; lazy-load (`loading="lazy"`, `decoding="async"`) with a dominant-colour placeholder; **virtualise** very long collections (windowing) while keeping keyboard/AT access (`aria-setsize`/`aria-posinset`) (`image-views.md`, `loading.md`). |
| Empty and error states | A collection with no items shows an explanatory empty state with the next action; partial load failures show a retry on the affected items, not a blank screen (`feedback.md`). |
| Platform notes | tvOS-style large screens: large items with a clear **focus** scale/border and one focus at a time (`designing-for-tvos.md`); visionOS: hover highlight on gaze needs generous spacing (`spatial-layout.md`); glanceable/watch surfaces: don't use grids; show a short list (`workouts.md`). |
| Accessibility | Real headings above shelves; page order = visual order; each item is focusable and named; group labels ("Recently added, list, 12 items"); respect text zoom (captions wrap, don't clip); sufficient contrast for captions over images (`image-views.md`, Color gate). |

Field-note cross-links:
- `field-notes/components.md` § Integration / platform cards: the **12-column grid, `max-w-[1400px]`, `items-start`** (so short cards don't stretch and show empty space) is an established collection pattern; compatible with "standard grid, equal gaps".
- `field-notes/principles.md` § 3 "Groups, not cards" and `anti-patterns.md` ("two card grammars on one page"): a collection uses **one item grammar**; don't nest boxes inside items (`boxes.md`).
- `hig/foundations/layout.md` (CRITICAL layout gate): margins, consistent gaps, 320 px/200 % zoom reflow; `color.md`: focus/selected states with contrast; `motion.md`: reduced-motion feedback animations.
- `hig/patterns/drag-and-drop.md` (reorder), `undo-and-redo.md` (delete), `searching.md` (filter a collection), `loading.md` (skeletons), `feedback.md` (selection counts, status).
- `hig/components/content/image-views.md`: image behaviour inside items; `charts.md`, `text-views.md` for the other content types.
- No conflict with a field note.

## Checklist
- [ ] Items sit in a plain grid or a scroll-snap row with uniform size and equal gaps; no gratuitous custom layout.
- [ ] Text-only content is a list/table, not a card grid.
- [ ] Each item is a named link or button ≥ 44 px, with focus/hover effects that are never clipped (padding + `outline-offset`) and never overlap.
- [ ] Selection, edit and context actions have visible, non-gesture-only equivalents (checkboxes, ⋯ menu); custom gestures have keyboard/button alternatives.
- [ ] Insert, delete and reorder animate (FLIP/View Transitions), are reduced-motion safe, announced, and keep focus sensible; deletes offer Undo.
- [ ] The layout never reflows while people interact: reserved aspect ratios, append-only loading, stable column count during drag/selection, scroll and focus preserved.
- [ ] Images are lazy-loaded with placeholders and `srcset`; long collections are virtualised without losing keyboard/AT access; empty and error states exist.
- [ ] Layout gate passes at 320 px and 200 % zoom; contrast for captions and selection states passes the Color gate.

## Related
- Ingested: Image views (✓), Layout (✓ CRITICAL), Boxes (✓), Drag and drop (✓), Undo and redo (✓), Searching (✓), Loading (✓), Feedback (✓ CRITICAL), Motion (✓), Charts (✓).
- Not yet ingested: **Lists and tables**.
- Developer docs: `UICollectionView`, `NSCollectionView`.
