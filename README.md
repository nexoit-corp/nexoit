# site9

A modern, dark-themed marketing website built with [Next.js](https://nextjs.org/), React, and Tailwind CSS.

## Tech stack

- **Framework:** Next.js (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Animation:** Motion
- **Icons:** lucide-react
- **Language:** TypeScript (strict)

## Pages

- Home
- Services & service detail pages
- Packages
- About
- Industries
- Locations
- Compare
- Resources
- Contact

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
├── app/          # routes (App Router)
├── components/   # shared UI components
└── lib/          # utilities and helpers
```

> Note: this project uses a build of Next.js with breaking changes from older
> versions. See `AGENTS.md` and the bundled docs under `node_modules/next/dist/docs/`
> before contributing code.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and the
[Code of Conduct](CODE_OF_CONDUCT.md) before opening a pull request.

## License

Released under the [MIT License](LICENSE).
