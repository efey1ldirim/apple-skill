# Adopting Liquid Glass — technology overview (developer documentation)
Source: https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass · Section: Liquid Glass (developer documentation) › Essentials · Ingested: 2026-09-29 · Apple last updated: **not shown** (documentation pages carry no change log) · **Read from the DocC JSON fetch (full text, API tables, image alt texts, the two control videos) plus the screenshots the user supplied.** Platforms: **iOS, iPadOS, macOS, tvOS, watchOS** with **SwiftUI, UIKit and AppKit**. Not marked critical: no gate of its own; the page has **no measurements** in its text, but its two control videos were **measured frame by frame** (see `controls-motion.md`, `tokens/apple-glass-controls.*`, demo `examples/glass-controls/index.html`, checker `tools/check-glass-controls.mjs`).

## In one line
**Rebuild with the latest SDK, then work through nine areas — visual refresh, app icons, controls, navigation, menus and toolbars, windows and modals, organisation and layout, search, platform considerations — using standard components so the material, the scroll edge effect and the shapes adopt automatically; add Liquid Glass to custom views sparingly and combine those effects in one container.** For the web, **the sizes, shapes and motion of two controls are measured (slider thumb, segmented control): the knob becomes a glass lens while pressed and the selected segment grows into a lens that magnifies its labels** (`controls-motion.md`).

## What the page says, section by section

### Overview and "See your app with Liquid Glass"
- **Adopting Liquid Glass doesn't mean reinventing the app**: **build with the latest Xcode, review the changes, then follow the sections below.**
- **Apps that use standard SwiftUI, UIKit or AppKit components get the new look on the latest iOS, iPadOS, macOS, tvOS and watchOS** just by building with the latest SDKs and running on the latest releases.
- Hero **(alt text)**: *a Mac, an iPad and an iPhone showing the Mount Fuji landmark in the Landmarks app.*

### Visual refresh
- **Liquid Glass combines the optical properties of glass with a sense of fluidity and forms a distinct functional layer for controls and navigation**; it **affects how the interface looks, feels and moves and adapts to element overlap and focus state.**
- **Leverage system frameworks**: bars, sheets, popovers and controls adopt it automatically.
- **Reduce custom backgrounds in controls and navigation elements**: they can overlay or interfere with the material or the **scroll edge effect**. **Remove custom effects and let the system decide the background**, especially in: `NavigationStack`, `NavigationSplitView`, `titleBar`, `toolbar(content:)` (SwiftUI); `UINavigationBar`, `UITabBar`, `UIToolbar`, `UISplitViewController` (UIKit); `NSToolbar`, `NSSplitView` (AppKit).
- **Test with display and accessibility settings**: **people can choose a preferred look for Liquid Glass in Settings and turn on Reduce Transparency / Reduce Motion, which remove or modify effects**; standard components adapt, **custom elements, colours and animations must be tested in each configuration.**
- **Avoid overusing Liquid Glass effects**: **on a custom control use it sparingly**; **it exists to bring attention to the content**, so limit it to **the most important functional elements** (`glassEffect(_:in:)`, `UIGlassEffect`, `NSGlassEffectView`; see *Applying Liquid Glass to custom views*).

### App icons
- **Icons are dynamic and expressive**: updated **icon grid** (standardised, concentric with hardware), **layers that respond to lighting and system effects**; **iOS, iPadOS and macOS offer default (light), dark, clear and tinted variants.** Render-modes image **(alt text)**: *the Podcasts icon in six variants: default, dark, clear (light), clear (dark), tinted (light), tinted (dark).*
- **Reimagine the icon**: **consistent, optically balanced across platforms**; **a simplified design of solid, filled, overlapping semi-transparent shapes**; **let the system apply masking, blurring and other effects.** Three-image strip **(alt text)**: *Podcasts in iOS 18 (light style) → the new default style before effects, using solid filled shapes and multiple layers of varying opacity → the same with system effects applied.*
- **Design using layers**: **the system adds reflection, refraction, shadow, blur and highlights to the layers**; **decide foreground / middle / background elements and export separate layers from any design app.**
- **Compose and preview in Icon Composer** (in the latest Xcode and on Apple Design Resources): **add a background, group layers, adjust opacity, preview with system effects and appearances** (`../design-resources.md`).
- **Preview against the updated grids**: **rounded rectangle for iOS, iPadOS, macOS; circular for watchOS**; **keep elements centred to avoid clipping**; **irregular icons get a system background.**

### Controls
- **Controls have a refreshed look and "come to life when a person interacts with them"**: **for sliders and toggles the knob transforms into Liquid Glass during interaction, and buttons fluidly morph into menus and popovers.** **Hardware curvature informs control shapes, so many controls are rounder to nestle into window and display corners**; **controls also offer an extra-large size** for labels and accents.
- **Two videos on the page: Slider and Segmented control** (measured, `controls-motion.md`).
- **Review appearance and dimensions**: **if you use standard controls and don't hard-code metrics, shapes and sizes update on rebuild**; review `Button`, `Toggle`, `Slider`, `Stepper`, `Picker`, `TextField` / `UIButton`, `UISwitch`, `UISlider`, `UIStepper`, `UISegmentedControl`, `UITextField` / `NSButton`, `NSSwitch`, `NSSlider`, `NSStepper`, `NSSegmentedControl`, `NSTextField`.
- **Colour in controls**: **be judicious so they stay legible; use system colours or a custom colour with light and dark variants and an increased-contrast option for each.**
- **Crowding and overlap**: **use standard spacing metrics; avoid overcrowding or layering glass elements on top of each other.**
- **Legibility under scrolling content**: **the scroll edge effect obscures content that scrolls beneath controls; system bars have it by default**; **custom bars register with `safeAreaBar(edge:alignment:spacing:content:)` (SwiftUI) or `UIScrollEdgeElementContainerInteraction` (UIKit).**
- **Align shapes with other rounded elements — concentric to their containers**: `rect(corners:isUniform:)`, `ConcentricRectangle` (SwiftUI); `cornerConfiguration`, `UICornerConfiguration` (UIKit).
- **New button styles instead of custom glass**: `glass`, `glassProminent`, `glass(_:)` (SwiftUI); `glass()`, `prominentGlass()`, `clearGlass()`, `prominentClearGlass()` (UIKit); `NSButton.BezelStyle.glass` (AppKit).

### Navigation
- **Glass applies to the topmost layer, where navigation lives**: **tab bars and sidebars float in the glass layer so people focus on the content.** Before/after **(alt text)**: *the bottom half of an iPhone: tab bar in iOS 18 and earlier → tab bar in the latest iOS, with the search tab in its own section at the trailing end.*
- **Establish a clear navigation hierarchy** — **content and navigation clearly separate, a distinct functional layer above content.**
- **Tab bar → sidebar automatically**: `sidebarAdaptable` (SwiftUI), `UITabBarController.Mode.tabSidebar` (UIKit).
- **Split views for sidebar + inspector layouts**: `NavigationSplitView` + `inspector(isPresented:content:)`; `UISplitViewController` + `.Column.inspector`; `NSSplitViewController` + `init(inspectorWithViewController:)`.
- **Check content safe areas next to sidebars and inspectors** so underlying content peeks through.
- **Extend content beneath sidebars and inspectors**: the **background extension effect** **mirrors the adjacent content to look as if it stretches under the sidebar and blurs it to keep the sidebar legible** — **ideal for edge-to-edge hero images** (`backgroundExtensionEffect()`, `UIBackgroundExtensionView`, `NSBackgroundExtensionView`). Pair **(alt text)**: *Landmarks with the sidebar — incorrect: the image stops at the sidebar and the sidebar floats over an empty background; correct: the image appears to extend beneath it.*
- **Minimise the tab bar on scroll (iOS, opt-in)**: **it recedes on scroll down or up and expands when scrolling the opposite way** (`.tabBarMinimizeBehavior(.onScrollDown)`, `tabBarMinimizeBehavior = .onScrollDown`).

### Menus and toolbars
- **Menus adopt the material; items for common actions use icons** (the system picks the icon from the **standard selector**: Cut, Copy, Paste); **new to iPadOS: a menu bar.** **Match the top actions of a contextual menu to the swipe actions of the same item.**
- **Toolbars take on the glass look and can group items.** Before/after **(alt text)**: *the bottom half of an iPhone with a toolbar in iOS 18 and earlier → in the latest iOS.* **Group items that do similar things or affect the same part of the interface, and keep groupings and placement consistent across platforms.** Pair **(alt text)**: *incorrect: four buttons (Undo, Redo, Markup, More) sharing one background; correct: two groups — Undo + Redo, and Markup + More.* **Separate groups with a fixed spacer** (`fixed`, `ToolbarSpacer`; `fixedSpace(_:)`; `space`).
- **Use standard icons instead of text for common actions; don't mix text and icons across items that share a background.** **Always give every icon an accessibility label** (VoiceOver, Voice Control).
- **Audit custom toolbar work** (fixed spacers, custom items); **to hide an item, hide the item itself, not its view — otherwise an empty item shows** (`hidden(_:)`, `isHidden`).

### Windows and modals
- **Windows have rounder corners**; **iPadOS shows window controls and resizes continuously** (down to a minimum size, not between presets). **Support arbitrary window sizes; use split views for fluid column reflow; use layout guides and safe areas** so the system can place window controls and the title bar.
- **Sheets and action sheets adopt the material**: **larger corner radius; half sheets are inset from the display edge so content peeks through; a half sheet becomes more opaque when expanded to full height** to keep focus. **Check content near the rounder sheet corners and what peeks through around the inset sheet.**
- **Audit backgrounds of sheets and popovers**: **remove custom visual-effect views** for consistency.
- **Action sheets originate from the element that triggers them, not the bottom edge, and let people interact with the rest of the interface** — **set the source view/item** (`confirmationDialog(...)`, `sourceView`, `sourceItem`, `beginSheetModal(for:completionHandler:)`).

### Organisation and layout
- **Lists, tables and forms get larger row height and padding; sections get a larger corner radius** matching control curvature. Before/after **(alt text)**: *an iPhone grouped list in iOS 18 and earlier → in the latest iOS.*
- **Section headers use title-style capitalisation and no longer render in all capitals** — **update your header text.**
- **Use SwiftUI forms with the grouped style** to get the updated layout metrics.

### Search
- **Search location and behaviour follow platform conventions.** Pair **(alt text)**: *iPad with search in the toolbar's upper trailing corner; iPhone with search in a toolbar at the bottom.*
- **Check keyboard layout on focus**: **in iOS the search field slides up as the keyboard appears — test that it moves like other apps.**
- **Use semantic search tabs**: **the system separates the search tab and puts it at the trailing end** (`Tab(role: .search)`, `UISearchTab`).

### Platform considerations
- **watchOS**: **changes are minimal and appear automatically even without the new SDK; adopt standard toolbar APIs and watchOS 10 button styles.**
- **tvOS**: **standard buttons and controls take on the glass look when focused**; **adopt the standard focus APIs (`focusable(_:)`, `isFocused`, `UIFocusItem`, `focused`) for custom controls.** **Apple TV 4K (2nd generation) and newer** support the effects; older models keep their look.
- **Combine custom glass effects in a `GlassEffectContainer`** — **better rendering performance and fluid morphing between shapes.**
- **Performance-test on every platform** (*Improving your app's performance*).
- **Opt out**: **add the `UIDesignRequiresCompatibility` key to the Info pane to ship with the latest SDKs but keep the previous look.**

## Web translation
| Apple guidance | On the web |
|---|---|
| Standard components adopt the material | **Use the repo's shared glass primitives (`tokens/apple-materials.css`); never a per-component blur recipe.** |
| Remove custom backgrounds on bars, split views, toolbars | **No extra `background` / `backdrop-filter` layers on top of the glass primitive; let one layer own the material.** |
| Reduce Transparency / Reduce Motion | **`prefers-reduced-transparency` / `prefers-contrast` → solid fills; `prefers-reduced-motion` → no lens growth, spring or stretch (`apple-glass-controls.json` › reducedMotion).** |
| Knob becomes glass while interacting | **`GlassControls.slider` / `.segmented` (`tokens/apple-glass-controls.*`): opaque pill → lens crossfade, measured sizes, spring and stretch** (`controls-motion.md`). |
| Buttons morph into menus/popovers | **Animate size/position of one glass surface between the button and the menu; `glassEffect`-style morph isn't native on the web — use one element and a transform/clip transition.** |
| Scroll edge effect under bars | **A gradient/blur veil at the scroll container's edge behind sticky bars** (`hig/foundations/layout.md`). |
| Concentric corners | **`border-radius` = outer radius − padding for nested surfaces.** |
| Background extension under sidebars | **Mirror + blur the hero image under the sidebar (a blurred, flipped copy), edge-to-edge.** |
| Toolbar grouping, primary action separate | **One glass capsule per group, a fixed gap between groups, primary action in its own round button** (`toolbars.md`). |
| Search tab at the trailing end | **Put the search entry last in a tab/segment bar, visually separated.** |
| Sheets: inset half sheet, opaque when full | **Inset bottom sheet with radius; raise opacity as it reaches full height.** |
| Section headers in title case | **Don't `text-transform: uppercase` list headers.** |
| `UIDesignRequiresCompatibility` | **Keep a flat/legacy skin behind a flag if you must support it.** |
| Native-only | **`glassEffect`, `GlassEffectContainer`, Icon Composer integration, system toolbars/tab bars/sidebars, the background extension effect API** are native; the web recreates the look with CSS, SVG and layout. |

## Checklist
- [ ] **One shared glass primitive; no stacked or custom glass backgrounds on bars and controls.**
- [ ] **Glass on custom elements only where it matters, never layered on glass.**
- [ ] **Controls: knob → lens on press, rounder shapes, standard spacing, judicious colour with light/dark/increased-contrast variants.**
- [ ] **Content scrolls under bars with an edge effect for legibility.**
- [ ] **Navigation separate from content; tab bar can become a sidebar; search is the last tab.**
- [ ] **Toolbars grouped by function; icons have accessible labels; primary action separate.**
- [ ] **Corners concentric to their containers; sheets inset and more opaque at full height.**
- [ ] **Section headers in title case; larger row height/padding on lists and forms.**
- [ ] **Tested with Reduce Transparency, Reduce Motion and increased contrast.**

## Related
- `overview.md` (Liquid Glass technology overview), `controls-motion.md` (measured slider + segmented control), `../hig/foundations/materials.md` (✓ CRITICAL), `../hig/foundations/color.md`, `../hig/foundations/layout.md`, `../hig/foundations/motion.md`, `../hig/components/menus/toolbars.md`, `../hig/components/navigation/tab-bars.md`, `../hig/components/navigation/sidebars.md`, `../hig/components/navigation/search-fields.md`, `../hig/components/presentation/sheets.md`, `../hig/components/presentation/popovers.md`, `../hig/components/selection-and-input/sliders.md`, `../hig/components/selection-and-input/segmented-controls.md`, `../design-resources.md`.
- Developer docs: Applying Liquid Glass to custom views · Landmarks: Building an app with Liquid Glass · Improving your app's performance · Creating your app icon using Icon Composer.
