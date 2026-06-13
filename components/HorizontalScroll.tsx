'use client';

import { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const timeline = [
  { year: '2010-2014', role: 'DEFENSIVE COORDINATOR', org: 'TCU', color: 'oklch(50% 0.15 280)' },
  { year: '2015-2017', role: 'ASSISTANT COACH', org: 'SMU', color: 'oklch(45% 0.12 15)' },
  { year: '2018-2019', role: 'DEFENSIVE BACKS COACH', org: 'HOUSTON', color: 'oklch(50% 0.15 5)' },
  { year: '2020-2021', role: 'RECRUITING COORDINATOR', org: 'TEMPLE', color: 'oklch(40% 0.10 355)' },
  { year: '2022', role: 'SPECIAL TEAMS COACH', org: 'GRAMBLING STATE', color: 'oklch(70% 0.10 80)' },
  { year: '2023-PRESENT', role: 'CONSULTANT', org: 'WASHINGTON COMMANDERS', color: 'oklch(35% 0.14 22)' },
];

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current || !scrollRef.current) return;

    const container = containerRef.current;
    const scrollContent = scrollRef.current;

    const totalWidth = scrollContent.scrollWidth;
    const windowWidth = window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${totalWidth - windowWidth}`,
        scrub: 1,
        pin: true,
      }
    });

    tl.to(scrollContent, {
      x: -(totalWidth - windowWidth),
      ease: 'none'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        backgroundColor: 'oklch(18% 0.04 250)'
      }}
    >
      <div className="h-screen flex items-center">
        <div ref={scrollRef} className="flex gap-8 px-8 will-change-transform">
          <div className="flex-shrink-0 w-screen flex items-center justify-center px-12">
            <motion.h2
              className="heading-md uppercase max-w-4xl"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--color-white)'
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              14 YEARS<br/>OF EXPERIENCE
            </motion.h2>
          </div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[500px] h-[600px] rounded-3xl p-12 flex flex-col justify-between relative overflow-hidden group"
              style={{
                backgroundColor: item.color,
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-200px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="text-sm uppercase tracking-widest font-mono mb-8" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  {item.year}
                </div>
                <h3 className="text-4xl font-bold uppercase mb-4 leading-tight" style={{ color: 'var(--color-white)' }}>
                  {item.role}
                </h3>
              </div>

              <div className="text-7xl font-bold uppercase opacity-10 relative z-10" style={{ color: 'var(--color-white)' }}>
                {item.org}
              </div>
            </motion.div>
          ))}

          <div className="flex-shrink-0 w-screen flex items-center justify-center px-12">
            <motion.div
              className="max-w-2xl text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-3xl leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Now using that insider knowledge to help the next generation of athletes succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
