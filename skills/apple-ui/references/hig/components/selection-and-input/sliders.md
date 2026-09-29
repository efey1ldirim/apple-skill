# Sliders
Source: https://developer.apple.com/design/human-interface-guidelines/sliders · Section: Components › Selection and input · Supported platforms: **iOS, iPadOS, macOS, visionOS, watchOS** ("Not supported in tvOS"; the TV icon is dimmed on the platform strip, the other five are lit **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **June 21, 2023** (updated to include guidance for visionOS; the only change-log row). One DocC fetch, read in full. 5 screenshots (hero → the change log's first row) were compared with the fetched text and image alt text line by line: everything matches, including the Opacity slider with text field and stepper, the three macOS slider pictures, the Energy Saver tick-mark screenshot and the two watchOS pictures. **Read from the fetch only (not in screenshots):** the dark variants of the pictures and the image alt texts; the page has **no videos**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **a few numbers**: percentage example 0–100 %, rotation 0–360°, four spins = **1440°**.

## In one line
A slider is a **horizontal track with a thumb** that people move between a **minimum and a maximum value**; the track **between the minimum and the thumb fills with colour**, and optional **left/right icons** show what the ends mean. **Keep the familiar directions** (minimum on the leading side, maximum on the trailing side; vertical: minimum at the bottom, maximum at the top), **add a text field and stepper for wide ranges**, **show live feedback**, **label the slider (sentence case, colon)**, use **tick marks and end/periodic tick labels** for precision, and **never use a slider for audio volume on iOS/iPadOS** (use the volume view).

## Rules

### Framing (intro)
- A slider is a **horizontal track** with a control, the **thumb**, adjustable between a **minimum and maximum value**.
- As the value changes, **the portion of track between the minimum value and the thumb fills with colour**.
- A slider can optionally show **left and right icons** that illustrate the meaning of the **minimum and maximum** values.

### Best practices
- **may** **Customise a slider's appearance if it adds value.** You can adjust **track colour, thumb image and tint colour, and the left and right icons** to fit the app's design and communicate intent. A slider that adjusts **image size** could show a **small image icon on the left and a large one on the right**.
- **must** **Use familiar slider directions.** People expect **minimum on the leading side and maximum on the trailing side** (horizontal), and **minimum at the bottom and maximum at the top** (vertical), **consistently in all apps**. Example: a percentage slider moves **from 0 % on the leading side to 100 % on the trailing side**.
- **should** **Consider supplementing a slider with a text field and a stepper**, especially for a **wide range**: people like to **see the exact value** and **type a specific value**; a **stepper** gives a convenient **whole-value increment** (*Text fields*, *Steppers*). (Picture: **Opacity** slider with thumb at the centre, a text field **"50%"** and a stepper.)

### Platform considerations
- **tvOS:** not supported.

#### iOS, iPadOS
- **must not** **Use a slider to adjust audio volume.** For volume control use a **volume view**: customisable, with a **volume-level slider** and a control for **changing the active audio output device** (*Playing audio*).

#### macOS
- Sliders can also include **tick marks**, making it easier to **pinpoint a specific value** in the range.
- **Linear slider (with or without tick marks):** the thumb is a **narrow lozenge**; the track from the minimum to the thumb is **filled with colour**; often **supplementary icons** illustrate the minimum and maximum.
- **Circular slider:** the thumb is a **small circle**; tick marks, when present, are **evenly spaced dots around the circumference**.
- **should** **Consider live feedback as the value changes**: it shows results **in real time**. Example: **Dock icons scale dynamically** while adjusting the **Size** slider in Dock settings.
- **should** **Choose a slider style that matches expectations.**
  - **Horizontal** slider: ideal for moving between a **fixed start and end** (a graphics app's **opacity 0–100 %**).
  - **Circular** slider: for values that **repeat or continue indefinitely** (an object's **rotation 0–360°**; an animation app's **number of spins**, where **four complete rotations = four spins = 1440° of rotation**).
- **should** **Consider a label to introduce a slider.** Labels generally use **sentence-style capitalisation** and **end with a colon** (*Labels*).
- **should** **Use tick marks** to increase clarity and accuracy: they help people **understand the scale** and **locate specific values**.
- **may** **Consider adding labels to tick marks.** Labels can be **numbers or words**. **Labelling every tick is unnecessary unless it reduces confusion**; often **labelling only the minimum and maximum is enough**. When values are **nonlinear** (macOS **Energy Saver** display-sleep slider), **periodic labels** give context. Also provide a **tooltip showing the thumb's value when the pointer hovers over it** (*Offering help*).

#### visionOS
- **should** **Prefer horizontal sliders**: it's easier to gesture **side to side than up and down**.

#### watchOS
- A slider is a **horizontal track**, shown as a **set of discrete steps** or a **continuous bar**, representing a **finite range**. People **tap buttons on the sides** to **increase or decrease the value by a predefined amount**.
- **should** **Create custom glyphs if necessary** to communicate what the slider does; the system shows **plus and minus signs by default**.

## Specs & values

| Item | Value |
|---|---|
| Anatomy | track + thumb (min → max), fill from min to thumb, optional left/right icons, optional tick marks |
| Directions | horizontal: min **leading** → max **trailing**; vertical: min **bottom** → max **top** |
| Value help | text field (exact value / typed input) + stepper (whole increments) for wide ranges |
| iOS/iPadOS | **no slider for audio volume**: use the volume view |
| macOS linear | narrow **lozenge** thumb; filled track; optional icons and tick marks |
| macOS circular | small **circle** thumb; tick dots evenly spaced on the circumference; for repeating/unbounded values (0–360°, 1440° for four spins) |
| macOS labels | sentence case + colon; label only min/max, or periodic labels for nonlinear scales; tooltip with thumb value on hover |
| visionOS | prefer horizontal sliders |
| watchOS | discrete steps or continuous bar; side +/− buttons (custom glyphs allowed) |
| tvOS | not supported |
| Sizes, spacing, hit regions | **none given on this page** |
| Developer docs | SwiftUI `Slider` · UIKit `UISlider` · AppKit `NSSlider` |
| Video | none |
| Apple's Related list | Steppers · Pickers ✓ |
| Change log | June 21, 2023: updated to include guidance for visionOS |

## Visual notes (from screenshots and downloaded pictures)
- **Hero (screenshot):** a red-to-orange card with a **horizontal slider** showing a **small sun icon on the left and a larger sun on the right**, a **dark-red filled track** up to a **pale lozenge thumb** at the centre, and a **lighter red remaining track**; measurement marks: leader lines labelled **"Min", "Mid", "Max"** (monospaced) above the ends and centre, **end caps (⊢ ⊣)** at the track ends and **double arrows** at the far left and right edges (the control's horizontal extent). The alt text: *a stylised representation of a brightness slider* **(from screenshot)**.
- **Opacity with text field and stepper (screenshot):** a light-grey card with the label **"Opacity"**, a blue-filled slider with a pale thumb at the centre, a **text field "50%"** with a **small up/down stepper** at its right **(from screenshot)**.
- **macOS slider pictures (catalog `sliders-01`, screenshots):** *Linear slider without tick marks*: a **blue-filled track to a pale round-cornered lozenge thumb** at the middle of a grey track; *Linear slider with tick marks*: the same with **small dots under the track** (the thumb sits between two ticks); *Circular slider*: a **light rounded square holding a white circular dial with a grey dot near the 12 o'clock position** (the thumb) **(from screenshot)**.
- **Energy Saver labels (screenshot):** a blue-filled slider with small tick dots and labels **"1 min", "15 min", "1hr", "3 hrs", "Never"** under it (the thumb between 15 min and 1 hr): **periodic labels for a nonlinear scale**, min and max labelled **(from screenshot)**.
- **watchOS (catalog `sliders-02`, screenshots):** two black rounded panels each with **a quiet-speaker button on the left, a track in the middle and a loud-speaker button on the right**, separated by hairlines; **Discrete**: **three steps, the first two filled green** (the third dark green/inactive); **Continuous**: a **continuous green bar filled about two thirds** **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Sliders · Best practices · Platform considerations · Resources · **Change log**; side navigation shows **Selection and input** open with **Sliders** ringed.
- **Fetch script run:** 2 new comparison groups (`sliders-01` macOS neutral set of 3, `sliders-02` watchOS pair); existing catalog IDs unchanged; total **157**. The Opacity picture and the Energy Saver screenshot are not catalog images.

## Web translation
The web control is **`<input type="range">`** (native, keyboard and screen-reader support) or an **ARIA `role="slider"`** widget.

| HIG rule | Web implementation |
|---|---|
| Track + thumb between min and max; fill from min to thumb | **`<input type="range" min max step value>`**; draw the **fill** with a CSS variable: `--fill: calc((var(--value) - var(--min)) / (var(--max) - var(--min)) * 100%)` and `background: linear-gradient(to right, var(--accent) var(--fill), var(--track) var(--fill))` (update on `input`), style `::-webkit-slider-thumb`/`::-moz-range-thumb`; thumb **visible against the track (≥ 3:1)** and the **unfilled track ≥ 3:1** vs the page (Color gate). |
| Thumb shape (narrow lozenge / circle) | A **pale lozenge thumb with the field-note thumb shadow** (`0 2px 6px rgba(0,0,0,.25)`, `field-notes/tokens.md`); a **hit region ≥ 44 px** on touch (Buttons GATE) via a taller invisible track/thumb padding; a **visible focus ring** on the thumb (`:focus-visible`). |
| Familiar directions: min leading, max trailing (vertical: min bottom, max top) | Default orientation is **left→right in LTR, and mirrored (right→left) in RTL** (`dir="rtl"` flips the native range); vertical sliders: **`writing-mode: vertical-lr; direction: rtl`** so min is at the bottom (or `role="slider" aria-orientation="vertical"` with a custom build); never invert a value scale on purpose (`right-to-left.md`). |
| Left/right icons illustrating min and max | Small **icons at the ends** (Lucide `sun`/`sun-medium`, `volume`/`volume-2`, `image`; **never SF Symbols artwork**) with `aria-hidden`; the slider carries the accessible name and value. |
| Customise appearance only if it adds value | Theme **track colour, thumb and end icons** to the product (accent colour), keep **standard behaviour**; don't hide the thumb or make the track a decoration. |
| Text field + stepper for wide ranges | Pair with a **`<input type="number">`** (or text with `inputmode="decimal"`) bound both ways to the slider (`aria-controls`), **± buttons** or the number input's spinner for whole-value steps, **clamp to min/max** on blur, and validate typed values inline (`entering-data.md`). **Field-note refinement:** the field-note **Slider row shows the current value as quiet grey text on the right** (never in a badge); use that **for read-only values** and **switch to Apple's editable text field when people need to type an exact value** (both hold). |
| No slider for volume (iOS/iPadOS) | For **media volume** use the **`<video>`/`<audio>` controls' volume** and a **mute button**; a custom volume slider controls **your player's gain only** (`playing-audio.md`); don't imitate the system volume view. For other quantities, slider is fine. |
| macOS tick marks | `<input type="range" list="ticks">` with a `<datalist>` (native ticks in some browsers) or **custom tick dots** under the track (`repeating-linear-gradient` or absolutely positioned marks), **`step`** equal to the tick spacing so the thumb snaps; ticks are decorative (`aria-hidden`), values come from `aria-valuetext`. |
| Circular slider for repeating/unbounded values | A **dial** widget (`role="slider"`, `aria-valuemin/max/now`, pointer drag with `setPointerCapture`, **arrow keys ± step**, PageUp/PageDown ±10 steps, Home/End), used **only for angles or repeating values** (0–360°, spins); allow **values beyond 360°** where meaning is cumulative (1440° = four spins) with text output; provide a **numeric field** alternative. |
| Live feedback | Update the **result while dragging** (`input` event, `requestAnimationFrame` throttling) and **commit on `change`**; show a **value bubble/readout** near the thumb or in a grey text label; respect `prefers-reduced-motion` for transitions (not for the immediate feedback). |
| Sentence-case label + colon (macOS) | A visible `<label for>` in **sentence case ending with a colon** in desktop/settings-style layouts ("Display sleep:"), otherwise the web form-label convention of `labels.md`; the label **names the property, not the units**; the accessible name **always exists** (`aria-label` if no visible label). |
| Tick labels: min/max, periodic for nonlinear, tooltip with thumb value | Label **only min and max** by default; for **nonlinear scales** add periodic labels (1 min · 15 min · 1 hr · 3 hrs · Never) and set **`aria-valuetext`** ("15 minutes") so the spoken value matches; a **tooltip** on hover/focus/drag showing the value (`title` is not enough: build an accessible tooltip, `offering-help.md`). |
| visionOS: prefer horizontal | Keep sliders **horizontal** in spatial/gaze UIs and **thumb targets large** (60 px-class, Buttons GATE); no vertical sliders unless the metaphor demands it. |
| watchOS: discrete steps or continuous bar; side +/− buttons; custom glyphs | For tiny/wearable views a **segmented step bar** (`step` large) with **− / + buttons** at the ends (min 44 px), custom glyphs (mute/max) where the meaning isn't ± ; default to plus/minus. |
| Not tvOS | On TV/D-pad web UIs use **± buttons or a focusable step control** rather than dragging (`focus-and-selection` not yet ingested). |
| Accessibility | Native range gives **arrow/Home/End/PageUp/PageDown**; provide **`aria-valuetext`** for units; **announce** live changes politely (debounced); **44 px** target; **don't rely on colour alone**: the thumb position and a numeric readout also carry the value; `prefers-contrast` thicker track; support **200 % text** (Layout gate). |

Field-note cross-links:
- `field-notes/components.md` ("Slider row: title left + current value right as quiet grey text, never in a badge") and `anti-patterns.md`: **compatible**; the field note covers the **read-only value readout**, Apple adds an **editable text field + stepper for wide ranges**. `tokens.md` (slider thumb shadow `0 2px 6px rgba(0,0,0,.25)`) and `engineering-gotchas.md` ("a black slider fill disappears on dark: theme via variables") apply to the filled track.
- `hig/patterns/playing-audio.md` (✓): the **volume view** / no fake system volume; `hig/foundations/right-to-left.md` (✓): sliders run from inline-start; `hig/components/presentation/panels.md` (✓): sliders in inspector panels with a numeric field and Undo.
- `hig/components/selection-and-input/pickers.md` (✓) and `segmented-controls.md` (✓): other ways to choose a value; `hig/components/selection-and-input/color-wells.md` (✓): colour channel sliders; `hig/patterns/entering-data.md` (✓): steppers/sliders for bounded numbers; `hig/patterns/playing-haptics.md` (✓): standard sliders play haptics automatically.
- `hig/foundations/color.md` (✓ CRITICAL): fill/track contrast; `hig/foundations/materials.md` (✓ CRITICAL): sliders over glass.
- Not yet ingested: Toggles, Focus and selection. Text fields (✓ `text-fields.md`). Steppers (✓ `steppers.md`).

## Checklist
- [ ] The control is a **native `<input type="range">`** (or a full `role="slider"` widget) with **visible label, min/max/step and `aria-valuetext`** where units matter.
- [ ] **Min is leading and max trailing** (mirrored in RTL); vertical sliders have min at the bottom.
- [ ] The **track fills from min to the thumb**; **thumb and unfilled track ≥ 3:1**; visible focus; **≥ 44 px** touch target.
- [ ] **Live feedback** while dragging, **commit on release**; a **readout** shows the value (quiet grey text, or an editable field).
- [ ] **Wide ranges** pair the slider with a **text field and stepper**, clamped and validated.
- [ ] **No custom slider for system-like audio volume**; media volume uses the player's controls plus mute.
- [ ] **Tick marks** (with `step` snapping) where precision matters; labels only at min/max, **periodic labels for nonlinear scales**, and a **value tooltip**.
- [ ] **Circular sliders** only for angles/repeating values, with keyboard and numeric alternatives.
- [ ] Left/right **icons** clarify the ends and are `aria-hidden`; icons are Lucide/Phosphor/Ionicons, not SF Symbols.
- [ ] Wearable/TV/spatial variants use **± buttons**, large targets and **horizontal** orientation.

## Related
- Ingested: Pickers (✓), Segmented controls (✓), Color wells (✓), Playing audio (✓), Panels (✓), Right to left (✓), Entering data (✓), Playing haptics (✓), Offering help (✓), Labels (✓), Color (✓ CRITICAL), Materials (✓ CRITICAL).
- Not yet ingested: Toggles. Text fields (✓ `text-fields.md`). Steppers (✓ `steppers.md`).
- Developer docs: SwiftUI `Slider`; UIKit `UISlider`; AppKit `NSSlider`.
