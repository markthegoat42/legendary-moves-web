# Design Sample 2: Premium Motion

## Visual Concept
**Sleek, Modern, Glassmorphic, Tech-Sports Fusion**

### Hero Section
- Asymmetric layout: Text left (60%), Floating visual right (40%)
- Headline (Satoshi, 72px): "NIL Representation"
- Floating glass card overlapping hero with key stat
- Smooth blur backdrop (backdrop-filter: blur(24px))
- Subtle animated gradient mesh background
- Height: 100vh

### Content Architecture
**Card-Based Flow:**
```
[Hero - Asymmetric]
  → Text left: Headline + Subhead + CTA
  → Right: Floating glass stat card with animated number

[Horizontal Scroll Section]
  → Title pinned left
  → 4 glass cards scroll horizontally (snap-scroll)
  → Each card: Icon + Headline + Description

[Split Scroll Pin]
  → Left column pinned: "What We Review"
  → Right column scrolls: 6 animated feature cards

[Bento Grid - 3x3]
  → Glassmorphic cards with hover lift
  → Mix of text, stats, and imagery
  → grid-flow-dense for zero gaps

[Sticky CTA]
  → Floating glass card at bottom (sticky)
```

### Key Features
- **Glass Effect:** `backdrop-filter: blur(20px)`, `bg-white/10`, `border: 1px solid white/20`
- **Motion:** Smooth spring physics (cubic-bezier(0.34, 1.56, 0.64, 1))
- **Hover:** Cards lift with shadow (translateY: -8px, shadow-2xl)
- **Scroll:** Horizontal snap scrolling, pinned sections, scrub animations
- **Spacing:** 120px vertical, generous padding
- **Colors:** White/Navy with gold accents, subtle gradients

### Service Pages Layout
1. Asymmetric Hero (text + floating card)
2. Horizontal Scroll Features (4-5 cards)
3. Split Pin Section (pinned title, scrolling content)
4. Gapless Bento Grid (3x3 glass cards)
5. Animated Stats Bar (numbers count up on scroll)
6. Floating CTA Card (glass effect, sticky)

### Pros
- Very modern and innovative
- Smooth, premium feel
- Great motion/interactivity
- Sleek without being cold

### Cons
- Might feel too "tech" and not sporty enough
- Glass effects require good implementation
- Could be overused trend
