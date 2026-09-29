# Menus
Source: https://developer.apple.com/design/human-interface-guidelines/menus · Section: Components › Menus and actions · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (all six icons lit on the platform strip **(from screenshot)**; "No additional considerations for macOS, tvOS, or watchOS") · Ingested: 2026-09-29 · Apple last updated: **June 8, 2026** ("Updated guidance for menu item icons"). One DocC fetch, read in full. 11 screenshots (light-mode page, hero → the "Related / Developer documentation" part of Resources, ending on the "Change log" heading) were compared with the fetched text and image alt text line by line: everything matches. **Read from the fetch only:** the six **change-log rows** (the screenshots stop at the Change log heading), the **image alt texts**, and the dark variants. No videos. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
A menu **reveals commands, options or states on demand**, a **space-efficient** way to list actions. Every menu (system or custom, app or game) follows the same labelling and organising rules: **short verb-led labels in title-style capitalisation without articles**, **ellipsis when more input is needed**, **unavailable items stay visible but dimmed**, **icons sparingly and all-or-none per group**, **important items first, related items grouped**, **submenus rarely and one level deep**, and **toggled items** shown with a changing label or a checkmark. On iOS/iPadOS a menu can use **small (4 icons), medium (3 icons + labels) or large (list)** layouts.

## Rules

### Framing (intro)
- Menus are **ubiquitous** in apps and games; people expect them to **behave in familiar ways**: opening one **reveals menu items**, each a **command, option or state** that affects the current selection or context.
- The **labelling and organising guidance applies to all menus in all experiences**, system-provided or custom.
- **Note (callout):** several system components include menus for specific uses: a **pop-up button** or **pull-down button** reveals options tied to its action; a **context menu** gives a **small number of frequently used actions** for the current view or task; **in macOS and iPadOS the menu bar** menus contain **all commands** the app or game offers.

### Labels
- A label **describes what the item does** and **may include a symbol** if it helps. In an **app** an item can also show its **keyboard command**; in a **game** it rarely does, because games handle many input devices and may use game-specific key mappings.
- **Note (callout):** depending on layout, an **iOS, iPadOS or visionOS** app can show a few **unlabelled items with only a symbol** (see the iOS/iPadOS and visionOS layouts).
- **must** **Write a label that clearly and succinctly describes the item.** For an **action**, use a **verb or verb phrase** (View, Close, Select). For items that **show/hide** something or **show the selected state** see *Toggled items*. Let the **app's or game's communication style guide** set the tone.
- **should** **Use title-style capitalisation** to match platform experiences: capitalise **every word except articles, coordinating conjunctions and short prepositions**, and **always capitalise the last word**, whatever its part of speech. A game **may** have another style but should **generally prefer title style**. (Apple's Style Guide covers the details for English.)
- **should** **Remove articles (a, an, the)** from labels to save space: "View Settings", not "View the Settings" (no extra clarity).
- **should** **Show when an item is unavailable**: it **often appears dimmed and doesn't respond**. **If every item is unavailable the menu itself must stay available** so people can open it and learn what it holds.
- **must** **Append an ellipsis (…)** when the action **needs more information before it can complete** (input or further choices, typically in **another view**).

### Icons
- **should** **Represent common actions consistently** with the system's **standard icons** (Share, Print, Search); see *Icons › Standard icons*.
- **should** **Use icons sparingly and with purpose.** Icons help people **find items faster** and clarify the effect. Use one for **the most common actions and key features**, **file-system locations**, **connected devices**, **visual concepts** (rotate, flip an image) and **user-generated content** (folders, documents). **Don't show an icon when you can't find one that clearly represents the item.**
  - **✗** A weekday menu where each day has an **unrelated symbol** (sunglasses, a sun, a picture, a party popper, a moon and so on) **(from screenshot)**. **✓** The same menu **with no symbols** (catalog `menus-01`).
- **should** **Apply a uniform treatment in a group**: **icons for all items in a group, or for none**. Illustration: a macOS Window-style menu whose first group (Minimize, Zoom, Fill, Center, with shortcuts) has **no icons** and whose second group (Move & Resize, Full Screen Tile, with chevrons) has **an icon on each item**; the callouts read "No icons for menu items in group" and "Icons for all menu items in group" **(from screenshot)**.

### Organization
- **should** **List important or frequently used items first**: people scan from the top.
- **should** **Group logically related items** (editing: Copy, Cut, Paste; camera: Look Up, Look Down, Look Left) and separate groups with a **separator**, which is **a horizontal line or a short gap** in the menu's background depending on platform and menu type.
- **should** **Keep all logically related commands in the same group, even if their importance differs**: Paste and Match Style is used far less than Paste, yet people expect it beside Copy, Cut and Paste.
- **should** **Mind the menu's length.** Long menus take more time and attention, so people may **miss the command**. Split into **separate menus**, or use a **submenu** (e.g. difficulty levels under a New Game item). **Exception:** menus with **user-defined or dynamically generated content** (Safari's History and Bookmarks) may be long; **scrolling is acceptable**.

### Submenus
- A **submenu** is a subordinate list revealed by a menu item; the item shows **a symbol such as a chevron after its label**. Submenus are **functionally identical to menus**, apart from hierarchy.
- **should** **Use submenus sparingly**: each adds complexity and **hides** its items. Consider one **when a term appears in more than two items in the same group**: instead of Sort by Date / Sort by Score / Sort by Time, one **"Sort by" item** with a submenu listing **Date, Score, Time**. **Repeat the shared term in the parent label** so the contents are predictable.
- **should** **Limit depth and length**: **one level** is the general maximum; a submenu with **more than about five items** should become **a new menu**.
- **must** **Keep a submenu available even when its nested items are unavailable** so people can open it and learn the commands.
- **should** **Prefer a submenu over indenting items**: indentation is inconsistent with the system and doesn't express relationships clearly.

### Toggled items
- Items often represent **attributes or objects that turn on or off**. To avoid one item per state, use **a single toggled item** that shows the current state and lets people change it. Illustration: a four-item menu with a **checkmark on the leading edge of the second item** (catalog: an image only, no pair) **(from screenshot)**.
- **may** **Use a changeable label that describes the current state**: one item whose label switches between **Show Map and Hide Map**.
- **should** **Add a verb if a changeable label is unclear**: "HDR On/HDR Off" could read as **state or action**; **Turn HDR On / Turn HDR Off** removes the doubt.
- **may** **Show both items instead of one toggle** when it helps to see both actions or states at once: a game lists **Take Account Online** and **Take Account Offline**, and when online **only Take Account Offline appears available**.
- **may** **Use a checkmark for an attribute currently in effect**, easy to scan (Format › Font shows the styles applied to the selection).
- **may** **Offer one item that removes several toggled attributes at once** (e.g. **Plain** clears all text styles).

### In-game menus
- They let players **control gameplay** and set **game-wide settings**.
- **should** **Navigate with the platform's default interaction**: **touch** on iOS/iPadOS, **direct and indirect gestures** on visionOS.
- **must** **Keep menus easy to open and read on every supported platform.** Each platform has sizes for **fonts and interaction targets**; scaling game content to a smaller (**mobile**) screen can make menus **too small**. If so, **modify the tap-target size** and consider **other ways to convey the content** (see *Typography*, *Game controls › Touch controls*).

### Platform considerations
- **macOS, tvOS, watchOS:** no additional considerations.

#### iOS, iPadOS
Three layouts (diagram, catalog `menus-02`; developer API `preferredElementSize`):
- **Small.** A **row of four** items at the top, above a list of the rest; the **top row shows a symbol or icon, no label**.
- **Medium.** A **row of three** items at the top, above a list; each shows a **symbol above a short label**.
- **Large (the default).** **All items in a list.**
- **should** **Choose small or medium when it streamlines choices.**
  - **Medium:** the app has **three important actions people often want** (Notes: **Scan, Lock, Pin**).
  - **Small:** only **closely related actions that usually appear as a group** (**Bold, Italic, Underline, Strikethrough**); use a **recognisable symbol that identifies the action without a label**.

#### visionOS
- A menu can use the **small or large** layouts defined for iOS/iPadOS. You can present a menu **from 3D content using a SwiftUI view**, and apply a **breakthrough effect** so it stays visible when other content occludes it. **As in macOS, an open menu can appear outside the window's boundaries.**
- **should** **Display a menu near the content it controls**: people must **look at an item before tapping**, so a far-away effect can be missed. Illustration: a Notes window with a **"More"** button selected and a **dark translucent menu directly beneath it**: an icon row (three symbols, no labels), then Find in Note, Move Note, Lines & Grids, Delete, each with a trailing symbol **(from screenshot)**.
- **should** **Prefer the subtle breakthrough effect in most cases**: it **blends with surrounding content**, keeping legibility and usability while preserving depth and context. **Automatic** applies **subtle** by default when the menu overlaps 3D content. **Prominent** puts the menu **prominently over the whole scene**; **use only if important, because it can disrupt the experience and potentially cause discomfort**. **None** fully **occludes the menu behind other 3D content** (e.g. a puzzle game where players navigate around barriers) but **may make it hard to see and reach**.

## Specs & values
The page gives **no pixel sizes or timings**. Numbers and thresholds it does state:

| Item | Value |
|---|---|
| Label style | **title-style capitalisation** (every word except articles, coordinating conjunctions, short prepositions; last word always capitalised); no leading articles; verb or verb phrase for actions |
| Ellipsis | when the action needs more input before it completes (single "…" character) |
| Unavailable | dimmed, unresponsive; a menu whose items are all unavailable still opens; a submenu whose nested items are all unavailable still opens |
| Icons | sparingly; all-or-none per group; none when no icon clearly represents the item; standard icons for common actions |
| Icon use cases | most common actions, key features, file-system locations, connected devices, visual concepts, user-generated content |
| Order | important/frequent first; logically related together even with unequal importance |
| Length | short menus; split or use a submenu when long; **exception:** user-generated or dynamic lists (History, Bookmarks) |
| Submenu | one level; > about **5** items → make a new menu; consider one when a term repeats in **> 2** items of a group |
| Toggle | changeable label, or verb-added label, or both items; checkmark for "in effect"; "Plain"-style reset item |
| iOS/iPadOS layouts | small: **4** top-row symbols, no labels · medium: **3** top-row symbols with short labels · large (default): list |
| visionOS | small or large layouts; near the controlled content; breakthrough: automatic → subtle · prominent · none |
| Change log | June 8, 2026 icon guidance updated · Dec 16, 2025 breakthrough effect for visionOS · Jul 28, 2025 icons for menu items added · Jun 10, 2024 in-game menus + game examples · Jun 21, 2023 visionOS · Sep 14, 2022 small/medium/large layouts for iPadOS |
| Developer docs | SwiftUI `Menu` · UIKit "Menus and shortcuts" · AppKit "Menus" |
| Related HIG pages | Pop-up buttons ✓ · Pull-down buttons · Context menus ✓ · The menu bar |

## Visual notes (from screenshots)
- **Hero:** a red-to-pink card showing a light rounded menu with **Item A** (⌥⌘C), **Item B** (⌥⌘V), **Item C** (⌃⌥⇧⌘A) with **right-aligned key shortcuts**, a hairline separator, then a highlighted **Submenu** row with a chevron whose panel (**Item W, Item X selected, Item Y, Item Z**) opens to the lower right with a solid red selection pill **(from screenshot)**. It shows shortcuts in a trailing column, one separator between groups, a chevron marking a submenu and a strongly coloured selection row.
- **Note callouts:** grey outlined cards (neutral, not a warning colour).
- **Weekday illustration:** two small menus side by side, **✗ under the left one (grey circle with a white X), ✓ under the right (green circle with a white check)**; the left has a different symbol per day, the right none.
- **Group illustration:** annotations on the left with connector lines to the two groups (see Icons); trailing shortcuts appear dim, chevrons on the second group.
- **Toggled illustration:** a compact menu with a **leading checkmark column** (the check sits left of the label; unchecked rows are indented to line up).
- **iOS/iPadOS layouts:** three menus side by side: **small** = four icon-only cells in a row with a separator grid, then two list rows (Translate, Share) with **trailing** icons; **medium** = three icon-over-label cells (Cut, Copy, Paste), then Look Up, Translate, Share; **large** = six list rows (Cut, Copy, Paste, Look Up, Translate, Share) with **trailing icons** **(from screenshot)**. Standard icons sit **trailing** in list rows on iOS/iPadOS.
- **visionOS Notes menu:** described under Platform considerations; the disabled-looking dim text over the glass is only part of the depiction.
- **Page chrome (from screenshot):** the TOC reads Menus · Labels · Icons · Organization · Submenus · Toggled items · In-game menus · Platform considerations · Resources · Change log. The side navigation shows **Menus and actions** open with **Menus** highlighted; the platform strip lights all six icons. The last screenshot ends at the "Change log" heading, so the change-log rows come from the fetch.
- **Text that is not in the fetch:** the hero labels and shortcut glyphs, the weekday and group-illustration labels, and the chrome above.
- **Catalog:** `menus-01` (Icons do/don't) and `menus-02` (three layouts, single). Nothing was measured.

## Web translation
On the web a "menu" is **a popup command list** (menu button, kebab/⋯ button, application menu bar, context menu, dropdown of actions). Do **not** use it for **navigation** (links) or **form choices** (`<select>`, listbox, radio): those are different patterns (`sidebars.md`, `pickers.md`). Use it for **commands**.

| HIG rule | Web implementation |
|---|---|
| Familiar behaviour; commands, options or states | **Menu button pattern**: a `<button aria-haspopup="menu" aria-expanded aria-controls>` opens a `role="menu"` of `role="menuitem"`, `menuitemcheckbox`, `menuitemradio`. **Click/Enter/Space/ArrowDown** opens and focuses the first item (or last with ArrowUp); **ArrowUp/Down** move, **Home/End** jump, **type-ahead** jumps to a label, **Esc** closes and **returns focus to the button**, **Tab** closes. Never use `role="menu"` for a list of links. Full keyboard model: `context-menus.md`. |
| Verb-led, succinct label | "Rename", "Duplicate", "Move to Folder…" (verb + object); no "Click here", no sentences; the accessible name is the label (an icon-only item needs `aria-label`). |
| Title-style capitalisation | Follow the HIG rule above (skill decision 2026-09-29: **Title Case for menu items and menu titles**; `hig/foundations/writing.md` › Capitalisation table). "Move to Folder…", "Sort by Date", "Turn HDR On": every word capitalised except articles, coordinating conjunctions and short prepositions, last word always capitalised. Use the same case in every menu, and in the buttons that open them. Write the case in the string; no `text-transform`. |
| Remove articles | "Open Settings", not "Open the Settings"; also shorter for translations. |
| Show when unavailable (dimmed) | Use `aria-disabled="true"` on the item (**not** `disabled`/removal): it stays **focusable and announced** as unavailable, skipped by activation; dim it (`opacity ≈ .4`, exempt from contrast) and, where useful, give the reason in a tooltip or `aria-describedby`. If **all** items are unavailable **keep the trigger enabled** so the menu still opens. A submenu trigger stays openable when its children are unavailable. **Exception:** `context-menus.md` (hide, don't dim) and `edit-menus.md` apply their own rule; see the conflict below. |
| Ellipsis when more input is needed | Append the **single character "…"** (`Rename…`, `Export…`) when the action **opens a dialog, sheet or form**; leave it off for immediate actions; **never** for a destructive item that only confirms. Keep it in the accessible name. |
| Icons sparingly, all-or-none per group | An icon column **only** where a symbol is unambiguous (Share, Print, Delete, folders, devices, rotate/flip); **give every item in a group an icon, or none**; separate groups may differ. Web icons are Lucide/Phosphor drawn at the label's weight, never SF Symbols artwork; icons are `aria-hidden` when the label is present. Put them on the **leading** edge of web menus (Apple's iOS list rows put them trailing; pick one side per product). |
| Standard icons for common actions | One glyph per action across the product (the same Share, Copy, Delete everywhere; `icons.md`). |
| Important first; group related; separators | Order by frequency; group with `role="separator"` (`<hr>` inside a `role="menu"` is not enough on its own; use `role="separator"` on a div); **no more than about three groups**; keep Paste-and-Match-Style-type siblings beside Paste. |
| Menu length | Long list → split into several menus or a submenu; **exception:** user-generated lists (history, bookmarks, recent files): allow `max-block-size: min(70dvh, …)` with **`overflow: auto`**, keep the scroll position on the focused item, add a filter field past ~10 items (CONV). |
| Submenus | `aria-haspopup="menu"` on the parent item with a trailing chevron (flip for RTL); **ArrowRight opens** (ArrowLeft in RTL), **ArrowLeft/Esc closes to the parent**; **one level**; > ~5 items → a new menu. Pointer hover needs **a diagonal-safe delay** (~100–150 ms, CONV) so moving to the submenu doesn't close it; on touch, tap to open. Repeat the shared term in the parent ("Sort by ▸"). **Prefer a submenu to indentation.** |
| Toggled items | **Changeable label** (`Show Map` ↔ `Hide Map`, or `Turn HDR On`) with the verb form when ambiguous; **or** `role="menuitemcheckbox"` with `aria-checked` and a **leading check** for an attribute in effect; **or** `menuitemradio` for one-of-many. Show both actions when both states matter (Take Account Online/Offline: the inapplicable one dimmed). Offer a "Plain"/"Clear formatting" reset for multiple toggles. Announce the change (`aria-live` polite) only when the menu stays open. |
| In-game menus | Support the **default input for each device** (pointer and keyboard on desktop, touch on phones, gamepad D-pad and A/B when relevant) and keep **hit regions ≥ 44 × 44 px on touch** (`buttons.md`); scale menu text with the viewport so it stays readable when the canvas is scaled down; keep menu focus in a real DOM overlay (not canvas-only) for accessibility. |
| iOS/iPadOS small/medium/large layouts | Web equivalent: a **quick-actions row on top of a list**. **Small:** up to **4 icon-only** buttons in a `role="group"` row (each needs `aria-label` **and a tooltip**), used only for tightly related actions (Bold, Italic, Underline, Strikethrough); **medium:** up to **3** icon-over-label cells for the three most-wanted actions (Scan, Lock, Pin); **large (default):** a plain list. Rows keep **≥ 44 px** height on touch. |
| visionOS: near the content, breakthrough | On the web the menu should **anchor to its trigger** (Floating UI/Popover API `anchor`, flip/shift on overflow) and **stay above** other content (top layer via `popover`), so nothing hides it; avoid a full-screen scrim for a simple menu. Menus may extend beyond a container (`overflow: visible` on the panel, rendered in the top layer). |

Field-note cross-links and conflicts:
- **Capitalisation (decided):** this page's **title-style** rule is applied across the skill (`writing.md` › Capitalisation table, `buttons.md`, `lists-and-tables.md`, `outline-views.md`, `tab-views.md`); sentence case remains only where a page states it (box titles, tooltips, purpose strings). Nonplo's own sentence-case convention is set aside for now.
- **Unavailable items:** this page says **show dimmed**; `context-menus.md` says **hide** unavailable items (context menus show only what is relevant) and `edit-menus.md` says "remove or dim". So: **regular and menu-bar menus dim; context menus and selection toolbars hide**; already recorded on those pages.
- `hig/components/menus/context-menus.md` (✓): ≤ 3 groups, one submenu level, destructive last, same command elsewhere.
- `hig/components/menus/edit-menus.md` (✓): Cut/Copy/Paste order and the iOS/iPadOS layouts used there.
- `hig/components/menus/buttons.md` (✓ CRITICAL): the trigger button (hit region, label, `aria-expanded`, states) must pass the Buttons gate; the ellipsis rule matches the gate's `opens-view-no-ellipsis` warning.
- `hig/foundations/icons.md`, `sf-symbols.md`, `writing.md` (✓): standard icons, icon source rule, label copy.
- `hig/foundations/typography.md` and `layout.md` (✓ CRITICAL): item text size and 44 px rows on touch follow their gates.

## Checklist
- [ ] The menu is for **commands** (not navigation or form choice) and uses the **menu pattern** with full keyboard support and focus return.
- [ ] Labels are **verb-led, short, without articles**, in **Title Case**; **"…"** is used exactly when more input is needed.
- [ ] Unavailable items follow the menu type (**dimmed and focusable** in regular menus; **hidden** in context menus); a menu or submenu stays **openable** when all items are unavailable.
- [ ] Icons are **sparse and unambiguous**, **all-or-none per group**, from one family, with standard icons for common actions.
- [ ] Items are ordered **most used first**, related commands stay together, groups are separated (≤ ~3), and long menus are split (except user-generated lists).
- [ ] Submenus are rare, **one level**, ≤ ~5 items, with the repeated term in the parent label, and never replaced by indentation.
- [ ] Toggles use a changeable label (with a verb if unclear), a leading checkmark, or both items; a reset item exists for multiple toggles.
- [ ] Small/medium quick-action rows (≤ 4 / ≤ 3) are used only for closely related or top-three actions, with names and tooltips for icon-only cells.
- [ ] The panel opens **near its trigger**, flips/shifts near edges, and touch rows are **≥ 44 px**.

## Related
- Ingested: Context menus (✓), Edit menus (✓), Dock menus (✓), Home Screen quick actions (✓), Buttons (✓ CRITICAL), Activity views (✓), Icons (✓), SF Symbols (✓), Writing (✓), Typography (✓ CRITICAL), Layout (✓ CRITICAL), Undo and redo (✓).
- Ingested since: Pop-up buttons (✓). Not yet ingested: **Pull-down buttons**, **The menu bar**, Game controls (§ Touch controls), Settings.
- Developer docs: SwiftUI `Menu`, UIKit "Menus and shortcuts" (`preferredElementSize`), AppKit "Menus".
