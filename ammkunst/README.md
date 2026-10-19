# AMM — independent gallery and shop

**Source:** `odinskogen-dev/odinoddekalv/ammkunst` (isolated subtree). Independent HTML/CSS/JavaScript, no Lovable, no monthly app-builder charges. Hosting target: Cloudflare Pages on `ammkunst.no`. Public root: `site/`; Cloudflare server functions: `functions/`.

## What is already built

Home page prioritizing two real artworks, 13-work archive, 13 dedicated artwork URLs, simple full-screen hamburger menu, About, enquiry form, cart route, mobile layouts, semantic metadata and sitemap. Menu supports Escape and keyboard cycling. Light DM Sans, black on white, generous whitespace and minimal chrome.

## Image provenance and rights

The 13 pictures come from the user's AMM art image archive in Google Drive. They are **web-sized photographs**, approx 400–980 kB each and 1070–1536px, stored under `site/art/`. Several photos show framing/room surroundings. They are **not** the distinct 11 full-resolution print JPEGs shared by Hurtig-Trykk via Filemail on 2026-08-25 (107.97 MB). Those print masters remain outside this public repository; external Filemail expiry 2026-11-23.

Displayed working titles such as Frog Banquet, Pig Society, Profile Portrait and Lovebirds are internal identifiers, not final approved exhibition labels. No invented edition claims, sale prices or inventory data.

## Stripe commerce gate

Cloudflare Pages Function `/api/catalogue` reads server-approved Stripe price IDs and retrieves valid NOK prices from Stripe. Only after the studio configures an approved price, shipping and explicit `AMM_STORE_LIVE=true` does the browser show an Add to bag button and enable Stripe-hosted checkout. Checkout creates sessions on the server, never exposes secret keys and uses approved price IDs; the webhook verifies signatures and writes paid receipts to the KV binding `AMM_ORDERS`. A redirect is **not** confirmation of payment.

Cloudflare secrets/bindings needed: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_IDS` (JSON work-ID to price-ID mapping), `AMM_SHIPPING_RATE`, `AMM_ORDERS` KV, and `AMM_STORE_LIVE`. Contact form needs `RESEND_API_KEY`, `AMM_CONTACT_TO`, `AMM_CONTACT_FROM` (verified sender). No credentials are hardcoded. Do not enable sales until order fulfilment, stock/editions, returns, taxes, shipping and notifications are verified.

## Cloudflare publishing

`.github/workflows/deploy-ammkunst.yml` deploys on main-branch changes to `ammkunst/**` using Wrangler CLI with the existing repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. It attempts to create the free Pages project, deploy static files + Pages Functions and register the custom domain. If credentials are not present in the repository, the workflow intentionally fails; a GitHub token is **not** a Cloudflare or Stripe credential.

**Do not claim live** until the latest Actions run is successful and HTTP checks at `https://ammkunst.no/` and `https://ammkunst.no/art/a21.jpg` pass.

## Mapping

| Web file | AMM reference |
|---|---|
| a21.jpg | A21 Frog Banquet |
| a18.jpg | A18 Frontal Monochrome Portrait |
| a14.jpg | A14 Frog Treehouse |
| a20.jpg | A20 Butterflies Green |
| a01.jpg | A01 Dense Animals and Green Leaves |
| a12.jpg | A12 Pirate Frogs |
| a19.jpg | A19 Portrait with Eye |
| a03.jpg | A03 Lovebirds |
| a15.jpg | A15 Pig Society |
| a17.jpg | A17 Pink Portrait |
| a13.jpg | A13 Frog Holiday |
| a16.jpg | A16 Profile Monochrome Portrait |
| a07.jpg | A07 People on Pink |
