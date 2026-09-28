# Branding
Source: https://developer.apple.com/design/human-interface-guidelines/branding ·
Section: Foundations · Supported platforms: all six · Ingested: 2026-09-28 · Screenshots: 6
(text cross-checked end to end: matches the fetched content) · Apple change log:
**2026-09-09 — refined guidance for using brand colour** (shown in the grey "latest change"
banner above the title).

## In one line
Express a unique, instantly recognisable brand **while feeling native to the platform**: brand
through voice, a judicious accent colour (preferably in the **content layer**), maybe a headline
font, and refined details — never at the expense of content, familiar components or standard
patterns; no logo spam, no branded launch screens.

## What the page says

### Framing
- Brand identity should make the app **instantly recognisable** *and* **at home on the platform**,
  giving people a **consistent experience**.
- Brand lives in the **app icon**, throughout the experience, and in several **App Store**
  opportunities (→ App Store Marketing Guidelines).

### Best practices
- **should — Use your brand's voice and tone in all written communication.** E.g. an encouraging,
  optimistic brand: plain words, occasional exclamation marks and emoji, simple sentences.
- **must — Apply the accent colour judiciously** (refined 2026-09-09). Too broad = overwhelming
  and diluted. **Minimise it on controls**; use it deliberately for **primary actions** or **status
  indicators** (unread badges, the selected tab's icon). To express the brand through colour,
  **move it into the content layer**, where it scrolls **beneath Liquid Glass controls** and is
  picked up dynamically by them. (→ Color)
  - ✗ Airport-map example: brand blue on **every control** — close button, location button,
    filled search field.
  - ✓ Same map with the brand blue **in the map content** (blue-tinted terminal areas, blue gate
    numbers and info pins); controls stay neutral glass (grey ✕, neutral location button, neutral
    "Find locations" field).
- **may — Custom font**, if the brand is strongly tied to one: must be **legible at all sizes** and
  support **Bold Text** and **Dynamic Type**. Good pattern: **custom font for headlines and
  subheadings, system font for body and captions** (system fonts are optimised for small sizes).
  (→ Typography)
- **should — Express the brand with familiar components.** Known components feel reliable and let
  people focus on what makes the app unique. When customising a component's look, keep its
  **sizing, placement and behaviour** familiar and platform-appropriate.
- **must — Branding defers to content.** Screen space used only to show a brand asset steals room
  from content; brand in **refined, unobtrusive** ways.
- **should — Use standard patterns consistently**: even highly stylised UI stays approachable
  with familiar behaviour — UI in **expected places**, **standard symbols** for common actions,
  established **navigation and modality** conventions.
- **should not — Show the logo throughout the app** unless needed for context; people rarely need
  reminding which app they're in — use the space for information and controls.
- **should not — Use the launch screen for branding**: it vanishes too fast; if you want brand
  content up front, use a **welcome/onboarding screen**. (→ Launching › Launch screens, Onboarding)
- **must — Follow Apple's trademark guidelines**: no Apple trademarks in the app name or images.

### Platform considerations
None for any platform.

### Resources listed
Related: Marketing resources and identity guidelines, Show more with app previews, Color.
Video: *Communicate your brand identity on iOS* (WWDC26 251).

## Visual notes (from screenshots)
- **(from screenshot)** Grey rounded "latest change" banner above the title: "September 9, 2026 —
  Refined guidance for using brand color."
- **(from screenshot)** Hero: yellow panel with a megaphone glyph on the construction grid.
- **(from screenshot)** Do/Don't iPhone pair (airport map "NRT"): wrong = blue circular close
  button, blue location button and a **blue filled search bar**, grey map; right = light-blue map
  shapes and blue gate/info markers in the content, neutral white glass close/location/search
  controls. Grey ✗ under the first, green ✓ under the second.

Visual pair: `visual-examples` id branding-01.

## Web translation
| Guidance | Web equivalent — and how it fits our field notes |
|---|---|
| Accent colour judicious; not on every control | Exactly our "one filled button" + "colour lives in one element" rules. Brand colour for the primary CTA *or* status (unread badge, active nav icon) — not for every button, link, border and header. |
| Brand in the content layer | Put brand colour in hero imagery, illustrations, charts, maps, cover art, section backgrounds of **marketing** pages; keep app chrome (nav, toolbars, inputs) neutral. Our landing notes' "per-section palettes, identical buttons" match this. |
| Voice and tone | A written tone guide (plain words, sentence length, when emoji/exclamation are allowed) applied to microcopy, empty states, errors, emails. |
| Custom font for headlines, system font for body | Load one brand display face for h1–h3 only; body/captions in the system stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui`); support user font-size scaling; check the brand font's bold weight. |
| Familiar components | Customise colour/radius/type, not behaviour: keep native-like select/checkbox/switch semantics, standard positions (back top-left, primary bottom/right), standard icons (share, trash, search). |
| Branding defers to content | No giant logo headers inside the app; a compact wordmark in the nav is enough; no full-width brand banners on work screens. |
| No logo everywhere | Logo once (nav/home), not in every card, modal and empty state. |
| No branded launch screen | No splash screens / loading screens with big logos; render the app shell immediately (skeleton); use a first-run welcome screen for brand storytelling. |
| Trademarks | Don't use "iPhone/Apple/Mac" or Apple glyphs in product names, logos or marketing images beyond the permitted "Download on the App Store" badges. |

## Checklist
- [ ] Is the brand colour used for at most the primary action and status indicators in app chrome?
- [ ] Does brand colour mainly live in content (imagery, illustration, data) rather than controls?
- [ ] Voice and tone consistent in every string?
- [ ] Custom font limited to headlines; body in system font; scaling and bold supported?
- [ ] Components look branded but behave and sit where people expect?
- [ ] No logo repetition, no brand-only screen real estate, no branded splash screen?
- [ ] No Apple trademarks in names or images?

## Related (ingestion status)
App icons (✓), Color, Typography, Launching, Onboarding, Materials (Liquid Glass) — not yet
ingested (except ✓).
