# The menu bar
Source: https://developer.apple.com/design/human-interface-guidelines/the-menu-bar · Section: Components › Menus and actions · Supported platforms: **macOS and iPadOS** ("Not supported in iOS, tvOS, visionOS, or watchOS"; only the iPad and Mac icons are lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **June 9, 2025** ("Added guidance for the menu bar in iPadOS"; the only change-log row). One DocC fetch, read in full. **23 screenshots** (sent in two batches: 20, then the last 3 with the macOS section; light-mode page, hero → the Videos heading with its thumbnail and title "Elevate the design of your iPad app") were compared with the fetched text, tables and image alt text line by line: everything matches; the two batches join without a gap. **Read from the fetch only:** the **change-log row**, the video's URL, and the dark hero variants. No comparison images on the page (fetch script run; catalog IDs unchanged, total 120). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
The menu bar holds an app's **top-level menus** in a **fixed, familiar order**: *YourAppName · File · Edit · Format · View · app-specific menus · Window · Help*. Support the **system menus and their order and standard shortcuts**, **always show the same items** (disable, never hide), use **short one-word menu titles**, put **every custom command in an app-specific menu** even when it exists elsewhere, and on iPad (where the bar is often hidden) **make every function reachable from the UI too**. macOS adds the Apple menu (leading) and **menu bar extras** (trailing).

## Rules

### Framing (intro)
- **macOS** users know the menu bar and rely on it to **learn what an app does and find commands**; to feel at home, **provide a consistent menu bar experience**.
- **iPad** menu bar menus are **similar to Mac's**: same order, familiar item sets; adopting the Mac structure lets people **understand and use the iPad menu bar immediately**. **Keyboard shortcuts in iPadOS use the same patterns as macOS** (see *Keyboards › Standard keyboard shortcuts*).
- Menus in the menu bar **share most appearance and behaviour characteristics of all menus** (labelling and organising rules: *Menus*).
- Illustration: an iPad app window with the menu bar at the top and the **Edit menu open** (Undo dimmed, Redo, Cut, Copy, Paste, Delete, Find with shortcuts) **(from screenshot)**.

### Anatomy
When present, menus appear **in this order**:
1. ***YourAppName*** (you supply a **short version of the app's name** as the title)
2. **File**
3. **Edit**
4. **Format**
5. **View**
6. **App-specific menus, if any**
7. **Window**
8. **Help**
- macOS adds **the Apple menu on the leading side** and **menu bar extras on the trailing side** (see macOS).

### Best practices
- **should** **Support the default system-defined menus and their ordering.** People expect a familiar order; the **system often implements standard items** for you (with text selected in a standard text field, **Edit › Copy** becomes available).
- **must** **Always show the same set of menu items.** Visible items **teach what actions the app supports** even when unavailable in context. **If an item isn't actionable, disable it instead of hiding it.**
- **should** **Represent item actions with familiar icons**: **the same icons as the system** for Copy, Share, Delete wherever they appear (*Standard icons*, *Menus*).
- **should** **Support the keyboard shortcuts defined for the standard items you include** (Copy, Cut, Paste, Save, Print). **Define custom shortcuts only when necessary.**
- **should** **Prefer short, one-word menu titles.** Display sizes and menu bar extras affect spacing; one-word titles **take little space and scan easily**. **If more than one word, use title-style capitalisation.**

### App menu
Lists items that apply to **the whole app or game**, not a task, document or window; the menu bar shows **the app name in bold**. Typical items, in order:

| Menu item | Action | Guidance |
|---|---|---|
| About *YourAppName* | Shows the About window (copyright, version) | short name of **16 characters or fewer**; **no version number** |
| Settings… | Opens your settings window, or your app's page in iPadOS Settings | **app-level settings only**; document-specific settings go in the **File** menu |
| Optional app-specific items | Custom app-level setting/configuration actions | list **after Settings, in the same group** |
| Services (macOS only) | Submenu of services from the system and other apps for the current context | |
| Hide *YourAppName* (macOS only) | Hides the app and its windows, then activates the most recently used app | same short app name as About |
| Hide Others (macOS only) | Hides all other apps and windows | |
| Show All (macOS only) | Shows all other apps and windows behind yours | |
| Quit *YourAppName* | Quits; **Option** changes it to **Quit and Keep Windows** | same short app name as About |
- **should** **Display About first**, with **a separator after it** so it sits **alone in a group**.

### File menu
Commands to **manage the files or documents** the app supports. **If the app handles no files, rename or remove this menu.** Typical items, in order:

| Menu item | Action | Guidance |
|---|---|---|
| New *Item* | Creates a document, file or window | *Item* names the type the app creates (Calendar: *Event*, *Calendar*) |
| Open | Opens the selected item or shows an interface to pick one | if a separate interface is needed, **an ellipsis follows** (more input required) |
| Open Recent | Submenu of recent documents; usually includes **Clear Menu** | list names people recognise, **no file paths**, **most recent first** |
| Close | Closes the current window/document; **Option** → **Close All**; in a tab window **Close Tab replaces Close** | in tab windows consider **Close Window** |
| Close Tab | Closes the current tab; **Option** → **Close Other Tabs** | |
| Close File | Closes the file and its windows | support it if the app can open **several views of one file** |
| Save | Saves the document | **autosave periodically** so people needn't choose Save; prompt a **name and location** for a new document; for several formats prefer **a pop-up menu in the Save sheet** |
| Save All | Saves all open documents | |
| Duplicate | Duplicates the document, both stay open; **Option** → **Save As** | **prefer Duplicate** to Save As, Export, Copy To, Save To (they don't clarify the relationship to the original) |
| Rename… | Renames the current document | |
| Move To… | Choose a new location | |
| Export As… | Asks name, location, format; **the current document stays open, the exported file doesn't open** | reserve it for **formats the app doesn't typically handle** |
| Revert To | With autosave: submenu of recent versions and a version-browser option; the chosen version **replaces** the current document | |
| Page Setup… | Panel for paper size and orientation; a document can save them | include it for **document-specific** print parameters; **global** ones (printer) or **frequently changed** ones (copies) belong in the Print panel |
| Print… | Opens the Print panel (print, fax, PDF) | |

### Edit menu
Changes to **content in the current document or text container** and **Clipboard** commands; useful even in apps that aren't document-based.
- **should** **Decide whether Find items belong in Edit**: if the app searches for files or other objects, **Find may fit File better**.
- Typical top-level items, in order:

| Menu item | Action | Guidance |
|---|---|---|
| Undo | Reverses the previous user operation | **name the target**: "Undo Paste and Match Style", "Undo Typing" |
| Redo | Reverses the previous Undo | "Redo Paste and Match Style", "Redo Typing" |
| Cut | Removes the selection and stores it on the Clipboard | |
| Copy | Duplicates the selection onto the Clipboard | |
| Paste | Inserts the Clipboard at the insertion point; contents stay, so **Paste can repeat** | |
| Paste and Match Style | Pastes matching the surrounding text style | |
| Delete | Removes the selection **without** using the Clipboard | **Delete, not Erase or Clear** (it equals the Delete key, so naming must match) |
| Select All | Highlights all selectable content | |
| Find | Submenu: **Find, Find and Replace, Find Next, Find Previous, Use Selection for Find, Jump to Selection** | |
| Spelling and Grammar | Submenu: **Show Spelling and Grammar, Check Document Now, Check Spelling While Typing, Check Grammar With Spelling, Correct Spelling Automatically** | |
| Substitutions | Submenu of automatic-substitution toggles: **Show Substitutions, Smart Copy/Paste, Smart Quotes, Smart Dashes, Smart Links, Data Detectors, Text Replacement** | |
| Transformations | Submenu: **Make Uppercase, Make Lowercase, Capitalize** | |
| Speech | Submenu: **Start Speaking, Stop Speaking** | |
| Start Dictation | Opens dictation; **the system adds it at the bottom of Edit** | |
| Emoji & Symbols | Character Viewer; **the system adds it at the bottom of Edit** | |

### Format menu
Adjusts **text formatting** in the current document or text container; **omit it if the app has no formatted text editing**. Top-level items, in order:
- **Font**: submenu **Show Fonts, Bold, Italic, Underline, Bigger, Smaller, Show Colors, Copy Style, Paste Style**.
- **Text**: submenu **Align Left, Align Center, Justify, Align Right, Writing Direction, Show Ruler, Copy Ruler, Paste Ruler**.

### View menu
Customises **the appearance of all the app's windows, whatever their type**.
- **Important (callout):** **no items for navigating between or managing specific windows**; the **Window menu** does that.
- **should** **Provide a View menu even if you support only a subset**: no tab bar, toolbar or sidebar but full-screen support → a View menu with **only Enter/Exit Full Screen**.
- **must** **Make each show/hide title reflect the current state**: toolbar hidden → **Show Toolbar**; visible → **Hide Toolbar**.
- Typical items, in order:

| Menu item | Action |
|---|---|
| Show/Hide Tab Bar | toggles the tab bar above the body area in a tab-based window |
| Show All Tabs/Exit Tab Overview | enters/exits an overview of all open tabs (like Mission Control) |
| Show/Hide Toolbar | toggles the toolbar's visibility |
| Customize Toolbar | opens a view to customise toolbar items |
| Show/Hide Sidebar | toggles the sidebar's visibility |
| Enter/Exit Full Screen | opens the window at full-screen size in a new space |

### App-specific menus
- Your custom menus sit **between View and Window** (Safari: **History** and **Bookmarks**).
- **should** **Provide app-specific menus for custom commands.** People look in the menu bar for app-specific commands, **especially in a new app**. **Even when commands exist elsewhere, list them in the menu bar**: easier to find, you can **assign keyboard shortcuts**, and **more accessible with Full Keyboard Access**. **Excluding commands, even rare or advanced ones, makes them hard to find.**
- **should** **Reflect the app's hierarchy** (Mail: **Mailbox, Message, Format**: mailboxes contain messages, messages contain formatting).
- **should** **Order app-specific menus from most to least general or commonly used**; people expect **menus at the leading end to be more specialised than those at the trailing end**.

### Window menu
Lets people **navigate, organise and manage the app's windows**.
- **Important (callout):** it **doesn't customise windows or close them**: customise via **View**, close via **File › Close**.
- **must** **Provide a Window menu even with one window**, including **Minimize** and **Zoom** so people using **Full Keyboard Access** can invoke them by keyboard.
- **may** **Include items to show and hide panels**; **don't** add the font or text-colour panels (the Format menu lists them).
- Typical items, in order:

| Menu item | Action | Guidance |
|---|---|---|
| Minimize | Minimizes to the Dock; **Option** → **Minimize All** | |
| Zoom | Toggles a predefined content-appropriate size and the user's size; **Option** → **Zoom All** | **avoid** using Zoom for full screen (the View menu does that) |
| Show Previous Tab / Show Next Tab | Moves between tabs in a tab-based window | |
| Move Tab to New Window | Opens the tab in a new window | |
| Merge All Windows | Combines windows into one tabbed window | |
| Enter/Exit Full Screen | Opens the window full screen in a new space | **only if the app has no View menu**; keep separate Minimize and Zoom |
| Bring All to Front | Brings all windows forward keeping location, size, layering (**same as clicking the Dock icon**); **Option** → **Arrange in Front** (neatly tiled) | |
| *Name of an open app-specific window* | Brings that window to the front | **list open windows alphabetically**; **avoid panels and modal views** |

### Help menu
Sits at the **trailing end** and gives access to **help documentation**; with **Help Book** content, macOS **adds a search field at the top**.

| Menu item | Action | Guidance |
|---|---|---|
| Send *YourAppName* Feedback to Apple | Opens Feedback Assistant | |
| *YourAppName* Help | Opens Help Book content in the Help Viewer | |
| *Additional Item* | | **separator** between primary help and extras (registration, release notes); **keep the total small** to avoid overwhelming people; or **link to extras from the help content** |
- See *Offering help* and `NSHelpManager`.

### Dynamic menu items
- A **dynamic menu item changes behaviour when chosen with a modifier key (Control, Option, Shift, Command)**: **Minimize** becomes **Minimize All** with Option. Use **in rare cases**.
- **should** **Never make a dynamic item the only way to do a task**: they're **hidden by default**, so best as **shortcuts to advanced actions available elsewhere**.
- **should** **Use them mainly in menu bar menus**; in contextual or Dock menus they're **harder to discover**.
- **should** **Require only one modifier key**: several keys while opening a menu and choosing an item are awkward and hurt discoverability (`isAlternate`).
- **Tip (callout):** macOS **sets the menu's width to the widest item, including dynamic items**.

### Platform considerations
- **iOS, tvOS, visionOS, watchOS:** not supported.

#### iPadOS
- The menu bar shows **top-level menus** for the app or game: **system menus and any custom ones**. People **reveal it by moving the pointer to the top edge or swiping down from it**; when visible it **occupies the same vertical space as the status bar**.
- Like macOS it helps people **learn what an app does, find commands and discover keyboard shortcuts**. Differences:

| | iPadOS | macOS |
|---|---|---|
| Menu bar visibility | **Hidden until revealed** | **Visible by default** |
| Horizontal alignment | **Centred** | **Leading side** |
| Menu bar extras | **Not available** | System default and custom |
| Window controls | **In the menu bar when the app is full screen** | Never in the menu bar |
| Apple menu | **Not available** | Always available |
| App menu | About, Services and app-visibility items **not available** | Always available |
- **must** **Because the bar is often hidden (full screen), let people reach all functions through the UI.** **Always offer other ways to do dynamic-item tasks** (they need a hardware keyboard). **Don't use the menu bar as a catch-all** for functionality that fits nowhere else.
- **must** **Reserve *YourAppName* › Settings for your app's page in iPadOS Settings.** If the app has its **own internal preferences**, link it with **a separate item beneath Settings in the same group**; put **other custom app-wide configuration items there too**.
- **may** **For tab-style navigation, add each tab as a View-menu item**: an extra way to navigate; consider **key bindings per tab**.
- **should** **Group items into submenus to save vertical space**: iPad rows are **taller for tapping** and some iPads are small, so use **submenus more often than on Mac**.

#### macOS
- The **Apple menu** is **always the first item on the leading side**; its system items are **always available and can't be modified or removed**. Space permitting, **menu bar extras** appear at the trailing end.
- When space is tight the system **prioritises menus and essential extras**, may **reduce the spacing between titles** and **truncate** them.
- In **full screen** the bar **typically hides until the pointer moves to the top** (*Going full screen*).

##### Menu bar extras
- An **extra** exposes app-specific functionality through **an icon shown while the app runs, even when it isn't frontmost**, on **the opposite side from the app's menus**. The system **hides extras to make room for menus**, and **may hide some if there are too many**. Illustration: the **Input** extra with its menu (**Show Emoji & Symbols, Show Keyboard Viewer**, separator, **Open Keyboard Settings**) beside Wi-Fi, Search and Control Centre icons and the clock "Mon Jun 9 9:41 AM" **(from screenshot)**.
- **may** **Represent the extra with a symbol**: your own icon or an **SF Symbol**. Icons and symbols use **black and clear** so the system can recolour them for **dark and light bars** and the **selected** state. **The menu bar is 24 pt high.**
- **should** **Show a menu, not a popover, on click**, unless the functionality is too complex for a menu.
- **must** **Let people, not your app, decide whether the extra appears**: typically a **setting in the app's settings window**; for discoverability **offer the option during setup**.
- **must not** **Rely on the extra's presence**: the system shows and hides extras, and you can't predict which others are shown or where yours sits.
- **should** **Offer the functionality in other ways too**, e.g. a **Dock menu**, which is **always available while the app runs**.

## Specs & values

| Item | Value |
|---|---|
| Menu order | YourAppName · File · Edit · Format · View · app-specific · Window · Help |
| Extras | Apple menu leading (macOS); menu bar extras trailing (macOS) |
| App name in menu | short; **≤ 16 characters** for the About item; no version number; same name in About, Hide, Quit |
| Menu titles | short, **one word** preferred; if more, title-style capitalisation |
| Unavailable items | **disabled, not hidden**; the same set always shown |
| Shortcuts | use the standard ones for standard items; custom only when necessary |
| Menu bar height (macOS) | **24 pt** (extras' icon guidance) |
| Dynamic items | one modifier key (Control, Option, Shift or Command); never the only route; mainly menu bar menus |
| iPadOS | hidden until revealed (pointer to top edge or swipe down), centred, same height as the status bar, no Apple menu/extras, window controls appear in full screen; Settings item = the app's page in iPadOS Settings; use submenus more |
| Change log | Jun 9, 2025: iPadOS menu bar guidance added |
| Developer docs | SwiftUI `CommandMenu` · UIKit "Adding menus and shortcuts to the menu bar and user interface" · AppKit `NSStatusBar` · `MenuBarExtra` (SwiftUI) · `NSHelpManager` · `isAlternate` |
| Video | "Elevate the design of your iPad app" (WWDC25) |
| Related HIG pages | Menus ✓ · Dock menus ✓ · Standard keyboard shortcuts (Keyboards; not yet ingested) |

## Visual notes (from screenshots)
- **Hero:** a red-to-pink card whose top edge carries a **menu bar** with titles **App Name · File · Edit (highlighted pill) · Format · View · Window · Help**; below **Edit** a light rounded menu lists **Undo** and **Redo** (leading icons), a hairline separator, **Cut, Copy, Paste** (with ⌘X, ⌘C, ⌘V), **Delete**, another separator, **Find** (⌘F), each with a leading symbol **(from screenshot)**. It shows the **fixed title order**, the **selected title as a pill**, **grouped commands** and **right-aligned shortcut glyphs**.
- **iPad overview:** a tablet frame with a thin bar at the top (**9:41 Mon Jun 9** at the leading side, battery at the trailing side, the menu titles **centred**) and the Edit menu open: **Undo (dimmed), Redo**, separator, **Cut, Copy, Paste, Delete** (shortcuts dimmed), separator, **Find** **(from screenshot)**. It shows the **centred titles** and **dimmed unavailable items** the page describes.
- **Tables:** each menu's guidance is a **three-column table (Menu item, Action, Guidance)**; **Format** and **View** have **two columns**; the iPadOS/macOS comparison is a **three-column table**; **callouts:** two amber "Important" cards (View, Window) and a teal "Tip" card (menu width).
- **Menu bar extras screenshot:** a desktop wallpaper with the right end of the menu bar (Input icon selected, Wi-Fi, Search, Control Centre, "Mon Jun 9 9:41 AM") and the Input menu hanging below the selected icon **(from screenshot)**.
- **Page chrome (from screenshot):** the TOC lists The menu bar · Anatomy · Best practices · App menu · File menu · Edit menu · Format menu · View menu · App-specific menus · Window menu · Help menu · Dynamic menu items · Platform considerations · Resources · Change log. The side navigation shows **The menu bar** highlighted after Pull-down buttons and before Toolbars. The last screenshot ends on the **Videos** heading; the change-log row comes from the fetch.
- **Text that is not in the fetch:** the hero and iPad-frame labels and the chrome above. **Hyphenation** in the tables comes from the page layout, not the source text.
- Nothing is measured.

## Web translation
The web counterpart is the **application menu bar** of desktop-class web apps (editors, design tools, dashboards with many commands): a `role="menubar"` at the top of the app. It is **not a site navigation bar** (`nav` + links, see `sidebars` and `tab-views.md`) and **not a header of buttons**. Use it when the app has **dozens of commands** and **desktop keyboard users**; small apps use a toolbar plus `menus.md` menus and a **command palette**.

| HIG rule | Web implementation |
|---|---|
| Top-level menus in a fixed order | `<div role="menubar" aria-label="Application">` of `role="menuitem"` triggers (`aria-haspopup="menu"`, `aria-expanded`) in the order **App · File · Edit · Format · View · custom · Window · Help** (omit what doesn't apply; **keep the order of what remains**). |
| Keyboard model | **Left/Right** move between titles (wrap), **Down/Enter/Space** open, **Up/Down** inside, **Right** opens a submenu / moves to next menu, **Left** closes a submenu / moves to previous, **Esc** closes and returns focus, **Home/End**, type-ahead; while one menu is open, hovering or arrowing to another title **switches menus without another click**. Provide a way in from the keyboard (**F10**, or **Alt** with access keys, CONV) and **visible focus** (`:focus-visible`). |
| Same set of items; disable, don't hide | Use `aria-disabled="true"` (focusable, announced, dimmed); **never remove** items by context. (Contrast with `context-menus.md`, which hides irrelevant items: the menu bar is the "teaching" surface.) |
| Standard menus, order and shortcuts | Follow the standard sets above; use the platform-natural shortcuts: **⌘ on Apple platforms, Ctrl elsewhere** (`event.metaKey`/`ctrlKey` by platform), and show them **right-aligned** in the item (`aria-keyshortcuts`). Don't shadow browser shortcuts (⌘/Ctrl+T, W, L, R, N); avoid custom ones unless needed. |
| Edit menu: Undo/Redo name the target | Item text updates: **"Undo Delete Card"**, **"Redo Typing"**; disabled with "Undo" when nothing (`undo-and-redo.md`). Use real clipboard APIs (`navigator.clipboard`, `document.execCommand` fallbacks) from **user gestures**; Cut/Copy/Paste items reflect selection state. **Delete**, not Erase/Clear. |
| File menu: Duplicate over Save As; autosave | **Autosave** with a visible "Saved" state; **Duplicate** creates a copy that opens beside the original; **Rename…**, **Move To…**, **Export As…** only for formats you don't normally handle; **Open Recent** lists names not paths, most recent first, with **Clear Menu**; items that need more input end in "…". |
| View menu: state-aware show/hide | Toggle labels flip: **Show Sidebar / Hide Sidebar**, **Show Toolbar / Hide Toolbar**; provide the menu even if it holds only **Enter/Exit Full Screen** (Fullscreen API, `going-full-screen.md`). Use `menuitemcheckbox` only when the visible state is better shown as a checkmark; then keep one convention. |
| App-specific menus for every custom command | **Every command appears in a menu**, even if it also has a button or context-menu entry; menus give discoverability, shortcuts and keyboard-only access. Mirror the product hierarchy (Mail: Mailbox › Message › Format); order **general → specialised**. |
| Window menu (multi-window) | For multi-window web apps list open windows/tabs (alphabetical), with Bring All to Front (`window.focus()` where allowed), Minimize/Zoom don't exist in browsers: offer **Enter/Exit Full Screen** in View and skip the rest; a single-window web app can omit Window. |
| Help menu, trailing | Last menu: **Help**, plus a **search field** at its top (or a "Search" item that opens the command palette), links to docs, shortcuts list ("Keyboard Shortcuts"), release notes, feedback; keep it short, separator before extras. |
| One-word, short titles; short app name | Titles like **File, Edit, View, Help**; app-name menu uses a **short name ≤ 16 characters** with **About**, **Settings…**, **Sign Out**-type app-level items (no version number in the item; version in the About dialog). |
| Dynamic (modifier) items | Rare: `Alt`/`Option` changes **Minimize → Minimize All**-style labels only while the modifier is held (listen for `keydown`/`keyup` on the open menu). **Never the only route**; offer the same task elsewhere; **one modifier**; not on touch. |
| iPadOS: hidden until revealed, everything also in UI | On the web: **the menu bar is a shortcut layer; every function also has a visible control** (toolbar, context menu, palette). On narrow/touch viewports **collapse the bar into one hamburger/"Menu" button** that opens the same structure (with submenus grouped more), because tablets need taller rows (≥ 44 px). |
| Settings item | **Settings…** (Preferences) opens your settings; document-level settings live in File. |
| Menu bar extras (macOS) | Web analogue is the **PWA app badge and system tray-like surfaces**, which are limited: use `navigator.setAppBadge`, notifications and the installed app's **shortcuts** (`dock-menus.md`, `home-screen-quick-actions.md`); **let people opt in** (a setting, or an option in onboarding), never assume the surface is present, and offer the same information inside the app. In-page "status" popovers should be **menus**, not popovers, unless the content is too complex. |
| Menu bar height/size | Row height **≥ 24 px** at desktop pointer widths (matches the 24 pt bar), **≥ 44 px** for touch targets on coarse pointers; text ≥ 13–14 px; titles readable in light and dark (`typography.md`, `color.md`). |
| Copy | Menu titles and items in **Title Case** (`writing.md`); shortcuts shown as glyphs or "Ctrl+C"; ellipsis for items needing more input. |

Field-note cross-links and conflicts:
- `hig/components/menus/menus.md` (✓): all labelling, dimming, icon, submenu and toggle rules apply; the menu bar page adds **order and content**.
- `hig/components/menus/context-menus.md` (✓): **hide vs disable is a real difference**: context menus hide irrelevant items and must duplicate commands elsewhere; the menu bar **shows all items disabled** and is where **every command must appear**. Not a conflict, two surfaces with two rules (already recorded on the context-menu and Edit-menu pages).
- `hig/components/menus/edit-menus.md` (✓): the **Edit menu's item order lives here**; Edit menus (selection popover) copy that order.
- `hig/components/menus/dock-menus.md` (✓): the Dock menu is the always-available alternative to a menu bar extra.
- `hig/patterns/undo-and-redo.md` (✓): Undo/Redo naming and dimming.
- `hig/patterns/going-full-screen.md` (✓), `multitasking.md` (✓): View › Enter/Exit Full Screen, the bar hides in full screen.
- `hig/patterns/offering-help.md` (✓): the Help menu contents.
- `hig/components/menus/buttons.md` (✓ CRITICAL): a mobile "Menu" button trigger must pass the Buttons gate.
- No conflict with a field note.

## Checklist
- [ ] Menus appear in the standard order (App · File · Edit · Format · View · custom · Window · Help; omit only what doesn't apply), with **short one-word titles**.
- [ ] Standard menus, items and shortcuts are supported; custom shortcuts don't collide with the browser's.
- [ ] Items are **always present** (disabled when not actionable); every custom command is in a menu even if it exists elsewhere.
- [ ] Undo/Redo name their target; Save is automatic; Duplicate is preferred to Save As; show/hide items reflect state.
- [ ] The menubar has the full keyboard model (arrows, open/close, type-ahead, Esc, a keyboard entry point, menu switching while open).
- [ ] Every function is reachable **without** the menu bar (toolbar, context menu, palette), especially on touch and narrow viewports where the bar collapses.
- [ ] Dynamic (modifier) items are rare, single-modifier and never the only route.
- [ ] Tray/badge-style surfaces are opt-in and duplicated inside the app.

## Related
- Ingested: Menus (✓), Context menus (✓), Edit menus (✓), Dock menus (✓), Undo and redo (✓), Going full screen (✓), Multitasking (✓), Offering help (✓), Buttons (✓ CRITICAL), Writing (✓).
- Ingested since: Toolbars (✓). Not yet ingested: Tab bars, Sidebars, Panels, Settings, Keyboards (§ Standard keyboard shortcuts), Status bars.
- Developer docs: `CommandMenu` (SwiftUI), "Adding menus and shortcuts to the menu bar and user interface" (UIKit), `NSStatusBar` (AppKit), `MenuBarExtra`, `NSHelpManager`, `isAlternate`.
- Video: "Elevate the design of your iPad app" (WWDC25).
