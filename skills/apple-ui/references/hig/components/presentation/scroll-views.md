# Scroll views
Source: https://developer.apple.com/design/human-interface-guidelines/scroll-views · Section: Components › Presentation · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (all six icons lit on the platform strip **(from screenshot)**; every platform has its own section) · Ingested: 2026-09-29 · Apple last updated: **June 8, 2026** (scroll edge effects guidance updated; earlier rows: March 24, 2026 Look to Scroll in visionOS, July 28, 2025 scroll edge effects added, February 2, 2024 visionOS scroll indicator artwork, December 5, 2023 visionOS scroll indicator and window layout, June 5, 2023 watchOS). One DocC fetch, read in full. 9 screenshots (light-mode page, hero → the first three change-log rows) were compared with the fetched text and image alt text line by line: everything matches. **Read from the fetch only:** the **last three change-log rows** (the last screenshot ends inside the table), the **video's motion** (jog-bar tick marks; only the poster frame is in the screenshots) and the dark variants of the images. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker (the repo's materials token file already has a scroll-edge gradient, see § Web translation). The page has **no numbers**.

## In one line
A scroll view lets people **see content larger than the view by moving it vertically or horizontally**. The view has **no appearance of its own**, only a **translucent scroll indicator** that shows position (start / middle / end). **Keep system scrolling gestures, keyboard shortcuts and elastic behaviour**, **make it obvious when there is more**, **never nest same-orientation scrollers**, offer **page-by-page scrolling with an overlap** where it fits, **auto-scroll only as much as needed**, **bound zoom**, and use a **scroll edge effect only where content scrolls behind floating controls (automatic style preferred, one per view)**.

## Rules

### Framing (intro)
- The scroll view **itself has no appearance**, but can show a **translucent scroll indicator**, typically **after people begin scrolling**.
- Indicators **vary per platform** but **all give visual feedback**; in **iOS, iPadOS, macOS, visionOS and watchOS** the indicator shows whether the visible content is **near the beginning, middle or end**.

### Best practices
- **should** **Support default scrolling gestures and keyboard shortcuts.** People expect system scrolling **everywhere**. If you build **custom scrolling**, make sure your indicators use the **elastic behaviour** people expect.
- **should** **Make it apparent when content is scrollable.** Indicators aren't always visible; **partial content at an edge** signals more in that direction. People usually try scrolling anyway, but it's **considerate to point it out**.
- **should** **Avoid a scroll view inside another with the same orientation**: it makes an **unpredictable, hard-to-control interface**. **Horizontal inside vertical (or vice versa) is fine.**
- **may** **Support page-by-page scrolling** where it suits the content: scrolling **a fixed amount per interaction** instead of continuously. On most platforms you **define the page size** (typically the view's current height or width) and an interaction that **scrolls one page at a time**. To keep context, define a **unit of overlap** (a **line of text**, a **row of glyphs**, **part of a picture**) and **subtract it from the page size** (`PagingScrollTargetBehavior`).
- **may** **Scroll automatically to help people find their place** when relevant content is no longer in view (people start almost all scrolling themselves):
  - an operation **selects content or moves the insertion point somewhere hidden** (e.g. **find** locates text → scroll it into view);
  - people **start entering information where it isn't visible** (insertion point on another page → scroll back **as soon as they begin typing**);
  - the **pointer moves past the view's edge during a selection** → **follow the pointer** in that direction;
  - people **select something, scroll elsewhere, then act on the selection** → **scroll the selection into view before acting**.
  - **In all cases scroll only as much as necessary** to keep context (if part of a selection is visible, don't scroll the whole selection into view).
- **should** **If you support zoom, set sensible maximum and minimum scale values** (zooming until one character fills the screen is pointless).

### Scroll edge effects
- **In iOS, iPadOS and macOS** a **scroll edge effect** creates **visual separation between interface elements such as toolbars and the scrolling content behind them**. With **custom bars**, you may **add it manually** if the top layer needs clarity, or change the style from **automatic** to **hard** or **soft**.
  - **Hard**: **more opaque blur with a defined edge** at the bar's bottom.
  - **Soft**: **variable blur that fades gradually** toward the bar's bottom.
- **should** **Prefer the automatic style.** It gives a **more opaque separation** for **top toolbars with many controls**, **text outside Liquid Glass controls**, and **pinned table headers**. If you choose **soft**, **test thoroughly** that controls stay legible in different contexts.
- **must** **Only use a scroll edge effect when a scroll view is behind floating interface elements.** It's **not decorative** and **doesn't block or darken like an overlay**; it exists so **controls stay visually distinct**.
- **should** **Apply one scroll edge effect per view.** In **split views on iPad and Mac** each pane may have its own; keep them **consistent in height** for alignment. (Developer: `ScrollEdgeEffectStyle`, `UIScrollEdgeEffect.Style`, `NSScrollEdgeEffectStyle`.)

### Platform considerations

#### iOS, iPadOS
- **may** **Show a page control when the scroll view is in page-by-page mode**: it shows **how many pages/screens/chunks exist and which is visible** (Weather: movement between saved locations). **If you show a page control, don't show the scroll indicator on the same axis** (redundant controls confuse).

#### macOS
- The scroll indicator is commonly a **scroll bar**.
- **should** **Use small or mini scroll bars in a panel** when space is tight (panels coexisting with other windows), and **use the same size for all controls in that panel**.

#### tvOS
- Views can scroll but **aren't distinct objects with scroll indicators**; when content exceeds the screen the **system scrolls automatically to keep focused items visible**.

#### visionOS
- The scroll indicator has a **small, fixed size** (communicates efficient scrolling without big movements) and a **predictable place**: **vertically centred at the trailing edge** for vertical scrolling, **horizontally centred at the window's bottom edge** for horizontal scrolling.
- When people **start swiping in the direction they want to scroll**, the indicator **appears at the window's edge**, reinforcing the gesture and showing **current position and overall length**. When people **look at the indicator and begin a drag**, it becomes a **jog bar**: they **control scrolling speed instead of content position**, and **tick marks speed up or slow down** with small gesture adjustments (video: a long Notes page dragged quickly, ticks match the speed).
- **should** **Account for the indicator's size**: it is **a little thicker than on iOS**; with **tight margins**, **increase them** so it doesn't overlap content.
- **Look to Scroll:** people can scroll **with their eyes only**, starting when they **look near the boundary** of the scroll view (**top/bottom** for vertical, **sides** for horizontal). Examples: look at the **bottom edge of a Safari window** to scroll down; look at an **album on the trailing edge in Music** to scroll it toward the centre. It works **alongside gestures** (people choose). Developer: `look`, `ScrollInputKind`.
  - **should** **Support Look to Scroll for reading or browsing views**; it **isn't on by default**, so **add it per scroll view**.
  - **should** **Avoid it for secondary content**: in views with **UI controls or dense information needing quick, precise scrolling**, support standard gestures only (Notes offers it in the **main view**, not in the **notes list**).
  - **should** **Be consistent**: support it in **all similar views** (e.g. every collection view of videos).
  - **should** **Define clear scroll areas**: prefer views **full width or full height of the window** (generous space, clear edges); if inset (Notes), **provide clear boundaries**.
  - **should** **Remove custom scroll effects/animations first** (parallax, scroll-position-driven changes) because they can make Look to Scroll **behave unexpectedly**.

#### watchOS
- **should** **Prefer vertically scrolling content**: people use the **Digital Crown**; for a single list/content view, rotating it scrolls vertically when content is taller than the display.
- **should** **Use tab views for page-by-page scrolling**: watchOS shows tab views as **pages**; in a **vertical stack** the Crown moves through **full-screen pages** and the system shows a **page indicator next to the Crown** (position within the page and within the set). See *Tab views*.
- **should** **When paging, limit each page to one screen height**: clearer purpose, more **glanceable**. Long pages still work: the **page indicator expands into a scroll indicator** when needed. Use **variable-height pages sparingly, after fixed-height pages**.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Scroll view appearance | none (only a translucent indicator after scrolling starts) |
| Indicator meaning | near beginning / middle / end (iOS, iPadOS, macOS, visionOS, watchOS) |
| Nesting | same orientation: avoid · perpendicular: fine |
| Paging | page = view height/width; subtract an overlap unit (line, glyph row, part of a picture) |
| Auto-scroll triggers | hidden selection/insertion point · typing elsewhere · pointer past edge during selection · act on off-screen selection |
| Auto-scroll amount | only as much as needed |
| Zoom | set max and min scale |
| Scroll edge effect styles | **automatic** (preferred) · **hard** (opaque blur, defined edge) · **soft** (variable blur fade) |
| Scroll edge effect use | only when scroll content is behind floating elements; **one per view**; consistent height across split panes |
| iOS/iPadOS | page control for paged mode; no same-axis scroll indicator |
| macOS | scroll bar; small/mini in panels, same size for all controls in the panel |
| tvOS | focus-driven automatic scrolling, no indicators |
| visionOS indicator | small, fixed size, slightly thicker than iOS; trailing edge centred (vertical) / bottom edge centred (horizontal); jog bar with tick marks; **Look to Scroll** (per view, reading/browsing only) |
| watchOS | vertical, Digital Crown; tab-view pages; ≤ 1 screen per page; indicator expands into a scroll indicator |
| Developer docs | SwiftUI `ScrollView`, `PagingScrollTargetBehavior`, `ScrollEdgeEffectStyle`, `look` / `ScrollInputKind` · UIKit `UIScrollView`, `UIScrollEdgeEffect.Style` · AppKit `NSScrollView`, `NSScrollEdgeEffectStyle` · WatchKit `WKPageOrientation` |
| Related HIG pages | Page controls ✓ · Gestures (not yet ingested) · Pointing devices (not yet ingested) · Tab views ✓ · Toolbars ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a **red-tinted picture placeholder** (a rounded frame holding a **circle "sun" and two mountain shapes**) that is **cut off at the bottom edge** (content larger than the view), and a **dark maroon vertical pill at the top-right** = the **scroll indicator** **(from screenshot)**.
- **Scroll edge effect pair (catalog `scroll-views-01`, light):** an iPhone top half over a **full-bleed palm-tree photo** with a top toolbar (**round Back**, title **"Title"**, **round "+"**) and the status bar **"9:41"**. **Hard:** the photo behind the bar is **blurred and darkened into an opaque-looking band with a clear horizontal edge** under the toolbar (the top of the tree is hidden behind the band). **Soft:** **no visible band**; the tree's top is **blurred progressively and fades into the bar area**, with the buttons floating as glass circles. Captions "Hard scroll edge effect" / "Soft scroll edge effect" are page text.
- **visionOS Notes poster (video, still frame):** a living room with a **Notes window**: a **Landscaping** note dated **"January 17, 2024 at 11:17 AM"**, the line **"Look into colorful annuals and ground cover plants for the backyard"** and **hand-drawn plant illustrations** (a yellow maple leaf labelled "FULL MOON (ACER SHIRASAWANUM 'AUREUM')", a magenta feathery plant labelled "RED DRAGON (ACER PALMATUM 'DISSECTUM ATROPURPUREUM'), smallish cultivar, 6–8 ft, upright, pendulous growth habit"); a **thin vertical scroll indicator at the note's trailing edge**, a **bottom toolbar** and **page dots/indicator** below the window; a **"Play ▷" link** under the poster **(from screenshot)**.
- **Text-only sections in the screenshots:** Look to Scroll, watchOS and the best-practice bullets show **no pictures**.
- **Page chrome (from screenshot):** platform strip with **all six icons lit**; TOC Scroll views · Best practices · Scroll edge effects · Platform considerations · Resources · Change log; side navigation shows **Presentation** open with **Scroll views** in bold; Resources: **Related** Page controls, Gestures, Pointing devices; **Developer documentation** five items (`ScrollView`, `UIScrollView`, `NSScrollView`, `WKPageOrientation`, `look`); **Change log** first three rows visible (June 8, 2026 · March 24, 2026 · July 28, 2025).
- The page has **1 neutral pair** (catalog `scroll-views-01`) and **1 video** (visionOS jog bar; not measured, motion is not the point of the note). No ✗/✓ pairs. Fetch script run; existing catalog IDs unchanged, total 142.

## Web translation
On the web scrolling is **native**, so the main rule is **don't break it** and **design the edges**.

| HIG rule | Web implementation |
|---|---|
| Keep default gestures, keyboard shortcuts, elastic behaviour | Use **native overflow scrolling** (`overflow: auto`) so **wheel, trackpad, touch, Space/Shift+Space, PgUp/PgDn, Home/End, arrows and momentum/overscroll** just work; **no scroll-jacking** (`wheel` handlers that call `preventDefault`), no JS-only scroll physics; custom scrollbars only via `scrollbar-width`, `scrollbar-color`, `scrollbar-gutter`; keep scroll containers **focusable** (`tabindex="0"` + label) when they have no focusable child (WCAG). `overscroll-behavior` controls chaining (below). |
| Make scrollability apparent | **Peek** the next item (cards cut at the edge, `scroll-padding` + partial last item), **edge fades** or shadows that appear only when there is more (scroll-driven animations or an `IntersectionObserver` sentinel), an **always-visible thin scrollbar** on desktop for important scrollers (`scrollbar-width: thin`) and a "**more**" affordance (chevron/arrow buttons) on horizontal carousels; don't rely on hover. |
| No same-orientation nesting | **Avoid vertical-inside-vertical** (scroll traps): make the inner block grow, or give it `overscroll-behavior: contain` **and** a visible boundary and keyboard exit; **horizontal carousels inside a vertical page are fine**, but keep their vertical wheel/touch passing through (`touch-action: pan-y`, no `overflow-y` on them). |
| Page-by-page with overlap | **`scroll-snap-type: y|x mandatory/proximity`** + `scroll-snap-align: start` per page; page size = the container's `clientHeight/Width` **minus an overlap** (one line: `1lh`, a row, or ~10–15 % of the page: CONV) for PageUp/Down and paging buttons (`el.scrollBy({top: el.clientHeight - 1lh})`); `scroll-padding` for sticky headers. Keep keyboard paging working. |
| Page control + no same-axis scrollbar | With **dots** (`page-controls.md`) hide the **scrollbar on that axis** (`scrollbar-width: none`) **only if** dots, arrows and keyboard give the same control; never remove the only scroll cue. |
| Auto-scroll only as needed | `element.scrollIntoView({ block: "nearest", inline: "nearest" })` (never `center` by default) for **search hits**, **focus** (browsers do it) and **caret while typing**; add **`scroll-margin`** so sticky headers/footers don't cover the target (WCAG 2.4.11); **edge auto-scroll during drag-selection** (pointer past the edge → scroll in that direction, speed by distance); **before acting on an off-screen selection, scroll it into view**; don't move the page while the person is actively scrolling; honour **`prefers-reduced-motion`** (`behavior: "auto"`). |
| Bound zoom | **Never `user-scalable=no` or `maximum-scale=1`** on documents (accessibility); for **custom zoomable viewers** (images, maps, canvases) **clamp the scale range** (CONV: min = fit-to-view, max = enough to read the smallest detail, e.g. 4–8×) and support pinch, double-click and `+ / −` keys. |
| Scroll edge effect: only under floating controls | Apply it to **sticky/floating bars over scrolling content** only (`position: sticky/fixed` toolbar/tab bar); **no decorative gradients** at the edges of plain scrollers. |
| Automatic style preferred (opaque for dense bars) | Choose **hard** (backdrop blur + **~0.6–0.85 opaque tint + hairline bottom edge**) for **toolbars with many controls, text not inside glass controls, sticky table headers**; **soft** (`mask-image` linear/progressive gradient over a blur layer, `--scroll-edge-size`) only for **light bars of glass-backed controls over imagery**, and **verify contrast at the worst-case content behind it** (`color.md`, Color gate; both light and dark, over images). The repo's `tokens/apple-materials.css` `.scroll-edge-top/-bottom` is the **soft (gradient)** style; use an opaque-tint + hairline variant for the **hard** style (CONV; token file unchanged). |
| One effect per view; consistent split panes | One edge effect **per scroll container/bar**; in a **split layout** each pane may have one, with the **same bar height** so the edges align (`split-views.md`, `toolbars.md`). |
| macOS: small/mini scroll bars in panels | In **panels/popovers/inspectors** use **`scrollbar-width: thin`** consistently for **all** scrollers in that panel (`panels.md`, `popovers.md`); keep hit area for dragging ≥ 12 px on pointer devices (CONV). |
| tvOS: focus-driven scrolling | **10-foot UIs**: scroll by **moving focus** (`focus()` + `scrollIntoView({block:"nearest"})`), **no scrollbars**, keep the focused row fully visible with margins. |
| visionOS indicator: small, predictable, slightly thicker; margins | **Overlay scrollbars sit at the trailing edge (vertical) / bottom (horizontal)**: use **`scrollbar-gutter: stable`** or **extra inline padding** so an overlay/thick thumb doesn't cover text; keep custom thumbs **small, fixed-size and in the standard place**; optional **jog/scrub bar** for very long documents (drag thumb = speed control) is a CONV enhancement, not required. |
| Look to Scroll (eye scrolling) | Only relevant on gaze devices (visionOS Safari handles it natively): **don't intercept edge zones** with your own UI; make scroll areas **full width/height or clearly bounded**; **remove scroll-linked parallax** on reading/browsing pages (or gate it behind `prefers-reduced-motion`), keep standard scrolling in **dense/control-heavy lists**. |
| watchOS: vertical paging, ≤ 1 screen per page | **Small-screen sections**: `100dvh` pages with `scroll-snap-type: y mandatory`, an inline-end **dot rail that turns into a scrollbar** on tall pages; fixed-height pages first (`page-controls.md`). |
| Scroll position and state | Preserve **scroll position on back/forward** (`history.scrollRestoration = "auto"`), keep per-tab scroll state (`tab-bars.md`), and **don't reset on re-render**. |

Field-note cross-links:
- `hig/components/presentation/page-controls.md` (✓): paged scrolling indicators, scrubbing, no animation while scrubbing; `hig/components/layout/tab-views.md` (✓): watchOS vertical pages.
- `hig/foundations/materials.md` (✓ CRITICAL) and `tokens/apple-materials.css`: the **scroll edge** gradient token (soft style) and the **layer discipline**; `hig/foundations/layout.md` (✓ CRITICAL): use a scroll edge effect instead of a solid background under controls; **Layout gate**: no horizontal overflow at 200 % text, `dvh`, safe areas.
- `hig/components/menus/toolbars.md` (✓): floating bars over scrolling content; `hig/components/navigation/tab-bars.md` (✓): floating tab bar minimising on scroll and per-tab state.
- `hig/components/presentation/panels.md`, `popovers.md` (✓): small scrollbars in panels; `hig/components/layout/split-views.md` (✓): per-pane edge effects.
- `hig/foundations/motion.md` (✓): reduced motion; `hig/foundations/accessibility.md` (✓): zoom and focus visibility.
- Not yet ingested: **Gestures**, **Pointing devices**.
- **Refinement, not a conflict:** the field notes and `materials.md` recommend a **gradient fade instead of a hard border** under bars; this page adds that the **automatic (more opaque) style** is preferred for **dense toolbars, non-glass text and pinned table headers**. Follow: gradient/soft for light glass controls over imagery, **opaque + hairline** for dense bars and sticky table headers.

## Checklist
- [ ] Native scrolling is intact (wheel, touch, keyboard, momentum); no scroll-jacking; scrollers are keyboard-focusable when they hold no focusable child.
- [ ] Scrollable regions **look scrollable** (peeking content, edge fade, thin scrollbar, arrows).
- [ ] **No same-orientation nested scrollers**; horizontal carousels in vertical pages pass vertical gestures through.
- [ ] Paged scrolling (if used) has **snap + overlap**, keyboard paging and, where appropriate, a **page control** (and no redundant same-axis scrollbar unless controls duplicate it).
- [ ] Auto-scroll uses **`block: "nearest"`**, respects sticky-header **`scroll-margin`**, follows the pointer during drag selection, and never fights the user.
- [ ] Zoom is **not disabled** on documents; custom zoomable viewers **clamp min/max scale**.
- [ ] A **scroll edge effect** exists **only** under floating bars over scrolling content; **one per bar/pane**; style matches density (**hard/opaque for dense bars, tables headers; soft only for light glass controls**); contrast verified over worst-case content.
- [ ] Panels/popovers use **one consistent thin scrollbar size**.
- [ ] Overlay/thick scrollbars **don't cover content** (gutter or padding).
- [ ] Scroll-linked parallax is removed or gated (motion/gaze); scroll position is restored on navigation.
- [ ] Small-screen paging pages are **one screen tall**, variable-height pages last.

## Related
- Ingested: Page controls (✓), Tab views (✓), Tab bars (✓), Toolbars (✓), Split views (✓), Panels (✓), Popovers (✓), Materials (✓ CRITICAL), Layout (✓ CRITICAL), Color (✓ CRITICAL), Motion (✓), Accessibility (✓).
- Not yet ingested: **Gestures**, **Pointing devices**.
- Developer docs: SwiftUI `ScrollView`, `ScrollEdgeEffectStyle`, `look`; UIKit `UIScrollView`; AppKit `NSScrollView`; WatchKit `WKPageOrientation`.
