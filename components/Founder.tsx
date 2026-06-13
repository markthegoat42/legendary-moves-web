'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const navyGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.8, 0.2]);
  const maroonY = useTransform(scrollYProgress, [0, 0.5, 1], [20, 80, 20]);

  return (
    <section ref={sectionRef} className="border-b-2 relative overflow-hidden py-32 md:py-48" style={{ borderColor: 'var(--color-charcoal)', backgroundColor: 'var(--color-white)' }}>
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/186076/pexels-photo-186076.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25
        }}
      />
      {/* Light overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, oklch(99% 0.005 265 / 0.85) 0%, oklch(99% 0.005 265 / 0.9) 100%)'
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: navyGlow,
          background: 'radial-gradient(ellipse 1300px 1000px at 70% 50%, oklch(70% 0.10 80 / 0.08) 0%, transparent 60%)',
          y: useTransform(maroonY, (v) => `${v - 50}%`)
        }}
        animate={{
          x: ['0%', '10%', '0%'],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-5 border-r-0 md:border-r md:pr-12" style={{ borderColor: 'var(--color-accent-gold)' }}>
              <div className="border-b-2 pb-4 mb-8" style={{ borderColor: 'var(--color-accent-gold)' }}>
                <p className="text-xs uppercase tracking-wider font-mono" style={{ color: 'var(--color-accent-gold)' }}>
                  [FOUNDER]
                </p>
              </div>
              <h2 className="heading-sm mb-8 max-w-4xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: 'var(--color-charcoal)' }}>
                Fourteen years on the <em style={{ fontStyle: 'italic', color: 'var(--color-accent-red)', letterSpacing: '0.02em' }}>other</em> side.
              </h2>
              <motion.p
                className="text-sm uppercase tracking-widest font-mono"
                style={{ wordBreak: 'break-word', overflowWrap: 'break-word', color: 'var(--color-charcoal)' }}
                animate={{
                  textShadow: [
                    '0 0 10px oklch(70% 0.10 80 / 0.3)',
                    '0 0 20px oklch(70% 0.10 80 / 0.5), 0 0 30px oklch(70% 0.10 80 / 0.3)',
                    '0 0 10px oklch(70% 0.10 80 / 0.3)',
                  ],
                  color: [
                    'oklch(70% 0.10 80)',
                    'oklch(75% 0.12 80)',
                    'oklch(70% 0.10 80)',
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                14 YRS / COLLEGE + NFL
              </motion.p>
            </div>

            <div className="col-span-12 md:col-span-7 space-y-6">
              <div className="border-t-2 pt-8" style={{ borderColor: 'var(--color-accent-gold)' }}>
                <p className="body-base text-lg leading-relaxed mb-2" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                  Chris Scott
                </p>
                <p className="body-base text-lg leading-relaxed mb-6" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}>
                  TCU. SMU. Houston. Temple. Grambling State. Washington Commanders.
                </p>
                <p className="body-base text-lg leading-relaxed mb-6" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}>
                  Chris Scott has been on the other side of the table—evaluating recruits,
                  negotiating contracts, building programs.
                </p>
                <p className="body-base text-lg leading-relaxed" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto', color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}>
                  He knows what coaches look for. He knows how deals get done. Now he uses
                  that experience to help families navigate recruiting with confidence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
