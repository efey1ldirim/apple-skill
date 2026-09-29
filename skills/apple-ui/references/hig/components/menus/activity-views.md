# Activity views
Source: https://developer.apple.com/design/human-interface-guidelines/activity-views · Section: Components › Menus and actions · Supported platforms: **iOS, iPadOS, visionOS** ("No additional considerations for iOS, iPadOS, or visionOS. **Not supported in macOS, tvOS, or watchOS**"; iPhone, iPad and Vision are lit on the platform strip, Mac, TV and Watch dimmed **(from screenshot)**; macOS gets share/action *extensions* instead) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 6 screenshots (light-mode page, hero → the top of the Videos list) were compared with the fetched text and image alt text line by line: everything matches; the six screenshots are contiguous. **The video title and link were read from the fetch only** (the last screenshot shows just the top edge of the thumbnail). Text that exists only inside pictures (hero, Notes screenshots) is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page's one number is the **about 70 × 70 px** icon area.

## In one line
An activity view (the **share sheet**) offers **sharing targets and actions for the current content in one system-shaped place**, opened from the **Share button**. Don't duplicate system actions, give **custom actions short verb titles** and a **symbol-style icon (~70 × 70 px)**, **exclude irrelevant activities**, and for share/action **extensions** keep the flow **short, non-modal-on-modal, familiar**, and **report progress of long work in the main app**.

## Rules

### Framing (intro)
- An activity view (often called a **share sheet**) **presents a range of tasks people can perform in the current context**: **sharing activities** (messaging), **actions** (Copy, Print) and **quick access to frequently used apps**.
- People usually open it by choosing an **Action/Share button** while viewing a page or document, or **after selecting an item**. It appears as a **sheet or a popover**, depending on **device and orientation**.
- You can add **app-specific activities** shown when people open the sheet inside your app or game. Example: **Photos** offers Copy Photo, Add to Album, Adjust Location. **By default app-specific actions are listed before** system-wide actions (Add to Files, AirPlay). People can **edit the list of actions** to show the ones they use most and add new ones.
- You can also build **app extensions** (code people install and use outside your app) for **custom share and action activities** in other apps, e.g. sharing a webpage to a specific social service. **macOS has no activity view**, but share and action **app extensions** still work on the Mac.

### Best practices
- **should not** **Duplicate common actions the activity view already provides.** A duplicate **Print** is unnecessary and confusing (people can't tell yours from the system's). If your action is **similar but app-specific**, give it a **custom title** that says what it does, e.g. **"Print Transaction"** for custom-formatted bank-transaction printing.
- **may** **Represent a custom activity with a symbol.** SF Symbols offers configurable symbols; a **custom interface icon** should be **centred in an area of about 70 × 70 pixels** (see Icons).
- **should** **Write a succinct, descriptive title for each custom action.** Too-long titles are **wrapped and possibly truncated**. Prefer **a single verb or a brief verb phrase** that says what the action does; **don't include your company or product name** in an action title. (A **share** activity is different: its title, typically a **company name**, appears **below its icon**.)
- **should** **Make activities appropriate for the context.** You **can't reorder** system tasks but you **can exclude** ones that don't apply (e.g. drop Print if printing makes no sense) and **choose which custom tasks show** at a given time.
- **must** **Open the activity view from the Share button** (people expect system activities there). **Don't provide an alternative way to do the same thing**, which would confuse people. In the Notes example the **Share button** sits **grouped with a More button** at the trailing end of the top toolbar.

### Share and action extensions
- **Share extensions** let people share the current context to **apps, social media accounts and other services**. **Action extensions** let people start **content-specific tasks** (add a bookmark, copy a link, edit an inline image, show selected text in another language) **without leaving the current context**.
- **Presentation by platform:** on **iOS and iPadOS** both appear **in the share sheet** opened by the Action button. On **macOS** people reach share extensions through a **toolbar Share button** or **Share in a context menu**; action extensions by **hovering over embedded content** (e.g. an image in a Mail compose window), a **toolbar button**, or a **quick action in a Finder window**.
- **should** **Create a familiar custom interface if needed.** For a **share** extension **prefer the system composition view** (a consistent, known sharing experience). For an **action** extension **include your app name**; if you show an interface, include **elements of your app's UI** so people see the extension and app are related.
- **should** **Streamline and limit interaction**: tasks in **just a few steps**, e.g. a share extension that **posts an image immediately with one tap or click**.
- **must not** **Place a modal view above your extension.** The system already shows it **in a modal view**; an **alert** may be necessary, but **avoid additional modal views**.
- **should** **Provide an image that communicates the extension's purpose if necessary.** A share extension **automatically uses your app icon** (confidence that your app provided it); for an action extension prefer a **symbol** or a **custom interface icon** that clearly identifies the task.
- **should** **Use your main app to show progress of a lengthy operation.** The activity view **dismisses immediately** when the task in the extension is done; if the task takes long, **continue in the background** and let people **check status in the main app**. A **notification** may report a **problem**, but **don't notify just because the task completes**.

### Platform considerations
- **iOS, iPadOS, visionOS:** no additional considerations. **macOS, tvOS, watchOS:** not supported (macOS → extensions).

## Specs & values
| Item | Value |
|---|---|
| Presentation | sheet or popover, by device and orientation |
| Trigger | Share/Action button, or after selecting an item |
| Contents | share targets (messaging, apps), actions (Copy, Print…), app-specific activities first, system-wide actions after; user-editable list |
| Duplicates | don't re-create system actions; custom title if similar ("Print Transaction") |
| Custom icon | centred in **about 70 × 70 px** (or a symbol) |
| Action title | single verb / brief verb phrase; no company or product name; wraps and may truncate |
| Share activity title | typically a company name, shown under its icon |
| Context | exclude inapplicable system tasks; choose which custom tasks to show; can't reorder system ones |
| Trigger control | the Share button only (no alternative path) |
| Extensions | share (composition view, app icon) · action (app name, symbol/icon); few steps; no modal above; progress in the main app; notify only on problems |
| Not supported | macOS (use extensions), tvOS, watchOS |
| Developer docs | UIKit `UIActivityViewController`, `UIActivity` · Foundation *App Extension Support* |
| Related HIG pages | Sheets (not yet ingested) · Popovers (not yet ingested) · Collaboration and sharing ✓ · Icons ✓ · SF Symbols ✓ |
| Video | *Design for Collaboration with Messages* (WWDC22 10015) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a rounded phone-like **sheet**: a header with a square thumbnail and **"Title"** / **"Subtitle"**; a first row of four **app tiles** (**AirDrop, Mail, Notes, Reminders**, a fifth clipped at the edge, i.e. a horizontally scrolling row); a hairline; a second row of four **round action buttons** labelled **Copy, Add Bookmark, Add to Reading List, More** **(from screenshot)**. Two rows: **share targets** above, **actions** below.
- **Share button (catalog `activity-views-01`, first image):** an iPhone showing a Notes document **"Nature Walks"** (botanical maple sketches); the top toolbar has a round **Back** button at the leading end and, at the trailing end, a **grouped pair**: the **Share** button (box with an up-arrow) and **More** (three dots) in one pill; the bottom toolbar holds a checklist, attachment, markup and compose buttons.
- **Share sheet (second image):** the same phone with the sheet open over the lower half: a header with the Notes icon and **"Nature Walks"**; row 1 **contact suggestions** as circles with initials (**MC Mei Chen, TC Tom Clark, AJ Anne Johnson, RP Ravi Patel**, each with a small green Messages badge, another clipped); row 2 **apps** (**AirDrop, Messages, Mail, Reminders**, another clipped); row 3 **actions** (**Copy, Export as Markdown, Markup, More**) **(from screenshot)**. The document behind is dimmed and the toolbar buttons greyed out.
- **Page chrome (from screenshot):** the TOC reads Activity views · Best practices · Share and action extensions · Platform considerations · Resources (**no Change log**). The side navigation now shows **Menus and actions** open with Activity views highlighted first (its children: Buttons, Context menus, Dock menus, Edit menus, Home Screen quick actions, Menus, Ornaments, Pop-up buttons, Pull-down buttons, The menu bar, Toolbars), and Navigation and search below it.
- The fetch script found **1 comparison**: `activity-views-01` (Share button → share sheet, the same Notes screen twice). Catalog total is now **113**; existing ids unchanged. No ✗/✓ pairs. Nothing is measured.
- **Text that is not in the fetch:** the hero strings and the strings inside the two phone pictures.

## Web translation
The browser's native counterpart is the **Web Share API**; the fallback is your own **share popover/bottom sheet**. Extensions map to **Web Share Target** (a PWA appearing in the system share sheet) and to **app integrations/OAuth apps**.

| HIG rule | Web implementation |
|---|---|
| Share sheet = system place for sharing | Use **`navigator.share({ title, text, url, files })`** on user gesture (HTTPS) so the **OS share sheet** opens; feature-detect (`navigator.share`, `navigator.canShare(data)` for files); treat `AbortError` (dismissed) as **not an error** (no toast); other failures fall back to the custom sheet. |
| Fallback: sheet or popover by device | If the API is missing (most desktops) show **your own** share UI: a **popover anchored to the Share button** on desktop and a **bottom sheet** on mobile (`modality.md`), with two rows like Apple's: **targets** (Messages/Email/social/Copy link…) and **actions** (Copy link, Download, Print, More). Sensible order: app-specific first, then generic. |
| Don't duplicate system actions | If the platform share sheet already offers Copy/Print/Save/AirDrop, **don't add your own duplicates next to it**; when you need a similar action, **name it specifically** ("Copy invoice link", "Print statement"). In your **fallback** sheet you must provide the basics (Copy link, Email) because the OS won't. |
| Symbol for custom activities, ~70 × 70 px | Icons for custom targets: **SVG icons from Lucide/Phosphor/Ionicons or brand glyphs, centred in a ~70 × 70 px tile** (CONV mapping of Apple's "about 70 × 70 pixels" for custom icons; use larger tiles on touch); **never Apple's SF Symbols artwork on the web** (`icons.md`). Label under the icon, one or two lines, 12–13 px (CONV). |
| Succinct verb titles, no company name | Actions: **"Copy Link", "Add Bookmark", "Export as PDF"** (verb + object, Title Case per `writing.md`); no product name in action labels ("Save to Nonplo" → "Save to workspace" only if it's a target destination). For a **share target** the label is the **service name** under its icon ("Mail", "Slack"). Wrap to two lines then truncate with a tooltip. |
| Exclude inapplicable activities; choose custom ones by context | Show only actions valid for **this item and this user** (no "Print" for a live map; no "Export" without permission; disable with reason, `feedback.md`); order by relevance; hide targets the device can't use, but always keep the Copy link path. |
| Use the Share button | **One Share button** (consistent icon: box + up-arrow or the three-node share glyph; `aria-label="Share"`), same place in every content view (toolbar, trailing end, grouped with More as in the Notes example); don't provide a second route (a "Send" link and a Share button that do the same). Keyboard: Enter/Space opens; Esc closes; focus returns to the button. |
| Share targets (extensions on the web) | To appear in the OS share sheet, a **PWA declares `share_target`** in its manifest (`action`, `method`, `enctype`, `params` for title/text/url/files); the **receiving page** (a short compose/confirm screen) shows what was shared, the destination, and a single primary action. |
| Share extension UI | Prefer a **simple composition screen you recognise** (title, text area, preview, **Post**); pre-fill from the shared content; the app **name and icon** visible; **one tap to complete** when nothing else is needed (e.g. save to reading list). |
| Action extension UI | Name the action with your app name in context ("Save to Notes"), a **symbol** for the task; open **content-specific tasks in place** (a popover/side panel), not a full navigation away; return people to where they were. |
| Streamline and limit interaction | Few steps (1–3); defaults preselected; no account settings mid-flow; remembers last destination; no confirmation dialogs unless irreversible (`feedback.md`, `undo-and-redo.md`). |
| No modal above the extension | Don't stack a second modal over the share sheet/popover; errors appear **inline** in the sheet or as an alert **only if necessary** (`modality.md`); the sheet is itself dismissible. |
| Purpose image / app icon | Share targets show **their app or service icon**; custom action targets show a **task symbol**; provide `alt=""` (decorative) plus the visible label so screen readers read the label once. |
| Progress of a lengthy operation lives in the main app | After starting an upload/export from the sheet, **close it immediately** with a quiet confirmation ("Sharing started"), **continue in the background** (a service worker/upload queue), show status in a **persistent place** (a downloads/activity list, `loading.md`), and **notify only on problems** (`managing-notifications.md`): don't send a "done" notification for every completion. |
| Confirmations | After **Copy Link** show a **quiet status** ("Link copied", `role="status"`, ~2–4 s, CONV) and keep the sheet or close it; never an alert for a routine success (Feedback gate). |
| Accessibility | Sheet/popover is `role="dialog"` (modal only if it traps focus) with a label ("Share"); rows are lists of buttons with visible labels; arrow keys move within a row; Esc closes; focus returns; contrast and 44 px targets; reduced-motion sheet transitions. |

Field-note cross-links:
- `hig/patterns/collaboration-and-sharing.md` (✓): the **share sheet with a permissions summary line** ("Only invited people can edit.") sits **inside this component**; the two pages describe the same sheet from two angles.
- `hig/foundations/icons.md` and `sf-symbols.md` (✓): the **web icon rule** (never SF Symbols artwork; use Lucide/Phosphor/Ionicons) applies to every custom activity icon here.
- `hig/patterns/feedback.md` (CRITICAL), `modality.md`, `loading.md`, `managing-notifications.md`, `undo-and-redo.md`: status after copy, no modal-on-modal, background progress, notification etiquette, undo.
- `hig/patterns/file-management.md`, `printing.md`: Print/Save/Export actions already offered by the platform; `drag-and-drop.md`: share targets can also be drop targets.
- `hig/foundations/writing.md`: action titles (verb + object, Title Case); the ~70 px icon tile follows `layout.md` spacing.
- No conflict with a field note.

## Checklist
- [ ] A single Share button (labelled "Share", consistent icon and position) opens `navigator.share` where available and a custom popover/bottom sheet otherwise; cancelling is silent.
- [ ] The fallback sheet has two clear rows (targets, actions), app-specific first, with Copy Link and Email at minimum.
- [ ] No duplicate of an action the OS sheet already offers; similar custom actions have specific titles ("Copy invoice link").
- [ ] Action titles are single verbs or short verb phrases without company/product names; share targets show the service name under the icon.
- [ ] Custom icons are SVG (never SF Symbols artwork), centred in a ~70 × 70 px tile, with a visible label.
- [ ] Only activities valid for the current item and user are shown; disabled ones state why.
- [ ] A PWA that should receive shares declares `share_target`; the receiving screen is a short, familiar composition/confirm view.
- [ ] Share and action flows finish in a few steps, without a modal on top of the sheet.
- [ ] Long operations close the sheet, run in the background and show status in a persistent place; notifications are for problems only.
- [ ] Routine success ("Link copied") is a quiet status message, not an alert.
- [ ] The sheet/popover is keyboard-operable, labelled, restores focus and respects reduced motion.

## Related
- Ingested: Collaboration and sharing (✓), Icons (✓), SF Symbols (✓), Feedback (✓ CRITICAL), Modality (✓), Loading (✓), Managing notifications (✓), Undo and redo (✓), File management (✓), Printing (✓), Drag and drop (✓), Writing (✓), Layout (✓ CRITICAL).
- Ingested since: Buttons (✓ CRITICAL: the Share button rules). Not yet ingested: **Sheets**, **Popovers**.
- Developer docs: see Specs & values. Video: *Design for Collaboration with Messages* (WWDC22 10015).
