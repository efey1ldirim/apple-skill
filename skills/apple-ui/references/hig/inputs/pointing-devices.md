# Pointing devices
Source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices · Section: Inputs · Supported platforms: **iOS, iPadOS, macOS, visionOS** (page data; the platform section says "No additional considerations for iOS. **Not supported in tvOS or watchOS**"; the page has sections for **iPadOS, macOS and visionOS**) · Ingested: 2026-09-29 · Apple last updated: **June 21, 2023** (the only Change log row: updated to include guidance for visionOS; the same date is in the page's data alert). **Link-only ingestion: one DocC fetch, read in full (147 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)" and the Visual notes come from alt texts and the downloaded catalog images. Not marked critical: no token file, checker or gate. Numbers on the page: **12 pt** and **24 pt** hit-region padding, **iPadOS 15** (band selection), **three** iPadOS content effects, **16** click/gesture rows and **18** macOS pointer styles.

## In one line
A **trackpad or mouse** is a precise, flexible extra input: **the main input on a Mac (together with the keyboard)** and **an addition to touch on iPad and to eyes and hands on Vision Pro**, never a replacement. **Keep mouse and trackpad gestures consistent everywhere, don't redefine system gestures, and make gestures, eyes, pointer and keyboard give the same results (including modifier keys during a drag).** **Let the pointer reveal and hide auto-hiding controls.** **iPadOS:** the pointer **adapts to what's under it** (circle by default, I-beam over text) and elements respond with three **content effects: highlight (small, transparent-background elements), lift (small, opaque elements), hover (large elements; custom scale, tint, shadow)**, plus **accessories**, **magnetism** and **band selection** (multi-select by dragging a rectangle); **add ~12 pt hit-region padding around bezeled elements and ~24 pt around unbezeled ones**, keep bar-button hit regions contiguous, prefer system effects and shapes, avoid gratuitous effects, and never put instructions in a pointer. **macOS:** a standard set of clicks and gestures (users can customise them) and **18 standard pointer styles**. **visionOS:** **look, then move the pointer**; focus follows the pointer, the context follows the gaze, and **the pointer hides while a gesture is in progress**. On the web: **Pointer Events, `:hover` (only for real hover), CSS `cursor` values, `pointer-events`, `(hover: hover)` and `(pointer: fine)` media queries**.

## Rules

### Framing (intro)
- People value the **precision and flexibility** of pointing devices. On a **Mac** they expect to **combine a pointing device with a keyboard** to move around apps and the system. On **iPad and Apple Vision Pro** it is **an additional way to interact, not a replacement for touch, eyes or gestures**.

### Best practices
- **should** **Be consistent when responding to mouse and trackpad gestures.** People expect most gestures to work the same across the system, whatever the app or game. Example (Mac): **"Swipe between pages" behaves the same** whether the pages are document pages, web pages or images.
- **should not** **Redefine systemwide trackpad gestures.** Even a **game with app-specific gestures** should leave the system ones available (e.g. **revealing the Dock or Mission Control**). **Mac users can customise the gestures for system actions.**
- **should** **Give a consistent experience across gestures, eyes, a pointing device and a keyboard.** People **move fluidly between input types** and **don't want to learn different interactions per mode or per app**.
- **should** **Let the pointer reveal and hide controls that auto-minimise or fade.** iPadOS examples: **hold the pointer over the minimised Safari toolbar to reveal it** (it minimises again when the pointer leaves); **move the pointer to show or hide playback controls in a full-screen video**.
- **should** **Keep modifier-key behaviour consistent between input types.** Example: if **holding Option while dragging duplicates an object**, the result must be **the same for touch and pointer drags**.

### Platform considerations
- **iOS:** no additional considerations. **tvOS, watchOS:** not supported.

#### iPadOS
- iPadOS **builds on the traditional pointer experience**: it **adapts the pointer to the current context** and gives **rich visual feedback at a level of precision that suits productivity and common touchscreen tasks**. The pointing system is **an extra way to interact, not a replacement for touch**.
- **should** **Allow multiple selection in custom views when necessary.** In **iPadOS 15 and later**, people **click and drag** the pointer over several items; the pointer **grows into a visible rectangle that selects what it covers** (band selection). **Standard non-list collection views support it by default; custom views must implement it** (developer: `UIBandSelectionInteraction`).
- **should** **Distinguish pointer from finger input only if it adds value.** Example: a **video scrubber** where people can **drag the playhead with pointer or touch** but **click a precise seek position with the pointer**.

##### Pointer shape and content effects
- iPadOS **merges the appearance and behaviour of the pointer and the element it moves over** to **bring focus to the target**. You can **use the system pointer effects or modify them**.
- **Default pointer shape: a circle.** It can take a **system or custom shape** over specific elements or regions; over a **text-entry area** it becomes the **I-beam** automatically. (A recording shows Calendar's new-event popover: I-beam in the URL field, a brief return to the circle between fields, I-beam again in Notes.)
- A **content effect** changes **the element or region under the pointer** while the pointer rests on it; the pointer **keeps its shape or transforms into one that fits the element's new look**. iPadOS has **three**:
  - **Highlight:** the pointer becomes a **translucent rounded rectangle acting as the control's background, with gentle parallax**; it **focuses the control without distracting**. **Default on bar buttons, tab bars, segmented controls and edit menus.** (A recording shows a Photos tab bar: the rounded rectangle around the tab's glyph and title **slides from one tab to the other** with the pointer.)
  - **Lift:** **subtle parallax plus elevation**, so the element **seems to float above the screen**; the pointer **fades out beneath it** while the element **scales up, gains a shadow below and a soft specular highlight on top**. **Default on app icons and Control Center buttons.** (A recording shows Dock icons rising one after another as the pointer passes.)
  - **Hover:** a **generic effect: custom scale, tint or shadow** on the element as the pointer moves over it; it **does not transform the default pointer shape**. (A recording shows an alert's Discard Changes button background darkening under the pointer.)

##### Pointer accessories
- **Pointer accessories** are **small visual indicators showing how the pointer can interact with the current element**, e.g. **small arrows near a resizable edge** showing the resize axis. They are **secondary items combinable with any pointer** (developer: `UIPointerAccessory`).
- **should** **Use clear, simple images for custom accessories.** They are **small**, so **too much detail won't read**.
- **should** **Consider the accessory transition to signal a state change.** The system **animates accessories appearing, disappearing and changing shape or position** alongside content effects. Example: show that an **add action became unavailable** by changing the accessory from the **`plus`** symbol to **`circle.slash`**.

##### Pointer magnetism
- iPadOS makes elements **appear to attract the pointer**, both when the pointer is **near** an element and when it is **flicked** toward one.
- **Near:** the pointer starts **changing shape as soon as it enters the element's hit region**. The **hit region usually extends beyond the visible edges**, so the pointer begins to transform **before it seems to touch**, as if the element pulled it in. (A recording shows the highlight rounded rectangle sliding between Clock tabs **with a slight resistance**.)
- **Flick:** the system **reads the pointer's trajectory to find the most likely target** and, if an element lies on the path, **pulls the pointer to its centre**.
- **Defaults:** magnetism applies to **lift and highlight elements (app icons, bar buttons) but not to hover elements**: hover **doesn't transform the pointer**, so adding magnetism **would be jarring and feel like losing control**. It also applies to **text-entry areas**, helping people **avoid jumping to another line on unintended vertical movement while selecting text**.

##### Standard pointers and effects
- **should** **Support the system content effects when possible.** People get used to them and expect them in every app; **match each effect's intent**:
  - **Highlight:** **small element with a transparent background.**
  - **Lift:** **small element with an opaque background.**
  - **Hover:** **large elements**, with **custom scale, tint and shadow** (see *Customizing pointers*).
- **should** **Prefer the system pointer appearances for standard buttons and text-entry areas** so the pointer behaves as expected.
- **should** **Add padding around interactive elements for comfortable hit regions.** **Too small** feels like needing to be extra precise; **too large** makes it **effortful to pull the pointer away**. Experiment; **as a rule about 12 pt of padding around elements with a bezel** and **about 24 pt around elements without a bezel** (measured from the visible edges). (Three illustrations: a **bezeled button with 12 pt** on every side, a **symbol with 24 pt** on every side, an **unbezeled button with 24 pt** on every side.)
- **should** **Make hit regions contiguous for custom bar buttons.** **Gaps between adjacent buttons** make the pointer **briefly revert to its default shape while crossing**, a distracting motion.
- **should** **Set the corner radius of a non-standard element that gets the lift effect.** The pointer morphs into the element's shape as it fades; by default it uses the **system corner radius (a rounded rectangle)**. For **a circle or another shape, supply the radius** so the animation is seamless (developer: `UIPointerShape.roundedRect(_:radius:)`).

##### Customizing pointers
- **should** **Prefer system pointer effects for custom elements that behave like standard ones.** Otherwise people may **think they're broken** (e.g. a custom toolbar whose buttons lack the highlight effect).
- **should** **Use pointer effects consistently across the app.** Example: **the same pointer experience in every drawing area** of a drawing app.
- **should not** **Create gratuitous pointer or content effects.** People notice changes in the pointer or the element under it and **expect them to be useful**; **purely decorative effects distract and irritate**.
- **should** **Keep custom pointer shapes simple.** The shape should **signal the available action without drawing attention**; if it isn't **instantly understood**, people **waste time working out what it means**.
- **may** **Enhance the pointer with useful custom annotations.** Examples: **X and Y values over a graph area**; **Keynote shows the current width and height of a resizable image**. (Illustration: a custom pointer over a resize handle with a small dark annotation above it showing width and height.)
- **should not** **Display instructional text with a pointer.** It **makes the app seem complicated**; **prefer clarity and simplicity** so people understand the app **with pointer or touch**.
- **should** **Consider the interplay of shadow, scale and spacing in custom hover effects.** **Reserve scale for elements that can grow without crowding neighbours** (a **table row** can't grow without overlapping others). For **tightly packed elements** use **tint without scale and shadow**. **Don't use shadow without scale**: an **unscaled element doesn't seem to come closer**, even if the shadow implies elevation.

#### macOS
- macOS supports **many standard mouse and trackpad interactions that people can customise**: a click or gesture that isn't a primary way to interact **can often be switched on or off per workflow**; people can **pick regions of a mouse or trackpad for secondary clicks** and **choose finger combinations and movements for certain gestures**.
- Standard clicks and gestures (table under Specs).
- **Pointers:** macOS has **standard pointer styles** an app uses to **show an element's interactive state or the result of a drag** (table under Specs).

#### visionOS
- People can **attach an external pointing device or keyboard** and keep using **eyes and hands**. **If people look at an element and then move the pointer, the system focuses the element under the pointer**; the app **needs no code for this**.
- With a pointing device attached, **the area the person looks at sets the pointer's context**; when their eyes move to another window, **the pointer's context moves there smoothly**. (A recording shows a pointer moving, highlighting items and scrolling in Safari, with a picture-in-picture inset of a hand on a trackpad beside a keyboard.)
- With a device that supports **gestures (trackpad or mouse)**, **the pointer hides while people gesture** to reduce visual distraction and **stays hidden until they move it**, when it **reappears where they are looking**.

## Specs & values

**macOS clicks and gestures (16 rows; ● = available)**
| Click or gesture | Expected behaviour | Mouse | Trackpad |
|---|---|---|---|
| Primary click | Select or activate an item (a file, a button) | ● | ● |
| Secondary click | Reveal contextual menus | ● | ● |
| Scrolling | Move content up, down, left or right in a view | ● | ● |
| Smart zoom | Zoom in or out on content such as a web page or PDF | ● | ● |
| Swipe between pages | Go forward or back between individually shown pages | ● | ● |
| Swipe between full-screen apps | Go forward or back between full-screen apps and spaces | ● | ● |
| Mission Control (double-tap the mouse with two fingers, or swipe up on the trackpad with three or four fingers) | Activate Mission Control | ● | ● |
| Lookup and data detectors (force click with one finger, or tap with three fingers) | Show a lookup window over the selected content | | ● |
| Tap to click | Perform the primary click with a tap | | ● |
| Force click | Click, then press firmly to show a Quick Look or lookup window; variable pressure drives pressure-sensitive controls such as variable-speed media controls | | ● |
| Zoom in or out (pinch with two fingers) | Zoom | | ● |
| Rotate (two fingers in a circular motion) | Rotate content such as an image | | ● |
| Notification Center (swipe from the trackpad's edge) | Show Notification Center | | ● |
| App Exposé (swipe down with three or four fingers) | Show the current app's windows in Exposé | | ● |
| Launchpad (pinch with thumb and three fingers) | Show Launchpad | | ● |
| Show Desktop (spread with thumb and three fingers) | Slide all windows away to show the desktop | | ● |

**macOS pointers (18 styles) with the AppKit `NSCursor` name and the closest CSS `cursor` value (CSS mapping is background knowledge, not from the page)**
| Pointer (alt text) | Meaning | AppKit | CSS |
|---|---|---|---|
| Arrow (diagonal arrow, up-left) | Standard pointer for selecting and interacting with content and interface elements | `arrow` | `default` |
| Closed hand (closed gloved hand) | Dragging to reposition the display of content in a view, e.g. dragging a map in Maps | `closedHand` | `grabbing` |
| Contextual menu (arrow with a small menu square) | A contextual menu exists for the content under the pointer; **generally shown only while Control is held** | `contextualMenu` | `context-menu` |
| Crosshair (plus symbol) | Precise rectangular selection is possible, e.g. viewing an image in Preview | `crosshair` | `crosshair` |
| Disappearing item (arrowhead with a circle containing an X) | A dragged item **disappears when dropped**; if it references an original, the original is untouched (dragging a mailbox off Mail's favourites bar doesn't remove the mailbox) | `disappearingItem` | none (verify) |
| Drag copy (arrowhead with a circle containing a plus) | Dropping **duplicates** the dragged item instead of moving it; **appears while Option is held during a drag** | `dragCopy` | `copy` |
| Drag link (curved arrow up-right) | Dropping **creates an alias** of the selected file, which points to the unmoved original; **appears while Option and Command are held during a drag** | `dragLink` | `alias` |
| Horizontal I-beam (opposing vertical braces) | Text selection and insertion in a horizontal layout such as TextEdit or Pages | `iBeam` | `text` |
| Open hand (open gloved hand) | Dragging to reposition content in a view is possible | `openHand` | `grab` |
| Operation not allowed (arrowhead with a do-not-enter symbol) | The dragged item **can't be dropped here** | `operationNotAllowed` | `no-drop` / `not-allowed` |
| Pointing hand (gloved hand, index finger extended) | The content is **a URL link** to a web page, document or other item | `pointingHand` | `pointer` |
| Resize down (horizontal bar, down arrow at its midpoint) | Resize or move a window, view or element downward | `resizeDown` | `s-resize` |
| Resize left (vertical bar, left arrow) | … to the left | `resizeLeft` | `w-resize` |
| Resize left/right (vertical bar, arrows both ways) | … left or right | `resizeLeftRight` | `ew-resize` |
| Resize right (vertical bar, right arrow) | … to the right | `resizeRight` | `e-resize` |
| Resize up (horizontal bar, up arrow) | … upward | `resizeUp` | `n-resize` |
| Resize up/down (horizontal bar, arrows both ways) | … upward or downward | `resizeUpDown` | `ns-resize` |
| Vertical I-beam (opposing horizontal braces) | Text selection and insertion in a vertical layout | `iBeamCursorForVerticalLayout` | `vertical-text` |

| Item | Value |
|---|---|
| Hit-region padding (iPadOS) | **~12 pt** around bezeled elements · **~24 pt** around unbezeled elements and symbols |
| iPadOS content effects | **highlight** (small, transparent background) · **lift** (small, opaque background) · **hover** (large; custom scale, tint, shadow) |
| Default effect targets | highlight: bar buttons, tab bars, segmented controls, edit menus · lift: app icons, Control Center buttons |
| Default pointer | **circle**; **I-beam** over text entry |
| Magnetism | applies to **lift and highlight** elements and text-entry areas, **not hover** |
| Band selection | **iPadOS 15+**; standard non-list collection views by default, custom views must implement it |
| Accessory example | `plus` → `circle.slash` when an add action becomes unavailable |
| visionOS pointer | gaze sets the context; **hides while gesturing**, reappears where the person looks |
| Developer docs | SwiftUI **Input events** · UIKit **Pointer interactions**, `UIBandSelectionInteraction`, `UIPointerAccessory`, `UIPointerShape.roundedRect(_:radius:)` · AppKit **Mouse, Keyboard, and Trackpad** |
| Video (link only, not watched) | Design for the iPadOS pointer (WWDC20 10640) |
| Apple's Related list | Entering data (✓), Keyboards (✓) |
| Change log | Jun 21 2023: visionOS guidance added |

## Visual notes (link-only: from alt text and the catalog images)
- **Hero:** an **arrow-shaped pointer sketch** over grid lines, **tinted purple** (alt).
- **Videos (5):** text-entry I-beam (Calendar), highlight (Photos tab bar), lift (Dock icons), hover (Calendar alert button), magnetism (Clock tab bar), and a visionOS recording (Safari with a trackpad inset); each has only an alt description in the fetch.
- **Padding illustrations (catalog `pointing-devices-01`, light and dark):** three **pink shaded rectangles** around a blue element with **red dimension callouts on all four sides**: a **blue rounded button labelled "Button" with 12**, a **blue circled "i" glyph with 24**, and a **bare blue "Button" text (no bezel) with 24**. The shading shows the **hit region** extending evenly beyond the visible edges.
- **Pointer-annotation illustration:** a custom pointer on a resize handle at the edge of a shaded rectangle with a **dark annotation above it showing width and height**.
- **Pointers table:** 18 small **pointer glyphs**, each with an alt description (the fetch also lists dark variants for the hand cursors).
- **Mismatches / notes:**
  1. **The platform strip and page data list iOS**, but the page says **"no additional considerations for iOS"** and gives **no iPhone pointer guidance**; nearly all the content is **iPadOS, macOS and visionOS**.
  2. **The hit-region padding (12 pt, 24 pt) is for the iPadOS pointer**, measured **around the visible element**, and **is not a touch-target size**; touch targets still follow Buttons (44 pt), see Web translation.
  3. **The drag-pointer rows** (drag copy, drag link, disappearing item, operation not allowed) describe **Option and Option+Command drag modifiers**; the same modifiers are named in `drag-and-drop.md`.
  4. **Typos in the source alt texts:** "veritcal" (horizontal I-beam alt) and the "Ex" for an X mark.
  5. **The fetch's markdown tables show the pointer glyph cells with both a light and a dark URL separated by a pipe** for the hand cursors, which shifts columns in the raw fetch (**rendering artefact, not page content**; the note's table is re-aligned).
- **Catalog:** the script found **1 comparison** (the three padding illustrations, a neutral trio in a column group). **Not catalogued:** the hero, the annotation illustration, the pointer glyphs (table cells) and the five videos. Catalog total **220** (was 219); the 219 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **pointing-devices-01** (neutral trio, light and dark): **hit-region padding around interactive elements** (rule *Add padding around interactive elements to create comfortable hit regions*): **bezeled button: 12**, **symbol: 24**, **unbezeled button: 24**. The script reports **1 comparison** for this page.

## Web translation
On the web the pointer is the **browser's cursor plus `:hover`**. The design rules carry over as **hover feedback, cursor semantics, hit-region padding and input-agnostic behaviour**; the iPadOS pointer morphing has no direct equivalent (it can be imitated with CSS). Statements about browser behaviour are background knowledge, not from the page.

| HIG rule | Web implementation |
|---|---|
| Pointer is an addition (Mac main, iPad/Vision extra) | Handle **all input types with Pointer Events** (`pointerType` = mouse / pen / touch); **never make hover the only way** to reach anything (`@media (hover: hover) and (pointer: fine)` gates hover-only polish; **touch and keyboard get the same result**). |
| Consistent gestures; don't redefine system gestures | **Don't intercept two-finger back/forward swipes, pinch-zoom or system edge gestures**; let **native scroll and history** work (`gestures.md`); **`wheel` + `ctrlKey`** is the trackpad pinch: don't hijack it except in a canvas/map that owns zoom (provide +/− buttons). |
| Same result for gestures, eyes, pointer, keyboard | One **command path** behind every input (a handler called from click, key, and touch), so behaviour can't drift (`keyboards.md`, `gestures.md`, `eyes.md`). |
| Pointer reveals/hides auto-minimising controls | **Hover-reveal with a non-hover route**: show the toolbar or video controls on **`pointermove` / `:hover` / `:focus-within`** and hide after a **timeout (CONV ~2–3 s)**; **always reveal on keyboard focus and on tap**; **never hide focused controls** (`playing-video.md`). |
| Same modifier behaviour for touch and pointer drags | Map **`event.altKey` (Option) = copy**, **`altKey + metaKey` = link/alias** (Mac), **Shift = constrain**, and offer a **visible mode control** (a Copy/Move toggle) for touch users who have no modifier key (`drag-and-drop.md`, `keyboards.md`). |
| iPadOS band selection (rectangle select) | A **marquee**: **`pointerdown` on empty space → `pointermove` draws a rectangle (`position: fixed`, `pointer-events: none`) → select intersecting items on `pointerup`**; **Shift/⌘ or Ctrl to extend**; make it **keyboard-equivalent** (Shift+arrows, Ctrl/⌘+A) and **skip it on touch** where drag scrolls (`touch-action`). |
| Distinguish pointer from finger only if valuable | E.g. a **scrubber**: **drag works with any pointer**; **a click on the track jumps to the position** only for `pointerType === "mouse"` or **anyone** if the target is precise enough; keep **one** semantics unless the split adds value. |
| Content effects: highlight, lift, hover | **Highlight** = a **translucent rounded-rect `:hover` background** that **slides between siblings** (one absolutely-positioned element moved with `transform`, **`prefers-reduced-motion` → instant**) for **icon buttons, tab bars, segmented controls, menu items**. **Lift** = **`transform: scale(1.04–1.08)` + soft shadow** for **small opaque elements** (icons, tiles; **CONV values**). **Hover** = **tint (background/colour shift), and scale + shadow only when there is room**. **Only in `@media (hover: hover)`**. The skill's card hover (1 px lift, `field-notes`) is a **lift-family** effect. |
| Tint without scale for tight elements; no shadow without scale | For **rows, dense lists, table cells** use **background tint only** (`field-notes/tokens.md` row hover `rgba(0,0,0,.025)`); **don't add a shadow to an element that doesn't also move or scale**. |
| Avoid gratuitous effects; useful changes only | Every hover change **communicates interactivity or state**; **no idle parallax or decorative cursor followers**; **never hide content behind hover**. |
| System pointers for standard buttons and text | **Text inputs: `cursor: text`** (default); **links: `cursor: pointer`**; **buttons: `cursor: default` (the arrow), as native macOS buttons; see the decision note below**; **disabled: `cursor: not-allowed`**; don't set `cursor: none` outside a game or canvas that draws its own. |
| Pointer shapes (macOS list) → CSS `cursor` | Use the table above: **`grab` / `grabbing`** for pannable content and while dragging, **`crosshair`** for precise selection, **`copy` / `alias` / `no-drop`** during drops (set on `dragover` via `dropEffect`, or `cursor` on the target), **`n/s/e/w/ew/ns-resize`** on resize handles, **`context-menu`** while ⌃ is held on macOS, **`vertical-text`** for vertical writing. **`disappearingItem` has no CSS value** (**verify**). |
| Keep custom shapes simple | Avoid custom **`url()` cursors** unless a canvas tool needs one (**≤ 32×32 px**, provide a fallback keyword, e.g. `url(...) 8 8, crosshair`; CONV). |
| Pointer accessories (small indicators) | A **small badge or icon attached to the cursor** is not possible; use **the cursor keyword** plus a **tooltip or inline hint** near the element (`plus` → `circle.slash` maps to `cursor: copy` → `not-allowed`). |
| Pointer annotations (X/Y, width/height) | Show a **small floating readout** (`position: fixed`, `pointer-events: none`, follows `pointermove` with an offset) **only while the value is meaningful** (dragging a resize handle, hovering a chart); also expose the value in text for assistive tech. |
| No instructional text on the pointer | Keep **tooltips short**; explain in the UI, not a cursor-following label (`offering-help.md`). |
| Hit-region padding (~12 pt bezeled, ~24 pt unbezeled) | **Extend the hit area beyond the visible edges with `padding`, a pseudo-element (`::before { inset: -12px }`) or a larger transparent wrapper**; **~12 px around bezeled controls and ~24 px around bare icons/text buttons is the pointer-side rule (CONV mapping of the pt values)**. **Do not confuse it with the touch target: keep ≥ 44 px** (`buttons.md`); **use whichever is larger**. Avoid overlapping neighbours' hit areas. |
| Contiguous hit regions for bar buttons | In a **toolbar/tab bar**, give buttons **adjacent hit areas with no dead gap** (use `gap: 0` with padding, or a wrapper that fills the space) so the **hover highlight doesn't flicker off between items**. |
| Corner radius for lift shape | Make the **highlight/lift shape follow the element's `border-radius`** (circle → `border-radius: 50%`), so the effect matches. |
| Magnetism | **No web equivalent.** Approximate with **generous hit areas**; don't attempt to steer the OS cursor. |
| macOS clicks and gestures | **Primary click = `click`**; **secondary click = `contextmenu`** (offer a keyboard route: Menu key / Shift+F10, `context-menus.md`); **scroll/pinch = native**; **smart zoom, Mission Control, Launchpad, Notification Center etc. are system-owned**, **not available to pages**; **force click**: the **non-standard `webkitmouseforcechanged`** events exist in Safari only, so **don't depend on them**. |
| visionOS: gaze + pointer, hide while gesturing | **Nothing to implement**: `:hover` and `pointermove` arrive as usual; **keep hover styles separate from focus** (`eyes.md`, `focus-and-selection.md`); **don't call `cursor: none` or draw a custom cursor**, the system hides and moves it. |
| iOS/iPhone: no pointer guidance | Treat the web on iPhone as **touch first**; if a pointer or trackpad is attached, `@media (hover: hover)` becomes true, so **the same hover rules apply**. |
| Native-only | **`UIPointerInteraction`, `UIPointerStyle`, `UIPointerAccessory`, `UIBandSelectionInteraction`, `NSCursor`** and the **system pointer morphing** are native; on the web use **Pointer Events, CSS `:hover`/`cursor`, media queries**. |

**Decision (user, 2026-09-29): follow Apple.** Apple's **pointing hand** means **"this is a URL link"**, and macOS-native **buttons keep the arrow**. `tokens/apple-buttons.css` now sets **`cursor: default` on `.btn`** (was `pointer`); `not-allowed` (disabled) and `progress` (busy) are unchanged. **Links keep `cursor: pointer`.** Web note: many web apps use the hand on buttons; this skill deliberately doesn't.

Field-note cross-links:
- `field-notes/components.md` uses **`cursor-default` for the non-interactive "SOON" pill** (**consistent** with "arrow for non-interactive content"); `field-notes/tokens.md` **row hover `rgba(0,0,0,0.025)`, card hover lift, `hover:opacity-85` on filled buttons**: all **hover/lift-family effects, consistent** with "highlight and hover tint, lift for small opaque elements". **No other conflict.**
- `hig/inputs/eyes.md` (✓): **hover effect on visionOS** (gaze) vs pointer; `hig/inputs/focus-and-selection.md` (✓): **focus vs hover**, tvOS states; `hig/inputs/keyboards.md` (✓): **Apple's Related page**, ⌥ / ⌥⌘ drag modifiers; `hig/inputs/gestures.md` (✓): standard gestures on trackpad and mouse, **Magic Mouse/Trackpad**; `hig/patterns/drag-and-drop.md` (✓): **drag pointer shapes** (copy, link, disappearing item, not allowed) and modifier keys; `hig/components/menus/buttons.md` (✓ CRITICAL): **hover state, ≥ 44 px hit region, tooltips**; `hig/components/menus/toolbars.md` (✓), `tab-bars.md` (✓), `segmented-controls.md` (✓), `edit-menus.md` (✓): **highlight-effect defaults**; `hig/components/menus/context-menus.md` (✓): **secondary click**; `hig/patterns/entering-data.md` (✓): **Apple's Related page**; `hig/patterns/playing-video.md` (✓): **reveal controls on pointer move**; `hig/components/presentation/scroll-views.md` (✓): **scrolling on trackpad/mouse**; `hig/patterns/offering-help.md` (✓): **tooltips**.
- Not yet ingested (linked from this page): none.

## Checklist
- [ ] **Hover is never the only route** to a control; **touch and keyboard give the same result**; hover polish is behind **`(hover: hover) and (pointer: fine)`**.
- [ ] **System gestures and native scrolling/history aren't intercepted**; custom zoom areas have **+/− buttons**.
- [ ] **Auto-hiding controls** reveal on **pointer move, keyboard focus and tap** and **never hide while focused**.
- [ ] **Modifier-key drag behaviour** (⌥ copy, ⌥⌘ link, ⇧ constrain) has a **visible non-keyboard equivalent** for touch.
- [ ] Interactive elements have a **hit region extending beyond the visible edges (~12 px bezeled, ~24 px unbezeled)** **and** remain **≥ 44 px** for touch; **neighbouring hit areas don't overlap or leave hover gaps** in bars.
- [ ] Hover effects follow the **highlight / lift / hover intent** (small transparent → highlight; small opaque → lift; large → tint, scale only with room); **no shadow without scale**; **reduced motion** = instant.
- [ ] Cursors use **standard keywords** (`text`, `pointer` for links, `grab/grabbing`, `crosshair`, `copy/alias/no-drop`, resize keywords, `not-allowed` for disabled); **no decorative custom cursors**; **no instruction text attached to the pointer**.
- [ ] Custom annotations (X/Y, width/height) appear **only while useful** and are **also available as text**.
- [ ] **Marquee selection** (if any) is **keyboard-equivalent**, **extends with Shift/⌘/Ctrl**, and **doesn't fight touch scrolling**.
- [ ] **Secondary click** opens the context menu **and** a keyboard route exists.

## Related
- Ingested: Entering data (✓), Keyboards (✓), Eyes (✓), Focus and selection (✓), Gestures (✓), Drag and drop (✓), Buttons (✓ CRITICAL), Toolbars (✓), Tab bars (✓), Segmented controls (✓), Edit menus (✓), Context menus (✓), Playing video (✓), Scroll views (✓), Offering help (✓).
- Not yet ingested (linked from this page): none.
- Developer docs: SwiftUI "Input events" · UIKit "Pointer interactions" (`UIBandSelectionInteraction`, `UIPointerAccessory`, `UIPointerShape.roundedRect(_:radius:)`) · AppKit "Mouse, Keyboard, and Trackpad" (`NSCursor`).
- Videos: Design for the iPadOS pointer (WWDC20 10640).
