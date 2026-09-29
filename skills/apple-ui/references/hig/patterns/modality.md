# Modality
Source: https://developer.apple.com/design/human-interface-guidelines/modality · Section: Patterns · Supported platforms: all six · Ingested: 2026-09-28 · Apple last updated: 2023-12-05. Change log: 2023-06-21 visionOS guidance · 2023-12-05 enhanced guidance for in-depth modal experiences, clarified guidance on multiple modal views. One DocC fetch, read in full. 4 screenshots (dark-mode page, hero → the "Videos" heading) were compared with the fetched text line by line: everything they show matches; the four screenshots are contiguous. **The Videos link and the change-log rows were read from the fetch only** (the TOC in the screenshots lists Change log). The page has no text inside images and no in-page videos. Only the page chrome is marked **(from screenshot)**. Not marked critical: no gate, token file or checker (the modal rules feed the FEEDBACK GATE's "interruptions" check, see § Web translation).

## In one line
A modal view **blocks the parent and demands an explicit dismissal**: use it only when it clearly helps people focus or decide, keep it short and single-path, name its task, give an obvious way out, protect against data loss on close, and never stack modals (an alert may sit on top of one, but never two alerts).

## Rules

### Framing (intro)
- **Modality** = content in a separate, dedicated mode that **prevents interaction with the parent view** and **needs an explicit action to dismiss**.
- Presenting modally can:
  - make sure people get **critical information** and, if needed, act on it;
  - offer options to **confirm or modify the most recent action**;
  - help with a **distinct, narrowly scoped task** without losing the previous context;
  - give an **immersive experience** or help people **concentrate** on a complex task.
- Components differ by platform:
  - **All platforms** can show an **alert** (a modal view with important information about the app or game).
  - Each platform defines context-specific modal views: **activity views**, **sheets**, **confirmation dialogs / action sheets**.
  - For a distinct task, **iOS, iPadOS and macOS** tend to use **sheets or popovers**; **iPadOS, macOS and visionOS** may use a **separate window**.
- **Full-screen modal** experiences suit temporary content (viewing media) or a distinct **multistep** task (editing content). **Nonmodal** full-screen experiences also exist (Going full screen ✓). **visionOS** can offer a range of **immersive** experiences (Immersive experiences ✓).

### Best practices
- **must** **Present content modally only when there's a clear benefit.** A modal takes people out of their context and needs an action to dismiss, so use it only to help them focus or make choices that affect their content or device.
- **should** **Keep modal tasks simple, short and streamlined.** A complicated modal makes people lose track of the task they suspended, especially when it hides the previous context.
- **should** **Avoid a modal that feels like an app within your app.**
  - A **hierarchy of views** inside a modal task makes people forget how to retrace their steps.
  - If a modal task must contain subviews, provide **one path** through the hierarchy and avoid buttons that could be **mistaken for the dismiss button**.
- **may** **Use a full-screen modal style for in-depth content or a complex task.**
  - It minimises distractions: good for videos, photos, camera views, and multistep tasks such as marking up a document or editing a photo.
  - **visionOS:** while the app runs with others in the **Shared Space**, a full-screen modal fills a **window**; if people move the app to a **Full Space**, it can become a more **immersive** experience (2023 addition).
- **must** **Always give people an obvious way to dismiss a modal view.** Follow platform conventions:
  - **iOS, iPadOS, watchOS:** a button in the **top toolbar**, or **swipe down**.
  - **macOS, tvOS:** a button in the **main content view**.
- **must** **When needed, protect against data loss by asking before closing.**
  - Whether people use a dismiss gesture or a button, if closing could lose **user-generated content**, **explain the situation and offer ways to resolve it**.
  - Example (iOS): an **action sheet** with a **save** option.
- **should** **Make the modal view's task easy to identify.**
  - Entering a modal switches context and people may not return right away. A **title that names the task**, or extra text that describes it or gives guidance, helps them keep their place.
- **must** **Let people dismiss a modal before presenting another one.**
  - Several visible modals create clutter, a scattered feel and **cognitive load**, especially when one **hides another** by appearing on top.
  - An **alert may appear on top of everything, including other modals**, but **never show more than one alert at the same time**.

### Platform considerations
- **None noted** for iOS, iPadOS, macOS, tvOS, visionOS or watchOS (the platform differences are inside the rules above).

## Specs & values
The page has **no sizes, timings or colours**. Its concrete facts:

| Item | Value |
|---|---|
| Purposes of modality | critical information · confirm/modify last action · narrow task with context kept · immersion/concentration |
| Components named | alert (all platforms) · activity view · sheet · confirmation dialog / action sheet · popover · separate window |
| Typical components for a distinct task | iOS/iPadOS/macOS: sheets or popovers · iPadOS/macOS/visionOS: also a separate window |
| Dismiss control location | iOS/iPadOS/watchOS: top toolbar button or swipe down · macOS/tvOS: button in the main content view |
| Modals visible at once | one; an alert may sit on top of a modal, but **never more than one alert** |
| Data-loss guard | explain + let people resolve (e.g. action sheet with Save) when closing would lose user-generated content |
| Hierarchy | one path through subviews; no buttons that look like the dismiss button |
| Title | names the modal's task (plus optional guidance text) |
| visionOS | full-screen modal fills a window in the Shared Space; can become immersive in a Full Space |
| Developer docs | SwiftUI *Presentation modifiers* · UIKit `UIModalPresentationStyle` · AppKit *Modal Windows and Panels* |
| Related HIG pages | Sheets · Alerts · Popovers · Action sheets · Activity views ✓ (`components/menus/activity-views.md`) |
| Video | *Get to know the new design system* (WWDC25 356) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with two overlapping rounded windows: a back window and a front window with three dots in its title bar, over construction circles. The front window is "active" and the back one "inactive", matching the image caption.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Modality · Best practices · Platform considerations · Resources · Change log. The fourth screenshot ends at the "Videos" heading with a cut-off thumbnail.
- The page has **no ✗/✓ pairs, no comparison images and no in-page videos** (fetch script run; catalog IDs unchanged, total 99). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above. Every heading, bullet, bold lead-in, sentence and link in screenshots 75–78 is in the fetched text.

## Web translation
Web modals are `<dialog>` elements (or a bottom sheet on touch). The page is a **"use sparingly" rule set**, and it is enforced partly by the FEEDBACK GATE's `interruptions` check.

| HIG rule | Web implementation |
|---|---|
| Only when there's a clear benefit | Prefer non-modal patterns first: inline expansion, an inline form, a popover (`popover` attribute / anchored menu), a side panel, or a new page/route. Use a modal only for: critical info, confirm/modify the last action, a short focused task, or immersive media. |
| Short, single-purpose task | One task per modal, ideally ≤ 1 screen and few fields; if it needs multiple steps, use a step indicator inside the same modal or a full page, not nested dialogs. |
| No "app within an app" | No dialogs that open dialogs. If subviews are unavoidable, use **in-modal navigation with a Back button** along one path (a stack, not a tree); the dismiss control is visually distinct from Back/Next (e.g. Close × top-trailing vs "Back" text button). |
| Full-screen modal for media/complex tasks | Photo/video viewers, cameras, editors: a full-bleed `<dialog>` (or the Fullscreen API) with an unmistakable close control (`going-full-screen.md`, `immersive-experiences.md`). |
| Obvious dismissal | **Three** ways, always: a visible **Close** control (× at top-trailing on touch/mobile sheets; a Close/Cancel/Done button in the footer or header on desktop), **Esc**, and **backdrop click** or **swipe-down** for non-destructive modals. Touch bottom sheets: drag handle + swipe down. Never rely on a gesture alone. `aria-label="Close"` on icon-only controls. |
| Data-loss confirmation | If a form has unsaved input: intercept close (`cancel` event on `<dialog>`, `beforeunload` for page leave) and show a **small alert on top**: title "Discard changes?", actions **Save** / **Discard** / **Keep editing** (`hig/patterns/feedback.md`: unexpected irreversible loss = the one justified interruption). If nothing would be lost, close instantly with no prompt. Prefer autosaving drafts (`file-management.md`). |
| Task title | Every modal has a heading that names the task ("Add team member", "Crop photo") linked with `aria-labelledby`; optional one-line guidance via `aria-describedby`. Not a bare "Details" or the app name. |
| One modal at a time | Close the current modal before opening another (queue requests; don't stack). **One exception:** an alert (`role="alertdialog"`) may appear over a modal, never two alerts. The FEEDBACK GATE probe fails on >1 alert or >1 non-alert modal, and on an alertdialog open at first paint. |
| Focus and background | Use `<dialog>.showModal()`: it makes the rest of the page **inert**, traps focus, restores focus to the opener on close and gives the `::backdrop`. Otherwise `aria-modal="true"` + `inert` on the rest + a focus trap. Lock body scroll (`overflow: hidden`, `overscroll-behavior: contain`) while open and restore on close. Initial focus on the first field, or on the safe action for destructive alerts. |
| Materials/depth | A modal is a functional-layer surface: `.glass`/thick material (Materials gate) over a **veil** dimming the page; when it opens the page behind recedes slightly (`spatial-layout.md` sheet-recede pattern), respecting `prefers-reduced-motion`. |
| Opening | Only from a user action (never on load, `dialog-open-on-load` in the checker), except consent/legal that must precede use; even then one at a time. |
| Separate window (iPadOS/macOS/visionOS) | On the web avoid `window.open` popups for a task (`spatial-layout.md`: one task, one surface); use an in-page dialog. A real separate window is only for detachable tools (chat pop-out, media pop-out) initiated by the person. |
| Accessibility | `role="dialog"`/`alertdialog` semantics from `<dialog>`, accessible name, announced on open, Esc closes, focus visible, targets ≥ 44 px, reading order follows the visual order; content scrolls inside the dialog with header and footer actions kept visible. |

Field-note cross-links:
- `hig/patterns/feedback.md` (CRITICAL): alerts are for critical, ideally actionable news; the gate's `interruptions` rule now reflects this page (≤ 1 non-alert modal; alert on top allowed; never two alerts; none at first paint). **Refinement recorded there on 2026-09-28.**
- `hig/patterns/going-full-screen.md` and `immersive-experiences.md`: full-screen modal vs nonmodal full screen; person controls exit.
- `hig/patterns/file-management.md`: "close with unsaved changes" dialog (Save / Don't save / Cancel) is this page's data-loss rule.
- `hig/patterns/managing-accounts.md`: delete-account confirmation is a data-loss alert on top of the settings page.
- `hig/patterns/entering-data.md`: a modal form uses the same field, validation and Continue rules; keep it short.
- `hig/foundations/materials.md` (CRITICAL) and `spatial-layout.md`: modals are functional-layer glass over a receded, veiled page.
- `field-notes/anti-patterns.md`, `principles.md` (consent screen is a full page, not stacked popups; one filled button): **consistent**.
- No conflict with a field note.

## Checklist
- [ ] A non-modal option (inline, popover, panel, page) was considered first; the modal has a clear benefit.
- [ ] The modal is one short task with a heading that names it; no nested dialogs; subviews (if any) follow one path with a Back button distinct from the dismiss control.
- [ ] It can always be dismissed with a visible Close/Cancel/Done control, Esc, and (non-destructive) backdrop click or swipe-down.
- [ ] Closing with unsaved user input asks first (Save / Discard / Keep editing); closing with nothing to lose is instant.
- [ ] Only one modal is visible; an alert may sit over it; never two alerts; none opens on load without a user action.
- [ ] `<dialog>.showModal()` (or equivalent) makes the background inert, traps and restores focus, locks scroll.
- [ ] Full-screen modals are used for media/complex tasks with an unmistakable close control.
- [ ] Materials and Feedback gates pass with the modal open (`run-feedback-probe.mjs <url> --click "<opener>"`).

## Related
- Ingested: Feedback (✓ CRITICAL), Going full screen (✓), Immersive experiences (✓), File management (✓), Managing accounts (✓), Entering data (✓), Materials (✓ CRITICAL), Spatial layout (✓), Accessibility (✓).
- Ingested since: Action sheets (✓ `components/presentation/action-sheets.md`). Alerts (✓ `components/presentation/alerts.md`), Popovers (✓ `components/presentation/popovers.md`), Sheets (✓ `components/presentation/sheets.md`). Not yet ingested: Windows. Ingested since: Activity views (✓).
- Developer docs: SwiftUI *Presentation modifiers*, UIKit `UIModalPresentationStyle`, AppKit *Modal Windows and Panels*. Video: *Get to know the new design system* (WWDC25 356).
