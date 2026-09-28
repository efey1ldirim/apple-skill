# Inclusion
Source: https://developer.apple.com/design/human-interface-guidelines/inclusion · Section:
Foundations · Supported platforms: all six (no platform-specific considerations) · Ingested:
2026-09-28 · Screenshots: 11 (dark-mode page, hero → videos); text cross-checked against the
fetched content — matching; symbol captions and video thumbnails marked "(from screenshot)".
No change log on the page.

## In one line
Put people first: write plainly and respectfully (address them as *you*), assume nothing about
who they are (gender, family, education, wealth, ability, culture), show human diversity without
stereotypes, make everything accessible, and design so the product localises cleanly — including
what colours mean in each culture.

## What the page says

### Framing
- Inclusive = respectful communication + content and functionality everyone can access and
  understand. It's **iterative**: keep examining your assumptions; stay open to evolving knowledge.

### Inclusive by design
- Intuitive experiences start from investigating people's goals and perspectives; **empathy** reveals
  where a word or image is incomprehensible or means something unintended.
- Perspectives arise from shared human characteristics: age · gender and gender identity · race and
  ethnicity · sexuality · physical attributes · cognitive attributes · permanent, temporary and
  situational disabilities · language and culture · religion · education · political or philosophical
  opinions · social and economic context.
- **Inoffensive ≠ inclusive.** Don't frame the work as hunting for offensive content; aim for a
  welcoming experience (which also avoids offence).

### Welcoming language (copy)
- **should — Check tone from different perspectives**: tone communicates almost as much as words;
  an academic tone signals "only for the highly educated". Be clear, direct, respectful.
- **should — Address people as *you / your*.** "The user" / "the player" feels distant. Reserve
  *we / our* for the software or company — otherwise it implies a personal relationship that can read
  as insulting or condescending.
- **must — Define specialised/technical terms** (and make definitions easy to look up), or better,
  use plain language — easier to read *and* translate.
- **should — Replace colloquialisms with plain language**: culture-specific, hard to translate, some
  have exclusionary origins (Apple's examples: "peanut gallery", "grandfathered in").
- **should — Think carefully before humour**: subjective, hard to translate; confuses, irritates on
  repetition, or insults.

### Being approachable
- No prerequisite skills or knowledge; a clear path to deepen understanding over time.
  - Present a clear, straightforward interface that fits each platform (Designing for iOS … games).
  - Build in ways to learn: onboarding that lets newcomers go step by step while others **skip
    straight to content** (see Onboarding).

### Gender identity
- Cultures recognise a spectrum beyond the woman/man binary.
- **should — Avoid unnecessary gender references.** Apple's example: rewrite "let a subscriber post
  his or her recipes" to "Subscribers can post recipes …" — gender-neutral noun, no singular gendered
  pronouns, localises better.
- **should — Avoid gendered avatars / emoji / glyphs / characters**; give people tools to customise.
- **should — Generic person = nongendered human image.** SF Symbols offers many.
  examples shown (image captions): `person.crop.circle`, `person.3.fill`, `figure.wave`.
- **should — Don't ask for gender unless needed** (health, legal). If needed, offer inclusive options
  (**nonbinary, self-identify, decline to state**) and optionally let people specify **pronouns**.

### People and settings
- Portraying human diversity is one of the most noticeable welcome signals — people who see
  themselves feel included and expect to benefit.
- **should — Show a range of people and activities** (fitness app: different racial backgrounds,
  body types, ages, physical capabilities). **must not — Stereotyped roles** (only male doctors,
  female nurses; heroes/villains reinforcing racial or gender stereotypes).
- **should — Review settings and objects**: conspicuous affluence can feel unwelcoming/out of touch;
  prefer familiar, relatable places, homes, activities, items.

### Avoiding stereotypes
- Everyone has (often unconscious) biases; the goal is to notice where they shape design decisions.
- Example: a family-account app assuming *family* = woman + man + biological children excludes every
  other family.
- Subtler example — security questions that assume experiences: favourite subject in college; make of
  first car; how you felt seeing your first rainbow (assumes college, car ownership, sight). More
  universal alternatives: favourite activity; name of first friend; quality that describes you best.
- Generalisations can't reflect human diversity → assumptions inevitably exclude.

### Accessibility
- Inclusive = accessible. Support VoiceOver, Display Accommodations, closed captioning, Switch
  Control, Speak Screen, etc.
- Never assume a disability means someone doesn't want the experience.
- Each disability is a **spectrum** (vision: low vision → blindness, colour blindness, blurry vision,
  light sensitivity, peripheral loss). **Everyone** experiences disability: age-related, *temporary*
  (hearing loss from infection), *situational* (can't hear on a noisy train).
- **must — No images/language that exclude disabled people**; include them when representing
  variety; don't use a disability to express a negative quality.
- **should — People-first writing**: accomplishments and goals before a disability; ask how a
  person/community self-identifies (Apple Style Guide: Writing about disability).
- **must — Simplicity and perceivability**: familiar, consistent interactions; content perceivable by
  sight, hearing or touch. (Details: `accessibility.md`.)

### Languages
- People pick a language and a **region** (date, time, money formats). Internationalise first (handle
  other languages/regions), then localise text and resources.
- Inclusive choices (plain language, no needless gender, varied people, no stereotypes or
  culture-specific content) make localisation easier. **SF Symbols** help: language-specific glyphs
  and LTR/RTL variants (see Right to left).
- **must — Colour meanings are cultural**: e.g. white = death/grief in some places, purity/peace in
  others. Make colour choices communicate the same thing in every locale (see `color.md`, visual
  **color-02** — rising stocks green vs red).

### Resources listed
Related: Writing inclusively (Apple Style Guide), Accessibility. Developer docs: Localization (Xcode).
Videos: *Principles of inclusive app design* (WWDC25 316), *The practice of inclusive design*
(WWDC21 10275), *The process of inclusive design* (WWDC21 10304). **(from screenshot)** thumbnails:
two presenters at a table (WWDC25), a grid of diverse Memoji faces, a hand-lettered cycle
"Ideate → Design → Develop → Test → Release".

## Visual notes (from screenshots)
- Hero: yellow Foundations panel with the two-person outline glyph on a construction grid.
- Nongendered symbol trio shown large, white on black, captions below in monospace-free regular text.

## Web translation (and Turkish-product notes)
| HIG | Web / copy |
|---|---|
| Address as *you* | Turkish UI: choose **one** register (*sen* or *siz*) product-wide and keep it — never mix. Avoid "kullanıcı" in UI copy addressed to the person ("Kullanıcı bilgilerinizi girin" → "Bilgilerinizi girin"). "Biz" only for the company. |
| Plain language, define jargon | No unexplained acronyms/tech terms in UI; first use gets a short inline definition or a tooltip/`<abbr title>`; error messages say what happened and what to do. |
| Avoid colloquialisms/humour | Keep jokes out of errors, empty states, destructive confirmations; idioms don't translate. |
| No needless gender | Turkish has gender-neutral pronouns, but watch nouns and imagery (e.g. "işadamı" → "iş insanı"; default avatars neutral, not male silhouettes). English strings: "they", plural rewrites. |
| Gender fields | Ask only if required; options include nonbinary / self-describe (free text) / prefer not to say; optional pronouns field. Never required by default. |
| Generic person icon | Use neutral person glyphs (Lucide `user`, `users`, `circle-user`), not gendered figures. |
| Diverse imagery, no stereotypes | Stock/illustration sets with varied ages, bodies, skin tones, abilities; avoid role stereotypes; relatable, not luxury, settings unless the product is luxury. |
| Assumption-free forms | Family/household = flexible members, not "mother/father"; name fields: single "Full name" or given/family without assuming order; don't require a surname, title, or specific address format; security questions universal (or avoid them entirely — prefer passkeys/2FA). |
| Accessibility | See `accessibility.md` (contrast, text scaling to 200%, labels, captions, reduced motion). |
| i18n | `Intl.DateTimeFormat` / `NumberFormat` / `RelativeTimeFormat` with the user's locale; currency per region; `dir="rtl"` support; no text baked into images; allow 30–40% text expansion. |
| Colour meaning per culture | Don't rely on colour alone for meaning; verify red/green/white semantics for target markets (finance up/down, mourning colours). |
| Approachable onboarding | Progressive, skippable onboarding; always a "Skip" / straight-to-content path. |

## Checklist
- [ ] Copy addresses the person directly, one consistent register, no "the user", no jargon/idioms/jokes in critical paths?
- [ ] No unnecessary gender in copy, avatars, icons; gender asked only if required, with inclusive options?
- [ ] Imagery diverse, no role stereotypes, relatable settings?
- [ ] Forms and questions free of cultural/ability assumptions (family, names, addresses, security questions)?
- [ ] Accessible (see `accessibility.md`) and perceivable by sight, hearing, touch?
- [ ] Locale-aware formatting, RTL-ready, colour meanings valid in each market?
- [ ] Onboarding optional/skippable?

## Related (ingestion status)
Accessibility (✓), Color (✓ CRITICAL), Icons (✓), Right to left, SF Symbols, Onboarding, Writing —
not yet ingested (except ✓).
