# Pop-up buttons
Source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons · Section: Components › Menus and actions · Supported platforms: **iOS, iPadOS, macOS, visionOS** ("No additional considerations for iOS, macOS, or visionOS. Not supported in tvOS or watchOS"; the iPhone, iPad, Mac and visionOS icons are lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **October 24, 2023** (artwork added). One DocC fetch, read in full. 4 screenshots (light-mode page, hero → the "Change log" heading) were compared with the fetched text and image alt text line by line: everything matches. **Read from the fetch only:** the two **change-log rows**, the dark variants and the three developer-doc names. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
A pop-up button opens a **menu of mutually exclusive options**; after a choice **the menu closes and the button shows the current selection**. Use it for **one choice from a flat list** that **changes the content or surrounding view**, always with **a useful default**, a **visible label so people can predict the options**, and an optional **Custom** item for rare cases. Need **actions, multi-select or a submenu**? Use a **pull-down button** instead.

## Rules

### Framing (intro)
- After people choose an item from the menu, **the menu closes**, and the button **can update its content to show the current selection**.
- Illustration (catalog `pop-up-buttons-01`): Calendar's new-event form on iPhone. In the closed state the **Repeat** row's value is "Never" with a **stacked up/down chevron**; open, **a menu emerges from the Repeat button** listing **Never (checked), Every Day, Every Week, Every 2 Weeks, Every Month, Every Year**, a separator, then **Custom** **(from screenshot)**.

### Best practices
- **should** **Use a pop-up button for a flat list of mutually exclusive options or states** that **affects the content or the surrounding view**. **Use a pull-down button instead** if you need to:
  - **offer a list of actions**;
  - **let people select multiple items**;
  - **include a submenu**.
- **should** **Provide a useful default selection.** The button shows the current selection; **if nothing is chosen yet it shows the default item you specify**. **When possible, make the default the item most people are likely to want.**
- **should** **Let people predict the options without opening it**: an **introductory label**, or a **button label describing the effect**, gives the options context.
- **may** **Use one when space is limited and you don't need to show all options all the time**: a **space-efficient** way to present a wide array of choices.
- **may** **Include a "Custom" option** for additional items useful in some situations. It **avoids cluttering the interface** with items or controls needed only occasionally; you can also show **explanatory text below the list** to explain how the options work.

### Platform considerations
- **iOS, macOS, visionOS:** no additional considerations. **tvOS, watchOS:** not supported.
- **iPadOS:** **inside a popover or modal view, consider a pop-up button instead of a disclosure indicator** to present **multiple options for a list item**: people **pick from the menu without navigating to a detail view**. Use it when the set of options is **fairly small and well defined** and **works well in a menu**.

## Specs & values
The page has **no sizes, counts or timings**. Facts it states:

| Item | Value |
|---|---|
| Content | flat list, mutually exclusive options or states; no submenus, no multi-select, no actions |
| After a choice | menu closes; the button shows the selection (or the default if none yet) |
| Default | the item most people are likely to want |
| Predictability | introductory label or an effect-describing button label |
| Custom option | optional last item for occasional cases; optional explanatory text under the list |
| Use a pull-down instead for | actions · multiple selection · submenu |
| iPadOS | in a popover/modal, a pop-up button can replace a disclosure indicator for a small, well-defined option set |
| Change log | Oct 24, 2023 artwork added · Sep 14, 2022 iPadOS popover/modal guideline |
| Developer docs | SwiftUI `MenuPickerStyle` · UIKit `changesSelectionAsPrimaryAction` · AppKit `NSPopUpButton` |
| Related HIG pages | Pull-down buttons ✓ · Buttons ✓ CRITICAL · Menus ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a **dashed rounded frame** holding a column of five "Option" rows in which **the third row is a raised, light selected capsule** with **a stacked up/down chevron in a rounded square at its trailing edge**; a **horizontal double arrow** marks the button's width and a **vertical measure bracket** its height; a faint dotted leader follows the selected label **(from screenshot)**. It shows the **selected option as the button**, the other options above and below it (the dashed frame stands for the menu), and the **up/down chevron as the pop-up affordance**.
- **Two iPhone screenshots** side by side (closed, open) of Calendar's "New" sheet: a segmented **Event/Reminder** control, an **All-day** switch, **Starts/Ends** with date and time chips, then **rows whose values are pop-up buttons** (Travel Time "None", Repeat "Never", Calendar "Home" with a coloured dot, Alert "None") each followed by the stacked chevron, while **Invitees "None"** and **Add attachment… "Detail"** end in a **plain forward chevron** (they navigate to another screen) **(from screenshot)**. **So the two chevrons distinguish "choose here" from "go to a detail view".** In the open state a rounded translucent menu with a shadow floats above the Repeat row.
- **Page chrome (from screenshot):** the TOC reads Pop-up buttons · Best practices · Platform considerations · Resources · Change log. The side navigation is scrolled and shows **Menus and actions** open with **Pop-up buttons** highlighted and the later groups Presentation (Action sheets, Alerts, Page controls, Panels, Popovers, Scroll views, Sheets, Windows) and Selection and input (Color wells, Combo boxes, Digit entry views, Image wells, Pickers, Segmented controls…). The last screenshot ends at the **Change log** heading, so its two rows come from the fetch.
- **Catalog:** `pop-up-buttons-01`, two neutral images (closed → open); no do/don't pair. Nothing is measured.
- **Text that is not in the fetch:** the hero labels and the in-phone text above.

## Web translation
The web's pop-up button is the **single-choice select**: native `<select>`, or a **select-only combobox** when it must be styled. The **pull-down button** is the **menu button** (`menus.md`, actions). Choose by the job: **a value → select; a command → menu button**.

| HIG rule | Web implementation |
|---|---|
| Flat list of mutually exclusive options/states | `<label for="repeat">Repeat</label><select id="repeat">…</select>`; no nested groups except real `<optgroup>`; **no multiple** (`multiple` makes it a list box, use checkboxes/`menuitemcheckbox` for that). For a styled version follow the **ARIA select-only combobox** (`role="combobox"`, `aria-haspopup="listbox"`, `aria-expanded`, `aria-controls`, `role="listbox"`/`option` with `aria-selected`; **Enter/Space/ArrowDown open, arrows move, type-ahead, Home/End, Esc closes and restores focus, Enter picks and closes**). Prefer the **native `<select>`**: mobile OS pickers, right-to-left and accessibility come free. The Chromium-only customisable select (`appearance: base-select` with `::picker(select)`) is a progressive enhancement, never a requirement. |
| Menu closes and the button shows the selection | The trigger's **visible text is the selected option's label** and updates on `change`; keep the value as the source of truth (`aria-live` is not needed; the combobox value is announced). Don't show a generic "Select…" after a value exists. |
| Useful default | Preselect the **most likely option** (the value most users pick, or the current app state); use a real placeholder option ("Select a Country", `disabled selected`) **only** when no default can be justified, and validate before submit. |
| Predict the options without opening | A **visible `<label>`** left of or above the control ("Repeat", "Sort by") and/or a **button text that names the effect** ("Sort by: Date"); put the current value in the trigger; add helper text via `aria-describedby` when rules aren't obvious. Placeholder text is not a label. |
| Space-efficient for a wide array | Use it when **there are more options than fit as radios/segments** (rule of thumb ≥ 5–6, CONV) or when space is tight; for **2–4 options that fit**, prefer radio group or segmented control so nothing is hidden (`pickers`/`segmented-controls` when ingested). Beyond ~15–20 options add **type-ahead filtering** (a searchable combobox), not a longer list. |
| Custom option for occasional cases | Last item **"Custom"** (Title Case) after a separator (`<hr>` inside a `<select>` is allowed in current browsers; otherwise an `<optgroup>`); choosing it **reveals the extra fields inline or opens a dialog** (per `menus.md` add "…" when it opens another view: "Custom…"); Apple's own screenshot shows "Custom" without an ellipsis, follow the Menus rule for consistency. Optional **explanatory text below** the control via `aria-describedby`, not inside the option list. |
| Pull-down instead for actions, multi-select, submenus | If the items **run commands**, are **multi-select** or **nest**, build a **menu button** (`aria-haspopup="menu"`), not a select; don't mix values and actions in one list. |
| iPadOS: pop-up instead of a disclosure indicator in a popover/modal | In a settings-style list inside a popover, dialog or side sheet, render **small, well-defined option sets as an inline select on the row** (value on the trailing side, up/down chevron) instead of a row that drills into a detail screen; keep a **forward chevron only for rows that navigate**. Use the two chevrons consistently so people know whether a tap chooses or navigates. |
| Affordance | The trigger is a real **`<button>`/`<select>` with a visible boundary or a trailing stacked up/down chevron** (mask/SVG, `aria-hidden`); hit region **≥ 44 × 44 px on touch**, label + value contrast ≥ 4.5:1, states hover/`:active`/`:focus-visible`, disabled explains why (`buttons.md` gate applies to the trigger). |
| Menu placement | Native handles it. A custom listbox anchors to the trigger and opens below (or **overlays so the selected option lines up with the trigger**, as macOS does), flips near the viewport edge (Floating UI) and never exceeds the viewport (`max-block-size`, scroll). |
| Copy | Option labels in **Title Case** like menu items ("Every 2 Weeks", `writing.md`), parallel wording, no articles, sensible order (by frequency or natural order; "Never" first for time intervals), the current value checked in an open custom listbox. |

Field-note cross-links:
- `hig/components/menus/menus.md` (✓): labels, unavailable items, ellipsis, length, checkmark for the selected option; pop-up buttons omit submenus.
- `hig/components/menus/buttons.md` (✓ CRITICAL): the trigger meets the Buttons gate (hit region, names, states); pop-up buttons are a button variant.
- `hig/components/menus/context-menus.md` (✓): a context menu is for actions, not values; different job.
- `hig/patterns/entering-data.md` (✓): choose the right input for a known set, prefer selection over typing.
- `hig/foundations/writing.md` (✓): Title Case option labels; helper text sentence case.
- `hig/components/layout/disclosure-controls.md` (✓): the disclosure indicator the iPadOS rule replaces.
- No conflict with a field note.

## Checklist
- [ ] The control chooses **one value from a flat list** (no actions, no multi-select, no submenu); otherwise a menu button is used.
- [ ] Native `<select>` is used unless styling is required; a custom version implements the **select-only combobox** keyboard model and restores focus.
- [ ] The trigger shows the **current selection** (or a justified default) and has a **visible label** so the options are predictable.
- [ ] Options are in Title Case, parallel, ordered sensibly; a **Custom** item sits last, after a separator, and reveals its extra input.
- [ ] Sets larger than ~15–20 options add filtering; sets of 2–4 that fit use radios or a segmented control instead.
- [ ] In popovers/modals/side sheets, small option sets are inline selects and **only navigating rows carry a forward chevron**.
- [ ] The trigger passes the Buttons gate (≥ 44 px hit region on touch, states, contrast, disabled reason).

## Related
- Ingested: Menus (✓), Buttons (✓ CRITICAL), Context menus (✓), Disclosure controls (✓), Entering data (✓), Writing (✓).
- Ingested since: Pull-down buttons (✓). Popovers (✓ `components/presentation/popovers.md`). Sheets (✓ `components/presentation/sheets.md`). Pickers (✓ `components/selection-and-input/pickers.md`). Not yet ingested: Segmented controls.
- Developer docs: `MenuPickerStyle` (SwiftUI), `changesSelectionAsPrimaryAction` (UIKit), `NSPopUpButton` (AppKit).
