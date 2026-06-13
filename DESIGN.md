# Legendary Moves - Design System

## Championship Color Palette v2

The site uses a restrained, high-impact color system designed around championship athletics: deeper maroon replacing cardinal red, navy for dark section backgrounds, and expanded gold for structural micro-accents.

### Color Variables

```css
--color-accent-red: oklch(35% 0.14 22);        /* Maroon - deeper, more sophisticated */
--color-accent-red-hover: oklch(30% 0.14 22);  /* Slightly darker maroon for hover */
--color-accent-gold: oklch(70% 0.10 80);       /* Antique gold - micro-accent only */
--color-navy: oklch(22% 0.06 250);             /* Navy - dark section backgrounds */
--color-charcoal: oklch(20% 0.01 265);         /* Charcoal - body text and form borders only */
--color-white: oklch(99% 0.005 265);           /* Dominant background */
```

### Color Strategy

**White Dominant (~65-70% of visual surface)**
- All page backgrounds
- Major content areas
- Provides breathing room and professionalism

**Maroon - Primary Accent (~10-15% visual weight)**
Where maroon appears:
- All primary CTA buttons (Hero, Navigation, FinalCTA, Contact, Book pages)
  - Background: `var(--color-accent-red)`
  - Text: white
  - Hover: `var(--color-accent-red-hover)`
- PhilosophyQuote section background (homepage punchy break)
  - Background: `var(--color-accent-red)`
  - Quote text: white
  - Attribution: white with transparency
- Process numbered steps (01, 02, 03) on homepage

**Gold - Structural Micro-Accent (~5-8% visual weight)**
Expanded from v1. Used for structural hierarchy and visual breaks:
- Page-level header underlines (below h1 on every page: Hero, About, Services, NIL, Contact, Book a Call)
- Section [TAG] underlines (border-b-2 on all page-level section tags)
- Footer section dividers (top and bottom borders at 40% opacity)
- About page Programs section (gold underline above university list)
- Footer [FOUNDED BY CHRIS SCOTT] tag
- Founder section [14 YRS / COLLEGE + NFL] credential tags (homepage and About page)
- About page Programs section [COLLEGE] and [PRO] labels

**Navy - Dark Section Backgrounds (~10-15% visual weight)**
Replaces charcoal for dark backgrounds:
- Footer background
- FinalCTA background
- All dark-themed sections site-wide

**Charcoal - Text and Form Borders Only**
No longer used for dark section backgrounds. Limited to:
- All body text site-wide
- All h1, h2, h3 headings
- Form input borders
- Internal section dividers (non-gold borders)

### Typography

**Championship Pairing:**
- Display: **Inter Tight** (bold, condensed, athletic - headings and uppercase labels)
- Body: **Inter** (clean, readable, modern - paragraphs and UI text)

This pairing conveys authority, athleticism, and premium quality without falling into generic territory. Inter Tight's condensed nature gives headlines powerful impact, while Inter provides excellent readability for body text.

**Modular Type Scale (1.25 ratio with fluid sizing):**
```css
/* Marketing/brand content uses clamp() for responsive scaling */
/* Body text stays fixed for optimal readability */
--font-size-xs: 0.8rem;                                    /* 12.8px - labels, captions */
--font-size-sm: 0.875rem;                                  /* 14px - secondary text */
--font-size-base: 1rem;                                    /* 16px - body text (fixed) */
--font-size-lg: 1.125rem;                                  /* 18px - large body */
--font-size-xl: clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem);   /* 20-24px - subheadings */
--font-size-2xl: clamp(1.5rem, 1.2rem + 1vw, 2rem);       /* 24-32px - small headings */
--font-size-3xl: clamp(2rem, 1.5rem + 1.5vw, 3rem);       /* 32-48px - medium headings */
--font-size-4xl: clamp(2.5rem, 1.75rem + 2.5vw, 4rem);    /* 40-64px - large headings */
--font-size-5xl: clamp(3.5rem, 2rem + 4vw, 6rem);         /* 56-96px - hero headings */
--font-size-6xl: clamp(4rem, 2.5rem + 5vw, 8rem);         /* 64-128px - display */
```

**Typography Details:**
- Letter spacing: Tighter tracking (-0.015em to -0.03em) on large display text for condensed, athletic feel
- Line height: 1.1-1.2 for headings (tight), 1.6 for body text (comfortable)
- Font kerning: Normal (enables proper kerning pairs)
- Optimal reading length: 65 characters per line for body text
- Font weights: 400 (Regular), 600 (Semibold), 700 (Bold), 800 (ExtraBold)

**Heading Hierarchy:**

*Homepage (Apple-style full-viewport):*
- Hero h1: `fontSize: clamp(4.5rem, 14vw, 9rem)`, `fontWeight: 700`, uppercase
- Services/Process h2: `fontSize: clamp(3.5rem, 10vw, 7rem)`, `fontWeight: 700`, uppercase
- Service cards h3: `fontSize: clamp(2.5rem, 7vw, 4.5rem)`, `fontWeight: 700`, uppercase
- Founder h2: `fontSize: clamp(4rem, 12vw, 8rem)`, `fontWeight: 700`, uppercase
- PhilosophyQuote: `fontSize: clamp(3rem, 7vw, 5.5rem)`, `fontWeight: 600`
- FinalCTA h2: `fontSize: clamp(4rem, 12vw, 8rem)`, `fontWeight: 700`, uppercase

*Inner Pages (conventional density):*
- Page-level h1: `fontSize: clamp(4rem, 14vw, 8rem)`, `fontWeight: 900`, uppercase
- Section h2: `fontSize: clamp(2.5rem, 8vw, 5rem)`, `fontWeight: 900`, uppercase
- Service/process h3: `fontSize: var(--font-size-xl)`, `fontWeight: 700`, uppercase

### Spacing - Rhythm through Contrast

The spacing system creates visual rhythm by pairing tight grouping of related elements with generous separation between sections.

```css
/* Tight grouping for related elements, generous separation between sections */
--space-2xs: 0.25rem;                               /* 4px - micro spacing */
--space-xs: 0.5rem;                                 /* 8px - tight grouping */
--space-sm: 0.75rem;                                /* 12px - related elements */
--space-md: 1rem;                                   /* 16px - standard gap */
--space-lg: 1.5rem;                                 /* 24px - section padding */
--space-xl: 2rem;                                   /* 32px - between components */
--space-2xl: clamp(3rem, 2rem + 3vw, 5rem);        /* 48-80px - section separation */
--space-3xl: clamp(4rem, 3rem + 4vw, 7rem);        /* 64-112px - major sections */
--space-4xl: clamp(6rem, 4rem + 6vw, 10rem);       /* 96-160px - page sections */
```

**Spacing Philosophy:**
- **Tight grouping (8-12px)** for related elements within a component
- **Generous separation (48-160px)** between distinct sections
- **Fluid spacing** using `clamp()` for major sections - breathes naturally on larger screens
- **Varied spacing** creates rhythm and visual interest - not all gaps should be equal

### Layout

**Container:**
- Max width: 75rem (1200px)
- Horizontal padding: `clamp(1rem, 3vw, 2rem)` - fluid padding adapts to viewport
- Text containers: 65ch max-width for optimal reading length

**Grid:**
- 12-column grid system via Tailwind
- Gap: Use semantic spacing tokens, not arbitrary values
- Prefer `gap` over margins for sibling spacing (eliminates margin collapse issues)

**Layout Principles:**
- Use Flexbox for 1D layouts (most component internals, rows of items)
- Use Grid for 2D layouts (page structure, dashboards, coordinated rows AND columns)
- Asymmetric compositions feel more designed than everything centered
- Space + weight can achieve hierarchy without adding color/size contrast

### Hero Section

**Full-screen treatment:**
- `min-height: 100dvh` (handles mobile address bars)
- Flex column with vertical centering
- Video background with dark vignette overlay
- White text on dark background
- Red CTA button stands out against dark background

### Motion (Cinematic Animations)

**Animation Timing:**
- Hero/page-header sections: `duration: 0.6`
- Body content sections (Founder, Services, Process): `duration: 0.5, delay: 0.1`
- Final CTA, lists, simple sections: `duration: 0.35, delay: 0.1`

**Transitions:**
```css
--transition-fast: 150ms ease-out;
--transition-base: 250ms ease-out;
--transition-slow: 350ms ease-out;
```

**Cinematic Effects:**
1. **Scroll Progress Indicator**: 2px gold bar at top of viewport, animates width based on scroll position (0-100%)
2. **Hero Video Parallax**: Background video translates up at 50% scroll speed using `useTransform(scrollY, [0, 800], [0, -200])`
3. **CTA Hover Lifts**: All primary CTAs lift 2px on hover with subtle shadow (`y: -2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'`)
4. **Stagger Reveals**: Services grid and Process rows reveal with 0.1s stagger delay between items
5. **Fade + Slide**: Grid items fade in with slight y/x translation for dynamic reveals

### Button Styles

**Primary Button (.btn-primary):**
- Background: `var(--color-accent-red)`
- Text: white
- Border: 2px solid `var(--color-accent-red)`
- Hover: `var(--color-accent-red-hover)` with white text
- Uppercase, tracking-wider
- Font size: `var(--font-size-sm)`

**Outline Button (.btn-outline):**
- Background: transparent
- Text: `var(--color-charcoal)`
- Border: 2px solid `var(--color-charcoal)`
- Hover: charcoal background with white text

### Design Principles

1. **Restraint**: Maroon is powerful because it's rare. Gold appears only where it adds structural meaning.
2. **Hierarchy**: Typography scale and weight create clear information hierarchy.
3. **Octagon Density**: Content-dense layouts with `--spacing-lg` section padding. No empty screens.
4. **Navy over charcoal**: Navy for dark section backgrounds creates depth. Charcoal reserved for text/forms.
5. **Championship aesthetic**: Deeper maroon for sophistication, antique gold for legacy, navy for gravitas.
6. **Cinematic motion**: Parallax, stagger reveals, hover lifts, and scroll progress create engagement.

### Homepage Approach - Octagon-Inspired Simplicity

**The homepage is intentionally minimal - a bold statement landing page that directs to detailed content.**

Inspired by Octagon.com's "BRANDS" page, the homepage follows a simple two-section structure:

1. **Hero** - Full-screen bold italic headline with video background
2. **QuickLinks** - On-page navigation cards to main sections

**Why This Works:**
- Simple, powerful first impression
- Bold italic typography creates immediate visual impact
- Bright, vibrant color cards stand out
- Clear navigation to detailed content on dedicated pages
- No scroll fatigue - everything visible in two screens
- Detailed content lives on Services, About, NIL pages where users can deep-dive

**Typography Style:**
- Hero headline: Bold italic display font (Inter Tight 800 italic)
- Massive scale: `clamp(5rem, 16vw, 12rem)`
- Gold gradient on "strengths" for emphasis
- Letter-spacing: `-0.04em` for tight, athletic condensed feel

**QuickLinks Cards:**
- Bright, saturated colors (higher chroma than rest of site)
- Card colors: Bright gold (`oklch(75% 0.15 80)`), bright maroon (`oklch(50% 0.22 22)`), bright navy (`oklch(60% 0.15 250)`)
- 2x2 grid on desktop, stacked on mobile
- Hover lift animation
- Arrow icons for directional cue

**Scroll Behavior:**
- No scroll-snap (simplified from previous Apple-style approach)
- Natural scroll between hero and quick links
- Inner pages have full content and conventional scrolling
