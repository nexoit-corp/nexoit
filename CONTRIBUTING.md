# Contributing to site9

Thanks for your interest in contributing! This document explains how to get set
up and the conventions we follow.

## Getting set up

1. Fork and clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

## Workflow

1. Create a branch off `main`:
   - `feature/<short-description>` for new features
   - `fix/<short-description>` for bug fixes
2. Make your changes. Keep commits focused and write clear commit messages.
3. Make sure the project builds and lints cleanly:
   ```bash
   npm run build
   npm run lint
   ```
4. Open a pull request against `main` describing **what** changed and **why**.

## Code style

- TypeScript strict mode — avoid `any`.
- Follow the existing component and file structure under `src/`.
- This project uses a build of Next.js with breaking changes from older
  versions. Read `AGENTS.md` before writing code.

## Reporting bugs & requesting features

Please open a GitHub Issue with a clear title and description. For bugs, include
steps to reproduce, expected behavior, and what actually happened.

## Code of Conduct

By participating, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).
