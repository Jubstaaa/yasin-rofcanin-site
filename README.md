# Yasin Rofcanin Site

Beta of yasinrofcanin.com, the personal academic site of Professor Yasin Rofcanin. Pages: home, about me, keynote talks, publications, opinions (blog posts with detail pages) and contact. The beta sends `noindex` on every page.

The site was originally backed by Payload CMS on MongoDB. The CMS has been removed: all content was exported once into `lib/content.ts`, which is now the source of truth, and the site is built as a static export. Editing the site means editing that file. `lib/services.ts` keeps the old query-style helpers (`findMany`, `findFirst`, `findUnique`) over the static data so the pages did not need to change. Images are served from a DigitalOcean Spaces CDN.

## Stack

- Next.js 15 (App Router, `output: "export"`)
- React 19, TypeScript
- Tailwind CSS 4, Radix UI, Framer Motion, Swiper, cobe
- npm

## Running it

```sh
npm install
npm run dev      # next dev --turbopack
npm run build    # static export to out/
npm run lint
```

No environment variables are needed to build the site.

## Deployment

`.github/workflows/deploy.yml` builds the export on every push to `main`, sanity-checks the output, and rsyncs `out/` to a server over SSH. The workflow reads the `DO_SSH_KEY`, `DO_HOST` and `DO_USER` repository secrets.
