# Designing for watchOS
Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos ·
Section: Getting started · Ingested: 2026-09-28 · Screenshots: 5 (text cross-checked: matches
the fetched content) · Apple change log: **June 5, 2023 — enhanced guidance for a glanceable,
focused app experience; emphasised the Digital Crown in navigation.**

## In one line
Apple Watch is for **glances**: essential information and simple, timely actions in seconds,
standing still or moving — so design single-screen, shallow, anticipatory experiences, and treat
**complications, notifications and Siri** (which people use more than the app) as first-class.

## What the page says

### Framing
When people glance at their Watch they expect **essential information** and **simple, timely
tasks** — whether **stationary or in motion**.

### The five defining characteristics
1. **Display** — **small**, sits on the wrist, yet **easy to read** and high-resolution.
2. **Ergonomics** — worn on the body: usually **no more than a foot (~30 cm)** away when people
   **raise the wrist**; they interact with the **opposite hand**. The **Always On** display lets
   them see watch-face information even with the **wrist down**.
3. **Inputs** —
   - **Digital Crown**: vertical navigation and inspecting data; consistent control on the watch
     face, Home Screen and inside apps.
   - Standard **gestures** (tap, swipe, drag) — usable **even while moving**.
   - **Action button**: triggers an essential action **without looking at the screen**.
   - **Shortcuts**: routine tasks done quickly.
   - Device data: **GPS**, **blood-oxygen and heart sensors**, **altimeter, accelerometer,
     gyroscope**.
4. **App interactions** — people glance at the Always On display **many times a day**, each
   interaction **under a minute**. They often use an app's **related experiences —
   complications, notifications, Siri — more than the app itself**.
5. **System features**: **Complications**, **Notifications**, **Always On**, **Watch faces**.

### Best practices (great Watch experiences are **streamlined and specialised**)
- **must — Quick, glanceable, single-screen interactions** that deliver critical information
  succinctly and let people do targeted actions with **one or two simple gestures**.
- **must — Minimise navigation depth**; use the **Digital Crown** for vertical navigation —
  scrolling or switching between screens. (Emphasised in the 2023 update.)
- **should — Personalise proactively**: anticipate needs and use **on-device data** to show
  actionable content relevant **now or very soon**.
- **should — Use complications** for relevant, possibly **dynamic data and graphics on the watch
  face**, visible on **every wrist raise**, and tappable to **jump straight into the app**.
- **should — Use notifications** for **timely, high-value** information and to let people
  complete **important actions without opening the app**.
- **should — Use background content** — e.g. **colour** — to convey useful supporting
  information, and **materials** to express **hierarchy and a sense of place**.
- **should — Make the app work independently** (not a mere phone companion), complementing
  notifications and complications with more detail and functionality.

### Resources listed
- Related: Apple Design Resources (watchOS kits). Developer documentation: watchOS Pathway.
- Video: *What's new in watchOS 26* (WWDC25 session 334).

## Platform comparison (adds watchOS)
| | iOS | iPadOS | macOS | tvOS | visionOS | watchOS |
|---|---|---|---|---|---|---|
| Session | min ↔ hour+ | quick ↔ hours | min ↔ hours | hours | varies | **< 1 min, many times a day** |
| Distance | 30–60 cm | ≤ 90 cm | 30–90 cm | ≥ 2.4 m | head-relative | **≤ 30 cm, wrist raised** |
| Key input | touch | multi-input | keys + pointer | remote | eyes + hands | **Digital Crown, tap/swipe, Action button** |
| Most-used surface | app | app | app | app | app/space | **complications & notifications** |

## Specs & values
- Viewing distance ≤ ~1 ft (~30 cm); interactions < 1 minute.
- No sizes on this page (see Layout, Typography, Complications, Digital Crown).

## Visual notes (from screenshots)
- Hero: green-gradient construction-grid panel with an Apple Watch glyph (rounded-square case,
  bands top and bottom, Digital Crown on the right side).
- Same documentation grammar; right-hand TOC: Designing for watchOS · Best practices · Resources ·
  Change log.
- **(from screenshot)** Video card *What's new in watchOS 26*: three silver Apple Watches on a
  light background, each showing a watch face with the date ("TUE APR 1"-style) and a large
  "10:09", and below it **Smart Stack** widget cards (items like a place name with weather,
  "Meditation", "Surfing", "Beach") — the glanceable card stack under the time.

## Web translation
Watch apps are native, but the lessons map to any **glanceable** web surface — notifications,
widgets, status summaries, mobile "at a glance" screens:

| watchOS guidance | What to do on the web |
|---|---|
| Glanceable, single-screen, 1–2 gestures | Design a "glance" state for key screens: the one number/status and the one action above the fold on mobile (e.g. "Next appointment 14:30 · Confirm"). Cut secondary info to a detail view. |
| Shallow hierarchy | Mobile flows ≤ 2 levels deep where possible; avoid drill-down chains. |
| Anticipate needs | Show what's relevant now or next (upcoming item, today's summary, the task in progress) using data you already have — don't make people search for it. |
| Complications & notifications used more than the app | Treat off-app surfaces as product: **web push** with clear, actionable content (notification `actions`), PWA **app badges** (Badging API) for counts, concise email/SMS digests. Each must be useful without opening the app, and deep-link precisely when tapped. |
| Notifications timely & high-value | Notify rarely, only for things that matter now; let people act from the notification; offer fine-grained notification settings. |
| Background colour conveys info; materials show hierarchy | Use a tinted background/state colour to encode status at a glance (e.g. a green/amber tint for "ready/attention") — sparingly and paired with text/icons for accessibility. Use layered materials for hierarchy. |
| Works independently | Each surface (widget, notification, page) should stand on its own and complement the others, not depend on a companion screen. |

## Checklist
- [ ] Can the key information be understood in a 2-second glance?
- [ ] Can the main action be done in one or two taps?
- [ ] Navigation shallow (≤ 2 levels)?
- [ ] Content anticipates what the person needs now/next?
- [ ] Off-app surfaces (push, badges, digests) are useful on their own and deep-link correctly?
- [ ] Notifications are rare, timely, actionable, and configurable?

## Related (ingestion status)
Digital Crown, Action button, Complications,
Notifications (✓ `components/system-experiences/notifications.md`), Watch faces (✓ `components/system-experiences/watch-faces.md`) — not yet ingested (except ✓). Ingested since: Siri (✓ `technologies/siri.md`), Workouts (✓ `patterns/workouts.md`), Color (✓), Materials (✓), Gestures (✓ `inputs/gestures.md`: watchOS 11 double tap), Always On (✓ `technologies/always-on.md`).
