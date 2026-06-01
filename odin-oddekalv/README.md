# ODIN ODDEKALV_

The digital home of Odin Oddekalv — _exploring better ways for humans and nature to thrive together._

Founder **4PLANET** · Creative **P4NTHER**

A premium editorial platform: personal journal, photographic archive, project index and public-facing brand universe. Built as the first version of a body of work intended to last decades.

---

## Run it

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build && npm run start   # production
```

Requires Node 18.17+ (Node 20 recommended).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with the ODIN_ / 4PLANET design tokens
- **Framer Motion** for calm, subtle reveals
- **react-markdown** for journal bodies (MDX-ready authoring)
- Local content files — no CMS required to run

## Design system

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#FFFFFF` | background |
| `ink` | `#000000` | text |
| `blue` | `#2E2EFF` | the single accent — links, hover, grid lines, tags |

Type: **DM Sans** (editorial) + **IBM Plex Mono** (field-note labels, dates, captions), both loaded via `next/font`. Restraint, whitespace and a subtle technical grid carry the aesthetic.

## Structure

```
app/                 routes (home, journal, projects, photography, story,
                     expeditions, library, now, contact + dynamic [slug]s)
components/          reusable UI (Hero, JournalCard, PhotoGrid, Timeline, …)
content/             ← EDIT CONTENT HERE (typed .ts files)
  site.ts            nav, social links, identity
  journal.ts         posts (markdown bodies)
  projects.ts        projects + detail-page fields
  photography.ts     photo archive
  expeditions.ts     expeditions
  library.ts         influences
  timeline.ts        story milestones
lib/                 types.ts, content.ts (access layer), utils.ts
public/images/       field-plate SVG placeholders (replace with real media)
```

## Editing content

All content lives in `/content` and is typed against `/lib/types.ts`. You can add a
journal post, project or photo without touching any page logic — just edit the
relevant file. Pages read everything through `/lib/content.ts`, so swapping local
files for **Sanity** or **Supabase** later means changing only that one file.

### Replacing the placeholder images

Images are local SVG "field plates" so nothing is ever broken. To use real photos:

1. Drop files into `public/images/`.
2. Update the `image` paths in the relevant content file.
3. For real raster photos, switch `components/Media.tsx` to `next/image` (a comment in
   that file explains how) and add the image domains to `next.config.mjs`.

### Links to update

Edit `content/site.ts` — Instagram, Substack, 4PLANET, P4NTHER, email and the
canonical URL. The OG image lives at `public/images/og-image.svg`.

## Notes

- Respects `prefers-reduced-motion`.
- Mobile-first; built for traffic arriving from Instagram.
- SEO + Open Graph metadata configured in `app/layout.tsx` and per-page.
- `next/font` fetches DM Sans + IBM Plex Mono from Google on the first `dev`/`build`, then caches them — so the very first run needs an internet connection.
