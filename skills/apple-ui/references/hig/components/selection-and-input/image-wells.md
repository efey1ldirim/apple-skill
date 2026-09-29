# Image wells
Source: https://developer.apple.com/design/human-interface-guidelines/image-wells · Section: Components › Selection and input · Supported platforms: **macOS only** ("Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS"; only the Mac icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC reads Image wells · Best practices · Platform considerations · Resources **(from screenshot)**). One DocC fetch, read in full. 2 screenshots (hero → developer documentation, followed by the Apple site footer, ignored) were compared with the fetched text line by line: everything matches; the screenshots cover the whole page, so only the image alt text was read from the fetch alone. **No videos, no change log.** Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **no numbers** and is very short (2 best practices).

## In one line
An image well is an **editable image view**: once selected, people can **copy and paste its image or delete it**, and can **drag a new image in without selecting it first**. **If an image is required, show the default image again when the content is cleared**, and **if it supports copy and paste, keep the standard Copy and Paste menu items (and shortcuts) available**. Mac only.

## Rules

### Framing (intro)
- After **selecting** an image well, people can **copy and paste its image or delete it**.
- People can also **drag a new image into an image well without selecting it first**.

### Best practices
- **should** **Revert to a default image when necessary.** If the image well **requires an image**, **display the default image again** when people **clear its content**.
- **should** **If it supports copy and paste, make the standard Copy and Paste menu items available.** People generally expect to **choose these menu items or use the standard keyboard shortcuts** to interact with an image well (see the **Edit menu** in *The menu bar*).
- For related guidance, see *Image views* (an image well is the editable variant; a clickable image is an image button).

### Platform considerations
- **iOS, iPadOS, tvOS, visionOS, watchOS:** not supported.
- **macOS:** the only platform; no extra guidance.

## Specs & values

| Item | Value |
|---|---|
| What it is | editable image view (macOS) |
| Interactions | select; copy, paste, delete; drag a new image in (no selection needed) |
| Required image | show the **default image** again after clearing |
| Menu items | standard **Edit ▸ Copy / Paste** (and shortcuts) when copy/paste is supported |
| Sizes, spacing, hit regions | **none given on this page** |
| Platforms | macOS only |
| Developer docs | AppKit `NSImageView` |
| Video / Change log | none |
| Apple's Related list | Image views ✓ |

## Visual notes (from screenshots)
- **Hero (screenshot):** a red-to-orange gradient card with, centred, a **rounded-square frame outlined in a pale pink double border** holding a **lighter pink picture placeholder** with the **generic image glyph** (a rounded rectangle with a sun dot and two mountains) in red. It reads as an empty image well with its placeholder picture; no text and no numbers **(from screenshot)**. The alt text: *a stylised representation of an image well*.
- **Page chrome (from screenshot):** TOC Image wells · Best practices · Platform considerations · Resources (**no Change log**); platform strip lights only the Mac; the side navigation shows **Selection and input** open with **Image wells** ringed, then Pickers, Segmented controls, Sliders, Steppers, Text fields, Toggles, Virtual keyboards, with the **Status** and **System experiences** groups below; the Apple developer-site footer follows the page (ignored).
- **No catalog images:** only the hero (`components-image-well-intro`); the fetch script reports **0 comparisons**; the catalog is unchanged (151, existing IDs unchanged).

## Web translation
The web equivalent is an **upload/replace image control** (avatar, cover image, logo picker); `image-views.md` already sketches it, this page adds the behaviour rules.

| HIG rule | Web implementation |
|---|---|
| Editable image view | A **preview box** showing the current image, focusable as one control (`role="button"` with `aria-label="Change profile image"`, or a real `<button>` wrapping the preview) plus a hidden `<input type="file" accept="image/*">`; visible focus ring; the box has a **non-colour boundary (≥ 3:1)** so an empty well is findable (Color gate). |
| Select, then copy / paste / delete | When the well is **focused**: **Ctrl/Cmd+C** copies the image (`navigator.clipboard.write([new ClipboardItem({"image/png": blob})])`, feature-check), **Ctrl/Cmd+V** pastes (`paste` event: `clipboardData.files[0]`), **Delete/Backspace** clears; keep a **visible Remove button** for touch and discoverability, and offer **Undo** after clearing (`undo-and-redo.md`). |
| Drag a new image in without selecting first | The whole box is a **drop target** (`dragenter/dragover/drop`, `preventDefault`, read `dataTransfer.files`); show a **drop-highlight state** (ring + "Drop to replace" text, not colour alone); accept only the image types you support and say so; **click/tap and Enter/Space open the file picker** as the non-drag path (`drag-and-drop.md`). |
| Revert to a default image when cleared | If the image is **required** (avatar, product photo): after Remove, **show the default/placeholder image** (initials avatar, generic glyph) rather than an empty hole, and keep the button label "Change" not "Add"; if optional, show the **empty-state prompt** with one action ("Choose Image"). |
| Standard Copy / Paste menu items and shortcuts | In an app with a **menu bar / Edit menu** (desktop web apps, `the-menu-bar.md`, `edit-menus.md`) keep **Edit ▸ Copy, Paste, Delete** enabled/disabled to match the focused well; the **context menu** on the well offers Copy, Paste, Delete (`context-menus.md`); never block the browser's default clipboard shortcuts. |
| Validation | Check **type and size**, show errors **inline next to the well** (`role="alert"`, "That file isn't an image. Choose a PNG or JPEG."; no blame, one fix: Feedback gate); show a **progress state** for uploads (`progress-indicators` not yet ingested; use `aria-busy` and a determinate bar when size is known: CONV). |
| Accessibility | The well announces **its role and state** ("Profile image, button. Image set."); alt text for the preview is the person-entered description or a neutral "Profile image"; **the drag path is never the only path**; `prefers-reduced-motion` for drop animations. |
| Not on iOS/iPadOS/visionOS | On touch use a **"Choose Photo" button → system photo picker / camera** (`<input type="file" accept="image/*" capture>` where appropriate) rather than an on-screen drop zone; paste/drag are secondary (`image-views.md`, `pickers` not yet ingested). |

Field-note cross-links:
- `hig/components/content/image-views.md` (✓): image well vs image view vs image button (its "Image wells not yet ingested" mention now points here).
- `hig/patterns/drag-and-drop.md` (✓): drop targets, feedback and alternatives; `hig/patterns/undo-and-redo.md` (✓): Undo after clearing; `hig/components/menus/edit-menus.md` (✓) and `the-menu-bar.md` (✓ Edit menu): standard Copy / Paste.
- `hig/components/menus/context-menus.md` (✓): the well's context menu; `hig/patterns/feedback.md` (✓ CRITICAL) and **Feedback gate**: inline upload errors.
- Not yet ingested: Pickers, Progress indicators.
- No conflict with a field note.

## Checklist
- [ ] The well shows the **current image** or a **default image** when an image is required; an optional empty well shows one clear action.
- [ ] **Drag-in works without selecting first**, with a visible drop state; **click / Enter / Space opens a file picker**.
- [ ] **Copy, paste and delete** work when the well is focused (Ctrl/Cmd+C/V, Delete), plus a **Remove button** and **Undo**.
- [ ] Desktop apps keep **Edit ▸ Copy / Paste / Delete** and the context menu in sync with the focused well.
- [ ] **Type and size are validated** with an inline, blame-free error; uploads show progress.
- [ ] The control has an **accessible name and state**, a **≥ 3:1 boundary** and a visible focus ring; drag is never the only way.
- [ ] On touch widths a **photo-picker button** replaces the drop zone.

## Related
- Ingested: Image views (✓), Drag and drop (✓), Undo and redo (✓), Edit menus (✓), The menu bar (✓), Context menus (✓), Feedback (✓ CRITICAL), Color wells (✓).
- Not yet ingested: Pickers, Progress indicators.
- Developer docs: AppKit `NSImageView`.
