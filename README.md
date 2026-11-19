# Yasin Rofcanin Site

Beta of yasinrofcanin.com, the personal academic site of Professor Yasin Rofcanin. Pages: home, about me, keynote talks, publications, opinions (blog posts with detail pages) and contact. The beta sends `noindex` on every page.

The site was originally backed by Payload CMS on MongoDB. The CMS has been removed: all content was exported once into `lib/content.ts`, which is now the source of truth, and the site is built as a static export. Editing the site means editing that file; pages import the arrays from it directly. Images are served from a DigitalOcean Spaces CDN.

## Stack

- Next.js 16 (App Router, `output: "export"`)
- React 19, TypeScript
- Tailwind CSS 4 (theme in `app/globals.css`), Framer Motion, Swiper
- Bun

## Running it

```sh
bun install
bun run dev      # next dev
bun run build    # static export to out/
bun run lint
```

No environment variables are needed to build the site.

## Layout

```
app/                      routes; root layout holds the header, footer and fonts
  _components/            parts used by more than one route
    home/                 parts used only by the home page
  about-me/_components/   parts used only by /about-me
lib/content.ts            all site content
lib/cn.ts                 class-name helper
```

## Deployment

`.github/workflows/deploy.yml` builds the export on every push to `main`, sanity-checks the output, and ships `out/` to the droplet with `Jubstaaa/deploy-actions/static` (atomic switch, rolls back if the site stops answering), where Caddy serves it. The workflow reads the `DO_SSH_KEY`, `DO_HOST`, `DO_USER` and `DO_KNOWN_HOSTS` repository secrets.
