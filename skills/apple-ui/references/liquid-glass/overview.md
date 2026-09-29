# Liquid Glass — technology overview (developer documentation)
Source: https://developer.apple.com/documentation/technologyoverviews/liquid-glass · Section: Liquid Glass (developer documentation) · Path in Apple's docs: Technology Overviews › App design and UI › Liquid Glass · Ingested: 2026-09-29 · Apple last updated: **not shown** (documentation pages carry no change log; the page copyright line is 2026) · **Read from the DocC JSON fetch plus five screenshots the user supplied (marked "(from screenshot)")**; the JSON has no `supported-platforms` field, but the page speaks about **iOS, iPadOS, macOS and other Apple platforms**, with **SwiftUI, UIKit and AppKit** components. Not marked critical: no token file, checker or gate of its own (the material's tokens and gate are on `hig/foundations/materials.md`). The page has **no measurements**; it names **5 adoption steps**, **6 sample-code techniques**, **5 design principles** and **5 WWDC25 videos**.

## In one line
**Liquid Glass is the dynamic material used across Apple platforms, combining the optical properties of glass with fluidity; standard SwiftUI, UIKit and AppKit controls and navigation pick it up automatically, and custom elements can adopt it too.** **Adopting it doesn't mean rebuilding an app: build with the latest Xcode to see the changes, then (1) embrace the refresh for materials, controls and app icons, (2) offer universal navigation and search across platforms, (3) keep your organisation and layout consistent with other apps and system experiences, (4) follow best practices for windows, modals, menus and toolbars, and (5) test on every platform you support.** **Design principles: layout and navigation that keep the most important content in focus; a simple, bold layered app icon; judicious colour in controls and navigation so content shows through; interface elements that fit the software and hardware design; standard iconography and predictable action placement across platforms.** On the web: **a small set of glass primitives for the floating functional layer, grouped floating toolbars, edge-to-edge content that extends under bars and sidebars, adaptive layouts and consistent navigation and search; verify against `materials.md` and its tokens.**

## What the page says

### Introduction to Liquid Glass
- **Interfaces across Apple platforms feature a new dynamic material, Liquid Glass**, **which combines the optical properties of glass with a sense of fluidity.**
- **Goal:** **adopt the material and the design principles of Apple platforms to create interfaces that establish hierarchy, create harmony and stay consistent across devices and platforms.**
- **Standard components** from SwiftUI, UIKit and AppKit (**controls and navigation elements**) **pick up the material's appearance and behaviour automatically**; **the same effects can be implemented in custom interface elements.**
- Hero image **(from screenshot)**: **a Mac, an iPad and an iPhone overlapping, each showing the Maps app on a dark map**: **the Mac has a translucent sidebar window with the Dock below**; **the iPad shows a full-screen map with a floating search control near the bottom leading corner**; **the iPhone shows a glass card over the map with a "Search Maps" field, a profile avatar, a "Library" row (Home, Work, Add) and "Your Guides"**. (Apple's alt text: *an image of a Mac, iPad and iPhone showing different screens in the Maps app*.)

### Adopting Liquid Glass
- **Existing apps don't need reinventing from the ground up.** **Start by building in the latest Xcode to see the changes; then follow best practices in your interface so the app looks at home on Apple platforms.**
- **The five steps:**
  1. **Embrace the visual refresh for materials, controls and app icons.**
  2. **Provide a universal navigation and search experience across platforms.**
  3. **Ensure your interface's organisation and layout look consistent with other apps and system experiences.**
  4. **Adopt best practices for windows, modals, menus and toolbars.**
  5. **Test your app to make sure it provides a great experience across platforms.**
- **Before / after illustration (from screenshot):** **the bottom of an iPhone showing a photo viewer's toolbar.**
  - **Before (iOS 18 and earlier):** **a flat bar across the bottom with four evenly spaced icons in one row: delete (trash), folder, reply (arrow) and compose**; **the photo stops above the bar, which sits on its own dark background.**
  - **After (latest iOS):** **the photo extends to the bottom edge of the screen**; **the actions float over it as glass: three icons (reply, folder, trash) grouped in one capsule at the leading side and the compose action in its own round glass button at the trailing side**; **the toolbar no longer spans the full width, and the primary (compose) action is separated from the group.**
  - **Reading:** **grouping and separating actions is the pattern; the reordered group (the order of reply, folder and trash differs between the two screenshots) shows that item order is a design decision, not fixed by the system** (this is a reading of the pictures; the page doesn't state it).
- Apple's alt texts for the pair: *a toolbar as it appears in the latest version of iOS* and *…in iOS 18 and earlier*.

### Sample code (Landmarks)
- **The Landmarks app (SwiftUI) shows how to build an engaging experience with Liquid Glass.** **The techniques the page lists:**
  - **Configure an app icon with Icon Composer.**
  - **Create an edge-to-edge content experience with the background extension effect.**
  - **Enhance the edge-to-edge experience by extending horizontal scroll views under a sidebar or inspector.**
  - **Make the interface adaptable to changing window sizes.**
  - **Explore search conventions across platforms.**
  - **Apply Liquid Glass effects to custom interface elements and animations.**
- **Screenshot (from screenshot):** **Landmarks on an iPad: a translucent sidebar on the leading side listing "Landmarks", "Map" and "Collections" with icons; a large photo of Mount Fuji with cherry blossoms behind it and long descriptive text below; the photo's colours continue, blurred, behind the sidebar (the background extension look); glass controls at the top: a round back button, a grouped capsule of share, favourite, bookmark and info icons, and a search field pill.** (Apple's alt text: *the Landmarks app on an iPad showing the Mount Fuji landmark with the sidebar on the leading side*.)

### Design principles
- **The Human Interface Guidelines carry the guidance for any Apple platform; browse them to adapt an interface to Liquid Glass.**
  - **Define a layout and choose a navigation structure that puts the most important content in focus.**
  - **Reimagine the app icon with simple, bold layers that offer dimensionality and consistency across devices and appearances.**
  - **Be judicious with colour in controls and navigation so they stay legible and let content infuse them and shine through.**
  - **Ensure interface elements fit in with software and hardware design across devices.**
  - **Adopt standard iconography and predictable action placement across platforms.**
- (The linked HIG card's alt text: *several Liquid Glass components such as toggles, sliders and buttons on a neutral background; the transparent components cast shadows and let coloured elements like a blue slider track and a green toggle backing show through, highlighting the lensing effect.*)

### Videos (WWDC25)
| Title | Session |
|---|---|
| Meet Liquid Glass | 219 |
| Get to know the new design system | 356 |
| Build a SwiftUI app with the new design | 323 |
| Build a UIKit app with the new design | 284 |
| Build an AppKit app with the new design | 310 |

## Specs & values
The page has **no numbers, sizes or timings.**

| Item | Value |
|---|---|
| Material | Liquid Glass: glass-like optics + fluidity; lensing and shadows visible in Apple's illustration |
| Automatic adoption | standard SwiftUI, UIKit and AppKit controls and navigation |
| Adoption first step | rebuild with the latest Xcode and review |
| Adoption steps | materials/controls/icons refresh · universal navigation and search · consistent organisation and layout · windows, modals, menus, toolbars · cross-platform testing |
| Sample code techniques | Icon Composer icon · background extension effect · horizontal scroll views under sidebar/inspector · adaptable window sizes · cross-platform search · Liquid Glass on custom elements and animations |
| Design principles | focus on the most important content · simple bold layered icon · judicious colour · fit with software and hardware · standard iconography and predictable action placement |
| Sub-page | **Adopting Liquid Glass** (Essentials) |
| Sample project | **Landmarks: Building an app with Liquid Glass** (SwiftUI) |
| Videos | WWDC25 219 · 356 · 323 · 284 · 310 |
| Sibling documentation pages (from the sidebar screenshot) | SwiftUI apps · UIKit and AppKit apps · Interface fundamentals · Preparing your app for iPhone Duo |

## Visual notes
- **Hero (from screenshot):** **three devices, dark Maps UI**, as described above.
- **Before/after toolbar (from screenshot):** **flat full-width bottom bar → floating glass capsule group + separate round action; content runs under it.**
- **Landmarks iPad (from screenshot):** **translucent sidebar, photo colours continuing behind it, glass controls at the top.**
- **Videos strip (from screenshot):** **five WWDC25 cards: a glass shape on a grid for "Meet Liquid Glass", a dark grid of UI components for the design system talk, a presenter for the SwiftUI talk, a row of coloured app screens for the UIKit talk and a glass toolbar over a sunset gradient for the AppKit talk.**
- **Docs sidebar (from screenshot):** *App design and UI* holds App builder (SwiftUI apps; UIKit and AppKit apps), Interface (Interface fundamentals; Preparing your app for iPhone Duo) and **Liquid Glass › Essentials › Adopting Liquid Glass**; further groups (Games, Data management, Core experiences, Apple Intelligence and machine learning, Audio and video, Graphics, drawing, and animation, Tools and distribution).
- **Mismatches / notes:**
  1. **This is an overview page: it lists what to do and points to Adopting Liquid Glass and the Landmarks sample for detail**; **the values (radius, blur, tint, spacing) live in the HIG pages, not here** (`hig/foundations/materials.md`).
  2. **The page says standard components "pick up" the material automatically**, **but only after rebuilding with the latest Xcode**; **web has no such automatic adoption.**
  3. **The before/after screenshot shows a reordered icon group**, which the text doesn't mention (see above).
  4. **The design-principles list overlaps HIG pages** (Layout, Color, App icons, Icons, Toolbars, Tab bars, Sidebars); **this note only points there.**
  5. **The page has no accessibility note**; **the HIG Materials page covers Reduce Transparency and Increase Contrast.**
  6. **The next Adopting Liquid Glass page (not yet ingested here) is expected to hold the detailed steps.**

## Web translation
**Liquid Glass is a native material; there's no automatic adoption on the web.** **The page's steps map to explicit work.** Mappings below are this repo's conventions (CONV) or background knowledge, not from the page; **verify blur/filter support per browser and test with Reduce Transparency-style settings** (`prefers-reduced-transparency` support varies).

| Page item | Web implementation |
|---|---|
| Standard components adopt the material automatically | **Build one shared set of glass primitives** (`.glass`, `.glass-clear`, `.material-*` from `tokens/apple-materials.css`) **and use them for every floating bar, sidebar, popover, sheet and control**; **no ad-hoc `backdrop-filter` per component** (`materials.md`, MATERIALS GATE). |
| Build with the latest Xcode and review | **Audit the current UI against `materials.md`, `color.md` and `layout.md`** before restyling; **change tokens first, then components.** |
| 1. Visual refresh of materials, controls, icons | **Update tokens** (glass fills, radii, shadows) **and control styles together**; **layered app icon and favicon** (`app-icons.md`, `design-resources.md`). |
| 2. Universal navigation and search | **One navigation model across breakpoints** (tab bar or sidebar plus a search entry in the same place); **search as a first-class destination, consistent labels** (`tab-bars.md`, `sidebars.md`, `search-fields.md`, `searching.md`). |
| 3. Consistent organisation and layout | **Same grouping, order and alignment as platform conventions**; **content first, chrome floats above** (`layout.md`, `designing-for-*`). |
| 4. Windows, modals, menus, toolbars | **Floating, grouped toolbars: related actions in one glass capsule, the primary action in its own round button, separated** (before/after screenshot); **sheets/popovers/menus on the material**; **glass only on the functional layer, never the content layer** (`toolbars.md`, `sheets.md`, `popovers.md`, `menus.md`). |
| 5. Test across platforms | **Test on iOS Safari, macOS Safari/Chrome/Firefox, Android Chrome; light/dark; Reduce Motion/Transparency/Increase Contrast equivalents; RTL** (`accessibility.md`, `dark-mode.md`). |
| Edge-to-edge content with the background extension effect | **Let the hero image or media run under floating bars and the sidebar**; **extend the image's colours behind the sidebar with a blurred, mirrored or stretched copy (`mask-image` fade)** rather than a flat colour; **never cover content with an opaque bar** (`layout.md`, `scroll-views.md`). |
| Horizontal scroll views under a sidebar or inspector | **Let `overflow-x` carousels start under the glass sidebar (negative inline margin plus padding) so content scrolls beneath it**; **keep the first item aligned with the content edge at rest.** |
| Adaptable window sizes | **Container queries and fluid grids; sidebar collapses to a tab bar or overlay at narrow widths; toolbars regroup** (`designing-for-ipados.md`, `designing-for-macos.md`). |
| Search conventions across platforms | **Search field position and behaviour follow each platform's convention** (top of sidebar or window toolbar on wide screens; a tab or bottom field on phones) (`search-fields.md`). |
| Liquid Glass on custom elements and animations | **Use the glass classes on custom floating elements; animate with transitions on transform/opacity (and the material's own state) using the measured timings in `tokens/apple-materials.css` and `motion.md`**; **respect `prefers-reduced-motion`.** |
| Icon Composer app icon | **Layered icon source exported per platform; provide a flat marketing/favicon export** (`design-resources.md`). |
| Design principles | **Focus content, judicious colour on controls (`color.md` § Liquid Glass color), standard icons and action placement (`icons.md`, `toolbars.md`)**; **a coloured element sits under glass, not the glass itself tinted arbitrarily.** |
| Videos | **For values and behaviour see the WWDC25 sessions above**; **the repo's notes distil the HIG, not the videos.** |
| Native-only | **Automatic adoption via rebuilding, `glassEffect`-style APIs, Icon Composer integration, the background extension effect, system toolbars/tab bars/sidebars** are native; **the web recreates the look with CSS and layout.** |

Field-note cross-links:
- `field-notes/*` (tokens, components, landing-and-motion) **record the web glass recipes measured earlier** (frosted bar, veil, hairline borders); **check them alongside `materials.md`; where the two differ, the field note wins for the web only when it marks an explicit user decision.**
- `hig/foundations/materials.md` (✓ CRITICAL): **the Liquid Glass rules, variants, tokens, gate**; `hig/foundations/color.md` (✓ CRITICAL): **colour on glass**; `hig/foundations/layout.md` (✓ CRITICAL): **glass bars and the scroll edge effect**; `hig/foundations/motion.md` (✓), `dark-mode.md` (✓), `accessibility.md` (✓); `hig/foundations/app-icons.md` (✓) and `icons.md` (✓): **layered icons and standard iconography**; `hig/components/menus/toolbars.md` (✓), `buttons.md` (✓ CRITICAL), `components/navigation/tab-bars.md` (✓), `sidebars.md` (✓), `search-fields.md` (✓), `components/presentation/scroll-views.md` (✓), `sheets.md` (✓), `popovers.md` (✓), `windows.md` (✓); `hig/getting-started/designing-for-ios.md`, `ipados.md`, `macos.md`, `iphone-duo.md`, `design-principles.md` (✓); `references/design-resources.md`: **Icon Composer, UI kits, Pass Designer**.

## Checklist
- [ ] **Glass is used only on the floating functional layer, from shared primitives** (no per-component blur recipes).
- [ ] **Content runs edge to edge under bars and sidebars; bars float above it.**
- [ ] **Toolbars group related actions in one glass capsule and keep the primary action separate.**
- [ ] **Navigation and search follow one model across breakpoints and platforms.**
- [ ] **Colour is judicious on controls and navigation; content shows through.**
- [ ] **Icons are standard and action placement is predictable across platforms.**
- [ ] **Layout adapts to window size** (container queries, regrouped toolbars).
- [ ] **Tested across browsers, appearances and accessibility settings.**

## Related
- Next in this section: **Adopting Liquid Glass** (Essentials) — to be ingested when the page is provided.
- Ingested: Materials (✓ CRITICAL), Color (✓ CRITICAL), Layout (✓ CRITICAL), Motion (✓), Dark Mode (✓), Accessibility (✓), App icons (✓), Icons (✓), Toolbars (✓), Buttons (✓ CRITICAL), Tab bars (✓), Sidebars (✓), Search fields (✓), Scroll views (✓), Sheets (✓), Popovers (✓), Windows (✓), Designing for iOS/iPadOS/macOS/iPhone Duo (✓), Design principles (✓), Design Resources (✓ `design-resources.md`).
- Developer docs: Technology Overviews › Liquid Glass; Adopting Liquid Glass; Landmarks: Building an app with Liquid Glass.
- Videos: Meet Liquid Glass (WWDC25 219) · Get to know the new design system (356) · Build a SwiftUI app with the new design (323) · Build a UIKit app with the new design (284) · Build an AppKit app with the new design (310).
