# Web views
Source: https://developer.apple.com/design/human-interface-guidelines/web-views · Section: Components › Content · Supported platforms: **iOS, iPadOS, macOS, visionOS** ("No additional considerations for iOS, iPadOS, macOS, or visionOS. **Not supported in tvOS or watchOS**"; TV and Watch are dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources). One DocC fetch, read in full. 2 screenshots (light-mode page, hero → the top of the Videos list) were compared with the fetched text line by line: everything matches; the two screenshots are contiguous. **The video title and its link were read from the fetch only** (the screenshot shows just the top edge of the thumbnail). Only the hero drawing and the page chrome are screenshot-only. Not marked critical: no gate, token file or checker. The page has no numbers.

## In one line
A web view **embeds web content inside your app** (Mail shows HTML messages this way): give it **back and forward navigation** when people may visit several pages, and **never turn it into a browser**: brief access to a site in context is fine, rebuilding Safari is discouraged.

## Rules

### Framing (intro)
- A web view **loads and displays rich web content**, such as **embedded HTML and websites**, **directly within your app**.
- Example: **Mail** uses a web view to show the **HTML content of messages**.

### Best practices
- **should** **Support forward and back navigation when appropriate.** Web views *can* navigate forward and back, but **not by default**. If people are likely to **visit several pages** in the view, **enable** forward/back navigation and **provide matching controls** to trigger it.
- **should not** **Build a web browser out of a web view.** Letting people **briefly reach a website without leaving your app's context** is fine, but **Safari is the primary way people browse the web**; replicating Safari's functionality is **unnecessary and discouraged**.

### Platform considerations
- **iOS, iPadOS, macOS, visionOS:** no additional considerations. **tvOS, watchOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings**. Concrete facts:

| Item | Value |
|---|---|
| Purpose | show rich web content (embedded HTML, websites) inside the app |
| Example | Mail: HTML content of messages |
| Navigation | forward/back available but **off by default**; enable and add controls when multi-page use is likely |
| Not a browser | brief in-context access only; don't rebuild Safari's features |
| Not supported | tvOS, watchOS |
| Developer docs | WebKit `WKWebView` |
| Related | WebKit.org (external) |
| Video | *Explore WKWebView additions* (WWDC21 10032) |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange gradient card with a pale, sharp-cornered **page panel** framed by **dimension arrows** (top and trailing edges), and a large **compass** glyph (a ring with a diamond needle) at its centre: the Safari-style "web" symbol.
- **Page chrome (from screenshot):** the platform strip lights iPhone, iPad, Mac and Vision, with **TV and Watch dimmed**; the TOC reads Web views · Best practices · Platform considerations · Resources (**no Change log**). The side navigation highlights **Web views** under **Components › Content**, after Text views. The second screenshot ends at the "Videos" heading with only the top edge of a dark thumbnail visible.
- The page has **no ✗/✓ pairs, no comparison images and no videos of its own** (fetch script run; catalog IDs unchanged, total 107). Nothing is measured.
- **Text that is not in the fetch:** none beyond the chrome above.

## Web translation
On the web the equivalents are **`<iframe>` embeds** (a page inside a page), **sandboxed HTML rendering** (user or third-party HTML such as an email body, the Mail example), and, inside **native shells** (Capacitor/Cordova/React Native WebView, PWAs wrapped as apps), the WebView that hosts the whole product. The rule set is about **navigation, staying in context, and not rebuilding a browser**.

| HIG rule | Web implementation |
|---|---|
| Show rich content inside the app | **Third-party or user-supplied HTML** (email bodies, CMS content, help articles): render it in a **sandboxed `<iframe srcdoc>`** (`sandbox` without `allow-scripts` unless needed; add `allow-popups` only if links must open) after **sanitising** (DOMPurify or server-side); never inject untrusted HTML into your own DOM. Inline the base styles so the content matches your typography (`typography.md`) and dark mode. |
| Embedded websites | Use `<iframe>` with a required **`title`**, `loading="lazy"`, `referrerpolicy`, a tight **`allow`** list (camera, mic, fullscreen only when needed) and `sandbox`. Expect embedding to be **refused** (`X-Frame-Options`, CSP `frame-ancestors`): detect load failure/timeouts and show a fallback with **"Open in browser"** (Feedback gate: a clear, calm error with a next step). |
| Forward/back only when appropriate | For a **single embedded document** (an email, a help page) don't add navigation chrome. For a **multi-page embed** where people follow links, add **Back / Forward buttons** and a **Reload/Open externally** action in the frame's header; cross-origin iframes hide their history, so drive navigation from your own controls (or `window.open`/redirect to the site); disable Back/Forward when unavailable (`aria-disabled` with a reason) and keep the buttons in the standard toolbar. In a **native shell WebView**, wire the system Back gesture/button to `history.back()` and handle edge-swipe. |
| Don't build a browser | No custom **address bar, tabs, bookmarks, history list or "browse anywhere"** inside your app. For a **link to an external site**, prefer opening a **new tab** (`target="_blank" rel="noopener noreferrer"`) or, in a native shell, the **system in-app browser sheet** (SFSafariViewController/Chrome Custom Tabs via `Browser.open`) instead of a raw WebView: it keeps the user's session, password autofill, and trust cues. A minimal in-context viewer (title, domain, Close, Open in browser) is the acceptable ceiling. |
| Stay in context, trust cues | Show **where the content comes from** (domain or source label) in a small header, keep a visible **Close/Done** that returns to the previous place, and never mimic a browser's URL bar for pages you control (phishing pattern). Don't ask people to sign in inside an embedded frame you don't own; use a real redirect or popup with the provider's own page. |
| Loading and errors | A named loading state for the frame (skeleton or progress; `loading.md`), a timeout, and a friendly failure state ("This site can't be shown here. Open it in your browser"); status announced politely (`feedback.md`). |
| Links inside rendered HTML | Intercept link clicks in sanitised content: open **external links in a new tab**, keep internal ones inside, block `javascript:` and `data:` URLs; show the destination on hover/long-press; **remote images/trackers in email HTML blocked by default** with a "Load images" control (privacy, `privacy.md`). |
| Accessibility | Every `<iframe>` has a meaningful `title`; keep focus order sane (Tab enters and leaves the frame, a **skip link** past long embeds); don't trap focus; make the frame's own scroll region keyboard reachable; sufficient size for touch; preserve text zoom (`text-views.md`). |
| Platform support | The page excludes tvOS/watchOS: on TV-style and glanceable web surfaces **don't embed interactive pages**; show a short summary with a QR code or "Continue on your phone" hand-off (`designing-for-tvos.md`, `workouts.md`). |
| Performance and safety | Lazy-load below the fold, cap the number of simultaneous embeds, use `sandbox`/CSP, `Permissions-Policy`, and keep third-party scripts out of your main origin. |

Field-note cross-links:
- `hig/foundations/privacy.md`: remote content in rendered HTML is a tracking vector; block by default and let people load it.
- `hig/patterns/modality.md`: an in-context viewer is a short, dismissible modal (sheet or full-screen viewer) with an obvious Close; not stacked.
- `hig/patterns/feedback.md` (CRITICAL) and `hig/patterns/loading.md`: embed failure and slow loads.
- `hig/patterns/managing-accounts.md`: sign-in belongs on the provider's own page, not inside an embedded frame.
- `hig/patterns/multitasking.md` and `launching.md`: restore the last page/scroll position when the view returns.
- `hig/components/content/text-views.md`, `image-views.md`, `charts.md`: other Content components; rendered HTML follows the text-legibility rules.
- No conflict with a field note.

## Checklist
- [ ] Untrusted HTML is sanitised and rendered in a sandboxed frame; scripts, popups and permissions are opt-in.
- [ ] Every embed has a `title`, lazy loading, a tight `allow` list and a graceful failure state with "Open in browser".
- [ ] Multi-page embeds have Back, Forward and Reload/Open-externally controls (disabled with a reason when unavailable); single documents have no browser chrome.
- [ ] No custom address bar, tabs, bookmarks or history; external sites open in a new tab or the system in-app browser.
- [ ] The source (domain) is shown; Close/Done returns to the previous place; no sign-in inside frames you don't own.
- [ ] Links in rendered content are intercepted safely; remote images and trackers are blocked until the person allows them.
- [ ] Focus order, skip link and text zoom work around and inside the frame; TV/glance surfaces don't embed interactive pages.

## Related
- Ingested: Text views (✓), Image views (✓), Charts (✓), Modality (✓), Feedback (✓ CRITICAL), Loading (✓), Privacy (✓), Managing accounts (✓), Multitasking (✓), Launching (✓).
- Not yet ingested: none referenced beyond external WebKit.org.
- Developer docs: `WKWebView`. Video: *Explore WKWebView additions* (WWDC21 10032).
