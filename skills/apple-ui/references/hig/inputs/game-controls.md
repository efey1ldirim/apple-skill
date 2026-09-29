# Game controls
Source: https://developer.apple.com/design/human-interface-guidelines/game-controls · Section: Inputs · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS** ("No additional considerations for iOS, iPadOS, macOS, or tvOS. Not supported in watchOS"; the intro adds that **all platforms except watchOS support physical controllers**; the platform strip shows six device icons with the Mac one drawn bolder, and the screenshot does not show whether the Watch icon is dimmed **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **June 9, 2025** (updated touch control best practices and the controller mapping for UI; added spatial game controller guidance for visionOS; earlier row: June 10, 2024, added touch-control guidance and renamed from "Game controllers"). One DocC fetch, read in full. **12 screenshots (hero → the three video cards under Videos)** were compared with the fetched text, image alt text and captions line by line; they cover the **whole page except the Change log table** (fetch-only). The browser was in **dark appearance**; the content is identical. **Read from the fetch only (not in screenshots):** every image alt text, the Change log, the developer-documentation and video link targets (the screenshots show the link labels). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. Numbers on the page: **44 × 44 pt** and **28 × 28 pt**.

## In one line
A game can take input from **touch, a remote, a mouse and keyboard, or a physical controller**, and players may prefer a controller but **not everyone owns one**, so **always support the platform's default interaction method too**. On **iPhone/iPad touch**, decide whether virtual controls are needed at all, **place them under the thumbs and inside safe areas, size them ≥ 44 × 44 pt (menus ≥ 28 × 28), give every one a visible + tactile press state, draw action symbols (not "A/X/R1"), show and hide them with context, fold multi-button moves into one control, and use a floating thumbstick on the left plus direct touch for the camera on the right**. For **physical controllers**, **detect pairing automatically, label everything with the connected controller's own glyphs, map buttons to the UI conventions in the table (A activates, B cancels, shoulders switch sections, Menu pauses) and prefer symbols to text**. For **keyboards**, **favour single-key commands, test with an Apple keyboard, mind key proximity and let players rebind**. On **visionOS** spatial controllers act like hands (look + trigger = indirect, reach + trigger = direct). On the web: **Pointer Events + Gamepad API + `KeyboardEvent.code`**, with WebXR input sources for headsets.

## Rules

### Framing (intro)
- A game can support **physical game controllers** or **default system interactions** (touch, a remote, a mouse and keyboard). Two reasons to also support the default methods: **not every player has a controller** (all platforms except watchOS support them), and **players like the interaction method they know best**. Choose input methods per platform with these factors in mind.

### Touch controls (iOS and iPadOS)
- Touch means you can provide **virtual controls on top of game content** while players also **touch game elements directly**. The **Touch Controller** framework adds the virtual controls.
- **should** **Decide whether virtual controls make sense on top of the game.** They benefit games with **many actions or movement control**; sometimes direct interaction with in-game objects is **more immersive and effective**. **Reduce overlapping virtual controls by tying actions to in-game gestures** (tap an object to select it instead of adding a Select button).
- **should** **Place virtual buttons where they are easy to reach.** Respect **device boundaries and safe areas**; **never overlap the Home indicator or the Dynamic Island**; put **frequently used buttons near a thumb**, **outside the circular regions where movement and camera input happen**; put **secondary controls such as menus at the top of the screen**.
- **must** **Make controls large enough:** **frequently used ≥ 44 × 44 pt**, **less important (menus) ≥ 28 × 28 pt**.
- **must** **Always include visible and tactile press states.** A control with no visual and physical response feels unresponsive. Add **a visual press effect such as a glow that stays visible when a finger covers the control**, and **combine it with sound and haptics** (→ Playing haptics).
- **should** **Use symbols that communicate the action** (a weapon graphic for attack). **Avoid abstract shapes or controller-based names such as A, X or R1** as artwork; they make it harder to understand and remember what a control does.
- **should** **Show and hide virtual controls to reflect gameplay.** Hide a control when the action is unavailable or irrelevant to **reduce clutter and focus attention**; example: **hide movement controls until the player touches the screen**. Example tabs: a thumbstick that is **more visible and shows a highlight in the direction of movement** vs. one that **fades when at rest**.
- **should** **Combine functionality into a single control.** Redesign mechanics that need **several buttons at once or in sequence**; use **double tap and touch and hold** for variations of one action (**touch and hold = powered-up attack**); merge related actions such as **walking and sprinting** into one control.
- **should** **Map movement and camera controls to predictable behaviour.** Players expect **movement on the left half** and **camera on the right half**. Use **as large an input area as possible**. **Movement: a virtual thumbstick that appears wherever the thumb lands** (not a fixed one). **Camera: direct touch to pan** (not a virtual thumbstick).

### Physical controllers
- **should** **Support the platform's default interaction method.** A controller is an optional purchase, but **every iPhone/iPad has a touchscreen, every Mac a keyboard and trackpad or mouse, every Apple TV a remote, every Vision Pro responds to eyes and hands**. If you support controllers, keep a **fallback to the default method** (developer guidance: adding virtual controls to games that support game controllers in iOS).
- **should** **Tell people about controller requirements.** On **tvOS and visionOS** you can **require a controller**; the App Store shows a **"Game Controller Required"** badge. People can open the game **without a connected controller**, so **check for one and prompt them gracefully to connect** (`GCRequiresControllerUserInteraction`).
- **should** **Detect pairing automatically** instead of manual setup, and **get the controller's profile** (Game Controller framework).
- **should** **Customise onscreen content to the connected controller.** The framework gives **standard names by placement**, but **colours and symbols on the real controller may differ**; **use the connected controller's labelling scheme** whenever you refer to a control or show related content (`GCControllerElement`).
- **must** **Map controller buttons to expected UI behaviour** outside gameplay, on all Apple platforms (table under Specs).
- **should** **Support multiple connected controllers:** show **labels and glyphs that match the controller the player is actively using**; in multiplayer use **the right labels and symbols for a specific player's controller**; when you must mention several controllers' buttons, **list them together**.
- **should** **Prefer symbols to text** for controller elements. The framework makes **SF Symbols available for most elements, including buttons on various brands** (a screenshot of the SF Symbols app's Gaming category illustrates it). Symbols help **inexperienced players** because they don't have to **hunt for a label** mid-game.

### Keyboards
- Keyboard players like **bindings that speed up interaction**.
- **should** **Prioritise single-key commands**; they are easier and faster, **especially with a mouse or trackpad in the other hand**. Examples: **first letter of a menu item (I = Inventory, M = Map)**, **main action on the Space bar** (large key).
- **should** **Test key-binding comfort on an Apple keyboard.** A binding that uses **Control (^)** on a non-Apple keyboard may map better to **Command (⌘)** on an Apple one, which sits **next to the Space bar** and is easy to reach from **W A S D**.
- **should** **Consider key proximity:** put other high-value commands on **keys near W A S D**; map **closely related actions to physically close keys** (e.g. **number keys for inventory categories**).
- **should** **Let players customise key bindings**: expect a reasonable default set, but **many people need to change it for comfort and play style**.

### Platform considerations
- **iOS, iPadOS, macOS, tvOS:** no additional considerations. **watchOS:** not supported.
- **visionOS: should** **Match spatial game controller behaviour to hand input.** Besides wireless controllers, a game can support **spatial controllers such as the PlayStation VR2 Sense controller**. Let players interact **as they do with their hands**: **look at an object and press the left or right trigger to interact indirectly**, or **reach out and press the trigger to interact directly** (→ Gestures › visionOS).

## Specs & values
| Item | Value |
|---|---|
| Virtual control minimum | **44 × 44 pt** for frequent controls; **28 × 28 pt** for less important ones (menus) |
| Layout | movement **left half**, camera **right half**; **floating** thumbstick for movement, **direct touch pan** for camera; menus **top of screen**; nothing on the **Home indicator / Dynamic Island** |
| Press feedback | visual (glow, higher opacity) **+ sound + haptics** |
| Single control, several gestures | tap · double tap · touch and hold (powered-up); one control for walk + sprint |
| Fallback rule | always keep the **platform default input** available |
| App Store badge | **"Game Controller Required"** (tvOS, visionOS) |
| Controller anatomy | Left shoulder · Left trigger · Left thumbstick · Directional pad · Menu button · Right shoulder · Right trigger · Right thumbstick (callouts **(from screenshot)**); four face buttons A/B/X/Y and Home/logo appear in the table |
| Keyboard | single-key commands · Space = main action · ⌘ next to Space · WASD neighbours · rebinding |
| visionOS spatial controller | trigger + look = indirect · trigger + reach = direct (PlayStation VR2 Sense) |
| Frameworks named | Touch Controller · Game Controller · `GCControllerElement` · `GCRequiresControllerUserInteraction` |
| Videos | Make your game great with touch (WWDC26 358) · Design advanced games for Apple platforms (WWDC24 10085) · Explore game input in visionOS (WWDC24 10094) |
| Apple's Related list | Designing for games (✓), Gestures (✓), Keyboards, Playing haptics (✓) |
| Change log | Jun 9 2025: touch-control practices, controller mapping for UI, spatial controllers · Jun 10 2024: touch controls added, title changed from "Game controllers" |

**Controller button → expected UI behaviour (outside gameplay)**
| Button | Expected behaviour |
|---|---|
| A | Activates a control |
| B | Cancels an action or returns to the previous screen |
| X, Y | — (none) |
| Left shoulder | Navigates left to a different screen or section |
| Right shoulder | Navigates right to a different screen or section |
| Left trigger, right trigger | — (none) |
| Left / right thumbstick | Moves selection |
| Directional pad | Moves selection |
| Home / logo | Reserved for system controls |
| Menu | Opens game settings or pauses gameplay |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a **purple-magenta gradient card** with a **pale-lilac D-pad glyph** (four rounded arrow-shaped keys around a centre) over **construction lines** (grid, diagonals, nested circles); tinted purple on purpose (alt).
- **Heat map (screenshot 3):** the phone-in-landscape picture appears **blurred** in the screenshot (a loading placeholder), so only coarse shapes are visible: **green zones on both sides** of a landscape phone with a black pill at the left edge (the phone frame's Dynamic Island in landscape) and a fox character. Its meaning (ideal thumb placement) is **from the alt and caption**; the caption reads "Placing virtual controls within reach of people's thumbs can make your game more comfortable to play."
- **Press state (screenshots 3–4):** a **right hand holding a landscape iPhone**; the thumb presses the **upper-right of a cluster of four round buttons drawn with a triangle, a square and a cross**, and the pressed button **glows and is more opaque**; a **circular thumbstick pad at the lower left** with a grey knob. **(from screenshot)** The **glyphs on the virtual buttons are the controller-style shapes (△ □ ✕)** that the neighbouring rule tells you to avoid (see Mismatches).
- **Button to action (screenshot 4):** a **round button with a square** → an arrow → a **round button with a hand grabbing** (picture labels **"Game controller button"** and **"In-game action"** **(from screenshot)**).
- **Visible/Hidden control tabs (screenshots 5–6):** tab labels **Visible control** and **Hidden control**. Visible: a lava-level scene with a **red-panda character**, a **white thumbstick knob with a faint ring and a wedge highlight** at the lower left (caption: "When the thumbstick moves to the right, it becomes more visible and shows a highlight to indicate the movement direction."). Hidden: the same scene with **only a dim grey knob** (caption: "When the thumbstick is at rest, the virtual control fades to show it's not in use." — **typo in the source: "show it's"**). Faint video-player controls appear at the bottom of both frames (part of the image).
- **Combine (screenshots 5–6):** two **round buttons with a flame**: **"Single tap"** (plain) and **"Touch and hold"** (a **white progress ring** almost closed around it) **(from screenshot: the labels and the ring are inside the picture; the alt says only "supports both single tap and touch and hold")**.
- **Zones (screenshot 7):** a landscape scene split down the middle: **left half with a red outline and the label "Movement controls"**, **right half with a teal outline and "Camera controls"** **(from screenshot)**.
- **Controller anatomy (screenshot 8):** a **dark outline of a controller** with callouts **Menu button** (top centre), **Left shoulder**, **Left trigger**, **Left thumbstick**, **Directional pad**, **Right shoulder**, **Right trigger**, **Right thumbstick** **(from screenshot)**. Four **unlabelled face buttons** sit in the right cluster and two **small unlabelled buttons** left of the Menu button. **The alt mentions triggers, shoulder buttons, directional pad and thumbsticks but not the Menu button.**
- **Table (screenshot 9):** the fetch's two-column table matches exactly, including the "—" cells.
- **SF Symbols app (screenshot 10):** a macOS window on the **Gaming** category (**"234 Symbols"**, font "SF Pro", weight "Regular") with tiles such as **circle.square, rectangle.on.rectangle, flag.pattern.checkered, flag.2.crossed, house, arcade.stick.console, arcade.stick** **(from screenshot; the page only says "symbols in the Gaming category")**. The category list on the left runs from All to Fitness.
- **Videos (screenshot 12):** three cards: a **row of increasingly large game screenshots with a "WWDC26" badge** ("Make your game great with touch"); **iPad and iPhone gameplay** ("Design advanced games for Apple platforms"); **four purple/blue icons on white: an eye, a hand, a game controller, a keyboard** ("Explore game input in visionOS") **(from screenshot)**. Screenshots end **below the video titles**; **Change log is fetch-only**.
- **Page chrome (from screenshot):** TOC = Game controls · Touch controls · Physical controllers · Keyboards · Platform considerations · Resources · Change log; side navigation: **Inputs** open with **Game controls** ringed (browser focus) after **Focus and selection**, then Gestures, Gyroscope and accelerometer, Keyboards, Nearby interactions, Pointing devices, Remotes; **Technologies** (AirPlay, Always On, App Clips…) below.
- **Mismatches / notes:**
  1. **The press-state picture uses △ □ ✕ on the virtual buttons**, while the text says to **avoid abstract shapes and controller-based names as artwork**. Follow the text (action symbols), not the picture.
  2. The **heat-map image is blurred** in the screenshots; its details are unreadable, so only the alt and caption apply.
  3. The **controller anatomy alt omits the Menu button**, which the picture calls out.
  4. The **button-to-action alt says "virtual button"**; the picture's right-hand label is **"In-game action"**.
  5. The page's videos include a **WWDC26** talk (358), but the **Change log's latest row is June 9, 2025**: the resource list is newer than the log.
  6. The screenshots were taken in **dark appearance**; the catalog images are **bare gameplay frames without the phone bezel** drawn around them on the page.
- **Catalog:** the two tabs are filed as **game-controls-01** (neutral tab pair). The other pictures are single images or labelled diagrams and are not rows. Catalog total **217** (was 216); existing IDs unchanged.

## Visual examples (catalog)
`visual-examples` gains **game-controls-01** (tab pair): a thumbstick **visible and highlighted while moving** vs **faded at rest** ("show and hide virtual controls to reflect gameplay"); light variants only. The script reports **1 comparison** for this page.

## Web translation
Touch games map to **Pointer Events** with **multi-touch**, physical controllers to the **Gamepad API**, keyboards to **`KeyboardEvent.code`** with a rebinding screen, headsets to **WebXR input sources**. The design rules carry over unchanged: **never require one input method, label from the input in use, keep one fallback**.

| HIG rule | Web implementation |
|---|---|
| Support the platform default; controllers are optional | Keep **pointer/touch and keyboard** paths for every action; treat gamepad as **an extra**; if a controller is required, **say so before the game starts**, check with `navigator.getGamepads()`, and show a **"Connect a controller" prompt**. Browsers reveal a pad only **after a button press**, so the prompt text is "press any button" (there is **no App Store badge** on the web). |
| Detect a paired controller automatically | Listen to `gamepadconnected` / `gamepaddisconnected`; read `gamepad.id` and `mapping === "standard"`; **pause** the game when the active pad disconnects. |
| Are virtual controls needed at all? | **Fewer overlays**: use **direct manipulation** (`click`/`pointerdown` on the object) and gestures first; add on-screen buttons only for **many actions or continuous movement**. |
| Thumb placement, safe areas, no Home indicator / island overlap | `<meta viewport-fit=cover>` + **`env(safe-area-inset-*)`** padding on the HUD; frequent buttons **bottom corners**, menus **top**; keep clear of the movement/camera circles. |
| ≥ 44 × 44 pt (28 for menus) | HUD buttons **≥ 44 × 44 CSS px** (Apple's 28 pt = **CONV**: acceptable only for secondary game-HUD chrome and never below **24 px**, the WCAG 2.5.8 floor). Hit region can be larger than the drawn glyph (`padding` / `::before`). |
| Visible **and** tactile press state | Apply the pressed class on **`pointerdown`** (not `:active` alone, iOS delays it): **glow/opacity** that **extends beyond the finger footprint**; add sound (Web Audio, started after a gesture) and, where supported, **`navigator.vibrate`** (Android only) or **`gamepad.vibrationActuator`** for pads; never rely on haptics alone. |
| Symbols that describe the action, not "A/X/R1" | Icons from **Lucide / Phosphor / Ionicons** or your own SVG set (sword, jump, grab); **never SF Symbols artwork**. Use **controller glyphs only when a controller is active**. |
| Show/hide controls with context; fade at rest | Toggle `opacity` with a short transition (`prefers-reduced-motion`: swap instantly); **render the joystick only after the first touch**; **hide the overlay when a gamepad or keyboard is the active input** and bring it back on the next touch. |
| One control, several gestures (tap, double tap, hold) | One button element with a **hold timer** on `pointerdown` (**hold time = CONV**, ~300–500 ms) and a **progress ring** showing the charge; `pointerup` before the timer = tap. |
| Left = movement (floating stick), right = camera (direct pan) | Two full-half **input zones**; on `pointerdown` in the left zone set the **stick origin to the touch point**; in the right zone **pan by pointer delta**. Use **`setPointerCapture`**, key state by **`pointerId`** (two thumbs at once), **`touch-action: none`**, `overscroll-behavior: none`, `user-select: none`, `-webkit-touch-callout: none` and prevent `contextmenu` so long-press doesn't open the browser menu. |
| Labels follow the connected controller | Detect the family from **`gamepad.id`** (Xbox / PlayStation / Switch-style) and swap the **glyph set** (button **names by position, glyphs by device**: standard mapping index 0 = bottom face button, 1 = right, 2 = left, 3 = top). |
| Multiple controllers: glyphs of the one in use | Track **the last gamepad that produced input** and render its glyphs; per-player glyphs in local multiplayer; list several sets together only when a prompt applies to all. |
| Button → UI table (A activate, B cancel, shoulders switch tab, sticks/D-pad move, Menu pause, Home reserved) | Standard-mapping indices: **0 = A** (activate), **1 = B** (back/cancel), **4 / 5 = shoulders** (previous/next tab), **12–15 = D-pad**, **axes 0–1 / 2–3 = sticks** (apply a **dead zone**, value **CONV** ~0.15–0.25), **9 = Menu/Start** (open settings/pause). **Don't bind index 16 (Home)**: the OS or browser owns it. Drive the **same focus system** as keyboard navigation (`focus-and-selection.md`), not a separate cursor. |
| Prefer symbols to text for controller elements | Render **glyph + accessible name** (`aria-label="A button"`), so screen readers and people who can't read the glyph still get text. |
| Single-key commands, Space = main action | Bind **`KeyboardEvent.code`** (`KeyI`, `KeyM`, `Space`) so bindings follow **physical position** on AZERTY/Dvorak; show the **label** with `navigator.keyboard.getLayoutMap()` where available (Chromium). Ignore `e.repeat` for toggles. |
| Test on an Apple keyboard; ⌘ vs ⌃ | Treat **`metaKey` on Mac and `ctrlKey` elsewhere** as one "primary modifier"; keep game bindings away from **browser-reserved combos** (Ctrl/⌘ + W, T, N, Q); in fullscreen the Keyboard Lock API (Chromium) can capture more. |
| Key proximity | Group related actions **around WASD** (Shift, E, Q, R, F, 1–5) and keep the layout **left-hand reachable while the right hand holds the mouse**. |
| Let players customise bindings | A **rebinding screen**: click a row → press a key/button → **conflict warning** → **Reset to defaults**; **persist** per player; the same screen covers **gamepad** buttons. This also satisfies **WCAG 2.1.4** (single-character shortcuts must be remappable or switchable). |
| visionOS spatial controllers | **WebXR**: handle `select` / `selectstart` / `selectend` on each `XRInputSource`; **look + pinch/trigger** arrives as a **transient-pointer** source and **reaching** as a tracked pointer or hand (**verify on a device**); keep **one code path** for indirect and direct. |
| Native-only | **Touch Controller** (virtual controls), **Game Controller** framework (`GCController`, `GCControllerElement`), `GCRequiresControllerUserInteraction` and the **Game Controller Required** badge are iOS/tvOS/visionOS APIs; on the web use Pointer Events + Gamepad API + WebXR. |

Field-note cross-links:
- `hig/getting-started/designing-for-games.md` (✓): the platform input matrix and "support controllers but offer alternatives"; this page holds the **details**; its "Game controls" references are now ingested. `hig/patterns/playing-haptics.md` (✓): press-state feedback and controller haptics; `hig/components/menus/buttons.md` (✓ CRITICAL): the **≥ 44 pt hit region and press-state** rules the virtual buttons follow; `hig/inputs/focus-and-selection.md` (✓): moving selection with sticks / D-pad and the tvOS focus states; `hig/inputs/eyes.md` (✓) and `hig/inputs/apple-pencil-and-scribble.md` (✓): sibling input pages; `hig/foundations/layout.md` (✓ CRITICAL): safe areas; `hig/foundations/sf-symbols.md` (✓): the symbol side of controller glyphs (web icons stay Lucide / Phosphor / Ionicons); `hig/foundations/accessibility.md` (✓): switch/hardware alternatives.
- `field-notes/*`: no game-input recipe. **Tension with the web hit-region convention** (the ≥ 44 px FAIL line at touch widths in `buttons.md`): Apple lets **menus and other secondary controls drop to 28 pt** in games; on ordinary web pages keep **44 px**, and use 28 px only for **secondary controls inside a game HUD**, never below **24 px**. No conflict with `anti-patterns.md`.
- Ingested since: Gestures (✓ `inputs/gestures.md`: visionOS indirect/direct, simultaneous recognition for joysticks and buttons). Not yet ingested (linked from this page): **Keyboards**.

## Checklist
- [ ] **Touch/pointer and keyboard paths exist for every action**; a gamepad is an **extra**, and a required controller is **announced up front** with a connect prompt.
- [ ] Virtual controls exist **only where needed**; **direct manipulation** replaces overlay buttons where possible.
- [ ] HUD controls sit under the **thumbs**, inside **safe-area insets**, **≥ 44 px** (secondary ≥ 28, never < 24), menus at the **top**.
- [ ] Every control has a **visible press state that survives the finger covering it**, plus sound/haptics where available.
- [ ] Buttons show **action symbols**, **not A/X/R1 or △ □ ✕**; controller glyphs appear **only for an active controller** and follow **its family**.
- [ ] Movement = **floating stick on the left**, camera = **direct pan on the right**, both **multi-touch-safe** (`pointerId`, `touch-action: none`).
- [ ] Controls **fade or hide** with context; overlays **disappear when gamepad/keyboard is active** and return on touch.
- [ ] Multi-button moves are **folded into one control** (tap / double tap / hold with a visible charge).
- [ ] The gamepad **UI mapping** follows the table (A activate, B back, shoulders switch section, sticks/D-pad move, Menu pause, Home untouched) and shares the **focus system**.
- [ ] Multiple pads: **glyphs of the last-used pad**; disconnect **pauses** the game.
- [ ] Keyboard: **`code`-based single-key bindings**, no browser-reserved combos, **rebinding screen with reset**, tested on an Apple keyboard.
- [ ] visionOS: **look + trigger** and **reach + trigger** share one interaction path.

## Related
- Ingested: Designing for games (✓), Playing haptics (✓), Focus and selection (✓), Eyes (✓), Apple Pencil and Scribble (✓), Gestures (✓), Buttons (✓ CRITICAL), Layout (✓ CRITICAL), SF Symbols (✓), Accessibility (✓), Menus (✓).
- Not yet ingested (linked from this page): **Keyboards**.
- Developer docs: Create games for Apple platforms · Touch Controller · Game Controller (plus `GCControllerElement`, `GCRequiresControllerUserInteraction`, "Adding virtual controls to games that support game controllers in iOS").
- Videos: Make your game great with touch (WWDC26 358), Design advanced games for Apple platforms (WWDC24 10085), Explore game input in visionOS (WWDC24 10094).
