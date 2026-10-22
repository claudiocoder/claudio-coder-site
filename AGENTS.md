# AGENTS.md

This file provides shared guidance for coding agents working in this repository.

## Commands

- `npm run dev` / `npm run build` / `npm start` — Next.js (App Router). Use Node.js 24.x only. `.nvmrc` contains `24`; `package.json` and the root package-lock entry declare `24.x`. CI reads `.nvmrc` through `node-version-file`. Keep these settings aligned.
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`).
- `npm run format` (check) / `npm run format:fix` — Prettier 3.0.3.
- `npm test` — Vitest, single run (`watch: false`). Single file: `npx vitest run __test__/_app/Page.test.tsx`; by name: `npx vitest run -t "name"`.
- `npm run test:coverage` — enforces 80% thresholds (lines/branches/functions/statements).

Husky: pre-commit runs `lint-staged` (prettier + eslint --fix); pre-push runs `npm run lint && npm run format`. CI (`.github/workflows/ui.yml`) runs build, lint, format, and coverage on pushes to `main` and PRs to `main`/`develop`.

## Commit convention

Use the following gitmoji convention for every commit subject:

```text
<emoji> - <Short description>
```

Use one actual emoji character, followed by a space, a hyphen, and a space. Write a concise description in English, starting with a capitalized imperative verb (such as Add, Fix, or Update), without a trailing period. Release commits use the version instead, for example `🔖 - V1.1.1`.

| Emoji | Purpose                              | Example                                 |
| ----- | ------------------------------------ | --------------------------------------- |
| ✨    | New features                         | `✨ - Add post search`                  |
| 🐛    | Bug fixes                            | `🐛 - Fix date parsing`                 |
| 📝    | Documentation and agent instructions | `📝 - Document commit conventions`      |
| 🎨    | Code formatting and structure        | `🎨 - Format blog components`           |
| 💄    | UI and styles                        | `💄 - Update post card styles`          |
| ♻️    | Refactoring                          | `♻️ - Refactor MDX loading`             |
| ⚡️   | Performance improvements             | `⚡️ - Optimize post metadata loading`  |
| ✅    | Tests                                | `✅ - Add post rendering tests`         |
| 🔧    | Configuration                        | `🔧 - Require Node 24.x`                |
| 👷    | CI and build automation              | `👷 - Read CI Node version from .nvmrc` |
| ⬆️    | Dependency upgrades                  | `⬆️ - Upgrade Next.js`                  |
| 🔒️   | Security fixes                       | `🔒️ - Validate post slugs`             |
| 🔖    | Releases and version tags            | `🔖 - V1.1.1`                           |

Choose the emoji that best describes the primary change. Keep each commit focused on one logical change. Add an optional body, separated by a blank line, when the reason for the change or validation needs explanation.

## Architecture

Personal Spanish-language blog (Next.js + Tailwind, deployed on Vercel). Posts are MDX files, not a CMS.

- **Content**: `src/content/blog/*.mdx`. Frontmatter must match `Blog` in `src/lib/models/Blog.ts` (`title`, `date` ISO, `author`, `thumbnailUrl`, plus `description` used in posts). Thumbnails live in `public/blog/`.
- **MDX pipeline**: `src/lib/mdx/index.ts` reads files synchronously from disk and compiles with `next-mdx-remote/rsc` (`compileMDX`, frontmatter parsing, `rehype-highlight`). The slug is the filename without `.mdx`. `getAllPostsMeta` compiles _every_ post to collect metadata (used by the home page list). Custom MDX element components are in `src/components/Mdx.tsx`.
- **Routes** (`src/app`): `page.tsx` (home: profile + post cards), `[slug]/page.tsx` (async server component; `params` is a Promise; renders compiled MDX, highlight.js theme `atom-one-dark`), `layout.tsx`, `loading.tsx`. Site metadata in `src/lib/utils/metadata.ts`, fonts in `src/lib/utils/fonts.ts`, shared constants in `src/constants/index.ts`.
- **Third-party scripts**: `GoogleAnalytics.tsx` and `SocialMediaScripts.tsx` (X share widget).

## Testing notes

Tests are in `__test__/` (mirrors `src/app`), using Vitest + jsdom + Testing Library. Module mocks in `__mocks__/` (`next/font/google`, `next/navigation`, FontAwesome). `@` alias → `src` in both `tsconfig.json` and `vitest.config.mts`. Note `vitest.config.mts` contains a stale `contentlayer/generated` alias (contentlayer is no longer used).

## Editing and validation

Use TypeScript and the existing App Router structure. Keep blog content and user-facing copy in Spanish unless the task specifies otherwise. Follow .prettierrc: two-space indentation, single quotes, no semicolons, and single quotes in JSX.

Install dependencies with `npm ci`. Run checks appropriate to the change: lint and relevant Vitest tests for code changes, build for routing or MDX changes, and coverage when test coverage is affected. Markdown and MDX are excluded by .prettierignore; check changed Markdown explicitly with `npx prettier --check --ignore-path .gitignore AGENTS.md CLAUDE.md`. Do not reformat unrelated files.
