# File management
Source: https://developer.apple.com/design/human-interface-guidelines/file-management · Section: Patterns · Supported platforms: all six on the platform strip, but only iOS, iPadOS and macOS have platform-specific guidance; tvOS and watchOS have no document browsing · Ingested: 2026-09-28 · Apple last updated: 2024-06-10 (document launcher for iOS and iPadOS). Change log: 2023-06-21 visionOS guidance · 2024-06-10 document launcher. One DocC fetch, read in full. 8 screenshots (dark-mode page, hero → "Related") were compared with the fetched text line by line: everything they show matches. **The screenshots stop at "Related"; Developer documentation, Videos and the change-log rows were read from the fetch only** (the TOC in the screenshots does list Change log). Text that exists only inside the launcher illustration and page chrome is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
People expect documents to live in the system, not in your app: give them the familiar menus, an Add (+) button and the platform file browser, **save automatically** so work is never lost, hide file extensions by default, and let them preview files even your app can't open.

## Rules

### Framing (intro)
- Document-based apps (Pages, Keynote, Photos, Preview) help people create, edit and save documents and files, often with customised ways to browse what to open.
- People also expect to browse documents **without opening a document-based app first**:
  - **Mac:** the Finder shows the macOS file system.
  - **iPhone, iPad, Apple Vision Pro:** the Files app manages documents and files on the device.
  - **watchOS, tvOS:** people don't usually create, edit or manage documents, so these systems have **no document-browsing interface**.

### Creating and opening files
- **should** **Give convenient ways to create and open documents through app menus and keyboard shortcuts.**
  - iPadOS and macOS: people expect familiar menu commands (New, Open).
  - iPadOS shows them in the shortcuts overlay that appears when the **Command** key is held on a hardware keyboard; macOS shows them in the **File** menu in the menu bar.
  - **must** Regardless of keyboard shortcuts, include an **Add (+) button** so people can create a new document. In a macOS app the add action also goes in the File menu (Apple links The menu bar › File menu).
- **should** **If a custom file browser is needed, support people's understanding of the platform's file system.**
  - People who know the Finder and Files already understand the basic layout of the device's file system.
  - It's fine to open on the most relevant place (a Documents or iCloud folder, or the last selected location), but **let people browse the rest of the file system** if they want.

### Saving work
- **should** **Help people be confident their work is always preserved unless they cancel or delete it.**
  - Avoid making people take an explicit action to save.
  - Instead **save automatically and periodically while they edit, when they close a file, and when they switch to another app.**
- **should** **Hide file extensions by default, but let people show them if they choose.** Reflect the current choice in **every** save and open interface the app shows.

### Quick Look previews
- Quick Look creates previews of files the app handles so people can view them inside the app and sometimes interact with them. Examples: listen to an audio preview, add markup to a photo preview, rotate and scale a 3D file preview.
- **should** **Use a Quick Look viewer to preview a file even when the app can't open it**, when the app lets people attach or otherwise interact with unsupported files, so they can preview without leaving the app.
- **may** **Implement a Quick Look generator if the app produces custom file types**, so other apps (the Finder, Files, Spotlight) show previews of its documents and people can find them more easily.

### Platform considerations
- **tvOS, visionOS, watchOS:** no additional considerations.

#### iOS, iPadOS
- **Document launcher** (iOS 18 and iPadOS 18 and later; SwiftUI `DocumentGroupLaunchScene`):
  - Document-based apps can use the system document launcher: a consistent, highly graphical, **full-screen** way to browse, open and create files that shows off the app's theme and makes creating a new document easy.
  - Three main parts:
    1. a **title card** with the app title and **two app-specific buttons**;
    2. a **background image** behind the title card, plus extra images called **accessories** that can sit around it;
    3. a **sheet** holding a file browser and optional app-specific controls.
  - All three are customisable. The system always shows the app name in the title card; the app sets the **text and function of the primary and secondary buttons**, and can supply a custom background, one or more accessory images, and some custom controls in the file browser's toolbar.
  - **should** **Assign the title card's buttons to the app's most important functions.** The primary button usually creates a new document; the secondary offers more options. (The page's example: in Numbers the primary button is "Start Writing" and the secondary is "Choose a Template" — the wording is as printed on the page.)
  - **should** **Use a background that is clearly distinct from the accessories and title card**: a solid colour, gradient or pattern. Avoid complex images or patterns that distract from the foreground.
  - **should** **Watch accessory placement.** Accessories may sit in front of and behind the title card for depth, but the **app name and both buttons must remain clearly visible**. Don't clutter the card with too many accessories; test across **all supported screen sizes and orientations**.
  - **should** **Use animation sparingly.** Too much motion confuses or disorients. If accessories are animated, prefer gentle, **repeating** animations that subtly enhance content, such as an accessory that seems to **breathe or sway softly** (Apple links Motion).
- **File provider app extension:**
  - If the app can share its files with other apps, a file provider extension can show a custom interface for **importing, exporting, opening and moving** its documents (`File Provider`). An *app extension* is code people install to extend a specific area of the system.
  - **should** **Show only documents that are appropriate in the current context** when someone opens or imports through the extension. Example: a PDF-editing app loads the extension, so list only PDFs. Optionally show extra info: modification dates, sizes, and whether documents are local or remote.
  - **should** **Let people choose a destination when exporting and moving documents**, unless the app stores everything in one directory: allow navigating to a specific place in the hierarchy, and optionally adding new subdirectories.
  - **should not** **Add a custom top toolbar.** The extension loads inside a modal view that already has a toolbar; a second one confuses and takes space from content.
  - The app can also let people browse and open files from other apps (developer doc: *Adding a document browser to your app*).

#### macOS
- **Custom file management:**
  - People strongly associate the familiar file browsing of the Finder and document-based apps with what to expect: **use the default file browser unless you have an important reason to build a custom one.**
  - **should** **Make a custom file-opening interface convenient.** Ideas: an "open recent" action besides plain "open"; filter criteria for browsing; selecting **multiple documents** to open at once. In a macOS open panel the **Open button's title can be customised** to match the task, e.g. "Insert" when the app inserts a file's contents into the current document.
  - **should** **Provide a save interface to change a file's name, format or location.** A new document is titled **"Untitled"** until people choose a name. A save view can also offer browsing that **defaults to a logical location**. If several formats are supported, let people choose a specific one.
  - **may** **Extend the Save dialog** with a custom accessory view of useful settings. Example: the dialog for saving Mail messages as files has an option to include attachments.
- **Finder Sync extensions:**
  - If the app syncs local and remote files, a Finder Sync extension can show sync status and controls inside the Finder (`Finder Sync`). It can:
    - show **badges** for the sync status of items;
    - add **contextual-menu** items for file and folder tasks (favouriting, adding password protection);
    - add **toolbar buttons** for global actions such as starting a sync.
  - (On the page these two autosave rules sit under the Finder Sync heading, but they concern document apps in general.)
  - **should** **Help people avoid losing work when they turn autosaving off.**
    - People can turn autosave off with the "Ask to keep changes when closing documents" toggle in Desktop & Dock settings.
    - Then show that a document has **unsaved changes** and present a **save dialog** when people close the document, quit the app, log out or restart.
  - **must** **When autosave is off, make unsaved changes visible**: a **dot on the document window's close button** and next to the document's name in the app's **Window menu**.
    - **must not** show that dot when autosave is **on**: it implies people must act to avoid losing work, which is confusing.
    - Regardless of autosave, the app **may** append **"Edited"** to the title in the title bar, but **must remove it as soon as autosave happens** or people explicitly save.

## Specs & values
The page has **no sizes, timings or colours**. Its concrete facts:

| Item | Value |
|---|---|
| Platforms with document browsing | Mac (Finder) · iPhone, iPad, Vision Pro (Files); none on tvOS, watchOS |
| Create/open surfaces | iPadOS: shortcuts overlay (hold Command) · macOS: File menu · all: an Add (+) button |
| Save policy | automatic and periodic while editing, on close, on switching apps; no explicit Save needed |
| File extensions | hidden by default, viewable by choice; the choice is reflected in every open/save UI |
| Default new-document title (macOS) | "Untitled" |
| Document launcher | iOS 18 / iPadOS 18+; parts: title card (app name + 2 buttons) · background image + accessories · sheet with file browser (+ optional controls) |
| Launcher file-browser tabs in Apple's example | Recents · Shared · Browse (**from screenshot** and the image caption) |
| Unsaved-changes signals (autosave OFF, macOS) | dot on the close button · dot by the name in the Window menu · optional "Edited" in the title (remove on save) |
| Autosave toggle name | "Ask to keep changes when closing documents" (Desktop & Dock) |
| Custom Open button title example | "Insert" |
| Finder Sync capabilities | badges · contextual menu items · toolbar buttons |
| Developer docs | SwiftUI *Documents* · `DocumentGroupLaunchScene` · File Provider · Finder Sync · *Adding a document browser to your app* · App extensions |
| Related HIG pages | Toolbars · File menu (The menu bar) (not yet ingested) · Printing ✓ |
| Video | *Build document-based apps in SwiftUI* (WWDC20 10039) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a large document glyph (page with its top-trailing corner folded) over construction circles.
- **Document launcher (from screenshot), two views of the same illustration (iPad, landscape):**
  - The status bar reads "9:41 Tue Apr 1" and 100 % battery.
  - A pale pink-to-lilac background with faint botanical shapes.
  - Centred **dark title card**: the title "Writing App" in very large white type, and one small teal pill button "Start Writing". (Only one pill is visible in the illustration; the page text says the card has two buttons.)
  - **Accessories:** a friendly robot character at the card's leading side and a plant with orange berries at its trailing side; both overlap the card edge, and the robot stands in front of the card's lower edge. Text and button stay clear of them.
  - **Sheet** rising from the bottom over the lower part of the card: app name "WritingApp ⌄" at the leading side; in the centre the tabs "Recents", "Shared", "Browse" (Browse selected, in a teal pill); at the trailing side four icon buttons and a search glyph. Below: a single tile with a "+" and the caption "Create Document". The rest of the sheet is empty.
  - The image caption states the sheet has **three tabs: Recents, Shared, Browse**.
- **Page chrome (from screenshot):** the platform strip shows all six devices lit; the TOC reads File management · Creating and opening files · Saving work · Quick Look previews · Platform considerations · Resources · Change log.
- The page has **no ✗/✓ pairs, no comparison images and no in-page videos** (fetch script run; catalog IDs unchanged, total 99). No motion is described with numbers, so nothing was measured.
- **Text that is not in the fetch:** only the launcher illustration's strings ("Writing App", "Start Writing", "WritingApp", Recents, Shared, Browse, "Create Document", the status bar) and the chrome above.

## Web translation
Documents and files on the web: editors, drives, design tools, uploads. There is no system file browser, so the pattern is: **use the platform pickers, autosave, name things well, preview everything, and never lose work.**

| HIG rule | Web implementation |
|---|---|
| Familiar create/open, menus + shortcuts + Add (+) | A visible **New** (+) button on the home/library, a File menu or toolbar with New / Open / Open recent, and shortcuts ⌘/Ctrl+N, ⌘/Ctrl+O, ⌘/Ctrl+S (do not hijack browser shortcuts silently; show them in the menu and a shortcuts sheet; `Ctrl` vs `⌘` by platform). |
| Use the platform's file system | Open with `<input type="file" accept="…">` (works everywhere) or the **File System Access API** (`showOpenFilePicker`, `showSaveFilePicker`, `showDirectoryPicker`) where available, always from a user gesture; fall back to a download/`<a download>`. Don't build a custom file tree when the picker will do. If a custom browser is needed (a cloud drive), open on the most relevant place (recent / last folder) and let people navigate the whole hierarchy. |
| Automatic saving | Save on a debounce while editing (e.g. after a pause), on blur/`visibilitychange`/`pagehide`, on route change and on close (`navigator.sendBeacon`/keepalive for the last write); keep a local draft (IndexedDB) so a crash or offline gap loses nothing; **no required Save button**. Show quiet status ("Saving…", "Saved", "Offline – will sync") as `role="status"` per the Feedback gate; never a toast for every autosave. |
| Unsaved-changes signal, only when it matters | If autosave is truly off (manual-save documents, exports), show an unsaved marker (a dot by the title/tab, and "Edited" in the title) and guard closing with `beforeunload`; remove the marker as soon as a save succeeds. When autosave is on, **never** show an unsaved dot (it tells people to act when they needn't). Tab titles can carry the marker. |
| Hide extensions by default | Show a friendly name ("Budget 2026") with a type icon; show the extension only when it disambiguates or when the person turns on "Show file extensions". Apply the setting everywhere names appear (lists, pickers, save dialogs, download names). |
| Quick Look previews | Preview what you can't edit: images, PDF (`<iframe>`/`pdf.js`), audio/video (`<audio>`/`<video controls>`), text/Markdown/code, spreadsheets as read-only tables, 3D via `<model-viewer>`/`<model>`; open in an in-page viewer (a modal or side panel) with Esc to close and a "Download" fallback. For your own file types, generate thumbnails/OG previews so other surfaces (search, links, listings) can show them. |
| Document launcher (start screen) | The app's home for a document product: a themed hero with the **title** and **two buttons** (primary = New document, secondary = a second useful path such as Templates), a distinct background behind them, restrained decorative accessories that never cover the title or buttons, and beneath it a **Recents / Shared / Browse** browser. Keep the primary action always visible (no scrolling past decoration); check every viewport and orientation with the Layout gate. |
| Distinct background, uncluttered accessories | Simple solid/gradient/pattern background with contrast to the card (Color gate); ≤ 2–3 accessories; layered depth only if the title and both buttons stay fully visible and readable (contrast ≥ 4.5:1). |
| Animation sparingly | Gentle, slow, looping accents only (breathe, sway) via the measured kit (`references/symbol-effects.md` **Breathe**) or CSS; stop under `prefers-reduced-motion`; never on the title or buttons. |
| File provider: only relevant documents | When your app opens a picker for another feature, filter by purpose: `accept=".pdf,application/pdf"`, `types` in `showOpenFilePicker`, or server-side filtering; show useful metadata (modified date, size, local vs remote / synced state). |
| Choose the destination on export/move | Export/Move opens a destination chooser (folder tree with "New folder"); default to the last used location; `showSaveFilePicker({ suggestedName, types })` offers name, format and location together. |
| No second toolbar in a modal picker | A picker or import dialog reuses the modal's own header/toolbar; don't add another bar beneath it (`layout.md`, one bar per surface). |
| macOS save/open panel behaviour | Save = **name + format + location** in one dialog; new docs are named "Untitled" (or "Untitled document") until renamed, with inline rename in the title; a format chooser when multiple formats; optional accessory options (e.g. "Include attachments"). Open button title matches the task ("Insert", "Attach", "Import"). |
| Open recent, filters, multi-open | A **Recents** list first; filters (type, owner, date); multi-select to open several. |
| Finder Sync badges | Sync status as small **badges next to the item** with text/aria alternative ("Synced", "Uploading", "Conflict"): never colour alone; contextual (right-click / ⋯) menu for file tasks (favourite, share, protect); a toolbar action for global sync (Feedback gate: status stays quiet, next to the item). |
| Losing work with autosave off | On close/navigate away/sign-out with unsaved changes: `beforeunload` plus an in-app dialog offering **Save / Don't save / Cancel** (the one case that warrants an interruption per `hig/patterns/feedback.md`). |
| Privacy | File access only on a user gesture, only the files chosen; never scan the file system; explain the purpose once (`privacy.md`). |

Field-note cross-links:
- `hig/patterns/feedback.md` (CRITICAL): autosave status and "Edited"/unsaved dot are **status feedback**: quiet, next to the item; the unsaved dot appears only when it asks for action; the close-with-unsaved-changes dialog is the one justified interruption.
- `hig/patterns/drag-and-drop.md`: dragging files in and out (the macOS Finder and clippings) and drop-target cues.
- `hig/patterns/entering-data.md`: pickers and defaults instead of typing paths; validation of names.
- `hig/foundations/motion.md` and `references/symbol-effects.md`: "breathe or sway softly" accessories map to the measured **Breathe** effect (scale 1→1.20 is too strong for large art, so use a much smaller amplitude and keep its 3.0 s symmetric rhythm).
- `hig/foundations/layout.md` (CRITICAL): the launcher's "test all screen sizes and orientations" is the LAYOUT GATE probe.
- `hig/getting-started/designing-for-macos.md` (File management row: drag files in and out, clear Save/Export/Download, recent documents, autosave with version history) and `designing-for-ipados.md`: **consistent**; this page supplies the rules.
- `hig/foundations/materials.md` (CRITICAL): the launcher's file-browser sheet floats over the card, so it is a functional-layer surface; the background and accessories are content.
- No conflict with a field note.

## Checklist
- [ ] New / Open / Open recent exist as menu or toolbar commands with shortcuts, plus a visible Add (+) button.
- [ ] The platform picker (`<input type=file>` / File System Access) is used before any custom browser; a custom one opens on a relevant place and lets people reach everything.
- [ ] Work is saved automatically (debounce, blur/hide, close), a local draft survives crashes, and no Save button is required.
- [ ] Save status is quiet and next to the document; an unsaved marker appears **only** when autosave is off, and disappears on save.
- [ ] Leaving with unsaved changes (autosave off) offers Save / Don't save / Cancel.
- [ ] File extensions are hidden by default with a setting to show them, applied in every list, picker and save UI.
- [ ] Files the app can't edit can still be previewed in place; custom types have thumbnails/previews for other surfaces.
- [ ] Pickers show only relevant file types with useful metadata; export/move lets people choose the destination; modal pickers have no second toolbar.
- [ ] Save interfaces offer name, format and location; new documents start as "Untitled"; the primary button label matches the task.
- [ ] A start screen (if any) has title + two purposeful buttons, a distinct background, few accessories that never hide title or buttons, tested at every size and orientation, and only gentle looping motion that stops under reduced motion.
- [ ] File access happens only from a user gesture and only for chosen files.

## Related
- Ingested: Feedback (✓ CRITICAL), Drag and drop (✓), Entering data (✓), Motion (✓), Layout (✓ CRITICAL), Materials (✓ CRITICAL), Privacy (✓), Designing for macOS (✓), Designing for iPadOS (✓), symbol-effects kit (✓).
- Ingested since: Going full screen (✓).
- Not yet ingested: **Toolbars**, **The menu bar** (§ File menu), Sheets, Popovers, Split views, Collaboration (✓ ingested: `hig/patterns/collaboration-and-sharing.md`), Windows.
- Developer docs: SwiftUI *Documents* · `DocumentGroupLaunchScene` · File Provider · Finder Sync. Video: *Build document-based apps in SwiftUI* (WWDC20 10039).
