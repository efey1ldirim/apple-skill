# Toggles
Source: https://developer.apple.com/design/human-interface-guidelines/toggles · Section: Components › Selection and input · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (all six icons lit on the platform strip **(from screenshot)**; "No additional considerations for tvOS, visionOS, or watchOS") · Ingested: 2026-09-29 · Apple last updated: **March 29, 2024** (enhanced guidance for switches in macOS apps, clarified when a checkbox has a title, added artwork for radio buttons; earlier row: September 12, 2023, updated artwork). One DocC fetch, read in full. 10 screenshots (hero → the "Change log" heading) were compared with the fetched text, captions and image alt text line by line: everything matches, with **one wording mismatch between an image and its alt text** (see *Visual notes*). **Read from the fetch only (not in screenshots):** the two **change-log rows** (the screenshots end at the table header), the light/dark variants of the pictures and the image alt texts; the page has **no videos**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical, but it is one of the button-like controls named on the **Buttons** page (a CRITICAL page): see *Web translation* for the Buttons GATE and Color gate. The page has **a few numbers**: radio groups of **two to five** (more than about five → pop-up button).

## In one line
A toggle lets people **choose between a pair of opposing states** (on / off) with **a different appearance for each state**. Styles: **switch**, **checkbox**, **radio buttons** (macOS also), and **buttons that behave like toggles** (background change). **Use a toggle for two opposing values that affect the state of content or a view** (not for choosing from a list: pop-up button), **identify what it affects**, and **make the state difference obvious without relying on colour alone**. iOS/iPadOS: **switch only in a list row** (no label needed), keep the default green unless the accent colour has enough contrast; **outside a list use a toggle-style button** with an icon and a background highlight. macOS: switches, checkboxes and radio buttons live **in the window body, never in a toolbar or status bar**; **checkbox** for one on/off setting or a hierarchy (with a **mixed** state), **radio buttons for 2–5 mutually exclusive options**, **switch to emphasise** (mini switch in grouped forms).

## Rules

### Framing (intro)
- A toggle can have **various styles (switch, checkbox)**, and **platforms use them differently** (see *Platform considerations*).
- **All platforms** also support **buttons that behave like toggles** by using a **different appearance for each state** (`ToggleStyle`).

### Best practices
- **should** **Use a toggle to choose between two opposing values that affect the state of content or a view.** A toggle **always manages the state of something**; for other actions, **such as choosing from a list of items, use a different component like a pop-up button**.
- **should** **Clearly identify the setting, view or content the toggle affects.** Surrounding **context generally gives enough information**; **in some cases, often in macOS apps, supply a label** describing the state the toggle controls. A **button that behaves like a toggle** generally uses **an interface icon that communicates its purpose**, and you **update its appearance (typically the background) to reflect the state**.
- **must** **Make the visual differences in a toggle's state obvious.** For example **add or remove a colour fill, show or hide the background shape, or change inner details (a checkmark or dot)**. **Avoid relying solely on different colours** to communicate state, because **not everyone can perceive the differences**.

### Platform considerations
- **tvOS, visionOS, watchOS:** no additional considerations.

#### iOS, iPadOS
- **must** **Use the switch style only in a list row.** **No label is needed**: the row's content provides the context for the state the switch controls.
- **should** **Change a switch's default colour only if necessary.** The **default green** works in most cases; you may use the **app's accent colour** instead, but it must **provide enough contrast with the uncoloured appearance to be perceptible**. (Pictures: *Standard switch color*, *Custom switch color*.)
- **must** **Outside a list, use a button that behaves like a toggle, not a switch.** Example: the **Phone** app's **filter button** toggles a filter of recent calls; a **blue highlight** shows when it is **active** and **is removed when inactive**.
- **should** **Avoid a label that explains a toggle-button's purpose.** The **interface icon plus the alternative background appearances** tell people what the button does (`changesSelectionAsPrimaryAction`).

#### macOS
- macOS supports the **switch** style, the **checkbox** style, and defines **radio buttons** that can provide similar behaviours.
- **must** **Use switches, checkboxes and radio buttons in the window body, not the window frame.** In particular **avoid them in a toolbar or status bar**.

##### Switches (macOS)
- **should** **Prefer a switch for settings you want to emphasise.** A switch has **more visual weight than a checkbox**, so it suits **controlling more functionality** (e.g. **turning a group of settings on or off** instead of just one).
- **may** **Within a grouped form, consider a mini switch for a single-row setting.** A mini switch's **height is similar to buttons and other controls**, giving **rows a consistent height**; for a **hierarchy of settings** in a grouped form use a **regular switch for the primary setting and mini switches for the subordinate ones** (`GroupedFormStyle`, `ControlSize`).
- **should not** **In general, replace a checkbox with a switch.** If the UI already uses a checkbox, keep it.

##### Checkboxes (macOS)
- A checkbox is a **small, square button**: **empty when off**, **a checkmark when on**, and **a dash when mixed**. It typically has a **title on its trailing side**; in an **editable checklist** it may appear **without a title or other content**.
- **should** **Use a checkbox instead of a switch for a hierarchy of settings.** The visual style **aligns well and communicates grouping**: use **alignment (generally along the leading edge) and indentation** to show **dependencies**, e.g. **one checkbox governing subordinate checkboxes**.
- **may** **Consider radio buttons for more than two mutually exclusive options** (each option gets **its own unique label**).
- **should** **Consider a label to introduce a group of checkboxes when their relationship isn't clear**: **describe the set of options** and **align the label's baseline with the first checkbox** in the group.
- **must** **Accurately reflect a checkbox's state in its appearance.** States: **on, off, mixed**. If a checkbox **globally turns multiple subordinate checkboxes on and off**, show **mixed** when the subordinates differ (e.g. a text-style setting that turns all styles on/off while people can choose bold, italic or underline individually; `allowsMixedState`).

##### Radio buttons (macOS)
- A radio button is a **small, circular button followed by a label**, typically in **groups of two to five**, presenting **mutually exclusive choices**.
- **States:** **selected (a filled circle)** or **deselected (an empty circle)**. A **mixed state (a dash)** exists but is **rarely useful** because multiple states are communicated with **additional radio buttons**; if you need to show a mixed state, **use a checkbox instead**.
- **should** **Prefer a set of radio buttons for mutually exclusive options**; to choose **multiple options in a set, use checkboxes**.
- **should** **Avoid too many radio buttons in a set**: a long list takes space and overwhelms. **More than about five options → a component like a pop-up button.**
- **should** **For a single on/off setting prefer a checkbox**: the **presence or absence of the checkmark** makes the state **easier to understand at a glance**. In **rare cases** where one checkbox doesn't clearly communicate the opposing states, use **a pair of radio buttons, each labelled with the state it controls**.
- **should** **Use consistent spacing when radio buttons are arranged horizontally**: **measure the space for the longest label and use that measurement consistently** (equal-width columns).

## Specs & values

| Item | Value |
|---|---|
| Styles | switch · checkbox · radio buttons (macOS) · toggle-style button (all platforms) |
| Use for | two opposing values affecting content or a view; not list selection (pop-up button) |
| State cues | fill on/off, background shape shown/hidden, inner detail (check/dot); never colour alone |
| iOS/iPadOS switch | **only in a list row**, no label; default **green**, custom accent must contrast with the uncoloured state |
| Outside a list (iOS) | toggle-style button: icon + background highlight when active (Phone filter, blue) |
| macOS placement | window **body**, never toolbar or status bar |
| macOS switch | emphasise; regular for primary, **mini switch** for subordinate/single-row settings |
| macOS checkbox | small square; empty = off, ✓ = on, **–** = mixed; title on the **trailing** side; keep checkboxes (don't swap for switches); hierarchy via leading alignment + indentation; group label baseline aligned with the first checkbox |
| macOS radio buttons | small circle + label; groups of **2–5**; selected = filled circle; mixed rarely useful; >~5 → pop-up button; horizontal layouts use equal spacing for the longest label |
| Sizes, spacing, hit regions | **none given on this page** (except "consistent spacing", "mini switch height ≈ other controls") |
| Developer docs | SwiftUI `Toggle`, `ToggleStyle` · UIKit `UISwitch`, `changesSelectionAsPrimaryAction` · AppKit `NSButton.ButtonType.toggle`, `NSSwitch`, `allowsMixedState` |
| Video | none |
| Apple's Related list | Layout ✓ |
| Change log | March 29, 2024: enhanced macOS switch guidance, clarified when a checkbox has a title, added radio-button artwork · September 12, 2023: updated artwork |

## Visual notes (from screenshots and downloaded pictures)
- **Hero (screenshot):** a red-to-orange card with **two labelled switches**: the top **"Label" with a dark-red switch in the ON position (white thumb at the right, a small "|" mark at the left)**, the bottom **"Label" with a light-red switch OFF (thumb at the left, a small "○" at the right)**; dotted leader lines run from each label to its switch; a **width bracket** above the top switch and a **height I-beam** at its right. The alt text: *two labelled switch controls*. The on/off marks ("|" and "○") are the accessibility on/off labels **(from screenshot)**.
- **iOS switch colour (catalog `toggles-01`, screenshots):** two grouped-list cards, each with rows **"Title"** and a hairline: **Standard switch color**: top row switch **off (light grey track, white thumb)**, bottom **on in green**; **Custom switch color**: the same with the **on switch in purple/indigo** **(from screenshot)**.
- **Phone filter (catalog `toggles-02`, screenshots):** two iPhone screens "Recents" with **Edit**, an **"All | Missed" segmented control** and a **round filter button at the trailing corner**: left, **Missed selected, the filter button filled blue with a white filter glyph** (toggle active; calls listed in red for missed: Juan Chavez, Mei Chen, Tom Clark, Bill James); right, **All selected, the filter button plain grey with a black glyph** (inactive; all recents including outgoing). Captions: *"The Phone app uses a toggle to switch between all recent calls and various filter options. When someone chooses a filter, the toggle appears with a custom background drawn behind the symbol."* and *"When someone returns to the main Recents view, the toggle appears without anything behind the symbol."* **(from screenshot)**
- **Checkbox hierarchy (screenshot):** a rounded card with **"Checkbox Label" rows**: a **top checkbox in a mixed state (blue with a white dash)**, **indented children** (off, on, on) and **three more top-level rows** (off, on, off): leading-edge alignment + indentation show dependency; **labels use Title Case** here **(from screenshot)**.
- **Checkbox states (catalog `toggles-03`, screenshots):** three light tiles: **On** (blue rounded square with a white ✓), **Off** (pale grey rounded square, no fill), **Mixed** (blue rounded square with a white hyphen) **(from screenshot)**.
- **Radio buttons (screenshot):** a rounded card with **five "Radio Button Label" rows**, the **third selected (blue-ringed circle with a dot)**, the rest pale grey circles; **catalog `toggles-04`**: **Selected** (a **blue disk with a white centre**) and **Deselected** (a pale grey circle). **Wording mismatch:** the alt text describes the selected radio as *a white dot centred in a small circle with a dark fill*, the picture shows a **blue** disk with a white centre; the rule ("a filled circle") holds **(from screenshot)**. A last picture shows **three items in a row with equal horizontal space** ("A long text label", **"Short label"** selected, "A long text label") **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Toggles · Best practices · Platform considerations · Resources · **Change log**; side navigation shows **Selection and input** open with **Toggles** ringed, after Text fields and before Virtual keyboards; the last screenshot ends at the change-log table header.
- **Fetch script run:** 4 new comparison groups (`toggles-01` switch colours, `toggles-02` Phone filter on/off, `toggles-03` checkbox on/off/mixed, `toggles-04` radio selected/deselected); existing catalog IDs unchanged; total **162**. The hero, the checkbox-hierarchy picture, the five-radio picture and the equal-spacing picture are not comparison sets.

## Web translation
Web equivalents: **`role="switch"`** (or a styled checkbox), **`<input type="checkbox">`**, **`<input type="radio">`** groups, and **`aria-pressed` toggle buttons**. This is the page where **Buttons GATE** (roles, hit regions ≥ 44 px) and **Color gate** (non-text contrast ≥ 3:1) bite hardest.

| HIG rule | Web implementation |
|---|---|
| Two opposing states, appearance differs per state | Pick the semantics by **meaning**: **immediate on/off setting** → `role="switch"` (`<button role="switch" aria-checked>` or `<input type="checkbox" role="switch">`); **a value to submit or a list of options** → **checkbox**; **one of N** → **radio group**; **a tool/filter that stays active** → **toggle button** (`<button aria-pressed>`). The label stays the same; the state changes through attributes, not by swapping the label ("Mute", not "Mute/Unmute": `writing.md`). |
| Not for choosing from a list | 3+ options → **radio group (2–5) or `<select>`/menu (more)** (`pop-up-buttons.md`, `pickers.md`), never several switches pretending to be a group. |
| Identify what it affects | A **visible `<label for>`** (or the row title as label via `aria-labelledby`), plus helper text via `aria-describedby`; in list rows the row title is the label (no extra label). **Never an unlabeled switch.** |
| Obvious visual differences; not colour alone | **On/off** = **fill change + thumb position + inner mark** (✓/dot/"I"/"O" marks or icon) with **≥ 3:1 non-text contrast** between the on and off states and against the surface (Color gate); support **`prefers-contrast` / forced-colors** (`forced-color-adjust`, system colours), Windows high-contrast mode, and keep the state also in the **accessible state** (`aria-checked`) and, where space permits, in text ("On"/"Off"). |
| iOS switch only in a list row, no label | Use the **switch in a settings/list row** (label left, switch trailing: field-notes row recipe, `role="switch"` with `aria-checked`); **outside a row (toolbars, filters)** use a **toggle button** with icon + highlighted background + **`aria-pressed`**. |
| Switch colour | Default **green** (`--apple-green`) or the product **accent**, only if the on-track vs off-track contrast is **≥ 3:1**; check both light and dark; the thumb stays white with a shadow token (`field-notes/tokens.md`). |
| Toggle-button (Phone filter) | `<button aria-pressed>` with an **icon** (Lucide `list-filter`, `funnel`; **never SF Symbols artwork**) and a **filled accent background when pressed, none when not**; **no text label explaining the purpose**, but an **`aria-label`/tooltip** ("Filter recents") and **the same name in both states**; **≥ 44 px** hit region (Buttons GATE); **not a primary/prominent button** (Buttons GATE allows exactly one prominent button per view). |
| macOS: body, not toolbar/status bar | In desktop web apps put checkboxes/radios/switches **in content panes, forms and inspectors**; **toolbars use toggle buttons** (`aria-pressed`) instead (`toolbars.md`, `windows.md`). |
| Switch for emphasis; mini switch for subordinate rows | Regular switch for the **master setting**; a **compact switch (smaller thumb, ~row-height match)** for **child settings** that disable when the master is off (`disabled`, dimmed, still focusable, and explained); keep **row height consistent (≥ 44 px touch)**. |
| Don't replace a checkbox with a switch | Keep **checkboxes for form/consent/multi-select** and **switches for immediate settings**; a mixed-use product picks one convention per context (**field-note conflict below**). |
| Checkbox: square, ✓/–/empty, title on trailing side | Native `<input type="checkbox">` with **custom `appearance: none` styling** keeping a visible box (**≥ 3:1 border**), **✓ for on, – for mixed (`indeterminate = true`, `aria-checked="mixed"`)**, label at the **inline-end**, the **whole label clickable**, **24 px floor / 44 px touch** hit region via the label. |
| Checkbox hierarchy / mixed parent | **Parent checkbox** with **`indeterminate`** when children differ; toggling the parent sets all children; **children indented (`padding-inline-start`) and leading-aligned**, in a `role="group"` with a **group label** (`<fieldset><legend>` — baseline aligned with the first checkbox when the legend sits beside them). |
| Radio buttons: 2–5, exclusive, single on/off → checkbox | Native `<input type="radio">` group in a **`<fieldset>`** with `<legend>`, **arrow keys move+select**, one tab stop, one default selected; **more than ~5 → `<select>`/pop-up**; **a single on/off setting → checkbox**, or **a pair of labelled radios ("Show", "Hide")** when a lone checkbox is ambiguous; **never a mixed radio**. |
| Radio horizontal spacing | **Equal-width columns sized to the longest label** (`display:grid; grid-auto-columns: 1fr` or `min-width: <longest>`), consistent gaps; wrap to a vertical list on narrow widths (Layout gate). |
| Keyboard and accessibility | **Space toggles** checkbox/switch/toggle button; **Enter** also on toggle buttons; radios via arrows; **focus ring ≥ 3:1**; announce changes politely (`aria-live` only for results elsewhere, the control itself announces its own state); **respect `prefers-reduced-motion`** for the thumb slide; RTL mirrors the thumb direction (`right-to-left.md`). |
| Field-note switches / consent lists | `field-notes/components.md`: the settings **switch row** (`role="switch"`, right-aligned, `py-2`); the **selection marks are 21 px circles** in consent/choice lists. See **Field-note conflict** below. |

Field-note cross-links:
- **Decision (2026-09-29, resolved with the user):** *mobile-style choice and consent lists use circle selection marks (field-note recipe, 21 px, whole row tappable); desktop-style forms, settings panes and dependency hierarchies use square checkboxes (this page, with a mixed state); the two are never mixed in one list.* `field-notes/*` stays **unedited** (Nonplo-sourced); this decision lives in the HIG notes and is the reading rule for both.
- **Field-note conflict (kept, not edited):** `field-notes/principles.md` ("Selection marks: **circles (21 px), not square checkboxes**: square boxes feel like a form") and `anti-patterns.md` ("Square checkboxes in a consent list → 21 px circle marks, whole row tappable") **differ from this page's macOS checkbox (a small rounded square)**. They are **compatible by platform and use**: the field notes describe **iOS-style list rows and consent/choice lists** (where Apple's own iOS UI uses circle marks and switches), while this page describes **macOS checkboxes for forms and hierarchies**; on the web, **use circle marks in mobile-style choice lists and square checkboxes in desktop forms and dependency hierarchies**, and never mix both in one list.
- `field-notes/components.md` (settings **switch row**, right-aligned, `role="switch"` + `aria-checked`), `tokens.md` (component boundaries ≥ 3:1; thumb shadow), `engineering-gotchas.md` (shadows vanish on black): apply to switch tracks and thumbs; `anti-patterns.md` ("each switch in its own bordered box" → rows in one group with hairlines): **consistent** with the grouped-form guidance here.
- `hig/components/menus/buttons.md` (✓ CRITICAL) and **Buttons GATE**: toggle buttons are buttons (44 px hit region, exactly one prominent per view, never primary + destructive); its "Toggles, pop-ups, segmented controls" row now points here; `segmented-controls.md` (✓): multi-choice segments are `aria-pressed` groups.
- `hig/components/menus/pop-up-buttons.md` (✓) and `pickers.md` (✓): the list alternatives; `hig/components/layout/lists-and-tables.md` (✓): switches in list rows; `hig/patterns/settings.md` (✓): settings screens (defaults, group toggles); `hig/components/presentation/alerts.md` (✓): "Don't Show Again"/suppression checkboxes; `hig/components/menus/the-menu-bar.md` (✓) and `menus.md` (✓): check-marked menu items as toggles; `hig/patterns/playing-haptics.md` (✓): standard toggles play haptics automatically.
- `hig/foundations/color.md` (✓ CRITICAL): on/off contrast and non-colour cues; `hig/foundations/accessibility.md` (✓): on/off labels, contrast; `hig/foundations/right-to-left.md` (✓): thumb direction; `hig/foundations/layout.md` (✓ CRITICAL): row layout and reflow.
- Virtual keyboards (✓ `virtual-keyboards.md`). Focus and selection (✓ `inputs/focus-and-selection.md`).

## Checklist
- [ ] Semantics match meaning: **switch** (`role="switch"`) for immediate settings, **checkbox** for form/multi-select/hierarchy, **radio group** for 2–5 exclusive options, **`aria-pressed` button** for tool/filter toggles.
- [ ] Every toggle has a **visible label or row title** and an accessible name that **doesn't change with state**.
- [ ] **On/off is distinguishable without colour** (fill + thumb position + mark) and passes **≥ 3:1**; forced-colors and `prefers-contrast` are handled.
- [ ] Switches sit **in list/settings rows**; **outside rows use toggle buttons** with an icon and a background highlight; **never a switch in a toolbar or status bar**.
- [ ] Custom switch colours keep **≥ 3:1** between on-track and off-track (light and dark).
- [ ] Toggle buttons and control targets are **≥ 44 px** (24 px floor on fine pointers) and are **not** the prominent button (Buttons GATE).
- [ ] **Checkbox hierarchies**: parent `indeterminate` when children differ; indentation and leading alignment show dependency; a **group legend** where the relationship isn't clear.
- [ ] **Radios**: 2–5 options in a `fieldset`+`legend`, arrow-key navigation, **equal spacing for horizontal layouts**; more than ~5 → `<select>`; a single setting → checkbox.
- [ ] Checkboxes aren't swapped for switches (and vice versa) inside one context; **circle marks vs square checkboxes** follow the platform convention above, never mixed in one list.
- [ ] Space/Enter/arrow behaviour, focus ring, reduced motion and RTL mirroring are in place.

## Related
- Ingested: Buttons (✓ CRITICAL), Segmented controls (✓), Pop-up buttons (✓), Pickers (✓), Toolbars (✓), Windows (✓), Lists and tables (✓), Settings (✓), Alerts (✓), The menu bar (✓), Menus (✓), Playing haptics (✓), Color (✓ CRITICAL), Accessibility (✓), Right to left (✓), Layout (✓ CRITICAL), Writing (✓).
- Virtual keyboards (✓ `virtual-keyboards.md`). Focus and selection (✓ `inputs/focus-and-selection.md`).
- Developer docs: SwiftUI `Toggle`, `ToggleStyle`; UIKit `UISwitch`; AppKit `NSButton.ButtonType.toggle`, `NSSwitch`.
