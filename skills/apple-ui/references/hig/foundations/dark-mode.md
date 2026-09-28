# Dark Mode
Source: https://developer.apple.com/design/human-interface-guidelines/dark-mode · Section:
Foundations · Supported platforms: iOS, iPadOS, macOS, tvOS (**not** visionOS, watchOS) ·
Ingested: 2026-09-28 · Screenshots: 10 (text cross-checked end to end: matches the fetched content)
· Apple change log: **2024-08-06** added art contrasting light and dark appearances.
Part of the **COLOR GATE** (see `color.md`, CRITICAL): the dark-mode checks below are mandatory.

## In one line
Dark Mode is a **system-wide** preference people expect every app to honour: design both
appearances as first-class (not inversions), use adaptive/semantic colours, keep contrast ≥ 4.5:1
(aim 7:1 for custom small text), layer depth with **base vs elevated** backgrounds, and adapt icons
and images per appearance.

## What the page says

### Framing
- On iOS, iPadOS, macOS, tvOS many people use Dark Mode as default and **expect all apps and games
  to respect it**. The system applies a dark palette to all screens, views, menus, controls, and may
  add perceptual contrast so foreground content stands out on dark backgrounds.

### Best practices
- **should not — App-specific appearance setting**: it makes people change more than one setting,
  and they may think the app is broken when it ignores their system choice.
- **must — Look good in both modes**: people may also choose **Auto**, which switches light↔dark
  during the day — possibly **while the app is running** (transition live, keep state).
- **must — Test legibility in both modes**, incl. Dark Mode with **Increase Contrast** and **Reduce
  Transparency**, separately and together: dark text on dark backgrounds can become less legible;
  Increase Contrast in dark can even *reduce* contrast between dark text and dark background.
- **may — Dark-only interface in rare cases**, e.g. immersive media viewing where UI should recede
  (Stocks uses a dark-only appearance — screenshot).

### Dark Mode colors
- Dark palette = **dimmer backgrounds, brighter foregrounds**; colours are **not simple inversions**
  — many are, some aren't (see Color › Specifications / `tokens/apple-system-colors.*`).
- **must — Use adaptive colours**: semantic colours (`labelColor`, `controlColor` on macOS;
  `separator` on iOS/iPadOS) adapt automatically. Custom colour → a Color Set with **bright and dim
  variants**. **No hard-coded or non-adapting colours.** (visual pair **dark-mode-01**: the same
  four system colours shift slightly between light and dark.)
- **must — Contrast ≥ 4.5:1 in all appearances**; for **custom** foreground/background pairs
  **strive for 7:1**, especially small text.
- **should — Soften white backgrounds** in content images (darken slightly) so they don't glow in a
  dark context.

#### Icons and images
- System uses **SF Symbols** (auto-adapt) and full-colour images optimised for both modes.
- **should — Use SF Symbols** where possible, tinted with dynamic colours or vibrancy.
- **should — Separate interface icons per appearance when needed**: a full moon may need a subtle
  dark outline on light but none on dark; an oil drop may need a light border on dark
  (pair **dark-mode-02**: black drop on light; on dark, a white-outlined drop).
- **must — Full-colour images/icons must work in both**: same asset if it does; otherwise modify it or
  make light and dark variants (asset catalog → one named image). (pair **dark-mode-03**: line
  illustration fine on light; placed on dark it loses detail; adjusted version restores contrast.)

#### Text
- System keeps text legible on dark with **vibrancy** and **increased contrast**.
- **must — Use system label colours** (primary, secondary, tertiary, quaternary) — they adapt
  (pair **dark-mode-04**: primary label on light, secondary label on dark).
- **should — Use system text fields/views** (they adjust for vibrancy) rather than drawing text.

### Platform considerations
- tvOS: nothing extra. **visionOS and watchOS don't support Dark Mode.**
- **iOS, iPadOS — base vs elevated backgrounds**: two dark background sets create depth when one
  dark interface sits on another — **base** (dimmer, recedes) and **elevated** (brighter, advances).
  (pair **dark-mode-05**: label / secondaryLabel / tertiaryLabel / quaternaryLabel on base = black,
  elevated = near-black, and light.)
  - **must — Prefer system backgrounds**: they switch base→elevated automatically for foreground
    interfaces (**popovers, modal sheets**) and for separation between apps in multitasking and
    between windows. Custom backgrounds hide these distinctions.
- **macOS — desktop tinting**: with the **Graphite** accent, window backgrounds pick up colour from
  the desktop picture. **should — Add some transparency to custom component backgrounds** — only
  for components with a visible background/bezel and only in a **neutral (uncoloured) state**; never
  when the component shows colour (the colour would fluctuate with the wallpaper/position).

### Resources listed
Related: Color, Materials, Typography. Videos: *Meet Liquid Glass* (WWDC25), *Implementing Dark
Mode on iOS* (WWDC19 214).

## Specs & values
- Contrast: ≥ **4.5:1** minimum all appearances; **7:1** target for custom colour pairs (small text).
- Elevated surfaces (from HIG system grays, dark column): base canvas `#000000`/near-black →
  elevated `#1C1C1E` (gray6 dark) → next level `#2C2C2E` (gray5 dark) → `#3A3A3C` (gray4 dark).
- System colours dark values: `tokens/apple-system-colors.css` (auto-switching).

## Visual notes (from screenshots)
- **(from screenshot)** Hero: yellow panel with the half-filled circle (appearance) glyph.
- **(from screenshot)** Stocks dark-only: black background, white large "AAPL", green gains,
  dark-grey sheet with round glass close/share/more buttons, segmented time-range chips.
- **(from screenshot)** Base/Elevated/Light diagram: four label levels fading from full white to
  very faint grey on pure black (base) and on a slightly lighter near-black (elevated); on white the
  same levels in dark grey tones.
- Visual pairs: **dark-mode-01 … 05** (fetch via `tools/fetch-visual-examples.mjs`).

## Conflicts with field notes — resolved
1. **Appearance toggle.** Our field notes/landing note suggested a Light/Dark/Auto control (Apple's
   own *website* footer has one). HIG says avoid an app-specific setting. **Rule for this skill:**
   default and primary behaviour = follow the system (`prefers-color-scheme`, i.e. "Auto"); an
   override control is allowed **only on websites/web apps**, placed in settings/footer, defaulting
   to Auto and never forcing a theme. Native apps: no override.
2. **Dark surfaces for overlays.** Field notes use `#08080A` canvas + `white/5.5` groups. Per HIG,
   foreground layers (modals, sheets, popovers, menus) must look **elevated** — lighter than the
   base: use `#1C1C1E` / `#2C2C2E` (or `white/8–12` over the base), never the same darkness as the
   page behind.

## Web translation
| HIG | Web |
|---|---|
| Honour system appearance, live | `prefers-color-scheme` + `matchMedia(...).addEventListener('change', …)`; no flash on load (inline theme script before paint); `color-scheme: light dark` on `:root` so form controls and scrollbars adapt. |
| No inversions; adaptive colours | Token pairs per mode (`tokens/apple-system-colors.css`); never `filter: invert()`. |
| Increase Contrast / Reduce Transparency | `prefers-contrast: more` (tokens switch), `prefers-reduced-transparency: reduce` → replace translucent/blurred surfaces with opaque ones. Test combinations. |
| 4.5:1 min, 7:1 custom | `node tools/check-colors.mjs --pair` in both modes; custom small text target 7:1. |
| Soften white images | `@media (prefers-color-scheme: dark) { img:not([data-keep]) { filter: brightness(.92) } }` for content images with white backgrounds; separate dark assets via `<picture><source media="(prefers-color-scheme: dark)">`. |
| Icons per appearance | SVG icons with `currentColor`; add a subtle border/outline to dark shapes in dark mode where they vanish. |
| Base vs elevated | Page = base; cards/sheets/popovers/menus = elevated, lighter step per layer. |
| Label hierarchy | primary / secondary / tertiary text tones, each meeting contrast in dark as well (see accessibility-corrected ink scale in `field-notes/tokens.md`). |

## Checklist
- [ ] Follows system appearance by default and switches live without losing state?
- [ ] Both modes designed and screenshotted (not inverted)?
- [ ] Tested with Increase Contrast and Reduce Transparency (each and both) in dark?
- [ ] All pairs ≥ 4.5:1 in dark; custom small-text pairs ≈ 7:1?
- [ ] Overlays/modals/menus visibly elevated (lighter) over the dark base?
- [ ] Icons/illustrations legible on dark (outlines/variants where needed); white images softened?
- [ ] No app-level theme override in native apps; on web, override defaults to Auto?

## Related (ingestion status)
Color (✓ CRITICAL), Materials (✓ CRITICAL), Typography, SF Symbols, Accessibility (✓) — not yet ingested (except ✓).
