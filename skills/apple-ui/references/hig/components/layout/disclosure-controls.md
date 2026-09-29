# Disclosure controls
Source: https://developer.apple.com/design/human-interface-guidelines/disclosure-controls · Section: Components › Layout and organization · Supported platforms: **iOS, iPadOS, macOS, visionOS** ("No additional considerations for macOS. **Not supported in tvOS or watchOS**"; TV and Watch are dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 7 screenshots (light-mode page, hero → the start of the page footer) were compared with the fetched text and image alt text line by line: everything matches; the seven screenshots are contiguous and cover the whole page. Text that exists only inside pictures (hero labels, the Save dialog) is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
Use a disclosure control to **hide details until they matter**: what people need most stays visible at the top, advanced options are hidden by default. A **disclosure triangle** expands a view or list item (**points inward from the leading edge when hidden, down when shown**) and needs a **descriptive label**; a **disclosure button** expands functionality tied to one control (**down when hidden, up when shown**), sits **next to what it reveals**, and appears **at most once per view**.

## Rules

### Framing (intro)
- Disclosure controls **reveal and hide information and functionality** related to **specific controls or views**.

### Best practices
- **should** **Use a disclosure control to hide details until they are relevant.** Put the controls people are **most likely to use at the top** of the disclosure hierarchy so they are **always visible**, and keep **more advanced functionality hidden by default**. This lets people **quickly find the essentials** without being **overwhelmed by detailed options**.

### Disclosure triangles
- A disclosure triangle **shows and hides information and functionality associated with a view or a list of items**. Examples: **Keynote** uses one to reveal **advanced export options**; the **Finder** uses them to **progressively reveal hierarchy** in list view.
- **Direction:** the triangle **points inward from the leading edge when content is hidden** and **down when content is visible**. Clicking or tapping **toggles** the two states and the view **expands or collapses** to fit the content.
- **should** **Give a disclosure triangle a descriptive label** that says what is disclosed or hidden, e.g. **"Advanced Options"**.
- Developer guidance: `NSButton.BezelStyle.disclosure`.

### Disclosure buttons
- A disclosure button **shows and hides functionality associated with a specific control**. Example: the **macOS Save sheet** shows one **next to the Save As text field**; activating it **expands the dialog** to give **advanced navigation options** for choosing where to save.
- **Direction:** it **points down when content is hidden and up when visible**; clicking/tapping **toggles** and the view expands or collapses to fit.
- **should** **Place a disclosure button near the content it shows and hides**, so the relationship between the control and the expanded choices is clear.
- **must not** **Use more than one disclosure button in a single view.** Multiple buttons **add complexity and confuse**.
- Developer guidance: `NSButton.BezelStyle.pushDisclosure`.

### Platform considerations
- **macOS:** no additional considerations. **tvOS, watchOS:** not supported.
#### iOS, iPadOS, visionOS
- Disclosure controls are available through the SwiftUI **`DisclosureGroup`** view.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Purpose | hide details until relevant; frequent controls visible, advanced ones collapsed by default |
| Disclosure triangle | shows/hides content of a **view or list of items**; hidden = points **inward from the leading edge** (right in LTR), shown = points **down**; needs a **descriptive label** |
| Disclosure button | shows/hides functionality tied to **one control**; hidden = points **down**, shown = points **up**; **near** its content; **max one per view** |
| Examples | Keynote export advanced options (triangle) · Finder list view hierarchy (triangle) · macOS Save sheet next to Save As (button) |
| Toggle behaviour | click or tap switches state; the view expands/collapses to fit |
| iOS/iPadOS/visionOS | SwiftUI `DisclosureGroup` |
| Not supported | tvOS, watchOS |
| Developer docs | SwiftUI `DisclosureGroup` · AppKit `NSButton.BezelStyle.disclosure` and `.pushDisclosure` |
| Related HIG pages | Outline views (not yet ingested) · Lists and tables (not yet ingested) · Buttons (not yet ingested) |
| Video | *Stacks, Grids, and Outlines in SwiftUI* (WWDC20 10031) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with two labelled examples set in a **monospaced** face: **"Collapsed"** above a small rounded white square holding a **down chevron**, and **"Expanded"** above the same square holding an **up chevron**, with an empty rounded panel below the expanded one (the revealed content). Both squares sit in the same spot; only the chevron flips **(from screenshot)**.
- **Triangles (tabbed pair, catalog `disclosure-controls-01`):** a Finder list in a light grey rounded card with alternating row stripes. *Collapsed:* **Folder 1, Folder 2, Folder 3** each with a blue folder glyph and a grey **chevron pointing right** at the leading edge. *Expanded:* Folder 2's chevron points **down** and reveals **Subfolder 1–3**, **indented** one level, each with its own right-pointing chevron and folder glyph; Folders 1 and 3 stay collapsed. Note the page's words say "triangle" but the drawn control is a **thin chevron**.
- **Buttons (tabbed pair, catalog `disclosure-controls-02`):** *Collapsed:* a small macOS Save sheet with **Save As: Untitled**, **Tags:** (empty field), **Where:** a **Projects** pop-up with a **small rounded square holding a down chevron** to its right, and **Cancel** and a blue **Save** at the bottom trailing corner. *Expanded:* the sheet grows into a full file dialog: a **sidebar** (Shared; Favorites: Keynote, Applications, Desktop, Documents, Downloads; Locations: iCloud Drive, Network), a toolbar row with back/forward, a column-view control, a grid control, the **Projects** pop-up, and the same button now showing an **up chevron**, plus a **Search** field, a three-column browser with "Projects" selected, **New Folder** at the leading bottom corner and **Cancel/Save** at the trailing bottom corner **(from screenshot)**. The button keeps its place in the same row; only the chevron direction and the sheet size change.
- **Page chrome (from screenshot):** the platform strip lights iPhone, iPad, Mac and Vision with **TV and Watch dimmed**; the TOC reads Disclosure controls · Best practices · Disclosure triangles · Disclosure buttons · Platform considerations · Resources (**no Change log**). The last screenshot shows the video thumbnail (a laptop on a dark card) titled *Stacks, Grids, and Outlines in SwiftUI*.
- Fetch script found **2 comparisons** (both are Collapsed/Expanded **tab pairs**, not ✗/✓): `disclosure-controls-01`, `disclosure-controls-02`. Catalog total is now **109**; existing ids unchanged. Nothing is measured.
- **Text that is not in the fetch:** the hero labels and the strings inside the two dialog pictures above, plus the chrome.

## Web translation
The web standard is the **disclosure pattern**: a control (`<button>` with `aria-expanded`/`aria-controls`, or native **`<details>/<summary>`**) that shows or hides a region. Accordions, "Advanced options", "Show more", collapsible tree rows and expandable table rows all use it.

| HIG rule | Web implementation |
|---|---|
| Hide details until relevant | Keep the **primary, frequently used fields visible**; put rarely used or expert options in a collapsed region ("Advanced options", "More filters"). Don't hide what the task **requires** or what people need to make a decision (price, deadlines, consequences). Default state: collapsed, unless the region holds an **error** or the person just used it (then open). |
| Two flavours | **Row/section disclosure ("triangle")** = a full-width toggle row with a chevron at the leading edge (accordion item, tree row, FAQ, settings group); **control-adjacent disclosure ("button")** = a small chevron button beside one control (e.g. a "Show more" chevron next to a location field or a search box). Both are `<button type="button" aria-expanded aria-controls>` or `<details><summary>`. |
| Triangle direction | Collapsed: chevron points **inward from the leading edge** (right in LTR; **mirror it in RTL**, `right-to-left.md`, so it points left); expanded: **down**. Implement with one glyph rotated 90° (`transform: rotate(90deg)`, transition; reduced-motion: no rotation animation). |
| Button direction | Collapsed: chevron **down**; expanded: **up**; the button stays **in the same place** (it doesn't jump when the region opens) and swaps its accessible name state through `aria-expanded`. |
| Descriptive label | The visible text says **what is revealed**: "Advanced options", "Shipping details", "More filters (3 active)"; not "More", "Details" or an icon alone. If icon-only (button style), give it `aria-label="Show location options"` and `aria-expanded`; never rely on the chevron as the only cue. Sentence case (`writing.md`). |
| Place it near what it controls | The toggle sits **directly above or beside** the region it opens; the revealed region appears **immediately below/adjacent** (same container, `boxes.md`), not in a distant panel. `aria-controls` points at it. |
| At most one disclosure button per view | Use **one** control-adjacent expander per view/dialog. For several collapsible groups use a proper **accordion of labelled sections** (the triangle flavour) with consistent styling, and consider allowing several open at once vs one at a time on purpose (`<details name="…">` gives exclusive groups). |
| Expand/collapse behaviour | The view **grows or shrinks to fit**: animate height briefly (`grid-template-rows: 0fr → 1fr`, or `interpolate-size`/Web Animations; 150–250 ms, CONV; instant under `prefers-reduced-motion`), never with a fixed height that clips; move focus **only if needed** (keep it on the toggle; the content follows in the DOM order). A dialog that expands (Save sheet) must **re-centre or grow within the viewport** and stay scrollable. |
| Toggle state | Click/tap **and** Enter/Space toggle; the **whole row** is the hit target (not just the chevron), ≥ 44 px; state is exposed via `aria-expanded`; remember the state across visits where useful (`localStorage`, per user) but always re-open when it holds validation errors or a search match. |
| Hierarchies (Finder list) | For nested rows use a **tree**: `role="tree"`/`treeitem` with `aria-expanded`, `aria-level`; **→ expands, ← collapses (or moves to the parent), ↑ ↓ move, Home/End**, type-ahead; indent children one level and show a chevron on each parent; lazy-load children with a named spinner (`loading.md`). See `column-views.md` and the outline pattern (not yet ingested). |
| Find-in-page and links | Use `hidden="until-found"` (or `<details>`) so browser find and in-page anchors **open** collapsed content; deep links to an item expand its ancestors. |
| iOS/visionOS `DisclosureGroup` | Same pattern on touch: full-width row with trailing chevron (rotates), a swipe-free tap, animated height; keep gaze/hover targets generous on spatial devices. |
| Not on TV/watch | On glanceable or remote-driven surfaces avoid nested collapsibles; show the few essentials and move the rest to a details screen. |
| Accessibility | Buttons have names and `aria-expanded`; regions get `role="region"` + `aria-labelledby` only when they are landmarks-worthy (not for every accordion item); heading level inside the toggle (`<h3><button>…`) per the ARIA accordion pattern; visible focus ring; no content hidden with `display:none` that must be reachable by search or AT while collapsed unless intentionally excluded. |

Field-note cross-links:
- `hig/patterns/settings.md` (✓): "advanced options behind a disclosure" and few-settings guidance; `hig/patterns/printing.md` (✓): the print panel's **"Advanced Options"** disclosure with the same label wording; `hig/patterns/entering-data.md` (✓): optional/advanced fields collapsed; `hig/patterns/onboarding.md` (✓): progressive disclosure over tours.
- `hig/components/layout/boxes.md` and `field-notes/principles.md` § 3: a disclosure group lives **inside one group** (row + revealed rows separated by hairlines), not as a box within a box.
- `hig/patterns/feedback.md` (CRITICAL): an error inside collapsed content must open it and be announced; `hig/foundations/motion.md`: reduced-motion expand/collapse; `right-to-left.md`: chevron mirroring.
- `hig/components/layout/column-views.md`, `collections.md`: other ways to reveal hierarchy; `hig/foundations/accessibility.md`, `writing.md` for labels.
- No conflict with a field note.

## Checklist
- [ ] The most-used controls are visible; advanced/rare ones are collapsed by default; nothing essential to the task is hidden.
- [ ] Every disclosure is a `<button aria-expanded aria-controls>` or `<details><summary>`; the whole row is the target (≥ 44 px); Enter/Space toggle.
- [ ] Labels name what is hidden ("Advanced options"); icon-only toggles have an accessible name.
- [ ] Row/section toggles: chevron points inward from the leading edge (mirrored in RTL) when collapsed and down when expanded; control-adjacent toggles: down collapsed, up expanded, fixed position.
- [ ] The toggle is next to what it reveals; at most one control-adjacent expander per view; several sections use a consistent accordion.
- [ ] The region resizes to fit (no clipped fixed heights); the animation is brief and reduced-motion safe; dialogs that grow stay inside the viewport.
- [ ] Errors, search matches and deep links open the relevant collapsed region; `hidden="until-found"` (or `<details>`) lets find-in-page reveal it.
- [ ] Tree hierarchies use `tree`/`treeitem` with arrow-key expand/collapse and lazy loading with a named spinner.
- [ ] TV/glance surfaces avoid nested disclosure.

## Related
- Ingested: Boxes (✓), Column views (✓), Collections (✓), Settings (✓), Printing (✓), Entering data (✓), Onboarding (✓), Feedback (✓ CRITICAL), Motion (✓), Right to left (✓), Accessibility (✓), Loading (✓).
- Not yet ingested: **Outline views**, **Lists and tables**, **Buttons**.
- Developer docs: see Specs & values. Video: *Stacks, Grids, and Outlines in SwiftUI* (WWDC20 10031).
