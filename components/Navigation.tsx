'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/nil', label: 'NIL' },
    { href: '/camps', label: 'Camps' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/book-a-call', label: 'Book a Call' },
    { href: '/contact', label: 'Contact' },
  ];

  const isHomepage = pathname === '/';

  return (
    <nav
      className={`border-b-2 relative ${isHomepage ? 'fixed top-0 left-0 right-0 z-50' : 'bg-white'}`}
      style={{
        borderColor: isHomepage ? 'rgba(255, 255, 255, 0.2)' : 'var(--color-charcoal)',
        backgroundColor: isHomepage ? 'rgba(0, 0, 0, 0.85)' : undefined
      }}
    >
      <div className="container-lg relative z-10" style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem', minHeight: '72px', display: 'flex', alignItems: 'center' }}>
        <div className="flex items-center justify-center w-full relative">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="relative inline-block group"
                  >
                    {isActive ? (
                      /* Active state: Sleek pill */
                      <motion.div
                        className="relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.23, 1, 0.32, 1]
                        }}
                      >
                        {/* Background pill */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            backgroundColor: isHomepage ? 'rgba(255, 255, 255, 0.18)' : 'rgba(0, 0, 0, 0.06)'
                          }}
                          layoutId="activeNavPill"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30
                          }}
                        />

                        {/* Text */}
                        <span
                          className="relative z-10 inline-block text-sm font-semibold tracking-wide px-4 py-2"
                          style={{
                            color: isHomepage ? 'var(--color-white)' : 'var(--color-charcoal)',
                            textShadow: isHomepage ? '0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.9)' : undefined
                          }}
                        >
                          {link.label}
                        </span>
                      </motion.div>
                    ) : (
                      /* Inactive state: Clean text with refined hover */
                      <div className="relative px-4 py-2">
                        <motion.span
                          className="inline-block text-sm font-medium tracking-wide"
                          style={{
                            color: isHomepage ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.6)',
                            transition: 'color 0.2s ease-out',
                            textShadow: isHomepage ? '0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.9)' : undefined
                          }}
                          whileHover={{
                            color: isHomepage ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0.9)'
                          }}
                        >
                          {link.label}
                        </motion.span>

                        {/* Refined underline on hover */}
                        <motion.span
                          className="absolute bottom-1 left-4 right-4 h-px"
                          style={{
                            backgroundColor: isHomepage ? 'var(--color-white)' : 'var(--color-accent-gold)',
                            originX: 0.5
                          }}
                          initial={{ scaleX: 0, opacity: 0 }}
                          whileHover={{ scaleX: 1, opacity: 1 }}
                          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                        />
                      </div>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right: CTA Button (Desktop) - Absolute positioned */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
            <Link
              href="/book-a-call"
              className="btn btn-primary uppercase text-xs tracking-wider"
              style={isHomepage ? {
                background: 'rgba(255, 255, 255, 0.15)',
                color: 'var(--color-white)',
                borderColor: 'var(--color-white)',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.9)'
              } : undefined}
            >
              Schedule Call
            </Link>
          </div>

          {/* Mobile Menu Toggle - Absolute positioned */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-xs uppercase tracking-wider font-mono absolute right-0 top-1/2 -translate-y-1/2"
            aria-label="Toggle menu"
            style={{ color: isHomepage ? 'var(--color-white)' : undefined }}
          >
            {mobileMenuOpen ? '[CLOSE]' : '[MENU]'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50" style={{ top: '60px' }}>
          <div className="container-lg" style={{ paddingTop: 'var(--spacing-lg)' }}>
            <div className="space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-2xl uppercase font-mono ${
                    pathname === link.href ? 'border-l-4 pl-4' : ''
                  }`}
                  style={pathname === link.href ? { borderColor: 'var(--color-charcoal)' } : {}}
                >
                  {pathname === link.href && '['}
                  {link.label}
                  {pathname === link.href && ']'}
                </Link>
              ))}

              <div className="pt-8 border-t-2" style={{ borderColor: 'var(--color-charcoal)' }}>
                <Link
                  href="/book-a-call"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-primary uppercase text-xs tracking-wider w-full block text-center"
                >
                  Schedule Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
