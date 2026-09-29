# Sign in with Apple
Source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (page data; the platform text: "No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS"; the page also covers **the web and non-Apple platforms**) · Ingested: 2026-09-29 · Apple last updated: **September 14, 2022** (the only Change log row: refined guidance on supporting existing accounts, setting up a new account and indicating sign-in status; consolidated into one page). **Link-only ingestion: one DocC fetch, read in full (201 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the catalog list. Not marked critical: no token file, checker or gate (the buttons are system- or Apple-provided; see the Web translation). Numbers on the page: **3 titles** (Sign in with / Sign up with / Continue with Apple; watchOS: "Sign in"), **3 appearances** (white, white with outline, black), **minimum width 140 pt, minimum height 30 pt, minimum margin 1/10 of the button height**, **custom title font size ≈ 43 % of the button height (height ≈ 233 % of the font size)**, **example 44 pt / 19 pt and 56 pt / 24 pt**, **title margin at least 8 % of the button width**, **PNG art only at 44 pt (44 × 44 for logo-only)**.

## In one line
**Sign in with Apple is a fast, private sign-in and sign-up with the Apple Account (Face ID, Touch ID or Optic ID, built-in two-factor; Apple doesn't use it to profile people); it works in every version of an app or website, including non-Apple platforms.** **Offer it when it's most convenient: ask for sign-in only in exchange for value, delay it as long as possible, set up a required account before offering sign-in options, let people link an existing account, in commerce wait until after purchase (create an account on the confirmation page), welcome people at once, and show "Using Sign in with Apple" where the sign-in method is displayed.** **Collect minimal data: say which extra data is required or optional, never ask for a password, never ask for a personal email when a private relay address was shared, let people use the app before optional data requests, and be transparent about what you received.** **Buttons: display one prominently (no smaller than other sign-in buttons, no scrolling to reach it); prefer the system button (Apple-approved look, proportions, localisation, corner radius, VoiceOver label); pick a title (Sign in with / Sign up with / Continue with Apple) and use it consistently; pick white on dark, white with outline on light, black on light; keep at least 140 × 30 pt and a margin of 1/10 of the height; custom buttons follow strict rules (Apple's artwork only, titles fixed, black or white only) and App Review checks them.** On the web: **Apple's Sign in with Apple JS/button code, a prominent button, consistent title, the same data-minimisation rules, and a link/passkey/other options alongside.**

## Rules

### Framing (intro)
- **Sign in with Apple lets people use the Apple Account they already have to sign in or sign up**, **skipping forms, email verification and password creation.** **If you ask for a name and email address, people can share a unique random address that relays to their personal email.** (Developer: Authentication Services.)
- **Offer it in every version of the app or website across all platforms, including non-Apple platforms.**
- **It authenticates with Face ID, Touch ID or Optic ID and has two-factor authentication built in.** **Apple doesn't use it to profile people or their activity in apps.**

### Offering Sign in with Apple
- **should** **Ask people to sign in only in exchange for value**: **briefly describe the benefits** (personalise, extra features, sync data).
- **should** **Delay sign-in as long as possible**: **people abandon apps that force sign-in before anything useful**; **let them explore first** (a live-streaming app lets people browse before signing in to stream).
- **should** **If an account is required, set it up before offering sign-in options**: **explain why it's required; then, after account setup, offer Sign in with Apple and any other methods.**
- **may** **Let people link an existing account to Sign in with Apple**, **before or after they sign in**: **suggest linking when a shared email matches an existing account**; **when people signed in with a user name and password, show a linking suggestion in the account's settings or another logical place.**
- **should** **In a commerce app, wait until after a purchase before asking to create an account**; **offer a quick "create account" after the transaction** (e.g. **on the order confirmation page with Apple Pay**); **don't ask again for a name and email already provided during the Apple Pay transaction.** (Illustration: **an order confirmation on iPhone with "Create Account" and "Sign up with Apple" buttons**.)
- **should** **Welcome people as soon as sign-in completes**: **let them use the account right away**; **don't ask for information that isn't required.**
- **should** **Indicate when people are signed in**: **a phrase such as "Using Sign in with Apple" in settings or an account interface.**

### Collecting data
People value the **privacy and convenience**; **minimise data requests during account setup**, **explain why you need extra data (date of birth, region of residence) and clearly display the data you receive.**
- **must** **Clarify whether extra data is required or recommended.** **Legally or contractually required data** (terms of service agreement, country or region, birth date, information under real-identity laws) **must be clearly required to finish setup**; **optional data that improves the experience is presented as optional, with its benefits explained.**
- **must not** **Ask people for a password** (**unless they stopped using Sign in with Apple with your app or site**): **not needing passwords is a key benefit.**
- **must not** **Ask for a personal email address when people share a private relay address**: **respect the choice.** **If customer service, retail or other flows identify people by email, you can:**
  - **let people view their private relay address in your app or site;**
  - **direct them to Settings > Apple Account > Password & Security > Apps using Apple Account to find it;**
  - **use other identifiers, such as an order number or phone number collected in a purchase.**
- **should** **Let people engage with the app before asking for optional data**: **suggest sharing a phone number for live text updates or social info for playing with friends** as people use the app; **if they decline, don't block their account or features.**
- **should** **Be transparent about the data you collect**: **welcome people with the name or email they shared** (for a relay address, this shows where to find it later); **data you don't display makes people wonder why you asked.**

### Displaying buttons
- **Apple provides several Sign in with Apple buttons**; **a custom button is allowed when necessary** (see below).
- **must** **Display a Sign in with Apple button prominently**: **no smaller than the other sign-in buttons, and don't make people scroll to see it.**

#### Using the system-provided buttons
**Advantages of the system APIs:** **an Apple-approved appearance**; **ideal proportions across styles**; **automatic title translation to the device language**; **configurable corner radius (iOS, macOS, web)**; **a system alternative text label for VoiceOver.** (Developer: `ASAuthorizationAppleIDButton` (iOS, macOS, tvOS), `WKInterfaceAuthorizationAppleIDButton` (watchOS), "Displaying Sign in with Apple buttons on the web"; the Sign in with Apple button page shows live web previews and code.)
- **Titles** (**choose the variant that fits your sign-in terminology and use it consistently**):

| Platform | Titles |
|---|---|
| iOS, macOS, tvOS, web | **"Sign in with Apple"** · **"Sign up with Apple"** · **"Continue with Apple"** (each with the Apple logo) |
| watchOS | **"Sign in"** (with the Apple logo) |

- **Appearances (up to three, depending on platform):**

| Style | Availability | Use on |
|---|---|---|
| **White** | all platforms and the web | **dark backgrounds with sufficient contrast** (✗ on light backgrounds) |
| **White with outline** | **iOS, macOS, web** | **white or light backgrounds** that lack contrast with a white fill; **avoid on dark or saturated backgrounds** (the black outline adds clutter; use white instead) |
| **Black** | all platforms and the web | **white or light backgrounds with sufficient contrast**; **never on black or dark backgrounds** |

  - **watchOS:** **the black button uses the system dark gray fill**, not pure black, **to contrast with the pure black Watch background.** (Illustration: **a dark-shaded "Sign in" button on a black background**.)
- **Button size and corner radius:**
  - **should** **Adjust the corner radius to match your other buttons.** **Default: rounded corners**; **in iOS, macOS and the web you can choose square corners (90°, the minimum radius) or a capsule (the maximum radius)** (`cornerRadius`). (Illustrations: **minimum (90-degree), default, maximum (capsule-like)**.)
  - **must** **Keep the minimum size and margin in iOS, macOS and the web** (**titles vary in length by locale**):

| Minimum width | Minimum height | Minimum margin |
|---|---|---|
| **140 pt** (140 px @1x, 280 px @2x) | **30 pt** (30 px @1x, 60 px @2x) | **1/10 of the button's height** |

#### Creating a custom Sign in with Apple button
For **iOS, macOS or the web**, when the interface needs it (**e.g. logos aligned across several sign-in buttons, logo-only buttons, a font, bezel or background that fits the UI**). (Illustration: **two iPhones: stacked buttons "Sign in with Apple / X / Y / Z" with a logo before each title, and a "Sign in with" heading over a row of four square logo-only buttons**.)
- **must** **Make the custom button instantly identifiable as Sign in with Apple**; **if it differs too much, people won't feel comfortable using it.** **App Review evaluates all custom buttons.**
- **must** **Use only the logo artwork from Apple Design Resources** (**PNG, SVG, PDF; black and white; logo-only and logo-with-text**); **never create a custom Apple logo.** **Files include padding that positions the logo correctly.** (Illustrations: **a black logo in a white square and a white logo in a black square, each with a border showing the minimum clear space**.)
  - **Use the logo file to position the logo in a button; never use the Apple logo as a button by itself.**
  - **Match the file's height to the button's height.**
  - **Don't crop the file. Don't add vertical padding.**
- **must not change:** **titles** (**only "Sign in with Apple", "Sign up with Apple" or "Continue with Apple"**), **general shape** (**logo + text buttons are always rectangular**; **logo-only may be circular or rectangular**), **logo and title colours** (**both black or both white**; no custom colours).
- **may change:** **title font (weight and size)**, **title case (all caps allowed)**, **background appearance (overall colour stays black or white; a subtle texture or gradient is allowed)**, **corner radius (to match other buttons)**, **bezel and shadow (a stroke or a drop shadow)**.

##### Custom buttons with a logo and text
- **should** **Choose the logo file format by button height**: **SVG/PDF (vector) for any height; PNG only for 44 pt buttons (the iOS default and recommended height)**; **logos come in small, medium and large so sizes match across sign-up buttons.**
- **should** **Prefer the system font for the title**; **keep the system's proportions regardless of font**: **title font size = 43 % of the button height** (**height = 233 % of the font size, rounded**). (Illustrations: **44 pt height with 19 pt font; 56 pt height with 24 pt font**.)
- **should** **Preserve the title's capitalisation**: **capitalise the first word ("Sign" or "Continue") and "Apple"; the rest lowercase**, **unless the interface uses only uppercase.**
- **should** **Keep the title and logo vertically aligned**: **align the title to the vertical middle, then add the logo at the button's height** (the logo file has top and bottom padding).
- **may** **Inset the logo** to align it horizontally with other authentication logos (**adjust the space between the logo and the leading edge**).
- **must** **Keep at least 8 % of the button width between the title and the button's right edge.**
- **must** **Keep the minimum size and margin**: **140 pt × 30 pt, margin 1/10 of the height.**

##### Custom logo-only buttons
- **should** **Choose the format by size**: **SVG/PDF for any size; PNG only for 44 × 44 pt buttons.**
- **must not** **Add horizontal padding to a logo-only image**: **it's always 1:1 and the artwork already has the right padding on all sides.**
- **may** **Use a mask to change the default square** (circle or rounded rectangle) for a set of logo-only buttons; **never crop the artwork to reduce its padding, never use the logo by itself, avoid extra padding.** (Illustrations: **rounded rectangle mask, no mask (square), circular mask**.)
- **must** **Keep a margin of at least 1/10 of the button's height.**

### Platform considerations
- **No additional considerations** for iOS, iPadOS, macOS, tvOS, visionOS, watchOS (the page's button specifics are by platform, above).

## Specs & values
| Item | Value |
|---|---|
| Titles | **Sign in with Apple** · **Sign up with Apple** · **Continue with Apple** (iOS, macOS, tvOS, web) · **Sign in** (watchOS) |
| Appearances | **white** (all platforms, dark backgrounds) · **white with outline** (iOS, macOS, web; light backgrounds) · **black** (all; light backgrounds) · watchOS black = system dark gray |
| Corner radius | default rounded · minimum 90° (square) · maximum capsule (iOS, macOS, web) |
| Minimum size | **140 × 30 pt** (140 × 30 px @1x, 280 × 60 px @2x) · margin **1/10 of the height** |
| Custom, logo + text | title font **43 %** of height (height **233 %** of font, rounded) · examples **44 pt / 19 pt**, **56 pt / 24 pt** · title-to-right-edge margin **≥ 8 % of width** · PNG art only at 44 pt |
| Custom, logo-only | **1:1** · vector art for any size, PNG at **44 × 44 pt** · margin **≥ 1/10 of height** · masks: circle, rounded rectangle, none |
| Fixed in custom buttons | titles · shape (logo+text rectangular; logo-only round or square) · logo and title colours (both black or both white) |
| Allowed changes | title font/weight/size · all-caps · background (black or white; subtle texture/gradient) · corner radius · bezel and shadow |
| Prominence | no smaller than other sign-in buttons; no scrolling to find it |
| Status text | "Using Sign in with Apple" |
| Data rules | required vs optional stated · no password · no personal email when a relay was shared · optional data later |
| Relay address location | Settings > Apple Account > Password & Security > Apps using Apple Account |
| Developer docs | Authentication Services · `ASAuthorizationAppleIDButton` · `WKInterfaceAuthorizationAppleIDButton` · Displaying Sign in with Apple buttons on the web |
| Videos (link only, not watched) | Move beyond passwords (WWDC21 10106) · Simplify sign in for your tvOS apps (WWDC21 10279) · Introducing Sign In with Apple (WWDC19 706) |
| Apple's Related list | Sign in with Apple button (appleid.apple.com preview and code) |
| Change log | Sep 14 2022: refined existing-account, new-account and sign-in-status guidance; consolidated |

## Visual notes (link-only: from alt texts, captions and the catalog list)
- **Hero:** a sketch of **the Apple logo** over grid lines, **tinted blue** (alt).
- **Titles (catalog `sign-in-with-apple-01`, light and dark):** **three buttons with the Apple logo: "Sign in with Apple", "Sign up with Apple", "Continue with Apple"**; **the watchOS "Sign in" button** (single, not catalogued).
- **Appearance do/don't pairs (catalog `-02`, `-03`, `-04`, light only):** **white on dark ✓ / white on light ✗**; **white with outline on light ✓ / on dark ✗**; **black on light ✓ / on dark ✗.**
- **Corner radius (catalog `-05`, light and dark):** **minimum 90°, default, maximum capsule.**
- **Custom logo files (catalog `-06`, light only):** **black logo in a white square; white logo in a black square** (clear-space illustrations).
- **Logo-only masks (catalog `-07`, light and dark):** **rounded rectangle, none (square), circular.**
- **Not catalogued:** **the order-confirmation illustration, the custom sign-in screens, the height/font proportion callouts (44/19, 56/24), the watchOS dark button and the hero.**
- **Mismatches / notes:**
  1. **The page has two contradictory-looking numbers for the "minimum height"**: **30 pt (minimum)** and **44 pt (the iOS default and recommended height, and the only height for PNG art)**; **the first is the floor, the second the recommendation.** This skill's floor is 24 px and general recommended target 44 px (`buttons.md`).
  2. **The 43 % / 233 % proportion is stated for the system font**; **other fonts must keep "the same proportions"**, **but the page doesn't say how to measure them.**
  3. **"Button corner radius: minimum 90°, maximum capsule"** describes **iOS/macOS/web**; **the page gives no radius numbers.**
  4. **The custom-button rules allow all-caps, textures and gradients but fix logo and title colours**; **the page doesn't say how much texture is "subtle"**, **and App Review has final say.**
  5. **The page says the button can be used "in non-Apple platforms" but the guidance is written for Apple's button code**; **on Android or other platforms use Apple's web/REST guidance** (not on this page).
  6. **`tokens/apple-buttons.css` and the skill's own button rules don't cover this button**: **it's a brand element governed by this page, not by the general button tokens.** **The skill doesn't contain or commit Apple's logo art**; **use Apple's official button code or downloaded Design Resources.**
  7. **Related to Apple Pay's checkout guidance:** **the "no account before purchase" flow appears on both pages** (`apple-pay.md`).
- **Catalog:** the script found **7 comparisons** (titles, three appearance do/don't pairs, corner radii, logo clear-space files, logo-only masks). Catalog total **276** (was 269); the 269 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **sign-in-with-apple-01** (neutral: the three system button titles; light and dark), **-02** (do/don't: white button on a dark vs a light background), **-03** (do/don't: white outlined button on light vs dark), **-04** (do/don't: black button on light vs dark), **-05** (neutral: minimum, default, maximum corner radius; rule "Adjust the corner radius to match the appearance of other buttons in your app"), **-06** (neutral: black-on-white and white-on-black logo files with clear space; light only) and **-07** (neutral: rounded-rectangle mask, no mask, circular mask; rule "Use a mask to change the default square shape of the logo-only image"). The script reports **7 comparisons** for this page.

## Web translation
**Sign in with Apple works on the web through Apple's Sign in with Apple JS and REST APIs** (Apple provides button code and live previews; **verify current setup steps and domain/return-URL requirements in Apple's developer documentation**). **The account, data and button rules carry over.** Details about the JS SDK, OAuth/OIDC and email relay are background knowledge, not from the page. **This skill does not include Apple's logo artwork; use Apple's official button code or the downloadable Design Resources.**

| HIG rule | Web implementation |
|---|---|
| Ask for sign-in only in exchange for value; delay it | **Let people browse and try first**; **show a one-line benefit next to the sign-in prompt** ("Sign in to sync your library"); **gate only what needs an account** (`managing-accounts.md`, `onboarding.md`). |
| Required account: explain first; then offer methods | **A short "why an account" screen, then the sign-in method list** (**Sign in with Apple, passkey, Google, email link…**) **after account setup where an account is required.** |
| Link an existing account | **A "Link Sign in with Apple" suggestion in account settings, or when the shared email matches**; **confirm by signing in to the existing account first** (**never auto-merge on an unverified email**). |
| Commerce: account after purchase | **Guest checkout; on the confirmation page a "Create account" and Apple button, prefilled from the payment data** (`apple-pay.md`). |
| Welcome immediately | **Land on the content, not on a profile form**; **a short welcome with the name or email shared.** |
| Indicate signed-in status | **In the account menu or settings: "Using Sign in with Apple"** (`settings.md`). |
| Data: required vs optional; no password; relay | **Mark required vs optional fields explicitly (label text, not colour)**; **don't show a password field for an Apple-signed-in account**; **accept the relay address as the email** (`@privaterelay.appleid.com`) **and don't ask for another**; **show the address in the account page and use order numbers/phone for support lookups**; **register the sending domain for relay mail** (verify in Apple's docs). |
| Optional data later | **Ask when a feature needs it (phone for text updates), never block the account** (`entering-data.md`, `text-fields.md`). |
| Transparency | **Display received name/email in the account page and welcome copy**; **state what you use them for** (`privacy.md`). |
| Button prominence | **Same width and height as other sign-in buttons, in the first view, above the fold** (`buttons.md`). |
| System-provided button | **Use Apple's Sign in with Apple JS button (or Apple's generated markup)**: **approved look, localised title, corner radius option, accessible label**; **the button hosts inside a container you size (min 140 × 30 CSS px; recommend 44 px tall)**. |
| Titles | **One of "Sign in with Apple", "Sign up with Apple" or "Continue with Apple", used consistently**; **if other providers use "Continue with X", use "Continue with Apple"**. |
| Appearance vs background | **White on dark, white-with-outline on light, black on light; check against the actual background including dark mode** (`dark-mode.md`, `color.md`). |
| Corner radius | **Match the site's button radius (square, default or capsule)** with the button's radius setting; **minimum margin 1/10 of height.** |
| Custom button | **Only if necessary; ideally none.** **Use Apple's downloaded SVG logo with the rules above**; **fixed title, black or white only, logo file at button height, no crop, no vertical padding**; **title 43 % of height** (e.g. 44 px → 19 px); **≥ 8 % title margin on the right**; **expect review.** **`<button>` with `aria-label="Sign in with Apple"`** (`accessibility.md`). |
| Logo-only button | **1:1 square/circle via `border-radius`/mask; SVG at any size; 44 × 44 px minimum touch target**; **an accessible name** ("Sign in with Apple"). |
| Icons | **This skill's icon rule (Lucide/Phosphor) doesn't apply to the Apple logo**; **never redraw or approximate it**; **for other providers' buttons follow their brand guidelines.** |
| Native-only | **`ASAuthorizationAppleIDButton`, `ASAuthorizationController`, credential-state checks, Face ID/Touch ID/Optic ID authentication and token revocation UI** are native; **the web uses Sign in with Apple JS/REST and OAuth-style flows.** |

Field-note cross-links:
- `field-notes/*`: **no third-party sign-in recipe**; nothing conflicts. **`field-notes/principles.md` §16** (calm, factual copy) **fits** benefit and data-request wording.
- `hig/patterns/managing-accounts.md` (✓): **its "Sign in with Apple page: not yet ingested" note is updated**; **passkeys and account deletion (revoke tokens)**; `hig/technologies/apple-pay.md` (✓): **guest checkout then account creation; the Apple Pay button is a brand element like this one**; `hig/technologies/apple-in-app-purchase.md` (✓), `game-center.md` (✓), `icloud.md` (✓), `app-clips.md` (✓): **account and identity neighbours**; `hig/foundations/privacy.md` (✓): **minimal data, relay email, no custom auth schemes**; `hig/patterns/onboarding.md` (✓): **delay sign-in**; `hig/patterns/entering-data.md` (✓) and `text-fields.md` (✓): **optional vs required fields, `autocomplete`**; `hig/components/menus/buttons.md` (✓ CRITICAL) with `tokens/apple-buttons.css`: **generic button sizing (44 px; floor 24 px)**; `hig/foundations/dark-mode.md` (✓) and `color.md` (✓ CRITICAL): **button style vs background**; `hig/foundations/accessibility.md` (✓): **accessible names**; `hig/technologies/id-verifier.md` (✓): **minimum-data principle**.
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **Sign-in is requested only in exchange for value, as late as possible; a required account is set up first, then sign-in options are offered.**
- [ ] **In commerce, the account is offered after purchase (prefilled).**
- [ ] **People are welcomed immediately, and the sign-in method is shown ("Using Sign in with Apple").**
- [ ] **Required and optional data are clearly separated; no password field; no personal email requested when a relay address was shared; optional data comes later without blocking features.**
- [ ] **The Sign in with Apple button is prominent (no smaller than other sign-in buttons, visible without scrolling), uses one consistent title, and the right appearance for its background.**
- [ ] **The button is at least 140 × 30 pt (recommended 44 pt tall) with a margin of 1/10 of its height; the corner radius matches other buttons.**
- [ ] **Custom buttons (only if needed) use Apple's artwork at button height, fixed titles, black or white only, title 43 % of the height, ≥ 8 % right margin, no crop, no vertical padding; logo-only buttons are 1:1.**
- [ ] **The button has an accessible name; Apple's logo is never redrawn.**

## Related
- Ingested: Managing accounts (✓), Apple Pay (✓), Apple In-App Purchase (✓), Game Center (✓), iCloud (✓), App Clips (✓), Privacy (✓), Onboarding (✓), Entering data (✓), Text fields (✓), Buttons (✓ CRITICAL), Dark Mode (✓), Color (✓ CRITICAL), Accessibility (✓), ID Verifier (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: Authentication Services · Displaying Sign in with Apple buttons on the web. External: Sign in with Apple button (appleid.apple.com), Apple Design Resources.
- Videos: Move beyond passwords (WWDC21 10106) · Simplify sign in for your tvOS apps (WWDC21 10279) · Introducing Sign In with Apple (WWDC19 706).
