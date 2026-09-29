# Alerts
Source: https://developer.apple.com/design/human-interface-guidelines/alerts · Section: Components › Presentation · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (all six icons on the platform strip **(from screenshot)**; "No additional considerations for tvOS or watchOS") · Ingested: 2026-09-29 · Apple last updated: **February 2, 2024** (default and Cancel button guidance; earlier rows: September 12, 2023 anatomy artwork for visionOS, June 21, 2023 visionOS guidance). One DocC fetch, read in full. 14 screenshots (light-mode page, hero → the page footer) were compared with the fetched text and image alt text line by line: everything matches; they are contiguous and cover the whole page, including the change log. **Read from the fetch only:** the dark variants of the images (visionOS and watchOS anatomy images and the videos have none) and the two videos' motion (only their poster frames are in the screenshots). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **three numbers** (≤ 3 buttons, titles ≤ 2 lines, visionOS accessory view ≤ 154 pt tall with a 16 pt corner radius).

## In one line
An alert is a **modal that gives critical information people need right now**: a problem, a warning that an action might destroy data, or a confirmation of something important they started. Use it **sparingly**, **never for info that isn't actionable**, **not for common undoable actions**, **not at app start**. Write a **specific, calm title** (never "Error"), **short informative text only if it adds value**, **up to three verb-labelled buttons** with the default on the trailing side / top, **destructive style only when the action wasn't deliberately chosen**, a **Cancel** whenever something can be destroyed, and **keyboard escapes** (Esc / Cmd-.).

## Rules

### Framing (intro)
- An alert gives people **critical information they need right away**. It can **tell them about a problem**, **warn that their action might destroy data**, and **let them confirm a purchase or other important action** they initiated.

### Best practices
- **should** **Use alerts sparingly.** They interrupt the current task; make sure **each one has only essential information and useful actions** so people pay attention.
- **should** **Avoid an alert that merely provides information.** Informative-but-not-actionable interruptions annoy people; **communicate it in context instead** (Mail shows an **indicator people can choose to learn more** when the server connection is unavailable).
- **should** **Avoid alerts for common, undoable actions, even destructive ones.** No data-loss alert every time someone **deletes an email or file**: they intend to discard it and **can undo**. **Do** alert for an **uncommon destructive action that can't be undone**, in case it was accidental.
- **should** **Avoid an alert when the app starts.** To surface new or important info on open, **make it discoverable** instead; for a startup problem such as **no network**, show **cached or placeholder data plus a nonintrusive label** describing the problem.

### Anatomy
- An alert is a **modal view** that **looks different per platform and device**. **iOS:** small centred card, two buttons **side by side**. **macOS:** card in the window, buttons **stacked**. **tvOS:** glass card over the content. **visionOS:** glass card, buttons as **plain text rows**, icon on top. **watchOS:** full-screen text with **stacked capsule buttons**.

### Content
- **All platforms:** a **title**, **optional informative text** and **up to three buttons**; some platforms add elements:
  - **iOS, iPadOS, macOS, visionOS:** may include a **text field**.
  - **macOS, visionOS:** may include an **icon** and an **accessory view**.
  - **macOS:** may add a **suppression checkbox** and a **Help button**.
- **should** **Be direct, with a neutral, approachable tone** in all copy. Alerts often describe problems and serious situations: **don't be oblique or accusatory, and don't mask the severity**.
- **should** **Write a title that clearly and succinctly describes the situation**: complete and specific, not verbose; say **what happened, in what context, and why** as far as possible. Avoid **useless titles** ("**Error**", "**Error 329347 occurred**") and **titles wrapping beyond two lines**.
  - **Complete sentence** → **sentence-style capitalisation** and **ending punctuation**.
  - **Sentence fragment** → **title-style capitalisation**, **no ending punctuation**.
- **should** **Include informative text only if it adds value**: **as short as possible**, **complete sentences**, **sentence-style capitalisation**, **appropriate punctuation**.
- **should** **Avoid explaining the buttons.** Clear text + clear titles need no explanation. If guidance is truly needed, use a device-neutral verb like ***choose*** and **refer to a button by its exact title, without quotes**.
- **should** **Include a text field only if the input is needed to resolve the situation** (e.g. a **secure text field for a password**), where supported.

### Buttons
- **should** **Make button titles succinct and logical**: **one or two words** describing the result; prefer **verbs and verb phrases tied to the alert text** ("View All", "Reply", "Ignore"). In **informational alerts only**, "**OK**" may mean acceptance; **avoid "Yes" and "No"**. **Always "Cancel"** for a button that cancels the action. **Title-style capitalisation, no ending punctuation.**
- **should** **Avoid "OK" as the default title unless the alert is purely informational.** "OK" is ambiguous even in confirmations ("OK, complete it" vs "OK, I understand the loss"); specific titles like **"Erase", "Convert", "Clear", "Delete"** show what happens.
- **should** **Place buttons where people expect.** The **most likely choice** goes on the **trailing side** of a row or **at the top** of a stack; **always** put the **default** button there. **Cancel** is typically on the **leading side** of a row or **at the bottom** of a stack.
- **should** **Use the destructive style for a destructive action people didn't deliberately choose.** When they **deliberately** chose it (e.g. **Empty Trash**), the alert's **Empty Trash** button is **not** styled destructive: it performs their original intent, and **pressing Return to confirm** is worth more than re-flagging it. Do style it when the alert draws attention to a destructive action they **didn't originally intend**.
- **should** **With a destructive action, include a Cancel button** (always titled "Cancel") as a **clear, safe way out**. **Don't make Cancel the default.** To make people **read** rather than reflexively press Return, **make no button the default**. If an alert has **a single button that is also the default**, use **"Done"**, not "Cancel".
- **should** **Offer alternative ways to cancel when it makes sense**:

| Action | Platform |
|---|---|
| Exit to the Home Screen | iOS, iPadOS |
| Press **Escape (Esc)** or **Command-Period (.)** on an attached keyboard | iOS, iPadOS, macOS, visionOS |
| Press **Menu** on the remote | tvOS |

### Platform considerations
- **tvOS, watchOS:** no additional considerations.

#### iOS, iPadOS
- **must** **Use an action sheet, not an alert, for choices related to an intentional action.** Example: cancelling a Mail message being edited: **an action sheet gives three choices: delete the edits (or the entire draft), save the draft, or return to editing.** An alert can confirm/cancel a destructive action but **offers no additional choices** (see *Action sheets*). *(Note: the Action sheets page describes the same Mail example with **two** choices and its screenshot shows two buttons; Apple's pages differ here.)*
- **should** **Avoid an alert that scrolls** when possible. It may scroll at **large text sizes**; **keep titles short and add a brief message only when necessary** to minimise this.

#### macOS
- macOS **shows your app icon** in an alert automatically; you can **supply another icon or symbol**. Also:
  - **Repeating alerts** can offer a **suppression option** so people can silence later occurrences.
  - You can **append a custom view** for extra information (`accessoryView`).
  - You can include a **Help button** that opens your help documentation (see *Help buttons*).
- **should** **Use a caution symbol sparingly.** A caution symbol like **`exclamationmark.triangle`** used too often **loses its meaning**; use it only when extra attention is needed, e.g. **confirming an action that may cause unexpected data loss**. **Don't** use it for tasks whose **only purpose is to overwrite or remove data** (save, empty trash).

#### visionOS
- In the **Shared Space**, the alert appears **in front of the app's window, slightly forward on the z-axis**. **If a window is moved without dismissing its alert, the alert stays anchored to the window.** In a **Full Space**, it is **centred in the wearer's field of view**.
- **should** **Accessory view (if any): maximum height 154 pt, corner radius 16 pt.**
- The page shows **two videos** of a **Freeform** "permanently delete a recently deleted board" alert: one appearing in front of the window, one staying attached while the window is moved.

## Specs & values

| Item | Value |
|---|---|
| Purpose | critical information needed right now: problem, data-destroying warning, confirmation of an important action |
| Content | title + optional informative text + **up to 3 buttons** (+ text field, icon, accessory view, suppression checkbox, Help button on some platforms) |
| Title length | must not wrap **past 2 lines**; never "Error" / "Error 329347 occurred" |
| Title case | complete sentence → sentence style + ending punctuation; fragment → title style, no punctuation |
| Informative text | only if it adds value; complete sentences, sentence style + punctuation |
| Button titles | 1–2 words, verbs, Title Case, no punctuation; "OK" only for informational; no Yes/No; "Cancel" always for cancel |
| Default button | trailing (row) / top (stack); never Cancel; none if you want people to read; single default button → "Done" |
| Cancel button | leading (row) / bottom (stack) |
| Destructive style | only for destructive actions the person didn't deliberately choose |
| Cancel shortcuts | Home (iOS/iPadOS) · Esc or ⌘. (iOS, iPadOS, macOS, visionOS) · Menu (tvOS) |
| iOS/iPadOS | avoid scrolling; use an action sheet for choices |
| macOS | app icon by default (replaceable), suppression checkbox, accessory view, Help button, caution symbol `exclamationmark.triangle` sparingly |
| visionOS | in front of window (Shared Space, slightly forward on z); anchored when window moves; Full Space: centred in field of view; **accessory view ≤ 154 pt tall, 16 pt corner radius** |
| Developer docs | SwiftUI `alert(_:isPresented:actions:)` · UIKit `UIAlertController` · AppKit `NSAlert` (+ `accessoryView`) |
| Related HIG pages | Modality ✓ · Action sheets ✓ · Sheets ✓ · Buttons ✓ (Help buttons) · Toggles ✓ (checkboxes: `components/selection-and-input/toggles.md`) · Spatial layout ✓ (field of view) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a **pale pink alert card** in the centre: bold **"Alert Title"**, the line **"Alert description"**, and two capsule buttons side by side: a **pale "Secondary"** on the left and a **solid red "Primary"** on the right with white text; **arrows** extend **up, down, left and right** from the card (the alert sits centred with even margins) and a small **chevron/caret** below its right edge; no numbers **(from screenshot)**.
- **Anatomy tabs (catalog `alerts-01`, "iOS | macOS | tvOS | visionOS | watchOS" tab switcher with an underlined active label):**
  - **iOS:** a **small centred rounded card** on a **dimmed grey screen**: "Alert Title", "A description of the alert.", then **"Secondary" (grey pill) on the left and "Primary" (blue pill) on the right**.
  - **macOS:** a **window with three grey dots** on a grey field and a **small card**: title, description, **"Primary" (blue capsule) above "Secondary" (grey capsule)**, full width, **stacked**.
  - **tvOS:** a full-screen landscape (green hills, clouds) with a **glass card** in the centre: title, description, **"Secondary" (dark translucent) | "Primary" (blue)** side by side.
  - **visionOS:** a glass window in a room; inside it a **glass card with a blue circular "!" icon** on top, **bold title, small description**, a **hairline**, then **"Primary" (bold text)** and **"Secondary" (lighter text)** as **borderless rows**.
  - **watchOS:** **10:09**, **"Alert Title / A description of the alert."** in the upper part, a **green capsule "Primary"** and a **purple-to-magenta capsule "Secondary"** stacked, on a dark blue-purple gradient. (visionOS and watchOS have **no dark variants**.)
- **Table (Buttons):** three rows Exit to the Home Screen / Esc or Command-Period / Menu on the remote against platforms, split across two screenshots **(from screenshot)**.
- **visionOS videos (poster frames):** a **Freeform** window in a living room: sidebar **Freeform › All Boards, Recents, Shared, Favorites, Recently Deleted** (selected, count badges), the pane titled **"Recently Deleted"** with toolbar buttons and a **Search** field and the sentence about boards being available for **30 days** (up to **40 days** to purge); in front, a **glass alert card**: the **Freeform app icon**, **"Permanently Delete “Untitled”?"**, **"This board will be deleted from all your devices. You can't undo this action."**, then **"Delete" in red** and **"Cancel"** as text rows. The second poster shows the **window turned/pushed back with the alert still attached** in front of it; each video has a **Replay** link **(from screenshot)**. It is a good copy example: **specific title with the object named, a sentence saying what is lost and that it can't be undone, verb-titled destructive button, plain "Cancel".**
- **Page chrome (from screenshot):** TOC Alerts · Best practices · Anatomy · Content · Buttons · Platform considerations · Resources · Change log; side navigation shows **Presentation** open with **Alerts** in bold and the Selection and input group below; Resources: **Related** Modality, Action sheets, Sheets; **Developer documentation**: `alert(_:isPresented:actions:)`, `UIAlertController`, `NSAlert`; **Change log** with three rows; the last screenshot ends on the footer breadcrumb.
- The page has **1 tabbed set of 5 neutral images** (catalog `alerts-01`), **no ✗/✓ pairs**, **2 videos** (not measured: not the point of the page). Fetch script run; existing catalog IDs unchanged, total 138.

## Web translation
The web version is the **modal alert dialog**: `role="alertdialog"` (or `<dialog>` with alertdialog semantics) for **blocking errors, irreversible-action confirmations, and purchase/permission confirmations**. Everything else uses inline messages, banners, toasts or Undo (`feedback.md`).

| HIG rule | Web implementation |
|---|---|
| Critical, needed now; use sparingly | `role="alertdialog"` + `aria-modal="true"`, `aria-labelledby` (title) and `aria-describedby` (message); background `inert`, focus trapped, **focus returns to the trigger** (`modality.md`). **One alert at a time**, never chained; log or count them in analytics and cut the noisy ones. |
| Not for info-only messages | Use an **inline status/`role="status"`**, banner or toast with a "Learn more" affordance (Mail's indicator); the **FEEDBACK GATE** fails unannounced toasts and `alert()` for success. **Never use native `alert()`/`confirm()`** (no roles, no styling, blocks the thread). |
| No alerts for common undoable actions | **Delete/archive/remove = do it + Undo snackbar** (`undo-and-redo.md`, `feedback.md`); reserve the dialog for **uncommon, irreversible, high-impact** acts (delete account, permanently delete, publish, pay, revoke access). |
| No alert at app start | **Never a modal on page load or login** (welcome, promos, cookie-style upsells excluded from this rule only where law requires consent: then keep it non-modal or minimal); startup problems (**offline**) → show **cached/skeleton data + a small persistent banner** ("You're offline. Showing saved data."). |
| Direct, neutral, non-accusatory copy | Say what happened, where, why, and what to do next; no blame ("You entered…"), no jargon codes; the error **code** may follow in small text or a "Details" disclosure. See `writing.md`. |
| Title: specific, ≤ 2 lines, no "Error" | Title = the situation ("Can't save “Report.docx”", "Permanently delete “Untitled”?"); **name the object**; **max 2 lines** at 200 % text (Layout gate); ban titles in `/^(error|warning|alert|oops)\b/i` and bare codes (checker idea, CONV). |
| Title casing | **Complete sentence → sentence case + ending punctuation** ("Your session has expired."); **fragment → Title Case, no punctuation** ("Permanently Delete “Untitled”?" is a question: keep the mark). This matches **`writing.md` › Capitalisation** (sentence case for explanations and errors, Title Case for button labels). |
| Informative text only if it adds value | Omit `aria-describedby` when there's no message; otherwise **1–2 short complete sentences**, sentence case with punctuation ("This board will be deleted from all your devices. You can't undo this action."). |
| Don't explain buttons; use "choose" | If you must reference a control, write "**Choose** Delete" (not "tap/click") and use the **exact label without quotes** (localised strings share one key). |
| Text field only to resolve the situation | Password/2FA re-auth: `type="password"`, `autocomplete`, label, error inline; not for free-form feedback. |
| Buttons: 1–2 words, verbs, Title Case, no punctuation | `Delete`, `Erase`, `Convert`, `Clear`, `Reply`, `Ignore`; **"OK" only for information-only alerts**; **never Yes/No**; **"Cancel"** verbatim (localised). **≤ 3 buttons** (CONV: prefer 2). |
| Default on trailing / top; Cancel leading / bottom | **Row (wide): Cancel left (LTR), default right; stack (narrow / macOS-style): default on top, Cancel at the bottom**; flip in RTL (`right-to-left.md`). Enter activates the default; if none, **no button has Enter** and focus starts on the **safest** button (Cancel) (CONV). |
| Destructive style only when not deliberately chosen | `data-role="destructive"` (red text/fill + explicit verb) **only** when the alert warns about something the person **didn't ask for** (e.g. "Delete 3 other files?"); when they **explicitly chose "Empty Trash"**, the confirming button is **normal/primary, not red**, so Enter confirms (**Buttons GATE**: never `primary` + `destructive`, i.e. a prominent button with a destructive label is a FAIL: **use this deliberate-intent exception knowingly, documented per alert**) (`hig/components/menus/buttons.md`). |
| Destructive → include Cancel; Cancel never default; "Done" for a lone default | Always render **Cancel** with a destructive button; **never `autofocus`/Enter-default on Cancel and never on Delete**; a **single-button** alert's button is **"Done"** (informational) not "Cancel". |
| Alternative ways to cancel | **Esc closes** (= Cancel), **backdrop click** only for non-destructive alerts; **⌘. / Ctrl+.** optional (CONV); on TV UIs **Back/Menu = Cancel**; on iOS Safari/Android **system back closes it** (`history` state). |
| iOS/iPadOS: action sheet, not alert, for choices | If the person needs **more than confirm/cancel** (save / discard / keep editing), use `action-sheets.md` instead. |
| Avoid scrolling alerts | Keep title short, message brief; set `max-height: calc(100dvh - 2 × safe-area - margin)` and let **only the message** scroll as a last resort at large text (`layout.md`, 200 % text probe). |
| macOS: icon, suppression, accessory, Help | **Icon:** app logo or a symbol (Lucide `triangle-alert` for **caution, sparingly**: only for likely data loss, not for save/empty-trash); **"Do not show this message again"** checkbox (Title Case per Apple's alert-checkbox convention: use **sentence case** per the capitalisation table for box/option descriptions) for repeating alerts, stored per user with a way to reset in Settings; **accessory view** for extra details (e.g. file list, ≤ 154 px tall CONV); a **Help "?" button** linking to the article (`buttons.md` Help buttons). |
| visionOS: in front of window, anchored to it | In multi-panel/multi-window UIs, the dialog belongs to **its own window/panel** (a `<dialog>` in that document, or a scoped overlay), stays with it when it moves, and **only in a full-screen/immersive context is it centred in the viewport**. Accessory content **≤ 154 px tall, 16 px radius** (CONV mapping of pt → px). |
| Look | Centred card, rounded (~14–20 px, CONV), **glass fill with solid fallback** (`materials.md`); ~270–320 px wide on phones (CONV); scrim dims the page; entry fade/scale ~200 ms with **`prefers-reduced-motion`** → fade only. |

Field-note cross-links:
- `hig/patterns/modality.md` (✓): modal discipline; `hig/patterns/feedback.md` (✓ CRITICAL): the FEEDBACK GATE's alertdialog rules, unannounced toasts, `alert()` for success; alerts are for **problems and confirmations**, not success.
- `hig/components/menus/buttons.md` (✓ CRITICAL): roles (primary/cancel/destructive), hit region ≥ 44 px, Help buttons; **note the deliberate-intent exception** above against the `primary-destructive` rule.
- `hig/components/presentation/action-sheets.md` (✓): choices for an intentional action (its Mail example has two choices; this page says three).
- `hig/patterns/undo-and-redo.md` (✓): Undo instead of alerts for common actions; `hig/foundations/writing.md` (✓): capitalisation table, tone, button labels; `hig/foundations/materials.md` (✓ CRITICAL): glass card and fallback; `hig/foundations/layout.md` (✓ CRITICAL): safe areas, `dvh`, 200 % text.
- Ingested since: Sheets (✓ `sheets.md`). Toggles (✓ `components/selection-and-input/toggles.md`: checkbox states and labels).
- No conflict with a field note; one **internal Apple inconsistency** (Mail example, two vs three choices).

## Checklist
- [ ] The alert exists because the person **must decide or know now** (problem, destructive irreversible act, important confirmation); otherwise inline message, banner or Undo.
- [ ] **No alert on load**; startup problems show cached/placeholder data + a quiet label.
- [ ] Title **names the situation and object**, ≤ 2 lines, never "Error"; casing follows sentence-vs-fragment rule; message only if it adds value.
- [ ] **≤ 3 buttons**, 1–2-word verb titles in Title Case, no Yes/No, "OK" only for info-only, "Cancel" verbatim.
- [ ] **Default on the trailing side / top; Cancel leading / bottom**; Cancel is never the default; a lone default button is "Done".
- [ ] Destructive styling **only** for actions the person didn't deliberately choose; a destructive alert always has Cancel.
- [ ] **Esc** cancels (and system back on mobile, Back/Menu on TV); focus trapped and restored; `alertdialog` semantics with title and description.
- [ ] Doesn't scroll at 200 % text; glass card has a solid fallback; reduced motion respected.
- [ ] Desktop extras (icon, suppression checkbox, Help, caution icon) are used **sparingly**; caution icon never on save/empty-trash.
- [ ] Choices beyond confirm/cancel use an **action sheet**, not an alert.

## Related
- Ingested: Modality (✓), Action sheets (✓), Buttons (✓ CRITICAL), Feedback (✓ CRITICAL), Materials (✓ CRITICAL), Layout (✓ CRITICAL), Writing (✓), Undo and redo (✓), Right to left (✓), Spatial layout (✓).
- Toggles (✓ `components/selection-and-input/toggles.md`).
- Developer docs: SwiftUI `alert(_:isPresented:actions:)`; UIKit `UIAlertController`; AppKit `NSAlert`.
