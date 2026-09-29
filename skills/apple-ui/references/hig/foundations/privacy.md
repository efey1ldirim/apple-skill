# Privacy
Source: https://developer.apple.com/design/human-interface-guidelines/privacy · Section: Foundations ·
Supported platforms: all six (iOS, iPadOS, macOS, tvOS, visionOS, watchOS) · Ingested: 2026-09-28 ·
Screenshots: 23 (dark-mode page, hero → change log + footer). Body text, the purpose-string table,
both asides, every image alt text and every caption were cross-checked line by line against the
fetched content — all match. Text that exists only inside the example images is marked
**(from screenshot)**.

Apple change log:
- **2023-06-21**: guidance consolidated into this new page and updated for visionOS. This is the only
  entry.

## In one line
Ask for the **least** data, **at the moment** a feature needs it, with a **specific, honest, active**
reason. Let the system prompt do the asking and never pressure, trick or pay people toward "Allow".
Process on-device where you can, and protect what you keep with platform security (passkeys,
biometrics, keychain) instead of home-made schemes.

## Rules

### Framing (intro)
- People use their devices in very personal ways and expect apps to help keep their privacy.
- **must — App Store privacy details:** every new or updated app submission declares its privacy
  practices and the privacy-relevant data it collects.
  - The App Store shows this on the product page.
  - It can be edited any time in App Store Connect.
  - People read it to decide **before downloading**.
  - Link given: *App privacy details on the App Store*.
  - Caption of the product-page image: the product page explains the app's privacy practices before
    download.

### Best practices
- **must — Request only the data you actually need.**
  - Asking for more than a feature needs erodes trust.
  - So does asking before the person has shown interest in that feature.
  - Make each request as **specific** as possible, so people keep precise control.
- **must — Be transparent about how you collect and use data.**
  - People are less willing to share when they don't understand exactly how you'll use it.
  - **Always respect** people's use of system privacy features such as **Hide My Email** and **Mail
    Privacy Protection**.
  - Know your obligations around **app tracking**.
  - Links given: apple.com/privacy; *User privacy and data use*.
- **should — Process data on the device where possible.**
  - Example: in iOS, the **Apple Neural Engine** and custom **Create ML** models let you process on
    device.
  - This avoids long and potentially risky round trips to a server.
- **should — Adopt the system's privacy protections and follow security best practice.**
  - Example: from **iOS 15**, **CloudKit** handles encryption and key management for more data types
    (strings, numbers, dates).

### Requesting permission
Things that require permission (the page's examples):
- **Personal data:** location, health, financial, contact and other personally identifying
  information.
- **User-generated content:** emails, messages, calendar data, contacts, gameplay information,
  Apple Music activity, HomeKit data, and audio, video and photo content.
- **Protected resources:** Bluetooth peripherals, home automation features, Wi-Fi connections,
  local networks.
- **Device capabilities:** camera, microphone.
- **visionOS in a Full Space:** ARKit data such as hand tracking, plane estimation, image anchoring,
  world tracking.
- **The advertising identifier**, which supports app tracking.

How the system prompt works:
- The system shows a **standard alert** for each request.
- The app supplies only the explanatory copy.
- People can review that copy and change their answer later in **Settings > Privacy**.

Rules:
- **must — Request permission only when the app clearly needs it.**
  - People are naturally suspicious of requests with no obvious need.
  - Ideally wait until the person actually uses the feature that needs access.
  - Example: offer the **location button** so people share location only after showing interest in
    a feature that needs it.
- **should — Don't request at launch unless the app can't function without it.**
  - A launch-time request is tolerated when the reason is obvious. Examples: a navigation app needs
    location before it's useful; a visionOS game that bounces objects off your walls needs access
    to your surroundings before it can be played.
- **must — Write copy that clearly says how the app will use the ability, data or resource.**
  - This copy is the ***purpose string*** (also called the *usage description string*). The alert
    shows it **after the app name** and **before** the grant/deny buttons.
  - Write one **brief, complete sentence** that is straightforward, specific and easy to understand.
  - Use **sentence case**, **no passive voice**, and **end with a period**.
  - Developer references: *Requesting access to protected resources*; *App Tracking Transparency*.

Purpose-string examples (the ✓ string is this note's one quote; the ✗ ones are described):

| | Purpose string | Why |
|---|---|---|
| ✓ | "The app records during the night to detect snoring sounds." | Active voice; says what is collected, how, and why. |
| ✗ | a passive line saying mic access is required to improve "the experience" | Passive; the justification is vague and undefined. |
| ✗ | a bare command to switch the microphone on | Imperative; gives no justification at all. |

System alert examples (tabs **privacy-01**):
- **Location:** title asking to let "Social Media" use your location; purpose string about showing
  nearby post locations; a small map with a "Precise: On" badge; three stacked buttons: Allow Once,
  Allow While Using App, Don't Allow.
- **Photos:** title "…Would Like to Access Your Photos"; purpose string about uploading from your
  library; three stacked buttons: Select Photos…, Allow Access to All Photos, Don't Allow.
- **Contacts:** title "…Would Like to Access Your Contacts"; purpose string about finding friends and
  adding them to your network; two side-by-side buttons: Don't Allow and **Allow** (filled blue).

#### Pre-alert screens, windows or views
- Ideally the **context itself** explains why you're asking.
- If more detail is essential, you **may** show a custom screen or window **before** the system
  alert.
- These rules cover any custom view shown before a system permission alert: camera, microphone,
  location, contacts, calendar and tracking.
- **must — Only one button, and make clear it opens the system alert.**
  - A second button that doesn't lead to the alert diverts people from making their choice. That
    feels manipulative.
  - Titling the custom button **"Allow"** (or anything that looks like the alert's allow button in
    meaning **or visual weight**) is also manipulation. People may then hit the alert's allow
    button without meaning to.
  - Title it **"Continue"** or **"Next"**.
  - (Visual **privacy-02** ✓: a headline saying location unlocks the following features, three icon +
    text benefits, a note that it can be changed later in Settings, and one
    **Next** button.)
- **must — No additional actions on the custom screen, unless they're needed to obtain legal
  consent.**
  - In particular, give no way to leave without seeing the system alert: **no Cancel, no Close**.
  - (Visual **privacy-03** ✗✗: the same screen with a Cancel button under Next (caption: no
    cancel option), and with a close × at top-leading (caption: no option to close the view).)

#### Tracking requests
- App tracking is a **sensitive** issue.
- A custom screen that explains the **benefits** of tracking can sometimes make sense.
- **must — If you track from launch, show the system alert before collecting any tracking data.**
- **must — Never put a confusing or misleading custom screen before the system alert.**
  - People often tap quickly to dismiss alerts without reading.
  - A custom screen that exploits that habit to steer the choice is **rejected by App Review**.
- **Prohibited designs that cause rejection** (Visual **privacy-04**, four tabs, all ✗):
  1. **Incentive.** No compensation for granting. Also, you **can't withhold** functionality or
     content, or make the app unusable, until people allow tracking. (Image: a headline promising a $100
     credit for allowing tracking, a $ in a circle, and a button to claim the credit.)
  2. **Imitation request.** No custom screen that mirrors what the system alert does. No button
     titled "Allow" or similar: nothing is being allowed on a pre-alert screen. (Image: a headline claiming
     tracking improves the experience, a rising bar chart, and a button labelled as allowing tracking.)
  3. **Alert image.** Never show a picture of the standard alert, modified in any way. (Image:
     a headline telling people to pick Allow when asked, above a picture of the location alert with
     Allow While Using App circled by hand, and a Continue button.)
  4. **Alert annotation.** No visual cue pointing people at the real alert's Allow button. (Image:
     the real alert over the custom screen, plus an upward arrow and a "choose Allow" hint in the
     lower third.)
- **Allowed:** a consent screen shown before **or** after the App Tracking Transparency alert **to
  comply with local privacy laws** is permitted.
  - Reference: App Review Guidelines **5.1.1 (iv)**.

### Location button
- **iOS, iPadOS and watchOS:** Core Location provides a **location button**. It grants **temporary**
  location access at the moment a task needs it.
  - Its look can be adapted to the app's UI.
  - It always signals location sharing in an instantly recognisable way.
  - (Image: a blue capsule with a white location arrow and "Current Location".)
- **First tap:**
  - The first time people tap it, the system shows a standard alert.
  - The alert explains that the button limits the app's access, and reminds them of the **location
    indicator** shown while sharing.
  - (Image: the location alert over a map screen.)
- **After confirmation:**
  - Each tap grants **one-time** permission.
  - Each one-time grant expires when people stop using the app.
  - People don't have to confirm their understanding again.
- **Note:**
  - With **no authorization status** yet, a tap equals choosing **Allow Once**.
  - If people already chose **While Using the App**, a tap does **not** change the status.
  - APIs: `LocationButton` (SwiftUI), `CLLocationButton` (Swift).
- **may — Use the location button as a lightweight way to share location for specific features.**
  - Examples: attach location to a message or post; find a store; identify a building, plant or
    animal nearby.
  - If people often pick **Allow Once**, the button saves them from repeated alerts.
- **may — Customise it to fit your UI.** Exactly these four things can change:
  1. The **system-provided title**, e.g. "Current Location" or "Share My Current Location".
  2. A **filled or outlined** location glyph.
  3. The **background colour** and the **title/glyph colour**.
  4. The **corner radius**.
- Nothing else can be customised. This keeps the button recognisable and trustworthy.
- The system warns about legibility problems such as **low-contrast colours** or **too much
  translucency**.
- **must — You** make sure the title fits: no truncation at **any accessibility text size** or in
  **any language**.
- **Important:**
  - If the system detects **consistent problems** with a customised button, it will **stop granting
    location** when people tap it.
  - The button may still run other app actions, but people lose trust when it doesn't do what they
    expect.

### Protecting data
- Protecting people's information is **paramount**.
- Build confidence by using system security technologies for three things: storing locally,
  authorising specific operations, and moving data over a network.
- **should — Don't rely on passwords alone.**
  - Prefer **passkeys** instead of passwords.
  - If passwords stay, add **two-factor authentication** (*Securing Logins with iCloud Keychain
    Verification Codes*).
  - For apps people stay signed in to, protect access with **Face ID, Optic ID or Touch ID**
    (*Local Authentication*).
- **must — Store sensitive information in a keychain.**
  - It gives a secure, predictable experience for private data (*Keychain services*).
- **must — Never keep passwords or other secure content in plain-text files.**
  - This holds even with restrictive file permissions; an encrypted keychain is far safer.
- **should — Don't invent custom authentication schemes.**
  - Prefer **passkeys**, **Sign in with Apple** or **Password AutoFill** (see *Managing accounts*).

## Specs & values
| Item | Value |
|---|---|
| Purpose string form | one brief, complete sentence · sentence case · active voice · ends with a period |
| Purpose string position in alert | after the app name, before the grant/deny buttons |
| Where people revisit choices | Settings > Privacy |
| Pre-alert button title | "Continue" or "Next" (never "Allow") · exactly one button |
| Sizes / colours | none; this page gives no dimensions or colour values |
| Location button customisable attributes | title (system list) · glyph filled/outlined · background colour · title+glyph colour · corner radius (nothing else) |
| Location button titles named | "Current Location", "Share My Current Location" |
| Location button platforms | iOS, iPadOS, watchOS |
| CloudKit extra encryption | iOS 15+ (strings, numbers, dates) |
| App Review reference | Guideline 5.1.1 (iv) |
| APIs | `LocationButton`, `CLLocationButton`, App Tracking Transparency, Local Authentication, Keychain services, Password AutoFill, ARKit data access |

## Platform considerations

### iOS, iPadOS, tvOS, watchOS
- No additional considerations.

### macOS
- **should — Sign the app with a valid Developer ID** when distributing outside the store. It
  identifies you as an Apple developer and confirms the app is safe (Xcode Help).
- **must (Mac App Store) — Protect data with App Sandbox.**
  - Sandboxing gives controlled access to system resources and user data and protects against
    malware.
  - **Every Mac App Store app must be sandboxed** (*Configuring the macOS App Sandbox*).
- **should — Don't assume who is signed in.** With fast user switching, several people can be active
  on the same Mac.

### visionOS
- By default, ARKit algorithms always run for persistence, world mapping, segmentation, matting and
  environment lighting. Apps in the **Shared Space** benefit from them automatically.
- ARKit sends **no data** to apps in the Shared Space. To use ARKit APIs, an app must open a **Full
  Space**.
- Plane Estimation, Scene Reconstruction, Image Anchoring and Hand Tracking additionally need the
  person's **permission** (*Setting up access to ARKit data*).
- **Input is private by design.**
  - The system draws hover effects when people look at SwiftUI or RealityKit interactive
    components. People get feedback, but **where they look is not exposed** to the app before they
    tap.
  - See Eyes; Gestures § visionOS.
- **Cameras:**
  - The **back camera** gives **blank input**; it exists only for compatibility.
  - The **front camera** feeds **spatial Personas**, and only after permission.
  - **should** — when bringing an iOS/iPadOS app over, **remove** camera-dependent features or
    replace them with **importing content** (*Making your existing app compatible with visionOS*).

## Resources listed
- Related: Entering data (✓), Onboarding (✓).
- Developer documentation: *Requesting access to protected resources* (UIKit), *Security*,
  *Requesting authorization to use location services* (Core Location), *App Tracking Transparency*.
- Videos: *Meet Trust Insights* (WWDC26 379), *Integrate privacy into your development process*
  (WWDC25 246), *What's new in passkeys* (WWDC25 279).
- In-text links: App Store Connect help; App privacy details on the App Store; apple.com/privacy;
  User privacy and data use; passkeys; Securing Logins with iCloud Keychain Verification Codes;
  Local Authentication; Keychain services; Sign in with Apple; Password AutoFill; Managing accounts;
  Xcode Help; Configuring the macOS App Sandbox; Setting up access to ARKit data; Eyes; Gestures §
  visionOS; SharePlay § visionOS (spatial Personas); Making your existing app compatible with
  visionOS.

## Visual notes (from screenshots)
- **Page chrome (from screenshot):**
  - "Supported platforms" shows all six glyphs.
  - The TOC reads: Privacy · Best practices · Requesting permission · Location button · Protecting
    data · Platform considerations · Resources · Change log.
- **Hero:** a yellow grid card with a pale-yellow raised **hand**, palm forward: a "stop/protect"
  gesture.
- **App Store privacy screen (from screenshot):**
  - A dark iPhone product page. At the top: an App Privacy header with a chevron, and a paragraph
    naming the developer "Social Media, Inc." with a blue "developer's privacy policy" link.
  - Card **"Data Used to Track You"**: a blue tracking glyph; the subtitle says the data may be used
    to track you across other companies' apps and websites; items Contact Info, Identifiers, Other
    Data.
  - Card **"Data Linked to You"**: a blue person glyph; items Health & Fitness, Purchases, Financial
    Info, Location, Contact Info, Contacts, Usage Data, Sensitive Info (partly hidden).
  - Each card is a centred glyph + title + grey subtitle, then a two-column grid of small glyph +
    label rows.
  - A Liquid Glass tab bar floats over the bottom: Today, Games, Apps, Arcade, plus a separate search
    circle.
- **System alerts (privacy-01):**
  - Rounded alert cards with a bold title, a regular grey purpose string, and full-width capsule
    buttons stacked vertically (or two side by side).
  - Only the contacts example has a **filled blue** Allow. The others are all neutral grey capsules.
- **Pre-alert screens (privacy-02/03):**
  - Hexagon-pattern corners in purple.
  - A large 3-line headline.
  - Three benefit rows with purple glyphs (person with a "!" badge, flag, map pin).
  - A settings footnote.
  - One full-width **neutral glass capsule** "Next" (not filled, not blue, so it doesn't mimic the
    alert's Allow).
  - The ✗ variants add a second identical capsule "Cancel", or a small glass × circle at
    top-leading.
- **Tracking ✗ tabs (privacy-04):**
  - Same template: headline, one central illustration, one neutral capsule button.
  - The prohibited items are the **words** and **cues** (a $100 offer, an "Allow Tracking" button,
    the hand-drawn circle around Allow While Using App, the arrow + "choose Allow" hint). The layout itself
    is not what's prohibited.
- **Location button:** a saturated blue capsule, white arrow glyph + "Current Location" in white,
  about 3× wider than it is tall.
- **Asides:** "Note" is a grey rounded box; "**Important**" is an **amber-bordered box with an
  amber title** on a dark amber fill.
- **Videos (from screenshot):** three thumbnails, each with a WWDC26/WWDC25 badge. The first two
  show a presenter in an office; the third shows a hand holding an iPad with a dog photo.

## Web translation
On the web the "system alert" is the **browser permission prompt** (`navigator.geolocation`,
`getUserMedia`, `Notification.requestPermission`, `navigator.contacts`, Web Bluetooth/USB, the
clipboard). For tracking it is the **consent (cookie/CMP) dialog**, which is the one place where law
requires a custom UI. For account security, the platform equivalents are **WebAuthn passkeys**,
password-manager autofill and HttpOnly cookies.

| HIG rule | Web implementation |
|---|---|
| Ask only for what you need, only when needed | Call a permission API **only from a user gesture on the feature that needs it**: the map's "Use my location" button, the mic button in the recorder. **Never** request on page load, in `useEffect` on mount, or on the first route of an onboarding flow. Ask for the narrowest scope (e.g. `getUserMedia({ audio: true })` without video; the Contacts Picker for chosen contacts rather than an import of everything). |
| Launch-time only if essential | A request on first load is acceptable only when the product is useless without it (a turn-by-turn map), and the reason is obvious from the page itself. |
| Purpose string | Browsers show **no** custom reason text, so the reason must sit **next to the trigger**: one short, complete, active sentence that ends with a period, e.g. "We use your location to show stores near you." Not "Location is needed for a better experience." |
| Pre-alert screen | Optional. If it's used: **one** button titled "Continue"/"Next" that immediately triggers the browser prompt; no "Allow"/"Enable"/"Accept" wording; no Cancel/Close/"Not now"/"Maybe later" on that screen. Don't style the button like an approval (no brand-blue "Allow" look); use the ordinary primary style. Normal browser navigation (Back) stays available. |
| No imitation, image or annotation | Never draw a fake browser prompt, a screenshot of a prompt, or arrows/highlights pointing at where the real prompt appears ("Click Allow above ↑"). No coach marks aimed at the address-bar permission UI. |
| Tracking = consent dialog | No incentives for accepting (discounts, credits, extra content). No **cookie walls** (withholding content or making the site unusable until tracking is accepted). No "Allow" look-alike buttons on screens that don't record consent. Don't load or fire trackers (analytics pixels, ad SDKs) before consent is given. A legally required consent screen (GDPR/KVKK explicit consent) is allowed; this matches HIG 5.1.1 (iv). |
| Honour system privacy choices | Respect a relay email address (Hide My Email-style); never block it or ask for a "real" email. Don't depend on email open-tracking pixels (Mail Privacy Protection makes them meaningless). Honour `Sec-GPC` / Global Privacy Control as an opt-out signal. |
| Transparency | A plain-language "what we collect and why" page linked from every consent and permission touchpoint. Where data leaves the device, say so where the action happens (e.g. "Photos are uploaded to our servers to be processed."). |
| On-device processing | Prefer client-side processing (WebGPU/WASM models, Web Crypto) when it avoids sending raw personal data to a server. |
| Location button | Web equivalent: an explicit **"Use my location"** button with the location-arrow glyph, placed at the point of use. Keep it recognisable: the standard arrow glyph and a title from a small fixed set ("Current Location", "Share My Current Location"). Colour and radius may follow the design system. Contrast ≥ 4.5:1, no translucent background, and the label must not truncate at 200 % text or in long translations (Layout gate). Fall back gracefully when the permission is denied: offer typing an address instead. |
| Don't rely on passwords alone | Offer **passkeys (WebAuthn)** first. Keep passwords only with 2FA (TOTP/WebAuthn as the second factor; SMS as a last resort). Re-authenticate sensitive actions with a platform authenticator (`userVerification: "required"`). |
| Keychain / no plain text | Web analogue: never store tokens, passwords or personal data in `localStorage`/`sessionStorage`/IndexedDB in plain form. Use **HttpOnly, Secure, SameSite** cookies for sessions. Hash passwords server-side (argon2/bcrypt). Secrets never go in client bundles or in URLs. |
| No custom auth schemes | Use standard OAuth/OIDC, passkeys, Sign in with Apple (JS SDK) and correct `autocomplete` attributes (`username`, `current-password`, `new-password`, `one-time-code`, `webauthn`) so password managers and autofill work. No home-made crypto or login flows. |
| macOS: don't assume who is signed in | On shared devices, show the signed-in account clearly, and make switching and signing out obvious. Don't cache another person's data across sessions. |
| visionOS: private gaze / blank camera | No analytics on hover/cursor paths for sensitive UI. Treat camera as optional: always offer "upload a photo" as an alternative to a live camera capture. |

Field-note cross-links:
- `field-notes/components.md` § Consent / connect screen (OAuth/MCP consent) **is itself the grant
  dialog**, the counterpart of the *system alert*, not a pre-alert screen. So its "Allow" pill + text
  "Cancel" is **consistent** with the HIG: the alert has Allow and Don't Allow. The pre-alert
  one-button rule applies only to a screen shown **before** a browser/system prompt.
- `field-notes/principles.md` §14–15 (nothing covers a consent flow; consent fits in `100dvh`, no
  scrolling to approve) are **confirmed in spirit** by "never exploit people tapping without
  reading".
- `hig/foundations/inclusion.md`: asking for personal data (gender, family) → ask only if needed,
  with a stated reason. This page gives the general rule.
- `hig/foundations/immersive-experiences.md` and `hig/getting-started/designing-for-games.md` already
  say "ask in context"; this page is the source rule.

## Checklist
- [ ] Every permission request is triggered by a user action on the feature that needs it. Nothing is requested on load unless the product can't work without it.
- [ ] Each request asks for the narrowest scope. There is no request for data the feature doesn't use.
- [ ] The reason is shown at the trigger: one short, complete, active sentence with a period, never "for a better experience".
- [ ] Any pre-permission screen has exactly **one** button ("Continue"/"Next") that opens the real prompt: no Allow wording, no Cancel/Close, no approval-styled button.
- [ ] No fake/imitation prompts, prompt screenshots, or arrows/highlights pointing at Allow.
- [ ] Tracking consent: no incentives, no cookie wall, no trackers fired before consent. A legal consent screen is fine.
- [ ] Denial is handled gracefully, with a manual alternative (type an address, upload a file).
- [ ] Passkeys offered; passwords only with 2FA; correct `autocomplete` tokens; no secrets in web storage, URLs or bundles.
- [ ] Location button (if any): standard glyph, fixed title, contrast ≥ 4.5:1, opaque, no truncation at 200 % or in translations.
- [ ] A plain-language data-use explanation is linkable from every permission/consent point.

## Related (ingestion status)
Entering data (✓), Managing accounts (✓), Managing notifications (✓), Onboarding (✓), Sign in with Apple (✓ `technologies/sign-in-with-apple.md`), Eyes (✓), Gestures (✓ `inputs/gestures.md`: hand-data permission for visionOS custom gestures), SharePlay (✓ `technologies/shareplay.md`),
Alerts (✓ `components/presentation/alerts.md`). Layout (✓ CRITICAL: text must fit at all sizes), Accessibility (✓),
Inclusion (✓), Immersive experiences (✓).
