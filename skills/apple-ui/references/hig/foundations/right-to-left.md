# Right to left
Source: https://developer.apple.com/design/human-interface-guidelines/right-to-left · Section:
Foundations · Supported platforms: all six (iOS, iPadOS, macOS, tvOS, visionOS, watchOS) · Ingested:
2026-09-28 · Screenshots: 13 (dark-mode page, hero → videos + footer). Body text, every image alt
text and every caption were cross-checked line by line against the fetched content — all match.
The page has **no change log** section; the screenshots confirm it. Text that exists only inside
images (Arabic/Hebrew words, numerals, annotation lines) is marked **(from screenshot)**.

## In one line
Mirror what expresses **reading order** (alignment, navigation, progress, ordered sequences,
text-like and motion icons). Keep what expresses **the real world or identity** (digits inside a
number, photos, logos, universal marks, clocks, right-handed tools, true physical directions).
Align each **paragraph by its own language**, and keep **lists** consistently aligned.

## Rules

### Framing (intro)
- People who pick a language for the device, or only for one app or game, expect the interface to
  adapt (see *Localization*).
- System UI frameworks support RTL **by default**: system components flip automatically in an RTL
  context. With system elements and standard layouts, the automatically mirrored interface may need
  **no changes**.
- The guidelines below are for **fine-tuning**: layouts, and localisations that adapt currencies,
  numerals or mathematical symbols used in RTL-language countries.

### Text alignment
- **must — Match text alignment to the interface direction when the system doesn't do it for
  you.**
  - Text that is left-aligned with its content in LTR becomes **right-aligned** in RTL, matching the
    content's mirrored position.
  - (Visual **right-to-left-01**: the same screen in both directions. Text bars and the caption bar
    move to the right edge; the placeholder image in the middle is **not flipped**.)
- **must — Align a paragraph by its own language, not by the current context.**
  - A **paragraph** means **three or more lines** of text.
  - A paragraph aligned against its language is hard to read. For example, right-aligned English
    hides where each line starts.
  - **One- and two-line** text blocks keep following the **context's** reading direction.
  - **Paragraphs** follow **their language**.
  - (Visual **right-to-left-02**: ✓ in an RTL context, the Arabic paragraph is right-aligned and the
    English paragraph left-aligned; ✗ both right-aligned.)
- **must — Use one alignment for every text item in a list.**
  - Reverse the alignment of **all** items, including items written in another script.
  - (Visual **right-to-left-03**: ✓ all rows right-aligned; ✗ one row, a different script, left-aligned
    among right-aligned rows.)

### Numbers and characters
- RTL languages differ in number systems:
  - **Hebrew** uses **Western Arabic** numerals (0-9).
  - **Arabic** may use **Western or Eastern Arabic** numerals (٠-٩).
  - The choice varies **by country, by region, and even by area within a country or region**.
- **should — Apps about maths or other number-centric topics** should decide deliberately how to
  display numbers in each supported locale.
  - Other apps can generally rely on the **system's number representation**.
  - (Visual **right-to-left-04**: "123" in Western Arabic numerals next to "١٢٣" in Eastern Arabic
    numerals **(from screenshot)**.)
- **must — Never reverse the digits inside a specific number.**
  - The digits of a particular number always keep the same order, whatever the language or
    surrounding text.
  - Examples: a value such as 541, a phone number, a credit-card number.
  - (Visuals **right-to-left-05/06**: an "order number" label with its number in Latin (123456),
    Hebrew, Arabic with Western numerals, and Arabic with Eastern numerals. The label moves to the
    right in RTL, but the digits always read 1-2-3-4-5. The Hebrew label "מספר הזמנה", the Arabic
    label "رقم الطلب" and the Eastern digits "١٢٣٤٥" are **(from screenshot)**.)
- **must — Reverse the order of numerals that show progress or a counting direction, but never
  mirror the numeral glyphs themselves.**
  - Progress bars, sliders and rating controls often carry numerals. When the control flips, the
    numeral **sequence** reverses too.
  - Any numeral sequence that communicates an **order** also reverses.
  - (Visuals **right-to-left-07/08**: five rating stars with 3½ filled.
    - Latin: 1→5 left to right, fill from the left.
    - Arabic (Eastern), Hebrew and Arabic (Western): 1 at the **right**, fill from the right.
    - The half star is filled on its **right** half in RTL **(from screenshot)**. The digits are
      unmirrored glyphs.)

### Controls
- **must — Flip controls that show progress from one value to another.**
  - Forward progress is read in the same direction as the language, so sliders and progress
    indicators flip in RTL.
  - Also **swap the end glyphs/images** that show the minimum and maximum values.
  - (Visual **right-to-left-09**: a volume slider. LTR has a quiet speaker at the left, a loud
    speaker at the right, and the fill runs from the left to the thumb. RTL puts the **loud speaker at
    the left** and the quiet one at the right; both speaker glyphs face left; the fill runs from the
    **right edge** to the thumb **(from screenshot)**.)
- **must — Flip controls for navigating or accessing items in a fixed order.**
  - In RTL the **back button points right**, so the flow of screens follows reading order.
  - **Next/previous** buttons for an ordered list flip too.
- **must — Keep the direction of a control that refers to a real direction or an on-screen area.**
  - A control meaning "to the right" always points right, in any context.
- **may — Visually balance adjacent Latin and RTL scripts.**
  - Arabic and Hebrew have **no capital letters**. Next to **all-caps** Latin in buttons, labels or
    titles, they look too small.
  - Increasing the RTL text by **about 2 points** often balances it.
  - (Visual **right-to-left-10**: three blue capsule buttons, an all-caps Latin label and Download in
    Arabic "تحميل" and Hebrew "הורדה" **(from screenshot)**, with baseline and cap-line guides.
    - At the same size, the Arabic and Hebrew glyphs don't reach the cap line and look small.
    - Slightly enlarged, they fill the band; the Arabic even rises above it.)

### Images
- **should — Don't flip photographs, illustrations or general artwork.**
  - Flipping often **changes the meaning**.
  - Flipping a **copyrighted** image may even be a violation.
  - If an image's content is tied to reading direction, **make a new version** instead of flipping.
  - (Visual **right-to-left-11**: ✓ a normal globe; ✗ a mirrored globe with Africa on the far right
    and Australia on the far left.)
- **must — Reverse image positions when their order means something.**
  - Chronological, alphabetical or favourite ordering reverses in RTL so the order keeps its
    meaning.
  - (Visual **right-to-left-12**: a panel with a title bar, a selected blue photo tile and a row of
    heart, circle, star, square, triangle. In RTL the title, the selected tile and the row all start
    from the **right**. The glyphs are not mirrored, and the highlighted star stays in the middle.)

### Interface icons
- **SF Symbols** provide RTL variants plus **localised** symbols for Arabic, Hebrew and other
  languages.
  - Custom symbols can declare their **directionality** (*Creating custom symbol images for your
    app*).
  - (Visual **right-to-left-13**: LTR vs RTL variants of five directional symbols: a bulleted list
    (bullets move to the right), a book (spine side changes), a text field with a pencil (dots
    right-aligned, pencil tip at the left), a window title bar (dots move right) and a battery (cap on
    the left).)
- **must — Flip icons that represent text or reading direction.**
  - Left-aligned "text bars" in an LTR icon become right-aligned in RTL.
  - (Visual **right-to-left-14**: a document icon with lines aligned to the left vs to the right.)
- **should — Consider a localised version of an icon that shows text.**
  - Some icons use letters or words to convey a script concept, such as font size or a signature.
    If a custom icon must show real text, localise it.
  - SF Symbols ships Latin, Hebrew and Arabic versions (among others) of the **signature**,
    **rich-text** and **I-beam pointer** symbols.
  - (Visual **right-to-left-15**:
    - Latin: × signature starting on the left, "A" in the rich-text badge, "A" left of the I-beam.
    - Hebrew: the signature runs from the right, **Alef** in the badge, Alef right of the I-beam.
    - Arabic: **Ain** in the badge, **Dad** right of the I-beam.)
  - If an icon uses letters for a concept **unrelated to reading or writing**, design an
    alternative **without text**.
- **must — Flip icons that show forward or backward motion.**
  - Motion in the reading direction reads as forward; the opposite reads as backward. Icons of
    objects moving forward/backward flip in RTL to keep their meaning.
  - Example: a speaker's sound waves go "forward": they come from the left in LTR, so the icon flips
    to emit them from the right in RTL.
  - (Visual **right-to-left-16**: speaker with waves to the right vs to the left.)
- **must — Never flip logos or universal signs and marks.**
  - A flipped logo **confuses people** and can have **legal consequences**. Show logos in their
    original form, even when they contain text.
  - Universal marks such as the **checkmark** must look the same everywhere.
  - (Visual **right-to-left-17**: the Apple TV logo; a checkmark.)
- **should — Generally don't flip icons of real-world objects**, unless the object is used to show
  direction.
  - Clocks work the same everywhere, so a clock icon stays identical.
  - Icons of tools slanted for right-handed use (a pencil) might seem direction-related, but most
    people are right-handed. Flipping them is unnecessary and possibly confusing.
  - (Visual **right-to-left-18**: clock, pencil, game controller: never flipped.)
- **should — Before mirroring a complex custom icon, consider each component and the overall
  balance.**
  - Some components must follow the **visual design language** regardless of localisation. Examples:
    a badge, a slash, a magnifying glass.
  - SF Symbols uses the **same backslash** for prohibition/negation in both LTR and RTL versions.
  - (Visual **right-to-left-19**: speaker.slash. The speaker flips; the slash stays a **backslash**.)
- **should — Flip a component, or its position, when that keeps the localised icon meaningful.**
  - A **badge that represents real UI** must flip if the UI flips.
  - A badge that **modifies meaning** is flipped only if both meaning and visual balance survive.
  - (Visual **right-to-left-20**: a cart with a ⊕ badge.
    - ✓ LTR: cart facing right, badge top-right.
    - ✗ RTL: cart facing left with the badge still top-right, which unbalances it.
    - ✓ RTL: cart facing left, badge top-left.)
- **should — Keep the orientation of a component that implies handedness (a tool), while flipping
  the base image if needed.**
  - (Visual **right-to-left-21**: text-in-mail + magnifying glass. The envelope/dot and the text lines
    mirror; the magnifier keeps its slant.)

## Specs & values
| Item | Value |
|---|---|
| "Paragraph" threshold | **≥ 3 lines** → align by its language; 1–2 lines → align by context |
| RTL text next to all-caps Latin | increase RTL font size by **about 2 pt** |
| Hebrew numerals | Western Arabic (0-9) |
| Arabic numerals | Western (0-9) **or** Eastern Arabic (٠-٩), varying by country/region/area |
| SF Symbols with localised versions (named) | signature, rich text, I-beam pointer (Latin, Hebrew, Arabic, others) |
| Prohibition slash | always a backslash, in both LTR and RTL |
| APIs / docs | *Localization*, *Preparing views for localization* (SwiftUI), *Creating custom symbol images for your app* |

### Flip / don't flip (quick reference)
| Flip in RTL | Don't flip |
|---|---|
| Text alignment of UI text, lists | Digits inside a number (phone, card, order no.) |
| Back / next / previous, navigation flow | Controls meaning a real direction ("to the right") |
| Sliders, progress bars, ratings (+ end glyphs, numeral order) | Numeral glyphs themselves |
| Ordered image sequences, galleries | Photos, illustrations, artwork (make a new version if needed) |
| Text-representing icons, forward/backward-motion icons | Logos, checkmarks, universal marks |
| Badges that represent real UI (and badges when balance needs it) | Clocks, right-handed tools, game controllers, magnifier slant, prohibition backslash |

## Platform considerations
- **No additional considerations** for iOS, iPadOS, macOS, tvOS, visionOS or watchOS.

## Resources listed
- Related: Layout (✓ CRITICAL), Inclusion (✓), SF Symbols (✓).
- Developer documentation: *Localization*; *Preparing views for localization* (SwiftUI).
- Videos: *Enhance your app's multilingual experience* (WWDC25 222); *Design for Arabic* (WWDC22
  10034).
- In-text links: Localization; SF Symbols; Creating custom symbol images for your app.

## Visual notes (from screenshots)
- **Page chrome (from screenshot):**
  - "Supported platforms" shows all six glyphs.
  - The TOC reads: Right to left · Text alignment · Numbers and characters · Controls · Images ·
    Interface icons · Platform considerations · Resources. There's no Change log entry.
- **Hero:** a yellow grid card with a window containing a **right-aligned** bulleted list; the
  bullets sit on the right.
- **Annotation guides:** Apple's diagrams mark the alignment edge with a thin **blue** vertical
  line (screens, lists) or a **pink/red** line (paragraph edges, text baseline and cap line). In ✗
  examples, the odd item's guide sits on the other side.
- **Numerals:** large specimen glyphs. In the number row, only the **label** moves from left to
  right; the number block stays 1-2-3-4-5.
- **Stars:** white stars; the partially filled 4th star is split vertically, and the filled half
  follows reading direction.
- **Download buttons:** saturated blue capsules with white labels. They are Apple's illustration
  art; they're not a colour token (the COLOR GATE still applies).
- **Icons:** all SF-Symbols-style, bold, white on black (dark mode). Captions sit centred under
  pairs.
- **Videos (from screenshot):**
  - A presenter thumbnail with a WWDC25 badge.
  - "Design for Arabic": a collage with the word "Arabic" next to "عربي", Arabic-numeral clock tiles,
    two Apple Watch faces with Arabic numerals, and localised signature/search glyphs.

## Web translation
The web has first-class RTL support. The job is to use **logical** CSS everywhere, set the
direction once, isolate mixed-direction runs, and make deliberate flip / don't-flip choices for
icons and images. Static check: `node tools/check-layout.mjs --strict <files>` flags physical
sides/alignment (`physical-side`, `physical-align`) and unflipped back/forward chevrons and arrows
(`directional-icon`).

| HIG rule | Web implementation |
|---|---|
| System components flip automatically | Set `<html lang="ar" dir="rtl">` (or `he`) from the locale. Native controls (`<input type=range>`, `<progress>`, `<select>`, scrollbars, `<dialog>`) and flex/grid order mirror by themselves. Don't hand-reverse with `flex-row-reverse` / `order` hacks. |
| Match alignment to direction | Only **logical** properties: `text-align: start/end`, `margin/padding-inline-*`, `inset-inline-*`, `border-inline-*`, `border-start-*-radius`. Tailwind: `text-start/end`, `ms/me/ps/pe`, `start-*/end-*`, `border-s/e`, `rounded-s/e/ss/se/es/ee`, `gap-*` (not `space-x-*`). Physical `left/right` only for things that are physically placed (safe-area insets, a "dock to the right" setting). |
| Paragraph (≥ 3 lines) by its language | User-generated or mixed-language long text (messages, reviews, descriptions, AI answers) gets `dir="auto"` (or `unicode-bidi: plaintext`) so an English paragraph inside an Arabic UI aligns left, and vice versa. |
| 1–2 lines follow context | Short labels, titles and single-line cells inherit the page direction. Wrap foreign-script runs (names, product titles, URLs, emails) in `<bdi>`, or use `unicode-bidi: isolate`, so the order is right without changing alignment. Don't put `dir="auto"` on short labels. |
| One alignment per list | List rows, table rows, menu items and chat-list previews use the container's direction (`text-start`); embed foreign text with `<bdi>`, **not** a per-row `dir="auto"` that would left-align one row (right-to-left-03 ✗). |
| Number systems per locale | Format with `Intl.NumberFormat(locale)` and `Intl.DateTimeFormat(locale)`. They pick Western or Eastern Arabic digits by locale; force either with `-u-nu-latn` / `-u-nu-arab` when the product decides. Never hand-build digit strings; never convert digits with string replacement. Number-centric products (finance, maths, charts) choose per locale deliberately. |
| Never reverse digits in a number | Phone, card, IBAN, order and OTP numbers render inside `<bdi dir="ltr">` or `direction: ltr; unicode-bidi: isolate` so separators and "+" stay in place. Inputs for them: `dir="ltr"` + `inputmode`, while the label stays RTL. |
| Reverse progress/count order, not glyphs | Custom sliders, steppers, carousels' dots, step indicators ("1 → 2 → 3") and rating stars lay out from **inline-start**. Half-filled stars fill from the start side (`:dir(rtl)` clip). Never `transform: scaleX(-1)` a container that contains digits or text. |
| Flip progress controls + end glyphs | Min/max icons sit at `inline-start` / `inline-end`, and directional ones (speaker waves) use RTL variants. For keyboard, ARIA sliders must move the thumb in the arrow key's **visual** direction; test with `dir="rtl"`. |
| Flip navigation | Back/next/previous chevrons and arrows: `rtl:-scale-x-100` (Tailwind) or `:dir(rtl) .icon-dir { transform: scaleX(-1) }`. Swipe-to-go-back / carousel swipe directions mirror too. Breadcrumb separators flip. |
| Keep real directions | Arrows that mean an actual side ("dock right", a map compass, "swipe right" in a physical-gesture tutorial, text-alignment toolbar buttons) are **not** flipped. Mark them with a `// layout-ok: physical direction` comment for the checker. |
| Balance Latin caps vs Arabic/Hebrew | Avoid all-caps Latin in the first place (field notes forbid uppercase labels). Where caps remain (brand words, codes), give Arabic/Hebrew runs ~2 px more: `:lang(ar), :lang(he) { font-size: calc(1em + 2px); }` scoped to that component, and check line height. Use a font with proper Arabic/Hebrew coverage (system-ui / SF Arabic / Noto Naskh / Noto Sans Hebrew). |
| Don't flip images | Never mirror `<img>`, video or illustrations with CSS in RTL. If the art depends on direction (a hand pointing to text, a reading character), ship a separate RTL asset (`:dir(rtl)` swaps `src`/background). |
| Reverse meaningful image order | Galleries, timelines and "top 5" rows follow flex/grid direction automatically in RTL. Check that JS-positioned carousels (translateX math) also start from inline-start. |
| Icons: text-like and motion | Mirror icons that stand for text or reading order (list, text lines, indent) and icons that show forward/backward motion (speaker waves, reply/forward arrows) in RTL. Many icon sets (Lucide, Heroicons) have **no** RTL variants, so use the `rtl:` transform for simple mirrors. |
| Icons with letters | Swap to a localised variant ("Aa" → "أ"/"א") or use a letter-free glyph. Never flip a glyph that contains letters: mirrored letters are wrong in every script. |
| Never flip logos / universal marks | Brand logos, checkmarks and other universal marks, clocks, pencils and other right-handed tools, gamepads, magnifier slants and prohibition backslashes stay as-is. |
| Complex icons | Don't blanket-mirror a slashed icon: CSS `scaleX(-1)` turns "\\" into "/". Use a proper RTL variant that keeps the backslash. Badges: move to the mirrored corner with the base, if it keeps balance (right-to-left-20). Tool components (magnifier) keep their slant. |
| Testing | Run every screen with `dir="rtl"` + an Arabic locale (real strings or pseudo-localised with ~30–40 % expansion). Compare screenshots with `right-to-left-01 … 21`. Run `check-layout.mjs --strict` on changed files. |

Field-note cross-links:
- `hig/foundations/layout.md` (CRITICAL) already requires **top-leading** importance and **logical**
  spacing; this page supplies the flip/don't-flip rules behind it. `check-layout.mjs --strict` now
  also flags physical alignment and unflipped directional icons.
- `field-notes/components.md`: the ROW and choice-row recipes use `text-left`, and the consent list
  places its circle tick "on the left". Both are fine for the LTR product they came from, but they
  are **not RTL-ready**: use `text-start` and "leading". Noted in the field note.
- `field-notes/principles.md` / `anti-patterns.md`, **no uppercase eyebrow labels**: this is
  **confirmed** from another angle. All-caps Latin is exactly what makes Arabic/Hebrew look too small
  next to it.
- `hig/foundations/icons.md` (flip direction-implying icons, localise letters) and
  `hig/foundations/inclusion.md` (`dir="rtl"`, locale formatting) are **confirmed and refined** here.

## Checklist
- [ ] Root `lang` + `dir` set from the locale. No physical left/right in layout code (`check-layout.mjs --strict` clean, or each exception marked `layout-ok: physical direction`).
- [ ] UI text, lists and table cells use `text-start/end`. Lists never mix alignments.
- [ ] Long user/mixed-language paragraphs use `dir="auto"`. Short labels inherit direction, with `<bdi>` around foreign runs.
- [ ] Numbers are formatted with `Intl` for the locale. Phone/card/order numbers are isolated LTR and never reversed.
- [ ] Sliders, progress, ratings, steppers and carousels run from inline-start. End glyphs swap, and numeral **order** (not glyphs) reverses.
- [ ] Back/next/previous and forward-motion icons mirror. Real-direction controls don't.
- [ ] Photos, illustrations, logos, checkmarks, clocks, tools and prohibition slashes are **not** mirrored. Direction-dependent art has its own RTL version.
- [ ] Icons containing letters are localised or letter-free. Badges move with the mirrored base when that keeps balance.
- [ ] Arabic/Hebrew next to all-caps Latin is balanced (+~2 px), or the caps are removed.
- [ ] Checked in an RTL locale with real text, and compared with `right-to-left-01 … 21`.

## Related (ingestion status)
Layout (✓ CRITICAL), Inclusion (✓), Icons (✓), Images (✓), SF Symbols (✓), Typography (✓ CRITICAL), Writing (✓), Sliders (✓ `components/selection-and-input/sliders.md`),
Progress indicators, Rating indicators — not yet ingested (except ✓).
