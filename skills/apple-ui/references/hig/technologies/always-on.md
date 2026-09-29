# Always On
Source: https://developer.apple.com/design/human-interface-guidelines/always-on · Section: Technologies · Supported platforms: **iOS and watchOS** (page data; the platform section says "No additional considerations for iOS or watchOS. **Not supported in iPadOS, macOS, tvOS, or visionOS**") · Ingested: 2026-09-29 · Apple last updated: **September 12, 2023** (new intro artwork; earlier row: **September 23, 2022**, guidance expanded to the Always On display on **iPhone 14 Pro and iPhone 14 Pro Max**). **Link-only ingestion: one DocC fetch, read in full (40 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)" and the Visual notes come from the alt text only. Not marked critical: no token file, checker or gate. The page has **no measurements**; it names **two devices** (iPhone 14 Pro / 14 Pro Max) and **five practices**.

## In one line
On devices with an **Always On display**, the system keeps showing an app's interface **dimmed and nearly still** when people stop interacting, giving **glanceable, low-power, privacy-preserving information**. **Redact sensitive data (bank balances, health data, personal details in notifications), keep the useful glanceable data (workout pace and heart rate, a flight arrival, a ride arrival), keep the important content legible and dim the rest, keep the layout stable (turn interactive controls into an unavailable look instead of removing them, update rarely and subtly), and wind motion down gently rather than freezing it.** People can turn Always On off entirely. On the web: **no Always On API**; the transferable ideas apply to **idle/locked/dimmed states, kiosks, dashboards, PWAs on a lock-screen-like surface, `prefers-color-scheme`/`prefers-reduced-motion`, and the Page Visibility and Screen Wake Lock APIs**.

## Rules

### Framing (intro)
- In the **Always On state** a device **keeps giving useful, glanceable information in a low-power, privacy-preserving way** by **dimming the display and minimising on-screen motion**. What appears **depends on the device**:
  - **iPhone 14 Pro and iPhone 14 Pro Max:** the **Lock Screen items (Widgets and Live Activities)** show when people **set the phone down face up and stop interacting**.
  - **Apple Watch:** when people **drop the wrist**, the system **dims the watch face** and **keeps showing the app's interface as long as the app is frontmost or running a background session**.
- **On both devices** the system **shows notifications while in Always On**, and **a tap on the display exits Always On and resumes interaction**.

### Best practices
- **must** **Hide sensitive information.** **Redact personal information** people wouldn't want casual observers to read, e.g. **bank balances or health data**. Also **hide personal information that might appear in a notification** (→ Notifications).
- **should** **Keep other personal information glanceable when it makes sense.** Examples: **pace and heart rate during a workout on Apple Watch**; **a flight-arrival update or a notification that a ride-share has arrived on iPhone**. **People who want nothing visible can turn Always On off.**
- **should** **Keep important content legible and dim nonessential content.** **Increase dimming on secondary text, images and colour fills** so the important information stands out. Example: a **to-do list app removes row backgrounds and dims each item's extra details to highlight the title**. With **rich images or large areas of colour**, **consider removing the images and using dimmed colours**.
- **should** **Maintain a consistent layout.** **Avoid distracting interface changes when Always On starts or ends and throughout.** Example: **when Always On begins, turn an interactive component into an unavailable look; don't just remove it.** Inside Always On, **make infrequent, subtle updates**: a **sports app** can **pause play-by-play updates and update the score only when it changes**. **Unnecessary changes are especially distracting on iPhone**, because it often lies **face up on a surface** where **motion is visible even when nobody is looking directly at it**.
- **should** **Transition motion gracefully to a resting state; don't stop it instantly.** **Finishing the current motion smoothly** signals the transition and **keeps people from thinking something went wrong**.

### Platform considerations
- **iOS, watchOS:** no additional considerations. **iPadOS, macOS, tvOS, visionOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings**. Its concrete content:

| Item | Value |
|---|---|
| Devices | **iPhone 14 Pro, iPhone 14 Pro Max** (Lock Screen items: Widgets, Live Activities, notifications); **Apple Watch** (app UI while frontmost or with a background session) |
| Trigger | iPhone: set down **face up** and stop interacting · Watch: **drop the wrist** |
| Display | **dimmed**, **minimal motion**, low power |
| Exit | **tap the display**; notifications still appear |
| Must hide | balances, health data, personal details in notifications |
| Keep glanceable (examples) | workout pace and heart rate · flight arrival · ride-share arrival · sports score |
| Dim | secondary text, images, colour fills; drop row backgrounds and large images |
| Layout | stable; controls become **unavailable-looking**, not removed; subtle, infrequent updates |
| Motion | wind down smoothly, don't stop abruptly |
| User control | people can turn Always On off |
| Developer docs | "Designing your app for the Always On state" (watchOS apps) |
| Videos (links only, not watched) | What's new in watchOS 8 (WWDC21 10002) · Build a workout app for Apple Watch (WWDC21 10009) · What's new in SwiftUI (WWDC21 10018) |
| Apple's Related list | Designing for watchOS (✓) |
| Change log | Sep 12 2023: intro artwork updated · Sep 23 2022: guidance expanded to iPhone 14 Pro / Pro Max |

## Visual notes (link-only: from alt text)
- **Hero:** a sketch of an **Apple Watch containing a running person**, suggesting an Always On display, over grid lines, **tinted blue** (alt). Light and dark variants exist.
- **No other images, videos, tables or callouts** on the page.
- **Mismatches / notes:**
  1. **The intro's iPhone scope is two models** (iPhone 14 Pro and Pro Max), but the **platform section says "no additional considerations for iOS"**; later iPhones with the feature are **not named on the page**.
  2. **"Widgets and Live Activities" are presented as the iPhone Lock Screen items**; the page gives **no rules for them** and leaves them to their own pages (`widgets.md`, `live-activities.md`).
  3. **The page has no dimming values, contrast ratios or refresh limits**; those live in the developer documentation and in the widget/Live Activity notes (no animation, high-contrast grays, no thin lines).
  4. **"Hide sensitive information" is stated as crucial (must) while the next rule ("keep other personal information glanceable when it makes sense") depends on context**; the boundary between the two is **left to the designer**.
- **Catalog:** the script found **0 comparisons** (one hero image). Catalog stays **220**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
The web has **no Always On API**: a page can't tell that a phone is face up or a watch wrist is down, and it can't request the dimmed state. What transfers is **designing for a low-attention, low-power, possibly observed state** on **dashboards, kiosks, digital signage, timers, clocks, PWAs used as ambient displays and shared screens**. Statements about browser APIs are background knowledge, not from the page.

| HIG rule | Web implementation |
|---|---|
| Hide sensitive information | An **"idle / privacy" state**: after **inactivity (CONV ~30–60 s)** or when the **document is hidden** (`visibilitychange`), **mask balances, health data, personal details and message previews** (bars or "•••", a lock glyph), and **restore on user interaction**; expose a **"Hide sensitive values on idle" setting**. **Notification text** follows `notifications.md` (generic body when hidden). |
| Keep some personal info glanceable when sensible | **Let people choose which values stay visible** (a workout pace or a delivery ETA) in idle mode; **default to hidden for money and health**; offer **off entirely**. |
| Keep important content legible; dim the rest | An **`[data-idle]` (ambient) theme**: **primary value large and high contrast** (≥ **7:1** on dark, **CONV**), **secondary text, imagery and fills dimmed to ~40–60 % opacity (CONV)**, **rich images and large colour areas removed or muted**, **row backgrounds off** (`color.md`, `dark-mode.md`). Use **`prefers-color-scheme`** and **`prefers-contrast`** as inputs, not as triggers. |
| Consistent layout; unavailable look instead of removal | **Don't reflow when idle starts/ends**: keep the **same grid**, turn **buttons into `aria-disabled="true"` dimmed states** (not `display: none`), avoid layout shifts (`transform`/`opacity` only). |
| Infrequent, subtle updates | **Throttle idle updates** (a score updates only when it changes; a clock only on the minute; **no ticking seconds or live tickers**); **pause polling/animations** in idle and **resume on interaction**; use **`document.hidden`** to stop work entirely. |
| Wind motion down gracefully | **Ease animations to rest** (finish the current cycle, `animation-iteration-count` → stop after the current loop or a short deceleration ≤ 400 ms, **CONV**), **never hard-cut**; under **`prefers-reduced-motion: reduce`** go **straight to the resting state** without transitions. |
| Screen stays on / dims (kiosk-like) | **Screen Wake Lock API** (`navigator.wakeLock.request("screen")`) **only while the ambient view is shown and only if the user asked**; **release on `visibilitychange`, on exit and after a timeout**; **dim your own UI**, don't rely on the OS. **OLED burn-in:** shift content by a few pixels periodically (**CONV**) on always-on kiosks. |
| Tap to exit | **Any pointer or key press leaves idle mode** and **the first tap only wakes** (doesn't trigger the control under it), to avoid accidental actions. |
| Notifications still appear | **Keep notifications and alerts visible in idle mode**, but **redact their content** by default. |
| Devices without the feature (iPad, Mac, TV, visionOS) | **Never rely on idle detection**; every state must work **with the display fully on**. |
| Native-only | **The Always On state, `isLuminanceReduced`/`isLuminanceReducedKey` (SwiftUI), extended runtime/background sessions on watchOS, Lock Screen widgets** are native APIs (names background knowledge; the page cites only the watchOS design guide). |

Field-note cross-links:
- `field-notes/*`: **no idle/ambient recipe**; nothing conflicts.
- `hig/components/system-experiences/widgets.md` (✓): **Always-On on iPhone: grays with enough contrast, no animation, no thin lines**; `hig/components/system-experiences/live-activities.md` (✓): **verify contrast on the Always-On display, no animation with reduced luminance, avoid sensitive information**; `hig/components/system-experiences/complications.md` (✓): **privacy on the Always-On Retina display**; `hig/components/system-experiences/controls.md` (✓): **redact sensitive info when locked**; `hig/components/system-experiences/notifications.md` (✓): **hide personal information in notification text**; `hig/components/system-experiences/watch-faces.md` (✓) and `hig/getting-started/designing-for-watchos.md` (✓): **wrist-drop dimming and glances**; `hig/foundations/color.md` (✓ CRITICAL) and `dark-mode.md` (✓): **contrast and dimming**; `hig/foundations/motion.md` (✓): **gentle motion and reduced motion**; `hig/foundations/privacy.md` (✓): **redaction and shoulder-surfing**.
- Not yet ingested (linked from this page): none.

## Checklist
- [ ] **Sensitive values** (money, health, message text) are **masked in idle/locked states**, with an **opt-in to show more**; **notifications are redacted** too.
- [ ] **Glanceable values** the person chose stay visible and **large**; **everything else is dimmed or removed**.
- [ ] **No layout shift** when idle starts or ends; **controls look unavailable rather than disappearing**.
- [ ] **Idle updates are rare and subtle** (change-driven, no live ticking); **work pauses when hidden**.
- [ ] **Motion winds down smoothly** (and goes straight to rest under reduced motion).
- [ ] **A wake lock is held only on request**, **released** on hide/exit/timeout; **burn-in shifting** on always-on displays.
- [ ] **The first tap wakes, it doesn't act**; **any input exits idle**.
- [ ] **Idle mode can be turned off**, and **every feature works without it** (no dependency on idle detection).
- [ ] **Contrast in the dimmed theme is verified** (Color gate) and the layout is **legible at a glance from a distance**.

## Related
- Ingested: Designing for watchOS (✓), Widgets (✓), Live Activities (✓), Complications (✓), Controls (✓), Notifications (✓), Watch faces (✓), Color (✓ CRITICAL), Dark Mode (✓), Motion (✓), Privacy (✓).
- Not yet ingested (linked from this page): none.
- Developer docs: "Designing your app for the Always On state" (watchOS apps).
- Videos: What's new in watchOS 8 (WWDC21 10002), Build a workout app for Apple Watch (WWDC21 10009), What's new in SwiftUI (WWDC21 10018).
