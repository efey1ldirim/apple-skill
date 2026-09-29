# Pull-down buttons
Source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons · Section: Components › Menus and actions · Supported platforms: **iOS, iPadOS, macOS, visionOS** ("No additional considerations for macOS or visionOS. Not supported in tvOS or watchOS"; the iPhone, iPad, Mac and visionOS icons are lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **September 14, 2022** (refined menu-length guidance; the only change-log row). One DocC fetch, read in full. 5 screenshots (light-mode page, hero → the Change log table and the start of the page footer) were compared with the fetched text and image alt text line by line: everything matches; they are contiguous and cover the whole page. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The only number on the page is the "minimum of three items".

## In one line
A pull-down button opens **a menu of items or actions directly related to the button's purpose** (Add → what to add, Sort → which attribute, Back → which place); after a choice **the menu closes and the app performs the action**. Give it **at least three items** (fewer → use buttons or toggles) but not too many, **don't hide a view's primary actions in one**, add a **menu title only if it adds meaning**, mark **destructive items red and confirm them** (action sheet on iOS, popover on iPadOS), and add an **icon only when it clarifies**. For **mutually exclusive non-command choices** use a **pop-up button**.

## Rules

### Framing (intro)
- After people choose an item, **the menu closes and the app performs the chosen action**.

### Best practices
- **should** **Use a pull-down button for commands or items directly related to the button's action.** The menu lets you **clarify the button's target or customise its behaviour without extra buttons**:
  - an **Add** button whose menu lets people **specify what to add**;
  - a **Sort** button whose menu lets people **choose the attribute to sort by**;
  - a **Back** button that lets people **choose a specific location to revisit** instead of opening the previous one.
- **should** **For a list of mutually exclusive choices that aren't commands, use a pop-up button instead.**
- **should not** **Put all of a view's actions in one pull-down button.** Primary actions must be **easily discoverable** and not hidden behind a button people have to open first.
- **should** **Balance menu length with ease of use.** People must interact with the button before seeing the menu, so **a minimum of three items** helps the interaction feel worthwhile. For **one or two** items consider **buttons for actions** and **toggles or switches for selections**. **Too many items** slows people because it takes longer to find one.
- **may** **Show a succinct menu title only if it adds meaning.** The button's content plus descriptive items usually provide all the context, so a title is unnecessary.
- **must** **Show when an item is destructive and ask people to confirm.** Menus use **red text** for items you mark potentially destructive. On choosing one the system shows an **action sheet (iOS)** or a **popover (iPadOS)** where people **confirm or cancel**. Because the sheet **appears in a different place from the menu and needs deliberate dismissal**, it helps avoid **losing data by mistake**.
- **may** **Add an interface icon (or image) after a menu item's label when it provides value**, to clarify meaning. **SF Symbols** give a familiar look and keep the symbol **aligned with the text at every scale**.

### Platform considerations
- **macOS, visionOS:** no additional considerations. **tvOS, watchOS:** not supported.

#### iOS, iPadOS
- **Note (callout):** a pull-down menu can also be revealed by **a specific gesture on a button**: since iOS 14, **Safari shows a menu of tab actions (New Tab, Close All Tabs) on touch and hold of the Tabs button**.
- **may** **Consider a "More" pull-down button for items that don't need prominent positions.** It suits **constrained space** but **can hinder discoverability**: people generally know it offers **more functionality related to the current context**, but **the ellipsis icon doesn't help them predict the contents**. **Weigh the convenience of its size against discoverability** to find the right balance.
  - Illustration (catalog `pull-down-buttons-01`): Notes on iPhone, "Nature Walks" open. **Collapsed:** the top toolbar has a **Share** button and a **⋯ More** button at the trailing edge. **Expanded:** a **medium-layout menu** with a top row **Scan, Pin Note, Lock** (icon over label), then **Find in Note, Move Note, Recent Notes ▸, Math Results ▸ (subtitle "Suggest Results"), Lines and Grids, Attachment View ▸** and a **red Delete** at the bottom **(from screenshot)**.

## Specs & values
Only one number on the page:

| Item | Value |
|---|---|
| Content | commands or items directly related to the button's action; the menu closes and the action runs |
| Minimum items | **3** (one or two → use buttons, toggles or switches instead) |
| Maximum | "too many" slows people; no number given (Menus: split when long; ~5 per submenu) |
| Menu title | only if it adds meaning |
| Destructive | red text + confirmation: action sheet (iOS) / popover (iPadOS) |
| Icon | after the label, only when it clarifies; SF Symbols preferred |
| Use a pop-up button for | mutually exclusive choices that aren't commands |
| Don't | put all a view's primary actions in one pull-down button |
| iOS/iPadOS | optional More (⋯) pull-down for non-prominent items (trade-off: discoverability); touch-and-hold gesture can reveal a menu (Safari Tabs) |
| Change log | Sep 14, 2022: refined guidance on a useful menu length |
| Developer docs | SwiftUI `MenuPickerStyle` · UIKit `showsMenuAsPrimaryAction` · AppKit `pullsDown` |
| Related HIG pages | Pop-up buttons ✓ · Buttons ✓ CRITICAL · Menus ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a light rounded **button labelled "Item" with a trailing chevron-down in a rounded square**, a **horizontal double arrow above it** (width) and a **vertical measure bracket at its right** (height); **beneath it a dashed frame with two more "Item" rows** stands for the menu that drops below the button **(from screenshot)**. It shows the **downward chevron as the pull-down affordance** and the menu hanging **from the button's bottom edge**. (The pop-up button's hero uses an **up/down** chevron instead.)
- **Notes screenshots (two iPhones side by side):** collapsed: a back chevron at the leading edge, a **Share** button and a **⋯** button in a rounded capsule at the trailing edge, note title "Nature Walks", a bottom toolbar (checklist, paperclip, markup, compose). Expanded: the **⋯** menu is a **rounded translucent sheet** near the top right with a **row of three icon-over-label actions** above a separator, a list with **leading icons** (search, folder, clock, calculator, grid, attachment view), **chevrons on submenu rows**, a **subtitle under "Math Results"**, a **gap/separator before the red Delete**, which has a **red trash icon** **(from screenshot)**. Notes titles are in **Title Case with lowercase "in", "and"** (Find in Note, Lines and Grids), consistent with `menus.md`.
- **Note callout:** grey outlined card (neutral).
- **Page chrome (from screenshot):** the TOC reads Pull-down buttons · Best practices · Platform considerations · Resources · Change log. The side navigation shows **Menus and actions** open with **Pull-down buttons** in bold (Menus, Ornaments and Pop-up buttons above it, The menu bar and Toolbars below). The last screenshot reaches the Change log table (one row) and the start of the page footer, so **nothing was read from the fetch only** except the dark hero variant.
- **Catalog:** `pull-down-buttons-01`, two neutral images (collapsed → expanded); no do/don't pair. Nothing is measured.
- **Text that is not in the fetch:** the hero and phone labels above. The fetched alt text has the typo "funtionality" (Apple's), left as is.

## Web translation
This is the **menu button** (a.k.a. dropdown menu, action menu, split-button menu). It **runs commands or chooses among related items**; it is **not** a value picker (that is the pop-up button, a `<select>`, `pop-up-buttons.md`). Keyboard, ARIA and labelling details live in `menus.md`; this page adds **when to use it and what goes in it**.

| HIG rule | Web implementation |
|---|---|
| Commands directly related to the button's action | `<button aria-haspopup="menu" aria-expanded aria-controls>Add</button>` opening `role="menu"` with **"New Document", "New Folder", "Upload File…"**; "Sort" → items are sort attributes; "Back" long-press/⋯ → history locations. The button's **name states its target**; items refine it. |
| Not for exclusive non-command choices | A **value** ("Repeat: Never") is a **select** (`pop-up-buttons.md`); a menu button's label stays **constant** (it doesn't change to the chosen item), except a Sort button that shows the active sort as a visible suffix ("Sort: Date"), which is a pop-up-style hybrid; use `menuitemradio` for the active attribute. |
| Don't hide all primary actions in one | Keep the **main actions as visible buttons** (Save, Share) and only the secondary set in a menu; an empty toolbar with a single "Actions" button fails discoverability. |
| Menu length: minimum three; not too long | **≥ 3 items** (CONV from the page's minimum) else render real buttons or toggles (`aria-pressed`/switch); **≤ ~7–10 items** per menu, split by group/separator, and ≤ 1 submenu level (`menus.md`). |
| Menu title only if meaningful | Skip a title by default; when the same trigger label is ambiguous (a ⋯ button) give the menu an **accessible name** (`aria-label="Note actions"`) instead of a visible header; a visible title only when scope changes ("3 items selected"). |
| Destructive: red text + confirmation | The item is **red text with a trash icon, last after a separator** (colour is never the only cue: also position + icon + label); choosing it opens **a confirmation** placed apart from the menu: a small **dialog/`alertdialog`** or a **bottom sheet on mobile** with a named destructive button ("Delete Note") and Cancel, focus on the safe option, **or an Undo toast for reversible deletes** (`undo-and-redo.md`, `modality.md`). Never delete on the menu click alone unless it is undoable. |
| Icon after the label only when it clarifies | Leading or trailing icons only when unambiguous, consistent per group (`menus.md`); web icons from Lucide/Phosphor (never SF Symbols artwork), `aria-hidden`. Apple's iOS list shows icons **trailing** in plain lists and **leading** in the Notes menu; **pick one side per product**. |
| More (⋯) button for non-prominent items | The kebab/⋯ button works for **secondary, contextual** actions when space is short, but **give it an accessible name** (`aria-label="More actions"` + tooltip), keep the **hit region ≥ 44 × 44 px**, and don't put frequent actions in it (discoverability). Its items are related to the **current context** (the note, the row), not global settings. |
| Touch-and-hold reveals a menu (Safari Tabs) | As a **shortcut only**: long-press (`contextmenu`/pointer events, ~500 ms, CONV) on a button may open a related menu, but the **visible click/tap must reach the same actions** (a visible ⋯ or the tap itself opens the menu); iOS Safari long-press needs `-webkit-touch-callout: none` to avoid clashes. |
| Top row of icon quick actions (Scan, Pin Note, Lock) | The iOS **medium layout**: up to 3 icon-over-label cells in a `role="group"` row above the list (`menus.md`); each is a `menuitem` with a name; use only for the three most-wanted actions. |
| Submenus in a pull-down | Allowed (the pop-up page rules them out; Notes shows three chevron rows) but **one level only** and never for the primary actions. |

Field-note cross-links:
- `hig/components/menus/menus.md` (✓): all labelling, ellipsis, icon, grouping, submenu and toggle rules; the medium/small layouts used by the Notes example.
- `hig/components/menus/pop-up-buttons.md` (✓): the other half of the choice: value → select, command → menu button.
- `hig/components/menus/buttons.md` (✓ CRITICAL): the trigger button must pass the Buttons gate (hit region, name, states); a ⋯ icon-only trigger needs an accessible name and a tooltip.
- `hig/components/menus/context-menus.md` (✓): destructive-last with warning; same command elsewhere; long-press as a shortcut.
- `hig/patterns/undo-and-redo.md` (✓) and `modality.md` (✓): confirmation vs undo, and the action-sheet/popover confirmation placed away from the menu.
- `hig/foundations/icons.md` (✓): the ellipsis icon's ambiguity and standard icons.
- No conflict with a field note.

## Checklist
- [ ] The menu button runs **commands** related to its purpose; exclusive value choices use a select instead.
- [ ] It has **at least three items**, a sensible maximum, at most one submenu level, and primary actions stay visible outside it.
- [ ] The trigger has an accessible name (and tooltip when icon-only), a ≥ 44 px hit region and passes the Buttons gate; a ⋯ trigger is used only for secondary, contextual items.
- [ ] Destructive items are red **and** last **and** iconed, and choosing one asks for confirmation apart from the menu (or offers Undo).
- [ ] Icons appear only where they clarify, consistently per group, one side per product.
- [ ] Long-press shortcuts never replace a visible way to open the same menu.
- [ ] Item labels follow Title Case and the `menus.md` label rules.

## Related
- Ingested: Pop-up buttons (✓), Menus (✓), Buttons (✓ CRITICAL), Context menus (✓), Undo and redo (✓), Modality (✓), Icons (✓).
- Ingested since: The menu bar (✓). Not yet ingested: **Toolbars**, Action sheets, Popovers.
- Developer docs: `MenuPickerStyle` (SwiftUI), `showsMenuAsPrimaryAction` (UIKit), `pullsDown` (AppKit `NSPopUpButton`).
