#!/usr/bin/env node
// FEEDBACK GATE (static part) — scans source for feedback mistakes that the HIG Feedback page
// (marked CRITICAL for this skill) rules out: feedback that is not announced, colour-only status,
// alerts used for routine success, disabled controls with no reason, unnamed spinners, error
// messages that vanish, interruptions on load. The live part is tools/feedback-probe.js.
//
// Usage:
//   node tools/check-feedback.mjs <file|dir> [...]   # CSS/SCSS/TSX/JSX/TS/JS/HTML/Vue/Svelte/MDX
// Run it on the files you changed. Opt out on one line only with a reason:  // feedback-ok: <why>
// Exit code 1 if any ERROR is found. WARN = review by hand and justify in the handoff.

import { readFile, readdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const EXT = new Set([".css", ".scss", ".tsx", ".jsx", ".ts", ".js", ".html", ".vue", ".svelte", ".mdx"]);
const SKIP = new Set(["node_modules", ".git", "dist", "build", ".next", "coverage", "fixtures-ignored"]);
const TOKEN_FILE = "apple-feedback.css"; // defines the feedback classes; exempt

// Words that make a native alert()/confirm() a *routine success message* (English + Turkish).
const SUCCESS_WORDS = /\b(saved|success(ful(ly)?)?|done|updated|completed?|thank(s| you)|copied|sent|created|deleted|removed)\b|kaydedildi|başar(ı|i)l[ıi]|tamamland[ıi]|güncellendi|kopyaland[ıi]|gönderildi|silindi|eklendi/i;
const LIVE_ROLE = /role\s*=\s*["'{`]*(status|alert|alertdialog|log)\b|aria-live\s*=|aria-atomic|aria-errormessage|aria-describedby/;
// Libraries whose toast component already renders a live region.
const TOAST_LIB = /\b(sonner|react-hot-toast|react-toastify|@radix-ui\/react-toast|notistack|useToast|use-toast|ui\/toast|ui\/sonner|toaster|Toaster|antd|message\.(success|error|info)|Snackbar|MuiSnackbar|Notification\.)/;
const CUSTOM_TOAST_ELEMENT = /(class(Name)?\s*=\s*["'{`][^"'`]*\b(toast|snackbar)\b[^"'`]*["'`])|<(Toast|Snackbar)\b/;
const RED_ONLY = /\b(text|border|ring|outline)-(red|rose)-[3-7]00\b|\btext-destructive\b|\bborder-destructive\b|color\s*:\s*(red|#f00\b|#ff0000|#ff3b30|#ff383c|var\(--(color-destructive|apple-red)\))/i;
const SPINNER = /\banimate-spin\b|<Loader2?\b|<Spinner\b|\bCircularProgress\b|\bfa-spin\b|class(Name)?\s*=\s*["'{`][^"'`]*\b(spin|spinner|loading-spinner)\b/i;
const TOAST_LIVE = /role\s*=\s*["'{`]*(status|alert)\b|aria-live\s*=/;   // must sit on/near the toast element itself
const SPINNER_NAME = /aria-label|aria-labelledby|sr-only|role\s*=\s*["'{`]*(status|progressbar)|aria-live|aria-busy|aria-hidden|Loading|Saving|Sending|Kaydediliyor|Yükleniyor|Gönderiliyor|Yükle|Bekle|…|\.\.\./i;
const INTERJECTION = /["'`>][^"'`<]*\b(oops|uh-?oh|whoops)\b[^"'`<]*["'`<]|\bups!\b/i;
const WE_ERROR = /["'`][^"'`]*\bwe(’|')re having trouble\b[^"'`]*["'`]/i;

// [level, id, test(line, ctx, lines, i) → bool, message]
const RULES = [
  ["ERROR", "alert-for-routine-success", (l) => /(^|[^.\w])(window\.)?alert\s*\(/.test(l) && SUCCESS_WORDS.test(l),
    "Native alert() used to report routine success. HIG: alerts are for critical, ideally actionable information; ordinary success needs no interruption (reflect the new state, or a quiet role=status confirmation for significant tasks)."],
  ["WARN", "native-alert", (l) => /(^|[^.\w])(window\.)?alert\s*\(/.test(l) && !SUCCESS_WORDS.test(l),
    "Native alert() interrupts and is unstyled. If the message is critical use a real alertdialog with actions (.fb-alert); otherwise show it inline or as a status message."],
  ["ERROR", "toast-not-announced", (l, c, lines, i) => CUSTOM_TOAST_ELEMENT.test(l) && !c.usesToastLib && !lines.slice(Math.max(0, i - 1), i + 5).some((x) => TOAST_LIVE.test(x)),
    "Custom toast/snackbar element with no role=status/alert or aria-live on it (checked on its own tag and the next lines): screen-reader users never hear it (HIG: feedback must be accessible)."],
  ["WARN", "error-colour-only", (l, c) => RED_ONLY.test(l.replace(/\b(hover|focus|active|group-hover|focus-visible):[^\s"'`]+/g, "")) && /(error|invalid|fail|hata|danger|destructive)/i.test(l) && !c.hasLive && !c.hasErrorText,
    "Error/destructive colour with no text, icon or ARIA association in this file (HIG: use more than colour; WCAG 1.4.1). Add message text next to the field and aria-invalid/aria-describedby."],
  ["WARN", "spinner-unnamed", (l, c, lines, i) => SPINNER.test(l) && /<|class(Name)?\s*=/.test(l) && !(lines.slice(Math.max(0, i - 3), i + 4).some((x) => SPINNER_NAME.test(x)) || lines.slice(Math.max(0, i - 2), i + 3).some((x) => /<\/?(Button|button|a|Link)\b/.test(x)) || lines.slice(i + 1, i + 4).some((x) => /^\s*[\p{L}][^<>{}=()]*$/u.test(x))),
    "Spinner with no accessible name or nearby status text (HIG: feedback reaches people who don't watch the screen). Add role=status + text, aria-label, or a visible \"Saving…\"."],
  ["WARN", "disabled-no-reason", (l) => /<(button|Button)\b[^>]*\bdisabled\b(?!\s*=\s*\{)/.test(l) && /type\s*=\s*["']submit["']|Continue|Next|Devam|Kaydet|Submit/i.test(l) && !/aria-describedby|title\s*=|aria-label/.test(l),
    "Disabled primary control with no associated reason (HIG: show people when a command can't be carried out and why). Name the missing item (aria-describedby → .fb-reason) or keep it enabled and explain on press."],
  ["WARN", "error-autodismiss", (l) => {
    if (!/(error|warning|destructive|fail)/i.test(l) || /Infinity/.test(l)) return false;
    const ms = [...l.matchAll(/duration\s*:\s*(\d{1,5})\b|setTimeout\s*\(.*,\s*(\d{1,5})\s*\)/g)].map((m) => +(m[1] ?? m[2]));
    return ms.some((n) => n < 5000);
  },
    "Error/warning message that disappears in under 5 s. Errors and warnings stay until resolved or dismissed; transient confirmations last at least 5 s (CONV / WCAG 2.2.1)."],
  ["WARN", "dialog-open-on-load", (l) => /<dialog\b[^>]*\bopen(?![\w=-])|<(AlertDialog|Dialog)\b[^>]*\bdefaultOpen\b|role\s*=\s*["']alertdialog["'][^>]*\bopen(?![\w=-])|<AlertDialog\b[^>]*(?<=\s)open(\s*=\s*\{true\})?(\s|>|\/)/.test(l),
    "Alert/dialog open at first paint: an unprompted interruption. HIG: alerts disrupt by design, so only when the situation warrants it (after an action)."],
  ["WARN", "interjection-copy", (l) => INTERJECTION.test(l),
    "\"Oops\"/\"uh-oh\" in feedback copy sounds insincere (HIG Writing). Say what happened and what to do next."],
  ["WARN", "we-in-error", (l) => WE_ERROR.test(l),
    "\"We're having trouble…\" — unclear who \"we\" is (HIG Writing). Use e.g. \"Unable to load content.\""],
];

async function* walk(p) {
  const s = await stat(p);
  if (s.isDirectory()) {
    for (const e of await readdir(p)) if (!SKIP.has(e)) yield* walk(join(p, e));
  } else if (EXT.has(extname(p))) yield p;
}

const args = process.argv.slice(2);
if (!args.length) {
  console.error("usage: node tools/check-feedback.mjs <file|dir> [...]");
  process.exit(2);
}

let errors = 0, warns = 0;
for (const a of args) {
  for await (const f of walk(a)) {
    if (basename(f) === TOKEN_FILE) continue;
    const text = await readFile(f, "utf8");
    const lines = text.split("\n");
    const ctx = {
      hasLive: LIVE_ROLE.test(text),
      usesToastLib: TOAST_LIB.test(text),
      hasErrorText: /aria-invalid|role\s*=\s*["']alert["']|error(Message|Text|s\b)|\.message\b|helperText|sr-only|<AlertCircle|<XCircle|<TriangleAlert|<AlertTriangle|<ExclamationTriangle/i.test(text),
    };
    let alertDialogs = 0;
    lines.forEach((line, i) => {
      if (/feedback-ok/.test(line)) return; // explicit, justified opt-out: // feedback-ok: <reason>
      if (/^\s*(\/\/|\/\*|\*|<!--|#)/.test(line)) return; // comments are not UI
      if (/<AlertDialog\b/.test(line)) alertDialogs++;
      for (const [level, id, test] of RULES) {
        if (test(line, ctx, lines, i)) {
          level === "ERROR" ? errors++ : warns++;
          console.log(`${level.padEnd(5)} ${f}:${i + 1} [${id}] ${RULES.find((r) => r[1] === id)[3]}\n      ${line.trim().slice(0, 160)}`);
        }
      }
    });
    if (alertDialogs > 4) {
      warns++;
      console.log(`WARN  ${f} [alert-overuse] ${alertDialogs} alert dialogs in one file — HIG: alerts lose their impact when used too often or for unimportant information.`);
    }
  }
}
console.log(`\nFEEDBACK GATE (static): ${errors} error(s), ${warns} warning(s).` +
  (errors ? " FAIL — fix every ERROR." : " Static part passed; now run tools/run-feedback-probe.mjs <url>."));
process.exit(errors ? 1 : 0);
