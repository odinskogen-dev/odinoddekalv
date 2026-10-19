# AMM — Cloudflare Pages setup (dedicated branch)

This file documents the isolated, free-tier website deploy. The code is already in the same GitHub repository, but the live gallery uses only the `ammkunst/` folder and the isolated branch `amm/gallery-production`.

**One-time connection without any Cloudflare API token in GitHub:**

1. In Cloudflare dashboard, open **Workers & Pages → Create application → Pages → Import an existing Git repository**.
2. Authorise GitHub access to `odinskogen-dev/odinoddekalv`; choose this repository.
3. Set project name `ammkunst` (or an available unique alternative).
4. Set **Production branch** to `amm/gallery-production`.
5. Open **Root directory (advanced)**, set `ammkunst`.
6. Framework preset: **None**. Build command: `exit 0`. Build output directory: `site` (relative to the root directory).
7. Save and deploy. This project has its own `functions/` at the project root for future Stripe and contact endpoints. Payments stay disabled unless explicitly activated with secure bindings and approved products.
8. In the Pages project's **Custom domains**, add `ammkunst.no`. If the domain is already managed by the same Cloudflare account, follow the offered DNS record/update prompts. Avoid overwriting any existing DNS records without checking them. Optionally add `www.ammkunst.no` and a redirect.
9. Verify HTTP 200 on `https://ammkunst.no/`, `https://ammkunst.no/art/n0388.webp`, `https://ammkunst.no/works/n0388/`, and mobile/desktop appearance before declaring live.

All seven new optimised web images are committed to `site/art/n0387.webp` through `n0397.webp` (noncontinuous numbering); the gallery has 20 images total. Printed originals should never be shared from the website. The original source images are in `source-images/` in this public repository; keep restricted original print masters outside public source control.

**Note**: Earlier AMM GitHub Action in the same repo runs only from `main`, which lacks Cloudflare deployment credentials. This isolated branch's Pages Git integration needs no additional repository API secrets for static deployment. The actions under this branch are not what deploy to production; Cloudflare Pages' native integration does it automatically.
