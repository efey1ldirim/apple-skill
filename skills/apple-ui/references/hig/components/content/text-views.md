# Text views
Source: https://developer.apple.com/design/human-interface-guidelines/text-views · Section: Components › Content · Supported platforms: all six on the platform strip ("No additional considerations for macOS, visionOS, or watchOS"; specific guidance for iOS/iPadOS and tvOS) · Ingested: 2026-09-29 · Apple last updated: 2023-06-05 (updated guidance to reflect changes in watchOS 10; the change log has that single entry, and the row is visible in the last screenshot and matches the fetch). One DocC fetch, read in full. 3 screenshots (light-mode page, hero → footer) were compared with the fetched text line by line: everything matches; the three screenshots are contiguous and cover the whole page. Only the hero passage and the page chrome are screenshot-only. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
Use a text view for text that is **long, editable or specially formatted**; it scrolls, aligns to the leading edge and uses the system label colour by default. For a little text use a **label** (or a **text field** if editable). Keep it **legible at any text size**, make **useful values selectable and copyable**, and show the **right keyboard** on touch devices.

## Rules

### Framing (intro)
- A text view displays **multiline, styled text**, which can **optionally be editable**.
- Text views can be **any height** and **scroll** when content exceeds the view.
- **Defaults:** content is **aligned to the leading edge** and uses the **system label colour**.
- **iOS, iPadOS, visionOS:** if the view is editable, a **keyboard appears** when people select it.

### Best practices
- **should** **Use a text view for text that's long, editable, or in a special format.** Text views differ from **text fields** and **labels** in offering the **most options** for displaying specialised text and receiving text input. For **a small amount** of text a **label** is simpler, or, if it must be editable, a **text field**.
- **must** **Keep text legible.** Multiple fonts, colours and alignments are allowed creatively, but **readability must be maintained**. Good practice: adopt **Dynamic Type** so text still looks good when people change text size; **test with accessibility options on**, such as **bold text** (see Accessibility and Typography).
- **should** **Make useful text selectable.** If a text view holds useful information such as an **error message, a serial number or an IP address**, consider letting people **select and copy** it for pasting elsewhere.

### Platform considerations
- **macOS, visionOS, watchOS:** no additional considerations.
#### iOS, iPadOS
- **should** **Show the appropriate keyboard type.** Several keyboard types exist, each suited to a kind of input. To **streamline data entry**, the keyboard shown while editing a text view must **match the content type** (see *Virtual keyboards*).
#### tvOS
- A text view can **display** text on tvOS. Because **text input on tvOS is minimal by design**, **text fields** are used for editable text there.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Purpose | multiline, styled text; optionally editable |
| Height | any; scrolls when content is longer than the view |
| Default alignment / colour | leading edge; system label colour |
| Choose against | label (short static text) · text field (short editable text) · text view (long, editable or specially formatted) |
| Legibility | Dynamic Type; test with bold text and other accessibility options |
| Selectable content | error messages, serial numbers, IP addresses, other useful values |
| Keyboard (iOS/iPadOS) | appears on selecting an editable view; type must match the content |
| tvOS | text view displays text only; editable text uses text fields |
| Developer docs | SwiftUI `Text` · UIKit `UITextView` · AppKit `NSTextView` |
| Related HIG pages | Labels ✓ · Text fields (not yet ingested) · Combo boxes ✓ · Accessibility ✓ · Typography ✓ · Virtual keyboards (not yet ingested) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange gradient card holding a pale, sharp-cornered **text panel** filled with a large red sans-serif paragraph, framed by **dimension arrows** along its top and trailing edge (the measured-text motif). The paragraph itself **(from screenshot)** is a passage about what a human interface is: the **sum of all communication between the computer and the user**, covering both what it shows and what it accepts. It is an illustration; it makes no rule. It is not quoted here.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Text views · Best practices · Platform considerations · Resources · Change log. The side navigation highlights **Text views** under **Components › Content**, between **Image views** and **Web views**. The last screenshot ends with the change-log row and the top of the page footer.
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 107). Nothing is measured.
- **Text that is not in the fetch:** the hero paragraph and the chrome above.

## Web translation
A "text view" on the web is **long-form text** (an article body, a description, a log, a code or terminal panel) or a **multi-line editable field** (`<textarea>`, a rich-text editor built on `contenteditable`). A label is a short `<label>`/`<p>`; a text field is `<input type="text">`.

| HIG rule | Web implementation |
|---|---|
| Choose by length and editability | **Short static** → `<p>`/`<span>`/`<label>`; **short editable** → `<input>`; **long, multi-line, editable** → **`<textarea>`** (default, robust, native undo, IME, spellcheck); **rich formatting** → a maintained editor (ProseMirror/Lexical/Tiptap) over `contenteditable`, **only when formatting is actually needed** (`contenteditable` has many accessibility and IME pitfalls). Read-only formatted text is plain semantic HTML (headings, lists, `<pre>`), not a disabled textarea. |
| Any height, scrolls | Let it grow with content up to a **max height** then scroll (`max-height` + `overflow: auto`); a `<textarea>` may auto-grow to fit its content, with a min-height of a few lines, `resize: vertical` (or none in tight UI), and never trap the page's own scroll; keep a visible focus ring on the scroll container and `tabindex="0"` if a read-only region scrolls (so keyboard users can scroll it). Engineering trap: measure autogrow height only when the box has content (the placeholder counts in `scrollHeight`; `field-notes/engineering-gotchas.md`). |
| Leading alignment, label colour | `text-align: start` (never hard-coded `left`, so RTL flips, `right-to-left.md`); text colour from the theme's **primary label token** (not pure black/white; `color.md`), `CanvasText`-style system colours in forced-colours mode. Line length ~45–75 characters for prose (CONV; `typography.md`). |
| Keyboard appears when editable | On touch, focusing a `<textarea>` opens the keyboard: set **`inputmode`**, **`enterkeyhint`** (`enter` for multi-line), **`autocapitalize`**, **`autocorrect`/`spellcheck`** and **`lang`** to match the content (`entering-data.md`); text inputs at **≥ 16 px** on iOS Safari to avoid page zoom on focus (`field-notes/engineering-gotchas.md`); keep the caret visible above the keyboard (`visualViewport`). |
| Show the right keyboard type | Notes and messages: default with sentence capitalisation and spellcheck; **code/IDs/URLs**: `autocapitalize="off"`, `spellcheck="false"`, `autocorrect="off"`, `inputmode="text"`/`url`; **numbers/OTP**: `inputmode="numeric"`, `autocomplete="one-time-code"` in single-line fields. |
| Keep text legible | Use **relative units** (`rem`/`em`, `clamp()`), no fixed pixel heights that clip text, `line-height` unitless ~1.4–1.6 for body (CONV); **reflow at 200 % zoom and 320 px** without horizontal scroll (WCAG 1.4.4, 1.4.10); honour user text-size settings (`text-size-adjust: 100%`), `prefers-contrast` and forced colours; **test with heavy font-weight/"bold text"**, custom user stylesheets and larger default font sizes (the web has no bold-text media query, so test by overriding weights). Contrast per the Color gate; sizes per the Typography gate. |
| Make useful text selectable | Never `user-select: none` on **error messages, order/serial/tracking numbers, IPs, keys, codes, addresses**; wrap such values in a selectable element with a **Copy** button (`navigator.clipboard.writeText`, then quiet status "Copied", `feedback.md`); a triple-click selects the block; long tokens use `overflow-wrap: anywhere` so they don't break the layout; put copyable values in `<code>`/`<output>` and expose them to assistive tech. |
| tvOS: minimal editing | For TV-style or kiosk web UIs, don't ask for long text with a remote/on-screen keyboard: display the text, and use short text fields with suggestions/dictation or a phone companion for input (`entering-data.md`, `designing-for-tvos.md`). |
| watchOS/glance surfaces | Show short text only; use larger text and defer long content to a bigger surface (`charts.md`, `workouts.md`). |
| Editing behaviour | Preserve **native undo/redo** in the field (`undo-and-redo.md`); save drafts (autosave, `beforeunload` only for genuinely unsaved data); count limits shown near the field, not by silently truncating; paste as plain text unless rich text is supported; validation inline and on blur/submit, not per keystroke (`entering-data.md`, `feedback.md`). |
| Accessibility | A real `<label>` (or `aria-labelledby`) for every editable text area; help text and errors via `aria-describedby`; `role="textbox" aria-multiline="true"` only on custom editors; keep the caret and selection accessible; don't hide long text behind hover; ensure sufficient contrast for the caret and selection highlights. |

Field-note cross-links:
- `field-notes/components.md` § Fields: the textarea recipe (`resize-none`, `leading-[1.5]`, `block min-h-[52px] px-4 py-3`) is **compatible**; add the max-height/scroll and keyboard attributes above.
- `field-notes/engineering-gotchas.md`: 16 px input rule on iOS and the autogrow/placeholder `scrollHeight` trap apply directly.
- `hig/foundations/typography.md` (CRITICAL) and `accessibility.md`: Dynamic Type equivalents, bold-text testing, reflow.
- `hig/patterns/entering-data.md`: keyboard type, `inputmode`, validation, drafts; `undo-and-redo.md`: native undo in text areas.
- `hig/foundations/writing.md`: error text people copy should be plain, exact and self-contained.
- `hig/foundations/right-to-left.md`: `text-align: start`, `dir="auto"` for user-entered text.
- `hig/components/content/charts.md` and `image-views.md`: other Content components; text over images follows `image-views.md`.
- No conflict with a field note.

## Checklist
- [ ] Long, multi-line or formatted text uses the right element (`<textarea>` for plain editing, a maintained editor for rich text, semantic HTML for read-only); short text uses a label or a text field.
- [ ] The box grows to a sensible max height then scrolls; scrollable read-only regions are keyboard-focusable.
- [ ] Text is start-aligned and uses the theme's label colour; reflows at 200 % zoom and 320 px; sizes are relative units; still legible with heavier weights and larger user font sizes.
- [ ] Editable areas set `inputmode`, `enterkeyhint`, `autocapitalize`, `spellcheck`, `lang` for the content; inputs are ≥ 16 px on iOS; the caret stays visible above the keyboard.
- [ ] Error messages, IDs, serials, IPs and codes are selectable and have a Copy button with a quiet confirmation; no `user-select: none` on them.
- [ ] Native undo/redo, IME, paste-as-plain-text and draft saving work in the editor.
- [ ] Every editable text area has a real label, described help/error text and a visible focus ring.
- [ ] On TV-style/glance surfaces long text is display-only and input is minimal.

## Related
- Ingested: Typography (✓ CRITICAL), Accessibility (✓), Entering data (✓), Undo and redo (✓), Writing (✓), Right to left (✓), Feedback (✓ CRITICAL), Image views (✓), Charts (✓).
- Ingested since: Labels (✓ `components/layout/labels.md`). Combo boxes (✓ `components/selection-and-input/combo-boxes.md`). Not yet ingested: **Text fields**, **Virtual keyboards**.
- Developer docs: see Specs & values.
