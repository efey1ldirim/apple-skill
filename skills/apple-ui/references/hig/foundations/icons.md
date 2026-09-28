# Icons (interface icons / glyphs)
Source: https://developer.apple.com/design/human-interface-guidelines/icons · Section: Foundations ·
Supported platforms: iOS, iPadOS, macOS, tvOS, visionOS, watchOS · Ingested: 2026-09-28 ·
Screenshots: 20 (text cross-checked end to end against the fetched content; differences marked
"(from screenshot)") · Apple change log: **2025-06-09** added the table of SF Symbols for common
actions; **2023-06-21** visionOS guidance.

## In one line
An interface icon expresses **one concept instantly**: highly simplified, consistent in size /
detail / stroke weight / perspective across the whole app, weight-matched to adjacent text,
optically (not geometrically) centred, vector, labelled for VoiceOver — and for common actions,
use the **standard symbol** everyone already knows.

## What the page says

### Framing
- **Interface icon ≠ app icon.** App icons may use rich shading, texture and highlights to express
  personality (see `app-icons.md`); an interface icon uses **streamlined shapes and touches of
  colour** to communicate one straightforward idea (items, actions, modes).
- Interface icons are also called **glyphs**. Either design your own or take symbols from the
  **SF Symbols** app (as-is or customised).
- Both glyphs and symbols are drawn in **black + clear** only: the shape is the black area; the
  system can paint any colour into the black areas (tint, selection, vibrancy). → Draw icons as a
  single-colour mask, never with baked-in colours.

### Best practices
- **must — Recognizable, highly simplified design.** Too much detail makes an icon confusing or
  unreadable. Aim for a simple, universal form most people recognise quickly; use familiar visual
  metaphors **directly related** to the action it starts or the content it represents.
- **must — Visual consistency across all interface icons in the app** — custom only or mixed with
  system ones: same **size, level of detail, stroke thickness (weight) and perspective**. Adjust an
  individual icon's dimensions when its visual weight differs so it *looks* the same size.
  - Diagram (**icons-01**): camera, heart, envelope, alarm clock between two dashed guide lines and a
    red midline; the alarm clock is lighter in mass so it extends **above** the top guide to balance
    optically. Second diagram: all four with interior lines of **identical stroke weight**.
    Captions: adjust individual sizes as needed … and use the same stroke weight in
    every icon.
- **should — Match icon weight to adjacent text weight** (unless you intentionally emphasise one of
  them). Same weight → consistent appearance and level of emphasis.
- **should — Add padding to a custom icon to achieve optical alignment.** Asymmetric icons look off
  when centred geometrically. Example: a **download** glyph (arrow down onto a bar) has more mass at
  the bottom, so geometrically centred in a disk it looks too low.
  - Fix: nudge it **up a few pixels** until optically centred; bake the correction into the asset as
    **padding** (extra transparent pixels below) so that geometric centring of the asset = optical
    centring of the glyph. Adjustments are tiny but have a big visual impact. (**icons-02**: three
    images — geometric centre with pink measure bars; moved-up version + padded asset; before/after.)
- **should — Provide a selected-state version only if necessary.** Icons in standard components
  (**toolbars, tab bars, buttons**) get their selected appearance from the system automatically.
  (**icons-03**: two toolbar buttons sharing one glass background; the selected **Filter** icon
  sits on a **blue accent-filled** circle with a white glyph, the unselected **More** (•••) stays
  default.) Caption: in a toolbar, a selected icon receives the app's accent colour.
- **should — Use inclusive images.** Prefer **gender-neutral human figures**; avoid images that are
  hard to recognise across cultures or languages (see Inclusion).
- **should — Include text only when essential to the meaning.** A character can be the most direct
  way to say "text formatting". If you show characters, **localise them**. To suggest a passage of
  text, draw an **abstract** representation, and provide a **flipped** version for right-to-left
  contexts (see Right to left). (**icons-04**: SF Symbols info panels.)
  - `character` symbol ("A") — localised variants. The alt text lists Latin, Arabic, Hebrew, Hindi,
    Japanese, Korean, Thai, Chinese; **(from screenshot)** the live panel shows a longer list:
    Latin, Arabic, Bengali, Gujarati, Hebrew, Hindi, Japanese, Kannada, … (scrolls further).
  - `text.page` symbol (three left-aligned lines in a rounded rectangle) — Left-to-Right and
    Right-to-Left variants.
  - Captions: localise icons that show individual characters; flip icons that
    suggest reading direction.
- **must — Custom icons in a vector format (PDF or SVG).** Vectors scale automatically for
  high-resolution displays. **PNG** (used for app icons and effect-rich images) doesn't scale → you'd
  need multiple versions per icon. Alternative: make a **custom SF Symbol** and set a scale so its
  emphasis matches adjacent text.
- **must — Alternative text labels for custom icons** (accessibility descriptions): invisible, but
  VoiceOver reads them aloud (see VoiceOver).
- **must not — Replicas of Apple hardware.** Hardware changes often and dates your UI. If you must
  show Apple hardware, use only **Apple Design Resources** images or the SF Symbols for Apple products.

### Standard icons (SF Symbols for common actions — use in menus, toolbars, buttons, etc.)
One symbol can serve several actions (grouped rows).

| Group | Action(s) | SF Symbol |
|---|---|---|
| Editing | Cut | `scissors` |
| | Copy | `document.on.document` |
| | Paste | `document.on.clipboard` |
| | Done · Save | `checkmark` |
| | Cancel · Close | `xmark` |
| | Delete | `trash` |
| | Undo | `arrow.uturn.backward` |
| | Redo | `arrow.uturn.forward` |
| | Compose | `square.and.pencil` |
| | Duplicate | `plus.square.on.square` |
| | Rename | `pencil` |
| | Move to · Folder | `folder` |
| | Attach | `paperclip` |
| | Add | `plus` |
| | More | `ellipsis` |
| Selection | Select | `checkmark.circle` |
| | Deselect · Close | `xmark` |
| | Delete | `trash` |
| Text formatting | Superscript | `textformat.superscript` |
| | Subscript | `textformat.subscript` |
| | Bold | `bold` |
| | Italic | `italic` |
| | Underline | `underline` |
| | Align Left | `text.alignleft` |
| | Center | `text.aligncenter` |
| | Justified | `text.justify` |
| | Align Right | `text.alignright` |
| Search | Search | `magnifyingglass` |
| | Find · Find and Replace · Find Next · Find Previous · Use Selection for Find | `text.page.badge.magnifyingglass` |
| | Filter | `line.3.horizontal.decrease` |
| Sharing & exporting | Share · Export | `square.and.arrow.up` |
| | Print | `printer` |
| Users & accounts | Account · User · Profile | `person.crop.circle` |
| Ratings | Dislike | `hand.thumbsdown` |
| | Like | `hand.thumbsup` |
| Layer ordering | Bring to Front | `square.3.layers.3d.top.filled` |
| | Send to Back | `square.3.layers.3d.bottom.filled` |
| | Bring Forward | `square.2.layers.3d.top.filled` |
| | Send Backward | `square.2.layers.3d.bottom.filled` |
| Other | Alarm | `alarm` |
| | Archive | `archivebox` |
| | Calendar | `calendar` |

Observations from the table art: all outline style at one regular weight, except Paste
(document partly filled), the layer-ordering set (one filled layer shows *which* layer moves) and
Calendar (filled header band). Filled = meaning, not decoration.

### Platform considerations
- iOS, iPadOS, tvOS, visionOS, watchOS: nothing extra.
- **macOS — Document icons** (for custom document types):
  - Traditional look: sheet of paper with the **top-right corner folded down** — distinguishes
    documents from apps even at small sizes.
  - If you don't supply one, macOS composites **your app icon + the file extension** onto the
    canvas (e.g. Preview's JPG icon).
  - A **set** of document icons can separate file types (Xcode: project, AR object, Swift file).
  - Build from any combination of **background fill, center image, text**; the system layers,
    positions, masks and composites them onto the folded-corner shape (example: pink grid + white
    EKG line fill, pink heart center image, text "HEART").
  - **should — Simple images** with uncomplicated shapes and a **reduced palette of distinct
    colours**; icons can render as small as **16×16 px** — recognisable at every size.
  - **may — One expressive background image** with no center image (Xcode, TextEdit rich text).
  - **should — Reduce complexity at small sizes**: fewer, thicker lines aligned to the pixel grid at
    intermediate sizes; drop them entirely at 16×16. captions: 32×32 → fewer
    grid lines, thicker EKG line; 16×16 @2x → EKG kept, no grid; 16×16 @1x → no EKG, no grid.
  - **must not — Important content in the top-right corner** of the background fill: the system
    masks the image and draws the white folded corner on top.
  - Background fill sizes: 512×512 @1x / 1024×1024 @2x · 256×256 / 512×512 · 128×128 / 256×256 ·
    32×32 / 64×64 · 16×16 / 32×32 (px).
  - **may — Center image** of a familiar object that conveys the type or link to your app; simple
    and unambiguous. Center image = **half** the document icon canvas (32×32 icon → 16×16 image).
    Sizes: 256×256 @1x / 512×512 @2x · 128×128 / 256×256 · 32×32 / 64×64 · 16×16 / 32×32 (px).
  - **should — ~10% margin** on the center-image canvas; keep the image within it, occupying about
    **80%** of the canvas (256×256 → ~205×205 area); parts may extend into the margin for optical
    alignment. (**icons-09**; **(from screenshot)** the margin band in the diagram is **pink**,
    though the alt text says blue; the heart's side lobes poke into the margin.)
  - **may — Succinct term instead of the extension** when the extension is unfamiliar (SceneKit:
    "scene" instead of "scn"). System scales the text to fit and **capitalises every letter** → keep
    it short enough to stay legible small.

### Resources listed
Related: App icons, SF Symbols. Video: *Designing Glyphs* (WWDC17 823). **(from screenshot)** the
video thumbnail shows a 5×3 grid of small white glyphs (phone, bubble, envelope, mic, speaker,
video, camera, house, briefcase, alarm, flag, star, heart, lock, calculator) on black.

## Specs & values
- Format: vector (**SVG / PDF**), single-colour mask (black + clear), colour applied at render time.
- Consistency axes: size · level of detail · **stroke weight** · perspective.
- Weight: icon weight = adjacent text weight (default).
- Optical centring: shift by a few px toward the lighter side; encode as asset padding.
- Selected state in toolbar: accent-colour filled background behind the glyph (system-provided).
- macOS document icon: min display **16×16 px**; center image = ½ canvas; margin ≈ 10%; image ≈ 80%.

## Visual notes (from screenshots)
- Hero: yellow gradient panel with the **Command (⌘) key** glyph drawn on a construction grid
  (circles, diagonals, dashed keylines) — icons are built on geometry. Yellow nods to the yellow
  band of the original six-colour Apple logo.
- Section nav colour for Foundations = yellow (consistent with `apple-web/site-patterns.md`).
- Standard icons are presented as a 3-column table (Action · Icon · `Symbol name` in monospace) with
  hairline row separators; grouped actions share one icon cell spanning their rows.

## Visual examples
**icons-01 … 09** — see `references/visual-examples/README.md` (fetch with
`node tools/fetch-visual-examples.mjs`). Most useful for self-checks: icons-01 (size/weight
balance), icons-02 (optical centring), icons-03 (toolbar selected state).

## Web translation
| HIG | Web |
|---|---|
| Glyphs are single-colour masks | Inline SVG with `fill="currentColor"` / `stroke="currentColor"`; colour from the parent text colour or a token (`var(--apple-blue)` etc. — COLOR GATE applies). Never multi-colour or baked hex in interface icons. |
| One icon family, one stroke weight | Use **one** icon set per product (e.g. SF Symbols on Apple platforms; on the web a single outline set such as Lucide) at **one** `strokeWidth` (1.5 for 15–17px text, 2 for bolder/semibold contexts). Never mix sets (Heroicons + Lucide + emoji). No emoji as icons (see anti-patterns). |
| Weight-match text | 17px regular text → icon ~17–20px, stroke 1.5; 13px semibold label → icon ~14px, stroke 2. Icon size ≈ text cap-height to 1.2× the font size; align with `inline-flex items-center gap-1.5`. |
| Optical size balance | Allow per-icon size tweaks (±1–2px) for light/open shapes (clock, circle-based) vs heavy ones (camera, envelope). |
| Optical centring | For asymmetric glyphs in circles/pills (download, play ▶, share), nudge with `translate-y-[-1px]` / `translate-x-[1px]` (play triangles go right), or add padding inside the SVG viewBox. Check visually, not by the box model. |
| Selected state from the system | Don't hand-draw filled/outline pairs for tabs/toolbars; express selection with the component (accent-filled circle or tint + `aria-pressed`/`aria-selected`). Filled variants only where the fill carries meaning (layer ordering, active mode). |
| Alt text | Icon-only button: `aria-label="Share"` on the button, `aria-hidden="true"` on the SVG. Decorative icon beside text: `aria-hidden="true"`. Add a `title` tooltip on desktop for icon-only controls. |
| Localise characters / flip direction | Icons containing letters swap per locale; icons implying reading direction (text lines, back/forward arrows, reply) get `[dir="rtl"] .icon-directional { transform: scaleX(-1) }`. Don't flip clocks, checkmarks, media play. |
| Vector only | SVG sprites/inline SVG; no PNG interface icons. Raster only for photos/app-icon art. |
| No hardware replicas | Don't draw iPhones/Macs; use Apple's marketing assets or device-agnostic shapes. |

### Standard action → web icon (our mapping, Lucide names)
Keep the **meaning** identical to Apple's table so users recognise actions everywhere:
Cut `scissors` · Copy `copy` · Paste `clipboard-paste` · Done/Save `check` · Cancel/Close `x` ·
Delete `trash-2` · Undo `undo-2` · Redo `redo-2` · Compose `square-pen` · Duplicate `copy-plus` ·
Rename `pencil` · Move to/Folder `folder` · Attach `paperclip` · Add `plus` · More `ellipsis` ·
Select `circle-check` · Superscript `superscript` · Subscript `subscript` · Bold `bold` ·
Italic `italic` · Underline `underline` · Align `align-left` / `align-center` / `align-justify` /
`align-right` · Search `search` · Find `file-search` · Filter `list-filter` · Share/Export
`share` (square + up arrow — Apple's share shape; **not** the three-node Android share) · Print
`printer` · Account `circle-user` · Like/Dislike `thumbs-up` / `thumbs-down` · Bring to front /
Send to back `bring-to-front` / `send-to-back` · Alarm `alarm-clock` · Archive `archive` ·
Calendar `calendar`.
Rules: **Close = ×, never a back chevron; Delete = trash (destructive red only in the confirming
control); More = horizontal ellipsis `•••`; Filter = three decreasing lines, never a funnel** in an
Apple-style UI.

### Relation to field notes
- Field notes' "Back/close in headers are text, not boxed icon buttons" still holds; when a close
  control *is* an icon, it's the plain `xmark` (×) glyph — no box — or a round glass/grey circle
  button as in Apple's sheets.
- Selection circle tick (`stroke 3` at 12–13px) is a deliberate emphasis exception inside a filled
  circle; everywhere else keep one stroke weight.

## Checklist
- [ ] One icon family, one stroke weight, one perspective across the UI?
- [ ] Icons weight- and size-matched to adjacent text?
- [ ] Standard actions use the standard metaphor (× close, trash delete, ••• more, square-arrow-up share, three-line filter)?
- [ ] Asymmetric glyphs optically centred inside circles/pills (compare with icons-02)?
- [ ] No hand-made selected variants for tabs/toolbars; selection via accent fill/tint?
- [ ] Icons are `currentColor` SVG (vector, colour from tokens), no PNG, no emoji?
- [ ] Every icon-only control has an accessible label; decorative icons `aria-hidden`?
- [ ] Letters localised; direction-implying icons flip in RTL?
- [ ] Human figures gender-neutral; metaphors culture-neutral?
- [ ] No Apple hardware replicas?

## Related (ingestion status)
App icons (✓), Inclusion (✓), Right to left (✓ flip/don't-flip rules for icons), SF Symbols, VoiceOver, Menus, Toolbars, Buttons — not yet
ingested (except ✓).
