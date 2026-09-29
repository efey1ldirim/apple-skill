# Siri
Source: https://developer.apple.com/design/human-interface-guidelines/siri · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (page data; the page has no separate Platform considerations section) · Ingested: 2026-09-29 · Apple last updated: **June 8, 2026** ("Revised for Siri AI"; earlier rows: Jun 5 2023 removed Add to Siri guidance and added App Shortcuts references; May 2 2023 consolidated into one page). **Link-only ingestion: one DocC fetch, read in full (94 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from the hero alt text only. Not marked critical: no token file, checker or gate. The page has **no measurements**; it names **5 best practices**, **9 response-dialogue rules** and **3 editorial rules**, plus a **table of "Hey Siri" translations for 41 locale codes**.

## In one line
**Siri is a personal assistant that helps people find, know or do things across the system and apps (voice, swiping down from the Dynamic Island, the Siri app).** **On supported devices "Siri AI" runs on Apple Intelligence: an app must expose its actions (intents) and content (entities) through App Intents, ideally tied to app schemas (preset templates for domains such as email, music, photos), share what's on screen by annotating views with entities, donate entities to the on-device Spotlight index and donate actions as intents.** **Best practices: find your most popular actions and where they happen, use familiar terms, offer relevant (not all) content, never advertise, give custom responses only when built-ins don't fit.** **Custom responses: clear and descriptive dialogue ("Which soup?"), as short as possible (no humour), deliverable audibly and visually and able to stand alone as speech, inclusive (no needless pronouns), open-ended follow-up when a list is too long, device-independent, no app name, appropriate language, specific error messages.** **Editorial: say "Siri" by name (no pronouns), never impersonate Siri or use reserved phrases ("Call 911", "Hey Siri"), translate only "Hey" in "Hey Siri" (Siri is never translated).** On the web: **no Siri integration; expose actions and content as structured, discoverable features (App Shortcuts-style entries, search, structured data) and apply the dialogue rules to any voice or chat interface.**

## Rules

### Framing (intro)
- **People use Siri for what they need to find, know or do every day**; **Siri gets information and performs quick actions throughout the system and apps**, **by voice, by swiping down from the Dynamic Island, or in the Siri app.**
- **Siri AI (on supported devices) is a version of Siri powered by Apple Intelligence.** **When an app integrates its content and features with Apple Intelligence, people can use Siri's natural-language and contextual understanding** to **start the app's actions from anywhere in the system, interact with on-screen content, and reach features otherwise buried deep in the app.**
- **Examples:** **"Send a message to Marisa in AppName" from anywhere**; **with a photo on screen, "Add this photo to my Landscapes album", then "And email it to Josh" (opens a compose view with Josh as the recipient)**; **"Make this black and white" instead of hunting through menus.**

### Getting your app to work with Siri
- **The system doesn't know what an app can do or contain by default**: **the app must make features and content available to Apple Intelligence via the App Intents framework.**
- **Implementing intents lets the system expose the app's actions (intents) and content (entities) in system experiences** (**Siri, Spotlight, the Shortcuts app, other features built on Apple Intelligence**).
- **should** **To get the most out of Siri, associate features and content with app schemas**: **preset templates for functionality the system already understands** (**email, music, photos**), **so requests get built-in logic, natural conversation and deeper contextual understanding.** (Developer: "Apple Intelligence and Siri AI", "Making actions and content discoverable by Apple Intelligence".)

#### Sharing contextual information
- **should** **Tell the system what's on screen** by **annotating views and other content with app entities**, so **Siri can understand references to buttons or on-screen graphics during a conversation.**
- **should** **Donate content to the on-device Spotlight index** (**app entities**), so **it's available when someone searches in Spotlight or with Siri.**
- **should** **Donate actions as intents** (**a person's recent activity, items they showed interest in**) so **Siri can anticipate and surface future actions at appropriate times.**

### Best practices
- **should** **Identify the app's most popular actions, and when and where they occur** (**hands-free environments, a particular device**) to **prioritise which actions and content to expose as intents/entities** and to **shape the Siri experience.**
- **should** **Use familiar terms for content and actions**: **you choose the terminology for an intent or entity** (track, song or podcast); **use the language people most likely recognise.**
- **should** **Offer relevant content**: **don't tell Spotlight about everything**; **favour what's relevant to a person's context** (**recent searches, favourites or bookmarks, wishlist contents**); **email or messaging apps may reasonably expose the whole catalogue.**
- **must not** **Advertise**: **no ads, marketing or in-app-purchase pitches in content that Siri delivers.**
- **should** **Provide a custom response only when built-in responses don't meet the app's needs**: **Siri is designed to handle many natural-language requests without extra configuration.**

### Customizing your app's experience with Siri
- **For apps in common domains, app schema domains provide built-in functionality with no extra work.** **For functionality outside those domains, App Shortcuts expose custom actions to the system for Siri to use** (`components/system-experiences/app-shortcuts.md`).
- **To customise an action or content tied to a schema, define additional optional properties on the intent or entity** that **enhance Siri's response** (**e.g. a playback-control snippet Siri shows while audio plays**; `snippets.md`).
- **Note:** **responses appear in many contexts, some not visual, so optional properties you define may not always appear in a response.**

Guidelines for custom properties in schema responses:
- **should** **Write clear, descriptive dialogue**: **say what happens when Siri performs the action**; **customise default follow-up questions for clarity** ("Which soup?" beats "Which one?").
- **should** **Keep responses as succinct as possible**: **people may hear them repeatedly (follow-ups, errors)**; **use the conversation's context to drop details**; **avoid unnecessary words and humour, which irritate over time.**
- **must** **Provide responses Siri can deliver audibly and visually**, so **Siri picks the best method** (iPhone weather shows on screen; with AirPods Siri speaks it); **the voice response must stand alone and not depend on visuals for essential information.**
- **should** **Design inclusive interactions**: **avoid specific pronouns when not needed** ("Who should I send it to?" or "To who?", **not** "What's his or her name?") (`writing.md`, `inclusion.md`).
- **should** **When the full list of options is too long to read in reasonable time, ask an open-ended question to narrow it** ("What kind of shoes are you interested in?").
- **should** **Keep responses device-independent**: **requests can start on one device and take effect on another**; **if a device must be named, make it accurate.**
- **should** **Omit your app name in responses**: **the system already attributes the app verbally and visually.**
- **must** **Use appropriate language and respect parental controls**: **no offensive language in dialogue**; **families restrict explicit content by rating**; **Siri may answer aloud, and others nearby may hear it.**
- **should** **Help people understand errors and failures**: **enhance the default error descriptions to fit the situation** ("Sorry, we're out of chicken noodle soup" beats "Sorry, we can't complete your order").

### Editorial guidelines
- **must** **Refer to Siri by name**: **no pronouns (she, him, her)**; **ideally just the word "Siri"** ("After you add a shortcut to Siri, you can run the shortcut anytime by asking Siri.") (Apple trademark guidelines).
- **must not** **Impersonate Siri, reproduce Siri's functionality, or give a response that appears to come from Apple**; **the system reserves important actions and phrases** (**don't use "Call 911" or "Hey Siri"**).
- **must** **In a localised context translate only the word "Hey" in "Hey Siri"**; **"Siri" is an Apple trademark and is never translated.** **Accepted translations by locale** (grouped by phrase; locale codes as on the page):

| Phrase | Locales |
|---|---|
| **Hey Siri** | de_AT, de_CH, de_DE, en_AU, en_CA, en_GB, en_IE, en_IN, en_NZ, en_SG, en_US, en_ZA, ja_JP, tr_TR |
| **Oye Siri** | es_CL, es_ES, es_MX, es_US |
| **Dis Siri** | fr_BE, fr_CA, fr_CH, fr_FR |
| **Ehi Siri** | it_CH, it_IT |
| **Hej Siri** | da_DK, sv_SE |
| **Hei Siri** | fi_FI, nb_NO, no_NO |
| **Hé Siri / Hé, Siri** | nl_NL (Hé Siri), nl_BE (Hé, Siri) |
| **Arabic: يا Siri** | ar_AE, ar_SA |
| **Korean: Siri야** | ko_KR |
| **Malay: Hai Siri** | ms_MY |
| **Portuguese (Brazil): E aí Siri** | pt_BR |
| **Russian: привет Siri** | ru_RU |
| **Thai: หวัดดี Siri** | th_TH |
| **Chinese: 嘿Siri (zh_CN), 喂 Siri (zh_HK), 嘿 Siri (zh_TW)** | zh_CN, zh_HK, zh_TW |

### Platform considerations
- **The page has no Platform considerations section**; **it applies across iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (page data).

## Specs & values
| Item | Value |
|---|---|
| Ways to reach Siri | voice · swipe down from the Dynamic Island · Siri app |
| Integration | App Intents (actions = intents, content = entities) → Siri, Spotlight, Shortcuts, Apple Intelligence features |
| Schemas | preset templates for common domains (email, music, photos…) |
| Context signals | on-screen entity annotations · Spotlight entity donation · action donation |
| Custom actions outside schemas | App Shortcuts |
| Response rules | clear · succinct · audible and visual · inclusive · open-ended for long lists · device-independent · no app name · appropriate language · specific errors |
| Advertising | not allowed in Siri-delivered content |
| Name | "Siri" (never translated, no pronouns); only "Hey" is translated in "Hey Siri"; don't use "Hey Siri" or "Call 911" |
| Locale table | 41 locale codes (grouped above) |
| Developer docs | App Intents · App schema domains · Apple Intelligence and Siri AI |
| Videos (link only, not watched) | Build intelligent Siri experiences with App Schemas (WWDC26 240) · Discover new capabilities in the App Intents framework (WWDC26 345) · Explore advanced App Intents features for Siri and Apple Intelligence (WWDC26 343) |
| Apple's Related list | App Shortcuts · Snippets |
| Change log | Jun 8 2026 revised for Siri AI; Jun 5 2023 removed Add to Siri; May 2 2023 consolidated |

## Visual notes (link-only: from alt text)
- **Hero:** a sketch of **the Siri icon** over grid lines, **tinted blue** (alt).
- **The page has no other images**: **no screenshots, comparisons or diagrams.**
- **Mismatches / notes:**
  1. **"Siri" vs "Siri AI"**: **the page uses both**; **Siri AI is the Apple-Intelligence-powered version on supported devices**, **and the page doesn't list which devices or regions.**
  2. **"Omit your app name from responses"** (this page) **vs App Shortcuts phrases, which must include the app name** (`app-shortcuts.md`): **they concern different things** (**spoken responses vs the phrases people say to invoke a shortcut**).
  3. **"Don't advertise" applies to content Siri delivers**; **it doesn't say what counts as marketing** (a "you might also like" hint), **so use judgement.**
  4. **The page doesn't define response length limits**; **"as succinct as possible" is the only guidance.**
  5. **The locale table is complete only for the codes listed**; **other locales aren't covered.**
  6. **Older Siri guidance ("Add to Siri", custom intent UI) was removed in 2023**; **any older notes referring to it are out of date.**
  7. **No web equivalent exists**: **App Intents, schemas and Spotlight donation are native.**
- **Catalog:** the script found **0 comparisons** (the only image is the hero). Catalog stays **276**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
**Siri and App Intents are native to Apple platforms; the web can't register intents or entities with Apple Intelligence.** **The design principles carry over to (a) making a web app's actions and content discoverable and (b) any voice or chat assistant UI.** **Web-side analogues are background knowledge, not from the page**: **PWA manifest `shortcuts`, deep links, `schema.org` structured data, site search, Web Share Target, the Media Session API (for playback controls), the Web Speech API (support varies; verify), and `SpeechSynthesis` for spoken output.**

| HIG rule | Web implementation |
|---|---|
| Expose actions and content to the system | **Document and register key tasks as PWA `shortcuts` and deep links**; **structured data (`schema.org` Action/Product/Recipe…) and a sitemap so search and assistants can find content**; **native App Intents can't be registered from the web** (`app-shortcuts.md`). |
| Identify the most popular actions | **Rank tasks by analytics and context** (**hands-free, mobile, in-car**) **and expose those first.** |
| Familiar terms for content and actions | **Use the words people say and search for** ("song", "podcast") **consistently in labels, headings, search synonyms and voice prompts** (`writing.md`). |
| Offer relevant content only | **Personal context first** (recent, favourites, wishlist); **don't publish or index everything**; **respect privacy and consent** (`privacy.md`). |
| Don't advertise in assistant-delivered content | **No promotional copy in voice/assistant answers or notification-style responses.** |
| Custom responses only when built-ins don't fit | **Prefer the platform's standard voice/UI feedback**; **write custom copy only where the default is unclear.** |
| Clear, succinct, no humour | **Voice/chat replies: one short sentence, plain words, specific follow-up questions ("Which soup?")**; **no jokes or filler that grate on repetition.** |
| Audible and visual; voice stands alone | **Every spoken reply has a visible equivalent (and vice versa)**; **the spoken version carries all essential info**; **`aria-live` for visible updates, `SpeechSynthesis` with a mute option**; **captions for audio.** |
| Inclusive wording | **Avoid gendered pronouns in prompts** ("Who should I send it to?"); `inclusion.md`. |
| Long list → open-ended question | **In voice UI, don't read long lists**: **ask a narrowing question**; **in visual UI, show the list.** |
| Device-independent responses | **Say what happened, not which device did it** (unless accurate and helpful). |
| Omit the app name in responses | **Don't repeat your product name in every assistant reply** (the UI already shows it). |
| Appropriate language; parental controls | **Content filters and age-appropriate wording**; **assume others may hear the reply aloud** (**offer a "show on screen only" mode**). |
| Specific errors | **"Sorry, we're out of chicken noodle soup." over "We can't complete your order."**; **say what failed and what to do next** (`feedback.md`, `field-notes/principles.md` §16). |
| Refer to Siri by name; no impersonation; reserved phrases; "Hey Siri" translation | **On pages that mention Siri: "Siri", never a pronoun**; **don't imitate Siri's voice, look or behaviour, or claim Apple provided a response**; **if you localise "Hey Siri", translate only "Hey" using the table above.** |
| Snippets and rich responses | **A compact result card with actions (playback, confirm/cancel)** in chat/voice UIs (`snippets.md`). |
| Native-only | **`AppIntent`, `AppEntity`, app schema domains, Spotlight donation, on-screen entity annotations, App Shortcuts, Siri AI** are native; **web equivalents are structured data, shortcuts and your own assistant UI.** |

Field-note cross-links:
- `field-notes/*`: **no voice-assistant recipe**; nothing conflicts. **`field-notes/principles.md` §16** (calm, factual copy, remove duplicates) **fits** the succinct-dialogue and specific-error rules.
- `hig/components/system-experiences/app-shortcuts.md` (✓) and `snippets.md` (✓): **Apple's Related pages** (their "Siri not yet ingested" lines are now updated); `hig/foundations/writing.md` (✓) and `inclusion.md` (✓): **wording and pronouns**; `hig/foundations/accessibility.md` (✓): **voice and non-visual use**; `hig/foundations/privacy.md` (✓): **what to donate and index**; `hig/patterns/searching.md` (✓): **Spotlight and in-app search**; `hig/patterns/feedback.md` (✓ CRITICAL): **errors and confirmations**; `hig/technologies/generative-ai.md` (✓) and `machine-learning.md` (✓): **AI features, expectations, feedback**; `hig/technologies/homekit.md` (✓): **voice commands for accessories**; `hig/technologies/carplay.md` (✓): **hands-free contexts**; `hig/inputs/remotes.md` (✓): **Siri Remote on tvOS**; `hig/getting-started/designing-for-watchos.md`/`ios.md`/`ipados.md`/`macos.md`/`tvos.md`/`visionos.md` (✓): **platform overviews mentioning Siri.**
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **The app's most popular actions and their contexts are identified and exposed** (**intents/entities natively; shortcuts, deep links and structured data on the web**).
- [ ] **Terms for actions and content are the words people use.**
- [ ] **Only relevant content is exposed** (**personal context first**).
- [ ] **No advertising or purchase pitches appear in assistant-delivered content.**
- [ ] **Custom responses exist only where defaults fall short.**
- [ ] **Responses are clear, short, humour-free, inclusive, device-independent, without the app name, and stand alone when spoken and shown.**
- [ ] **Long option lists become an open-ended narrowing question.**
- [ ] **Error messages say what failed in specific terms.**
- [ ] **Siri is named "Siri", never impersonated, with reserved phrases avoided and only "Hey" translated in "Hey Siri".**

## Related
- Ingested: App Shortcuts (✓), Snippets (✓), Writing (✓), Inclusion (✓), Accessibility (✓), Privacy (✓), Searching (✓), Feedback (✓ CRITICAL), Generative AI (✓), Machine learning (✓), HomeKit (✓), CarPlay (✓), Remotes (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: App Intents · App schema domains · Apple Intelligence and Siri AI.
- Videos: Build intelligent Siri experiences with App Schemas (WWDC26 240) · Discover new capabilities in the App Intents framework (WWDC26 345) · Explore advanced App Intents features for Siri and Apple Intelligence (WWDC26 343).
