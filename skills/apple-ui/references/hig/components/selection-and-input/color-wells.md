# Color wells
Source: https://developer.apple.com/design/human-interface-guidelines/color-wells · Section: Components › Selection and input · Supported platforms: **iOS, iPadOS, macOS, visionOS** ("No additional considerations for iOS, iPadOS, or visionOS. Not supported in tvOS or watchOS"; on the platform strip the iPhone, iPad, Mac and Vision icons are lit and TV and Watch are dimmed **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC reads Color wells · Best practices · Platform considerations · Resources **(from screenshot)**). One DocC fetch, read in full. 2 screenshots (hero → the start of the developer-documentation list) were compared with the fetched text line by line: everything matches. **Read from the fetch only:** the last developer links (the end of the list: `NSColorWell`, "Color Programming Topics") and the image alt text; the page has **no videos and no change log**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **no numbers**; it is very short (1 best practice, 1 macOS paragraph pair).

## In one line
A color well is a **control that shows a colour and opens a colour picker** when people tap or click it, so they can adjust the colour of text, shapes, guides and other onscreen elements. **Prefer the system colour picker** (consistent, saved colour sets available in every app, familiar across iOS, iPadOS and macOS); on the Mac the well **highlights while active**, **updates to the new colour after a choice**, and **supports drag and drop** of colours between wells and from the picker to a well.

## Rules

### Framing (intro)
- A color well **lets people adjust the colour of text, shapes, guides and other onscreen elements**.
- It **displays a colour picker when people tap or click it**. The picker can be the **system-provided one** or a **custom interface you design**.

### Best practices
- **should** **Consider the system-provided colour picker for a familiar experience.**
  - The built-in picker gives a **consistent experience**.
  - It lets people **save a set of colours they can access from any app**.
  - The system-defined picker also helps provide a **familiar experience when building apps across iOS, iPadOS and macOS**.

### Platform considerations
- **iOS, iPadOS, visionOS:** no additional considerations.
- **tvOS, watchOS:** not supported.

#### macOS
- **Activation feedback:** when people click a colour well, it **receives a highlight** to give **visual confirmation that it is active**. It then **opens a colour picker** so people can choose a colour.
- **Result feedback:** after they make a selection, the colour well **updates to show the new colour**.
- **Drag and drop:** colour wells **support drag and drop**: people can **drag colours from one colour well to another**, and **from the colour picker to a colour well**.

## Specs & values

| Item | Value |
|---|---|
| What it is | control showing the current colour; tap/click opens a colour picker |
| Picker | system-provided (preferred) or custom |
| Saved colours | the system picker keeps a **saved set available in every app** |
| macOS states | inactive → **highlighted (active)** while the picker is open → **updated colour** after selection |
| macOS drag and drop | well → well, picker → well |
| Sizes, spacing, hit regions | **none given on this page** (see Buttons GATE ≥ 44 px for touch targets; not Apple's number for wells) |
| Platforms | iOS · iPadOS · macOS · visionOS (no tvOS, watchOS) |
| Developer docs | UIKit `UIColorWell`, `UIColorPickerViewController` · AppKit `NSColorWell` · "Color Programming Topics" (Apple archive) |
| Video / Change log | none |
| Apple's Related list | Color ✓ CRITICAL |

## Visual notes (from screenshots)
- **Hero (screenshot):** a **red-to-orange gradient card** showing a **large rounded-square colour well** in a deeper red-orange, with a **white chevron-down in a dark red circle** at its centre-right (the "opens a picker" cue). A **width arrow above** and a **height arrow to the right** frame the well (a sized control), and a **monospaced label "R:255, G:152, B:7"** at the left with a leader line pointing at the well (the colour value the well represents). Below the well, a **popover-like tray with a pointed notch pointing up at the well** holds **two rows of five outlined rounded-square swatches**: the top row of **lighter tints**, the bottom row **darker shades**, all in red (a swatch grid as the picker) **(from screenshot)**. The alt text describes it as *a stylised representation of a colour-selection popover extending down from an expanded button, tinted red to reflect the red in the original six-colour Apple logo*.
- **Page chrome (from screenshot):** TOC Color wells · Best practices · Platform considerations · Resources (**no Change log**); the side navigation shows **Selection and input** open with **Color wells** highlighted (blue focus ring), then Combo boxes, Digit entry views, Image wells, Pickers, Segmented controls, Sliders, Steppers, Text fields, Toggles, Virtual keyboards, with **Status** below.
- **No catalog images:** the page has only the hero (`components-color-well-intro`); the fetch script reports **0 comparisons**, so the visual catalog is unchanged (151 comparisons, existing IDs unchanged).

## Web translation
On the web the well is `<input type="color">` (native picker, hex value) or a **custom swatch popover**.

| HIG rule | Web implementation |
|---|---|
| Colour well = control that shows a colour and opens a picker | A **swatch button** showing the current colour (a filled rounded square with a visible **border/outline**, so a light colour stays visible on a light page: **≥ 3:1 non-text contrast** for the well's boundary, Color gate) that opens the picker on click/tap/Enter/Space; **label it** (`aria-label="Text color"` or a visible `<label>`) and expose the value (`aria-describedby` → "R 255, G 152, B 7" or the hex). |
| Prefer the system colour picker | Use **`<input type="color">`** (native picker, saved/system colours, eyedropper and platform look) and add `EyeDropper` where available (`new EyeDropper().open()`); build a custom picker **only** when you need swatches, alpha or a palette the native control can't give (CONV). |
| Saved colours available across apps | Native picker already carries the platform's saved set; for a custom one **persist recent/custom colours** in `localStorage` and offer them first (CONV), **and don't fake OS-level saved sets**. |
| Consistent across iOS, iPadOS, macOS | Same control and same picker on every breakpoint; **no separate desktop/mobile pickers** for the same setting. |
| macOS: highlight while active | While the picker is open give the well a **visible active state** (`aria-expanded="true"`, accent ring / pressed style) and **keep focus visible** (`:focus-visible`); return focus to the well when the picker closes. |
| macOS: well updates to the new colour | **Update the swatch live** on `input` (while dragging in the picker) and finalise on `change`; the well is the single source of truth for the value (**no separate preview elsewhere that disagrees**); announce the change (`aria-live="polite"`: "Text color set to #FF9807"). |
| Drag and drop colours between wells and from the picker | Optional: make swatches **draggable** (`draggable="true"`, `dataTransfer.setData("text/plain", hex)`, and a `application/x-color`-style custom type) with **drop targets on wells**; **always provide the non-drag path** (click, picker, paste hex) and a keyboard path (**Enter to open, arrow keys through swatches**, `Ctrl/Cmd+C` / `Ctrl/Cmd+V` of hex, CONV) (`drag-and-drop.md`). |
| Popover picker | Present a custom picker as a **popover anchored to the well** (`popover` API / anchor positioning) with a **swatch grid** (`role="listbox"` with `aria-selected`, or `radiogroup` of swatches, each with a colour name in `aria-label`), light-dismiss with **Esc**, **arrow-key** navigation, **44 × 44 px** touch swatches (Buttons GATE) and a visible selection ring (`popovers.md`). |
| Colour is never the only information | Give each swatch a **name or hex** (tooltip, `aria-label`) and show the selected state with a **ring/check, not colour alone**; a colour well is inherently colour-only, so **don't use it to convey status** (`color.md`, Color gate). Warn when a chosen text colour fails **4.5:1** against its background (CONV). |
| Sizing | Apple gives none; on the web make the well **≥ 44 × 44 px hit region on touch** (24 px floor on fine pointers, Buttons GATE) and a **visible focus ring**. |

Field-note cross-links:
- `hig/foundations/color.md` (✓ CRITICAL) and **Color gate**: contrast of the well's boundary and of text on chosen colours; colour not the only carrier of meaning; system vs custom colours.
- `hig/patterns/drag-and-drop.md` (✓): the drag/drop of colours and the non-drag alternatives.
- `hig/components/presentation/popovers.md` (✓): the picker popover; `sheets.md` (✓): the picker as a sheet on compact widths (the iOS system picker is presented as a sheet, not on this page).
- `hig/components/navigation/token-fields.md` (✓) and `search-fields.md` (✓): other text-entry-like controls; `hig/components/menus/pop-up-buttons.md` (✓): choosing from a fixed list instead of free colour.
- Not yet ingested: Toggles. Text fields (✓ `text-fields.md`), Sliders (✓ `sliders.md`, colour channel sliders), Pickers (✓ `pickers.md`).
- No conflict with a field note.

## Checklist
- [ ] Prefer **`<input type="color">`**; a custom picker is built only for a real need (alpha, brand palettes).
- [ ] The well **shows the current colour**, has a **visible boundary (≥ 3:1)** and an **accessible name and value**.
- [ ] **Opens on click/tap/Enter/Space**; shows an **active state** while open; **focus returns** to the well.
- [ ] The swatch **updates live** and the change is **announced**; there is **one source of truth** for the value.
- [ ] Custom picker: popover anchored to the well, **arrow-key navigation, Esc, 44 px touch swatches, named colours**.
- [ ] **Drag and drop is optional** and has **click, paste and keyboard alternatives**.
- [ ] **Recent/custom colours persist** (localStorage) where you build your own picker.
- [ ] Chosen colours are **checked for contrast** (4.5:1 text, 3:1 non-text) before they are applied to text or shapes; colour is not the only carrier of meaning.

## Related
- Ingested: Color (✓ CRITICAL), Drag and drop (✓), Popovers (✓), Sheets (✓), Token fields (✓), Pop-up buttons (✓).
- Not yet ingested: Toggles. Text fields (✓ `text-fields.md`), Sliders (✓ `sliders.md`), Pickers (✓ `pickers.md`).
- Developer docs: UIKit `UIColorWell`, `UIColorPickerViewController`; AppKit `NSColorWell`; "Color Programming Topics".
