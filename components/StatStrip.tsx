'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface StatStripProps {
  stats: Stat[];
  background?: 'cream' | 'navy' | 'maroon';
}

export default function StatStrip({ stats, background = 'cream' }: StatStripProps) {
  const statsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Animate each stat when it scrolls into view
    statsRef.current.forEach((statEl, index) => {
      if (!statEl) return;

      const stat = stats[index];
      const duration = 2; // 2 seconds for count-up

      gsap.fromTo(
        statEl,
        { textContent: 0 },
        {
          textContent: stat.value,
          duration: duration,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statEl,
            start: 'top 80%',
            once: true, // Only animate once
          },
          onUpdate: function () {
            if (statEl) {
              const currentValue = Math.round(parseFloat(statEl.textContent || '0'));
              statEl.textContent = currentValue + (stat.suffix || '');
            }
          },
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [stats]);

  const bgClass =
    background === 'navy'
      ? 'section--navy'
      : background === 'maroon'
      ? 'section--maroon'
      : 'section--cream';

  const textColor =
    background === 'cream' ? 'var(--text-primary)' : 'var(--text-on-dark)';

  const accentColor =
    background === 'cream' ? 'var(--accent-maroon)' : 'var(--accent-gold)';

  return (
    <section
      className={bgClass}
      style={{
        paddingTop: 'clamp(4rem, 8vh, 6rem)',
        paddingBottom: 'clamp(4rem, 8vh, 6rem)',
      }}
    >
      <div className="container-lg">
        <div
          className="grid gap-12"
          style={{
            gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: accentColor,
                  marginBottom: '1rem',
                }}
              >
                <span ref={(el) => { statsRef.current[index] = el; }}>
                  0{stat.suffix || ''}
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: textColor,
                  opacity: 0.8,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
