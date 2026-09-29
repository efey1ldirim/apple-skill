# Lockups
Source: https://developer.apple.com/design/human-interface-guidelines/lockups · Section: Components › Layout and organization · Supported platforms: **tvOS only** ("Not supported in iOS, iPadOS, macOS, visionOS, or watchOS"; on the platform strip only the TV icon is lit **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 7 screenshots (light-mode page, hero → the start of the page footer) were compared with the fetched text and image alt text line by line: everything matches; the seven screenshots are contiguous and cover the whole page. The page has no Videos section. Text that exists only inside the pictures (hero lines, placeholder labels) is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
A lockup is **one focusable unit made of a content view, a header and a footer** that **grow together on focus**. Leave **enough space between lockups** so a focused, enlarged one never overlaps or displaces its neighbours, keep **sizes consistent within a row or group**, and choose the type that fits: **card, caption button, monogram or poster**. tvOS only.

## Rules

### Framing (intro)
- Lockups **combine several separate views into a single interactive unit**.
- Each lockup = **content view + header + footer**: the **header sits above** the main content, the **footer below**. **All three expand and contract together** when the lockup gets **focus**.
- Four lockup types, by the app's needs: **cards, caption buttons, monograms, posters**.

### Best practices
- **should** **Allow adequate space between lockups.** A focused lockup **expands**, so leave **enough room between lockups** to avoid **overlapping or displacing** others (see Layout).
- **should** **Use consistent lockup sizes within a row or group.** A group of buttons or a row of content images looks better when **all widths and heights match**.
- Developer guidance: `TVLockupView`, `TVLockupHeaderFooterView` (TVUIKit).

### Cards
- A **card** combines a **header, footer and content view** to present **ratings and reviews** for media items. Developer: `TVCardView`.

### Caption buttons
- A **caption button** can have a **title and a subtitle beneath it** and contains **either an image or text**.
- **must** **Make caption buttons tilt with the direction of the swipe when focused.** Aligned **vertically** they tilt **up and down**; **horizontally**, **left and right**; in a **grid**, **both vertically and horizontally**.
- Developer: `TVCaptionButtonView`.

### Monograms
- A **monogram** identifies **people**, usually the **cast and crew** of a media item: a **circular picture** plus the **person's name**. If **no image** is available, the person's **initials** appear instead.
- **should** **Prefer images over initials**: a picture of a person creates a **more intimate connection** than text.
- Developer: `TVMonogramContentView`.

### Posters
- A **poster** = an **image** plus an **optional title and subtitle**, **hidden until the poster is focused**. Posters can be **any size**, but the size must be **appropriate for the content** (see Image views).
- Developer: `TVPosterView`.

### Platform considerations
- **tvOS:** the only supported platform. **iOS, iPadOS, macOS, visionOS, watchOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Structure | content view + header (above) + footer (below); one focusable unit |
| Focus behaviour | all three views expand together when the lockup is focused |
| Types | card (ratings/reviews) · caption button (image or text + title/subtitle beneath) · monogram (circular picture + name; initials fallback) · poster (image; title/subtitle only on focus) |
| Spacing | enough room that a focused (enlarged) lockup doesn't overlap or displace neighbours |
| Sizing | identical widths and heights within a row or group; posters sized to their content |
| Caption-button tilt | follows swipe direction: vertical rows tilt up/down, horizontal rows left/right, grids both ways |
| Monogram image | prefer a photo; initials only as a fallback |
| Not supported | iOS, iPadOS, macOS, visionOS, watchOS |
| Developer docs | TVUIKit `TVLockupView`, `TVLockupHeaderFooterView`, `TVCardView`, `TVCaptionButtonView`, `TVMonogramContentView`, `TVPosterView` |
| Related HIG pages | Designing for tvOS ✓ · Layout ✓ · Image views ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card showing a **person glyph in a circle** inside a dashed **content box**, above two lines of text: **"Line 1 (Headline)"** and **"Line 2 (Footnote)"** **(from screenshot)**, each in its own dashed strip (the header and footer areas), with dimension arrows around the whole lockup. It illustrates content view + text lines as one unit.
- **Focus spacing illustration:** three rows of five equally spaced grey tiles on a white ground; in **each row the middle tile is focused and slightly larger** and lifted with a soft shadow, and **pink vertical bands** mark the gaps between columns. The enlarged tile grows **into the gutter but does not touch its neighbours**: the gap is bigger than the growth.
- **Cards:** an Apple TV screen mockup with a row of grey placeholder cards under a "Title"; the focused card is white with a shadow and shows **"4/5" and five stars** (the fifth half-filled), then several grey placeholder lines: a rating at the top, text below **(from screenshot)**.
- **Caption buttons:** a TV screen with a row of four small tiles labelled **"Button"** (a dashed-square glyph and a caption under each); the **leftmost is focused**: white, slightly larger, lifted.
- **Monograms:** a row of **circular person placeholders**; the leftmost is white and larger, and shows a **black person glyph** and the caption **"Title"** with **"Subtitle"** beneath it (small text) **(from screenshot)**; the others are grey with placeholder bars.
- **Posters:** a row of portrait tiles near the bottom of the TV screen with a **"Header"** label above the row and **"Label"** under each tile; the focused one is **white, larger and lifted**, and its label sits **below it** (the label shifts down when focused) **(from screenshot)**.
- **Page chrome (from screenshot):** the platform strip lights **only the TV** icon; the TOC reads Lockups · Best practices · Cards · Caption buttons · Monograms · Posters · Platform considerations · Resources (**no Change log**). The side navigation highlights **Lockups** in the Layout group after Lists and tables; the Menus and actions group shows Activity views, Buttons, Context menus, Dock menus, Edit menus, Home Screen quick actions… (its children, open in the screenshots).
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 111). Nothing is measured.
- **Text that is not in the fetch:** the hero lines, "4/5", "Button", "Title/Subtitle", "Header/Label", and the chrome above.

## Web translation
Apple supports lockups only on tvOS, but the pattern is everywhere on **10-foot and remote/keyboard-driven web UIs** (smart-TV web apps, kiosks, set-top and games launchers, media libraries) and, without the tilt, in **any media shelf** (streaming rows, cast lists, poster grids). Pair with `designing-for-tvos.md` (focus system) and `collections.md`.

| HIG rule | Web implementation |
|---|---|
| One focusable unit: content + header + footer | Make the **whole lockup one control** (a single `<a>`/`<button>` or `role="link"` wrapper) containing the image, title and subtitle; **one tab stop / one focus target**, one accessible name ("Movie title, 4 of 5 stars"). Header and footer text live **inside** the same element so they scale, highlight and activate together. |
| Grow together on focus | On `:focus-visible` (and `:hover` for pointer) apply **one transform on the wrapper**: `transform: scale(1.05–1.1)` + lifted shadow + `z-index` (CONV; Apple gives no numbers; `designing-for-tvos.md` uses ~1.05–1.1), so image, header and footer scale as one; transition 150–250 ms ease-out; under `prefers-reduced-motion` keep a static ring/lift without scale motion. Never rely on the scale alone: also add a visible focus ring (contrast ≥ 3 : 1). |
| Space so growth never overlaps | `transform` does **not** change layout, so **the gap must exceed the growth**: with item width *w* and scale *s*, each side grows by *w(s−1)/2*; set `gap ≥ w(s−1)/2 + 8–12 px` (CONV), leave the same headroom above/below rows and inside the scroll container (`padding` so focused items aren't clipped by `overflow: hidden`), and use `z-index` so the focused one sits above neighbours. Test first/last items at container edges. |
| Consistent sizes in a row/group | Fixed `aspect-ratio` and equal width per row (`grid-auto-columns`, `flex: 0 0 var(--card-w)`); posters use the ratio that suits the content (2:3 portrait movies/books, 16:9 episodes, 1:1 albums), but **one ratio per row**. Rows with the same purpose share the same size (`layout.md`). |
| Cards (ratings and reviews) | Card = rating + text block: **stars as an image with an accessible name** (`role="img" aria-label="4 out of 5 stars"`, or visually-hidden text), the numeric value visible ("4/5"), review snippet truncated with a "Read more" affordance, the entire card focusable. Don't use colour alone for filled vs empty stars (shape/fill). |
| Caption buttons (image or text + title/subtitle) | A `<button>` whose visible face is an icon or text, with **caption text beneath** (title + optional subtitle) inside the same element; the caption is part of the accessible name (`aria-labelledby`). For D-pad UIs, **parallax tilt on focus** (2–6°, CONV) following the movement direction is optional flourish: horizontal rows tilt left/right, vertical up/down, grids both (CSS `transform: perspective() rotateX() rotateY()` set from the last arrow key); disabled under `prefers-reduced-motion` and never the only focus cue. |
| Monograms (people) | A **circular avatar** (`border-radius: 50%`, `object-fit: cover`) plus the **name** (and role as subtitle). **Prefer a real photo; fall back to initials** (up to two letters, a neutral tinted disc, sufficient contrast) when no image loads or exists; `alt=""` on a decorative avatar next to the visible name, otherwise `alt="{Name}"`; never generate identical initials colours that imply meaning. (Apple's reason: images feel more personal than text.) |
| Posters (image; text only on focus) | Title/subtitle **hidden until focus** suits a remote UI where focus is always present. On the web, don't hide essential text where **hover/focus isn't guaranteed** (touch, screen readers): keep the title in the DOM (visually hidden until focus if desired, `aria-label` always present) and show it on `:focus-visible`, `:hover` **and** on touch by default; the label may shift below the poster when focused (as in the picture) without moving neighbours. Posters sized to content; `<img alt>` describes the artwork or is empty when the title is present. |
| Row navigation and focus behaviour | Rows are horizontal scrollers (`scroll-snap-type: x proximity`, `scroll-padding` so the focused item is fully visible); **←/→** move focus within a row, **↑/↓** between rows (roving `tabindex` + spatial navigation), **Enter/OK** activates, **Back/Esc** returns to the previous focus; **scroll the focused lockup into view** with room for its growth; remember focus per row when returning (`designing-for-tvos.md`). |
| 10-foot legibility | Larger type and generous targets on TV (see the tvOS note); headline + footnote lines follow the type scale (`typography.md`); no text smaller than TV-legible sizes; strong contrast for text over posters (scrim, `image-views.md`). |
| Not on other platforms | On touch/desktop web don't force the scale-on-focus grammar everywhere: use normal card/collection patterns (`collections.md`), with hover and `:focus-visible` states, and no persistent enlarged item that moves layout. |
| Accessibility | One accessible name per lockup, focus ring, keyboard operability, no info only on hover, respect reduced motion, alt/`aria-label` for stars and avatars, sufficient contrast for the focused (white/lifted) state in dark UIs. |

Field-note cross-links:
- `hig/getting-started/designing-for-tvos.md` (✓): the focus system (gently highlight and enlarge, focus replaces the cursor) is what lockups implement; scale ~1.05–1.1 and visible focus ring rules apply.
- `hig/components/layout/collections.md` (✓): row/grid layout, padding so focus/hover effects aren't clipped, and "never reflow under the user" apply directly; lockups are collection items with focus growth.
- `hig/components/content/image-views.md` (✓): poster images, text over images (scrims), `object-fit`.
- `hig/foundations/layout.md` (CRITICAL): gaps and safe areas around focused items; `motion.md`: focus tilt and scale are reduced-motion safe.
- `hig/foundations/accessibility.md`, `writing.md`, `hig/patterns/live-viewing-apps.md`, `playing-video.md`: media rows and shelves.
- `field-notes/principles.md` § 3 "Groups, not cards": **not a conflict**: lockups are focusable media items, not nested card groups; keep one item grammar per row.
- No conflict with a field note.

## Checklist
- [ ] Each lockup (image + header + footer/caption) is one focusable element with one accessible name and one activation.
- [ ] Focus/hover applies a single transform (scale ~1.05–1.1, lift, ring) to the whole lockup; it is reduced-motion safe and never the only cue.
- [ ] The gap between lockups is larger than the focus growth, and rows have headroom so nothing clips or overlaps at the edges.
- [ ] Widths, heights and aspect ratios are identical within a row or group.
- [ ] Cards expose the rating as text/`aria-label` (not colour or stars alone); caption buttons keep their caption in the accessible name.
- [ ] Monograms use photos first and fall back to initials with adequate contrast; alt text follows the visible name.
- [ ] Poster titles and subtitles stay available for touch and screen readers; they may be revealed on focus for remote UIs.
- [ ] Rows scroll with snap, arrow keys move focus in two dimensions, the focused item is scrolled fully into view, and focus is remembered per row.
- [ ] Optional parallax tilt follows the movement direction and is disabled under reduced motion.
- [ ] On touch/desktop, standard collection patterns are used instead of persistent scale-on-focus layouts.

## Related
- Ingested: Designing for tvOS (✓), Collections (✓), Image views (✓), Layout (✓ CRITICAL), Motion (✓), Accessibility (✓), Live-viewing apps (✓), Playing video (✓), Typography (✓ CRITICAL).
- Not yet ingested: Focus and selection, Remotes (Inputs), Top Shelf (Technologies).
- Developer docs: see Specs & values.
