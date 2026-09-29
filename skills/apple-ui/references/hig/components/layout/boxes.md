# Boxes
Source: https://developer.apple.com/design/human-interface-guidelines/boxes · Section: Components › Layout and organization · Supported platforms: **iOS, iPadOS, macOS, visionOS** ("No additional considerations for visionOS. **Not supported in tvOS or watchOS**"; TV and Watch are dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 3 screenshots (light-mode page, hero → the start of the page footer) were compared with the fetched text line by line: everything matches; the three screenshots are contiguous and cover the whole page. Only the hero drawing and the page chrome are screenshot-only. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
A box **visually groups logically related content** with a border or a background colour and, if needed, a short title. Keep it **small relative to its container**, show deeper grouping with **padding and alignment rather than nested boxes**, and title it with a **brief, sentence-case phrase**.

## Rules

### Framing (intro)
- A box creates a **visually distinct group of logically related information and components**.
- **Default look:** a **visible border or background colour** separates its contents from the rest of the interface. A box **can also include a title**.

### Best practices
- **should** **Keep a box relatively small compared with its containing view.** As a box approaches the size of the **containing window or screen** it gets **worse at showing the separation** of the grouped content and can **crowd other content**.
- **should** **Use padding and alignment for extra grouping inside a box.** A box's border is a **distinct visual element**; **nested boxes** to define subgroups can make the interface feel **busy and constrained**.

### Content
- **should** **Give the box a succinct introductory title when it clarifies the contents.** The box's look tells people the contents are related, but a title can give **more detail about the relationship**, and it helps **VoiceOver users predict** what they'll meet inside the box.
- **should** **Write the title as a brief phrase describing the contents**, in **sentence-style capitalisation**, with **no ending punctuation**, **except in a settings pane, where a colon is appended** to the title.

### Platform considerations
- **visionOS:** no additional considerations. **tvOS, watchOS:** not supported.
#### iOS, iPadOS
- By default boxes use the **secondary and tertiary background colours** (see Color).
#### macOS
- By default the box's **title is displayed above** it.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Separation | visible border **or** background colour |
| Title | optional; brief descriptive phrase; sentence case; no ending punctuation (colon in a settings pane) |
| Size | small relative to the containing window/screen |
| Sub-grouping | padding and alignment, not nested boxes |
| iOS/iPadOS default fill | secondary and tertiary background colours |
| macOS default title | above the box |
| Not supported | tvOS, watchOS |
| Developer docs | SwiftUI `GroupBox` · AppKit `NSBox` |
| Related HIG pages | Layout ✓ · Color ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange gradient card holding a rounded, thin-bordered **box** with a **dashed inner line** marking its padding; inside, **two columns of bars**: short right-aligned bars on the left (labels) and longer left-aligned bars on the right (values), i.e. a **label / value form layout**. **Dimension arrows** show the space between box and card at the top, bottom and both sides, and there is a visible gap between the inner content and the border.
- **Page chrome (from screenshot):** the platform strip lights iPhone, iPad, Mac and Vision with **TV and Watch dimmed**; the TOC reads Boxes · Best practices · Content · Platform considerations · Resources (**no Change log**). The side navigation now shows **Components** with its eight groups (Content, **Layout and organization** expanded, Menus and actions, Navigation and search, Presentation, Selection and input, Status, System experiences) and **Boxes** highlighted first in the Layout group. The last screenshot ends with the top of the developer-site footer.
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 107). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above.

## Web translation
A "box" on the web is a **group container**: a `<fieldset>` around related form controls, a settings **group** (rounded surface with rows), a **card/panel** or a callout region with an optional heading. Nonplo's own rule **"groups, not cards; no box inside a box"** is the same principle (see the cross-link below).

| HIG rule | Web implementation |
|---|---|
| Visually distinct group of related content | One container per **logical group**: a **soft rounded surface** (background tone from the surface scale, `color.md`) **or** a hairline border, **not both heavy**; consistent radius and padding across the product (`layout.md`). Markup: **`<fieldset><legend>`** for related form controls; `<section aria-labelledby>` or `role="group"` + `aria-labelledby` for other groups; use a plain `<div>` for purely visual grouping. |
| Border **or** background | Pick one separator: background tone (secondary/tertiary surface) or a 1 px border. On light UIs prefer the surface tone; on dark UIs a slightly lighter surface. Never a thick border plus a shadow plus a fill. Contrast for a border that carries meaning ≥ 3 : 1 (WCAG 1.4.11); a purely decorative tone need not. |
| iOS default: secondary/tertiary backgrounds | Map to **surface levels**: page = primary; group inside the page = secondary surface; a group inside a group = tertiary (avoid needing a tertiary; see the next row). Tokens per theme (`apple-system-colors.css`, `color.md` grouped-background rules). |
| Keep boxes small relative to the container | Don't wrap an entire page or screen in one box: full-bleed content needs no box. A group should be visibly *smaller than* the region it lives in (leave the page margins and inter-group gaps of the Layout gate); on mobile, groups may go edge-to-edge with inset hairlines (the iOS grouped-list look) rather than a bordered card; avoid a box that fills the viewport width plus height. |
| Padding and alignment over nested boxes | For sub-groups **use spacing (e.g. 24 px between groups vs 8–12 px between siblings; CONV numbers, Apple gives none), alignment, a subheading or a hairline**, not a second bordered container. **No box inside a box**: inside a group, fields and rows are bare (transparent, borderless), the row *is* the field. Depth = at most one box level. |
| Title if it clarifies | A short **heading/legend** above or at the top of the box when the relationship isn't obvious ("Billing address"); it doubles as the accessible name (`<legend>`/`aria-labelledby`) so **screen-reader users hear the group name** on entering it (the VoiceOver rationale). Don't title every box; a title that repeats the only control inside adds noise. |
| Title copy | Brief phrase, **sentence case, no ending period/colon** ("Delivery options"); the colon convention applies only to **settings-style label columns** on desktop forms (label: value), and never to the box heading in web apps unless the whole settings form uses that macOS-style layout (CONV, not a web rule). See `writing.md`. |
| macOS title above | Place the title **above** the box, outside the surface (a small section heading, left-aligned to the box edge), as in the iOS/macOS settings look; keep the heading style consistent across boxes. |
| Hero's label/value form layout | Inside a form box use a **two-column label/value grid** on wide screens (labels right-aligned or left-aligned consistently, controls aligned) that collapses to stacked label-over-control on narrow ones (`layout.md`). |
| Accessibility | Grouped controls (radios, related checkboxes) **must** be in a `<fieldset>` with a `<legend>`; landmarks are for page regions, not every card; don't rely on the border alone for grouping (spacing and headings also convey it); keep focus order matching visual order; zoom to 200 % without clipping the box. |
| Not supported on TV/watch | On TV-style and glanceable surfaces avoid bordered boxes; use spacing, large type and focus states instead (`designing-for-tvos.md`). |

Field-note cross-links:
- `field-notes/principles.md` § 3 "Groups, not cards" **[user decision]**: related rows in **one** soft rounded block with hairlines, **no box inside a box**, bare fields inside groups. This **agrees** with "keep boxes small" and "use padding and alignment, not nested boxes"; the HIG page supplies the rationale (a border is a strong visual element that makes the interface busy and constrained).
- `field-notes/anti-patterns.md`: "each switch/option in its own bordered box" and "two card grammars on one page" are the failure modes this page warns about; keep one surface constant.
- `field-notes/components.md` § Settings list / Group: the concrete recipe for the settings box (radius, hairlines, 52 px rows).
- `hig/foundations/layout.md` (CRITICAL layout gate): margins, grouping, and consistent spacing; `color.md` (CRITICAL): surface levels; `materials.md`: a glass box needs the Materials gate.
- `hig/patterns/settings.md` and `entering-data.md`: settings groups and form groups; `hig/foundations/writing.md`: title copy.
- No conflict with a field note.

## Checklist
- [ ] Each group is one container that separates by **either** a surface tone **or** a hairline border; radius and padding are consistent product-wide.
- [ ] No box sits inside another box; sub-groups use spacing, alignment, subheadings or hairlines; at most one box level.
- [ ] Boxes are clearly smaller than the region they sit in; whole-page content isn't wrapped in a box.
- [ ] Related form controls are in a `<fieldset>` with a `<legend>` (or `role="group"` + a label), so the group name is announced.
- [ ] Titles are optional, brief, sentence-case and have no ending punctuation (colon only in a desktop settings-style label column); titles above the box on desktop.
- [ ] Surface levels come from tokens (primary page, secondary group, tertiary only when unavoidable) in light and dark; a meaningful border has ≥ 3 : 1 contrast.
- [ ] Layout gate passes at 320 px and 200 % zoom; on TV/glance surfaces boxes give way to spacing and focus.

## Related
- Ingested: Layout (✓ CRITICAL), Color (✓ CRITICAL), Materials (✓ CRITICAL), Writing (✓), Settings (✓), Entering data (✓), Accessibility (✓).
- Not yet ingested: none referenced beyond the Components neighbours (Collections ✓, Lists and tables ✓, Disclosure controls ✓).
- Developer docs: `GroupBox`, `NSBox`.
