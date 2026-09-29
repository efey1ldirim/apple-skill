# Undo and redo
Source: https://developer.apple.com/design/human-interface-guidelines/undo-and-redo · Section: Patterns · Supported platforms: iOS, iPadOS, macOS, visionOS (**tvOS and watchOS "Not supported"**; both dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 3 screenshots (dark-mode page, hero → Related) were compared with the fetched text line by line: everything matches; the three screenshots are contiguous. **The rest of the Related links, Developer documentation and Videos were read from the fetch only.** The page has no text inside images and no videos. Only page chrome is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
Let people **reverse recent actions, many times**, and make every undo **predictable and visible**: say what will be undone, show where the result happened, support batches, use the system's own ways of triggering undo, and never redefine its gestures.

## Rules

### Framing (intro)
- People expect undo/redo to reverse their recent actions, so they often **try undoing repeatedly until something changes**. They may not remember **which earlier action** an undo targets, which leads to **unintended changes and frustration**.
- **must** To keep people in control: help them **predict the outcome** of undoing and redoing, and **highlight the results**.
- Undo/redo also lets people **explore and experiment safely** while learning a new interface or task.

### Best practices
- **should** **Help people predict the results.**
  - **iPhone:** describe the result in the **alert shown when people shake** the device, offering **Undo** or **Cancel**.
  - **Menu items:** change their labels to name the result, e.g. **Undo Typing**, **Redo Bold** in a document-based app.
- **must** **Show the results of an undo or redo.**
  - When the affected content or area is **off-screen**, **highlight the result** of each undo and redo so people don't think **nothing happened** and repeat it.
  - Example: undoing the deletion of a paragraph that is no longer on screen → **scroll to the restored paragraph**.
- **must not** **Limit undo/redo counts unnecessarily.** People expect to undo **everything since a logical step**: opening a document or saving.
- **may** **Offer to revert several changes at once.**
  - **Batch** related but discrete actions (e.g. incremental adjustments to a single property) so people needn't undo each.
  - Or a convenient way to **undo all changes since opening or saving**.
- **should** **Provide undo/redo buttons only when necessary.** People normally use system ways: the **Edit menu** in a macOS app, **keyboard shortcuts** on Mac or iPad, **shaking** an iPhone. If dedicated buttons are important, use the **standard system symbols** and put them in a **toolbar**.

### Platform considerations
- **visionOS:** no additional considerations. **tvOS, watchOS:** not supported.
#### iOS, iPadOS
- **must not** **Redefine standard gestures for undo and redo** (a **three-finger swipe**, **shake to undo** on iPhone). Redefining standard gestures confuses people and makes the experience unpredictable.
- **should** **Describe the operation briefly and precisely.**
  - The undo/redo alert title **automatically starts with "Undo " or "Redo "** (including the **trailing space**); you supply **a word or two** that follows it.
  - Examples: **"Undo Name"**, **"Redo Address Change"**.
#### macOS
- **must** **Put Undo and Redo in the Edit menu, at the top, and support the standard shortcuts**: **⌘Z** to undo, **⇧⌘Z** to redo.

## Specs & values
The page has **no numbers**. Concrete facts:

| Item | Value |
|---|---|
| Ways to trigger (system) | macOS Edit menu · keyboard (Mac, iPad) · shake (iPhone) · three-finger swipe (iOS/iPadOS) |
| macOS shortcuts | ⌘Z undo · ⇧⌘Z redo; commands at the top of the Edit menu |
| Alert title (iOS) | "Undo " / "Redo " prefix (incl. trailing space) + your 1–2 words |
| Label examples | Undo Typing · Redo Bold · Undo Name · Redo Address Change |
| History depth | no artificial cap; back to open/save |
| Batch undo | related actions grouped; undo all since open/save |
| Dedicated buttons | only if important; standard symbols; in a toolbar |
| Not supported | tvOS, watchOS |
| Developer docs | `UndoManager` (Foundation) |
| Related HIG pages | Feedback ✓ · Pointing devices ✓ (`inputs/pointing-devices.md`) · Standard keyboard shortcuts (Keyboards ✓ `inputs/keyboards.md`) · Edit menu (The menu bar ✓) |
| Video | *Essential Design Principles* (WWDC17 802) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a circle containing a curved arrow that starts at the trailing side, curves upward and points to the **left** (undo), over construction circles.
- **Page chrome (from screenshot):** the platform strip lights iPhone, iPad, Mac and Vision; **TV and Watch are dimmed**; the TOC reads Undo and redo · Best practices · Platform considerations · Resources (**no Change log**).
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 105). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above.

## Web translation
Undo/redo on the web: editors, canvases, forms, lists, boards. It is also the **kind alternative to confirmation dialogs** (`feedback.md`, `modality.md`): "do it, and let people take it back".

| HIG rule | Web implementation |
|---|---|
| Expected trigger paths | **Ctrl/⌘ + Z** and **Shift + Ctrl/⌘ + Z** (also **Ctrl + Y** on Windows), an **Edit menu / ⋯ menu** with Undo and Redo at the top, and, on touch, a toolbar Undo/Redo pair; never override the shortcuts in text inputs where the browser's native undo should work (only in your custom editor/canvas surface, `beforeinput` with `historyUndo`/`historyRedo`). |
| Predict the result | Menu items and buttons carry **labels/tooltips naming the action**: "Undo Delete Card", "Redo Move to Done"; the disabled state shows "Nothing to undo". Keep labels short, in Title Case (`writing.md`); tooltips stay sentence case. Announce with a polite live region ("Undid delete card"). |
| Show the result | After undo/redo, **scroll into view, focus and briefly highlight** the affected item (a soft outline/fade ≤ ~1 s; CONV; respect `prefers-reduced-motion`), and restore selection; if it's on another page/tab, navigate there. Never make undo silent when the result is off-screen. |
| No arbitrary limit | Keep a **stack back to the last logical step** (document open/save), bounded by memory only; group typing into word/pause-sized steps, drags into one step, incremental slider changes into one step (coalescing). Persist history across autosaves if feasible (`file-management.md`). |
| Batch / revert all | "Revert to last saved" / "Undo all changes since opening" as an explicit menu action with a confirm (irreversible loss rule); coalesce related steps (`group` transactions) so one undo reverts a logical operation. |
| Buttons only when necessary | Provide toolbar buttons where touch users lack shortcuts or the tool is canvas/editor-like; use the standard arrow-counterclockwise/clockwise glyphs (`icons.md`), `aria-label="Undo"`/`"Redo"`, `aria-disabled` when empty; place in the toolbar, not floating. |
| Don't redefine gestures | Don't repurpose **shake**, **three-finger swipe** or **two-finger tap** on web/PWA for anything other than undo; don't map swipes to destructive actions without an **Undo** toast. |
| Undo instead of confirm | For **recoverable** destructive actions (delete, archive, move, remove from list), **perform immediately and show an Undo** in a quiet status message for ≥ 5–10 s (`tokens/apple-feedback.json` timing; CONV), with the toast also reachable by keyboard; keep the confirm dialog only for **unexpected, irreversible** loss (`feedback.md`). Server side: **soft-delete with a grace period** so the Undo is real. |
| Multi-user / collaboration | Undo should undo **your own** last action, not other people's edits (per-user history), and resolve conflicts explicitly ("This item changed since. Undo anyway?"). |
| Forms | Provide **Reset/Revert** per section and keep the typed value recoverable after accidental clear (browser undo in `<textarea>` works; don't break it with controlled-input hacks). |
| Accessibility | Buttons/menus focusable, shortcuts documented in a shortcuts sheet, announce result and count, keep focus on the affected item afterward (not on the toast). |
| Reduced support platforms | tvOS/watchOS-class surfaces (remote, glance): don't offer undo; prefer confirmation or making the action reversible elsewhere. |

Field-note cross-links:
- `hig/patterns/feedback.md` (CRITICAL): "Warn only for unexpected irreversible loss; for expected removals give Undo" is **this page in practice**: Undo toast = quiet status message; result highlighting = the feedback the page demands.
- `hig/patterns/drag-and-drop.md`: "prefer letting people undo a drag-and-drop"; drop mistakes → Undo.
- `hig/patterns/file-management.md`: undo back to open/save; revert-all-since-save; autosave and history.
- `hig/patterns/modality.md`: undo lets you avoid a blocking "are you sure" modal for recoverable actions.
- `hig/patterns/managing-accounts.md` and `managing-notifications.md`: deletion grace periods and scheduled deletion are the account-level Undo.
- `hig/foundations/motion.md`: result highlighting is short and reduced-motion-safe.
- `hig/foundations/icons.md`, `sf-symbols.md`: standard undo/redo symbols; `hig/foundations/right-to-left.md`: undo/redo arrows mirror in RTL (they express direction of time/reading).
- No conflict with a field note.

## Checklist
- [ ] Undo and redo work with ⌘/Ctrl+Z and ⇧⌘/Ctrl+Z (plus Ctrl+Y where expected), from an Edit/⋯ menu, and, where useful, toolbar buttons; native text-input undo is not broken.
- [ ] Labels name the action ("Undo Delete Card"); empty states say "Nothing to undo".
- [ ] After every undo/redo the affected item is scrolled into view and highlighted; off-screen results are never silent.
- [ ] History reaches back to the last open/save with no arbitrary cap; related steps are coalesced; "Revert all" exists where useful.
- [ ] Recoverable destructive actions execute immediately with an Undo (soft delete, ≥ 5 s toast); confirmations are kept for irreversible loss.
- [ ] Standard gestures (shake, three-finger swipe) are not redefined; undo is per-user in collaborative spaces.
- [ ] Buttons use the standard glyphs, are named, disabled when empty, mirrored in RTL.

## Related
- Ingested: Feedback (✓ CRITICAL), Drag and drop (✓), File management (✓), Modality (✓), Managing accounts (✓), Motion (✓), Icons (✓).
- Ingested since: Pointing devices (✓ `inputs/pointing-devices.md`), Toolbars (✓), The menu bar (✓ § Edit menu), Keyboards (✓ `inputs/keyboards.md`: ⌘Z / ⇧⌘Z).
- Developer docs: `UndoManager`. Video: *Essential Design Principles* (WWDC17 802).
