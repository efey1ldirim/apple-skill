# App icons
Source: https://developer.apple.com/design/human-interface-guidelines/app-icons ·
Section: Foundations · Supported platforms: iOS, iPadOS, macOS, tvOS, visionOS, watchOS ·
Ingested: 2026-09-28 · Screenshots: 18 (text cross-checked end to end: matches the fetched
content, incl. the Specifications table) · Apple change log: **2026-06-08** refined Liquid Glass
guidance · **2025-06-09** layered icons, cross-platform consistency, Liquid Glass best practices ·
**2024-06-10** dark and tinted variants (iOS/iPadOS) · **2024-01-31** alternate-icon availability
clarified · **2023-06-21** visionOS added · **2022-09-14** Apple Watch Ultra specs.

## In one line
An app icon is a unique, memorable expression of the app's purpose and personality that people
recognise at a glance — built today from **layers** (background + foreground) that the system
turns into Liquid Glass, masked into each platform's shape, kept **simple, centred, text-free**
and **consistent across platforms and appearances**.

## What the page says

### Why it matters
- Crucial to **branding and UX**. Appears on the Home Screen and across the system: **search
  results, notifications, system settings, share sheets**.
- Must convey identity **clearly and consistently on every Apple platform** (illustrated: the
  same Photos flower on a rounded square — iOS/iPadOS/macOS; a wide rounded rectangle — tvOS; a
  circle — visionOS/watchOS).

### Layer design
- A flattened image is allowed, but **layers give the most control** and produce **depth and
  vitality**; the system adds effects that respond to environment and interaction.
- **iOS, iPadOS, macOS, watchOS**: one **background layer** + **one or more foreground layers**
  that coalesce into dimensionality; they take on **Liquid Glass** attributes — **specular
  highlights, refraction, translucency** — which adapt to icon size, stay consistent across
  platforms, and **may look different between system versions**.
- **tvOS**: **2–5 layers**; when focused the icon **rises to the foreground**, follows the
  finger on the remote, **gently sways** while the surface lights up — the **parallax** effect;
  layer separation + transparency create depth.
- **visionOS**: background + **one or two** layers → a **3D object** that subtly expands when
  looked at; the system adds **inter-layer shadows** and uses upper layers' **alpha** to create an
  **embossed** look.
- **Workflow**: draw foreground layers in any design tool →
  - iOS/iPadOS/macOS/watchOS: import into **Icon Composer** (ships with Xcode; also on the
    Developer site) to define the background, place layers, apply effects (specular, refraction),
    annotate **default, dark and mono** variants, preview across system versions, export to Xcode.
  - tvOS/visionOS: add layers to an **image stack in Xcode**; preview with **Parallax Previewer**
    and the **Parallax Exporter** plug-in (Apple Design Resources).
- **should — Clearly defined edges** on foreground shapes; avoid soft/feathered edges so system
  highlights and shadows look right.
- **should — Vary opacity** in foreground layers for depth and liveliness (Photos splits its
  centrepiece into translucent petals). Import **fully opaque** layers and set transparency **in
  Icon Composer** to judge how transparency and system effects interact.
- **should — Background that stands out and emphasises the foreground**. Gradients must respond
  well to system lighting. Icon Composer offers **solid colours and gradients** (custom background
  images rarely needed); an imported background must be **full-bleed and opaque**.
- **should — Prefer vector** layers (**SVG or PDF**): crisp at any size; **outline artwork and
  convert text to outlines**. For **mesh gradients and raster** art use **PNG** (lossless).

### Icon shape
- Shape follows each platform's visual language:
  - **iOS/iPadOS/macOS**: square artwork; system masks rounded corners that **exactly match the
    curvature of other rounded UI elements and the device bezel** (concentricity).
  - **tvOS**: rectangular, also with **concentric** rounded edges.
  - **visionOS/watchOS**: square artwork, **circular mask**.
- **must — Provide unmasked layers of the right shape**: square (iOS/iPadOS/macOS, visionOS,
  watchOS), rectangular (tvOS). **Pre-masked** layers hurt specular highlights and make **edges
  jagged**.
- **must — Keep primary content centred** so it isn't truncated by corners/masks — especially for
  the **circular** visionOS/watchOS icons. Use the **grids in the production templates** (Apple
  Design Resources).

### Design
- **Embrace simplicity**: fine details look busy under system shadows/highlights and vanish at
  small sizes. Find the **one concept** that captures the app, express it simply and uniquely
  with a **minimal number of shapes**. Prefer a **simple background** (solid or gradient); **don't
  fill the whole canvas** (examples: Podcasts — concentric purple rings around a figure; Home — an
  orange house on white).
- **must — Visually consistent across all supported platforms**, so people find it everywhere and
  don't think it's several apps.
- **should — Filled, overlapping shapes**, especially with transparency and blur, give depth
  (✗ outline ring around a solid dot; ✓ a translucent filled disc under a solid dot).
- **should not — Text** unless essential to the experience or brand: no accessibility or
  localisation, too small, cluttered, often redundant with the app name shown nearby. A
  **mnemonic first letter** can help; avoid instructions ("Watch", "Play") and context terms
  ("New", "For visionOS"). tvOS: text must be on the **top layer** so parallax doesn't crop it.
- **should — Illustrations over photos**; don't replicate UI components or use screenshots.
  Avoid **extremely thin lines and sharp corners** (lose crispness at small sizes).
- **must not — Replicas of Apple hardware** (copyrighted).

### Visual effects
- **must — Let the system do blur and effects**: don't bake in specular highlights, drop shadows
  between layers, bevels, blurs, glows. Custom effects are **static** and conflict with the
  system's **dynamic** ones. If you add any, do it intentionally and test (Icon Composer, Device
  Hub simulator, real device).
- **may — Group layers** (Icon Composer or design tool) to apply effects at group level; groups
  expose extra Liquid Glass controls (specular, refraction, translucency).

### Appearances (iOS, iPadOS, macOS)
- People choose **default, dark, clear or tinted** Home Screen icons (e.g. to match wallpaper).
  Provide variants you want; the **system generates the missing ones**. Six renderings: default,
  clear (light), tinted (light), dark, clear (dark), tinted (dark).
- **must — Keep core features identical across appearances** — don't swap elements per variant.
- **should — Dark/tinted icons should sit well beside system icons and widgets**: palette may be
  kept, but dark is more subdued, clear and tinted even more; always visible, legible,
  recognisable.
- **should — Base the dark icon on the light one**: complementary colours, no overly bright
  imagery; **coloured backgrounds give the most contrast** in dark icons.
- **may — Alternate icons** (iOS, iPadOS, tvOS, compatible visionOS apps) chosen in app settings
  (e.g. team icons in a sports app) — must stay closely related to the app; never look like another
  app. **Note:** iOS/iPadOS alternates need their own dark/clear/tinted variants; all icons go
  through **App Review**.

### Platform considerations
- iOS, iPadOS, macOS: none beyond the above.
- **tvOS**: keep a **safe zone** — focus scaling/motion may crop edges; it varies with image size,
  layer depth and motion; **foreground layers are cropped more than background**.
- **visionOS**: don't draw **holes or concave areas** in the background layer — system shadow and
  highlight make them pop out instead of recede.
- **watchOS**: **no pure black background** — lighten it so the icon doesn't disappear into the
  black display.

## Specs & values
| Platform | Layout shape | Shape after masking | Layout size | Style | Appearances |
|---|---|---|---|---|---|
| iOS, iPadOS, macOS | Square | Rounded rectangle (square) | **1024×1024 px** | Layered | Default, dark, clear light, clear dark, tinted light, tinted dark |
| tvOS | Rectangle (landscape) | Rounded rectangle (rectangular) | **800×480 px** | Layered (parallax) | N/A |
| visionOS | Square | Circular | **1024×1024 px** | Layered (3D) | N/A |
| watchOS | Square | Circular | **1088×1088 px** | Layered | N/A |
- Smaller sizes (Settings, notifications) are generated automatically.
- Colour spaces: **sRGB**, **Gray Gamma 2.2**, **Display P3** (not visionOS).
- tvOS layers: 2–5; visionOS: background + 1–2.

## Visual notes (from screenshots)
- **(from screenshot)** Hero: yellow Foundations panel with the App Store glyph on the icon grid.
- **(from screenshot)** Icon Composer UI: left sidebar of layer **groups** (orange, blue / red,
  green, yellow, purple / pink, lime), centre canvas with the Photos icon, "iOS, macOS" platform
  chip and Default/Dark/Mono appearance swatches at the bottom, right inspector with Color
  (Opacity 100%, Blend Mode Normal, Fill Solid orange), **Liquid Glass › Effects** toggle,
  Composition (Visible, Image `2.flower1.svg`, Layout x/y/scale).
- **(from screenshot)** visionOS icon video: round glassy icons floating in a room (Music,
  Mindfulness, Settings, Safari, Photos, Notes, App Store) with labels beneath.
- **(from screenshot)** Grid overlays: the Settings gear on the square, wide-rectangle and circle
  grids — concentric circles plus diagonals define the centred content zone.
- **(from screenshot)** tvOS safe zone: a dashed white inset rectangle over a blue-grey frame.
- **(from screenshot)** Note callout style: grey rounded box with a thin grey border, grey "Note"
  title (vs amber for "Important").

Visual pairs: `visual-examples` ids app-icons-01, app-icons-02.

## Web translation
| Guidance | Web equivalent |
|---|---|
| One simple, centred concept; no text; illustrations not photos | Favicon, PWA icon and social avatar: a single bold mark readable at 16 px; no wordmark inside; test at 16/32/180/512 px. |
| Consistent across platforms/appearances | Same mark for favicon, `apple-touch-icon`, PWA `icons`, OG image, email/sender avatar. |
| Square unmasked artwork, content centred | PWA `purpose: "maskable"` icons: full-bleed square with key content inside the **central safe circle (~80% diameter)**; separate `purpose: "any"` icon. `apple-touch-icon` 180×180 opaque square (iOS rounds it). |
| Let the system add effects | Don't bake rounded corners, gloss or shadows into home-screen icons. |
| Dark/tinted variants | `<link rel="icon" media="(prefers-color-scheme: dark)">` or an SVG favicon with an internal `@media (prefers-color-scheme: dark)` block; avoid pure-black shapes that vanish on dark tabs. |
| Vector preferred | `favicon.svg` + PNG fallbacks; PNG for gradients/raster. |
| Colour spaces | sRGB baseline; Display P3 via `color(display-p3 …)` only as progressive enhancement. |
| In-UI icon tiles (field notes) | Our 28/36/60px squircle tiles follow the same spirit: one glyph, centred, simple background, colour in the tile only. |

## Checklist
- [ ] One recognisable concept, few shapes, simple background?
- [ ] No text beyond an optional mnemonic letter; no photos/screenshots/UI replicas?
- [ ] Unmasked square (or tvOS rectangle) layers, content centred inside the safe grid?
- [ ] No baked-in highlights, shadows, bevels, glows?
- [ ] Defined edges; opacity used for depth; vector layers?
- [ ] Recognisable in default, dark, clear, tinted; features unchanged between variants?
- [ ] watchOS background not pure black; visionOS no concave holes; tvOS safe zone respected?
- [ ] Same icon family across every platform and web surface?

## Related (ingestion status)
Icons, Images, Dark Mode, Materials (Liquid Glass), Branding — not yet ingested.
