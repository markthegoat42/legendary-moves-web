'use client';

// Was a GSAP scroll-pinned crossfade slider (fragile, only ever showed slide 1,
// and the sole reason the bundle carried GSAP). Now a reliable stacked editorial
// section: every point always shows, reveals with framer-motion, no scroll-hijack.

import { motion } from 'framer-motion';

interface Slide {
  label: string;
  title: string; // * marks the word for maroon italic emphasis
  description: string;
}

interface PinnedSliderProps {
  slides: Slide[];
  background?: 'cream' | 'navy' | 'maroon';
  sectionTitle?: string;
}

export default function PinnedSlider({
  slides,
  background = 'navy',
  sectionTitle,
}: PinnedSliderProps) {
  const bgClass =
    background === 'navy'
      ? 'section--navy'
      : background === 'maroon'
      ? 'section--maroon'
      : 'section--cream';

  const textColor = background === 'cream' ? 'var(--text-primary)' : 'var(--text-on-dark)';
  const accentColor = background === 'cream' ? 'var(--accent-maroon)' : 'var(--accent-gold)';

  // Parse title for maroon emphasis (text between *)
  const parseTitle = (title: string) =>
    title.split('*').map((part, i) =>
      i % 2 === 1 ? (
        <em key={i} style={{ fontStyle: 'italic', color: 'var(--accent-maroon)' }}>
          {part}
        </em>
      ) : (
        part
      )
    );

  return (
    <section className={bgClass} style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
      <div className="container-lg">
        {sectionTitle && (
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: accentColor,
              opacity: 0.6,
              marginBottom: 'var(--space-2xl)',
            }}
          >
            {sectionTitle}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                maxWidth: '60rem',
                borderTop: index === 0 ? 'none' : '1px solid oklch(from var(--accent-gold) l c h / 0.25)',
                paddingTop: index === 0 ? 0 : 'var(--space-2xl)',
              }}
            >
              {/* Label */}
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: accentColor,
                  marginBottom: '1.25rem',
                }}
              >
                {String(index + 1).padStart(2, '0')} — {slide.label}
              </div>

              {/* Headline */}
              <h2
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.1,
                  color: textColor,
                  marginBottom: '1.25rem',
                }}
              >
                {parseTitle(slide.title)}
              </h2>

              {/* Body */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.25rem',
                  lineHeight: 1.5,
                  color: textColor,
                  opacity: 0.9,
                  maxWidth: '70ch',
                }}
              >
                {slide.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
