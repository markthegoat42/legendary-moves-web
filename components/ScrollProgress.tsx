'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: 'var(--color-accent-gold)',
        transformOrigin: '0%',
        zIndex: 9999,
      }}
    />
  );
}
