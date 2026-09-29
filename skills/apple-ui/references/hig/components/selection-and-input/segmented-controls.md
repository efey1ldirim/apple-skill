# Segmented controls
Source: https://developer.apple.com/design/human-interface-guidelines/segmented-controls · Section: Components › Selection and input · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS** ("Not supported in watchOS"; the Watch icon is dimmed on the platform strip, the other five are lit **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **June 21, 2023** (updated to include guidance for visionOS; the only change-log row). One DocC fetch, read in full. 7 screenshots (hero → the end of the developer-documentation list) were compared with the fetched text and image alt text line by line: everything matches, including the two Single/Multiple choice pictures, the iOS Health and Calendar screenshots and the macOS Calendar comparison. **Read from the fetch only (not in screenshots):** the **change log** row, the dark variants of the pictures and the image alt texts; the page has **no videos**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker, but it is one of the button-like controls named on the **Buttons** page (a CRITICAL page); see *Web translation* for how it fits the Buttons GATE. The page has **a few numbers**: about **5–7** segments in a wide interface, about **5** on iPhone.

## In one line
A segmented control is a **linear set of two or more segments, each functioning as a button**, usually **equal in width**, with **text or images** (not both). It offers **a single choice**, or (macOS) **single or multiple choices**, or it can act as **a set of momentary action buttons** with no selection state. **Use it for closely related choices affecting an object, state or view**, **keep its type consistent** (all selection or all actions), **limit the segments (~5–7 wide, ~5 iPhone)**, **label with Title Case nouns**, and on macOS prefer a **tab view** for main-area view switching; on iOS/iPadOS use a **tab bar** for completely separate sections.

## Rules

### Framing (intro)
- All segments are **usually equal in width**. Like **buttons**, segments can contain **text or images**; they can also have **text labels beneath them** (or beneath the control as a whole).
- Selection models:
  - **Single choice** from a set of options (all platforms); e.g. macOS Keynote's **alignment** control lets people select **only one** segment.
  - **Multiple choices** (**macOS**); e.g. Keynote's **font attributes** control (bold, italic, underline) lets people select **several** segments to combine styles.
  - **Momentary actions** with **no selection state**: a set of buttons that perform actions, e.g. macOS Mail's **Reply, Reply all, Forward** (`isMomentary`, `NSSegmentedControl.SwitchTracking.momentary`).
- A Keynote **toolbar** also uses a segmented control to **show and hide editing panes** within the main window area.

### Best practices
- **should** **Use a segmented control for closely related choices that affect an object, state or view.** An **inspector** segmented control can choose one or more attributes for a selection; a **toolbar** one can offer a set of actions on the current view. (Example: **iOS Health** shows a segmented control **D W M 6M Y** choosing the time range of the activity graphs.)
- **may** **Consider a segmented control when grouping functions matters or when selection state must be clear.** **Unlike other button styles, segmented controls keep their grouping regardless of view size or where they appear**, and the grouping shows **at a glance** which controls are selected.
- **must** **Keep control types consistent within one segmented control.** **Don't assign actions to segments in a control that otherwise represents selection state**, and **don't show a selection state for segments in a control that otherwise performs actions.**
- **should** **Limit the number of segments.** Too many are **hard to parse and slow to navigate**. Aim for **no more than about five to seven segments in a wide interface** and **no more than about five on iPhone**.
- **should** **In general, keep segment size consistent.** Equal widths feel **balanced**; keep **icon and title widths consistent** to the extent possible.

### Content
- **should** **Prefer either text or images, not a mix of both, in one segmented control.** Individual segments *can* hold either, but **mixing them leads to a disconnected and confusing interface**.
- **should** **Use content of similar size in each segment**: segments have equal width, so it **looks bad if content fills some segments but not others**.
- **should** **Use nouns or noun phrases for segment labels**, written in **title-style capitalisation**, describing each segment. A control with **text labels needs no introductory text**.

### Platform considerations
- **watchOS:** not supported.

#### iOS, iPadOS
- **should** **Consider a segmented control to switch between closely related subviews.** Example: Calendar's **New Event** sheet switches between the subviews for a **new event** and a **new reminder**. For switching between **completely separate sections** of an app, use a **tab bar** instead.

#### macOS
- **should** **Consider introductory text to clarify the control's purpose.** When it uses **symbols or interface icons**, you may add a **label below each segment**. If the app has **tooltips**, **provide one for each segment**.
- **should** **Use a tab view in the main window area, not a segmented control, for view switching.** A **tab view** supports efficient view switching and looks like a **box combined with a segmented control**; use a segmented control to switch views **in a toolbar or inspector pane**. (In macOS Calendar the main area uses a **tab view (Day, Week, Month, Year)** while the sidebar uses a **segmented control (New, Replied)**.)
- **may** **Consider supporting spring loading.** On a Mac with a **Magic Trackpad**, people can **activate a segment by dragging selected items over it and force-clicking without dropping**, and can **keep dragging** after activation.

#### tvOS
- **should** **Consider a split view instead of a segmented control on content-filtering screens**: people find it easier to move **back and forth between content and filtering options**; a segmented control's placement may make it **less accessible**.
- **should** **Avoid other focusable elements close to segmented controls.** Segments become **selected when focus moves to them, not when people click**; nearby focusable elements risk **accidental focus** while switching segments.

#### visionOS
- When people look at a segmented control that uses **icons**, the system shows a **tooltip with the descriptive text you supply**.

## Specs & values

| Item | Value |
|---|---|
| Anatomy | 2+ segments in a row, usually equal width; text or image content; optional labels beneath |
| Selection models | single choice (all) · multiple choices (macOS) · momentary actions (no selection state) |
| Segment count | ~**5–7** in a wide interface; ~**5** on iPhone |
| Content | text **or** images, not mixed; similar content size per segment |
| Labels | nouns / noun phrases, **Title Case**; no introductory text needed for text labels |
| iOS/iPadOS | related subviews (Calendar New Event: Event · Reminder); separate sections → tab bar |
| macOS | introductory text and/or labels below icon segments, a tooltip per segment; tab view for main-area view switching; spring loading |
| tvOS | selection follows focus (not click); keep other focusable items away; consider a split view for filtering |
| visionOS | icon segments show a tooltip on gaze |
| watchOS | not supported |
| Sizes, spacing, hit regions | **none given on this page** |
| Developer docs | SwiftUI `segmented` (picker style) · UIKit `UISegmentedControl` (`isMomentary`) · AppKit `NSSegmentedControl` (`SwitchTracking.momentary`) |
| Video | none |
| Apple's Related list | Split views ✓ |
| Change log | June 21, 2023: updated to include guidance for visionOS |

## Visual notes (from screenshots and downloaded pictures)
- **Hero (screenshot):** a red-to-orange card with a **wide pill of three equal segments labelled "Label"**: the first segment is a **raised white pill (selected)** and the other two sit on a **red rail**; a **width arrow** above the control, a **height I-beam** to its right, small **dotted underlines by each label** (content padding), and a **small "^" caret below the first segment** pointing at the selection **(from screenshot)**.
- **Single vs multiple choice (catalog `segmented-controls-01`, screenshots):** *Single choice*: four **text-alignment icon segments** (left, centre, right, justified); **only the centre one is filled blue** with a white icon, the others white with black icons and hairline dividers. *Multiple choices*: four **font-attribute segments B, I, U, S**; **B, I and U are filled blue** (three selected), **S (strikethrough) white**; the selected segments are joined with no visible divider gap **(from screenshot)**. Captions "Single choice" / "Multiple choices".
- **iOS Health (screenshot):** iPhone "Activity" screen with a back button and an "Add Data" pill; a **grey rail "D  W  M  6M  Y" with D selected (white pill)**; the Move (116 cal, red ring), Exercise (10 min, green) and Stand (3 hr, blue) figures and red/green bar graphs ("116 of 300 cal", "10 of 30 min"). Caption: *In the iOS Health app, a segmented control provides a choice of time ranges for the activity graphs to display.* **(from screenshot)**
- **iOS Calendar (screenshot):** the "New" sheet with a round ✕ at the left, the title "New", a **red round ✓** at the right, then a **two-segment control "Event | Reminder" with Event selected** and rows All-day (switch off), Starts "Jul 31, 2025 · 6:00 PM", Ends "Jul 31, 2025 · 7:00 PM", Travel Time "None ⌃⌄" **(from screenshot)**.
- **macOS Calendar comparison (screenshot):** a window with red/yellow/green dots; callout lines **"Segmented control"** pointing at the sidebar's **red-filled "New" / plain "Replied"** two-segment control (with two toolbar icon segments at its right) and **"Tab view"** pointing at the centre **"Day | Week | Month | Year" control with Year selected**; the year 2025 grid of twelve mini-months, a "Today" button and search; the sidebar shows "No Invitations" and a September 2025 mini calendar with 15 in a red circle **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Segmented controls · Best practices · Content · Platform considerations · Resources · **Change log**; side navigation shows **Selection and input** open with **Segmented controls** ringed.
- **Fetch script run:** 1 new comparison group (`segmented-controls-01`: single choice vs multiple choices); existing catalog IDs unchanged; total **155**. The three app screenshots (Health, Calendar, macOS Calendar) are not catalog images.

## Web translation
The right ARIA depends on the **selection model**, so do not treat every segmented control as tabs.

| HIG rule | Web implementation |
|---|---|
| A linear set of 2+ equal segments, each a button | A **`<div role="radiogroup">`** (single choice) of visually-hidden `<input type="radio">` + `<label>` segments (or `button role="radio"`), a **rail** with the selected segment **raised** (white pill, shadow) and **equal widths** (`display:grid; grid-auto-columns:1fr`); each segment **≥ 44 px tall** on touch (24 px floor on fine pointers), whole segment is the hit region (**Buttons GATE**: an attached group is exempt from the 8 px gap rule). |
| Single choice | `role="radiogroup"` + `role="radio"` (`aria-checked`) with **roving tabindex**, **arrow keys move and select**, one tab stop; **always one segment selected** (choose a default). Selected state is shown by **fill/raise plus text weight**, not colour alone; **non-text contrast ≥ 3:1** between selected and unselected (Color gate). |
| Multiple choices (macOS) | A **group of toggle buttons**: `role="group"` with `<button aria-pressed>` per segment (bold/italic/underline); **Space/Enter toggles**, arrows move focus; several may be on. |
| Momentary actions, no selection state | A **`role="group"` of plain `<button>`s** (Reply · Reply all · Forward), no `aria-pressed`, no selected style; **don't mix** with selection segments (rule below). |
| Keep control types consistent | Choose **one model per control**: all radios, all toggles or all actions; an extra "Clear" or "More" action belongs in a **separate adjacent control**, not as a segment. |
| Group functions / show selection at a glance | Keep the segments **attached with shared rail and dividers at every viewport width** (don't wrap into separate buttons); show the current selection in text elsewhere when the control filters content (`aria-live="polite"` result count). |
| Limit the number of segments | **≤ ~5–7 wide, ≤ ~5 on phone widths** (Apple); **more options → a `<select>`, pull-down or tabs with overflow** (`pickers.md`, `pull-down-buttons.md`). This **differs from the CONV of 2–4 segments** in `search-fields.md` for scope bars: that is a stricter product choice for narrow scope controls, Apple's ceiling is 5–7. |
| Consistent segment size | Equal-width grid; **one icon size** and **one text length class** across segments; long labels **wrap or shorten**, never let one segment dwarf the others; `min-width` per segment and horizontal scroll only as a last resort (CONV). |
| Text **or** images, not a mix | All segments **icons** *or* all **text**; icon segments need an **accessible name** (`aria-label`) and a **tooltip** (visible on hover/focus, `title` is not enough): also the visionOS "gaze tooltip". Icons come from Lucide/Phosphor/Ionicons on the web, **never SF Symbols artwork**. |
| Similar content size | Same **character count band** or same icon box; pad with `min-width` and centre content. |
| Nouns / noun phrases, Title Case; no introductory text for text labels | Labels like "Day · Week · Month" **in Title Case** (added to the **Capitalisation table** in `writing.md`: **segment labels: Title Case**); a control with text labels **needs no separate label**, but still needs an **accessible name** (`aria-label="Time range"`) for screen readers; **icon-only** controls get a **visible introductory label or a label under each segment** (macOS guidance). |
| iOS/iPadOS: switch between closely related subviews; tab bar for separate sections | **In-page view switching** (Event / Reminder, List / Map): a segmented control **above the content it switches**; use the **tabs pattern** (`role="tablist"`/`tab`/`tabpanel`, `aria-controls`, automatic activation) **only when it swaps panels of content**; **app-level navigation** = a tab bar or nav (`tab-bars.md`), never a segmented control (`tab-views.md`). |
| macOS: tab view for main-area view switching; segmented for toolbar/inspector | Main area with a **boxed panel** below → **tabs with a tabpanel** (`tab-views.md`); **toolbar/inspector filters or modes** → segmented control (`toolbars.md`, `panels.md`). |
| Spring loading | Optional: on **drag-over** a segment for ~1 s (CONV) activate it (`dragenter` timer, cancel on `dragleave`/`drop`); **always provide the normal click path** (`drag-and-drop.md`). |
| tvOS: split view for filtering; keep focusables away; selection follows focus | For **TV/D-pad web UIs** prefer a **filter list beside the content** (split layout, `split-views.md`) and, if a segmented control is used, **large focus-selected segments** with **generous spacing from other focusable elements** and a **debounce** so passing focus doesn't trigger heavy reloads (CONV); visible focus ring (`focus-and-selection` not yet ingested). |
| visionOS: tooltip on gaze for icon segments | Hover/focus **tooltips with the descriptive text** for every icon segment (also on keyboard focus); no hover-only meaning. |
| Not in watchOS | On wearable-size web views use a **list or picker** instead (`pickers.md`). |

Field-note cross-links:
- `field-notes/principles.md` § 3 and `components.md`: the segmented control's **grey rail above the group it switches** matches Apple's "closely related subviews" use; **compatible**. The field-note recipe stays the visual reference for the web control.
- **Refinement of existing notes (not a contradiction):** `hig/components/menus/buttons.md` (Toggles, pop-ups, segmented row) and `hig/components/layout/tab-views.md` say "segmented = tabs/radiogroup". This page adds that the ARIA role follows the **selection model**: **radio group** (single choice), **toggle-button group** (multiple choice), **plain buttons** (momentary actions), **tabs** only when it switches panels. Those two notes now point here.
- `hig/components/navigation/search-fields.md` (✓): the scope bar uses **2–4 segments** (CONV); Apple's ceiling is **~5–7** (and ~5 on iPhone): both hold, the CONV is stricter.
- `hig/components/layout/tab-views.md` (✓), `tab-bars.md` (✓): tab view vs segmented vs tab bar; `hig/components/layout/split-views.md` (✓): tvOS filtering; `hig/components/menus/toolbars.md` (✓) and `presentation/panels.md` (✓): where segmented controls live; `hig/patterns/drag-and-drop.md` (✓): spring loading; `hig/components/content/charts.md` (✓) and `patterns/charting-data.md` (✓): the D · W · M · 6M · Y range control.
- `hig/foundations/writing.md` (✓): the Capitalisation table now includes **segment labels (Title Case)**; `hig/foundations/color.md` (✓ CRITICAL): selected-state contrast.
- Not yet ingested: Toggles, Text fields, Focus and selection. Steppers (✓ `steppers.md`), Sliders (✓ `sliders.md`).

## Checklist
- [ ] The **selection model is chosen first**: single (`radiogroup`), multiple (`aria-pressed` group) or momentary (plain buttons); **never mixed in one control**.
- [ ] **2+ equal-width segments, ≤ ~5–7 wide / ~5 on phones**; more options → select, pull-down or tabs.
- [ ] Segments are **all text or all icons**, of similar size; icon segments have **`aria-label` and a tooltip**.
- [ ] Text labels are **Title Case nouns/noun phrases**; the control has an **accessible name**; icon-only controls have an **introductory label**.
- [ ] Single choice always has **one selected segment** (a default); selected state is **more than colour** and passes **≥ 3:1**.
- [ ] Roving tabindex, **arrow keys**, Space/Enter, visible focus; each segment **≥ 44 px** on touch.
- [ ] It sits **above the content it switches**; **panel swapping uses the tabs pattern**; **app-level navigation uses a tab bar**.
- [ ] Main-area view switching on desktop uses a **tab view**, toolbar/inspector switching a segmented control.
- [ ] Optional spring-loading has a normal **click path**; TV/D-pad layouts keep other focusables **away** from the control.
- [ ] Segmented controls are **not used on wearable-size views**; a list or picker replaces them.

## Related
- Ingested: Split views (✓), Tab views (✓), Tab bars (✓), Toolbars (✓), Panels (✓), Search fields (✓), Pickers (✓), Pull-down buttons (✓), Buttons (✓ CRITICAL), Charts (✓), Drag and drop (✓), Writing (✓), Color (✓ CRITICAL).
- Not yet ingested: Toggles, Text fields. Steppers (✓ `steppers.md`), Sliders (✓ `sliders.md`).
- Developer docs: SwiftUI `segmented`; UIKit `UISegmentedControl`; AppKit `NSSegmentedControl`.
