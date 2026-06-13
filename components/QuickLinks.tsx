'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const links = [
  {
    href: '/services',
    label: 'What We Do',
    description: 'NIL representation, recruiting advisory, parent education',
    color: 'oklch(75% 0.15 80)', // Bright gold
  },
  {
    href: '/about',
    label: 'Who We Are',
    description: '14 years inside college and professional football',
    color: 'oklch(50% 0.22 22)', // Bright maroon
  },
  {
    href: '/nil',
    label: 'NIL Deals',
    description: 'Brand partnerships and endorsement opportunities',
    color: 'oklch(60% 0.15 250)', // Bright navy
  },
  {
    href: '/book-a-call',
    label: 'Work With Us',
    description: 'Schedule a 15-minute consultation call',
    color: 'oklch(75% 0.15 80)', // Bright gold
  },
];

export default function QuickLinks() {
  return (
    <section style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--color-white)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
              >
                <motion.div
                  className="group relative overflow-hidden"
                  style={{
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 'var(--space-3xl)',
                    backgroundColor: link.color,
                    borderRadius: '0',
                  }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  whileHover={{ y: -8 }}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)'
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="flex items-center justify-between mb-6"
                      initial={{ x: 0 }}
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2
                        style={{
                          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 800,
                          fontStyle: 'italic',
                          lineHeight: 1,
                          letterSpacing: '-0.03em',
                          color: 'var(--color-white)',
                          textTransform: 'uppercase'
                        }}
                      >
                        {link.label}
                      </h2>
                      <ArrowRight
                        size={48}
                        strokeWidth={3}
                        style={{
                          color: 'var(--color-white)',
                          transform: 'translateX(0)',
                          transition: 'transform 0.3s ease'
                        }}
                        className="group-hover:translate-x-2"
                      />
                    </motion.div>

                    <p
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        fontFamily: 'var(--font-body)',
                        lineHeight: 1.5,
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {link.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
