# Rating indicators
Source: https://developer.apple.com/design/human-interface-guidelines/rating-indicators · Section: Components › Status · Supported platforms: **macOS only** ("No additional considerations for macOS. Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS"; only the Mac icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **September 23, 2022** (new page; the only change-log row). One DocC fetch, read in full. 2 screenshots (hero → the change-log table header) were compared with the fetched text and image alt text line by line: everything matches. **Read from the fetch only (not in screenshots):** the change-log row itself (the screenshots end at the table header), the image alt text and the dark variant of the hero; the page has **no videos**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker, but the star colours and state meet the **Color gate** (state not by colour alone). The page has **no numbers** (the hero shows three of five stars). It is very short (2 best practices).

## In one line
A rating indicator is a **row of horizontally arranged symbols (stars by default)** that communicates a **ranking level**. It shows **only complete symbols** (the value is **rounded**), symbols keep a **constant distance** and **don't stretch or shrink to fit the component's width**. **Make it easy to change rankings** (inline, without a separate editing screen) and, if you replace the star, **make sure the custom symbol's purpose is clear**. macOS only (`NSLevelIndicator` rating style).

## Rules

### Framing (intro)
- A rating indicator uses **a series of horizontally arranged graphical symbols, by default stars**, to communicate a **ranking level**.
- It **doesn't display partial symbols**: it **rounds the value** to show **complete symbols only**.
- **Within a rating indicator the symbols are always the same distance apart** and **don't expand or shrink to fit the component's width**.

### Best practices
- **should** **Make it easy to change rankings.** When presenting **a list of ranked items**, let people **adjust the rank of individual items inline** without navigating to **a separate editing screen**.
- **should** **If you replace the star with a custom symbol, make sure its purpose is clear.** The **star is a very recognisable ranking symbol**, and people **may not associate other symbols with a rating scale**.

### Platform considerations
- **macOS:** no additional considerations. **iOS, iPadOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values

| Item | Value |
|---|---|
| Anatomy | a horizontal row of equally spaced symbols (default: stars) |
| Partial symbols | **never**: the value is rounded to whole symbols |
| Spacing / size | constant symbol distance; symbols **don't stretch or shrink** to fill the width |
| Editing | inline, in the list itself, no separate editing screen |
| Custom symbols | allowed if the purpose is clear (stars are the recognisable default) |
| Sizes, spacing values, hit regions | **none given on this page** |
| Platforms | macOS only |
| Developer docs | AppKit `NSLevelIndicator.Style.rating` |
| Video | none |
| Apple's Related list | Ratings and reviews ✓ |
| Change log | September 23, 2022: new page |

## Visual notes (from screenshots)
- **Hero (screenshot):** a red-to-orange card with **five stars in a row**: the **first three dark red (filled)** and the **last two lighter red (unfilled)**, i.e. **three of five**; **vertical arrows** above and below and **horizontal arrows** at the left and right mark the component's footprint and margins around the stars (fixed symbol size, generous space) **(from screenshot)**. The alt text: *a rating indicator denoting a ranking of three out of five stars*.
- **Page chrome (from screenshot):** TOC Rating indicators · Best practices · Platform considerations · Resources · Change log; platform strip lights only the Mac; side navigation shows the **Status** group with **Rating indicators** ringed (the last page of the group), the **System experiences** and **Inputs** groups below; the last screenshot ends at the change-log table header.
- **No catalog images:** the page has only the hero (`components-rating-indicators-intro`); the fetch script reports **0 comparisons**; the catalog is unchanged (170, existing IDs unchanged).

## Web translation
The web version is a **star (or symbol) rating**: an **input** when people set the rating and a **read-only display** when showing one. **Apple's page is about the input/display of a ranking**; asking for App Store reviews is a different page (`ratings-and-reviews.md`).

| HIG rule | Web implementation |
|---|---|
| A row of horizontally arranged symbols (stars) for a ranking level | **Editable:** `role="radiogroup"` (aria-label "Rating") of **N `role="radio"` stars** (or visually hidden `<input type="radio">` + `<label>` per star), **arrow keys** move and select, **Home/End** = first/last, one tab stop; **read-only:** `role="img"` with `aria-label="Rated 3 out of 5"` (stars `aria-hidden`), or a `<meter>` (`gauges.md`) if the number is a measurement. Icons: **Lucide/Phosphor/Ionicons `star`**, never SF Symbols artwork. |
| No partial symbols; the value is rounded | **Show whole symbols only**: round for display (`Math.round`) and **print the exact value as text next to it** ("4.3 · 128 ratings") where an average matters; if a product needs half-stars, that is **its own convention** (CONV) and must still show **discrete steps** (full/half) and never a continuous partial fill of a single star. |
| Constant symbol distance; don't stretch to fill the width | A **fixed symbol size** (e.g. `1.25rem`) with a **constant gap** (`gap: 0.25rem`), the component **`width: max-content`** (`inline-flex`), **not** `flex: 1` or `justify-content: space-between`; scale the whole component with `font-size`/`em`, and keep it **left-aligned at inline-start** (mirrors in RTL: `right-to-left.md`). |
| State not by colour alone | **Filled vs empty** stars differ by **fill and outline** (solid vs outline shape), with **≥ 3:1** between filled colour and the surface and between filled and empty (Color gate); give the accessible **text value**; forced-colors mode keeps the shapes. |
| Make it easy to change rankings inline | In lists/tables, put the **editable stars in the row** (click/tap a star to set, **click the same star again to clear** where that fits, CONV), **no navigation to an edit page**, **save immediately** with an **Undo** (`undo-and-redo.md`) and **optimistic update**; hover preview highlights up to the pointer (`:hover ~`) and reverts on leave; **each star ≥ 24 px (44 px touch)** hit region (Buttons GATE: the row is an attached group, exempt from the 8 px gap rule). |
| Custom symbol (replace the star) | Hearts, flames or dots only when **the scale is obvious** (label "Difficulty", legend, tooltip on each) and **consistent everywhere** in the product; **stars stay the default** for quality/ranking; provide the **text label per step** ("1 – Poor … 5 – Excellent") as `aria-label`/tooltip. |
| macOS-only | On touch layouts use **larger stars (≥ 44 px)** or a **numeric stepper/segmented 1–5** (`segmented-controls.md`, `steppers.md`); nothing extra from Apple for other platforms. |
| Accessibility | Name and current value announced ("Rating, 3 of 5 stars"), **keyboard operable**, visible focus ring (≥ 3:1), **no hover-only** feedback, `prefers-reduced-motion` for star fill animations; **200 % text** must not wrap stars onto a second row (Layout gate). |
| Not the review prompt | **Don't ask for app-store ratings with this control**: timing/wording of requests is `ratings-and-reviews.md`; on the web a "rate this" widget follows this page. |

Field-note cross-links:
- `hig/patterns/ratings-and-reviews.md` (✓): Apple's Related page (asking for ratings and reviews, timing); this page is the **control**; `hig/components/status/gauges.md` (✓): the level indicator's **capacity** and **relevance** styles sit next to the rating style; `progress-indicators.md` (✓): task progress is a different component.
- `hig/components/selection-and-input/segmented-controls.md` (✓) and `steppers.md` (✓): touch-friendly alternatives; `hig/patterns/undo-and-redo.md` (✓): inline edits with Undo; `hig/components/menus/buttons.md` (✓ CRITICAL) and **Buttons GATE**: hit regions; `hig/foundations/color.md` (✓ CRITICAL) and **Color gate**: filled vs empty contrast; `hig/foundations/right-to-left.md` (✓): direction.
- `field-notes/*`: no rating recipe; **no conflict**.
- Not yet ingested: none linked from this page beyond the above.

## Checklist
- [ ] Ratings show **whole symbols only**, with the **exact value as text** where it matters.
- [ ] Symbols keep a **fixed size and gap** and **never stretch** to the container's width.
- [ ] **Filled vs empty** differ by shape and pass **≥ 3:1**; forced-colors keeps the difference.
- [ ] Editable ratings are a **`radiogroup`** (arrow keys, Home/End) with a name, value and visible focus; read-only ones are **`role="img"`** with a text value.
- [ ] Ranked lists let people **change ranks inline**, immediately, with **Undo**; hit regions **≥ 24 px (44 px touch)**.
- [ ] A **custom symbol** is used only when the scale is unmistakable and labelled; stars remain the default.
- [ ] Layout mirrors in **RTL** and stars never wrap at **200 % text**.

## Related
- Ingested: Ratings and reviews (✓), Gauges (✓), Progress indicators (✓), Segmented controls (✓), Steppers (✓), Undo and redo (✓), Buttons (✓ CRITICAL), Color (✓ CRITICAL), Right to left (✓).
- Not yet ingested: none from this page's own links.
- Developer docs: AppKit `NSLevelIndicator.Style.rating`.
