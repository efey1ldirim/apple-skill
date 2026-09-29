# HealthKit
Source: https://developer.apple.com/design/human-interface-guidelines/healthkit · Section: Technologies · Supported platforms: **iOS, iPadOS, watchOS** (page data; the platform text: "No additional considerations for iOS, iPadOS, or watchOS. **Not supported in macOS, tvOS, or visionOS**") · Ingested: 2026-09-29 · Apple last updated: **not shown** (the page has **no Change log** and no date in its data; the video list includes **WWDC26** and **WWDC25** sessions). **Link-only ingestion: one DocC fetch, read in full (76 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts only. Not marked critical: no token file, checker or gate. Numbers on the page: **3 Activity goals** (Move, Exercise, Stand), **1/10** (Apple Health icon clear space), and the ring margin rule **"no less than the distance between rings"**.

## In one line
**HealthKit** is **the central repository for health and fitness data in iOS, iPadOS and watchOS**; an app can **ask permission to read and update people's health information**. **If the app has no health or fitness function, don't ask for health data.** **Privacy:** **permission plus all necessary protection, a privacy-policy URL at submission, request in context each time the data is needed, a few succinct sentences on the standard permission screen (no lookalike screens), and sharing managed only through Settings › Privacy.** **Activity rings** are **for Move, Exercise and Stand only, for one person (labelled), never decorative or branding, unchanged colours and background, margin ≥ the gap between rings (rounded-corner enclosure, not a circular mask), other rings visually separated, and never in notifications.** **Apple Health icon:** **Apple's artwork only, name "Apple Health" beside it, at least as large as other health icons, not a button, unaltered (no mask, borders, shadows), clear space 1/10 of its height, never inside text; no Health app screenshots.** **Wording:** **"Apple Health" or "the Apple Health app", never "HealthKit"; two words with uppercase A and H; use the system translation of "Health".** On the web: **no HealthKit access**; the privacy and consent rules apply to any health-data feature, **ring-like charts must not imitate Activity rings**, and **Apple's icon and rings are only for genuine Apple Health/Activity integrations**.

## Rules

### Framing (intro)
- With HealthKit support, an app can **ask people for permission to access and update their health information**.
- **Important:** **if the app doesn't provide health and fitness functionality, don't request access to people's private health data.**
- Example: a **nutrition app** asks to **retrieve weight and activity data** to **set calorie goals and make dietary recommendations**, and can **send data such as logged calories to HealthKit**, which can **include it in its global progress metrics**. (A screenshot shows **the Health app's summary screen on iPhone: activity, active energy, stair speed, heart rate, resting energy, stand minutes**.)

### Privacy protection
- **must** **Request permission to access people's data and take all necessary steps to protect it.** After permission, **maintain trust by clearly showing how the data is used** (developer: "Protecting user privacy").
- **must** **Provide a coherent privacy policy.** **During submission provide a URL to a clearly stated policy**, viewable **from the app's App Store page** (App Store Connect help).
- **should** **Request access to health data only when needed.** E.g. **weight when people log weight, not right after launch.** **Requests clearly tied to the current context help people understand your intent**; **people can change permissions, so request every time the app needs access** (developer: `requestAuthorization(toShare:read:completion:)`).
- **should** **Clarify intent with descriptive messages on the standard permission screen.** People **expect the system permission screen**; **write a few succinct sentences on why you need the data and how sharing it benefits them**; **avoid custom screens that replicate its behaviour or content**. (A screenshot shows **a Health Access screen asking to write and read mindful-minutes data**.)
- **must** **Manage health data sharing solely through the system's privacy settings** (**Settings › Privacy**): **don't build extra screens that affect the flow of health data.**

### Activity rings
- Show **progress toward Move, Exercise and Stand goals** with the **Activity ring element**. **The Activity app defines each ring's position and colour**, so people **recognise and understand it**. (A screenshot: **the Activity app's History screen with daily ring progress for June and part of July**.) (Developer: `HKActivityRingView`; see also the Activity rings component page.)
- **must** **Use Activity rings for Move, Exercise and Stand only.** **Don't replicate or modify them for other purposes or other data**; **never show Move, Exercise and Stand progress in another ring-like element.**
- **must** **Show progress for a single person.** **Never represent more than one person**; **make clear whose progress it is** (a **label, photo or avatar**).
- **must not** **Use Activity rings for ornamentation**: **they inform, they don't decorate**; **never in labels or background graphics.**
- **must not** **Use Activity rings for branding**: **never in the app icon or marketing materials.**
- **must** **Keep Activity ring and background colours.** The look **must be the same in every context**: **no filters, colour changes or opacity changes**; **design the surrounding interface to blend** (e.g. **enclose the rings in a circle**); **scale appropriately** so they don't seem disconnected.
- **must** **Keep Activity ring margins:** **outer margin no less than the distance between rings**; **nothing may crop, obstruct or encroach on the margin or the rings.** **To show them inside a circle, adjust the enclosing view's corner radius rather than applying a circular mask.**
- **should** **Differentiate other ring-like elements from Activity rings.** **Mixed ring styles confuse**; **separate them with padding, lines or labels; colour and scale help.**
- **should** **Provide app-specific information only in Activity notifications.** **The system already delivers Move, Exercise and Stand progress updates**: **don't repeat that information and never show an Activity ring element in your notifications**; **referencing Activity progress is fine if it's unique to your app.**

### Apple Health icon
- The **Apple Health icon** shows that an app **works with HealthKit and the Health app**. (Marketing badge: "Works with Apple Health".) (An onboarding screenshot for an app called *Eating Habits* shows **the Apple Health icon, text explaining how syncing helps manage health, a "Sync Health Data" button and a "Skip for Now" button**.)
- **must** **Use only the Apple-provided icon** (Apple Design Resources); **don't create or mimic your own.**
- **should** **Display the name "Apple Health" close to the icon** so people **connect the icon with the Health app.**
- **should** **Display the icon consistently with other health-related app icons**: **no smaller than the others** in a view with several.
- **must not** **Use the icon as a button**: **only to indicate compatibility.**
- **must not** **Alter the icon**: **no masking to change the corner radius or make it circular; no borders, colour overlays, gradients, shadows or other effects.**
- **must** **Keep clear space of 1/10 of its height**; **don't composite it onto another graphic element.**
- **must not** **Use the icon within text or as a replacement for "Health", "Apple Health" or "HealthKit"** (→ Editorial guidelines).
- **must not** **Display Health app images or screenshots**: **they are copyrighted and can't appear in your app or marketing.** **You may include an Activity ring element to show Move, Exercise and Stand progress.**

### Editorial guidelines
- **must** **Refer to the Health app as "Apple Health" or "the Apple Health app"** in app and marketing text (it adds clarity).
- **must not** **Use the term "HealthKit"** in people-facing text: **it's a developer-facing framework name**; to explain, say **"works with the Apple Health app"** or **"uses data from the Apple Health app"**.
- **must** **Capitalise "Apple Health" correctly**: **two words, uppercase A and H, lowercase letters otherwise**; **all uppercase only to match an established all-caps interface style.**
- **should** **Use the system-provided translation of "Health"** so people aren't confused; **refer to the app by the translation they see on their device.**

### Platform considerations
- **iOS, iPadOS, watchOS:** no additional considerations. **macOS, tvOS, visionOS:** not supported.

## Specs & values
| Item | Value |
|---|---|
| What HealthKit is | central repository for health and fitness data on iOS, iPadOS, watchOS |
| When to ask | only if the app has health/fitness functionality; in context, each time access is needed |
| Permission text | a few succinct sentences on the standard screen; no lookalike screens |
| Sharing controls | only Settings › Privacy (no in-app screens that change data flow) |
| Activity ring goals | **Move · Exercise · Stand** |
| Ring rules | one person, labelled; not decorative or branding; colours and background unchanged; outer margin ≥ the distance between rings; rounded-corner enclosure, not a circular mask; other rings separated; not in notifications |
| Apple Health icon | Apple's artwork; name "Apple Health" beside it; ≥ other health icons; not a button; unaltered; clear space **1/10** of its height; not in text; no Health screenshots |
| Wording | "Apple Health" / "the Apple Health app"; **never "HealthKit"**; two words, capital A and H; system translation of "Health" |
| Developer docs | **HealthKit** · "Protecting user privacy" · `requestAuthorization(toShare:read:completion:)` · **`HKActivityRingView`** (HealthKitUI) |
| Videos (links only, not watched) | Deliver workout insights with HealthKit workout zones (WWDC26 207) · Meet the HealthKit Medications API (WWDC25 321) · Track workouts with HealthKit on iOS and iPadOS (WWDC25 322) |
| Apple's Related list | Works with Apple Health · Activity rings (✓) · Apple Design Resources |
| Change log | none on the page |

## Visual notes (link-only: from alt text)
- **Hero:** a sketch of the **HealthKit icon** over grid lines, **tinted blue** (alt).
- **Screenshots (all illustrative):** **Health app summary** (activity, active energy, stair speed, heart rate, resting energy, stand minutes), **Health Access screen** (write and read mindful minutes), **Activity app History** (daily rings for June and part of July), **an app's onboarding screen with the Apple Health icon, explanatory text, "Sync Health Data" and "Skip for Now"**.
- **Mismatches / notes:**
  1. **The page tells apps not to show Health app screenshots**, yet **its own screenshots are Apple's** (fine for Apple's documentation; **not allowed for apps**).
  2. **"Request access every time it needs access" appears twice** (here and in CareKit's HealthKit section) **with slightly different wording** ("it's a good idea" vs "needs to make a request").
  3. **The Activity rings section uses "never" often** but **the icon section says "don't"**; **both are absolute in intent**.
  4. **The Editorial section refers to the app as "Apple Health" and the Health app**, while **the abstract uses "Health and fitness data" and "HealthKit"** (developer-facing).
  5. **The Activity rings rule "corner radius, not a circular mask"** is **specific to rendering** and **the page gives no numeric margin**, only "no less than the distance between rings".
  6. **The page has no Change log**, so **its currency can't be checked from the page**.
- **Catalog:** the script found **0 comparisons** (screenshots and hero are single images). Catalog stays **258**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
**Web pages can't read or write HealthKit** (no browser API; a web app can only reach Health data through **your native app or a user-exported file**). **What transfers:** **health-data privacy and consent**, **honest use of Apple's marks**, **not imitating Activity rings**, and **wording**. Legal notes are background knowledge (not from the page); **health data often triggers strict laws (for example HIPAA, GDPR special-category data, KVKK), so get specialist review**.

| HIG rule | Web implementation |
|---|---|
| Only ask for health data if the app is health/fitness | **Collect health data only for a stated health/fitness purpose**; **no "just in case" fields**; **don't request it in unrelated flows**. |
| Permission and protection; privacy policy | **Explicit consent before collecting or importing health data**; **a privacy policy URL linked at collection points**; **HTTPS, encryption at rest, access control, minimal retention**; **no health data in URLs, analytics or ad scripts** (`privacy.md`). |
| Request only when needed; each time | **Ask at the moment of use** (**when logging weight**, **when importing a file**); **re-confirm before each new use or sharing**; **withdrawal at any time**. |
| Descriptive sentences beside the permission; no lookalike screens | **A short reason sentence next to the trigger** (browsers show no custom permission text) and **no fake system prompt** (`privacy.md`). |
| Sharing managed only in system settings | **One place for consent and sharing settings** in the product (**per data type and per recipient**), **honour browser/OS permissions** for device features (**motion, camera**), **don't scatter switches**. |
| Import from Apple Health | **Let people upload an Apple Health export (`export.zip` / `export.xml`) or connect through your iOS app**; **explain how to export** ("Health app › profile picture › Export All Health Data"); **parse locally in the browser (`FileReader`/Web Worker) when possible**; **show what was imported and offer deletion**. |
| Activity rings: Move, Exercise, Stand only; one person; not decorative | **Don't draw Apple's Activity rings for other data**; **for progress-ring charts use a distinct style (single ring, different colours and labels, or a bar)** and **separate visually from any real Activity ring** (`activity-rings.md`); **label whose progress it is**; **no rings in icons or marketing**. |
| Keep colours and background; margins; enclosure | **If you render real Activity data as rings** (an **Apple-official** ring asset, **not a lookalike**), **keep the ring colours, background and margin (≥ ring gap)**, **no CSS filters/opacity/blend**, **enclose with `border-radius`**, **not `clip-path: circle()`/a mask**. |
| Activity notifications | **Don't repeat system progress in your notifications**; **app-specific messages only**; **no ring graphics in notifications** (`notifications.md`). |
| Apple Health icon | **Use only in a real Apple Health integration** (an **iOS app that syncs**), **artwork from Apple Design Resources, unaltered**, **"Apple Health" text beside it**, **≥ other icons' size**, **clear space ≥ 1/10 of its height**, **non-interactive** (`<img alt="Apple Health">`, **not inside `<a>`/`<button>`**), **no circular mask, borders, shadows**; **no Health screenshots**. **Otherwise use a generic health icon (Lucide `heart-pulse`)**. |
| Terminology | **Copy deck:** **"Apple Health"** (two words), **"works with the Apple Health app"**, **never "HealthKit"** in user-facing text, **capital A and H**, **the localised "Health"** (`writing.md`). |
| Native-only | **HealthKit (`HKHealthStore`, authorisation, queries), `HKActivityRingView`, the Health app, Works with Apple Health badge** are native/Apple assets; **the web uses your backend, file import and consent UI**. |

Field-note cross-links:
- `field-notes/*`: **no health-data recipe**; nothing conflicts.
- `hig/technologies/carekit.md` (✓): **repeats the HealthKit permission, privacy-policy and system-settings rules** (this page is the source); `hig/components/status/activity-rings.md` (✓): **the Activity ring element rules (Apple's Related page)**; `hig/patterns/workouts.md` (✓): **HealthKit workouts and rings**; `hig/foundations/privacy.md` (✓): **permission timing and purpose text**; `hig/foundations/writing.md` (✓): **product-name capitalisation and terminology**; `hig/components/system-experiences/notifications.md` (✓): **notification content**; `hig/foundations/branding.md` (✓): **using Apple marks and partner badges**; `hig/technologies/airplay.md` (✓) and `apple-pay.md` (✓): **same "Apple mark is not a button" and "name in copy" structures**; `hig/inputs/gyro-and-accelerometer.md` (✓): **motion data and permission**.
- Not yet ingested (linked from this page): none in the HIG (Works with Apple Health and Apple Design Resources are external).

## Checklist
- [ ] **Health data is requested only when the app has health/fitness functionality**, **in context, each time it's needed, with a reason sentence beside the trigger**.
- [ ] **A privacy policy is linked; health data isn't in URLs or third-party scripts; consent can be withdrawn.**
- [ ] **Sharing controls live in one place**, **no lookalike permission screens**.
- [ ] **Apple Health import** (export file or companion app) **explains how**, **parses safely**, **shows what was imported**, **offers deletion**.
- [ ] **Activity rings appear only for real Move/Exercise/Stand data of one labelled person**, **unaltered colours/background, margin ≥ ring gap, enclosure via corner radius**; **no rings as decoration, branding or in notifications**.
- [ ] **Other progress rings look clearly different from Activity rings.**
- [ ] **Apple Health icon: official artwork, unaltered, non-interactive, name beside it, ≥ other icons, 1/10 clear space, not inside text; no Health screenshots.**
- [ ] **Copy says "Apple Health" / "the Apple Health app", never "HealthKit", spelled and cased correctly.**

## Related
- Ingested: CareKit (✓), Activity rings (✓), Workouts (✓), Privacy (✓), Writing (✓), Notifications (✓), Branding (✓), AirPlay (✓), Apple Pay (✓), Gyroscope and accelerometer (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: HealthKit · "Protecting user privacy" · `HKActivityRingView`. External: Works with Apple Health, Apple Design Resources.
- Videos: Deliver workout insights with HealthKit workout zones (WWDC26 207), Meet the HealthKit Medications API (WWDC25 321), Track workouts with HealthKit on iOS and iPadOS (WWDC25 322).
