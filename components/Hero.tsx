'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const LOGO_SRC = '/images/logo.png';
const LOGO_WIDTH = 'clamp(280px, 35vw, 500px)';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Pause the background video once it scrolls out of view so it stops
  // decoding frames in the background and competing with scroll performance.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Particle bursts are a one-time crash effect; skip entirely for reduced motion.
  const showParticles = mounted && !reduce;

  return (
    <section
      className="border-b-2"
      style={{ borderColor: 'var(--color-white)', minHeight: '100dvh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '8vh', scrollSnapAlign: 'start', scrollSnapStop: 'normal' }}
      aria-label="Hero section"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/hero-poster.jpg"
        onCanPlay={() => setVideoLoaded(true)}
        className="hidden md:block"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out'
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Poster image for mobile */}
      <div
        className="block md:hidden"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/videos/hero-poster.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      {/* Dark vignette overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.55) 75%, rgba(0, 0, 0, 0.7) 100%)',
          zIndex: 1
        }}
      />

      {/* Content */}
      <div className="container-lg" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          key="hero-content"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 relative">
              {/* Animated Logo with 3D Steel Effect and Debris */}
              <div className="relative" style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                {/* Logo debris particles - one-time impact crash */}
                {showParticles && [...Array(6)].map((_, i) => (
                  <motion.div
                    key={`logo-debris-${i}`}
                    className="absolute"
                    style={{
                      width: `${Math.random() * 10 + 4}px`,
                      height: `${Math.random() * 10 + 4}px`,
                      backgroundColor: i % 2 === 0 ? 'rgba(255, 255, 255, 0.8)' : 'oklch(78% 0.18 85)',
                      borderRadius: '2px',
                      left: '50%',
                      top: '50%',
                      boxShadow: i % 2 === 0 ? '0 0 6px rgba(255, 255, 255, 0.6)' : '0 0 8px rgba(255, 215, 0, 0.5)',
                      zIndex: 10
                    }}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 2.5, 0.4],
                      x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
                      y: [0, Math.random() * 250 + 100],
                      rotate: [0, Math.random() * 720]
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.05 + Math.random() * 0.2
                    }}
                  />
                ))}

                {/* Logo with 3D Steel Effect — one-time crash-in, static glow halo */}
                <motion.div
                  initial={reduce ? false : { opacity: 0, scale: 2.0, y: -150, rotateX: -50, rotateZ: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, rotateZ: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1],
                    delay: 0.05
                  }}
                  style={{
                    position: 'relative',
                    zIndex: 5,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Static maroon glow halo (painted once — no per-frame cost) */}
                  <div className="absolute inset-0" style={{ filter: 'blur(22px)', opacity: 0.55, pointerEvents: 'none' }}>
                    <img
                      src={LOGO_SRC}
                      alt=""
                      aria-hidden="true"
                      style={{
                        width: LOGO_WIDTH,
                        height: 'auto',
                        display: 'block',
                        filter: 'brightness(0) saturate(100%) invert(21%) sepia(89%) saturate(2447%) hue-rotate(345deg) brightness(91%) contrast(101%)'
                      }}
                    />
                  </div>

                  {/* Static gold glow halo */}
                  <div className="absolute inset-0" style={{ filter: 'blur(28px)', opacity: 0.4, pointerEvents: 'none' }}>
                    <img
                      src={LOGO_SRC}
                      alt=""
                      aria-hidden="true"
                      style={{
                        width: LOGO_WIDTH,
                        height: 'auto',
                        display: 'block',
                        filter: 'brightness(0) saturate(100%) invert(71%) sepia(46%) saturate(451%) hue-rotate(9deg) brightness(97%) contrast(87%)'
                      }}
                    />
                  </div>

                  {/* Main logo with 3D steel depth */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 5,
                      filter: `
                        drop-shadow(0 2px 0px oklch(85% 0.005 265))
                        drop-shadow(0 4px 0px oklch(70% 0.005 265))
                        drop-shadow(0 6px 0px oklch(55% 0.005 265))
                        drop-shadow(0 9px 0px oklch(40% 0.005 265))
                        drop-shadow(0 14px 22px rgba(0, 0, 0, 0.55))
                      `
                    }}
                  >
                    <img
                      src={LOGO_SRC}
                      alt="Legendary Moves Logo"
                      style={{
                        width: LOGO_WIDTH,
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              <h1 className="heading-xl uppercase mb-8" style={{ fontSize: 'clamp(4.5rem, 14vw, 9rem)', fontFamily: 'var(--font-display)', fontWeight: 800, fontStyle: 'italic', lineHeight: 0.95 }}>
                {/* Impact debris particles - Elite crash (one-time) */}
                {showParticles && [...Array(4)].map((_, i) => (
                  <motion.div
                    key={`elite-debris-${i}`}
                    className="absolute"
                    style={{
                      width: `${Math.random() * 6 + 2}px`,
                      height: `${Math.random() * 6 + 2}px`,
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '2px',
                      left: `${20 + Math.random() * 30}%`,
                      top: `${10 + Math.random() * 20}%`
                    }}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0.5],
                      x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
                      y: [0, Math.random() * 150 + 50],
                      rotate: [0, Math.random() * 360]
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1 + Math.random() * 0.1
                    }}
                  />
                ))}

                {/* ELITE - 3D steel text */}
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { opacity: 0, scale: 1.8, y: -120, rotateX: -45 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1],
                    delay: 0.1
                  }}
                  style={{
                    display: 'block',
                    letterSpacing: '0.08em',
                    color: 'var(--color-white)',
                    textShadow: `
                      0 1px 0 oklch(85% 0.005 265),
                      0 3px 0 oklch(65% 0.005 265),
                      0 5px 0 oklch(45% 0.005 265),
                      0 7px 0 oklch(25% 0.005 265),
                      0 10px 20px rgba(0, 0, 0, 0.55),
                      0 18px 36px rgba(0, 0, 0, 0.4)
                    `
                  }}
                >
                  ELITE
                </motion.span>

                {/* Impact debris particles - Representation crash (one-time) */}
                {showParticles && [...Array(6)].map((_, i) => (
                  <motion.div
                    key={`rep-debris-${i}`}
                    className="absolute"
                    style={{
                      width: `${Math.random() * 8 + 3}px`,
                      height: `${Math.random() * 8 + 3}px`,
                      backgroundColor: 'oklch(78% 0.18 85)',
                      borderRadius: '2px',
                      left: `${30 + Math.random() * 40}%`,
                      top: `${40 + Math.random() * 30}%`,
                      boxShadow: '0 0 8px rgba(255, 215, 0, 0.5)'
                    }}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 2, 0.3],
                      x: [(Math.random() - 0.5) * 150, (Math.random() - 0.5) * 300],
                      y: [0, Math.random() * 200 + 80],
                      rotate: [0, Math.random() * 720]
                    }}
                    transition={{
                      duration: 1.0,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.4 + Math.random() * 0.15
                    }}
                  />
                ))}

                {/* REPRESENTATION - 3D gold text */}
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { opacity: 0, scale: 1.8, y: -120, rotateX: -45 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1],
                    delay: 0.4
                  }}
                  style={{
                    display: 'block',
                    letterSpacing: '0.1em',
                    background: 'linear-gradient(135deg, oklch(78% 0.18 85) 0%, oklch(85% 0.15 75) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: `
                      0 1px 0 oklch(70% 0.16 80),
                      0 3px 0 oklch(60% 0.12 80),
                      0 5px 0 oklch(50% 0.08 80),
                      0 7px 0 oklch(40% 0.04 80),
                      0 10px 20px rgba(0, 0, 0, 0.5),
                      0 18px 36px rgba(0, 0, 0, 0.3)
                    `
                  }}
                >
                  REPRESENTATION
                </motion.span>
              </h1>
            </div>

            <motion.div
              className="col-span-12 md:col-span-6 border-t-2 pt-6"
              style={{ borderColor: 'var(--color-accent-gold)', originX: 0 }}
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Description text */}
              <motion.p
                className="body-base mb-6"
                initial={reduce ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 1.0
                }}
                style={{
                  fontSize: 'var(--font-size-lg)',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.6,
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 2px 6px rgba(0, 0, 0, 0.45)'
                }}
              >
                NIL deal negotiation. College recruiting connections. Parent education.
                14 years inside college and professional football.
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 1.3
                }}
                whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
              >
                <Link
                  href="/book-a-call"
                  className="btn btn-primary uppercase text-xs tracking-wider"
                  style={{ display: 'inline-block' }}
                >
                  Schedule Call
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Reduced motion accessibility - hide video if user prefers reduced motion */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          video {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
