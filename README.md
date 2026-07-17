# nexoit

Next.js + React (TypeScript, Tailwind CSS, App Router, ESLint).

Production is built and hosted by **Vercel** straight from Git.

```
local dev  →  git push  →  Vercel (builds & deploys prod)
```

## Note for contributors

**Please don't delete the Docker files** (`Dockerfile.dev`,
`docker-compose.yml`, `.dockerignore`). The core team uses Docker for local
development.

If you don't use Docker, you don't need to do anything about them — they sit
in the repo without affecting the `npm` workflow at all. Just use Option B
below and ignore them. Vercel ignores them too.

## Run it locally

Pick **one** of the two — both give you the same site on
http://localhost:3000 with hot reload.

### Option A — With Docker (no Node needed)

```bash
docker compose up --build   # first run: builds image, installs deps, starts server
docker compose up           # after that
```

Stop with `Ctrl+C`. Run detached with `docker compose up -d`, stop with
`docker compose down`.

<sub>One-time, so you don't need `sudo` for every docker command — then log out
and back in: `sudo usermod -aG docker $USER`</sub>

### Option B — Without Docker (needs Node 22+)

```bash
npm install
npm run dev
```

## Adding a dependency

**Docker:** run npm inside the container so it writes `package.json` /
`package-lock.json` back to your folder, then rebuild:

```bash
docker compose run --rm web npm install <package>
docker compose up --build
```

**Without Docker:** `npm install <package>`

Either way, commit the updated `package.json` **and** `package-lock.json` —
Vercel reads them to build.

## Deploy

Push to Git and import the repo at https://vercel.com/new — zero config.
Vercel ignores the Docker files and runs `npm install` + `npm run build`.
