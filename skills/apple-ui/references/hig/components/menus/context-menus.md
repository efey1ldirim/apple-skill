# Context menus
Source: https://developer.apple.com/design/human-interface-guidelines/context-menus · Section: Components › Menus and actions · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS** ("No additional considerations for tvOS. **Not supported in watchOS**"; the watch icon is dimmed on the platform strip **(from screenshot)**; specific guidance for iOS/iPadOS, macOS, visionOS) · Ingested: 2026-09-29 · Apple last updated: 2023-12-05 (added guidance on hiding unavailable menu items). Change log (three rows, read from the fetch because the screenshots stop at the table header): **2023-12-05** hiding unavailable items · **2023-06-21** visionOS · **2022-09-14** submenu guidance refined + a guideline on creating objects with a context menu in iPadOS. One DocC fetch, read in full. 6 screenshots (light-mode page, hero → the change-log table header) were compared with the fetched text and image alt text line by line: everything matches; the six screenshots are contiguous. Text that exists only inside the hero picture is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers except **"about three groups"** and **"one level"** of submenu.

## In one line
A context menu gives **quick access to the commands most relevant to the item people just selected**, without adding chrome. It is **hidden by default**, so **every command must also exist in the main UI**; keep it **short, relevant and consistent everywhere**, **hide (don't dim) unavailable items**, **at most one submenu level**, put the **most used items nearest the finger/pointer**, **destructive items last and marked**, and choose **either a context menu or an edit menu** for an item, not both.

## Rules

### Framing (intro)
- A context menu provides access to functionality **directly related to an item, without cluttering the interface**.
- It is **hidden by default**, so people may not know it exists. People reveal it by **choosing a view or selecting content and then performing an action** with the input mode of their setup:
  - the system **touch or pinch and hold** gesture in **visionOS, iOS and iPadOS**;
  - **Control-click** with a pointing device in **macOS and iPadOS**;
  - a **secondary click on a Magic Trackpad** in **macOS or iPadOS**.

### Best practices
- **should** **Prioritise relevancy.** A context menu is **not for advanced or rarely used items**; it gives the commands people are **most likely to need in the current context**. Example: for a Mail message in the Inbox: **reply** and **move**, but **not** editing content, managing mailboxes or filtering.
- **should** **Aim for a small number of items**; a long menu is **hard to scan and scroll**.
- **must** **Support context menus consistently throughout the app.** If some places have them and others don't, people **won't know where the feature works** and may think something is broken.
- **must** **Make every context-menu item available in the main interface too.** In Mail on iOS/iPadOS the message's context-menu items are **also in the message view's toolbar**; in macOS the **menu bar lists all commands**, including those from context menus.
- **should** **Keep submenus to one level.** A **submenu** reveals a secondary menu of logically related commands; it can shorten the menu and clarify commands, but **more than one level is hard to navigate**. If you include one, give it an **intuitive title** that predicts its contents (see *Menus › Submenus*).
- **must** **Hide unavailable items, don't dim them.** Unlike a regular menu (which teaches what is possible even when unavailable), a context menu shows **only actions relevant to the selected view or content**. **macOS exception:** **Cut, Copy and Paste** may appear unavailable when they don't apply.
- **should** **Put the most frequently used items where people meet them first.** People often read a context menu from the part **closest to where the finger or pointer revealed it**; depending on the selected content's position the menu may open **above or below** it, so you may need to **reverse the item order** to match the menu's position.
- **should not** **Show keyboard shortcuts in context menus**; show them in the **main menus**. Context menus are themselves a shortcut to task-specific commands, so displaying shortcuts is redundant.
- **should** **Use separators** to group items and speed scanning; **no more than about three groups** (see *Menus*).
- **must** **On iOS, iPadOS and visionOS, warn about items that can destroy data.** Put potentially destructive items (**Delete, Remove**) **at the end** of the menu and **mark them destructive** (`destructive` attribute); the system can show them in **red text**.

### Content
- A context menu **seldom shows a title**; each **item** needs a **short label that clearly says what it does** (see *Menus › Labels*).
- **should** **Include a title only when it clarifies the menu's effect.** Example: with **several Mail messages selected**, tapping the **Mark** toolbar button on iOS/iPadOS shows a menu titled with **the number of selected messages**, reminding people the command **applies to all of them**.
- **should** **Use familiar icons for actions**: **the same icons as the system** for Copy, Share, Delete, wherever they appear (see *Standard icons*, *Menus*).

### Platform considerations
- **tvOS:** no additional considerations. **watchOS:** not supported.
#### iOS, iPadOS
- **must not** **Provide both a context menu and an edit menu for the same item**: confusing to people and **hard for the system to detect intent** (see *Edit menus*).
- **should** **In iPadOS, consider a context menu for creating a new object.** iPadOS opens one on **long press** or **secondary click with a trackpad or keyboard**; example: **Files** creates a **new folder** from a context menu in the **space between existing files and folders**.
- **Preview:** in iOS and iPadOS a context menu can show a **preview of the current content** beside the commands; people can **choose a command**, or in some cases **tap the preview to open it or drag it elsewhere**.
  - **should** **Prefer a graphical preview that clarifies the target** (Notes/Mail list item → a **condensed version of the real content**) so people can confirm the intended item.
  - **should** **Make the preview look good as it animates**: the system animates the preview out of the content and **dims the screen behind** preview and menu; **adjust the preview's clipping path** to the preview image's shape so **contours such as rounded corners don't appear to change** (`UIContextMenuInteractionDelegate`).
#### macOS
- A context menu is sometimes called a ***contextual* menu**.
#### visionOS
- **should** **Consider a context menu instead of a panel or inspector window** for frequently used functionality: **fewer separate views or windows** keep the space uncluttered.
- **should** **Avoid a menu taller than the window.** A visionOS window has system components **above and below** its edges (window-management controls, the Share menu) that a too-tall menu could **obscure**. Judge the length by usage: **specialist, in-depth apps** may reasonably offer **many sophisticated commands**; apps for **a few simple actions** want **short menus that are quick to scan**.

## Specs & values
The page gives **no sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Purpose | commands directly related to the selected item; frequently used only |
| Reveal (system) | touch/pinch-and-hold (visionOS, iOS, iPadOS) · Control-click (macOS, iPadOS) · secondary click on Magic Trackpad (macOS, iPadOS) |
| Size | small number of items; **≤ about 3 groups** (separators); **≤ 1 submenu level** |
| Availability | every item also in the main UI (toolbar, menu bar); consistent across the app |
| Unavailable items | **hidden, not dimmed** (macOS Cut/Copy/Paste may show as unavailable) |
| Order | most used nearest the reveal point; reverse when the menu opens upward |
| Shortcuts | not shown in context menus (only in main menus) |
| Destructive (iOS/iPadOS/visionOS) | last in the menu; marked destructive; red text |
| Title | rare; only when it clarifies scope (e.g. "3 messages") |
| Icons | familiar, same as system (Copy, Share, Delete) |
| Edit menu | never both a context menu and an edit menu for one item (iOS/iPadOS) |
| iPadOS | long press / secondary click; context menu to create objects (Files → new folder) |
| iOS/iPadOS preview | graphical preview of the real item; tap to open, drag; animate with a matching clipping path |
| visionOS | prefer over panels/inspectors; height ≤ window height |
| Not supported | watchOS |
| Developer docs | SwiftUI `contextMenu(menuItems:)` · UIKit `UIContextMenuInteraction`, `UIContextMenuInteractionDelegate` · AppKit `NSMenu.popUpContextMenu(_:with:for:)` · UIKit `UIMenuElement.Attributes.destructive` |
| Related HIG pages | Menus (not yet ingested; § Submenus, § Labels) · Edit menus (not yet ingested) · Pop-up buttons · Pull-down buttons (not yet ingested) · Icons ✓ (Standard icons) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card showing a **mouse pointer with a small click burst** just above the leading corner of a light rounded **menu**: rows **Item A** (triangle glyph), **Item B** (circle glyph), **Item C** and **Item D** (no glyph), then **Submenu A** (square glyph, trailing chevron, **highlighted**) and **Submenu B** (diamond glyph, trailing chevron) **(from screenshot)**. It shows a menu opening **at the pointer**, with a leading icon column that may be empty for some rows and **trailing chevrons marking submenus**; the icons are aligned so labels share one leading edge.
- **Page chrome (from screenshot):** the platform strip lights iPhone, iPad, Mac, TV and Vision with **Watch dimmed**; the TOC reads Context menus · Best practices · Content · Platform considerations · Resources · Change log. The side navigation shows **Menus and actions** with **Context menus** highlighted third (after Activity views and Buttons); the last screenshot ends at the change-log table header.
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 116). Nothing is measured.
- **Text that is not in the fetch:** the hero labels and the chrome above.

## Web translation
On the web this is the **custom context menu**: right-click on a row/card/canvas object, long-press on touch, `ContextMenu` key or **Shift+F10** on the keyboard, with a **visible ⋯ button** as the discoverable equivalent. It is the same `role="menu"` pattern as a pull-down menu (Menus page not yet ingested) but opened at the pointer and **scoped to the item under it**.

| HIG rule | Web implementation |
|---|---|
| Hidden by default; several reveal inputs | Open on **`contextmenu`** (right-click, Control-click on Mac, secondary click, **Shift+F10 / ContextMenu key**) and **long-press on touch** (pointer events, ~500 ms hold, CONV; iOS Safari doesn't reliably fire `contextmenu`, so implement the long-press and suppress the native callout with `-webkit-touch-callout: none` on the item only). Always `preventDefault()` **only** for elements you own; leave the native menu on text inputs, links and selected text (copy/paste/spell-check) or offer **Shift+right-click** to reach it. |
| **Every command also in the main UI** | The same commands live in a visible **⋯ / "More actions"** menu button on the item, in the toolbar for the selection, and in the app menu/command palette: the context menu is an **accelerator, never the only route** (touch users, keyboard users and people who never right-click). This is also the accessibility requirement. |
| Consistent throughout the app | One shared component, opened the same way on **every** list, table, card and canvas item; if a surface doesn't support it, show **no** context menu there but keep the ⋯ button; don't mix a custom menu on some rows and the browser's on others. |
| Relevancy and small size | Only the **top ~5–8 commands for that item type** (Reply, Move, Archive, Copy link…); advanced/rare/settings items go to the ⋯ menu or a detail view; long menus scroll with `max-height` and arrow-key navigation. |
| One submenu level | Use a nested `role="menu"` **once** at most (`aria-haspopup="menu"`, chevron at the trailing edge, opens on hover **with a safe-triangle delay**, on click/Enter and on **→**, closes on **←**/Esc); titles that predict contents ("Move to", "Share via"); never a second nesting level (flatten or use a picker). |
| Hide, don't dim, unavailable items | Render **only the commands that apply** to the item and the user's permissions (no "Delete" on read-only items); no greyed-out list of everything. Exception mirroring macOS: **Cut/Copy/Paste** may show and be `aria-disabled` when nothing applies. If you must dim a command elsewhere, that is the regular menu's job (Menus page). |
| Most-used first, reverse when opening upward | Put the primary command nearest the pointer: when the menu opens **above** the anchor (near the viewport bottom), **reverse the visual order** so the primary item is again closest to the click/finger (keep DOM order = visual order for screen readers by reversing in the DOM, not with `flex-direction: column-reverse`). Flip/shift to stay inside the viewport (`popover` + anchor positioning, Floating UI). |
| No keyboard shortcuts in context menus | Show **no shortcut hints** in the context menu; show them in the **app menu / command palette / ⋯ menu** (`menus`, `the menu bar`). The shortcuts still work. |
| Separators, ≤ 3 groups | `role="separator"` (`<hr>`) between **at most three** groups (e.g. primary · organise · destructive); no separator at the start/end; hairline colour from the separator token (`color.md`). |
| Destructive last and marked | **Delete/Remove** at the **end**, after a separator, with a **red label** on the neutral menu surface (contrast ≥ 4.5 : 1: `#C4132A` light / `#FF6B70` dark, `buttons.md` tokens) **and an icon**; **no confirmation dialog** for recoverable deletes: perform it and offer **Undo** (`undo-and-redo.md`); use one alert only for unexpected irreversible loss (`feedback.md`). Never make it the first/default item. |
| Titles only when they clarify | For a multi-selection or a scoped action, show a **non-interactive title** ("3 messages selected") at the top (`role="presentation"` heading inside the menu, or the menu's `aria-label`); otherwise no title. |
| Familiar icons | Leading **icon column** aligned across items (or none); the same glyph for the same action everywhere (Copy, Share, Delete): **Lucide/Phosphor/Ionicons, never SF Symbols artwork on the web** (`icons.md`); icons are `aria-hidden` (the label carries the name). |
| Context menu **or** edit menu | For **selected text/objects** choose **either** a custom context menu **or** a custom selection toolbar/edit popover, not both for the same selection: two competing menus on one gesture confuse people and fight the browser's own callout. Prefer the context menu for **items**, the selection popover for **text editing** (`edit-menus` not yet ingested). |
| iPadOS: create objects from empty space | Right-click / long-press on the **empty area** of a canvas, folder view or board opens a **"New …"** menu (New folder, New note) at that point: keep it in addition to a visible "+" button. |
| Preview (iOS/iPadOS) | Optional on touch: when a long-press menu opens, show a **card preview of the target item** (condensed real content) above the menu, dim the page behind, animate it from the item's rect (FLIP) with the **same border radius** so corners don't jump, and let a tap on the preview open the item; respect `prefers-reduced-motion` (crossfade only). Never the only way to open it. |
| visionOS: menu instead of panel; ≤ window height | For spatial/large-target UIs prefer a menu over spawning a panel or window; on the web **cap menu height to the viewport** (`max-height: calc(100dvh - 16px); overflow: auto; overscroll-behavior: contain`) so it never covers window chrome or overflows, and scroll within it. |
| Keyboard and focus (ARIA menu pattern) | The opener is focusable (row/⋯ button); **Shift+F10 / ContextMenu** opens; focus moves to the **first item**; **↑ ↓** move, **Home/End**, **type-ahead**, **Enter/Space** activate, **→** opens a submenu, **←/Esc** closes and **returns focus to the invoker**; `role="menu"`, `role="menuitem"` (`menuitemcheckbox/radio` for toggles), `aria-labelledby`/`aria-label`; close on outside click, scroll or resize; only one open at a time; touch targets ≥ 44 px (Buttons gate). |
| Accessibility | Menu not the only route (⋯ button), items ≥ 44 px on touch, labels are verbs (sentence case per `writing.md`, or the product's chosen convention), red is never the only destructive cue (also last position + icon), focus ring on the highlighted item, `prefers-reduced-motion` respected. |

Field-note cross-links:
- `hig/components/menus/buttons.md` (✓ CRITICAL): the ⋯ opener button is a **button** (name, 44 px hit region, press/focus states); destructive red label colours and `aria-haspopup` rules come from there.
- `hig/patterns/feedback.md` (CRITICAL) and `undo-and-redo.md`: recoverable destructive items perform + Undo, not a confirm dialog; `modality.md`: a menu is a transient popup, dismissible, one at a time.
- `hig/components/layout/lists-and-tables.md`, `collections.md`, `column-views.md`, `outline-views.md`, `split-views.md`: rows, cards and tree items are the items that carry context menus; `hig/patterns/drag-and-drop.md`: drag from the preview.
- `hig/foundations/color.md` (CRITICAL) and `materials.md` (CRITICAL): the menu surface is a **functional-layer** glass/elevated surface with separator hairlines; text ≥ 4.5 : 1 (`field-notes/principles.md`: menus are elevated in dark mode).
- `hig/foundations/icons.md`, `sf-symbols.md`, `writing.md`, `accessibility.md`: icon source rule, label copy, keyboard access.
- No conflict with a field note.

## Checklist
- [ ] Every context-menu command also exists in the main UI (a visible ⋯ button, toolbar, app menu/command palette); the menu is an accelerator, not the only route.
- [ ] It opens the same way everywhere in the app (right-click, Control-click, Shift+F10/ContextMenu key, long-press on touch); native menus stay on text, inputs and links (or via Shift+right-click).
- [ ] Only relevant commands for that item type and user (small list); unavailable commands are hidden, not dimmed (Cut/Copy/Paste may show disabled).
- [ ] At most three groups and one submenu level; submenu titles predict their contents.
- [ ] The most-used command is nearest the reveal point, and the order is reversed when the menu opens upward (DOM order matches visual order).
- [ ] No keyboard shortcuts displayed in the context menu; they appear in main menus/the command palette.
- [ ] Destructive items are last, red **and** iconified, marked destructive; recoverable ones execute with Undo instead of a confirm dialog.
- [ ] Titles appear only when they clarify scope ("3 messages"); icons are the familiar set, aligned, `aria-hidden`.
- [ ] A selection has a context menu **or** an edit/selection popover, not both.
- [ ] Height is capped to the viewport and scrolls; focus moves in on open and returns to the invoker on close; full ARIA menu keyboard model works.
- [ ] On touch, an optional preview card animates from the item with matching corner radius and respects reduced motion.

## Related
- Ingested: Buttons (✓ CRITICAL), Icons (✓), SF Symbols (✓), Feedback (✓ CRITICAL), Undo and redo (✓), Modality (✓), Drag and drop (✓), Lists and tables (✓), Collections (✓), Color (✓ CRITICAL), Materials (✓ CRITICAL), Writing (✓), Accessibility (✓), Activity views (✓).
- Not yet ingested: **Menus** (§ Submenus, § Labels), **Edit menus**, **Pop-up buttons**, **Pull-down buttons**, The menu bar, Toolbars.
- Developer docs: see Specs & values.
