# Color — ⚠️ CRITICAL (zero-tolerance gate)
Source: https://developer.apple.com/design/human-interface-guidelines/color · Section: Foundations ·
Supported platforms: all six · Ingested: 2026-09-28 · Screenshots: 20 (text and every RGB value
cross-checked against the fetched JSON: identical) · Apple change log: **2025-12-16** Liquid Glass
guidance updated · **2025-06-09** system colour values updated + Liquid Glass guidance ·
**2024-02-02** UIKit vs SwiftUI grays; visionOS brightness balance · **2023-09-12** watchOS
background colour; tvOS swatches · **2023-06-21** visionOS · **2023-06-05** watchOS background ·
**2022-12-19** mint (dark) corrected.

> **[user decision] This page is marked CRITICAL.** Every design produced with this skill must
> follow it 100%, with no deviation:
> 1. Colour values come **only** from `tokens/apple-system-colors.css|json` (exact HIG values) or
>    the approved neutrals — never typed from memory. The pre-2025 values (`#007AFF`, `#FF3B30`,
>    `#FF9500`, `#5856D6`, `#AF52DE` …) are **outdated** and forbidden.
> 2. Every colour has **four** values: light, dark, increased-contrast light, increased-contrast
>    dark.
> 3. Run `node tools/check-colors.mjs <your files>` → **0 errors**; every WARN justified as a
>    declared brand/content colour.
> 4. Every text/background pair checked with `--pair` → ≥ 4.5:1 body, ≥ 3:1 large/bold/UI parts.
> 5. Compare with Apple's images `color-01 … color-04` (visual-examples) in both themes.
> 6. Run the § Checklist at the bottom; every item must be ✓ before the UI is called done.

## In one line
Use colour **judiciously** and **consistently**: one meaning per colour, never colour alone, system
(or fully specified) colours that work in light, dark and increased contrast, colour on Liquid Glass
only for the one primary action or status, and colour content kept legible under controls.

## What the page says

### Framing
- Judicious colour improves communication, evokes the brand, gives visual continuity, communicates
  status and feedback, and helps understanding.
- **System colours** look good on many backgrounds and appearance modes and **adapt automatically**
  to vibrancy and accessibility settings — the easy way to feel native.
- Custom colours can add personality; the guidance applies to both.

### Best practices
- **must — One colour, one meaning.** Use colour consistently, especially for **status** and
  **interactivity**. E.g. if the brand colour marks a borderless button as tappable, don't use the
  same or a similar colour for non-interactive text.
- **must — Work in light, dark and increased contrast.** iOS/iPadOS/macOS/tvOS have light and dark;
  system colours shift subtly per appearance for differentiation and contrast; with **Increase
  Contrast** the differences become much stronger. Prefer system colours (they carry all variants).
  A custom colour needs **light and dark variants plus an increased-contrast option for each**, with
  **significantly** more differentiation. **Even a single-appearance app must provide both light and
  dark colours** (Liquid Glass adapts between them).
  - Illustrated (Notes, yellow): Done button background yellow with **white** check in default; in
    increased contrast the yellow is **darker** (light) and the check turns **black** for contrast.
- **should — Test under different lighting**: bright surroundings make colours look darker and more
  muted; dim environments make them bright and saturated; in visionOS walls/objects and their
  reflected light change perception. Tune for most real conditions.
- **should — Test on different devices**: True Tone shifts the white point with ambient light
  (reading/photo/video/game apps can strengthen or weaken it via `UIWhitePointAdaptivityStyle`); test
  tvOS on several HD/4K TV brands and settings; on Mac switch colour profiles (P3, sRGB) in System
  Settings › Displays.
- **should — Artwork and translucency change nearby colours**: adjust surrounding colours so UI is
  neither overpowering nor weak (Maps: light scheme in map mode, dark in satellite). Colours look
  different behind or on translucent elements like toolbars.
- **should — Use system colour pickers** when people choose colours (consistent; shared saved colours
  across apps). (`ColorPicker`)

### Inclusive color
- **must — Never rely on colour alone** to distinguish objects, show interactivity, or convey
  essential information — add **text labels or glyph shapes**.
- **must — Avoid colours that hinder perception**: low contrast makes text/icons blend in; some
  combinations are indistinguishable for colour-blind people. (→ Accessibility)
- **should — Consider cultural meaning**: red = danger in some cultures, positive in others.
  Illustrated: Stocks — rising trend **green in English**, **red in Chinese**.

### System colors
- **must — Don't hard-code system colour values in apps**: documented values are design references
  and **change between releases**; use `Color` / `UIColor` / `NSColor`. (Web exception: there is no
  API, so use the token file — and re-check it when Apple updates.)
- **Dynamic system colours** (iOS, iPadOS, macOS, visionOS) match standard components and adapt to
  light/dark; each is defined by **purpose**, not value (background levels; foreground labels,
  links, separators).
- **must — Don't redefine their meaning**: e.g. never use `separator` as a text colour or
  `secondaryLabel` as a background.

### Liquid Glass color
- Liquid Glass has **no colour of its own**; it takes colour from content behind it. Some elements
  can be tinted ("stained glass") — useful for a **primary call to action**; that's how the system
  styles **prominent buttons**. Symbols/text on glass can also be coloured. Illustrated: Done ✓ on
  blue glass; selected tab item (symbol + label) blue; Share button over a colourful photo picking up
  its colours.
- Small elements (toolbars, tab bars) switch glass between light and dark with the content beneath;
  their symbols/text are **monochrome** by default (darker over light content, lighter over dark).
  Large elements like **sidebars** use **more opaque** glass for legibility.
- **must — Colour on glass sparingly**: only for real emphasis (status, primary action). For a
  primary action colour the **background**, not the symbol/text (system puts the accent colour on
  the background of prominent buttons like Done). **Never colour the backgrounds of several
  controls.** (visual pair **color-04**: ✗ every toolbar button blue; ✓ only Done blue.)
- **must — Colourful background → don't colour control labels similarly**: prefer **monochrome**
  toolbars/tab bars, or an accent with enough differentiation. With mostly monochrome content, the
  brand colour as app accent is effective.
- **must — Mind colour placement in the content layer**: avoid similar colours in content and
  controls overlapping; the **resting state** (e.g. top of a scroll view) must be clearly legible
  even if colourful content later scrolls beneath.

### Color management
- **Colour space** = the colours of a model (RGB, CMYK); common gamuts: **sRGB**, **Display P3**.
  **Colour profile** = the mapping data; images embed it.
- **should — Embed colour profiles in images**; sRGB is accurate on most displays.
- **should — Use wide colour (P3) on capable displays** for more lifelike photos/video and more
  meaningful data/status colours: **Display P3 profile, 16 bits per channel, export PNG**; design on a
  wide-colour display.
- **may — Provide colour-space-specific variants**: close P3 colours can merge on sRGB and P3
  gradients can clip; asset catalogs can hold per-space versions.

### Platform considerations
- **iOS, iPadOS**: two dynamic background sets — **system** and **grouped** — each with primary,
  secondary, tertiary. Grouped (`systemGroupedBackground`, `secondarySystemGroupedBackground`,
  `tertiarySystemGroupedBackground`) for grouped table views; otherwise system (`systemBackground`,
  `secondarySystemBackground`, `tertiarySystemBackground`). Primary = whole view; secondary = groups
  within it; tertiary = groups within secondary elements.
  Foreground dynamic colours: **label** (primary text), **secondaryLabel**, **tertiaryLabel**,
  **quaternaryLabel**, **placeholderText**, **separator** (lets content show through),
  **opaqueSeparator** (doesn't), **link**.
- **macOS** dynamic colours (also in the Color panel's Developer palette): alternateSelectedControlText
  (text on a selected list/table surface), alternatingContentBackground (alternating rows/columns),
  controlAccent (user's accent), controlBackground (large elements like browsers/tables), control
  (control surface), controlText, currentControlTint, disabledControlText, findHighlight,
  grid (table gridlines), headerText, highlight (virtual light source), keyboardFocusIndicator (focus
  ring), label, link, placeholderText, quaternaryLabel (watermarks), secondaryLabel (subheads/extra
  info), selectedContentBackground (key window), selectedControl, selectedControlText,
  selectedMenuItemText, selectedTextBackground, selectedText, separator, shadow (virtual shadow of
  raised objects), tertiaryLabel, textBackground, text (document text), underPageBackground,
  unemphasizedSelectedContentBackground / TextBackground / Text (non-key window), windowBackground,
  windowFrameText.
  - **App accent colour** (macOS 11+): tints buttons, selection highlight, sidebar icons **only when
    the user's accent setting is Multicolor**; otherwise the user's colour replaces it — except
    **fixed-colour sidebar icons** (colour carries meaning, never overridden). Screenshot: System
    Settings row "Color" with Multicolor + blue, purple, pink, red, orange, yellow, green, graphite
    swatches; "Text highlight color: Accent Color".
- **tvOS**: limited palette coordinated with the logo (brand while deferring to content); **never
  colour alone for focus** — use subtle scaling and responsive animation.
- **visionOS**: colour sparingly, especially on **glass** (surroundings show through and hurt
  colourful content); use colour to flag important info or show relationships; prefer colour in
  **bold text and large areas** (not light text/small areas); in fully immersive scenes keep
  **brightness balanced** — no bright (especially flashing/moving) objects on very dark backgrounds
  when eyes are dark-adapted. visionOS system colours = the **dark** values.
- **watchOS**: background colour to **support content or add information** (Activity: each ring's
  view has a matching background) — not decoration; avoid full-screen background colour on views
  that stay on screen long (workouts, audio). Graphic complications may be shown **tinted** with the
  wearer's colour.

## Specs & values — EXACT (sRGB; do not retype, use `tokens/apple-system-colors.*`)

### System colours
| Name | Light | Dark | Incr. contrast light | Incr. contrast dark | Light on white | Dark on black |
|---|---|---|---|---|---|---|
| red | `#FF383C` (255,56,60) | `#FF4245` (255,66,69) | `#E9152D` (233,21,45) | `#FF6165` (255,97,101) | 3.57 | 6.12 |
| orange | `#FF8D28` (255,141,40) | `#FF9230` (255,146,48) | `#C55300` (197,83,0) | `#FFA056` (255,160,86) | 2.31 | 9.41 |
| yellow | `#FFCC00` (255,204,0) | `#FFD600` (255,214,0) | `#A16A00` (161,106,0) | `#FEDF43` (254,223,67) | 1.51 | 14.87 |
| green | `#34C759` (52,199,89) | `#30D158` (48,209,88) | `#008932` (0,137,50) | `#4AD968` (74,217,104) | 2.22 | 10.39 |
| mint | `#00C8B3` (0,200,179) | `#00DAC3` (0,218,195) | `#008575` (0,133,117) | `#54DFCB` (84,223,203) | 2.12 | 11.82 |
| teal | `#00C3D0` (0,195,208) | `#00D2E0` (0,210,224) | `#008198` (0,129,152) | `#3BDDEC` (59,221,236) | 2.16 | 11.30 |
| cyan | `#00C0E8` (0,192,232) | `#3CD3FE` (60,211,254) | `#007EAE` (0,126,174) | `#6DD9FF` (109,217,255) | 2.16 | 11.94 |
| blue | `#0088FF` (0,136,255) | `#0091FF` (0,145,255) | `#1E6EF4` (30,110,244) | `#5CB8FF` (92,184,255) | 3.52 | 6.49 |
| indigo | `#6155F5` (97,85,245) | `#6D7CFF` (109,124,255) | `#564ADE` (86,74,222) | `#A7AAFF` (167,170,255) | 5.09 | 5.98 |
| purple | `#CB30E0` (203,48,224) | `#DB34F2` (219,52,242) | `#B02FC2` (176,47,194) | `#EA8DFF` (234,141,255) | 4.17 | 5.79 |
| pink | `#FF2D55` (255,45,85) | `#FF375F` (255,55,95) | `#E7124D` (231,18,77) | `#FF8AC4` (255,138,196) | 3.65 | 5.96 |
| brown | `#AC7F5E` (172,127,94) | `#B78A66` (183,138,102) | `#956D51` (149,109,81) | `#DBA679` (219,166,121) | 3.53 | 6.84 |
"Light on white" = contrast of the light value on `#FFFFFF` (= white text on that fill). All
increased-contrast light values reach **≥ 4.5:1** on white (Apple designed them to).

### iOS/iPadOS system grays (UIKit `systemGray…`; SwiftUI `gray` = `systemGray`)
| Name | Light | Dark | Incr. contrast light | Incr. contrast dark |
|---|---|---|---|---|
| gray | `#8E8E93` | `#8E8E93` | `#6C6C70` | `#AEAEB2` |
| gray2 | `#AEAEB2` | `#636366` | `#8E8E93` | `#7C7C80` |
| gray3 | `#C7C7CC` | `#48484A` | `#AEAEB2` | `#545456` |
| gray4 | `#D1D1D6` | `#3A3A3C` | `#BCBCC0` | `#444446` |
| gray5 | `#E5E5EA` | `#2C2C2E` | `#D8D8DC` | `#363638` |
| gray6 | `#F2F2F7` | `#1C1C1E` | `#EBEBF0` | `#242426` |

### Consequences you must apply (computed)
- **White text on a light-mode system colour fill fails 4.5:1 for every hue except indigo (5.09)**:
  blue 3.52, red 3.57, pink 3.65, purple 4.17, green 2.22, orange 2.31, yellow 1.51. So:
  - filled buttons with **body-size white labels** → use black/white pills (21:1), indigo, or the
    **increased-contrast** variant (blue `#1E6EF4` 4.57, red `#E9152D` 4.56), or make the label
    ≥ 18 pt / bold (3:1 rule) — Apple itself switches the label to **black on yellow** in increased
    contrast;
  - **yellow, orange, green, mint, teal, cyan fills take dark labels** in light mode.
- **Coloured text on white**: only indigo and purple pass 4.5:1 at default; for coloured body text use
  the increased-contrast light values (all ≈ 4.55–6.1).
- In dark mode every system colour on black passes 4.5:1.
- `systemGray` text on white = 3.26 → large text only; `gray2…6` are fills/separators, never text.

## Visual notes (from screenshots)
- **(from screenshot)** Hero: yellow Foundations panel with a paint-palette glyph.
- Visual pairs (fetch with `tools/fetch-visual-examples.mjs`): **color-01** Notes in 4 modes (default /
  increased contrast × light / dark) — Done button yellow with white check → darker yellow with black
  check; **color-02** Stocks green (English) vs red (Chinese); **color-03** coloured glass button,
  coloured tab item, glass picking up photo colour; **color-04** ✗ all toolbar buttons blue ✓ only
  Done blue.
- **(from screenshot)** Specification tables show large rounded colour swatches with R/G/B values
  stacked beside each; macOS accent-colour settings row with nine circular swatches.

## Web translation
| HIG | Web implementation |
|---|---|
| System colours | `@import "tokens/apple-system-colors.css"`; use `var(--apple-blue)` etc. — never retype hex. |
| Light/dark/high contrast | Token file already switches on `prefers-color-scheme`, `data-theme`, `prefers-contrast: more`. Custom colours must follow the same four-mode pattern. Also handle `forced-colors: active` with system keywords (`CanvasText`, `ButtonText`, `Highlight`, `LinkText`). |
| One meaning per colour | Semantic aliases (`--color-accent`, `--color-destructive`, `--color-success`, `--color-warning`); never reuse the accent for non-interactive text. |
| Dynamic semantic colours | Map iOS roles to web tokens: label → primary text; secondaryLabel → `black/60`-class; separator → hairline; systemBackground/secondary/tertiary and grouped equivalents → canvas `#F5F5F7` (grouped) with `#FFFFFF` groups (our field-note pattern = iOS grouped background). Never use a separator colour for text or a text colour as a background. |
| Glass colour sparingly | Frosted nav/toolbars neutral (monochrome icons); tint only the one primary button background. |
| Colourful content under controls | Controls over imagery: neutral glass + scrim; ensure the resting scroll position is legible. |
| P3 | `@media (color-gamut: p3) { --apple-blue: color(display-p3 …) }` only as progressive enhancement; sRGB tokens are the source of truth. Images: embed profiles, PNG for lossless. |
| Cultural meaning | Localise status colours for finance (e.g. zh/ja markets: red = up). |
| User colour choice | `<input type="color">` / native pickers over custom widgets. |

## Checklist (all must be ✓)
- [ ] Every colour literal is from `tokens/apple-system-colors.*` or the approved neutrals —
      `check-colors.mjs` reports **0 errors**; every WARN is a documented brand/content colour.
- [ ] No outdated Apple values (`#007AFF`, `#FF3B30`, `#FF9500`, `#5856D6`, `#AF52DE`, `#5AC8FA` …).
- [ ] Each colour defined for light, dark, increased-contrast light, increased-contrast dark.
- [ ] Each colour has exactly one meaning; accent never on non-interactive text.
- [ ] No information by colour alone (label or shape always present).
- [ ] All text pairs ≥ 4.5:1 (≥ 3:1 large/bold, UI components) in all four modes (`--pair`).
- [ ] At most one tinted glass/control background per view (the primary action); toolbars and tab
      bars monochrome over colourful content.
- [ ] Resting state of colourful content under controls is legible.
- [ ] Semantic roles respected (separator ≠ text, text colour ≠ background).
- [ ] Screenshots in light and dark compared with visual pairs color-01 … color-04.

## Related (ingestion status)
Dark Mode, Accessibility (✓), Materials (Liquid Glass), Sidebars, Complications — not yet ingested
(except ✓).
