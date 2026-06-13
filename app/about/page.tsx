'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StatStrip from '@/components/StatStrip';
import PinnedSlider from '@/components/PinnedSlider';

export default function AboutPage() {
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
            backgroundImage: 'url(/images/chris-scott-commanders.jpg)',
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
            <h1 className="hero-headline--about" style={{
              fontFamily: 'var(--font-editorial)',
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: 'var(--text-on-dark)',
              textShadow: '0 2px 24px rgba(0, 0, 0, 0.4)',
              marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)'
            }}>
              Fourteen years on the <em style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>other</em> side.
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
              NOW CHRIS SCOTT IS ON YOUR SIDE
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
          { value: 14, label: 'YEARS IN COLLEGE FOOTBALL' },
          { value: 100, suffix: '+', label: 'ATHLETES REPRESENTED' },
          { value: 3, label: 'POWER 5 PROGRAMS' },
        ]}
        background="navy"
      />

      {/* SECTION 2 - Founder */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: '6rem', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Chris Bio Image */}
            <div className="mb-12">
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  backgroundImage: 'url(/images/chris-team-photo.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '2px',
                }}
              />
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4 border-r-0 md:border-r-2 md:pr-8" style={{ borderColor: 'var(--color-gray-300)' }}>
                <p className="text-sm uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                  CHRIS SCOTT
                </p>
                <p className="text-xs uppercase tracking-wider mt-4" style={{ color: 'var(--color-gray-600)', fontFamily: 'var(--font-body)' }}>
                  14 YRS / COLLEGE + NFL
                </p>
              </div>

              <div className="col-span-12 md:col-span-8 space-y-6">
                <div className="border-l-2 pl-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="body-base drop-cap mb-4">
                    Chris Scott spent over a decade in football operations before founding Legendary Moves. He built his career inside the programs that decide who plays at the next level: Texas Christian University, Southern Methodist University, the University of Houston, Temple University, Grambling State University, and the Washington Commanders.
                  </p>
                  <p className="body-base mb-4">
                    In those roles he recruited players, evaluated talent, negotiated for athletes, and built relationships with coaches at every level of the sport. He saw who got opportunities and who got left behind. He saw which families were prepared and which ones weren't.
                  </p>
                  <p className="body-base">
                    He started Legendary Moves to put that experience on the family's side of the table.
                  </p>
                </div>
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

      {/* SECTION 3 - Programs */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <h2 className="text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                Programs
              </h2>
            </div>

            <div className="max-w-4xl space-y-0">
              <div className="border-t-2 pt-6 pb-6 flex justify-between items-baseline" style={{ borderColor: 'var(--color-accent-gold)' }}>
                <p className="text-base uppercase tracking-wide" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', fontWeight: 500, color: 'var(--color-charcoal)' }}>
                  Texas Christian University (TCU)
                </p>
                <span className="text-xs uppercase tracking-wider ml-4 px-3 py-1" style={{ color: 'var(--color-accent-gold)', fontFamily: 'var(--font-body)', fontWeight: 600, border: '1px solid var(--color-accent-gold)' }}>
                  College
                </span>
              </div>
              <div className="border-t-2 pt-6 pb-6 flex justify-between items-baseline" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="text-base uppercase tracking-wide" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', fontWeight: 500, color: 'var(--color-charcoal)' }}>
                  Southern Methodist University (SMU)
                </p>
                <span className="text-xs uppercase tracking-wider ml-4 px-3 py-1" style={{ color: 'var(--color-accent-gold)', fontFamily: 'var(--font-body)', fontWeight: 600, border: '1px solid var(--color-accent-gold)' }}>
                  College
                </span>
              </div>
              <div className="border-t-2 pt-6 pb-6 flex justify-between items-baseline" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="text-base uppercase tracking-wide" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', fontWeight: 500, color: 'var(--color-charcoal)' }}>
                  University of Houston
                </p>
                <span className="text-xs uppercase tracking-wider ml-4 px-3 py-1" style={{ color: 'var(--color-accent-gold)', fontFamily: 'var(--font-body)', fontWeight: 600, border: '1px solid var(--color-accent-gold)' }}>
                  College
                </span>
              </div>
              <div className="border-t-2 pt-6 pb-6 flex justify-between items-baseline" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="text-base uppercase tracking-wide" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', fontWeight: 500, color: 'var(--color-charcoal)' }}>
                  Temple University
                </p>
                <span className="text-xs uppercase tracking-wider ml-4 px-3 py-1" style={{ color: 'var(--color-accent-gold)', fontFamily: 'var(--font-body)', fontWeight: 600, border: '1px solid var(--color-accent-gold)' }}>
                  College
                </span>
              </div>
              <div className="border-t-2 pt-6 pb-6 flex justify-between items-baseline" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="text-base uppercase tracking-wide" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', fontWeight: 500, color: 'var(--color-charcoal)' }}>
                  Grambling State University
                </p>
                <span className="text-xs uppercase tracking-wider ml-4 px-3 py-1" style={{ color: 'var(--color-accent-gold)', fontFamily: 'var(--font-body)', fontWeight: 600, border: '1px solid var(--color-accent-gold)' }}>
                  College
                </span>
              </div>
              <div className="border-t-2 pt-6 pb-6 border-b-2 flex justify-between items-baseline" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="text-base uppercase tracking-wide" style={{ fontFamily: 'var(--font-editorial)', fontVariant: 'small-caps', fontWeight: 500, color: 'var(--color-charcoal)' }}>
                  Washington Commanders (NFL)
                </p>
                <span className="text-xs uppercase tracking-wider ml-4 px-3 py-1" style={{ color: 'var(--color-accent-gold)', fontFamily: 'var(--font-body)', fontWeight: 600, border: '1px solid var(--color-accent-gold)' }}>
                  Pro
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PINNED SLIDER - Why Legendary Moves */}
      <PinnedSlider
        slides={[
          {
            label: 'THE SYSTEM',
            title: 'The system is built for schools and *brands*.',
            description: 'Coaches, collectives, and companies do this every day. Families see it once. That information gap costs athletes opportunities.',
          },
          {
            label: 'REPRESENTATION',
            title: 'Most representation is *predatory*.',
            description: 'Agencies charge percentages, lock athletes into multi-year deals, and disappear after the first contract. We work differently.',
          },
          {
            label: 'EXPERIENCE',
            title: "Parents need someone who's been in the *room*.",
            description: 'Chris spent 14 years inside programs, evaluating talent, negotiating contracts, and building relationships with coaches. Now that experience works for you.',
          },
        ]}
        background="navy"
        sectionTitle="WHY LEGENDARY MOVES"
      />

      {/* SECTION 4 - Why */}
      <section style={{ backgroundColor: 'var(--color-gray-50)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <h2
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-charcoal)',
                }}
              >
                Most families walk in <em style={{ fontStyle: 'italic', color: 'oklch(35% 0.14 22)' }}>blind</em>.
              </h2>
            </div>

            <div className="max-w-4xl space-y-6">
              <p className="body-base">
                The recruiting system is built for the schools, not for the athlete. Coaches know what they're looking for. Programs know how the deals work. NIL collectives know how to write contracts that protect themselves.
              </p>
              <p className="body-base">
                Most families are walking into all of this for the first time, with no one in the room who's been on the other side. That's how athletes end up at the wrong school, signing the wrong NIL deals, or missing scholarships they should have had.
              </p>
              <p className="body-base">
                Legendary Moves is the person in the room who's been on the other side.
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

      {/* SECTION 5 - Approach */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <h2
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-charcoal)',
                }}
              >
                No hype. Just <em style={{ fontStyle: 'italic', color: 'oklch(35% 0.14 22)' }}>honesty</em>.
              </h2>
            </div>

            <div className="max-w-4xl space-y-6">
              <p className="body-base">
                This isn't a recruiting service that sells dreams to anyone with a pulse. Not every athlete is ready to be represented. Not every family needs the help.
              </p>
              <p className="body-base">
                The first conversation is an honest assessment. If we can help, we'll tell you exactly what the plan looks like. If we can't, we'll tell you that too — and where to actually focus your energy instead.
              </p>
              <p className="body-base">
                That's the only kind of advisory worth paying for.
              </p>
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
