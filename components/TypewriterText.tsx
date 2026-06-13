'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  useViewport?: boolean;
}

export default function TypewriterText({
  text,
  className = '',
  style = {},
  delay = 0,
  useViewport = false
}: TypewriterTextProps) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only run animation after client-side mount
  if (!mounted) {
    return <span ref={ref} className={className} style={style}>{text}</span>;
  }

  const shouldAnimate = useViewport ? isInView : true;

  // Split text into characters
  const characters = text.split('');

  // Calculate stagger delay (total duration ~0.4s)
  const characterDelay = 0.4 / characters.length;

  return (
    <span ref={ref} className={className} style={style} suppressHydrationWarning>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.01,
            delay: delay + (index * characterDelay),
            ease: 'linear'
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
