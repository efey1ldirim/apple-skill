# Entering data
Source: https://developer.apple.com/design/human-interface-guidelines/entering-data · Section: Patterns · Supported platforms: all six · Ingested: 2026-09-28 · Apple last updated: 2023-06-21 (visionOS guidance; the change log has that single entry). One DocC fetch, read in full. 4 screenshots (dark-mode page, hero → change log) were compared with the fetched text line by line: everything matches, and the page has no text inside images. Only the video thumbnail and page chrome are marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
Ask for as little as possible: get what you can from the system, prefill sensible defaults, offer choices instead of typing, accept drag/paste, validate as people type, hide sensitive input, never prefill a password, and don't let people proceed until the required data is in.

## Rules

### Framing (intro)
- Entering information is tedious whatever the input method. Two ways to improve it:
  - **pre-gather** as much information as possible, so people supply less;
  - **support every available input method**, so people choose the one that works for them.

### Best practices
- **should** **Get information from the system whenever possible.**
  - Don't ask for what can be collected automatically, for example from settings.
  - Or get it by **asking permission** (for example location or calendar information) instead of making people type it.
- **should** **Be clear about the data you need.**
  - Show a prompt inside the field, such as "username@company.com", **or** an introductory label that describes the information, such as "Email".
  - **Prefill** fields with reasonable defaults: this reduces decisions and speeds entry.
- **should** **Use a secure text-entry field when appropriate.**
  - For sensitive data, use a field that obscures what is typed, typically by showing a small **filled circle** for each character (SwiftUI `SecureField`).
  - **tvOS:** a **digit entry view** can also hide the numerals (`isSecureDigitEntry`).
  - **visionOS:** the system text field shows the entered data to the wearer only, not to anyone else. Example: a secure text field **blurs automatically** when people stream their view with AirPlay.
- **must** **Never prepopulate a password field.** Always ask people to enter the password, or to use biometric or keychain authentication (Apple links Managing accounts).
- **should** **Offer choices instead of requiring text entry when possible.**
  - Choosing from a list is usually easier and faster than typing, even with a keyboard at hand.
  - Use a picker, menu or other selection component when it makes sense.
- **should** **Let people provide data by drag and drop or by paste** as far as possible; it makes the experience feel integrated with the rest of the system.
- **should** **Validate field values dynamically.**
  - Verify each value **as soon as it is entered** and give feedback as soon as a problem is detected, so people correct mistakes immediately rather than after a long form.
  - For numeric data, consider a **number formatter**: it configures a text field to accept only numeric values, and can also format the display (a set number of decimals, a percentage, currency).
- **must** **Make it clear that required data must be entered before people can proceed.** Example: with a Next or Continue button after a set of text fields, make the button **available only after** the required data is entered.

## Specs & values
The page has **no numbers** (no sizes, lengths, durations or thresholds). Its concrete facts:

| Item | Value |
|---|---|
| Secure field mask | a small filled circle per character (`SecureField`) |
| tvOS secure numerals | digit entry view with `isSecureDigitEntry` |
| visionOS secure field | visible to the wearer only; blurs during AirPlay streaming |
| Example prompt / label | prompt "username@company.com" · label "Email" |
| Numeric display formats named | number of decimal places · percentage · currency |
| Continue/Next button | enabled only after the required data is in |
| Password fields | never prepopulated; ask, or use biometrics/keychain |
| Related HIG pages | Text fields · Virtual keyboards · Keyboards (none ingested yet) |
| Developer docs | SwiftUI *Input events* · `SecureField` · `isSecureDigitEntry` |
| Video | *What's new in UIKit* (WWDC21 10059) |

## Platform considerations
- **iOS, iPadOS, tvOS, visionOS, watchOS:** no additional considerations. (The secure-field details for tvOS and visionOS sit in the rules above.)
- **macOS:** **consider an expansion tooltip** to show the full version of clipped or truncated text in a field.
  - It behaves like a normal tooltip, appearing when the pointer rests on the field.
  - Apps on macOS, **including iOS and iPadOS apps running on a Mac**, can use it so people can read the full entry when the field is too small (Apple links Offering help › macOS, visionOS).

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a rounded input field holding three dots (a text-field-with-ellipsis motif) and a pencil crossing its top trailing corner, over construction circles and guide lines.
- **Page chrome (from screenshot):** TOC = Entering data · Best practices · Platform considerations · Resources · Change log. The platform strip shows **all six** devices lit, matching "all six" above.
- **Video thumbnail (from screenshot):** *What's new in UIKit*: a small iPad Mail-like screen with a dock of icons.
- The page has **no ✗/✓ pairs, no comparison images and no in-page videos**, so nothing was added to the visual-examples catalog.
- **Text that is not in the fetch:** none beyond the video thumbnail and chrome. Every heading, bold lead-in, bullet, sentence, link and the change-log row in screenshots 30–33 is in the fetched text.

## Web translation
Every rule maps onto HTML forms. Combine with the field recipes in `field-notes/components.md` § Fields and § Wizard shell, and with `hig/foundations/writing.md` for the wording of labels, hints and errors.

| HIG rule | Web implementation |
|---|---|
| Pre-gather; get it from the system | Use the browser and platform: `autocomplete` tokens (`name`, `email`, `tel`, `street-address`, `postal-code`, `cc-number`, `one-time-code`, `username`, `current-password`, `new-password`), the Geolocation/Contact Picker APIs only from a user action, timezone/locale from `Intl`, and data you already hold (never ask twice). Ask permission at the point of use with a one-sentence reason (`privacy.md`). |
| Be clear about the data needed | A visible `<label>` per field (a placeholder is **not** a label: it disappears while typing and is low-contrast; the label and hint text carry the meaning and meet 4.5:1, per `field-notes/tokens.md`). Placeholder or helper text shows a format example ("username@company.com"). Mark optional fields "optional" rather than marking every required one with an asterisk. |
| Prefill sensible defaults | Preselect the most common choice; prefill from the account or last use; never prefill something the person may not notice (a consent box, a price). Defaults must be editable and visible. |
| Secure entry | `<input type="password">` with a "Show password" toggle (an eye button, `aria-pressed`); no `console.log`/analytics on the value; `autocomplete="current-password"` / `new-password`; show OTP inputs with `autocomplete="one-time-code"` and `inputmode="numeric"`. Blur or hide sensitive values in screen-shares if the product can (the visionOS behaviour is a product decision, not a web API). |
| Never prepopulate a password | Never set `value` on a password input from your own state. Let the browser's password manager autofill it (that is a person-controlled action); support passkeys/WebAuthn first (`privacy.md`). |
| Offer choices instead of typing | `<select>` / radio groups / segmented control / date and time pickers (`<input type="date">`), comboboxes with search for long lists, steppers/sliders for bounded numbers, chips for tags. Type-ahead for large sets. Pick by list size: ≤ 5 radio, 6–15 select/menu, more = searchable combobox. |
| Drag/drop and paste | Accept paste (`paste` event, multi-line paste into a list field, images into an upload area) and file drops; never block paste in any field, including password and confirm-email fields. See `hig/patterns/drag-and-drop.md`. |
| Right keyboard and input assistance | `type` (`email`, `tel`, `url`, `number` only for true quantities), `inputmode` (`numeric`, `decimal`, `tel`, `email`), `enterkeyhint` (`next`, `done`, `search`, `send`), `autocapitalize`, `autocorrect`/`spellcheck` off for codes and usernames. (Virtual keyboard page not yet ingested.) |
| Dynamic validation | Validate on **blur** and while typing for fixable formats (e.g. after the first invalid blur, re-validate on each input so the message clears as soon as it's fixed). Don't show an error before the person has finished typing or on an untouched field. Put the message next to the field (`aria-describedby`, `aria-invalid="true"`), state how to fix it (`writing.md`), keep focus where it is; on submit, move focus to the first invalid field and summarise errors. Use the Constraint Validation API (`required`, `pattern`, `min/max`, `setCustomValidity`) as the baseline. |
| Number formatter | Parse and format with `Intl.NumberFormat(locale, { style: "currency" | "percent", minimumFractionDigits… })`. Accept locale separators (comma vs dot) and only reject genuinely non-numeric input. Format on blur, not on every keystroke (it moves the caret). Keep the raw value in state, the formatted value in the field. Right-align numbers in tables/columns; digits in phone/card/OTP fields stay LTR (`right-to-left.md`). |
| Required data before proceeding | The primary "Continue/Next" is `disabled` until the required fields are valid (field note: a real `disabled`, not only faded). **But** a silently disabled button hides *why*: show the requirement ("Name and sector required", the field-note wording) or leave the button enabled and, on press, focus the first missing field with an inline message. Never rely on colour alone. |
| Expansion tooltip (macOS) | For a truncated single-line value show the full text on hover/focus as a tooltip (`title` is not keyboard-accessible; use a real tooltip that opens on focus, `role="tooltip"`, `aria-describedby`), or let the field grow (multi-line/auto-grow textarea, see `field-notes/engineering-gotchas.md` on the placeholder measuring trap). Never truncate meaningful values without a full-text route (`typography.md`). |
| Wizards / long forms | Split into steps with one topic per step (field note: Wizard shell), keep entered values when going back, autosave drafts, and show which step you're on. Ask only what the step needs. |
| Accessibility / RTL | Label association (`for`/`id` or wrapping), grouped controls in `<fieldset><legend>`, error text announced (`role="alert"` or `aria-live="polite"`), 44 px targets (`layout.md`), logical properties for RTL, no placeholder-only labelling. |

Field-note cross-links:
- `field-notes/components.md` § Fields: bare fields inside a group (52 px rows, optional label above, hint below) and filled fields outside a group agree with "be clear about the data" (label + hint). **Correction to carry forward:** that recipe's `placeholder:text-black/25` is the "original (visual-only)" value; `field-notes/tokens.md` already replaces it with `/45` (~3.3:1), which is acceptable only **because a visible label is always present**.
- `field-notes/components.md`: "Real `disabled` when a precondition is unmet" and the "required-fields" note (join labels, lowercase with the **locale**, "Name and sector required") **confirm** the Next/Continue rule and supply the "say why it's disabled" refinement.
- `hig/foundations/writing.md`: "Show hints in text fields" and "Write clear error messages" are the wording side of this page; both pages agree on inline, non-blaming, specific errors.
- `hig/foundations/privacy.md`: asking permission instead of typing, never prepopulating passwords, Password AutoFill, passkeys and correct `autocomplete` attributes.
- `hig/foundations/accessibility.md`: labels, error identification and "not colour alone" apply to validation states.
- `hig/patterns/drag-and-drop.md`: the "drag and drop or paste" rule.
- No conflict with a field note.

## Checklist
- [ ] Nothing is asked that the system, the account or a granted permission can supply.
- [ ] Every field has a visible label and, where useful, a format example; sensible defaults are prefilled and editable.
- [ ] Selection components replace typing wherever a bounded set of answers exists.
- [ ] Sensitive input is masked (with a show/hide toggle on web); a password field is never prefilled; passwords/OTP use the right `autocomplete`.
- [ ] Paste and (where useful) drag-and-drop are accepted everywhere, including confirm fields.
- [ ] The right input type, `inputmode` and `enterkeyhint` are set; numbers use locale-aware parsing and formatting (`Intl`).
- [ ] Values are validated as they are entered; errors are inline, specific, non-blaming, associated with the field and announced.
- [ ] The primary Continue/Next is available only when the required data is in, and the form says what is still missing.
- [ ] Truncated values have a full-text route (tooltip on hover **and** focus, or a growing field).
- [ ] Entered values survive Back, reload and errors; long flows are split into steps.
- [ ] Keyboard-only, screen-reader and 200 % text-scale runs of the form succeed (Layout and Typography gates).

## Related
- Ingested: Writing (✓), Privacy (✓), Accessibility (✓), Drag and drop (✓), Layout (✓ CRITICAL), Typography (✓ CRITICAL), Right to left (✓).
- Ingested since: Feedback (✓ CRITICAL), Managing accounts (✓), Offering help (✓). Not yet ingested: **Text fields**, **Virtual keyboards**, **Keyboards**, Pickers. Onboarding (✓ `hig/patterns/onboarding.md`). Digit entry views (✓ `components/selection-and-input/digit-entry-views.md`).
- Developer docs: SwiftUI *Input events*. Video: *What's new in UIKit* (WWDC21 10059).
