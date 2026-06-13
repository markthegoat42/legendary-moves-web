'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const goldGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const maroonX = useTransform(scrollYProgress, [0, 0.5, 1], [30, 70, 30]);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const cards = cardsRef.current.filter(Boolean);

    cards.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(card,
        {
          y: 100 + (index * 40),
          scale: 0.95 - (index * 0.05),
          opacity: 0.6
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: 1,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-b-2 relative overflow-hidden py-32 md:py-48"
      style={{ borderColor: 'var(--color-charcoal)', minHeight: '100dvh', display: 'flex', flexDirection: 'column', justifyContent: 'center', scrollSnapAlign: 'start', scrollSnapStop: 'normal' }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, oklch(35% 0.14 22) 0%, oklch(22% 0.06 250) 100%)'
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: goldGlow,
          background: 'radial-gradient(ellipse 1400px 1000px at 50% 50%, oklch(70% 0.10 80 / 0.3) 0%, transparent 70%)',
          x: useTransform(maroonX, (v) => `${v - 50}%`)
        }}
      />

      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-20">
            <h2 className="heading-md uppercase max-w-6xl" style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: 700, lineHeight: 1.1, color: 'var(--color-white)' }}>
              WHAT WE DO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              ref={(el) => { cardsRef.current[0] = el; }}
              className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <h3 className="heading-sm uppercase mb-6 relative z-10" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--color-white)' }}>
                NIL REPRESENTATION
              </h3>
              <p className="body-base text-base leading-relaxed relative z-10" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                Brand partnerships, endorsement deals, NIL contracts. Every deal vetted by
                someone who understands the long-term impact.
              </p>
            </div>

            <div
              ref={(el) => { cardsRef.current[1] = el; }}
              className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <h3 className="heading-sm uppercase mb-6 relative z-10" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--color-white)' }}>
                RECRUITING ADVISORY
              </h3>
              <p className="body-base text-base leading-relaxed relative z-10" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                Direct connections to college coaches. Strategic positioning. Film breakdown.
                Rankings from former D1 coaches. The right program, not just any program.
              </p>
            </div>

            <div
              ref={(el) => { cardsRef.current[2] = el; }}
              className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <h3 className="heading-sm uppercase mb-6 relative z-10" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--color-white)' }}>
                PARENT EDUCATION
              </h3>
              <p className="body-base text-base leading-relaxed relative z-10" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                Workshops, one-on-one guidance, honest answers. Protection from predatory
                services and bad advice that could derail your athlete's future.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
