# Progress indicators
Source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators · Section: Components › Status · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (all six icons lit on the platform strip **(from screenshot)**; "No additional considerations for tvOS or visionOS") · Ingested: 2026-09-29 · Apple last updated: **September 12, 2023** (combined guidance common to all platforms; earlier row: June 5, 2023, guidance updated for watchOS 10). One DocC fetch, read in full. 6 screenshots (hero → the change-log table) were compared with the fetched text, captions and image alt text line by line: everything matches, including the seven picture sets (macOS determinate bar and circle, macOS/watchOS spinners, refresh control, macOS indeterminate bar and spinner, watchOS bar/ring/spinner). **Read from the fetch only (not in screenshots):** the image alt texts and the dark variants; the page has **no videos** and, unlike most pages, **no "Related" list** (Resources holds only developer documentation). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker, but it is governed by the **Feedback gate** (states, cancel confirmation) and **Color gate** (non-text contrast). The page has **no numeric thresholds** (only the illustrative "90 percent in five seconds, last 10 percent in 5 minutes").

## In one line
Progress indicators **tell people the app isn't stalled** while it loads or runs a long operation, are **transient** (only while the operation runs), and come as **determinate** (known duration: a **bar** filling leading → trailing or a **circular** track filling clockwise) or **indeterminate** (unknown duration: an **activity indicator / spinner**; macOS also has an indeterminate bar). **Prefer determinate**, **report advancement accurately and evenly**, **keep it moving** (explain stalls), **switch indeterminate → determinate when the duration becomes known**, **never switch a spinner into a bar**, add **accurate, succinct descriptions** (not "loading"), keep a **consistent location**, **let people cancel or pause** and **warn when halting loses progress** (alert). iOS/iPadOS: **refresh controls** (pull down to reload; also **automatic updates**; a title only if useful). macOS: **spinners** for background work or tight spaces, **unlabelled**. watchOS: white by default, **tint** allowed.

## Rules

### Framing (intro)
- Progress indicators **let people know the app isn't stalled** while it **loads content or performs lengthy operations**.
- Some also let people **estimate how long they have to wait**. **All progress indicators are transient**: they **appear only while an operation is ongoing** and **disappear after it completes**.
- Two types, because **duration is either known or unknown**:
  - **Determinate:** a task with a **well-defined duration** (e.g. **file conversion**).
  - **Indeterminate:** **unquantifiable** tasks (e.g. **loading or synchronising complex data**).
- Appearances **differ by platform**. A **determinate** indicator shows progress by **filling a linear or circular track**:
  - **Progress bars:** the track **fills from the leading side to the trailing side**.
  - **Circular progress indicators:** the track **fills clockwise**.
- An **indeterminate** indicator (also called an **activity indicator**) uses **an animated image**. **All platforms** support a **circular image that appears to spin**; **macOS also supports an indeterminate progress bar**. (`ProgressView`)

### Best practices
- **should** **When possible, use a determinate progress indicator.** An indeterminate one **shows that a process is occurring but doesn't help estimate how long it will take**; a determinate one helps people **decide whether to do something else, restart later, or abandon** the task.
- **must** **Be as accurate as possible when reporting advancement in a determinate indicator.** Consider **evening out the pace** so people trust the time needed: **90 % in five seconds and the last 10 % in 5 minutes** makes people **wonder whether the app is still working** and can **feel deceptive**.
- **must** **Keep progress indicators moving** so people know something continues to happen: a **stationary indicator suggests a stalled process or a frozen app**. **If a process stalls**, provide feedback that helps people **understand the problem and what they can do**.
- **should** **When possible, switch a progress bar from indeterminate to determinate**: if an indeterminate process reaches **a point where its duration can be determined**, switch; people generally prefer determinate.
- **must not** **Switch from the circular style to the bar style**: activity indicators (**spinners**) and bars are **different shapes and sizes**, so transitioning **disrupts the interface and confuses people**.
- **may** **If helpful, display a description that gives additional context** for the task: **accurate and succinct**; **avoid vague terms like *loading* or *authenticating*** because they **seldom add value**.
- **should** **Display a progress indicator in a consistent location** so people **reliably find the status of an operation across platforms or within or between apps**.
- **should** **When feasible, let people halt processing.** If interrupting **has no negative side effects**, include a **Cancel** button. If it **might** (e.g. **losing the downloaded part of a file**), also provide a **Pause** button in addition to Cancel.
- **should** **Let people know when halting has a negative consequence**: when cancelling **loses progress**, provide an **alert** with an option to **confirm the cancellation or resume** the process.

### Platform considerations
- **tvOS, visionOS:** no additional considerations.

#### iOS, iPadOS: refresh content controls
- A **refresh control** lets people **immediately reload content** (typically in a **table view**) **without waiting for the next automatic update**. It is **a specialised activity indicator, hidden by default**, becoming visible when people **drag down** the view to reload (Mail: drag down the Inbox list to check for new messages). (`UIRefreshControl`)
- **should** **Perform automatic content updates.** People appreciate an immediate refresh but **also expect periodic automatic refreshes**; **don't make people responsible for initiating every update**; **keep data fresh by updating regularly**.
- **may** **Supply a short title only if it adds value.** In most cases it's **unnecessary** because the animation shows loading. If you add a title, **don't use it to explain how to refresh**; provide **information of value about the content being refreshed** (Podcasts' title says **when the last update occurred**).

#### macOS
- An **indeterminate** indicator can have a **bar or circular** appearance; **both use an animated image** to show the app is working.
- **should** **Prefer an activity indicator (spinner) for the status of a background operation or when space is constrained.** Spinners are **small and unobtrusive**: good for **asynchronous background tasks** (retrieving messages from a server) and for **progress within a small area**, such as **inside a text field or next to a control such as a button**.
- **should not** **Label a spinning progress indicator**: it typically appears **when people initiate a process**, so **a label is usually unnecessary**.

#### watchOS
- By default the system shows progress indicators **in white over the scene's background colour**. You can **change the colour by setting the tint colour**.
- Shapes: **progress bar** (fills left to right), **circular progress indicator** (fills clockwise) and **activity indicator** (spinning).

## Specs & values

| Item | Value |
|---|---|
| Types | determinate (known duration) · indeterminate / activity indicator / spinner (unknown) |
| Determinate shapes | bar (leading → trailing) · circular (clockwise) |
| Indeterminate shapes | spinner (all platforms) · indeterminate bar (macOS) |
| Lifetime | transient: only while the operation runs |
| Accuracy | pace evenly; no 90 % fast then 10 % slow |
| Stalls | keep it moving; explain the problem and options |
| Switching | indeterminate bar → determinate bar when duration is known; never spinner → bar |
| Description | accurate, succinct; avoid "loading", "authenticating" |
| Placement | consistent location |
| Halting | Cancel if harmless; Cancel + Pause if losing progress; alert to confirm cancellation or resume |
| iOS/iPadOS refresh control | hidden until pull-down; also update automatically; optional title with useful info (last update time), never "pull to refresh" instructions |
| macOS | spinner for background/small areas (in a field, beside a button), unlabelled |
| watchOS | white over background; tint colour allowed |
| Numbers | none (illustrative 90 % / 5 s / 10 % / 5 min only) |
| Sizes, spacing, hit regions | **none given on this page** |
| Developer docs | SwiftUI `ProgressView` · UIKit `UIProgressView`, `UIActivityIndicatorView`, `UIRefreshControl` · AppKit `NSProgressIndicator` |
| Video / Related list | none |
| Change log | September 12, 2023: combined guidance common to all platforms · June 5, 2023: watchOS 10 |

## Visual notes (from screenshots and downloaded pictures)
- **Hero (screenshot):** a red-to-orange card with a **spinner (eight radial ticks, the leading ones darker)** above a **horizontal progress bar filled to about three quarters** (dark-red fill on a light-red track), with **measurement arrows** to all four sides of each element (a fixed footprint and margins) **(from screenshot)**.
- **Determinate (catalog `progress-indicators-01`, screenshots):** *Progress bar*: a **blue fill about 1/2 of a thin light-grey track**; *Circular progress indicator*: a **blue ring filled clockwise from the top to about the eight o'clock position** over a light-grey ring **(from screenshot)**.
- **Indeterminate (catalog `progress-indicators-02`, screenshots):** **macOS**: a **light-grey spinner of radial ticks** on a pale tile; **watchOS**: a **black tile with a dotted, rotating cluster (grey and white dots)** **(from screenshot)**.
- **Refresh control (screenshot):** an iPhone **Mail "Mailboxes"** screen, scrolled down: the **spinner sits above the large title "Mailboxes · Updated Just Now"** with **Edit** at the top right and the rows **Inbox 37 · VIP 2 · Flagged 4** below **(from screenshot)**.
- **macOS indeterminate (catalog `progress-indicators-03`, screenshots):** *Indeterminate progress bar*: a full-width **light-grey track with a bright blue segment fading in from the left** (a cycling shade band); *Indeterminate circular progress indicator*: the macOS spinner **(from screenshot)**. The alt text describes the bar as *completely filled, animated to cycle through shade changes*.
- **watchOS (catalog `progress-indicators-04`, screenshots):** three black tiles: **Progress bar** (a **white bar filled about 60 %** on a grey track), **Circular progress indicator** (a **white ring filled most of the way clockwise** on a grey ring), **Activity indicator** (the dotted cluster) **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Progress indicators · Best practices · Platform considerations · Resources · Change log; side navigation shows the **Status** group (Activity rings, Gauges, **Progress indicators** ringed, Rating indicators).
- **Fetch script run:** 4 new comparison groups (`progress-indicators-01` determinate bar/circle, `-02` macOS/watchOS spinners, `-03` macOS indeterminate bar/spinner, `-04` watchOS bar/ring/spinner); existing catalog IDs unchanged; total **170**. The hero and the Mail refresh screenshot are not comparison sets.

## Web translation
Native building blocks: **`<progress>`** (determinate; **indeterminate when `value` is omitted**), **`role="progressbar"`** (omit `aria-valuenow` for indeterminate), **`aria-busy`** on the region being updated, and CSS/SVG spinners.

| HIG rule | Web implementation |
|---|---|
| Let people know the app isn't stalled; transient | Show the indicator **only while the operation runs** and **remove it on completion or failure** (replace with the result or an error next to the failed element: **Feedback gate**); mark the updating region **`aria-busy="true"`** and announce completion via a polite live region ("Upload complete"). CONV: **delay showing** for ~300–400 ms to avoid a flash and, once shown, keep **≥ ~500 ms** to avoid flicker. |
| Determinate vs indeterminate | **Determinate:** **`<progress max value>`** (or `role="progressbar"` with `aria-valuemin/max/now/text`); **indeterminate:** `<progress>` **without `value`** or a CSS spinner with `role="progressbar"` and **no `aria-valuenow`**. Prefer determinate whenever bytes/steps/items are known (uploads via `XMLHttpRequest.upload.onprogress` / `ReadableStream` counters). |
| Bar fills leading → trailing; circle fills clockwise | Bars fill from **`inline-start`** (mirror in RTL: `right-to-left.md`); circular: **SVG `<circle>` with `stroke-dasharray`** starting at 12 o'clock, clockwise; **track ≥ 3:1** vs the surface and fill vs track (**Color gate**); show the **percentage as text** when useful. |
| Accurate, evenly paced reporting | **Never fake progress** (timers unrelated to the work); report **real** counters, smooth them (**moving-average ETA**), and **cap easing** so it doesn't race to 90 % then stall; where the real progress is bursty, show **steps or counts** ("Uploading 3 of 12") instead of a smooth bar (CONV). Field-note fill timing is compatible: **`duration-500 ease-out`** for progress fills. |
| Keep it moving; explain stalls | Animate spinners continuously; if no progress for a defined timeout (CONV **~10–15 s**), **change the message** ("Still working… check your connection"), offer **Retry/Cancel**, and log; a **frozen bar with no message is a bug**. `prefers-reduced-motion`: replace rotation with a **low-motion pulse or a step-wise indicator**, but **still show activity** (never remove the indicator). |
| Switch indeterminate → determinate when possible | Start with `<progress>` without `value`, then **set `value`/`max`** once the total is known (same element, same size: **no layout shift**). |
| Don't switch from spinner to bar | Choose the **shape once per operation** (spinner in a button/field/region, bar for page-level or file operations) and **keep it**; if you need both (spinner then percentage), **put the percentage as text next to the spinner** rather than swapping to a bar. |
| Helpful, specific descriptions; avoid "loading" | Text says **what is happening**: "Converting video (2 of 5)", "Syncing 128 photos", **not** "Loading…" or "Authenticating…"; polite live region (`role="status"`), **not** re-announced every percent (announce at 25 % steps or completion, CONV). |
| Consistent location | One **fixed slot** per pattern: page-level bar at the **top edge** (`position: fixed`, safe-area aware), operation status **in the row/card** it belongs to, button-level spinner **inside the button** (button keeps its width, `aria-busy`, `disabled` or `aria-disabled`), field-level spinner **at the inline-end of the field**. Layout gate: no jumps when it appears. |
| Cancel / Pause | A **visible Cancel button** next to long operations (`AbortController.abort()`), and **Pause/Resume** (chunked uploads, resumable downloads) when cancelling loses work; disable the button while cancelling and confirm the end state ("Upload cancelled"). |
| Warn when halting loses progress | An **`alertdialog`** (not `confirm()`/`alert()`: **Feedback gate**) with **"Cancel Upload"** (destructive-styled but not primary) and **"Resume"** as the default/primary action; Title Case buttons (`writing.md`); see `alerts.md`. |
| iOS/iPadOS refresh control | **Pull-to-refresh** only on touch scroll views: `overscroll-behavior-y: contain` on the container + a custom pointer/touch handler (or `PullToRefresh` libs), the native browser pull-to-refresh **stays available at the page level**; show the spinner **above the list, hidden by default**; **also refresh automatically** (`visibilitychange`, `online`, polling/SSE/WebSocket, revalidate-on-focus) and add a **keyboard/pointer refresh button** (Ctrl/Cmd+R analogue) as the non-gesture path. |
| Refresh title only if useful | Show **"Updated just now"/"Updated 3 min ago"** (a `<time>` with relative text, updating), **never** "Pull down to refresh". |
| macOS spinner for background work / small areas; unlabelled | A **small spinner inside inputs, next to buttons, in list rows** (`role="progressbar"` with an `aria-label` such as "Checking availability", **no visible label needed**); the accessible name is still required. |
| watchOS: white default, tint allowed | On dark wearable-sized views use **white indicators by default** and allow a **brand tint** only with **≥ 3:1** against the background. |
| Progress bar vs step indicator (wizards) | **Field-note phase progress** (3 px tall, 64 px per phase in wizards: `tokens.md`) is a **step indicator**, not a task progress bar: use `aria-current="step"`/`aria-label="Step 2 of 4"` there, and **`<progress>`** for real operations; both can coexist. |
| Field-note loading spinner | `field-notes/components.md`: "Loading = same stage + a tiny spinner `/25`" is a **quiet inline hint**; **when the spinner is the only signal that work is happening, give it ≥ 3:1 contrast** (Color gate) and an accessible name; the field note itself is **not edited**. |
| Skeleton screens | For **content placeholders** (lists/cards) a **neutral skeleton** (field note: "the skeleton stays neutral") is compatible with Apple's "keep it moving" when it **shimmers or pulses subtly** and has `aria-busy`; **it never replaces determinate progress for a known-length task** (`loading.md`). |
| Accessibility | `role="progressbar"`/`<progress>` with **name**, **value text** ("60 percent, 3 of 5 files"), live status text, **reduced-motion alternative**, **visible focus** on Cancel/Pause, **44 px** targets (Buttons GATE), **200 % text** reflow (Layout gate); don't rely on colour alone for error/paused states. |

Field-note cross-links:
- `hig/patterns/loading.md` (✓): the pattern-level guidance (determinate vs indeterminate, show something right away, downloads and uploads); its "Progress indicators not yet ingested" mentions now point here; `hig/patterns/feedback.md` (✓ CRITICAL) and **Feedback gate**: states, errors, cancel confirmation as `alertdialog`.
- `hig/components/presentation/alerts.md` (✓): the cancel-with-lost-progress alert; `hig/components/status/gauges.md` (✓): a **gauge is a read-only value in a range**, a progress indicator is **task progress**; `activity-rings.md` (✓): don't draw progress as Activity-style rings.
- `hig/patterns/managing-notifications.md`, `live-viewing-apps.md` (✓): live/long tasks; `hig/patterns/drag-and-drop.md` (✓): progress while copying dropped files; `hig/components/selection-and-input/image-wells.md` (✓): upload progress states.
- `hig/foundations/color.md` (✓ CRITICAL) and **Color gate**: track/fill contrast; `hig/foundations/right-to-left.md` (✓): fill direction; `hig/foundations/motion.md` (✓): reduced motion; `hig/foundations/layout.md` (✓ CRITICAL): no layout shift.
- `field-notes/*` (tokens: progress bar 3 px × 64 px per phase, fill `duration-500 ease-out`; components: wizard phase progress, loading spinner `/25`; engineering-gotchas: "a black progress bar disappears on dark: theme it via variables"): **compatible**; the notes above record the two scoping points (step indicator vs task progress; spinner contrast).
- Not yet ingested: Rating indicators (the last page of the Status group).

## Checklist
- [ ] Known-length work uses **`<progress>`/`role="progressbar"` with real values**; unknown-length work uses an **indeterminate** one; **no fake progress**.
- [ ] The indicator is **transient**, appears in a **consistent slot** and **doesn't shift layout**; short waits don't flash it (delay ~300–400 ms).
- [ ] The **shape isn't swapped** mid-operation (spinner ↔ bar); indeterminate → determinate switches in place.
- [ ] **Text describes the work** ("Converting video, 2 of 5"), not "Loading…"; announcements are **polite and throttled**.
- [ ] **Stalls** change the message and offer **Retry/Cancel**; **reduced motion** keeps a visible (non-rotating) activity cue.
- [ ] **Cancel** (and **Pause** when work would be lost) exists for long operations; cancelling lost work asks via an **`alertdialog`** with "Resume".
- [ ] Refresh: **pull-to-refresh on touch lists** *and* a non-gesture refresh, **automatic updates**, and an **"Updated …" title only when it adds information**.
- [ ] Spinners in buttons/fields keep their size, have an **accessible name**, **≥ 3:1** contrast and no redundant label.
- [ ] Track/fill colours pass the **Color gate**; fill runs from **inline-start**; wizard **step indicators** aren't confused with task progress.

## Related
- Ingested: Loading (✓), Feedback (✓ CRITICAL), Alerts (✓), Gauges (✓), Activity rings (✓), Drag and drop (✓), Image wells (✓), Live viewing apps (✓), Color (✓ CRITICAL), Right to left (✓), Motion (✓), Layout (✓ CRITICAL), Writing (✓).
- Not yet ingested: Rating indicators.
- Developer docs: SwiftUI `ProgressView`; UIKit `UIProgressView`, `UIActivityIndicatorView`, `UIRefreshControl`; AppKit `NSProgressIndicator`.
