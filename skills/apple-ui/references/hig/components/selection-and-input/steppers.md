# Steppers
Source: https://developer.apple.com/design/human-interface-guidelines/steppers · Section: Components › Selection and input · Supported platforms: **iOS, iPadOS, macOS, visionOS** ("No additional considerations for iOS, iPadOS, or visionOS. Not supported in watchOS or tvOS"; the iPhone, iPad, Mac and Vision icons are lit, TV and Watch dimmed **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC reads Steppers · Best practices · Platform considerations · Resources **(from screenshot)**). One DocC fetch, read in full. 3 screenshots (hero → the developer-documentation list, followed by the Apple site footer, ignored) were compared with the fetched text and image alt text line by line: everything matches; the screenshots cover the whole page, so only the image alt text was read from the fetch alone. **No videos, no change log.** Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **one number**: Shift-click changes the value by **10× the default increment** ("for example"). It is very short (2 best practices + 1 macOS rule).

## In one line
A stepper is a **two-segment control (increase / decrease)** for an **incremental value**. It **doesn't display the value**, so it **sits next to a field that shows the current value**. **Make the affected value obvious**, **pair it with a text field when large changes are likely** (e.g. number of copies when printing), and on macOS **support Shift-click to change the value faster** (e.g. 10× the default increment).

## Rules

### Framing (intro)
- A stepper is a **two-segment control** people use to **increase or decrease an incremental value**.
- It **sits next to a field that displays its current value**, because **the stepper itself doesn't display a value**.

### Best practices
- **must** **Make the value that a stepper affects obvious.** Because the stepper shows no value, **people must know which value they are changing** when they use it.
- **should** **Consider pairing a stepper with a text field when large value changes are likely.** Steppers **work well alone for small changes that need a few taps or clicks**; people also like **a field to enter specific values**, especially when values **vary widely**. Example: on a **printing screen**, use **both a stepper and a text field to set the number of copies**.

### Platform considerations
- **iOS, iPadOS, visionOS:** no additional considerations.
- **watchOS, tvOS:** not supported.

#### macOS
- **may** **For large value ranges, support Shift-click to change the value quickly.** If the app benefits from larger changes, let people **Shift-click** the stepper to change the value **by more than the default increment (by 10 times the default, for example)**.

## Specs & values

| Item | Value |
|---|---|
| Anatomy | two segments: increase (up chevron) and decrease (down chevron); **shows no value** |
| Companion | a field showing the current value (and, for wide ranges, accepting typed values) |
| Use alone | small changes needing a few taps/clicks |
| Add a text field | large or widely varying values (e.g. copies on a print screen) |
| macOS Shift-click | changes the value by **more than the default increment, e.g. 10×** |
| Sizes, spacing, hit regions | **none given on this page** |
| Platforms | iOS · iPadOS · macOS · visionOS (no watchOS, tvOS) |
| Developer docs | UIKit `UIStepper` · AppKit `NSStepper` |
| Video / Change log | none |
| Apple's Related list | Pickers ✓ · Text fields |

## Visual notes (from screenshots)
- **Hero (screenshot):** a red-to-orange card with a **white rounded vertical two-segment control**: an **up chevron on top and a down chevron below**, separated by a hairline; **monospaced labels "i++" and "i--"** at its left with **leader lines** to the top and bottom segments (increase and decrease), a **width bracket above** and a **height I-beam at the right** (a compact fixed-size control). The alt text: *a stylised representation of a stepper control* **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Steppers · Best practices · Platform considerations · Resources (**no Change log**); platform strip lights iPhone, iPad, Mac and Vision (TV and Watch dimmed); side navigation shows **Selection and input** open with **Steppers** bold, after Sliders and before Text fields; the Apple developer-site footer follows the page (ignored).
- **No catalog images:** only the hero (`components-stepper-intro`); the fetch script reports **0 comparisons**; the catalog is unchanged (157, existing IDs unchanged). Note the sliders page's *Opacity* picture (slider + "50%" text field + tiny stepper) is the visual reference for the pairing.

## Web translation
The web equivalent is **`<input type="number">`** (native spinner) or a **custom text field flanked by − / + buttons**.

| HIG rule | Web implementation |
|---|---|
| Two-segment increase/decrease control that shows no value | A **paired control**: a **decrease and an increase button** in one attached group (`role="group"`, shared rail/border like a segmented control), **icons only** (Lucide `chevron-up`/`chevron-down` or `minus`/`plus`; **never SF Symbols artwork**) with **accessible names** ("Decrease copies", "Increase copies") and tooltips; **each segment ≥ 44 px** on touch (24 px floor on fine pointers, Buttons GATE; the attached pair is exempt from the 8 px gap rule). |
| Sits next to a field that displays the value | Always render the **value in an adjacent field** (`<input type="number" inputmode="numeric" step min max>` bound to the buttons, `aria-controls`) or, for read-only steps, a **text readout with `aria-live="polite"`**; the stepper is never the only place the number appears. |
| Make the affected value obvious | A **visible `<label for>`** on the field ("Copies") and the buttons named for it; place the stepper **immediately trailing the field** (inline-end, mirrored in RTL: `right-to-left.md`); when several steppers share a form, each has its own label; **don't let a stepper float away from its value**. |
| Pair with a text field for large or widely varying values | **Editable field + stepper** for wide ranges (copies, quantity, font size): type an exact number, **clamp on blur** to `min`/`max`, validate inline ("Enter a number from 1 to 99", `aria-invalid`, `entering-data.md`); **stepper only** (with a readout) when the range is small (e.g. 1–5 guests). For continuous values combine **slider + field + stepper** (`sliders.md`). |
| Small changes with a few taps/clicks | Step size defaults to **1** (or the natural unit: 0.1, 5 %); **press-and-hold repeats** (initial delay ~400–500 ms then accelerating, CONV) and stops at the bounds; never make people tap 50 times (add a text field). |
| macOS: Shift-click for larger changes | **Shift+click steps by 10× the default** (or a `stepLarge`, CONV) and **Shift+↑/↓** (or PageUp/PageDown) does the same on the keyboard; **↑/↓ step by 1** in the focused field (native number inputs already do); document the shortcut in a tooltip; Alt/Option for finer steps is an optional CONV. |
| Bounds | At `min`/`max` the matching button is **disabled** (`disabled`, dimmed, still discoverable via the tooltip; unlike the menu items rule, a button at its bound is truly unavailable); announce the limit (`aria-live`: "Maximum reached"), never wrap around silently. |
| Live effect | The value updates **immediately** and the result (price, preview) updates with it; group rapid presses in one **undo step** (`undo-and-redo.md`); announce the new value **politely and debounced** (screen readers should not read every intermediate press). |
| Native `<input type="number">` caveats | Native spinners are **tiny and hidden on touch**: either **hide them** (`appearance: textfield`, `::-webkit-inner-spin-button {display:none}`) and provide your own 44 px buttons, or keep the native control for desktop-only tools; keep `inputmode`, `min`, `max`, `step` and label; **guard against mouse-wheel changes** (blur on wheel, CONV). |
| visionOS / gaze and pointer UIs | Same control with **large, well-spaced segments** (60 px-class targets, Buttons GATE) and hover/gaze feedback; no additional rules from Apple. |
| Not on watchOS / tvOS | On wearable-size or D-pad UIs use a **picker/list with ± buttons** (`pickers.md`, `sliders.md` watchOS steps); for TV use focusable ± buttons with large targets. |
| Accessibility | Buttons are real `<button>`s with names; the field announces its value; **arrow keys** work in the field; support **`prefers-reduced-motion`** for value transitions; contrast of the glyphs **≥ 3:1**, focus ring visible (Color gate). |

Field-note cross-links:
- `hig/components/selection-and-input/sliders.md` (✓): the slider + text field + stepper trio for wide ranges; `pickers.md` (✓) (Apple's Related): choosing from a list instead of incrementing; `segmented-controls.md` (✓): the attached-segments look and the Buttons GATE exemption; `color-wells.md` (✓).
- `hig/patterns/entering-data.md` (✓): "steppers/sliders for bounded numbers", `inputmode`, inline validation; `hig/components/presentation/panels.md` (✓): steppers as simple adjustment controls in inspectors, with immediate application and Undo; `hig/patterns/printing.md` (✓): the copies field (Apple's own example); `hig/patterns/undo-and-redo.md` (✓).
- `hig/foundations/right-to-left.md` (✓): steppers run from inline-start; `hig/components/menus/buttons.md` (✓ CRITICAL) and **Buttons GATE**: 44 px hit regions, attached groups exempt from the 8 px gap rule.
- `field-notes/components.md` (Slider row: quiet grey value text) and `anti-patterns.md` (values in badges): **compatible**; a stepper's value lives in a real field/readout, not a badge.
- Toggles (✓ `toggles.md`). Text fields (✓ `text-fields.md`, Apple's Related).

## Checklist
- [ ] The value is **always visible in an adjacent field or readout** and has a **visible label**; the stepper is never alone.
- [ ] Two buttons (decrease/increase) have **accessible names, tooltips and ≥ 44 px targets** on touch; icons are Lucide/Phosphor/Ionicons.
- [ ] **Wide or unpredictable ranges** add an **editable text field** with clamping and inline validation; small ranges may use the stepper alone.
- [ ] `min`, `max` and `step` are set; buttons **disable at the bounds** and the limit is announced.
- [ ] **Press-and-hold repeats**; **Shift+click / Shift+arrow steps by 10×** on desktop; keyboard arrows work in the field.
- [ ] Native number-input spinners are **hidden or replaced** on touch; **mouse-wheel changes are prevented**.
- [ ] Rapid presses form **one undo step**; announcements are **polite and debounced**.
- [ ] Layout **mirrors in RTL** (stepper after the field on the inline-end).
- [ ] No stepper on wearable/D-pad UIs; use a picker or ± buttons there.

## Related
- Ingested: Sliders (✓), Pickers (✓), Segmented controls (✓), Entering data (✓), Panels (✓), Printing (✓), Undo and redo (✓), Right to left (✓), Buttons (✓ CRITICAL).
- Toggles (✓ `toggles.md`). Text fields (✓ `text-fields.md`).
- Developer docs: UIKit `UIStepper`; AppKit `NSStepper`.
