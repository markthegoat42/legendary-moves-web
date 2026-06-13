// Shared layout for legal pages (Privacy, Terms, Refund, Disclaimer).
// NOTE FOR THE OWNER: these documents are standard templates, not legal advice.
// Have a Texas attorney review them before relying on them, and replace every
// [BRACKETED] placeholder with your real details before launch.

export default function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      {/* Header */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: '8rem', paddingBottom: '2.5rem' }}
      >
        <div className="container-lg">
          <div className="divider-gold mb-6" style={{ marginLeft: 0, background: 'var(--accent-gold)' }} />
          <h1
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              color: 'var(--color-charcoal)',
            }}
          >
            {title}
          </h1>
          <p
            className="font-mono text-xs uppercase tracking-wider"
            style={{ color: 'var(--color-gray-600)', marginTop: '1rem' }}
          >
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <div className="container-lg">
          <div className="legal-content">{children}</div>
        </div>
      </section>
    </div>
  );
}
