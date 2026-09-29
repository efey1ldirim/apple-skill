# Dock menus
Source: https://developer.apple.com/design/human-interface-guidelines/dock-menus · Section: Components › Menus and actions · Supported platforms: **macOS only** ("Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS"; only the Mac icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 3 screenshots (light-mode page, hero → the start of the page footer) were compared with the fetched text and image alt text line by line: everything matches; the three screenshots are contiguous and cover the whole page. Text that exists only inside the hero picture is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
A Dock menu appears when a person **secondary-clicks an app's or game's Dock icon** and lists **system items plus your custom ones**. Fill it with **high-value items** (open or recent windows, the few actions useful when the app isn't frontmost), **label them briefly and order them logically**, and **always offer the same commands elsewhere** (menu bar, interface): not everyone uses the Dock menu. Mac only; iOS/iPadOS have **Home Screen quick actions** instead.

## Rules

### Framing (intro)
- On a Mac, people **secondary-click an app's or game's icon in the Dock** to reveal a **Dock menu** with **system-provided and custom items**.
- System items **vary with whether the app is open**: Safari's Dock menu offers actions like **viewing a current window or creating a new window**.
- **Note (callout):** iOS and iPadOS don't have a Dock menu, but a **long press on an app icon** (Home Screen or Dock) reveals a **similar menu** of system-provided and custom items called **Home Screen quick actions** (see that page).

### Best practices
- **should** As with all menus, **label items succinctly and organise them logically** (see *Menus*).
- **must** **Make custom Dock menu items available elsewhere too.** Not everyone uses a Dock menu, so **offer the same commands in the menu bar menus or within the interface**.
- **should** **Prefer high-value custom items.**
  - List **all currently or recently open windows**, a convenient way to **jump to the window people want**.
  - Also consider **a few actions most likely to be useful when the app isn't frontmost, or when no windows are open**: **Mail** offers **getting new mail** and **composing a new message**, in addition to listing all open windows.

### Platform considerations
- **macOS:** the only supported platform. **iOS, iPadOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Reveal | secondary click on the app or game icon in the Dock |
| Content | system items (vary with open/closed state) + custom items |
| Good custom items | open/recent windows; a few actions useful when the app isn't frontmost or has no windows (Mail: Get New Mail, New Message) |
| Availability | the same commands also in the menu bar menus or the interface |
| Wording | succinct labels, logical grouping (*Menus*) |
| iOS/iPadOS equivalent | Home Screen quick actions (long press) |
| Not supported | iOS, iPadOS, tvOS, visionOS, watchOS |
| Developer docs | AppKit `applicationDockMenu(_:)` (`NSApplicationDelegate`) |
| Related HIG pages | Menus (not yet ingested) · Home Screen quick actions (not yet ingested) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a rounded light **menu bubble** whose **tail points down at the fourth of six app-icon tiles** in a Dock strip; the menu lists **Menu Item A** (trailing chevron, a submenu), **Menu Item B**, a hairline separator, **Show Recents** (trailing chevron), **Open**; **three of the six icons carry a small dot** below them (running apps) **(from screenshot)**. It shows a menu attached to an icon, system-style groups (custom items above, system items such as Open below the separator), and submenus marked by chevrons.
- **Note callout:** a grey outlined card (neutral, not a warning colour).
- **Page chrome (from screenshot):** the platform strip lights only the **Mac** icon; the TOC reads Dock menus · Best practices · Platform considerations · Resources (**no Change log**). The side navigation in these screenshots is scrolled down and shows the later **Components** groups: Presentation (Popovers, Scroll views, Sheets, Windows), Selection and input (Color wells, Combo boxes, Digit entry views, Image wells, Pickers, Segmented controls, Sliders, Steppers, Text fields, Toggles, Virtual keyboards), Status (Activity rings, Gauges, Progress indicators, Rating indicators) and System experiences (App Shortcuts…), consistent with the INDEX groups. The last screenshot ends with the top of the page footer.
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 116). Nothing is measured.
- **Text that is not in the fetch:** the hero labels and the chrome above.

## Web translation
There is no Dock on the web, but the concept, **a menu on the app's launcher icon with shortcuts to windows and quick actions**, maps to **installed PWAs and OS launchers**: the **Web App Manifest `shortcuts`** (shown on right-click or long-press of the installed app's icon in the desktop Dock/taskbar/launcher, Android home screen and Windows jump lists) and the **badge/recents** surfaces. Treat the rules as **launcher-menu design**.

| HIG rule | Web implementation |
|---|---|
| Secondary click on the app icon reveals system + custom items | Installed PWAs get the OS's own icon menu (Open/Quit, window list handled by the OS) and **your custom items** from the manifest: `"shortcuts": [{ "name": "New message", "short_name": "Compose", "description": "Start a new message", "url": "/compose?source=shortcut", "icons": [{ "src": "/icons/compose-96.png", "sizes": "96x96" }] }]`. Support varies by OS/browser; some show ~4 items (CONV), so **rank them**. |
| Label succinctly, organise logically | `name` is the full label, `short_name` the fallback (keep both **under ~25 characters**, CONV): a verb + object ("New message", "Check inbox", "Open board"); order by likelihood, no duplicates, no marketing words (`writing.md`). Icons are simple, recognisable glyphs at the sizes the OS asks for (96 × 96 px is a safe source, CONV), never SF Symbols artwork. |
| Make the same commands available elsewhere | Every shortcut has an **in-app equivalent** (menu, command palette `⌘/Ctrl+K`, toolbar button) and a **deep link URL** that works when opened from a normal browser tab; most people never open the launcher menu. |
| Prefer high-value items: open/recent windows | The OS lists open windows itself for installed apps. Your job is the **actions**: a static list can't show live "recent windows", so put **stable entry points** (Inbox, Today, New item) and use the **`launch_handler`** (Chromium-based browsers; `"client_mode": "focus-existing"`/`"navigate-existing"`) so a shortcut **reuses the existing window** instead of opening a duplicate, which is the web analogue of "jump to the window people want". |
| Actions useful when the app isn't frontmost or has no windows | Pick actions that make sense **from cold start**: "New message", "Get new mail" (as **Check for new mail**, fetching then showing the badge), "Start timer", "Scan"; each URL must **work signed in and signed out** (redirect to sign-in and back, `managing-accounts.md`) and land **directly on the task**, not the home screen. Set the app **badge** (`navigator.setAppBadge(n)`) for unread counts rather than a notification for everything (`managing-notifications.md`). |
| Mac only | The Dock menu itself is macOS-specific; on Android the same manifest `shortcuts` appear on **long-press of the home-screen icon** (the Home Screen quick actions equivalent), on Windows in the **taskbar jump list**. iOS Safari home-screen web apps **don't show manifest shortcuts**, so give iOS users the in-app route (`activity-views.md`, share sheet). |
| Accessibility and copy | Shortcut names are announced by the OS: plain words, no emoji-only labels; keep the same wording as the in-app command so voice control ("Compose") matches. |

Field-note cross-links:
- `hig/components/menus/context-menus.md` (✓): the **same "every command also in the main UI" rule**; a Dock menu is the launcher-level context menu.
- `hig/patterns/launching.md` and `multitasking.md` (✓): cold-start entry points, restoring the last state, one window vs many.
- `hig/patterns/managing-notifications.md` (✓): badges and notification etiquette; `managing-accounts.md`: shortcuts through sign-in.
- `hig/foundations/app-icons.md` and `icons.md` (✓): the shortcut icons; `writing.md`: labels.
- `hig/components/menus/buttons.md` (✓ CRITICAL): in-app buttons and menu commands that mirror the shortcuts must meet the Buttons gate (hit region, states, roles).
- No conflict with a field note.

## Checklist
- [ ] Custom launcher items are **high-value**: stable entry points and actions useful from a cold start (New …, Check …), ranked by likelihood; no filler.
- [ ] Every shortcut has the same command in the app (menu/command palette/toolbar) and a deep-link URL that works from a normal tab.
- [ ] Labels are short verb + object phrases (`name` and `short_name`); no product name repetition; icons are simple glyphs at the requested sizes.
- [ ] Shortcuts reuse an existing window (`launch_handler`) and work signed in or out (redirect and return).
- [ ] Unread/attention state uses the app badge, not a notification for every event.
- [ ] iOS users get the in-app route because manifest shortcuts don't show there.

## Related
- Ingested: Context menus (✓), Launching (✓), Multitasking (✓), Managing notifications (✓), Managing accounts (✓), App icons (✓), Icons (✓), Writing (✓), Buttons (✓ CRITICAL), Activity views (✓).
- Not yet ingested: **Menus**, **Home Screen quick actions**.
- Developer docs: `applicationDockMenu(_:)` (AppKit).
