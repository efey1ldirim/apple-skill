# Offering help
Source: https://developer.apple.com/design/human-interface-guidelines/offering-help · Section: Patterns · Supported platforms: all six on the platform strip (tips apply everywhere; tooltips are **macOS and visionOS**) · Ingested: 2026-09-28 · Apple last updated: 2023-12-05. Change log: 2023-09-12 tips guidance added · 2023-12-05 visionOS included in the tooltip guidance. One DocC fetch, read in full. 6 screenshots (dark-mode page, hero → Videos) were compared with the fetched text, captions and image alt texts line by line: everything matches and the six screenshots are contiguous. **The Videos link and the change-log rows were read from the fetch only** (the TOC in the screenshots lists Change log; the last screenshot ends at a cut-off video thumbnail). Text that exists only inside the illustrations is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
The best interface needs no help; when it does, give **small, contextual, dismissible help tied to what the person is doing right now**: a short **tip** for a simple new feature (eligibility rules, at most one per 24 h as Apple's example), a **tooltip** (60–75 characters, verb first) for a control on Mac/visionOS, and a **tutorial** only for complex goals.

## Rules

### Best practices
- **should** **Let the app's tasks decide the kind of help.**
  - Simple one- or two-step tasks: an **inline view** that briefly describes the task.
  - Complex or multistep tasks: a **tutorial** that teaches the larger goal.
  - Always **relate help to the exact action people are doing right now**, and make it **easy to dismiss or avoid**.
- **must** **Use relevant, consistent language and images.**
  - Guidance must fit the **current context**: with the Siri Remote on tvOS don't show tips or images of a **game controller**.
  - Words must fit the **platform**: don't tell people to **click** a button on iPhone or **tap** a menu item on a Mac.
- **must** **Make all help inclusive** (Apple links Inclusion ✓).
- **should not** **Bloat help by explaining how standard components or patterns work.**
  - Describe the **specific action or task** a standard element performs in *this* app.
  - For a **unique control** or a **nonstandard input** (Apple's example: holding the Siri Remote rotated 90°), **orient people quickly**, preferring **animation or graphics** over a long description.

### Creating tips
- A **tip** is a small, **transient** view that briefly describes how to use a feature. Use tips for **new or less obvious** features, or to reveal **faster ways** to do something (developer doc: TipKit).
- **should** **Choose the tip type that suits the UI.**
  - **Popover tip**: preserves the content flow (it appears **on top of** nearby content, which it **obscures**).
  - **Inline tip**: ensures surrounding information stays visible (it is **embedded** among the content, which is **displaced** above and below).
    - **Annotation** style: points at a **specific UI element**.
    - **Hint** style: **not tied** to a specific piece of UI.
  - (Visual **offering-help-01**: the three types on iPhone: Popover · Annotation · Hint.)
- **should** **Use tips for simple features**: easy to describe and completable in a few simple steps. **More than three actions** is probably too complicated for a tip.
- **should** **Make tips short, actionable and engaging.**
  - Goal: encourage people to **try** the feature. Use **direct, action-oriented** language saying what it does and how to use it.
  - **One or two sentences.**
  - **No promotional content** and nothing about a **different feature or flow**. *Promotional* = anything that advertises, sells, or isn't aligned with what the person is doing now.
- **should** **Define rules so tips reach the intended audience.**
  - Not everyone benefits from every tip; someone who already used the feature doesn't need it.
  - Use **parameter-based or event-based eligibility rules** and show a tip only if the person might benefit.
  - With several tips, set the **display frequency** to a reasonable cadence, **for example once every 24 hours**.
- **may** **Include an image or symbol people associate with the feature, and prefer the filled variant.**
  - Example: a star in a tip helps signal favourites. (Visual **offering-help-02**: ✗ outlined star vs ✓ filled star.)
  - **should not** repeat the **same image** in the tip **and** in the UI element it points to: a tip that points at a star icon should be **text-only**. (Visual **offering-help-03**: ✗ tip with its own star + the star it points at · ✓ text-only tip.)
- **may** **Use buttons in a tip to send people to information or options**: to **settings** where they can adjust the feature, or to **additional resources** such as a **setup flow**.

### Platform considerations
- **iOS, iPadOS, tvOS, watchOS:** no additional considerations.
- **macOS, visionOS: tooltips.**
  - A **tooltip** (a **help tag** in user documentation) is a small transient view that briefly describes how to use a **component**.
  - Mac apps (**including iPhone and iPad apps running on a Mac**): appears when the person **holds the pointer over** an element. visionOS: when the person **looks at** an element **or** holds the pointer over it (`help(_:)`).
  - **should** **Describe only the control the person is interested in**, not nearby controls or a bigger task.
  - **should** **Explain the action or task the control starts**; often **begin with a verb**: "Restore default settings", "Add or remove a language from the list".
  - **should not** **Repeat the control's name** in its tooltip (wastes space, adds little).
  - **should** **Be brief**: as far as possible **≤ 60 to 75 characters** (localisation often changes length). Use a **sentence fragment and omit articles**. If a control needs a lot of text, **simplify the interface**.
  - **should** **Use sentence case** (more casual, approachable). For complete sentences, **omit ending punctuation** unless the app's style requires it.
  - **may** **Offer context-sensitive tooltips**: different text for a control's **different states**.
  - (Illustration: Finder toolbar, pointer over the Back button, tooltip "See folders you viewed previously".)

## Specs & values
| Item | Value |
|---|---|
| Tip length | **1–2 sentences** |
| Tip complexity | > **3 actions** = too complicated for a tip |
| Tip frequency (Apple's example) | once every **24 hours** |
| Tip types | Popover (over content) · Inline: Annotation (points at UI) / Hint (no UI target) |
| Tip content | action-oriented; no promotion; no other feature/flow |
| Tip symbol | filled variant; don't repeat the symbol of the UI it points to |
| Tip eligibility | parameter-based or event-based rules; only if the person might benefit |
| Tooltip length | **60 to 75 characters** max (localisation changes length) |
| Tooltip style | verb-led fragment, no articles, **sentence case**, no ending punctuation (unless style requires), don't repeat the control name |
| Tooltip triggers | Mac: pointer hover (incl. iOS/iPad apps on Mac) · visionOS: look at or pointer hover |
| Tooltip variants | context-sensitive by control state |
| Help fits context | no game-controller imagery for Siri Remote; "click" vs "tap" by platform |
| Developer docs | TipKit · `help(_:)` (SwiftUI) · `NSHelpManager` (AppKit) |
| Related HIG pages | Onboarding ✓ · Help menu (The menu bar ✓) · Feedback ✓ · Writing ✓ |
| Video | *Make features discoverable with TipKit* (WWDC23 10229) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a large question mark inside a solid round disc, over construction circles.
- **Tip types (offering-help-01, from screenshot):** three iPhone screens (9:41, a back button, faint Lorem-ipsum text) each with a dark rounded tip card "Tip Title / Include a concise, helpful description of the tip or action." and a close ×; the **Popover** and **Annotation** cards have a small pointer down to a **blue star**; the **Hint** card has none. In the popover version the text beneath is **dimmed** (obscured); in the annotation/hint versions the text is **pushed apart** above and below.
- **Symbol usage (offering-help-02/-03, from screenshot):** ✗ = a tip with an **outlined** blue star at its leading side; ✓ = the same tip with a **filled** star. Second pair: ✗ = tip with a star **and** a star icon below it (the UI target); ✓ = **text-only** tip above the same star. In both ✓ cases the tip title is bold white and the body a smaller grey.
- **Tooltip (from screenshot):** a Finder-like window with traffic-light dots, a sidebar (Favorites: Applications, Desktop, Applications, Documents), the toolbar title "Documents", back/forward buttons with the pointer over Back, and a small dark tooltip below reading "See folders you viewed previously" (33 characters).
- **Video thumbnail (from screenshot):** *Make features discoverable with TipKit*: three phones with a portrait and small app screens (cut off in the last screenshot).
- **Page chrome (from screenshot):** the TOC reads Offering help · Best practices · Creating tips · Platform considerations · Resources · Change log; the platform strip lights all six devices.
- **Visual pairs added to the catalog:** `offering-help-01` (compare: tip types), `offering-help-02` (✗/✓ outlined vs filled symbol), `offering-help-03` (✗/✓ repeated symbol vs text-only). Existing 100 IDs unchanged; total now **103**.
- **Text that is not in the fetch:** the strings inside the illustrations (tip title/body, Lorem ipsum, Finder labels) and the chrome; the tooltip sentence is also in the image alt text.

## Web translation
Help on the web: **coach marks/tips**, **tooltips**, **inline hints**, **tutorials**, **help centre links**. Apple's tooltip rules apply to any pointer-driven desktop UI; tips apply everywhere.

| HIG rule | Web implementation |
|---|---|
| Help matches the task | 1–2 step task → inline hint or helper text; multistep/complex → an optional short tutorial or checklist (`onboarding` page not yet ingested); always tied to the current action, with **Dismiss** and "Don't show again". |
| Right words and images for the context | Choose verbs by input: **tap** on touch, **click** on pointer, **press** for keyboard (`(pointer: coarse)`, or neutral verbs "Select", "Choose"); never show a mouse hint on a phone or a keyboard glyph to a touch-only user; imagery matches the device (no game-controller art for a TV/remote UI). Inclusive language and imagery (`inclusion.md`). |
| Don't explain standard components | Don't tutorial "this is a dropdown". Say what **this** control does in **this** product, and use a short looping animation (respect `prefers-reduced-motion`, with a static fallback) for unusual controls or gestures. |
| Tip types | **Popover tip** = a small anchored `popover` (non-modal, `role="dialog"` with an accessible name, or `role="status"` for passive), it covers content and never traps focus; **Inline tip** = a card inserted in the flow (pushes content down; annotation = attached to a target with a pointer/arrow and `aria-describedby` on the target; hint = a standalone card with no target). Tips are **non-modal** (`modality.md`): no backdrop, no blocking, no focus steal. |
| Simple features only | Tip only if the feature takes ≤ **3 actions**; longer → link to a tutorial/help article from a button. |
| Short, actionable, non-promotional | 1–2 sentences, verb-led ("Swipe left to archive"); no upsell, ads or other flows in a tip (marketing belongs to opt-in channels, `managing-notifications.md`). |
| Eligibility rules and cadence | Store per-user tip state (`seen`, `dismissed`, `featureUsed`, `lastShownAt`) in your backend or `localStorage`; show a tip only if the feature hasn't been used, its prerequisite event happened and the person isn't mid-task; **at most one tip per 24 h** by default (Apple's example cadence, CONV as a default); stop after dismissal or use; never show tips on first paint of a first visit over an onboarding step. |
| Symbol in the tip | Use the feature's filled icon (from the icon family, `icons.md`); when the tip points at the icon itself, omit it (**text-only**); don't show both. |
| Buttons in tips | One quiet action link/button: "Open settings", "Learn more" (verb-led, `writing.md`); the tip's primary action is never the only way to reach the setting. |
| Tooltips (desktop/pointer) | Custom tooltips: `role="tooltip"` + `aria-describedby` on the control; open on **hover after a short delay and on keyboard focus**, close on `Esc`, blur and pointer-leave; hoverable content stays open while the pointer is over it (WCAG 1.4.13); don't rely on the native `title` attribute alone (not keyboard/touch accessible). On touch, skip tooltips: use visible labels or an info button. |
| Tooltip copy | ≤ **60–75 characters**; verb-first fragment without articles ("Restore default settings", "Show folders you viewed"); sentence case; no trailing period; don't repeat the control's visible name; **only the hovered control**; context-sensitive text per state ("Mute" vs "Unmute" pattern via the same source as `aria-label`). Tooltip text must equal or extend, never contradict, the control's accessible name. |
| Expansion tooltip for truncated text | (`entering-data.md`, macOS rule) A truncated value shows its full text in a tooltip on hover **and** focus, or the field grows. |
| Help must be dismissible and avoidable | Every tip/tooltip closes by Esc, ×, or acting; nothing blocks; "Skip tour" exists; help never covers the control it explains beyond the pointer arrow. |
| visionOS Safari / gaze | Tooltips can appear on gaze: keep them non-interactive, short, and never the only place a label exists. |
| Accessibility | Announce a new tip politely once (`role="status"` or `aria-live="polite"`) only if it appears without user action; keep focus where it is; contrast ≥ 4.5:1 (Color gate); respect `prefers-reduced-motion` for entry animation; ensure the same information is in the help centre. |

Field-note cross-links:
- `hig/foundations/writing.md`: sentence case, verb-first, no "click here", no "we", plain words; tips and tooltips are microcopy under those rules.
- `hig/patterns/feedback.md` (CRITICAL): tips are passive help and never interrupt; they must not appear as unannounced toasts and must not be colour-only; a tip must never replace an error message.
- `hig/patterns/modality.md`: a tip is the **non-modal** alternative; popover tips must not become modals.
- `hig/patterns/entering-data.md`: the expansion tooltip and field hints belong to this page's tooltip rules.
- `hig/patterns/launching.md` / onboarding: no tips over the first screen skeleton; tips start after launch.
- `hig/foundations/icons.md` / `sf-symbols.md`: filled variant for emphasis (selected/tip), outline for default.
- `hig/foundations/inclusion.md`: help content inclusive by default.
- `field-notes/anti-patterns.md` and `principles.md` §16: no filler and no duplicate copy next to a control **confirm** "don't repeat the control's name"; "one sentence says what to do" **confirms** the 1–2 sentence tip.
- No conflict with a field note.

## Checklist
- [ ] Help is tied to the current task, short, dismissible, and never blocks; complex goals get an optional tutorial, simple ones an inline hint or tip.
- [ ] Language and imagery match the device and input (tap/click/press); nothing standard is explained; unusual controls use a short animation.
- [ ] Tips: only for simple features (≤ 3 actions), 1–2 sentences, action-oriented, non-promotional; a type is chosen deliberately (popover / annotation / hint).
- [ ] Tip eligibility rules exist (unused feature, prerequisite met, not mid-task); cadence ≈ one per 24 h by default; dismissed tips never return.
- [ ] A tip uses the filled symbol when it uses one, and is text-only when it points at that same icon.
- [ ] Tip buttons go to settings or resources ("Open settings", "Learn more").
- [ ] Tooltips (desktop): hover **and** focus, Esc closes, hoverable, ≤ 60–75 characters, verb-led fragment, sentence case, no repeated control name, state-aware; not the only source of the control's label.
- [ ] Compared with Apple's `offering-help-01 … 03`; Feedback and Color gates pass on tip/tooltip surfaces.

## Related
- Ingested: Writing (✓), Feedback (✓ CRITICAL), Modality (✓), Entering data (✓), Inclusion (✓), Icons (✓), SF Symbols (✓), Launching (✓).
- Ingested since: Onboarding (✓). Ingested since: The menu bar (✓ § Help menu). Not yet ingested: Toolbars.
- Developer docs: TipKit, `help(_:)`, `NSHelpManager`. Video: *Make features discoverable with TipKit* (WWDC23 10229).
