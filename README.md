# 24-7-business-men

Website for **24/7 Businessmen**, a round-the-clock Dubai registration trustee office and Golden Visa service.

Built with Next.js (App Router) and TypeScript. All pages are statically generated.

## Pages

- `/` — home: full-screen video hero, services showcase, fee and Golden Visa estimator, contact form
- `/services` — every service, grouped by division
- `/services/[slug]` — one page per service (26 in total): overview, eligibility, required documents, steps, fees

## Editing content

- Services, fees, contact details: `lib/services.ts`
- Icons: `lib/icons.ts`
- Styles: `app/globals.css`
- Hero videos and posters: `public/assets/`

Contact details and fees are placeholders. The appointment form only confirms on screen; it is not connected to email or a CRM yet.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```
