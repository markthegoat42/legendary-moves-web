'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TypewriterText from '@/components/TypewriterText';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative flex items-end" style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingBottom: 'clamp(4rem, 8vh, 8rem)' }}>
        <div className="container-lg w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            {/* Gold rule */}
            <div className="divider-gold mb-6" style={{ marginLeft: 0 }} />

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(4.5rem, 10vw, 8.75rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)'
            }}>
              Get in <em style={{ fontStyle: 'italic', color: 'var(--accent-maroon)' }}>touch</em>.
            </h1>

            {/* Tagline */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-muted)'
            }}>
              THREE WAYS TO REACH US. PICK WHICHEVER FEELS RIGHT.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute"
          style={{ bottom: '2rem', right: '2rem', fontSize: '1.5rem', color: 'var(--text-primary)', opacity: 0.5 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.div>
      </section>

      {/* SECTION 2 - Book a Call */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: '6rem', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-8">
            </div>

            <div className="max-w-3xl">
              <p className="body-base drop-cap mb-8">
                For new prospects: schedule a fifteen-minute call. That's the fastest path to honest answers about your athlete's situation.
              </p>
              <Link
                href="/book-a-call"
                className="btn btn-primary uppercase text-xs tracking-wider"
              >
                Schedule Call
              </Link>
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

      {/* SECTION 3 - Email */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-8">
            </div>

            <div className="max-w-3xl">
              <p className="body-base mb-8">
                For questions, follow-ups, or sending documents:
              </p>
              <a
                href="mailto:info@legendarymoves.com"
                className="block text-4xl md:text-5xl font-mono font-bold mb-6 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-black)', lineHeight: 1.2 }}
              >
                info@legendarymoves.com
              </a>
              <p className="body-base text-sm" style={{ color: 'var(--color-gray-600)' }}>
                We respond within one business day.
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

      {/* SECTION 4 - Phone */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-8">
            </div>

            <div className="max-w-3xl">
              <p className="body-base mb-8">
                For urgent situations or if you prefer to talk:
              </p>
              <a
                href="tel:+15551234567"
                className="block text-4xl md:text-5xl font-mono font-bold mb-6 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-black)', lineHeight: 1.2 }}
              >
                (555) 123-4567
              </a>
              <p className="body-base text-sm" style={{ color: 'var(--color-gray-600)' }}>
                Available during business hours, Monday through Friday.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
