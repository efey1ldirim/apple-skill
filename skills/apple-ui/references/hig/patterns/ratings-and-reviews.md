# Ratings and reviews
Source: https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews · Section: Patterns · Supported platforms: all six on the platform strip; the page says **no additional considerations** for any platform (the system prompt itself exists on iOS, iPadOS and macOS) · Ingested: 2026-09-29 · Apple last updated: 2023-09-12 (artwork added; the change log has that single entry). One DocC fetch, read in full. 3 screenshots (dark-mode page, hero → Resources heading) were compared with the fetched text and the image alt text line by line: everything matches; the three screenshots are contiguous. **The Resources links and the change-log row were read from the fetch only.** Text that exists only inside the prompt illustration is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
Ask for a rating **late, rarely and at a natural pause**: after real engagement, never on first launch or in onboarding, never mid-task, with weeks between asks, through the **system prompt** where one exists; and think twice before resetting your summary rating.

## Rules

### Framing (intro)
- People often read an app's ratings and reviews **before downloading**.
- A great overall experience is the best way to earn positive ratings, but **timing the request** is also crucial. Signals you can use to time it: **how many times or how often** people launch the app, **how many features** someone explores, **how many tasks** they complete.
- People can **always rate the app inside the App Store**, whatever you do in the app.

### Best practices
- **must** **Ask only after people have shown engagement.**
  - Example moments: completing a **game level** or a **significant task**.
  - **Not on first launch, and not during onboarding**: people haven't yet understood the app's value or formed an opinion, and may even be **more likely to leave negative feedback** if they feel asked before they got to use it.
  - (Visual: Apple's prompt illustration; see § Visual notes.)
- **must not** **Interrupt people while they perform a task or play a game.** A request can disrupt the experience and feel like a burden; look for **natural breaks or stopping points** where it is less bothersome.
- **must not** **Pester people.** Repeated requests are irritating and may lower their opinion of the app. Consider **at least a week or two between requests**, and ask again only after **additional engagement**.
- **should** **Prefer the system-provided prompt** (iOS, iPadOS, macOS): consistent and non-intrusive.
  - You pick the places where asking makes sense; the system **checks for previous feedback** and, if there is none, shows an **in-app prompt asking for a rating and an optional written review**.
  - People can give feedback or **dismiss with a single tap or click**, and can **opt out of these prompts for all their apps**.
  - The system **limits the prompt to three times per app in a 365-day period** (developer doc: `RequestReviewAction`).
- **should** **Weigh resetting the summary rating.** With a new version you can **reset the summary** of ratings received since the last reset. The rating then reflects the current version, but you usually end up with **fewer ratings overall**, which can put some people off downloading (App Store Connect › *Reset app summary rating*).

### Platform considerations
- **None noted** for iOS, iPadOS, macOS, tvOS, visionOS or watchOS.

## Specs & values
| Item | Value |
|---|---|
| Engagement signals (examples) | launch count/frequency · features explored · tasks completed · a finished level or significant task |
| Never ask | on first launch · during onboarding · mid-task or mid-game |
| Gap between requests | "at least a week or two", then only after more engagement |
| System prompt limit | **3 per app per 365 days** (enforced by the system) |
| System prompt contents | star rating + optional written review; single tap/click to answer or dismiss; global opt-out for all apps |
| Prompt behaviour | skipped if the person already gave feedback |
| Summary reset | possible per release; means fewer ratings overall |
| Developer docs | `RequestReviewAction` (StoreKit) · App Store Connect *Reset app summary rating* · App Store *Ratings, reviews, and responses* |
| Related HIG pages | Onboarding ✓ (avoid asking there) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a large star split down the middle, one half solid and the other half a darker shade (Apple's caption: a half-filled star, a favourability rating), over construction circles.
- **Prompt illustration (from screenshot):** a compact **rounded dark card**: a small app-icon tile at the top leading corner; the bold question **"Enjoying App Name?"**; the line "Tap a star to rate it on the App Store."; a thin separator; **five outlined blue stars** in a row; and one full-width grey pill button **"Not Now"**. Everything is left-aligned except the centred stars and button.
- **Note on Apple's own text:** the image's file name says *ios-alert*, but its alt text says "in macOS"; the picture is a phone-style prompt. It is recorded as "the system rating prompt" without choosing a platform.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Ratings and reviews · Best practices · Platform considerations · Resources · Change log; a link-anchor icon appears beside the "Platform considerations" heading when hovered.
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 105). Nothing is measured.
- **Text that is not in the fetch:** the prompt card's strings ("Enjoying App Name?", "Tap a star to rate it on the App Store.", "Not Now") and the chrome above.

## Web translation
For **app-store and web-app ratings**, and by extension NPS/CSAT/review prompts inside a website or PWA. The store ratings themselves are outside the page; what carries over is **timing, frequency and prompt design**.

| HIG rule | Web implementation |
|---|---|
| Ask only after engagement | Trigger on **behaviour**, not time: N successful tasks, a milestone reached (first export, project completed, order delivered), or repeated use across sessions (e.g. ≥ 3 sessions and ≥ 1 completed task; CONV numbers, Apple gives none). Store `completedTasks`, `sessions`, `lastPromptAt`, `answered` per user. |
| Never on first launch or during onboarding | Suppress prompts for the whole **first session and any active onboarding/checklist** (`onboarding.md`); never over a sign-up, checkout or error state. |
| Don't interrupt tasks | Show the prompt **after a completed action** on a calm screen (success state, empty inbox, end of a level/report); never mid-form, mid-video, mid-checkout; not right after an error. Defer if the person is typing, dragging or in a modal. |
| Don't pester | Cool-down of **≥ 1–2 weeks** between asks (Apple's "a week or two"), plus **more engagement** since the last ask; **stop for good** after a dismissal ×2 or an answer (CONV). Store the decision server-side so it survives devices. |
| System prompt limit (3 per 365 days) | Mirror it as an **own cap** (e.g. ≤ 3 asks per user per year) even though no browser enforces it. |
| Prefer the system prompt | Where a system prompt exists (native/Capacitor shell: StoreKit `RequestReviewAction` on iOS/macOS, Play In-App Review on Android), **use it** instead of a custom dialog; on the web use a **small non-modal card** (`modality.md`: non-modal, dismissible) rather than a blocking dialog. |
| Prompt design (Apple's card) | Friendly question naming the product ("Enjoying {App}?"), **one instruction line**, the **five-star row**, and a plain **Not now** (no guilt, no dark patterns, no pre-checked five stars); star row is a radio group (`role="radiogroup"`, arrow keys, `aria-label="Rate 1 to 5 stars"`), targets ≥ 44 px, a visible focus ring. Dismiss with one click/tap; Esc closes. |
| Single tap answers or dismisses | A star tap submits immediately; ask for a **written review only as an optional second step**. Route low scores to **private feedback** (a short form), high scores to the store review link, never gate the store link behind a high score (review-gating breaks store rules; outside the page). |
| Opt out of all prompts | A **Settings › "Ask me for feedback"** switch and a "Don't ask again" link on the card; honour it everywhere. |
| Check for previous feedback | Don't ask people who already rated or reviewed (track `answered`); don't re-ask after a support complaint or refund. |
| Reset summary rating (versions) | For your own public rating widgets/"average" displays: if you reset per release, show the **count** and the **since-version** so a small sample doesn't look like a bad product; prefer showing all-time plus recent. |
| Copy | Sentence case, plain words, no "we", no begging ("Please!"), no guilt on the decline button (`writing.md`). |
| Accessibility | Not a modal focus trap; announce with a polite live region only if it appears without user action; don't rely on star colour alone (filled vs outlined shape); keyboard-operable. |

Field-note cross-links:
- `hig/patterns/onboarding.md` (✓): "prefer letting people experience the app before prompting for ratings or purchases" is the same rule; this page adds frequency and mechanism.
- `hig/patterns/modality.md` (✓): a rating prompt is the textbook **non-modal** interruption; if it must be an alert it follows "one at a time, easy to dismiss".
- `hig/patterns/feedback.md` (CRITICAL): the prompt is a low-significance message; deliver it quietly and never as an unannounced interruption; never right after an error.
- `hig/patterns/managing-notifications.md` (✓): don't use push to ask for reviews; a review request is marketing-like and needs the person's consent.
- `hig/patterns/launching.md` and `loading.md`: never at first paint or during loading.
- `hig/patterns/managing-accounts.md` and `entering-data.md`: a rating card is not a form gate; sign-in is never required to dismiss it.
- `hig/foundations/writing.md`: copy for the card and buttons.
- No conflict with a field note.

## Checklist
- [ ] The request is triggered by engagement (milestone, completed task, repeat use), never on first launch, onboarding, or mid-task.
- [ ] It appears at a natural pause, is non-modal (or a system prompt), and can be dismissed in one action.
- [ ] Cool-down ≥ 1–2 weeks and more engagement between asks; a yearly cap; dismissed/answered states persist across devices.
- [ ] The system/native review API is used where available; otherwise a small card with a star row and "Not now".
- [ ] Low scores go to private feedback; the store link is never gated by score.
- [ ] A settings switch or "don't ask again" opts out of all prompts.
- [ ] The star row is keyboard-operable, ≥ 44 px, and doesn't depend on colour alone; copy is plain and non-pleading.
- [ ] If a rolling or reset rating is shown publicly, the count and window are shown with it.

## Related
- Ingested: Onboarding (✓), Modality (✓), Feedback (✓ CRITICAL), Managing notifications (✓), Launching (✓), Writing (✓).
- Not yet ingested: Alerts, Settings.
- Developer docs: `RequestReviewAction`. Store resource: App Store *Ratings, reviews, and responses*.
