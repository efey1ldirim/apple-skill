# Generative AI
Source: https://developer.apple.com/design/human-interface-guidelines/generative-ai · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (page data; the platform text: "No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS") · Ingested: 2026-09-29 · Apple last updated: **June 8, 2026** (added guidance for **letting people refine results and giving feedback during content generation**, and updated **choosing a model type**; the only other row: **June 9, 2025**, new page). **Link-only ingestion: one DocC fetch, read in full (76 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from the alt text only. Not marked critical: no token file, checker or gate. The page has **no numbers or measurements**; it names **7 groups of guidance** (best practices, transparency, privacy, models and datasets, inputs, outputs, continuous improvement) and examples from **Genmoji, Apple Intelligence summaries, Image Playground and the Foundation Models framework**.

## In one line
**Generative AI** uses machine-learning models to **create and transform text, images and other content** (edit text, invent stories and images, talk to AI-driven game characters). **Design responsibly, keep people in control, be inclusive, use it only where it clearly helps, and keep the experience good when AI is unavailable or declined.** **Be transparent (say where AI is used, never pass AI off as human, set expectations about what it can and can't do, offer example prompts), protect privacy (choose on-device vs server models deliberately, minimise and disclose what leaves the device, ask permission, offer opt-out, be explicit about training), evaluate models and datasets, guide inputs, warn about and limit hallucinations, and ask before irreversible or problematic actions.** **Outputs:** make results easy to **refine, undo, retry or adjust** and **acknowledge that a correction took effect**, coach people when a request is blocked, test for misuse, avoid copying copyrighted work, **design for latency with specific progress messages**, and consider **alternate versions**. **Improve continuously:** plan model updates, **let people give voluntary, unobtrusive feedback (👍/👎, optional detail)**, keep the model swappable. On the web: **label AI content, streaming and cancel, regenerate/undo/edit controls, feedback buttons, consent and data-use disclosure, non-AI fallback, prompt suggestions, safety and copyright measures.**

## Rules

### Framing (intro)
- Generative AI **uses machine-learning models to create and transform text, images and other content** (→ Machine learning). **Use it for novel, delightful features that help people express themselves, communicate effectively and finish tasks more easily**: **editing text**, **imaginative stories and images**, or **interacting with a game character that speaks AI-generated dialog**.

### Best practices
- **should** **Design your experience responsibly.** **Responsible AI** = **intentional design and development that considers the direct and indirect impacts on people, systems and society.** With generative AI **it's easy to prototype fast but hard to make a robust experience for real-world situations**: **small input changes, or even the same input repeated, can produce very different outcomes**, and **you can't always anticipate requests or responses**. **Orient the design process around AI experiences that are inclusive, made with care and privacy-protecting.**
- **should** **Keep people in control.** **Respect agency**: **people stay in charge of decisions and the experience**; **honour requests when in scope and the expected output is clear**; **handle sensitive content carefully**; **let people dismiss unwanted content and revert or retry transformations or other actions**; **clearly identify when and where AI is used.**
- **should** **Ensure an inclusive experience.** **Models learn from data and favour the most common information**, which can cause **harmful biases and stereotypes**. Consider **how assumptions and personal attributes affect the feature**: e.g. **when generating images or descriptions of people, ask for the information the feature needs rather than solely inferring personal or cultural traits**; **seek clarity before assumptions that lead to stereotypes (gender identity, relationship types)**; **test across a diverse set of people** (→ Inclusion, Accessibility).
- **should** **Design engaging, useful generative features.** **It's not the right solution everywhere**: **offer generative features where they give clear, specific value** (**time savings, better communication, enhanced creativity**).
- **should** **Ensure a great experience when generative features aren't available or people opt out.** Sometimes **AI is essential** (no reasonable substitute); sometimes it's **complementary**. Examples: **Genmoji** (people can still use regular emoji); **Apple Intelligence notification summaries** (people can still read notifications). **When possible, consider a non-AI fallback.**

### Transparency
- **must** **Communicate where the app uses AI.** It **sets expectations** and lets people **knowingly choose an AI-powered feature**. **Never trick someone into thinking they interact with or see human-authored content when it's AI.** **Align disclosure with regulations in the regions where you offer the app.**
- **should** **Set clear expectations about what the feature can and can't do**, so people **form a mental model**: **a brief tutorial when introducing it**; for **open-ended features (a search bar, a generation prompt) offer curated suggestions** to get started; if there are **known limitations**, **tell people up front, show how to get good results and explain why inferior results occur** (→ Machine learning › Limitations).

### Privacy
- **should** **Choose a model type that fits the feature and protects privacy.** **On-device models** **keep information on the device, respond quickly and work offline.** **Server-based models** are worth considering **when the feature needs more processing power or a larger context size**. **Always weigh privacy with capability and performance.** For **server-based processing**: **process as much locally as possible, minimise what is shared, tell people their information may be sent to a server, show what is shared, and explain what may be stored off-device or used for training.**
- **must** **Ask permission before using personal information and usage data.** Interactions may involve **personal details, messages, photos and feature-usage information**. **After permission, use the minimum data and always offer a clear opt-out.** **For model improvement or storage of sensitive data, get explicit permission and handle it carefully.** **If you share data with third parties, understand their privacy approach.** **Model outputs can inadvertently contain sensitive information.** **Apps for kids have stricter rules and laws.** (→ Privacy › Requesting permission.)
- **must** **Clearly disclose how the app and model use and store personal information.** People **share more when they understand the use**; **explain the benefits concisely, specifically and clearly** when asking, and **say whether the model uses personal information for training and improvement.**

### Models and datasets
- **should** **Evaluate model capabilities thoughtfully.** **Some models have general knowledge; others are trained for specific tasks.** **Get hands-on with the available models and data as early as possible.** **Some model types may be unavailable in certain situations (device compatibility, network access, battery level)**; e.g. the **Foundation Models framework requires a compatible device with Apple Intelligence turned on**.
- **should** **Be intentional when choosing or creating a dataset.** Data **strongly shapes behaviour**, whether training from scratch or customising: **choose datasets with diverse subject-matter representations**; **know where the data comes from and how it was gathered**; **have licences for all data you don't own**; **offer choices when using people's data**; **real-world data is imperfect, so allow time for testing and evaluation to mitigate bias and misinformation the model may learn and repeat**.

### Inputs
- **should** **Guide people on how to use the feature**: **steer and educate toward good results**, e.g. **diverse predefined example inputs that hint at what's possible**.
- **should** **Raise awareness of hallucinations and minimise them.** A model unsure how to respond **may produce plausible but invented content**, **presented convincingly as fact** (e.g. **wrong dates or details about people**). **Clearly communicate that AI-generated content may contain errors.** **Reduce chance and impact by carefully scoping what you ask the model to generate**; **avoid requesting factual information unless the model has verified, current information for the task**; **avoid AI-generated content where a hallucination could misinform and harm.**
- **must** **Consider consequences and get permission before irreversible or potentially problematic tasks.** **Ask whether a mistake or irreversibility would cause more work or stress.** **Avoid automating destructive actions (deleting photos) or hard-to-undo ones (making a purchase for someone).** **Generally ask for confirmation before a significant action on someone's behalf.** **Some situations are prohibited or have extra rules**: **follow model-specific usage policies and government/regulatory AI policy for each locale.**

### Outputs
- **should** **Make it easy to refine or revert generated results, and acknowledge when corrections take effect.** **Edit, Undo, Retry or Adjust controls near generated content preserve agency while keeping automation's benefit.** **When people adjust or personalise output, clearly signal the action had an effect**: it **builds an accurate mental model and trust over time**.
- **should** **Help people improve requests when blocked or undesirable results occur.** **Coach them to do better**: e.g. **for a harmful prompt, Image Playground says it's "Unable to use that description."** **Offer example requests that may work better.**
- **should** **Reduce unexpected and harmful outcomes through design and thorough testing.** People **generally act in good faith**, but **accidental and purposeful misuse and sensitive topics can still cause harm**. **Identify risks, devise policies, evaluate features.** **Test how people might use it**, **challenge your policies and expected use cases**, and **try**: **out-of-scope and unrelated requests, requests poorly represented in training data, poorly phrased, vague or ambiguous requests, personal, sensitive or controversial topics, and requests encouraging harmful or incorrect results.** **Use the findings to improve the model, inform prevention and respond thoughtfully.**
- **should** **Strive to avoid replicating copyrighted content.** Large models **are trained on vast internet datasets and can unintentionally produce content similar to published work.** **Reduce the likelihood by building on models that already protect against this and by curating inputs** (e.g. **pre-approved prompts**, or **telling the model not to mimic certain content or styles**).
- **should** **Factor processing time into the design.** **Latency = time to produce an output.** **Non-generative models (ARKit body tracking, the Vision framework) usually have low latency and suit real-time use**; **generative models typically take longer**: **design a loading experience or generate in the background while people use another part of the app** (→ Loading).
- **should** **Give specific, reassuring feedback during generation.** Messages that **describe what's actually happening** beat vague status: **"Finding substitutions for ingredients"** or **"Summarizing key themes from your notes"** instead of **"Processing…"**. **Specific feedback reduces uncertainty and makes waiting purposeful.** **If something goes wrong, say what happened in plain language and offer a clear next step.**
- **may** **Offer alternate versions of results.** Depending on the design, present **one result or several meaningfully different ones to choose from**: **choice gives control and bridges the gap between the model's interpretation and what the person wants** (e.g. **Image Playground generates multiple images representing a person to pick from**) (→ Machine learning › Multiple options).

### Continuous improvement
- **should** **Consider ways to improve the model over time**: **adapt to behaviour, respond to feedback, add data, use better capabilities.** **Some improvements (such as updating a blocked-words list) can be frequent and independent of the app development cycle**; **plan significant improvements around regular app updates.** **Plan for fine-tuning, retesting and prompt engineering when moving to a newer, more capable base model**; **if you train your own model, retrain with more data and fine-tune**; **thoroughly test and refine every model update** to catch unexpected behaviour.
- **should** **Let people share feedback on outputs.** Feedback **helps find unexpected outcomes and new issues despite testing**, lets people **celebrate what they like and report concerns**. **Take it seriously and resolve issues quickly. Always make feedback voluntary.** **Place the affordance in a clear location that doesn't interrupt the experience.** **Offer quick positive and negative feedback (thumbs-up/thumbs-down)** and **optionally a way to share detailed feedback for complicated issues** (→ Machine learning › Explicit feedback, Implicit feedback).
- **should** **Design flexible, adaptable features.** **Models and resource needs keep evolving**: **separate the model from the user experience so you can swap models over time**, **lay a foundation for future adjustments** while **keeping the same great experience**.

### Platform considerations
- **No additional considerations** for iOS, iPadOS, macOS, tvOS, visionOS or watchOS.

## Specs & values
The page has **no numbers, sizes or timings**. Its concrete content:

| Item | Value |
|---|---|
| Control affordances near generated content | **Edit · Undo · Retry · Adjust** (plus dismiss/revert) |
| Feedback | voluntary; clear, non-interrupting location; **thumbs up/down** and optional detail |
| Progress wording | specific ("Finding substitutions for ingredients", "Summarizing key themes from your notes"), not "Processing…" |
| Blocked-request wording (Apple's example) | "Unable to use that description." + example requests |
| Model types | **on-device** (private, fast, offline) vs **server-based** (more power, larger context); process locally, minimise, disclose |
| Availability caveat | Foundation Models needs a compatible device with Apple Intelligence on; models can be unavailable by device, network, battery |
| Disclosure | say where AI is used; never pass AI off as human; follow regional regulation |
| Fallback | a non-AI path when unavailable or declined (Genmoji → regular emoji; summaries → read notifications) |
| Irreversible actions | ask first; avoid automating destructive or hard-to-undo actions |
| Developer docs | Apple Intelligence and machine learning (overview) · **Foundation Models** · **Core AI** |
| Videos (links only, not watched) | Create UI prototypes using agents in Xcode (WWDC26 227) · What's new in the Foundation Models framework (WWDC26 241) · Explore prompt design & safety for on-device foundation models (WWDC25 248) |
| Apple's Related list | Machine learning · Inclusion (✓) · Accessibility (✓) · Privacy (✓) · Loading (✓) · Acceptable Use Requirements for the Foundation Models Framework |
| Change log | Jun 8 2026: refinement and feedback during generation, model-type guidance · Jun 9 2025: new page |

## Visual notes (link-only: from alt text)
- **Hero:** a sketch of **a pencil surrounded by sparkly stars**, suggesting generative intelligence, over grid lines, **tinted blue** (alt). Light and dark variants exist.
- **No other images, videos, tables or callouts** on the page.
- **Mismatches / notes:**
  1. **The page uses Apple products as examples** (**Genmoji, Image Playground, Apple Intelligence summaries, Foundation Models**) but **gives no UI patterns, sizes or layouts**; it is **guidance on behaviour**, not visual design.
  2. **"Consider" wording dominates** (**should** in most bullets); **the strongest obligations are around disclosure (never pass AI off as human), permission and irreversible actions**.
  3. **Several links point to the Machine learning page's sections** (Limitations, Multiple options, Explicit feedback, Implicit feedback); **Machine learning is now ingested** (`technologies/machine-learning.md`).
  4. **The June 2026 update added refinement, feedback and model-type guidance**, but **the page doesn't say what changed in the model-type advice** (it now weighs on-device against server-based).
  5. **The page names Foundation Models and Core AI** but **doesn't explain either**; **details live in developer docs**.
  6. **"Apps for kids have stricter rules and laws"** is stated as a warning with **no specifics**.
- **Catalog:** the script found **0 comparisons** (one hero image). Catalog stays **258**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
**Generative AI is fully relevant to the web** (chat, writing assistants, image generation, summaries, AI agents). **The behaviour rules transfer 1:1**; **Apple's specific frameworks (Foundation Models, Core AI, Image Playground, Genmoji) do not**. Legal points (disclosure, children's data, copyright) are background knowledge, not from the page; **check the rules for your jurisdictions (for example the EU AI Act, GDPR/KVKK, COPPA)**.

| HIG rule | Web implementation |
|---|---|
| Responsible design; inputs vary | **Design for non-determinism**: **no assumption that the same prompt gives the same output**; **guardrails, evaluation sets and red-team prompts in CI**; **log for debugging only with consent** (`privacy.md`). |
| Keep people in control | **Every AI output is dismissible, editable, revertible and retryable** (see Outputs); **AI never applies a change without the person's action** (**preview → Apply**); **honour explicit requests within scope**. |
| Inclusive: ask, don't infer; test diversely | **Don't infer gender, ethnicity, age or relationships**; **ask for the attributes the feature needs (optional fields)**; **test prompts across languages, dialects, names and regions**; **bias review before launch** (`inclusion.md`, `accessibility.md`). |
| Generative features only where valuable | **Justify each AI entry point by a concrete benefit** (**time saved, clarity, creativity**); **no "AI everywhere" buttons**; **measure use and remove low-value ones**. |
| Great experience without AI | **Every AI feature has a manual path** (**write the text yourself, choose a template, pick a standard emoji**); **the app stays fully usable when the model is unavailable, offline, rate-limited, or the person opted out**; **feature-detect on-device AI APIs** (**`"ai" in self`/Prompt API where available, Chromium; background, verify**) and **fall back to a server or a non-AI path**; **a persistent "Turn off AI features" setting**. |
| Communicate where AI is used | **A visible label wherever AI content appears** (**"Generated by AI" chip, ✨ icon with text**), **not colour or icon alone**, **in exported/shared content when required**, **`aria-label`/visually-hidden text "AI-generated"**; **chat UIs make it clear the counterpart is AI**; **never impersonate a human** (**no fake typing delays or human names for bots**); **align disclosure with regional rules**. |
| Set expectations; tutorial; suggestions | **First-use explainer** (**what it does, what it can't**), **"Try:" prompt chips** for open-ended inputs, **example prompts in the empty state**, **a "Tips for better results" link**, **limitation notes near the input** ("May be inaccurate. Check important information."). |
| Model type: on-device vs server | **Prefer on-device/in-browser inference when it works** (**WebGPU/WebNN/WebLLM, Prompt API in Chromium; verify**) for **privacy, latency and offline**; **server models for larger context/power**; **tell people which is used and what leaves the browser**; **process locally first, minimise payloads, redact PII before sending**, **no data in URLs**. |
| Ask permission for personal/usage data; opt-out; explicit for training | **Consent screen or inline consent before sending personal data (messages, photos, documents) to a model**, **separate switch for "use my data to improve models" (default off)**, **an easy opt-out/withdraw**, **children's data restrictions (COPPA/age gates)**, **third-party model providers named with their data policy**, **outputs treated as possibly sensitive (redact in logs)** (`privacy.md`). |
| Disclose how data is used and stored | **A plain-language data-use panel**: **what is sent, where it is processed, how long it is stored, whether it trains models**, **benefits stated concisely** (`privacy.md` transparency row). |
| Evaluate models, datasets, licences | **Model cards and eval results in the design doc**, **dataset provenance and licences recorded**, **diverse eval data**, **bias/misinformation tests before shipping**. |
| Guide input | **Example prompts, templates, structured inputs (dropdowns for tone/length)**, **inline hints**, **autocomplete for prompts**. |
| Hallucinations | **A visible "may contain errors" note near factual output**, **citations/sources when the model retrieves data (RAG)**, **avoid asking for facts the model can't verify**, **avoid AI in high-stakes contexts (medical, legal, safety) without human review**, **confidence cues only when calibrated**. |
| Irreversible/problematic tasks need permission | **Confirm dialog with a summary and consequences before AI actions that delete, send, publish, pay or share**; **default to "draft" states**; **undo/soft-delete** (`undo-and-redo.md`, `alerts.md`); **agentic actions listed before execution** ("I'm about to send this email to 12 people. Send / Edit / Cancel"). |
| Refine/revert; acknowledge corrections | **Controls adjacent to the output: Edit, Undo, Retry (Regenerate), Adjust (tone/length sliders or chips)**; **after an edit show a clear effect** ("Shorter version applied", a diff highlight or a brief `aria-live` message), **history of versions**, **keyboard shortcuts (⌘/Ctrl+Z)**. |
| Help when blocked or undesirable | **Blocked message in plain words** ("Can't use that description. Try describing the scene instead.") **plus example alternatives**; **no blame** (`writing.md`); **link to usage policy**. |
| Testing for misuse | **Automated red-team suites** (out-of-scope, vague, sensitive, adversarial, prompt injection); **rate limits and abuse reporting**; **content filters on input and output**; **policy documents reviewed regularly**. |
| Avoid copyrighted content | **Pre-approved prompt sets or style presets**, **system prompts telling the model not to imitate specific works/artists**, **provider indemnities/filters**, **similarity checks for images/text where feasible**, **attribution when quoting**. |
| Latency: loading experience or background generation | **Streaming responses (SSE / `ReadableStream`, tokens appear as they arrive)**, **skeletons or a placeholder with a Stop button**, **background generation with a "notify me" toast/badge**, **cancel (`AbortController`)**, **timeouts with retry** (`loading.md`). |
| Specific progress messages | **"Finding substitutions for ingredients…" not "Processing…"**, **stepwise status (`aria-live="polite"`)**, **plain-language errors with a next step** ("Couldn't summarise this note. Try again or shorten it."). |
| Alternate versions | **2–4 variants as cards or tabs** (**"Version 1/2/3"**, **Regenerate**), **pick or blend**, **compare side by side** (`collections.md`). |
| Improve the model over time; blocked words | **Versioned prompts/models with regression evals**, **hot-updatable blocklists without a redeploy**, **staged rollouts and A/B**, **rollback**, **release notes for behaviour changes**. |
| Feedback on outputs | **👍/👎 buttons near each output (Lucide `thumbs-up`/`thumbs-down`)**, **optional comment ("What went wrong?")**, **voluntary, non-blocking, ≥ 44 px targets**, **acknowledged ("Thanks for the feedback")**, **reports for harmful content**, **triage and action on feedback** (`feedback.md`). |
| Swappable model | **A provider-agnostic interface** (**adapter layer between UI and model**), **model chosen by config**, **UI not coupled to a specific provider's quirks**. |
| Native-only | **Foundation Models framework, Core AI, Apple Intelligence, Image Playground, Genmoji, Writing Tools** are native; **the web uses provider APIs, WebGPU/WebNN/WebLLM, the (experimental) Prompt API, and the Web Speech API**. |

Field-note cross-links:
- `field-notes/*`: **no AI-feature recipe**; nothing conflicts. **Note:** `field-notes/principles.md` §16 (copy: state facts calmly, remove duplicates) **fits** the "specific, reassuring feedback" and "plain-language errors" rules.
- `hig/foundations/privacy.md` (✓): **permission timing, purpose text, data-use disclosure, no lookalike prompts**; `hig/foundations/inclusion.md` (✓) and `hig/foundations/accessibility.md` (✓): **Apple's Related pages** (bias, diverse testing, accessible AI UI); `hig/patterns/loading.md` (✓): **latency and progress**; `hig/patterns/undo-and-redo.md` (✓): **revert/retry**; `hig/patterns/feedback.md` (✓ CRITICAL): **clear, specific messages**; `hig/foundations/writing.md` (✓): **plain, non-blaming wording**; `hig/components/presentation/alerts.md` (✓): **confirmation before significant actions**; `hig/components/system-experiences/app-shortcuts.md` (✓): **App Intents/Apple Intelligence surfacing app actions (agent-facing side)**; `hig/patterns/managing-notifications.md` (✓): **AI summaries of notifications**; `hig/technologies/carekit.md` (✓): **health-grade privacy**.
- Ingested: Machine learning (✓, `technologies/machine-learning.md`); not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **AI is used only where it gives clear value; every AI feature has a manual or non-AI path and a global off switch.**
- [ ] **AI content is labelled wherever it appears; nothing pretends to be human; disclosure meets regional rules.**
- [ ] **First-use explainer, example prompts and limitation notes set expectations.**
- [ ] **The model type (on-device vs server) is deliberate; what leaves the device is minimised, shown and disclosed; training use is opt-in.**
- [ ] **Consent is asked before personal data is used; withdrawal is easy; children's data is handled per law.**
- [ ] **Hallucination notes and scoping are in place; high-stakes uses have human review.**
- [ ] **Significant or irreversible AI actions need confirmation with a summary; destructive actions aren't automated.**
- [ ] **Outputs have Edit / Undo / Retry / Adjust controls, version history, and a clear acknowledgement when a correction applies.**
- [ ] **Blocked or poor results give coaching and example prompts.**
- [ ] **Generation streams or runs in the background, with specific progress text, Stop, and a plain-language error + next step.**
- [ ] **Alternate versions are offered where they help.**
- [ ] **Voluntary 👍/👎 feedback (with optional detail) sits near outputs, is acknowledged and acted on.**
- [ ] **Red-team tests, blocklists, copyright measures and model-update regression evals exist; the model is swappable.**

## Related
- Ingested: Inclusion (✓), Accessibility (✓), Privacy (✓), Loading (✓), Undo and redo (✓), Feedback (✓ CRITICAL), Writing (✓), Alerts (✓), App Shortcuts (✓), Managing notifications (✓), CareKit (✓).
- Ingested: Machine learning (✓, `technologies/machine-learning.md`); not yet ingested (linked from this page): none in the HIG.
- Developer docs: Apple Intelligence and machine learning · Foundation Models · Core AI. External: Acceptable Use Requirements for the Foundation Models Framework.
- Videos: Create UI prototypes using agents in Xcode (WWDC26 227), What's new in the Foundation Models framework (WWDC26 241), Explore prompt design & safety for on-device foundation models (WWDC25 248).
