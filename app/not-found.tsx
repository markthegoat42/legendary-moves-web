import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found - Legendary Moves',
};

export default function NotFound() {
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
            Error 404
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
            This page ran the <em style={{ fontStyle: 'italic', color: 'oklch(35% 0.14 22)' }}>wrong route</em>.
          </h1>
          <p className="body-base mb-8" style={{ maxWidth: '40rem' }}>
            The page you are looking for moved or never existed. Let&rsquo;s get you back on track.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="btn btn-primary uppercase text-xs tracking-wider">
              Back to Home
            </Link>
            <Link href="/camps" className="btn btn-outline uppercase text-xs tracking-wider">
              The Symposium
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
