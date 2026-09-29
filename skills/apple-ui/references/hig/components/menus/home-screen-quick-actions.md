# Home Screen quick actions
Source: https://developer.apple.com/design/human-interface-guidelines/home-screen-quick-actions · Section: Components › Menus and actions · Supported platforms: **iOS and iPadOS only** ("No additional considerations for iOS or iPadOS. Not supported in macOS, tvOS, visionOS, or watchOS") · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**). One DocC fetch, read in full. 3 screenshots (hero → the page footer) were compared with the fetched text line by line: everything matches; they are contiguous and cover the whole page. Text that exists only inside the hero picture is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
A quick-action menu appears when a person **touches and holds an app icon** (or presses firmly on a 3D Touch device) and lists **your custom actions plus system items** (remove the app, edit the Home Screen). Offer **at least one and at most four** high-value actions, give each a **short verb-led title without the app name**, an optional subtitle and a **familiar monochrome symbol** (never an emoji), and **change them only in ways people can predict**.

## Rules

### Framing (intro)
- People get the menu by **touching and holding** an app icon; on a **3D Touch** device they press with increased pressure.
- Example: **Mail** offers actions that open the **Inbox** or the **VIP** mailbox, start a **search**, and create a **new message**.
- Besides your actions, the menu **also lists system items**: removing the app and editing the Home Screen.
- Each quick action has a **title**, an **interface icon** on the **left or right** (depends on the app's position on the Home Screen) and an **optional subtitle**. **Title and subtitle are always left-aligned in left-to-right languages.**
- An app can **update its quick actions dynamically** when new information arrives; **Messages** offers actions for **opening your most recent conversations**.

### Best practices
- **should** **Create quick actions for compelling, high-value tasks.** Maps lets people search near their current location or get directions home **without opening the app first**. People expect **every app to provide at least one** useful action; you can provide **a total of four**.
- **should** **Avoid unpredictable changes.** Dynamic actions keep things relevant (current location, recent activity, time of day, changed settings), but **the changes must be ones people can predict**.
- **should** **Give each action a succinct title that instantly communicates its result**: "Directions Home", "Create New Contact", "New Message". Add a **subtitle** only if more context is needed (Mail's subtitles say whether the Inbox and VIP folder have **unread** messages).
- **must not** **Put your app name or any extraneous information** in the title or subtitle. **Keep the text short to avoid truncation** and **plan for localization** while writing it.
- **should** **Give each action a familiar interface icon.** **Prefer SF Symbols** (see *Icons › Standard icons* for common actions; *Menus* for more).
- **should** If you design your own icon, **start from the Quick Action Icon Template** in the Apple Design Resources for iOS and iPadOS.
- **must not** **Use an emoji instead of a symbol or interface icon.** Emoji are **full colour**; quick-action symbols are **monochromatic and change appearance in Dark Mode** to keep contrast.

### Platform considerations
- **iOS, iPadOS:** nothing more than the above. **macOS, tvOS, visionOS, watchOS:** not supported (macOS has **Dock menus**).

## Specs & values
The page has **no sizes or timings**; the only number is the cap.

| Item | Value |
|---|---|
| Reveal | touch and hold the app icon (3D Touch: press with more force) |
| Maximum custom actions | **4** ("a total of four"); minimum expected: **at least 1** |
| Item anatomy | title + icon (left or right by icon position on the Home Screen) + optional subtitle; text left-aligned in LTR |
| Also in the menu | system items: remove app, edit Home Screen |
| Static vs dynamic | actions may be updated when new information arrives; changes must be predictable |
| Title | short, result-oriented verb phrase; **no app name**; localizable; must not truncate |
| Subtitle | optional; short status (e.g. unread counts) |
| Icon | SF Symbol preferred; else Quick Action Icon Template; **monochrome, adapts to Dark Mode; no emoji** |
| Developer docs | UIKit "Add Home Screen quick actions" |
| Related HIG page | Menus ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-tinted card with a rounded menu bubble listing **Item A** (triangle), **Item B** (circle), **Item C** (square) and **Item D** (diamond) above **four blurred app tiles**, the second in focus, so it reads as a menu extending upward from one icon **(from screenshot)**. It shows the **four-item cap**, a **symbol at each row's edge** and generic placeholder titles (the picture shows no subtitle).
- **Page chrome (from screenshot):** the platform strip lights only the **iPhone and iPad** icons; the TOC reads Home Screen quick actions · Best practices · Platform considerations · Resources (**no Change log**). The last screenshot ends with the top of the page footer.
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 116). Nothing is measured.
- **Text that is not in the fetch:** the hero labels and the chrome above.

## Web translation
The direct web analogue is the **Web App Manifest `shortcuts`** member: installed PWAs show the entries on **long-press of the home-screen icon (Android)**, on **right-click of the Dock/taskbar/launcher icon (desktop)** and in **Windows jump lists**. **iOS Safari home-screen web apps ignore manifest shortcuts**, so iOS users need the in-app route. Treat the page as **launcher-menu design** (shared with `dock-menus.md`).

| HIG rule | Web implementation |
|---|---|
| Touch-and-hold the icon reveals actions | `manifest.webmanifest`: `"shortcuts": [{ "name": "New message", "short_name": "Compose", "url": "/compose?source=shortcut", "icons": [{ "src": "/icons/compose-96.png", "sizes": "96x96" }] }]`. The OS draws the menu, its position and the system items (Uninstall/App info); you supply only the entries. |
| At least one, at most four | Ship **1-4 entries**; Chromium honours about **4** on Android (CONV), and extra entries are silently dropped, so **rank by likelihood** and put the most valuable first. |
| High-value tasks, no need to open the app first | Choose **cold-start tasks** (New message, Directions home, Scan, Start timer, Today). Each URL lands **directly on the task**, works **signed in and signed out** (redirect to sign-in and back, `managing-accounts.md`) and works in a normal tab. |
| Succinct titles that state the result; no app name | `name` = verb + object ("New message", "Directions home"); `short_name` = fallback, both **under ~25 characters** (CONV) so they don't truncate; **never repeat the app name** (the OS already shows it); write them in the localised manifest per language (`lang`, or serve a manifest per locale) and check the longest translation. |
| Optional subtitle | `description` is announced by assistive tech and may be shown by some launchers; keep it a **short factual status** ("3 unread"), but **don't rely on it being visible**. |
| Familiar monochrome icon; no emoji | Simple, recognisable **glyph PNGs** at the sizes the OS asks (96 × 96 source is safe, CONV) with transparent backgrounds; **no emoji-as-icon** and no SF Symbols artwork on the web (use Lucide/Phosphor drawn to the same weight, `icons.md`). Icons in shortcuts are **not recoloured for dark mode by the browser**, so check them on light and dark launcher backgrounds. |
| Dynamic but predictable updates | The manifest is **static**: changing entries means shipping a new manifest, so keep the list stable. Use **badging** (`navigator.setAppBadge(n)`) or the page's own recents for live state, and if you do vary entries (locale, plan), do it by **rules people can predict**, never randomly or by A/B test. |
| Same commands elsewhere | Every shortcut has an **in-app equivalent** (menu, command palette `⌘/Ctrl+K`, toolbar button) and a **deep link**, because iOS and most people never open the launcher menu (`dock-menus.md`). |
| Reuse existing window | With `launch_handler` (`"client_mode": "focus-existing"`) a shortcut focuses the open window instead of duplicating it (Chromium). |
| iOS and iPadOS reality | No manifest shortcuts there; give the same actions in the app's own UI, and tell native-app teams that the **UIKit `UIApplicationShortcutItem`** list is the real quick-action API (static in Info.plist, dynamic via `shortcutItems`). |

Field-note cross-links:
- `hig/components/menus/dock-menus.md` (✓): the desktop counterpart; same launcher-menu rules, plus windows listing.
- `hig/components/menus/context-menus.md` (✓): "every command also in the main UI".
- `hig/foundations/icons.md` and `sf-symbols.md` (✓): standard action icons; SF Symbols only for native Apple apps.
- `hig/foundations/writing.md` (✓): short verb-led labels and localisation.
- `hig/patterns/launching.md` (✓) and `managing-notifications.md` (✓): cold-start entry points and badges.
- `hig/getting-started/designing-for-ios.md` (✓): lists quick actions among the system integrations.
- No conflict with a field note.

## Checklist
- [ ] 1-4 shortcuts, ranked; each is a **cold-start, high-value task**.
- [ ] Titles are verb + object, **no app name**, short enough for every locale; icons are monochrome glyphs, **no emoji**.
- [ ] Any change to the list follows a **predictable rule**; live state uses the badge or in-app recents.
- [ ] Each action also exists **in the app** and as a **deep link** that works signed in or out.
- [ ] Shortcuts reuse an open window (`launch_handler`).
- [ ] iOS users are covered by the in-app route (manifest shortcuts don't show there).

## Related
- Ingested: Dock menus (✓), Context menus (✓), Icons (✓), SF Symbols (✓), Writing (✓), Launching (✓), Managing notifications (✓), Managing accounts (✓), Designing for iOS (✓).
- Ingested since: Menus (✓).
- Developer docs: UIKit "Add Home Screen quick actions" (`UIApplicationShortcutItem`).
