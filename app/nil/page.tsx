'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TypewriterText from '@/components/TypewriterText';

export default function NILPage() {
  return (
    <div className="bg-white">
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
            backgroundImage: 'url(/hero-background.avif)',
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
              Name, image, <em style={{ fontStyle: 'italic', color: 'var(--accent-maroon)' }}>likeness</em>.
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
              WHAT YOU SIGN NOW MATTERS FOR THE NEXT FOUR YEARS
            </p>

            {/* CTA Button */}
            <Link href="/book-a-call" className="btn-primary inline-block">
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

      {/* SECTION 2 - The Landscape */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: '6rem', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
            </div>

            <div className="max-w-4xl">
              <div className="border-l-4 pl-6 space-y-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="body-base drop-cap">
                  NIL legislation rewrote college athletics in 2021. The schools, the collectives, and the brands have spent five years building infrastructure around it. Most families are seeing their first deal and have to read it for the first time.
                </p>
                <p className="body-base">
                  That's not a fair fight. The other side has done this hundreds of times. You're doing it once, with a clock running, with a kid who wants to say yes.
                </p>
                <p className="body-base">
                  That's where we come in.
                </p>
              </div>
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

      {/* SECTION 3 - What We Review */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
            </div>

            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base">
                Every NIL contract has the same handful of clauses that decide whether the deal is worth signing. Most of them aren't obvious unless you've read a hundred of them.
              </p>
            </div>

            <div className="space-y-0 max-w-3xl">
              <div className="border-t-2 pt-6 pb-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="body-base">
                  <span className="text-xs uppercase tracking-wider mr-3" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', color: 'oklch(35% 0.14 22)', fontWeight: 600 }}>Payment Timing</span>
                  — When you actually get paid, and what conditions trigger payment. Brands often delay or backload payments to the point where the headline number isn't real.
                </p>
              </div>

              <div className="border-t-2 pt-6 pb-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="body-base">
                  <span className="text-xs uppercase tracking-wider mr-3" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', color: 'oklch(35% 0.14 22)', fontWeight: 600 }}>Exclusivity</span>
                  — What you can't do, who you can't endorse, how long the lock-up lasts. Wrong exclusivity language kills future deals worth more.
                </p>
              </div>

              <div className="border-t-2 pt-6 pb-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="body-base">
                  <span className="text-xs uppercase tracking-wider mr-3" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', color: 'oklch(35% 0.14 22)', fontWeight: 600 }}>Image Rights</span>
                  — What the brand can use, where, for how long, and after the deal ends. Many contracts grant rights in perpetuity for a one-time fee.
                </p>
              </div>

              <div className="border-t-2 pt-6 pb-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="body-base">
                  <span className="text-xs uppercase tracking-wider mr-3" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', color: 'oklch(35% 0.14 22)', fontWeight: 600 }}>Performance Clauses</span>
                  — Conditions tied to your athlete's stats, social media, or playing time that can void the deal or trigger clawbacks.
                </p>
              </div>

              <div className="border-t-2 pt-6 pb-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="body-base">
                  <span className="text-xs uppercase tracking-wider mr-3" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', color: 'oklch(35% 0.14 22)', fontWeight: 600 }}>Termination Terms</span>
                  — When the brand can walk away versus when you can. Almost always asymmetric in the brand's favor unless negotiated.
                </p>
              </div>

              <div className="border-t-2 pt-6 pb-6 border-b-2" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="body-base">
                  <span className="text-xs uppercase tracking-wider mr-3" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', color: 'oklch(35% 0.14 22)', fontWeight: 600 }}>Eligibility Language</span>
                  — Whether the deal complies with NCAA rules and your state's NIL law. A non-compliant deal can cost a season, a scholarship, or both.
                </p>
              </div>
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

      {/* SECTION 4 - What Families Miss */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <div className="divider-gold mb-6" style={{ marginLeft: 0 }} />
              <h3 style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.2,
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Without representation, the most common <em style={{ fontStyle: 'italic', color: 'var(--accent-maroon)' }}>mistakes</em>.
              </h3>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    01
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    Signing the first version of the contract without negotiating. Most contracts have room. Brands expect counter-offers.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    02
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    Not reading the exclusivity clause. Athletes lock themselves out of better deals later for a small upfront payment.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    03
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    Missing the state-specific compliance language. Each state has different NIL laws. What's legal in Texas may violate rules in California.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    04
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    Treating the deal as one-time income. The IRS treats NIL income as 1099 self-employment. No withholding, quarterly taxes apply.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - How It Works */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <div className="divider-gold mb-6" style={{ marginLeft: 0 }} />
              <h3 style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                fontWeight: 400,
                lineHeight: 1.2,
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                How we work — start to <em style={{ fontStyle: 'italic', color: 'var(--accent-maroon)' }}>finish</em>.
              </h3>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    01
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    You send us the offer. Email or upload the contract.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    02
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    Initial review within one business day. We flag anything urgent.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    03
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    Compliance check. We verify the deal works under NCAA rules and your state's NIL law. If legal review is needed, we work with a sports attorney.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    04
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    Deal assessment. We tell you what the contract is actually worth and what we'd negotiate.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    05
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    Negotiation. We work with the brand on terms that matter — payment, exclusivity, image rights, exit.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    06
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    Signing. You sign a deal that protects your athlete now and doesn't compromise their future.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - Final CTA */}
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
                <h2 className="mb-6" style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--color-white)' }}>
                  Have a deal to <em style={{ fontStyle: 'italic', color: 'oklch(35% 0.14 22)' }}>review</em>?
                </h2>
              </div>

              <div className="col-span-12 md:col-span-6 md:pl-8">
                <p className="body-base mb-8 text-sm" style={{ color: 'var(--color-gray-300)' }}>
                  Send us the contract. We'll tell you whether it's worth signing — and what to fix if it isn't.
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
