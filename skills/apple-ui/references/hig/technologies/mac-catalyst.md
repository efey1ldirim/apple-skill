# Mac Catalyst
Source: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst · Section: Technologies · Supported platforms: **iPadOS and macOS** (page data; the platform text: "No additional considerations for iPadOS or macOS. **Not supported in iOS, tvOS, visionOS, or watchOS**") · Ingested: 2026-09-29 · Apple last updated: **May 2, 2023** (the only Change log row: guidance consolidated into one page; same date in the page's data). **Link-only ingestion: one DocC fetch, read in full (122 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts and the catalog list. Not marked critical: no token file, checker or gate. Numbers on the page: **77 %** (iPad idiom scale), **17 pt → 13 pt** (baseline font example), **100 %** (Mac idiom rendering), **4 iPad features** worth having first, **6 automatic macOS features**, **6 UI elements that turn Mac-like**, **3 mouse and 5 trackpad gesture translations**.

## In one line
**Mac Catalyst** builds a **Mac version of an iPad app**. **Good candidates already support drag and drop, keyboard navigation and shortcuts, multitasking (Split View, Slide Over, Picture in Picture) and multiple scenes; apps that depend on gyroscope, accelerometer, rear camera, HealthKit, ARKit, or marking/handwriting/navigation as the main function may not suit the Mac.** You automatically get **pointer and keyboard focus, window management, toolbars, rich-text interaction, file management, menu bar menus and Settings integration**, and **split view, file browser, activity view, form sheet, contextual actions and colour picker look more Mac-like.** **Idiom:** **iPad idiom (default, "Scale Interface to Match iPad") scales views and text to 77 %, so 17 pt becomes 13 pt; Mac idiom renders at 100 % with more detail and better performance but needs a layout, font and asset audit (separate asset catalog, text styles, no fixed sizes, only standard appearance customisations).** **Integrate the Mac experience:** **replace a tab bar with a split-view sidebar (or a segmented control for flat hierarchies) and list top-level items in the View menu, offer Next/Previous besides swipe, translate gestures to mouse/trackpad, add a Mac icon, use multiple columns and regular size classes, an inspector instead of a popover, controls in the window toolbar (commands also in menus), a top-down flow, move edge buttons, provide menu bar commands and context menus for every object.** On the web: **adapting a phone/tablet UI to desktop windows: responsive multi-column layout, sidebar navigation, toolbars, menu/command surfaces, context menus, pointer and keyboard parity, base font size and asset scaling.**

## Rules

### Framing (intro)
- **Using Mac Catalyst to create a Mac version of an iPad app gives people the experience in a new environment.**

### Before you start
- **Good candidates:** many **iPad apps that already work well and support key iPad features**:
  - **Drag and drop:** **supporting it on iPad gives it on the Mac.**
  - **Keyboard navigation and shortcuts:** **on the Mac people expect both**; iPad users also appreciate them though a keyboard isn't always present.
  - **Multitasking:** apps that **scale well to Split View, Slide Over and Picture in Picture** are **prepared for the extensive window resizing Mac users expect.**
  - **Multiple windows:** **multiple scenes on iPad give multiple windows on the Mac.**
- **Poor candidates:** apps relying on **frameworks or features that don't exist on a Mac**: **essential features that need the gyroscope, accelerometer or rear camera; frameworks like HealthKit or ARKit; or a primary function such as marking, handwriting or navigation** may **not suit the Mac.**
- **Automatic macOS support** for: **pointer interactions and keyboard-based focus and navigation; window management; toolbars; rich text interaction (copy/paste, contextual editing menus); file management; menu bar menus; app-specific settings in the system Settings app.**
- **UI elements that become more Mac-like:** **split view, file browser, activity view, form sheet, contextual actions, colour picker.**
- See **Designing for macOS** for what distinguishes the Mac experience (developer: Mac Catalyst). **Developer note:** build the macOS target of Apple's **UIKit Catalog** sample to see how views and controls change.

### Choose an idiom
- **Default: "Scale Interface to Match iPad" (iPad idiom).** The Mac app **matches the macOS display environment without big layout changes**, but **iPadOS views and text scale to 77 %** in macOS, so **text and graphics can look slightly less detailed**: **the iPad baseline font size of 17 pt becomes 13 pt.**
- **When the app feels at home with the iPad idiom, consider the Mac idiom:** **text and artwork render in more detail, some interface elements and views look even more Mac-like, and graphics-intensive apps may perform better with lower power use.** **Best for apps with much text, detailed artwork or animation**, but it **can cost more time updating layout, text and images.**
- **must** **When adopting the Mac idiom, audit the layout thoroughly and plan changes.** **Consider a separate asset catalog for Mac assets** instead of reusing the iPad one.
- **should** **Adjust font sizes as needed.** **With the Mac idiom text renders at 100 % of its configured size and can look too large**; **prefer text styles and avoid fixed font sizes.**
- **should** **Make sure views and images look good in the Mac version.** **Mac-idiom views render at 100 %, so they appear more detailed.** (Illustrations, tabs **iPad idiom / Mac idiom**: **a zoomed map point-of-interest icon (California Academy of Sciences) rendered with less detail under the iPad idiom and more detail under the Mac idiom**.)
- **Developer note:** **with the Mac idiom, unscaled views and interface elements report different metrics, often meaning much extra work; avoid fixed font, view or layout sizes** ("Choosing a user interface idiom for your Mac app").
- **should** **Limit appearance customisations to standard macOS ones that match or resemble iPadOS's**: **not all iPadOS control customisations exist for macOS controls.**

### Integrate the Mac experience
- **must** **Go beyond showing the iPadOS layout in a macOS window**, **whatever the idiom**: **iPadOS and macOS have different patterns rooted in different usage; learn the differences before updating views and controls.**

#### Navigation
- **iPad apps typically use:** **split views** (hierarchical navigation: **two or three columns: primary, optional supplementary, secondary content pane**; often a **sidebar** whose selection drives the supplementary column and the content), **tab bars** (**flat navigation, top-level categories in a persistent bar at the bottom**), **page controls** (**dots showing the position in a flat list of pages**).
- **should** **If you use a tab bar on iPad, consider a split view with a sidebar, or a segmented control, on the Mac** (both resemble macOS navigation).
  - **Split view with sidebar:** **lists top-level items that can disclose children**; **streamlines navigation because each tab's content is in the sidebar**; **using a sidebar on both iPad and Mac gives a consistent layout** that eases iPad users into the Mac app.
  - **Segmented control vs tab bar:** **both suit mutually exclusive selection.** **In general a split view works better than a segmented control**, **but a segmented control works on the Mac for a flat navigation hierarchy.**
- **must** **Keep important tab-bar items reachable on the Mac.** **Whether you use a split view or a segmented control, list top-level items in the macOS View menu** for quick access.
- **should** **Offer multiple ways to move between pages.** **Mac users (especially with a pointing device or keyboard only) appreciate Next and Previous buttons in addition to swipe gestures.**

#### Inputs
- **Touch is the basis of iPadOS conventions; keyboard and mouse inform most macOS conventions.** **Most iPadOS gestures convert automatically:**
| iPadOS gesture | Mouse interaction |
|---|---|
| Tap | left or right click |
| Touch and hold | click and hold |
| Pan | left click and drag |

| iPadOS gesture | Trackpad gesture |
|---|---|
| Tap | click |
| Touch and hold | click and hold |
| Pan | click and drag |
| Pinch | pinch |
| Rotate | rotate |
- **Developer note:** **the system sends the two touches of a pinch or rotate gesture to the view under the pointer, not the view under each touch.**

#### App icons
- **should** **Create a macOS version of your app icon.** **Great macOS icons show the lifelike rendering style people expect on macOS while keeping a harmonious experience across platforms.**

#### Layout
- To use the wider Mac screen, consider:
  - **Dividing a single column of content and actions into multiple columns.**
  - **Using regular-width and regular-height size classes**, **reflowing content to side-by-side as the window resizes.**
  - **Presenting an inspector next to the main content instead of a popover.**
- **should** **Consider moving controls from the iPad app's main UI to the Mac app's toolbar**, **and list their commands in the menu bar menus.**
- **should** **Adopt a top-down flow as much as possible**: **Mac apps put the most important actions and content near the top of the window**; **put iPad toolbar controls in the macOS window toolbar.**
- **should** **Relocate buttons from the side and bottom edges of the screen.** **On iPad edge placement helps reach; on a Mac that ergonomic reason doesn't apply**; **move them elsewhere or into the window toolbar.**

#### Menus
- **Mac users expect a persistent menu bar with all of an app's commands**; **iPadOS has none**, and iPad users expect **commands in the app's UI or in the shortcut interface shown when holding Command on a connected keyboard.** (Developer: `UIKeyCommand`; "Adding menus and shortcuts to the menu bar and user interface".)
- **Pop-up and pull-down buttons that reveal menus on iPad automatically take a macOS appearance** in the Mac app. (Developer: `UIMenuBuilder` and `UICommand` to add or remove custom menus and represent iPad commands as menu items.)
- **The system converts iPad context menus to macOS context menus automatically.** **Look for more places to support context menus**: **Mac users tend to expect every object to offer a context menu of relevant actions.** On a Mac a context menu is sometimes called a **contextual menu**.

### Platform considerations
- **iPadOS, macOS:** no additional considerations. **iOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
| Item | Value |
|---|---|
| Default idiom | **iPad idiom** ("Scale Interface to Match iPad"): views and text at **77 %**, e.g. **17 pt → 13 pt** |
| Mac idiom | **100 %** rendering, more detail and better performance; needs layout/font/asset audit; separate asset catalog; text styles, no fixed sizes |
| Good iPad foundations | drag and drop · keyboard navigation and shortcuts · multitasking (Split View, Slide Over, PiP) · multiple scenes |
| Poor fits | gyroscope, accelerometer, rear camera, HealthKit, ARKit, marking/handwriting/navigation as core |
| Automatic features | pointer and keyboard focus · window management · toolbars · rich text (copy/paste, context menus) · file management · menu bar menus · Settings integration |
| Mac-looking elements | split view · file browser · activity view · form sheet · contextual actions · colour picker |
| Navigation swaps | tab bar → sidebar split view (or segmented control for flat lists); list top-level items in the View menu; Next/Previous besides swipe |
| Gesture translation (mouse) | tap → left/right click · touch and hold → click and hold · pan → left click and drag |
| Gesture translation (trackpad) | tap → click · touch and hold → click and hold · pan → click and drag · pinch → pinch · rotate → rotate |
| Layout | multi-column · regular size classes · inspector instead of popover · top-down flow · toolbar controls · relocate edge buttons |
| Menus | menu bar for all commands; context menus on every object |
| Icon | a macOS version of the app icon |
| Developer docs | UIKit **Mac Catalyst** · "Choosing a user interface idiom for your Mac app" · `UIKeyCommand` · `UIMenuBuilder` · `UICommand` · UIKit Catalog sample |
| Video (link only, not watched) | Designing iPad Apps for Mac (WWDC19 809) |
| Apple's Related list | Designing for macOS (✓) |
| Change log | May 2 2023: consolidated into one page |

## Visual notes (link-only: from alt text and the catalog list)
- **Hero:** a sketch of **an iPad overlapping a Mac**, suggesting an iPad app on Mac, over grid lines, **tinted blue** (alt).
- **Idiom comparison (catalog `mac-catalyst-01`, tabs "iPad idiom" / "Mac idiom", light only):** **a zoomed icon for the California Academy of Sciences point of interest in Maps**, **less detailed under the iPad idiom, more detailed under the Mac idiom.**
- **No other images**; the tables are text (gesture translations).
- **Mismatches / notes:**
  1. **The page speaks of "iPad apps to Mac"**; **iPhone-only apps aren't covered** (the platform list says iPadOS and macOS).
  2. **"77 %" and "17 pt → 13 pt" are true ratios only for the iPad idiom**; **13/17 ≈ 76.5 %**.
  3. **The gesture table shows "Tap → left or right click" for a mouse**, **but "click" only for a trackpad** (secondary click on a trackpad uses a two-finger click, not listed).
  4. **The page says segmented controls "can work well" for flat hierarchies but generally favours a split view**; **the choice depends on hierarchy depth.**
  5. **The "developer notes" carry design-relevant facts** (pinch/rotate go to the view under the pointer; different metrics in the Mac idiom), **not only implementation.**
  6. **The page doesn't name Mac-only features beyond menus, toolbars and windows** (**no Touch Bar, no dock menu**).
- **Catalog:** the script found **1 comparison** (the two idiom images in tabs). **Not catalogued:** the hero. Catalog total **264** (was 263); the 263 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **mac-catalyst-01** (tab pair, light only; rule "Make sure views and images look good in the Mac version of your app"): **iPad idiom** vs **Mac idiom** rendering of the same icon (**less vs more detail**). The script reports **1 comparison** for this page.

## Web translation
**Mac Catalyst is native (UIKit).** **The advice maps to taking a phone/tablet web UI to a desktop window**: **layout, navigation, input parity and scale.** Numbers marked **CONV** are conventions, not Apple values.

| HIG rule | Web implementation |
|---|---|
| Good candidates: drag and drop, keyboard, multitasking, multiple windows | **Prerequisites for a desktop-grade web app:** **HTML drag and drop or Pointer-Events DnD** (`drag-and-drop.md`), **full keyboard navigation and shortcuts** (`keyboards.md`), **resizable layouts down to narrow windows** (`multitasking.md`), **multiple windows/tabs** (**`window.open`, PWA `display_override: ["window-controls-overlay"]`, `BroadcastChannel` for sync**). |
| Poor fits: sensors, rear camera, HealthKit, ARKit, handwriting | **Feature-detect** (`DeviceMotionEvent`, `mediaDevices.enumerateDevices()` for cameras, WebXR) **and hide or replace features desktop browsers lack**; **offer a mouse/keyboard alternative** (**drag/precision tools instead of touch drawing**). |
| Automatic pointer, focus, windows, toolbars, rich text, menus | **These don't come for free on the web**: **add `:hover`, `:focus-visible`, a toolbar, a menu/command palette, standard copy/paste and context menus** (`pointing-devices.md`, `focus-and-selection.md`, `edit-menus.md`, `the-menu-bar.md`). |
| iPad idiom: 77 % scale; 17 pt → 13 pt | **Desktop base text is smaller than mobile**: **~13–14 px UI text on desktop vs ~16–17 px on touch (CONV)**; **use `rem` and one root size switched by `@media (pointer: fine)`** (**`html { font-size: 0.8125rem }` ≈ 13 px**); **density scales (compact controls) via tokens** rather than shrinking whole pages (`typography.md`, `layout.md`). |
| Mac idiom: 100 % detail; audit layout, text, assets | **Use vector/SVG and `srcset` 2×/3× for crisp assets**, **audit at 100 % and 125–200 % zoom**; **separate desktop assets only when they differ** (`images.md`). |
| Fonts: text styles, no fixed sizes | **Type scale tokens (`--text-body`, `--text-caption`)**, **`clamp()` for fluid sizes**, **respect user font-size settings (`rem`, not `px`, for text)**. |
| Limit appearance customisation to standard ones | **Prefer native controls with styled tokens** (`<select>`, `<input>`) **and avoid custom widgets that behave differently on desktop**; **same look and behaviour across pointer types.** |
| Go beyond the iPad layout in a window | **A distinct desktop layout at wide widths** (`@media (min-width: 1024px)` / **container queries**), **not the phone layout stretched**. |
| Tab bar → sidebar (or segmented control); View-menu listing | **Bottom tab bar on phones, persistent sidebar on desktop** (**same items**, `sidebars.md`, `tab-bars.md`); **segmented control/tabs for flat hierarchies**; **expose top-level destinations in the app's menu/command palette and keyboard shortcuts** (`the-menu-bar.md`). |
| Next/Previous plus swipe | **Pager with visible Previous/Next buttons and arrow-key support**, **swipe as an extra** (`page-controls.md`). |
| Gesture translation: tap ↔ click, pan ↔ drag, pinch/rotate | **Use Pointer Events** (**`click`, `pointerdown/move/up`, `wheel` with `ctrlKey` for trackpad pinch**, `gesturechange` in Safari) so **the same handler serves touch, mouse and trackpad** (`gestures.md`, `pointing-devices.md`); **route pinch/rotate to the element under the pointer**, **not each touch** (**the developer note's rule, a mouse or trackpad has one position**). |
| A macOS app icon | **Web app icons: 180 px touch icon, maskable 192/512 px, favicon SVG, plus a `mask-icon`/desktop PWA icon; dock/taskbar look differs from mobile** (`app-icons.md`). |
| Layout: multi-column, regular size classes, side-by-side reflow, inspector not popover | **Grid with 2–3 columns at wide widths**, **container queries** that **reflow content side by side on resize**, **a right-hand inspector panel (`<aside>`) instead of a popover** (`split-views.md`, `popovers.md`). |
| Controls to the toolbar; commands also in menus | **A top toolbar/app bar with the main actions**, **the same commands in a menu or command palette** with **shortcuts shown** (`toolbars.md`, `the-menu-bar.md`). |
| Top-down flow; relocate edge buttons | **Primary actions at the top of the content area on desktop**; **move bottom-sheet/FAB actions into the toolbar** (**bottom reach zones are a touch consideration**; `designing-for-ios.md`). |
| Menu bar for all commands; context menus everywhere | **A "File/Edit/View/Help"-style menu bar or command palette (`⌘K`) in desktop web apps**; **right-click (`contextmenu`) menus on every object with relevant actions**, **plus a keyboard route** (Menu key/`Shift+F10`) (`context-menus.md`, `menus.md`). |
| Pop-up/pull-down menus adopt the platform style | **Use one menu component** that **renders with desktop styling (denser rows, hover states, shortcut hints)** and **touch styling on `(pointer: coarse)`** (`pop-up-buttons.md`, `pull-down-buttons.md`). |
| Native-only | **UIKit/Mac Catalyst idioms, `UIKeyCommand`, `UIMenuBuilder`, size classes, asset catalogs, the system Settings integration** are native; **the web uses responsive CSS, Pointer Events, ARIA and PWA manifests.** |

Field-note cross-links:
- `field-notes/*`: **no desktop-adaptation recipe**; nothing conflicts. `field-notes/components.md` targets **mobile-first components**; **add desktop hover/focus states as recommended here**.
- `hig/getting-started/designing-for-macos.md` (✓): **Apple's Related page** (what makes the Mac experience); `hig/getting-started/designing-for-ipados.md` (✓): **the iPad side**; `hig/components/layout/split-views.md` (✓), `hig/components/navigation/sidebars.md` (✓), `tab-bars.md` (✓), `hig/components/presentation/page-controls.md` (✓), `hig/components/selection-and-input/segmented-controls.md` (✓): **navigation swaps**; `hig/components/menus/the-menu-bar.md` (✓), `menus.md` (✓), `context-menus.md` (✓), `pop-up-buttons.md` (✓), `pull-down-buttons.md` (✓), `toolbars.md` (✓): **menus and toolbars**; `hig/inputs/keyboards.md` (✓), `pointing-devices.md` (✓), `gestures.md` (✓): **input translation**; `hig/patterns/drag-and-drop.md` (✓), `multitasking.md` (✓): **prerequisites**; `hig/foundations/typography.md` (✓ CRITICAL): **macOS text sizes**; `hig/foundations/app-icons.md` (✓): **icon versions**; `hig/foundations/layout.md` (✓ CRITICAL): **size classes and multi-column layout**.
- Not yet ingested (linked from this page): none.

## Checklist
- [ ] **Prerequisites are in place**: **drag and drop, keyboard navigation and shortcuts, resizable layouts, multiple windows.**
- [ ] **Sensor- or camera-dependent features are detected and replaced or hidden on desktop.**
- [ ] **Desktop text is ~13–14 px UI text** (via a root size and tokens), **not the phone size shrunk; assets are crisp at 100–200 % zoom.**
- [ ] **A desktop layout exists** (multi-column, container-query reflow, inspector panel), **not a stretched phone layout.**
- [ ] **Phone tab bar → desktop sidebar** (or tabs for flat hierarchies), **with top-level destinations in the menu/command palette.**
- [ ] **Pagers have Previous/Next buttons and arrow keys, swipe optional.**
- [ ] **One Pointer-Events codepath serves touch, mouse and trackpad**; **pinch/rotate target the element under the pointer.**
- [ ] **Main actions are in a top toolbar; commands are in a menu/command palette with shortcuts; edge-bottom buttons are moved.**
- [ ] **Every object has a context menu (and a keyboard route).**
- [ ] **A desktop app icon set exists.**

## Related
- Ingested: Designing for macOS (✓), Designing for iPadOS (✓), Split views (✓), Sidebars (✓), Tab bars (✓), Page controls (✓), Segmented controls (✓), The menu bar (✓), Menus (✓), Context menus (✓), Pop-up buttons (✓), Pull-down buttons (✓), Toolbars (✓), Keyboards (✓), Pointing devices (✓), Gestures (✓), Drag and drop (✓), Multitasking (✓), Typography (✓ CRITICAL), App icons (✓), Layout (✓ CRITICAL).
- Not yet ingested (linked from this page): none.
- Developer docs: UIKit Mac Catalyst · "Choosing a user interface idiom for your Mac app" · UIKit Catalog sample.
- Videos: Designing iPad Apps for Mac (WWDC19 809).
