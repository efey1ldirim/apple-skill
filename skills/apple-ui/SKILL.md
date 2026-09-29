---
name: apple-ui
description: >
  Build and review UI/UX at Apple quality — web (React/Tailwind/CSS), iOS, macOS, and
  cross-platform. Grounded in Apple's Human Interface Guidelines (distilled page by page in
  references/hig/) plus field-proven web patterns with exact values (references/field-notes/).
  Use whenever the user asks for an "Apple-style" / "Apple-quality" / "premium" / "minimal"
  screen, a new page, settings screen, onboarding wizard, consent/permission screen, landing
  section, dashboard, or a design review — and whenever a design "looks generic", "looks AI",
  or "looks cheap". Also use before writing any new UI component in a project that already
  follows this language.
---

# Apple-quality UI

> ## ⚠️ COLOR GATE — CRITICAL, zero tolerance
> Colour must match Apple's HIG **exactly**. Before any UI is called done:
> 1. Read `references/hig/foundations/color.md` (CRITICAL page) — every rule applies.
> 2. Take colour values **only** from `tokens/apple-system-colors.css` / `.json` (exact HIG values,
>    four modes: light, dark, increased-contrast light/dark) or the approved neutrals. Never type a
>    system colour from memory — the familiar `#007AFF`/`#FF3B30` values are **outdated**.
> 3. `node tools/check-colors.mjs <changed files>` → **0 errors**; every WARN is a declared
>    brand/content colour with all four variants.
> 4. `node tools/check-colors.mjs --pair <fg> <bg>` for every text/background pair → ≥ 4.5:1 body,
>    ≥ 3:1 large/bold/UI parts, in light, dark and both increased-contrast modes.
> 5. Compare screenshots with Apple's colour pairs `color-01 … 04`, `dark-mode-01 … 05`.
> 6. Dark Mode (`references/hig/foundations/dark-mode.md`): follow system appearance live; custom
>    small-text pairs aim for 7:1; overlays elevated (lighter) over the dark base.
> If any step fails, the design is not finished.

> ## ⚠️ TYPOGRAPHY GATE — CRITICAL, zero tolerance
> Readable type and Dynamic Type behaviour must follow Apple's HIG Typography page:
> 1. Read `references/hig/foundations/typography.md` and select the target platform's exact
>    category/style rows from `tokens/apple-typography.json`. Use the platform's semantic text
>    styles and system font APIs; never guess size, leading, weight or tracking from memory.
> 2. Match the platform's ordinary default reading size and respect its minimum as a floor,
>    including custom fonts. Avoid thin weights for small text. Keep hierarchy and reading order
>    when the person's text size changes.
> 3. For web mockups, `tokens/apple-typography.css` is an opt-in **CONV** point-to-CSS mapping,
>    not native rendering. Use rem/semantic HTML and browser zoom; never bundle SF/NY font files
>    simply to imitate the OS. Tracking tables are for mockups; native system fonts adjust it.
> 4. `node tools/check-typography.mjs <changed files>` → **0 errors**; review every warning,
>    or justify a specific line with `// typography-ok: <reason>`.
> 5. Run `node tools/run-layout-probe.mjs <url>` with its 200% text-scale checks, then inspect
>    the largest standard and accessibility size on the target platform. Important labels wrap;
>    row height grows; inline metadata stacks; icons scale; no useful text vanishes into ellipsis
>    without a full-text route. Use comfortable leading for passages of three or more lines.
> 6. Compare the design with Apple's `typography-01 … 03` examples, including the game labels,
>    the largest Mail text size and flat versus extruded visionOS text.
> If any step fails, the design is not finished.

> ## ⚠️ LAYOUT GATE — CRITICAL, zero tolerance
> Layout must follow Apple's HIG Layout page **exactly**. Before any UI is called done:
> 1. Read `references/hig/foundations/layout.md` (CRITICAL page) — every rule and its web translation apply.
> 2. Take spacing, widths, breakpoints, safe-area and target values **only** from
>    `tokens/apple-layout.css` / `.json`. Decide layout by available width (size classes),
>    **never** by device, user agent or orientation. Never use remembered device point sizes.
> 3. `node tools/check-layout.mjs <changed files>` → **0 errors** (WARNs fixed or justified with
>    `// layout-ok: <reason>`).
> 4. `node tools/run-layout-probe.mjs <url>` (or paste `tools/layout-probe.js` and call
>    `layoutProbe({ textScale: 2 })` at 320, 375, 667×375, 768, 1024, 1440) → **PASS at every
>    viewport**: no horizontal overflow, no clipped text at 200%, targets ≥ 44 px, no content stuck
>    under fixed bars, zoom not blocked.
> 5. Hierarchy check: most important content top-leading; alignment/indent show hierarchy; one
>    grouping mechanism per boundary; same features at every size (only placement changes).
> 6. Compare screenshots with Apple's layout pairs `layout-01 … 07`.
> If any step fails, the design is not finished.

> ## ⚠️ MATERIALS GATE — CRITICAL, zero tolerance
> Any translucency, blur, glass or overlay must follow Apple's HIG Materials page **exactly**:
> 1. Read `references/hig/foundations/materials.md` (CRITICAL page) — every rule and its web translation apply.
> 2. Two families only, from `tokens/apple-materials.css`: **`.glass` / `.glass-clear`** (Liquid Glass) on
>    the **functional layer** only (fixed/sticky bars, toolbars, tab bars, sidebars, popovers, menus,
>    dialogs, controls over media) and **`.material-ultrathin|thin|regular|thick`** for structure in
>    the **content layer**. Never glass on cards/rows/sections/backgrounds; use glass sparingly (group
>    controls in one container); `.glass-clear` only over media, with `.material-dim` (35 %) over bright media.
>    Pick a material by meaning, never by the colour it produces; never hand-write blur tints.
> 3. Text and glyphs on materials use the vibrant ladder `var(--on-material-*)` — never grey palette
>    colours (systemGray3 ✗); no quaternary on thin/ultrathin; tertiary only for inactive items.
> 4. `node tools/check-materials.mjs <changed files>` → **0 errors** (WARNs fixed or justified with
>    `// material-ok: <reason>`).
> 5. `node tools/run-materials-probe.mjs <url>` → **PASS in every mode** (light, dark, Reduce
>    Transparency light/dark, Increase Contrast; 375 and 1440 wide): no glass in content, text on
>    materials ≥ 4.5:1 (3:1 large), everything opaque under Reduce Transparency.
> 6. Compare screenshots with Apple's material pairs `materials-01 … 10` (ours must not resemble ✗ 03 / 07).
> If any step fails, the design is not finished.

> ## ⚠️ FEEDBACK GATE — CRITICAL, zero tolerance
> Every message the UI shows (status, success, failure, warning, correction) must follow Apple's HIG Feedback page:
> 1. Read `references/hig/patterns/feedback.md` (CRITICAL page) and `tokens/apple-feedback.json`. Classify each message on the
>    **delivery ladder** — status · routine success · significant success · cannot-do/correction · unexpected irreversible loss —
>    and deliver it that way: quiet and next to the item for status, an interruption **only** for unexpected, irreversible loss.
> 2. Every message is **text + an icon/shape**; the hue lives on the icon, the text stays in the label colour; never colour, sound or
>    vibration alone. Every dynamic message is announced (`role=status`/`alert`/`aria-live`, or `aria-describedby` on the field).
>    Use `tokens/apple-feedback.css` (`.fb-status`, `.fb-inline`, `.fb-toast` on `.glass`, `.fb-alert`, `.fb-reason`, `.sr-only`).
> 3. `node tools/check-feedback.mjs <changed files>` → **0 errors** (WARNs fixed or justified with `// feedback-ok: <reason>`).
> 4. `node tools/run-feedback-probe.mjs <url>` (add `--click "<selector>"` / `--fill "<selector>=<value>"` to put toasts, errors and
>    alerts on screen first) → **PASS** in light, dark and reduced motion at 375 and 1440: all messages announced, none colour-only,
>    invalid controls explained, text ≥ 4.5:1, no alertdialog at first paint, ≤ 1 modal + at most one alert on top, spinners named, disabled primaries explained.
> 5. Walk the failure path (network error, invalid input, denied, empty) and the destructive path of every flow; no `alert()` for routine
>    success; no warning for expected removals (give Undo); every unavailable command says why.
> If any step fails, the design is not finished.

> ## ⚠️ BUTTONS GATE — CRITICAL, zero tolerance
> Every button the UI shows must follow Apple's HIG Buttons page (style · content · role):
> 1. Read `references/hig/components/menus/buttons.md` (CRITICAL page) and `tokens/apple-buttons.json`; use `tokens/apple-buttons.css`
>    (`.btn`, `.btn-prominent`, `.btn-destructive`, `.btn-compact`, `.btn-icon`, `.btn-block`, `.btn-row`, `.btn-stack`, `.btn__spinner`).
> 2. A real `<button>` (or `<a href>` for navigation), never a clickable div/span. **Hit region ≥ 44 × 44 CSS px** (60 in gaze UIs; small visuals extend it
>    with `::after`/padding). ≥ 8 px between standalone buttons. Every custom button has a **visible press (`:active`) state, hover and `:focus-visible`**.
> 3. **One or two prominent buttons per view or dialog** (Nonplo: exactly one); the preferred option differs by **style, never by size**; option sets share one height (row) or width (stack).
> 4. Purpose is clear: familiar icon and/or short verb-led label; icon-only buttons have an accessible name + tooltip. Roles: **primary = default (Enter)**, cancel normal,
>    destructive = red label on a neutral fill; **never a destructive primary, never autofocus on a destructive button**. Long actions: in-button spinner + changed label + no double submit.
>    Label contrast ≥ 4.5:1 (3:1 large; icon-only 3:1); buttons that open another dialog end with "…".
>    Labels are verb-led and in **Title Case** ("Add to Cart", "Save Changes"; Apple's rule, see `hig/foundations/writing.md` › Capitalisation table).
> 5. `node tools/check-buttons.mjs <changed files>` → **0 errors** (WARNs fixed or justified with `// buttons-ok: <reason>`).
> 6. `node tools/run-buttons-probe.mjs <url>` (add `--click "<selector>"` to open dialogs first) → **PASS** at 375 and 1440 px, light and dark: names, hit regions,
>    prominent count, size sets, roles, contrast, crowding, **press state and focus ring** (forced `:active`/`:hover` and real Tab).
> If any step fails, the design is not finished.

You are designing as an Apple design engineer would: restraint first, one idea per surface,
depth from light and tone instead of borders and colour, and every number chosen on purpose.

This skill has two knowledge sources. **Read the relevant files before you write UI — do not
work from memory of this summary.**

| Source | Path | What it is |
|---|---|---|
| Apple HIG, distilled | `references/hig/` | One file per developer.apple.com/design page: every rule, value, do/don't, platform difference. Start at `references/INDEX.md`. |
| Field notes | `references/field-notes/` | Patterns validated on a production web app, with exact Tailwind/CSS values, components, rejected ideas and engineering traps. |
| Apple's web patterns | `references/apple-web/` | Apple's own websites measured live (mega-menu, nav, cards, docs layout) — the closest reference for web work. |
| Apple's visual do/don't | `references/visual-examples/` | Apple's ✗/✓ example images (fetched locally by a script) with a catalog of which rule each pair illustrates — for visual self-checks. |
| Symbol effects kit | `references/symbol-effects.md`, `tokens/apple-symbol-effects.*` | SF Symbols animation presets measured frame-by-frame from Apple's videos, rebuilt for any icon set (CSS + JS), with a how-to per effect. |
| Liquid Glass | `references/liquid-glass/` (`overview.md`, `adopting.md`, `controls-motion.md`), `tokens/apple-glass-controls.*` | Apple's Liquid Glass pages distilled, plus the slider thumb and segmented control measured frame-by-frame from Apple's videos and rebuilt (lens, refraction, press/release motion) as a web kit — the base for other glass controls. |
| Visual references | `references/screenshots-described/` | Text descriptions of screenshots (Apple pages and curated reference shots) so proportions can be recalled without the images. |

## Workflow

1. **Classify the task.** New screen? Component? Review? Platform (web / iOS / macOS / visionOS)?
2. **Route.** Open `references/INDEX.md` and read every file the routing table lists for this
   task type. Always read `field-notes/principles.md` and `field-notes/anti-patterns.md`.
   For web work also read `field-notes/tokens.md` and `field-notes/components.md`.
3. **Check the host project first.** If it already has an Apple-style surface module (shared
   group/row/button primitives), import from it — never re-invent a second grammar on the
   same page. Match its tokens exactly.
4. **Compose, then justify.** For each surface state its one idea, its single filled action,
   and where colour lives. If you cannot name them, the design is not done.
5. **Compare against Apple's examples.** For every rule your screen touches that has a pair in
   `references/visual-examples/README.md`, `Read` Apple's ✗ and ✓ images (run
   `node tools/fetch-visual-examples.mjs` once if `images/` is missing) and compare them with a
   screenshot of your UI. Say which one yours resembles and fix it if it's the ✗.
6. **Verify visually.** Render it (browser preview / simulator), check light AND dark, check
   375px width, check that nothing scrolls that should not. Measure; don't eyeball.
7. **Run the checklist** at the bottom before calling it finished.

## Icon source — decide before drawing any icon [user decision]
Ask (or infer from the project) which platform the UI ships on, then recommend exactly one icon source:

| Project | Recommend | How |
|---|---|---|
| **Native Apple app** (SwiftUI / UIKit / AppKit; iOS, iPadOS, macOS, watchOS, tvOS, visionOS) | **SF Symbols** | Tell the person to install the **SF Symbols app** (developer.apple.com/sf-symbols; they download it and accept the licence themselves, never you) to browse names, variants and custom-symbol templates. In code use the system API (`Image(systemName:)`, `UIImage(systemName:)`) and check each symbol's minimum OS. Never in the app icon, logo or trademark use. |
| **Cross-platform app** (React Native, Expo, Flutter, Capacitor) | SF Symbols **on iOS only**, via a native bridge (e.g. `expo-symbols`), + **Lucide / Phosphor / Ionicons** for Android and web | Keep one name map (SF name → open-set name). Never export SF Symbols SVGs into shared code. |
| **Everything else** (websites, web apps, PWAs, Electron/Tauri, Android, landing pages) | **Lucide** (ISC) by default · **Phosphor** (MIT) when you need SF-like weights (thin→bold) or fill/duotone variants · **Ionicons** (MIT) for an iOS-flavoured mobile web / Ionic | One set per product, one stroke weight per context. SF Symbols are **not allowed** here (licence: Apple-platform apps only, no redistribution). Screenshots of the person's own iOS app in marketing are fine. |

Animate any of them with the measured kit (`references/symbol-effects.md`). Details and licence notes:
`references/hig/foundations/sf-symbols.md` § Which icon set to recommend.

## Apple's eight design principles (HIG, reintroduced June 2026)
Purpose (make something meaningful) · Agency (let people do things their own way) ·
Responsibility (act in people's best interest) · Familiarity (build on what people know) ·
Flexibility (adapt to diverse contexts and needs) · Simplicity (be clear and direct —
simplicity is *not* minimalism) · Craft (care about every detail) · Delight (make it human —
never decoration). Use them to resolve trade-offs; details and web translations in
`references/hig/getting-started/design-principles.md`.

## Visual language (short form — details live in the references)

- **Clarity, deference, depth.** Content leads; chrome recedes; hierarchy comes from layering,
  tone and motion — not ornaments. (Expanded in `hig/` as pages are ingested.)
- **Binary backgrounds.** Very light (`#F5F5F7`) or near-black (`#08080A`). No mid-grey canvas.
- **Depth from shadow and light, not borders.** Wide, soft, colourless shadows; at most a 1px
  hairline. In dark mode, an inset highlight replaces the shadow.
- **Groups, not cards.** Related rows share one soft rounded block with hairline separators
  that start after the icon. No box inside a box — the fewer layers, the better.
- **One filled button per screen.** Black pill on light, white pill on dark. Secondary actions
  are plain text or a quiet grey pill.
- **Colour comes from content, not chrome.** Brand/system colour lives in one element (icon
  tile, image, a single CTA). Status colour is dot-sized, never a banner.
- **Typography jumps.** Big semibold headlines with negative tracking against small calm body
  text; almost no in-between sizes. Emphasis by **tone** (grey vs black), not by colour.
- **No uppercase eyebrow labels.** Small + UPPERCASE + wide-tracked section labels read as
  generic/AI. Section titles are sentence case, ~17–22px, semibold, primary colour.
- **Squircles everywhere, scaled.** Icon tiles ≈ 23–25% radius; groups 18–20px; buttons fully
  round.
- **One vertical axis, single column.** Everything aligns to one left edge or is centred.
  On desktop grow the column and the type — don't split into two columns.
- **Circle selection marks**, whole row tappable; iOS-style segmented control with a sliding
  thumb; 52px minimum row height; 44px+ touch targets.

## Pre-ship checklist

- [ ] **COLOR GATE passed** (all steps above; `color.md` checklist fully ✓).
- [ ] **TYPOGRAPHY GATE passed** (exact platform tables used; checker 0 errors; 200% and largest accessibility text verified).
- [ ] **LAYOUT GATE passed** (all steps above; `layout.md` checklist fully ✓; probe PASS at every viewport).
- [ ] **MATERIALS GATE passed** (all steps above; `materials.md` checklist fully ✓; probe PASS in every mode).
- [ ] **FEEDBACK GATE passed** (all steps above; `feedback.md` checklist fully ✓; checker 0 errors; probe PASS in every mode; failure and destructive paths walked).
- [ ] **BUTTONS GATE passed** (all steps above; `buttons.md` checklist fully ✓; checker 0 errors; probe PASS at 375 and 1440 px in light and dark; press state, focus ring, roles and hit regions verified).

- [ ] Exactly one filled button visible per screen/state.
- [ ] No uppercase/wide-tracked eyebrow labels; no count badges shouting next to titles.
- [ ] No bordered card inside a rounded group; inputs inside groups are bare.
- [ ] Background is `#F5F5F7` / `#08080A` (or the host project's equivalent pair).
- [ ] Every light-mode colour has its dark pair; hairlines/shadows adapted for dark.
- [ ] Status colour is a dot or a short tinted word — no coloured banners/boxes.
- [ ] Headlines have negative tracking; body 13–17px; secondary text ≥ 4.5:1 contrast (black/55+ light, white/50+ dark — not /40).
- [ ] Layout works at 375px with no horizontal overflow (grid `min-w-0` trap checked).
- [ ] Fixed-height flows use `100dvh`, not `100vh`; the primary action is always visible.
- [ ] Motion per `hig/foundations/motion.md`: every animation has a job, never the only signal, never blocks input; `prefers-reduced-motion` respected; transitions ≤ 300ms (FN) with Apple-like easing; no edge motion or sustained ~0.2 Hz loops in full-view/hero surfaces.
- [ ] Icon source matches the platform (§ Icon source): SF Symbols (SF Symbols app + system API) only for native Apple apps / the iOS side of cross-platform apps; Lucide · Phosphor · Ionicons everywhere else — never SF Symbols artwork on the web.
- [ ] Icon motion only via the measured kit (`references/symbol-effects.md`), one purposeful effect per moment.
- [ ] Icons: one family + one stroke weight, weight-matched to text, standard metaphors (× close, trash, •••, share, filter) per `hig/foundations/icons.md`; icon-only controls have `aria-label`.
- [ ] RTL-ready per `hig/foundations/right-to-left.md`: logical CSS only (`check-layout.mjs --strict` clean), numbers via `Intl` and never reversed, direction icons mirror, logos/photos/checkmarks never do.
- [ ] Touch targets ≥ 44px; focus is visible for keyboard users.
- [ ] Privacy per `hig/foundations/privacy.md`: permissions asked only from the feature's own trigger with a one-sentence active reason; any pre-permission screen has one "Continue" button (no Allow wording, no Cancel/×); no consent incentives, cookie walls or fake prompts; no secrets in web storage.
- [ ] Rendered and looked at in both themes — screenshot, not assumption.
