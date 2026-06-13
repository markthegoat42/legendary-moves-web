'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TypewriterText from '@/components/TypewriterText';
import StatStrip from '@/components/StatStrip';

export default function ServicesPage() {
  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      {/* HERO */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: '100vh',
          overflow: 'hidden',
          paddingBottom: 'clamp(4rem, 8vh, 8rem)'
        }}
      >
        {/* Layer 1: Background image with duotone filter */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/basketball-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%) contrast(1.1) brightness(0.6)',
            zIndex: 0
          }}
        />

        {/* Layer 2: Dark gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)',
            zIndex: 1
          }}
        />

        {/* Layer 3: Content */}
        <div className="container-lg w-full" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            {/* Gold rule */}
            <div className="divider-gold mb-6" style={{ marginLeft: 0, background: 'var(--accent-gold)' }} />

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(4.5rem, 10vw, 8.75rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--text-on-dark)',
              textShadow: '0 2px 24px rgba(0, 0, 0, 0.4)',
              marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)'
            }}>
              Three ways we <em style={{ fontStyle: 'italic', color: 'var(--accent-maroon)' }}>help</em>.
            </h1>

            {/* Tagline */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--accent-gold)',
              marginBottom: 'clamp(2rem, 4vh, 3rem)'
            }}>
              WHAT WE ACTUALLY DO FOR ATHLETES AND FAMILIES
            </p>

            {/* CTA Button */}
            <Link
              href="/book-a-call"
              className="btn-primary inline-block"
              style={{
                padding: '1rem 2rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textDecoration: 'none'
              }}
            >
              SCHEDULE A CALL ›
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute"
          style={{ bottom: '2rem', right: '2rem', fontSize: '1.5rem', color: 'var(--text-on-dark)', opacity: 0.5, zIndex: 2 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.div>
      </section>

      {/* STAT STRIP */}
      <StatStrip
        stats={[
          { value: 3, label: 'CORE SERVICES' },
          { value: 50, suffix: '+', label: 'NIL DEALS REVIEWED' },
          { value: 100, suffix: '%', label: 'NCAA COMPLIANT' },
        ]}
        background="cream"
      />

      {/* SECTION 2 - NIL Representation */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: '6rem', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <h2
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-charcoal)',
                  marginBottom: 'var(--spacing-lg)',
                }}
              >
                NIL <em style={{ fontStyle: 'italic', color: 'oklch(35% 0.14 22)' }}>representation</em>.
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base drop-cap">
                Most NIL deals are written by collectives and brands who do this every day. The athlete and family see one for the first time and have to decide on the spot.
              </p>
              <p className="body-base">
                We review every offer before you sign. We negotiate the terms that actually matter — payment timing, exclusivity, image rights, exit clauses. We catch the language that risks NCAA or state-level eligibility. And when legal review is needed, we work with a sports attorney to make sure the contract protects your athlete first.
              </p>
            </div>

            <div className="mb-12">
              <p className="text-xs uppercase tracking-wider font-mono mb-6" style={{ color: 'var(--color-gray-600)' }}>
                WHAT THIS LOOKS LIKE
              </p>
              <div className="space-y-0 max-w-3xl">
                <div className="border-t-2 pt-4 pb-4" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    CONTRACT REVIEW BEFORE SIGNING
                  </p>
                </div>
                <div className="border-t-2 pt-4 pb-4" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    NEGOTIATION ON YOUR BEHALF
                  </p>
                </div>
                <div className="border-t-2 pt-4 pb-4" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    COMPLIANCE CHECK (NCAA + STATE)
                  </p>
                </div>
                <div className="border-t-2 pt-4 pb-4" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    ATTORNEY REFERRAL FOR LEGAL REVIEW
                  </p>
                </div>
                <div className="border-t-2 pt-4 pb-4 border-b-2" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    ONGOING SUPPORT FOR FUTURE DEALS
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl">
              <p className="body-base">
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', color: 'oklch(35% 0.14 22)', fontWeight: 600 }}>When This Matters</span> — As soon as the first offer comes in. Even small deals can have terms that cost you later.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="relative" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="w-full"
          style={{
            height: '1px',
            background: 'var(--color-accent-gold)',
            opacity: 0.4,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4" style={{ background: 'var(--color-white)' }}>
          <span style={{ color: 'var(--color-accent-gold)', opacity: 0.6, fontSize: '1rem' }}>✦</span>
        </div>
      </div>

      {/* SECTION 3 - Recruiting Advisory */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <h2
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-charcoal)',
                  marginBottom: 'var(--spacing-lg)',
                }}
              >
                Recruiting <em style={{ fontStyle: 'italic', color: 'oklch(35% 0.14 22)' }}>advisory</em>.
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base drop-cap">
                Coaches see thousands of films. Most never make it past the first thirty seconds. We've sat in those rooms and we know what gets attention and what doesn't.
              </p>
              <p className="body-base">
                We start with an honest assessment — where your athlete realistically fits, which programs are realistic targets, and what's missing from the current case for them. Then we work the network: we have direct relationships with coaches at every level, built over fourteen years inside the programs. We make introductions, we coach the conversations, and we help you decide between offers when they come.
              </p>
            </div>

            <div className="mb-12">
              <p className="text-xs uppercase tracking-wider font-mono mb-6" style={{ color: 'var(--color-gray-600)' }}>
                WHAT THIS LOOKS LIKE
              </p>
              <div className="space-y-0 max-w-3xl">
                <div className="border-t-2 pt-4 pb-4" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    FILM REVIEW AND BREAKDOWN
                  </p>
                </div>
                <div className="border-t-2 pt-4 pb-4" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    HONEST PLAYER ASSESSMENT
                  </p>
                </div>
                <div className="border-t-2 pt-4 pb-4" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    TARGET SCHOOL STRATEGY
                  </p>
                </div>
                <div className="border-t-2 pt-4 pb-4" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    DIRECT COACH OUTREACH
                  </p>
                </div>
                <div className="border-t-2 pt-4 pb-4 border-b-2" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    OFFER EVALUATION AND COMPARISON
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl">
              <p className="body-base">
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', color: 'oklch(35% 0.14 22)', fontWeight: 600 }}>When This Matters</span> — Earlier than most families think. The recruiting timeline is years, not months.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="relative" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="w-full"
          style={{
            height: '1px',
            background: 'var(--color-accent-gold)',
            opacity: 0.4,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4" style={{ background: 'var(--color-white)' }}>
          <span style={{ color: 'var(--color-accent-gold)', opacity: 0.6, fontSize: '1rem' }}>✦</span>
        </div>
      </div>

      {/* SECTION 4 - Parent Education */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <h2
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-charcoal)',
                  marginBottom: 'var(--spacing-lg)',
                }}
              >
                Parent <em style={{ fontStyle: 'italic', color: 'oklch(35% 0.14 22)' }}>education</em>.
              </h2>
            </div>

            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base drop-cap">
                The recruiting and NIL system is complicated on purpose. The complications protect the schools and the brands. Parents are usually the ones making decisions and they're the ones with the least information.
              </p>
              <p className="body-base">
                We run sessions for parents — one-on-one or in small groups — covering the timeline, the terminology, the questions to ask, the red flags, and the predatory services to avoid. The goal isn't to make you dependent on us. The goal is to make you informed enough to make the right call even when we're not in the room.
              </p>
            </div>

            <div className="mb-12">
              <p className="text-xs uppercase tracking-wider font-mono mb-6" style={{ color: 'var(--color-gray-600)' }}>
                WHAT THIS LOOKS LIKE
              </p>
              <div className="space-y-0 max-w-3xl">
                <div className="border-t-2 pt-4 pb-4" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    PRIVATE Q&A SESSIONS
                  </p>
                </div>
                <div className="border-t-2 pt-4 pb-4" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    WORKSHOPS ON NIL AND RECRUITING TIMELINE
                  </p>
                </div>
                <div className="border-t-2 pt-4 pb-4" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    HOW TO READ AND COMPARE OFFERS
                  </p>
                </div>
                <div className="border-t-2 pt-4 pb-4" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    RED FLAGS AND PREDATORY SERVICE WARNINGS
                  </p>
                </div>
                <div className="border-t-2 pt-4 pb-4 border-b-2" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-sm uppercase tracking-wide font-mono">
                    ONGOING ACCESS FOR QUESTIONS
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl">
              <p className="body-base">
                <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', color: 'oklch(35% 0.14 22)', fontWeight: 600 }}>When This Matters</span> — Before you need it. The decisions are easier when you've already seen what they look like.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - Final CTA */}
      <section style={{ backgroundColor: 'var(--color-navy)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6 border-r-0 md:border-r-2 md:pr-8 pb-8 md:pb-0" style={{ borderColor: 'var(--color-gray-600)' }}>
                <h2 className="heading-md uppercase mb-6" style={{ color: 'var(--color-white)', fontWeight: 700 }}>
                  READY TO TALK?
                </h2>
              </div>

              <div className="col-span-12 md:col-span-6 md:pl-8">
                <p className="body-base mb-8 text-sm" style={{ color: 'var(--color-gray-300)' }}>
                  Schedule a 15-minute call. No commitment, no pressure. Just honest insight into your athlete's path forward.
                </p>
                <Link
                  href="/book-a-call"
                  className="btn btn-primary uppercase text-xs tracking-wider"
                >
                  Schedule Call
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
