# Digit entry views
Source: https://developer.apple.com/design/human-interface-guidelines/digit-entry-views · Section: Components › Selection and input · Supported platforms: **tvOS only** ("Not supported in iOS, iPadOS, macOS, visionOS, or watchOS"; only the TV icon is lit on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC reads Digit entry views · Best practices · Platform considerations · Resources **(from screenshot)**). One DocC fetch, read in full. 2 screenshots (hero → developer documentation, followed by the Apple site footer, ignored) were compared with the fetched text line by line: everything matches, so only the image alt text was read from the fetch alone. **No videos, no change log.** Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **no numbers** apart from the example (five digits); it is very short (2 best practices).

## In one line
A digit entry view is a **full-screen tvOS view that prompts for a series of digits (a PIN or passcode)** with a **digit-specific keyboard**, and can show an **optional title and prompt above the line of digits**. **Use secure digit fields** (asterisks, never the digits; always for sensitive data) and **state the purpose clearly** in the title and prompt.

## Rules

### Framing (intro)
- A digit entry view **fills the entire screen** and **prompts people to enter a series of digits, like a PIN**, using a **digit-specific keyboard**.
- You can add an **optional title and prompt above the line of digits**.

### Best practices
- **must** **Use secure digit fields.** A secure digit field **shows asterisks instead of the entered digit onscreen**. **Always** use one when the app asks for **sensitive data**.
- **should** **Clearly state the purpose of the digit entry view.** Use a **title and prompt that explain why someone needs to enter digits**.

### Platform considerations
- **tvOS:** the only supported platform.
- **iOS, iPadOS, macOS, visionOS, watchOS:** not supported.

## Specs & values

| Item | Value |
|---|---|
| Layout | full-screen view: optional title + prompt above a **row of digit boxes**, then the digit keyboard |
| Example | title "Enter Passcode", prompt "Enter your five-digit passcode." **(from screenshot)** |
| Digit count | set by the task (example: 5); no rule given |
| Secure entry | asterisks instead of digits; mandatory for sensitive data |
| Keyboard | digit-specific: 1 2 3 4 5 6 7 8 9 0 and a delete key in one row **(from screenshot)** |
| Sizes, spacing, hit regions | **none given on this page** |
| Platforms | tvOS only |
| Developer docs | TVUIKit `TVDigitEntryViewController` (`isSecureDigitEntry` is named on the Entering data page) |
| Video / Change log | none |
| Apple's Related list | Virtual keyboards ✓ |

## Visual notes (from screenshots)
- **Hero (screenshot):** a red-to-orange gradient card, the Apple TV five-digit passcode screen: the **title "Enter Passcode"** in large text, the **prompt "Enter your five-digit passcode."** below it, **five tall rounded rectangles in a row** (the digit boxes; the third one is set slightly lighter, the current position), and under them a **single row of numerals "1 2 3 4 5 6 7 8 9 0" and a delete key (a filled backspace glyph)**; the **"1" sits in a white rounded highlight** (the focused key). **Measurement arrows** run: vertically above and below the block, horizontally from the card edges to the boxes on both sides (the block is centred with generous space), and small **I-beam spacing marks** between title and prompt, prompt and boxes, and between the boxes **(from screenshot)**. The alt text: *a stylised representation of an Apple TV five-digit passcode entry screen*.
- **Page chrome (from screenshot):** TOC Digit entry views · Best practices · Platform considerations · Resources (**no Change log**); platform strip lights only the **TV** icon; side navigation shows **Selection and input** open with **Digit entry views** ringed; the Apple developer-site footer follows the page (ignored).
- **No catalog images:** only the hero (`components-digit-entry-view-intro`); the fetch script reports **0 comparisons**; the catalog is unchanged (151, existing IDs unchanged).

## Web translation
tvOS-only, but the pattern is the web's **PIN / passcode / one-time code entry** (10-foot UIs and TV web apps included).

| HIG rule | Web implementation |
|---|---|
| Full-screen view for a series of digits with a digit keyboard | A **focused screen or dialog** (on TV/large-screen web apps a full-screen route) whose only task is digit entry; **`inputmode="numeric"`** (`pattern="[0-9]*"`) so touch devices show the numeric pad; on TV/D-pad UIs an **on-screen digit row** navigated with arrows (`Enter` selects, `Backspace`/delete key removes; CONV). |
| Optional title and prompt above the digits | A **heading (`<h1>`/dialog title)** and a **prompt line** (`aria-describedby` on the input group): "Enter Passcode" / "Enter your five-digit passcode." (title in the skill's capitalisation table; prompt is a full sentence with a period). |
| Row of digit boxes | Either **one `<input>` with a wide letter-spaced look** (recommended: paste, autofill and screen readers work) or **N single-digit inputs** with **auto-advance, backspace-to-previous, paste-to-fill** and one shared **`role="group"` + label**; every box **≥ 44 px** on touch (Buttons GATE); show the **current position** with more than a colour change (ring, underline). |
| Secure digit fields: asterisks, always for sensitive data | **Mask digits** (`type="password"` with `inputmode="numeric"`, or `-webkit-text-security: disc` on a text input; CONV) for **PINs, passcodes and card CVV**; offer a **show/hide toggle** on touch/desktop (`aria-pressed`); do **not** log or echo values; never prefill (`entering-data.md`, `privacy.md`). **One-time codes** sent to the person (SMS/email) may stay visible (CONV) and use **`autocomplete="one-time-code"`** so the platform can fill them. |
| State the purpose clearly | The title and prompt say **why** the code is needed ("Enter the 6-digit code we sent to …" is fine as a system fact; avoid "we" in errors: `writing.md`); the button label says what happens next ("Continue" / "Verify"). |
| Errors and rate limits | Wrong code: **inline message at the field** (`role="alert"`, no blame, say how to fix: "That code isn't right. Try again."), **clear the boxes and return focus to the first**, show remaining attempts/lockout time honestly (CONV; `feedback.md`). |
| Accessibility | Boxes are labelled ("Digit 1 of 5"), the group has a label and hint, values are **not read aloud when masked**, respect `prefers-reduced-motion` for shake/feedback animation, keep **200 % text** working (Layout gate). |

Field-note cross-links:
- `hig/patterns/entering-data.md` (✓): secure entry, `inputmode`/`autocomplete` and the tvOS `isSecureDigitEntry` mention (the checklist there already covers masked sensitive input).
- `hig/foundations/privacy.md` (✓): never prefill passwords, Password AutoFill and passkeys; `hig/patterns/managing-accounts.md` (✓): sign-in flows (PIN as a second step), passkeys before codes.
- `hig/patterns/feedback.md` (✓ CRITICAL) and **Feedback gate**: error placement and tone; `hig/foundations/writing.md` (✓): title/prompt copy and the capitalisation table.
- `hig/patterns/onboarding.md` (✓): the code-entry step inside a flow; `hig/components/content/text-views.md` (✓): multi-line text (not digits).
- Virtual keyboards (✓ `virtual-keyboards.md`, Apple's Related). Text fields (✓ `text-fields.md`).
- No conflict with a field note.

## Checklist
- [ ] The digit screen has **a title and a prompt that say why** digits are needed.
- [ ] **Sensitive digits (PIN, passcode, CVV) are masked**; codes sent to the person may be visible and use `autocomplete="one-time-code"`.
- [ ] `inputmode="numeric"` is set; pasting a whole code fills every box; **auto-advance and backspace-to-previous** work.
- [ ] Each box is **≥ 44 px on touch**, the **current position** is shown by more than colour, and the group has one accessible label.
- [ ] Wrong codes give an **inline, blame-free error**, clear the boxes and refocus the first.
- [ ] Nothing is logged, echoed or prefilled; a show/hide toggle exists where masking hurts.
- [ ] On TV / D-pad UIs the digit row is navigable with arrows and focus is visible.

## Related
- Ingested: Entering data (✓), Privacy (✓), Managing accounts (✓), Feedback (✓ CRITICAL), Writing (✓), Onboarding (✓), Text views (✓), Combo boxes (✓), Color wells (✓).
- Virtual keyboards (✓ `virtual-keyboards.md`). Text fields (✓ `text-fields.md`).
- Developer docs: TVUIKit `TVDigitEntryViewController`.
