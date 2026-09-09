# Bobby Singh — Red Bean Hospitality

A redesign of [bobbysingh.in](https://bobbysingh.in) — the personal brand site for Bobby Singh,
Managing Director of Red Bean Hospitality (contract food services for healthcare, corporate
and institutional kitchens across India) and the CRMP business-coaching program.

## Stack

- **Next.js 16** (App Router, static export-ready — every route is prerendered)
- **React 19**, TypeScript
- **Tailwind CSS v4** (design tokens in `src/app/globals.css` under `@theme`)
- Fonts: **Fraunces** (display) + **Inter** (text) via `next/font`

## Design direction

Premium / editorial: warm bone paper, espresso ink, a single Red Bean red accent, deep petrol
for large fields. Magazine-cover hero, numbered section labels, hairline grids, large serif
pull-quotes. Copy is the original site's, tightened.

## Structure

```
src/
  app/            route segments (one folder per page)
  components/     shared UI (Header, Footer, PageHero, SectionHeading, HairlineGrid, Reveal, …)
  content/       page copy as typed data modules (edit these to change text)
  lib/           site config (nav, contact, socials), fonts, helpers
public/images/   photography (portraits, kitchen, award ceremonies)
```

Editing copy: change the files in `src/content/`. Nav / contact details / socials live in
`src/lib/site.ts`.

## Develop

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (also typechecks)
npm run lint
```

## Notes

- The contact form has no backend — on submit it composes a `mailto:` to
  `bobbysingh@redbeanhospitality.com`. Wire it to a real endpoint / form service in
  `src/components/ContactForm.tsx` when ready.
- YouTube thumbnails on Events & Media load from `img.youtube.com` (allowed in `next.config.ts`).
- `_ref/` (local) holds the scraped reference content and the screenshot script — gitignored.
