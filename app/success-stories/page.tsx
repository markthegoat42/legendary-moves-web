'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function SuccessStoriesPage() {
  // TODO: Verify image rights with LSU and Charlotte athletic departments before deploying.
  // Replace with original photography or licensed assets if needed.
  const players = [
    {
      name: "Jakolby Jones",
      image: "/players/jakolby-jones.jpg",
      meta: "OL · LSU · Many, LA",
      note: "Signed with LSU.",
    },
    {
      name: "Chance Williams",
      image: "/players/chance-williams.jpg",
      meta: "RB · Charlotte · Cincinnati, OH",
      note: "Signed with Charlotte.",
    },
    {
      name: "Charles Bassey",
      image: "/players/charles-bassey.webp",
      meta: "Center · San Antonio Spurs · Lagos, Nigeria",
      note: "Re-signed.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: '100vh',
          overflow: 'hidden',
          paddingBottom: 'clamp(4rem, 8vh, 8rem)'
        }}
      >
        {/* Layer 1: Background image with duotone filter */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/lsu-helmet.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%) contrast(1.1) brightness(0.6)',
            zIndex: 0
          }}
        />

        {/* Layer 2: Dark gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)',
            zIndex: 1
          }}
        />

        {/* Layer 3: Content */}
        <div className="container-lg w-full" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            {/* Gold rule */}
            <div className="divider-gold mb-6" style={{ marginLeft: 0, background: 'var(--accent-gold)' }} />

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(4.5rem, 10vw, 8.75rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--text-on-dark)',
              textShadow: '0 2px 24px rgba(0, 0, 0, 0.4)',
              marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)'
            }}>
              Players we've <em style={{ fontStyle: 'italic', color: 'var(--accent-maroon)' }}>helped</em>.
            </h1>

            {/* Tagline */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--accent-gold)',
              marginBottom: 'clamp(2rem, 4vh, 3rem)'
            }}>
              A FEW OF THE ATHLETES CHRIS SCOTT HAS WORKED WITH PERSONALLY
            </p>

            {/* CTA Button */}
            <Link href="/book-a-call" className="btn-primary inline-block">
              SCHEDULE A CALL ›
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute"
          style={{ bottom: '2rem', right: '2rem', fontSize: '1.5rem', color: 'var(--text-on-dark)', opacity: 0.5 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.div>
      </section>

      {/* SECTION 2 - Players Grid */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: '6rem', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {players.map((player, index) => (
                <motion.div
                  key={player.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.1,
                  }}
                  className="border-2"
                  style={{ borderColor: 'var(--color-charcoal)' }}
                >
                  {/* Image Container */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      aspectRatio: '4/5',
                    }}
                  >
                    <div
                      className="transition-transform duration-[600ms]"
                      style={{
                        width: '100%',
                        height: '100%',
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.04)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1.0)';
                      }}
                    >
                      <Image
                        src={player.image}
                        alt={player.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{
                          objectFit: 'cover',
                          objectPosition: player.name === 'Charles Bassey' ? 'center top' : 'center'
                        }}
                      />
                    </div>
                  </div>

                  {/* Player Info */}
                  <div className="p-6 border-t-2" style={{ borderColor: 'var(--color-charcoal)' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-editorial)',
                        fontSize: '1.75rem',
                        fontWeight: 400,
                        color: 'var(--color-charcoal)',
                        marginBottom: '8px',
                        lineHeight: 1.2,
                      }}
                    >
                      {player.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--color-gray-600)',
                        marginBottom: '8px',
                      }}
                    >
                      {player.meta}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontStyle: 'italic',
                        color: 'var(--color-gray-600)',
                      }}
                    >
                      {player.note}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - CTA */}
      <section style={{ backgroundColor: 'var(--color-navy)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-6">
                <h2
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: '-0.01em',
                    color: 'var(--color-white)',
                  }}
                >
                  Your athlete could be{' '}
                  <em
                    style={{
                      fontStyle: 'italic',
                      color: 'var(--color-accent-gold)',
                    }}
                  >
                    next
                  </em>
                  .
                </h2>
              </div>

              <div className="col-span-12 md:col-span-6">
                <p
                  className="mb-8"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: 'var(--color-white)',
                    opacity: 0.9,
                  }}
                >
                  Schedule a fifteen-minute call. No commitment, no pressure.
                </p>
                <Link href="/book-a-call">
                  <motion.button
                    className="px-8 py-4 text-xs tracking-wider font-medium border-2"
                    style={{
                      backgroundColor: 'var(--color-maroon)',
                      borderColor: 'var(--color-maroon)',
                      color: 'var(--color-white)',
                      fontFamily: 'var(--font-body)',
                      transition: 'all 0.3s ease',
                    }}
                    whileHover={{ backgroundColor: 'transparent', borderColor: 'var(--color-white)' }}
                  >
                    SCHEDULE CALL
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
