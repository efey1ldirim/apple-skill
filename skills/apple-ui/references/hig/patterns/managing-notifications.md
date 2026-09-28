# Managing notifications
Source: https://developer.apple.com/design/human-interface-guidelines/managing-notifications · Section: Patterns · Supported platforms: all six on the platform strip (only watchOS has platform-specific guidance) · Ingested: 2026-09-28 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 6 screenshots (dark-mode page, hero → Videos) were compared with the fetched text line by line: everything matches, including the interruption-level table and the two asides (Important, Note); the six screenshots are contiguous and cover the whole page including the Videos. The page has no text inside images and no in-page videos. Only the video thumbnails and page chrome are marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
Notifications are a privilege people grant and can withdraw. Get permission first, assign each notification an **honest urgency level**, keep Time Sensitive for what is happening now, never let marketing break through a Focus, and give people an in-app place to change their choice.

## Rules

### Framing (intro)
- **must** **Get permission before sending any notification.** People can change this decision in system settings, where they can also silence all notifications (except government alerts in some locales).
- Notifications carry timely, important information whether the device is locked or in use.

### Integrating with Focus
- People like notifications about things they care about but not always the interruption. The system lets them:
  - set **delivery times** (scheduled delivery), and
  - set up a **Focus**: a period reserved for an activity such as sleeping, working, reading or driving that **filters** notifications.
- **Scheduled delivery** lets people get alerts **immediately** or in a **summary** delivered at times they choose.
- People choose which **contacts and apps can break through** a Focus. Example: in a Work Focus, alerts from colleagues, family and work apps arrive at once. People may also allow **all Time Sensitive** alerts during a Focus.
- A **Time Sensitive** notification carries essential information people appreciate getting right away.
- **Important (aside):** even if a Focus delays the *alert*, the **notification itself is available as soon as it arrives**.
- To support these customisations, first **classify** what the app can send:
  - **Communication** notifications for **direct communication** (phone calls, messages). To support them, adopt **SiriKit intents**, so people can use Siri to customise behaviour (`INSendMessageIntent`, `UNNotificationContentProviding`). For these, the system uses the **sender** to decide when to deliver.
  - **Noncommunication** notifications for everything else. **Each one needs a system-defined interruption level**, which the system uses to decide when to deliver.
- The **four interruption levels** (noncommunication):
  - **Passive**: information people can view at leisure, e.g. a restaurant recommendation.
  - **Active** (**the default**): information people may want to know when it arrives, e.g. a sports score update.
  - **Time Sensitive**: information that directly affects the person and needs immediate attention, e.g. an account security issue or a package delivery.
  - **Critical**: urgent **health and safety** information that directly affects the person and demands immediate attention. **Extremely rare**; typically from governmental and public agencies, or apps that help people manage their **health or home**.
- **Note (aside):** a Critical notification can override the Ring/Silent switch and break through scheduled delivery and Focus, so you **must get an entitlement** to send one.

### Best practices
- **must** **Build trust by representing the urgency of each notification accurately.**
  - People have several ways to change how they get your notifications, including turning them all off, so be as **realistic** as possible when assigning a level.
  - Don't make people feel that a high urgency level is used to interrupt them with low-priority information.
- **must** **Use Time Sensitive only for notifications that matter in the moment.**
  - The event should be **happening now or within the next hour**.
  - The first time a Time Sensitive notification arrives from your app, the **system explains** how it works and lets people **turn it off** if they don't agree it needs immediate attention. Later the system **periodically** offers another chance to evaluate it (`UNNotificationInterruptionLevel`).

### Sending marketing notifications
- **must not** **Send marketing or promotional content unless people explicitly agree.** When people want to hear about new features, content or events, they can grant permission. Examples: a subscription app's offer to subscribe; a special offer tied to a live game event.
- **must not** **Ever use the Time Sensitive level for a marketing notification.** Even with permission, marketing must **never break through a Focus or scheduled delivery**.
- **must** **Get explicit permission for promotional or marketing notifications.**
  - Before sending, present an **alert, modal view or other interface** that describes the **types of information** you want to send and gives a **clear way to opt in or out**.
- **must** **Let people manage notification settings inside the app.** In addition to asking permission for informational or marketing notifications, provide an **in-app settings screen** where they can change their choice (Apple links Settings, not yet ingested).

### Platform considerations
- **iOS, iPadOS, macOS, tvOS, visionOS:** no additional considerations.
- **watchOS:**
  - By default the notification settings people use for an app on iPhone **apply to the same app on Apple Watch**.
  - People manage them in the **Apple Watch app on iPhone**, or use **per-notification options** by **swiping left** on a notification on the watch, such as **Mute 1 Hour** or **Turn off Time Sensitive**.

## Specs & values
### Interruption levels (facts from the page)
| Interruption level | Overrides scheduled delivery | Breaks through Focus | Overrides Ring/Silent switch on iPhone and iPad |
|---|---|---|---|
| Passive | No | No | No |
| Active (default) | No | No | No |
| Time Sensitive | **Yes** | **Yes** | No |
| Critical | **Yes** | **Yes** | **Yes** (requires an entitlement) |

### Other facts
| Item | Value |
|---|---|
| Permission | required before any notification; changeable in system settings; all notifications can be silenced (except government alerts in some locales) |
| Communication vs noncommunication | direct communication (calls, messages) → communication notifications with SiriKit intents; everything else → noncommunication with an interruption level |
| Time Sensitive window | event happening **now** or **within an hour** |
| Time Sensitive first-use behaviour | system explains it and offers to turn it off; periodic re-evaluation prompts |
| Marketing | explicit opt-in; describe the information types; clear opt-in/out; **never** Time Sensitive |
| In-app settings | mandatory for informational and marketing notifications |
| watchOS per-notification options | Mute 1 Hour · Turn off Time Sensitive (swipe left) |
| Delivery timing | a Focus may delay the *alert*, never the notification itself |
| Developer docs | *User Notifications* · `INSendMessageIntent` · `UNNotificationContentProviding` · `UNNotificationInterruptionLevel` |
| Related HIG pages | Privacy ✓ · Settings (not yet ingested) |
| Videos | *Send communication and Time Sensitive notifications* (WWDC21 10091) · *The Push Notifications primer* (WWDC20 10095) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a large bell and a solid circle at its upper trailing side (a notification dot), over construction circles.
- **Asides (from screenshot):** the **Important** aside (Focus delays the alert, not the notification) has an **amber border and tinted fill** with an amber title; the **Note** aside (Critical needs an entitlement) is a **neutral grey** box. The interruption-level table has four rows and three Yes/No columns with a header row and thin row separators.
- **Video thumbnails (from screenshot):**
  - *Send communication and Time Sensitive notifications*: three phones side by side with lock screens showing notifications; the middle screen has a heading like "Stay focused on what's important" (small text).
  - *The Push Notifications primer*: a JSON payload in code on the left and a phone on the right (a Home Screen).
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Managing notifications · Integrating with Focus · Best practices · Sending marketing notifications · Platform considerations · Resources (**no Change log**).
- The page has **no ✗/✓ pairs, no comparison images and no in-page videos** (fetch script run; catalog IDs unchanged, total 99). Nothing is measured.
- **Text that is not in the fetch:** only the video-thumbnail strings and the chrome above.

## Web translation
For web push (Push API + Notifications API), PWA notifications, and also email/SMS/in-app alerts. Web has **no system-wide Focus API**, so honesty about urgency and respect for user schedules must be built into the product. Pair with `hig/foundations/privacy.md` (permission timing) and `hig/patterns/feedback.md` (choose the right delivery method).

| HIG rule | Web implementation |
|---|---|
| Permission before any notification | Never call `Notification.requestPermission()` on load. Ask from the feature's own trigger (a "Notify me" button after value is clear) with a one-sentence reason, optionally via a pre-permission screen with one "Continue" button (`privacy.md`). Track `Notification.permission` (`default`/`granted`/`denied`); if `denied`, don't nag: show how to re-enable in browser settings. |
| Classify: communication vs other | Two families: **people messaging you** (chat, calls, replies) and **everything else**; separate categories in settings and in the payload (`data.category`). |
| Four levels → web mapping (CONV; Apple defines no web levels) | **Passive** → no push (in-app inbox/digest only) or `Urgency: very-low`; **Active** → `Urgency: normal` (default); **Time Sensitive** → `Urgency: high` + `requireInteraction` only if it truly needs action; **Critical** → **no web equivalent**: don't fake it (no repeated pushes, no sounds looping); for real safety alerts rely on the OS/emergency channels. Set `TTL` so stale alerts expire (a package alert that arrives after delivery is noise). |
| Represent urgency honestly | A written policy per notification type ("Security alert → time-sensitive; Weekly report → passive"); review: if a type gets muted often, its level is too high. Measure opt-outs per type, not just delivery. |
| Time Sensitive only if it matters now or within the hour | Gate it in code: `startsAt - now ≤ 1 h` (or already happening) else downgrade to Active/Passive. Include the time and the consequence in the text. First time: explain in-app why this type can interrupt and offer to turn it off; re-prompt occasionally in settings, not by push. |
| Marketing needs explicit opt-in | Marketing/promotional notifications are a **separate opt-in** (unchecked by default, not bundled with transactional or account notices), with the content types described ("Product updates", "Offers for live events") and a one-tap opt-out; also honour `List-Unsubscribe` in email. Never priority-high, never bypass quiet hours. |
| Never Time Sensitive for marketing | Enforce server-side: marketing category can't set `Urgency: high` or `requireInteraction`. |
| In-app settings | Settings › Notifications per **channel** (push, email, SMS) × **category** (messages, security, activity, marketing) with a switch each, plus **quiet hours / delivery schedule** and "Send as a daily summary" (digest) (`Settings` page not yet ingested; field note Settings list). The current OS/browser permission state is shown with a link to fix it. |
| Focus / scheduled delivery | Offer your own **quiet hours** and **digest** since the web can't read Focus; deliver the notification record instantly in the in-app **inbox** even when the alert is held (Apple: "the notification is available as soon as it arrives"). |
| Communication notifications and the sender | Let people set per-person/per-thread overrides (mute thread, VIP senders) in the same settings. |
| watchOS per-notification options | Put the quick controls **on the notification**: action buttons "Mute for 1 hour", "Turn off this type" (`actions` in `showNotification`, and links/footers in email); the same wording in the settings screen. |
| Payload hygiene | `tag` to collapse repeats, `renotify` only when meaningful, no sensitive data in lock-screen text (`privacy.md`), clear title/body per `writing.md`, deep link on click (`launching.md`/`collaboration-and-sharing.md`). |
| Accessibility | Provide the same information in-app (not push-only); don't rely on sound alone; no flashing; respect `prefers-reduced-motion` for in-app toasts (Feedback gate). |

Field-note cross-links:
- `hig/foundations/privacy.md`: permission-timing, purpose strings and the pre-permission "Continue" rule are the entry to this page; **consistent**.
- `hig/patterns/feedback.md` (CRITICAL): "choose the right delivery method" covers notifications as the out-of-app channel; urgency honesty = "match significance to delivery"; alerts lose impact when overused, which is the same argument as Time Sensitive inflation.
- `hig/patterns/managing-accounts.md`: account-deletion completion and security events are Time Sensitive/Active examples; "notify people when it's finished".
- `hig/patterns/live-viewing-apps.md` and `collaboration-and-sharing.md`: collaboration event notifications (mentions, changes) are noncommunication vs communication choices; use deep links.
- `field-notes/components.md` § Settings list / Switch row: the notification settings screen reuses those recipes; one filled button, quiet grouped rows.
- `hig/foundations/writing.md`: notification copy states what happened and the next step; no "Oops", no "we".
- No conflict with a field note.

## Checklist
- [ ] No permission request on load; it is asked from a relevant user action with a one-sentence reason, and a denied state is handled without nagging.
- [ ] Every notification type has a documented urgency level (Passive / Active / Time Sensitive / Critical-equivalent) and a TTL; levels are honest.
- [ ] Time Sensitive (high urgency) is used only for events happening now or within an hour; it is enforced in code and explained on first use.
- [ ] Marketing is a separate, explicit, described opt-in, never high urgency, never bypasses quiet hours; opt-out is one tap.
- [ ] An in-app Notifications settings screen offers per-category switches, quiet hours/digest and shows the browser/OS permission state.
- [ ] The in-app inbox holds every notification instantly even when an alert is delayed or muted.
- [ ] Notifications carry quick controls ("Mute 1 hour", "Turn off this type") and deep-link to the exact view.
- [ ] Sensitive content is kept off the lock screen; no notification is the only place information appears.
- [ ] Opt-out and mute rates per type are monitored and used to lower levels.

## Related
- Ingested: Privacy (✓), Feedback (✓ CRITICAL), Managing accounts (✓), Writing (✓), Collaboration and sharing (✓), Live-viewing apps (✓).
- Not yet ingested: **Settings**, **Notifications** (component), **Alerts**, Onboarding.
- Developer docs: *User Notifications*. Videos: *Send communication and Time Sensitive notifications* (WWDC21 10091), *The Push Notifications primer* (WWDC20 10095).
