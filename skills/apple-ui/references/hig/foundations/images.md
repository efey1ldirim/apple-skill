# Images
Source: https://developer.apple.com/design/human-interface-guidelines/images · Section: Foundations ·
Supported platforms: iOS, iPadOS, macOS, tvOS, visionOS, watchOS · Ingested: 2026-09-28 ·
Screenshots: 12 (dark-mode page, hero → footer); text cross-checked against the fetched content —
fully matching; only the parallax video is described from the screenshot. Apple change log: **2025-12-16** spatial photos &
spatial scenes (visionOS) · **2023-12-05** clarified choosing a resolution for rasterized images in
visionOS · **2023-06-21** visionOS guidance · **2022-09-14** Apple Watch Ultra specs.

## In one line
Artwork must look sharp on every device: think in **points**, ship bitmaps at every **scale factor**
the platform uses (or vectors), pick the right **format** per image type, embed a **colour profile**,
and **test on real devices**; tvOS adds layered parallax images, visionOS adds dynamic scaling and
spatial photos/scenes, watchOS adds autoscaling PDFs.

## What the page says

### Resolution
- Devices show images at different resolutions; a 2D device renders by its screen resolution.
- **Point** = abstract unit that keeps content consistent regardless of display. On 2D platforms a
  point maps to a varying number of pixels; in **visionOS a point is an angular value**, so content
  scales with distance from the viewer.
- **Scale factor** of a bitmap = pixel density per point: **@1x = 1:1**, **@2x = 2:1**, **@3x = 3:1**.
  Higher density → images need more pixels. (Diagram: the same circle at 1x 10×10 px, 2x 20×20 px,
  3x 30×30 px — edges get smoother as density rises.)
- **must — Provide high-resolution assets for every bitmap image, for every device you support.**
  Name by suffix `@1x`, `@2x`, `@3x` in the asset catalog. Guidance (more in Layout):

| Platform | Scale factors |
|---|---|
| iPadOS, watchOS | @2x |
| iOS | @2x and @3x |
| visionOS | @2x or higher (see visionOS below) |
| macOS, tvOS | @1x and @2x |

- **should — Design at the lowest resolution and scale up.** With resizable vector shapes, put
  control points on **whole values** at 1x so they stay aligned to the raster grid at 2x/3x
  (multiples of 1x).

### Formats
| Image type | Format |
|---|---|
| Bitmap / raster work | **De-interlaced PNG** |
| PNG graphics not needing full 24-bit colour | **8-bit colour palette** |
| Photos | **JPEG** (optimised as needed) or **HEIC** |
| Stereo or spatial photos | **Stereo HEIC** |
| Flat icons, interface icons, other flat art needing high-res scaling | **PDF or SVG** |

### Best practices
- **must — Include a colour profile with each image** so colours appear as intended on different
  displays (see Color management).
- **must — Test images on a range of actual devices**: what looks great at design time can appear
  pixelated, stretched or compressed on devices.

### Platform considerations
iOS, iPadOS, macOS: nothing extra.

#### tvOS — layered images & parallax
- Layered images are at the heart of Apple TV: layers + transparency + scaling + motion → realism,
  vigor, personal connection.
- **Parallax**: subtle depth effect on focus — the focused element elevates to the foreground, sways
  gently, gets illumination that makes its surface **shine**; after inactivity out-of-focus content
  **dims** and the focused element **expands**. Layered images are **required** for parallax.
  (**from screenshot** — the page embeds a video: an animation — a red card with a cartoon red-panda/fox face tilting in focus, with a
  "Play ▶" control under it.)
- **Layered image** = **2–5 distinct layers**; separation + transparency = depth; on interaction,
  layers nearer the surface elevate and scale, overlapping lower ones → 3D effect.
- **Important:** the tvOS **app icon must be a layered image**; other focusable images (incl. **Top
  Shelf**) — strongly encouraged, optional.
- Embed layered images in the app or fetch from a server at runtime (Parallax Previewer User Guide).
  **Developer note:** server-fetched ones must be runtime layered images (**`.lcr`**), generated from
  LSR or Photoshop files with Xcode's **`layerutil`** CLI; they're for download — don't embed them.
- **should — Use standard interface elements** (standard views, system focus APIs like `FocusState`)
  → parallax for free.
- **should — Identify foreground / middle / background**: foreground = prominent elements (game
  character, text on album cover/poster); middle = secondary content and effects like **shadows**;
  background = **opaque** backdrop that showcases the others without upstaging them.
- **should — Keep text in the foreground** (unless you intend to obscure it).
- **must — Background layer opaque** (you get an error otherwise). Varying opacity in higher layers is
  fine. Opaque background makes parallax, drop shadows and system backgrounds look right.
- **should — Keep layering simple and subtle**: parallax should be **almost unnoticeable**; excessive
  3D is unrealistic and jarring.
- **must — Safe zone around foreground layers**: focus scaling/movement can crop layers; keep essential
  content inside the safe zone (see App icons).
- **should — Always preview layered images** throughout design: Xcode, **Parallax Previewer** (macOS),
  **Parallax Exporter** plug-in for Photoshop; watch scaling/clipping; finally preview on a real TV.

#### visionOS
- Images viewed at a far larger range of sizes than elsewhere; the system **dynamically scales
  resolution** to the current size. Images can sit at angles in the surroundings, so pixels may not
  line up 1:1 with screen pixels.
- **must — Layered app icon**: 2–3 layers moving at subtly different rates in focus (see Layer design /
  app-icons.md).
- **should — Prefer vector art for 2D images**; bitmaps may look bad when scaled up (Core Animation:
  "Drawing sharp layer-based content in visionOS").
- **should — If rasterized, balance quality vs performance**: @2x looks fine at common distances but
  won't scale dynamically → may be soft up close. Higher resolution helps across distances but
  increases file size and can hurt runtime performance, **especially above @6x**. Above @2x, also apply
  **high-quality image filtering** (`filters`).
- **Spatial photos and spatial scenes** (RealityKit; `ImagePresentationComponent`):
  - *Spatial photo* = stereoscopic photo + spatial metadata (iPhone 15 Pro or later, Apple Vision Pro,
    compatible cameras). *Spatial scene* = 3D image generated from a 2D image, with parallax responding
    to head movement.
  - **must — Render spatial photos correctly**: stereo **HEIC** with spatial metadata → visionOS
    recognises it and applies treatments that reduce stereo-viewing discomfort.
  - **should — Text over spatial photos: feathered glass background effect** (`GlassBackgroundEffect`)
    — adds contrast and blurs detail to reduce discomfort.
  - **should — Visual comfort when converting 2D to spatial**: metadata such as **disparity
    adjustment** changes perceived depth and can cause discomfort from some viewing positions.
  - **should — Show spatial photos/scenes in standalone views** (sheet, window), not inline; if inline
    is unavoidable, leave **generous spacing** so eyes can adjust to depth changes.
  - **should — Use spatial scenes for specific moments**: generation takes up to several seconds; e.g.
    Photos offers an explicit action while immersed in one photo. Don't show many at once — use scroll
    views, pagination or explicit next actions; keep hierarchy simple.
  - **should — Immersive display → minimal UI** (Spatial Gallery: one item, small caption, one Back
    button, swipe to navigate).
  - **should — Prefer larger spatial scenes centred in the field of view**: people move their head
    laterally to see parallax; small scenes give less effect.

#### watchOS
- **should — Avoid transparency to keep files small**: if always composited on the same solid colour,
  bake the background in. **Transparency is required** for complication images, menu icons and other
  interface icons used as **template images** (the system uses alpha to know where to apply colour).
- **should — Autoscaling PDFs**: one asset for all sizes — design for **40 mm and 42 mm at 2x**;
  WatchKit scales:

| Screen size | Image scale |
|---|---|
| 38 mm | 90% |
| 40 mm | 100% |
| 41 mm | 106% |
| 42 mm | 100% |
| 44 mm | 110% |
| 45 mm | 119% |
| 49 mm | 119% |

### Resources listed
Related: Apple Design Resources. Developer docs: Drawing sharp layer-based content in visionOS;
Images (SwiftUI); `UIImageView` (UIKit); `NSImageView` (AppKit).

## Specs & values
- Scale factors per platform (table above); visionOS raster: @2x baseline, cost rises steeply above @6x.
- Formats per image type (table above).
- tvOS layered image: 2–5 layers, opaque background; visionOS icon: 2–3 layers.
- watchOS PDF base: 40/42 mm @2x; scales 90–119%.

## Visual notes (from screenshots)
- Hero: yellow panel with the rounded-square "photo" glyph (sun circle + mountains) on a construction
  grid — same Foundations yellow as Icons.
- Pixel-density diagram: white circle on black grid, 10×10 / 20×20 / 30×30 px, captions "1x (10x10 px)",
  "2x (20x20 px)", "3x (30x30 px)".
- Callout styles in dark mode (useful web pattern): **Important** = amber-bordered box with dark
  amber fill and amber title; **Developer note** = grey-bordered dark grey box with grey title. Both
  ~18px radius, title semibold on its own line.
- Tables: header row semibold with a heavier rule under it, hairline rows, generous row height.
- No don't/do pairs on this page; the 1x/2x/3x circles are visual example **images-01**.

## Web translation
| HIG | Web |
|---|---|
| Points vs pixels | CSS px = points. Ship raster at 1x/2x/3x: `<img srcset="a.png 1x, a@2x.png 2x, a@3x.png 3x">` or width descriptors + `sizes` for responsive images. Never serve a 1x bitmap to retina screens. |
| Vector for flat art | Inline SVG for icons, logos, illustrations; no PNG icons. |
| Formats | Photos: **AVIF/WebP with JPEG fallback** via `<picture>` (HEIC isn't web-safe); UI raster: PNG (8-bit palette when possible, e.g. via `pngquant`); flat art: SVG. Always set `width`/`height` (or `aspect-ratio`) to avoid layout shift; `loading="lazy"` + `decoding="async"` below the fold. |
| Design at 1x, whole-value points | Align SVG coordinates to integers at the 1x viewBox; avoid half-pixel strokes (odd stroke widths on .5 coordinates) so edges stay crisp. |
| Colour profile | Export sRGB (or Display P3 with embedded profile for wide-gamut photos); strip nothing that removes the ICC profile. Use `color(display-p3 …)` only with sRGB fallback. |
| Test on real devices | Check at DPR 1, 2, 3 (browser device emulation is not enough for compression/banding); check dark mode (soften white images, see dark-mode.md). |
| tvOS parallax / focus | Web hover/focus "lift" should be **almost unnoticeable**: `scale(1.02–1.04)` + soft shadow + optional ≤ 3° tilt, text stays in the top layer, background layer opaque; respect `prefers-reduced-motion` (disable tilt). |
| Keep text foreground over imagery | Text over photos needs a legibility layer (scrim gradient or blurred glass, like visionOS feathered glass) meeting contrast (COLOR GATE). |
| Spatial/immersive → minimal UI | Full-bleed media viewers (lightbox): one item, small caption, one close/back control, swipe/arrow navigation. |
| watchOS: avoid transparency unless templated | Bake solid backgrounds into photos/illustrations; keep alpha only for icons that get tinted (`currentColor` SVG / CSS `mask-image`). |

## Checklist
- [ ] Every bitmap has 2x (and 3x where phones matter) via `srcset`; flat art is SVG?
- [ ] Right format per type (photo AVIF/WebP/JPEG, UI PNG, flat SVG); dimensions set, lazy below fold?
- [ ] Colour profile embedded / sRGB-consistent; wide-gamut only with fallback?
- [ ] Checked at DPR 1/2/3 and in dark mode on real devices?
- [ ] Text over imagery sits on a legibility layer and passes contrast?
- [ ] Focus/hover depth effects subtle and disabled under reduced motion?
- [ ] Media viewers minimal: one item, caption, one exit control?

## Related (ingestion status)
Layout, App icons (✓), Color (✓ CRITICAL), Dark Mode (✓), Materials (✓ CRITICAL), Spatial layout — not yet
ingested (except ✓).
