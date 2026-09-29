# Feedback — ⚠️ CRITICAL (zero-tolerance gate)
Source: https://developer.apple.com/design/human-interface-guidelines/feedback · Section: Patterns · Supported platforms: all six · Ingested: 2026-09-28 · Apple last updated: not shown (the page has **no change log**; the screenshots confirm the TOC ends at Resources). One DocC fetch, read in full. 4 screenshots (dark-mode page, hero → Videos + site footer) were compared with the fetched text line by line: everything matches, and the page has no text inside images. Only the video thumbnails and page chrome are marked **(from screenshot)**.

**[user decision] Marked CRITICAL like Color, Layout, Materials and Typography.** A design ships only after the **FEEDBACK GATE** in `SKILL.md` passes. The gate uses `tokens/apple-feedback.css` / `.json`, the static checker `tools/check-feedback.mjs` and the live probe `tools/feedback-probe.js` / `tools/run-feedback-probe.mjs`. Regression fixtures: `tools/fixtures/feedback/bad.html` (must fail) and `good.html` (must pass).

## In one line
Tell people what is happening, what they can do next, what their action did, and how to avoid mistakes, and make the **loudness of the message match its importance**: quiet and in place for status, an interruption only for a warning about unexpected, irreversible loss. Deliver every message through more than one channel so it works however the person uses the device.

## Rules

### Framing (intro)
- Clear, consistent feedback makes an app or game feel intuitive and encourages exploring. Feedback can tell people:
  - the **current status** of something;
  - the **success or failure** of an important task or action;
  - a **warning** about an action that can have negative consequences;
  - an **opportunity to correct** a mistake or problematic situation.
- **must** **Match the significance of the information to how it is delivered.**
  - Status is often best shown **passively**, so people look at it when they need it.
  - A warning about possible **data loss** must **interrupt**, so people get a chance to avoid it.

### Best practices
- **must** **Make all feedback accessible.**
  - Give feedback in several ways so it reaches more people and works in the way each person prefers.
  - Example: colour + text + sound + haptics means people get it even if they silence the device, look away, or use **VoiceOver**. (Haptics: Playing haptics ✓ `hig/patterns/playing-haptics.md`.)
- **should** **Integrate status feedback into the interface, near the items it describes.**
  - Then people see important information without acting or leaving their context.
  - Example: Mail (iOS/iPadOS) states the latest update and the unread count in the mailbox toolbar: unobtrusive, easy to check.
- **should** **Use alerts for critical, and ideally actionable, information.**
  - Alerts interrupt the current context by design, so match the importance of the message to the level of interruption.
  - They lose their impact if used too often or for unimportant information (Apple links Alerts ✓ `components/presentation/alerts.md`).
- **must** **Warn when a task can cause data loss that is unexpected AND irreversible.**
  - **must not** warn when data loss is the expected result. Example: the Finder does not warn on each file thrown away, because deleting is the expected result.
- **should** **Confirm that a significant action or task has completed, when it makes sense.**
  - Example: confirmation of a successful Apple Pay transaction.
  - Reserve confirmation for sufficiently important activity. People usually expect actions to succeed, so they mostly need to know **when something doesn't**.
- **must** **Show when a command can't be carried out, and help people understand why.**
  - Example: asking Maps for directions without a destination, or with the same start and end, produces a message that it can't route from and to the same location.

### Platform considerations
- **iOS, iPadOS, macOS, tvOS, visionOS:** no additional considerations.
- **watchOS:** **avoid an indeterminate progress indicator** (a loading spinner).
  - An animated indicator suggests people must keep watching the display, which is not a good experience.
  - Instead, **reassure people that they will get a notification** when the process completes.

## Specs & values
The page has **no numbers**: no durations, sizes, counts or colours. Everything numeric in `tokens/apple-feedback.json` is tagged **CONV** or **WCAG**, never HIG.

| Item | Value |
|---|---|
| The four kinds of feedback | status · success/failure of an important task · warning about negative consequences · chance to correct a mistake |
| Delivery principle | match the significance of the information to the way it is delivered (passive ⟷ interrupting) |
| Channels named | colour · text · sound · haptics (plus VoiceOver as the assistive route) |
| When to warn | data loss that is unexpected **and** irreversible; **not** when loss is the expected result |
| When to confirm | significant tasks only (example: Apple Pay); failure is the case people most need told |
| "Can't do it" | say it can't be done **and why** |
| watchOS | no indeterminate progress indicator; promise a notification instead |
| Examples named | Mail unread count in the toolbar · Finder trash without a warning · Apple Pay confirmation · Maps same-location message |
| Related HIG pages | Playing audio ✓ · Playing haptics ✓ · Motion ✓ |
| Developer docs / videos | UIKit *Animation and haptics* · *Designing Fluid Interfaces* (WWDC18 803) · *Essential Design Principles* (WWDC17 802) |
| Web tokens added (CONV/WCAG) | transient message ≥ max(5 s, 60 ms × characters), errors and warnings not auto-dismissed, ≤ 1 modal (+ one alert on top of it), ≥ 2 channels per message |

## Platform considerations
See § Platform considerations above (only watchOS differs). The web mapping of the watchOS rule is in § Web translation.

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a pointer arrow at the centre surrounded by a ring of short radial dashes, like the ripple of a click.
- **Page chrome (from screenshot):** the platform strip shows all six devices lit. The TOC reads Feedback · Best practices · Platform considerations · Resources (**no change log**). The side navigation lists the remaining Patterns pages (Going full screen … Workouts) and then Components, Inputs, Technologies.
- **Video thumbnails (from screenshot):**
  - *Designing Fluid Interfaces*: a fingertip touching a phone screen with a violet glow spreading from the contact point.
  - *Essential Design Principles*: a photo of the printed "Macintosh Human Interface Guidelines" book with a hand and a computer.
- The page has **no ✗/✓ pairs, no comparison images and no in-page videos**, so nothing was added to the visual-examples catalog (fetch script run; catalog IDs unchanged, total 99).
- **Text that is not in the fetch:** only the video thumbnails and the chrome above. Every heading, bold lead-in, bullet, body sentence and link in screenshots 34–37 is in the fetched text (the Apple site footer at the bottom of screenshot 37 is site chrome, not page content).

## Web translation (binding for web work — enforced by the FEEDBACK GATE)
Every message a web UI shows falls into one row of the delivery ladder in `tokens/apple-feedback.json`. Choose the row by **significance**, then apply the channel rules.

| HIG rule | Web implementation |
|---|---|
| Match significance to delivery | Use the ladder: **status** → inline `role="status"` next to the item, persistent while true · **routine success** → no message, just show the new state · **significant success** → brief non-blocking confirmation (`role="status"`, `.fb-toast` on `.glass` since it floats) · **cannot do / correction** → inline next to the problem, `role="alert"` or `aria-describedby` on the field · **unexpected irreversible loss** → `role="alertdialog"` with the consequence and the safe choice. Never use a modal for something a line of text could say. |
| Accessible, more than one channel | Every message = **text + an icon or shape**; the hue lives on the **icon only** (`.fb-icon`) and the message text stays in the label colour (system hues on white are < 4.5:1 for small text). Never colour alone (WCAG 1.4.1). Sound and vibration (`navigator.vibrate`) are optional extras, never the only channel. Every dynamic message is exposed to assistive tech: `role="status"` (polite) / `role="alert"` (assertive) / `aria-live`, or the field's `aria-describedby` / `aria-errormessage` (WCAG 4.1.3). Announcing rules: the live region must exist **before** its text changes. |
| Integrate status near the item | Put the status line, count, badge or sync time next to the thing it describes (toolbar, row, card header), quiet (secondary tone, ~0.72 opacity), not in a banner across the page. Status hue = dot or icon, never a coloured box (field note: status colour is dot-sized). |
| Alerts only for critical + actionable | At most **one** interrupting surface at a time; none open at first paint; opened only after a user action. Title states the consequence; buttons are verbs (`Delete account` / `Cancel`), the destructive one identified by role/colour **and** text (`hig/foundations/writing.md`). `window.alert()` / `confirm()` are never used for routine success. |
| Warn on unexpected irreversible loss only | Ask before permanent delete, overwrite, sending to many people, publishing. Do **not** ask for expected, recoverable removals (move to trash, remove from a list); give an **Undo** instead (`hig/patterns/drag-and-drop.md`). Don't stack "Are you sure?" on every delete. |
| Confirm significant completion | Payments, publishing, sending, account changes: a confirmation that names the result ("Payment received."). Ordinary saves and toggles: the interface reflects the new state; no toast. Transient confirmations stay ≥ max(5 s, 60 ms × characters), pause on hover/focus, can be dismissed (WCAG 2.2.1); errors and warnings never auto-dismiss. One at a time (max 3 queued). |
| Say when a command can't run, and why | A disabled primary control has its reason associated (`aria-describedby` → `.fb-reason`: "Enter a name to continue."), or stays enabled and explains on press with focus moved to the first missing field. A grey button with no explanation fails the gate. |
| Indeterminate progress (watchOS rule) | On glanceable/small/background surfaces (widgets, PWAs on wearables, long jobs, tab in the background) avoid an endless spinner: show a determinate value or say "You'll get a notification when it's done." Every spinner that remains has a name/status text (`role="status"` + "Saving…" or `aria-label`), and stops under `prefers-reduced-motion` or becomes static. |
| Wording | Feedback copy follows `writing.md`: state what happened and what to do next; no blame; no "Oops!"/"uh-oh"; no "We're having trouble…"; write the case in the string. |
| Motion | Feedback animations (a toast sliding in, a shake on error) are short, purposeful, and respect `prefers-reduced-motion` (`motion.md`); never an endless pulse on an error. |
| Haptics | `navigator.vibrate` only from a user gesture, only where supported, only as a supplement; see `hig/patterns/playing-haptics.md` for the pattern vocabulary and derived vibrate timings. |

## The FEEDBACK GATE (steps 1–5 are mirrored in `SKILL.md`)
1. Read this page and `tokens/apple-feedback.json`. Classify every message in the design with the delivery ladder; write the row name next to it in the handoff.
2. Use the tokens/classes (`.fb-status`, `.fb-inline`, `.fb-toast`, `.fb-alert`, `.fb-reason`, `.sr-only`) or reproduce their contract: text + icon, hue on the icon, roles from the ladder.
3. `node tools/check-feedback.mjs <changed files>` → **0 errors** (WARNs fixed or justified with `// feedback-ok: <reason>`).
4. `node tools/run-feedback-probe.mjs <url>` (add `--click "<selector>"` / `--fill "<selector>=<value>"` to put toasts, errors and alerts on screen first) → **PASS** in light, dark and reduced motion at 375 and 1440 px: every visible message announced, none colour-only, invalid controls have messages, text ≥ 4.5:1, no unprompted alertdialog, ≤ 1 non-alert modal (a single alert may sit on top of it, never two alerts), spinners named, disabled primaries explained.
5. Manually walk the failure path of every flow (network error, invalid input, permission denied, empty result) and the destructive path (delete/overwrite) and confirm each shows the right ladder row; run with a screen reader once.
If any step fails, the design is not finished.

Checker/probe rules: static `alert-for-routine-success` (ERROR), `toast-not-announced` (ERROR), `native-alert`, `error-colour-only`, `spinner-unnamed`, `disabled-no-reason`, `error-autodismiss`, `dialog-open-on-load`, `interjection-copy`, `we-in-error`, `alert-overuse` (WARN). Live `feedback-not-announced`, `feedback-no-text`, `invalid-without-message`, `color-only-status`, `status-text-contrast`, `interruptions` (FAIL) and `spinner-unnamed`, `disabled-no-reason`, `feedback-motion` (WARN).

Refinement (2026-09-28, after ingesting Modality): the probe first failed on any two modal surfaces; Modality allows one alert on top of another modal but never two alerts, and asks for other modals to be dismissed first, so the rule is now: FAIL on more than one alert, or more than one non-alert modal. Checked with temporary pages (modal + alert = PASS; two plain modals = FAIL).

Validation record (2026-09-28): `bad.html` → static 2 errors + 7 warnings, live FAIL in 6/6 runs (9 failures); `good.html` → static clean, live PASS in 6/6 runs (also after `--click "#del"` opens its alert). Noise test on the Nonplo client (`client/src`, 467 files, read-only, nothing modified): first pass **0 errors, 144 warnings**; a spot check of the hits showed false positives (spinners inside labelled buttons, a config map `iconClassName: 'animate-spin'`, hover-only red classes, controlled `open={state}` dialogs, a sidebar's `defaultOpen`), which were tuned out. Final: **0 errors, 60 warnings** = 48 spinners with no name or label nearby (mostly a button that shows only a spinner while pending, or a bare page loader), 11 red-tone classes on error-like lines, 1 "Oops! Page not found". A five-hit spot check of the earlier spinner list found three genuine and two false positives; both false-positive shapes were then fixed.

Field-note cross-links:
- `field-notes/principles.md` §16 (Copy) and Status colour "dot-sized, never a banner": **confirmed**. The HIG adds: significance decides the channel, and irreversible loss is the case for an interruption.
- `field-notes/components.md` § Fields, Wizard: "Real `disabled` when a precondition is unmet" **plus** the reason (this page: say why). The consent screen's calm, single-purpose alert style matches "critical and actionable".
- `field-notes/anti-patterns.md`: no coloured status boxes; consistent with hue-on-icon-only.
- `hig/patterns/entering-data.md`: dynamic validation and required data before Continue are the input-side twin of this page.
- `hig/patterns/drag-and-drop.md`: drop-target cues and failed-drop feedback are Feedback applied to a drag.
- `hig/foundations/accessibility.md` ("not colour alone", status messages) **confirmed** and made checkable.
- `hig/foundations/materials.md` (CRITICAL): toasts and alerts float, so they are functional-layer glass; inline messages are content-layer and use no glass.
- `hig/foundations/color.md` (CRITICAL): status hues only where text contrast allows; run `check-colors.mjs --pair` on the message text.
- No conflict with a field note.

## Checklist (all must pass — FEEDBACK GATE)
- [ ] Every message in the design is classified on the delivery ladder (status · routine success · significant success · cannot-do/correction · unexpected irreversible loss) and delivered that way.
- [ ] Each message has **text plus an icon/shape**; the hue is on the icon only; no message relies on colour, sound or vibration alone.
- [ ] Every dynamic message is announced (`role=status` / `alert` / `aria-live`, or `aria-describedby` / `aria-errormessage` on the field); live regions exist before their text changes.
- [ ] Status sits next to the item it describes, quietly; no page-wide coloured banners for routine state.
- [ ] Alerts (`alertdialog`) only for critical, actionable news; never two at once (an alert may appear over one modal); none at first paint; no native `alert()`/`confirm()` for routine success.
- [ ] Warnings appear only for unexpected, irreversible loss; expected removals give Undo, not a prompt.
- [ ] Only significant completions are confirmed; transient messages last ≥ max(5 s, 60 ms × characters) with pause/dismiss; errors and warnings persist.
- [ ] Every unavailable command says why (associated reason, or enabled + explains on press).
- [ ] No endless spinner on glanceable/background surfaces; remaining spinners are named and stop under reduced motion.
- [ ] Copy follows the Writing page (no "Oops!", no "we", no blame, next step stated).
- [ ] `check-feedback.mjs` 0 errors, `run-feedback-probe.mjs` PASS in every mode, failure and destructive paths walked once with a screen reader.

## Related
- Ingested: Accessibility (✓), Writing (✓), Motion (✓), Entering data (✓), Drag and drop (✓), Color (✓ CRITICAL), Materials (✓ CRITICAL), Layout (✓ CRITICAL), Typography (✓ CRITICAL).
- Ingested since: Loading (✓). Progress indicators (✓ `components/status/progress-indicators.md`). Ingested since: Notifications (✓ `components/system-experiences/notifications.md`). Not yet ingested: **Alerts**, Managing notifications. Action sheets (✓ `components/presentation/action-sheets.md`). Undo and redo ✓, Modality ✓.
- Developer docs: UIKit *Animation and haptics*. Videos: *Designing Fluid Interfaces* (WWDC18 803), *Essential Design Principles* (WWDC17 802).
