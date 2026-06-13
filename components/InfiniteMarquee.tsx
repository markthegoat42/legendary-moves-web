'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MarqueeItem {
  text: string;
}

const universities: MarqueeItem[] = [
  { text: 'TCU' },
  { text: 'SMU' },
  { text: 'HOUSTON' },
  { text: 'TEMPLE' },
  { text: 'GRAMBLING STATE' },
  { text: 'WASHINGTON COMMANDERS' },
  { text: 'NCAA DIVISION I' },
  { text: 'NFL' },
];

export default function InfiniteMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const marqueeContent = marquee.querySelector('.marquee-content') as HTMLElement;

    if (!marqueeContent) return;

    const contentWidth = marqueeContent.scrollWidth / 2;

    gsap.to(marqueeContent, {
      x: -contentWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(marqueeContent);
    };
  }, []);

  return (
    <section
      className="border-y-2 py-12 overflow-hidden relative"
      style={{ borderColor: 'rgba(255, 255, 255, 0.1)', backgroundColor: 'oklch(15% 0.02 250)' }}
      aria-label="Partner organizations and programs"
    >
      <div ref={marqueeRef} className="relative">
        <div className="marquee-content flex gap-16 will-change-transform">
          {[...universities, ...universities].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-6xl md:text-8xl font-bold uppercase tracking-tight"
              style={{
                color: 'rgba(255, 255, 255, 0.1)',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                fontFamily: 'var(--font-display)'
              }}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
