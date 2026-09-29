# Machine learning
Source: https://developer.apple.com/design/human-interface-guidelines/machine-learning · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (page data; the platform text: "No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS") · Ingested: 2026-09-29 · Apple last updated: **June 8, 2026** ("minor updates for clarity"; earlier rows: Oct 24 2023 art added to Corrections; May 2 2023 guidance consolidated into one page). **Link-only ingestion: one DocC fetch, read in full (207 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts only. Not marked critical: no token file, checker or gate. The page has **no measurements**; it names **5 role axes** (critical/complementary, private/public, proactive/reactive, visible/invisible, dynamic/static) and **8 patterns** (explicit feedback, implicit feedback, calibration, mistakes, corrections, multiple options, confidence, attribution) plus **limitations**.

## In one line
**Design a machine-learning feature by (1) deciding its role on five axes, then (2) applying the patterns that fit: ask for feedback only when needed and never force it (explicit), learn quietly from behaviour without narrowing people's horizons (implicit), calibrate once and briefly, plan for mistakes with easy corrections, offer a few diverse options with the likeliest first, translate confidence into plain concepts or actions (and hide low-confidence results in proactive features), explain the basis of a result factually (attribution), and tell people what the feature can't do.** On the web: **recommendation, search, autocomplete and smart-crop features follow the same patterns; keep the feedback controls, undo/correct paths, reason labels and limits in the UI, and keep personal data under the user's control.**

## Rules

### Framing (intro)
- **Machine learning lets apps and games learn from data and usage patterns** to deliver **image recognition, recommendations, and richer, more personal experiences**. **For guidance on model-driven intelligent experiences see Generative AI** (`technologies/generative-ai.md`).

### Planning your design
- **should** **Treat the models as part of the design.** **Adjusting model behaviour takes a long time**, so **be ready to change the data and metrics if the app experience must change** (model design: Create ML).
- **should** **Design the interpretation, not fixed scenarios.** The app **reacts to changing data**, so **you can't script every reaction**; **you teach the app how to read data and respond**.
- **should** **Start with the feature's role** (below), then **choose input and output patterns** (feedback, calibration, corrections, options, confidence, attribution, limitations).

### The role of machine learning in your app
| Axis | Meaning | Design consequence |
|---|---|---|
| **Critical vs complementary** | Complementary if the app works without the feature (keyboard suggestions); critical if not (Face ID recognition) | **The more central the feature, the higher the expected accuracy**; secondary features get more forgiveness |
| **Private vs public data** | Sensitive data raises the cost of wrong results (a health app misreading data causes anxiety; a wrong music suggestion is minor) | **Sensitive features must prioritise accuracy and reliability**; **always protect privacy** |
| **Proactive vs reactive** | Proactive gives results unasked (Siri Suggestions); reactive answers a request or action (QuickType) | **People tolerate less error in proactive results**; consider **extra data** to avoid intrusive or irrelevant ones |
| **Visible vs invisible** | Visible: people see and choose (Image Playground); invisible: results not obvious (News topic suggestions) | **Visible features build an opinion of reliability through choices**; **invisible ones get little feedback** |
| **Dynamic vs static** | Dynamic improves as people use it; static improves offline with app updates | **Dynamic features usually need calibration and feedback (implicit or explicit)**; static ones may not |

### Explicit feedback
Information people give **in response to a specific request from the app** (unlike implicit feedback). **Favouriting and social reactions look explicit but are implicit**: people use them for their own goals.
- **should** **Request explicit feedback only when necessary**; it costs effort, so **prefer implicit feedback**.
- **must** **Keep it voluntary.** **Convey that it helps, without making it feel mandatory.**
- **should** **Use simple, direct wording that states the consequence.** **Avoid vague terms such as "dislike"** (unclear result, hard to translate). Examples: **"Suggest less pop music", "Suggest more thrillers", "Mute politics for a week".**
- **may** **Add an icon to an option's text**; **never an icon alone** (it can't convey scope or consequence).
- **should** **Consider several options, progressively more specific**, to give control and let people remove unwanted suggestions.
- **should** **Act immediately and persist the change**: **hide the rejected content everywhere in the app**; **showing that the app remembers builds trust.**
- **may** **Use feedback to tune when and where results appear** (a liked result may not fit some times or contexts).
- Illustration (alt): **a menu above a screen with options including "Love" and "Suggest Less Like This".**

### Implicit feedback
Information that **arises as people use features**; **not required**, but improves the experience **without extra work**.
- **must** **Secure people's information** (implicit signals can be sensitive).
- **should** **Help people control their information**: **say how the app gets and shares it and let people restrict the flow**; **cross-app effects can surprise people and cost trust.**
- **should** **Don't let implicit feedback narrow exploration**: **it reinforces existing behaviour, good short-term, worse long-term.**
- **should** **Use several signals** (viewing, sharing and adding a photo to an album **doesn't necessarily mean liking it**).
- **should** **Consider withholding private or sensitive suggestions** (shared accounts, communal devices).
- **should** **Prioritise recent feedback**; **fall back to history when recent data is missing** (Face ID favours recent face input).
- **should** **Update at a cadence matching the person's mental model**: **typing suggestions update immediately; song recommendations shouldn't churn continuously.**
- **should** **Expect signals to change with UI changes** (**moving a button changes usage**, not necessarily value).
- **should** **Beware of confirmation bias**: **people can only act on what they see**; **don't rely on implicit feedback alone.**
- Illustration (alt): **a Watch Workout screen "It looks like you're working out" with "Record Outdoor Run" and "Record Indoor Run" buttons.**

### Calibration
People **provide information the feature needs to work** (Face ID scan).
- **should** **Use calibration only if the feature can't work without it**; otherwise **gather info via implicit or explicit feedback.**
- **must** **Secure the information**; **explain why you need it, emphasising what the feature does, not how it works.**
- **should** **Collect the minimum**; **ask once, early** (**exception: calibrating to an object, e.g. each baseball field**).
- **should** **Make it quick and easy**: **prioritise a few key inputs and infer the rest**; **avoid asking for things people must look up**; **avoid difficult actions.**
- **should** **Give an explicit goal and show progress** (Face ID's tick marks change as the scan progresses).
- **must** **Help immediately if progress stalls**, with **actionable advice**; **never imply that something's wrong or that people are at fault**; **never leave people without a next step.**
- **should** **Confirm success and offer a clear path into the feature.**
- **must** **Let people cancel at any time without judgement**; **no message about the cancelled attempt** (they can try again next time).
- **should** **Let people update or remove calibration data**, **also outside the calibration flow.**
- Illustration (alt): **the Face ID setup screen: a face in a circular frame with tick marks around it, instructions below and a "Get Started" button.**

### Mistakes
Mistakes are inevitable and **damage trust**. **Anticipate them, help people handle them, and learn from them when that improves the app** (learning can also cause unpredictability).
- Patterns that help: **limitations** (set expectations), **corrections** (succeed despite a wrong result), **attribution** (show the source), **confidence** (gauge quality), **feedback** (learn about unseen mistakes).
- **should** **Match the remedy to the consequence**: **wrong keyboard suggestions annoy; a route that misses a flight is serious.**
- **should** **Make frequent or predictable mistakes easy to correct.**
- **should** **Keep the feature current** with people's changing tastes and domain trends, **so people do no work to benefit.**
- **should** **Fix mistakes without complicating the UI where possible** (**corrections and limitations integrate well; attributions are harder**): **a wrong attribution magnifies the original mistake.**
- **must** **Be especially careful with proactive features**: **people didn't ask, so they are less patient and feel less in control.**
- **should** **Watch cross-effects**: **improving one area (dogs) can worsen another (cats).**

### Corrections
How people **fix the app's mistakes** (a photo app's auto-crop is adjusted).
- **should** **Offer familiar, easy controls**: **show the steps the app took** (Photos highlights the crop controls it used, so people can refine or undo).
- **should** **Deliver immediate value and persist the correction.**
- **should** **Let people correct their corrections** (immediately, persistently).
- **should** **Balance the feature's benefit against the effort to correct it**: **if doing it by hand is easier, people stop using the feature.**
- **must not** **Rely on corrections to cover low-quality results**: **trust and value erode.**
- **should** **Learn from corrections only if it improves quality** (a correction is implicit feedback).
- **should** **Prefer guided corrections** (**suggested alternatives, e.g. a list of alternative text completions**) **over freeform** (**Photos' free crop adjustment**), or **combine both**.
- Illustration (alt): **Camera-app photo of a flower in editing mode with crop and straighten grab bars and a tilt wheel showing a small positive tilt.**

### Multiple options
Present **one result or several to choose from**; **several give control, bridge prediction and desire, and set realistic expectations.** Contexts: **suggested options** (proactive, e.g. For You), **requested options** (reactive, e.g. QuickType), **corrections** (e.g. Auto-Crop).
- **should** **Prefer diverse options**, balancing accuracy and diversity (**Maps offers routes: no tolls, scenic, highways**).
- **should** **Avoid too many options** (**cognitive load**); **list them on one screen, no scrolling.**
- **should** **List the most likely first** (rank by confidence, context such as time or location) **and consider pre-selecting it**.
- **should** **Make options easy to tell apart**: **a short description highlighting the differences**; **for long lists, group by category.**
- **should** **Learn from selections** (implicit feedback) **when it doesn't hurt the experience**; **continuing to show wrong results lowers trust.**
- Illustration (alt): **the Maps app on Mac showing three routes between San Francisco and Apple Park.**

### Confidence
The **measure of certainty** for a result; **not every model produces one, so consider computing it** if it improves the experience.
- **must** **Verify that confidence corresponds to result quality** (compare thresholds or app versions); **if unsure, don't show confidence.**
- **should** **Know what values mean before presenting them**: **low-quality results in a prominent place erode trust** (more forgiving for critical/complementary features **with attribution**).
- **should** **Translate confidence into familiar concepts**: **"97% match" is weak; "Because you listen to pop music" is actionable.**
- **may** **Where attribution doesn't help, rank or order results to imply confidence**; **if you must show it, use semantic categories** ("high chance" / "low chance").
- **should** **Show numbers when people expect them** (weather, sports statistics, polls) **as an interval or percentage.**
- **should** **Prefer actionable suggestions**: **"This is a good time to buy" / "Consider waiting" beats percentages** for a price-prediction feature.
- **may** **Change the presentation by threshold**: **Photos simply shows a person's photos at high confidence and asks to confirm at lower confidence.**
- **should** **Avoid showing low-confidence results when confidence tracks quality**, **especially in proactive features**: **set a threshold below which nothing is offered.**
- Illustration (alt): **a flight-tracker screen (SFO to LAX, June 3–7) with the current lowest price and a recommendation to watch for four weeks; Track / View Flights buttons, a search field, tabs Search / Track / Flights.**

### Attribution
**The basis or rationale for a result, without explaining how the model works** ("Because you've read mysteries").
- Goals: **encourage changing behaviour, reduce the impact of mistakes, build a mental model, promote trust.**
- **should** **Use attributions to distinguish among options** ("New books by authors you've read").
- **should** **Be neither too specific nor too general**: **too specific feels like surveillance or extra work; too general feels impersonal.**
- **must** **Keep attributions factual and objective**: **don't imply understanding or judgement of emotions, preferences or beliefs** ("Because you've read nonfiction", **not** "Because you love nonfiction").
- **should** **Avoid technical or statistical jargon**, **except where the result itself is statistical** (weather, sports, polls, science).
- Illustration (alt): **a "For You" area with a row of two video icons and a third partly visible at the edge, hinting at more.**

### Limitations
Every feature has **things it can't do well and things it can't do at all**; **a mismatch with expectations reads as a defect.** **Identify the scenarios where limits hurt and design help.**
- **should** **Set realistic expectations up front**: **serious but rare limits are disclosed before use** (marketing or in context); **minor ones through attribution**.
- **should** **Show how to get the best results**: **placeholder text (Photos search: "Photos, People, Places…") and a note on how it scans the library**; **live feedback while using it (Memoji: adjust lighting, move closer)**; **suggest alternatives rather than empty results.**
- **should** **Explain why results are poor** ("Memoji doesn't work well in the dark").
- **may** **Tell people when a limitation is resolved** so they **return to interactions they had avoided**.
- Illustration (alt): **the Memoji recording sheet with a "Low light" message.**

### Platform considerations
- **No additional considerations** for iOS, iPadOS, macOS, tvOS, visionOS, watchOS.

## Specs & values
The page has **no numbers, sizes or timings**. Its concrete content:

| Item | Value |
|---|---|
| Role axes | critical/complementary · private/public · proactive/reactive · visible/invisible · dynamic/static |
| Feedback | explicit (requested, voluntary) vs implicit (from behaviour); favouriting and social reactions count as implicit |
| Calibration | only when required; once; early; minimal; goal + progress; help when stalled; confirm; cancel anytime; editable later |
| Mistake tools | limitations · corrections · attribution · confidence · feedback |
| Options | diverse, few, one screen, likeliest first (optionally preselected) |
| Confidence | verify it matches quality; translate to concepts, order, categories or actions; threshold for proactive features |
| Attribution | factual, mid-level specificity, no emotional claims, no jargon (except for statistical content) |
| Explicit-feedback wording examples | "Suggest less pop music" · "Suggest more thrillers" · "Mute politics for a week" |
| Attribution wording examples | "Because you've read mysteries" · "Because you listen to pop music" |
| Developer docs | Apple Intelligence and machine learning (overview) · Create ML · Core ML |
| Videos (link only, not watched) | Explore prompt design & safety for on-device foundation models (WWDC25 248) · Discover machine learning & AI frameworks on Apple platforms (WWDC25 360) |
| Apple's Related list | Generative AI · Privacy |
| Change log | Jun 8 2026 minor updates; Oct 24 2023 Corrections art; May 2 2023 guidance consolidated |

## Visual notes (link-only: from alt texts)
- **Hero:** not shown in the text output (the page's images are the pattern illustrations); **no catalog entries were found.**
- **Pattern illustrations (light and dark for most):** **explicit-feedback menu (a "Love" option and a "Suggest Less Like This" option)**, **Watch Workout suggestion buttons**, **Face ID setup with tick marks**, **Camera crop and straighten with a tilt wheel**, **Maps with three routes**, **flight tracker with track/view buttons and price recommendation**, **"For You" row with a peeking third item**, **Memoji "Low light" message.**
- **Mismatches / notes:**
  1. **The page is behavioural guidance**: **no sizes, layouts, timings or copy limits.**
  2. **"Consider" and "prefer" dominate**; **the firm obligations are securing information (twice), voluntary explicit feedback, never blaming people in calibration, cancellable calibration, and not covering weak results with corrections.**
  3. **Some patterns overlap** (**corrections are also multiple options and implicit feedback**), **and the page says so** rather than defining strict categories.
  4. **The page says favouriting and social reactions are implicit**; **product UIs often label them as feedback**, so **decide per feature how such taps are used.**
  5. **Confidence: "verify it correlates with quality"** has **no method** given beyond comparing thresholds or versions.
  6. **No guidance on model bias, fairness or data provenance here**; **that sits in Inclusion and in Generative AI.**
- **Catalog:** the script found **0 comparisons** (the pattern illustrations are single images, not before/after pairs). Catalog stays **264**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
**Core ML, Create ML and on-device models are native**, but **the design patterns apply to any learning or ranking feature on the web** (recommendations, search suggestions, autocomplete, smart crops, spam or moderation flags, auto-tagging). Statements about libraries and privacy law are background knowledge, not from the page.

| HIG rule | Web implementation |
|---|---|
| Role of ML (critical vs complementary, proactive vs reactive…) | **Decide the role first and write it in the feature brief**; **complementary features degrade gracefully** (**the page works without them**); **proactive suggestions get a stricter quality bar and an easy dismiss** (`feedback.md`). |
| Explicit feedback: voluntary, direct wording, immediate | **A "⋯" menu on each recommendation** with consequence-worded items ("Show fewer thrillers", "Hide this for a week", **not "Dislike"**), **text plus optional Lucide icon, never icon-only**; **hide the item at once** (optimistic UI), **persist server-side**, **offer "Undo" toast**; **never block flow on a survey** (`menus.md`, `undo-and-redo.md`). |
| Implicit feedback: secure, controllable, recent, multi-signal | **Privacy-first telemetry**: **a settings page listing what signals are used** with **on/off and "clear history"**; **combine signals (dwell + share + save), weight recent events, avoid feedback loops (inject exploration/diversity)**; **exclude private or sensitive topics on shared devices** (`privacy.md`, `settings.md`). |
| Calibration: once, short, progress, cancel, editable | **A short onboarding step (≤ 3 questions, CONV)** **with "Skip"/"Cancel" and a progress indicator**; **explain the benefit**; **stalled step: specific help ("Move closer to the light"), no blame**; **finish with a clear "Start" action**; **preferences editable in Settings** (`onboarding.md`, `progress-indicators.md`). |
| Mistakes: match remedy to consequence; proactive care | **High-stakes results (health, money, travel) get confirmation, sources and a human route**; **low-stakes ones get quick "not helpful" controls**; **log corrections and complaints for review.** |
| Corrections: familiar controls, immediate, persistent, guided vs freeform | **Auto-crop → the normal crop tool preloaded with the suggestion**; **auto-tags → editable chips**; **autocomplete → a list of alternatives (guided)**; **persist corrections and don't re-apply the rejected suggestion**; **allow re-correction** (`token-fields.md`, `text-fields.md`). |
| Multiple options: diverse, few, likeliest first | **3–5 options (CONV) in one view**, **the likeliest first (preselected if it helps)**, **each with a short distinguishing description** (e.g. route: "Fastest", "No tolls", "Scenic"); **group long lists by category** (`lists-and-tables.md`, `collections.md`). |
| Confidence: verify; concepts, order, categories, actions | **Don't show raw percentages**; **use ranking, categories ("Likely", "Possible") or actions ("Good time to buy")**; **threshold-hide low-confidence proactive suggestions**; **numbers only for statistical content, with an interval**; **verify calibration offline first.** |
| Attribution: factual, mid-specific, no jargon | **A one-line reason under each result** ("Because you read mysteries"), **with no emotional claims ("love") and no technical terms**; **make it dismissible; also link to "Why am I seeing this?" with controls**; **`aria-describedby` for the reason text.** |
| Limitations: expectations, best results, explanations, resolved | **Placeholder text and an inline "how it works/limits" note** (**e.g. search hints**); **live hints ("Low light")**; **an explanation when results are poor; a "What's new" note when a limitation is lifted** (`offering-help.md`). |
| Feedback wording/consistency | **Sentence-style consequence wording and translatable strings** (`writing.md`); **capitalisation follows Apple's conventions in this skill.** |
| Accessibility | **Feedback menus are keyboard reachable** (`role="menu"` or a disclosure), **status messages via `aria-live="polite"`**, **don't rely on colour or icons alone** (`accessibility.md`). |
| Native-only | **Core ML, Create ML, on-device models, Face ID calibration flows and Apple's suggestion systems** are native; **the web uses server models, WebGPU/ONNX/TF.js if needed** (verify support). |

Field-note cross-links:
- `field-notes/*`: **no ML-feature recipe**; nothing conflicts. **`field-notes/principles.md` §16** (copy states facts calmly) **fits** the attribution and limitation wording rules.
- `hig/technologies/generative-ai.md` (✓): **Apple's Related page; its "limitations", "multiple options" and "feedback" guidance link back to this page's sections**; `hig/foundations/privacy.md` (✓): **Apple's Related page; minimum data, control, purpose text**; `hig/foundations/inclusion.md` (✓) and `hig/foundations/accessibility.md` (✓): **bias and diverse testing**; `hig/patterns/feedback.md` (✓ CRITICAL): **status and error messaging**; `hig/patterns/undo-and-redo.md` (✓): **undoable corrections**; `hig/patterns/onboarding.md` (✓) and `hig/patterns/settings.md` (✓): **calibration and data controls**; `hig/patterns/offering-help.md` (✓): **limitation hints**; `hig/patterns/searching.md` (✓): **suggestions and query hints**; `hig/components/menus/menus.md` (✓): **feedback menus**; `hig/components/layout/collections.md` (✓): **option grids**; `hig/technologies/healthkit.md` (✓) and `carekit.md` (✓): **sensitive-data features where accuracy matters**.
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **The feature's role (critical/complementary, private/public, proactive/reactive, visible/invisible, dynamic/static) is decided and drives the quality bar.**
- [ ] **Explicit feedback is voluntary, consequence-worded, with text (not icon-only), and applies immediately and persistently.**
- [ ] **Implicit signals are secured, user-controllable, multi-signal, recency-weighted, and don't shrink exploration.**
- [ ] **Calibration (if any) happens once, briefly, with a goal and progress, help when stalled, confirmation, cancel, and later editing.**
- [ ] **Mistakes have remedies proportional to their cost; proactive features are held to a higher bar.**
- [ ] **Corrections use familiar controls, take effect immediately, persist, and never replace quality.**
- [ ] **Options are few, diverse, on one screen, with the likeliest first and clear differences.**
- [ ] **Confidence is verified, shown as concepts, ranking, categories or actions (no bare percentages), and low-confidence proactive results are suppressed.**
- [ ] **Attributions are factual, mid-specific, jargon-free and free of emotional claims.**
- [ ] **Limitations are explained before, during and after use.**

## Related
- Ingested: Generative AI (✓), Privacy (✓), Inclusion (✓), Accessibility (✓), Feedback (✓ CRITICAL), Undo and redo (✓), Onboarding (✓), Settings (✓), Offering help (✓), Searching (✓), Menus (✓), Collections (✓), HealthKit (✓), CareKit (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: Apple Intelligence and machine learning · Create ML · Core ML.
- Videos: Explore prompt design & safety for on-device foundation models (WWDC25 248); Discover machine learning & AI frameworks on Apple platforms (WWDC25 360).
