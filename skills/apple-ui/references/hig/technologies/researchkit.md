# ResearchKit
Source: https://developer.apple.com/design/human-interface-guidelines/researchkit · Section: Technologies · Supported platforms: **iOS, iPadOS** (page data; the platform text: "No additional considerations for iOS or iPadOS. **Not supported in macOS, tvOS, visionOS, or watchOS**") · Ingested: 2026-09-29 · Apple last updated: **September 12, 2023** (the only Change log row: "Updated artwork"; same date in the page's data). **Link-only ingestion: one DocC fetch, read in full (90 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts only. Not marked critical: no token file, checker or gate. The page has **no measurements**; it names **4 onboarding steps** (introduction, eligibility, informed consent, permission to access data), **2 input styles** (surveys, active tasks), **2 always-available screens** (profile, dashboard) and **6 survey rules**.

## In one line
**A research app lets people join medical studies; ResearchKit supplies predesigned screens and transitions.** **Onboard in this fixed order: Introduction (purpose, call to action, quick log-in for existing participants) → Eligibility (as early as possible, only necessary questions, plain language) → Informed consent (concise sections with "Learn More", optional comprehension quiz, agree, signature, contact details, PDF copy by email) → Permission to access data (only what's critical, explain why, notifications if needed).** **Surveys: say how many questions and how long, one question per screen, show progress, keep them short (several short ones beat one long one), question font standard and explanation slightly smaller, say when complete.** **Active tasks: clear instructions, state requirements, make completion obvious.** **Keep a profile (edit changing data, leave the study, view consent and privacy policy) and a motivating dashboard reachable at all times.** The page **isn't legal advice**: consult an attorney. On the web: **an ordered, resumable enrolment flow with a consent record, one question per page with progress, a profile and a dashboard; everything sensitive under strict privacy and legal review.**

## Rules

### Framing (intro)
- **A research app lets people everywhere take part in important medical research studies.** **ResearchKit provides predesigned screens and transitions** for building **an engaging custom research app**.
- **The guidelines are informational and not legal advice**; **consult an attorney about laws that apply to a research app.**

### Creating the onboarding experience
The first launch shows **a series of screens that introduce the study, determine eligibility, request permission to proceed, and, when appropriate, grant access to personal data.** **They're rarely revisited, so clarity is essential.**
- **must** **Always display the onboarding screens in the correct order.** (Diagram alt: **four boxes in a row joined by arrows: Introduction → Eligibility → Informed consent → Permission to access data**.)

#### 1. Introduction
- **should** **Inform and give a call to action**: **clearly describe the subject and purpose of the study**; **let existing participants log in quickly and continue an in-progress study.** (Illustration: **an introductory screen on iPhone that invites someone to join a study**.)

#### 2. Determine eligibility
- **should** **Determine eligibility as soon as possible**: **people who aren't eligible needn't reach consent.**
- **should** **Present only the eligibility requirements the study needs**, **in simple, straightforward language, with easy data entry.** (Illustration: **fields for age, location and type of smartphone; "Back" and "Submit" buttons; a back button and a help button at the top**.)

#### 3. Get informed consent
- **must** **Make sure participants understand the study before consent.** **ResearchKit makes consent concise and friendly while still supporting legal requirements and review-board (IRB/ethics board) requirements**; **comply with the applicable App Store Guidelines, including consent requirements.** **Typically the consent section explains how the study works, ensures participants understand it and their responsibilities, and gets consent.**
- **should** **Break a long consent form into digestible sections**, each covering **one aspect (data gathering, data use, potential benefits, possible risks, time commitment, how to withdraw, and so on)**, with **a high-level overview in simple language and, if needed, a "Learn More" button for detail.** **Participants must be able to view the entire consent form before they agree.**
- **may** **Provide a quiz that tests understanding**, **as questions would be asked in person.** (Illustration: **a multiple-choice question with a "Next" button, back and help buttons at the top**.)
- **should** **Get the consent and, if appropriate, contact information**: **a confirmation dialog after agreeing, then screens for signature and contact details**; **most apps email a PDF of the consent form.** (Illustration: **a consent screen recapping key points, showing the person's name and "Disagree" and "Accept" buttons**.)

#### 4. Request permission to access data
- **must** **Get permission to access the participant's device or data, and to send notifications.** **Clearly explain why the app needs location, Health or other data**; **don't request data that isn't critical to the study**; **ask for notification permission if the app requires it.** (Illustration: **a screen recapping key points and offering to share data with researchers for future research or only for this study, with an "Accept" button**.)

### Conducting research
Studies use **surveys, active tasks, or both**; **participants may repeat sections or do them once.**
- **Surveys** (ResearchKit offers customisable screens for **true/false, multiple choice, dates and times, sliding scales and open-ended text**):
  - **should** **Tell participants how many questions there are and about how long the survey takes.**
  - **should** **Use one screen per question.**
  - **should** **Show progress.**
  - **should** **Keep the survey as short as possible**: **several short surveys tend to work better than one long one.**
  - **should** **For questions needing explanation, use the standard font for the question and a slightly smaller font for the explanatory text.**
  - **should** **Tell participants when the survey is complete.**
  - (Illustration: **a survey screen asking someone to pick Parkinson's symptoms from a list, with "Next" and a "Close" button at the top**.)
- **Active tasks** (**an activity such as speaking into the microphone, tapping fingers on the screen, walking or a memory test**):
  - **should** **Describe how to perform the task in clear, simple language.**
  - **should** **Explain requirements (a particular time or specific circumstances).**
  - **should** **Make sure participants can tell when the task is complete.**
  - (Illustration: **a Walk and Balance task with an illustration of a person walking, instructions, a list of requirements and a "Get started" button; "Close" at the top**.)

### Managing personal information and providing encouragement
**ResearchKit offers a profile screen; design a custom screen that motivates and tracks progress. Ideally both are accessible at all times.**
- **should** **Use a profile to manage study-related personal data**: **edit data that may change (weight, sleep habits), remind of upcoming activities**, **an easy way to leave the study and to view the consent document and privacy policy.** (Illustration: **a list of personal fields such as name and birth year, each with an edit button; a settings button at the top; tabs "Tracking", "History", "Profile" with Profile active**.)
- **should** **Use a dashboard to show progress and motivate**: **daily progress, weekly assessments, results of specific activities, and results compared with aggregated results of other participants.** (Illustration: **a history screen logging active tasks over two days; tabs "Tracking", "History", "Profile" with History active**.)

### Platform considerations
- **iOS, iPadOS:** no additional considerations. **macOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings**. Its concrete content:

| Item | Value |
|---|---|
| Onboarding order | **Introduction → Eligibility → Informed consent → Permission to access data** |
| Introduction | purpose + call to action + quick log-in for existing participants |
| Eligibility | as early as possible; only necessary requirements; simple language; easy entry |
| Consent | sectioned overview (data gathering, use, benefits, risks, time, withdrawal); "Learn More"; view whole form before agreeing; optional quiz; confirmation dialog; signature; contact details; PDF copy by email; comply with App Store Guidelines and IRB/ethics requirements |
| Permissions | explain why; only critical data (location, Health, other); notifications if needed |
| Survey rules | count and duration up front · one question per screen · progress · as short as possible (several short > one long) · question font standard + slightly smaller explanation · completion message |
| Answer types | true/false · multiple choice · dates and times · sliding scales · open-ended text |
| Active task rules | clear instructions · requirements stated · completion obvious |
| Always-available screens | profile (edit data, reminders, leave the study, consent and privacy policy) · dashboard (progress, encouragement, comparison with aggregate results) |
| Example bottom tabs (illustrations) | Tracking · History · Profile |
| Legal | not legal advice; consult an attorney |
| Developer docs | Research & Care (ResearchKit, Developers) · HealthKit "Protecting user privacy" · ResearchKit GitHub project |
| Videos (link only, not watched) | What's new in CareKit (WWDC20 10151) · Build a research and care app, part 1: Setup onboarding (WWDC21 10068) · ResearchKit and CareKit Reimagined (WWDC19 217) |
| Apple's Related list | Research & Care > ResearchKit (external) |
| Change log | Sep 12 2023: updated artwork |

## Visual notes (link-only: from alt texts)
- **Hero:** a sketch of **the ResearchKit icon** over grid lines, **tinted blue** (alt).
- **Order diagram (light and dark):** **four boxes joined by right-pointing arrows.**
- **Screens (light only, iPhone):** **introduction; eligibility (age, location, phone type; Back and Submit; back and help at the top); consent quiz (multiple choice, Next); consent (recap, name, Disagree and Accept); permissions/health data (share for future research or only this study, Accept); survey (Parkinson's symptoms, Next, Close); active task (Walk and Balance, requirements, Get started, Close); profile (name, birth year, edit buttons, tabs Tracking/History/Profile); dashboard/history (log of tasks over two days).**
- **Mismatches / notes:**
  1. **The page gives no sizes, spacing, typography values or colours**; **it describes screens and content order only.**
  2. **"Ask for consent → confirmation dialog → signature → contact details → PDF"** is **described as typical**, **not required**; **the legal requirements come from the study's IRB and applicable laws.**
  3. **"Show survey progress" and "one question per screen"** are **recommended**; **the page doesn't say how to show progress** (a bar, step count or both).
  4. **The permissions screen in the illustration offers a choice about sharing data for future research**; **the text doesn't mention it, so treat that as an example of separating study-only from broader consent.**
  5. **"Ideally... accessible at all times"** for the profile and dashboard is **a preference**, **and how to reach them isn't specified** (**the illustrations use tabs**).
  6. **No accessibility, vulnerable-population (children, cognitive impairment) or data-retention guidance is included** on this page.
  7. **The page has a disclaimer about legal advice and points to App Store Guidelines and IRB rules**; **this skill doesn't provide legal or medical advice.**
- **Catalog:** the script found **0 comparisons** (all screens are single images). Catalog stays **268**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
**ResearchKit is a native iOS/iPadOS framework** (open-source). **The web can host the same flow** as **a study portal or enrolment site**, **or a form/survey product**. **Everything below is design guidance only; legal, medical-ethics and data-protection duties (IRB approval, consent records, health-data law) need specialists** (background knowledge, not from the page).

| HIG rule | Web implementation |
|---|---|
| Correct onboarding order | **A stepper/wizard route in a fixed order** (`/join/intro` → `/eligibility` → `/consent` → `/permissions`), **state saved server-side so people can resume**; **guard routes so no step can be skipped or reached out of order**; **"Step 2 of 4"** (`progress-indicators.md`, `onboarding.md`). |
| Introduction: purpose + CTA + quick log-in | **A landing screen with a clear title, purpose, time commitment, a primary "Join the study" button and a secondary "Log in" for existing participants** (`buttons.md`). |
| Eligibility early, only necessary, simple | **Screener before the consent step**; **ask only questions the criteria need**; **plain-language labels, correct input types** (`text-fields.md`, `entering-data.md`); **if ineligible, say so kindly and offer contact or other studies**; **don't collect data from ineligible people beyond the screener** (**store only the minimum**). |
| Informed consent in digestible sections; Learn More; view whole form | **An accordion or stepped sections** (`disclosure-controls.md`) **each with an overview and a "Learn more" expander**; **a "View full consent form" link before agreeing**; **plain language, large readable text** (`typography.md`). |
| Comprehension quiz | **Short multiple-choice questions after the sections** (**radio groups, immediate specific feedback, retry allowed**), **written as in-person questions** (`toggles.md`/native radio patterns, `feedback.md`). |
| Consent, signature, contact, PDF copy | **A confirmation dialog, then a signature (typed name or drawn canvas, with legal review)**, **contact fields**, **email a PDF and offer a download**; **record consent version, timestamp and text**; **separate consent for optional uses** (future research vs this study) **and for marketing** (`alerts.md`, `privacy.md`). |
| Permissions: explain why, only critical | **Request only needed data/permissions at the moment of need** (**geolocation, notifications, connected health data**) **with a purpose sentence before the browser prompt**; **allow "Not now"**; **no dark patterns** (`privacy.md`). |
| Survey rules | **One question per page/screen; "Question 3 of 12 · about 5 minutes" up front and as progress**; **question text at body size with a smaller, muted explanatory line (≥ 14 px, CONV)**; **short surveys over one long one**; **autosave answers**, **a completion page** (`progress-indicators.md`, `sliders.md`, `text-fields.md`, `pickers.md`). |
| Active tasks | **Instruction page with illustration, requirements list and "Get started"**; **feature-detect sensors/mics** (`MediaDevices`, `DeviceMotion`) **and explain when unsupported**; **clear "Task complete" state**; **cancel/close always available.** |
| Profile screen | **An account/profile page**: **editable study data, upcoming activities, "Leave the study" (confirm; explain what happens to data), links to the consent document and privacy policy** (`settings.md`, `managing-accounts.md`). |
| Dashboard for encouragement | **Progress summary, streaks, charts, optional comparison with aggregate results**; **encouraging, factual copy; avoid pressure** (`charts.md`, `charting-data.md`, `activity-rings.md`). |
| Always accessible profile/dashboard | **Persistent navigation (tab bar on mobile widths, sidebar on desktop)** with Tracking / History / Profile-style destinations (`tab-bars.md`, `sidebars.md`). |
| Accessibility and inclusion | **Keyboard operable, labelled inputs, error text linked with `aria-describedby`**, **reading level plain**, **alternatives to tasks that need movement or speech** (`accessibility.md`, `inclusion.md`). |
| Native-only | **ResearchKit modules (`ORKTaskViewController`, consent/signature steps, active tasks, HealthKit/Core Motion sensors)** are native; **web builds recreate the flow with forms and standard web APIs.** |

Field-note cross-links:
- `field-notes/*`: **no study/consent recipe**; nothing conflicts. **`field-notes/principles.md` §16** (calm, factual copy) **fits** consent and eligibility copy.
- `hig/technologies/carekit.md` (✓): **Apple's care-plan sibling that can incorporate ResearchKit surveys, tasks and charts** (its "Not yet ingested: ResearchKit" line is now updated); `hig/technologies/healthkit.md` (✓): **sensitive health data permissions and the "Protecting user privacy" doc**; `hig/foundations/privacy.md` (✓): **purpose text, minimum data, consent**; `hig/patterns/onboarding.md` (✓): **ordered first-run flows**; `hig/patterns/entering-data.md` (✓) and `text-fields.md` (✓): **eligibility and survey inputs**; `hig/components/layout/disclosure-controls.md` (✓): **consent sections with Learn More**; `hig/components/presentation/alerts.md` (✓): **consent confirmation**; `hig/components/status/progress-indicators.md` (✓): **survey progress**; `hig/patterns/settings.md` (✓) and `managing-accounts.md` (✓): **profile**; `hig/components/content/charts.md` (✓) and `hig/patterns/charting-data.md` (✓), `activity-rings.md` (✓): **dashboard**; `hig/components/navigation/tab-bars.md` (✓): **Tracking/History/Profile tabs**; `hig/technologies/id-verifier.md` (✓): **minimum-data principle for sensitive checks**; `hig/technologies/machine-learning.md` (✓): **calibration once, minimal, cancellable, editable**; `hig/foundations/accessibility.md` (✓) and `inclusion.md` (✓).
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **Onboarding runs in this order and can't be skipped:** **introduction → eligibility → informed consent → permission to access data**; **existing participants can log in and resume.**
- [ ] **Eligibility comes early and asks only what's necessary, in plain language.**
- [ ] **Consent is sectioned with "Learn more", shows the whole form before agreeing, may include a comprehension quiz, records version and time, and sends the participant a copy.**
- [ ] **Data and notification permissions are requested only when critical, with the reason stated first.**
- [ ] **Surveys state length up front, use one question per screen, show progress, stay short and end with a completion message.**
- [ ] **Active tasks give clear instructions and requirements and a clear completion signal.**
- [ ] **A profile (edit data, leave the study, consent and privacy policy) and a motivating dashboard are always reachable.**
- [ ] **Legal, ethics-board and data-protection review is done outside this guidance.**

## Related
- Ingested: CareKit (✓), HealthKit (✓), Privacy (✓), Onboarding (✓), Entering data (✓), Text fields (✓), Disclosure controls (✓), Alerts (✓), Progress indicators (✓), Settings (✓), Managing accounts (✓), Charts (✓), Charting data (✓), Activity rings (✓), Tab bars (✓), ID Verifier (✓), Machine learning (✓), Accessibility (✓), Inclusion (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: Research & Care (ResearchKit, Developers) · HealthKit "Protecting user privacy" · ResearchKit GitHub project.
- Videos: What's new in CareKit (WWDC20 10151) · Build a research and care app, part 1: Setup onboarding (WWDC21 10068) · ResearchKit and CareKit Reimagined (WWDC19 217).
