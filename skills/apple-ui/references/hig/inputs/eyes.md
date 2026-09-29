# Eyes
Source: https://developer.apple.com/design/human-interface-guidelines/eyes · Section: Inputs · Supported platforms: **visionOS only** ("Not supported in iOS, iPadOS, macOS, tvOS, or watchOS"; only the Vision Pro icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **June 10, 2024** (added guidance for custom hover effects; earlier rows: March 29, 2024 artwork showing the visionOS hover effect · October 24, 2023 clarified the difference between focus effects and the visionOS hover effect · June 21, 2023 new page). One DocC fetch, read in full. **7 screenshots (hero → the three video cards, cut off at the bottom)** were compared with the fetched text, image alt text and the video alt line by line; they cover the **whole page except the Change log table and the video titles' captions, which are fetch-only**. The browser was in **dark appearance**; the content is identical (the *Important* callout is amber on dark). Everything visible matches the fetch except the notes under **Mismatches**. **Read from the fetch only (not in screenshots):** the four Change-log rows, the alt text of the images, the three video titles (the screenshot shows the three cards but only fragments of their titles) and the dark variant of the hero. **The page has one demo video** (the hover effect moving across Settings items); **I did not measure it**: its only recorded content is its alt text and the still frame visible before "Play" **(from screenshot)**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **three numbers**: **16 pt** margin, **60 pt** centre distance, **1 metre** viewing distance.

## In one line
On Vision Pro **people look at an interactive element to target it**, and **visionOS highlights it (the *hover effect*)** to confirm the choice and show that an **indirect gesture such as tap** will act on it. **For privacy, apps never learn where people look before they tap**; system components report only the **tap**. Rules: **give several ways to interact (accessibility)**, **keep content in the field of view at a comfortable distance (≥ 1 m for lasting content)**, **use standard components**, **cut visual noise and peripheral motion**, **leave room around targets (16 pt margin or centres ≥ 60 pt apart)**, **avoid full-field repeating patterns**, **use subtle cues to guide gaze**, **round the shapes**, **give multi-part controls one containing shape**, and use **custom hover effects sparingly (right delay, one primary view unchanged, testing on the device)**. visionOS only; on the web the relevant ideas are **hover/focus affordances, target spacing and rounded hit shapes**, while **gaze itself is not exposed to pages**.

## Rules

### Framing (intro)
- **Looking at an interactive element makes visionOS highlight it** (visual feedback that **confirms it's the intended item**); this **hover effect** signals that an **indirect gesture like tap** will operate it. (Demo video: the **Settings app** with the hover effect **moving from one setting to the next** as the eyes move.)
- Sometimes the system **expands a component** after people look at it: a **tab bar resizes to show text labels**, with an **individual tab highlighting first** so people can select it before the labels appear; a **button can reveal a tooltip**.
- **Important (callout):** for privacy visionOS **doesn't tell apps where people look before they tap**; with **system components** the OS **tells you when the component is tapped** (developer: "Adopting best practices for privacy and user preferences").
- **Focus effects** are **separate**: they help people navigate with **a connected keyboard or game controller** and are **unrelated to the hover effect** (see Focus and selection).

### Best practices
- **must** **Always give people multiple ways to interact**: support the **accessibility features** people use to personalise input (see Accessibility).
- **should** **Design for visual comfort**: keep what people need **within their field of view**. In the **Shared Space or a Full Space** the system **places the first window or volume in a convenient spot**; in a Full Space an app may **request head-pose information** to place 3D content. **Avoid forcing multiple quick eye adjustments over a large area or through several depth levels** (see Depth).
- **should** **Place content at a comfortable viewing distance**: for reading or long engagement aim for **at least one metre** away; **don't place content very close** unless it's viewed or used **only briefly**.
- **should** **Prefer standard UI components**: they **respond consistently to gaze**; custom cues make behaviour **hard to learn and remember**.

### Making items easy to see
- **should** **Minimise visual distractions**: visual noise makes the target hard to find; **movement, especially in peripheral vision, pulls the eyes** (revealing content **near a button people are looking at** can make them **look at the new content instead**).
- **should** **Leave enough space around items**: eyes make **small quick adjustments even while looking at one place**, so **crowded** items make it hard to look at one without **jumping to another**. Use **a margin of at least 16 pt around each item's bounds** **or** place items so **their centres are always at least 60 pt apart** (see Layout and Spatial layout).
- **should** **Avoid a repeating pattern or texture that fills the field of view**: eyes can **lock onto different elements**, making them **seem to be at different depths**; confine such patterns to a **smaller area**.

### Encouraging interaction
- **should** **Use subtle visual cues to draw the eye to the most likely item**: place it **near the centre of the field of view** or use **gentle motion, increased contrast, or variations in colour or scale**; prefer cues that are **noticeable but not flashy or harsh**.
- **should** **Give interactive items a rounded shape**: eyes are **drawn to corners**, making it hard to keep looking at the centre; **the rounder, the easier to target**. (✗ a square button · ✓ a circular button.)
- **must** **Give multi-element components one containing shape visionOS can highlight**: e.g. **an image plus its label** acting as one control need **a custom region covering both**, so the **whole region highlights** when people look at **either** element.

### Custom hover effects
- **may** **Design a custom hover effect** that animates in a custom way when people look at an element: **system or custom UI elements** and **RealityKit entities**; it can **replace or augment** the standard effect.
- **How it works:** you create **two states (appearances)** for the element: **with** and **without** the effect. When someone looks at it, **the system applies your predefined effect out of your app's process**, so **you don't know when it's applied or which state the element is in**, and the effect **can't run code that needs to know when people are looking**. Example: in a photo app the custom effect shows **a different symbol depending on whether the photo is in Favorites**; it **can't perform the favouriting** because **the system doesn't tell the app someone is looking**.
- **should** **Use a custom hover effect to emphasise a special moment**: people know the standard effects (feedback; additional info in tab bars and tooltips), so **a custom one stands out**; **too many, or using them where standard effects suffice, dilutes the design, distracts and can cause visual discomfort**.
- **should** **Choose the right delay** (instant, short or slightly longer):
  - **No delay (default):** for **subtle effects or ones that invite interaction** (a **knob appearing on a slider**).
  - **Short delay:** let people **look and act quickly without waiting**; example: **tab expansion in a tab bar**.
  - **Long delay:** when the effect **shows extra information** (a **tooltip below a button**): most people **don't need it every time**.
- **should** **Keep at least one primary view unchanged in both states**: a **constant primary view gives visual stability**; if **all views move or change**, people **get disoriented and lose track**.
- **must** **Test custom hover effects thoroughly, ideally while wearing Vision Pro**: only testing shows whether they **look good, respond appropriately and feel alive without distracting**.

### Platform considerations
- **visionOS only.** Not supported in iOS, iPadOS, macOS, tvOS, watchOS.

## Specs & values
| Item | Value |
|---|---|
| Minimum margin around an interactive item | **16 pt** around its bounds |
| Or minimum distance between item centres | **60 pt** |
| Comfortable distance for lasting content | **≥ 1 metre** |
| Custom hover effect delays | **none (default)** · **short** · **slightly longer** (three options; no times given) |
| Custom hover effect states | **two** (with / without the effect) |
| Effect process | **out of the app's process**; no code runs on gaze |
| Privacy | **no gaze data to apps**; only the **tap** is reported by system components |
| Focus effects | separate; keyboard and game-controller navigation |
| Developer API named | "Adopting best practices for privacy and user preferences" (visionOS), RealityKit entities |
| Videos | on-page demo video (Settings hover effect; **not measured**); links: Design hover interactions for visionOS (WWDC25 303), Design for spatial input (WWDC23 10073), Design considerations for vision and motion (WWDC23 10078) (titles only, not watched) |
| Apple's Related list | Immersive experiences (✓), Gestures (not yet ingested), Spatial layout (✓) |
| Change log | Jun 10 2024 · Mar 29 2024 · Oct 24 2023 · Jun 21 2023 |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a **purple gradient card** (tinted purple on purpose) with **a pale-lilac stylised eye**: an **almond outline**, a **large ring iris** and **a small pupil disc**, over **construction lines** (rectangular grid, diagonals, nested circles). Alt: "A sketch of a human eye…".
- **Demo video still (screenshots 1–2):** the frame before **"Play ⊙"** shows a **Vision Pro Settings window floating in a living room** (an acoustic guitar on a brick wall, a record player, an orange armchair): a sidebar with **Search, General, Apps, People, Environments, Notifications, Sounds, Focus, Screen Time, FaceTime, Persona** and a **"General"** pane listing **About, Software Update, AirDrop, Handoff, Apple Vision Pro Storage, Background App Refresh, Date & Time, Keyboard, Fonts** **(from screenshot: all these words are inside the recording; the alt only describes the hover effect moving between settings)**. The **General** item in the sidebar is highlighted.
- **Callout (screenshot 2):** the **Important** box is an **amber/gold rounded rectangle** on the dark page (privacy statement).
- **Square vs circular button (screenshots 4–5):** two **grey-beige tiles**: a **square button** (✗ grey cross) and a **circular button** (✓ green check).
- **Videos (screenshot 7):** three cards: a **Vision Pro Meditation-style window** in front of a coloured shell ("10 MIN", "CALM", "Cancel", "Begin"; WWDC25); **a heart glyph in a white circle beside a hand making a pinch** (a still from the spatial-input talk); **a head-profile diagram with coloured rays converging on an eye** (vision and motion talk) **(from screenshot)**. The cards are **cut off at the bottom**; titles come from the fetch.
- **Page chrome (from screenshot):** TOC = Eyes · Best practices · Making items easy to see · Encouraging interaction · Custom hover effects · Platform considerations · Resources · Change log; the platform strip has **only the Vision Pro icon lit**; side navigation: **Inputs** open with **Eyes** ringed (browser focus), **Technologies** below.
- **Mismatches / notes:**
  1. The hero's alt names **a human eye**; the drawing is an **iris ring with pupil**, consistent.
  2. The video's on-screen words (Settings labels) are **only in the recording**, not in the fetch.
  3. The bottom of the screenshots ends **in the middle of the video cards**; the **Change log is fetch-only**.
  4. The screenshots were taken in **dark appearance**.
- **Catalog:** the square/circular pair is filed as **eyes-01** (✗/✓, light variants only). The hero and the video are not rows. Catalog total **216** (was 215); existing IDs unchanged.

## Visual examples (catalog)
`visual-examples` gains **eyes-01** ✗ square button / ✓ circular button ("give an interactive item a rounded shape"); light variants only. The demo video is **not** catalogued and its motion is **not measured** (the page gives no numbers for it).

## Web translation
Gaze is **not exposed to web pages** (consistent with the page's privacy note); in Safari on Vision Pro **the system highlights interactive elements** and the page receives the **selection (tap/click)**. What transfers: **hover/focus affordances**, **target spacing**, **rounded hit shapes**, **containing shapes for composite controls**, **no peripheral movement**, **comfortable viewing distance for WebXR content**, **multiple ways to interact**, and **use standard controls**.

| HIG rule | Web implementation |
|---|---|
| Hover effect confirms the target; tap acts | Give **every interactive element a visible hover and focus state** (`:hover`, `:focus-visible`, same treatment) **and a distinct pressed state** (`:active`); don't rely on hover alone; **`@media (hover: hover)`** for pointer-only extras. |
| Expanded views on look (tab bar labels, tooltip) | **Tooltips/expansions appear on hover *and* focus**, with a **short delay for extras (≈ 300–700 ms, CONV)** and **instantly for subtle affordances** (slider thumb), dismissible (`Esc`), **never the only place for essential info** (WCAG 1.4.13). |
| Apps get no gaze data | **Don't try to infer gaze** (no eye tracking or webcam gaze); analytics and UI must work from **pointer/focus/tap events**; on visionOS Safari **hover styles may not fire before the select**, so **design actions to depend on click/tap only**. |
| Focus effects (keyboard/controller) are separate | Provide **keyboard focus rings** independent of hover (`:focus-visible`, ≥ 3:1 contrast), full **Tab/arrow** operation, **gamepad** via the Gamepad API where relevant (`focus-and-selection.md` when ingested). |
| Multiple ways to interact; accessibility | Support **pointer, touch, keyboard, voice, switch**; honour **`prefers-reduced-motion`**, **`prefers-contrast`**; every control has an **accessible name**; no gesture-only actions. |
| Visual comfort: content in field of view; ≥ 1 m | For **WebXR/spatial** experiences place lasting content **≥ 1 m** away (`viewer` reference space; **0.75–2 m** typical comfort range, CONV), **at or just below eye level, within ~ ±30° of gaze centre** (CONV); avoid depth jumps between related controls. |
| Standard components | Use **native `<button>`, `<a>`, `<input>`, `<select>`** and platform-styled widgets so **the system's hover/highlight and hit-testing apply**; custom widgets replicate **role, focus and hover behaviour**. |
| Minimise distractions; no peripheral motion | **No auto-moving/pulsing elements near a target**; **don't insert content next to the hovered control** (layout shift on hover/focus); **`animation` off under reduced motion**; no autoplaying carousels beside actions. |
| 16 pt margin or 60 pt centre distance | **`gap ≥ 16px` between interactive items** and **centres ≥ 60 px apart** in spatial/large-target modes (CONV mapping pt → CSS px; matches Buttons GATE: hit region ≥ 44 px, **8 px** spacing on touch, **60 pt** for visionOS) (`buttons.md`, `spatial-layout.md`). |
| No full-field repeating pattern | **No busy full-viewport patterns/textures** (grids, stripes, halftones) behind content; confine to **small areas** or **low contrast** (also helps `prefers-reduced-motion` and vestibular comfort). |
| Subtle cues to draw attention; centre placement | **Primary action near the visual centre**, a **gentle** accent (contrast, colour, scale ≤ 5 %) rather than flashing/pulsing (**WCAG 2.3.1**: ≤ 3 flashes/s). |
| Rounded shapes | **Large `border-radius`** on buttons and hit areas (pill/circle for icon buttons); **hit region = the visual shape** (`clip-path`/`border-radius`) so corners aren't dead zones or magnets; Buttons GATE hit region ≥ 44 px. |
| Containing shape for multi-element controls | **One clickable container** (`<a>`/`<button>` wrapping image + label, or `::after` stretched link) with **one focus ring and one hover state** around **both**; never separate hover states on image and label of the same target. |
| Custom hover effects: sparingly, delay, keep a primary view constant | Use **custom hover animations only for special moments**; **short, reduced-motion-safe transitions (150–300 ms)**; keep **the main content stationary** (e.g. animate an overlay/icon, not the whole card); **test with the real devices** (Vision Pro Safari, touch, keyboard). |
| Out-of-process effect: no logic on gaze | Pure **CSS** hover effects (`:hover`) **can't and mustn't run business logic**; **never perform an action on hover** (favouriting, prefetching with side effects); actions on **click/tap/Enter** only (`apple-pencil-and-scribble.md`: same "hover = preview only" rule). |
| visionOS only | Native visionOS apps: SwiftUI `.hoverEffect`, `HoverEffectComponent`, `.contentShape`; the web only gets **system-applied highlighting**. |

Field-note cross-links:
- `hig/foundations/spatial-layout.md` (✓): **field of view, depth, 60 pt spacing** (this page uses the same 60 pt centre distance; that note's "Eyes not yet ingested" lines are now updated); `hig/foundations/immersive-experiences.md` (✓): Apple's Related page (comfort in immersive scenes); `hig/components/menus/ornaments.md` (✓) and `hig/components/navigation/tab-bars.md` (✓): the **tab-bar expansion** and gaze-hover behaviour; `hig/components/menus/buttons.md` (✓ CRITICAL) and **Buttons GATE**: visionOS hit regions and spacing; `hig/foundations/layout.md` (✓ CRITICAL) and **Layout gate**; `hig/foundations/accessibility.md` (✓): multiple ways to interact; `hig/inputs/apple-pencil-and-scribble.md` (✓): hover previews (**preview, never action**) share this logic; `hig/inputs/digital-crown.md` (✓): the other visionOS system input; `hig/patterns/feedback.md` (✓ CRITICAL): visible feedback for every input.
- `field-notes/*`: no gaze/spatial-input recipe; **no conflict**.
- Not yet ingested (linked from this page): **Gestures** (visionOS indirect gestures), **Focus and selection**.

## Checklist
- [ ] Every interactive element has **hover, focus-visible and pressed states**; **actions happen only on click/tap/Enter**, never on hover.
- [ ] Interactive items have **≥ 16 px gaps** (centres **≥ 60 px** in spatial/large-target modes); **hit regions ≥ 44 px**.
- [ ] Buttons and icon buttons use **rounded/circular shapes**; hit region matches the shape.
- [ ] Composite controls have **one containing element**, one hover ring and one focus ring.
- [ ] **No layout shift or motion next to the hovered/focused control**; no full-viewport repeating patterns.
- [ ] Attention cues are **subtle** (centre placement, gentle contrast/scale), **≤ 3 flashes per second**, reduced-motion respected.
- [ ] Tooltips/expansions open on **hover and focus**, are **dismissible** and never hold essential information.
- [ ] Lasting spatial content sits **≥ 1 m** away, in the comfortable gaze zone, with **no forced depth jumps**.
- [ ] Standard elements are preferred; custom widgets copy **role, focus and hover behaviour**; **keyboard/switch/voice** all work.
- [ ] No attempt to read gaze; custom hover effects are **rare, short, keep a primary view unchanged** and were **tested on the device**.

## Related
- Ingested: Immersive experiences (✓), Spatial layout (✓), Ornaments (✓), Tab bars (✓), Buttons (✓ CRITICAL), Layout (✓ CRITICAL), Accessibility (✓), Digital Crown (✓), Apple Pencil and Scribble (✓), Feedback (✓ CRITICAL).
- Not yet ingested (linked from this page): **Gestures**, **Focus and selection**.
- Developer docs: "Adopting best practices for privacy and user preferences" (visionOS); RealityKit hover effects.
- Videos: Design hover interactions for visionOS (WWDC25 303), Design for spatial input (WWDC23 10073), Design considerations for vision and motion (WWDC23 10078).
