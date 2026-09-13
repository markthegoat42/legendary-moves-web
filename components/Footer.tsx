'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/nil', label: 'NIL' },
    { href: '/camps', label: 'Seminar' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/book-a-call', label: 'Book a Call' },
    { href: '/ambassadors', label: 'Ambassadors' },
    { href: '/contact', label: 'Contact' },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
    { href: '/refund-policy', label: 'Refund Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--color-navy)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-md)' }}>
      <div className="container-lg">

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand + Tagline */}
          <div>
            <p className="text-xl font-bold mb-4" style={{ color: 'var(--color-white)' }}>
              Legendary Moves
            </p>
            <p className="text-sm" style={{ color: 'var(--color-gray-300)', lineHeight: 1.6 }}>
              NIL deal negotiation. College recruiting connections. Parent education.
            </p>
          </div>

          {/* Column 2: Site Links */}
          <div>
            <p className="text-xs uppercase tracking-wider mb-6" style={{ color: 'var(--color-accent-gold)', letterSpacing: '0.1em' }}>
              SITE
            </p>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--color-gray-300)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="text-xs uppercase tracking-wider mb-6" style={{ color: 'var(--color-accent-gold)', letterSpacing: '0.1em' }}>
              CONTACT
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@mylegendarymoves.com"
                className="block text-sm hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-gray-300)' }}
              >
                info@mylegendarymoves.com
              </a>
              <a
                href="tel:+18323918105"
                className="block text-sm hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-gray-300)' }}
              >
                832-391-8105
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <motion.div
          className="border-t-2 pt-6"
          style={{ borderColor: 'oklch(from var(--color-accent-gold) l c h / 0.4)', originX: 0 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-gray-600)' }}>
              © 2026 Legendary Moves
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-wider hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--color-gray-600)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
