# Materials — ⚠️ CRITICAL (zero-tolerance gate)
Source: https://developer.apple.com/design/human-interface-guidelines/materials · Section: Foundations ·
Supported platforms: all six (iOS, iPadOS, macOS, tvOS, visionOS, watchOS) · Ingested: 2026-09-28 ·
Screenshots: 17 (dark-mode page, hero → change log). Text, image alt texts and image captions were
cross-checked end to end against the fetched content and match. Text that exists only inside images
is marked **(from screenshot)**.
**[user decision] Marked CRITICAL like Color and Layout.** A design that uses glass, blur,
translucency or overlays ships only after the **MATERIALS GATE** in `SKILL.md` passes. The gate uses
the tokens in `tokens/apple-materials.css`, the static checker `tools/check-materials.mjs` and the
live probe `tools/materials-probe.js` / `tools/run-materials-probe.mjs`.

Apple change log:
- **2025-09-09**: Liquid Glass guidance updated (the page banner shows this date).
- 2025-06-09: Liquid Glass guidance added.
- 2024-08-06: platform-specific art added.
- 2023-12-05: descriptions of the material types updated; terms for vibrancy and thickness clarified.
- 2023-06-21: visionOS guidance.
- 2023-06-05: watchOS guidance on using materials for context and orientation.

## In one line
Materials separate two layers. **Liquid Glass** is only for the floating **functional layer**
(navigation and controls); use it sparingly and let content show through it. **Standard
materials** (ultra-thin → thick blur + vibrancy) create structure inside the **content layer**.
Pick a material by its **meaning**, never by the colour it happens to produce. Anything placed on
a material uses **vibrant** colours so it stays legible.

## What the page says

### Framing
- A material is a visual effect that creates depth, layering and hierarchy between what is in front
  and what is behind.
- Its job is to separate **foreground** (text, controls) from **background** (content, solid
  colours). Because some colour passes through from behind, people keep a sense of where they are.
- Apple has two families:
  1. **Liquid Glass**, a dynamic material shared by all platforms. It presents controls and
     navigation without hiding the content underneath.
  2. **Standard materials**, which differentiate things *within* the content layer.

### Liquid Glass
- Liquid Glass is its own **functional layer** for controls and navigation (examples given: tab
  bars, sidebars). It floats **above** the content layer, and that separation is what makes the
  hierarchy clear.
- Content scrolls underneath the glass and **peeks through**, which gives dynamism and depth. The
  controls on the glass still have to stay legible.
- **must — Never put Liquid Glass in the content layer.** Glass works because it marks "this is
  interactive, that is content". Putting it inside content (for example an app background, cards
  or rows) adds complexity and muddles the hierarchy. Use a **standard material** for content-layer
  elements instead.
  - **Exception:** a content-layer control with a **transient** interactive part, such as a
    **slider** thumb or a **toggle** knob, briefly takes on a glass look **while the person is
    activating it**, to emphasise the interaction. At rest it is not glass.
- **should — Use glass effects sparingly.**
  - System components get the material and its behaviour automatically.
  - On **custom** controls, apply glass rarely. Glass exists to draw attention to the content
    underneath. Spreading it across many custom controls distracts from that content and makes
    the experience worse.
  - Limit it to the **most important functional elements** of the app.
  - Developer reference: *Applying Liquid Glass to custom views*.
- **must — Use *clear* glass only over visually rich backgrounds.** There are two variants,
  **regular** and **clear**. You choose one when building a custom component or styling some system
  components.
  - Both variants change appearance with system settings: the person's preferred Liquid Glass look,
    **Reduce Transparency** and **Increase Contrast**.
  - **Regular:**
    - Blurs the background and adjusts its luminosity so text and foreground elements stay
      legible.
    - **Scroll edge effects** blur and fade the content under the bars, which adds further
      legibility.
    - Most system components use this variant.
    - Use it whenever the background could hurt legibility, and for components with a lot of text:
      **alerts, sidebars, popovers**.
    - (Visual **materials-01**: on a dark background regular glass looks dark; on a light background
      it looks light. It takes on the tone of what is behind it.)
  - **Clear:**
    - Highly translucent. It keeps the underlying content visible and lets a rich background stay
      prominent.
    - Use it for components that float over **media** (photos, video) for a more immersive feel.
    - (Visual **materials-02**: bricks remain recognisable through the circle, only softened, with a
      thin bright rim.)
  - **Dimming layer behind clear glass**, for contrast:
    - Over **bright** content, consider a **dark dimming layer at 35 % opacity**.
    - Over content that is already **dark enough**, skip it. Also skip it when using the standard
      **AVKit** playback controls, which bring their own dimming.
  - Colour on glass is covered on the Color page, § Liquid Glass color (`color.md`).

### Standard materials
- Use standard materials and effects to express structure in the content that sits *beneath*
  Liquid Glass. The page names three: **blur**, **vibrancy** and **blending modes**.
- **must — Choose by semantic meaning and recommended use, never by the apparent colour.** System
  settings change how a material looks and behaves, so a material picked for its tint breaks.
  Match the material or vibrancy style to the use case.
- **must — Put vibrant colours on materials.**
  - System-defined vibrant colours stay right in every context: never too dark, bright, saturated
    or low-contrast.
  - Whatever material you use, the text and symbols on it use vibrant colours (see Color §
    System colors).
  - (Visual **materials-03**: ✗ a Share glyph in **`systemGray3`** on a translucent tile is barely
    visible. ✓ the same glyph in a **vibrant** label colour reads clearly. Captions: "Poor contrast
    … `systemGray3` label" / "Good contrast … vibrant color label".)
- **should — Weigh contrast against context when combining materials with blur and vibrancy:**
  - **Thicker** materials are more opaque. They give better contrast for text and fine details.
  - **Thinner** materials are more translucent. They remind people of what is behind, so they keep
    context.
  - Developer reference: SwiftUI `Material`.

### Platform considerations

#### iOS, iPadOS
- Besides Liquid Glass, there are **four standard materials**, all for content-layer distinction:
  **ultraThin**, **thin**, **regular** (the default) and **thick**. (Visuals **materials-04**,
  **-05**.)
- There are **vibrant colours** for labels, fills and separators, each designed for every material:
  - **Labels** have 4 levels: `label` (default), `secondaryLabel`, `tertiaryLabel`,
    `quaternaryLabel`.
  - **Fills** have 3 levels: `fill` (default), `secondaryFill`, `tertiaryFill`.
  - **Separators** have 1 level: `separator`, which works on every material.
  - A level's name says how much contrast it has with the background. The default level has the
    **most**; quaternary has the **least**.
- Labels: the first three levels work on **any** material.
  **should — avoid `quaternaryLabel` on `thin` and `ultraThin`**, because the contrast is too low.
- Fills: all three levels work on all materials.

#### macOS
- There are several standard materials, each with a **designated purpose**
  (`NSVisualEffectView.Material`), plus **vibrant versions of every system colour**.
- **should — Decide deliberately where custom views and controls allow vibrancy.** System views
  and controls use vibrancy, depending on configuration and settings, so foreground content stands
  out on any background. Test in many contexts to find where vibrancy actually helps communication.
- **should — Pick the background blending mode that suits the design.** There are two:
  **behind window** (blends what is behind the window, e.g. the desktop) and **within window**
  (blends content inside the window). API: `NSVisualEffectView.BlendingMode`.

#### tvOS
- Liquid Glass is used across navigation and system experiences such as **Top Shelf** and
  **Control Center**.
- Some elements, such as **image views and buttons**, become glass **when they gain focus**.
- (Visual **materials-06**: *Destination Video* showing "A BOT-anist Adventure". Glass tabs and an
  info panel float over a colourful full-bleed scene, and the scene's colour shows through.)
- Standard materials are still available for structure in the content layer. Thickness controls how
  much of the underlying content shows. Suggested uses:

| Material | Recommended for |
|---|---|
| `ultraThin` | Full-screen views that need a **light** colour scheme |
| `thin` | Overlays that **partially cover** on-screen content and need a **light** scheme |
| `regular` | Overlays that partially cover on-screen content |
| `thick` | Overlays that partially cover on-screen content and need a **dark** scheme |

#### visionOS
- Windows normally use a system material called **glass**, which apps **cannot modify**.
  - It lets light, the current Environment, virtual content and real objects show through, which
    keeps people grounded.
  - It is **adaptive**. It limits the range of background colour it lets in, so app content keeps
    its contrast. It also brightens or darkens with the surroundings and other virtual content.
  - (Video: a window's glass shifting as the room lighting changes.)
- **Note:** visionOS has **no Dark Mode setting**. Glass adapts automatically to the luminance of
  whatever is behind it.
- **should — Prefer translucency to opaque colours in windows.** Opaque areas block the view, make
  people feel **constricted**, and reduce their awareness of the virtual and physical objects around
  them. (Visual **materials-07**: ✗ a solid navy window blocking the room; ✓ a frosted window
  through which the room stays readable.)
- **may — For custom components, choose system materials to create separation or signal
  interactivity:**
  - **thin**: draws attention to **interactive** elements such as buttons and selected items.
  - **regular**: separates **sections**, such as a sidebar or a grouped table view.
  - **thick**: makes a **dark** element that stays distinct on top of a `regular` background.
  - (Visual **materials-08**: a window with a *Regular* sidebar, a *Thick* text field at the top and
    a *Thin* button at the lower right. The callout labels are baked into the image **(from
    screenshot)**.)
- visionOS applies **vibrancy** to text, symbols and fills on materials, so they stay legible. It
  pulls light and colour forward from both virtual and real surroundings, which increases depth.
  There are three levels:
  - `label` for standard text.
  - `secondaryLabel` for descriptive text such as footnotes and subtitles.
  - `tertiaryLabel` for **inactive** elements, and **only** where the text does not need high
    legibility.
  - (Visual **materials-09**: a Share glyph at the three levels, from very high contrast down to
    muted.)

#### watchOS
- **should — Use materials to give context in full-screen modal views.** Full-screen modals are
  common on the watch. The material layers help people stay oriented and separate controls and
  system elements from content.
- **must — Don't remove or replace the material background of a modal sheet** when the system
  supplies one.
- (Visual **materials-10**: a modal covers the whole screen with a translucent material. It shows a
  close ×, the time, a headphones glyph, "Title", "Description of the action." and one pill
  **Action** button on a thinner material with vibrant label text. The texts are **(from
  screenshot)**.)

### Resources listed
- Related pages: Color (✓ CRITICAL), Accessibility (✓), Dark Mode (✓).
- Developer documentation:
  - *Adopting Liquid Glass*
  - SwiftUI: `glassEffect(_:in:)`, `Material`, `Glass.regular`, `Glass.clear`
  - UIKit: `UIVisualEffectView`, `UIBlurEffect`, `UIVibrancyEffect`, `UIVibrancyEffectStyle.*`
  - AppKit: `NSVisualEffectView`, `.Material`, `.BlendingMode`
- Videos: *Meet Liquid Glass* (WWDC25 219), *Get to know the new design system* (WWDC25 356).

## Specs & values (exact, from the page)
| Item | Value |
|---|---|
| Material families | Liquid Glass (functional layer) · standard materials (content layer) |
| Liquid Glass variants | `regular` (default; most system components) · `clear` (over media only) |
| Dimming behind clear glass on bright content | **dark layer, 35 % opacity** |
| iOS/iPadOS standard materials | `ultraThin`, `thin`, `regular` (default), `thick` |
| iOS/iPadOS vibrant labels | `label` (default) · `secondaryLabel` · `tertiaryLabel` · `quaternaryLabel` (not on thin/ultraThin) |
| iOS/iPadOS vibrant fills | `fill` (default) · `secondaryFill` · `tertiaryFill` |
| Vibrant separator | one level, `separator` |
| macOS blending modes | behind window · within window |
| visionOS vibrant levels | `label` · `secondaryLabel` · `tertiaryLabel` |
| visionOS window material | `glass` (system, not modifiable; no Dark Mode) |
| Settings that change glass | preferred Liquid Glass look · Reduce Transparency · Increase Contrast |

The page gives **no numeric blur radii or tint opacities** for any material. The web values in
`tokens/apple-materials.css` are therefore tagged **CONV** or **APPLE-WEB** (measured on apple.com),
never HIG.

## Visual notes (from screenshots)
- **Hero:** a yellow-tinted sketch of a capsule overlapping a rounded square, on a construction grid.
  The square's edges bend slightly where the capsule covers them, suggesting glass refraction.
- **materials-01** (regular glass):
  - Over a starfield the circle is **smoky dark**, with only a faint rim.
  - Over a sunny beach it is **milky white**, and the background is heavily blurred.
  - Takeaway: regular glass adopts the tone of the backdrop and never shows sharp detail.
- **materials-02** (clear glass):
  - Over a brick wall the bricks stay recognisable inside the circle, only softened.
  - A 1px bright rim and a slight lensing at the edge define the shape.
- **materials-03** (✗/✓ legibility):
  - The ✗ glyph is pale grey on pale blue glass and almost disappears.
  - In dark mode, the ✗ is grey on indigo and dull, while the ✓ is bright white-lavender.
- **materials-04/05** (the four iOS materials over a teal/blue backdrop):
  - Light mode: ultraThin shows the colours brightened and diffused; thin is paler; regular is
    mostly white; thick is **almost opaque white**.
  - Dark mode: the same order from lightly smoked to **almost opaque dark**.
  - Thickness is mainly the **tint opacity**; the blur is strong at every level.
- **materials-06** (tvOS):
  - Glass capsule tabs "Info", "InSight", "Continue Watching". The selected "Info" is filled
    near-white with dark text.
  - Below them is a wide glass info card with a thumbnail, the title "A BOT-anist Adventure", a
    two-line description, "Science Fiction 33 min", and two stacked glass buttons: "From
    Beginning" (▶) and "Go to Show" (ⓘ). All texts are **(from screenshot)**.
- **visionOS video poster:** a Music window with a Library sidebar, a Playlists grid of colourful
  album art and a playback bar, floating in a living room. A "Play" link sits under it.
- **materials-07:** the ✗ is a flat navy rectangle. The ✓ is the same window as a frosted pane,
  with the room still visible through it, blurred.
- **materials-08:** shown above: the sidebar is *Regular*, the top text field is *Thick* (darkest),
  and the lower-right button is *Thin* (lightest).
- **materials-09:** the Share glyph on a round thin plate at three vibrancy levels: crisp white, then
  a softer white, then faint.
- **materials-10** (watch modal):
  - A purple-to-pink blurred material fills the screen.
  - Content is centred: glyph, bold "Title", body text.
  - A full-width pill "Action" button on a more saturated material.
  - Close × in a small glass circle at the top-leading corner; time at top-trailing.

## Web translation (binding for web work — enforced by the MATERIALS GATE)
Two layers, two families. On the web, *every* blur surface must declare which family it belongs to,
and must do so through the token classes in `tokens/apple-materials.css`.

| HIG rule | Web implementation |
|---|---|
| Liquid Glass = functional layer only | Use `.glass` / `.glass-clear` **only** on floating or pinned UI: `position: fixed/sticky` bars, tab bars, toolbars, sidebars, floating action controls, popovers, menus, dialogs, sheets, overlays over media. **Never** on in-flow cards, rows, tiles, sections or page backgrounds. |
| Standard materials for the content layer | In-flow translucent surfaces use `.material-ultrathin / -thin / -regular / -thick` (flat blur + tint, **no** glass highlight or shadow). |
| Transient glass exception | A slider thumb or switch knob may take the glass look only on `:active` / while dragging (`.glass-transient` on the thumb), never at rest. |
| Sparingly | At most a handful of glass surfaces per view. Group related controls into **one** glass container (one capsule for a toolbar group, not one per button). Custom cards never get glass "for style". |
| Regular vs clear | Default is `.glass` (regular). Use `.glass-clear` only over photos and video. Text-heavy surfaces (alerts, popovers, sidebars, menus) are always regular or a standard material. |
| 35 % dimming | Clear glass over bright media: put `.material-dim` (`rgb(0 0 0 / .35)`) between the media and the glass. The dim may be local (a scrim or gradient behind the controls' area) rather than over the whole image. Not needed on dark media or native `<video controls>`. |
| Scroll edge effect | Content under a pinned bar blurs and fades (`.scroll-edge-top` / `-bottom` gradient mask) instead of the bar having a hard border. This matches field note principles §12 (a gradient fade, not a hard top border). |
| Choose by meaning, not colour | Pick the material by role (see the thickness table and tvOS/visionOS uses above). Never pick "thin because it looks bluish". Never hand-tune `rgba()` tints per screen; use the tokens. |
| Vibrant colours on materials | Text on materials uses the label ladder `--on-material-label/-secondary/-tertiary/-quaternary` (CONV from UIKit's label colours). **Never** grey palette colours (`--apple-gray3`, `#C7C7CC`, Tailwind `gray-300/400`) for glyphs or text on a material (materials-03 ✗). Optional enhancement: `mix-blend-mode: plus-lighter` (dark) / `plus-darker` (light, Safari) for true vibrancy. |
| No quaternary on thin/ultraThin | `--on-material-quaternary` is allowed only on `.material-regular/-thick` and `.glass`. |
| Thicker = legibility, thinner = context | Long or fine text → `.material-thick` or `regular`. Brief chrome that should keep context → `thin`. |
| Reduce Transparency | `@media (prefers-reduced-transparency: reduce)`: every material and glass becomes **opaque** (`backdrop-filter: none`, solid token background). The token file does this for you, and the live probe verifies it. |
| Increase Contrast | `@media (prefers-contrast: more)`: tints get more opaque, and glass gets a visible 1px border. Built into the tokens. |
| Reduce Motion | Never animate *into* or *out of* a blur (Accessibility). Fade opacity instead. `backdrop-filter` is never in a `transition` list without a reduced-motion guard. |
| macOS blending modes | *Within window* = CSS `backdrop-filter` (blends page content behind the element). *Behind window* (desktop showing through) is not possible in a browser tab. For Electron/Tauri, use the native vibrancy APIs. |
| tvOS focus → glass | Focusable media tiles/buttons may gain the glass treatment on `:focus-visible` (10-foot UI). |
| visionOS translucency | Overlays and modals over the page stay translucent (a veiled page, as on Apple's own site), not opaque slabs. The exception is Reduce Transparency. |
| watchOS modal material | Full-screen mobile modals keep their material backdrop (veil + blur of the page). Don't replace it with a solid colour unless Reduce Transparency is on. |
| Dark mode | Every material has light and dark tints (tokens). Regular glass follows the backdrop's tone (`color-scheme` + tokens). |

Field-note cross-links:
- `field-notes/principles.md` §12, "Glass only on the floating layer", **confirmed** by the HIG
  (functional layer only). The HIG adds the standard-materials family for the content layer.
- `apple-web/site-patterns.md`: apple.com's frosted bar (`saturate(180%) blur(20px)` over
  `rgba(250,250,252,.8)`) and its veil (`blur(10px)`, dark `rgba(0,0,0,.4)`) are the APPLE-WEB
  sources for the regular-glass and veil tokens.
- `field-notes/components.md`: the sticky footer (`bg-[#F5F5F7]/85 backdrop-blur-xl`) is a pinned
  functional surface, so it is ✓. Under the gate, write it as `.glass` or `.material-thick` (tokens)
  so the Reduce Transparency fallback applies.

## Checklist (all must pass — MATERIALS GATE)
- [ ] Every glass (`.glass*`) surface is in the functional layer (fixed/sticky/overlay/popover/dialog/nav/toolbar/sidebar). None is in-flow content.
- [ ] Every in-flow translucent surface is a standard material class (`.material-*`). No raw `backdrop-filter` in content.
- [ ] Glass is used sparingly: related controls share one glass container, and at most ~4 glass surfaces are visible at once.
- [ ] `.glass-clear` appears only over media. Bright media has the 35 % dim layer.
- [ ] Text and glyphs on materials use the vibrant label ladder. No grey palette colours. No quaternary on thin/ultraThin.
- [ ] Text contrast on each material is ≥ 4.5:1 (≥ 3:1 large) against **both** a white and a black backdrop, in light and dark (the probe checks this).
- [ ] Reduce Transparency makes every material opaque, and Increase Contrast strengthens it (the probe emulates both).
- [ ] No blur transitions without a reduced-motion guard.
- [ ] Screenshots compared with Apple's `materials-01 … 10` (✗ 03 and 07 must not resemble ours).

## Related (ingestion status)
Color (✓ CRITICAL), Accessibility (✓), Dark Mode (✓), Layout (✓ CRITICAL: Liquid Glass bars and the
scroll edge effect), Sliders (✓ `components/selection-and-input/sliders.md`), Toggles, Alerts, Popovers, Sidebars (✓ `components/navigation/sidebars.md`), Tab bars (✓ `components/navigation/tab-bars.md`), Motion (✓: Liquid Glass motion is stronger under touch, subdued under trackpad).
