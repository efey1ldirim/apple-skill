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
File names: `images/<id>-<dont|do|compare>-<n>-<light|dark>.png`.

| id | Kind | Rule it illustrates | ✗ / first image | ✓ / second image | Check your UI for |
|---|---|---|---|---|---|
| accessibility-01 | compare | Thin weights need larger sizes | small bold "Hello" — easy to read | large thin "Hello" — thin only works big | Thin/light font weights used at small sizes |
| accessibility-02 | do/don't | Text/background contrast ≥ 4.5:1 | bright blue pill with dark-blue title — unreadable | deep blue pill with white title | Button labels, grey secondary text, text on colour |
| accessibility-03 | compare | Prefer system colours with accessible variants | default red over light/dark halves — subtle difference | accessible red — darker on light, lighter on dark | Status colours in both themes and under Increase Contrast |
| accessibility-04 | do/don't | Never colour alone | plain green vs red circles | green circle + ✓ and red octagon + ✗ | Status dots, chart series, success/error states without icons/text |
| accessibility-05 | do/don't | Spacing is as important as size | rewind/play/forward touching | same controls with clear padding (pink boxes show ~12 pt zones) | Icon-button clusters, toolbars, row actions |
| accessibility-06 | compare | Offer alternatives to gestures | list in edit mode with red delete buttons | swipe-to-delete revealing red Delete | Swipe/drag-only actions without a visible button |
| accessibility-07 | compare | Assistive Access: one interaction per screen | Camera home: two huge tiles (Photo, Video) + Back | Photo mode: preview + one huge "Take Photo" + Back | Simplified/first-run flows: big labelled buttons, one decision per screen |
| app-icons-01 | compare | Simple icon concept, minimal shapes | Podcasts icon (purple, concentric rings) | Home icon (orange house on white) | Brand marks, icon tiles, favicons |
| app-icons-02 | do/don't | Filled overlapping shapes give depth | outlined ring around a solid dot | translucent filled disc under a solid dot | Outline-only glyphs in tiles; flat marks lacking depth |
| color-01 | compare (4 images) | Colours must work in light, dark and increased contrast | Notes Done button: yellow + white check (default light/dark) | darker yellow + **black** check (increased contrast light/dark) | Filled buttons/badges in all four modes; label colour flips when contrast needs it |
| color-02 | compare | Colour meaning differs by culture | Stocks rising = green (English) | rising = red (Chinese) | Finance/status colours in localised UIs |
| color-03 | compare (3 images) | Colour on Liquid Glass | primary button with tinted glass background | selected tab item with coloured symbol+label | glass picking up colour from a photo behind it — default untinted glass |
| color-04 | do/don't | Tint only one control background | every toolbar button blue | only Done blue, others neutral | Toolbars/headers where several buttons are filled/tinted |
| dark-mode-01 | compare | Colours adapt per appearance (not inverted) | four system colours on light | same colours, subtly shifted, on dark | Hard-coded colours that don't change in dark |
| dark-mode-02 | compare | Icon variants per appearance | black drop on light, no border | drop on dark with a white outline | Dark glyphs that vanish on dark backgrounds |
| dark-mode-03 | compare (3) | Illustrations must work in both | line art on light | same art on dark — details lost | adjusted art on dark — contrast restored | Illustrations/empty-state art in dark mode |
| dark-mode-04 | compare | System label colours adapt | primary label, light | secondary label, dark | Text tones in both themes |
| dark-mode-05 | compare (3) | Base vs elevated backgrounds | 4 label levels on base (black) | on elevated (near-black) | on light | Modals/sheets/menus not lighter than the page in dark |
| branding-01 | do/don't | Brand colour judiciously; put it in content | brand blue on every control (close, locate, filled search bar) | brand blue in the map content; controls neutral glass | Brand colour on nav, inputs, secondary buttons; colour that should live in content |

## Pages scanned
design-principles, designing-for-{ios, ipados, macos, tvos, visionos, watchos, games, iphone-duo}
(no image pairs), accessibility, app-icons, branding, color, dark-mode.
