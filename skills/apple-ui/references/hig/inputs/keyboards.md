# Keyboards
Source: https://developer.apple.com/design/human-interface-guidelines/keyboards · Section: Inputs · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS** (page data; the platform section says "No additional considerations for iOS, iPadOS, macOS, or tvOS. **Not supported in watchOS**"; the intro says a physical keyboard connects to **any device except Apple Watch**) · Ingested: 2026-09-29 · Apple last updated: **June 9, 2025** (moved the game-specific key-binding guidance to the Game controls page; earlier rows: June 10, 2024, added game-specific guidance and organisational updates; June 21, 2023, visionOS guidance). **Link-only ingestion: one DocC fetch, read in full (189 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)" and the Visual notes come from the alt texts only. The page carries a **date alert** in its data ("Moved game-specific key bindings guidance to the Game controls page", 2025-06-09). Not marked critical: no token file, checker or gate. Numbers on the page: **116 rows** in the standard-shortcut table, **5 rows** in the input-source table, **4 modifier keys**, the **fixed modifier order** (Control, Option, Shift, Command).

## In one line
A **physical keyboard** matters most on **Mac and iPad**, but any device except Apple Watch can have one, and people use it for **text, games, shortcuts and full navigation**. **Support Full Keyboard Access** (iOS, iPadOS, macOS, visionOS) and **don't build your own keyboard navigation for buttons and other controls on iPadOS**. **Respect the standard shortcuts** (never give ⌘C, ⌘V, ⌘Z, ⌘W and friends another meaning; move to a custom shortcut instead), **add custom shortcuts only for the few most frequent app-specific commands**, **prefer ⌘ as the main modifier, ⇧ as a companion, ⌥ rarely, and avoid ⌃**, **list modifiers in the order ⌃ ⌥ ⇧ ⌘**, **don't add Shift to characters that already need it**, and **let the system localise and mirror** the shortcut. **visionOS** shows the app's shortcuts in a **flat list when ⌘ is held**, so **write descriptive shortcut titles**, and it draws a **virtual keyboard overlay** (completions and controls) when a physical keyboard is connected. Game key bindings now live in **Game controls**. On the web: **one primary modifier (`metaKey` on Mac, `ctrlKey` elsewhere), no hijacking of standard or browser-reserved shortcuts, `aria-keyshortcuts`, a discoverable shortcut list, `KeyboardEvent.key` vs `.code`, rebindable single-key shortcuts (WCAG 2.1.4)**.

## Rules

### Framing (intro)
- People can connect a **physical keyboard to any device except Apple Watch**. **Mac users use one nearly all the time, iPad users often**; **many games suit a keyboard**; people may **prefer it to a virtual keyboard when typing a lot** (→ Virtual keyboards).
- Keyboard users appreciate **shortcuts that speed up interaction**. A **keyboard shortcut** = **a primary key plus one or more modifier keys (Control, Option, Shift, Command)** mapped to a command. In a **game**, the same idea is a **key binding**, often **a single key**.
- Apple defines **standard shortcuts that behave the same across the system and most apps**, so knowledge transfers. **Some apps add custom shortcuts** for their most-used commands; **most games define custom key bindings** (→ Game controls › Keyboards).

### Best practices
- **should** **Support Full Keyboard Access when possible.** It lets people **navigate and activate windows, menus, controls and system features using only the keyboard**, on **iOS, iPadOS, macOS and visionOS**. **Test it by switching it on in the system Settings app's Accessibility area.** (Developer: the WWDC21 video "Support Full Keyboard Access in your iOS app", `isFullKeyboardAccessEnabled`.)
- **should** **(Important callout) On iPadOS, don't add keyboard navigation for controls** such as **buttons, segmented controls and switches**. iPadOS supports keyboard navigation in **text fields, text views and sidebars** and offers APIs for **collection views and other custom views**, but **for controls let people use Full Keyboard Access** to **activate controls, reach every on-screen component and perform gesture-based interactions like drag and drop** (→ Focus and selection › iPadOS; developer: "Focus-based navigation").
- **should** **Respect standard keyboard shortcuts.** In most apps people rely on the shortcuts they know from other apps and the system. **If a unique action is frequent, create a custom shortcut for it instead of repurposing a standard one** that people tie to another action. **In a game**, people may expect **⌘Q to quit** but also expect to **change each game's key bindings** to their play style (→ Game controls › Keyboards).

### Standard keyboard shortcuts
- **should not** **In general, repurpose a standard shortcut for a custom action.** It **confuses people** when a known shortcut behaves differently. **Only consider redefining one if its action makes no sense in your experience**: an app **without text editing** has no need for an Italic command, so **⌘I could become Get Info**.
- People expect each shortcut in the table below to do the listed action (system-wide, so it's the baseline for every app). The table is **macOS-shaped** (Spotlight, Dock, Eject, F-keys); see Mismatches.
- The system also defines **shortcuts for localised systems, keyboards, layouts and input methods**; they **don't map to menu commands** (second table).

### Custom keyboard shortcuts
- **should** **Define custom shortcuts only for the most frequent app-specific commands.** People like shortcuts for frequent actions, but **too many new ones make the app seem hard to learn**.
- **should** **Use modifier keys the way people expect.** Examples: **⌘ while dragging moves items as a group**; **Shift while drag-resizing constrains the item to its aspect ratio**; **holding an arrow key nudges the selected item by the smallest app-defined distance until the key is released**.
- **should** **Follow the recommended use of each modifier** (table under Specs): **⌘ = main modifier**, **⇧ = secondary modifier that complements a related shortcut**, **⌥ = sparingly, for less common commands or power features**, **⌃ = avoid** (the system uses Control for many system-wide features such as moving focus and capturing screenshots).
- **should** **(Tip) Mind languages that need a modifier to produce characters.** Example: on a **French keyboard, Option-5 types "{"**. **⌘ as modifier is usually safe**; **avoid an additional modifier with characters not available on every keyboard**; **if you must use a modifier other than ⌘, use it only with alphabetic characters**.
- **must** **List modifiers in this order: Control, Option, Shift, Command** when a shortcut uses more than one.
- **should** **Don't add Shift to a shortcut whose key is the upper character of a two-character key.** People already know Shift is needed for that character, so **name the upper character**. Example: **Hide Status Bar = ⌘/ (slash)**; **Help = ⌘? (question mark), not ⇧⌘/**.
- **should** **Let the system localise and mirror your shortcuts.** The system **localises the primary and modifier keys for the connected keyboard**, and **mirrors the shortcut when your app or game switches to a right-to-left layout** (→ Right to left).
- **should not** **Create a new shortcut by adding a modifier to an existing shortcut for an unrelated command.** Example: since **⌘Z is undo**, **⇧⌘Z for an unrelated command** would confuse.

### Platform considerations
- **iOS, iPadOS, macOS, tvOS:** no additional considerations. **watchOS:** not supported.

#### visionOS
- An app's **keyboard shortcuts appear in a shortcut interface shown while the person holds ⌘ on a connected keyboard.** It is **organised like the iPad/Mac menu bar menus** in **familiar system categories (File, Edit, View)**, but **shows all relevant categories in one view** and lists **only the commands that are available and have shortcuts**.
- **should** **Write descriptive shortcut titles.** The interface is a **flat list per category, so submenu titles don't provide context**; each title must **say what it does on its own** (developer: `discoverabilityTitle`).
- **should** **Recognise that people see an overlay when using a physical keyboard.** When a keyboard is connected, the system shows a **virtual keyboard overlay with typing completion and other controls** (a recording shows two hands typing on a physical keyboard, with a virtual window above it showing the typed text and suggestions).

## Specs & values

**Modifier keys (recommended use)**
| Modifier | Symbol (alt text) | Recommended use |
|---|---|---|
| Command ⌘ | outline of a stylised clover shape | Prefer as the **main modifier** in a custom shortcut |
| Shift ⇧ | outline of an upward-pointing arrow | Prefer as a **secondary modifier** that complements a related shortcut |
| Option ⌥ | line segments suggesting a horizontally transformed Z with a short horizontal segment level with the Z's top | Use **sparingly** for less common commands or power features |
| Control ⌃ | a shallow upside-down V | **Avoid** as a modifier: the system uses it for many system-wide features (moving focus, screenshots) |

**Display order of several modifiers:** **⌃ Control, ⌥ Option, ⇧ Shift, ⌘ Command**.

**Standard keyboard shortcuts (all 116 source rows, grouped by primary key; F8, F9 and F10 share one row here, so 114 rows appear; actions in our words)**

*Space, Tab, Esc, Eject*
| Shortcut | Action |
|---|---|
| ⌘Space | Show or hide the Spotlight search field |
| ⇧⌘Space | Varies |
| ⌥⌘Space | Show the Spotlight results window |
| ⌃⌘Space | Show the Special Characters window |
| ⇧Tab | Move through controls in reverse |
| ⌘Tab | Go to the next most recently used app |
| ⇧⌘Tab | Go back through the recently used apps |
| ⌃Tab | Move focus to the next control group in a dialog, or the next table (when Tab moves between cells) |
| ⌃⇧Tab | Move focus to the previous control group |
| Esc | Cancel the current action or process |
| ⌥⌘Esc | Open the Force Quit dialog |
| ⌃⌘Eject | Quit all apps (after saving) and restart |
| ⌃⌥⌘Eject | Quit all apps (after saving) and shut down |

*Function keys*
| Shortcut | Action |
|---|---|
| ⌃F1 | Toggle Full Keyboard Access |
| ⌃F2 | Move focus to the menu bar |
| ⌃F3 | Move focus to the Dock |
| ⌃F4 | Move focus to the active (or next) window |
| ⌃⇧F4 | Move focus to the previously active window |
| ⌃F5 | Move focus to the toolbar |
| ⌘F5 | Turn VoiceOver on or off |
| ⌃F6 | Move focus to the first (or next) panel |
| ⌃⇧F6 | Move focus to the previous panel |
| ⌃F7 | Temporarily override the current keyboard-access mode in windows and dialogs |
| F8, F9, F10 | Varies (no fixed action) |
| F11 | Show the desktop |
| F12 | Hide or show Dashboard |

*Punctuation and number keys*
| Shortcut | Action |
|---|---|
| ⌘` (grave accent) | Activate the next open window of the front app |
| ⇧⌘` | Activate the previous open window of the front app |
| ⌥⌘` | Move focus to the window drawer |
| ⌘- (hyphen) | Decrease the size of the selection |
| ⌥⌘- | Zoom out when screen zooming is on |
| ⇧⌘= (equal) | Increase the size of the selection |
| ⌥⌘= | Zoom in when screen zooming is on |
| ⌘{ (left bracket) | Left-align the selection |
| ⌘} (right bracket) | Right-align the selection |
| ⌘\| (pipe) | Centre-align the selection |
| ⌘: (colon) | Show the Spelling window |
| ⌘; (semicolon) | Find misspelled words in the document |
| ⌘, (comma) | Open the app's settings window |
| ⌃⌥⌘, | Decrease screen contrast |
| ⌘. (period) | Cancel an operation |
| ⌃⌥⌘. | Increase screen contrast |
| ⌘? (question mark) | Open the app's Help menu |
| ⌥⌘/ | Turn font smoothing on or off |
| ⇧⌘3 | Capture the screen to a file |
| ⌃⇧⌘3 | Capture the screen to the clipboard |
| ⇧⌘4 | Capture a selection to a file |
| ⌃⇧⌘4 | Capture a selection to the clipboard |
| ⌥⌘8 | Turn screen zooming on or off |
| ⌃⌥⌘8 | Invert the screen colours |

*Letters*
| Shortcut | Action |
|---|---|
| ⌘A | Select everything in the document or window, or all characters in a text field |
| ⇧⌘A | Deselect everything |
| ⌘B | Bold the selection or toggle bold |
| ⌘C | Copy the selection to the clipboard |
| ⇧⌘C | Show the Colors window |
| ⌥⌘C | Copy the style of the selected text |
| ⌃⌘C | Copy the selection's formatting settings to the clipboard |
| ⌥⌘D | Show or hide the Dock |
| ⌃⌘D | Show the selected word's definition in Dictionary |
| ⌘E | Use the selection for a find |
| ⌘F | Open a Find window |
| ⌥⌘F | Jump to the search field |
| ⌃⌘F | Enter full screen |
| ⌘G | Find the next occurrence of the selection |
| ⇧⌘G | Find the previous occurrence |
| ⌘H | Hide the front app's windows |
| ⌥⌘H | Hide the windows of all other running apps |
| ⌘I | Italicise the selection or toggle italics (**listed first**) |
| ⌘I | Show an Info window (**listed a second time with a different action**) |
| ⌥⌘I | Show an inspector window |
| ⌘J | Scroll to the selection |
| ⌘M | Minimise the active window to the Dock |
| ⌥⌘M | Minimise all of the app's windows to the Dock |
| ⌘N | Open a new document |
| ⌘O | Show a dialog to choose a document to open |
| ⌘P | Show the Print dialog |
| ⇧⌘P | Show the Page Setup dialog |
| ⌘Q | Quit the app |
| ⇧⌘Q | Log out the current person |
| ⌥⇧⌘Q | Log out the current person without confirmation |
| ⌘S | Save a new document or a version of a document |
| ⇧⌘S | Duplicate the active document or start Save As |
| ⌘T | Show the Fonts window |
| ⌥⌘T | Show or hide a toolbar |
| ⌘U | Underline the selection or toggle underline |
| ⌘V | Paste the clipboard at the insertion point |
| ⇧⌘V | Paste as (e.g. Paste as Quotation) |
| ⌥⌘V | Apply one object's style to the selection |
| ⌥⇧⌘V | Paste and apply the surrounding text's style to the inserted object |
| ⌃⌘V | Apply formatting settings to the selection |
| ⌘W | Close the active window |
| ⇧⌘W | Close a file and its associated windows |
| ⌥⌘W | Close all of the app's windows |
| ⌘X | Cut: remove the selection and store it on the clipboard |
| ⌘Z | Undo the previous operation |
| ⇧⌘Z | Redo (when Undo and Redo are separate commands rather than toggled with ⌘Z) |

*Arrow keys*
| Shortcut | Action |
|---|---|
| ⌘→ | Change the keyboard layout to the current Roman-script layout |
| ⇧⌘→ | Extend the selection to the next semantic unit, usually the end of the line |
| ⇧→ | Extend the selection one character right |
| ⌥⇧→ | Extend the selection to the end of the current word, then the next word |
| ⌃→ | Move focus to another value or cell in a view such as a table |
| ⌘← | Change the keyboard layout to the current system-script layout |
| ⇧⌘← | Extend the selection to the previous semantic unit, usually the start of the line |
| ⇧← | Extend the selection one character left |
| ⌥⇧← | Extend the selection to the start of the current word, then the previous word |
| ⌃← | Move focus to another value or cell in a view such as a table |
| ⇧⌘↑ | Extend the selection upward to the next semantic unit, usually the start of the document |
| ⇧↑ | Extend the selection to the line above, at the same horizontal position |
| ⌥⇧↑ | Extend the selection to the start of the current paragraph, then the next paragraph |
| ⌃↑ | Move focus to another value or cell in a view such as a table |
| ⇧⌘↓ | Extend the selection downward to the next semantic unit, usually the end of the document |
| ⇧↓ | Extend the selection to the line below, at the same horizontal position |
| ⌥⇧↓ | Extend the selection to the end of the current paragraph, then the next (paragraph terminator included in cut, copy, paste) |
| ⌃↓ | Move focus to another value or cell in a view such as a table |

**Localisation-related shortcuts (5 rows)**
| Shortcut | Action |
|---|---|
| ⌃Space | Toggle between the current and last input source |
| ⌃⌥Space | Switch to the next input source in the list |
| [modifier]⌘Space | Varies |
| ⌘→ | Change keyboard layout to the current Roman-script layout |
| ⌘← | Change keyboard layout to the current system-script layout |

| Item | Value |
|---|---|
| Keyboard shortcut | primary key + one or more of ⌃ ⌥ ⇧ ⌘; game version = key binding, often one key |
| Full Keyboard Access | iOS, iPadOS, macOS, visionOS (**not tvOS, not watchOS**); toggle: Settings › Accessibility, or **⌃F1** on Mac |
| iPadOS keyboard navigation | text fields, text views, sidebars (+ APIs for collection and custom views); **not for buttons, segmented controls, switches** |
| Modifier order | ⌃ → ⌥ → ⇧ → ⌘ |
| Modifier drag examples | ⌘ = move as group; ⇧ = keep aspect ratio; arrow key held = nudge by the app's smallest unit |
| visionOS | shortcut interface on holding ⌘; flat list with File/Edit/View categories; `discoverabilityTitle`; virtual keyboard overlay with completions |
| Developer docs | SwiftUI `KeyboardShortcut` · SwiftUI "Input events" · UIKit "Handling key presses made on a physical keyboard" · AppKit "Mouse, Keyboard, and Trackpad" · `isFullKeyboardAccessEnabled` · `discoverabilityTitle` · "Focus-based navigation" |
| Video (link only, not watched) | Support Full Keyboard Access in your iOS app (WWDC21 10120) |
| Apple's Related list | Virtual keyboards (✓), Entering data (✓), Pointing devices |
| Other links in the text | Game controls (✓), Focus and selection (✓), The menu bar (✓), Right to left (✓) |
| Change log | Jun 9 2025: game key-binding guidance moved to Game controls · Jun 10 2024: game guidance added, organisational updates · Jun 21 2023: visionOS guidance |

## Visual notes (link-only: from alt text, no screenshots)
- **Hero:** a sketch of a keyboard over rectangular and circular grid lines, **tinted purple** (alt). Light and dark variants exist.
- **Modifier symbols:** four small **line glyphs** in the table (Command clover, Shift arrow, Option Z-and-bar, Control caret), each with a light and a dark SVG.
- **visionOS recording:** two hands type on a physical keyboard; a **virtual window floats above the keyboard** with the entered text and suggestions.
- **Mismatches / notes:**
  1. **The standard-shortcut table is macOS-shaped** (Spotlight, Dock, Eject, function keys, screenshots, Dashboard), while the page's platform list includes iOS, iPadOS, tvOS and visionOS. It doesn't say which rows apply on those platforms (the iPad menu bar shares Mac shortcuts, see `the-menu-bar.md`).
  2. **⌘I appears twice** with different actions (italic vs Info window); the body text itself uses Get Info as its "repurpose" example.
  3. **⌘← and ⌘→ appear twice** (the main table and the localisation table) with the keyboard-layout meaning; the page gives no text-editing (line start/end) meaning for them.
  4. **F12 is listed as "hide or display Dashboard"**, a feature the page doesn't qualify.
  5. **Full Keyboard Access excludes tvOS** (the four platforms named), although tvOS can have a keyboard; on tvOS the **focus system** applies (`focus-and-selection.md`).
  6. Small typography slips in the source table: "Control- F3" (stray space), the Esc key group repeated twice, and the pipe key shown as "Pipe (|)".
- **Catalog:** the script found **0 comparisons** (hero, four modifier glyphs in a table, one video). Catalog stays **219**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
The web has real keyboard events but **no OS-level shortcut ownership**: the browser and the OS keep many combinations, so the design work is **not colliding**, **being discoverable**, and **staying accessible**. Statements about browser behaviour are background knowledge, not from the page; **verify on the target browsers**.

| HIG rule | Web implementation |
|---|---|
| Full Keyboard Access: everything reachable by keyboard | **Every interactive element is reachable with Tab and operable with Enter/Space** (native `<button>`, `<a>`, `<input>`; WCAG 2.1.1, 2.4.7); visible `:focus-visible` (`focus-and-selection.md`); no keyboard traps (2.1.2). |
| iPadOS: don't build keyboard navigation for controls; use it for text fields, text views, sidebars, collections | On the web **Tab already reaches every control**, so **don't add custom arrow-key navigation between individual buttons or switches**. Use **arrow keys only inside composite widgets** (toolbar, tabs, menu, listbox, grid) with **roving tabindex** (`focus-and-selection.md`). The Apple advice and the web agree in spirit: **the system's own keyboard route handles controls; custom navigation is for content collections**. |
| Respect standard shortcuts; don't repurpose | **Never `preventDefault()` the standard editing/navigation shortcuts** (copy, cut, paste, select all, undo/redo, find, save, print, zoom, back/forward, reload, new tab/window, close tab) **unless the page truly replaces the action** (a custom editor's own undo stack: **⌘Z / ⇧⌘Z on Mac, Ctrl+Z / Ctrl+Y or Ctrl+Shift+Z elsewhere**). **Browser-reserved combinations** (close tab/window, new tab, quit) **can't be reliably intercepted**: don't design around them. |
| Standard shortcut table is the baseline | Map the **common cross-platform equivalents**: ⌘ on Mac = **Ctrl on Windows/Linux** for **A, C, X, V, Z, F, S, P, N, O, W, B, I, U**; **⌘, → settings** (Mac convention; no universal web equivalent, so a settings menu item with the shortcut shown); **⌘? / F1 → help**; **Esc = cancel** and **⌘. = cancel** in Mac-style UIs; **Tab / ⇧Tab = move focus**; **Space/Enter activate**; **⌃Tab / ⌃⇧Tab** on the web is the browser's tab switcher, so **don't use it for control groups** (use **F6** style landmark cycling or skip links instead, **CONV**). |
| Custom shortcuts only for the most frequent app-specific commands | A **short list**; the rest go through **menus, a command palette** (`⌘K` / `Ctrl+K`, **CONV**) and visible buttons. Every shortcut has a **visible command** (menu item, button) so people can discover and mouse-click it (`the-menu-bar.md`). |
| Modifier use: ⌘ main, ⇧ secondary, ⌥ sparingly, ⌃ avoid | **One "primary modifier"**: **`event.metaKey` on Apple platforms, `event.ctrlKey` elsewhere** (detect via `navigator.userAgentData?.platform` / `navigator.platform`, **verify**); use **Shift as a companion** (⇧⌘Z = redo), **Alt/Option rarely**. **On a Mac avoid `ctrlKey` shortcuts** (Control+click is a right-click, and the system uses Control for focus and screenshots). **Avoid `altKey` + letter/number** in text contexts: on Mac Option composes characters (Option-5 → "{" on a French layout) and on Windows Alt+Ctrl = AltGr. |
| Drag modifiers (⌘ group move, ⇧ aspect ratio, arrow = smallest step) | Pointer handlers read **`event.shiftKey`** (constrain aspect) and **`metaKey`/`ctrlKey`** (multi-select / group), **`altKey`** (copy instead of move, `drag-and-drop.md`); **arrow keys nudge by one unit and Shift+arrow by a larger step (CONV: ×10)**; repeat while the key is held (**ignore `event.repeat` for toggles, allow it for nudging**). |
| Tip: characters need modifiers on other keyboards | Match **character shortcuts by `event.key`** (the produced character, layout-aware: "?" , "/") and **positional shortcuts (WASD-style games) by `event.code`**; **don't match a symbol shortcut with `shiftKey` + `code`**, which breaks on AZERTY/QWERTZ. Keep **letter shortcuts alphabetic**. |
| Order of modifiers: ⌃ ⌥ ⇧ ⌘ | **Display in one fixed order** everywhere: Mac glyphs **⌃⌥⇧⌘ + key**; on Windows/Linux write **Ctrl+Alt+Shift+Key** (**CONV**, same order). Show the shortcut **right-aligned in the menu item** and in the **tooltip** (`menus.md`, `offering-help.md`); expose it to assistive tech with **`aria-keyshortcuts="Meta+K"`** (use `Meta`/`Control` per platform). |
| Don't add Shift to an upper character | Write the shortcut as **"?"**, not "Shift+/"; match on **`event.key === "?"`** so it works on layouts where "?" is on another key. |
| System localises and mirrors shortcuts | The browser **doesn't localise** shortcut labels: **build the label from the current platform's modifier names/glyphs** and, where available, **the physical key name from `navigator.keyboard.getLayoutMap()`** (Chromium). In **RTL**, **mirror directional meaning** (ArrowLeft/ArrowRight swap for "next/previous"), not the letters (`right-to-left.md`). |
| No unrelated modifier variants of existing shortcuts | Keep families coherent: **⌘Z / ⇧⌘Z = undo/redo only**; don't reuse **Shift+Ctrl+Z** for something else (`undo-and-redo.md`). |
| Games: key bindings, ⌘Q quit, rebinding | Now covered in **`game-controls.md`** (single-key bindings, ⌘ next to Space, key proximity, **rebinding screen**, **WCAG 2.1.4**). |
| Single-character shortcuts (Apple's game key bindings, or app-wide "j/k") | **WCAG 2.1.4 Character Key Shortcuts (Level A):** a single-key shortcut must be **turn-off-able, remappable, or active only while the relevant component has focus**; ignore shortcuts **while typing in inputs, textareas, `contenteditable`** and while **IME composition** is active (`event.isComposing`). |
| visionOS: shortcuts shown on ⌘, descriptive titles | Provide a **"Keyboard shortcuts" dialog** (opened by **`?`** or from the **Help** menu, `the-menu-bar.md`) **grouped by category (File, Edit, View…)** with **stand-alone descriptive titles** ("Duplicate Slide", not "Duplicate" under a Slide submenu), listing only **commands that are available now**. Holding-⌘ overlays aren't available on the web. |
| visionOS overlay when a keyboard is connected | Keep normal **`<input>` / `<textarea>` semantics** (`type`, `inputmode`, `autocomplete`, `enterkeyhint`) so **system completion and overlays work**; **don't cover the field or reposition on focus** (`virtual-keyboards.md`). Whether Safari on visionOS shows the same overlay: **verify on a device**. |
| watchOS: no keyboard | Nothing to translate. |
| Native-only | SwiftUI `KeyboardShortcut` / `keyboardShortcut(_:modifiers:)`, UIKit `UIKeyCommand` with `discoverabilityTitle`, AppKit key equivalents, `isFullKeyboardAccessEnabled` and the OS **Full Keyboard Access** switch are native; on the web use **`keydown`/`keyup` handlers, native focusable elements, `aria-keyshortcuts`, the Keyboard Map API**. |

Field-note cross-links:
- `field-notes/*`: **no keyboard-shortcut recipe**; nothing to conflict. **Tension with web reality:** Apple's standard-shortcut table is **system-owned** (Spotlight, Dock, screenshots, Eject) and is **out of reach on the web**; the web's baseline is the **browser's reserved set**, so only the **editing and document shortcuts** in the table transfer. The **iPadOS "no keyboard navigation for controls"** advice (Important callout) is **already documented as a native-only model** in `focus-and-selection.md`; on the web every control is Tab-reachable and that is **correct**, so **no conflict**.
- `hig/inputs/game-controls.md` (✓): the **game key-binding guidance that used to live here** (§ Keyboards: single-key commands, ⌘ next to Space, key proximity, rebinding); `hig/inputs/focus-and-selection.md` (✓): **Full Keyboard Access vs focus groups**, Tab between groups, arrows inside; `hig/components/menus/the-menu-bar.md` (✓) and `menus.md` (✓): **shortcuts shown in menus**, standard sets, dynamic modifier items (one modifier); `hig/patterns/undo-and-redo.md` (✓): **⌘Z / ⇧⌘Z**; `hig/components/menus/edit-menus.md` (✓): cut/copy/paste shortcuts; `hig/components/selection-and-input/virtual-keyboards.md` (✓) and `hig/patterns/entering-data.md` (✓): **Apple's Related** pages (typing on a physical vs virtual keyboard, hints and formats); `hig/foundations/accessibility.md` (✓): **keyboard-only, don't override system shortcuts, test with Full Keyboard Access**; `hig/foundations/right-to-left.md` (✓): **mirroring**; `hig/inputs/gestures.md` (✓): **keyboard as one of "more than one way"**; `hig/patterns/playing-video.md` (✓): **Space plays/pauses** on a connected keyboard.
- Not yet ingested (linked from this page): **Pointing devices**.

## Checklist
- [ ] **Everything is reachable and operable by keyboard** (Tab, Enter/Space, Esc), with a **visible focus indicator** and **no traps**.
- [ ] **Arrow-key navigation exists only inside composite widgets** (roving tabindex), **not** between separate buttons or switches.
- [ ] **No standard editing/navigation shortcut is hijacked**; **browser-reserved combos are not used**; a custom editor keeps **⌘Z / ⇧⌘Z (Ctrl+Z / Ctrl+Y)** for undo/redo only.
- [ ] Custom shortcuts are **few, for the most frequent app-specific commands**; **every one also has a visible command**.
- [ ] **One primary modifier per platform** (`metaKey` on Apple, `ctrlKey` elsewhere); **Shift as a companion**, **Alt/Option rarely**, **Control avoided on Mac**.
- [ ] Shortcuts are **displayed in the fixed order (⌃⌥⇧⌘ / Ctrl+Alt+Shift)**, **right-aligned in menus and tooltips**, and exposed with **`aria-keyshortcuts`**.
- [ ] Symbol shortcuts are matched by **`event.key`** (no Shift + `code`); positional bindings by **`event.code`**; **letters only** with extra modifiers.
- [ ] **Single-character shortcuts** can be **turned off or remapped** (WCAG 2.1.4) and are **ignored in text fields and during IME composition**.
- [ ] A **shortcut list** (opened with `?` or Help) has **category groups and self-explanatory titles**.
- [ ] **RTL** flips the meaning of left/right arrows for previous/next.
- [ ] Game bindings follow **`game-controls.md`** (single keys, rebinding screen, no browser-reserved combos).

## Related
- Ingested: Virtual keyboards (✓), Entering data (✓), Game controls (✓), Focus and selection (✓), The menu bar (✓), Menus (✓), Undo and redo (✓), Edit menus (✓), Right to left (✓), Accessibility (✓), Gestures (✓), Playing video (✓).
- Not yet ingested (linked from this page): **Pointing devices**.
- Developer docs: SwiftUI `KeyboardShortcut` · SwiftUI "Input events" · UIKit "Handling key presses made on a physical keyboard" · AppKit "Mouse, Keyboard, and Trackpad" · `isFullKeyboardAccessEnabled` · `discoverabilityTitle` · "Focus-based navigation".
- Videos: Support Full Keyboard Access in your iOS app (WWDC21 10120).
