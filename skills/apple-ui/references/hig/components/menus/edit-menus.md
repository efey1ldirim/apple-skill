# Edit menus
Source: https://developer.apple.com/design/human-interface-guidelines/edit-menus · Section: Components › Menus and actions · Supported platforms: **iOS, iPadOS, macOS, visionOS** ("No additional considerations for visionOS. **Not supported in tvOS or watchOS**"; TV and Watch are dimmed on the platform strip **(from screenshot)**; the intro explains why: editing is rare there) · Ingested: 2026-09-29 · Apple last updated: 2023-06-21 (updated to include guidance for visionOS). Change log: **2023-06-21** visionOS · **2022-09-14** guidance on supporting both edit-menu styles in iPadOS; both rows are visible in the last screenshot and match the fetch. One DocC fetch, read in full. 5 screenshots (light-mode page, hero → the start of the page footer) were compared with the fetched text and image alt text line by line: everything matches; the five screenshots are contiguous and cover the whole page. Text that exists only inside the hero picture is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
An edit menu lets people **act on selected content** (Cut, Copy, Paste, Select, Translate, Look Up, plus related actions) in the current view. **Use the system-provided one** with the **system-defined ways to reveal it**, **offer only relevant commands (remove or dim the rest)**, put **custom commands next to related system ones (few, verb-led)**, **support undo/redo**, **don't add duplicate controls** for the same functions, and **tell Delete from Cut**. On iPhone/iPad support **both** the compact horizontal and the vertical style.

## Rules

### Framing (intro)
- An edit menu lets people **make changes to selected content in the current view**, and offers related commands such as **Copy, Select, Translate and Look Up**.
- Its commands apply to **many kinds of selectable content**, not only text: **images, files, contact cards, charts, map locations**.
- **iOS, iPadOS, visionOS:** the system **detects the data type** of the selected item and may **add a related action**: selecting an **address** can add **"Get directions"**.
- **Per platform:**
  - **iOS:** a **compact, horizontal list** appears on **touch and hold** or **double-tap** to select; a **chevron at the trailing edge** expands it into a **context menu**.
  - **iPadOS:** **touch** reveal → the compact horizontal appearance; **keyboard or pointing device** reveal → the edit menu opens **directly in a context menu**.
  - **macOS:** editing commands come from a **context menu** revealed during an editing task **and** the app's **Edit menu in the menu bar**.
  - **visionOS:** **pinch and hold** opens the edit menu as a **horizontal bar**, or it can open in a **context menu**.
  - **tvOS and watchOS:** editing is **rare**, so the system provides **no edit menu**.

### Best practices
- **should** **Prefer the system-provided edit menu.** People know its contents and behaviour; a **custom menu with the same commands is redundant and likely to confuse** (standard commands: `UIResponderStandardEditActions`).
- **should** **Let people reveal it with the system-defined interactions they know**: **touch and hold** on a touchscreen, **pinch and hold** in visionOS, **secondary click** with a trackpad or keyboard. People **don't want to learn a custom interaction** for a standard task.
- **should** **Offer commands relevant to the current context, removing or dimming those that don't apply**: nothing selected → **no Copy or Cut**; nothing to paste → **no Paste**.
- **should** **List custom commands near the relevant system ones**: e.g. custom formatting commands **after the system commands in the format section**, keeping the expected order; **avoid too many custom commands**.
- **may** **Let people select and copy noneditable text** when it makes sense (an image caption, a social status pasted into a message, note or web search): **content text yes, control labels no**.
- **should** **Support undo and redo when possible.** Like all menus an edit menu **doesn't ask for confirmation**, so people recover with undo/redo (see *Undo and redo*).
- **should not** **Add other controls that do the same as edit-menu items.** People expect familiar commands in the edit menu or **standard keyboard shortcuts**; redundant controls **crowd the interface** and leave less room for **actions people don't already know**.
- **should** **Differentiate kinds of deletion when needed**: **Delete** behaves like the **Delete key**; **Cut** **copies the selection to the system pasteboard before removing it**.

### Content
- **should** **Give custom commands short labels**: **verbs or short verb phrases** that succinctly say what the command does (see *Labels*).

### Platform considerations
- **visionOS:** no additional considerations. **tvOS, watchOS:** not supported.
#### iOS, iPadOS
- **must** **Make the edit menu work well in both styles.** The system shows the **compact horizontal** style for **Multi-Touch reveal** and the **vertical** style for **keyboard or pointing-device reveal** (vertical layout: see *Menus › iOS, iPadOS*).
- **may** **Adjust the placement if necessary.** By default the menu sits **above or below the insertion point or selection** depending on space, with a **visual indicator pointing to the targeted content**. You **can't change the menu's shape or pointer** but you **can move it**, e.g. so it doesn't cover **important content or parts of your interface**.
#### macOS
- The **order of items in the app's Edit menu** is on the *The menu bar › Edit menu* page (`the-menu-bar.md` ✓).

## Specs & values
The page gives **no sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Purpose | act on selected content: Cut, Copy, Paste, Select, Translate, Look Up, related actions |
| Content types | text, images, files, contact cards, charts, map locations |
| Data detection | iOS/iPadOS/visionOS add related actions (address → Get directions) |
| iOS style | compact horizontal list on touch-and-hold / double-tap; trailing chevron → context menu |
| iPadOS styles | horizontal (touch) · vertical context menu (keyboard/pointing device); support both |
| macOS | context menu during editing + Edit menu in the menu bar |
| visionOS | pinch and hold → horizontal bar, or a context menu |
| Not supported | tvOS, watchOS |
| Relevance | remove **or dim** commands that don't apply |
| Custom commands | few; verb labels; placed next to related system commands |
| Deletion | Delete = Delete key; Cut = copy to pasteboard then delete |
| Placement (iOS/iPadOS) | default above/below the selection; movable; shape and pointer fixed |
| Duplicates | no separate controls duplicating edit-menu functions |
| Undo | support undo/redo (no confirmation in menus) |
| Developer docs | UIKit `UIEditMenuInteraction`, `UIResponderStandardEditActions` · AppKit `NSMenu` |
| Related HIG pages | Menus ✓ (§ iOS, iPadOS) · Context menus ✓ · The menu bar ✓ (§ Edit menu) · Undo and redo ✓ · Gestures (§ pinch and hold, not yet ingested) · Labels ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a rounded **pill-shaped horizontal menu** reading **Cut | Copy | Paste | Delete** with thin dividers and a **circular chevron button** at the trailing end; **Delete is rendered lighter than the others** (a dimmed/unavailable look), beneath it the word **"Text"** selected with two round **selection handles** (top-leading and bottom-trailing) **(from screenshot)**. It shows the **iOS compact style**, the chevron that expands to a context menu, and that **dimmed commands are allowed** in this component.
- **Page chrome (from screenshot):** the platform strip lights iPhone, iPad, Mac and Vision with **TV and Watch dimmed**; the TOC reads Edit menus · Best practices · Content · Platform considerations · Resources · Change log. The side navigation shows **Menus and actions** with **Edit menus** highlighted fifth (after Activity views, Buttons, Context menus, Dock menus) and, below, the **Navigation and search** group (Path controls, Search fields, Sidebars, Tab bars, Token fields…).
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 116). Nothing is measured.
- **Text that is not in the fetch:** the hero labels and the chrome above.
- **Difference between two Apple pages (recorded, not resolved):** *Context menus* says **hide** unavailable items (macOS Cut/Copy/Paste may show dimmed); *Edit menus* says **remove or dim** commands that don't apply. Rule of thumb used here: prefer **removing**, and **dim only** the standard Cut/Copy/Paste/Delete family when their position must stay stable.

## Web translation
The web's edit menu is the **browser's native selection callout and context menu** (text, images, links) and, in rich editors, a **floating selection toolbar** (Tiptap/Lexical bubble menu, Google Docs-style). Apple's advice: **use the native one, keep the standard commands where people expect them, and add few, well-placed custom commands**.

| HIG rule | Web implementation |
|---|---|
| Prefer the system edit menu | Leave the **native selection UI and context menu** on text, inputs and content untouched (don't `preventDefault()` on `contextmenu` for text selections, don't disable selection or copy). Plain `<input>`/`<textarea>` never get a custom Cut/Copy/Paste menu. A **custom floating toolbar** belongs only in **rich-text/canvas editors** where you add formatting commands the browser lacks. |
| Reveal with system interactions | Selection via long-press (touch), double-click/drag (pointer), Shift+arrows (keyboard); the callout/context menu opens by the platform's own gesture (long-press, right-click/secondary click, Shift+F10/ContextMenu key). A custom toolbar **appears on `selectionchange`** (debounced ~150 ms, CONV) **in addition to**, not instead of, the native ones; don't invent a new gesture. |
| Relevant commands; remove or dim | Show **Cut/Copy** only when the selection is non-empty (and Cut only in editable regions); **Paste** only where paste is possible (editable target; clipboard permission is opaque, so keep Paste and handle the `paste` event); toolbar formatting buttons reflect state (`aria-pressed`) and are **removed or `aria-disabled`** when not applicable. Prefer removal; dim only the fixed Cut/Copy/Paste/Delete group so buttons don't jump. |
| Custom commands near relevant system ones | In a selection toolbar order: **standard clipboard/undo group first**, then **formatting group** (Bold, Italic, Link), then **custom** ("Comment", "Translate"); keep ≤ ~5–7 items visible with an **overflow chevron → menu** (the iOS chevron pattern); avoid a wall of custom commands. |
| Select/copy noneditable text | Content text stays `user-select: text` (captions, statuses, IDs, error messages) with a Copy affordance where copying is likely; **control labels** (buttons, tabs, menu items) may be `user-select: none` so drags don't select chrome (`labels.md`, `text-views.md`). Never disable copy on content to "protect" it. |
| Support undo/redo, no confirmation | Every edit-menu action is reversible: keep the **native undo stack** (don't replace content programmatically in ways that clear it; use editors that maintain their own history), offer **Undo** after Paste/Delete of large blocks (`undo-and-redo.md`), and never confirm Cut/Paste/Delete with a dialog. |
| No duplicate controls | Don't add a permanent "Copy"/"Paste"/"Select all" button next to a text field that the browser and keyboard shortcuts already cover; free the space for actions people **don't** already know. Exceptions with a reason: **"Copy link/code/API key"** buttons on copyable values (a different, one-tap action), and **"Paste" on touch** where a permission-gated paste helps; standard shortcuts (**Ctrl/⌘ X C V A Z**) must keep working, never be overridden. |
| Delete vs Cut | **Delete** removes the selection (like Backspace/Delete); **Cut** copies to the clipboard **then** removes (`navigator.clipboard.writeText` or the native `cut` event, `clipboardData.setData`); label them differently in custom menus. |
| Short verb labels | "Bold", "Add Link", "Comment", "Translate": verb or short verb phrase in Title Case (`writing.md`); icon-only toolbar buttons carry `aria-label` + tooltip (Buttons gate). |
| Data detection: related actions | When the selection is an **address, phone number, email, date or URL**, offer the related action in the toolbar or as a link: `tel:`, `mailto:`, `geo:`/Maps link, "Add to calendar" (`.ics`), "Open link"; mark up known entities as real links so the OS/browser callout can do it too; don't auto-link arbitrary text (iOS `format-detection` meta can surprise, control it explicitly). |
| Both compact and vertical styles (iOS/iPadOS) | Responsive by **input, not width alone**: on touch (`pointer: coarse`) show the **compact horizontal toolbar** with a **trailing chevron** that expands to a vertical list; with keyboard/pointer (`pointer: fine`) open the **vertical context menu** directly at the selection/click; both must expose identical commands and support arrow-key navigation (`context-menus.md`). |
| Placement and pointer | Anchor above or below the selection (flip when clipped) with a small **arrow pointing at the target**; **shift** to avoid covering important content and interface (Floating UI `flip`/`shift`/`arrow`), stay inside `visualViewport` when the on-screen keyboard is open; recompute on scroll and resize; never cover the caret line itself. |
| visionOS pinch-and-hold | For spatial UIs open the bar with the standard press-and-hold and keep targets ≥ 60 px (`buttons.md`); otherwise nothing extra. |
| tvOS/watchOS | No edit menu: on TV/glance surfaces avoid text editing that needs one; use dictation, presets or a phone handoff (`entering-data.md`). |
| Accessibility | Toolbar is `role="toolbar"` with `aria-label="Text formatting"`, roving tabindex, ←/→ between items, Esc closes and returns focus to the editor; **selection must not be lost** when the toolbar takes focus (use `mousedown` `preventDefault()` on toolbar buttons, or restore the range); announce state changes politely; respect reduced motion. |

Field-note cross-links:
- `hig/components/menus/context-menus.md` (✓): **"context menu or edit menu, not both" for one selection**; the vertical style is a context menu (hide-don't-dim there; this page allows dim/remove, see the recorded difference above).
- `hig/patterns/undo-and-redo.md` (✓): the Related page; edit-menu actions are reversible instead of confirmed.
- `hig/components/content/text-views.md` and `labels.md` (✓): selectable content text vs control labels; native undo in text areas.
- `hig/components/menus/buttons.md` (✓ CRITICAL): toolbar buttons are buttons (names, 44 px hit regions, press/focus states, no destructive primary).
- `hig/patterns/entering-data.md`, `drag-and-drop.md`, `feedback.md`: paste handling, dragging selections, quiet status after Copy.
- `hig/foundations/accessibility.md`, `writing.md`: keyboard model, label copy.
- No conflict with a field note.

## Checklist
- [ ] Native selection UI, context menu and shortcuts (Ctrl/⌘ X C V A Z) are left intact on text, inputs and content; no `preventDefault` on `contextmenu` for text selections.
- [ ] A custom floating toolbar exists only in rich editors, appears on selection, and adds formatting/custom commands after the standard ones (≤ ~5–7 visible, overflow chevron).
- [ ] Commands are relevant: Copy/Cut only with a selection (Cut only where editable); inapplicable items removed (or the fixed clipboard group dimmed with `aria-disabled`).
- [ ] No permanent buttons duplicating Cut/Copy/Paste; copy-value buttons are one-tap "Copy Link/Code/key" with quiet confirmation.
- [ ] Delete and Cut are distinct; Cut writes to the clipboard first; every action is undoable and none asks for confirmation.
- [ ] Content text is selectable/copyable, control labels are not; copy is never disabled to protect content.
- [ ] Detected addresses/phones/emails/dates offer their related action (`geo:`, `tel:`, `mailto:`, `.ics`) via real links or toolbar items.
- [ ] Touch shows the compact horizontal toolbar with a trailing chevron to a vertical menu; keyboard/pointer opens the vertical context menu; both share the same commands.
- [ ] The toolbar is placed above/below the selection with an arrow, flips/shifts to avoid covering content, stays in the visual viewport, and never steals or loses the selection.
- [ ] Keyboard model works (roving tabindex, arrows, Esc returns focus); icon-only buttons have names and tooltips; labels are short verbs.

## Related
- Ingested: Context menus (✓), Undo and redo (✓), Text views (✓), Labels (✓), Buttons (✓ CRITICAL), Entering data (✓), Drag and drop (✓), Feedback (✓ CRITICAL), Accessibility (✓), Writing (✓).
- Ingested since: Menus (✓). Ingested since: The menu bar (✓ § Edit menu). Not yet ingested: Gestures (§ pinch and hold).
- Developer docs: see Specs & values.
