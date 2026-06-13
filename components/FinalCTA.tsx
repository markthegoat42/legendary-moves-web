'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TypewriterText from './TypewriterText';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)', backgroundColor: 'var(--color-navy)' }}>
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3041176/pexels-photo-3041176.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(225deg, oklch(22% 0.06 250 / 0.7) 0%, oklch(18% 0.04 250 / 0.85) 100%)'
        }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 1000px 800px at 20% 60%, oklch(35% 0.14 22 / 0.15) 0%, transparent 60%)',
            'radial-gradient(ellipse 1200px 900px at 80% 40%, oklch(35% 0.14 22 / 0.25) 0%, transparent 60%)',
            'radial-gradient(ellipse 1000px 800px at 20% 60%, oklch(35% 0.14 22 / 0.15) 0%, transparent 60%)'
          ]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 border-r-0 md:border-r-2 md:pr-8 pb-8 md:pb-0" style={{ borderColor: 'var(--color-accent-gold)' }}>
              <div className="border-b-2 pb-4 mb-8" style={{ borderColor: 'var(--color-accent-gold)' }}>
                <p className="text-xs uppercase tracking-wider font-mono" style={{ color: 'var(--color-accent-gold)' }}>
                  <TypewriterText text="[CONNECT]" useViewport={true} />
                </p>
              </div>
              <h2 className="heading-md mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontFamily: 'var(--font-display)', color: 'var(--color-white)', fontWeight: 700, letterSpacing: '-0.02em' }}>
                Let's talk about your <em style={{ fontStyle: 'italic', color: 'var(--color-accent-gold)', letterSpacing: '0.02em' }}>next</em> move.
              </h2>
            </div>

            <div className="col-span-12 md:col-span-6 md:pl-8">
              <p className="body-base mb-8" style={{ fontSize: 'var(--font-size-lg)', fontFamily: 'var(--font-body)', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.8)' }}>
                Schedule a 15-minute call. No commitment, no pressure.
                Just honest insight into your athlete's path forward.
              </p>
              <motion.div whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }} transition={{ duration: 0.2 }}>
                <Link
                  href="/book-a-call"
                  className="btn btn-primary uppercase text-xs tracking-wider"
                  style={{ display: 'inline-block' }}
                >
                  Schedule Call
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
