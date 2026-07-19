# NEXOIT

> **Reliable IT support for Australian businesses.**
> From managed IT infrastructure to professional websites and Microsoft 365 — NEXOIT handles your tech so you can focus on running your business.

The marketing website for **NEXOIT**, an Australian-owned, remote-first managed
service provider. It presents NEXOIT's four core service lines, packages,
industries served, and a programmatic set of city + service landing pages built
for local SEO. Built with [Next.js](https://nextjs.org/) (App Router), React 19,
and Tailwind CSS v4.

🔗 **Live:** [site9.in](https://site9.in/) &nbsp;·&nbsp; ✉️ **Contact:** hello@nexoit.com.au &nbsp;·&nbsp; 📍 Australia-wide support

---

## What this site is for

NEXOIT sells outcome-focused IT services to small and mid-sized Australian
businesses (SMBs) that don't have a full in-house IT team. The website's job is
to:

- **Explain four service lines clearly** — so a non-technical owner can see exactly what they'd get and what problem it solves.
- **Turn complex IT into packaged offers** — each service is framed as products + a defined delivery workflow + concrete outcomes, not jargon.
- **Capture qualified leads** — every page routes toward the contact / enquiry form.
- **Win local search** — programmatic *service × city* pages target buyers searching "managed IT services in Melbourne", "web development in Sydney", etc.
- **Build trust** — founder profiles, technology partners, and an industry-by-industry breakdown establish credibility before the first call.

The result: a fast, SEO-ready marketing site that converts "we need IT help" into
booked enquiries.

## Services

| Service | What it covers |
| --- | --- |
| **Business Essentials** | Microsoft 365, Teams & Teams Phone, secure network (router/firewall/switch/WiFi), endpoint protection, backup, devices, and staff onboarding — delivered as one managed setup. |
| **Web Development** | Websites, web apps, CMS platforms, ecommerce, databases, hosting, deployment, SEO/performance, and ongoing maintenance. |
| **Professional Services** | Specialist network engineers and SRE capacity for project-based, hourly, or long-term work — architecture, firewalls, routing/VPN/SD-WAN, automation, audits, and documentation. |
| **Cloud Services** | Azure and AWS foundations — tenants/accounts, virtual networks, VPN, identity, monitoring, backup & disaster recovery, and cost controls. |

Each service is detailed as **products → delivery steps → outcomes → who it's
for → problems solved → workflow**, so visitors understand both the *what* and
the *how*.

## Industries served

Finance · Healthcare · Government · Telecommunications · Retail · Enterprise

## Coverage (programmatic local pages)

Service + location landing pages are generated for major Australian metros:
Melbourne, Sydney, Brisbane, Perth, Adelaide, Canberra, Hobart, and Darwin —
each tuned to that city's key industries for local SEO.

## Pages / routes

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, service showcase, capabilities, process |
| `/services`, `/services/[slug]` | Service overview and per-service detail pages |
| `/packages` | Packaged offers per service line |
| `/about` | Company story, founders, technology partners |
| `/industries` | Industry-specific value propositions |
| `/locations/[city]` | Programmatic city landing pages |
| `/resources` | Resource / content section |
| `/compare` | Comparison content |
| `/contact` | Enquiry form and contact details |

SEO is supported by generated `sitemap.ts`, `robots.ts`, and structured route
metadata in `src/lib/seo-data.ts` / `src/lib/seo-routes.ts`.

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Animation:** Motion
- **Icons:** lucide-react
- **Language:** TypeScript (strict)
- **Design system:** see [`DESIGN.md`](DESIGN.md) — "Cyber-Sovereign Professional" dark theme

## Getting started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To run on a custom port:

```bash
npm run dev -- --port 3010
```

## Build

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/          # routes (App Router) — see table above
├── components/   # shared UI (site shell, motion primitives)
└── lib/          # content + SEO data
    ├── site-data.ts    # services, packages, industries, founders, partners
    ├── seo-data.ts     # service & city definitions for local SEO
    └── seo-routes.ts   # programmatic route generation
```

> **Note:** this project uses a build of Next.js with breaking changes from older
> versions. See [`AGENTS.md`](AGENTS.md) and the bundled docs under
> `node_modules/next/dist/docs/` before contributing code.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and the
[Code of Conduct](CODE_OF_CONDUCT.md) before opening a pull request.

## License

Released under the [MIT License](LICENSE).
