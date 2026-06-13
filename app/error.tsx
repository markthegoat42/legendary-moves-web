'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error for monitoring tools (e.g. Sentry) once one is wired up.
    console.error(error);
  }, [error]);

  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      <section
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '8rem',
          paddingBottom: '5rem',
        }}
      >
        <div className="container-lg">
          <div className="divider-gold mb-6" style={{ marginLeft: 0, background: 'var(--accent-gold)' }} />
          <p className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: 'var(--color-accent-gold)' }}>
            Something went wrong
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              color: 'var(--color-charcoal)',
              marginBottom: '1.5rem',
            }}
          >
            We hit an <em style={{ fontStyle: 'italic', color: 'oklch(35% 0.14 22)' }}>unexpected snag</em>.
          </h1>
          <p className="body-base mb-8" style={{ maxWidth: '40rem' }}>
            Something on our end didn&rsquo;t load correctly. You can try again, or head back home.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => reset()} className="btn btn-primary uppercase text-xs tracking-wider">
              Try Again
            </button>
            <Link href="/" className="btn btn-outline uppercase text-xs tracking-wider">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
