# Carl's Jr. Celaya Credibility Page

Static credibility / case-study page for the Carl's Jr. Celaya prospect.
**Delivery:** shareable URL on `fluxsales.co`. No PDF, no Lovable.

## Source of truth

- **Spec:** `docs/superpowers/specs/2026-04-17-carls-jr-celaya-credibility-page-design.md`
- **Plan:** `docs/superpowers/plans/2026-04-17-carls-jr-celaya-credibility-page.md`
- **Design bundle (Claude Design):** `fluxsales/project/CJ Celaya.html` + `chat2.md` (local `/tmp/cj-design/`; not committed)

## Preview locally

From this directory:

    npm run preview

Then open http://localhost:8080 in a browser. (Equivalent: `python3 -m http.server 8080`.)

## Run calculator tests

From this directory:

    npm test

(Equivalent: `node --test calculator.test.js`.) Expected: `# pass 10`.

---

## Deployment — Cloudflare Pages + Squarespace DNS

**Target URL:** `https://case.fluxsales.co/carls-jr-celaya/`

**Architecture:**
- `fluxsales.co` root + `www.fluxsales.co` stay on Lovable (unchanged).
- New subdomain `case.fluxsales.co` → Cloudflare Pages (free tier, static).
- DNS for the subdomain added in Squarespace's DNS panel (domain registrar).

**Why this split:** zero conflict with the existing Lovable landing pages
(which own `fluxsales.co/p/*`). Adding a subdomain is additive — nothing
existing breaks. We can host additional prospect pages under the same
subdomain as more deals happen (see "Adding another prospect" below).

### One-time setup (do this in order)

**1. Cloudflare account (if Sebastian doesn't already have one)**
- Sign up free at https://dash.cloudflare.com/sign-up
- Free tier is enough for this use case

**2. Create the Pages project**
- Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git
- Connect the GitHub repo containing this worktree (the `flux-automation` repo)
- **Production branch:** pick whichever branch has the merged CJ Celaya page
  (will likely be `main` once this feature branch is merged)
- **Build command:** (leave empty — no build step)
- **Build output directory:** `companies/fluxsales/proposals`
  - This makes the Pages project serve everything under
    `companies/fluxsales/proposals/` — including `carls-jr-celaya/` and any
    future prospect subdirectories.

**3. Add the custom domain in Cloudflare Pages**
- Pages project → Custom domains → Set up a custom domain
- Enter: `case.fluxsales.co`
- Cloudflare will show instructions with a CNAME target like
  `fluxsales-case.pages.dev` (the exact hostname is generated per project).
  Copy that hostname — you need it in Squarespace.

**4. Add the CNAME record in Squarespace**
- Squarespace → Settings → Domains → `fluxsales.co` → DNS Settings
- Add a new record:
  - **Type:** CNAME
  - **Host:** `case`
  - **Data / Points to:** `<the-pages-hostname>.pages.dev` (from step 3)
  - **TTL:** 1 hour (or default)
- Save. Propagation usually ≤ 5 minutes.

**5. Verify**
- In Cloudflare Pages, the custom-domain status flips from "pending" to "active"
  once DNS resolves + SSL provisions (≤ 5 min).
- Open `https://case.fluxsales.co/carls-jr-celaya/` in a browser.
- The page should render identical to local preview.

### Ongoing — ship a change

Once the Pages project is connected, every push to the production branch
auto-deploys. Workflow:

1. Edit files on this branch.
2. Run `node --test calculator.test.js` locally — confirm 10 pass.
3. Commit, push, merge to production branch.
4. Cloudflare Pages rebuilds in ~30 seconds, deploys.
5. Refresh `case.fluxsales.co/carls-jr-celaya/` — new version live.

### Adding another prospect later

Same subdomain, new subdirectory:

1. Copy `companies/fluxsales/proposals/carls-jr-celaya/` to
   `companies/fluxsales/proposals/<new-prospect-slug>/`.
2. Edit copy / calculator defaults for the new prospect.
3. Commit + push.
4. New URL: `case.fluxsales.co/<new-prospect-slug>/`.

For per-prospect URLs without duplicating files (query-string personalization),
see "Future work" below.

---

## Pre-publish checklist

Mirror of spec §8. **All items must be resolved before the URL goes to the prospect.**

**Blocking — brand / permission:**
- [ ] Brooklyn Burgers — brand and numbers publishable as stated (name, 4 locations, 200 orders/day, UE fully replaced in 90 days)
- [ ] Brooklyn Burgers — pre-FluxSales UE commission rate verified (page currently shows 28%, swap real number + recompute if different)
- [ ] Brooklyn Burgers — month-by-month direct-channel growth verified or the 25/60/100% curve accepted as approximation
- [ ] Axel pull-quote — verify wording with Brooklyn owner (current copy is our draft)
- [ ] Sabrosy — name/logo permission confirmed (currently shown as typographic tile)
- [ ] Cosi Fan Tutte Querétaro — permission + URL confirmed (https://pedidos.cosifantutterestaurante.com/)
- [ ] Dolce Bisquet Monterrey — permission + URL confirmed (https://lealtad.dolcebisquet.com/)
- [ ] Carl's Jr. Puebla — franchisee permission to list "Piloto activo" + URL (https://pedidos.carlsjrpuebla.com/)

**Non-blocking — accuracy:**
- [ ] 24% UE commission confirmed with prospect once more before sending
- [ ] Prospect's interpretation confirmed: 1,000 orders = UE-only per location, 14% = UE share of total

**Non-blocking — operational:**
- [ ] WhatsApp CTA number confirmed (currently `wa.me/5214421716825`, same as `scripts/proposal-followup.js`)
- [ ] `case.fluxsales.co` deployed and accessible (see deployment steps above)

---

## Future work (not in current scope)

- **Per-prospect query-string URLs.** One page, many prospects, via URL params
  like `?client=Carl%27s%20Jr.%20Celaya&o=1000&l=2&t=350&r=24`. Saves
  duplicating files per client. ~1 hour work when needed.
- **Lovable migration.** Replace the existing fluxsales.co landing flow with
  our vanilla-stack pages. Large project — needs its own spec + plan cycle.

## Out of scope

Per spec §9: pricing, contract terms, feature deep-dives, PDF/email versions
(previously explored; dropped per owner preference — URL-only delivery).
