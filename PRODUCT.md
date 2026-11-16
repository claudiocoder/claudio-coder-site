# Claudio Coder

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers at every level, from junior to senior, with a particular focus on web and mobile development. They want to learn from real development experiences and the lessons they offer.

## Product Purpose

To be an educational blog in Spanish where Claudio shares knowledge, development experiences, and lessons learned. The content should help readers understand technical topics and apply what they learn in practice.

## Positioning

Teaching draws on Claudio's personal experience as a developer: real situations, decisions, and lessons that give context to technical explanations.

## Operating Context

Readers browse the article list on the home page and open individual posts to read them. The author's profile and links to GitHub, LinkedIn, X, and Twitch introduce his professional and social presence.

Claudio publishes through MDX files in `src/content/blog/`, with metadata and local image assets. The site uses Next.js App Router and Tailwind and is deployed on Vercel. The development environment requires Node.js 24.x.

## Capabilities and Constraints

- A blog with a post list and one route per article, with its slug derived from the MDX filename.
- Articles with explanations, links, images, and syntax-highlighted code blocks.
- Reading on desktop and mobile devices.
- Content and reader-facing copy in Spanish.
- Publishing through repository files, without a CMS.
- The current editorial focus is web and mobile development. Video games are a topic Claudio wants to cover in the future; the scope has not yet been defined.

## Brand Commitments

The existing identity is Claudio Coder. The editorial voice teaches through personal experience and lessons learned. Existing articles and factual information about the author are preserved as the foundation for future improvements.

## Evidence on Hand

- Author profile: `src/components/ProfileContainer.tsx` and `src/assets/profile.jpg`.
- Existing social links: `src/components/SocialNetworkContainer.tsx`.
- An article about Git merge and rebase, starting from an interview experience: `src/content/blog/gitmergerebase.mdx`.
- An article about resources for learning to code: `src/content/blog/resources_developers.mdx`.
- Article images in `public/blog/`.

These sources support the current content. No audience figures, measured educational outcomes, or testimonials have been established.

## Product Principles

- Teach with practical context and the author's real experiences.
- Explain without assuming all readers have the same level of experience.
- Prioritize comprehension and the article reading experience.
- Maintain the current focus on web and mobile, leaving room for future expansion into video games.
