# Image views
Source: https://developer.apple.com/design/human-interface-guidelines/image-views · Section: Components › Content · Supported platforms: all six on the platform strip (**no additional considerations for iOS or iPadOS**; specific guidance for macOS, tvOS, visionOS, watchOS) · Ingested: 2026-09-29 · Apple last updated: 2023-06-21 (updated to include guidance for visionOS; the change log has that single entry). One DocC fetch, read in full. 4 screenshots (light-mode page, hero → Videos / "Change log" heading) were compared with the fetched text line by line: everything matches; the four screenshots are contiguous. **The change-log row was read from the fetch only** (the last screenshot ends at the "Change log" heading). Only the hero drawing, the video thumbnails and the page chrome are screenshot-only. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
An image view **just shows an image** (or a same-sized animated sequence) and isn't interactive: for anything clickable use a real button, for icons use symbols or template icons, and when text sits on a picture make sure it stays legible.

## Rules

### Framing (intro)
- An image view displays **a single image**, or in some cases **an animated sequence of images**, on a **transparent or opaque background**.
- Inside it you can **stretch, scale, size to fit, or pin** the image to a specific location. Image views are **typically not interactive**.

### Best practices
- **should** **Use an image view when the view's main purpose is simply to display an image.** In the rare case an image must be interactive, **configure a system-provided button** to display the image **instead of adding button behaviour to an image view**.
- **should** **For an icon, prefer a symbol or an interface icon over an image view.**
  - **SF Symbols** is a large library of streamlined, **vector** images that render with **various colours and opacities**.
  - An **icon** (also called a **glyph** or **template image**) is typically a **bitmap** in which the **non-transparent pixels can receive colour**.
  - Both symbols and interface icons can use the **accent colours people choose**.

### Content
- An image view can hold **rich image data in various formats**, e.g. **PNG, JPEG, PDF** (see *Images* for resolution, format and colour-profile guidance).
- **should** **Take care when overlaying text on images.** Compositing text over an image can reduce **both the image's clarity and the text's legibility**. To improve it, make sure the text **contrasts well** with the image, and consider making the text object stand out with a **text shadow** or a **background layer**.
- **should** **Use a consistent size for all images in an animated sequence.** When you **pre-scale** images to fit the view, the system does **no scaling**; when it must scale, **performance is generally better if all images share the same size and shape**.

### Platform considerations
- **iOS, iPadOS:** no additional considerations.
#### macOS
- **should** **Use an image well when the image view must be editable.** An **image well** is an image view that supports **copying, pasting, dragging, and the Delete key to clear** its content.
- **should** **Use an image button, not an image view, for a clickable image.** An **image button** contains an image or icon, appears in a view, and starts an **instantaneous, app-specific action**.
#### tvOS
- Many tvOS images **combine several layers with transparency** to create a feeling of **depth** (see *Images › Layered images*).
#### visionOS
- Windows in visionOS apps and games can use image views for **2D and stereoscopic images** and **spatial photos**.
- With **RealityKit** you can also show images of any type **outside image views** next to 3D content, or **generate a spatial scene from an existing 2D image**. Design guidance: *Images › visionOS*; 3D content in a window or volume: *Windows › visionOS*.
#### watchOS
- **should** **Use SwiftUI to create animations when possible.** Alternatively use **WatchKit** to animate a sequence of images inside an image element if needed.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Purpose | show one image, or a same-size animated sequence; on a transparent or opaque background |
| Placement modes | stretch · scale · size to fit · pin to a location |
| Interactivity | none by default; interactive image → system button configured with the image |
| Icon choice | symbol (vector, colour and opacity variants) or interface icon/template image (bitmap; non-transparent pixels take colour) in place of an image view |
| Formats named | PNG · JPEG · PDF |
| Text over image | strong contrast; text shadow or background layer |
| Animated sequence | pre-scale to the view; identical size and shape for every frame |
| macOS | editable → image well (copy, paste, drag, Delete to clear); clickable → image button |
| tvOS | layered images with transparency for depth |
| visionOS | 2D, stereoscopic and spatial photos in windows; RealityKit for images beside 3D content or a spatial scene from a 2D image |
| watchOS | SwiftUI animation first; WatchKit image-sequence animation if needed |
| Developer docs | SwiftUI `Image` · UIKit `UIImageView` · AppKit `NSImageView` · `ImagePresentationComponent` (RealityKit) · `WKImageAnimatable` (WatchKit) |
| Related HIG pages | Images ✓ · Image wells (not yet ingested) · Buttons › Image buttons ✓ CRITICAL · SF Symbols ✓ · Windows (not yet ingested) |
| Videos | *Support HDR images in your app* (WWDC23 10181) · *Add rich graphics to your SwiftUI app* (WWDC21 10021) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange gradient card with a large white rounded **photo glyph** (a circle for the sun and two hills inside a rounded frame), with **dimension arrows** along its top edge and trailing edge, the "measured picture" motif.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Image views · Best practices · Content · Platform considerations · Resources · Change log. The side navigation highlights **Image views** (focus ring) under **Components › Content**, after Charts.
- **Video thumbnails (from screenshot):** *Support HDR images in your app* shows a photo of a person in a flowing pink dress by a river under a cloudy sky; *Add rich graphics to your SwiftUI app* shows a dark card with two small colour-swatch panels (one soft pastel, one full rainbow gradient).
- The page has **no ✗/✓ pairs, no comparison images and no videos of its own** (fetch script run; catalog IDs unchanged, total 107). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above.

## Web translation
An "image view" on the web is an **`<img>`/`<picture>`, a CSS background, an inline `<svg>`, or a `<video>`/animated image**. The page's small rule set maps cleanly; for resolution, formats and colour profiles use `hig/foundations/images.md`.

| HIG rule | Web implementation |
|---|---|
| Image view = display only | Use `<img>` (or `<picture>`) for **content images**; it is not interactive. Give it real `alt` text that says what the picture **shows and why it's here**; decorative images get `alt=""` (or a CSS background). Don't attach `onclick` to an `<img>`. |
| Interactive image → real button | A clickable image is **a `<button>` or `<a>` that contains the `<img>`** (accessible name from `alt` or `aria-label`, focus ring, keyboard activation, ≥ 44 px target), never a click handler on the picture. The macOS "image button" equivalent; use the standard button component (`field-notes/components.md`). |
| Placement: stretch, scale, fit, pin | Map to `object-fit`: **fill** (stretch, distorts; avoid for photos), **contain** (size to fit, letterboxed), **cover** (fills and crops; the usual photo card), **none** / **scale-down** (natural size); pin with `object-position`. Always set `width`/`height` or `aspect-ratio` to avoid layout shift, and an `alt`. Background: transparent PNG/WebP/AVIF/SVG or an opaque fill. |
| Icons → symbols/template icons | For UI icons **don't use an `<img>` of a full-colour bitmap**: use an **inline SVG** (or an icon component) that takes **`currentColor`** (or a **CSS mask** over `background-color: currentColor`) so it follows the text colour, the accent colour and dark mode. Weights, sizes and sources follow `hig/foundations/icons.md` and `sf-symbols.md` (never Apple's SF Symbols artwork on the web). This is the "template image" idea. |
| Formats | PNG (transparency, sharp graphics), JPEG (photos), **WebP/AVIF** (smaller photos, with `<picture>` fallbacks), **SVG** (vector, icons and logos); the PDF-as-vector idea maps to SVG. Keep sRGB/embedded profile per `images.md`. |
| Text over images | Don't rely on the picture: put a **scrim** (a semi-opaque gradient or solid layer, a "background layer") or a **text shadow** behind the text, or move the text off the image; check **contrast against the worst part of the picture** (Color gate; WCAG 4.5 : 1 for body text, 3 : 1 for large text). Real DOM text, never text baked into the bitmap; use `mix-blend-mode`/`backdrop-filter` only with the Materials gate (`materials.md`). |
| Consistent sizes in an animated sequence | For frame-by-frame animation (sprite sheets, image swaps, flipbooks) export **every frame at the same width, height and aspect ratio, pre-scaled to the display size** (× device pixel ratio); prefer **CSS `steps()` on one sprite sheet**, an **animated WebP/AVIF**, or a `<video>` over swapping `<img src>` in JS. Honour `prefers-reduced-motion` (show a still frame) and pause off-screen (`IntersectionObserver`). |
| Editable image ("image well") | An **upload/replace control**: a labelled drop zone plus a file button (`<input type="file" accept="image/*">`), **paste** (`paste` event, `clipboardData.files`), **drag-and-drop** (`hig/patterns/drag-and-drop.md`), a preview, and a **Remove** action that clears it (offer Undo, `undo-and-redo.md`); keyboard: Enter/Space opens the picker, Delete/Backspace on the focused zone clears. Validate type and size and show errors inline (Feedback gate). |
| Layered depth (tvOS) | Optional on web: a subtle **parallax/tilt** on focus using stacked transparent layers (CSS transforms), only with `prefers-reduced-motion` respected; never required for comprehension. |
| Spatial photos and stereoscopic (visionOS) | Native capability; on the web serve the **normal 2D image** and don't gate content on spatial support. If targeting visionOS Safari, treat spatial media as an enhancement. |
| Animations on watchOS | Web analogue for small/wearable surfaces: declarative CSS/SVG animation over JS frame swapping. |
| Performance | `loading="lazy"` and `decoding="async"` below the fold, `fetchpriority="high"` for the hero, `srcset`/`sizes` for density, a low-quality placeholder or dominant-colour background while loading (`loading.md`). |
| Accessibility | Informative image: descriptive `alt`; decorative: `alt=""`; complex images (charts) follow `charts.md` (overview + data table); images of text avoided; caption in `<figcaption>`. |

Field-note cross-links:
- `hig/foundations/images.md` (✓): resolution, scale, formats, colour profile, alt/captions; this page adds behaviour (non-interactive, icons vs images, text overlays).
- `hig/foundations/icons.md` and `sf-symbols.md` (✓): the icon-versus-image rule; template/mask icons follow text and accent colour.
- `hig/foundations/color.md` (CRITICAL) and `materials.md` (CRITICAL): text over images needs measured contrast; scrims and blurs are materials.
- `hig/patterns/drag-and-drop.md`, `undo-and-redo.md`, `file-management.md`: image-well behaviours.
- `hig/patterns/loading.md`, `hig/foundations/motion.md`: placeholders, reduced-motion stills.
- `hig/components/content/charts.md`: a chart is not an image; it needs per-element labels.
- No conflict with a field note.

## Checklist
- [ ] Content images are `<img>` (or `<picture>`) with meaningful `alt`; decorative ones have `alt=""`; nothing clickable is a bare image.
- [ ] Clickable images sit inside a real button/link with a name, focus ring and ≥ 44 px target.
- [ ] `object-fit`/`object-position` are chosen on purpose (cover for photos, contain for artwork); width/height or aspect ratio prevent layout shift.
- [ ] UI icons are inline SVG or masked `currentColor` icons, not full-colour bitmaps; they follow text/accent colour and dark mode.
- [ ] Text over an image has a scrim or shadow and passes contrast on the worst area; no text baked into bitmaps.
- [ ] Animated sequences use same-size, pre-scaled frames (or a sprite sheet/video), respect reduced motion and pause off-screen.
- [ ] Editable images have a labelled drop zone, file button, paste, preview, Remove (with Undo) and inline validation.
- [ ] Modern formats with fallbacks, `srcset`/`sizes`, lazy loading and placeholders are in place.

## Related
- Ingested: Images (✓), Icons (✓), SF Symbols (✓), Color (✓ CRITICAL), Materials (✓ CRITICAL), Charts (✓), Drag and drop (✓), Undo and redo (✓), Loading (✓), Motion (✓).
- Ingested since: Collections (✓ `components/layout/collections.md`). Not yet ingested: **Image wells**, Windows (§ visionOS).
- Developer docs and videos: see Specs & values.
