# Token fields
Source: https://developer.apple.com/design/human-interface-guidelines/token-fields · Section: Components › Navigation and search · Supported platforms: **macOS only** ("Not supported in iOS, iPadOS, tvOS, visionOS, and watchOS"; only the Mac icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources **(from screenshot)**). One DocC fetch, read in full. 4 screenshots (light-mode page, hero → the `NSTokenField` link) were compared with the fetched text and image alt text line by line: everything matches; they are contiguous and cover the whole page. **Read from the fetch only:** the dark variants of the three images. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **no numbers** (the only default is "a comma converts text to a token").

## In one line
A token field is a **text field that turns typed text into tokens**: compact, **selectable, draggable, editable units** (Mail's recipient addresses). Give tokens **a context menu** with extra info and editing commands, **add more ways than the comma to create tokens** (Return…), and **tune the delay before suggestions** so they don't distract while typing. Mac only; the same idea appears **inside search fields** as search tokens.

## Rules

### Framing (intro)
- A token field converts entered text into **tokens that are easy to select and manipulate**.
- **Mail example:** the compose window's address fields turn each **recipient's typed name** into a token. People can **select** these tokens, **drag to reorder** them, or **move them to a different field**.
- **Suggestions:** the field can be configured to **show a list of suggestions as people type** (Mail suggests recipients in an address field). **Choosing a suggestion inserts it as a token.**
- **Contextual menu per token:** a token can carry a menu with **information or editing options**; a Mail recipient token's menu offers **editing the name, marking the recipient as a VIP, viewing the contact card**, among others.
- **Search tokens:** tokens can also **represent search terms** in some situations (see *Search fields*).

### Best practices
- **should** **Add value with a context menu**: people often benefit from **extra options or information about a token** (see *Context menus*).
- **may** **Provide more ways to convert text into tokens.** **By default text becomes a token when the person types a comma**; you can add other triggers such as **pressing Return**.
- **may** **Customise the delay before suggested tokens appear.** By default suggestions show **immediately**, but suggestions that appear **too quickly can distract** while typing; if the app suggests tokens, **adjust the delay to a comfortable level**.

### Platform considerations
- **macOS:** the only supported platform. **iOS, iPadOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Default token trigger | typing a **comma** |
| Extra triggers | optional, e.g. **Return** |
| Suggestions | optional list while typing; default delay **immediate**, adjustable |
| Token interactions | select · drag to reorder · drag into another field · context menu |
| Context-menu examples (Mail) | edit name · mark as VIP · view contact card · more |
| Also used for | search terms (Search fields) |
| Not supported | iOS, iPadOS, tvOS, visionOS, watchOS |
| Developer docs | AppKit `NSTokenField` |
| Related HIG pages | Text fields (not yet ingested) · Search fields ✓ · Context menus ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a **pale pink capsule search-style field**: a **magnifier** at the left, then a **token "Juan Chavez"** (a **rounded rectangle filled in red-orange** with a **person-in-circle icon** and white text), immediately followed by **plain typed text "Design"** and a **red text caret**, then a **round red clear (✕) button** at the right. It shows a **token sitting inline with ordinary text** in the same field, and that the field is the search-style one from *Search fields* **(from screenshot)**.
- **Suggestion screenshot (Mail compose, macOS):** a window with **traffic-light dots** and a toolbar (back, Aa, emoji, effects, layout, attach, markup, a **blue round send button**); the **To:** row holds two tokens **"Juan Chavez ⌄"** and **"Anne Johnson ⌄"** (**pale-blue rounded rectangles with a small chevron** after the name) and the typed text **"Mei Chen"** with its current match highlighted; under it a **suggestions popup with two rows**: **"Mei Chen — meichen3@icloud.com"** (**selected, solid blue with white text**) and **"Meghann Haven — meghann.haven@icloud.com"** in normal text. Below: **Cc:**, **Subject:** (with an importance "!" pop-up at the right), **From: Bill James – billjames2@icloud.com**, and a **formatting bar** (Helvetica, Regular, 12, colour swatch, B/I/U/S, alignment, list, indent) **(from screenshot)**.
- **Context-menu screenshot:** the same window; the token **"Mei Chen"** is **selected (solid blue with white text)** and a **menu** hangs below it: **✓ meichen3@icloud.com** (a **checked** address choice at the top), separator, **Edit Address / Remove Address / Copy Address**, separator, **Add to VIPs / Block Sender**, separator, **Remove from Previous Recipients List / Add to Contacts**, separator, **Search for "Mei Chen"** **(from screenshot)**. Menu items are **Title Case**, and destructive/removal items are **not red** here (Apple's own Mail menu).
- **Page chrome (from screenshot):** platform strip with only the Mac lit; TOC Token fields · Best practices · Platform considerations · Resources (no Change log); side navigation shows **Navigation and search** with **Token fields** ringed and **Presentation** below (Action sheets … Windows) and **Selection and input** further down (Color wells…). The **Related** block lists **Text fields, Search fields, Context menus**; **Developer documentation**: **NSTokenField — AppKit**. The last screenshot ends with the top of the page footer (grey band).
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 136). Nothing is measured.

## Web translation
The web equivalent is the **chip / tag input**: email recipients, tags, labels, filter terms, "people" pickers. Apple gives **no** iOS/Android version, so on touch treat the rules as principles and follow common chip-input practice.

| HIG rule | Web implementation |
|---|---|
| Typed text becomes a **token** on comma (default) | An input inside a **chip container** that behaves as one field: on **`,`** (and, per the next rule, other triggers) commit the current text as a token, clear the input, keep focus in it. Also commit on **blur** and on **paste** (split on comma, semicolon and newline). Validate on commit (e.g. email pattern) and mark invalid tokens with an **icon + text state**, not colour alone (`feedback.md`, `color.md`). |
| Extra shortcuts (Return) | **Enter** commits a token when text is present (and submits the form only when the input is empty); optionally **Tab**, **`;`** or **space** where the value can't contain them (emails: yes, names: no). Document the triggers in helper text. |
| Suggestions as people type; choosing inserts a token | ARIA **combobox** on the input: `role="combobox"`, `aria-expanded`, `aria-controls` → `role="listbox"` with `role="option"` rows, `aria-activedescendant`; each row "**Name — address**" (matched part emphasised); **Enter/click inserts a token**, Esc closes the list. Same model as `search-fields.md`. |
| **Delay** before suggestions | **Debounce** the query (**CONV 150–300 ms**; Apple says "comfortable" without a number), cancel stale requests, never steal focus; show nothing until at least one character is typed (CONV). If the list arrives after the person keeps typing, discard it. |
| Select a token; **drag to reorder** or move to another field | Tokens are **focusable buttons** (roving tabindex): **← →** move between tokens and the input, **Backspace/Delete on the input selects the last token** and a **second press removes it** (announce "Removed Anne Johnson"), **Shift+arrows** extend selection (CONV). **Drag and drop** reorders inside a field and **moves between fields** (To → Cc): highlighted drop zones, `dragstart/dragover/drop`, **plus keyboard alternatives** (menu commands "Move to Cc / Bcc", **Alt+←/→** to reorder) and **Undo** (`drag-and-drop.md`, `undo-and-redo.md`). |
| **Context menu** on a token (info + editing) | Click on the token's **chevron**, **right-click**, or **Enter/Space/Shift+F10/Menu key** opens a **menu button**: `aria-haspopup="menu"`, items `role="menuitem"`, the **current address checked** (`menuitemradio`). Mirror the Mail set as a template: *address choice ✓*, **Edit**, **Remove**, **Copy**, then domain actions (**Add to VIPs**, **Block Sender**), then list actions (**Remove from Previous Recipients**, **Add to Contacts**), then **Search for "…"**; separators between groups; Title Case items (`hig/components/menus/context-menus.md`, `menus.md`, `writing.md`). Every command is **also reachable elsewhere** (token remove ✕, keyboard) since context menus are shortcuts. |
| Token appearance | A **rounded-rectangle chip** with a tinted fill, the name, an optional **leading icon** (person for contacts) and a **small chevron** when it has a menu; **selected = solid accent fill with white text** (check **≥ 4.5:1**); focus ring visible. Keep chip text at body size; long values truncate with an ellipsis and full text in the accessible name. |
| Tokens can represent **search terms** | Use the same chip inside the search field (`search-fields.md`): the token's attribute label + value ("From: Design"), pairing tokens with suggestions so people learn them. |
| Mac only; no touch version | On touch web: chips get a **visible ✕ remove button**, **≥ 44 px hit regions** (Buttons GATE, `hig/components/menus/buttons.md`), long-press for the menu, and drag handles are optional because reordering is rare; suggestions appear **above the keyboard** (`visualViewport`). |

Field-note cross-links:
- `hig/components/navigation/search-fields.md` (✓): search tokens, scope bars, suggestions + tokens; this page is the **field component behind them**.
- `hig/components/menus/context-menus.md` (✓): what belongs in a token's menu; **menus must not be the only path**.
- `hig/patterns/entering-data.md` (✓): prefer selection/suggestions over free typing; validation timing.
- `hig/patterns/drag-and-drop.md` (✓) and `undo-and-redo.md` (✓): moving tokens between fields; undo removal.
- `hig/components/menus/buttons.md` (✓ CRITICAL): chip buttons, remove buttons, hit regions; `hig/foundations/color.md` (✓ CRITICAL): selected-chip contrast.
- Not yet ingested: **Text fields** (the base control).
- No conflict with a field note.

## Checklist
- [ ] Typed text becomes a token on **comma** and at least one more trigger (**Enter**); paste and blur also commit.
- [ ] Tokens can be **selected, deleted (Backspace twice), reordered and moved between fields**, with keyboard and menu alternatives to dragging; removal is undoable.
- [ ] Suggestions appear in a **combobox/listbox** after a **comfortable delay** (debounced), and picking one inserts a token.
- [ ] Each token has a **menu** (info + edit commands) reachable by mouse and keyboard; commands also exist elsewhere.
- [ ] Token visuals: tinted chip, icon, chevron when a menu exists, **selected = accent fill + white text** with ≥ 4.5:1; invalid tokens show icon + text.
- [ ] On touch: visible remove buttons and ≥ 44 px hit regions.
- [ ] Search-term tokens follow the same behaviour and are paired with suggestions (`search-fields.md`).

## Related
- Ingested: Search fields (✓), Context menus (✓), Entering data (✓), Drag and drop (✓), Undo and redo (✓), Buttons (✓ CRITICAL), Color (✓ CRITICAL), Writing (✓), Feedback (✓ CRITICAL).
- Not yet ingested: **Text fields**.
- Developer docs: AppKit `NSTokenField`.
