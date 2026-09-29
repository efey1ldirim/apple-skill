# Settings
Source: https://developer.apple.com/design/human-interface-guidelines/settings · Section: Patterns · Supported platforms: all six on the platform strip (specific guidance for macOS and watchOS) · Ingested: 2026-09-29 · Apple last updated: 2024-06-10 (guidance reorganised into new topics; game-specific examples added; the change log has that single entry). One DocC fetch, read in full. 5 screenshots (dark-mode page, hero → Change log) were compared with the fetched text line by line: everything matches; the five screenshots are contiguous. **The change-log row is visible in the last screenshot and matches the fetch.** The page has no text inside images and no videos. Only page chrome is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
Most people should never need settings: ship **good defaults**, offer **few** settings, keep frequently changed ones **in context** (in the screen they affect), put only **general, rarely changed** options in a settings area, **respect the system's global settings** instead of duplicating them, and make settings open the way people expect.

## Rules

### Framing (intro)
- The system **Settings app** (all Apple platforms) covers system appearance, network, accounts, accessibility, language and region. On some platforms it also lists **per-app** settings, often for **location, microphone/camera access, and integration with notifications, Siri or Search**.
- An app or game may provide **its own settings area** for **general** settings that affect the whole experience (e.g. **interface style**, **game-saving behaviour**).
- Settings that affect **only one task** belong **inside that task**, so people don't have to leave the experience.

### Best practices
- **should** **Provide defaults that give the best experience to the most people.** Example: a game should **maximise performance for the device automatically** rather than ask players after launch (*Improving your game's graphics performance and settings*). With good defaults, people may need **no adjustments before they start enjoying** the app.
- **should** **Minimise the number of settings.** Control is welcome, but **too many settings** make the experience less approachable and a particular setting **hard to find**.
- **must** **Make settings available in the ways people expect.** With a physical keyboard, **Command-Comma (,)** opens an app's settings; in a **game**, players often use **Esc**.
- **should not** **Use settings to ask for setup information you can get another way.** A game can **detect a connected controller** instead of asking; an app can **detect Dark Mode**.
- **must** **Respect systemwide settings; don't add redundant versions to your settings area.**
  - People manage **global options** (accessibility accommodations, scrolling behaviour, authentication methods) in the **system** Settings and expect **every app to follow them**.
  - A custom copy **confuses**: it suggests the system setting might not apply to your app, and that changing your copy might affect **other apps**.

### General settings
- **should** **Put general, infrequently changed settings in the custom settings area.** Opening it means **suspending** what you're doing, so include only options people **don't change all the time**. Examples: window configuration; game-saving behaviour or keyboard mappings; account-related options.

### Task-specific options
- **should** **Let people change task-specific options without going to settings.** Showing or hiding parts of a view, **reordering** a collection, **filtering** a list: put these **in the screens they affect**, where they're **discoverable and convenient**. A separate settings area **disconnects the option from its context**, forces people to **suspend the task**, and **hides the result** until they return.
- **Note (aside):** in **games**, players adjust their approach to a task **as part of gameplay**, not as a settings option.

### System settings
- **should** **Add only the most rarely changed options to the system Settings app.** If it makes sense, provide a **button that opens it directly** from your interface.

### Platform considerations
- **iOS, iPadOS, tvOS, visionOS:** no additional considerations.
#### macOS
- Choosing **Settings** in the app's **App menu** opens the app's **custom settings window**; typically a **toolbar with buttons that switch between panes**, each holding a group of related settings.
- **should** **Put a Settings item in the App menu** (`the menu bar › App menu`), **not** as a settings button in a window toolbar (it takes space from frequently used commands). If there are **document-level** options, add that item to the **File menu** instead.
- **should** **Dim the settings window's minimise and maximise buttons.** Command–Comma opens it quickly (no need to park it in the Dock) and the window **sizes itself to the current pane**.
- **must** **Use a noncustomizable toolbar that stays visible and always shows the active pane's button.** It identifies the customisable areas and helps navigation; **a stable settings interface** helps people find things.
- **should** **Update the window title to the visible pane.** A single-pane window is titled ***App Name* Settings**.
- **may** **Restore the most recently viewed pane** on opening: people often adjust related settings more than once.
#### watchOS
- Apps and games **don't add custom settings to the system Settings app**. Alternatives: a **small number of essential options at the bottom of the main view**, or a **More menu** to reconfigure objects.

## Specs & values
The page has **no numbers**. Concrete facts:

| Item | Value |
|---|---|
| Where a setting lives | task-specific → in the task/screen · general and rarely changed → custom settings area · rarest → system Settings app |
| Open shortcut | ⌘, (Command-Comma) with a keyboard; Esc in games |
| Global settings to respect | accessibility accommodations · scrolling behaviour · authentication methods (and appearance, e.g. Dark Mode) |
| Auto-detect instead of asking | connected controller/accessory · Dark Mode |
| macOS entry | Settings item in the App menu (document-level items in File menu); not a toolbar button |
| macOS window | minimise/maximise dimmed · window sizes to the pane · noncustomizable toolbar with active button highlighted · title = pane name (or "App Name Settings") · restore last pane |
| watchOS | no custom Settings entries; essentials at the bottom of the main view or a More menu |
| Developer docs | SwiftUI `Settings` · Foundation `UserDefaults` · *Preference Panes* · *Improving your game's graphics performance and settings* |
| Related HIG pages | Onboarding ✓ · App menu, File menu (The menu bar ✓) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a large gear (many teeth, a hollow hub with spokes), over construction circles.
- **Note aside (from screenshot):** a grey rounded box (not a warning colour) about games.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Settings · Best practices · General settings · Task-specific options · System settings · Platform considerations · Resources · Change log.
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 105). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above.

## Web translation
For web apps and PWAs: an **account/preferences area**, per-feature options in context, and OS-level integration. Pair with `field-notes/components.md` § Settings list (the iOS-style grouped rows) and `hig/patterns/entering-data.md`.

| HIG rule | Web implementation |
|---|---|
| Good defaults | Preselect from the platform: theme from `prefers-color-scheme`, language/locale from `navigator.language`/`Intl`, timezone from `Intl.DateTimeFormat().resolvedOptions().timeZone`, reduced motion/contrast/data from media queries, notification and permission state from the APIs; the product works with **zero settings visited**. |
| Minimise the number | Audit: every setting needs a reason, an owner and a measured need. Merge, remove or auto-decide; group into ≤ ~5–7 sections (CONV); search settings when there are many (`searching.md`). No "power user" dumping ground. |
| Available the way people expect | Settings reachable from the **account/avatar menu** on the web, plus a keyboard shortcut (**⌘/Ctrl + ,** is common in desktop web apps; handle carefully so it doesn't fight browser shortcuts, `preventDefault` only when your app is focused), and from a command palette; in games/kiosk views, **Esc** opens the pause/settings menu. Deep-linkable URLs per section (`/settings/notifications`). |
| Don't ask what you can detect | Never ask for theme, language, region, timezone, reduced-motion, connected device or permission state that the browser reports; detect and only offer an **override** ("Follow system / Light / Dark"). |
| Respect systemwide settings; no redundant copies | Don't build your own reduce-motion, high-contrast, text-size or scrolling settings that shadow the OS: **honour** `prefers-reduced-motion`, `prefers-contrast`, `prefers-color-scheme`, `prefers-reduced-transparency`, browser zoom and text scaling. If you must offer an override (theme), label it "Follow system" first. Authentication methods (passkeys, biometrics) are managed by the OS/browser: link to instructions rather than re-implementing (`managing-accounts.md`). |
| General, infrequent settings only | The settings area holds profile/account, language, billing, integrations, data export/delete, privacy and notification preferences, layout defaults; frequently changed things live elsewhere. |
| Task-specific options in context | Sort/filter/group/reorder, view density, show/hide columns, list vs grid: put them **in the view** (toolbar, header controls, popover) with the result visible immediately, persisted per view; never in the Settings page. |
| Rarely changed → system settings | Where the OS/browser owns a setting (notification permission, camera/mic, location, autoplay, cookies), show your state and a **"Manage in browser settings" help link**; for native shells a button that opens the OS settings page. |
| macOS: Settings in the App menu, not toolbar | Web analogue: the Settings entry is in the **user/account menu** (or app menu), not a permanent toolbar button; document-level options live in that document's ⋯/File menu (`file-management.md`, `printing.md`). |
| Settings window behaviour | Present settings as a **page** (or a wide **dialog with a left nav** on desktop) with **stable navigation** (left rail or tab strip that never changes and highlights the active section), a **title that matches the visible section**, no minimise/expand gimmicks, and **restore the last visited section** on return. On mobile, a list → detail push navigation (`modality.md`: not stacked sheets). |
| Apply immediately | Prefer **autosaving controls** (switches and selects apply on change with quiet confirmation, `feedback.md`) over a Save button; Save/Cancel only for multi-field forms or destructive/expensive changes. |
| Settings list look | Use the field-note Settings list: grouped rounded rows, hairline separators, 52 px rows, one filled button per screen; switches on the trailing side; helper text under groups. |
| watchOS: essentials at the bottom or in a More menu | For small/glanceable surfaces keep 2–3 essential options at the bottom of the main view, everything else behind a **More** button (`layout.md`). |
| Accessibility | Controls are real form elements with labels, groups in `<fieldset>/<legend>` or `role="group"`, section headings, keyboard order follows the visual order, focus lands on the section heading after navigation, live region only for confirmations. |

Field-note cross-links:
- `field-notes/components.md` § Settings list (Group/Row recipes) and § Fields: the visual grammar for the settings screen; **compatible** with these rules (grouped, few, quiet).
- `hig/patterns/entering-data.md`: defaults, choices over typing, dynamic validation for any settings form.
- `hig/patterns/managing-notifications.md`: the notification settings screen is the canonical "in-app settings that mirror the OS setting", and marketing opt-in lives there.
- `hig/patterns/managing-accounts.md`: account options are the standard "general setting"; deletion entry point lives here.
- `hig/patterns/onboarding.md`: postpone non-essential setup; defaults beat a setup wizard.
- `hig/foundations/accessibility.md`, `dark-mode.md`, `color.md`: respect system appearance and accessibility settings; don't duplicate them.
- `hig/patterns/feedback.md` (CRITICAL): apply-on-change confirmations are quiet status, errors inline.
- `hig/patterns/searching.md`: search inside large settings.
- No conflict with a field note.

## Checklist
- [ ] The product works well with **no settings changed**; defaults come from the platform and are not asked again.
- [ ] Every setting has a reason; the total is small; large sets are searchable and grouped.
- [ ] Task-specific options (sort, filter, density, view toggles) sit in the view, not in Settings.
- [ ] No custom copy of an OS/browser setting (theme follows system by default; reduced motion, contrast, text size honoured, not re-asked).
- [ ] Settings open from the account/app menu, a keyboard shortcut and deep links; games/kiosks open from Esc.
- [ ] Stable navigation with the active section highlighted, a matching title, the last section restored.
- [ ] Controls apply immediately with quiet confirmation (or a clear Save for multi-field changes); errors are inline.
- [ ] OS-owned permissions show their state with a link to fix them.
- [ ] On glanceable surfaces, only a few essentials appear, with the rest behind "More".
- [ ] Layout, Color and Feedback gates pass on the settings screens; the field-note Settings list is used for the visuals.

## Related
- Ingested: Onboarding (✓), Entering data (✓), Managing notifications (✓), Managing accounts (✓), Accessibility (✓), Dark Mode (✓), Feedback (✓ CRITICAL), Searching (✓), File management (✓).
- Ingested since: Disclosure controls (✓ `components/layout/disclosure-controls.md`). Ingested since: The menu bar (✓ `components/menus/the-menu-bar.md`). Not yet ingested: Toggles, Toolbars, Sidebars, Pickers.
- Developer docs: SwiftUI `Settings`, `UserDefaults`, *Preference Panes*.
