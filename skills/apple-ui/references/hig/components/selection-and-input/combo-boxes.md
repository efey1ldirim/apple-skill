# Combo boxes
Source: https://developer.apple.com/design/human-interface-guidelines/combo-boxes · Section: Components › Selection and input · Supported platforms: **macOS only** ("Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS"; only the Mac icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC reads Combo boxes · Best practices · Platform considerations · Resources **(from screenshot)**). One DocC fetch, read in full. 2 screenshots (hero → developer documentation) were compared with the fetched text line by line: everything matches; the screenshots cover the whole page, so only the image alt text was read from the fetch alone. **No videos, no change log.** Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **no numbers** and is very short (4 best practices).

## In one line
A combo box **combines a text field with a pull-down button in one control**: people can **type a custom value** or **click the button to pick from a list of predefined values**; a typed value is **not added to the list**. **Pre-fill a meaningful default from the list**, add an **introductory label (Title Case, ends with a colon)**, offer **relevant choices**, and keep **list items no wider than the field**. Mac only.

## Rules

### Framing (intro)
- People can **enter a custom value** into the field **or click the button to choose from a list of predefined values**.
- **When people enter a custom value, it is not added to the list of choices.**

### Best practices
- **should** **Populate the field with a meaningful default value from the list.** The field **can be empty** by default, but it's **best when the default refers to the hidden choices**. The default **doesn't have to be the first item** in the list.
- **should** **Use an introductory label** so people know **what types of items to expect**. Generally **title-style capitalisation** and **end with a colon** (*Labels*).
- **should** **Provide relevant choices.** People like **both** entering a custom value **and** the convenience of picking from **the most likely choices**.
- **should** **Make sure list items aren't wider than the text field.** A too-wide item may be **truncated by the field**, which is **hard to read**.
- For more, see *Text fields* and *Pull-down buttons*.

### Platform considerations
- **iOS, iPadOS, tvOS, visionOS, watchOS:** not supported.
- **macOS:** the only platform; no extra guidance.

## Specs & values

| Item | Value |
|---|---|
| Anatomy | text field + trailing pull-down (chevron) button + list of predefined values |
| Custom value | allowed; **not added** to the list |
| Default value | a meaningful value from the list (not necessarily the first); empty is allowed but less good |
| Introductory label | **Title Case + trailing colon** |
| List item width | **≤ the text field's width** |
| Sizes, spacing, hit regions | **none given on this page** |
| Platforms | macOS only |
| Developer docs | AppKit `NSComboBox` |
| Video / Change log | none |
| Apple's Related list | Text fields · Pull-down buttons ✓ (Text fields not yet ingested) |

## Visual notes (from screenshots)
- **Hero (screenshot):** a red-to-orange gradient card with a **wide rounded field** containing the text **"Cupertino"** with a **blinking text cursor** (in red) at its end and a **small rounded red button with a white chevron-down** at the trailing end; a **width arrow above** the whole control and a **height I-beam mark at its right**, showing it as one sized control. Directly under the field, **attached to its width**, a **list of city names in a soft-pink translucent panel**: **Chicago, Monaco, San Francisco, New York** (cut off at the card's lower edge). The typed value **"Cupertino" is not in the list**, illustrating "a custom value isn't added to the list"; the list is **exactly as wide as the field** (the width rule) **(from screenshot)**. The alt text describes *a combo box displaying a list of cities*, tinted red.
- **Page chrome (from screenshot):** TOC Combo boxes · Best practices · Platform considerations · Resources (**no Change log**); platform strip lights only the Mac; the side navigation shows **Selection and input** open with **Combo boxes** ringed then Digit entry views, Image wells, Pickers, Segmented controls, Sliders, Steppers, Text fields, Toggles, Virtual keyboards, and the **Status** and **System experiences** groups below.
- **No catalog images:** only the hero (`components-combobox-intro`); the fetch script reports **0 comparisons**; the catalog is unchanged (151, existing IDs unchanged).

## Web translation
The web pattern is the **editable combobox** (ARIA 1.2 combobox with list autocomplete) or `<input list>` + `<datalist>`.

| HIG rule | Web implementation |
|---|---|
| One control: text field + pull-down button | `<input role="combobox" aria-expanded aria-controls aria-autocomplete="list">` + a **separate chevron `<button tabindex="-1" aria-label="Show options">`** that toggles a `role="listbox"` popup; or the native `<input list="…">` + `<datalist>` for the simple case (no styling control, weaker screen-reader parity; CONV: use it only for non-critical fields). |
| Typing a custom value is allowed | **Do not force selection**: the input's value is whatever was typed; validate as a normal text field (`aria-invalid`, message next to the field; `text-fields`, `writing.md`); no "Add option" side effect. |
| A custom value is not added to the list | **Never mutate the option list from typed input.** If people need to *manage* the list, that is a separate feature (settings/edit list), not a side effect of typing (CONV). Persist the typed value **as the field's value only**. |
| Default from the list, meaningful, not necessarily first | **Pre-fill** with a real option that **names the hidden choices** ("Automatic", "Cupertino"); it's fine to be **empty with a placeholder** but not as good; set it via the input's value (not just a placeholder, which isn't a value and has low contrast: `field-notes/tokens.md` § Placeholder contrast). |
| Introductory label, Title Case, colon | A **visible `<label for>`**; per the skill's capitalisation table (**Title Case, ends with a colon**) for the combo box's label on **desktop / settings-style layouts**; for general web forms `labels.md` keeps sentence case without a colon (CONV), so **pick one convention per form and apply it to every field in it**. Never use a placeholder as the label. |
| Relevant choices | Show the **few most likely values** first (recent, frequent, or context-driven); **filter as people type** (`aria-autocomplete="list"`); never dump hundreds of items (use search or a different control: CONV). |
| List items no wider than the field | The popup **matches the field's width** (`width: anchor-size(width)` with CSS anchor positioning, or measured with `getBoundingClientRect()`); **wrap or ellipsis with a tooltip/`title`** rather than let the field truncate silently, and keep item text short. Popup **doesn't extend past the viewport** (`popovers.md`). |
| Keyboard | **Down arrow** opens and moves through items (`aria-activedescendant`), **Enter** selects the highlighted item, **Esc** closes (second Esc clears, CONV), **Alt+Down** opens without moving, **Tab** leaves; the chevron button is **not a tab stop** (the field is). Highlight uses **more than colour** (Color gate); 24 px floor / 44 px touch for the chevron (Buttons GATE). |
| Not on iOS/iPadOS/visionOS | On touch widths prefer a **native `<select>` for closed sets** or a **text field with a suggestions sheet**; don't ship a desktop-style popup that needs precise hover (`pickers`, `sheets.md`). |

Field-note cross-links:
- `hig/components/layout/labels.md` (✓): the label conventions; `hig/foundations/writing.md` (✓): the **Capitalisation table** now has a **combo-box introductory label** row (Title Case + colon); form-label rule in `labels.md` is a CONV for general web forms and does not override it for combo boxes on desktop layouts.
- `hig/components/menus/pull-down-buttons.md` (✓): the button half; `pop-up-buttons.md` (✓): closed-set choice (no free typing); `hig/components/navigation/token-fields.md` (✓): typing with suggestions that become tokens; `search-fields.md` (✓): suggestions while typing.
- `hig/components/presentation/popovers.md` (✓): the popup list's anchoring and dismissal.
- Not yet ingested: **Text fields**, Pickers (Apple's Related lists Text fields).
- No conflict with a field note.

## Checklist
- [ ] **One control**: a real `combobox` input with an option list; the chevron button is not a second tab stop.
- [ ] **Typed values are accepted** and validated as text; they are **never added to the list**.
- [ ] A **meaningful default** is pre-filled (not just a placeholder).
- [ ] A **visible label** in the form's chosen capitalisation (Title Case + colon on desktop settings-style layouts), never a placeholder-only label.
- [ ] Choices are **relevant and short**, **filtered as people type**.
- [ ] The popup is **as wide as the field or narrower**; long items wrap or show a tooltip instead of silent truncation.
- [ ] **Full keyboard support** (arrows, Enter, Esc, Alt+Down) and screen-reader roles (`aria-expanded`, `aria-activedescendant`).
- [ ] On touch widths a **native select or a suggestions sheet** replaces the desktop popup.

## Related
- Ingested: Pull-down buttons (✓), Pop-up buttons (✓), Token fields (✓), Search fields (✓), Popovers (✓), Labels (✓), Writing (✓), Color wells (✓).
- Not yet ingested: Text fields, Pickers.
- Developer docs: AppKit `NSComboBox`.
