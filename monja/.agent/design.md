---
name: Artisanal Monja
colors:
  surface: '#fff8f6'
  surface-dim: '#e7d7d1'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#fbeae5'
  surface-container-high: '#f5e5df'
  surface-container-highest: '#efdfd9'
  on-surface: '#221a17'
  on-surface-variant: '#54433c'
  inverse-surface: '#382e2b'
  inverse-on-surface: '#feede8'
  outline: '#87736b'
  outline-variant: '#dac1b8'
  surface-tint: '#944925'
  primary: '#823b18'
  on-primary: '#ffffff'
  primary-container: '#a0522d'
  on-primary-container: '#ffe1d6'
  inverse-primary: '#ffb596'
  secondary: '#60603e'
  on-secondary: '#ffffff'
  secondary-container: '#e6e5b9'
  on-secondary-container: '#666643'
  tertiary: '#005863'
  on-tertiary: '#ffffff'
  tertiary-container: '#007280'
  on-tertiary-container: '#aef2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#76320f'
  secondary-fixed: '#e6e5b9'
  secondary-fixed-dim: '#cac99f'
  on-secondary-fixed: '#1d1d03'
  on-secondary-fixed-variant: '#484828'
  tertiary-fixed: '#9defff'
  tertiary-fixed-dim: '#7fd3e3'
  on-tertiary-fixed: '#001f24'
  on-tertiary-fixed-variant: '#004f59'
  background: '#fff8f6'
  on-background: '#221a17'
  surface-variant: '#efdfd9'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  caption:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style

The design system focuses on the communal and sensory experience of Monjayaki, a dish defined by its warmth, texture, and interactive nature. The brand personality is vibrant, appetizing, and approachable, bridging the gap between traditional Japanese street food culture and a clean, modern digital experience.

The design style is a blend of **Modern Minimalism** and **Tactile warmth**. It prioritizes high-quality food photography through generous whitespace and a restricted but rich color palette. To evoke the "rustic yet clean" feel, the system uses organic curves and soft depth rather than harsh geometric lines, creating a digital environment that feels as welcoming as a neighborhood teppanyaki grill.

## Colors

The palette is derived from the Monjayaki cooking process. The **Primary Terracotta (#A0522D)** represents the savory, caramelized "hagashi" (the crispy bits), used for primary actions and key brand elements. The **Secondary Cream (#FFFDD0)** provides a soft, non-distracting canvas for content, reminiscent of the dashi-based batter.

**Accent colors** are used sparingly to signify freshness and variety: **Nori Green (#2D5A27)** for success states or healthy highlights, and **Ginger Red (#D2691E)** for emphasis or seasonal callouts. The background remains a crisp white to ensure food photography remains the focal point, though subtle rice-paper textures may be applied to large surface areas in the UI to add depth.

## Typography

The typography strategy balances character with legibility. **Plus Jakarta Sans** is used for headings; its rounded terminals and contemporary geometric structure echo the friendly, "calligraphy-inspired" curves requested. It provides an energetic, modern Japanese feel without sacrificing professional clarity.

For the body and labels, **Work Sans** is utilized for its exceptional readability on mobile devices. Its slightly wider apertures and grounded proportions ensure that ingredient lists and preparation steps are easy to digest. Headings should utilize the Primary color or the Neutral dark text for maximum contrast, while body text should maintain a comfortable line height to preserve the "airy" feel of the layout.

## Layout & Spacing

The design system employs a **Fluid Grid** model optimized for mobile-first consumption. A standard 8px base unit governs all spatial relationships.

On mobile devices, a 4-column grid is used with 20px outside margins to give content room to breathe. On tablet and desktop, this scales to an 8 or 12-column system with a maximum container width of 1200px. Spacing is intentionally generous (utilizing the `lg` and `xl` tokens) between sections to mimic the "clean and modern" aesthetic, ensuring the page never feels cluttered even when content-heavy. Elements should align to the grid but are encouraged to use asymmetrical padding to create a more dynamic, editorial flow.

## Elevation & Depth

To achieve a "slightly rustic yet clean" atmosphere, this design system avoids heavy shadows. Instead, it uses **Ambient Shadows**, soft, highly diffused blurs with a low opacity, typically 5-10%.

Depth is primarily established through **Tonal Layers**. Elements like "step-by-step" cards or ingredient lists sit on surfaces with a subtle Cream (#FFFDD0) background rather than a shadow, creating a stacked "paper-on-wood" effect. When shadows are used for interaction, like a hovering button, they should incorporate a tiny hint of the Primary brown in the shadow color to maintain warmth and prevent the UI from feeling sterile.

## Shapes

The shape language is defined by **Rounded (0.5rem base)** corners. This choice reinforces the friendly and communal personality of the brand.

- **Small Components:** Checkboxes and small tags use a 4px radius.
- **Medium Components:** Buttons and input fields use the standard 8px (0.5rem) radius.
- **Large Components:** Cards and image containers use the `rounded-lg` (1rem) or `rounded-xl` (1.5rem) tokens to create a soft, organic frame for food photography.
- **Action Elements:** Primary floating buttons may use pill-shapes to distinguish them from informational cards.

## Components

### Buttons

Primary buttons are solid Terracotta (#A0522D) with white text, featuring bold typography and 8px rounded corners. Secondary buttons use an outlined style with the Primary color or a solid Cream base with Terracotta text.

### Cards

Cards are the primary container for food photography and recipes. They should feature `rounded-lg` corners, a very subtle ambient shadow, and a 1px border in a slightly darker cream tint to define the edges against the white background.

### Chips & Tags

Ingredient tags use the Secondary Cream background with Ginger Red text. They are pill-shaped to provide a visual contrast to the more structured cards.

### Input Fields

Forms and search bars use a clean white background with a 1px soft-grey border that thickens and changes to Terracotta on focus. Label text is always Work Sans Semibold.

### Lists & Steps

For cooking instructions, use large, Ginger Red numerals paired with Work Sans body text. Each step should be separated by generous whitespace or a thin, light-cream horizontal rule to maintain the "clean" aesthetic.

### Image Containers

Food images should always have a subtle rounded corner. If the image is a hero shot, consider a slight "zoom-in" interaction effect to emphasize the "appetizing" nature of the product.
