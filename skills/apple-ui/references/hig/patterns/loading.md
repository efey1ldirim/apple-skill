# Loading
Source: https://developer.apple.com/design/human-interface-guidelines/loading · Section: Patterns · Supported platforms: all six · Ingested: 2026-09-28 · Apple last updated: 2025-06-09. Change log: 2024-06-10 progress and downloads guidance added, games guidance enhanced · 2025-06-09 storing-downloads guidance revised to "download large assets in the background". One DocC fetch, read in full. 3 screenshots (dark-mode page, hero → the "Videos" heading) were compared with the fetched text line by line: everything they show matches, and the three screenshots are contiguous (screenshot 2 ends at "see Progress indicators." and screenshot 3 starts at "For games, consider…"). **The Videos link and the change-log rows were read from the fetch only** (the TOC in the screenshots lists Change log). **Screenshots 2 and 3 show an operating-system chat notification over the browser; it is not page content and is not recorded.** The page has no text inside images. Not marked critical: no gate, token file or checker.

## In one line
The best loading is the one people never notice. When it can't be instant, **show something right away** (placeholders), let people **keep doing other things**, tell them **that** it's loading and **how long** (determinate when you know), and load big assets **in the background** ahead of need.

## Rules

### Framing (intro)
- If the app or game loads assets, levels or other content, design the loading so it **doesn't disrupt or harm the experience**. The ideal loading finishes before anyone becomes aware of it.

### Best practices
- **must** **Show something as soon as possible.**
  - If nothing appears until loading finishes, people may read the emptiness as a **fault in the app**.
  - Show **placeholder text, graphics or animations** while content loads, and replace them as real content arrives.
- **should** **Let people do other things while content loads.**
  - Load in the **background** so other actions stay available. Example: a game loads the next level while the player reads about it or opens an in-game menu. (Developer doc: *Improving the player experience for games with large downloads*.)
- **should** **If loading is unavoidably long, give people something interesting to look at.**
  - Examples: gameplay hints, tips, an introduction to new features.
  - **Estimate the remaining time as accurately as you can**, so the placeholder content neither runs out too soon nor has to repeat because the wait is longer than expected.
- **should** **Improve installation and launch time by downloading large assets in the background** (2025 revision).
  - Consider the **Background Assets** framework to schedule downloads (game level packs, 3D character models, textures) **right after installation, during updates, or at other non-disruptive times**.

### Showing progress
- **must** **Say clearly that content is loading, and how long it might take.**
  - Ideally content shows **instantly**. When loading takes **more than a moment or two**, use the system **progress indicators** to show it is ongoing.
  - **Determinate** indicator when you **know how long** it will take; **indeterminate** when you **don't** (Apple links Progress indicators, not yet ingested).
- **may** **For games, consider a custom loading view.** Standard indicators suit most apps but can feel out of place in a game; use custom animations and elements that match the game's style for a more engaging experience.

### Platform considerations
- **iOS, iPadOS, macOS, tvOS, visionOS:** no additional considerations.
- **watchOS:** **avoid showing a loading indicator as much as possible.**
  - People expect quick interactions, so aim to show content **immediately**.
  - If content needs **a second or two**, a loading indicator is **better than a blank screen**.
  - Reconcile with Feedback: the Feedback page adds that on the watch an *indeterminate* indicator can imply people must keep watching; for long jobs promise a **notification** instead (`hig/patterns/feedback.md`).

## Specs & values
The page has **no sizes, colours or exact durations**. Its concrete facts:

| Item | Value |
|---|---|
| When to show a progress indicator | when loading takes "more than a moment or two" |
| Determinate vs indeterminate | determinate if the duration is known · indeterminate if not |
| First paint | something immediately (placeholder text, graphics or animation), replaced as content arrives |
| Long waits | interesting content (hints, tips, feature intros) sized to the estimated remaining time |
| Background loading | keep other actions available; download large assets right after install, during updates or at non-disruptive times |
| watchOS | avoid loading indicators; if content needs "a second or two", an indicator beats a blank screen |
| Games | custom loading view allowed |
| Developer docs | *Background Assets* · *Improving the player experience for games with large downloads* |
| Related HIG pages | Launching ✓ · Progress indicators (not yet ingested) |
| Video | *Discover Apple-Hosted Background Assets* (WWDC25 325) |
| Web tokens (CONV, not Apple) | `tokens/apple-feedback.json` → `loading` (indicator delay 300 ms, minimum visible 500 ms, instant below 100 ms) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with eight rounded radial dashes forming a spinner ring, with **varying opacity** (a few bright, others faded) to suggest rotation, over construction circles.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Loading · Best practices · Showing progress · Platform considerations · Resources · Change log.
- The page has **no ✗/✓ pairs, no comparison images and no in-page videos** (fetch script run; catalog IDs unchanged, total 99). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above. Every heading, bold lead-in, sentence and link in screenshots 60–62 is in the fetched text.

## Web translation
Web loading = network and render time. Apply the ladder: **instant → skeleton/placeholder → determinate progress → notify later**. The Feedback gate governs how any indicator is announced.

| HIG rule | Web implementation |
|---|---|
| Show something as soon as possible | Render the page shell and **skeletons that match the final layout** at once (same sizes; no layout shift); stream HTML, use `Suspense`/streaming SSR, show cached (stale) data first then revalidate ("stale-while-revalidate"). An empty white area is a bug. |
| Placeholders replaced as content arrives | Swap skeleton → content per region as each resolves (no whole-page spinner); keep scroll position and focus; cross-fade briefly or not at all (`prefers-reduced-motion`). Never show placeholder content that looks like real data ("Lorem", fake numbers). |
| Let people do other things | Non-blocking loads: never disable the whole UI; load per component; background prefetch (`<link rel="prefetch">`, `fetchpriority`, idle-time prefetch, hover/intent prefetch), optimistic updates for writes, queue uploads in the background with a visible tray. |
| Something interesting during long waits | For genuinely long jobs (large uploads, exports, AI generation, game/level load): tips or a preview relevant to the task, sized to the honest estimate; never fake progress or loop a short tip list over a long wait. Allow leaving the page. |
| Download big assets in the background | Code-split, lazy-load below-the-fold and route chunks; preload the first-screen font/image; service worker precache for the next likely routes/levels; **Background Fetch / Background Sync** APIs for large downloads and deferred uploads where supported; download packs after install/first run (PWA) or on idle/Wi-Fi, not at first paint. Respect `navigator.connection.saveData`. |
| Say it's loading and how long | Show an indicator only when needed: **≲ 100 ms → nothing** (feels instant); **skeleton immediately**; add a spinner only if still pending after **~300–500 ms** and keep it on screen **≥ ~500 ms** so it doesn't flicker (CONV, not Apple; Apple says "more than a moment or two" for indicators). Text status ("Loading 3 of 8…", "About 20 s left") when known. |
| Determinate vs indeterminate | Known duration/size (upload, export, download, multi-step import) → `<progress value max>` or `role="progressbar"` with `aria-valuenow`; unknown → indeterminate bar/spinner **with a name** (`aria-label` or `role="status"` text). Determinate values must move monotonically forward; never sit at 99 %. |
| Custom loading for games/immersive | A themed loader (matching art, no generic spinner) with a real progress value where possible; still nameable and cancellable; Reduce-Motion-safe (static frame). |
| watchOS: avoid indicators on glanceable surfaces | Small/glanceable/background surfaces (widgets, notification content, PWA on wearables): show cached/last-known content instantly; a brief indicator is better than blank; for long work, notify on completion (Feedback gate: no endless spinner). |
| Errors and stalls | If loading exceeds a stated limit or fails: replace the indicator with a message that says what happened and offers **Retry** (Writing/Feedback gates); offline: show what is cached + "Offline – showing saved data". |
| Accessibility | Indicators are announced politely once ("Loading results" via `role="status"`), not on every tick; set `aria-busy="true"` on the region being updated and clear it when done; keep focus stable; skeletons are `aria-hidden` with one status text. |

Field-note cross-links:
- `hig/patterns/feedback.md` (CRITICAL): the spinner rules (`spinner-unnamed`), the watchOS "avoid indeterminate progress" rule and the timing tokens apply directly; **consistent** with this page's watchOS line (indicator only when a second or two is needed, otherwise notify).
- `hig/patterns/launching.md`: the launch state is the first-screen skeleton; loading takes over after the first screen.
- `hig/patterns/live-viewing-apps.md`: instant channel-change feedback is a loading pattern (placeholder while the stream loads).
- `hig/patterns/file-management.md` and `drag-and-drop.md`: transfer progress and placeholders at the drop location.
- `hig/foundations/motion.md`: skeleton shimmer and spinners are short-purpose animations, stop under Reduce Motion.
- `field-notes/principles.md` §16 ("Don't show percentages that drive no decision; show phase + a filling bar"): **consistent** with "determinate only when known"; the field note's phase + bar is a valid determinate pattern.
- `field-notes/components.md` § Wizard (phase progress bar): reusable for multi-step loading.
- No conflict with a field note.

## Checklist
- [ ] Something meaningful is on screen immediately (shell + layout-matching skeleton); nothing is blank while waiting.
- [ ] Placeholders are replaced region by region with no layout shift, and scroll/focus are preserved.
- [ ] The UI stays usable while content loads; writes are optimistic where safe; long jobs run in the background and can be left.
- [ ] Long waits show something useful and an honest estimate; no fake or looping progress.
- [ ] Large assets are code-split, prefetched or background-downloaded at non-disruptive times.
- [ ] Indicators appear only after a short delay, don't flicker, are determinate when duration is known, and are always named/announced (Feedback gate).
- [ ] Failure and stall states offer Retry with a clear reason; offline shows saved data.
- [ ] Glanceable/small surfaces show cached content first and avoid endless spinners.
- [ ] Reduced motion: skeleton shimmer and spinner animation are removed or static.

## Related
- Ingested: Launching (✓), Feedback (✓ CRITICAL), Live-viewing apps (✓), File management (✓), Drag and drop (✓), Motion (✓), Accessibility (✓), Writing (✓).
- Not yet ingested: **Progress indicators**, Playing video. Onboarding ✓ (`hig/patterns/onboarding.md`).
- Developer docs: *Background Assets*. Video: *Discover Apple-Hosted Background Assets* (WWDC25 325).
