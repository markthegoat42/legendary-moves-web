# Design Sample 3: Dynamic Grid

## Visual Concept
**Modular, Card-Based, Asymmetric Layouts, Sports-Forward Imagery**

### Hero Section
- Split layout: 55% left (text), 45% right (dynamic image grid)
- Left: Bold headline (Outfit, 84px, max-w-3xl) + subhead + CTA
- Right: 2x2 grid of athlete action shots with hover scale effects
- Each image has subtle overlay with key stat/number
- Height: 85vh
- Background: Clean white with subtle texture

### Content Architecture
**Modular Asymmetric Grid:**
```
[Hero - Split 55/45]

[Asymmetric Bento Section]
  Row 1: [8 col: Large feature card with image] [4 col: Stat card]
  Row 2: [4 col: Icon + text] [4 col: Quote card] [4 col: Icon + text]
  Row 3: [6 col: Service description] [6 col: Image with overlay]

[Horizontal Sliding Cards]
  → "How It Works" timeline
  → Cards slide in from right as you scroll
  → Overlap slightly for depth

[Image Mosaic Gallery]
  → 3-column grid of case studies/testimonials
  → Hover reveals details overlay
  → Each card expands on click

[Wide Stats Banner]
  → Full-width, maroon background
  → 4 animated stats in white
  → Numbers count up on scroll

[CTA Section]
  → Left: Headline "Ready to Start?"
  → Right: Form or calendar embed
```

### Key Features
- **Grid System:** 12-column responsive grid, all spans calculated perfectly
- **Card Hover:** Scale(1.02), shadow lift, image zoom inside container
- **Typography:** Clear hierarchy - 84px, 48px, 32px, 18px
- **Colors:** White base, Navy accents, Maroon CTAs, Gold highlights
- **Imagery:** High-quality athlete photos, always with subtle effects
- **Spacing:** 96px between major sections, 24px between cards
- **Motion:** Stagger animations on card grids, smooth slide-ins

### Service Pages Layout
1. Split Hero (text left, image grid right)
2. Asymmetric Bento Grid (mixed content types)
3. Horizontal Sliding Cards (timeline/process)
4. Image Mosaic (testimonials/case studies)
5. Wide Stats Banner (full-width, animated)
6. Split CTA (text + action side by side)

### Responsive Behavior
- Desktop: Asymmetric multi-column layouts
- Tablet: 2-column stacked grids
- Mobile: Single column, cards stack with full-width images

### Pros
- Balanced between sporty and professional
- Highly modular and flexible
- Great visual interest with asymmetry
- Clear content hierarchy
- Most innovative of the three

### Cons
- Requires more careful content planning
- Could feel "busy" if not executed well
- Need high-quality imagery throughout
