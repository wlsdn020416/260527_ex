# AGENTS.md

## Project Overview

This project is a Korean-language web page about monjayaki, commonly shortened to monja, a Japanese pan-fried dish associated especially with Tokyo's Tsukishima area.

The page is for:

- People planning or currently taking a trip to Japan.
- People who are curious about Japanese food culture.
- Korean readers who may know okonomiyaki but are less familiar with monja.

The experience should help visitors quickly understand what monja is, why it is worth trying, how to eat it, and which kinds or regional styles they might encounter.

## Content Direction

Write content in natural Korean unless the surrounding file clearly uses another language.

Prioritize practical, travel-friendly explanations:

- What monja is and how it differs from okonomiyaki.
- A short history of monja and its connection to shitamachi food culture.
- Regional context, especially Tokyo and Tsukishima, plus any credible local variations.
- Common monja types such as mentaiko mochi cheese, seafood, pork, kimchi, curry, and vegetable-based options.
- How monja is cooked on a hot plate and how diners eat it with small spatulas.
- Tips for first-time visitors, including ordering, sharing, texture expectations, and etiquette.

When adding food facts, avoid making unsupported claims. If a detail is specific, historical, regional, or likely to change, verify it from reliable sources before presenting it as fact.

## Page Classification

Classify this page primarily as a Japan travel food guide.

Recommended page category:

- 일본 여행 음식 가이드

Recommended information architecture:

- 몬자 입문: what monja is, how it tastes, and how it differs from okonomiyaki.
- 지역별 몬자: Tokyo, Tsukishima, and travel context around where visitors are likely to encounter monja.
- 몬자 종류: mentaiko mochi cheese, seafood, pork, kimchi, curry, vegetable, and other approachable options.
- 먹는 방법: cooking sequence, small spatula use, sharing, timing, and hot-plate etiquette.
- 여행자 가이드: ordering tips, first-time menu recommendations, budget expectations, solo or group dining notes, and useful menu words.
- 문화와 역사: origin, shitamachi food culture, and how monja developed differently from okonomiyaki.

Place a practical "처음 먹는 사람 추천 메뉴" area near the top when building the page. Travelers should be able to answer "What should I order first?" without reading the full page.

## Product And Design Goals

Build the actual information page as the first screen, not a placeholder landing page.

The design should feel like a useful Japan travel and food guide:

- Warm, appetizing, and easy to scan.
- Rich enough to invite curiosity, but practical enough for travelers.
- Use real or generated food/travel imagery when the page needs visual assets.
- Avoid generic stock-like visuals that do not show the dish, cooking process, shop atmosphere, ingredients, or travel context.
- Keep mobile layouts polished because travelers may read the page on a phone.

Suggested sections:

- Hero or lead area with a clear title and appetizing monja visual.
- "몬자란?" overview.
- First-timer menu recommendations.
- Monja vs. okonomiyaki comparison.
- Types of monja.
- Regional differences or notable areas.
- History and cultural background.
- Step-by-step making/eating guide.
- Traveler tips or FAQ.

## Code Style

Follow the conventions of the existing codebase once files are added.

If starting from scratch:

- Keep the structure simple and readable.
- Use semantic HTML.
- Keep CSS maintainable with clear class names.
- Prefer accessible contrast, keyboard-friendly controls, and descriptive alt text for meaningful images.
- Do not add heavy dependencies unless they provide clear value.
- Keep visible copy concise and purposeful.

## Build And Test Commands

There is no established stack yet. After the first implementation is added, update this section with the real commands.

Common examples, depending on the chosen stack:

- Static HTML: open `index.html` directly in a browser or serve with `python3 -m http.server`.
- Vite or similar: install dependencies, run the local dev server, and run the project's lint/build commands.

Before finishing frontend work, verify the page visually on desktop and mobile widths.

## Source And Asset Guidance

Use trustworthy sources for cultural, historical, or regional claims. Prefer official tourism, museum, restaurant association, publisher, or well-cited food culture references.

When using images:

- Confirm usage rights if downloading existing assets.
- Store local assets in a clear project folder such as `assets/`.
- Use descriptive filenames and alt text.

## Security And Privacy

Do not commit API keys, credentials, private notes, or downloaded files with unclear licensing.

Avoid collecting personal data unless the user explicitly asks for interactive features that require it.

## Agent Workflow

- Read this file before making changes.
- Check the existing project structure before choosing a stack or adding files.
- Keep edits focused on the monja guide page.
- Update this file when build commands, test commands, project structure, or content requirements become concrete.
- User instructions in chat override this file.
