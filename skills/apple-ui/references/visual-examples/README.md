# Visual examples — Apple's don't/do and comparison images

Purpose: let Claude **look at** Apple's own correct and incorrect examples and compare them with a
screenshot of the UI it just built. Text rules say *what*; these images show *how it looks*.

## How to use
1. If `images/` is missing (fresh clone), run once:
   `node tools/fetch-visual-examples.mjs` — downloads Apple's example images (light + dark) from
   developer.apple.com and writes a local `INDEX.md` + `manifest.json`. These files are **local
   only** (git-ignored): they are Apple's copyrighted artwork and text.
2. When your design touches a rule below, `Read` the ✗ and ✓ images (`images/<id>-…-light.png`,
   `…-dark.png`), then take a screenshot of your own UI (same theme) and compare point by point.
3. State the verdict explicitly: "matches ✓ because … / resembles ✗ because …", and fix before
   shipping.
4. After ingesting a new HIG page: add its slug to `PAGES` in the script, re-run it, and add the
   new pairs to the table below.

## Catalog (our words)
File names: `images/<id>-<dont|do|neutral|single|tab>-<n>-<light|dark>.png`.

| id | Kind | Rule it illustrates | ✗ / first image | ✓ / second image | Check your UI for |
|---|---|---|---|---|---|
| accessibility-01 | compare | Thin weights need larger sizes | small bold "Hello" — easy to read | large thin "Hello" — thin only works big | Thin/light font weights used at small sizes |
| accessibility-02 | do/don't | Text/background contrast ≥ 4.5:1 | bright blue pill with dark-blue title — unreadable | deep blue pill with white title | Button labels, grey secondary text, text on colour |
| accessibility-03 | compare | Prefer system colours with accessible variants | default red over light/dark halves — subtle difference | accessible red — darker on light, lighter on dark | Status colours in both themes and under Increase Contrast |
| accessibility-04 | do/don't | Never colour alone | plain green vs red circles | green circle + ✓ and red octagon + ✗ | Status dots, chart series, success/error states without icons/text |
| accessibility-05 | do/don't | Spacing is as important as size | rewind/play/forward touching | same controls with clear padding (pink boxes show ~12 pt zones) | Icon-button clusters, toolbars, row actions |
| accessibility-06 | compare | Offer alternatives to gestures | list in edit mode with red delete buttons | swipe-to-delete revealing red Delete | Swipe/drag-only actions without a visible button |
| accessibility-07 | compare | Assistive Access: one interaction per screen | Camera home: two huge tiles (Photo, Video) + Back | Photo mode: preview + one huge "Take Photo" + Back | Simplified/first-run flows: big labelled buttons, one decision per screen |
| app-icons-01 | tabs (3) | App icon shape per platform | rounded square (iOS, iPadOS, macOS) | rounded rectangle (tvOS) | circle (visionOS, watchOS) | Favicon/PWA/brand-tile masks on the wrong shape |
| app-icons-02 | compare | Simple icon concept, minimal shapes | Podcasts icon (purple, concentric rings) | Home icon (orange house on white) | Brand marks, icon tiles, favicons |
| app-icons-03 | do/don't | Filled overlapping shapes give depth | outlined ring around a solid dot | translucent filled disc under a solid dot | Outline-only glyphs in tiles; flat marks lacking depth |
| color-01 | compare (4 images) | Colours must work in light, dark and increased contrast | Notes Done button: yellow + white check (default light/dark) | darker yellow + **black** check (increased contrast light/dark) | Filled buttons/badges in all four modes; label colour flips when contrast needs it |
| color-02 | compare | Colour meaning differs by culture | Stocks rising = green (English) | rising = red (Chinese) | Finance/status colours in localised UIs |
| color-03 | compare (3 images) | Colour on Liquid Glass | primary button with tinted glass background | selected tab item with coloured symbol+label | glass picking up colour from a photo behind it — default untinted glass |
| color-04 | do/don't | Tint only one control background | every toolbar button blue | only Done blue, others neutral | Toolbars/headers where several buttons are filled/tinted |
| dark-mode-01 | compare | Colours adapt per appearance (not inverted) | four system colours on light | same colours, subtly shifted, on dark | Hard-coded colours that don't change in dark |
| dark-mode-02 | compare | Icon variants per appearance | black drop on light, no border | drop on dark with a white outline | Dark glyphs that vanish on dark backgrounds |
| dark-mode-03 | compare (3) | Illustrations must work in both | line art on light | same art on dark — details lost | adjusted art on dark — contrast restored | Illustrations/empty-state art in dark mode |
| dark-mode-04 | compare | System label colours adapt | primary label, light | secondary label, dark | Text tones in both themes |
| dark-mode-05 | compare (3) | Base vs elevated backgrounds | 4 label levels on base (black) | on elevated (near-black) | on light | Modals/sheets/menus not lighter than the page in dark |
| icons-01 | single (2) | Consistent icon size and stroke weight | camera, heart, envelope, alarm clock between guide lines — the light alarm clock is drawn taller to balance | same four with all interior lines at one weight | Mixed icon sets, mixed stroke widths, icons that look different sizes at the same box size |
| icons-02 | single (3) | Optical centring of asymmetric glyphs | download glyph geometrically centred in a black disk — looks low | nudged up a few px / correction baked in as padding; final before-vs-after pair | Play/download/share glyphs inside round or pill buttons |
| icons-03 | single | Selected state comes from the component | — | toolbar pair on one glass background: selected Filter on a blue accent circle, More (•••) default | Hand-made filled/outline icon pairs; selection shown only by swapping icon art |
| icons-04 | compare | Characters localised, text-direction icons flipped | `character` "A" symbol with its script variants | `text.page` symbol with LTR/RTL variants | Letter-based icons in localised UIs; text/arrow icons in RTL |
| icons-05 | compare (3) | macOS document icon sets | Xcode project doc icon | AR object doc icon | Swift file doc icon — one family, distinct types |
| icons-06 | compare (3) | Document icon parts | background fill (pink grid + EKG) | center image (heart) | text "HEART" — composited by the system |
| icons-07 | compare | Expressive background fill only | Xcode project | TextEdit rich-text | File-type tiles relying on one strong image |
| icons-08 | compare (3) | Simplify small sizes | 32 px: fewer grid lines, thicker line | 16 px @2x: no grid | 16 px @1x: heart only | Favicons / tiny tiles carrying too much detail |
| icons-09 | single | ~10% margin, image ≈ 80% of canvas | heart inside a pink 10% margin band, side lobes slightly into it | — | Glyph/illustration padding inside tiles |
| images-01 | compare (3) | Resolution = pixels per point | circle at 1x (10×10 px) — blocky edge | 2x (20×20 px) and 3x (30×30 px) — progressively smooth | Raster images/icons served without 2x/3x variants (blurry on retina) |
| designing-for-iphone-duo-01 | tabs | Same Home Screen on both displays | outer display | inner display | Layouts that only work at one width |
| designing-for-iphone-duo-02 | tabs | Hinge + camera locations per display | outer display diagram | inner display diagram | — (reference) |
| designing-for-iphone-duo-03 | tabs | Consistent experience across displays | outer display | inner display | Same content/state kept when the viewport changes |
| designing-for-iphone-duo-04 | tabs | Reserved regions | outer display | inner display | Content under hinge/system regions |
| designing-for-iphone-duo-05 | tabs | Adapt layout when the device folds | fully open | partially folded | Layouts that ignore a changed posture / viewport split |
| designing-for-iphone-duo-06 | tabs | Arrangement views | split arrangement | overlay arrangement | Split vs overlay panels on wide screens |
| designing-for-iphone-duo-07 | tabs | When space is short keep toolbar **or** tab bar | toolbar compressed | tab bar compressed | Two full bars stacked on short viewports |
| immersive-experiences-01 | tabs | Dim the surroundings to focus attention | window in the room, no dimming | same room dimmed, window stays bright | Focus modes: subtle backdrop dim, focused element full brightness |
| immersive-experiences-02 | tabs (3) | Immersion styles | mixed: virtual objects in the real room | progressive: custom environment as a soft portal | full: 360° environment replaces the room | Choosing how much of the page a focus/fullscreen mode takes over |
| inclusion-01 | compare (3) | Generic person = nongendered glyph | person in a circle (`person.crop.circle`) | group of three (`person.3.fill`) | waving figure (`figure.wave`) | Default avatars/empty states using gendered silhouettes |
| branding-01 | do/don't | Brand colour judiciously; put it in content | brand blue on every control (close, locate, filled search bar) | brand blue in the map content; controls neutral glass | Brand colour on nav, inputs, secondary buttons; colour that should live in content |

## Pages scanned
design-principles, designing-for-{ios, ipados, macos, tvos, visionos, watchos, games, iphone-duo}
(no image pairs), accessibility, app-icons, branding, color, dark-mode, icons, images, immersive-experiences, inclusion (iPhone Duo pairs found once tab support was added).

Kind **tabs**: images shown behind tabs on Apple's page (one image per tab) — detected automatically.
Kind **single**: a stand-alone image that is itself a comparison (before/after drawn inside one
image, or a sequence under one rule). These are listed per page in `SINGLES` in the script.
