# Tab views
Source: https://developer.apple.com/design/human-interface-guidelines/tab-views · Section: Components › Layout and organization · Supported platforms: **macOS and watchOS** ("Not supported in iOS, iPadOS, tvOS, or visionOS"; the Mac and Watch icons are lit on the platform strip **(from screenshot)**; the page still gives iOS/iPadOS a pointer to segmented controls) · Ingested: 2026-09-29 · Apple last updated: 2023-06-05 (added guidance for using tab views in watchOS; the change log has that single entry, read from the fetch because the screenshots stop at the "Change log" heading). One DocC fetch, read in full. 4 screenshots (light-mode page, hero → the "Change log" heading) were compared with the fetched text and image alt text line by line: everything matches. **The screenshots skip the *iOS, iPadOS* sub-heading and its one sentence (segmented control), which sit between the italic "Not supported…" line and the watchOS heading; that passage and the change-log row were read from the fetch only.** Text that exists only inside pictures (hero labels, the macOS window, the watch) is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page's one number is **six tabs**.

## In one line
A tab view shows **several mutually exclusive, closely related panes in the same area**, switched by a **tabbed control** on the top edge. Keep the panes **self-contained**, label each tab with a **short noun phrase that predicts its content**, **never more than six tabs**, don't switch tabs through a **pop-up** (one click vs two), and inset the view with a margin. On iOS/iPadOS use a **segmented control**; on watchOS tabs are **pages with a page control**.

## Rules

### Framing (intro)
- A tab view presents **multiple mutually exclusive panes of content in the same area**, which people **switch between with a tabbed control**.

### Best practices
- **should** **Use a tab view for closely related areas of content.** A tab view **visibly encloses** its content; people expect **each tab's content to be similar or related** to the others'.
- **must** **Keep each pane's controls affecting only content in that pane.** Panes are mutually exclusive, so make them **fully self-contained**.
- **must** **Label every tab with a description of its pane's contents.** A good label lets people **predict the pane before clicking or tapping**. Use **nouns or short noun phrases** (a verb or short verb phrase may suit some contexts) with **title-style capitalisation**.
- **should not** **Switch tabs with a pop-up button.** A tabbed control needs **one click or tap**; a pop-up needs **two**. Tabs also show **all choices at once**. A pop-up button can be a reasonable fallback **when there are too many panes to show as tabs**.
- **must not** **Provide more than six tabs.** More than six is **overwhelming and creates layout issues**; for six or more, consider another design, e.g. **each tab as a view option in a pop-up button menu**.
- Developer guidance: `NSTabView`.

### Anatomy
- The **tabbed control sits on the top edge of the content area**. You may **hide** it, which suits an app that **switches panes programmatically**.
- With the control hidden, the content area can be **borderless, bezeled, or bordered with a line**; a **borderless** view can be **solid or transparent**.
- **should** **Inset the tab view**, leaving a **margin of window-body area on all sides**. This looks clean and leaves room for **controls not directly related** to the tab view's content. Extending the tab view to the window edges is possible but **unusual**.

### Platform considerations
- **macOS:** the platform where tab views exist. **tvOS, visionOS:** not supported.
#### iOS, iPadOS
- Not supported; **for similar functionality consider a segmented control.**
#### watchOS
- watchOS displays tab views using **page controls** (developer: SwiftUI `TabView`). The **current dot is enlarged**, showing that people can **scroll through the current content** and also **scroll between pages**.

## Specs & values
| Item | Value |
|---|---|
| Purpose | mutually exclusive, closely related panes in one area |
| Tab count | **≤ 6** (6+ → pop-up button menu or another design) |
| Switching | tabbed control (1 click/tap) over pop-up button (2 clicks) |
| Labels | describe pane contents; nouns/short noun phrases (verbs where sensible); title-style capitalisation |
| Pane independence | controls in a pane affect only that pane |
| Control position | top edge of the content area (centred in the illustration) |
| Hidden control | allowed when switching programmatically; content area then borderless (solid or transparent), bezeled or line-bordered |
| Layout | inset with a window-body margin on all sides; edge-to-edge is unusual |
| iOS/iPadOS | not supported; use a segmented control |
| watchOS | page controls; enlarged current dot; scroll within content and between pages |
| Not supported | iOS, iPadOS, tvOS, visionOS |
| Developer docs | SwiftUI `TabView` · AppKit `NSTabView` |
| Related HIG pages | Tab bars (not yet ingested) · Segmented controls (not yet ingested) · Page controls (not yet ingested) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a rounded content panel and, **straddling its top edge**, a **pill-shaped three-tab control** labelled **"Label · Label · Label"**; the **first tab is selected** (a lighter raised pill), a thin divider separates the other two, and dimension arrows show the **margin around the panel** (top, bottom, leading, trailing) **(from screenshot)**. Matches "inset with a margin".
- **Anatomy illustration:** a white macOS window (traffic-light dots) with a small **three-segment control "First · Second · Third"** **centred on the top edge** of the empty content area; "First" is the selected, filled segment **(from screenshot)**.
- **watchOS illustration:** a black Apple Watch face with **"10:09"** and a blue **"Title"** at the top-trailing corner and a **vertical page control** (a column of dots, the current one enlarged) along the trailing edge **(from screenshot)**. No content is shown.
- **Page chrome (from screenshot):** the platform strip lights the **Mac and Watch** icons (iPhone, iPad, TV and Vision are dimmed); the TOC reads Tab views · Best practices · Anatomy · Platform considerations · Resources · Change log. The side navigation highlights **Tab views**, last in the Layout group.
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 112). Nothing is measured.
- **Text that is not in the fetch:** the hero and anatomy labels, the watch face strings and the chrome above.

## Web translation
The web standard is the **tabs pattern**: a `tablist` of `tab`s controlling `tabpanel`s (settings sections, product detail sections, code/preview switchers, dashboards). Apple's panel rules translate directly; the platform notes point to **segmented controls** (small, in-page switches) and **pagers** (watch).

| HIG rule | Web implementation |
|---|---|
| Closely related, mutually exclusive panes | Use tabs only when **exactly one pane is visible at a time** and the panes are **peer views of the same object** (Overview · Activity · Settings). If people need to compare or see several at once, use sections, an accordion (`disclosure-controls.md`) or a split view (`split-views.md`). Navigation between different pages/routes is a **nav/tab bar** or links, not `role=tab` (Tab bars page not yet ingested). |
| Each pane self-contained | A control inside a panel changes **that panel's** data only; no toggles that silently alter another tab. Keep **form state and scroll position per panel** when switching (don't reset typed values; keep panels mounted or restore their state), and don't require another tab to finish a task. |
| Label describes the content | Visible text names the content ("Billing", "Team members", "Activity"), **nouns or short noun phrases**; no icon-only tabs without `aria-label`; labels stay short so all tabs fit on one row. **Capitalisation:** Apple says title-style; our `writing.md` default is sentence case. **Same flagged difference as `lists-and-tables.md`**: pick one convention per product and use it for every tab, column and menu title. |
| One click, all choices visible | Render the tab strip **visibly and fully** (no dropdown as the primary switch); each tab is one click/tap/keypress. Only when there are **too many** panes use a `<select>`/menu ("View: Overview ▾") as the overflow, as the page suggests. |
| **≤ 6 tabs** | Cap at **six** in one tablist; more → group into fewer tabs, a menu, a left-hand section list, or a sidebar. On narrow screens six labels may not fit: allow **horizontal scroll with a visible affordance** (`scroll-snap`, fade edges) or collapse to a menu **below a breakpoint**, but never wrap tabs into a second row that looks like a different control. |
| Tabbed control on the top edge, inset margin | Place the tablist **above the panel, centred or leading-aligned consistently** (macOS centres; product choice) inside a container with **consistent margins on all sides** (`layout.md`); the panel is visually tied to its tabs (shared surface/border; selected tab merges with the panel). Extending to the viewport edges is the exception (full-bleed mobile sheets). |
| Hidden control (programmatic switching) | When switching by code (wizard steps, onboarding, "Next"), you may **hide the tablist**, but then provide **another accessible way to move** (Back/Next buttons, a step indicator) and announce the change; use a `tabpanel` role only if tabs exist, otherwise plain sections with `aria-live` status ("Step 2 of 4"). Panel chrome options: borderless (solid or transparent), bezeled or bordered (`boxes.md`). |
| iOS/iPadOS → segmented control | For an **in-page view switch** (List · Map · Grid) use a **segmented control** (same ARIA tabs/radiogroup semantics, compact pill with the selected segment raised; field notes: the segmented control sits **above** the group it switches, `principles.md` § 3). For **app-level navigation** use a bottom tab bar/nav (Tab bars page not yet ingested). |
| watchOS page controls | On glanceable UIs use **pages** with a **page indicator**: horizontal scroll-snap panes (or vertical) with a dots indicator (the **current dot enlarged**), swipe/arrow-key navigation, and `aria-roledescription="carousel"`/`tablist` semantics; the dots are decorative-plus-state (announce "Page 2 of 5"). Never use dots for more than about 7–9 pages (CONV). |
| Keyboard (ARIA tabs) | One tab stop for the tablist; **← →** move focus between tabs (↑ ↓ for vertical tablists), **Home/End** first/last, **Tab** enters the panel; **automatic activation** (selection follows focus) when panels render instantly, **manual activation** (Enter/Space) when they load slowly; selected tab `aria-selected="true"`, panels `aria-labelledby` the tab, hidden panels `hidden`. |
| Deep links and state | Reflect the selected tab in the **URL** (`?tab=activity` or `#activity`) so back/forward, reload and sharing work; restore the last tab per view where sensible; lazy-render heavy panels with a named loading state (`loading.md`). |
| Motion | Cross-fade or slide panels **briefly** (≈150–250 ms, CONV) and skip it under `prefers-reduced-motion`; the selected-tab indicator may glide but must not be the only cue. |
| Accessibility | Selected state is not colour alone (weight/underline/raised pill); touch targets ≥ 44 px; contrast ≥ 4.5 : 1 for labels and ≥ 3 : 1 for the indicator; text scales to 200 % without truncating labels (allow wrap or scroll); focus ring on the tab. |

Field-note cross-links:
- `field-notes/principles.md` § 3 and `components.md`: the segmented control's own grey rail and its place **above** the group is the web/iOS form of this page's "tabbed control on the top edge, panel inset below"; **compatible**, and it is the right control for in-page switching.
- `hig/components/layout/boxes.md`, `split-views.md`, `disclosure-controls.md`, `lists-and-tables.md` (✓): choose tabs vs sections vs panes vs accordion vs lists deliberately.
- `hig/foundations/layout.md` (CRITICAL layout gate): consistent margins around the tab view and behaviour at any width; `motion.md`, `accessibility.md`, `typography.md`: transitions, focus and label scaling.
- `hig/patterns/settings.md` and `entering-data.md`: settings sections as tabs vs one scrolling list (our default is a single grouped list on mobile); `hig/patterns/loading.md`: lazy panels.
- `hig/foundations/writing.md`: tab label copy; the capitalisation difference is flagged above.
- No conflict with a field note apart from the capitalisation difference.

## Checklist
- [ ] Tabs are used only for a few closely related, mutually exclusive panes that are peers of the same object; navigation between routes uses links or a tab bar.
- [ ] Each pane is self-contained; state and scroll per pane survive switching.
- [ ] Every tab has a visible noun/short-noun-phrase label (icon-only tabs have `aria-label`); one capitalisation convention is used across the product.
- [ ] There are **at most six** tabs; overflow moves to a menu/section list; tabs are never replaced by a two-click dropdown unless there are too many panes.
- [ ] Tablist above the panel with consistent margins on all sides; the selected tab is visibly joined to its panel; selected state is not colour alone.
- [ ] If the tablist is hidden for programmatic switching, Back/Next (or a step indicator) and an announcement exist.
- [ ] In-page view switching uses a segmented control; app-level navigation uses a tab bar or nav, not `role=tab`.
- [ ] Glanceable UIs use paged panes with a page indicator (enlarged current dot) and announce position.
- [ ] Keyboard follows the ARIA tabs pattern (arrows, Home/End, Tab into the panel, auto/manual activation); the selected tab is reflected in the URL.
- [ ] Transitions are short and reduced-motion safe; Layout, Color and Typography gates pass at 320 px and 200 % zoom.

## Related
- Ingested: Boxes (✓), Split views (✓), Disclosure controls (✓), Lists and tables (✓), Layout (✓ CRITICAL), Settings (✓), Entering data (✓), Loading (✓), Motion (✓), Accessibility (✓), Writing (✓), Workouts (✓).
- Not yet ingested: **Tab bars**, **Segmented controls**, **Page controls**.
- Developer docs: `TabView`, `NSTabView`.
