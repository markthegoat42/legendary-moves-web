'use client';

import Hero from '@/components/Hero';
import InfiniteMarquee from '@/components/InfiniteMarquee';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden w-full max-w-full">
      <Hero />

      {/* Services Preview Card */}
      <Link href="/services" className="block">
        <motion.section
          className="relative overflow-hidden border-b-2"
          style={{
            minHeight: '80vh',
            borderColor: 'var(--color-charcoal)',
            display: 'flex',
            alignItems: 'center'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/services-preview.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              scale: 1.0
            }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          />

          {/* Perf: these two gradient layers used to animate forever (x/y/opacity).
              Constant compositor work competes with scrolling, so they are now
              static. Same look, zero per-frame cost. */}
          {/* Navy layer - bottom swell */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to top,
                  oklch(58% 0.22 250) 0%,
                  oklch(52% 0.20 250) 15%,
                  oklch(60% 0.24 250) 25%,
                  oklch(54% 0.21 250) 35%,
                  transparent 60%
                )
              `,
              opacity: 0.95
            }}
          />

          {/* Maroon layer - rolling crest */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(110deg,
                  transparent 0%,
                  oklch(62% 0.26 22) 20%,
                  oklch(58% 0.24 22) 30%,
                  oklch(64% 0.28 22) 45%,
                  oklch(60% 0.25 22) 60%,
                  transparent 80%
                )
              `,
              opacity: 0.9
            }}
          />

          {/* Light overlay - maintains readability */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)'
            }}
          />

          {/* Content */}
          <div className="container-lg relative z-10">
            <div className="max-w-4xl">
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: 'var(--color-white)',
                  letterSpacing: '-0.02em'
                }}
              >
                What we <em style={{ fontStyle: 'italic', color: 'var(--color-accent-gold)' }}>do</em>.
              </h2>
              <p
                className="text-xl mb-8"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300
                }}
              >
                NIL. Recruiting. Education.
              </p>
              <span
                className="inline-block text-sm uppercase tracking-wider"
                style={{
                  color: 'var(--color-white)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                  paddingBottom: '4px'
                }}
              >
                See services →
              </span>
            </div>
          </div>
        </motion.section>
      </Link>

      {/* Founder Preview Card */}
      <Link href="/about" className="block">
        <motion.section
          className="relative overflow-hidden border-b-2"
          style={{
            minHeight: '80vh',
            borderColor: 'var(--color-charcoal)',
            display: 'flex',
            alignItems: 'center'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background Image - LSU practice photo */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/where-deals-made.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              scale: 1.0
            }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          />

          {/* Gold-tinted dark overlay for contrast */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(135deg, oklch(70% 0.10 80 / 0.30) 0%, oklch(70% 0.10 80 / 0.25) 100%)'
            }}
          />

          {/* Content */}
          <div className="container-lg relative z-10">
            <div className="max-w-4xl" style={{ textAlign: 'center', margin: '0 auto' }}>
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: 'var(--color-white)',
                  letterSpacing: '-0.02em'
                }}
              >
                Where deals are <em style={{ fontStyle: 'italic', color: 'var(--color-accent-gold)' }}>made</em>.
              </h2>
              <p
                className="text-xl mb-8"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300
                }}
              >
                Fourteen years. Six programs. One NFL franchise.
              </p>
              <span
                className="inline-block text-sm uppercase tracking-wider"
                style={{
                  color: 'var(--color-white)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                  paddingBottom: '4px'
                }}
              >
                About →
              </span>
            </div>
          </div>
        </motion.section>
      </Link>

      {/* Approach Preview Card */}
      <Link href="/services" className="block">
        <motion.section
          className="relative overflow-hidden border-b-2"
          style={{
            minHeight: '80vh',
            borderColor: 'var(--color-charcoal)',
            display: 'flex',
            alignItems: 'center'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/charles-bassey-block.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
              scale: 1.0
            }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%)'
            }}
          />

          {/* Content */}
          <div className="container-lg relative z-10">
            <div className="max-w-4xl">
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: 'var(--color-white)',
                  letterSpacing: '-0.02em'
                }}
              >
                No <em style={{ fontStyle: 'italic', color: 'var(--color-accent-gold)' }}>hype</em>.
              </h2>
              <p
                className="text-xl mb-8"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300
                }}
              >
                Just honest assessment.
              </p>
              <span
                className="inline-block text-sm uppercase tracking-wider"
                style={{
                  color: 'var(--color-white)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                  paddingBottom: '4px'
                }}
              >
                How we work →
              </span>
            </div>
          </div>
        </motion.section>
      </Link>

      <InfiniteMarquee />

      {/* Final CTA - Let's talk */}
      <Link href="/book-a-call" className="block">
        <motion.section
          className="relative overflow-hidden"
          style={{
            minHeight: '70vh',
            backgroundColor: 'var(--color-navy)',
            display: 'flex',
            alignItems: 'center'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, oklch(22% 0.06 250 / 0.8) 0%, oklch(18% 0.04 250 / 1) 100%)'
            }}
          />

          {/* Content */}
          <div className="container-lg relative z-10">
            <div className="max-w-4xl">
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: 'var(--color-white)',
                  letterSpacing: '-0.02em'
                }}
              >
                Let's <em style={{ fontStyle: 'italic', color: 'var(--color-accent-gold)' }}>talk</em>.
              </h2>
              <p
                className="text-xl mb-12 max-w-2xl"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  lineHeight: 1.6
                }}
              >
                Schedule a 15-minute call. No commitment, no pressure. Just honest insight into your athlete's path forward.
              </p>
              <motion.div
                className="inline-block"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span
                  className="btn btn-primary uppercase text-xs tracking-wider"
                  style={{ display: 'inline-block' }}
                >
                  Book a call
                </span>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </Link>
    </main>
  );
}
