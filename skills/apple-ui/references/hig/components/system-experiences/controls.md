# Controls
Source: https://developer.apple.com/design/human-interface-guidelines/controls · Section: Components › System experiences · Supported platforms: **iOS, iPadOS, macOS** ("No additional considerations for iOS, iPadOS, or macOS. Not supported in watchOS, tvOS, or visionOS"; the phone, tablet and Mac icons are dark on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **June 10, 2024** (new page; the only change-log row, visible in the last screenshot). One DocC fetch, read in full. **7 screenshots (hero → the page footer) were compared with the fetched text and image alt text line by line; they cover the whole page.** Everything visible matches the fetch except the items under **Mismatches** below. **Read from the fetch only (not in screenshots):** the alt text of every image and the dark variants (a few dark variants were also opened from the catalog); the page has **no videos** and **no numbers**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has one framing section, Anatomy, 12 best-practice rules and a short locked-camera section.

## In one line
A control is a **button or toggle exposed outside the app** (Control Center, the Lock Screen, the Action button). **Buttons** run an action, open a specific place in the app, or start a **camera experience on a locked device**; **toggles** flip between **two states**. Offer only actions that **pay off without opening the app**, keep the **state always accurate** (update on interaction, on completion and by push), pick a **symbol that works alone** (one for each toggle state), **animate state changes**, choose a **brand tint** for the on state, **ask for configuration when the control is added**, give **verb-based hint text** for the Action button, add **placeholders**, **redact sensitive text when locked** and **require authentication for security actions**. Native iOS/iPadOS/macOS system feature; on the web the transferable idea is the **quick-toggle / quick-action surface**.

## Rules

### Framing (intro)
- A control is **a button or toggle** giving quick access to an app's features **from other areas of the system**.
- **Control buttons** do one of three things: **perform an action**, **link to a specific area** of the app, or **launch a camera experience on a locked device**.
- **Control toggles** switch **between two states**, such as on and off.
- People add controls: **to Control Center** by pressing and holding an empty area, **to the Lock Screen** by customising it, **to the Action button** in the Settings app.

### Anatomy
- A control has **a symbol image, a title and, optionally, a value**.
  - **Symbol:** shows what the control does; an **SF Symbol or a custom symbol**.
  - **Title:** what the control **relates to** (e.g. the name of a light in a room).
  - **Value:** the **state** of the control (e.g. whether the light is on or off).
- **Where things show:**
  - **Control Center:** the symbol, and at **larger sizes** the title and value.
  - **Lock Screen:** the **symbol only**.
  - **iPhone with a control on the Action button:** press and hold shows the **symbol in the Dynamic Island plus its value** (if present).

### Best practices
- **should** **Offer controls for actions that give the most benefit without launching the app.** Example: starting a **Live Activity** from a control informs someone about progress without opening the app (see Live Activities).
- **should** **Update controls** **when someone interacts with them, when an action completes, or remotely with a push notification**, so the contents **reflect the real state** and **show when an action is still in progress**.
- **should** **Choose a descriptive symbol that suggests the control's behaviour.** Depending on where it is added the **title and value may not show**, so the symbol must carry enough meaning. For **toggles, provide a symbol for both the on and off states**; example: `door.garage.open` and `door.garage.closed` for a garage-door control.
- **should** **Use symbol animations to highlight state changes.** For **toggles** animate the transition **between on and off**. For **buttons whose action takes time**, animate **indefinitely while it runs** and **stop when it completes** (developer APIs `SymbolEffect`, Symbols).
- **should** **Select a tint colour that works with the app's brand.** The system applies it to a **toggle's symbol in its on state**, and, when the action is done from the Action button, to the **value and symbol in the Dynamic Island** (see Branding).
- **should** **Help people give the system the extra information it needs.** If a control needs **configuration** (e.g. **which light** in a house to switch), **prompt for it when the control is first added**; people can **reconfigure at any time** (developer API `promptsForUserConfiguration()`).
- **should** **Provide hint text for the Action button.** When the Action button is pressed, the system shows **hint text** explaining what happens on **press and hold**; on press-and-hold it **performs the configured action**. **Use verbs** to write the hint (developer API `controlWidgetActionHint(_:)`).
- **should** **Include a placeholder if the title or value can vary.** It tells people what the control does when title and value are **situational**; the system shows it in the **controls gallery** (Control Center or Lock Screen) after a person picks the control, and **before it is assigned to the Action button**.
- **should** **Hide sensitive information when the device is locked.** Consider having the system **redact the title and value** to protect personal or security-related information. You can also ask the system to **redact the symbol state**; if you do, it redacts the title and value **and shows the symbol in its off state**.
- **must** **Require authentication for actions that affect security.** Example: require people to **unlock the device** to lock/unlock their house door or start their car (developer API `IntentAuthenticationPolicy`).

### Camera experiences on a locked device
- **iOS 18 and later:** an app that supports camera capture can offer **a control that opens straight into its camera experience while the device is locked** (developer API `LockedCameraCapture`).
- **must** For **any task beyond capture**, the person **must authenticate and unlock** the device to finish it in the app.
- **should** **Use the same camera UI in the app and the locked camera experience**: it uses people's familiarity, and the **hand-off is seamless** when someone captures and then taps a button for more (post to a social network, edit a photo).
- **should** **Provide instructions for adding the control** that launches the camera experience.

### Platform considerations
- **iOS, iPadOS, macOS:** no additional considerations. **watchOS, tvOS, visionOS:** not supported.

## Specs & values
The page **gives no sizes, spacings, durations or counts**.

| Item | Value |
|---|---|
| Anatomy | symbol image + title + optional value |
| Control types | **button** (action · link into the app · locked-camera launch) and **toggle** (two states) |
| Where added | Control Center (press and hold an empty area) · Lock Screen (customise) · Action button (Settings) |
| What shows where | Control Center: symbol, plus title/value at larger sizes · Lock Screen: symbol only · Action button: symbol + value in the Dynamic Island |
| Toggle symbols | one symbol per state (example pair `door.garage.open` / `door.garage.closed`) |
| Tint | applied to the toggle symbol in the **on** state and to the Dynamic Island symbol/value for Action-button use |
| Locked-device redaction | title and value redacted; optionally symbol shown in the **off** state |
| Camera on a locked device | iOS 18+, `LockedCameraCapture`; capture only, everything else needs unlock |
| Developer APIs named | `SymbolEffect`, Symbols, `promptsForUserConfiguration()`, `controlWidgetActionHint(_:)`, `IntentAuthenticationPolicy`, `LockedCameraCapture`, WidgetKit |
| SF Symbol names named | `door.garage.open`, `door.garage.closed` |
| Apple's Related list | Widgets, Action button (neither ingested yet) |
| Videos | none |
| Change log | June 10, 2024: new page |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a red-orange gradient card with a **large translucent rounded panel** of Control Center-style controls in a light peach tone: **three large circles** (an **airplane**, a **concentric-arc glyph** in the top right, a **Wi-Fi** symbol at the bottom left) and **four small circles** (cellular **bars**, **Bluetooth**, a **link/chain** glyph, a **globe-like network** glyph). The alt text names only "the Airplane Mode toggle, the Wi-Fi toggle and the AirPlay button".
- **Anatomy diagram (screenshot 2):** a **pill-shaped control** on a grey-violet textured backdrop: a **moon symbol in a circle** at the leading end and two text lines, **"Title"** (bold) over **"Detail"** (lighter). Callout lines outside the pill **(from screenshot)**: **Title** (top), **Symbol image** (left), **Value** (bottom, pointing to the second text line, which the pill itself labels "Detail"). The alt text only says a diagram of the placement of the symbol image, the title and the value.
- **Three phones (screenshots 2–3)**, all showing the **Silent mode** control **on**: (1) **Control Center**: top bar with "+" and a power glyph, signal bars and "100%" battery; a connectivity group (airplane, blue Wi-Fi, blue hotspot-style circle, four small status glyphs), a **media tile** ("Track / Artist", checkerboard artwork, previous/pause/next), and below them a **white circle with a red bell-slash symbol** (Silent), rotation-lock, brightness and volume sliders and a "Focus" pill **(from screenshot)**; (2) **Lock Screen**, bottom only: a **flashlight-style control at the left** and the **white circle with the red bell-slash at the right**, the home indicator between; (3) **Dynamic Island** at 9:41: a **red bell-slash on the left** and the **red word "Silent" on the right** (also Wi-Fi and battery at the edges), above a Home Screen grid (FaceTime, Calendar, Photos, Camera, Mail, Notes, Reminders, Clock, News, TV, Games, App Store, …). The "on" toggle is a **white disc with a red symbol**.
- **Tint pair (screenshot 4):** **off**: a **plain white light bulb inside a translucent grey circle** (no colour); **on**: a **yellow bulb with rays inside a solid white circle**. So the on state changes **the disc (white) and the symbol (tinted)**, and the symbol itself changes shape (rays appear) **(from screenshot)**.
- **Configuration example (screenshot 4, bottom):** a pill with the **moon symbol** and the text **"Option"** followed by an **up-down chevron** (a pop-up-button-style value), on the same textured backdrop; the alt says a control whose option can be set to a value the person chooses. The word "Option" is **(from screenshot)**.
- **Action-button hint text (screenshot 5):** two iPhone Home Screens, the hint at the **leading edge** (where the physical button is) with a **short white vertical bar**: left **"Hold for Silent"** with the Dynamic Island showing a **white bell and "Ring"**, right **"Hold for Ring"** with the Island showing the **red bell-slash and "Silent"**. So **the hint names the action that will happen; the Island shows the current state** (my reading of the two pictures) **(from screenshot: the Island texts "Ring" and "Silent" are not in the alt)**. The hint text overlaps the first icon labels, so it sits **on top of** the Home Screen rather than in a reserved area.
- **Redaction pair (screenshots 5–6):** a **medium-size toggle**: the plain version is a **white pill** with a **yellow bulb** and the lines **"Title"** / **"Detail"**; the redacted version is a **dark pill** with a **grey bulb in a darker circle** and **two grey placeholder bars** instead of text (the bulb shows in its off appearance). In the dark-mode catalog image the redacted pill is a translucent grey pill with a white bulb and two lighter bars.
- **Page chrome (from screenshot):** TOC = Controls · Anatomy · Best practices · Camera experiences on a locked device · Platform considerations · Resources · Change log; side navigation now shows the whole **Components** tree with **System experiences** opened (App Shortcuts, Complications ringed as browser focus, **Controls** bold, Live Activities, Notifications, Snippets, Status bars, Top Shelf, Watch faces, Widgets); the last screenshot shows Related (Widgets, Action button), Developer documentation (LockedCameraCapture, WidgetKit), the Change log table and the start of Apple's footer (ignored).
- **Mismatches / notes:**
  1. **Hero:** the alt names an **AirPlay** button; the top-right large circle shows **concentric arcs around a dot**, which I read as an **AirDrop-style** glyph (not an AirPlay triangle-with-arcs). The alt also names only three of the seven controls drawn. The hero itself is **not** in the catalog.
  2. **Anatomy diagram:** the callout says **"Value"** but the pill's own text says **"Detail"**: same thing, two names.
  3. The **Action-button tiles** carry file names "text-on"/"text-off" in the source, but the **left one says "Hold for Silent"** (matches the alt and the fetch order).

## Visual examples (catalog)
`visual-examples` gains **4 neutral sets** (no do/don't pairs): **controls-01** three places a toggle shows (Control Center, Lock Screen, Dynamic Island) · **controls-02** tint (nontinted off vs tinted on) · **controls-03** Action-button hint text ("Hold for Silent" / "Hold for Ring") · **controls-04** redaction (all information vs hidden on a locked device). All have light and dark variants. The hero, the anatomy diagram and the configuration image are not in the catalog rows. Catalog total: **183** (was 179); existing IDs unchanged.

## Web translation
Controls are an **OS integration**; a web app can't add tiles to Control Center, the Lock Screen or the Action button, and **must not fake those surfaces**. The reusable ideas: a **compact quick-action/toggle surface** whose **state is always true**, with a symbol that works alone, a brand tint for "on", **redaction when the session is locked or idle**, and **step-up authentication** for anything that affects security. For real OS reach use the **manifest `shortcuts`** (`home-screen-quick-actions.md`) and native shells.

| HIG rule | Web implementation |
|---|---|
| Button = action, link into the app, or camera launch; toggle = two states | **Button** = `<button>` (does something) or `<a href>` (goes somewhere: a deep link); **toggle** = `<button role="switch" aria-checked>` or a checkbox styled as a switch (`toggles.md`). Never use a switch for a **one-shot action**. |
| Only actions that pay off without opening the app | A **quick-actions strip / command palette / status bar tile** carries the **frequent, self-contained** actions (mute, pause, lock, start timer); long flows open the full screen. Same list on every entry point (`app-shortcuts.md`). |
| State must reflect reality; update on interaction, completion, remotely | The control **reads from the source of truth**, not from local guesses: update **optimistically on click**, **reconcile when the server confirms**, and **push remote changes** (SSE/WebSocket/Web Push) so another device's change shows; while pending show an **in-progress state** (`aria-busy="true"`, spinner or animated symbol) and **revert with a message on failure** (`feedback.md`). |
| Symbol that works without title/value; a symbol per toggle state | **Icon-only controls are named** (`aria-label` = title + state or use `aria-pressed`/`aria-checked`); **swap the glyph per state** (lock / unlock, volume / muted, `door.garage.open` ↔ `closed` idea) instead of only recolouring; icons are **Lucide/Phosphor/Ionicons**, never SF Symbols artwork (`sf-symbols.md`). State is **also** available as text (value) where space allows. |
| Animate state changes; loop while an action runs, stop when done | A short **symbol transition** (cross-fade/scale/draw, ≈ 150–300 ms, CONV) on toggle; for long actions a **looping indicator that stops on completion**; respect **`prefers-reduced-motion`** (swap to an instant change). Symbol-effect recipes: `tokens/apple-symbol-effects.json` (single source). |
| Brand tint for the on state | **On** = tinted symbol on a light/solid disc or filled track using the **brand accent**; **off** = neutral surface with a neutral symbol. Contrast **≥ 3:1** for the symbol vs its disc and for the on vs off difference, and the **state is not only colour** (glyph shape + text; Color gate). See `branding.md`. |
| Ask for configuration when first added | An "add to quick actions" flow opens a **one-step chooser** (which light, which project) **at add time**, saves it, and lets people **edit later** from a menu on the control; never fail silently with an unconfigured tile. |
| Action-button hint text with verbs | The web analogue is a **tooltip/label that says what will happen**, verb first ("Mute", "Turn off", "Start timer"), **describing the next state**, not the current one; keep a visible label for touch (no hover-only), plus `aria-label`. Keyboard hint (`Space` / `Enter`) shown in the tooltip on desktop. |
| Placeholder for varying titles/values | A **skeleton or generic title** ("Light", "—") while data loads or before configuration; the same shape and size as the final control (no layout shift); shown in the **picker gallery** as a preview. |
| Redact sensitive info when locked | On **idle/locked/shared-screen** states **mask the title and value** (bars instead of text, off-state glyph) and **restore after unlock/re-auth**: implement a **privacy/lock mode** (idle timer, `visibilitychange`, explicit "lock screen" action), and never expose the values through **tab titles, notifications previews or `aria-live` regions** while locked. Same principle as `complications.md` (Always-On). |
| Require authentication for security-affecting actions | **Step-up authentication** before actions like unlock, transfer, delete-all, start vehicle: **re-enter a passkey/WebAuthn user verification** or password, with a short-lived elevation; **no security action from a cached session alone** (`managing-accounts.md`). Log the action. |
| Camera experience on a locked device: capture only, same UI, unlock for the rest | A **quick-capture** entry (PWA shortcut to `/capture`) that **captures without full sign-in** but **queues the item locally** and requires sign-in for anything beyond saving (share, edit, browse); use the **same camera component** as the main app so the hand-off doesn't change UI; ask camera permission the first time and **explain how to add the shortcut** (install prompt copy, `home-screen-quick-actions.md`). |
| Provide instructions for adding the control | A **one-time, dismissible tip** near the feature ("Add to home screen for one-tap capture") with the exact steps for the platform (`offering-help.md`); no repeated nags. |
| Hit region, focus | Each control **≥ 44 px** on touch (24 px minimum on fine pointers), visible **focus ring**, `Space`/`Enter` activate; a **group** of controls uses the roving-tabindex pattern only when it is a single composite widget (Buttons GATE). |
| Native-only surface | Control Center, Lock Screen and the Action button can't be reached from the web; **mention in docs which native surfaces exist** (native app: WidgetKit `ControlWidget`) and don't draw fake system chrome. |

Field-note cross-links:
- `hig/components/system-experiences/app-shortcuts.md` (✓) and `complications.md` (✓): the sibling **glance / quick-launch** surfaces (shortcuts = phrases and Spotlight, complications = tiles); all three lean on **deep links**, **fresh state** and **privacy on shared displays**. Consistent.
- `hig/components/selection-and-input/toggles.md` (✓): switch semantics and the **iOS switch colours** (green on; here the on tint is **the app's brand**); `hig/components/menus/buttons.md` (✓ CRITICAL) and **Buttons GATE**: names, hit regions; `hig/foundations/sf-symbols.md` (✓) and `tokens/apple-symbol-effects.json`: symbol animations; `hig/foundations/branding.md` (✓): tint; `hig/foundations/color.md` (✓ CRITICAL) and **Color gate**: state not by colour alone; `hig/foundations/privacy.md` (✓) and `hig/patterns/managing-accounts.md` (✓): redaction and authentication; `hig/patterns/feedback.md` (✓): in-progress and failure states; `hig/components/menus/home-screen-quick-actions.md` (✓): the web/PWA entry point.
- `field-notes/*`: no quick-toggle recipe; **no conflict**. (Field-note toggles/checkbox decision, 2026-09-29 in `toggles.md`: circle marks for mobile-style selection lists, square checkboxes for desktop forms; **not affected** here, controls are switches/buttons.)
- Not yet ingested (linked from this page): **Widgets**, **Action button**; also named in the text: Live Activities (now ✓ `live-activities.md`).

## Checklist
- [ ] Every quick control **does something useful without opening the app**; buttons vs toggles used for what they mean (action vs two-state).
- [ ] State is **read from the source of truth**, updates on interaction, on completion and remotely; pending and failed states are visible.
- [ ] The **symbol alone** conveys the action, **one symbol per toggle state**, and every icon-only control has an **accessible name and state**.
- [ ] State changes are **animated** (and instant under reduced motion); long actions show an **in-progress indicator that stops when done**.
- [ ] The **on state uses the brand tint** with **≥ 3:1** contrast and **is not colour-only**.
- [ ] Controls that need configuration **ask when added**, and can be **reconfigured**; a **placeholder** shows before that.
- [ ] Hint text is **verb-first and describes the next state**; touch has a visible label, not a hover-only tooltip.
- [ ] **Locked/idle/shared** states **mask** titles and values (and show the off glyph if asked); nothing leaks through tab titles, previews or live regions.
- [ ] **Security-affecting actions** need **step-up authentication**; quick capture **saves first, needs sign-in for everything else**.
- [ ] Hit regions **≥ 44 px** (24 px fine pointer), visible focus, keyboard operable; no fake OS chrome.

## Related
- Ingested: App Shortcuts (✓), Complications (✓), Toggles (✓), Buttons (✓ CRITICAL), SF Symbols (✓), Branding (✓), Color (✓ CRITICAL), Privacy (✓), Managing accounts (✓), Feedback (✓ CRITICAL), Home Screen quick actions (✓), Offering help (✓).
- Not yet ingested (linked from this page): **Widgets**, **Action button**; named in the text: Live Activities (now ✓ `live-activities.md`).
- Developer docs: `LockedCameraCapture`, WidgetKit (controls via `ControlWidget`), `SymbolEffect`, `promptsForUserConfiguration()`, `controlWidgetActionHint(_:)`, `IntentAuthenticationPolicy`.
