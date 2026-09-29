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
| layout-01 | single | Controls distinct from content; background extends under bars | iPad Landmarks: photo blurs under floating glass toolbar buttons and continues flipped+blurred under the sidebar | — | Opaque coloured header/sidebar slabs; hero images cut off at a bar edge |
| layout-02 | compare | Size classes (compact width) | compact width + compact height window | compact width + regular height window | Designing for one window shape only |
| layout-03 | compare | Size classes (regular width) | regular width + compact height | regular width + regular height | Same, at wide widths — layout by available space, not device |
| layout-04 | single | tvOS safe area 60 / 80 pt | TV frame with 60 pt top/bottom and 80 pt side bands | — | Content touching screen edges; kiosk/TV UIs without overscan margins |
| layout-05 | single | Padding absorbs focus growth | three tiles, focused centre tile enlarged, red padding bands | — | Hover/focus scale effects that overlap neighbours |
| layout-06 | tabs (8) | tvOS grids 2–9 columns | 2-column … 9-column grid, focused item with title, edge items peeking | — | Grid gaps too small for focus/hover growth; asymmetric peeking |
| layout-07 | single | ≤ 2 text buttons per row on watch | full-width capsule "Text Button" under content | — | Tiny screens with 3+ side-by-side text buttons |
| branding-01 | do/don't | Brand colour judiciously; put it in content | brand blue on every control (close, locate, filled search bar) | brand blue in the map content; controls neutral glass | Brand colour on nav, inputs, secondary buttons; colour that should live in content |
| materials-01 | compare | Regular Liquid Glass takes the backdrop's tone | circle of regular glass over a starfield → smoky dark | same over a sunny beach → milky light, heavy blur | Glass with a fixed tint that ignores what is behind it |
| materials-02 | single | Clear glass only over rich media | brick wall still readable through a softly blurred circle with a thin bright rim | — | Clear glass over plain UI or text (illegible); clear glass without a dim over bright media |
| materials-03 | do/don't | Vibrant colours on materials | Share glyph in systemGray3 on a translucent tile — nearly invisible | same glyph in a vibrant label colour — crisp | Grey palette text/icons (gray-300/400, #C7C7CC) on frosted surfaces |
| materials-04 | compare | iOS standard materials (thin end) | `ultraThin` — backdrop colours brightened, diffuse | `thin` — paler, more tint | Picking thickness by the colour it produces instead of by role |
| materials-05 | compare | iOS standard materials (thick end) | `regular` — mostly tint | `thick` — near-opaque | Long text on thin/ultraThin; quaternary text on thin |
| materials-06 | single | tvOS: glass on navigation and focused elements | Destination Video: glass capsule tabs + glass info card floating over a full-bleed scene | — | Opaque panels over hero media; glass everywhere instead of on controls |
| materials-07 | do/don't | Prefer translucency to opaque windows (visionOS) | flat navy window blocking the room | frosted window, room visible through it | Opaque full-screen overlays/modals that remove all context |
| materials-08 | single | Choose materials by role | window: Regular sidebar, Thick text field, Thin button (callout labels) | — | One material for every region; thickness chosen by look |
| materials-09 | compare | Vibrancy levels (visionOS) | `label` crisp · `secondaryLabel` softer | `tertiaryLabel` faint — inactive only | Tertiary-level text for content people must read |
| materials-10 | single | Keep modal material backgrounds (watchOS) | full-screen translucent modal: title, description, one pill Action button on a thinner material | — | Replacing a modal's material backdrop with a solid colour |
| privacy-01 | tabs | System permission alerts: purpose string between title and buttons | location alert (map, Precise: On, Allow Once / While Using / Don't Allow) · photos alert (Select Photos / All Photos / Don't Allow) | contacts alert (Don't Allow + filled blue Allow side by side) | Reason copy that is vague, passive or missing; asking without an in-context trigger |
| privacy-02 | do | Pre-alert screen: one button that opens the real prompt | headline + three benefit rows + "change later in Settings" note + one neutral capsule **Next** | — | Pre-permission screens with "Allow"/"Enable" buttons or brand-blue approval styling |
| privacy-03 | don't | No extra actions on a pre-alert screen | same screen with a second **Cancel** capsule under Next | same screen with a glass **×** close at top-leading | "Not now" / Cancel / × on a soft-ask screen before a browser permission prompt |
| privacy-04 | tabs (all ✗) | Tracking pre-screens that get rejected | incentive ($100 credit) · imitation ("Allow Tracking" button over a bar chart) | alert image with Allow circled · arrow + "choose Allow" hint under the real alert | Cookie/consent flows with rewards, cookie walls, fake prompts, or arrows pointing at Accept |
| right-to-left-01 | compare | Mirror text alignment with the layout | LTR screen: text bars + caption bar on the left edge | RTL screen: same bars on the right edge, placeholder image **not** flipped | Physical `text-left` / `ml-*` that stays put in RTL |
| right-to-left-02 | do/don't | Paragraphs (≥ 3 lines) align by their own language | ✓ RTL context: Arabic paragraph right-aligned, English paragraph left-aligned | ✗ both paragraphs right-aligned | Long mixed-language text without `dir="auto"` |
| right-to-left-03 | do/don't | One alignment for every list item | ✓ all rows right-aligned | ✗ one (other-script) row left-aligned | Per-row `dir="auto"` in lists; use `<bdi>` instead |
| right-to-left-04 | compare | Western vs Eastern Arabic digits | "123" | the same number in Eastern Arabic digits | Hard-coded digit strings instead of `Intl.NumberFormat(locale)` |
| right-to-left-05 | compare | Never reverse digits inside a number (Latin/Hebrew) | Latin: label then 123456 | Hebrew: label moves right, digits still 1-2-3-4-5 | Reversed phone/order/card numbers; missing LTR isolation |
| right-to-left-06 | compare | Never reverse digits inside a number (Arabic) | Arabic label + Western digits | Arabic label + Eastern digits — same digit order | Same as above |
| right-to-left-07 | compare | Reverse counting order, not glyphs (ratings) | Latin: stars 1→5 from the left, 3½ filled | Arabic (Eastern digits): 1 at the right, fill from the right | Star ratings / steppers that fill from the left in RTL |
| right-to-left-08 | compare | Same, Western digits in RTL | Hebrew: 1 at the right | Arabic (Western digits): 1 at the right | Mirrored digit glyphs (scaleX on a digit row) |
| right-to-left-09 | compare | Flip progress controls and their end glyphs | LTR volume slider: quiet left, loud right, fill from left | RTL: loud left, quiet right, fill from the right edge | Custom sliders/progress that ignore direction; end icons not swapped |
| right-to-left-10 | single | Balance Arabic/Hebrew next to all-caps Latin | same size: Arabic/Hebrew labels look small against caps | RTL labels ~2 pt larger fill the cap band | All-caps Latin buttons beside Arabic/Hebrew at equal size |
| right-to-left-11 | do/don't | Don't flip photos/illustrations | ✓ normal globe | ✗ mirrored globe (Africa right, Australia left) | `scaleX(-1)` on images in RTL |
| right-to-left-12 | compare | Reverse meaningful image order | LTR: selected photo tile and icon row start at the left | RTL: they start at the right, glyphs unmirrored | Galleries/rankings whose order doesn't follow direction |
| right-to-left-13 | single | Directional symbols have RTL variants | five LTR symbols (list, book, pencil field, window bar, battery) | their RTL variants (bullets, spine, dots, cap move sides) | Direction-implying icons left unmirrored |
| right-to-left-14 | compare | Flip icons that represent text | document with left-aligned lines | document with right-aligned lines | Text/list/indent icons that don't mirror |
| right-to-left-15 | single | Localise icons that contain letters | Latin: signature, "A" badge, "A" + I-beam | Hebrew (Alef) and Arabic (Ain/Dad) versions | Mirrored letters; Latin letters in RTL UI icons |
| right-to-left-16 | compare | Flip forward/backward-motion icons | speaker waves to the right | speaker waves to the left | Speaker/reply/forward icons not mirrored |
| right-to-left-17 | compare | Never flip logos or universal marks | Apple TV logo | checkmark | Logos or ✓ mirrored by a blanket `rtl:` transform |
| right-to-left-18 | compare | Don't flip real-world objects | clock | pencil · game controller | Clocks/tools mirrored by an icon-set-wide flip |
| right-to-left-19 | compare | Keep design-language components (slash) | speaker.slash LTR | RTL: speaker mirrored, slash still a backslash | CSS-mirrored slashed icons ("\\" turning into "/") |
| right-to-left-20 | do/don't | Move badges with the base when balance needs it | ✓ LTR cart, badge top-right · ✗ RTL cart, badge still top-right | ✓ RTL cart, badge top-left | Badges stuck in the physical corner |
| right-to-left-21 | compare | Keep tool orientation while mirroring the base | LTR mail+text with magnifier | RTL: base mirrored, magnifier keeps its slant | Handed tools mirrored with the rest |
| sf-symbols-01 | compare | Symbol layers (primary / secondary / tertiary) | cloud.sun.rain with the cloud layer highlighted | same with the sun, then the drops highlighted | Icons you want to animate or colour per layer drawn as one merged path |
| sf-symbols-02 | single | Hierarchical = one colour, stepped opacity | cloud 100 %, sun ~50 %, drops ~25 % in system blue | — | Secondary icon parts in a different hue instead of lower opacity |
| sf-symbols-03 | single | Monochrome | eight symbols in one flat blue | — | Mixed colours in one icon for no reason |
| sf-symbols-04 | single | Hierarchical | same eight, accents solid, bodies pale | — | Depth faked with extra outlines instead of opacity steps |
| sf-symbols-05 | single | Palette | accents blue, bodies light grey | — | More than 2–3 colours per icon |
| sf-symbols-06 | single | Multicolor = intrinsic meaning colours | green add badge, red trash/dots, yellow Mac | — | Brand colours on icons where colour should mean something (red = destructive) |
| sf-symbols-07 | compare | Gradient fill (SF Symbols 7) | solid yellow sun | same sun with a subtle one-hue gradient | Gradients on small UI icons; multi-hue rainbow gradients |
| sf-symbols-08 | single | Variable color = quantity | speaker with 0 / 1 / 2 / 3 waves coloured | — | Signal/volume icons that don't reflect the value; variable colour used for depth |
| sf-symbols-09 | single | 9 weights × 3 scales | folder.badge.plus from ultralight to black, small to large | — | Icon stroke weight that doesn't match the adjacent text |
| sf-symbols-10 | compare | Scale relative to cap height | small ⊕ spans cap band | medium slightly beyond · large plus spans the band | Icons sized in fixed px unrelated to the text beside them |
| sf-symbols-11 | single | Design variants + localised scripts | heart outline/fill × plain/slash/circle/square/rectangle | 12 text symbols in 8 scripts | Outline icons in a selected tab; unavailable state without a slash; Latin letters in icons for other scripts |
| typography-01 | single (2) | Increase game-label size and provide a backing shape | tiny plant names float on bright scenery | larger names sit on dark translucent lozenges; progress text grows | Game HUD labels and status text that blend into moving scenery |
| typography-02 | compare | Reflow meaningfully at the largest accessibility size | compact Mail header, avatar, subject and several body paragraphs | sender/recipient/date stack; subject wraps; body scrolls | Fixed-height rows, one-line labels and layouts that cannot grow with Dynamic Type |
| typography-03 | do/don't | Keep important visionOS text flat and legible | extruded letters overlap and blur together | flat white serif text on a translucent panel | Decorative 3D text used for content people must read |
| writing-01 | compare | Match tone to the situation | serious moment: short plain fall-detection text, one red SOS control, one "I'm OK" pill | celebratory moment: bold title + friendly sentence with the number and one exclamation mark | The same cheerful tone used for errors, security or payments; or a flat tone for a personal best |
| charting-data-01 | compare | Show data from several levels or perspectives | Stocks: price and change first, range selector, one line/area chart with axis values, then a key-statistics grid | Activity: summary numbers, three stacked bar charts (one colour per metric, shared time axis, value line above each), then an explanatory card | Charts with no headline number, no range control, no per-point values or no words explaining the data |
| collaboration-and-sharing-01 | compare | Summarise sharing permissions in one short phrase | share sheet with "Only invited people can edit." under the Collaborate pill | identical sheet with "Everyone can make changes." (only the summary line changes) | Sharing surfaces with no visible current-permission line, or a long settings paragraph in its place |
| multitasking-01 | compare | iPhone multitasking: app switcher and Picture in Picture | fanned cards of open apps (Music, Mail, Maps, Notes) | Mail with a small floating FaceTime video tile that keeps playing while people use another app | Apps that pause or hide media the person started when they switch context; PiP tiles that cover essential controls |
| offering-help-01 | compare | Choose the tip type by what must stay visible | Popover tip: floats over content, dims what is beneath | Annotation tip (embedded, points at a UI element) and Hint tip (embedded, no target); text is displaced, not covered | Tips that cover the content people need, or point at nothing when they should point at a control |
| offering-help-02 | do/don't | Prefer the filled symbol in a tip | ✗ outlined blue star at the tip's leading side | ✓ same tip with a filled star | Outline icons in tips (they read as disabled or decorative) |
| offering-help-03 | do/don't | Don't repeat the target's icon inside the tip | ✗ tip carries a star and points at a star icon | ✓ text-only tip pointing at the star | Tips that duplicate the icon they annotate |
| playing-video-01 | do/don't | Never bake padding into a 4:3 video (full-screen mode) | ✓ 4:3 picture only, filling the safe area and beyond | ✗ 4:3 picture with pink pillarbox bars: the actual picture is narrower and loses fill | Letterboxed or pillarboxed source files, "safe" black bars added in the editor |
| playing-video-02 | do/don't | Never bake padding into a 21:9 video (fit-to-screen mode) | ✓ 21:9 picture only, edge to edge | ✗ 21:9 picture with pink letterbox bars: the real picture is smaller and misses the sides | Ultrawide exports with black bars, smaller-than-expected video in PiP |
| disclosure-controls-01 | tabs | Row disclosure triangle: chevron points inward from the leading edge when hidden, down when shown | Finder-style list, three folders collapsed, right-pointing chevrons | Folder 2 open (chevron down) with three indented subfolders, each with its own chevron | Accordion or tree rows whose chevron never rotates, points the wrong way, or is the only clickable part |
| disclosure-controls-02 | tabs | Control-adjacent disclosure button: down when hidden, up when shown, same spot | small Save sheet with a down-chevron square beside the location pop-up | same button now up-chevron; the sheet has grown into a full browser with sidebar, search and New Folder | Several expander buttons in one view; an expander far from what it reveals; a button that moves when it opens |
| labels-01 | compare | watchOS system date/time and timer text components (two examples, one rule set) | date at the leading edge and time at the trailing edge of one row ("2/11/23", "2:14PM") in small white text on a black rounded face | a single large centred count-up/countdown "00:06.34" in light-weight numerals | Hand-built clocks/timers that drift or don't adapt to space; ticking digits that shift width (no tabular numerals); dates and times not localised |
| workouts-01 | compare | Show a workout session as three purpose-built screens (three images, one arrangement) | leftmost controls screen: 2 × 2 large pill buttons (End red, Resume yellow, New green, Segment dimmed) with the state word "Paused" above | middle metrics screen (big yellow elapsed time, calories, heart rate, pace placeholder, elevation) and rightmost media screen ("Not Playing", previous/play/next); page dots mark the position | Session views that mix navigation or lists into the live screen; small or crowded controls; zeros instead of placeholders when a sensor is off |
| charts-01 | compare | Choose a fixed or dynamic axis range on purpose (weekly vs monthly, one metric) | weekly Steps card: 7 orange-red bars, y axis 0–6,000 (ticks every 2,000), weekday labels, segmented D·W·M·6M·Y control with W selected | monthly Steps card: ~30 thin bars, y axis 0–10,000 (ticks every 5,000), date labels, M selected; the axis top follows the data so the tallest bar nearly fills the plot | Charts whose Y max is hard-coded so bars are tiny or clipped after a period change; axis ranges that don't recompute; light grey trailing-side axis labels |

## Pages scanned
design-principles, designing-for-{ios, ipados, macos, tvos, visionos, watchos, games, iphone-duo}
(no image pairs), accessibility, app-icons, branding, color, dark-mode, icons, images, immersive-experiences, inclusion, layout, materials, privacy, right-to-left, sf-symbols, typography, writing, charting-data, collaboration-and-sharing, drag-and-drop, entering-data, feedback, file-management, going-full-screen, launching, live-viewing-apps, loading, managing-accounts, managing-notifications, modality (no pairs), multitasking (1 compare), offering-help (tips: 1 compare + 2 do/don't), onboarding, playing-audio, playing-haptics (no pairs), printing, ratings-and-reviews, searching, settings, undo-and-redo (no pairs), workouts (1 compare: three watch screens), charts (1 compare: weekly vs monthly range), image-views (no pairs), text-views (no pairs), web-views (no pairs), boxes (no pairs), collections (no pairs), column-views (no pairs), disclosure-controls (2 tab pairs: collapsed/expanded), labels (1 compare: watchOS date/time and timer), playing-video (2 do/don't, in tabs; the fetch script now reads pairs inside tabs) (iPhone Duo pairs found once tab support was added).

Kind **tabs**: images shown behind tabs on Apple's page (one image per tab) — detected automatically.
Animations are not in this catalog: the SF Symbols videos were measured into numbers instead — see
`references/symbol-effects.md` and `tokens/apple-symbol-effects.json`.
Kind **do** / **don't** alone: a row that carries only ✓ or only ✗ (Apple sometimes splits one
comparison across two rules, e.g. Privacy's pre-alert ✓ and its two ✗ variants) — detected automatically.
Kind **single**: a stand-alone image that is itself a comparison (before/after drawn inside one
image, or a sequence under one rule). These are listed per page in `SINGLES` in the script.
