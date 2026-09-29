# apple-skill

A Claude Code plugin that makes Claude design and build UI at **Apple quality** — for the web
(React / Tailwind / CSS) and native Apple platforms.

It combines two kinds of knowledge:

1. **Apple Human Interface Guidelines, distilled** — every page of developer.apple.com/design
   rewritten as dense, retrievable notes: rules, exact specs, platform differences, visual
   notes and a web translation for each. *(Being ingested page by page — see
   `skills/apple-ui/references/INDEX.md` for status.)*
2. **Field notes** — a design language validated on a production web app: exact tokens
   (colours, radii, shadows, type scale, motion), component recipes (settings lists, wizards,
   consent screens, segmented controls, dashboards), rejected ideas, and the browser traps
   that break these designs.

## Install

### As a plugin (recommended)
In Claude Code:
```
/plugin marketplace add <github-user>/apple-skill
/plugin install apple-skill@apple-skill
```

### As a plain skill
```bash
git clone https://github.com/<github-user>/apple-skill.git
cp -R apple-skill/skills/apple-ui ~/.claude/skills/apple-ui
```

## Use
Just ask for UI work — "build an Apple-style settings page", "make this onboarding feel like
Apple", "review this screen" — or invoke the skill by name (`apple-ui`). Claude reads the
routing table in `references/INDEX.md` and pulls only the pages relevant to the task.

## Layout
```
.claude-plugin/            plugin + marketplace manifests
skills/apple-ui/
  SKILL.md                 entry point: workflow, core principles, pre-ship checklist
  references/
    INDEX.md               routing table + ingestion status
    hig/                   one note per Apple design page
    field-notes/           principles, tokens, components, anti-patterns, gotchas, landing/motion
    screenshots-described/ text descriptions of visual references
skills/apple-ui/tokens/    exact Apple system colours (CSS + JSON, 4 modes) + layout tokens + material/glass tokens + feedback tokens + button tokens
tools/check-colors.mjs     colour gate: palette + outdated-value + contrast checks
tools/check-layout.mjs     layout gate (static): dvh, zoom, device/orientation logic, safe areas…
tools/layout-probe.js      layout gate (live): overflow, clipped text at 200%, target size/spacing
tools/run-layout-probe.mjs runs the probe at 6 viewports via Playwright
tools/check-materials.mjs  materials gate (static): glass vs content layer, grey text on materials, fallbacks
tools/materials-probe.js   materials gate (live): layer discipline, text contrast on materials, glass count
tools/run-materials-probe.mjs runs it in light, dark, Reduce Transparency and Increase Contrast
tools/check-feedback.mjs   feedback gate (static): unannounced toasts, alert() for success, colour-only errors, unnamed spinners
tools/feedback-probe.js    feedback gate (live): announced messages, colour-only status, invalid fields, interruptions, contrast
tools/run-feedback-probe.mjs runs it in light, dark and reduced motion (--click / --fill to trigger messages first)
tools/fixtures/feedback/   bad.html (must fail) and good.html (must pass) — regression fixtures for the feedback gate
tools/check-buttons.mjs    buttons gate (static): clickable non-buttons, icon buttons with no name, removed focus outline, destructive primary
tools/buttons-probe.js     buttons gate (live): names, hit region, prominent count, size sets, roles, contrast, crowding
tools/run-buttons-probe.mjs runs it at 375 and 1440 px, light and dark, and forces :active/:hover and Tab focus (press state, focus ring)
tools/fixtures/buttons/    bad.html (must fail) and good.html (must pass) — regression fixtures for the buttons gate
tools/fetch-visual-examples.mjs  downloads Apple's do/don't images locally
tools/hig-fetch.mjs        reads a HIG page's full content (DocC JSON → text) for ingestion
MAINTAINING.md             how pages are ingested (template, copyright rule)
```

## Notes
HIG notes are written in our own words; Apple's text and images are not redistributed.
Apple, the Apple logo and Human Interface Guidelines are trademarks of Apple Inc. This project
is not affiliated with or endorsed by Apple.
