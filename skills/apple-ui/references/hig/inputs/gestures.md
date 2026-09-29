# Gestures
Source: https://developer.apple.com/design/human-interface-guidelines/gestures · Section: Inputs · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (the page has platform sections for **iOS/iPadOS, macOS, tvOS, visionOS and watchOS**, and the *Standard gestures* table lists all six; the platform strip shows six device icons, but the screenshots do not show whether any icon is dimmed **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **September 9, 2024** (added visionOS system-overlay guidance and reorganised the page; earlier rows: September 15, 2023, double tap added to the watchOS specifications; June 21, 2023, renamed from "Touchscreen gestures" and extended with visionOS guidance). One DocC fetch, read in full. **13 screenshots (hero → the Change log table header)** were compared with the fetched text, image alt text and captions line by line; they cover **the whole page except the Change log rows (fetch-only)**. The browser was in **dark appearance**; the content is identical. **Read from the fetch only (not in screenshots):** every image and video alt text, the three Change log rows, the developer-documentation and video link targets (the screenshots show the link labels), the tail word "context." of one visionOS table cell, and the light variants of the illustrations. Text that exists only inside pictures or page chrome is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. Numbers on the page: **watchOS 11**, **visionOS 2**, **Apple Watch Series 9 and Ultra 2**, **three- and four-finger** gestures, **seven** standard gestures, **seven** visionOS direct gestures.

## In one line
A **gesture** is a physical motion that **directly acts on an object** on a touchscreen, in the air, or on a trackpad, mouse, remote or game-controller touch surface. **Tap, swipe and drag work on every platform, so people expect them to behave the same everywhere.** Therefore: **never depend on one gesture (offer voice, keyboard, Switch Control and other routes too), behave the way people expect (don't give tap or swipe an app-only meaning, and don't invent a gesture for a standard action), respond immediately and show how far and what kind of movement is needed, and show when a gesture is unavailable**. Add **custom gestures only for specialised, frequent tasks**, and make them **discoverable, easy, distinct and never the only route**; use **shortcut gestures on top of standard controls (a swipe from the edge *and* a Back button)**; **stay clear of system gestures** (watchOS edge swipe, visionOS palm-roll overlays). On **visionOS**, gestures are **indirect (look, then pinch from a distance) or direct (touch)**; **prefer indirect for UI, support standard gestures everywhere, never require a specific body position or hand, keep the area around the hand free, and defer the Home overlay only in immersive games**. On **watchOS 11+** the **double-tap hand gesture** runs a **primary action** in views that don't scroll. Web mapping: **Pointer Events, `touch-action`, native scrolling and history, button alternatives (WCAG 2.5.1 / 2.5.7), WebXR `select` events**.

## Rules

### Framing (intro)
- People make gestures **on a touchscreen, in the air (visionOS), or on input devices with a touch surface** such as a **trackpad, mouse, remote or game controller**.
- **Every platform supports the basic gestures tap, swipe and drag.** The exact movement differs per platform and device, but people **know what these gestures do and expect them everywhere** (the standard list is under *Specifications*).

### Best practices
- **should** **Give people more than one way to interact.** People often prefer or need **voice, a keyboard or Switch Control**. **Don't assume a specific gesture is possible** for a task (→ Accessibility).
- **should** **Respond to gestures consistently with expectations.** Most gestures work the same in every context; **tap activates or selects**. **Don't give a familiar gesture (tap, swipe) an action that is unique to your app**, and **don't invent a new gesture for a standard action** such as activating a button or scrolling a long view.
- **should** **Handle gestures as responsively as possible.** Good gestures strengthen direct manipulation and give **immediate feedback**. While the gesture is in progress, **let people predict the result** and, when needed, **show the extent and type of movement required** to complete it.
- **should** **Indicate when a gesture isn't available.** Without a clear reason, people think the app **froze** or that they are **performing the gesture wrongly**. Examples: dragging a **locked object** with no sign that its position is locked; tapping an **unavailable button** whose state doesn't look different from the available one.

### Custom gestures
- **should** **Add custom gestures only when necessary**: for **specialised, frequent tasks that existing gestures don't cover**, such as **a game or a drawing app**. A custom gesture must be:
  - **Discoverable**
  - **Straightforward to perform**
  - **Distinct from other gestures**
  - **Not the only way to do an important action** in the app or game
- **should** **Make custom gestures easy to learn.** Offer **moments that teach and let people practise** them, and **test in real use scenarios**. **If you struggle to describe the gesture with simple words and graphics, it will be hard to learn and perform.**
- **should** **Use shortcut gestures to supplement standard gestures, not replace them.** A shortcut can speed up access, but people also need **simple, familiar routes, even at the cost of an extra tap or two**. Example: in a view hierarchy people expect a **Back button in the top toolbar (one tap)**; many apps add a **swipe from the side of the window or screen** as a shortcut **while keeping the Back button**.
- **should** **Avoid conflicting with gestures that reach system UI.** Platforms have gestures for system behaviour: **edge swiping on watchOS**, **rolling the hand over to reveal system overlays on visionOS**. Don't define custom gestures that could collide with them, because people expect these to be consistent. **In specific cases in games or immersive experiences, developers can work around this by deferring the system gesture** (see the platform sections for iOS, iPadOS, watchOS, visionOS).

### Platform considerations

#### iOS, iPadOS
- Beyond the standard gestures, iOS and iPadOS support a few more that people expect (table under Specs): **three-finger swipe** (undo/redo), **three-finger pinch** (copy/paste text), **four-finger swipe (iPadOS only)** (switch apps), **shake** (undo/redo).
- **should** **Consider simultaneous recognition of multiple gestures if it improves the experience.** It is **unlikely to help in non-game apps**; a **game** may have several on-screen controls (a **joystick and fire buttons**) used **at the same time**. For touch input combined with Apple Pencil in an iPadOS app → Apple Pencil and Scribble.

#### macOS
- People mainly use a **keyboard and mouse** (→ Keyboards ✓ `inputs/keyboards.md`). They can also make **standard gestures on a Magic Trackpad, Magic Mouse or a game controller with a touch surface**.

#### tvOS
- People expect **standard gestures** to navigate tvOS apps and games with a **compatible remote, the Siri Remote, or a game controller with a touch surface** (→ Remotes).

#### visionOS
- visionOS has **two categories: indirect and direct**.
- **Indirect:** **look at an object to target it, then manipulate it from a distance with the hands**. Example: **look at a button to focus it, then tap finger and thumb together to select**. Indirect gestures are **comfortable at any distance** and let people **switch focus between objects quickly and select with minimal movement**. (A recording shows a button highlighted by gaze and activated by the pinch, with a small inset of the hand.)
- **Direct:** **physically touch an interactive object**. Example: **typing on the visionOS keyboard by tapping the virtual keys**. Direct gestures work best **when the object is within reach**; because **holding arms up is tiring**, direct gestures suit **infrequent use**. visionOS also supports **direct versions of all standard gestures**, so people can choose direct or indirect for **any standard component**. (A recording shows a hand pushing the middle block of a stack of three virtual blocks; it falls and the block above tumbles.)
- The **standard direct gestures** are in the table under Specs; the standard **indirect** gestures are in *Specifications › Standard gestures*.
- **should** **Support standard gestures everywhere you can.** As soon as someone **looks at an object, tap is the first gesture they try** to select or activate it. Even if you add custom gestures, **standard ones such as tap make people comfortable quickly**.
- **should** **Offer both indirect and direct interactions when possible.** **Prefer indirect gestures for UI and common components like buttons.** **Reserve direct and custom gestures for objects that invite close-up interaction or specific motions** in a game or interactive experience.
- **should** **Avoid requiring specific body movements or positions.** Not everyone can move or position themselves in certain ways all the time (**disability, limited space, other environmental factors**). If an experience needs movement, **offer alternative inputs** so people can pick what suits them.

##### Designing custom gestures in visionOS
- To offer an interaction that **no system gesture provides**, you can design a custom gesture. It requires the app to run in a **Full Space** and to **ask people's permission to access information about their hands** (developer: "Setting up access to ARKit data"). (Illustrated by a game where two hands make a **heart** shape.)
- **should** **Prioritise comfort.** **Keep testing the ergonomics** of every interaction that needs a custom gesture. **Holding the arms up even briefly is tiring**, and **repeating very similar movements many times in a row can strain muscles and joints**.
- **should** **Think carefully about complex custom gestures with several fingers or both hands.** People **may not have both hands free**; if you need something complex, **also offer an alternative with less movement**.
- **should** **Avoid custom gestures that need a specific hand.** Remembering which hand triggers what **adds cognitive load** and is **less welcoming to people with strong hand dominance or limb differences**.

##### Working with system overlays in visionOS
- In **visionOS 2 and later**, people **look at the palm of one hand and use gestures** to reach the **Home** and **Control Center** system overlays. These interactions are **systemwide and reserved solely for reaching system overlays**.
- **Note (callout):** the system overlay is the **default** way to reach Control Center in visionOS 2+. The **visionOS 1 behaviour (looking upward)** stays available as an **accessibility setting**.
- When designing apps and games with **custom gestures or content anchored to the hands**, take these overlays into account.
- **should** **Reserve the area around a person's hand for system overlays and their gestures.** If possible, **don't anchor content to hands or wrists**. A game with **hand-anchored content** should place it **outside the immediate hand area** to avoid colliding with the **Home indicator**. (Illustrations: **the reserved area** as a dashed circle around an open palm-up hand; **looking at the palm** reveals the Home indicator above it; **turning the hand** reveals the status bar, and a tap opens Control Center.)
- **should** **Consider deferring the system overlay behaviour in an immersive app or game.** Sometimes the Home indicator shouldn't appear when someone looks at their palm; e.g. a game with **virtual hands or gloves** may want to **keep people inside the story** however they look at their hands. In a **Full Space** you can **require a tap to reveal the Home indicator instead** (developer: `persistentSystemOverlays(_:)`). (Three photos: **default in the Shared Space** (room), **default in a Full Space** (forest), **deferred in a Full Space** (space-suit glove in a starry sky, no button above the palm).)
- **Note (callout):** apps built for **visionOS 1 defer the system overlay behaviour by default**; in a Full Space the Home indicator **won't appear unless the person taps first**.
- **should** **Use caution with custom gestures that roll the hand, wrist and forearm.** That motion is **reserved for revealing system overlays**. Overlays **always draw on top of app content and the app doesn't know when they are visible**, so **test any custom gesture or content that could conflict**.

#### watchOS

##### Double tap
- In **watchOS 11 and later**, people use **double tap** to **scroll through lists and scroll views** and to **advance between vertical tab views**.
- You can also set a **toggle or button as the primary action** in **your app**, or in **your widget or Live Activity when the system shows it in the Smart Stack**. **Double-tapping a view with a primary action highlights the control, then performs the action.**
- The system also supports double tap for **custom actions offered in notifications**, where it **acts on the first non-destructive action** (→ Notifications).
- **should** **Avoid setting a primary action in views with lists, scroll views or vertical tabs**: it **conflicts with the default navigation behaviour** people expect from a double tap.
- **should** **Choose the button people use most as the view's primary action.** Double tap helps **in a non-scrolling view when it does the most-used action**. Example: in a **media controls** view, make **play/pause** the primary action. (Developer: `handGestureShortcut(_:isEnabled:)`, `primaryAction`.)

## Specs & values
**Standard gestures** (*Specifications*; the system provides APIs for them on a touchscreen, an indirect gesture in visionOS, or a trackpad, mouse, remote or game controller)
| Gesture | Supported in | Common action |
|---|---|---|
| Tap | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Activate a control; select an item |
| Swipe | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Reveal actions and controls; dismiss views; scroll |
| Drag | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Move a UI element |
| Touch (or pinch) and hold | iOS, iPadOS, tvOS, visionOS, watchOS (**not macOS**) | Reveal additional controls or functionality |
| Double tap | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Zoom in; zoom out if already zoomed in; perform a primary action on **Apple Watch Series 9 and Apple Watch Ultra 2** |
| Zoom | iOS, iPadOS, macOS, tvOS, visionOS (**not watchOS**) | Zoom a view; magnify content |
| Rotate | iOS, iPadOS, macOS, tvOS, visionOS (**not watchOS**) | Rotate a selected item |

**Extra gestures on iOS and iPadOS**
| Gesture | Common action |
|---|---|
| Three-finger swipe | Undo (left swipe); redo (right swipe) |
| Three-finger pinch | Copy selected text (pinch in); paste copied text (pinch out) |
| Four-finger swipe (**iPadOS only**) | Switch between apps |
| Shake | Undo; redo |

**Standard direct gestures on visionOS**
| Direct gesture | Common use |
|---|---|
| Touch | Directly select or activate an object |
| Touch and hold | Open a contextual menu |
| Touch and drag | Move an object to a new location |
| Double touch | Preview an object or file; select a word in an editing context |
| Swipe | Reveal actions and controls; dismiss views; scroll |
| With two hands, pinch and drag together or apart | Zoom in or out |
| With two hands, pinch and drag in a circular motion | Rotate an object |

| Item | Value |
|---|---|
| Custom gesture must be | discoverable · straightforward · distinct · not the only route |
| Shortcut rule | swipe-from-edge **plus** the Back button (never instead of it) |
| visionOS categories | **indirect** (look + finger-thumb tap, any distance) · **direct** (touch, within reach, infrequent) |
| visionOS custom gestures need | **Full Space** + **permission to access hand data** (ARKit) |
| visionOS system overlays | **visionOS 2+**: look at the palm → Home; turn the hand → status bar, tap → Control Center; visionOS 1 "look upward" = accessibility setting |
| Deferring the overlay | Full Space only; a tap reveals the Home indicator (`persistentSystemOverlays(_:)`); apps built for visionOS 1 defer by default |
| watchOS double tap | **watchOS 11+**; scroll lists/scroll views, advance vertical tab views, run a **primary action** (toggle/button; app, widget or Live Activity in the Smart Stack), first **non-destructive** notification action |
| Primary action APIs | `handGestureShortcut(_:isEnabled:)`, `primaryAction` |
| Developer docs | SwiftUI **Gestures**, UIKit **UITouch**, Setting up access to ARKit data, `persistentSystemOverlays(_:)` |
| Videos (links only, not watched) | Enhance your UI animations and transitions (WWDC24 10145) · Design for spatial input (WWDC23 10073) |
| Apple's Related list | Feedback (✓), Eyes (✓), Playing haptics (✓) |
| Other links in the text | Accessibility (✓), Apple Pencil and Scribble (✓), Game controls (✓), Notifications (✓), Keyboards (✓), Remotes, Pointing devices (✓) |
| Change log | Sep 9 2024: visionOS system overlays + reorganisation · Sep 15 2023: double tap in the watchOS specifications · Jun 21 2023: renamed from "Touchscreen gestures", visionOS guidance |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a **purple-magenta gradient card** (tinted purple on purpose, per the alt) with a **pale-lilac hand with the index finger pointing up and the other fingers curled**, and a **thin arc to the hand's left**, over **construction lines** (rectangular grid, diagonals, nested circles). The alt says the hand swipes "in a curved motion toward the right"; the arc is drawn on the **left** of the hand.
- **Indirect video (screenshot 5):** the poster frame is a close-up of the **top of a window** with **three round translucent buttons (share, heart, ellipsis)**; a **picture-in-picture inset at the lower right shows two hands resting on a person's lap**. The visible label **"Play"** under the video is **(from screenshot)**.
- **Direct video (screenshot 6):** the poster frame is a **living room** (floor lamp, brown sofa, blue armchairs, a landscape picture) with a **stack of three red blocks on a light wood floor**; the hand movement in the alt is not in the poster. Label **"Play"** **(from screenshot)**.
- **Happy Beam (screenshots 7–8):** a person's **two hands joined into a heart** in front of a **grey sofa**; a floating **score panel reading "14 Score"** with a back chevron, a speaker control and a pause control, and a **pink glowing beam** shooting upward **(from screenshot: the HUD text and controls; the alt only describes the heart gesture)**.
- **Overlay illustrations (screenshot 9):** three **black-line hand drawings on white** in light mode, **white on black** in the dark screenshot: **(1)** an open palm-up hand inside a **blue dashed circle**; **(2)** the same hand with a **small grey circle** above it; **(3)** a hand turned edge-on with a **grey pill above it showing "11:20", a small tag, a Wi-Fi glyph and a volume ring** **(from screenshot: the time and glyphs; the alt says only "status bar")**. Captions sit under each and match the fetch.
- **Overlay photos (screenshot 10):** **three square photos** with captions: a **palm-up hand in a dim wood-panelled room** with a **small grey ring** above it, the **same hand in a forest** with the ring, and a **space-suit glove against a starry sky with no ring**.
- **Tables (screenshots 4, 6–7, 11–12):** the fetch's tables match the screenshots. The three-column *Standard gestures* table shows **words hyphenated by the layout** ("vi-sionOS", "dis-miss", "func-tionality", "ac-tion"), which is **page typesetting, not text**.
- **Callouts:** two **Note** boxes (screenshots 9 and 10) as dark rounded boxes with a "Note" title.
- **Videos (screenshot 13):** two cards: an **iPad showing a curved dotted line of lettered circles with a row of purple lettered circles beneath** (Enhance your UI animations and transitions) and a **white circle with a heart beside a hand doing a finger-thumb pinch on grey** (Design for spatial input) **(from screenshot)**. Screenshots end at the **Change log table header**; the three rows are fetch-only.
- **Page chrome (from screenshot):** TOC = Gestures · Best practices · Custom gestures · Platform considerations · Specifications · Resources · Change log (the *Standard gestures*, *Double tap* and visionOS sub-headings are not listed); side navigation: **Inputs** open with **Gestures** ringed (browser focus) between **Game controls** and **Gyroscope and accelerometer**, then Keyboards, Nearby interactions, Pointing devices, Remotes; **Technologies** (AirPlay, Always On, App Clips…) below.
- **Mismatches / notes:**
  1. **Best practices says to see the platform considerations for iOS, iPadOS, watchOS and visionOS** for system gestures, but **the iOS/iPadOS section has no system-gesture advice** (it lists extra gestures and simultaneous recognition only). The link goes nowhere useful for those two.
  2. **"Double tap" names two different gestures**: the screen double tap (zoom, in the standard table) and the **watchOS hand double tap** (Apple Watch Series 9 / Ultra 2, watchOS 11+). The standard table names **hardware** (Series 9, Ultra 2); the watchOS section names **software** (watchOS 11 and later). The page never describes the hand motion (background knowledge, not on the page: two quick finger-thumb taps).
  3. The **direct-video alt describes the whole motion**, but the **poster frame is only the standing stack**.
  4. The **hero alt says the swipe curves to the right**; the drawn arc is on the left side of the hand.
  5. The **Happy Beam alt omits the score panel** that the picture shows.
  6. The **third overlay drawing's alt says the hand's palm faces downward**; in the drawing it is turned nearly edge-on.
  7. The visionOS sub-headings *Designing custom gestures in visionOS* and *Working with system overlays in visionOS* are level-5 headings in the data and **not in the TOC**.
  8. The screenshots were taken in **dark appearance**; the catalog's light images are black-on-white line art and photos.
- **Catalog:** the script found **2 comparisons** (both three-image column groups). **Not catalogued:** the hero, the Happy Beam image (single), the two videos. The two groups carry no ✗/✓; both are kind "compare (neutral)". Catalog total **219** (was 217); the 217 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains two neutral groups (rule **"Reserve the area around a person's hand for system overlays and their related gestures"** and rule **"Consider deferring the system overlay behavior when designing an immersive app or game"**):
- **gestures-01** (three line drawings; light and dark): **reserved area** (dashed blue circle around an open palm-up hand) · **palm look reveals the Home indicator** (small grey circle above the hand) · **turned hand reveals the status bar** (pill with 11:20, Wi-Fi and a volume ring above an edge-on hand).
- **gestures-02** (three photos; light variants only): **default in the Shared Space** (room + ring) · **default in a Full Space** (forest + ring) · **deferred in a Full Space** (space-suit glove, no ring).
The script reports **2 comparisons** for this page.

## Web translation
The web already has **Pointer Events, native scrolling, history navigation and the accessibility tree**, which cover Apple's standard gestures. This page's rules mean: **use the native gesture, add custom ones sparingly, always keep a button/keyboard route, give live feedback, and never fight the browser's or OS's own gestures**. Numbers below marked **CONV** are conventions, not Apple values.

| HIG rule | Web implementation |
|---|---|
| More than one way to interact | Every swipe, drag, pinch, long-press and path gesture has a **visible control or keyboard equivalent** (buttons, menus, arrow keys, `+`/`−`): **WCAG 2.5.1 Pointer Gestures** (multipoint/path gestures need a single-pointer alternative) and **2.5.7 Dragging Movements**; also **2.1.1 Keyboard**. Voice control and Switch Control drive the same **`<button>`/`role` elements**, so a gesture-only feature is invisible to them. |
| Tap = activate/select; keep gestures consistent | Model **tap as `click`** on a real `<button>`/`<a>` (fires for touch, mouse, keyboard, switch); don't reuse **swipe/tap for app-only actions** or override **scroll** with a custom gesture (**no scroll-jacking**, see `scroll-views.md`); don't invent a gesture for something a button already does. |
| Respond immediately; show extent and type of movement | Track the finger with **Pointer Events** (`pointerdown` / `pointermove` / `pointerup` / `pointercancel`) and **move the element in `requestAnimationFrame`** via `transform`, so it **follows the finger 1:1**; show **progress** (row slides to reveal actions, sheet follows the drag, a threshold marker or icon that flips when passing the commit point); animate the settle with a spring-like ease (`motion.md`). Apply the **pressed state on `pointerdown`**, not `:active` alone (iOS delay). Thresholds are **CONV**: ~**10 px** movement slop before a tap becomes a drag, commit a swipe past ~**35–40 %** of the width **or** a quick flick, and let people **cancel by returning** to the start. |
| Say when a gesture isn't available | **Unavailable controls look different** (dimmed, `aria-disabled="true"`, plus a reason in a tooltip/helper text, see `menus.md` for the dimmed-but-focusable decision); for a **locked/read-only drag** show a **lock icon or a short shake + message** instead of doing nothing; never let a drag start and silently snap back. |
| Custom gestures only when necessary | Custom = **games, drawing/canvas, maps, sliders, timelines**. For everything else use **native controls**. Declare what the browser may still do with **`touch-action`**: **`pan-y`** on a horizontal swipe row (vertical scroll stays native), **`pinch-zoom`** where zoom must remain, **`none`** only on a canvas/game surface. **Always ship an alternative** (buttons, menu, keyboard). |
| Discoverable, distinct, easy to learn | Reveal with **affordances** (grabber handle on sheets, partly visible neighbour cards, edge peek of swipe actions), **one-time coach mark or hint** that can be dismissed and re-found in Help, and an **animated demo** for hard gestures (respect `prefers-reduced-motion`). If it can't be explained in one short sentence plus a graphic, simplify it. **User-test on real devices.** |
| Shortcut gestures supplement, not replace | **Swipe-to-dismiss a sheet + a Close button**; **swipe row actions + a "⋯" menu or row-detail buttons**; **swipe between tabs + visible tabs**; **long-press + a visible menu button** (and a **`contextmenu` key/`Shift+F10`** route). Keep the **Back/Close control** even when a swipe exists. |
| Avoid conflicts with system gestures | **The web cannot defer system gestures** (there is no equivalent of deferring the edge swipe or the Home overlay): the browser/OS owns **left-edge swipe back, pull-to-refresh, the home indicator swipe and the Control Center pull**. **Don't start custom swipes at the screen edges** (keep ~**20–24 px** inside the edge, **CONV**, and inside **`env(safe-area-inset-*)`**), **use real routes/`pushState`** so Back works (`designing-for-ios.md`, swipe-back), and use **`overscroll-behavior: contain`** to stop **scroll chaining**, **not** to disable back or refresh gestures except deliberately inside a game/canvas (`overscroll-behavior: none`). Fullscreen games: **Fullscreen API** (+ Keyboard Lock on Chromium for keyboard shortcuts). |
| iOS/iPadOS: three-finger swipe, three-finger pinch, four-finger swipe, shake | **System-owned**: the web **does not receive them** (the OS handles the multi-finger gestures; **verify on a device**) and **must not imitate them** with other meanings; **shake needs `DeviceMotionEvent.requestPermission()` on iOS** and is **not reliable** → **Undo/Redo via ⌘/Ctrl+Z, ⇧⌘Z / Ctrl+Y and visible buttons** (`undo-and-redo.md`: don't redefine these gestures). |
| Simultaneous recognition (games only) | Use **`pointerId`-keyed state** so two thumbs can drive stick + buttons at once (`touch-action: none`, `setPointerCapture`); details in `game-controls.md`. In **non-game UI keep one gesture at a time** (a pan that becomes a pinch when the second pointer lands is the only normal exception). |
| macOS: keyboard + mouse first; trackpad/Magic Mouse gestures | Design **mouse + keyboard** first. Trackpad **two-finger scroll** and **pinch** arrive as **`wheel`** events (a pinch has **`ctrlKey: true`** with `deltaY`); Safari also has non-standard **`gesturestart/gesturechange/gestureend`** (background, not on the page). Support **`+`/`−`/`0` shortcuts and buttons** for zoom, not only pinch. |
| tvOS: standard gestures with remote / touch-surface controller | On TV/10-foot web UIs **swipes become arrow-key or D-pad focus moves** (see `focus-and-selection.md`); the **Gamepad API doesn't expose a controller's touch surface**. Keep **click/Enter = tap** and **Back/Esc = back**. |
| visionOS: indirect (look + pinch) vs direct (touch) | **Safari on visionOS is expected to deliver look+pinch as ordinary pointer/click events** (**verify on a device**) and, as with native apps, **doesn't expose where the person looks** before the tap (`privacy.md`); so **build normal pointer UI** with a **`:hover`** state that is separate from **`:focus-visible`** (`eyes.md`, `focus-and-selection.md`) and **targets ≥ 44 CSS px** with generous gaps (`spatial-layout.md`). In **WebXR** handle **`selectstart` / `select` / `selectend`** on each **`XRInputSource`**: **indirect** arrives as a **transient-pointer** source, **direct/hand** as **tracked-pointer or hand** with the optional **`hand-tracking`** feature (**verify on a device**). One code path for both. |
| visionOS: support standard gestures; prefer indirect for UI | **Buttons, links, sliders stay standard elements** (they get both indirect and direct for free); **reserve direct manipulation** for objects that invite it (a 3D model, a game piece). |
| visionOS: never require a body position or one hand | **Every immersive action has a non-gesture route** (a controller/keyboard/click, a menu button), **no required raised arms, both hands or a dominant hand**; keep **repeated same-motion tasks** short. |
| visionOS custom gestures need permission | Hand tracking asks **permission** (browser prompt/`XRSession` feature request); show a **pre-permission explanation** (`privacy.md`) and **work without hands** if declined. |
| visionOS overlays: don't anchor to hands/wrists; defer only when immersive | **Don't attach UI to the wrist/palm joints** (WebXR hand joints) and keep hand-anchored content **away from the palm's top**; the **Home/Control Center overlay is the system's**, page code can't hide or detect it (`immersive-experiences.md`). Test hand gestures against the **rolling motion**. |
| watchOS double tap → primary action | **No web equivalent** (watch hand gestures aren't exposed). The **design idea transfers**: **one clear primary action per non-scrolling view** (the default button, reachable with **Enter**), **none in lists/scrollers/tab stacks** where **Enter/Space** already have navigation roles. In notifications, **order actions so the first non-destructive one is the most used** (`notifications.md`). |
| Standard gestures → events | **Tap** → `click`. **Swipe/drag** → Pointer Events (or native scroll; HTML drag and drop for files/items, see `drag-and-drop.md`). **Touch-and-hold** → a **pointer-down timer (~500 ms, CONV)** with cancel on movement; `contextmenu` on long-press is **not reliable across mobile browsers** (**verify on a device**), so **also expose a keyboard/`contextmenu` route**; suppress the native callout (`-webkit-touch-callout: none`, `user-select: none`) only on a custom-gesture surface, never on reading text. **Double tap** → `dblclick` for pointers; browsers also use it to **zoom**, so use **`touch-action: manipulation`** on **controls only** (removes the double-tap zoom delay), **never on reading content** (never disable user zoom, `scroll-views.md`). **Zoom/rotate** → two-pointer distance and angle, with **+/− and rotate buttons** as alternatives. |
| Native-only | **SwiftUI/UIKit gesture recognisers** (`UITouch`), **ARKit hand data**, **`persistentSystemOverlays(_:)`**, **`handGestureShortcut`** are native APIs; on the web use **Pointer Events**, **`touch-action`**, **WebXR input sources**. |

Field-note cross-links:
- `field-notes/*`: **no gesture recipe**. `components.md` (list `overscroll-contain`) is **consistent** with the "don't let scrolling leak" advice; `principles.md` / `anti-patterns.md`: **no conflict**. **Tension with web reality:** Apple lets an app **defer system gestures** in games and immersive spaces; **the web can't**, so design around the edges instead.
- `hig/foundations/accessibility.md` (✓): **simple gestures + alternatives** row (WCAG 2.5.1 / 2.5.7) is **confirmed** here; `hig/patterns/feedback.md` (✓) and `hig/patterns/playing-haptics.md` (✓): the **immediate feedback** and **haptics** side of responsiveness (`navigator.vibrate` Android only, never rely on haptics alone).
- `hig/patterns/undo-and-redo.md` (✓): **three-finger swipe and shake** are the system undo/redo gestures, **don't redefine**; `hig/components/system-experiences/notifications.md` (✓) and `widgets.md` / `live-activities.md` (✓): **double tap** on watchOS runs the **first non-destructive action / primary action**; `hig/components/presentation/scroll-views.md` (✓): **native scrolling, no scroll-jacking, zoom bounds**; `hig/components/menus/edit-menus.md` (✓): **pinch and hold / touch and hold** reveals commands (three-finger pinch = copy/paste); `hig/patterns/drag-and-drop.md` (✓): **drag** as a gesture; `hig/components/navigation/sidebars.md` (✓): **iPadOS edge swipe**.
- `hig/inputs/eyes.md` (✓) and `hig/inputs/focus-and-selection.md` (✓): **look then pinch = indirect gesture**, **hover ≠ focus**; `hig/inputs/game-controls.md` (✓): **simultaneous touches** for joystick + buttons and **spatial controllers** acting like hands; `hig/inputs/apple-pencil-and-scribble.md` (✓): **touch + Pencil** together; `hig/foundations/spatial-layout.md` (✓), `immersive-experiences.md` (✓), `privacy.md` (✓): **direct gestures tire arms**, **Full Space**, **hand-data permission**; `hig/patterns/going-full-screen.md` (✓): **deferring edge gestures** for games on iPadOS.
- Not yet ingested (linked from this page): **Remotes**. Ingested since: Keyboards (✓ `inputs/keyboards.md`), Pointing devices (✓ `inputs/pointing-devices.md`).

## Checklist
- [ ] **Every gesture-driven action has a visible control or keyboard route** (buttons, menu, arrow keys, `+`/`−`); nothing needs a swipe, pinch, drag or long-press alone (WCAG 2.5.1, 2.5.7).
- [ ] **Tap is a real `click`** on a native control; **scroll stays native**; no app-only meaning for tap or swipe and no new gesture for a standard action.
- [ ] The element **follows the finger live** (Pointer Events, `transform`), shows **how far to go** and lets people **cancel by returning**; pressed state on `pointerdown`.
- [ ] **Unavailable or locked** states are **visibly different and explained**; a drag never silently fails.
- [ ] Custom gestures exist **only for specialised, frequent tasks**, are **discoverable** (affordance or hint), **simple to describe**, **distinct**, and **never the only way**; `touch-action` declares what the browser keeps.
- [ ] A **shortcut swipe never replaces** the Back/Close/menu button.
- [ ] **No custom swipes from the screen edges**; the browser's Back, refresh and home gestures still work; `pushState` routes exist; `overscroll-behavior` is used to **contain**, not to trap.
- [ ] The **system undo/redo gestures** (three-finger swipe, shake) are not imitated; Undo/Redo has **⌘/Ctrl+Z** and buttons.
- [ ] Multi-touch (joystick + buttons) is handled **only where a game needs it**, keyed by `pointerId`.
- [ ] Spatial (WebXR/visionOS): **standard select behaviour for UI**, **indirect preferred**, **no required body position, arm raise or specific hand**, hand-tracking **permission explained and optional**, **nothing anchored to wrists/palms**.
- [ ] Any **watchOS-style primary action** is one per non-scrolling view and absent from lists, scrollers and tab stacks.

## Related
- Ingested: Feedback (✓), Eyes (✓), Playing haptics (✓), Accessibility (✓), Apple Pencil and Scribble (✓), Game controls (✓), Notifications (✓), Focus and selection (✓), Undo and redo (✓), Scroll views (✓), Edit menus (✓), Drag and drop (✓), Spatial layout (✓), Immersive experiences (✓), Privacy (✓), Going full screen (✓).
- Not yet ingested (linked from this page): **Remotes**. Ingested since: Keyboards (✓ `inputs/keyboards.md`), Pointing devices (✓ `inputs/pointing-devices.md`).
- Developer docs: Gestures (SwiftUI) · UITouch (UIKit) · Setting up access to ARKit data · `persistentSystemOverlays(_:)` · `handGestureShortcut(_:isEnabled:)` · `primaryAction`.
- Videos: Enhance your UI animations and transitions (WWDC24 10145), Design for spatial input (WWDC23 10073).
