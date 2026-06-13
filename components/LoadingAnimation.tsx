'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const text = "LEGENDARY MOVES";
  const letters = text.split("");

  useEffect(() => {
    // Hide animation after total duration (logo fade in + text animation + hold)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500); // 1s logo + 2s text + 1.5s hold

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: 'var(--color-navy)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Colorful Ocean Waves - Emil Kowalski hardware-accelerated animation */}

          {/* Base gradient - Navy to teal foundation */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg,
                  oklch(22% 0.06 250) 0%,
                  oklch(28% 0.10 240) 50%,
                  oklch(32% 0.12 230) 100%
                )
              `
            }}
          />

          {/* Wave layer 1: Red-Orange wave (bottom left) */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 140% 70% at 15% 65%,
                  oklch(62% 0.26 22) 0%,
                  oklch(58% 0.24 20) 25%,
                  oklch(65% 0.28 18) 40%,
                  transparent 70%
                )
              `,
              willChange: 'transform, opacity'
            }}
            animate={{
              transform: [
                'translate3d(-12%, 8%, 0) scale(1.0)',
                'translate3d(12%, -8%, 0) scale(1.05)',
                'translate3d(-12%, 8%, 0) scale(1.0)'
              ],
              opacity: [0.75, 0.95, 0.75]
            }}
            transition={{
              duration: 8,
              ease: [0.23, 1, 0.32, 1],
              repeat: Infinity,
              repeatType: 'loop'
            }}
          />

          {/* Wave layer 2: Golden-yellow wave (middle) */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 160% 60% at 50% 50%,
                  oklch(78% 0.18 80) 0%,
                  oklch(75% 0.16 78) 20%,
                  oklch(82% 0.20 82) 35%,
                  transparent 65%
                )
              `,
              mixBlendMode: 'screen',
              willChange: 'transform, opacity'
            }}
            animate={{
              transform: [
                'translate3d(10%, -6%, 0) scale(1.0)',
                'translate3d(-10%, 6%, 0) scale(1.08)',
                'translate3d(10%, -6%, 0) scale(1.0)'
              ],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 10,
              ease: [0.23, 1, 0.32, 1],
              repeat: Infinity,
              repeatType: 'loop',
              delay: 1.2
            }}
          />

          {/* Wave layer 3: Purple-magenta wave (center) */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 130% 55% at 45% 55%,
                  oklch(55% 0.22 310) 0%,
                  oklch(52% 0.20 315) 25%,
                  oklch(58% 0.24 305) 40%,
                  transparent 70%
                )
              `,
              mixBlendMode: 'normal',
              willChange: 'transform, opacity'
            }}
            animate={{
              transform: [
                'translate3d(-8%, -10%, 0) scale(1.0)',
                'translate3d(8%, 10%, 0) scale(1.06)',
                'translate3d(-8%, -10%, 0) scale(1.0)'
              ],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 9,
              ease: [0.23, 1, 0.32, 1],
              repeat: Infinity,
              repeatType: 'loop',
              delay: 2.4
            }}
          />

          {/* Wave layer 4: Cyan-blue wave (right side) */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 150% 65% at 75% 45%,
                  oklch(65% 0.18 220) 0%,
                  oklch(62% 0.16 218) 25%,
                  oklch(68% 0.20 222) 40%,
                  transparent 70%
                )
              `,
              mixBlendMode: 'normal',
              willChange: 'transform, opacity'
            }}
            animate={{
              transform: [
                'translate3d(15%, 7%, 0) scale(1.0)',
                'translate3d(-15%, -7%, 0) scale(1.07)',
                'translate3d(15%, 7%, 0) scale(1.0)'
              ],
              opacity: [0.65, 0.92, 0.65]
            }}
            transition={{
              duration: 11,
              ease: [0.23, 1, 0.32, 1],
              repeat: Infinity,
              repeatType: 'loop',
              delay: 1.8
            }}
          />

          {/* Wave layer 5: White foam highlights (top crests) */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 120% 40% at 40% 35%,
                  rgba(255, 255, 255, 0.7) 0%,
                  rgba(255, 255, 255, 0.4) 20%,
                  rgba(200, 230, 255, 0.25) 40%,
                  transparent 65%
                )
              `,
              mixBlendMode: 'screen',
              willChange: 'transform, opacity'
            }}
            animate={{
              transform: [
                'translate3d(-18%, -5%, 0) scale(1.0)',
                'translate3d(18%, 5%, 0) scale(1.04)',
                'translate3d(-18%, -5%, 0) scale(1.0)'
              ],
              opacity: [0.5, 0.85, 0.5]
            }}
            transition={{
              duration: 7,
              ease: [0.23, 1, 0.32, 1],
              repeat: Infinity,
              repeatType: 'loop',
              delay: 0.6
            }}
          />

          {/* Wave layer 6: Secondary white foam (complementary) */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 110% 35% at 70% 60%,
                  rgba(255, 255, 255, 0.8) 0%,
                  rgba(255, 255, 255, 0.5) 15%,
                  rgba(220, 245, 255, 0.3) 35%,
                  transparent 60%
                )
              `,
              mixBlendMode: 'screen',
              willChange: 'transform, opacity'
            }}
            animate={{
              transform: [
                'translate3d(20%, 9%, 0) scale(1.0)',
                'translate3d(-20%, -9%, 0) scale(1.05)',
                'translate3d(20%, 9%, 0) scale(1.0)'
              ],
              opacity: [0.55, 0.88, 0.55]
            }}
            transition={{
              duration: 8.5,
              ease: [0.23, 1, 0.32, 1],
              repeat: Infinity,
              repeatType: 'loop',
              delay: 3.2
            }}
          />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.2
              }}
              className="mb-16"
            >
              <Image
                src="/images/logo.png"
                alt="Legendary Moves Logo"
                width={600}
                height={600}
                priority
                className="drop-shadow-2xl"
                style={{ maxWidth: '90vw', height: 'auto' }}
              />
            </motion.div>

            {/* Letter-by-letter text */}
            <div
              className="flex flex-wrap justify-center gap-2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                fontWeight: 900,
                letterSpacing: '0.02em',
                textTransform: 'uppercase'
              }}
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, transform: 'translateY(12px) scale(0.96)' }}
                  animate={{ opacity: 1, transform: 'translateY(0px) scale(1)' }}
                  transition={{
                    duration: 0.25,
                    ease: [0.23, 1, 0.32, 1],
                    delay: 1.0 + (index * 0.05) // Start after logo, 50ms per letter (faster stagger)
                  }}
                  style={{
                    color: letter === ' ' ? 'transparent' : 'var(--color-white)',
                    display: 'inline-block',
                    minWidth: letter === ' ' ? '0.5em' : 'auto',
                    textShadow: `
                      0 2px 4px rgba(0, 0, 0, 0.3),
                      0 4px 8px rgba(0, 0, 0, 0.2),
                      0 8px 16px rgba(0, 0, 0, 0.1),
                      0 0 40px rgba(255, 255, 255, 0.1)
                    `,
                    WebkitTextStroke: '2px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Accessibility: Respect reduced motion */}
          <style jsx>{`
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                transition-duration: 0.01ms !important;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
