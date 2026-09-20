# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` / `npm run build` / `npm start` — Next.js (App Router). Node >=22 (`.nvmrc`).
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`).
- `npm run format` (check) / `npm run format:fix` — Prettier 3.0.3.
- `npm test` — Vitest, single run (`watch: false`). Single file: `npx vitest run __test__/_app/Page.test.tsx`; by name: `npx vitest run -t "name"`.
- `npm run test:coverage` — enforces 80% thresholds (lines/branches/functions/statements).

Husky: pre-commit runs `lint-staged` (prettier + eslint --fix); pre-push runs `npm run lint && npm run format`. CI (`.github/workflows/ui.yml`) runs build, lint, format, and coverage on PRs to `main`/`develop`.

## Commit convention

Use [gitmoji](https://gitmoji.dev): start each commit message with an emoji describing the change, followed by a short description (e.g. `✨ - Add post search`, `🐛 - Fix date parsing`, `📝 - Update README`, `🔖 - V1.1.1`). Existing history follows this style (`🔖 - V1.1.1`), so keep the `<emoji> - <message>` format.

## Architecture

Personal Spanish-language blog (Next.js + Tailwind, deployed on Vercel). Posts are MDX files, not a CMS.

- **Content**: `src/content/blog/*.mdx`. Frontmatter must match `Blog` in `src/lib/models/Blog.ts` (`title`, `date` ISO, `author`, `thumbnailUrl`, plus `description` used in posts). Thumbnails live in `public/blog/`.
- **MDX pipeline**: `src/lib/mdx/index.ts` reads files synchronously from disk and compiles with `next-mdx-remote/rsc` (`compileMDX`, frontmatter parsing, `rehype-highlight`). The slug is the filename without `.mdx`. `getAllPostsMeta` compiles *every* post to collect metadata (used by the home page list). Custom MDX element components are in `src/components/Mdx.tsx`.
- **Routes** (`src/app`): `page.tsx` (home: profile + post cards), `[slug]/page.tsx` (async server component; `params` is a Promise; renders compiled MDX, highlight.js theme `atom-one-dark`), `layout.tsx`, `loading.tsx`. Site metadata in `src/lib/utils/metadata.ts`, fonts in `src/lib/utils/fonts.ts`, shared constants in `src/constants/index.ts`.
- **Third-party scripts**: `GoogleAnalytics.tsx` and `SocialMediaScripts.tsx` (X share widget).

## Testing notes

Tests are in `__test__/` (mirrors `src/app`), using Vitest + jsdom + Testing Library. Module mocks in `__mocks__/` (`next/font/google`, `next/navigation`, FontAwesome). `@` alias → `src` in both `tsconfig.json` and `vitest.config.mts`. Note `vitest.config.mts` contains a stale `contentlayer/generated` alias (contentlayer is no longer used).
