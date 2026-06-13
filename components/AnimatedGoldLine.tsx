'use client';

import { motion } from 'framer-motion';

interface AnimatedGoldLineProps {
  opacity?: number;
  delay?: number;
}

export default function AnimatedGoldLine({ opacity = 1, delay = 0 }: AnimatedGoldLineProps) {
  return (
    <motion.div
      className="border-b-2"
      style={{
        borderColor: opacity < 1
          ? `oklch(from var(--color-accent-gold) l c h / ${opacity})`
          : 'var(--color-accent-gold)',
        originX: 0
      }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    />
  );
}
