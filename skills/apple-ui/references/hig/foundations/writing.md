# Writing
Source: https://developer.apple.com/design/human-interface-guidelines/writing · Section: Foundations · Supported platforms: all six (no platform-specific considerations) · Ingested: 2026-09-28 · Apple last updated: 2025-12-16 (language patterns clarified, possessive-pronoun guidance added). One DocC fetch, read in full. 6 screenshots (dark-mode page, hero → Videos) were compared with the fetched text line by line: the body text matches. Text that exists only inside images, and page chrome, is marked **(from screenshot)**. Not marked critical: no gate, token file or checker (the user has not asked for one).

## In one line
Words are part of the interface. Pick one **voice** for the product, bend the **tone** to what the person is doing right now, and write short, plain, consistent, verb-led text that says what happened and what to do next.

## Rules

### Getting started
- **should** Determine the app's **voice** first.
  - Think about who is reading and which words are familiar to them.
  - Decide how the words should make people feel. A banking app leans towards trust and stability; a game towards excitement and fun.
  - Keep a **list of common terms** and reuse it, so the vocabulary never drifts. A consistent vocabulary plus a voice that reflects the product's values makes everything feel cohesive.
- **should** **Match tone to context.**
  - Voice stays the same; tone varies with the situation.
  - Consider what the person is doing, both in the physical world and inside the app: reaching a fitness goal is a different moment from failing to complete a payment.
  - Situation affects not only *what* is said but *how the text is displayed* on screen.
  - Apple's contrast (**writing-01**): a fall-detection message is plain and direct because the situation is serious; a personal-best Move-streak message is light and congratulatory.
- **should** **Be clear.**
  - Choose words that are easy to understand and carry the right meaning.
  - Check that every word earns its place; if fewer words work, use fewer.
  - When unsure, read the text out loud.
- **should** **Write for everyone.**
  - Use simple, plain language, and write with accessibility and localisation in mind.
  - Avoid jargon and gendered terminology.
  - Apple points to *Writing inclusively* (Apple Style Guide), VoiceOver (accessibility) and Localization (developer side).

### Best practices
- **should** **Consider each screen's purpose.**
  - Watch the order of elements and put the most important information first.
  - Format the text so it is easy to read.
  - If a screen carries more than one idea, consider splitting it across several screens, and think about how information flows between them.
- **should** **Be action oriented.**
  - Use active voice and clear labels to carry people from step to step and screen to screen.
  - Labels on buttons and links: it is almost always best to start with a **verb**.
  - Choose clarity over cuteness. Example: "Send" usually beats "Let's do it!".
  - Links: don't write "Click here"; use descriptive words, e.g. "Learn more about UX Writing". This matters most for screen-reader users.
- **should** **Build language patterns.**
  - Consistency builds familiarity, makes the app feel cohesive, intuitive and thoughtfully designed, and makes writing easier because the patterns can be reused (this sentence was clarified in the Dec 2025 update).
- **should** **Adopt capitalization rules that fit the app's style, then apply them consistently.**
  - Some components have their own rules (Apple links Buttons § Content for button labels); everything else expresses the app's voice.
  - Title case is generally read as formal; sentence case as more casual.
  - Pick one style **per UI element type** and hold it across the whole app. Apple's examples: title case for all alerts, or sentence case for all headlines.
- **should** **Give clear guidance and use consistent language in multi-step processes.**
  - Decide up front how the actions that move between steps are labelled.
  - Start a flow with language such as "Get Started".
  - Either let the button label hint at the next step, or use neutral terms like "Continue" or "Next"; whichever is chosen, keep it consistent.
  - Make completion obvious with language such as "Done".
- **should** **Use possessive pronouns sparingly** (new in the Dec 2025 update).
  - *my* and *your* are usually not needed to establish context: "Favorites" says the same as "Your Favorites" and is shorter.
  - When they are used, use them consistently across the app and do not switch perspective.
  - **Avoid *we* altogether**: it is often unclear who "we" is. This is worst in errors. "We're having trouble loading this content" is worse than "Unable to load content".
- **should** **Write for how people use each device.**
  - Language must be consistent across devices, but adjust text where it helps for the device in hand.
  - Describe gestures correctly for each device: never say "click" on a touch device (iPhone, iPad) when the action is a **tap**.
  - Where and how a device is used, its screen size and its location all change the writing:
    - iPhone and Apple Watch: room for personalisation, but small screens demand **brevity**.
    - TV: often in shared living rooms, so several people may see what is on screen; consider who is being addressed.
    - Big screens also demand brevity, because text has to be large enough to read from a distance.
- **should** **Provide clear next steps on any blank screen.**
  - An empty state (a finished to-do list, an empty bookmarks folder) is a chance to welcome people and teach them about the app, and to show the app's voice, as long as the content is useful and fits the context.
  - An empty screen is daunting when the next move isn't obvious, so say what people can do and give a button or link for it when possible.
  - Empty states are usually temporary, so never put crucial information there that would later disappear.
- **should** **Write clear error messages.**
  - Best of all, help people avoid the error in the first place.
  - When a message is necessary: show it **as close to the problem as possible**, **avoid blame**, and say what the person can do to fix it. "Choose a password with at least 8 characters" beats "That password is too short".
  - Errors are frustrating; interjections such as "oops!" or "uh-oh" are typically unnecessary and can sound insincere.
  - If language alone can't fix an error that is likely to hit many people, treat that as a reason to redesign the interaction.
- **should** **Choose the right delivery method.**
  - There are many ways to get attention, whether or not the person is using the app right now.
  - Weigh the message's urgency and importance, the context in which it will be seen, whether it needs immediate action, and how much supporting information is needed.
  - Pick the matching channel and a tone that suits the situation. Apple links Notifications, Alerts and Action sheets.
- **should** **Keep settings labels clear and simple.**
  - Label settings as practically as possible so they are easy to find.
  - If the label is not enough, add an explanation. Describe what the setting does **when turned on**; people can infer the opposite.
  - Example: the Apple Watch Handwashing Timer description says a timer can start when the wearer is washing their hands, and does not add that it won't start when the setting is off.
  - To send someone to a setting, provide a **direct link or button** rather than describing where it lives (Apple links Settings).
- **should** **Show hints in text fields.**
  - For fields where people type their own text (account or contact information): label every field clearly and use hint/placeholder text so people know the format.
  - A hint may be an example ("name@example.com") or a description of the content ("Your name").
  - Show errors right next to the field and instruct people how to enter the value correctly instead of scolding them. "Use only letters for your name" is better than "Don't use numbers or symbols".
  - Avoid robotic messages with no useful information, such as "Invalid name". (Apple links Text fields.)

## Specs & values
The page has **no numbers, sizes or ratios**. Its concrete values are wording examples, all recorded above:

| Situation | Weaker | Better |
|---|---|---|
| Button label | "Let's do it!" | "Send" |
| Link text | "Click here" | "Learn more about UX Writing" |
| Section title | "Your Favorites" | "Favorites" |
| Load failure | "We're having trouble loading this content." | "Unable to load content" |
| Password error | "That password is too short" | "Choose a password with at least 8 characters" |
| Name-field error | "Don't use numbers or symbols" · "Invalid name" | "Use only letters for your name" |
| Flow start / step / end | — | "Get Started" → "Continue" / "Next" → "Done" |
| Touch gesture | "click" | "tap" |
| Text-field hint | — | "name@example.com" · "Your name" |

- Words that Apple tags as usually unnecessary in errors: "oops!", "uh-oh".
- Titles for capitalisation: title case = formal, sentence case = casual (choose per element type).
- Change log: Dec 16 2025 (language patterns clarified, possessive pronouns added) · Feb 27 2023 (new page).

## Platform considerations
- **None noted** for iOS, iPadOS, macOS, tvOS, visionOS or watchOS.
- Device differences appear inside the *Write for how people use each device* rule (small screens and big screens need brevity; TV is shared; touch says "tap", not "click").

## Visual notes (from screenshots)
- **Hero:** a yellow grid card with a rounded square and a pencil crossing its top-trailing corner, laid over construction circles and guide lines.
- **writing-01 (two Apple Watch screens, side by side):**
  - Fall Detection **(from screenshot)**: the time 10:09, a close ×, the text "It looks like you've taken a hard fall.", a wide slider-style **EMERGENCY SOS** control with a red SOS disc, and one full-width pill **I'm OK**. The screen is a dark purple-to-magenta material; text is short, centred and plain; the two actions are labelled as exact statements, with no exclamation marks and no decoration.
  - Move-streak notification **(from screenshot)**: the Activity rings, a bold title **Longest Move Streak**, a small "now", and the body "You set a personal record for your longest daily Move streak: 35 days!". Card on a soft translucent material; the title is bold, the body regular; the only exclamation mark in either image is here.
  - Takeaway: seriousness → fewer words, imperative actions, no flourish; celebration → a friendlier sentence, a number, one exclamation mark.
- **Handwashing Timer (from screenshot):** a Settings-style row: the title with a green switch on, and a two-line grey footnote below the row ("Apple Watch can detect when you're washing your hands and start a 20-second timer."). It states the **on** behaviour only; the row title is short, the explanation sits below it in secondary text.
- **Page chrome (from screenshot):** the TOC reads Writing · Getting started · Best practices · Platform considerations · Resources · Change log. The supported-platforms strip shows all six devices. The text page ends with Related links and three video cards, two of them showing presenters and the third the coloured "hello" script.
- **Text that is not in the fetch:** only the text baked into the two Watch images above and the page chrome. Every heading, bold lead-in, body sentence and link visible in screenshots 1–6 is in the fetched text.

## Web translation
Writing is platform-neutral; it applies to every string a web UI shows. The checks below are what to do in code review and when generating UI copy.

| HIG rule | Web implementation |
|---|---|
| Voice + a term list | Keep one glossary (a `strings` / i18n file, or a `terms.md`) with the product's fixed nouns and verbs. All UI text comes from it, so "Delete / Remove / Trash" are not used interchangeably. |
| Tone follows the situation | Success and progress may be warm (one exclamation at most); payment, security, data-loss and failure text is plain and factual. Don't use the same cheerful tone in an error toast as in a "Saved" toast. Match presentation too: a serious state gets a calm layout, not a confetti animation. |
| Be clear / fewer words | Trim every label and sentence until nothing can be removed (this matches `field-notes/principles.md` §16). Read the screen aloud. |
| Write for everyone | Plain words, no jargon, no gendered defaults ("Welcome back" not "Welcome back, sir"), text ready for translation: no string concatenation for sentences, no text baked into images, allow 30–40 % expansion (see `right-to-left.md`, `inclusion.md`). |
| Most important first | Put the primary message or the result first in headings, dialogs and toasts; details after. Split a screen with several ideas into steps. |
| Verb-led labels | Buttons and menu items start with a verb ("Send", "Save changes", "Add member"). No cute labels. Links describe their destination: never "Click here" / "Read more" alone. Give ambiguous links an accessible name (`aria-label`, or visually hidden text after the visible label). |
| Language patterns | Same action, same word everywhere. Enforce with the glossary and a review checklist. |
| Capitalisation | Choose sentence case or title case **per element type** and keep it. The default in this skill is **sentence case** for headings, labels and buttons (this matches the field note that bans uppercase eyebrow labels and Apple's Privacy page, which requires sentence case for purpose strings). Do not fake case with CSS `text-transform` on content that is translated; write the case in the string. |
| Multi-step flows | One start label ("Get started"), one advance label ("Continue" **or** "Next", never both in one product) and one ending label ("Done"). The final step's button says what happened or what is next. |
| Possessives and "we" | Prefer "Favorites" to "Your favorites". If "your" is used, use it everywhere. Never "we" in errors or status text: "Unable to load content." |
| Device-appropriate wording | Say **tap** for touch UIs, **click** for pointer UIs, **press** for keyboard shortcuts. Choose the verb from `(pointer: coarse)` / input type, or write neutral verbs ("Select", "Choose"). Keep phone and watch-size text short; large-screen and TV text large and brief (see `typography.md`). |
| Empty states | Say what this place is for and give **one** action that fills it (a button or link). Don't hide essential information in an empty state. |
| Errors | Put the message next to the field or the failed element (`aria-describedby`, `role="alert"` for live errors); no blame, one concrete fix; no "Oops!"; no bare "Invalid name". If the same error keeps affecting many people, change the interaction (input masks, pickers, defaults, validation as the user types). |
| Delivery method | Pick by urgency: inline text (next to the problem) → toast (non-blocking status) → dialog (must decide now) → notification/email (out of app). See also `privacy.md` for permission prompts. |
| Settings labels | Short label + a one-line description of what happens **when on**. A direct link or button (`<a href="/settings/x">`) to the setting, never "go to Settings > Privacy > …" instructions. |
| Text-field hints | Every field has a visible `<label>` (a placeholder is not a label; see `field-notes/tokens.md` § Placeholder contrast). Placeholder or helper text shows a format example or describes the content. Errors say how to fix, next to the field. |

Field-note cross-links:
- `field-notes/principles.md` §16 (Copy): "one sentence says what to do", "remove sentences that duplicate a control" and "state facts calmly" are **confirmed** by this page. The HIG adds: verb-led labels, no "we", consistent terms, and error wording rules.
- `hig/foundations/privacy.md`: the purpose-string form (sentence case, active voice, ends with a period) and the single "Continue"/"Next" button on a pre-permission screen are **consistent** with the multi-step rule here.
- `hig/foundations/inclusion.md`: address people as *you*, avoid gendered terms. This page repeats it and adds "avoid *we*". Read both when writing copy.
- `hig/foundations/branding.md`: voice and tone guide, and copy in empty states and errors, are the same topic seen from the brand side.
- `hig/foundations/accessibility.md`: descriptive link text and screen-reader behaviour are **confirmed**.
- `hig/foundations/typography.md` (CRITICAL) listed this page as "next": *labels and content hierarchy*. The link is now ✓.
- `hig/getting-started/design-principles.md`: Simplicity ("be clear and direct") and Familiarity are the principles behind these rules.

## Checklist
- [ ] A product voice and a term list exist; the same thing has the same word everywhere.
- [ ] Tone fits the situation: serious moments are plain, celebratory ones may be light; failure copy has no jokes or "oops!".
- [ ] Every string is as short as it can be and read out loud once.
- [ ] The most important information comes first on each screen; multi-idea screens are split into steps.
- [ ] Buttons and links start with a verb; no "Click here", no cute labels; link text makes sense out of context.
- [ ] One capitalisation style per element type, applied everywhere (default here: sentence case).
- [ ] Multi-step flows use one consistent set of start / advance / finish labels ("Get started" · "Continue" or "Next" · "Done").
- [ ] Possessive pronouns are minimal and consistent; the word "we" is not used, especially not in errors.
- [ ] Gesture verbs match the device (tap for touch, click for pointer); text length fits the screen (brief on small and large-distance screens).
- [ ] Empty states say what to do next and offer a control; crucial information never lives only in an empty state.
- [ ] Errors sit next to the problem, don't blame, say how to fix it; no "invalid X" and no interjections.
- [ ] Settings labels describe the "on" behaviour and link directly to the setting; text fields have labels plus format hints.
- [ ] The delivery method (inline, toast, dialog, notification) matches the message's urgency and context.

## Related
- Ingested: Inclusion (✓), Accessibility (✓), Color (✓ CRITICAL: contrast of text), Typography (✓ CRITICAL), Branding (✓), Privacy (✓: purpose strings), Design principles (✓).
- Not yet ingested: Notifications, Alerts, Action sheets, Settings, Text fields, Buttons § Content, VoiceOver, Managing notifications.
- External (not HIG pages): Apple Style Guide; Writing inclusively; Localization (Xcode).
- Videos listed: *Craft clear names for features and labels in your app* (WWDC26 290), *Make a big impact with small writing changes* (WWDC25 404), *Writing for interfaces* (WWDC22 10037).
