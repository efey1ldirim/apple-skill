# Action button
Source: https://developer.apple.com/design/human-interface-guidelines/action-button · Section: Inputs (first page of the group) · Supported platforms: **iOS (supported iPhone models) and watchOS (supported Apple Watch models)** ("Not supported in iPadOS, macOS, tvOS, or visionOS"; the iPhone and Watch icons are lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **September 12, 2023** (updated to include guidance for iOS; the other row: September 14, 2022, new page). One DocC fetch, read in full. **4 screenshots (hero → the start of Apple's site footer)** were compared with the fetched text, image alt text and the change log line by line; they cover the **whole page** (the Change log table is visible in the last one). The browser was in **dark appearance** in these screenshots; the content is identical. Everything visible matches the fetch except the note under **Mismatches**. **Read from the fetch only (not in screenshots):** the alt text of the hero and its dark variant. The page has **no videos**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **one number** (labels: **at most three words**).

## In one line
The **Action button** is a **physical button on supported iPhone and Apple Watch models** that runs **a function the person chose** (an **App Shortcut** or system functionality such as the flashlight; on **Apple Watch Ultra**, activity actions such as workouts and dives). Treat it as **another quick way to reach something people do regularly**: **offer a small set of your essential functions**, **name each with a short verb-first Title-Case label (≤ 3 words, present tense, no articles or prepositions)**, **let the system teach people how to use it**, **on iPhone keep them in context (Live Activities, snippets)**, and **on Apple Watch make follow-up presses flow from the first, prefer extra functions over stop/conclude, and pause on Action + side button together (except while diving)**. Physical hardware input: on the web the nearest ideas are **keyboard shortcuts, media keys and one-tap quick actions**.

## Rules

### Framing (intro)
- On a supported device people can use the Action button **to run App Shortcuts** or **use system-provided functionality**, like **turning the flashlight on or off**. On **Apple Watch Ultra** it supports **activity-related actions**, including **workouts and dives**.
- People **choose a function when they set up the device** and can **change it later in Settings**. When an **App Shortcut** is tied to the button, pressing it **runs the shortcut like using Siri by voice or tapping it in Spotlight**.
- **Design mindset:** think of the Action button as **another way to quickly reach a function someone uses regularly**.

### Best practices
- **should** **Support the Action button with a set of the app's essential functions.** Example: a cooking app's **"Start Egg Timer"**. **Don't offer an App Shortcut that just opens the app**: **the system already provides that**; the app icon, widgets and Apple Watch complications are other quick ways to open it. (See App Shortcuts.)
- **should** **Write a short label for each supported action.** People see the labels **in Settings when configuring the button**. Labels: **title-style capitalisation**, **begin with a verb**, **present tense**, **no articles or prepositions**, **as short as possible, at most three words**. Example: **"Start Race"**, not "Started Race" or "Start the Race".
- **should** **Let the system show people how to use the Action button with your app.** When you support it the system **helps people configure it to start one of your functions**; **don't create content that repeats the Settings guidance** or other usage tips the system provides.

### Platform considerations
- **iPadOS, macOS, tvOS, visionOS:** not supported.

#### iOS
- **should** **Let people use actions without leaving their current context**: where possible use **lightweight multitasking such as Live Activities and custom snippets** so the function works **without opening the app**. Example: **"Set Timer"** doesn't launch Clock; it **asks for a duration** and then **starts a Live Activity with the countdown**.

#### watchOS
- A person can assign the **first press** to **drop a waypoint, start a dive or begin a specific workout**. Beyond one press the button supports **secondary actions**, such as **marking a segment or moving to the next modality in a multi-part workout**.
- **should** **Consider offering a secondary function that supports or advances the chosen primary action.** People often press it **without looking at the screen**, so the next press must **flow logically from the first** and **make sense in the current context**. For workout or dive actions design **a simple, intuitive secondary function that is easy to learn and remember**; **think carefully before offering more than one**: it **raises cognitive load** and makes the app seem harder.
- **should** **Use subsequent presses for additional functionality, not to stop or conclude a function.** If people need to **stop** the main task (as opposed to **pausing**), **offer that in the interface** instead.
- **should** **Pause the current function when the Action button and the side button are pressed together.** **Exception: a diving app**, where pausing may be dangerous (losing track of depth or time underwater). **Unless pausing gives a negative experience**, meet the expectation and **pause on the two-button press**.

## Specs & values
| Item | Value |
|---|---|
| Label length | **≤ 3 words** |
| Label style | **Title Case**, **verb first**, **present tense**, **no articles or prepositions** |
| Chosen at | device setup; changeable in **Settings** |
| What it can run | App Shortcuts, system functions (e.g. flashlight); Watch Ultra: activities (workouts, dives), waypoint |
| Watch multi-press | first press = primary action; later presses = secondary actions (mark segment, next modality); **Action + side button = pause** (not for dive apps when pausing is unsafe) |
| Secondary functions per app | **prefer one** |
| iOS context | Live Activities and custom snippets instead of launching the app |
| Platforms | iOS (supported iPhones), watchOS (supported Apple Watches); **not** iPadOS, macOS, tvOS, visionOS |
| Apple's Related list | Workouts (✓), Digital Crown (not yet ingested), App Shortcuts (✓), Live Activities (✓) |
| Change log | Sep 12 2023: iOS guidance added · Sep 14 2022: new page |
| Videos / developer docs | none on this page |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a **purple-magenta gradient card** with a **large, pale-lilac glyph over faint construction lines** (a rectangular grid, diagonals and nested circles): **a rightward arrow with a rounded head** pointing at **a short rounded bar** (the button) that sits on **a tall stem with a curved foot to the right** (the watch case edge). The picture **is tinted purple on purpose** (alt text: "tinted purple to subtly reflect the purple in the original six-color Apple logo"). The alt says **Apple Watch** although the glyph is the generic symbol drawn as the side of a case.
- **Page chrome (from screenshot):** TOC = Action button · Best practices · Platform considerations · Resources · Change log; the platform strip has the **iPhone and Watch icons lit**; side navigation now shows **Getting started · Foundations · Patterns · Components** collapsed, **Inputs** open with **Action button** ringed (browser focus, not page design) and **Technologies** (AirPlay, Always On, App Clips, Apple In-App…) below. **First page of the Inputs group.**
- **Resources (screenshot 4):** four **Related** links: **Workouts, Digital Crown, App Shortcuts, Live Activities**; no developer-documentation or video sections; then the **Change log table** (September 12, 2023: "Updated to include guidance for iOS."; September 14, 2022: "New page.") and the start of Apple's site footer.
- **Mismatches / notes:**
  1. The hero's **alt text names Apple Watch** while the page (and the arrow glyph) cover **iPhone too**; the picture is a generic symbol.
  2. The screenshots were taken in **dark appearance**, so colours (page background, links) differ from earlier pages; no content difference.
- **No catalog images:** the page has only the hero; the fetch script reports **0 comparisons**; catalog unchanged (**204**, existing IDs unchanged).

## Web translation
The Action button is **hardware** with no web API. The transferable ideas: **a small set of essential, regularly used functions that can be bound to a fast input**, **short verb-first names**, **context-preserving execution**, **follow-up input that continues the task rather than ending it**, and **an obvious pause/stop model**. Web equivalents of "a fast physical input": **keyboard shortcuts**, **command palette**, **media keys (Media Session API)**, **hardware/gamepad buttons**, **PWA app shortcuts**, **`accesskey`** (rarely).

| HIG rule | Web implementation |
|---|---|
| Support a set of essential functions, not "open the app" | Expose **3–7 high-frequency actions** ("Start Timer", "New Note", "Log Expense") as **commands** with **keyboard shortcuts, palette entries and deep links**; **don't add an "Open app" command** (the browser/PWA already does that) (`app-shortcuts.md`, `home-screen-quick-actions.md`). |
| Short label: Title Case, verb first, present tense, no articles/prepositions, ≤ 3 words | Command names follow the same rule: **"Start Race"**, not "Started Race" or "Start the Race"; **Title Case** per `writing.md`; also use the label for the **button, palette entry and shortcut hint** so it is one string. |
| The person chooses the function in Settings | **Let users bind their own quick action** (a "Quick action" setting or configurable shortcut), and show the current binding; provide a **reset**. |
| Let the system explain how to use it; don't duplicate its tips | Use **the platform's own affordances** (browser install prompt, OS shortcut settings) and keep in-app help to **one short, dismissible hint** at the point of use (`offering-help.md`); don't restate the OS's instructions. |
| iOS: stay in context (Live Activities, snippets) | Run the command **inline**: a **small confirmation/result card** (`snippets.md`) or a **pinned status chip** (`live-activities.md`) instead of navigating away (Set Timer → duration prompt → countdown chip). |
| watchOS: secondary function follows from the first | For multi-press/multi-step input (keyboard chords, a single "primary" key), **later presses continue the task** (mark lap, next segment, next step), **consistent with the current state**; announce the new state (`aria-live`, haptics where available: `playing-haptics.md`). |
| At most one secondary function (cognitive load) | **One** follow-up per primary action; more options go to a **menu or the UI**. |
| Don't use later presses to stop/conclude | **Stop/End** lives in the **visible UI** (a labelled button with confirmation when destructive), **not on a repeat key**; a repeated shortcut may **mark/advance**, not end the session (avoids accidental data loss). |
| Action + side button = pause (except diving) | Provide a **standard pause key** (`Space`/`K` for media, `Esc` for modal flows) for continuous tasks; **exceptions** only where pausing is unsafe or loses meaning (real-time monitoring); say so in the UI. |
| Eyes-free use | The input must **work without looking**: **consistent positions/keys**, **audible or haptic confirmation** (not sound-only: `accessibility.md`), **visible state** for those who do look. |
| Native-only | Don't emulate the physical button; for native apps use **App Intents / App Shortcuts** (iPhone) and **workout/dive session APIs** (Apple Watch Ultra). |

Field-note cross-links:
- `hig/components/system-experiences/app-shortcuts.md` (✓): the shortcuts that the Action button runs, with **phrases, ≤ 10 shortcuts, parameters**; this page adds **the hardware trigger, label rules and Watch multi-press behaviour**; that note's "not yet ingested: Action button" line is now updated. `live-activities.md` (✓) and `snippets.md` (✓): **context-preserving responses** (Set Timer example); `controls.md` (✓): Controls can also be bound to the Action button (hint text rules there); `hig/inputs/apple-pencil-and-scribble.md` (✓): squeeze/double tap follow the same rules; `hig/patterns/workouts.md` (✓): the workout controls and pause behaviour on Watch; `hig/foundations/writing.md` (✓): **capitalisation table** (a row for Action button labels added).
- `field-notes/*`: no hardware-input recipe; **no conflict**. Nonplo's own sentence-case convention is set aside (see `writing.md`), so **Title Case labels follow Apple**.
- Not yet ingested (linked from this page): **Digital Crown** (Inputs).

## Checklist
- [ ] Quick actions are **few, essential, high-frequency**; there is **no "Open app" action**.
- [ ] Every action label is **Title Case, verb first, present tense, ≤ 3 words, without articles or prepositions**, and reused in the button, palette and shortcut hint.
- [ ] Users can **choose and reset** their quick action; help text is **short and not a copy of OS guidance**.
- [ ] Actions **run in context** (inline card or status chip) instead of navigating away.
- [ ] Follow-up inputs **continue** the task; there is **at most one** secondary function; **stop/end is in the visible UI**.
- [ ] A **pause** key exists for continuous tasks, with **documented exceptions** where pausing is unsafe.
- [ ] Feedback works **eyes-free** (state announced, not sound-only) and is also visible.

## Related
- Ingested: App Shortcuts (✓), Live Activities (✓), Snippets (✓), Controls (✓), Workouts (✓), Writing (✓), Playing haptics (✓), Offering help (✓), Accessibility (✓).
- Not yet ingested (linked from this page): **Digital Crown**.
