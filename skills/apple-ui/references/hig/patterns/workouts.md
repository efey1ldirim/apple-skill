# Workouts
Source: https://developer.apple.com/design/human-interface-guidelines/workouts · Section: Patterns · Supported platforms: **iOS, iPadOS, watchOS** ("No additional considerations for iOS, iPadOS, or watchOS. **Not supported in macOS, tvOS, or visionOS.**"; Mac, TV and Vision are dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 5 screenshots (dark-mode page, hero → Videos) were compared with the fetched text and the image alt text line by line: everything matches; the five screenshots are contiguous. **The Related link, the two developer-documentation links and the three video URLs were read from the fetch only** (the last screenshot shows the three video titles but not their links). Text that exists only inside the three watch screens is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
A workout app is built around **one active session**: show only what helps *right now* (elapsed time, calories, distance, lap markers), keep controls big and easy to hit, make the session **look alive** and its start/stop unmistakable, explain missing sensor data honestly, end with a **summary**, discard accidental micro-sessions, keep text readable **while moving**, and use Activity rings only for what they mean.

## Rules

### Framing (intro)
- People wear **Apple Watch** during many kinds of workouts and may carry an **iPhone or iPad** for activities such as **walking, wheelchair pushing and running**. They tend to use **larger or more stationary devices** (iPad Pro, Mac, Apple TV) to take part in **live or recorded workout sessions**, alone or with others.
- You can build a workout experience for **Apple Watch, iPhone or iPad** that helps people reach their goals by using **activity data from the device** and **familiar components** for fitness metrics.

### Best practices
- **should** **In a watchOS fitness app, use workout sessions to provide useful data and relevant controls.** During an active session watchOS **keeps showing the app** between wrist raises, so put the numbers people care about most on it: **elapsed or remaining time, calories burned, distance**, plus relevant controls such as **lap or interval markers**.
- **should** **Avoid distracting people with information that isn't relevant.** They don't need the **list of workouts you offer**, or other parts of your app, while working out. Apple shows the common arrangement, **three purpose-built screens** in a horizontal pager (Workout app itself uses it):
  - **Leftmost:** **large buttons** that control the in-progress session, such as **End, Resume, New** (the screen also carries **Segment**).
  - **Middle:** **metrics and other data** on a dedicated screen that people can **read at a glance**. Apple's example shows **five lines**: elapsed time, active calories, current heart rate, average pace, elevation.
  - **Rightmost:** **media playback controls**, **if supported**.
- **should** **Use a distinct visual appearance to indicate an active workout.** People like to recognise an active session **at a glance**. The metrics page is a good place: its **values update in real time**; you can further distinguish it with a **unique layout**.
- **must** **Provide workout controls that are easy to find and tap**: pause, resume, stop, and **clear feedback when a session starts or stops**.
- **should** **Help people understand what is recorded when sensor data is unavailable.** Example: **water may prevent a heart-rate reading**, but the app can still record **distance swum** and **calories**. If you support the **Swimming** or **Other** workout types, explain the situation in language **similar to the system Workout app's**. Apple gives three ✓ example messages (all ✓, no ✗). Their common shape:
  1. say **which sensor isn't used** (e.g. GPS in a pool swim) and **why a reading may be missing** (water and heart rate);
  2. say **what is still tracked and how** (calories, laps, distance from the built-in accelerometer);
  3. where useful, explain the **fallback value** ("the calorie equivalent of a brisk walk whenever sensor readings are unavailable");
  4. mention **conditions** (GPS gives distance only during a freestyle stroke).
- **should** **Provide a summary at the end of a session.** It **confirms the workout is finished** and shows the **recorded information**. Consider adding **Activity rings** so people can check their progress.
- **should** **Discard extremely brief sessions.** If a session ends **a few seconds after it starts**, either **discard the data automatically** or **ask** whether to record it as a workout.
- **must** **Make text legible for people in motion.** When the activity involves movement: **large font sizes, high-contrast colours**, and an arrangement that makes the **most important information easiest to read**.
- **must** **Use Activity rings correctly.** The Activity rings view is **an Apple-designed element** of one or more rings whose **colours and meanings match those in the Activity app**. Use them **only for their documented purpose**.

### Platform considerations
- **iOS, iPadOS, watchOS:** no additional considerations. **macOS, tvOS, visionOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings** ("large", "a few seconds", "high-contrast" are unquantified). Concrete facts:

| Item | Value |
|---|---|
| Session screens (Workout app) | 3 in a horizontal pager: **controls** (left) · **metrics** (middle) · **media** (right, if supported) |
| Controls screen | End · Resume · New · Segment (large buttons); **(from screenshot)** a 2 × 2 grid of pill buttons, End red ✕, Resume yellow circular arrow, New green +, Segment grey "1" dimmed, a crossed-out square glyph and a yellow ✓ button partly cut off below the fold |
| Metrics screen | 5 lines: elapsed time · active calories · heart rate · average pace · elevation. **(from screenshot)** elapsed time is the largest, in yellow; unit labels (ACTIVE CAL, AVERAGE PACE) are small caps beside big numbers; unavailable pace shows a **dashed placeholder**, not a zero |
| Media screen | album-art tile, title line ("Not Playing" **(from screenshot)**), previous / play / next |
| Pager cue | 3 page dots; the active dot moves left → middle → right **(from screenshot)** |
| Active-session cue | live-updating values + unique metrics layout; **(from screenshot)** a small workout-type badge and a level/waveform icon at the top |
| Sensor-unavailable copy | which sensor · why · what is still tracked · fallback |
| End of session | summary (confirmation + recorded data + optional Activity rings) |
| Very short session | discard automatically, or ask whether to record |
| Activity rings | only for their documented purpose; same colours/meanings as the Activity app |
| Not supported | macOS · tvOS · visionOS |
| Developer docs | WorkoutKit · HealthKit *Workouts and activity rings* |
| Related HIG pages | Activity rings ✓ (`components/status/activity-rings.md`) |
| Videos | *Track workouts with HealthKit on iOS and iPadOS* (WWDC25 322) · *Build custom workouts with WorkoutKit* (WWDC23 10016) · *Build a workout app for Apple Watch* (WWDC21 10009) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a running figure (round head, leaning torso, bent arms and legs) inside concentric construction circles.
- **Three watch screens** (the page's only pictures besides the ✓ icons; catalog id `workouts-01`, all captioned as one arrangement):
  - **Controls:** the header shows the clock and the state word **"Paused"** in bright lime; below it a 2 × 2 grid: **End** (red ✕ on a dark red pill, top-leading), **Resume** (yellow circular arrow on an olive pill, top-trailing), **New** (green + on a dark green pill, below End) and **Segment** (a dimmed grey "1" in a circle, below Resume). A third row peeks in from below (a crossed-out square glyph and a yellow ✓ button). **Apple's alt text lists the buttons "clockwise" as End, Resume, New, Segment, but the picture reads left-to-right, top-to-bottom as End, Resume / New, Segment**; the layout above follows the picture.
  - **Metrics:** a green walking-figure badge at the top-leading corner, the clock at the top-trailing corner; **elapsed time "02:01.47"** in large yellow, **"1 ACTIVE CAL"**, **"78 ♥"** in white with a red heart, an **average pace placeholder** (dashes) with small "AVERAGE PACE", and **"0 FT"** (elevation) at the bottom. The numbers are large; the units are small caps.
  - **Media:** clock at the top, a grey square tile with an iPhone glyph, the words **"Not Playing"**, then rewind, a **larger play** button and fast-forward as three round buttons; a round badge at the top-trailing corner shows an iPhone. **Apple's alt text says the screen "shows information about the music currently playing", but the picture shows the empty "Not Playing" state.**
  - **Page dots** under each screen show the position (first, middle, last).
- **Example-message table:** three green ✓ circles, one per example sentence (no ✗ anywhere), the sentences set in a grey body style beside them. The rule is "write like this", not "don't write like that".
- **Page chrome (from screenshot):** the platform strip lights iPhone, iPad and Watch and dims Mac, TV and Vision; the TOC reads Workouts · Best practices · Platform considerations · Resources (**no Change log**). The last screenshot shows the three video thumbnails with their titles.
- The fetch script found **one comparison**: `workouts-01` (the three-screen arrangement). No ✗/✓ pairs in the catalog; the ✓ text rows are recorded in the rules above. Catalog total is now **106**; existing ids unchanged. Nothing is measured.
- **Text that is not in the fetch:** the strings inside the watch screens (Paused, End, Resume, New, Segment, 02:01.47, ACTIVE CAL, AVERAGE PACE, 0 FT, Not Playing) and the chrome above.

## Web translation
The page is about **active-session UIs on wrist and phone**. On the web it maps to **fitness, sport, timer, tracking, delivery-in-progress and any "session in progress" screen** (stopwatch, run/ride tracker, meditation, live-class player, driver/courier mode). Browsers have **no HealthKit/WorkoutKit**; sensors come from Geolocation, motion sensors and Web Bluetooth, or from a native wrapper (HealthKit, Health Connect).

| HIG rule | Web implementation |
|---|---|
| Show useful data and relevant controls | The active view shows **only the running session**: the 3–5 numbers that matter for that activity (elapsed/remaining, distance, calories, heart rate, pace) and the controls that act on it (lap/interval, pause, end). Nothing else competes (`layout.md`). Derive the timer from a **start timestamp** (`performance.now()` / server time), never by counting `setInterval` ticks, so background throttling and a locked phone don't drift it. |
| Keep the app in front like watchOS does | Request a **Screen Wake Lock** (`navigator.wakeLock.request("screen")`) while a session is active and **re-acquire it on `visibilitychange`**; release on end. Offer **Media Session** lock-screen controls where audio or a session notification exists. Persist the session state so a reload or crash resumes (`launching.md`, `multitasking.md`). |
| Avoid distraction | In an active session **hide navigation, lists of workouts and marketing**; show a focused layout (`going-full-screen.md`) with one obvious way out. Suppress non-critical modals, promos and rating prompts (`modality.md`, `ratings-and-reviews.md`). |
| Three purpose-built screens | On a phone, split the session into **controls · metrics · media** as **swipeable pages** (CSS `scroll-snap-type: x mandatory`, page dots as `role="tablist"`/tab buttons, keyboard arrows, the current page announced), or as three segments of one screen on wide viewports. The media page appears **only if supported**. Never bury End/Pause under a scroll. |
| Distinct look for "active" | Give the live metrics screen a **layout and colour treatment nothing else uses** (a large running timer, a coloured state badge, a pulsing but reduced-motion-safe live dot); values visibly tick. A persistent status ("Recording", "Paused") uses `role="status"` (Feedback gate). Never rely on colour alone. |
| Controls easy to find and tap | **Large targets**, well beyond the 44 × 44 pt minimum (CONV: ≥ 56–72 px), generous spacing, fixed positions that never move between states (Resume replaces Pause **in the same spot**). Destructive/irreversible **End** is visually separate and distinct (red role colour on the icon, `feedback.md`), reachable one-handed at the bottom of the screen. |
| Clear feedback at start and stop | State changes are **immediately visible** (button and badge change, timer starts/stops), **announced** (`role="status"`: "Workout started", "Paused", "Workout ended"), and optionally **haptic** on phones (`navigator.vibrate`, patterns from `tokens/apple-haptics.json` § webConv; Android Chrome only; never the only cue). |
| Sensor data unavailable | Show a **placeholder (`--`) instead of 0** for a missing value (as the page's pace does), and add a short sentence stating **what is not being measured, why, and what is still recorded/how** (permission denied for location, Bluetooth strap disconnected, no heart-rate sensor). Follow the four-part shape in the rules above, in the product's own words; never blame the person; offer the fix ("Turn on location") as a button (`feedback.md` cannot-do rule; `writing.md`). Track permission and connection state and update live. |
| Summary at the end | An **end-of-session screen** confirms the workout is done and lists the recorded data (duration, distance, calories, splits), with the goal/progress visual (see the rings rule) and a clear **Save / Discard** decision if unsaved; no automatic redirect away. Give a one-tap way back to the home screen and to share (`collaboration-and-sharing.md`). |
| Discard very short sessions | If a session ends within **a few seconds** (CONV: under ~10 s, Apple gives none), **don't save silently**: either discard automatically or ask "Save this workout?" with the data in view; if you discard, offer **Undo** for a short window (`undo-and-redo.md`). |
| Legible in motion | **Large numerals** (the metrics screen's big timer), `font-variant-numeric: tabular-nums` so ticking digits don't jitter (CONV), **high-contrast colours** that pass WCAG AA/AAA outdoors (Color gate; bright text on black works in sun and dark), labels in a small secondary style next to numbers, dynamic type support (`typography.md`), nothing important below the fold, no thin weights, no low-contrast tints on data. Respect glare: avoid translucency over the numbers (`materials.md`). |
| Activity rings correctly | The Apple Activity rings and their colours and meanings belong to Apple's Activity app: **don't copy them for your own metrics or recolour them to mean something else**. For your own progress use a **clearly your-own ring/bar style** with your own labels; if you truly show Apple Activity data, do it only through Apple's documented element (native). Details land with the not-yet-ingested Activity rings page. |
| Live or recorded sessions on larger screens | The intro's "live or recorded workout sessions on iPad Pro, Mac and Apple TV" = **video-led classes**: use `playing-video.md` and `live-viewing-apps.md` for the player, and keep the session metrics as an overlay or side panel, not modal. |
| Accessibility | The ticking timer is **not** a live region (it would flood screen readers); expose `role="timer"` with `aria-live="off"` and announce only **milestones** (each lap/km, goal reached, state changes). Controls have names, keyboard access and a visible focus ring; `prefers-reduced-motion` stops pulses; support text zoom without clipping the big numbers. |
| Unsupported platforms | macOS/tvOS/visionOS are "not supported": on a desktop browser show a **management/review view** (history, plans, summaries), not an active-session tracker, unless the user is doing a live class (see above). |

Field-note cross-links:
- `hig/patterns/feedback.md` (CRITICAL): start/stop and "Paused" are quiet status messages; sensor-unavailable copy is the "cannot do this" message with a next step; nothing here needs an alert.
- `hig/patterns/playing-haptics.md`, `tokens/apple-haptics.json`: start/stop/lap haptics on phones.
- `hig/patterns/going-full-screen.md`, `hig/patterns/launching.md`, `hig/patterns/multitasking.md`: focused session view, resume state, wake lock, background survival.
- `hig/patterns/playing-audio.md`: the media screen and audio interruptions; `live-viewing-apps.md` and `playing-video.md` for class streaming.
- `hig/patterns/ratings-and-reviews.md`, `hig/patterns/offering-help.md`, `hig/patterns/managing-notifications.md`: no prompts mid-session; a summary screen is a natural pause.
- `hig/foundations/typography.md`, `color.md`, `accessibility.md`, `layout.md`, `materials.md`: legibility while moving.
- `hig/getting-started/designing-for-watchos.md`: glanceable, brief interactions; the pager arrangement above is its own pattern.
- `hig/patterns/charting-data.md`: chart the summary and splits.
- No conflict with a field note (Nonplo has no fitness surface).

## Checklist
- [ ] The active-session view shows only the running session: 3–5 key numbers and the controls that act on it; no lists, navigation or promos.
- [ ] The elapsed time comes from a start timestamp (survives throttling and reloads); the screen stays awake (Wake Lock, re-acquired on visibility change); the state persists.
- [ ] On phones the session splits into controls / metrics / (media, if supported) with clear paging cues; End and Pause/Resume never scroll out of reach and never move between states.
- [ ] The active state is unmistakable (distinct layout, live values, status badge); start, pause, resume and end are visible, announced and optionally haptic.
- [ ] Controls are large (≥ 56 px), well spaced and operable one-handed; End is separated and role-coloured (icon only).
- [ ] Missing sensor values show `--`, not 0, plus a plain sentence: what isn't measured, why, what is still recorded, and how to fix it.
- [ ] Numerals are large, tabular, high contrast (Color gate passes outdoors and in the dark); labels are small and secondary; nothing important sits below the fold.
- [ ] A summary confirms the end and lists the recorded data; brief sessions are discarded or confirmed, with Undo.
- [ ] Apple's Activity ring colours/meanings aren't reused for your own metrics.
- [ ] The ticking timer is not a live region; milestones and state changes are announced; reduced motion is honoured.
- [ ] Desktop/large screens offer history, plans and summaries (and class video), not a fake tracker.

## Related
- Ingested: Feedback (✓ CRITICAL), Playing haptics (✓), Playing audio (✓), Playing video (✓), Live-viewing apps (✓), Going full screen (✓), Launching (✓), Multitasking (✓), Ratings and reviews (✓), Modality (✓), Undo and redo (✓), Charting data (✓), Designing for watchOS (✓), Typography, Color, Layout, Materials, Accessibility (✓).
- Ingested since: Labels (✓, date/time/timer text). Activity rings (✓ `components/status/activity-rings.md`: only Move, Exercise, Stand; one person; fixed appearance and colours).
- Developer docs: WorkoutKit; HealthKit *Workouts and activity rings*. Videos: see Specs & values.
