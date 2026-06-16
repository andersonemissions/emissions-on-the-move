# SEO Action Plan — Emissions on the Move

This covers what I already changed in the code, plus the off-site work that matters most
for a local service business. For a business like this — mobile emissions testing in one
county — **the off-site steps below (especially Google Business Profile) will do far more
than anything on the website itself.** Most people searching "emissions testing near me"
find businesses through Google Maps, not a web search.

---

## 1. What I already changed in the code

You just need to deploy (see section 5). Changes made:

- **Real page title and description.** Google was showing "Web site created using
  create-react-app" under your link. It now reads a proper title and a description
  mentioning Utah County and your phone number.
- **Unique title + description on every page** (Home, Pricing, FAQ, Book Now, Contact),
  so each page can rank for the right search.
- **Structured data (LocalBusiness schema)** in the page — tells Google your name, phone,
  service area, price, and social links in a machine-readable way. This is what powers
  the rich business info you sometimes see in search results.
- **Social share preview** (Open Graph / Twitter tags) — when someone texts or posts your
  link, it now shows your photo, title, and description instead of a blank box.
- **sitemap.xml** listing all 5 pages, and **robots.txt** pointing to it, so Google can
  discover every page.
- **A no-JavaScript fallback** with your business name, pitch, and phone number, so
  crawlers (and the rare visitor with JS off) see real content instead of a blank page.

### One honest limitation
The site is a Create React App (the page is blank until JavaScript runs). Google *can*
render JavaScript, so this works — but it's slower and less reliable than a site that
ships finished HTML. **You do not need to rebuild the site.** If down the road the friend
wants the strongest possible SEO, the upgrade path is migrating to Next.js or Astro, which
deliver finished HTML. That's a "later, if you want" item, not a "must do now."

---

## 2. Google Business Profile — do this first (biggest impact)

This is the single highest-leverage thing you can do, and it's free.

1. Go to **google.com/business** and create/claim the profile for "Emissions on the Move."
2. Choose it as a **service-area business** (no storefront). Set the service area to
   **Utah County** (add the main cities: Provo, Orem, Lehi, American Fork, Spanish Fork,
   Pleasant Grove, Springville, Saratoga Springs, Eagle Mountain, Payson).
3. Category: **"Emissions Inspection Station"** (primary). Add "Auto Repair Shop" if
   relevant.
4. Fill in everything: phone (385) 392-6701, website, hours, and the **services** (mobile
   emissions test, fleet testing) with prices.
5. Add **photos** — the car, the team, a test in progress. Profiles with photos get far
   more clicks.
6. Verification can take a few days (postcard, phone, or video). Don't skip it; you can't
   show up on Maps until verified.

## 3. Reviews — the #1 local ranking factor after the profile itself

Google ranks local businesses heavily on review count and recency.

- After every job, text the customer the **"leave a review" short link** Google gives you
  in the profile dashboard. Make it one tap.
- Aim for a steady trickle (a few a week) rather than a burst.
- Reply to every review, even a short "Thanks!" — Google rewards active profiles.

## 4. Local citations & socials (consistency matters)

List the business — with the **exact same Name, phone, and website** everywhere:

- Bing Places (bing.com/business), Apple Business Connect (maps on iPhones),
  Yelp, Nextdoor, and any Utah County / Provo-Orem local directories or chamber sites.
- The Instagram and Facebook pages are already linked in the site's structured data.
  Keep them active; post jobs and reviews.

## 5. Deploy the code changes

From the project folder:

```
npm run deploy
```

That builds the site and pushes it to GitHub Pages (the `gh-pages` script is already set
up). Give it a couple of minutes, then hard-refresh emissionsonthemove.com.

## 6. Tell Google about the site (after deploy)

1. Go to **Google Search Console** (search.google.com/search-console) and add the property
   `emissionsonthemove.com`. Verify it (DNS or the HTML-tag method).
2. Submit the sitemap: in Search Console → Sitemaps → enter `sitemap.xml`.
3. Use **"URL Inspection"** on the homepage and click **"Request Indexing"** to nudge
   Google to crawl it now.
4. Check back in a week or two — Search Console will show which searches bring people in,
   so you can refine the wording on the site.

---

## Priority order, if you only do a few things

1. **Google Business Profile** — create, verify, fill out completely.
2. **Deploy the code changes** (`npm run deploy`).
3. **Reviews** — start asking every customer.
4. **Search Console** — add the site and submit the sitemap.
5. Bing Places + Apple Business Connect.

Everything else is polish.
