# Sidebars
Source: https://developer.apple.com/design/human-interface-guidelines/sidebars · Section: Components › Navigation and search · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS** ("No additional considerations for tvOS. Not supported in watchOS"; the watch icon is dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **June 8, 2026** (sidebar icon-colour guidance updated, adaptable sidebar style clarified; earlier rows: June 9, 2025 content beneath the sidebar, August 6, 2024 SwiftUI adaptable style, December 5, 2023 iPadOS artwork, June 21, 2023 visionOS). One DocC fetch, read in full. 7 screenshots (light-mode page, hero → the Videos card) were compared with the fetched text and image alt text line by line: everything matches. **Read from the fetch only:** the **change log** rows (the screenshots end on the Videos card), the dark variants of the images, and the developer-doc names beyond those visible. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
A sidebar sits on the **leading side** of a view and lets people **move between areas of the app or top-level collections** (folders, playlists). It costs a lot of space, so **prefer a tab bar first** on iPhone/iPad (or the **adaptive tab-bar-that-becomes-a-sidebar**), keep **at most two levels**, let people **customise and hide it**, **float it as glass with content extending beneath**, and use **icon colour only with a purpose**.

## Rules

### Framing (intro)
- A sidebar needs **a lot of vertical and horizontal space**. When space is tight, or you want more of the screen for other content or functions, a **more compact control such as a tab bar** may navigate better.
- Many apps **needn't choose**: a **tab bar style that provides both** exists (see *Tab bars* and *Layout*).

### Best practices
- **should** **Extend visually rich content beneath the sidebar.** In iOS, iPadOS and macOS the sidebar can **float above content in the Liquid Glass layer** (like toolbars and tab bars). To reinforce the separation, either let the content **scroll horizontally beneath it** or apply a **background extension effect**: adjacent content is **mirrored (flipped and blurred)** so it seems to stretch under the sidebar to the window edge (`backgroundExtensionEffect()`). ✗ an image that **stops at the sidebar edge**; ✓ the image **extended beneath the sidebar** (catalog `sidebars-01`).
- **should** **Let people customise the sidebar's contents when possible**: it navigates to important areas, so people should decide **which areas matter most and in what order**.
- **should** **Group hierarchy with disclosure controls if the app has a lot of content**, to keep vertical space manageable.
- **may** **Use familiar symbols for items** (SF Symbols). For a custom icon, **make a custom symbol** instead of a bitmap.
- **may** **Let people hide the sidebar**: for more room or less distraction. Use **the platform's own interactions**: iPadOS **edge-swipe**; macOS a **show/hide button** or **Show Sidebar / Hide Sidebar** in the **View** menu; visionOS: the window **expands to fit the sidebar**, so hiding is rarely needed.
- **should** **Not hide the sidebar by default**, so it stays **discoverable**.
- **should** **Show no more than two levels of hierarchy.** Deeper data → a **split view** with a **content list between the sidebar and the detail view**.
- **should** **With two levels, title each group with succinct, descriptive labels**; **omit unnecessary words**.
- **should** **Give sidebar icon colours a clear purpose.** By default icons use the **app accent colour**. On macOS people can change the **system accent colour** and expect **all sidebar icons to follow it**, so **honour it**. **Sparingly used fixed colours** can clarify meaning or draw attention (Mail's **VIP** icon is **yellow** to stand out).

### Platform considerations
- **tvOS:** no additional considerations. **watchOS:** not supported.

#### iOS, iPadOS
- With the SwiftUI **`sidebarAdaptable`** tab-view style you **choose whether the app opens with a sidebar or a tab bar**. **Both variations include a button to switch** between them. The style **adapts to the platform** and **responds to rotation and window resizing**, giving a version **appropriate to the view's width**.
- **Developer note:** for a **sidebar only**, use `NavigationSplitView` (sidebar in the primary pane of a split view) or `UISplitViewController`.
- **should** **Consider a tab bar first**: it gives **more space to content** and enough flexibility for many main areas. If more areas exist than fit, the tab bar's **convertible sidebar-style appearance** can hold **less-used content**.
- **should** **If not using SwiftUI, apply the correct appearance**: `UICollectionLayoutListConfiguration.Appearance.sidebar` on a collection-view list layout.

#### macOS
- **Row height, text and glyph size depend on the sidebar size: small, medium or large.** You can set it in code, and **people can change it** with **sidebar icon size** in **General settings**.
- **may** **Auto-hide and reveal the sidebar when the window resizes** (a smaller Mail viewer can collapse it to give the message more room).
- **should** **Avoid critical information or actions at the bottom of a sidebar**: people often **move a window so its bottom edge is hidden**.

#### visionOS
- **should** **If the hierarchy is deep, use a sidebar inside a tab of a tab bar** for **secondary navigation** in that tab, and **make sure sidebar selections don't change which tab is open**.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Position | leading side of a view |
| Purpose | navigate between app areas or top-level collections (folders, playlists) |
| Max hierarchy | **2 levels**; deeper → split view with a content list |
| Group titles | succinct, descriptive, unnecessary words omitted |
| Default hidden? | **No**, keep discoverable |
| Hide/show | iPadOS edge swipe · macOS button and View ▸ Show/Hide Sidebar · visionOS rarely needed |
| macOS sizes | small · medium · large (People change it in General settings) |
| macOS window resize | may auto-collapse/reveal |
| Bottom edge | no critical info or actions |
| iOS/iPadOS adaptive style | `sidebarAdaptable`: start as sidebar **or** tab bar, button to switch, adapts to width/rotation/resizing |
| Sidebar-only | `NavigationSplitView` / `UISplitViewController` |
| Icon colour | accent colour by default; follow macOS system accent; fixed colours sparingly (Mail VIP = yellow) |
| Material | floats in the Liquid Glass layer; content extends beneath (scroll or background extension) |
| visionOS | sidebar in a tab; selection must not switch tabs |
| Developer docs | SwiftUI `sidebarAdaptable`, `NavigationSplitView`, `sidebar` list style, `backgroundExtensionEffect()` · UIKit `UICollectionLayoutListConfiguration` (+ `.Appearance.sidebar`), `UISplitViewController` · AppKit `NSSplitViewController` |
| Video | "Elevate the design of your iPad app" (WWDC25) |
| Related HIG pages | Split views ✓ · Tab bars ✓ · Layout ✓ CRITICAL |

## Visual notes (from screenshots)
- **Hero:** a card whose left ~75 % is pale pink and right ~25 % a darker red-pink panel (the content area). At the top, a **round sidebar-toggle button** (rectangle with a leading column). Below: a big bold **"Section"** heading with a **chevron at the right** (the collapsible section), then three rows **Item 1, Item 2, Item 3**, each with a **folder icon at the leading edge, the name, and a star at the trailing edge**. **Item 1 is selected**: a **full-width red capsule** with white icon, text and star. **Dashed guide lines** mark the **leading icon column**, the **text start** and the **trailing star column**, and a **vertical double-headed arrow** marks the **row height**: the picture is about consistent alignment and row rhythm, no numbers **(from screenshot)**.
- **Extend content beneath (catalog `sidebars-01`):** iPad **Landmarks** app in light mode, status bar "**9:41 Mon Jun 9**", a round **sidebar button** and a **Back** chevron button on the photo; the sidebar lists **Landmarks (building), Map, Collections (book)** with **indigo/blue-violet icons** and black labels; a large **cherry-blossom photo** fills the top of the detail area with a **"Mount Fuji"** heading and body text below. **✗:** the sidebar is **plain white**, the photo **stops at the sidebar edge**. **✓:** the same photo is **mirrored, blurred and faded** into the sidebar area, ending in white lower down, so the sidebar seems to float over an extended picture. The ✗ and ✓ badges (grey circled X, green circled check) sit below the pair.
- **visionOS Music sidebar:** a warm grey glass window in a room. A **"Library / All Music"** heading with a **round "···"** button at the top; rows **Recently Added, Artists, Albums, Songs, Made For You** (each with an outline icon); a **Playlists section with a collapse chevron** and rows **All Playlists** (selected: **lighter glass pill**), **Good Vibes Only, Indie Anthems, Family Dance Party**. To the **left of the window**, a **vertical capsule of six round icons** (play, grid, screen, radio waves, a music-note tile selected in white, magnifier) = the **tab bar**, so the sidebar is **inside the Music tab**. The detail pane titled **"Playlists / All 254 Playlists"** has a **"Search in Playlists"** field with a mic and **grey placeholder cards** **(from screenshot)**. There is **no dark variant** (fetch shows light only).
- **Developer note callout** (grey outlined card, neutral) **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Sidebars · Best practices · Platform considerations · Resources · Change log; side navigation shows **Navigation and search** with **Sidebars** ringed in the focus outline; Related: **Split views, Tab bars, Layout**; Developer documentation (five items); **Videos: one card** with a WWDC25 thumbnail showing the red/yellow/green **window controls** and a pointer, title "**Elevate the design of your iPad app**".
- The page has **1 ✗/✓ pair** (catalog `sidebars-01`), **no videos to measure**. Fetch script run; existing catalog IDs unchanged, total 133. Nothing is measured.

## Web translation
The sidebar is a **core web pattern** (`<aside>` with primary navigation). The HIG adds *what to keep in it*, *how deep*, *how it hides* and *how it sits with content*.

| HIG rule | Web implementation |
|---|---|
| Leading-side navigation between areas / top-level collections | `<aside><nav aria-label="Primary">…<ul>` at the **inline-start** (`inset-inline-start`, so RTL mirrors it: `right-to-left.md`); the current item has `aria-current="page"` and a **visible selected state that isn't colour alone** (filled pill + text weight). Items are links (real URLs), not click handlers. |
| Uses lots of space → tab bar when tight; adaptive style with switch | Container/media query (CONV: collapse the sidebar below ~**768 px**, the same breakpoint as `column-views.md`): wide = **sidebar**, narrow = **bottom tab bar** (top-level areas) or **off-canvas drawer**. Offer **the button that toggles between them** where both make sense, restore the person's choice, and **react to resize/rotation** without losing scroll or selection. On phones **start with the tab bar** and put less-used areas in an overflow/"More" sidebar (Apple: tab bar first on iOS/iPadOS). |
| Extend visually rich content beneath (glass sidebar) | The sidebar is a **glass/control layer over content** (`materials.md` MATERIALS GATE): `position: sticky`/absolute sidebar with `backdrop-filter: blur() saturate()` and a **solid fallback** for Reduce Transparency/Increase Contrast; the content **continues under it** either by **horizontal scroll** or a **background extension**: duplicate the edge of the hero image in a pseudo-element with `transform: scaleX(-1)`, `filter: blur(…)`, a `mask-image` fade, sized to the sidebar width. Text on it still meets **≥ 4.5:1** (`color.md`). Don't extend under sidebars that hold dense text without the fallback. |
| Let people customise contents and order | An **"Edit Sidebar"** mode: drag handles (with keyboard **Move up/Move down**), hide/show toggles, reset to default; **persist per user** (profile/local storage) and keep the URL structure stable (`drag-and-drop.md`, `undo-and-redo.md`). |
| Two levels max, disclosure controls | Section headings (Title Case per `writing.md`) that collapse via `<button aria-expanded aria-controls>` + rotating chevron (`disclosure-controls.md`); **remember expansion**; never a third nesting level: use **sidebar → content list → detail** (a 3-pane split: `split-views.md`) or a tree only for real file hierarchies (`outline-views.md`, `role="tree"`). |
| Succinct group labels | Nouns, no filler ("Playlists", not "Your Playlists Collection"); truncate with ellipsis + full name in the accessible name. |
| Familiar symbols, custom symbol instead of bitmap | Lucide/Phosphor/Ionicons for standard items; **custom icons as inline SVG** (`currentColor`), **never bitmaps or SF Symbols artwork** (`icons.md`, `sf-symbols.md`). |
| Hide/show the sidebar; not hidden by default | A **toggle button** in the toolbar (`aria-expanded`, `aria-controls`, tooltip "Hide Sidebar"/"Show Sidebar"), the same in the **View menu**/command palette (`the-menu-bar.md`), a **keyboard shortcut** (CONV, e.g. ⌘/Ctrl + \\ ), **edge-swipe to open** the drawer on touch; default **open** on wide screens; restore the last state. When hidden, focus returns to the toggle. |
| Icon colours serve a purpose; follow accent | Icons use **`var(--accent)`** (the app's accent token, `color.md`) or the neutral label colour; **honour a user-chosen accent** (settings + `accent-color`); **fixed colours only sparingly** and with meaning (a yellow VIP star); never colour as the only cue. |
| macOS sizes small/medium/large | A **density** setting ("Sidebar Icon Size": Small/Medium/Large; Title Case labels) mapping to row height + icon size + text size tokens (CONV values; Apple gives none). Rows still meet **hit-region rules**: ≥ **44 px** at touch widths, **24 px** floor everywhere (`buttons.md` gate). |
| Auto-hide/reveal on window resize | Collapse to icons-only or an overlay drawer as the container narrows; reveal it again when it widens; **don't reflow the content** each time (animate `transform`, respect `prefers-reduced-motion`). |
| No critical info/actions at the bottom | Don't pin **Sign Out, Upgrade, Help or the only Save** to the sidebar's bottom edge: mobile browser chrome, short windows and `100vh` bugs hide it. Use `100dvh` / `min-height` and `position: sticky` carefully (`layout.md` gate) and keep key actions **in the top area or the toolbar**. |
| visionOS: sidebar inside a tab, selection must not change the tab | Secondary navigation **within** a top-level section: sidebar items change the **sub-route** only; the top-level tab stays selected, and each tab **remembers its own sidebar selection** (`aria-current` at both levels, breadcrumbs optional: `path-controls.md`). |
| Sidebar with search | A field **at the top of the sidebar** filters the tree (`search-fields.md`). |

Field-note cross-links:
- `hig/components/layout/split-views.md` (✓): the sidebar is the **primary pane**; resizable dividers, min/max widths (CONV 200–320 px there), pane toggles, and the **3-pane** answer for deep data.
- `hig/foundations/layout.md` (✓ CRITICAL): the **background extension effect** and the glass sidebar (`layout-01` visual); this page's `sidebars-01` is the same idea for the sidebar edge.
- `hig/foundations/materials.md` (✓ CRITICAL): glass layer vs content layer, text on materials, fallbacks; `hig/foundations/color.md` (✓ CRITICAL): accent colour, contrast.
- `hig/components/menus/toolbars.md` (✓): the sidebar toggle button lives in the toolbar; `the-menu-bar.md` (✓): View ▸ Show/Hide Sidebar.
- `hig/components/layout/disclosure-controls.md`, `outline-views.md`, `lists-and-tables.md`, `tab-views.md` (✓).
- Ingested since: Tab bars (✓ `tab-bars.md`). Windows (✓ `components/presentation/windows.md`).
- No conflict with a field note.

## Checklist
- [ ] The sidebar holds **areas or top-level collections**, at the **leading side**, with the current item marked (not colour alone).
- [ ] On narrow screens it **turns into a tab bar or drawer**; a tab bar is considered first on phones; the switch and the last choice are remembered.
- [ ] **No more than two levels**; groups use disclosure controls and short titles; deeper data uses a content list (split view).
- [ ] Rich content **extends beneath a glass sidebar** (scroll or mirrored/blurred extension), with a **solid fallback** and readable text.
- [ ] People can **reorder/hide items** (with keyboard alternatives) and the choice persists.
- [ ] The sidebar can be **hidden and shown** (toolbar button, View menu/command, shortcut, swipe) and is **not hidden by default**.
- [ ] Icons are familiar, drawn as SVG (not bitmaps); colour follows the **accent** and **fixed colours have a reason**.
- [ ] A **density/size** option exists where the audience is desktop; rows meet hit-region rules.
- [ ] **No critical actions at the bottom edge**; layout uses `dvh` and survives short windows.
- [ ] Sub-navigation inside a tab (visionOS-style) **doesn't switch the top-level tab**.

## Related
- Ingested: Split views (✓), Layout (✓ CRITICAL), Materials (✓ CRITICAL), Color (✓ CRITICAL), Disclosure controls (✓), Outline views (✓), Lists and tables (✓), Tab views (✓), Toolbars (✓), The menu bar (✓), Search fields (✓), Path controls (✓), SF Symbols (✓), Icons (✓), Buttons (✓ CRITICAL).
- Ingested since: **Tab bars** (✓ `hig/components/navigation/tab-bars.md`).
- Developer docs: SwiftUI `sidebarAdaptable`, `NavigationSplitView`, `sidebar`, `backgroundExtensionEffect()`; UIKit `UICollectionLayoutListConfiguration`, `UISplitViewController`; AppKit `NSSplitViewController`.
- Video: "Elevate the design of your iPad app" (WWDC25).
