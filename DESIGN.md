---
name: Claudio Coder
description: Light technology journal for practical development stories
colors:
  paper: '#f7f8f2'
  ink: '#172b3a'
  ink-soft: '#293f4b'
  muted: '#526570'
  deep-blue: '#183344'
  blue: '#1769c2'
  blue-link: '#075aab'
  blue-pale: '#eaf3fa'
  border: '#cad9e5'
  white: '#fff'
typography:
  hero:
    fontFamily: 'Roboto, Arial, sans-serif'
    fontSize: 'clamp(2.7rem, 5.1vw, 5rem)'
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: '-0.035em'
  article-title:
    fontFamily: 'Roboto, Arial, sans-serif'
    fontSize: 'clamp(2.5rem, 5vw, 4.25rem)'
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: '-0.035em'
  body:
    fontFamily: 'Roboto, Arial, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.8
  card-title:
    fontFamily: 'Roboto, Arial, sans-serif'
    fontSize: '1.25rem'
    fontWeight: 700
    lineHeight: 1.375
rounded:
  card: '0.75rem'
  hero: '1rem'
  control: '0.5rem'
spacing:
  card-gap: '1.25rem'
  content-padding: '1.5rem'
components:
  post-card:
    backgroundColor: '{colors.white}'
    textColor: '{colors.ink}'
    rounded: '{rounded.card}'
  author-panel:
    backgroundColor: '{colors.blue-pale}'
    rounded: '{rounded.card}'
    padding: '{spacing.content-padding}'
  hero-link:
    backgroundColor: '{colors.deep-blue}'
    textColor: '{colors.white}'
    rounded: '{rounded.control}'
---

# Design System: Claudio Coder

## Overview

**Creative North Star: "Light tech journal"**

A light editorial setting for Claudio's development stories. Warm paper, dark blue ink, and blue accents give the blog a technological character; the original hero illustration adds a playful gaming influence. The article column stays calm and readable.

**Key Characteristics:**

- Warm light surfaces, blue-black text, and blue accents.
- Roboto for the primary interface and Khula for the profile subtitle.
- A shared masthead and a wide illustrated homepage introduction.
- A responsive article grid alongside a pale author panel.
- A centered, measured article column with prominent headings.

This describes the current source in `src/styles/globals.css`, `src/app/`, and `src/components/`. Browser screenshots and computed styles have not been verified because browser access was unavailable.

## Colors

The frontmatter records the primary implemented colors. Paper is the page ground; ink and ink-soft carry headings and article text; muted supports metadata. Deep blue anchors the brand mark and main link. Blue appears in small accents, article links, and pale supporting surfaces. Cards remain white with a subtle border. Social icons retain their own colors; the imported Atom One Dark theme colors code blocks.

**The Reading Contrast Rule.** Keep body copy in dark ink on a light surface; reserve brighter blue for accents and use the darker blue for text links.

## Typography

Roboto is loaded through `next/font/google` at weights 400 and 700. Khula is used for the profile subtitle. The hero and article title use responsive sizes and tight tracking; the article body uses 1.125rem type with a 1.8 line height. Card titles use 1.25rem bold type. The project also requests weights not explicitly loaded in some existing components.

## Layout

The shared header and homepage are constrained to 1440px. The homepage introduction has two equal columns above 767px and stacks below it. The article list and 19rem author panel sit side by side above 767px; article cards use two columns until 480px, then one. The article shell is constrained to 1200px, with a centered reading column of at most 72ch. Horizontal padding uses responsive clamps.

## Elevation & Depth

Borders and tonal surfaces separate content. Article cards use a border rather than a card shadow; the hero illustration supplies its own visual depth. Existing MDX images retain their stronger shadow. There is no hover elevation.

## Shapes

Cards, the author panel, article quotes, and code blocks use 0.75rem corners. The hero image uses 1rem corners. The brand mark and main link use smaller rounded corners; the author's portrait is circular.

## Components

### Masthead and introduction

The masthead contains the Claudio Coder home link and Blog link. The homepage introduction pairs a large headline and article anchor with an original generated illustration in `public/blog/tech-journal-hero.png`.

### Post cards

Each native link wraps a 4:3 cropped thumbnail, title, and date. A blue-tinted border appears on hover; the image scales slightly on hover, with that motion disabled for reduced-motion preferences. Keyboard focus has an outline.

### Author panel

A pale blue panel contains the author's portrait, introduction, and social links. It stacks below the articles on narrow screens.

### Article page

A back link precedes the title and metadata. The reading column uses underlined blue links, pale quote backgrounds, and horizontally scrollable code blocks. The X share integration remains available.

### Motion and focus

The page uses smooth scrolling except when reduced motion is requested. Cards transition their border and thumbnail. The loader retains its existing continuous rotation and currently has no reduced-motion alternative. Focus-visible uses a blue outline; individual controls may specify their own outline.

## Do's and Don'ts

### Do:

- **Do** keep long-form content in a measured, light reading column.
- **Do** use blue accents and underlined links to support navigation.
- **Do** preserve native links, visible keyboard focus, and reduced-motion behavior.

### Don't:

- **Don't** treat the historic homepage screenshot as the current layout.
- **Don't** extend the dark code theme into a site-wide dark theme without a design decision.
- **Don't** invent content claims or unsupported component states.
