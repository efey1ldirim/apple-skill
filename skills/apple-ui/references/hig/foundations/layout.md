# Layout — ⚠️ CRITICAL (zero-tolerance gate)
Source: https://developer.apple.com/design/human-interface-guidelines/layout · Section: Foundations ·
Supported platforms: all six · Ingested: 2026-09-28 · Screenshots: 23 (dark-mode page, banner →
change log); text cross-checked end to end against the fetched content — matching.
**[user decision] Marked CRITICAL like Color**: every layout ships only after the **LAYOUT GATE**
in `SKILL.md` passes (tokens `tokens/apple-layout.css`, static checker `tools/check-layout.mjs`,
live probe `tools/layout-probe.js`).

Apple change log: **2026-09-09 updated guidance to reflect current best practices** (page banner) ·
2025-09-09 specs for iPhone 17 / Air / 17 Pro / 17 Pro Max, Watch SE 3, Series 11, Ultra 3 ·
2025-06-09 Liquid Glass guidance · 2025-03-07 specs iPhone 16e, iPad 11", iPad Air 11"/13" ·
2024-09-09 specs iPhone 16 family, Watch Series 10 · 2024-06-10 minor corrections · 2024-02-02
avoiding system controls in iPadOS layouts; specs iPad Air 10.9", iPad mini 8.3" · 2023-12-05
centering content in visionOS windows · 2023-09-15 specs iPhone 15 family, Watch Ultra 2, SE ·
2023-06-21 visionOS · 2022-09-14 specs iPhone 14 family, Watch Ultra.
**Important:** the 2026-09-09 revision **no longer contains the device screen-size / safe-area
specification tables** that the older change-log rows refer to (the page's own table of contents
has no "Specifications" section). **Do not use remembered device point sizes as Apple guidance**;
design by size class / available space (see below), never by device model.

## In one line
Layout is structure: most important content top-leading, aligned and indented to show hierarchy,
grouped by space/containers/separators, disclosed progressively, controls distinct from content
(Liquid Glass + scroll-edge effect, not solid bars), and one familiar layout that **adapts to
available space** (size classes, text size, locale, safe areas) instead of to device type.

## What the page says

### Framing
- Layout gives people the structure to understand content from the first moment; familiar
  control/content relationships make features discoverable and the app feel at home on each
  platform. Apple provides templates and layout guides (Apple Design Resources).

### Visual hierarchy
- **must — Order content by relative importance.** Reading order is top→bottom, **leading→trailing**:
  put the most important items near the **top and leading side**. For RTL, prefer standard
  components that flip automatically (see Right to left).
- **must — Align to make scanning easy; indent to convey hierarchy.** Aligned items read as related;
  **indented items read as subordinate** to the item above. Use alignment/indentation deliberately.
- **must — Group related items** with **negative space, container shapes, or separator lines** to
  show what is related vs unrelated.
- **should — Progressive disclosure**: too much content and too many choices slow people down; use
  disclosure triangles, menus, nested views; or scrollable sections for extra content (esp. media
  apps — video, music, books).
- **must — Differentiate controls from content.** Use **Liquid Glass** for controls where supported.
  **Instead of a solid or semi-opaque background colour beneath controls, use a scroll edge effect**
  to lift controls above content (see Scroll views). **Extend full-screen background content under
  sidebars, toolbars and tab bars** to fill the whole screen/window.
  - If a full-bleed image would be covered by sidebars/inspectors in important parts, use a
    **background extension effect**: the image is **flipped and blurred** and mirrored under the
    adjacent component so it appears to continue beneath it (`backgroundExtensionEffect()`,
    `UIBackgroundExtensionView`). (Screenshot / visual **layout-01**: iPad Landmarks app — sidebar
    Landmarks / Map / Collections on the leading edge; Mount Fuji photo fills the top of the content;
    the photo blurs toward the top where toolbar buttons (share, heart, bookmark, info) float in
    glass on the trailing edge; under the sidebar the photo continues flipped and blurred.)

### Adaptability
- Apps must adapt to display sizes, orientation changes, window sizes and multitasking. iOS, iPadOS,
  tvOS and visionOS define environment characteristics; use SwiftUI / Auto Layout.
- Characteristics to handle: regular/compact **horizontal and vertical size classes** · screen sizes
  · orientations and aspect ratios · system features like the **Dynamic Island** · external displays,
  **Display Zoom**, resizable windows on iPad and Mac · **text-size changes** · locale features
  (LTR/RTL direction, date/time/number formats, font variation, **text length**).
- **must — Adapt gracefully and consistently**: stay familiar through rotation, resizing, extra
  displays, device switches — respect system **safe areas, margins and guides**; fine-tune with
  layout modifiers.
- **must — Even orientation-locked apps** (e.g. landscape-only games) must resize well.
- **must — Be prepared for text-size changes (Dynamic Type)**: horizontally adjacent views may need
  to **stack vertically**; rows/containers must **grow in height** so text isn't cropped or
  overlapping; single-line rows may need **multiple lines**. (Unity: Apple's accessibility plug-in.)
- **must — Preview on multiple devices, size classes, localizations and text sizes**; test the
  **largest and smallest** layouts first; **Device Hub** (Xcode) for clipping checks, incl. iPad
  resizing and iPhone Mirroring on Mac.
- **should — Scale background artwork on display changes**: if it appears cropped, letterboxed or
  pillarboxed, **don't change its aspect ratio — scale it to fill**; windows can be very wide/short
  or tall/narrow, so artwork may need to extend beyond the usual visible area.

#### Size classes (iOS, iPadOS)
- Two dimensions × two values: horizontal **compact** (narrow) / **regular** (wide); vertical
  **compact** (short) / **regular** (tall).
- System sets them from device type, window configuration and multitasking state (full screen,
  Slide Over, mirrored iPhone on Mac); apps can be in **every combination**.
- (Visual **layout-02** + **layout-03**, four iPad illustrations with a centred window: compact width + compact
  height (small), compact width + regular height (narrow, tall), regular width + compact height
  (wide, short), regular width + regular height (large).)
- **must — Decide layout by size class, not device type or orientation** (the *idiom*): only size
  classes tell you the available space. Size classes also cover freely resized windows (iPhone
  Mirroring on macOS, iPad multitasking, iPad apps on Mac).
- **must — Consider all combinations**: a landscape-iPhone-only design (regular width, compact
  height) wastes iPad vertical space when resized to regular height; a compact-portrait-only design
  leaves empty space at regular width.
- **must — Keep functionality the same across size classes**; change only **how much** is visible
  (e.g. tab bar → **sidebar** in larger spaces; expose items that were in an overflow menu).
- **must — Keep the layout recognisable and familiar to the platform** when resized; the idiom
  doesn't change.

### Guides and safe areas
- **Layout guide** = rectangular region for positioning/aligning/spacing; system guides give
  **standard margins** and **restrict text width for readability**; custom guides allowed
  (`UILayoutGuide`, `NSLayoutGuide`).
- **Safe area** = window region not covered by hardware features or other views (toolbar, tab bar,
  status bar). **must — Respect it** so system UI and hardware (Dynamic Island) never obstruct
  content and controls (`SafeAreaRegions`, "Positioning content relative to the safe area").

### Platform considerations
- iOS, iPadOS: nothing extra.
- **macOS**: **must not — controls or critical info at the bottom of a window** (windows get dragged
  below the screen edge). **must not — content behind the camera housing** at the top edge
  (`NSPrefersDisplaySafeAreaCompatibilityMode`).
- **tvOS**:
  - **must — Safe area: inset primary content 60 pt top and bottom, 80 pt left and right**
    (TV compatibility settings / overscan). (Visual **layout-04**.)
  - **must — Padding between focusable elements**: focused items grow; don't let them overlap
    important information. (Visual **layout-05**: three tiles, the focused centre tile enlarged, red
    bands showing the padding that absorbs its growth.)
  - **Grids** (spacing between unfocused rows/columns prevents overlap on focus;
    `UICollectionViewFlowLayout` computes columns from width + spacing):

    | Columns | Unfocused content width | Horizontal spacing | Min. vertical spacing |
    |---|---|---|---|
    | 2 | 860 pt | 40 pt | 100 pt |
    | 3 | 560 pt | 40 pt | 100 pt |
    | 4 | 410 pt | 40 pt | 100 pt |
    | 5 | 320 pt | 40 pt | 100 pt |
    | 6 | 260 pt | 40 pt | 100 pt |
    | 7 | 217 pt | 40 pt | 100 pt |
    | 8 | 184 pt | 40 pt | 100 pt |
    | 9 | 160 pt | 40 pt | 100 pt |
    (Visual **layout-06**, tabs Two- … Nine-column: focused item enlarged with a "Title" caption,
    neighbours partially visible at the right/bottom edge.)
    Check: with the 80 pt side insets the usable width is 1920 − 160 = **1760 pt**; e.g. 4 × 410 +
    3 × 40 = 1760 ✓, 2/3/5/6/9 columns also = 1760 exactly; 7 columns = 1759, 8 columns = 1752
    (rounded widths). Our arithmetic — the page doesn't state the 1920 pt canvas.
  - **must — Extra vertical spacing for titled rows**: between the previous row's bottom and the
    title's centre, and between the title's bottom and the row's items.
  - **must — Consistent spacing** (otherwise it stops reading as a grid).
  - **should — Symmetric partially hidden content**: offscreen peeking items the same width on both sides.
- **visionOS** (window, volume or immersive space; this page covers windows/volumes — depth and
  scale in Spatial layout):
  - **should — Support resizing**; adapt as size changes; **keep content horizontally centred at very
    large sizes**.
  - **may — Min/max sizes** for windows, volumes and ornaments to avoid overlap when small and
    unwieldy layouts when huge — **never to prevent resizing** (Safari: resizable window, nav-bar
    ornament with a fixed max size).
  - **should — 3D content sparingly in windows**, for meaningful moments next to 2D (e.g. inline
    rocket model); **inset** it so it doesn't collide with content/controls or poke out of the window
    edge. Larger 3D → volume or immersive space.
  - **must — Supplemental content in an adjacent window, not an ornament** (ornaments = app controls
    like toolbars and playback; `defaultWindowPlacement(_:)`).
  - **must — Space around controls**: clearly identifiable, hover effect never obscures neighbours —
    **button centres ≥ 60 pt apart**.
- **watchOS**:
  - **must — At most three glyph buttons or two text buttons in a row**; full-width text buttons are
    usually better; two short side-by-side text buttons are fine **if the screen doesn't scroll**.
    (Visual **layout-07**: watch screen with a full-width capsule "Text Button" at the bottom.)
  - **should — Autorotate views people show to others** (image to a friend, QR code to a reader)
    instead of sleeping on wrist-flip (`isAutorotating`).

### Resources listed
Related: Right to left, Spatial layout, Layout and organization. Developer: Composing custom layouts
with SwiftUI. Videos: *Get to know the new design system* (WWDC25 356), *Compose custom layouts with
SwiftUI* (WWDC22 10056), *Essential Design Principles* (WWDC17 802).

## Specs & values (exact, from the page)
| Item | Value |
|---|---|
| Reading order | top → bottom, leading → trailing (flip for RTL) |
| Size classes | horizontal compact/regular × vertical compact/regular |
| tvOS safe area | 60 pt top/bottom · 80 pt sides |
| tvOS grid spacing | 40 pt horizontal · ≥ 100 pt vertical (unfocused) · widths per table above |
| visionOS control spacing | button centres ≥ 60 pt apart |
| watchOS row | ≤ 3 glyph buttons or ≤ 2 text buttons |
| Related minimums (Accessibility page) | targets 44×44 pt iOS/iPadOS/watchOS (min 28), macOS 28 (min 20), visionOS 60 (min 28); ~12 pt padding around bezeled, ~24 pt around bezel-less controls; text to 200% |

## Visual notes (from screenshots)
- The page opens with a grey rounded **update banner** above the title: date (grey) + one line
  ("Updated guidance to reflect current best practices") — Apple's pattern for "this page changed".
- Hero: yellow Foundations panel with a rounded-rectangle window containing a small filled rectangle
  in the upper-leading quadrant (= "most important content top-leading").
- tvOS safe-area diagram: dark screen, dark-red border band labelled 60 / 80 / 80 / 60.
- tvOS grid demo: a right-hand vertical list of tab labels (Two-column … Nine-column) with the active
  one in white and a white underline — a vertical tab list pattern.

## Web translation (binding for web work — enforced by the LAYOUT GATE)
| HIG | Web rule |
|---|---|
| Size classes, not device | Layout by **container/viewport width** (`@container`, `min-width` media queries) — **never** by user-agent, device name, or `orientation:` media queries. Our convention: **compact width < 768 px, regular ≥ 768 px** (≈ iPad portrait split); compact height < 500 px (landscape phones). Test every combination. |
| Same functionality, different amount | Compact: tab bar / bottom nav or menu; regular: sidebar. Never drop a feature at a breakpoint — move it (overflow menu ↔ visible). |
| Safe areas | `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` + `env(safe-area-inset-*)` on every fixed/sticky edge bar: `padding-bottom: max(1.25rem, env(safe-area-inset-bottom))`; side insets in landscape. |
| Text-size changes | `rem`-based type; containers with `min-height`, never fixed `height` around text; rows wrap/stack at 200% zoom; no `white-space: nowrap` + `overflow: hidden` on primary text without a tooltip/2-line clamp; never `user-scalable=no` / `maximum-scale=1`. |
| Hierarchy | Most important top-leading; use `margin-inline-start` / `ps-*` (logical properties) so RTL flips; indent children one step (e.g. 16 px) to show subordination. |
| Grouping | Space first (8-pt rhythm: 4/8/12/16/20/24/32/48/68), then container (rounded group), then hairline separator — pick one per boundary, don't stack all three. |
| Readable width | Text column max ≈ 65–75 ch (e.g. `max-w-[38rem]` forms/settings, `34em` ledes, 980 px marketing column). |
| Progressive disclosure | `<details>`, menus, "Show more", nested routes — not everything at once. |
| Controls vs content | Floating/sticky bars use translucent material + a **scroll-edge fade** (mask/gradient that appears only when content scrolls under), not an opaque coloured slab; hero images extend under translucent headers/sidebars. |
| Background art | `object-fit: cover` (never stretch/distort); allow extra bleed for very wide/tall viewports. |
| Viewport height | `100dvh` / `min-h-dvh`, not `100vh`. |
| Fixed bars never hide content | Scroll container gets bottom padding ≥ bar height + `env(safe-area-inset-bottom)` — the probe caught this even on a 'good' test page at 667×375 with 200% text. |
| No overflow | Page never scrolls horizontally at 320–1440 px; flex/grid children that contain scroll areas get `min-w-0`. |
| Targets & spacing | Interactive targets ≥ 44×44 px on touch, ≥ 28 px pointer-only; ≥ 8 px between adjacent targets (12 px bezeled / 24 px bare, per Accessibility). |
| Bottom-of-window (macOS) | Desktop web apps: no critical controls pinned to the very bottom of tall scrolling windows; primary actions top-trailing or in a sticky footer that respects safe areas. |
| Few controls side by side (watch) | Small viewports: ≤ 2 text buttons per row, else stack full-width. |
| Symmetric peeking carousels | Horizontal carousels: equal peek on both sides (`scroll-padding-inline` symmetric), consistent gap. |

## Checklist (all must pass — LAYOUT GATE)
- [ ] Most important content top-leading; alignment/indent express hierarchy; logical (RTL-safe) spacing?
- [ ] Groups separated by space/container/separator (one mechanism per boundary)?
- [ ] Controls distinct from content via material + scroll-edge effect, no opaque coloured bars?
- [ ] Layout decided by available width (container/media width), not device/UA/orientation?
- [ ] Works at compact (320, 375) and regular (768, 1024, 1440) widths and short heights (landscape phone)?
- [ ] Same features at every size; only visibility/placement changes?
- [ ] Safe areas: `viewport-fit=cover` + `env(safe-area-inset-*)` on fixed edges?
- [ ] 200% text: nothing cropped/overlapping; containers grow; rows stack?
- [ ] No horizontal page overflow; `100dvh` not `100vh`; `min-w-0` on shrinking children?
- [ ] Targets ≥ 44 px (touch) with spacing; ≤ 2 text buttons per row on small screens?
- [ ] Content never stuck under fixed/sticky bars (bottom padding ≥ bar height + safe area)?
- [ ] `node tools/check-layout.mjs` → 0 errors; `node tools/run-layout-probe.mjs <url>` → PASS at every viewport?

## Related (ingestion status)
Right to left (✓ flip/don't-flip rules; `check-layout.mjs --strict` flags physical sides, alignment and unflipped directional icons), Spatial layout, Scroll views, Windows, Multitasking, Tab bars, Sidebars, Typography,
Accessibility (✓), Designing for iOS/iPadOS/macOS/tvOS/visionOS/watchOS (✓) — not yet ingested (except ✓).
