# Managing accounts
Source: https://developer.apple.com/design/human-interface-guidelines/managing-accounts · Section: Patterns · Supported platforms: all six on the platform strip (specific guidance for tvOS and watchOS; the TV-provider rules apply to TV apps) · Ingested: 2026-09-28 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 6 screenshots (dark-mode page, hero → Developer documentation) were compared with the fetched text line by line: everything they show matches, including the three coloured asides (Important, Developer note, Note); the six screenshots are contiguous. **The last two developer-doc links and the Videos were read from the fetch only.** The page has no text inside images and no videos. Only the page chrome is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
Don't ask for an account unless the core functionality needs one; when you do, **delay it as long as possible**, explain why, prefer **Sign in with Apple or passkeys** over passwords, name the real authentication method, and **let people delete the account (not just deactivate it) in a clear, consistent, honest flow**.

## Rules

### Framing (intro)
- **must** **Require an account only if the core functionality needs it**; otherwise let people use the app or game without one.
- If an account is required, consider **Sign in with Apple**: a consistent, trustworthy sign-in, and no need to remember several accounts and methods (Sign in with Apple page: not yet ingested).
- An account is a convenient way to reach content and track personal details, **when it doesn't create an unnecessary barrier**.

### Best practices
- **should** **Explain the benefits of creating an account and how to sign up.** If an account is required, write a **brief, friendly** description of why and what it gives, and show it **in the sign-in view**.
- **should** **Delay sign-in for as long as possible.**
  - People often abandon apps that force sign-in before anything useful.
  - Let them get a sense of the app first, before asking for a commitment. Example: a shopping app lets people browse freely and asks for sign-in only when they're ready to **buy**.
- **should** **If you don't use Sign in with Apple in an iOS, iPadOS, macOS or visionOS app, prefer a passkey.**
  - Passkeys simplify account creation and authentication and remove the need to create or type passwords: people just give a **user name** to create an account or sign in.
  - If passwords must stay, **add two-factor authentication** (developer docs: *Supporting passkeys*; *Securing Logins with iCloud Keychain Verification Codes*).
- **must** **Always identify the authentication method you offer.** Example: a Face ID button says **"Sign In with Face ID"**, not a generic "Sign In".
- **must** **Refer only to methods that are available in the current context.** Example: never mention Face ID on a device without it; check the device's capabilities and use the right term (`LABiometryType`).
- **should not** **Offer an app-specific setting for opting in to biometric authentication** (in general): people enable biometrics at the **system level**, so an in-app switch is redundant and confusing.
- **should not** **Use the word "passcode" for account authentication.** A passcode unlocks the device or authenticates Apple services; using the word may make people think they're being asked to reuse their device passcode.

### Deleting accounts
- **must** **If people can create an account in the app or game, they must also be able to delete it, not merely deactivate it.**
  - Understand and comply with your region's **legal requirements** on account deletion and the **right to be forgotten**.
  - **Important (aside):** if the law **compels** you to keep accounts or information (for example digital health records) or to follow a **specific deletion process**, **describe the situation clearly** so people understand what you must keep and what process applies.
- **must** **Provide a clear way to start deletion inside the app or game.**
  - If deletion can't be done in the app, **provide a direct link to the web page** where it can. Make the link **easy to find**: don't bury it in the Privacy Policy or Terms of Service.
  - **Developer note (aside):** if the account was created with **Sign in with Apple**, **revoke the associated tokens** on deletion (*Token revocation*).
- **should** **Keep the deletion experience consistent** between the app/game and the website: no version longer or more complicated than the other.
- **may** **Let people schedule deletion for the future**: they may want to use remaining services or wait until a subscription renews. If you offer scheduling, **also offer immediate deletion**.
- **must** **Say when deletion will complete, and notify people when it has finished.** Full deletion can take a while, so keep them informed of the status so they know what to expect.
- **should** **If you support in-app purchases, explain how billing and cancellation work on deletion.**
  - Auto-renewable subscription **billing continues through Apple until the person cancels**, whether or not they delete the account.
  - After deleting, people must **cancel the subscription or request a refund**.
  - Also give information on how to **cancel subscriptions and manage purchases** (Apple links Apple In-App Purchase › Helping people manage their subscriptions and Providing help).
  - **Note (aside):** even if people didn't buy the subscription in your app, you still need to support account deletion.

### TV provider accounts
- Many TV providers let people sign in **at the system level**, so there is no per-app authentication. If your TV provider app requires sign-in, use **TV Provider Authentication** for the most efficient onboarding.
- **should not** **Show a sign-out option when people are signed in at the system level.** If the app must include one, invoking it should **tell people to go to Settings › TV Provider** to sign out.
- **must not** **Tell people to sign out by changing privacy controls.** The TV provider controls under Settings › Privacy manage **which apps can access** the TV provider account; they are not a sign-out mechanism.

### Platform considerations
- **iOS, iPadOS, macOS, visionOS:** no additional considerations.
- **tvOS:**
  - Most people use a remote, not a keyboard, so **ask for the minimum information**.
  - **should** **Prefer letting people sign up or authenticate on another device.** With the app's **associated domains** configured, Apple TV can work with other devices to safely suggest sign-in credentials, including Sign in with Apple.
  - **should** **When people use a shared account, don't ask them to pick a profile every time they become the current user.** In **tvOS 16 and later** an app can share its credentials with all users while keeping **each person's profile and data separate**, and can automatically use the **current user's** profile (`kSecUseUserIndependentKeychain`, *User Management Entitlement*).
  - **should** **Minimise data entry.** If more than a little information is needed, ask people to **visit a website from another device**. For an email address, show the **email keyboard screen**, which lists recently entered addresses.
- **watchOS:** use **iCloud synchronisation** to give access to the **Keychain**, so people can autofill user names and passwords and keep app settings.

## Specs & values
The page has **no sizes, colours or numeric values**. Its concrete facts:

| Item | Value |
|---|---|
| When to require an account | only when core functionality needs it |
| When to ask for sign-in | as late as possible (e.g. at purchase) |
| Preferred methods | Sign in with Apple · passkey · (password only with two-factor authentication) |
| Button wording | "Sign In with Face ID" (name the method), never a bare "Sign In" when a specific method is offered |
| Terminology | don't say "passcode" for account authentication |
| In-app biometric opt-in setting | avoid (system-level setting) |
| Account deletion | must be deletable (not just deactivated); in app or via a direct, easy-to-find link; consistent across app and web; optional scheduling **plus** immediate option; state completion time; notify when done |
| Legal | comply with regional deletion rules and the right to be forgotten; explain any legally required retention |
| Sign in with Apple accounts | revoke tokens on deletion |
| Subscriptions on deletion | billing continues through Apple until cancelled; cancel or request a refund after deleting; deletion required even if the purchase wasn't in-app |
| TV provider | TV Provider Authentication; no in-app sign-out when signed in at system level (point to Settings › TV Provider); never point to Privacy settings |
| tvOS | minimum info; other-device sign-in via associated domains; shared-account per-user profiles (tvOS 16+); email keyboard screen with recent addresses |
| watchOS | iCloud Keychain sync for autofill and settings |
| Developer docs | *Supporting passkeys* · *Securing Logins with iCloud Keychain Verification Codes* · `LABiometryType` · Token revocation · *Configuring an associated domain* · `kSecUseUserIndependentKeychain` · *User Management Entitlement* |
| Related HIG pages | Onboarding ✓ · Sign in with Apple (not yet ingested) |
| Videos | *What's new in passkeys* (WWDC25 279) · *What's new in device management* (WWDC24 10143) |

## Visual notes (from screenshots)
- **Hero:** an orange grid card with a large person glyph (head and shoulders) inside a ring, over construction circles.
- **Asides (from screenshot):**
  - **Important** (Deleting accounts): a box with an **amber border and tinted fill** and an amber title, about legal retention such as digital health records.
  - **Developer note**: a **grey rounded box** about revoking Sign in with Apple tokens.
  - **Note**: a grey rounded box saying deletion must be supported even if the subscription wasn't bought in the app.
  - Together they show that only the legal-retention aside gets a warning colour; the other two are neutral.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Managing accounts · Best practices · Deleting accounts · TV provider accounts · Platform considerations · Resources (**no Change log**).
- The page has **no ✗/✓ pairs, no comparison images and no videos** (fetch script run; catalog IDs unchanged, total 99). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above. Every heading, bold lead-in, sentence, aside and link in screenshots 63–68 is in the fetched text.

## Web translation
Sign-in and account lifecycle for web apps and PWAs. Combine with `hig/foundations/privacy.md` (passkeys, no secrets in web storage, pre-permission rules), `hig/patterns/entering-data.md` (autocomplete, password fields) and `hig/foundations/writing.md`.

| HIG rule | Web implementation |
|---|---|
| Account only if core function needs it | Let people browse, try or check out as a **guest**; offer "Create an account" as an optional convenience with its benefit, never a wall in front of content. |
| Explain benefits and how to sign up | One or two friendly sentences in the sign-in/sign-up view ("Save your projects and pick up on any device."), no jargon, no "we" (`writing.md`). |
| Delay sign-in | Ask at the moment of commitment (purchase, save, publish, comment); preserve what the person did as a guest (cart, draft) and carry it into the new account; return them to where they were after signing in. |
| Sign in with Apple / passkeys first | Offer **passkeys (WebAuthn)** and federated sign-in (Sign in with Apple JS, Google, OAuth/OIDC) before passwords; passkey flow = username (or discoverable credential "Sign in with a passkey") and the platform prompt. Use `autocomplete="username webauthn"` for conditional UI. Never invent custom auth (`privacy.md`). |
| Passwords need 2FA | If passwords remain: TOTP/WebAuthn as second factor (SMS only as a fallback); `autocomplete="current-password"`/`new-password`/`one-time-code`; allow paste and password managers (`entering-data.md`); never prefill a password. |
| Identify the method | Button text names the method: **"Continue with Apple"**, **"Sign in with a passkey"**, "Sign in with Google", "Sign in with email link". Not a bare "Sign in" for a specific method; the same words in the button, the prompt and the help. |
| Only mention methods that exist | Feature-detect before showing a method: `window.PublicKeyCredential` and `PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()` / `isConditionalMediationAvailable()`. Don't say "Face ID" or "Touch ID" on the web unless you know the platform; say **"passkey"** or "your device's screen lock". |
| No in-app biometric opt-in | Don't add "Enable Face ID/fingerprint login" toggles; passkeys and the OS handle it. A "Remember this device" option (session length) is a different, legitimate setting. |
| Don't say "passcode" | Use "password", "PIN" (only if it is one), "verification code" (OTP) or "passkey", accurately and consistently. |
| Deleting accounts | Settings › Account has **Delete account** (not only "Deactivate"): explain what is deleted and what is kept (legal retention such as invoices/health records, described in plain words), show a confirmation with the consequence (`feedback.md`: unexpected, irreversible loss → alertdialog), re-authenticate for safety. Support regional erasure rights (e.g. GDPR, KVKK). |
| Deletion in-app or a direct link | Put the entry point in account settings; if the flow lives on another page/portal, link straight to it and make it findable (footer "Delete account", help search); never bury it in the Privacy Policy or Terms. |
| Same flow on every surface | Web, iOS/Android app and email/support path share one flow and the same number of steps. |
| Schedule + immediate | Offer "Delete now" and "Delete on <renewal date>" (e.g. after the subscription period); default to the option that loses least data; allow cancelling a scheduled deletion until it runs (state it clearly). |
| Status and notification | Show the timeline ("Your account will be deleted within 30 days" only if that is the real policy, CONV example), a pending state in the UI, and an email/notification when finished (`feedback.md` delivery ladder: this is a significant completion). |
| Subscriptions and billing | Before deleting, show active subscriptions and what happens: billing continues via the store/processor until cancelled; link to cancel/manage/refund; support deletion even for subscriptions bought elsewhere. |
| Sign in with Apple accounts | On deletion, call the provider's **token revocation** endpoint and delete stored refresh tokens; the same for other OAuth providers. |
| TV provider / SSO | If the person is signed in through system-wide or company SSO, don't show a fake local "Sign out"; explain where the session is managed ("Signed in through your organisation. Sign out from your account provider.") and never point to privacy/permission settings as sign-out. |
| tvOS: minimum entry, other device | For TV/kiosk/10-foot web apps use the **OAuth device authorization flow** (show a short code and QR, complete on a phone), ask for as little as possible, offer recently used emails, and avoid making people re-pick a profile on a shared login. |
| watchOS: synced credentials | For glanceable/wearable surfaces rely on the platform password manager/passkey sync rather than typing; keep settings synced through the account. |

Field-note cross-links:
- `hig/foundations/privacy.md`: passkeys, no plain-text credentials, Password AutoFill, and the "don't rely on passwords alone" rule are **confirmed** and completed here (guest-first, deletion, wording).
- `hig/patterns/entering-data.md`: never prepopulate a password; secure fields; minimise data entry (tvOS rule).
- `hig/patterns/feedback.md` (CRITICAL): deletion confirmation, deletion-in-progress and completion notices are ladder items; the "unexpected, irreversible loss" alert is exactly the delete-account dialog.
- `hig/foundations/writing.md`: button names for methods, no "passcode", no "we".
- `hig/patterns/launching.md`: don't gate the first screen behind sign-in; restore state after sign-in.
- `field-notes/components.md` § Wizard/Consent screen: sign-in as a step in a flow; one filled button; consent and account creation stay separate and explicit.
- No conflict with a field note.

## Checklist
- [ ] The app is usable without an account wherever the core function allows; sign-in is requested at the moment of commitment, with a one-line benefit.
- [ ] Guest work is carried into the new account; people return to where they were after signing in.
- [ ] Passkeys or federated sign-in come first; passwords have a second factor, allow paste and password managers and are never prefilled.
- [ ] Buttons name the real method ("Continue with Apple", "Sign in with a passkey"); methods are feature-detected; no "Face ID" wording where it isn't known; no "passcode".
- [ ] There is no in-app biometric opt-in switch.
- [ ] **Delete account** exists (not only deactivate), is easy to find (in-app or a direct link), and is consistent across web and apps.
- [ ] Deletion explains what is removed and any legally required retention; offers scheduled and immediate options; states timing; notifies on completion; re-authenticates first.
- [ ] Active subscriptions are shown with how billing/cancellation works; deletion works even when the purchase came from elsewhere; provider tokens are revoked.
- [ ] SSO/system-level sessions don't show a misleading local sign-out; TV/kiosk surfaces use a device flow and minimal input.

## Related
- Ingested: Privacy (✓), Entering data (✓), Feedback (✓ CRITICAL), Writing (✓), Launching (✓), Designing for tvOS (✓).
- Ingested since: Managing notifications (✓). Onboarding (✓ ingested). Not yet ingested: **Sign in with Apple**, Apple In-App Purchase, Settings (✓ ingested). Remotes (✓ `inputs/remotes.md`). Text fields (✓ `components/selection-and-input/text-fields.md`: secure fields, validation timing).
- Developer docs: listed in Specs & values. Videos: *What's new in passkeys* (WWDC25 279), *What's new in device management* (WWDC24 10143).
