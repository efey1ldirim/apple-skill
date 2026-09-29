# Apple Pencil and Scribble
Source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble · Section: Inputs · Supported platforms: **iPadOS only** ("Not supported in iOS, macOS, tvOS, visionOS, or watchOS"; only the iPad icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **May 7, 2024** (added guidance for squeeze and barrel roll on Apple Pencil Pro; earlier rows: September 12, 2023 updated artwork · November 3, 2022 added hover guidance). One DocC fetch, read in full. **10 screenshots (hero → the three video cards)** were compared with the fetched text, image alt text and captions line by line; they cover the whole page **except the Change log table, which is fetch-only** (the last screenshot ends on the videos). The browser was in **dark appearance**; the content is identical. Everything visible matches the fetch except the notes under **Mismatches**. **Read from the fetch only (not in screenshots):** the three Change-log rows, the alt text of every image and the dark variants; the video links were read as titles only (videos not watched, nothing from them is recorded). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **almost no numbers** (a 45° tilt in an alt text; the 3-finger undo gesture).

## In one line
Apple Pencil (iPad) makes **drawing, handwriting and marking feel effortless**, and works as a **pointer and UI tool**; **Scribble** turns handwriting into text in **any text field**, on-device. Rules: **support what people expect from a real pencil** (marks the moment it touches, margins), **let controls respond to the Pencil so people needn't switch to a finger**, **use tilt, pressure, azimuth and barrel roll to shape strokes**, **show direct feedback**, **serve left- and right-handed people**; **hover** = preview only (mid-range value, never an action); **double tap / squeeze** = **non-destructive, discrete, easy-to-undo** actions, respecting the person's settings (squeeze may run an App Shortcut); **barrel roll** = marking only; **Scribble** = write anywhere text belongs, **don't distract, don't move, don't autoscroll, give room**; **PencilKit** for drawing (keep markup colours on existing content, custom undo/redo when compact). iPadOS-only; on the web the counterparts are **Pointer Events with pen data, hover states, the Ink/handwriting APIs and stylus-friendly text inputs**.

## Rules

### Framing (intro)
- Apple Pencil is a **versatile, intuitive tool for iPad apps** with **pixel-level precision** for **jotting notes, sketching, painting, marking up documents**. **Scribble** lets people **enter text in any text field with Apple Pencil** through **fast, private, on-device handwriting recognition**. (Compatibility and features: the Apple Pencil product page.)

### Best practices
- **should** **Support behaviours people intuitively expect from a marking instrument**: people know real pencils and pens; think of **how nondigital tools are used** and **proactively support natural attempts**, e.g. **writing in the margins** of documents or books.
- **should** **Let people choose when to switch between Apple Pencil and finger.** If the app supports the Pencil for marking, **make its controls respond to the Pencil too**, so people **don't have to switch to a finger**: a control that ignores the Pencil **seems unresponsive, like a malfunction or low battery**. (**Scribble supports only Apple Pencil input.**)
- **must** **Let people make a mark the moment the Pencil touches the screen**: Pencil-on-screen should mirror **pencil-on-paper**; **never require a button tap or a special mode first**.
- **should** **Respond to how people use the Pencil.** It may sense **tilt (altitude), force (pressure), orientation (azimuth) and barrel roll**; use them to **affect strokes** (thickness, intensity). **Keep pressure handling simple and intuitive**: pressure naturally drives **continuous properties like ink opacity or brush size**. (Illustrated: **Altitude** = pencil tilted **45°** from a horizontal line; **Pressure** = a curve that thickens with more pressure; **Azimuth** = the pencil on its tip at the centre of a degree-marked circle.)
- **should** **Give visual feedback that shows a direct connection with content**: the Pencil must **appear to directly and immediately manipulate what it touches**; **avoid seemingly disconnected actions or effects on other parts of the screen**.
- **should** **Design for left- and right-handed people**: **don't put controls where either hand may cover them**; if they may be obscured, **let people reposition them**. (Illustrated: three circular controls on both edges; a **left hand** covers the left stack, which **moves to the right edge**, and the mirror case.)

### Hover
- **should** **Use hover to help people predict what will happen on touch**: e.g. a **hover preview** shows **the size and colour of the mark the current tool would make**. **Avoid continuously changing the preview with height**: it doesn't clarify the mark, and frequent variation **distracts**.
- **must not** **Use hover to start an action**: hovering is **imprecise**; people don't think about the actual distance, so they could **trigger something (especially a destructive action they'd want to undo)** just by **holding the Pencil near the screen**.
- **should** **Prefer a preview value near the middle of a dynamic range**: at **maximum pressure** a brush preview **could occlude the marking area**; at **minimum** it's **hard to see or invisible**, an inaccurate preview. (✗ small blue oval under the tip · ✓ **medium** oval · ✗ large oval.)
- **may** **Use hover for relevant interactions near where people mark**: e.g. after a **squeeze** or a **modifier key on an attached keyboard**, show **a contextual menu of tool sizes** at the hover point, so people **don't move the Pencil or hand elsewhere**.
- **should** **Show hover previews for Apple Pencil, not for a pointing device**: showing the **same feedback for both may confuse**; if it makes sense, **restrict the preview to the Pencil** (developer: "Adopting hover support for Apple Pencil").

### Double tap
- **should** **Respect the person's double-tap setting where it makes sense.** By default (models with double tap) it **toggles between the current tool and the eraser**; people can set **current ↔ previous tool**, **show/hide the colour picker** or **nothing**. **If the app supports these behaviours, follow the setting.** If the systemwide options don't fit, you may **use the gesture to change the interaction mode** (a 3D app with a mesh-editing tool: **toggle between raise and lower modes**).
- **should** **Offer a control to choose custom double-tap behaviour when you add it** (alongside some or all defaults): people **must know which mode they're in**; make the custom behaviour **easy to discover** but **off by default**.
- **must not** **Use double tap for an action that modifies content**: accidental double taps happen and people may **not notice the app did something**; prefer actions **easy to undo**; **never a potentially destructive, data-losing** action.

### Squeeze
- With **Apple Pencil Pro** people can **squeeze** to act. You can design **custom behaviour**, but **people may configure squeeze to run an App Shortcut instead** of app-specific actions.
- **Note (callout):** squeeze works **only while the paired iPad's screen is on and the Pencil Pro is not touching it**; because it works **at a distance**, people **might not be looking at the on-screen result**.
- **should** **Treat squeeze as a single, quick gesture for a discrete (not continuous) action**: people sometimes squeeze hard; **holding or repeating** can be **tiring**; respond to **one squeeze** and **show the result promptly**.
- **should** **Show squeeze-revealed UI (a contextual menu) close to the Pencil Pro tip**: strengthens the link between device and gesture and keeps people engaged.
- **must** **Define squeeze actions that are non-destructive and easy to undo**: like double tap, it can be **made unintentionally**; **never data-losing**.

### Barrel roll
- While marking with Apple Pencil Pro, a **barrel-roll gesture** changes **the type of mark** (in Notes: **rotating the angle of the highlighter mark**).
- **must** **Use barrel roll only to modify marking behaviour**, **not for navigation or to reveal other controls**: unlike double tap and squeeze it is **naturally tied to marking** and **doesn't suit interface actions**.

### Scribble
- With Scribble people **write wherever text is accepted, without tapping or switching modes first**; it is **fully integrated into iPadOS, so on by default in all apps**.
- **should** **Make text entry fluid and effortless.** By default Scribble works in **all standard text components** (**text fields, text views, search fields, editable web content**) **except password fields**. For a **custom text field**, **don't make people tap or select it before writing**.
- **should** **Offer Scribble wherever people might want to enter text**: with the Pencil people treat the screen **like paper**; be consistent where text entry seems natural (Reminders: writing a new reminder **in the blank space below the last item**, though **there is no text field** there; developer: `UIIndirectScribbleInteraction`).
- **should** **Avoid distracting people while they write**: keyboard-oriented behaviours can disrupt handwriting: **no autocompletion text while writing** (it visually interferes), and **hide placeholder text the moment writing begins** so the input doesn't overlap it.
- **should** **Keep the text field still while writing**: a focused field may move for the keyboard (a search field moving to make room for results) but **while writing it feels like losing control of where input goes**; if you can't prevent moving or resizing, **delay the change until people pause**.
- **must not** **Autoscroll text while people write and edit**: they may **try to avoid writing on top of it**, and if it scrolls while they **select with the Pencil** they may **select the wrong range**.
- **should** **Give enough space to write**: a **small field feels uncomfortable**; when Pencil input is likely **enlarge the field before writing starts or when people pause**; **never resize while they write** (developer: `UIScribbleInteraction`). (✗ a narrow "Name" field where the signature "Juan Ch…" is cut off · ✓ a field wide enough for "Juan Chavez".)

### Custom drawing
- **PencilKit** lets people **take notes, annotate documents and images and draw with the same low-latency experience as iOS**, with **a custom drawing canvas**, **tool picker and ink palette**.
- **should** **Help people draw on top of existing content**: by default PencilKit canvas **colours adapt to Dark Mode** (content looks right in both), but **when drawing over a PDF or photo, disable that dynamic colour adjustment** so the **markup stays sharp and visible**.
- **should** **Consider custom undo and redo buttons in a compact environment**: in a **regular environment the tool picker includes them**, in a **compact one it doesn't**; show them in a **toolbar**; also consider the standard **3-finger undo/redo gesture** so it works in any environment (see Undo and redo). (Illustrated: iPad landscape with **undo/redo at the left end of the tool picker**; iPhone portrait with **undo in the top toolbar**.)

### Platform considerations
- **iPadOS only.** Not supported in iOS, macOS, tvOS, visionOS, watchOS.

## Specs & values
| Item | Value |
|---|---|
| Sensed properties | **tilt (altitude)**, **force (pressure)**, **orientation (azimuth)**, **barrel roll** (Pencil Pro) |
| Altitude example | Pencil tilted **45°** from a horizontal line (illustration) |
| Default double tap | toggles **current tool ↔ eraser**; settings: current ↔ previous tool · show/hide colour picker · nothing |
| Squeeze | **Apple Pencil Pro**; screen on, Pencil not touching; may run an **App Shortcut** |
| Barrel roll | **Apple Pencil Pro**; changes mark type/angle while marking |
| Scribble coverage | standard text fields, text views, search fields, editable web content; **not password fields** |
| Hover preview | near-**middle** value; not tied continuously to height; Pencil only |
| Undo/redo | in tool picker (regular); toolbar buttons or **3-finger gesture** (compact) |
| PencilKit colour behaviour | adapts to Dark Mode by default; disable over PDFs/photos |
| Developer APIs named | `UIIndirectScribbleInteraction`, `UIScribbleInteraction`, "Adopting hover support for Apple Pencil", PencilKit, PaperKit |
| Videos (links only, not watched) | Read between the strokes with PencilKit (WWDC26 203), Unwrap PaperKit (WWDC26 372), Meet PaperKit (WWDC25 285) |
| Apple's Related list | Entering data (✓) |
| Change log | May 7 2024 · Sep 12 2023 · Nov 3 2022 |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a **purple gradient card** (tinted purple on purpose) with **a pale-lilac scribble stroke** (a looping "m/n"-like line) over **construction lines** (rectangular grid, diagonals, nested circles). Alt: a scribble mark suggesting drawing with Apple Pencil.
- **Page chrome (from screenshot):** TOC = Apple Pencil and Scribble · Best practices · Hover · Double tap · Squeeze · Barrel roll · Scribble · Custom drawing · Platform considerations · Resources · Change log; the platform strip has **only the iPad icon lit**; side navigation: **Inputs** open with **Apple Pencil and Scribble** ringed (browser focus), **Technologies** below.
- **Altitude / Pressure / Azimuth (screenshots 2–3):** white pencil drawings on black with **blue** gradients: altitude = a pencil leaning with a **dial of blue tick marks**; pressure = a pencil on a **curved white stroke** with a **blue wedge** growing toward the right; azimuth = a pencil on its tip at the centre of a **circle of tick marks** with a **blue sector**. The captions **"Altitude", "Pressure", "Azimuth"** are under each drawing and also in the fetched image captions.
- **Left/right hand (screenshot 3):** two dark iPad frames each with **three round blue controls (eyedropper, brush, lasso-like)** on both side edges; a white illustrated **hand holding a Pencil** covers one bottom corner; the **covered stack is dimmed** and **mirrored bright on the opposite edge** **(from screenshot: the control glyphs)**.
- **Hover ✗/✓/✗ (screenshot 4):** three grey tiles with a white Pencil hovering over a **blue oval**: small (✗ grey cross), **medium (✓ green check)**, large (✗).
- **Scribble text-field pair (screenshot 8):** dark tiles: ✗ **"Name" + handwritten "Juan Ch"** in a narrow field, ✓ **"Name" + "Juan Chavez"** in a wide field **(from screenshot: the handwritten name is not in the alt)**.
- **Undo/redo (screenshot 9):** a **landscape iPad** (top toolbar, empty canvas, a **tool picker** at the bottom with pens, colour dots and undo/redo at the left end) and a **portrait iPhone** (back chevron, undo and "…" buttons and a **yellow check** at the top; a small tool picker at the bottom) **(from screenshot)**.
- **Callout boxes:** the **Note** about squeeze (screenshot 6) as a dark rounded box with a light border.
- **Videos (screenshot 10):** three cards with presenters: "Read between the strokes with PencilKit" (WWDC26; a presenter with an iPad on a stand), "Unwrap PaperKit" (WWDC26), "Meet PaperKit" (WWDC25; a presenter beside an iPad with a recipe page). The screenshots **stop at the videos; the Change log is fetch-only**.
- **Mismatches / notes:**
  1. The three **hover** images are described in the alt as small, **medium** and large ovals; the **middle one is the ✓**, matching the text ("near the middle").
  2. The **left/right-hand** alt says the controls on the covered side are "grayed out" and the opposite ones "bright"; in the dark-appearance screenshots the dimmed stack is **darker blue**, consistent.
  3. The screenshots were taken in **dark appearance**.

## Visual examples (catalog)
`visual-examples` gains **5 sets**: **apple-pencil-and-scribble-01** altitude/pressure/azimuth (3, neutral) · **-02** left- vs right-handed control placement (2, neutral) · **-03** hover preview ✗ small / ✓ medium / ✗ large · **-04** Scribble field width ✗ narrow / ✓ wide (one stand-alone image, added via `SINGLES`) · **-05** undo/redo in regular vs compact environments (one stand-alone image, added via `SINGLES`). Not in the catalog: the hero. Catalog total: **209** (was 204); existing IDs unchanged. Light and dark variants exist for all.

## Web translation
Apple Pencil is **hardware plus an iPadOS system feature**; the web sees it as a **pen pointer**. The design ideas transfer to **drawing/annotation surfaces, stylus-friendly forms and any hover-capable pointer**.

| HIG rule | Web implementation |
|---|---|
| Mark the moment the pen touches; no special mode first | **Pointer Events**: start the stroke on `pointerdown` with `pointerType === 'pen'`; no "pen mode" toggle; set **`touch-action: none`** on the canvas so the browser doesn't scroll instead; use **`getCoalescedEvents()`** and `desynchronized` canvas for low latency. |
| Support pen and finger without switching; controls respond to the pen | Every control is a **normal `<button>`/`<input>` reacting to `pointerdown/click`** for all pointer types; **never gate controls on `pointerType === 'touch'`**; palm rejection: ignore **`touch` while a pen is active** (CONV), not the other way round. |
| Pressure, tilt, azimuth, barrel roll | Use **`event.pressure`**, **`tiltX/tiltY`** (or `altitudeAngle/azimuthAngle`), **`twist`** (barrel roll) where supported; map pressure to **opacity or width** only, simply; **fall back to constant width** when `pressure` is 0.5 (mouse/no support). |
| Direct feedback; no disconnected actions | Ink appears **under the pen tip with no perceptible lag** (predicted points: `getPredictedEvents()`); **a tool never changes something elsewhere on screen**. |
| Left- and right-handed | Toolbars **repositionable** (drag or "move to other side") and **not fixed to the bottom corners** that hands cover; persist per user; detect nothing about handedness automatically. |
| Hover: preview, not action; mid-range value; not for mouse | On **`pointermove` with `pointerType === 'pen'` and `buttons === 0`** show a **brush-size/colour cursor preview** at **fixed mid opacity**, **not scaled by `height`**; **never trigger clicks or state changes on hover**; show it **only for the pen**, not the mouse cursor (which keeps its own cursor). Hover-only UI needs a touch/keyboard equivalent. |
| Hover menu near the marking point | A **contextual tool-size popover** at the pointer after a **modifier key** (`Shift`) or pen-button press; keep it **near the pen** so the hand doesn't travel. |
| Double tap / squeeze: honour settings, non-destructive, discrete, undoable | Browsers don't expose these gestures; for **pen buttons** use **`event.button === 5` (eraser)** and **`buttons` bit 32**; map to **tool toggles** (pen ↔ eraser), **never destructive**, **single-shot** (ignore repeats/holds), and **always undoable** (`undo-and-redo.md`). Show the **current mode** clearly (toolbar state) and let users **remap** it. |
| Squeeze UI near the tip | Show any menu **at the last pen position**, not in a corner. |
| Barrel roll changes marking only | Use **`twist`** to rotate the **nib/brush angle**, **never** for navigation or panels. |
| Scribble: write in any text field | For handwriting into inputs the browser/OS does it (**iPadOS Scribble works in Safari `<input>` and `contenteditable`** automatically); keep **standard inputs** (`<input>`, `<textarea>`, `contenteditable`) rather than custom canvas text fields, and **don't `preventDefault` pointer events on them**. **Exclude password fields** (they're excluded by the system). |
| Writing space available everywhere text belongs | Make **blank areas inserting a new item** accept writing/tapping (a "New item" row that becomes an input on pen contact), like the Reminders example. |
| Don't distract while writing: no autocomplete, hide placeholder on first ink | Suspend **autocomplete/suggestion popups** and **`placeholder`** while `composition`/handwriting is in progress (`compositionstart`; hide placeholder via `:not(:placeholder-shown)` or a class); no inline ghost text. |
| Field stays still; no autoscroll; enough space | **No layout shifts on focus** (search field expands **without moving**, or after a pause of ≥ 600–1000 ms, CONV); **don't autoscroll** the field's text; **give fields ≥ 44 px height (CONV: larger, ~ 56–64 px) and grow before/after writing**, never during (Layout gate: reserved space, no CLS). |
| PencilKit canvas: keep colours over existing content | On **PDF/photo annotation** layers use **fixed markup colours** independent of `prefers-color-scheme`; only theme UI chrome (`color-scheme` per layer). |
| Undo/redo for compact layouts; 3-finger gesture | Always expose **Undo/Redo buttons + `Ctrl/Cmd+Z`**; in narrow layouts put them in the **top bar**; optionally support a **3-finger tap** (CONV) (`undo-and-redo.md`). |
| iPadOS only | Not a web component; on the web use **Pointer Events**, don't imitate the tool picker chrome. |

Field-note cross-links:
- `hig/patterns/entering-data.md` (✓; Apple's Related page): text entry rules (defaults, choices, validation); Scribble is one more **input path** for it; `hig/components/selection-and-input/text-fields.md` (✓): standard text fields, clear button, placeholder rules (hide placeholder when writing); `hig/components/selection-and-input/virtual-keyboards.md` (✓): the alternative to handwriting.
- `hig/patterns/undo-and-redo.md` (✓): undo/redo, 3-finger gesture; `hig/components/system-experiences/app-shortcuts.md` (✓): squeeze may run an App Shortcut (that note's "not yet ingested: Apple Pencil and Scribble" line is now updated); `hig/inputs/action-button.md` (✓): sibling hardware input with the same "discrete, non-destructive, undoable" logic; `hig/patterns/drag-and-drop.md` (✓), `hig/components/menus/context-menus.md` (✓): hover and contextual menus; `hig/foundations/dark-mode.md` (✓): PencilKit colour behaviour; `hig/foundations/accessibility.md` (✓): don't require fine motor precision, alternatives to hover.
- `field-notes/*`: no pen-input recipe; **no conflict**.
- Not yet ingested (linked from this page): none (Entering data ✓; Apple Pencil is an external product page).

## Checklist
- [ ] The **first touch of the pen marks**; **no mode or button** is needed; **pen and finger both operate every control**.
- [ ] Strokes use **pressure/tilt/twist** when available and **fall back to a constant width**; the ink follows the tip with **no visible lag**.
- [ ] Toolbars can be **moved** and don't sit where a hand covers them (left- and right-handed tested).
- [ ] **Hover** shows a **fixed mid-range preview for the pen only**; **no action ever triggers from hover**; touch/keyboard alternatives exist.
- [ ] Pen-button/toggle shortcuts are **discrete, non-destructive, undoable**, remappable and show the **current mode**.
- [ ] Any menu opened by a pen gesture appears **near the pen tip**; **barrel roll/twist only changes the mark**.
- [ ] Text inputs are **standard elements** (Scribble-ready); **no autocomplete or placeholder overlap while writing**; the field **doesn't move, resize or autoscroll while writing** and is **large enough**.
- [ ] Markup over PDFs/photos **keeps fixed colours**; **Undo/Redo** are available in every layout.

## Related
- Ingested: Entering data (✓), Text fields (✓), Virtual keyboards (✓), Undo and redo (✓), App Shortcuts (✓), Action button (✓), Context menus (✓), Dark Mode (✓), Accessibility (✓), Layout (✓ CRITICAL).
- Not yet ingested (linked from this page): none.
- Developer docs: PencilKit, PaperKit, `UIScribbleInteraction`, `UIIndirectScribbleInteraction`, "Adopting hover support for Apple Pencil".
- Videos: Read between the strokes with PencilKit (WWDC26 203), Unwrap PaperKit (WWDC26 372), Meet PaperKit (WWDC25 285).
