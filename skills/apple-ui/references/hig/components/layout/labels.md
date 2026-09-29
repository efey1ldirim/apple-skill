# Labels
Source: https://developer.apple.com/design/human-interface-guidelines/labels · Section: Components › Layout and organization · Supported platforms: all six on the platform strip ("No additional considerations for iOS, iPadOS, tvOS, or visionOS"; specific notes for macOS and watchOS) · Ingested: 2026-09-29 · Apple last updated: 2023-06-05 (updated guidance to reflect changes in watchOS 10; the change log has that single entry, visible in the last screenshot and matching the fetch). One DocC fetch, read in full. 5 screenshots (light-mode page, hero → the start of the page footer) were compared with the fetched text and image alt text line by line: everything matches; the five screenshots are contiguous and cover the whole page. Text that exists only inside pictures (hero captions, watchOS examples) is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers; the label-colour table is names only.

## In one line
A label is **static, uneditable text people can read and often copy**: in buttons, menu items, list rows and views. Use it for **a little text that isn't edited**, prefer **system fonts** (Dynamic Type) and the **four system label colours** for hierarchy, and make **useful text selectable**. On watchOS use the **system date and timer components**.

## Rules

### Framing (intro)
- Labels display text **throughout the interface**, in **buttons, menu items and views**, helping people understand the **current context** and **what they can do next**.
- *Label* means **uneditable text** in various places:
  - **Within a button**: says what the button does (Edit, Cancel, Send).
  - **Within many lists**: describes each item, often with a **symbol or image**.
  - **Within a view**: gives **extra context**, introducing a control or describing a common action or task.
- **Developer note:** SwiftUI has two uneditable-text components, **`Label`** and **`Text`**.
- Component pages (action buttons, menus, lists and tables) add their own text recommendations.

### Best practices
- **should** **Use a label for a small amount of text people don't need to edit.** For a small amount of **editable** text use a **text field**; for a **large** amount, optionally editable, use a **text view**.
- **should** **Prefer system fonts.** A label can show plain or styled text and supports **Dynamic Type** (where available) by default; if you change the style or use **custom fonts**, **keep the text legible**.
- **should** **Use the system label colours to show relative importance.** The system defines **four** label colours with different visual weight (see Color):

  | Level | Example usage (Apple) | UIKit (iOS, iPadOS, tvOS, visionOS) | AppKit (macOS) |
  |---|---|---|---|
  | Label | **Primary information** | `label` | `labelColor` |
  | Secondary label | **A subheading or supplemental text** | `secondaryLabel` | `secondaryLabelColor` |
  | Tertiary label | **Text describing an unavailable item or behaviour** | `tertiaryLabel` | `tertiaryLabelColor` |
  | Quaternary label | **Watermark text** | `quaternaryLabel` | `quaternaryLabelColor` |

- **should** **Make useful label text selectable**: an **error message, a location, an IP address**; let people select and copy it.

### Platform considerations
- **iOS, iPadOS, tvOS, visionOS:** no additional considerations.
#### macOS
- *Developer note:* to show uneditable text in a label, use `isEditable` on **`NSTextField`** (a label is a non-editable text field).
#### watchOS
- **Date and time text components** show the **current date**, the **current time**, or **both**; configurable for **formats, calendars and time zones**. A **countdown timer text component** shows a **precise countdown or count-up**, configurable for count-value formats.
- With the **system-provided** date and timer components, watchOS **automatically adjusts the presentation to fit the available space** and **updates the content without further input** from your app.
- **Consider using them in complications** (see Complications; developer: `Text`).

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Purpose | uneditable text in buttons, menu items, lists and views |
| Use vs field/view | small non-editable → label · small editable → text field · large (maybe editable) → text view |
| Font | system font, Dynamic Type by default; custom fonts only if legible |
| Colour levels | 4: label (primary) · secondary (subheading, supplemental) · tertiary (unavailable item or behaviour) · quaternary (watermark) |
| Selection | make useful text selectable/copyable (error message, location, IP address) |
| macOS | `NSTextField` with `isEditable` off |
| watchOS | date/time text and timer text components; auto-fit and auto-update; use in complications |
| Developer docs | SwiftUI `Label`, `Text` · UIKit `UILabel` · AppKit `NSTextField` |
| Related HIG pages | Text fields (not yet ingested) · Text views ✓ · Lists and tables ✓ · Buttons ✓ CRITICAL · Menus ✓ · Color ✓ · Complications (not yet ingested) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a large bold word **"Label"** framed by a **dashed box with two square handles** at its sides, dimension arrows around it, and two monospaced captions beneath it: **"System Font - Body (Emphasized)"** and **"Primary Text Color"** **(from screenshot)**. It shows a label's two style choices: **type style** and **colour level**.
- **Developer notes:** two grey rounded cards with a dark outline, a bold "Developer note" title (neutral, not a warning colour).
- **Colour table:** a plain four-row table (System colour · Example usage · iOS, iPadOS, tvOS, visionOS · macOS) with the API names as links; no colour swatches are shown.
- **watchOS examples (catalog `labels-01`, captions "Date and time labels" and "Timer label"):** two small black rounded rectangles like watch faces. Left: **"2/11/23"** at the **leading** edge and **"2:14PM"** at the **trailing** edge in a small white sans face on one line. Right: a **large centred "00:06.34"** timer in a light-weight white numeral face **(from screenshot)**.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Labels · Best practices · Platform considerations · Resources · Change log. The side navigation highlights **Labels** in the Layout group after Disclosure controls. The last screenshot ends with the change-log row and the top of the page footer.
- The fetch script found **1 comparison**: `labels-01` (the two watchOS examples). Catalog total is now **110**; existing ids unchanged. No ✗/✓ pairs. Nothing is measured.
- **Text that is not in the fetch:** the hero captions, the strings inside the two watch pictures, and the chrome above.

## Web translation
"Label" on the web covers **static text everywhere**: button text, menu items, list-row text, headings and helper text, plus the **form `<label>`** (a related but distinct use: it names a control). Apple's guidance is mostly about **which text element to use, hierarchy through colour, legibility and copyability**.

| HIG rule | Web implementation |
|---|---|
| Label vs field vs text view | **Static short text** → plain semantic elements (`<span>`, `<p>`, `<h*>`, `<li>`, `<button>` text); **short editable** → `<input>`; **long or editable multi-line** → `<textarea>` (`text-views.md`). Don't use a disabled input to show static text; use text. |
| Label in a button/menu/list | Button and menu-item text says **what happens** (verb + object: "Send message"); list-row text names the item, with an optional **icon or thumbnail** (`icons.md`, `image-views.md`); a view's label introduces a control or task ("Billing address"). Full guidance in `writing.md`. |
| System fonts and Dynamic Type | Default to the **system UI font stack** (`font-family: system-ui, -apple-system, "Segoe UI", Roboto, …`); **rem-based sizes**, responsive to user text scaling and 200 % zoom (`typography.md` gate). If you use a custom/web font, verify weight, size and contrast and provide a system fallback with `size-adjust`; keep labels legible when scaled. |
| Four label colours = four text tokens | Define **one token per level**: `--text` (primary), `--text-secondary` (subheadings, captions, supplemental), `--text-tertiary` (text describing an **unavailable item or behaviour**), `--text-quaternary` (**watermarks only**). Per theme (light/dark/increased contrast; `color.md`). Use **levels for hierarchy, not decoration**; don't invent extra greys. Nonplo's accessible ink scale (`field-notes/tokens.md` § Ink) maps onto the four roles: primary = `#000`/`#1D1D1F`; **secondary** = `black/60` sub-lines and `black/55` row descriptions and hints; **tertiary** = disabled/unavailable text (`black/30`, exempt from contrast) plus the ≥ 18 pt `black/45` large secondary; **quaternary** = chevrons and decorative marks (`black/25`). The mapping is ours, Apple gives no values. |
| Contrast per level | Primary and secondary must pass **4.5 : 1** for body text (3 : 1 for large text), in both themes and in increased-contrast mode (Color gate). **Tertiary** text describes something **unavailable**: it may look weak, but if it carries needed information keep ≥ 4.5 : 1 and **explain why** it is unavailable in words (Feedback gate "disabled needs a reason"). **Quaternary is decorative** (watermarks, ghost text): **never** put required information in it. |
| Selectable useful text | Errors, locations, IP/IDs, codes, tracking numbers: leave `user-select: text` (never `none`), add a **Copy** button where copying is likely, and don't block the context menu; wrap in `<code>`/`<output>` as appropriate. Don't make button labels selectable (they're controls). Same rule as `text-views.md`. |
| macOS "label is a non-editable text field" | Web analogue: a **read-only field** (`<input readonly>` or `<output>`) is right only when it's a **copyable value inside a form** ("Your API key"); use `readonly`, not `disabled` (disabled fields skip focus and copy). |
| Form `<label>` | Every control has a **visible `<label for>`** (or wrapping label); helper text via `aria-describedby`; placeholder ≠ label; sentence case, no trailing colon in web forms (colon only in desktop settings-style layouts; `boxes.md`). |
| watchOS date/time and timer text | Use **`<time datetime="…">`** with `Intl.DateTimeFormat` for localised date and time (format, calendar, `timeZone` options); layouts adapt to space (short/long/relative formats, e.g. `dateStyle: "short"` on narrow widths); **timers** compute from a **start/target timestamp** (not by counting ticks), show **tabular numerals** (`font-variant-numeric: tabular-nums`) so digits don't jitter, are `role="timer"` with `aria-live="off"` and announce only milestones (`workouts.md`). Update automatically without user input; stop when hidden (`visibilitychange`). |
| Date left, time right | The watch example puts date at the leading edge and time at the trailing edge of one row; on the web use `justify-content: space-between` and logical properties so it mirrors in RTL. |
| Complications → widgets/tiles | The "date and timer in complications" idea maps to glanceable **widgets/tiles/status badges**: show the live date, time or countdown with system-formatted text, not screenshots or images of text. |
| Localisation and truncation | Labels grow in other languages (30–50 % longer, CONV): let them wrap or truncate with a tooltip for the full text; never fix widths that clip; keep an icon-only fallback with `aria-label` where space is critical (`right-to-left.md`, `writing.md`). |
| Accessibility | Semantics carry meaning (headings for headings, `<label>` for controls); don't rely on the colour level alone to convey state (unavailable needs a reason); text remains readable at 200 % zoom and high-contrast/forced colours (use system colour keywords there). |

Field-note cross-links:
- `hig/foundations/typography.md` (CRITICAL) and `tokens/apple-typography.json`: the hero's **"Body (Emphasized)"** is a text style; label sizes come from the type scale, not ad-hoc pixels.
- `hig/foundations/color.md` (CRITICAL) and `tokens/apple-system-colors.css`: the four label levels are the **foreground dynamic colours**; contrast rules and increased-contrast variants apply.
- `hig/components/content/text-views.md` (✓): selectable/copyable text and label/field/view choice is the same decision; the two pages are two halves.
- `hig/foundations/writing.md`: button/menu/list labels (verb-led, Title Case per its table, no jargon).
- `hig/patterns/feedback.md` (CRITICAL): tertiary "unavailable" text needs a reason; `disabled` without explanation is flagged by the checker.
- `hig/patterns/workouts.md`, `charts.md`: numerals, timers and accessible values.
- `hig/foundations/right-to-left.md`: leading/trailing alignment via logical properties.
- `field-notes/tokens.md` § Ink (text) — tones by opacity: **agrees** with the four-level idea (primary, secondary, disabled, decorative) and adds the accessibility corrections (`/40`–`/45` fail 4.5 : 1 for small text); where the two differ, the field note's contrast numbers win for small text. `components.md`: 52 px rows are consistent.
- No conflict with a field note.

## Checklist
- [ ] Static short text uses semantic elements, not disabled inputs; editable text uses fields/text areas.
- [ ] Button, menu and list labels are verb-led/nouns that name the action or item; icons never replace the text without an `aria-label`.
- [ ] Sizes come from the type scale in rem and scale with text zoom; custom fonts have a legible system fallback.
- [ ] Exactly four text-colour roles (primary, secondary, tertiary, quaternary) are defined per theme and used for hierarchy; nothing required is in quaternary; tertiary text carries a reason when it means "unavailable".
- [ ] Body text passes 4.5 : 1 (large 3 : 1) in light, dark and increased-contrast modes.
- [ ] Useful values (errors, locations, IPs, IDs) are selectable and have a Copy button; read-only fields use `readonly`, not `disabled`.
- [ ] Every form control has a visible `<label>`; helper text via `aria-describedby`.
- [ ] Dates and times use `<time>` with `Intl`; timers derive from timestamps, use tabular numerals, and announce only milestones; layouts adapt to space and mirror in RTL.
- [ ] Labels wrap or truncate with a full-text tooltip in longer languages; no fixed clipping widths.

## Related
- Ingested: Text views (✓), Typography (✓ CRITICAL), Color (✓ CRITICAL), Writing (✓), Feedback (✓ CRITICAL), Workouts (✓), Charts (✓), Right to left (✓), Icons (✓), Image views (✓), Boxes (✓).
- Not yet ingested: **Text fields**, **Complications**. Ingested since: Menus (✓). Ingested since: Buttons (✓ CRITICAL). Ingested since: Lists and tables ✓.
- Developer docs: see Specs & values.
