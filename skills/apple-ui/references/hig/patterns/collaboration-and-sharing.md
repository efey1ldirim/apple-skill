# Collaboration and sharing
Source: https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing · Section: Patterns · Supported platforms: iOS, iPadOS, macOS, visionOS, watchOS (**not tvOS**: the page says "Not available in tvOS" and the platform strip shows tvOS dimmed **(from screenshot)**) · Ingested: 2026-09-28 · Apple last updated: 2023-12-05 (artwork for button placement and permission types). Change log: 2022-09-14 new page · 2023-06-21 visionOS guidance · 2023-12-05 artwork. One DocC fetch, read in full. 8 screenshots (dark-mode page, hero → change log) were compared with the fetched text line by line: the body text matches. Text that exists only inside images is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
Let the system's sharing surfaces do the heavy lifting: a **Share button** in the toolbar, a short **permission summary** ("Only invited people can edit."), a small set of simple sharing choices, and once a collaboration exists a prominent **Collaboration button** beside Share that opens a short three-part popover. Everything stays simple, responsive and focused on the content.

## Rules

### Framing (intro)
- System interfaces and the Messages app provide consistent, convenient ways to collaborate and share. Examples: dropping a document into a Messages conversation, or picking a destination in the familiar share sheet.
- After a collaboration starts, people use the app's **Collaboration button** to communicate with others, run custom actions and manage details. They also get **Messages notifications** when collaborators mention them, make changes, join or leave.
- The Messages integration and the system sharing interfaces work whether the app implements collaboration with **CloudKit**, **iCloud Drive** or a **custom solution**.
- **must** With a custom collaboration infrastructure, the app also supports **universal links** (developer doc: *Supporting universal links in your app*), otherwise these system features can't be offered.
- **SharePlay** lets people take part in the app's activities together in real time from their own devices (see the SharePlay page, not yet ingested).

### Best practices
- **should** **Put the Share button somewhere convenient, such as a toolbar**, so starting to share or collaborate is easy.
  - iOS 16: the system share sheet includes a way to choose a file-sharing method and to set permissions for a new collaboration.
  - iPadOS 16 and macOS 13: the **sharing popover** has similar appearance and function.
  - SwiftUI: present a **share link** that opens the system share sheet when chosen (`ShareLink`).
  - (Apple's illustration: a Notes document on iPhone, with the Share button prominent next to the More button in the toolbar.)
- **should** **Customise the share sheet or sharing popover if needed**, to offer the kinds of file sharing the app supports.
  - **CloudKit:** support "send copy" by passing **both** the file and the collaboration object to the share sheet. The sheet has built-in support for multiple items, so it detects the file and makes "send copy" available.
  - **iCloud Drive:** the collaboration object supports "send copy" **by default**.
  - **Custom collaboration:** support "send copy" by including a **file, or a plain-text representation of it**, in the collaboration object.
- **should** **Write short phrases that summarise the sharing permissions you support**, for example "Only invited people can edit" or "Everyone can make changes".
  - The system uses that summary as the label of a button that reveals a set of sharing options where people define the collaboration.
  - (Visual **collaboration-and-sharing-01**: the same Notes share sheet twice, with the summary line reading "Only invited people can edit." and then "Everyone can make changes.")
- **should** **Offer a few simple sharing options that make setting up a collaboration quick.**
  - Customise the view shown by the permission-summary button so its choices fit the app's collaboration features.
  - Example choices: who can access the content; whether they can edit or only read; whether collaborators can add new participants.
  - Keep the number of custom choices **to a minimum** and **group** them so they are understandable at a glance.
- **should** **Show the Collaboration button prominently as soon as collaboration starts.**
  - The system Collaboration button reminds people the content is shared and shows **who is sharing it**.
  - It usually appears after people interact with the share sheet or sharing popover, so it works well **next to the Share button**.
  - (Apple's illustration: a Notes toolbar with the Collaboration button beside Share.)
- **should** **Add custom actions to the collaboration popover only if needed.**
  - Choosing the Collaboration button opens a popover of **three sections**:
    1. **Top:** the list of collaborators and communication buttons that can open Messages or FaceTime.
    2. **Middle:** the app's own custom items.
    3. **Bottom:** a button to manage the shared file.
  - Don't overwhelm people; include only the most essential items they need while collaborating.
  - Example: Notes summarises the latest updates and gives buttons for more information about them or for viewing more activity.
- **may** **Customise the title of the collaboration-management button** if it makes sense for the app.
  - The button is titled **"Manage Shared File"** by default. It opens the management view where people change settings and add or remove collaborators.
  - With CloudKit sharing the system supplies the management view; otherwise the app builds its own.
- **may** **Post collaboration event notifications in Messages.**
  - Choose the type of event: a change in the content, a change in membership, or the mention of a participant.
  - Include a **universal link** that opens the relevant view in the app (developer doc: `SWHighlightEvent`).

## Specs & values
The page has **no sizes, timings or colours**. Its concrete facts:

| Item | Value |
|---|---|
| Collaboration popover | 3 sections: (1) collaborators + Messages/FaceTime buttons · (2) custom items · (3) manage button |
| Default title of the management button | "Manage Shared File" (customisable) |
| Example permission phrases | "Only invited people can edit" · "Everyone can make changes" |
| Example custom sharing choices | who can access · edit or read only · can collaborators add participants |
| "Send copy" support | CloudKit: pass file + collaboration object · iCloud Drive: default · custom: include a file or a plain-text version in the collaboration object |
| Share surface by platform (component page ✓ `components/menus/activity-views.md`) | iOS 16 share sheet · iPadOS 16 / macOS 13 sharing popover · SwiftUI `ShareLink` (also watchOS) |
| Custom-infrastructure requirement | universal links |
| Notification event types | content change · membership change · participant mention |
| Developer docs | Supporting universal links in your app · `ShareLink` · Shared with You · `SWHighlightEvent` |
| Videos | *Design for Collaboration with Messages* (WWDC22 10015) · *Enhance collaboration experiences with Messages* (WWDC22 10095) · *Integrate your custom collaboration app with Messages* (WWDC22 10093) |
| Related HIG page | Activity views ✓ (`components/menus/activity-views.md`) |

## Platform considerations
- **iOS, iPadOS, macOS:** no additional considerations (the iOS 16 share sheet and iPadOS 16 / macOS 13 sharing popover are described in the rules).
- **tvOS:** **not available.**
- **visionOS:**
  - By default the system supports **screen sharing** for an app running in the **Shared Space**: it streams the current window to the other collaborators.
  - If one person moves the app to a **Full Space** while sharing is in progress, the system **pauses the stream** for the others until the app returns to the Shared Space.
  - Apple points to Immersive experiences (✓ ingested).
- **watchOS:** in a SwiftUI app, use `ShareLink` to present the system share sheet.

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a large person glyph (head and shoulders inside a ring) and a smaller round badge with a checkmark overlapping at the lower-leading side, over construction circles.
- **Share button illustration (from screenshot):** an iPhone showing a Notes document "Nature Walks" with botanical leaf drawings. The top toolbar has a round back button at the leading side and, at the trailing side, **one capsule holding the Share icon and the More (•••) icon**. The content fills the screen beneath the bar.
- **Share sheet, permission summary (collaboration-and-sharing-01, light and dark) (from screenshot):**
  - A large rounded sheet in a translucent material over the document.
  - Header: a Notes app icon, the title "Nature Walks", a pill-shaped **Collaborate** control with a people glyph and up/down chevrons, and under it a one-line grey summary with a trailing chevron: "Only invited people can edit." / "Everyone can make changes."
  - Row 1, people: four circular initials avatars, each with a small green Messages badge at its lower corner and the name below it (Mei Chen, Tom Clark, Anne Johnson, Ravi Patel), the fifth partly cut off.
  - Row 2, apps: AirDrop, Messages, Mail, Reminders, a fifth cut off.
  - Row 3, actions in grey circles: Copy, Export as Markdown, Markup, More.
  - Thin separators between the three rows; the fifth item in each row is cut off at the edge, which suggests the rows scroll sideways (an inference from the image, not stated on the page).
  - The **only** difference between the two illustrations is the permission summary line.
- **Collaboration button (from screenshot):** the same Notes toolbar with a yellow **people glyph** now sits in the capsule before Share (More is a separate round button at the trailing end). The yellow accent marks that the note is shared.
- **Collaboration popover (from screenshot):**
  - A popover anchored under the Collaboration button with a small pointer.
  - Top: three equal rounded buttons **message · video · audio** (icon over a lowercase label), the first highlighted in the accent yellow.
  - Middle: a card "Latest Updates / You're all caught up!"; a heading "Current Participants" with the empty state "There are no active collaborators editing or viewing this note."; a row "Participant Cursors" with a green switch; rows "Show All Activity" and "Show Highlights", each with a trailing yellow glyph.
  - Bottom: a row "**Manage Shared Note**" with a yellow people glyph. This is Notes' customised title for the default "Manage Shared File".
  - Sections are separated by spacing in rounded grouped blocks; text is small (about the size of a menu item).
- **Page chrome (from screenshot):** TOC = Collaboration and sharing · Best practices · Platform considerations · Resources · Change log. The change-log table lists the three dated entries above.
- **Video thumbnails (from screenshot):** *Design for Collaboration with Messages*: a "Living Room" document with memoji avatars and a Messages bubble; *Enhance collaboration experiences with Messages*: a code snippet beside a sharing popover for a "Photo Shoot" document; *Integrate your custom collaboration app with Messages*: a diagram titled "Sharing collaboration document" with avatars connected to phones and a laptop.
- **Text that is not in the fetch:** only what is inside the illustrations above, the video thumbnails and the page chrome. Every heading, bold lead-in, body sentence, link and change-log row in screenshots 13–20 is in the fetched text.

## Web translation
The system share sheet, Collaboration button and Messages integration are Apple-native. The **design pattern** (a prominent share entry point, a one-line permission summary, few simple options, a visible "this is shared" indicator with a short people popover, and event notifications with deep links) carries over to any collaborative web app.

| HIG rule | Web implementation |
|---|---|
| Share button in a convenient place | Put **Share** in the page/document toolbar (top trailing), in the same place on every shareable item. Icon-only needs `aria-label="Share"`. Use the standard share glyph (`icons.md`). |
| System share sheet | Prefer `navigator.share({ title, text, url })` where it exists (mobile Safari/Chrome, also files via `navigator.canShare`). Feature-detect and fall back to a **Share popover**: Copy link, Email, Messages/WhatsApp links. Don't build a custom sheet on platforms where the system one exists. |
| Customise for the sharing types you support | Show only real options. If a "send copy" (download/export) exists, list it once in the same sheet ("Copy link" and "Send a copy" are different things). |
| Succinct permission summary | One grey line under the title of the sharing surface: "Only invited people can edit." / "Anyone with the link can view." Sentence case, ends in a period, states the **current** state, never a question. It is a button that reveals the options. Follow `hig/foundations/writing.md`. |
| Few, grouped sharing options | The options view has at most ~3–4 choices: **Who** can access (invited people / anyone with the link), **What** they can do (view / edit), **Can add people** (on/off). Group with headings, one grouping mechanism per boundary (`layout.md`); segmented control or grouped rows (field notes: Settings list). |
| Prominent Collaboration button when active | When a document is shared, show a **collaboration indicator** button next to Share: an avatar stack or people glyph that reveals who has access and who is present, with a small accent dot for "shared". It appears as soon as sharing starts and stays. `aria-label="Collaboration, 3 people"`, `aria-haspopup="dialog"`. |
| Three-part collaboration popover | (1) **People** with message/call actions, (2) **Only essential app items** (latest activity, "Show all activity", toggles for presence), (3) **Manage access** at the bottom. Popover follows the Materials gate (regular glass or thick material, vibrant text) and dismisses on Esc/outside click, focus returns to the button. Empty state text for "no one else here": short and calm. |
| Customise the management button title | Name it after the object ("Manage shared note", "Manage board access"); default to "Manage sharing". |
| Notifications with a universal link | Every collaboration notification (mention, edit, join, leave) links to a **deep link** (stable URL) that opens the exact view; email/push/in-app all use it. Choose event types deliberately: content changed · membership changed · you were mentioned. Respect the user's notification settings (`privacy.md`). |
| Custom infra needs universal links | Deep links must resolve when the app is installed and when it isn't (web fallback); support `https://` links, not custom schemes only. |
| SharePlay | Real-time co-use has no direct web equivalent in the HIG; if you build presence or live cursors, provide a toggle (Apple's popover has "Participant Cursors") and show who is present. |
| visionOS screen sharing | Sharing a window while the app moves to a Full Space pauses the stream. On the web, when a shared/streamed view goes to a mode that can't be streamed (e.g. immersive/fullscreen media), tell the viewers the stream is paused instead of freezing silently. |
| watchOS `ShareLink` | Small-screen surfaces get a single Share action that opens the system sheet; no custom multi-step sharing UI. |
| Accessibility / RTL | Sheet and popover have accessible names, focus trap while open, keyboard operable; avatar stacks list names to assistive tech; layout uses logical properties (`right-to-left.md`); permission phrases are localisable strings (no concatenation). |

Field-note cross-links:
- `field-notes/components.md` (Settings list, choice rows, segmented control): the "few, grouped options" and the permission-summary row map onto these recipes. Circle selection marks and a whole-row tap target apply to the "who can access" choice.
- `hig/foundations/writing.md`: the permission phrases are the "clear, short, active/state" copy rules; the single-sentence summary uses sentence case.
- `hig/foundations/materials.md` (CRITICAL): the share sheet and popover are the functional layer, so glass or a thick material is correct there; the document behind stays content-layer.
- `hig/foundations/privacy.md`: access to contacts (the people row) is asked only from the sharing action with a one-sentence reason; notifications respect consent.
- `hig/foundations/immersive-experiences.md`: the visionOS Shared Space/Full Space behaviour.
- No conflict with a field note.

## Checklist
- [ ] A Share entry point sits in the toolbar of every shareable item, always in the same place, with an accessible name.
- [ ] The system share (`navigator.share`) is used where available; the fallback offers only options that really exist.
- [ ] The sharing surface shows one succinct permission summary of the **current** state and it opens the options.
- [ ] Custom sharing choices are few (≈ who, what they can do, can add people) and grouped.
- [ ] As soon as an item is shared, a Collaboration indicator appears next to Share and shows that it is shared and by whom.
- [ ] The collaboration popover has people + communication on top, only essential app items in the middle, manage at the bottom.
- [ ] The manage button has a meaningful title for the object (default "Manage sharing").
- [ ] Collaboration events (change, membership, mention) notify with a deep link to the exact view.
- [ ] Deep links work with and without the app installed.
- [ ] Sheets/popovers follow the Materials gate; keyboard, focus return, RTL and screen-reader names are covered.
- [ ] Compared with Apple's `collaboration-and-sharing-01` (permission summary on the share sheet).

## Related
- Ingested: Immersive experiences (✓), Writing (✓), Materials (✓ CRITICAL), Privacy (✓), Layout (✓ CRITICAL), Icons (✓), SF Symbols (✓), Right to left (✓).
- Ingested since: Activity views (✓ the share sheet component), Buttons (✓ CRITICAL). Popovers (✓ `components/presentation/popovers.md`). Not yet ingested: SharePlay, Sheets, (Toolbars ✓ ingested)s, Notifications, Managing notifications, Managing accounts.
- Developer docs: Supporting universal links in your app; `ShareLink` (SwiftUI); Shared with You; `SWHighlightEvent`.
