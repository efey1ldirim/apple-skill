# Onboarding
Source: https://developer.apple.com/design/human-interface-guidelines/onboarding · Section: Patterns · Supported platforms: all six (no platform-specific considerations) · Ingested: 2026-09-28 · Apple last updated: 2024-06-10. Change log: 2023-06-21 visionOS guidance · 2024-06-10 clarified the different approaches to onboarding and added the splash-screen guideline. One DocC fetch, read in full. 4 screenshots (dark-mode page, hero → Videos) were compared with the fetched text line by line: everything matches and the four screenshots are contiguous. **The change-log rows were read from the fetch only** (the TOC in the screenshots lists Change log). The page has no text inside images and no in-page videos. Only the video thumbnails and page chrome are marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
Best: people understand the app just by using it. If onboarding is needed, make it **fast, fun and optional**, teach **by doing** or with **context-specific tips** rather than a long tour, keep it about **your app** (not the system), postpone non-essential setup, ask for permissions only where they matter, and ask for ratings or purchases **after** people have engaged.

## Rules

### Framing (intro)
- **Ideally** people understand the app or game **simply by experiencing it**.
- If onboarding is necessary, design a flow that is **fast, fun and optional**.
- Onboarding happens **after launching is complete**: it is **not** part of the launch experience (Launching ✓).

### Best practices
- **should** **Teach through interactivity.**
  - People grasp and retain more when they **perform** the task than when they only view instructions.
  - As far as possible, offer an interactive experience where people can **safely test an action, discover a feature or try a game mechanic**.
- **should** **Consider a set of context-specific tips instead of a single onboarding flow.**
  - Contextual tips teach about the **current task** while people make progress.
  - They also help learning because people can **concentrate on one action or task** before meeting new information.
  - Put instructions that refer to a specific area **near that area** (developer doc: TipKit; Offering help ✓).
- **should** **If a prerequisite onboarding flow is needed, make it brief and enjoyable, and don't require memorising lots of information.**
  - Quick and entertaining flows are more likely to be **completed**.
  - Teaching too much overwhelms people and they **remember less**.
- **should** **If a separate tutorial makes sense, make it optional.**
  - If people **skip** it at first launch, **don't show it again** on later launches, but keep it **easy to find**, e.g. in a **help, account or settings** area.
- **should** **Keep onboarding content about the experience you provide.** People enter onboarding to learn about **your app or game**; they don't need to learn how to use **the system or the device**.

### Additional content
- **may** **Briefly display a splash screen if necessary.** A splash screen is a beautiful graphic that communicates succinctly. Show it **just long enough** to absorb at a glance **without feeling like a delay**. (Launching ✓: the splash belongs at the **start of onboarding**, or right after launch if there is no onboarding.)
- **should** **Don't let large downloads hinder onboarding.**
  - People want to start using the app **immediately** after first launch, whether they take part in onboarding or skip it.
  - Include **enough media and other content in the software package** so nobody waits for downloads before they can start interacting (Apple links Launching).
- **should not** **Show licensing details in the onboarding flow.** Let the **App Store** show agreements and disclaimers so people can read them **before downloading**. If they must appear in onboarding, integrate them in a **balanced way that doesn't disrupt** the experience.

### Additional requests
- **should** **Postpone nonessential setup flows and customisation steps.** Provide **reasonable defaults** so most people can start at once without extra configuration.
- **should** **If the app needs private data or resources before it can function, consider integrating the permission request into onboarding.**
  - Onboarding is a chance to show **why** the app needs permission and **the benefits** of granting it.
  - Otherwise, ask **when people first use the specific function** that needs the data or resource (Apple links Privacy › Requesting permission ✓).
- **should** **Let people experience the app or game before asking for ratings or purchases.** People respond **more positively** once they've engaged.

### Platform considerations
- **None noted** for iOS, iPadOS, macOS, tvOS, visionOS or watchOS.

## Specs & values
The page has **no numbers** (no screen counts, times or sizes). Its concrete facts:

| Item | Value |
|---|---|
| Preferred | no onboarding (understand by using) → context-specific tips → a brief prerequisite flow |
| Flow qualities | fast · fun · optional · interactive |
| When | after launching completes (never part of launch) |
| Tutorial | optional; skipped once = not shown again; findable later in help/account/settings |
| Content | about the app/game, not the system/device |
| Splash screen | only if necessary; brief; at the start of onboarding (or right after launch if none) |
| Downloads | ship enough content in the package so people never wait before starting |
| Legal text | let the App Store show agreements; if in onboarding, balanced and non-disruptive |
| Setup | postpone nonessential setup/customisation; use reasonable defaults |
| Permissions | in onboarding only if needed for basic function (with why + benefit); otherwise at first use of the feature |
| Ratings/purchases | after people have engaged |
| Developer docs | TipKit |
| Related HIG pages | Launching ✓ · Feedback ✓ · Offering help ✓ |
| Videos | *Discoverable design* (WWDC21 10126) · *Designing Award Winning Apps and Games* (WWDC19 802) · *Love at First Launch* (WWDC17 816) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a large waving hand (open palm, fingers up and slightly tilted), over construction circles.
- **Video thumbnails (from screenshot):** *Discoverable design*: a bright green phone showing a food app ("Toasty") among plates of food and an avocado; *Designing Award Winning Apps and Games*: pastel robot-like figures with play-button glyphs and handwritten annotations on a light background; *Love at First Launch*: two phones side by side, the left with a mountain-photo screen headed "iTravel", the right a listing screen.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Onboarding · Best practices · Additional content · Additional requests · Platform considerations · Resources · Change log.
- The page has **no ✗/✓ pairs, no comparison images and no in-page videos** (fetch script run; catalog IDs unchanged, total 103). Nothing is measured.
- **Text that is not in the fetch:** only the video-thumbnail strings and the chrome.

## Web translation
First-run experience for websites and web apps, PWAs and SaaS. Combine with `hig/patterns/offering-help.md` (tips), `launching.md` (splash/first paint), `privacy.md` (permissions) and `managing-accounts.md` (sign-in).

| HIG rule | Web implementation |
|---|---|
| Understand by using | Design the empty and first-use states so the product explains itself (`feedback.md`: empty states say what to do next); ship sensible sample or template content; measure whether people succeed **without** any tour before adding one. |
| Fast, fun, optional | Any flow has a visible **Skip** (or × / "Not now") on every step; keyboard reachable; skipping never blocks the product; state stored so a skip is respected everywhere (server-side per account, not only `localStorage`). |
| Teach through interactivity | Let people do the real thing in a safe sandbox: a first task ("Add your first item"), a guided sample project, an inline "try it" demo; success confirms with quiet feedback. Prefer this to slides of screenshots. |
| Context-specific tips instead of a tour | Use tips anchored to the UI at the moment a feature is relevant (`offering-help.md`: types, eligibility, ≤ 1 per 24 h default); a **checklist** ("Getting started 2/4") in a corner or settings replaces a modal tour. |
| Brief prerequisite flow | If a first-run flow is required (account type, region, one key preference): keep it to the fewest screens (≈ 3–4 is a CONV upper guide, Apple gives no number), one idea per screen, big text, one filled action ("Continue"), progress indicator (dots/segments, not a percentage), Back available, no memorising. Every screen needs a reason to exist. |
| Optional tutorial, never repeated | After a skip, don't re-show on later visits; record `onboardingDismissedAt`; keep "Take the tour"/"Getting started" in Help or Settings (and in the account menu). |
| About your product, not the platform | No lessons on how to use the browser, share sheet, back button or scrolling; explain what is unique to the product; orient unusual gestures with a short looping animation (reduced-motion safe). |
| Splash screen | Rarely: a brief brand/graphic moment at the **start of the first-run flow only**, ~1–2 s or until content is ready (CONV), skippable, once per install/account, never on every load (`launching.md`). |
| Large downloads | Ship what the first task needs in the initial bundle/precache; lazy-load the rest in the background (`loading.md`); never a "Preparing your workspace…" wall before the first interaction when it can happen in the background. |
| No licensing text in the flow | Put Terms/Privacy links in the footer and at sign-up as **links** with required consent only where the law needs it (one clearly worded checkbox or "By continuing you agree…" link, never a scrolling wall; `privacy.md`). Store acceptance separately from onboarding. |
| Postpone setup, use defaults | Preselect sensible defaults (locale, timezone, theme from system); move "customise your dashboard", "invite teammates", "connect integrations" into a later checklist or the settings area; profile completion is progressive. |
| Permissions | Ask in the flow **only** if the product can't function without it (e.g. camera for a scanner), with **why and benefit** in one sentence and a single "Continue" pre-permission button (`privacy.md`); otherwise ask at the point of first use (notifications → after a relevant action, `managing-notifications.md`). |
| Ratings/purchases after engagement | Don't show a review request, upsell or paywall in the first session/first minute; trigger after a positive moment or repeated use (e.g. N successful tasks, CONV) and never right after an error; one ask, easy to decline, remember the answer. |
| Accessibility and i18n | Focus lands on the step heading, `aria-live` polite for step changes, `Skip` and `Back` labelled, no auto-advancing carousels, text scales to 200 % (Layout gate), localisable strings and RTL-safe progress (`right-to-left.md`). |

Field-note cross-links:
- `field-notes/components.md` § Wizard shell (52 px header with Back/Close, phase progress, one filled footer button, group titles) is a valid **prerequisite flow** shell; its Close = "Not now/Skip" satisfies "optional". Keep step count small and add the "don't show again" state.
- `hig/patterns/offering-help.md`: tips are the preferred alternative to a single flow; eligibility rules and cadence carry over.
- `hig/patterns/launching.md`: the launch state is not onboarding; the splash sits at the **start** of first-run, only if needed.
- `hig/foundations/privacy.md`: no permission requests up front unless needed to function; one-sentence purpose; pre-permission "Continue".
- `hig/patterns/managing-accounts.md`: sign-in delayed until commitment; onboarding must work as a guest where possible.
- `hig/patterns/feedback.md` (CRITICAL): success in an interactive step is quiet status feedback; empty states are the first onboarding surface; permission and error moments follow the delivery ladder.
- `hig/patterns/loading.md`: don't gate first interaction on downloads; background loading.
- `hig/patterns/managing-notifications.md`: notification opt-in comes after value is shown.
- `field-notes/principles.md` (one idea per screen, one filled button, no filler): **consistent**.
- No conflict with a field note.

## Checklist
- [ ] The product was checked without any tour; empty/first-use states already explain what to do next.
- [ ] Any flow is optional: Skip/Not now on every step, no dead ends, skip respected on later visits and devices.
- [ ] Learning is by doing (sandbox, first task, checklist) or contextual tips; no long slideshow.
- [ ] A required flow is as short as possible: one idea per screen, one filled button, progress shown, Back available.
- [ ] Content is about the product, not the browser/OS; unusual gestures use a short animation, not paragraphs.
- [ ] Splash (if any) only at the start of the first run, brief, skippable, once.
- [ ] First interaction is never blocked by downloads; assets ship in the bundle or load in the background.
- [ ] No licensing wall; legal links and consent are minimal and separate from the flow.
- [ ] Nonessential setup is postponed with sensible defaults; personalisation lives in a later checklist/settings.
- [ ] Permissions are asked in the flow only if essential (with why + benefit), otherwise at first use.
- [ ] Ratings, upsells and purchase prompts wait until after engagement.
- [ ] Layout gate (200 % text, 320 px) and Feedback gate pass on every onboarding step.

## Related
- Ingested: Launching (✓), Feedback (✓ CRITICAL), Offering help (✓), Privacy (✓), Managing accounts (✓), Managing notifications (✓), Loading (✓), Layout (✓ CRITICAL).
- Sheets (✓ `components/presentation/sheets.md`). Not yet ingested: Toggles. Also ingested: Modality (✓), Ratings and reviews (✓), Settings (✓).
- Developer docs: TipKit. Videos: *Discoverable design* (WWDC21 10126), *Designing Award Winning Apps and Games* (WWDC19 802), *Love at First Launch* (WWDC17 816).
