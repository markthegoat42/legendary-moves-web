'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Slide {
  label: string; // e.g., "PAYMENT TIMING"
  title: string; // e.g., "What gets paid, and *when*." (* marks word for maroon emphasis)
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
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current || isMobile) return;

    const slideElements = slidesRef.current.filter(Boolean) as HTMLDivElement[];
    if (slideElements.length === 0) return;

    // Create ScrollTrigger with stepped progress and crossfade
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${slides.length * window.innerHeight}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / (slides.length - 1),
          duration: 0.4,
          ease: 'power2.inOut',
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const slideIndex = Math.round(progress * (slides.length - 1));
          setCurrentSlide(slideIndex);
        },
      },
    });

    // Crossfade animation with blur
    slideElements.forEach((slide, index) => {
      if (index === 0) {
        // First slide: fade out with blur
        tl.to(slide, {
          opacity: 0,
          filter: 'blur(2px)',
          duration: 0.4,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        });
      } else if (index === slides.length - 1) {
        // Last slide: fade in from blur and stay
        tl.fromTo(
          slide,
          { opacity: 0, filter: 'blur(2px)' },
          {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.4,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          },
          '<'
        );
      } else {
        // Middle slides: fade in then fade out
        tl.fromTo(
          slide,
          { opacity: 0, filter: 'blur(2px)' },
          {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.4,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          },
          '<'
        ).to(slide, {
          opacity: 0,
          filter: 'blur(2px)',
          duration: 0.4,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [slides.length, isMobile]);

  const bgClass =
    background === 'navy'
      ? 'section--navy'
      : background === 'maroon'
      ? 'section--maroon'
      : 'section--cream';

  const textColor = background === 'cream' ? 'var(--text-primary)' : 'var(--text-on-dark)';
  const accentColor = background === 'cream' ? 'var(--accent-maroon)' : 'var(--accent-gold)';

  // Parse title for maroon emphasis (text between *)
  const parseTitle = (title: string) => {
    const parts = title.split('*');
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        // Odd indices are emphasized text
        return (
          <em key={i} style={{ fontStyle: 'italic', color: 'var(--accent-maroon)' }}>
            {part}
          </em>
        );
      }
      return part;
    });
  };

  // Mobile: stack frames vertically
  if (isMobile) {
    return (
      <section className={bgClass} style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
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
                marginBottom: '3rem',
              }}
            >
              {sectionTitle}
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {slides.map((slide, index) => (
              <div key={index} style={{ padding: '2rem 1rem' }}>
                {/* Label */}
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: accentColor,
                    marginBottom: '2rem',
                  }}
                >
                  {String(index + 1).padStart(2, '0')} — {slide.label}
                </div>

                {/* Headline */}
                <h2
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '3.5rem',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    lineHeight: 1.1,
                    color: textColor,
                    marginBottom: '2rem',
                  }}
                >
                  {parseTitle(slide.title)}
                </h2>

                {/* Body */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.0625rem',
                    lineHeight: 1.5,
                    color: textColor,
                    opacity: 0.9,
                  }}
                >
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: pinned crossfade
  return (
    <section
      ref={containerRef}
      className={bgClass}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: 'clamp(4rem, 8vh, 6rem)',
        paddingBottom: 'clamp(4rem, 8vh, 6rem)',
      }}
    >
      <div className="container-lg" style={{ position: 'relative', width: '100%' }}>
        {sectionTitle && (
          <div
            style={{
              position: 'absolute',
              top: '-3rem',
              left: 0,
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: accentColor,
              opacity: 0.6,
            }}
          >
            {sectionTitle}
          </div>
        )}

        {/* Frame container */}
        <div style={{ position: 'relative', minHeight: '60vh', width: '100%' }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => { slidesRef.current[index] = el; }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                opacity: index === 0 ? 1 : 0,
                filter: index === 0 ? 'blur(0px)' : 'blur(2px)',
                padding: '0 10%',
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
                  marginBottom: '2rem',
                }}
              >
                {String(index + 1).padStart(2, '0')} — {slide.label}
              </div>

              {/* Headline */}
              <h2
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(4rem, 8vw, 6rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.1,
                  color: textColor,
                  marginBottom: '2rem',
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
