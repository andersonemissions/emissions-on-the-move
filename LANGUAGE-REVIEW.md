# Site Language Review

**Scope:** user-facing copy in `src/pages/*`, `src/data/faqs.js`, `src/components/{Footer,SEO}.js`.
**Verdict:** Copy is accurate and friendly, but the same handful of claims is restated on every page, often 3–4 times per page. The fix is mostly cutting, not rewriting.

## What I found

### 1. The same claims repeat everywhere
| Claim | Where it appears |
|---|---|
| "Skip the DMV lines" / "No DMV lines" / "no DMV trip" | Home (4×: banner, section subtitle, service card, CTA), Services, FAQ |
| "Right in your driveway" | Home (3×), Services (3×) |
| "Instant electronic DMV upload / sync" | Home ×2 (two different cards), Services ×2, FAQ |
| "Free 15-day retest" | Home ×2 (trust bar + card), Services, FAQ ×2 |
| "State-certified" / "Utah DMV Authorized" | Home ×5, Services ×4, Pricing ×3, FAQ ×2 |
| "10 / 10–15 minutes" | Home ×3, Services, FAQ, Confirmation (and the number itself varies: "about 10" vs "10–15") |

### 2. Home page says the same thing in four consecutive sections
Hero → trust bar → OTS banner → service cards all sell "fast, certified, at your door, skip the DMV." The service cards then restate the trust bar in bullets, and the Home OTS card duplicates the OTS banner directly above it.

### 3. Services page repeats Home almost verbatim
Each tab re-lists the same 3 bullets already on the Home card, plus a lead paragraph and a sidebox that restate them again. The OTS tab has three separate "what you get" lists (feature points, stat bar, checklist).

### 4. Verbose or filler phrasing
- Bullet + sub-sentence pairs that say one thing twice: "**Instant Electronic DMV Sync** — Vehicle records update directly in the state database with zero delay."
- Stacked adjectives: "official, valid Utah registration card", "State-certified physical verification", "Fast, compliant mobile emissions testing".
- Padding: "Everything you need to stay street legal in Utah County—handled right in your driveway"; "Simple, transparent pricing with no hidden fees" (says "simple" and "transparent" and "no hidden fees").
- Seven CTA variants for one action: Book Now / Book Online Now / Book Emissions Test / Book With Registration Renewal / Book VIN Inspection / Book Exact Time / Book Flexible Window.
- Headings that echo their eyebrow: eyebrow "How It Works" over h2 "How Mobile Emissions Works".
- Terminology drift: On-The-Spot / On The Spot / OTS / SPOT; "decals" / "stickers"; "inspection" / "test"; "Emissions Testing" vs "Mobile Emissions Testing".

### 5. FAQ overlaps
"What happens if my vehicle fails?" and "What if I need repairs after failing?" are one question. "Are you state-certified?" repeats the OTS answer. "Do I need to be present?" and "Do I need to prepare?" both cover "just have keys accessible."

### 6. SEO descriptions
Mostly good. Pricing and Contact are keyword-list-like; Home and Services could be ~20% shorter. Description for the confirmation page ("We look forward to testing your vehicle") is irrelevant since it's a noindex-type page.

## Recommendations (highest impact first)

1. **Assign each claim one home.** Suggested:
   - *Trust bar (Home):* certified, 10 minutes, free retest — say it once, don't repeat in cards.
   - *OTS banner (Home):* skip the DMV.
   - *Service cards:* what the service is + one line, no repeated benefits.
   - *Services tabs:* the detail (requirements, eligibility, what to have ready).
   - *FAQ:* only new information.
2. **Cut Home service-card bullets from 3 to 0–1**, or drop the trust bar's overlap with them. Cards become title + one sentence + link.
3. **Merge feature-point pairs into single lines** on Services (drop the bold title or the sentence, not both).
4. **Collapse CTAs** to two: primary "Book Now", secondary "Call (385) 535-4917". Deep links can keep context in the URL, not the label.
5. **Pick one vocabulary** and use it everywhere: "On-The-Spot (OTS) renewal", "stickers" (or "decals"), "test", "mobile emissions test". Use "10–15 minutes" consistently, or "about 10 minutes" everywhere.
6. **Merge the two FAQ failure questions**; fold the "prepare" and "present" answers together. 10 → 8 FAQs.
7. **Trim filler adjectives** ("official", "certified", "instant", "fully") to one per sentence, and delete taglines that restate the page (e.g. Pricing subtitle → "No hidden fees.").
8. **Fix small inconsistencies:** duplicate `service-pill` and badge labels ("Utah County Certified" vs "State-Certified"), and the Services "Instant Electronic Certificate" copy that says it goes to "the Utah County and state database" (elsewhere: just the state/DMV).

## Estimated impact
Applying 1–4 should cut visible body copy on Home and Services by roughly 30–40% with no loss of information. Total user-facing copy is ~6k words across pages, so this is a moderate edit, not a rewrite.

## Suggested next step
Start with Home and Services (they hold most of the repetition), then FAQ. Happy to draft the trimmed copy for those pages.
