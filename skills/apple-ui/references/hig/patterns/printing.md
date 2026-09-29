# Printing
Source: https://developer.apple.com/design/human-interface-guidelines/printing · Section: Patterns · Supported platforms: **iOS, iPadOS, macOS, visionOS** (tvOS and watchOS "Not supported"; both are dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 3 screenshots (dark-mode page, hero → Developer documentation) were compared with the fetched text line by line: everything matches; the three screenshots are contiguous. **The last documentation link was cut off at the bottom of the third screenshot and was read from the fetch only.** The page has no text inside images and no videos. Only the page chrome is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
Printing is **the system's job**: put the Print action where people expect it, offer it only when something can be printed, hand option choices to the system print UI, and on Mac add a **custom print-panel category** or a **page setup dialog** only for options the system doesn't already provide.

## Rules

### Best practices
- **should** **Make printing discoverable** in **standard system locations**.
  - **macOS:** a **Print** item in the **File menu**. If the app has a toolbar, a Print button there is fine, but consider making it **optional**, something people add when they customise the toolbar.
  - **iOS / iPadOS:** a **toolbar button that opens an action sheet** containing the print action.
- **must** **Offer printing only when it is possible.**
  - Nothing on screen to print, or **no printers available**: **dim** the Print item in the macOS File menu; **remove** the Print action from the action sheet on iOS/iPadOS.
  - A **custom print button** is **dimmed or hidden** when printing isn't possible.
- **should** **Present relevant options through the system-provided view.** If it makes sense to offer a **page range**, **multiple copies** or **double-sided** printing, **and the printer supports it**, use the system view to show them.

### Platform considerations
- **iOS, iPadOS, visionOS:** no additional considerations. **tvOS, watchOS:** not supported.
#### macOS
- **should** **Consider a custom category in the print panel** for **app-specific options the system doesn't offer**.
  - The panel has default categories (e.g. **Layout**, **Paper Handling**, **Media & Quality**).
  - Give the custom category a **unique name**, such as the **app's name**, and include options that make printing from this app good. Example: **Keynote** offers presenter notes, slide backgrounds and skipped slides.
- **may** **Present a page setup dialog** if the app supports **document-specific page settings**.
  - A *page setup dialog* holds **rarely changed** settings for **page size, orientation and scaling** of a particular document.
  - **Don't rebuild what the system already does**: no page-orientation option or reverse-order printing, the system implements them.
- **should** **Make interdependencies between options clear.** Example: when double-sided printing is available, an option to print on **transparencies becomes unavailable**.
- **should** **Separate advanced from frequently used options.** Use a **disclosure control** to hide advanced options until needed and **label them "Advanced Options"**.
- **may** **Let people preview the effect of a setting**, e.g. update a **thumbnail** to show what a tone control does.
- **may** **Store modified settings with the document.** At minimum keep print settings **until the document is closed**, in case people print again.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| macOS entry point | File menu › Print (dimmed when impossible); optional toolbar button |
| iOS/iPadOS entry point | toolbar button → action sheet with Print (removed when impossible) |
| Standard options via the system view | page range · copies · double-sided (only if the printer supports them) |
| macOS print-panel default categories | Layout · Paper Handling · Media & Quality |
| Custom category name | unique, e.g. the app name (Keynote example: presenter notes, slide backgrounds, skipped slides) |
| Page setup dialog | page size · orientation · scaling (rarely changed, per document) |
| Do not reimplement | page orientation, reverse-order printing |
| Advanced options | behind a disclosure control, labelled "Advanced Options" |
| Persistence | keep print settings at least until the document closes |
| Developer docs | `UIPrintInteractionController` (UIKit) · `NSDocument` (AppKit) |
| Related HIG pages | File management ✓ · File menu (The menu bar ✓) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a printer glyph (a paper tray on top, a body with a small round button at its top trailing corner, and a sheet with two text lines coming out below), over construction circles.
- **Page chrome (from screenshot):** the platform strip lights iPhone, iPad, Mac and Vision; **TV and Watch are dimmed**, matching "Not supported in tvOS or watchOS". The TOC reads Printing · Best practices · Platform considerations · Resources (**no Change log**).
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 105). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above.

## Web translation
On the web, "printing" = the browser's **Print dialog** (`window.print()`, Ctrl/Cmd+P) plus **print stylesheets** and **PDF export**. The browser owns the printer list and the option UI, so the page's job is **discoverability, availability and a good printed layout**.

| HIG rule | Web implementation |
|---|---|
| Discoverable, standard place | A **Print** item in the document/page **⋯ or File-style menu** (desktop) and in the **share/actions sheet** (mobile); also honour **Ctrl/Cmd+P** (don't block it; if you intercept, still open the print flow) (`file-management.md`, `modality.md` action-sheet pattern). Icon-only: `aria-label="Print"` with the standard printer glyph (`icons.md`). An optional toolbar button is fine (user-customisable toolbars are rare on the web; make it a secondary action). |
| Only when it's possible | Hide or disable Print when there is no printable content (empty state, still loading, error), and **say why** when disabled (Feedback gate: associated reason). The browser can't tell you whether a printer exists (no printer-list API), so don't promise availability; offer **Save as PDF** as the always-possible alternative. |
| System view for options | Don't rebuild copies, page range, duplex, orientation or paper size: the **browser print dialog** provides them. Trigger it with `window.print()` from a user gesture. Use CSS `@page { size: A4 | letter | landscape; margin: … }` only to state the **document's** intended size/orientation, never to replace the dialog. |
| Custom print-panel category (Mac) | For app-specific choices (include notes, include comments, show backgrounds, include hidden slides): a **small pre-print panel** in your UI (an "Print options" popover/sheet) with those toggles, then call `window.print()`; apply the choices with a `print-*` class on `<html>` or a `matchMedia("print")` listener. Name it after the product/feature, and keep it to options the browser dialog doesn't have. |
| Page setup dialog | Rarely changed, per document: put **size, orientation, scale, margins** in the document's settings, and emit them into `@page`; don't duplicate the browser's orientation and reverse-order options. |
| Interdependent options | Disable dependent controls with an explained reason (e.g. "Double-sided isn't available with Transparency"); use `aria-describedby` on the disabled control (Feedback gate). |
| Advanced options | A `<details>`/disclosure labelled **Advanced options** hiding uncommon settings (margins, header/footer, colour mode). |
| Preview the effect | Show a **live print preview** (a paginated, print-styled copy in an `<iframe>` or a `@media print` emulation) or a thumbnail updated by each toggle; `beforeprint`/`afterprint` events let you switch layouts and restore. |
| Store settings with the document | Persist chosen print options per document (server or local storage) until it closes at minimum, restore them the next time. |
| Good printed output (implicit in all of it) | A dedicated `@media print` stylesheet: drop navigation, sticky bars, ads, chat widgets, buttons and backgrounds; black text on white; `break-inside: avoid` for cards/rows, `break-after` for sections, repeat table headers (`thead { display: table-header-group }`); show link URLs (`a[href]::after`) only where useful; convert web fonts/colours safely (`print-color-adjust: exact` only where backgrounds matter); page numbers via `@page` margin boxes where supported. |
| Accessibility | The Print control is keyboard reachable and named; the print stylesheet keeps heading order and alt text; PDF exports are tagged (use a tool that produces tagged PDF) (`accessibility.md`). |
| visionOS Safari | Printing follows the same system print flow; nothing extra. |

Field-note cross-links:
- `hig/patterns/file-management.md` (✓): Print belongs with New/Open/Save in the File-style menu; print settings can be stored with the document like other document state.
- `hig/patterns/modality.md` (✓): on mobile the Print action lives in an action sheet; the pre-print options panel is a short, dismissible, single-task modal.
- `hig/patterns/feedback.md` (CRITICAL): disabled Print needs a reason; long PDF generation shows a named progress state; success needs no toast.
- `hig/foundations/accessibility.md`, `hig/foundations/typography.md`, `hig/foundations/color.md`: the print stylesheet keeps readable size and contrast (print is a monochrome, high-contrast context).
- `hig/patterns/entering-data.md`: option controls follow the same defaults-and-dependencies rules.
- No conflict with a field note.

## Checklist
- [ ] Print is available from a standard place (menu / actions sheet) and via Ctrl/Cmd+P; icon-only buttons are named.
- [ ] Print is disabled or hidden with a stated reason when nothing can be printed; Save as PDF remains available.
- [ ] Copies, page range, duplex, paper and orientation are left to the browser dialog; the app adds only what the dialog can't.
- [ ] App-specific options live in a small, named pre-print panel; advanced ones behind an "Advanced options" disclosure; dependencies are explained.
- [ ] Options are remembered with the document at least until it closes; a live preview shows the effect where useful.
- [ ] A `@media print` stylesheet removes chrome, avoids awkward page breaks, repeats table headers and prints legibly in black and white.

## Related
- Ingested: File management (✓), Modality (✓), Feedback (✓ CRITICAL), Accessibility (✓), Entering data (✓).
- Ingested since: Disclosure controls (✓, the "Advanced Options" pattern). Ingested since: The menu bar (✓ § File menu). Action sheets (✓ `components/presentation/action-sheets.md`). Toolbars ✓.
- Developer docs: `UIPrintInteractionController`, `NSDocument`.
