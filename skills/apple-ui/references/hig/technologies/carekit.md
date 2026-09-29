# CareKit
Source: https://developer.apple.com/design/human-interface-guidelines/carekit · Section: Technologies · Supported platforms: **iOS and iPadOS** (page data; the platform text: "No additional considerations for iOS or iPadOS. **Not supported in macOS, tvOS, visionOS, or watchOS**") · Ingested: 2026-09-29 · Apple last updated: **May 2, 2023** (the only Change log row: guidance consolidated into one page; same date in the page's data). **Link-only ingestion: one DocC fetch, read in full (148 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the catalog list. Not marked critical: no token file, checker or gate. Numbers on the page: **CareKit 2.0** (two projects: CareKit UI and CareKit Store), **3 view categories**, **5 task styles**, **3 chart styles**, **2 contact styles**, **4 task fields** (2 required), example schedule "four times a day", example dose "every 4–6 hours, not to exceed 4 tablets daily".

## In one line
**CareKit** builds **care-plan apps** (chronic illness such as diabetes, recovery from injury or surgery, health and wellness goals) from **prebuilt views** (CareKit UI) and an **on-device database** (CareKit Store: patients, care plans, tasks, contacts) that stay in sync. **Privacy comes first:** **a clear privacy policy URL, permission before any data access, request health data only in context, add a few succinct sentences to the standard permission screen (no lookalike screens), and manage sharing only through the system's privacy settings.** **Use the view types for their purpose: tasks (five styles: simple, instructions, log, checklist, grid), charts (bar, scatter, line) and contacts (simple, detailed).** **Tasks:** required **title and schedule**, optional instructions and group ID; accurate but simple wording (marketing names, no repeated "take"), colour as an extra cue only, videos or images for complex tasks. **Charts:** show trends and narratives, short labels, distinct colours with enough contrast, a legend if needed, clear units of time, consolidated large data, offsets for very small values. **Contacts:** simple or detailed with phone, message, email and map; colour to categorise. **Notifications:** few, coalesced, with a detail view for quick actions. **Symbols and branding:** CareKit symbols (SF Symbols for custom items in grids), relevant care symbols, no decorative symbols or corporate logos, **refined branding, no advertising**. On the web: **patient-facing care-plan pages with accessible task lists and charts, and health-grade privacy (consent, minimal data, HIPAA/GDPR-type compliance, background)**; CareKit itself is native-only.

## Rules

### Framing (intro)
- People use CareKit apps to **manage care plans** for **a chronic illness like diabetes**, **recovery from an injury or surgery**, or **health and wellness goals**. (More on Apple's Research & Care site.)
- **CareKit 2.0 = two projects:**
  - **CareKit UI:** **a wide variety of prebuilt views** for a custom CareKit app.
  - **CareKit Store:** **a database scheme for CareKit entities (patients, care plans, tasks, contacts)** to **store and manage data on the patient's device**.
  - **Seamless synchronisation between the database and the UI**, so a care plan **stays up to date**.

### Data and privacy
- **Nothing is more important than protecting privacy and safeguarding the extremely sensitive data a CareKit app collects and stores.**
- **must** **Provide a coherent privacy policy.** During app submission **you must provide a URL to a clearly stated privacy policy**, viewable from **the app's App Store page** (developer: App Store Connect help "App information").
- **must** **Get permission before accessing data through iOS features, and protect all data** (**entered in the app or obtained from the device or system**) (developer: HealthKit "Protecting user privacy").

#### HealthKit integration
- **HealthKit** is **the central repository for health and fitness data in iOS and watchOS**. With HealthKit support you can **ask permission to access and share health and fitness data with designated caregivers**.
- **should** **Request access to health data only when needed.** Example: **weight when people log their weight**, **not right after launch**. **Requests clearly tied to the current context help people understand your intent**, and since **people can change permissions later**, **request each time the app needs access** (developer: `requestAuthorization(toShare:read:completion:)`).
- **should** **Clarify intent with descriptive messages on the standard permission screen.** People **expect the system permission screen**; **write a few succinct sentences on why you need the data and how sharing it helps**; **don't add custom screens that replicate the standard screen's behaviour or content**.
- **must** **Manage health data sharing solely through the system's privacy settings** (**Settings › Privacy**, where people manage access globally); **don't build extra screens in the app that affect the flow of health data**.
- Related: HealthKit (design and developer pages).

#### Motion data
- **If it's useful for treatment and people permit**, the app can get **motion information**: **standing still, walking, running, cycling or driving**; while **walking or running**, **step count, pace and flights of stairs ascended or descended**. Motion information can also include **custom data collected as part of physical therapy**: some **ResearchKit tasks use device sensors to test flexibility, range of motion and ambulatory capability** (developer: Core Motion).

#### Photos
- **Pictures communicate treatment progress.** **With permission**, the app can **access the camera and photos to share pictures with a care team**, e.g. **periodic photos of an injury** so the physician can **monitor healing** (developer: `UIImagePickerController`).

#### ResearchKit integration
- **A ResearchKit app lets people join medical research studies.** A CareKit app can **incorporate ResearchKit features (related surveys, tasks, charts) if appropriate**, including the **informed consent module** to **request permission to collect and share data**. Related: ResearchKit (design page; Research & Care developers).

### CareKit views
- **CareKit UI provides customisable views in three categories: tasks, charts and contacts**, with **several default view styles in each**. To design a CareKit app **choose the view styles and supply CareKit Store data**.
- **should** **Use each view type for its intended purpose** for consistency:
| Category | Purpose |
|---|---|
| Tasks | **Present tasks such as taking medication or doing physical therapy**; **support logging symptoms and other data** |
| Charts | **Display graphical data that helps people understand how treatment is progressing** |
| Contact views | **Display contact information**; **support phone, message and email**, and **link to a map of the contact's location** |
- (Two screenshots: an iPhone screen with **completed and uncompleted days, a medication task, a chart comparing nausea with medication intake, and a logging task for each occurrence of nausea**; and one with **two doctors' contact details and buttons for phone, message, email and map directions**.)
- **View anatomy:** **a header, optionally a stack of content subviews below it**. **The header (top) can show text, a symbol and a disclosure indicator, and can have a separator at its bottom edge**; the **content stack shows subviews vertically**. (An illustration labels **the header (title left, optional disclosure indicator right), the subview area with circular checkmark buttons for medication times, and the separator**.) **CareKit UI manages all layout constraints**, so adding subviews doesn't break existing constraints.

#### Tasks
- A care plan generally has **prescribed actions** (**taking medication, eating specific foods, exercising, reporting symptoms**). CareKit UI has several task view styles; you usually **supply the data (often from the on-device CareKit Store)** and sometimes **custom UI elements**.
- **A task holds:**
| Information | Required | Description | Example |
|---|---|---|---|
| Title | **Yes** | a word or short phrase introducing the task | Ibuprofen |
| Schedule | **Yes** | when the task must be completed | Four times a day |
| Instructions | No | detailed instructions, recommendations, warnings | Take 1 tablet every 4–6 hours (not to exceed 4 tablets daily). |
| Group ID | No | an identifier for grouping similar tasks (e.g. medication, exercise) | a category identifier |
- **CareKit 2.0 has five task styles**, each for a use case:
  - **should** **Simple: a one-step task.** A **header with title, subtitle and a button**; you supply title and subtitle and optionally **a custom image for the completed button** (otherwise **the button fills in and shows a checkmark**). **No content stack**, so use another style if you need more content. (An illustration: **a single dose at a time of day, filled circle with a checkmark = done**.)
  - **should** **Instructions: add informative text to a simple task** (e.g. **"Take on an empty stomach", "Take at bedtime"**). (An illustration: instructions plus the word **"completed"** and a checkmark.)
  - **should** **Log: help people log events** (e.g. **a button to tap when nauseated**); **automatically shows a timestamp for each logged event**. (An illustration: **a header with a title, a time range and a disclosure button; a subview with instructions, a Log button and the time completed**.)
  - **should** **Checklist: a list of actions or steps in a multistep task** (e.g. **three scheduled times a day**); **each item has a text description and a done button**; **instructional text can sit below the list**. (An illustration: breakfast, lunch, dinner with the first two checked.)
  - **should** **Grid: a grid of buttons in a multistep task**, **more compact** than the checklist; **a succinct title per button** (use the checklist if you need more description); **instructional text below by default**; **unlike the others, exposes its underlying collection view so you can show custom UI in the grid**. (An illustration: three circles for three doses, two checked.)
- **may** **Use colour to reinforce the meaning of task items** (e.g. **one colour for medications, another for physical activities**); **never use colour as the only way to convey information** (→ Color).
- **should** **Combine accuracy with simplicity in task wording.** Use a medication's **marketing name rather than its chemical description**; **when context clarifies meaning, use fewer words** (a daily medication task may not need the word **"take"**).
- **may** **Supplement multistep or complex tasks with videos or images**; **showing how to perform a task helps avoid mistakes**.

#### Charts
- **Chart views present data and trends graphically** so people **see progress in a care plan**; they show **current and historical data and update automatically with new data**.
- **Three chart styles: bar, scatter, line.** For each you provide **a descriptive title and subtitle**, **axis markers (e.g. days of the week)** and **the data set**. (Illustrations: **the same data in each style, days of the week on the x-axis and dosage numbers on the y-axis: Thursday reaches 2, meaning the medicine was taken twice that day**; the line chart stays at zero on the other days.)
- **may** **Highlight narratives and trends.** E.g. **a bar chart correlating how often people took medication with their pain level**; showing such data **can encourage adherence**.
- **should** **Label chart elements clearly and succinctly.** **Long labels make a chart hard to read; keep them short and don't repeat** (e.g. **"BPM" once on the axis, not on every data point label**).
- **should** **Use distinct colours.** **Avoid different shades of the same colour meaning different things**; **ensure sufficient contrast** (→ Accessibility).
- **may** **Provide a legend** when **colours for different data types aren't immediately clear**, **short and clear**.
- **should** **Clearly denote units of time** (**seconds, minutes, hours, days, weeks, months or years**) **in an axis label or elsewhere** if not on each value label.
- **should** **Consolidate large data sets**: **too much data makes points tiny and the chart unreadable**; **group and organise for clarity**.
- **may** **Offset data to keep charts proportional**: **very small values get lost next to very large ones**; **offset or restructure so every point stays readable**.
- (Developer: CareKit "Chart Interfaces"; ResearchKit charts are in the ResearchKit GitHub project.)

#### Contact views
- A care plan usually includes **a care team and other trusted individuals**; the **contact view** helps patients **communicate** with them. **Two styles: simple and detailed.** (Illustrations: **simple: a person glyph, a doctor's name and practice type, a disclosure button**; **detailed: the same header plus a subview with information about the doctor and buttons to call, message, email and navigate to the address**.)
- **may** **Use colour to categorise care team members** at a glance.

### Notifications
- Notifications **tell people when to take medication or complete a task**; **badging the app icon can show an unread caregiver message**; **Apple Watch can also show the app's notifications** (→ Notifications).
- **should** **Minimise notifications.** Care plans vary (**a few daily tasks vs a long list**); **use notifications sparingly** so people aren't overwhelmed; **coalesce several items into one notification when possible**.
- **may** **Provide a notification detail view**: **more information plus immediate action without leaving the current context** (e.g. **a list of pending tasks to mark complete**).

### Symbols and branding
- CareKit uses **built-in symbols** (**phone, messaging and envelope in a contact view; clock in a log task**). You can customise them, but **most view styles work best with CareKit's own symbols**, **except the highly customisable grid-style task view**, which can show your **custom UI in a grid**.
- **In a grid** you may show **custom symbols relevant to your content** (e.g. **a pill for medication tasks, a walking person for exercise tasks**); **consider SF Symbols** for custom items: they **coordinate with CareKit's visual design language** and **support custom symbols for your unique content**.
- **should** **Design a relevant care symbol:** **closely related to the app or to health and wellness**; **avoid purely decorative symbols or a corporate logo** as a custom symbol.
- **should** **Incorporate refined, unobtrusive branding.** People **use CareKit apps for health goals and don't want advertising**; **brand subtly through colour and communication style** so as not to distract from the care plan.

### Platform considerations
- **iOS, iPadOS:** no additional considerations. **macOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
| Item | Value |
|---|---|
| CareKit 2.0 projects | **CareKit UI** (prebuilt views) · **CareKit Store** (on-device database: patients, care plans, tasks, contacts) |
| View categories | **tasks · charts · contacts** |
| Task styles (5) | **simple · instructions · log · checklist · grid** |
| Task fields | **Title (required) · Schedule (required) · Instructions · Group ID** |
| Chart styles (3) | **bar · scatter · line** (title, subtitle, axis markers, data set) |
| Contact styles (2) | **simple · detailed** (phone, message, email, map) |
| Health data | request in context, each time needed; descriptive sentences on the system permission screen; no lookalike screens; manage sharing via Settings › Privacy only |
| Motion data (with permission) | still, walking, running, cycling, driving; steps, pace, flights of stairs |
| Notifications | few; coalesce; optional detail view with quick actions; app icon badge for caregiver messages |
| Symbols | CareKit-provided (phone, message, envelope, clock); grid can use custom or SF Symbols; no decorative or logo symbols |
| Developer docs | **CareKit** (GitHub docs, "Chart Interfaces") · Research & Care developers · HealthKit "Protecting user privacy" · HealthKit · ResearchKit GitHub · Core Motion · `UIImagePickerController` · `requestAuthorization(toShare:read:completion:)` |
| Videos (links only, not watched) | What's new in CareKit (WWDC20 10151) · Build a research and care app, part 1: Setup onboarding (WWDC21 10068) |
| Apple's Related list | Research & Care › CareKit |
| Change log | May 2 2023: consolidated into one page |

## Visual notes (link-only: from alt text, captions and the catalog list)
- **Hero:** a sketch of the **CareKit icon** over grid lines, **tinted blue** (alt).
- **Screens (catalog `carekit-01`):** **tasks and charts** (completed and uncompleted days, a medication task, a nausea-vs-medication chart, a nausea log task) and **contacts** (two doctors with phone, message, email, map buttons).
- **View anatomy:** the **task view with callouts for header, title, optional disclosure indicator, separator and subview area** with circular checkmark buttons.
- **Task styles (5 illustrations):** simple (**filled circle and checkmark**), instructions (**plus the word "completed"**), log (**title, time range, disclosure, Log button, time completed**), checklist (**breakfast, lunch, dinner; first two checked**), grid (**three circles; two filled with checkmarks**).
- **Charts (3 illustrations, captions "Bar chart", "Scatter chart", "Line chart"):** the **same dosage data** for the week, **Thursday = 2**.
- **Contacts (catalog `carekit-02`):** **Simple** (glyph, name, practice, disclosure) and **Detailed** (header plus information and four action buttons).
- **Mismatches / notes:**
  1. **The page describes CareKit 2.0**; **newer CareKit versions aren't covered** and **the page has no date beyond the 2023 consolidation**.
  2. **Views are described only by structure (header + stack)**, **with no sizes, spacing or colours**; **the visual design is delegated to the framework**.
  3. **Four Related/developer links go to third-party hosted docs** (Research & Care site, CareKit GitHub docs), **not to Apple developer pages**.
  4. **"Consider using color to reinforce meaning" carries the rule "never use colour as the only cue"**, which the Charts and Contacts colour advice **doesn't repeat**.
  5. **The privacy section says "you must" for the policy URL and for permission**, but **the HealthKit and photo guidance uses "should" wording** for timing and text.
  6. **Task style "grid" is called "highly customizable"** while the **symbols section says other styles work best with CareKit's own symbols**; the **two statements together limit customisation to the grid**.
- **Catalog:** the script found **2 comparisons** (below). **Not catalogued:** the hero, the view-anatomy drawing, the five task-style drawings and the three chart drawings (single images). Catalog total **252** (was 250); the 250 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **carekit-01** and **carekit-02** (neutral pairs, light + dark):
- **carekit-01:** the **tasks-and-charts screen** and the **contacts screen** (page-level examples, no rule text).
- **carekit-02** (*Contact views*): the **simple** and **detailed** contact views.
The script reports **2 comparisons** for this page.

## Web translation
**CareKit is native-only** (iOS/iPadOS, on-device store). A web equivalent is a **patient-facing care-plan or wellness web app** (a **portal**, **PWA** or **companion site**). **The design rules apply directly; the privacy and compliance duties are heavier on the web** because **data leaves the device**. Legal and compliance statements are background knowledge, not from the page; **check the rules for your jurisdiction (for example HIPAA in the US, GDPR/KVKK elsewhere) with a specialist**.

| HIG rule | Web implementation |
|---|---|
| Privacy first; clear policy | **A privacy policy linked from every page and from consent points**, **plain-language "what we collect and why"** (`privacy.md`); **HTTPS only, HSTS, secure HttpOnly cookies, encryption at rest, access logs, minimal retention**; **don't put health data in URLs, analytics or third-party scripts** (**no tracking pixels on care pages**). |
| Permission before access; protect all data | **Every device capability (camera, geolocation, motion sensors, notifications) is asked from a user action next to its reason**; **health data entered on the site is protected the same as data from a device**. |
| Request health data only when needed; each time | **Contextual requests** (**ask for weight when logging weight**); **re-check consent before each sharing action**; **allow withdrawal at any time**. |
| Descriptive sentences on the system permission screen; no lookalike screens | **Browsers show no custom text** for permission prompts, so **one short reason sentence next to the trigger**; **never draw a fake permission prompt** (`privacy.md`). |
| Manage sharing only in the system's privacy settings | **One sharing/consent settings page** (per data type and per caregiver), **the single place that changes data flow**; **no scattered toggles**; **honour browser-level permissions** (`navigator.permissions`). |
| Motion, photos | **`devicemotion` needs permission on iOS** (`gyro-and-accelerometer.md`); **photos via `<input type="file" accept="image/*" capture>`** or **`getUserMedia`** on user action; **explain why and who sees the photo**; **strip EXIF location before upload** (background). |
| ResearchKit consent | **Informed-consent flow** (readable steps, comprehension check, signature, downloadable copy, **consent version recorded**), **separate from marketing consent** (`researchkit.md` once ingested). |
| Use each view type for its purpose | **A task list, a progress-chart section and a contacts section** as **distinct components**; **don't mix logging and chart in one widget**. |
| Task = title + schedule (+ instructions, group) | **Task data model:** `title` (required), `schedule` (required), `instructions`, `groupId`; **render "Ibuprofen · four times a day"**, **instructions collapsible** (`<details>`), **group headings by `groupId`**. |
| Simple / instructions / log / checklist / grid styles | **Simple:** **a labelled `<button role="checkbox" aria-checked>`** or a **checkbox with visible label**; **Instructions:** **checkbox + helper text**; **Log:** **a "Log" `<button>` that appends a timestamped entry** (`<time datetime>`) to a list; **Checklist:** **`<fieldset><legend>Ibuprofen</legend>` with one checkbox per scheduled time**; **Grid:** **a compact grid of toggle buttons** (`aria-pressed`) with **short labels**; **all ≥ 44 px targets** (`buttons.md`). **Completed state = check icon + text ("Completed")**, **not colour alone**. |
| Colour reinforces, never alone | **Category colour + icon + label**; **contrast ≥ 4.5:1 text, 3:1 graphics** (`color.md`). |
| Accurate but simple wording | **Marketing names; drop redundant verbs**; **"Ibuprofen 200 mg, with food"**; **plain language, reading level ~grade 6–8 (CONV)** (`writing.md`). |
| Videos or images for complex tasks | **Short captioned video or step images** with **transcripts and alt text** (`accessibility.md`). |
| Charts: bar, scatter, line; descriptive title/subtitle; axis markers | **SVG/Canvas charts** (`charting-data.md`, `charts.md`): **title, subtitle, labelled axes, data table alternative**; **bar for counts/adherence, line for trends over time, scatter for correlations**. |
| Narratives and trends | **A one-line takeaway above the chart** ("You took your medication 6 of 7 days this week"), **not clinical advice**. |
| Short, non-repeating labels; units of time; legend | **Axis label carries the unit ("BPM", "Day")**; **legend only if colours aren't obvious**; **time granularity stated**. |
| Distinct colours; enough contrast | **Different hues plus patterns/markers** (not shades of one colour); **contrast checks**; **`prefers-contrast`**. |
| Consolidate large data; offset small values | **Aggregate (weekly/monthly)**, **zoom/brush**, **log or broken axes only with a clear note**, **small multiples** instead of one crowded chart. |
| Contact view: phone, message, email, map | **`<a href="tel:…">`, `sms:`, `mailto:`, and a map link (`https://maps.apple.com/?q=` or the maps app URL)**; **simple** (name, role, disclosure) and **detailed** (info + four action links) **as a list with expandable rows**; **colour + label for team roles**. |
| Notifications: few, coalesced, detail view | **Web Push only on opt-in**, **one digest for several tasks ("2 tasks due")**, **action buttons in the notification** (`actions`) **to mark done**; **badge with `navigator.setAppBadge`** (PWA) for caregiver messages; **email/SMS fallbacks by preference**; **never include health details in the notification text by default** (lock-screen privacy; `notifications.md`). |
| Symbols (SF Symbols; relevant care symbols; no logos) | **Web icons: Lucide / Phosphor / Ionicons** (pill, footprints, heart-pulse, clock, phone, mail, map-pin), **never SF Symbols artwork**; **relevant, not decorative, no corporate logo as a care symbol**. |
| Refined branding, no advertising | **Muted brand in colour and tone only**; **no ads, no upsell banners, no third-party ad scripts on care pages**. |
| Native-only | **CareKit UI, CareKit Store (on-device database), HealthKit, Core Motion, `UIImagePickerController`, ResearchKit** are native iOS/iPadOS; **on the web build the views yourself (or with a design system) and use your backend with health-grade security**. |

Field-note cross-links:
- `field-notes/*`: **no care-plan or health-app recipe**; nothing conflicts.
- `hig/patterns/charting-data.md` (✓) and `hig/components/content/charts.md` (✓): **chart labelling, legends, colours, units, consolidation**; `hig/foundations/color.md` (✓ CRITICAL) and `accessibility.md` (✓): **colour never the only cue, contrast**; `hig/foundations/privacy.md` (✓): **permission timing, purpose text, no lookalike permission screens**; `hig/inputs/gyro-and-accelerometer.md` (✓): **motion data and permission**; `hig/components/system-experiences/notifications.md` (✓) and `hig/patterns/managing-notifications.md` (✓): **sparing, actionable notifications**; `hig/foundations/sf-symbols.md` (✓): **symbol guidance (native)**, web icons stay Lucide/Phosphor/Ionicons; `hig/foundations/branding.md` (✓): **subtle branding**; `hig/patterns/entering-data.md` (✓): **logging and input**; `hig/patterns/workouts.md` (✓): **health-adjacent activity tracking**; `hig/foundations/writing.md` (✓): **plain wording**.
- Not yet ingested (linked from this page): **HealthKit**, **ResearchKit** (Technologies).

## Checklist
- [ ] **A privacy policy is linked everywhere data is collected**; **health data is never in URLs, analytics or third-party scripts**; **transport and storage are encrypted**.
- [ ] **Permissions and consent are requested in context, from a user action, with a short reason beside the trigger**; **withdrawal is one click**.
- [ ] **Data sharing is managed in one settings place**; **no lookalike system prompts**.
- [ ] **Tasks have title + schedule** (instructions and group optional); **the right style is used** (simple, instructions, log, checklist, grid).
- [ ] **Completed states use icon + text, colour only reinforces**; **all controls ≥ 44 px**.
- [ ] **Task wording is accurate and short**; **complex tasks have captioned videos/images**.
- [ ] **Charts**: **title, subtitle, labelled axes with units, short labels, distinct colours with contrast, legend if needed, consolidated, small values still readable, data-table alternative**.
- [ ] **Contacts** have **tel/sms/mailto/map** actions; **roles are colour + label**.
- [ ] **Notifications are few, coalesced, opt-in, with quick "mark done" actions and no health details on the lock screen**.
- [ ] **Icons are Lucide/Phosphor/Ionicons, relevant to care**; **no corporate logo as a care symbol**.
- [ ] **Branding is quiet; no advertising anywhere in the care flow**.
- [ ] **Consent for research/data sharing is separate, versioned and revocable**.

## Related
- Ingested: Charting data (✓), Charts (✓), Color (✓ CRITICAL), Accessibility (✓), Privacy (✓), Notifications (✓), Managing notifications (✓), SF Symbols (✓), Branding (✓), Entering data (✓), Workouts (✓), Writing (✓), Gyroscope and accelerometer (✓).
- Not yet ingested (linked from this page): **HealthKit**, **ResearchKit** (Technologies).
- Developer docs: CareKit (GitHub docs) · Research & Care (CareKit, developers) · HealthKit "Protecting user privacy" · HealthKit · ResearchKit GitHub · Core Motion · `UIImagePickerController`.
- Videos: What's new in CareKit (WWDC20 10151), Build a research and care app, part 1: Setup onboarding (WWDC21 10068).
