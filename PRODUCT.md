# Legendary Moves - Product Context

## What This Is

**Register: Brand website**

Legendary Moves is a premium sports management brand site focused on lead generation. It markets NIL deal negotiation, college recruiting advisory, and parent education services to student-athletes and their families. The site drives conversions through a "Schedule Call" CTA funnel pointing to `/book-a-call`.

## Who Uses This

**Primary users:**
- **Student-athletes** (high school → college transition, navigating NIL opportunities)
- **Parents** (seeking guidance and education on the recruiting/NIL process)
- **Coaches/advisors** (researching services for their athletes)

**User journey:**
1. Land on homepage (full-viewport Apple-style hero with video)
2. Explore services (NIL representation, recruiting connections, parent education)
3. Build trust (Founder credentials: Chris Scott, 14 years college + NFL)
4. Book consultation (no-pressure 15-minute call)

## Primary Purpose

**Generate leads** — Drive users to book a consultation call with Chris Scott.

The entire site architecture supports this conversion funnel:
- Hero CTA: "Schedule Call"
- Navigation: "Book a Call" in primary nav + sticky CTA button
- FinalCTA section: Navy background section on homepage with "Ready to Talk?" CTA
- Contact page: Reinforces consultation booking

## Brand Personality

**Premium** — The dominant personality trait.

The design conveys premium through:
- **Apple-style full-viewport sections** (homepage: 6 sections at min-height: 100dvh)
- **Cinematic motion** (parallax video, scroll progress bar, stagger reveals, hover lifts)
- **Championship aesthetic** (maroon/navy/gold palette, athletic sophistication)
- **High-end typography** (Montserrat display, massive responsive clamp() scaling)
- **Restrained color use** (white dominant ~70%, maroon accent ~10-15%, gold structural ~5-8%)

**Supporting traits:**
- **Trustworthy**: 14-year insider credibility, terminal-style `[TAGS]` for technical authority
- **Championship**: Deeper maroon replacing red, navy for gravitas, gold for legacy
- **Approachable**: "No commitment, no pressure" messaging, parent education focus

## Anti-References

**What This Is NOT:**
- Not a SaaS product (no authenticated dashboard, user accounts, or logged-in features)
- Not an agency portfolio (not showcasing past work — showcasing Chris Scott's expertise)
- Not a content hub (no blog, resources library, or ongoing content strategy)
- Not a generic sports marketing site (highly specific to NIL representation + college recruiting)

**Design anti-patterns to avoid:**
- Generic sports website tropes (avoid stock athlete photos, cliché motivational quotes)
- Overly aggressive sales tactics (maintain "no pressure" consultation messaging)
- Cluttered layouts (embrace white space, Octagon-inspired density without chaos)
- Cheap AI design patterns (no excessive gradients, no cards-within-cards-within-cards)

## Conversion Funnel

**Primary conversion path:**
```
Homepage Hero
  → Services exploration
    → Founder credibility
      → PhilosophyQuote (maroon break)
        → Process explanation
          → FinalCTA
            → /book-a-call form submission
```

**Secondary entry points:**
- `/about` → Learn about Chris Scott → Book a Call
- `/services` → Understand offerings → Book a Call
- `/nil` → NIL-specific education → Book a Call
- `/contact` → General inquiries → Book a Call

**Critical conversion point:**
The `/book-a-call` page is the **primary business objective**. Form submission is the key success metric. This page requires production-grade hardening for:
- Form validation (email, phone, required fields)
- Error handling (network timeouts, double submissions)
- Accessibility (screen readers, keyboard nav, error announcements)
- Text overflow (long names, messages)
- Success state protection (prevent re-submission)

## Technical Foundation

**Stack:**
- Next.js 16.2.6 (App Router, React 19.2.4)
- Framer Motion 12.38.0 (scroll-triggered animations, parallax)
- Tailwind CSS v4 (utility-first styling)
- TypeScript (type safety)

**Design system:**
- Documented in `DESIGN.md` (Championship Palette v2, typography scales, spacing, motion)
- CSS custom properties in `app/globals.css`
- Reusable components: `Navigation`, `Footer`, `ScrollProgress`, `TypewriterText`

**Homepage uniqueness:**
- Only page with scroll-snap behavior (`.homepage-scroll-snap` class applied via useEffect)
- Full-viewport sections (100dvh) with dramatically scaled typography
- All other pages (`/about`, `/services`, `/nil`, `/book-a-call`, `/contact`) use conventional density

## Success Criteria

**For users:**
- Instantly understand what Legendary Moves offers (NIL + recruiting services)
- Trust Chris Scott's 14-year credibility
- Feel confident booking a no-pressure consultation call

**For the business:**
- Maximize form submissions on `/book-a-call`
- Communicate premium positioning (not a commodity service)
- Differentiate from generic sports agencies

**For developers:**
- Production-ready form handling (validation, errors, accessibility)
- Maintainable design system (DESIGN.md as single source of truth)
- Performance resilience (network timeouts, edge cases, text overflow)
