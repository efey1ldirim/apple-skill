# VoiceOver
Source: https://developer.apple.com/design/human-interface-guidelines/voiceover · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (page data; the platform text: "No additional considerations for iOS, iPadOS, macOS, tvOS, or watchOS", plus a **visionOS** section on custom gestures) · Ingested: 2026-09-29 · Apple last updated: **March 7, 2025** (the only Change log row: "New page"; same date in the page's data). **Link-only ingestion: one DocC fetch, read in full (61 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the catalog list. Not marked critical: no token file, checker or gate. The page has **no measurements**; it names **4 description rules**, **4 navigation rules** (titles/headings, grouping and order, change notifications, rotor) and **1 visionOS rule**.

## In one line
**VoiceOver is the screen reader that lets people who are blind or have low vision use your app without seeing the display; it works in apps and games for Apple platforms (and Unity apps with Apple's plug-ins).** **Descriptions: give alternative labels to all key interface elements (more descriptive than the generic system labels, updated as the UI changes), describe meaningful images (only what the image itself conveys, not the nearby caption), make charts and infographics fully accessible (a concise description plus the same interactions), and hide purely decorative images.** **Navigation: unique page titles and accurate headings, describe visual-only grouping, ordering and linking (VoiceOver reads in the reading order of the active language and locale; group an image with its caption), announce visible content or layout changes, and support the rotor (headings, links and other content types; it can also open the braille keyboard).** **visionOS: when VoiceOver is on, custom-gesture apps don't get hand input by default; people can opt out with Direct Gesture mode.** On the web: **`alt` text, `aria-label`/`aria-labelledby`, `alt=""` for decoration, `<h1>`–`<h6>` and landmarks, `<figure>`/`<figcaption>`, logical DOM order, `aria-live` and focus management for changes, and semantic structure for rotor-style navigation.**

## Rules

### Framing (intro)
- **Supporting VoiceOver helps people who are blind or have low vision access information and navigate the interface and content when they can't see the display.**
- **VoiceOver works in apps and games built for Apple platforms, and in Unity-built apps and games with Apple's Unity plug-ins.** (Related guidance: Accessibility.)

### Descriptions
**You tell VoiceOver about your content with alternative text that explains the interface and the content it shows.**
- **must** **Provide alternative labels for all key interface elements.** **VoiceOver speaks alternative labels (not visible onscreen)**; **system controls have generic default labels, but more descriptive ones that convey your app's function are better**; **add labels to custom elements**; **keep descriptions up to date as the UI and content change.** (Developer: accessibility modifiers.)
- **should** **Describe meaningful images.** **Without descriptions people can't fully experience key images.** **VoiceOver also conveys the surrounding interface (such as nearby captions), so describe only the information the image itself conveys.**
- **must** **Make charts and other infographics fully accessible**: **a concise description of what each conveys**; **if people can interact to get more or different information, make those interactions available to VoiceOver users** (**accessibility APIs can represent custom interactive elements**) (`charts.md`).
- **should** **Exclude purely decorative images from VoiceOver**: **no description is needed when they carry no useful or actionable information**; **this respects people's time and reduces cognitive load.** (Developer: `accessibilityHidden(_:)`, `accessibilityElement`, `isAccessibilityElement`.)

### Navigation
- **should** **Use titles and headings to navigate the information hierarchy.** **The title is the first thing assistive technology announces when someone arrives on a page or screen**; **give each page a unique title that briefly describes its content and purpose**; **use accurate section headings so people build a mental model of each page's hierarchy.**
- **must** **Specify how elements are grouped, ordered or linked.** **Proximity, alignment and other visible cues show sighted people relationships; find places where relationships are visual only and describe them to VoiceOver.**
  - **VoiceOver reads in the reading order of the active language and locale** (**US English: top to bottom, left to right**).
  - **Example:** **ungrouped: VoiceOver describes each image before the captions**; **grouped: each image is described with its caption.** (Illustrations: **two images (a basket of mangoes and a basket of artichokes) with captions beneath; ✗ all images and captions in one VoiceOver frame; ✓ only the mangoes image and its caption in one frame**.) (Developer: `shouldGroupAccessibilityChildren`.)
- **must** **Tell VoiceOver when visible content or layout changes occur**: **an unexpected change breaks the person's mental map of the content**; **report visible changes so VoiceOver and other assistive technologies can help people update their understanding** (`AccessibilityNotification`).
- **should** **Support the VoiceOver rotor where possible**: **the rotor lets people navigate a document or web page by headings, links and other content types**; **identify these elements to the rotor**; **the rotor can also bring up the braille keyboard.** (Developer: `AccessibilityRotorEntry`, `UIAccessibilityCustomRotor`, `NSAccessibilityCustomRotor`.)

### Platform considerations
- **iOS, iPadOS, macOS, tvOS, watchOS:** no additional considerations.

#### visionOS
- **must** **Be mindful that custom gestures aren't always accessible.** **When VoiceOver is on in visionOS, apps and games that define custom gestures don't receive hand input by default**, **so people can explore the interface by voice without the app also reacting to hand input.** **People can opt out by enabling Direct Gesture mode, which disables standard VoiceOver gestures and lets apps process hand input directly.** (Developer: "Improving accessibility support in your visionOS app"; see `inputs/gestures.md`.)

## Specs & values
The page has **no numbers, sizes or timings**. Its concrete content:

| Item | Value |
|---|---|
| Who it serves | people who are blind or have low vision |
| Supported in | Apple-platform apps and games; Unity with Apple's Unity plug-ins |
| Labels | alternative (non-visible) labels on all key elements, descriptive, kept current, also for custom elements |
| Images | meaningful → describe only what the image conveys; decorative → exclude; charts and infographics → concise description + the same interactions |
| Titles and headings | unique page titles; accurate section headings |
| Order and grouping | reading order follows the language and locale (US English: top-to-bottom, left-to-right); group related elements (image + caption) |
| Change reporting | announce visible content and layout changes (`AccessibilityNotification`) |
| Rotor | headings, links and other types; also opens the braille keyboard |
| visionOS | VoiceOver on → custom gestures receive no hand input by default; Direct Gesture mode opts out |
| Developer docs | Accessibility · VoiceOver · Supporting VoiceOver in your app |
| Videos (link only, not watched) | Writing Great Accessibility Labels (WWDC19 254) · Tailor the VoiceOver experience in your data-rich apps (WWDC21 10121) · VoiceOver efficiency with custom rotors (WWDC20 10116) |
| Apple's Related list | Accessibility · Inclusion |
| Change log | Mar 7 2025: new page |

## Visual notes (link-only: from alt texts, captions and the catalog list)
- **Hero:** a sketch of **the VoiceOver icon** over grid lines, **tinted blue** (alt).
- **Grouping pair (catalog `voiceover-01`, light and dark; rule "Specify how elements are grouped, ordered, or linked"):** **✗ "Ungrouped related elements make it hard for VoiceOver to accurately describe the UI." / ✓ "Grouped related elements help VoiceOver accurately describe the UI."** Both show **the top of an iPhone with two images (mangoes on the left, artichokes on the right) and their captions**; **✗ has everything in one VoiceOver frame, ✓ has just the mangoes image and caption in one frame.**
- **Mismatches / notes:**
  1. **The "ungrouped" example's alt says everything is in a *single* frame**, **which means one big element rather than separate unlinked ones**; **the point is that grouping must match how content relates, not simply that there is one frame.** **The caption text explains the failure only briefly.**
  2. **The page says "describe only what the image itself conveys" but doesn't say how long a description should be**; **no length or style guidance.**
  3. **The page names the VoiceOver rotor but gives no list of rotor types**; **see developer docs.**
  4. **The page is UI-level guidance; no gesture list** (two-finger scrub, swipe conventions) **or braille details**; **details live in Accessibility docs and Apple support.**
  5. **The visionOS rule concerns hand input; eye-tracking and Persona guidance sit elsewhere** (`inputs/eyes.md`, `technologies/shareplay.md`).
  6. **The Change log has a single row (new page)**, **so guidance previously in Accessibility was consolidated**; **check `foundations/accessibility.md` for overlap.**
- **Catalog:** the script found **1 comparison** (the grouped vs ungrouped pair). **Not catalogued:** **the hero.** Catalog total **283** (was 282); the 282 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **voiceover-01** (do/don't, light and dark; rule "Specify how elements are grouped, ordered, or linked"): **✗ ungrouped images and captions in one VoiceOver frame** vs **✓ the mangoes image grouped with its caption**. The script reports **1 comparison** for this page.

## Web translation
**VoiceOver also reads web content in Safari, and other screen readers (NVDA, JAWS, TalkBack, Narrator, Orca) read it in their own browsers**, **so the page's rules map to standard web accessibility**: **WCAG 2.2 (1.1.1 non-text content, 1.3.1 info and relationships, 1.3.2 meaningful sequence, 2.4.2 page titled, 2.4.6 headings and labels, 4.1.2 name/role/value, 4.1.3 status messages)** and **WAI-ARIA**. **Mappings below are background knowledge, not from the page**; test with real screen readers (**VoiceOver on macOS/iOS Safari**, **NVDA/JAWS on Windows**, **TalkBack on Android**).

| HIG rule | Web implementation |
|---|---|
| Alternative labels for all key elements | **Every interactive element has an accessible name** (**visible text, `aria-label`, `aria-labelledby`, `<label for>`**); **icon-only buttons get `aria-label` ("Delete", not "trash")**; **prefer native elements** (`<button>`, `<a>`) **over ARIA roles**; **update names when state changes** (`aria-pressed`, `aria-expanded`) (`buttons.md`, `toggles.md`). |
| Descriptive labels beyond generic ones | **A specific accessible name** ("Add Mangoes to cart", **not** "Add") **and unique names for repeated controls via `aria-labelledby` pointing at the item title**; **keep label text within the visible label text (WCAG 2.5.3)**. |
| Describe meaningful images | **`<img alt="…">` describing what the image conveys, not repeating the caption**; **`<figure>` + `<figcaption>`**; **complex images: short alt plus a linked long description** (`image-views.md`, `images.md`). |
| Charts and infographics | **A concise text summary next to the chart, a data table alternative, `role="img"` with `aria-label` for static SVGs**; **keyboard-operable interactions with focusable data points, `aria-describedby`** (`charts.md`, `charting-data.md`). |
| Hide decorative images | **`alt=""` (or CSS background images), `aria-hidden="true"` on decorative SVG/icons next to text.** |
| Titles and headings | **A unique `<title>` and one `<h1>` per page; a logical `<h2>`–`<h6>` outline without skipped levels; landmarks (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`) with labels when repeated**; **route changes update `document.title` and move focus to the new heading** (`launching.md`). |
| Grouping, order, linking | **DOM order = reading order** (**don't reorder with CSS `order` or absolute positioning**); **group related content in one container** (`<figure>`, `<article>`, `<li>`, `role="group"` with `aria-labelledby`); **`aria-describedby`/`aria-controls` for relationships**; **use lists and tables for lists and data**; **RTL follows document `dir`** (`right-to-left.md`). |
| Announce visible changes | **`role="status"`/`aria-live="polite"` for non-urgent updates, `role="alert"`/`assertive` for urgent errors**; **move focus to new dialogs, sheets and inline errors; restore focus on close**; **don't announce every tick** (`feedback.md`, `loading.md`, `alerts.md`). |
| Rotor support | **Semantic headings, links, landmarks, lists, form controls and tables** (**screen readers' rotor/element lists build from them**); **skip links**; **avoid fake headings made from bold text.** |
| Braille and keyboard | **Keyboard operable, visible focus, no keyboard traps** (WCAG 2.1.1, 2.4.7); **ARIA live and names work with braille displays too** (`keyboards.md`). |
| visionOS custom gestures | **Native/WebXR only**; **on the web, don't rely on custom gestures alone**: **provide single-pointer, keyboard and click alternatives** (WCAG 2.5.1, 2.5.7) (`gestures.md`). |
| Testing | **Turn on VoiceOver and try each key task**; **automated checks (axe, Lighthouse) catch only part of the issues**; **include people who use screen readers** (`inclusion.md`, `accessibility.md`). |
| Native-only | **`accessibilityLabel`, `accessibilityHidden`, `shouldGroupAccessibilityChildren`, `AccessibilityNotification`, custom rotors, Direct Gesture mode** are native; **the web uses ARIA and semantic HTML.** |

Field-note cross-links:
- `field-notes/*`: **no VoiceOver recipe**; nothing conflicts. **Prefer semantic HTML and visible focus before adding ARIA.**
- `hig/foundations/accessibility.md` (✓): **Apple's Related page; broader accessibility, VoiceOver settings and testing**; `hig/foundations/inclusion.md` (✓): **Apple's Related page**; `hig/components/content/charts.md` (✓) and `hig/patterns/charting-data.md` (✓): **infographic descriptions and interactions**; `hig/components/content/image-views.md` (✓) and `hig/foundations/images.md` (✓): **image descriptions**; `hig/foundations/icons.md` (✓) and `sf-symbols.md` (✓): **icon labels**; `hig/patterns/feedback.md` (✓ CRITICAL), `loading.md` (✓) and `hig/components/presentation/alerts.md` (✓): **announcing changes and status**; `hig/foundations/right-to-left.md` (✓): **reading order by locale**; `hig/inputs/gestures.md` (✓) and `hig/inputs/keyboards.md` (✓): **gesture alternatives, keyboard access**; `hig/technologies/shareplay.md` (✓): **participants without Personas need alternatives**; `hig/components/system-experiences/widgets.md` (✓) and `top-shelf.md` (✓): **their mentions of VoiceOver (labels for glanceable content)**.
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **Every key interactive element has a specific accessible name**; **icon-only controls have labels**; **names update with state.**
- [ ] **Meaningful images have descriptions (not repeating captions)**; **decorative images are hidden.**
- [ ] **Charts and infographics have a concise description, a data alternative and keyboard-operable interactions.**
- [ ] **Each page has a unique title and an accurate heading outline; landmarks are labelled.**
- [ ] **Reading order matches the visual order; related items (image + caption, label + value) are grouped.**
- [ ] **Content and layout changes are announced (status/alert regions) and focus is managed for dialogs and route changes.**
- [ ] **Headings, links, lists and landmarks are real semantic elements so rotor-style navigation works.**
- [ ] **No custom gesture is the only way to do something**; **keyboard and single-pointer alternatives exist.**
- [ ] **Key tasks were tried with a real screen reader.**

## Related
- Ingested: Accessibility (✓), Inclusion (✓), Charts (✓), Charting data (✓), Image views (✓), Images (✓), Icons (✓), SF Symbols (✓), Feedback (✓ CRITICAL), Loading (✓), Alerts (✓), Right to left (✓), Gestures (✓), Keyboards (✓), SharePlay (✓), Widgets (✓), Top Shelf (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: Accessibility · VoiceOver · Supporting VoiceOver in your app.
- Videos: Writing Great Accessibility Labels (WWDC19 254) · Tailor the VoiceOver experience in your data-rich apps (WWDC21 10121) · VoiceOver efficiency with custom rotors (WWDC20 10116).
