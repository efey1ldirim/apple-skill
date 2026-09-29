# Pickers
Source: https://developer.apple.com/design/human-interface-guidelines/pickers · Section: Components › Selection and input · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (all six icons lit on the platform strip **(from screenshot)**; "No additional considerations for visionOS") · Ingested: 2026-09-29 · Apple last updated: **June 5, 2023** (updated guidance for pickers in watchOS; the only change-log row). One DocC fetch, read in full. 8 screenshots (hero → the end of the developer-documentation list) were compared with the fetched text and image alt text line by line: everything matches, including the three iOS/iPadOS tabs (Compact, Inline, Wheels) and all five watchOS pictures. **Read from the fetch only (not in screenshots):** the **change log** row, the light/dark variants of the tab images (screenshots are light), and the image alt texts; the page has **no videos**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **a few numbers**: minute list of **60 values (0–59)**, minute interval must **divide evenly into 60** (quarter-hour 0/15/30/45), countdown timer max **23 h 59 min**.

## In one line
A picker shows **one or more scrollable lists of distinct values** to choose from; the system supplies several styles (list/wheel, date pickers with compact / inline / wheels styles and date / time / date-and-time / countdown modes, macOS textual and graphical, watchOS Digital Crown wheels). **Use one for medium-to-long lists** (pull-down button for short ones, list or table for very large ones), keep **values predictable and logically ordered**, show it **in context (bottom of a window or in a popover), not in a new view**, and consider **coarser minute steps** in date pickers.

## Rules

### Framing (intro)
- The system provides **several picker styles**, each with **different types of selectable values** and a **different appearance**.
- The **exact values shown, and their order, depend on the device language** (and, for date pickers, the **device location**).
- Pickers help people **enter information by choosing single or multipart values**. **Date pickers** add ways to choose: **select a day in a calendar view** or **enter dates and times with a numeric keypad**.

### Best practices
- **should** **Consider using a picker to offer medium-to-long lists of items.**
  - For a **fairly short list**, use a **pull-down button** instead: a picker makes scrolling many items easy but **adds too much visual weight to a short list**.
  - For a **very large set**, use a **list or table**: they **adjust in height**, and tables can have an **index** that makes it **much faster to target a section**.
- **should** **Use predictable and logically ordered values.** Many values are **hidden** before interaction, so people should be able to **predict** them (an **alphabetised list of countries**) and move through quickly.
- **should** **Avoid switching views to show a picker.** Show it **in context, below or near the field being edited**; it typically appears **at the bottom of a window or in a popover**.
- **should** **Consider less granularity for minutes in a date picker.** By default the minute list has **60 values (0 to 59)**; you may **increase the interval as long as it divides evenly into 60** (e.g. **quarter-hour: 0, 15, 30, 45**).

### Platform considerations
- **visionOS:** no additional considerations.

#### iOS, iPadOS: date pickers
- A date picker is an **efficient interface for selecting a specific date, time, or both**, using **touch, a keyboard or a pointing device**.
- **Four styles:**
  - **Compact:** a button that shows editable date and time content **in a modal view**.
  - **Inline:** **for time only**, a button that displays **wheels of values**; **for dates and times**, an **inline calendar view**.
  - **Wheels:** a set of **scrolling wheels** that also supports **data entry through built-in or external keyboards**.
  - **Automatic:** a **system-determined style** based on the platform and date picker mode.
- **Four modes**, each with a different set of values:
  - **Date:** months, days of the month and years.
  - **Time:** hours, minutes and (optionally) **AM/PM**.
  - **Date and time:** dates, hours, minutes and (optionally) AM/PM.
  - **Countdown timer:** hours and minutes, **up to 23 hours 59 minutes**; **not available in the inline or compact styles**.
- **should** **Use a compact date picker when space is constrained.** The compact style shows a **button with the current value in the app's accent colour**; tapping it **opens a modal view** with a **familiar calendar-style editor and time picker**; inside it people can make **multiple edits** to dates and times **before tapping outside the view to confirm** their choices.

#### macOS
- **should** **Choose a date picker style that suits your app.** **Two styles: textual and graphical.**
  - **Textual:** useful with **limited space** and when people make **specific date and time selections**.
  - **Graphical:** useful to let people **browse days in a calendar**, **select a range of dates**, or when **the look of a clock face** suits the app.
- Developer guidance: `NSDatePicker`.

#### tvOS
- Pickers are available in tvOS **with SwiftUI** (`Picker`).

#### watchOS
- Pickers show **lists of items navigated with the Digital Crown**, which helps people **manage selections precisely and engagingly**.
- A picker can show a list in the **wheels style**; watchOS can also show **date and time pickers in the wheels style** (`Picker`, `DatePicker`).
- You can configure a picker to show an **outline, a caption and a scrolling indicator**.
- **For longer lists**, the **navigation link** style shows the picker **as a button**; tapping it shows the **list of options**, and people can also **scrub through the options with the Digital Crown without tapping the button** (`navigationLink`).

## Specs & values

| Item | Value |
|---|---|
| Use for | medium-to-long lists; short → pull-down button; very large → list/table with index |
| Ordering | predictable, logical (alphabetised countries) |
| Placement | in context: bottom of a window or in a popover, not a new view |
| Minute list default | **60 values (0–59)** |
| Minute interval | any value that **divides evenly into 60** (e.g. 15 → 0/15/30/45) |
| iOS/iPadOS styles | compact (modal) · inline (calendar; wheels for time only) · wheels (keyboard entry too) · automatic |
| iOS/iPadOS modes | date · time · date and time · countdown timer |
| Countdown timer | hours + minutes, **max 23:59**; **not in inline or compact** styles |
| Compact button | current value in the **accent colour**; edits confirmed by **tapping outside** |
| macOS styles | textual (limited space, specific selections) · graphical (calendar, ranges, clock face) |
| watchOS | list/date/time in **wheels** style with Digital Crown; long lists via **navigation link** button |
| Locale | values and order follow **device language / location** |
| Sizes, spacing, hit regions | **none given on this page** |
| Developer docs | SwiftUI `Picker`, `DatePicker`, `navigationLink` · UIKit `UIDatePicker`, `UIPickerView` · AppKit `NSDatePicker` |
| Video | none |
| Apple's Related list | Pull-down buttons ✓ · Lists and tables ✓ |
| Change log | June 5, 2023: updated guidance for pickers in watchOS |

## Visual notes (from screenshots and downloaded pictures)
- **Hero (screenshot):** a red-to-orange card with **stacked rounded rectangles** in decreasing size above and below a **highlighted centre row** outlined by a pale double border and labelled **"Item"** (monospaced), with a **small chevron ‹ to its right**: one selected item in the middle of a scrollable list, neighbours fading away **(from screenshot)**.
- **iOS/iPadOS tabs (catalog `pickers-01`, screenshots):**
  - **Compact** (caption "In a compact layout, a picker opens as a popover over your content."): a grey card with a **"Date" row and a blue-tinted pill "April 1, 2025"**, and beneath it a **popover calendar** "April 2025 ›" with **‹ ›** month arrows, weekday header SUN–SAT, **1 highlighted in a light-blue circle** (selected, Tuesday), **21 in blue** (today), days to 30.
  - **Inline** (caption "In an inline layout, a picker opens inline with your content."): the same calendar **inside the card**, with **"Date" and a green toggle switched on** in the header row and a hairline under it; no popover.
  - **Wheels** (caption "Another example of an inline picker uses wheels to choose values for date and time."): **"Time" with a blue pill "8:00 PM"** and **three wheels**: hours (5…11, **8 selected**), minutes (57, 58, 59, **00 selected**, 01, 02, 03), and **AM / PM (PM selected)** in a **grey rounded selection band**; values fade and shrink towards the top and bottom edges (light and dark variants exist).
  - The page text under all three tabs repeats "Use a compact date picker when space is constrained…", i.e. the tab set shares one paragraph.
- **watchOS (catalog `pickers-02`, screenshots):** three black watch faces with **10:09 and the blue "Title"** at the top and a round **‹ back** button: **(1)** a **green-outlined list** with a **green "Label" tag**, items **"After / Current / Next"** (Current centred) and a **green "Done" button** below; **(2)** **three wheels** with a **"Day" tag** (values 5·6·7 / 08·09·10 / 2024·**2025**·2026, the middle one outlined green) and a green **"Next"** button; **(3)** three wheels with a **"Minutes" tag** in **05 : 09 : 09** (hh:mm:ss style with colons; the middle wheel outlined green) and a green **"Done"** button **(from screenshot)**.
- **watchOS navigation style (catalog `pickers-03`, screenshots):** left: a **dark pill button "Item" with the caption "Second"** (the picker as a button); right: the **list** "First / **Second ✓** (green check) / Third" under a back arrow **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Pickers · Best practices · Platform considerations · Resources · **Change log**; side navigation shows **Selection and input** open with **Pickers** bold, then Segmented controls, Sliders, Steppers, Text fields, Toggles, Virtual keyboards.
- **Fetch script run:** 3 new comparison groups (`pickers-01` tabs Compact/Inline/Wheels, `pickers-02` and `pickers-03` watch sets); existing catalog IDs unchanged; total **154**.

## Web translation
Three web families: **native `<select>`** (list), **date/time inputs**, and **custom wheel/calendar widgets**.

| HIG rule | Web implementation |
|---|---|
| Medium-to-long list → picker; short → pull-down; huge → list or table | **≤ ~5 options:** radio group, segmented control or menu button (`pull-down-buttons.md`, CONV threshold); **~6–50:** `<select>` or a listbox popover; **hundreds+:** a searchable **list/table with an index** (alphabet jump bar) or **combobox with filtering** (`combo-boxes.md`, `lists-and-tables.md`), never a wheel with 500 items. |
| Predictable, logically ordered values | **Sort options predictably** (alphabetical countries, numeric, chronological); the **first typed letters jump** to matches (native `<select>` does this); locale-aware sort (`Intl.Collator`) and **locale-specific values/order** (language for names, region for date formats). |
| Show in context, not a new view | Open the list **as a popover anchored to the field** (`<select>`'s native popup, a `popover` + anchor positioning, or an inline expand); on small screens a **bottom sheet** is the "bottom of a window" analogue (`sheets.md`, `popovers.md`); **don't navigate to a separate page** just to choose a value. |
| Date and time | **Use native `<input type="date">`, `"time"`, `"datetime-local"`, `"month"`, `"week"`** first (system pickers, keyboard entry and locale for free); `min`/`max`, **`step`** for granularity; add a custom picker only for **ranges, multiple dates or brand needs** (CONV). Always allow **typing** as well as picking (Apple's "keyboard entry"). |
| Less granularity for minutes | `<input type="time" step="900">` (seconds; **900 = 15 min**) or a custom minute wheel with **an interval that divides evenly into 60** (1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30); validate typed values against the step and show a fix ("Choose a time on the quarter hour"). |
| Compact style: button with the value in the accent colour; modal editor; confirm by tapping outside | A **button/pill showing the current value** in the accent colour (**text contrast ≥ 4.5:1**, Color gate) opening a **popover calendar/time editor** (`aria-haspopup="dialog"`); allow **several edits before closing**, **outside click or Esc confirms**, and give a visible **"Done"** on touch for clarity (CONV: outside-tap-only is not discoverable); one prominent action per view (Buttons GATE). |
| Inline style: calendar inside the layout with a toggle in the header | An **expandable row**: label + value pill (or **toggle that reveals the picker**), the calendar rendered **in the flow** (`aria-expanded`), no overlay; keep the toggle's label ("Date") and state announced (`aria-checked`). |
| Wheels style (iOS) | A **CSS scroll-snap column** per part (`scroll-snap-type: y mandatory; scroll-snap-align: center`), a **selection band** in the centre with **fade masks** (`mask-image` gradient), `role="listbox"`/`spinbutton` semantics with **arrow-key / PageUp/PageDown** stepping and **typed entry** (numeric keypad via `inputmode="numeric"`), `prefers-reduced-motion` respected; expose the **current value in text** next to the wheels (the title-row pill) so it isn't only visual. |
| Countdown timer (≤ 23:59; not in compact/inline) | A **duration** input: hours + minutes fields/wheels (`<input type="number" min="0" max="23">` and `max="59"`), **no native `<input type="duration">`** so build it; announce the total ("1 hour 30 minutes"); cap at 23:59 by design (CONV). |
| macOS textual vs graphical | **Textual:** segmented `dd / mm / yyyy` fields (the native input does this on desktop) for compact forms and precise entry; **graphical:** a **calendar grid** (`role="grid"`, arrow-key navigation, PageUp/PageDown month, Home/End week, selected day with a **non-colour** cue: ring/filled circle) with **range selection** where needed, plus a clock-face/time control only when the look suits the product. |
| Locale | Format with **`Intl.DateTimeFormat`**, honour the user's **first weekday and 12/24-hour clock**, right-to-left calendars and translated month/day names (`right-to-left.md`); never hard-code "AM/PM". |
| tvOS / visionOS | On **TV/D-pad** web UIs use a **focusable list or wheel with arrow-key stepping**, large targets; visionOS: the standard popover/list with gaze-hover-free activation (`hig/foundations/immersive-experiences.md`); nothing extra from this page. |
| watchOS: Digital Crown wheels, outline/caption/scroll indicator, navigation-link button for long lists | No crown on the web: use **wheel/scroll-snap with a visible scroll indicator and caption** for wearable-size web views, and for **long lists a button that opens a full-screen list with a ✓ on the selected row** (as in the "Item / Second" example); support **swipe/drag and arrow keys** instead of the crown. |
| Accessibility | Every picker has a **visible label**; the selected value is **text**, not only position; **arrow keys, Home/End, type-ahead**; wheels expose **`aria-valuenow`/`aria-valuetext`** or a native `<select>`; **44 px** rows on touch (Buttons GATE), visible focus, `prefers-reduced-motion`. |

Field-note cross-links:
- `hig/components/menus/pull-down-buttons.md` (✓) and `pop-up-buttons.md` (✓): the short-list alternative; `hig/components/layout/lists-and-tables.md` (✓): the very-large-set alternative with an **index**; `hig/components/selection-and-input/combo-boxes.md` (✓): type-or-pick.
- `hig/components/presentation/popovers.md` (✓) and `sheets.md` (✓): where a picker appears (popover / bottom of a window); `hig/patterns/entering-data.md` (✓): prefer choices over typing, sensible defaults, keyboard entry; `hig/patterns/settings.md` (✓): pickers in settings screens.
- `hig/foundations/color.md` (✓ CRITICAL): the accent-colour value and today/selected cues (never colour alone); `hig/foundations/right-to-left.md` (✓): calendars and wheels in RTL; `hig/foundations/writing.md` (✓): labels.
- Not yet ingested: Toggles (the inline style's header switch), Text fields. Steppers (✓ `steppers.md`), Sliders (✓ `sliders.md`). Segmented controls (✓ `segmented-controls.md`).
- `field-notes/components.md` mentions an "icon picker" only as a control-row example: no conflict.

## Checklist
- [ ] Right control for the list length: **radio/segmented/menu for short, select or listbox for medium-long, searchable list with index for huge**.
- [ ] Options are **sorted predictably** and **locale-aware**; type-ahead works.
- [ ] The picker opens **in context** (popover, inline expand or bottom sheet), never a separate page.
- [ ] Dates and times use **native inputs** first; **typing is always possible**; `min`/`max`/`step` set.
- [ ] Minute steps are **coarser when the task allows** (interval divides 60; `step` validated).
- [ ] The **compact** pattern shows the current value as an accent-coloured button (≥ 4.5:1), allows **several edits**, and confirms by **outside click / Esc / Done**.
- [ ] Custom **wheels** use scroll-snap, a selection band, **keyboard and numeric entry**, a **text value** and reduced-motion support.
- [ ] Custom **calendars** are a `grid` with arrow-key navigation and **non-colour** selected/today cues; **range selection** where needed.
- [ ] A countdown/duration input caps at **23:59** (or the product's own limit, stated).
- [ ] Every picker has a **visible label**, **44 px** touch rows, visible focus and screen-reader values.

## Related
- Ingested: Pull-down buttons (✓), Pop-up buttons (✓), Lists and tables (✓), Combo boxes (✓), Popovers (✓), Sheets (✓), Entering data (✓), Settings (✓), Color (✓ CRITICAL), Right to left (✓), Writing (✓).
- Not yet ingested: Toggles, Text fields. Steppers (✓ `steppers.md`), Sliders (✓ `sliders.md`). Segmented controls (✓ `segmented-controls.md`).
- Developer docs: SwiftUI `Picker`, `DatePicker`, `navigationLink`; UIKit `UIDatePicker`, `UIPickerView`; AppKit `NSDatePicker`.
