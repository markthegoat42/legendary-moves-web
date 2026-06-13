'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCallCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show CTA after user scrolls down 300px.
    // Passive listener so scrolling never waits on JS; only setState when the
    // visibility actually flips, so we don't re-render on every scroll frame.
    let visible = false;
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      if (shouldShow !== visible) {
        visible = shouldShow;
        setIsVisible(shouldShow);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            bottom: 'clamp(1.5rem, 3vw, 2rem)',
            left: 'clamp(1.5rem, 3vw, 2rem)',
            zIndex: 999,
          }}
        >
          <Link
            href="/book-a-call"
            className="group"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 1.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              background: 'var(--color-accent-red)',
              color: 'white',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
            }}
          >
            {/* Phone Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M22 16.92V19.92C22.0011 20.2175 21.9441 20.5125 21.8325 20.7883C21.7209 21.0641 21.5573 21.3149 21.3513 21.5266C21.1453 21.7382 20.9013 21.9064 20.6327 22.0212C20.364 22.136 20.0764 22.1952 19.786 22.195C16.716 21.895 13.771 20.815 11.216 19.055C8.87 17.47 6.935 15.385 5.53 12.925C3.75 10.355 2.655 7.385 2.365 4.285C2.36501 3.99638 2.42405 3.71076 2.53819 3.44385C2.65234 3.17694 2.81926 2.93465 3.02948 2.72993C3.2397 2.52521 3.48868 2.36248 3.76243 2.25012C4.03618 2.13776 4.32904 2.07858 4.625 2.08H7.625C8.115 2.075 8.589 2.255 8.965 2.59C9.341 2.925 9.595 3.385 9.685 3.885C9.855 4.885 10.135 5.865 10.525 6.805C10.665 7.135 10.715 7.495 10.665 7.855C10.615 8.215 10.475 8.555 10.245 8.835L9.025 10.055C10.605 12.555 12.815 14.765 15.315 16.345L16.535 15.125C16.815 14.895 17.155 14.755 17.515 14.705C17.875 14.655 18.235 14.705 18.565 14.845C19.505 15.235 20.485 15.515 21.485 15.685C21.99 15.775 22.455 16.035 22.79 16.415C23.125 16.795 23.305 17.275 23.295 17.77L22 16.92Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Schedule a Call</span>

            {/* Arrow Icon */}
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0 }}
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
