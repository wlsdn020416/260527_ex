---
name: monja
description: Build and refine a Korean-language Bootstrap, JavaScript, and HTML web page about Japanese monjayaki for Japan travelers and Japanese food fans. Use when creating the monja page structure, Korean copy, Bootstrap layout, interactive JavaScript, visual direction, accessibility polish, or travel-friendly food guide content.
compatibility: Static HTML project using Bootstrap, vanilla JavaScript, and browser-rendered CSS.
---

# Monja Page Skill

## Goal

Create a polished Korean-language guide page about Japanese monjayaki, usually shortened to monja, for people traveling to Japan or interested in Japanese food culture.

The page should help visitors understand what monja is, why it is interesting, how it differs from okonomiyaki, what types to try, where it is commonly associated with, and how to cook and eat it.

## Required Stack

Use this stack unless the user explicitly changes it:

- HTML for page structure.
- Bootstrap for grid, layout utilities, components, spacing, and responsive behavior.
- Vanilla JavaScript for lightweight interactions.
- Custom CSS only where Bootstrap is not enough for the desired visual quality.

Do not introduce React, Vue, build tooling, package managers, or heavy JavaScript dependencies unless the user asks for them.

## Page Structure

Build the actual guide page as the first screen. Do not create a placeholder, splash-only page, or generic landing page.

Include these sections when appropriate:

- Hero section with a clear Korean title and an appetizing monja or Japanese food-travel visual.
- Quick explanation: "몬자란?"
- Monja vs. okonomiyaki comparison.
- Short history and cultural background.
- Regional context, especially Tokyo and Tsukishima.
- Types of monja, such as mentaiko mochi cheese, seafood, pork, kimchi, curry, and vegetable options.
- Step-by-step making and eating guide.
- First-time visitor tips, including ordering, sharing, texture expectations, and small-spatula etiquette.
- FAQ or compact travel checklist.

## Content Rules

Write in natural Korean for Korean readers.

Keep the tone:

- Helpful and travel-friendly.
- Curious and appetizing.
- Clear for people who have never eaten monja.
- Practical enough to use during a Japan trip.

Avoid unsupported claims. Verify specific historical, regional, or current travel information from reliable sources before presenting it as fact.

Explain Japanese terms simply. If a term is useful, show Korean meaning or context the first time it appears.

## Bootstrap Implementation

Use Bootstrap intentionally:

- Use `.container` or `.container-fluid` for page rhythm.
- Use Bootstrap grid classes for responsive section layouts.
- Use cards only for repeated items such as monja type cards, tips, or FAQ entries.
- Use badges, list groups, accordions, tabs, or nav pills only when they improve scanning.
- Keep nested cards out of the design.
- Use Bootstrap responsive utilities instead of custom media queries when they are enough.

Prefer semantic HTML:

- `header`, `main`, `section`, `article`, `nav`, and `footer`.
- Proper heading order from `h1` downward.
- Descriptive `alt` text for meaningful images.
- Buttons for actions, links for navigation.

## JavaScript Interactions

Use vanilla JavaScript for small, useful interactions such as:

- Category filters for monja types.
- Scroll-aware navigation or active section highlighting.
- FAQ accordion support if not using Bootstrap's data attributes.
- "처음 먹는 사람 추천" type picker.
- Lightweight checklist toggles for travel tips.

Keep JavaScript progressive:

- The core content must remain readable without JavaScript.
- Do not hide essential content behind JS-only rendering.
- Keep event listeners scoped and easy to understand.

## Visual Direction

The page should feel warm, appetizing, and useful for travelers.

Use visual assets that show the actual subject:

- Monja on a hot plate.
- Ingredients or toppings.
- Japanese restaurant atmosphere.
- Tokyo or Tsukishima context when relevant.

Avoid generic food imagery that does not reveal monja, cooking, ingredients, or the travel setting.

Keep the palette balanced. Avoid making the whole page one color family. Use warm food tones with enough neutral space and clear contrast.

## Accessibility And Responsiveness

Before finishing, check:

- The page works on mobile and desktop widths.
- Text does not overflow buttons, cards, or navigation.
- Interactive controls are keyboard-friendly.
- Color contrast is readable.
- Images have useful `alt` text or empty `alt=""` when decorative.
- Bootstrap components with controls have correct labels and ARIA attributes when needed.

## Suggested File Layout

For a static implementation, prefer:

```text
monja/
├── AGENTS.md
├── SKILL.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── images/
```

If the project stays very small, inline minimal CSS or JavaScript is acceptable, but separate files are preferred once the page has meaningful styling or interactions.

## Build And Verify

For a static page:

1. Open `index.html` directly or run a local server with `python3 -m http.server`.
2. Verify desktop and mobile layouts in a browser.
3. Check the browser console for JavaScript errors.
4. Confirm all local assets load correctly.

When using CDN Bootstrap, ensure the page still has clear fallback content and no private keys or credentials.

## Completion Checklist

Before handing off:

- Confirm the page uses HTML, Bootstrap, and vanilla JavaScript.
- Confirm Korean copy is natural and aimed at travelers or Japanese food fans.
- Confirm monja types, regional context, history, and making/eating guidance are represented.
- Confirm mobile layout is polished.
- Mention any facts that were not independently verified.
