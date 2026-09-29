# Photo editing
Source: https://developer.apple.com/design/human-interface-guidelines/photo-editing · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS** (page data; the platform text: "No additional considerations for iOS, iPadOS, or macOS. **Not supported in tvOS, visionOS, or watchOS**") · Ingested: 2026-09-29 · Apple last updated: **not shown** (the page has **no Change log** and no date in its data). **Link-only ingestion: one DocC fetch, read in full (28 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from the hero alt text only. Not marked critical: no token file, checker or gate. The page has **no numbers or measurements**; it names **4 best practices** and **2 developer resources** (App extensions, PhotoKit).

## In one line
**A photo-editing extension lets people modify photos and videos inside the Photos app (filters or other changes); edits are always saved as new files so the original stays safe.** It opens from the **toolbar's extension icon** while a photo is in **edit mode**, shows in a **modal view that already has a top toolbar**, and **dismissing it confirms and saves the edit or cancels it**. **Confirm cancellation (only when edits were made, and say the edits will be lost), don't add a second top toolbar, let people preview the result, and use your app icon as the extension's icon.** On the web: **an in-page editor opened from a photo, non-destructive (original kept), "Discard changes?" only after edits, a live preview, one toolbar, and the product's own icon.**

## Rules

### Framing (intro)
- **Photo-editing extensions let people modify photos and videos within the Photos app by applying filters or making other changes.**
- **Edits are always saved in Photos as new files, safely preserving the original versions.**
- **Flow:** **a photo must be in edit mode**; **tapping the extension icon in the toolbar opens an action menu of available editing extensions**; **selecting one shows its interface in a modal view with a top toolbar**; **dismissing the view confirms and saves the edit, or cancels it and returns to Photos.**

### Best practices
- **should** **Confirm cancellation of edits.** Editing can be time consuming: **when someone taps Cancel, don't discard immediately**; **ask them to confirm and tell them the edits will be lost.** **No confirmation is needed if no edits have been made yet.**
- **must not** **Provide a custom top toolbar.** **The modal view already has one**; **a second toolbar is confusing and takes space from the content being edited.**
- **should** **Let people preview edits**: **it's hard to approve what you can't see**; **show the result before closing the extension and returning to Photos.**
- **should** **Use your app icon as the extension icon**, which **builds confidence that the extension comes from your app.**

### Platform considerations
- **iOS, iPadOS, macOS:** no additional considerations. **tvOS, visionOS, watchOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings**. Its concrete content:

| Item | Value |
|---|---|
| Entry | photo in **edit mode** → **extension icon in the toolbar** → **action menu of extensions** → the extension's modal view |
| Container | **modal view with the system top toolbar** (don't add another) |
| Dismissal | **dismissing confirms and saves**, or **cancels** and returns to Photos |
| Output | **new file; original preserved** |
| Cancel | **confirm only if edits exist**; **say the edits will be lost** |
| Preview | required before closing |
| Icon | **your app icon** |
| Platforms | iOS, iPadOS, macOS |
| Developer docs | App extensions · PhotoKit |
| Video (link only, not watched) | Introducing Photo Segmentation Mattes (WWDC19 260) |
| Apple's Related list | none |
| Change log | none on the page |

## Visual notes (link-only: from alt text)
- **Hero:** a sketch of **crop marks surrounded by two arrows**, suggesting photo editing, over grid lines, **tinted blue** (alt).
- **The page has no other images** (**no screenshots or comparisons**).
- **Mismatches / notes:**
  1. **"Dismissing this view confirms and saves the edit, or cancels it"** **doesn't name the controls** (**Done/Cancel are system-provided in the toolbar**); **the page doesn't say what the buttons are called or where they sit.**
  2. **"Confirm cancellation"** is **a firm best practice**, but **the page gives no wording**; **the general alert guidance (`alerts.md`) applies.**
  3. **"Use your app icon"** — **the page doesn't say what to do when the extension has a distinct function** (the rule is unconditional).
  4. **The page doesn't cover video-specific issues** (**length, processing time, progress**) **although the intro includes videos.**
  5. **There is no Change log, Related list or screenshots**, so **its currency can't be checked**; **macOS behaviour is not described separately.**
- **Catalog:** the script found **0 comparisons** (the only image is the hero). Catalog stays **268**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
**Photo-editing extensions are native to the Photos app** (App Extensions + PhotoKit). **The web has no host app to extend**, but **the patterns apply to any embedded or modal photo editor** (a "Edit photo" dialog in a gallery, CMS or profile-picture flow). Statements about browser features are background knowledge, not from the page.

| HIG rule | Web implementation |
|---|---|
| Edits saved as new files; original preserved | **Non-destructive editing**: **store the original and save the edited result as a new version** (**or an edit list applied to the original**); **"Revert to original" available**; **never overwrite the source on save.** |
| Enter from a toolbar icon in edit mode; menu of editors | **An "Edit" mode on the photo, then an "Edit with…" menu button** (`aria-haspopup="menu"`) **listing available editors** (`menus.md`, `pull-down-buttons.md`, `toolbars.md`). |
| Modal view with a top toolbar; no second toolbar | **A `<dialog>` (or full-screen editor route) with one toolbar (Cancel · title · Done)**; **don't stack a second app toolbar inside** (`modality.md`, `sheets.md`, `toolbars.md`). |
| Dismissing confirms and saves, or cancels | **Two explicit buttons: "Done" (primary, saves) and "Cancel"**; **Esc behaves as Cancel** (so it needs the confirmation below). |
| Confirm cancellation only if edits exist; say edits will be lost | **Track a dirty state; `beforeunload` for tab close**; **on Cancel with edits: a confirmation dialog** ("Discard your changes? Your edits will be lost." with **"Discard Changes"** destructive and **"Keep Editing"** default); **no dialog when nothing changed** (`alerts.md`, `undo-and-redo.md`). |
| Preview edits before closing | **A live preview canvas (WebGL/canvas/CSS filters) that shows the result**; **before/after toggle ("Hold to compare")**; **the final image on Done matches the preview** (`image-views.md`). |
| App icon as extension icon | **Show the product's own logo/mark on the "Edit with…" menu entry and dialog header** so people recognise who provides the editor (`app-icons.md`, `branding.md`). |
| Accessibility and input | **Keyboard operable sliders and tools**; **visible focus**; **`prefers-reduced-motion` respected**; **touch targets ≥ 44 px** (`accessibility.md`, `sliders.md`). |
| Video edits | **Show progress for processing** and **allow cancel** (`progress-indicators.md`, `loading.md`). |
| Native-only | **App extensions, PhotoKit (`PHContentEditingController`), the Photos edit mode and the system extension menu** are native; **the web uses its own editor UI plus canvas/WebCodecs/file APIs.** |

Field-note cross-links:
- `field-notes/*`: **no photo-editor recipe**; nothing conflicts.
- `hig/patterns/modality.md` (✓), `hig/components/presentation/sheets.md` (✓) and `alerts.md` (✓): **modal editor and the cancel confirmation**; `hig/components/menus/toolbars.md` (✓): **the single top toolbar**; `hig/components/menus/menus.md` (✓) and `pull-down-buttons.md` (✓): **the extension menu**; `hig/patterns/undo-and-redo.md` (✓): **revert and undo of edits**; `hig/components/content/image-views.md` (✓): **preview display**; `hig/components/selection-and-input/sliders.md` (✓): **adjustment controls**; `hig/foundations/app-icons.md` (✓) and `branding.md` (✓): **using the app icon**; `hig/technologies/live-photos.md` (✓): **apply edits to all frames of a Live Photo, or offer a still**; `hig/technologies/machine-learning.md` (✓): **corrections to automated edits (auto-crop) that people can refine**; `hig/technologies/icloud.md` (✓): **saved edits syncing across devices**; `hig/foundations/accessibility.md` (✓).
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **Edits never overwrite the original**; **the result is saved as a new version.**
- [ ] **The editor opens as a modal with a single toolbar** (Cancel/Done), **not a second one.**
- [ ] **Cancel asks for confirmation only when edits exist, and says they will be lost.**
- [ ] **A live preview shows the result before saving**; **the saved result matches it.**
- [ ] **The entry point identifies the provider with the product's own icon.**
- [ ] **Keyboard, focus and reduced-motion support are in place**; **video edits show progress and can be cancelled.**

## Related
- Ingested: Modality (✓), Sheets (✓), Alerts (✓), Toolbars (✓), Menus (✓), Pull-down buttons (✓), Undo and redo (✓), Image views (✓), Sliders (✓), App icons (✓), Branding (✓), Live Photos (✓), Machine learning (✓), iCloud (✓), Accessibility (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: App extensions · PhotoKit.
- Videos: Introducing Photo Segmentation Mattes (WWDC19 260).
