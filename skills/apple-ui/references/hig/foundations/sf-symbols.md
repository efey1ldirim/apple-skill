# SF Symbols
Source: https://developer.apple.com/design/human-interface-guidelines/sf-symbols · Section: Foundations ·
Supported platforms: all six · Ingested: 2026-09-28 · Screenshots: 20 (dark-mode page, hero → videos). Body
text, every image alt text and caption, and the video alt texts and caption (the Replace caption reads
"From left to right: down-up, up-up, off-up") were cross-checked line by line against the fetched content;
all match. Text that exists only in the screenshots is marked **(from screenshot)**.
The **animation presets were measured frame by frame** from the page's videos and rebuilt as a web kit:
`references/symbol-effects.md` + `tokens/apple-symbol-effects.*`.

Apple change log:
- **2025-07-28**: Draw animations and gradient rendering (SF Symbols 7).
- 2024-06-10: new animations and features of SF Symbols 6.
- 2023-06-05: animations section, plus animation guidance for custom symbols.
- 2022-09-14: variable color section; the how-to for custom-symbol paths, templates and layering moved
  to developer articles.

## In one line
SF Symbols is Apple's icon system built to sit on the San Francisco type grid.
- Match the symbol's **weight** to the adjacent text and its **scale** to the emphasis you want.
- Colour it through a **rendering mode**, not by hand-painting.
- Pick **variants** (outline, fill, slash, enclosed, localised) by context.
- Animate only to **communicate**.
- When you draw your own, follow the template and never imitate Apple products.

## Rules

### Framing (intro)
- Symbols can stand for an object or concept anywhere an interface icon can go: toolbars, tab bars,
  context menus, inline in text.
- **must — Availability depends on the OS version targeted.** Symbols and features introduced in a given
  year don't exist in earlier systems.
- **must — Know the terms of use.** The page names the key prohibition: SF Symbols, or images confusingly
  similar to them, may not be used in **app icons, logos or any trademarked use**. The app and the full
  library are downloadable from developer.apple.com/sf-symbols.

### Licence (why this skill ships no SF Symbols) [not on this page; from the licence]
- SF Symbols are treated as **system-provided images** under Apple's Xcode/SDK licence terms. They may be
  used to build apps **for Apple platforms**, and they may **not be redistributed** or used as logos,
  trademarks or app icons.
- Consequences for this repo and for web work:
  - This public skill **does not bundle** SF Symbols.
  - Web products should not embed SF Symbols glyphs, including in websites and cross-platform web apps.
- What to use instead:
  - An open-licence set with SF-like geometry and matching stroke weights (Lucide/ISC, Phosphor/MIT,
    Ionicons/MIT).
  - The standard metaphors in `icons.md`.
  - The measured motion kit in `symbol-effects.md`, which gives these icons SF-style behaviour.
- Verify the current wording in the licence shipped with the SF Symbols app before any Apple-platform use.

### Rendering modes
- There are four modes: **monochrome, hierarchical, palette, multicolor**. They are options for applying
  colour; for example, several opacities of the accent colour for depth, or a contrasting palette for a
  scheme.
- The modes work because a symbol's paths are split into **layers**.
  - Example: `cloud.sun.rain.fill` has three layers. Primary = cloud, secondary = sun and rays, tertiary =
    raindrops (visual **sf-symbols-01**).
  - Hierarchical gives each layer a different opacity of one colour. In the example image: cloud 100 %, sun
    ≈ 50 %, drops ≈ 25 % (**sf-symbols-02**).
- **Monochrome:**
  - One colour for all layers.
  - Paths render in that colour, or as transparent cut-outs inside a filled path (**sf-symbols-03**).
- **Hierarchical:**
  - One colour.
  - Opacity varies by each layer's hierarchy level (**sf-symbols-04**).
- **Palette:**
  - Two or more colours, one per layer.
  - Give only two colours to a three-level symbol and the secondary and tertiary layers share the second
    colour (**sf-symbols-05**).
- **Multicolor:**
  - Intrinsic colours that add meaning. Examples: `leaf` is green like real leaves; `trash.slash` is red for
    data loss.
  - Some multicolor symbols have layers that accept other colours (**sf-symbols-06**).
- **must — Use system-provided colours in every mode.** They adapt automatically to accessibility settings
  and to appearance modes such as vibrancy and Dark Mode (API: `renderingMode(_:)`).
- **should — Confirm the mode works in every context.**
  - Size and contrast with the background change how legible the details are.
  - The automatic setting gives each symbol's preferred mode. Still check places where a different mode
    reads better.

### Gradients (SF Symbols 7+)
- Gradient rendering makes a **smooth linear gradient from one source colour**.
- It works in all rendering modes, with system and custom colours, and on custom symbols.
- It renders at any size but **looks best large**.
- (Visual **sf-symbols-07**: sun, solid fill vs gradient fill. The gradient is bright at the left and slightly
  darker toward the right.)

### Variable color
- Variable color shows a quantity that changes over time, such as capacity or strength, in **any** rendering
  mode. Layers take colour as a value crosses thresholds between **0 and 100 %**.
- Example: `speaker.wave.3`.
  - Its waves map to three sound ranges, plus "no sound" with no waves coloured.
  - The system derives each threshold from the number of non-zero states.
  - (**sf-symbols-08**: 0, 1, 2 and 3 waves coloured.)
- Layers may **opt out**. The speaker body never changes, because a speaker doesn't change with volume.
- Any number of layers can take part.
- **must — Use variable color for change, not for depth.** For depth and hierarchy, use Hierarchical
  rendering.

### Weights and scales
- There are **9 weights**, from ultralight to black, each matching an SF font weight so symbols and text
  weight-match. There are **3 scales**: small, **medium (default)** and large, defined relative to SF's **cap
  height**. That makes 27 combinations (**sf-symbols-09**).
- Scale changes a symbol's emphasis next to text **without breaking weight matching** at the same point
  size (APIs: `imageScale(_:)`, `UIImage.SymbolScale`, `NSImage.SymbolConfiguration`).
  - (**sf-symbols-10**, plus-circle next to "Add": small = the circle spans cap line to baseline; medium =
    slightly beyond both; large = the plus stroke nearly spans the cap band.)

### Design variants
- Variants such as **fill, slash and enclosed** state precise states and actions while staying consistent.
  - Slash = unavailable.
  - Fill = selected.
- **Outline** is the most common variant. It has no solid areas, so it looks like text. Most symbols also
  have a **fill** variant.
- **Slash** and **enclosed** variants (circle, square, rectangle) often combine with outline or fill.
  - (**sf-symbols-11**: heart, heart.slash, heart.circle, heart.square and heart in a rectangle, in outline
    and fill rows.)
- **Script-specific variants:**
  - Latin, Arabic, Hebrew, Hindi, Thai, Chinese, Japanese, Korean, Cyrillic, Devanagari and several Indic
    numeral systems.
  - They switch automatically with the device language (see Right to left § Images).
  - (The localised grid shows 12 text-related symbols in 8 scripts: doc rich text, book closed, bubble,
    character, super/subscript, size, text box, I-beam.)
- Variants by goal:
  - **Outline** suits toolbars, lists and anywhere next to text.
  - **Enclosed** shapes improve **legibility at small sizes**.
  - **Fill** adds emphasis. It suits **iOS tab bars**, **swipe actions** and places where an accent colour
    marks selection.
- **Often the view chooses for you.** An iOS tab bar prefers fill; a toolbar takes outline.

### Animations
- The presets are expressive and configurable. They communicate ideas, give feedback on actions, and
  signal status changes or ongoing activity.
- They work on **every** SF Symbol, in every rendering mode, weight and scale, and on custom symbols.
- Playback can run **once** (start to finish) or **repeat until a condition is met**.
- You can change **speed** and whether the animation **reverses before repeating** (APIs: `Symbols`,
  `SymbolEffect`).
- The presets (each has a measured web equivalent; numbers in `symbol-effects.md`):
  - **Appear:** the symbol emerges gradually. Video: antenna waves from the centre outward, a photo stack
    bottom to top, a waveform left to right.
  - **Disappear:** the symbol recedes gradually. Video: folder with badge, two lightbulbs, two chat bubbles.
  - **Bounce:**
    - A brief elastic scale, up or down, then back to the initial state.
    - Plays **once by default**.
    - Says "an action happened" or "an action is needed". Video: music note with lines, "haha" text, Live
      Photos; layers bounce individually.
  - **Scale:**
    - Grows or shrinks the symbol and **persists** until a new scale is set or the effect is removed (unlike
      Bounce).
    - For drawing attention to a selection or as feedback on choosing a symbol. Video: exit
      picture-in-picture, 3D square stack, HomePod + HomePod mini.
  - **Pulse:**
    - Varies opacity over time.
    - Only layers **annotated to pulse** take part by default; optionally all layers.
    - For ongoing activity, repeated until a condition is met. Video: AirPlay screen, chat-waveform pause
      badge, screen with a person.
  - **Variable color:**
    - Steps the opacity of layers.
      - **Cumulative:** each layer stays coloured until the cycle completes.
      - **Iterative:** one layer at a time.
    - For progress or activity: playback, connecting, broadcasting.
    - Options: **autoreverse** (reverse to the start, then replay), and **hide inactive layers** instead of
      dimming them.
    - Layout matters. Linear layers whose ends don't meet are **open loop**. Layers forming a complete
      shape (a circular progress ring) are **closed loop**, which loops seamlessly.
    - Video: speaker waves, Wi-Fi reversing, sprinkler droplets.
  - **Replace:**
    - Swaps symbols, between any symbols and across all weights and modes.
    - Three configurations:
      - **Down-up:** the old symbol shrinks, the new one grows. It means a state change.
      - **Up-up:** both grow. It means a state change with a sense of **forward progress**.
      - **Off-up:** the old one hides at once and the new one grows. It stresses the **next available
        state or action**.
    - Video caption: left to right, down-up, up-up, off-up. Video: grid ↔ list, rain ↔ sun behind a
      cloud, mic ↔ x in a circle.
  - **Magic Replace:**
    - A smart transition between **related** shapes: slashes draw on and off, badges appear or disappear,
      or are replaced independently of the base symbol.
    - It is the **new default** replace. Between unrelated symbols it falls back to **down-up**; you can
      pick another fallback direction.
    - Video: card + caution triangle badge, mic + slash, ID circle with ✓ badge swapped to ✗.
  - **Wiggle:**
    - Back and forth along a direction.
    - Highlights an **easy-to-miss change or call to action**, or reinforces meaning (an arrow wiggling the
      way it points).
    - Video: arrow into a tray (vertical), photo stack (rotational), car between inward lane arrows
      (horizontal).
  - **Breathe:**
    - Smoothly increases and decreases presence, a "living" quality.
    - For status changes or an ongoing activity such as recording.
    - Differs from Pulse: pulse changes **opacity only**; breathe changes **opacity and size**.
    - Video: waveform, translate bubbles, mindfulness rings.
  - **Rotate:**
    - Rotates as a progress indicator or like the real object.
    - Some symbols rotate entirely; others rotate only a part. The **By Layer** option lets the desk fan
      spin only its blades.
    - Video: gear, desk fan, two dots orbiting.
  - **Draw On / Draw Off** (SF Symbols 7+):
    - Draws the symbol along a path through guide points, from off-screen to on-screen or back.
    - All layers at once, staggered, or one layer at a time.
    - For progress (a download) or to reinforce meaning (a direction arrow).
    - **There is no video on the page.**
- **should — Apply symbol animations judiciously.** Nothing limits how many a view can have, but too many
  overwhelm and distract.
- **must — Give every animation a clear purpose tied to the symbol's intent.** Each preset has its own
  movement with its own meaning. Consider how people will read it, and whether an animation, or a mix of
  them, could confuse.
- **should — Use animations to communicate efficiently.** They confirm that something happened and can show
  complex information simply, in little space.
- **should — Match the app's tone.** Think about what the motion conveys and whether it fits the brand and
  style (see Branding).

### Custom symbols
- To make a missing symbol, **export the template of a similar symbol** and edit it in a vector tool (see
  *Creating custom symbol images for your app*).
- **Important:**
  - SF Symbols includes **copyrighted symbols of Apple products and features**. You may display them but
    **not customise** them.
  - The SF Symbols app marks them with an **Info** badge, and its inspector lists their usage restrictions.
- **Annotating** assigns each custom layer a specific colour or a hierarchy level (primary, secondary,
  tertiary). Each instance can then use a different supported rendering mode.
- **must — Use the template as a guide.** Match the system symbols' level of detail, optical weight,
  alignment, position and perspective. Aim for:
  - **simple**
  - **recognisable**
  - **inclusive**
  - **directly tied to its action or content** (see Icons)
- **may — Add negative side margins when needed.**
  - They aid optical horizontal alignment when a badge or similar widens the symbol, for example aligning a
    column of folders where some carry badges.
  - Margin names include the configuration, e.g. "left-margin-Regular-M"; follow that naming pattern.
- **should — Optimise layers for animation.**
  - Annotate layers in the SF Symbols app.
  - **Z-order** sets the order in which variable color reaches layers. You choose front-to-back or
    back-to-front.
  - **Layer groups** move together.
- **must — Test custom symbols with every animation preset.**
  - Shapes can look wrong in motion.
  - Draw **whole shapes**. For a `person.2.fill`-like symbol, draw the full left person rather than a
    cut-out, and add an offset path of the right person annotated as an **erase layer** to make the gap.
    This keeps the layer information that animations need.
- **should — Don't bake common variants (enclosures, badges) into custom symbols.** Use the app's
  **component library** to generate them consistently.
- **must — Provide alternative text** (accessibility descriptions) for custom symbols so VoiceOver can
  describe them.
- **must — Don't design replicas of Apple products.** They are copyrighted. Symbols that SF Symbols marks
  as Apple features or products can't be customised.

## Specs & values
| Item | Value |
|---|---|
| Rendering modes | monochrome · hierarchical · palette · multicolor |
| Layer levels | primary · secondary · tertiary |
| Hierarchical example opacities | 100 % · ~50 % · ~25 % (image alt text) |
| Palette with 2 colours on 3 levels | secondary and tertiary share colour 2 |
| Gradients | SF Symbols 7+, linear, from one source colour, best at large sizes |
| Variable color range | thresholds between 0 and 100 %; layers may opt out |
| Weights | 9: ultralight, thin, light, regular, medium, semibold, bold, heavy, black |
| Scales | 3: small, medium (default), large, relative to SF cap height |
| Variants | outline (most common) · fill · slash · enclosed (circle/square/rectangle) · script-localised |
| Localised scripts named | Latin, Arabic, Hebrew, Hindi, Thai, Chinese, Japanese, Korean, Cyrillic, Devanagari, Indic numerals |
| Animation presets | Appear, Disappear, Bounce, Scale, Pulse, Variable color, Replace (down-up / up-up / off-up), Magic Replace, Wiggle, Breathe, Rotate, Draw On/Off |
| Margin naming | e.g. "left-margin-Regular-M" |
| APIs | `renderingMode(_:)`, `imageScale(_:)`, `UIImage.SymbolScale`, `NSImage.SymbolConfiguration`, `Symbols`, `SymbolEffect` |
| **Measured timings** | see `symbol-effects.md` (e.g. Bounce up 0.567 s peaking at 1.252×; Pulse 2.0 s; Breathe 3.0 s; Rotate 2.0 s/turn; Replace-in from 0.5× in 0.25 s) |

## Platform considerations
- No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS or watchOS.

## Resources listed
- Related: Download SF Symbols; Typography (not yet ingested); Icons (✓).
- Developer docs: *Symbols* (framework); *Configuring and displaying symbol images in your UI* (UIKit);
  *Creating custom symbol images for your app* (UIKit).
- Video: *What's new in SF Symbols 7* (WWDC25 337).

## Visual notes (from screenshots)
- **Hero:** a yellow grid card with the SF Symbols app icon in outline, a rounded square holding a heart, a
  star and a stylised "a".
- **Rendering-mode rows (dark mode):**
  - Eight symbols in system blue: share, folder + badge, trash slash, calendar timeline, numbered list, "abc"
    with dotted underline, iPhone with radio waves, desktop with sad face.
  - Monochrome is all one blue.
  - Hierarchical shows paler secondary parts.
  - Palette uses blue + grey.
  - Multicolor adds a green badge, a red trash, red dots and a yellow Mac outline with a blue screen
    **(from screenshot)**.
- **Weights grid:** folder.badge.plus from Ultralight to Black (column labels) and Small / Medium / Large
  (row labels). The stroke thickens across columns; the icon grows down the rows.
- **Scale row:** three "⊕ Add" specimens with red cap-line and baseline guides.
- **Localised grid (from screenshot):** rows in Latin (A), Arabic (ع/ض), Hebrew (א), Devanagari (क), Thai (ก),
  Chinese (字/大小), Japanese (あ), Korean (가).
- **Animation videos:**
  - White symbols on black in dark mode, three per row, each with a blue **"Play ⊙"** link under it.
    Breathe shows **"Pause ⏸"** while playing **(from screenshot)**.
  - There is no video after Draw On / Draw Off.
- **Video card:** a blue tile with a signature symbol and a WWDC25 badge, titled *What's new in SF Symbols
  7* **(from screenshot)**.

## Web translation
| HIG rule | Web implementation |
|---|---|
| Licence: no SF Symbols as logos; Apple-platform use only | On the web, use an open-licence set (Lucide, Phosphor, Ionicons). Never ship SF Symbols SVG exports, the SF Symbols font glyphs or look-alikes as a logo or app icon. |
| Weight-match symbols to text (9 weights) | Choose the icon stroke width from the adjacent font weight: regular text → stroke 1.5–2 at 20–24 px; semibold/bold labels → 2–2.25; thin display text → 1–1.25. One stroke width per context (see `icons.md`). |
| 3 scales relative to cap height | Size icons from the text: small ≈ cap height, medium ≈ 1.2× cap height (default), large ≈ 1.5×. With `1em` icons: `.icon-sm{height:.8em}`, `.icon-md{height:1em}`, `.icon-lg{height:1.25em}`, aligned with `vertical-align: -0.125em` or a flex centre. |
| Rendering modes via layers | Keep icons as inline SVG with `stroke="currentColor"`. Monochrome = one `color`. Hierarchical = secondary layers at `opacity:.5`, tertiary `.25` (class `.hier`). Palette = per-layer `color`/CSS vars. Multicolor = semantic system colours only (red for destructive, green for add). |
| System colours so modes adapt | Colour icons with the token variables (`tokens/apple-system-colors.css`), never hard-coded hex. Dark Mode and Increase Contrast then follow (COLOR GATE). |
| Check mode per context | Small icons on busy backgrounds: monochrome, higher contrast. Large hero icons may use hierarchical or gradient. |
| Gradients | Large decorative symbols only: a `linearGradient` from one hue (lighter at the start edge, slightly darker at the end). Never on small UI icons. |
| Variable color = quantity, not depth | Signal/volume/progress glyphs change which layers are "on" (`opacity` 1 vs 0.3) from the value. Use hierarchical opacity for depth instead. `SE.variableColor` for activity. |
| Variants by context | Tab bar / selected state → filled icon; toolbar / list / inline → outline; unavailable → slash variant (e.g. `mic-off`); small sizes → enclosed variant (icon in a circle/square). |
| Localised symbols | Letter-bearing icons (text format, signature) swap per locale (see `right-to-left.md`). |
| Animations | Use the measured kit (`symbol-effects.md`): `SE.bounce`, `SE.replace`, `SE.pulse`… Rules: one purposeful effect per moment; repeat only while the condition lasts; stop on completion; Reduce Motion handled by the kit. |
| Custom symbols | Draw on the same 24-px grid as the icon set, same stroke, caps and joins, whole shapes (layers you can animate), no baked-in badges. Keep badges/slashes as separate elements (`data-sfx-badge`, `data-sfx-slash`). |
| Alt text | Meaningful icons get `aria-label`/`<title>`; decorative ones `aria-hidden="true"`. |
| No Apple-product replicas | Don't draw iPhone/AirPods/Apple Watch look-alikes. Use generic device glyphs. |

Field-note cross-links:
- `hig/foundations/icons.md` (standard metaphors, weight matching): **confirmed**. This page supplies the
  9-weight / 3-scale system behind it.
- `hig/foundations/motion.md` § animated symbols: now points to the measured kit.
- `field-notes/tokens.md` § Motion: the kit's curves are **MEASURED** Apple values. The FN 150–300 ms UI
  transitions stay for non-symbol motion.

## Checklist
- [ ] No SF Symbols artwork on the web; icons come from one open-licence set with one stroke weight per context.
- [ ] Icon weight matches the adjacent text weight; the size follows the scale rule (≈ cap height ×1 / 1.2 / 1.5).
- [ ] Colours come from system tokens; hierarchical/palette via layer opacity/colour, not ad-hoc hex.
- [ ] Variant fits the context: fill for selected/tab bar, outline for toolbars/lists, slash for unavailable, enclosed for tiny sizes.
- [ ] Variable-color-style glyphs show quantities, not depth.
- [ ] Every symbol animation has a purpose, plays once or only while its condition lasts, and uses the measured kit (`check-symbol-effects.mjs` PASS).
- [ ] Reduce Motion: no bounce/wiggle/rotate/breathe; fades or static states instead.
- [ ] Custom icons: same grid/stroke as the set, whole shapes, separate badge/slash elements, alt text, no Apple-product replicas.

## Related (ingestion status)
Icons (✓), Motion (✓), Right to left (✓), Color (✓ CRITICAL), Branding (✓), Accessibility (✓), Typography,
VoiceOver — not yet ingested (except ✓).
