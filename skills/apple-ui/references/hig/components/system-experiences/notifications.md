# Notifications
Source: https://developer.apple.com/design/human-interface-guidelines/notifications · Section: Components › System experiences · Supported platforms: **all six** (iOS, iPadOS, macOS, tvOS, visionOS, watchOS: "No additional considerations for iOS, iPadOS, macOS, tvOS, or visionOS", plus a watchOS section; all six icons are dark on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **October 24, 2023** (watchOS section updated with guidance on presenting responses to double tap; the **only** change-log row). One DocC fetch, read in full. **10 screenshots (hero → the "Change log" heading)** were compared with the fetched text and image alt text line by line; they cover the whole page **except the Change-log row itself (fetch-only: the last screenshot ends on the table header)**. Everything visible matches the fetch. **Read from the fetch only (not in screenshots):** the change-log row, the alt text of the three images and the dark variants of the hero; the two video links were read as titles only (videos not watched, nothing from them is recorded). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **two numbers** (up to **four** action buttons; **18 %** white for the long-look background) and one worked example with 5 minutes, 15 minutes, an hour. Sibling page: `hig/patterns/managing-notifications.md` (permission, levels, Focus, settings); **this page is the component** (content, actions, badges, watch looks).

## In one line
A notification gives **timely, high-value information understood at a glance**. Get **consent first** (then people tune styles and delivery times). Keep them **concise, one per event, non-instructional, free of private data**; **use an alert, not a notification, for errors**; when the app is **in the foreground** show the news **quietly in place**. Write a **short Title-Case title (no closing punctuation)** and a **sentence-case body in whole sentences**, plus **generic preview-hidden text**; leave **the app name and icon to the system**; sound only as an extra. Offer **up to four short, Title-Case, non-destructive, non-"open the app" actions** with simple icons. **Badges count unread notifications only**, must stay current and are never the only signal or imitated. On **Apple Watch**: a **short look** (brief, discreet, never the only channel) and a **long look** (static at minimum, dynamic if possible, sash + content + up to four actions + system Dismiss); **double tap** runs the **first non-destructive action**, so order by frequency. Native system feature; on the web the counterpart is **web push / in-app notifications**.

## Rules

### Framing (intro)
- **Before any notification can be sent, people must consent** (developer: "Asking permission to use notifications"). After agreeing, people usually **choose the notification styles** and **delivery times for different levels of urgency** (see Managing notifications).

### Anatomy
- Depending on the platform a notification uses **styles**: a **banner or view on a Lock Screen, Home Screen, Home View or desktop**; a **badge on an app icon**; **an item in Notification Center**.
- **Direct-communication** notifications (phone call, message) can use a **distinct interface**: prominent **contact images (avatars)** and **group names** instead of the app icon.

### Best practices
- **should** **Provide concise, informative notifications**: people turn them on for quick updates.
- **must not** **Send several notifications for the same thing, even without a response**: people read at their convenience; repeats **fill Notification Center** and people **may turn off all notifications from the app**.
- **should** **Avoid notifications that tell people to perform tasks in the app.** If a simple task can be done without opening the app, offer **notification actions**; otherwise avoid instructions: **hard to remember after dismissing**.
- **must** **Use an alert, not a notification, to show an error message**: people know both components; **don't confuse them** (see Alerts).
- **should** **Handle foreground delivery gracefully.** Notifications **don't appear while the app is in front**, but the app **still receives the data**: show it **discoverably but not distractingly or invasively**, e.g. **increment a badge** or **subtly insert the new data into the current view**. Example: Mail adds a new message to the unread list of a mailbox being viewed instead of notifying.
- **must** **Avoid sensitive, personal or confidential information in a notification**: you **can't predict what people are doing** when it arrives; private content may be **visible to others**.

### Content
- **How the system fills the title area:** if you give a **title**, it shows **at the top where it's most visible**; **communication notification**: the system shows **the sender's name** as the title; **non-communication** notification **without a title**: the system shows **your app name**.
- **should** **Create a short title if it adds context**: brief enough to read at a glance, **especially on Apple Watch**; use the prominent title area for **useful information** (headline, event name, email subject). If you only have a **generic title** for a non-communication notification (like *New Document*), **let the system show the app name instead**. **Use title-style capitalisation and no ending punctuation.**
- **should** **Write succinct, easy-to-read content**: **complete sentences, sentence case, proper punctuation**; **don't truncate**, the system does it when necessary.
- **should** **Provide generically descriptive text for when previews are unavailable.** People can hide previews for all apps in Settings; then the system shows **only the app icon and the default title *Notification***. Write **body text that says what kind of notification it is without revealing details**: examples **"Friend request," "New comment," "Reminder," "Shipment"** (developer: `hiddenPreviewsBodyPlaceholder`). **Sentence-style capitalisation** for this text.
- **must not** **Include your app name or icon**: the system shows **a large version of the app icon at the leading edge** of each notification; in a communication notification it shows **the sender's contact image badged with a small version of your icon**.
- **may** **Consider a sound to supplement notifications**: distinguishes your app and draws attention when the device isn't being watched; use a **custom sound** that fits the app's style or a **system alert sound**. A custom sound must be **short, distinctive and professionally produced**. **Don't rely on sound for important information** (people may not hear it). People may also want **vibration with alert sounds**, but **you can't provide it programmatically** (developer: `UNNotificationSound`).

### Notification actions
- A notification can show a **customisable detail view with up to four buttons** for actions **without opening the app** (example: a Calendar event notification with **Snooze**, postponing the alarm a few minutes; developer: "Handling notifications and notification-related actions").
- **should** **Provide beneficial actions that fit the notification's context**: **common, time-saving tasks** that remove the need to open the app. **Label each with a short, title-case term or phrase that clearly describes the result**; **no app name or extraneous information** in the label; **keep it brief to avoid truncation**; **take localisation into account**.
- **must not** **Add an action that only opens the app**: tapping the notification or its preview already opens the app to related content, so such a button **clutters the detail view and confuses**.
- **should** **Prefer non-destructive actions.** If one is destructive, give **enough context to avoid unintended consequences**; the system gives **destructive actions a distinct appearance**.
- **should** **Give each action a simple, recognisable interface icon**: it reinforces the meaning; the system draws it on **the trailing side of the action title**; with **SF Symbols** pick an existing symbol or **edit a related one into a custom icon**.

### Badging
- A **badge** is **a small, filled oval containing a number** on an app icon showing **how many unread notifications** there are. It **disappears after people deal with the unread notifications** and **returns with new ones**. People can **turn badges off per app** in notification settings.
- **must** **Use a badge only for the unread-notification count**: not for **weather data, dates and times, stock prices or game scores**.
- **must** **Not make badging the only channel for essential information**: people can turn it off; make important information **easy to find as soon as they open the app**.
- **should** **Keep badges up to date**: update as soon as people **open the corresponding notifications**, so they don't hunt for news they've already seen. **Reducing the count to zero removes all related notifications from Notification Center.**
- **must not** **Create a custom image or component that mimics a badge's look or behaviour**: people who turned badges off will be **frustrated** by something that looks like one.

### Platform considerations
- **iOS, iPadOS, macOS, tvOS, visionOS:** no additional considerations.
- **watchOS:** notifications occur in **two stages, short look and long look**; people can also read them in **Notification Center**; on **supported devices** people can **double-tap** to respond. **Design app-specific assets and actions relevant on Apple Watch.** If the watch app has an iPhone companion that supports notifications, **watchOS can provide default short-look and long-look interfaces automatically**.

#### Short looks
- Appears **when the wearer raises the wrist** and **disappears when it's lowered**. It shows a **large primary image in the centre, a title and a short preview**.
- **must not** **Rely on the short look as the only way to communicate important information**: it appears **briefly**, just long enough to see what it's about and **which app sent it**; deliver critical information **in other ways too**.
- **must** **Keep privacy in mind**: short looks are **discreet**, give **only basic information**, **avoid potentially sensitive information in the title**.

#### Long looks
- **More detail** than the short look; if needed people **scroll by swiping vertically or with the Digital Crown**; they **dismiss by tapping it or lowering the wrist**. Layout: **small primary image at the upper left**, a **platter with the title and content**, **full-width action buttons** below (the list can extend off-screen to show it scrolls).
- A **custom long look** can be **static** (the message plus **additional static text and images**) or **dynamic** (access to the **full notification content** and more options for the interface's appearance). You can customise the **content area** of both, **not the structure**: a **system-defined sash at the top** and a **Dismiss button at the bottom, below all custom buttons**.
- **should** **Consider a rich, custom long look** so people get needed information **without launching the app**: SwiftUI **Animations** (engaging, **interruptible**), or **SpriteKit** / **SceneKit**.
- **must** **Provide at least a static interface; prefer to add a dynamic one.** The system **falls back to the static interface when the dynamic one is unavailable** (**no network**, iPhone companion **unreachable**); **create the static resources in advance and package them with the app**.
- **should** **Choose the sash background**: the sash shows **the app icon and name**; customise its **colour** or use a **blurred** look; with **a photo at the top of the content area** the **blurred sash** (light, translucent, "overlapping the image") is probably better.
- **should** **Choose a content-area background colour**: by default it is **transparent**; to match other system notifications use **white at 18 % opacity**; otherwise a **custom colour**, e.g. one **from the brand palette**.
- **should** **Provide up to four custom actions below the content area.** The system uses **the notification's type to decide which custom actions become buttons**, and **always adds a Dismiss button at the bottom, below all custom buttons**. If the watch app has an iPhone companion supporting notifications, the system **reuses the actionable notification types registered by the iPhone app** to configure the buttons.

#### Double tap
- On supported devices a **double tap responds** to a notification; the system **selects the first non-destructive action** as the response.
- **should** **Order custom actions with double tap in mind**: put **the action people use most** at the top. Example: a parking app offering **5 minutes, 15 minutes, or an hour** extensions lists **the most common choice first**.

## Specs & values
| Item | Value |
|---|---|
| Notification actions | **up to 4** custom buttons; the system adds **Dismiss** below them (watch long look) |
| Long-look content-area background | transparent by default; **white at 18 % opacity** to match system notifications, or a brand colour |
| Long-look structure (fixed) | **sash** (app icon + name; colour or blurred) at the top, content area, custom action buttons, **Dismiss** at the bottom |
| Short look | large primary image (centre), title, short preview; shown while the wrist is raised |
| Badge | small filled oval with a number (unread notifications); can be turned off per app |
| Title | short, **Title Case**, no ending punctuation |
| Body | **sentence case**, complete sentences, proper punctuation, not truncated by you |
| Hidden-preview body placeholder | **sentence case**, generic category words ("Friend request", "New comment", "Reminder", "Shipment"); default title *Notification* with only the app icon when previews are hidden |
| Action labels | **short Title Case** result-oriented phrase, no app name |
| Example ordering (double tap) | extend parking by 5 minutes, 15 minutes, or an hour, most common first |
| Developer APIs named | Asking permission to use notifications, `hiddenPreviewsBodyPlaceholder`, `UNNotificationSound`, Handling notifications and notification-related actions, SwiftUI Animations, SpriteKit, SceneKit, User Notifications, User Notifications UI |
| Videos (links only, not watched) | Send communication and Time Sensitive notifications (WWDC21 10091), The Push Notifications primer (WWDC20 10095) |
| Apple's Related list | Managing notifications (✓), Alerts (✓) |
| Change log | Oct 24 2023: watchOS guidance for presenting notification responses to double tap |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** the red-orange card holds **one translucent notification pill** with a **grid-construction app icon** on the left, the bold title **"Title"** and the line **"Description"** beneath, and **"now"** at the trailing top. **Red I-beam measurement marks** (spacing markers) sit at the icon's left/right edges, above the title and below the description, and **dotted guide lines** run along the title and description baselines **(from screenshot)**. The alt text only says a stylized notification mockup; the labels "Title", "Description", "now" and the spacing marks are **only in the image**.
- **Page chrome (from screenshot):** TOC = Notifications · Anatomy · Best practices · Content · Notification actions · Badging · Platform considerations · Resources · Change log; the platform strip has **all six icons dark**; side navigation shows **System experiences** open with **Notifications** ringed (browser focus, not page design) and the **Inputs** group below.
- **Short look (screenshots 6–7):** an Apple Watch with a dark violet-to-plum gradient screen: a **large blue circular radar-style icon** in the centre, bold **"Title"** under it and **"A short preview of the notification content"** in small text **(from screenshot)**.
- **Long look (screenshots 7–8):** a Watch screen at **10:09** with a small **blue icon in the upper left** overlapping a **translucent platter** on a **colourful blurred background**: **"Notification Title"** (bold), **"The content of the notification will go here."** and a tiny **"now"**; below it **two wide rounded "Action" buttons** whose second is **cut off at the screen bottom** (showing scrollability) **(from screenshot: the words "Notification Title", "Action", "now", "10:09" are not in the alt text)**.
- **Videos (last screenshot):** "Send communication and Time Sensitive notifications" (three phones with notification screens on black) and "The Push Notifications primer" (a JSON payload on the left and a phone on the right). The screenshots stop at the **Change log** table header.
- **Mismatches:** none between text, alt text and images. The "Related" list shows **Managing notifications** and **Alerts**.
- **No catalog images:** the page has only the hero and two watch illustrations, no comparison; the fetch script reports **0 comparisons**; the catalog is unchanged (**190**, existing IDs unchanged).

## Web translation
On the web this maps to **web push / Notifications API notifications**, **in-app toasts and inboxes**, the **Badging API** (`navigator.setAppBadge`) and **email/SMS**. The **permission, urgency and settings** side is in `hig/patterns/managing-notifications.md`; this page adds the **content, actions and badge** rules. Notification chrome (icon size, sash, platter) is drawn by the OS/browser: **don't imitate it**.

| HIG rule | Web implementation |
|---|---|
| Consent before sending | `Notification.requestPermission()` **only from a user gesture with a one-sentence reason** (never on load); keep `default/granted/denied`; if `denied` show how to re-enable (`managing-notifications.md`, `privacy.md`). |
| Concise, informative | One **headline + one supporting line**; payload `title` ≤ ~50 chars and `body` ≤ ~120 chars (CONV; platforms truncate differently); no marketing filler. |
| One notification per event | Use **`tag`** (replace earlier) and server-side **deduplication/idempotency keys**; **`renotify: true` only when the update really matters**; collapse bursts into a digest; never re-send "reminder" copies for the same item. |
| No instructions to do tasks in the app | State **what happened**, not "Open the app and fill in…"; if the user can act right now, give a **notification action** (below); otherwise an in-app inbox item. |
| Use an alert, not a notification, for errors | An error the user must fix **now, in the app** is an **inline error or `role="alertdialog"`**, **not a push**; a failed background job may notify only with the next step in the body (`feedback.md`, `alerts.md`). |
| Foreground handling | In `visibilitychange`/`document.hasFocus()` **foreground**: **don't call `showNotification`**; increment a **badge/counter, insert the item quietly into the list** (`aria-live="polite"`, no focus steal) or show a subtle toast; use the service-worker `clients.matchAll({type:'window', includeUncontrolled:true})` check to **skip the OS notification when a window is focused**. |
| No sensitive/private info | Keep secrets, codes, medical/financial details **out of `title`/`body`**; send "New message" and let the **click open the authenticated view** (`privacy.md`). |
| Title short, Title Case, no closing punctuation; body sentence case | Apply the **capitalisation rows in `writing.md`** (notification title: Title Case, no final period; body: sentence case with proper punctuation); **don't add an ellipsis or pre-truncate**, let the browser/OS ellipsise. |
| Generic text when previews are hidden | Send a **second, generic `body` variant** (or category label "Friend request", "New comment", "Reminder", "Shipment") and let a **user setting "Hide message content in notifications"** choose it; store the full text server-side and fetch it on click. |
| Don't include app name or icon in content | The browser shows the **site name and `icon`** itself: use `icon`/`badge` for **the product mark** only, keep the **title free of the product name** (CONV: avoid "AppName: …"); use the sender's **avatar as `image`/`icon`** for person-to-person messages. |
| Sound as an addition only | The Web Notifications `silent` flag/OS controls sound; **never convey critical information through sound** or rely on vibration (`vibrate` is inconsistent); provide the same info visually and in-app (`playing-haptics.md`). |
| Up to four short Title-Case actions | `actions: [{action, title, icon}]` (browsers show **often only 2**; `Notification.maxActions` tells the limit, **design for ≥ 2, ≤ 4**); titles **Title Case, result-oriented ("Mark as Read", "Snooze 10 Minutes")**, no product name; **localise** them. |
| No action that merely opens the app | The notification body click already opens the app (`notificationclick` → `clients.openWindow(url)`); **omit an "Open" action**. |
| Prefer non-destructive; distinct look for destructive | Destructive actions ("Delete", "Decline") only with **enough context in the body** and a confirming step in the app; never make the **first/default action destructive** (mirrors the double-tap rule). |
| Simple icon per action | Provide a **simple monochrome icon** (Lucide/Phosphor drawn to the action's meaning; never SF Symbols artwork) where the browser supports `actions[].icon`; the label carries the meaning when icons aren't shown. |
| Badges only for unread count; not the only channel; keep current; don't mimic | **Badging API** = **unread count only** (no weather/prices/scores); the **same count is visible in-app**; **update on read** (`setAppBadge(n)`, `clearAppBadge()` at 0) and **clear related delivered notifications** (`registration.getNotifications({tag})` → `close()`); **never draw a fake red-dot/number "badge" on your icon or tab favicon that behaves differently from the real badge** when the user turned badging off (respect `Notification.permission`/settings). |
| Watch short look (discreet, not the only channel) | For **wearable/companion delivery** keep the **title free of sensitive text**, and **repeat critical items in-app/email/SMS**; test the **title-only** view. |
| Watch long look: static fallback, dynamic when possible | Web analogue = **offline-safe payload**: include **all data needed to render the notification detail in the payload** (static), then **enhance from the network** (dynamic) on click; show a **cached/skeleton fallback** when offline. |
| Fixed structure: sash, content, actions, Dismiss | A **fixed template** for in-app notification cards: header (icon + source), content, up to **four actions**, and a **Dismiss/"Not now"** control that is always last and always present. |
| Content-area background: white at 18 % or a brand colour | For in-app toasts on dark surfaces use **`rgb(255 255 255 / 0.18)`** over the blurred backdrop to match the OS look (CONV); on light surfaces a brand-tinted neutral; contrast **≥ 4.5:1** for text (Color gate). |
| Double tap → first non-destructive action | **Order actions by frequency** and make **Enter/primary click** trigger the **first non-destructive** one; document the shortcut. |
| Accessibility | Every notification's information is **also available in an in-app inbox**; toasts use **`role="status"`**, don't auto-dismiss too fast (**≥ 5 s or until dismissed** for actionable ones, CONV), keyboard reachable actions, no flashing (Feedback gate). |

Field-note cross-links:
- `hig/patterns/managing-notifications.md` (✓): the **permission, urgency levels, Focus and settings** half of the same subject (this page is its component). **Consistent**: both stress one-per-event, no marketing bypass and honest urgency; `managing-notifications.md` "Ingested since" line updated.
- `hig/components/presentation/alerts.md` (✓): **errors use alerts, not notifications** (this page's rule); `hig/patterns/feedback.md` (✓ CRITICAL): delivery method by urgency; `hig/foundations/privacy.md` (✓): sensitive data and permission timing; `hig/foundations/writing.md` (✓): **capitalisation rows added** (notification title, body, hidden-preview text, action labels); `hig/getting-started/designing-for-watchos.md` (✓): notifications and complications are the most-used watch surfaces; `hig/components/system-experiences/live-activities.md` (✓): **alert discipline** (no duplicate push for the same update) and `complications.md` (✓): the sibling glance surface; `hig/foundations/sf-symbols.md` (✓): action icons; `hig/foundations/color.md` (✓ CRITICAL): 18 % white background and contrast.
- `field-notes/*`: **no notification rule; no conflict.** Nonplo's own sentence-case-everywhere convention is set aside (see `writing.md`), so the **Title Case for notification titles and actions** follows Apple until the conventions are reconciled.
- Not yet ingested (linked from this page): none beyond the ones above (**Managing notifications ✓, Alerts ✓**).

## Checklist
- [ ] Permission is requested **from a user gesture with a reason**, never on load; denied state is handled.
- [ ] **One notification per event** (`tag`), `renotify` only when meaningful; no repeated reminders for the same item.
- [ ] Copy states **what happened**, not tasks to perform; **no sensitive data** in title or body.
- [ ] Title is **short Title Case without closing punctuation**; body is **sentence case, complete sentences**; hidden-preview text is **generic and sentence case**.
- [ ] Product name/icon are **not repeated in the text**; sound and vibration are **never the only channel**.
- [ ] **Up to four** actions, **Title Case, result-oriented, localised**, none that only opens the app, **first action non-destructive** and most frequent.
- [ ] **Foreground windows don't get an OS notification**: news is inserted quietly or counted in a badge.
- [ ] **Errors are inline/alerts**, not notifications.
- [ ] Badge = **unread count only**, updated on read, cleared with related notifications, **not the only signal**, and **no look-alike badges**.
- [ ] Every notification exists **in an in-app inbox** with the full text; offline detail has a **static fallback**.

## Related
- Ingested: Managing notifications (✓), Alerts (✓), Feedback (✓ CRITICAL), Privacy (✓), Writing (✓), SF Symbols (✓), Designing for watchOS (✓), Live Activities (✓), Complications (✓), Color (✓ CRITICAL).
- Not yet ingested (linked from this page): none.
- Developer docs: User Notifications, User Notifications UI, "Asking permission to use notifications".
- Videos: Send communication and Time Sensitive notifications (WWDC21 10091), The Push Notifications primer (WWDC20 10095).
