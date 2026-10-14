# kurtmansperger.com

Personal site and résumé, built with [Astro](https://astro.build) and deployed to GitHub Pages from `master`.

## One source of truth

Everything (homepage, `/resume` web page, and the PDF) renders from `src/data/resume.ts`.
Edit that file and every surface stays in sync.

| Surface | Where it comes from |
| --- | --- |
| Homepage | `src/pages/index.astro` |
| Printable résumé | `src/pages/resume.astro` (Letter, two pages) |
| PDF download | `public/pdf/Kurt Mansperger Resume.pdf`, generated from `/resume` |

## Updating the résumé

```bash
npm install
npm run build          # builds the site into dist/
npm run resume:pdf     # renders dist/resume to public/pdf/Kurt Mansperger Resume.pdf
```

The PDF step uses Playwright's Chromium. The first time on a new machine run
`npx playwright install chromium`, or set `CHROMIUM_PATH` to a local Chrome binary.
Commit the regenerated PDF along with the data change.

## Local development

```bash
npm run dev            # http://localhost:4321
```
