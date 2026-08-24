'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MAROON = 'oklch(35% 0.14 22)';

// Registration — live Ticket Tailor event page (Baton Rouge). Payments run through Stripe.
const REGISTER_URL = 'https://www.tickettailor.com/events/legendarymoves/2359583';

// Event details — edit in one place.
const SEMINAR_DATE = 'Sunday, November 8, 2026';
const LOCATION = 'Baton Rouge, LA';

const schedule = [
  { label: 'Registration', time: '9:00 AM' },
  { label: 'Seminar', time: '10:00 AM – 1:00 PM' },
  { label: 'VIP Q&A', time: '1:00 – 2:00 PM' },
];

const VENUE = 'Holiday Inn Baton Rouge – South · 9990 Airline Hwy';

// Matches the flyer: Single $40, Family $90, plus the VIP upsell.
const pricing = [
  { tier: 'Single Ticket', price: '$40' },
  { tier: 'Family Package', price: '$90' },
  { tier: 'VIP Recruiting Review', price: '$150' },
];

const faqs = [
  {
    q: 'Who is this seminar for?',
    a: 'Parents of 8th–12th graders, high school coaches, trainers, youth organizations, and transfer portal and JUCO athletes. If your family is thinking about the next level, this is for you.',
  },
  {
    q: 'Should I bring my athlete, or come alone?',
    a: 'Both benefit. Parents handle the calls, the offers, and the finances, and athletes hear directly what coaches are looking for. Bring your athlete if you can.',
  },
  {
    q: 'Is my athlete too young or too old?',
    a: 'The seminar is built for 8th grade through seniors, plus transfer portal athletes. Younger athletes are welcome with a parent.',
  },
  {
    q: 'What if I can’t make it?',
    a: 'Tickets can be refunded or transferred under our refund policy. See the full terms on our Refund Policy page.',
  },
  {
    q: 'Do I need the VIP ticket?',
    a: 'No. General admission covers the full seminar. The VIP Recruiting Review is an optional upgrade that adds a one-on-one consultation, a film review, a social media audit, and a personalized roadmap.',
  },
  {
    q: 'What should we bring?',
    a: 'Just yourselves and your questions. Every ticket includes a recruiting workbook and resources to take home.',
  },
];

const agenda = [
  'The New Era of College Recruiting',
  'What Coaches Really Look For',
  'The Recruiting Timeline: 8th Grade to the Transfer Portal',
  'Common Recruiting Mistakes',
  'Building an Effective Recruiting Profile',
  'Understanding NCAA, NAIA & JUCO Opportunities',
  'Scholarships, NIL & Revenue Sharing',
  'Signing Day Preparation',
  'Bonus: Saving Families Money During Recruiting',
];

const vipBenefits = [
  'A 20-minute one-on-one recruiting consultation',
  'Highlight film review',
  'Social media audit',
  'A full recruiting evaluation',
  'A personalized recruiting roadmap',
];

const includedResources = [
  'Recruiting Workbook',
  'Recruiting Calendar',
  'Coach Email Templates',
  'Contact Tracker',
  'Official Visit Checklist',
  'Scholarship Guide',
  'Transfer Portal Guide',
  'Recruiting Timeline',
];

// Fire the Meta Pixel "InitiateCheckout" event when someone heads to the ticket page.
function trackCheckout() {
  const w = window as unknown as { fbq?: (...args: unknown[]) => void };
  if (typeof window !== 'undefined' && typeof w.fbq === 'function') {
    w.fbq('track', 'InitiateCheckout');
  }
}

// Register button. External Ticket Tailor links open in a new tab.
function RegisterButton({ href, label }: { href: string; label: string }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      onClick={trackCheckout}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="btn btn-primary uppercase text-xs tracking-wider inline-block"
    >
      {label}
    </a>
  );
}

// Low-friction lead capture for cold traffic not ready to buy.
// Posts to the same Formspree form as the booking page, labeled by subject.
function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('idle');
    try {
      const res = await fetch('https://formspree.io/f/xkopobeq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'Seminar details request (Baton Rouge)' }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <p className="body-base" style={{ marginBottom: 0, color: MAROON }}>
        You&apos;re on the list. We&apos;ll send the details and a reminder before the seminar.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-3" style={{ maxWidth: '34rem' }}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        aria-label="Email address"
        style={{
          flex: '1 1 220px',
          border: '2px solid var(--color-charcoal)',
          padding: '0.85rem 1rem',
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          background: 'var(--color-white)',
        }}
      />
      <button type="submit" className="btn btn-primary uppercase text-xs tracking-wider">
        Send Me the Details
      </button>
      {status === 'error' && (
        <p className="text-xs" style={{ color: MAROON, width: '100%' }}>
          Something went wrong. Please try again, or email info@mylegendarymoves.com.
        </p>
      )}
    </form>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

/* ---------- reusable bits ---------- */

function MonoRows({ items }: { items: string[] }) {
  return (
    <div className="space-y-0 max-w-3xl">
      {items.map((item, i) => (
        <div
          key={item}
          className={`border-t-2 pt-4 pb-4 ${i === items.length - 1 ? 'border-b-2' : ''}`}
          style={{ borderColor: 'var(--color-charcoal)' }}
        >
          <p className="text-sm uppercase tracking-wide font-mono">{item}</p>
        </div>
      ))}
    </div>
  );
}

function TopicTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-3 max-w-4xl">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs uppercase tracking-wider font-mono"
          style={{
            border: '1px solid var(--color-charcoal)',
            padding: '0.5rem 1rem',
            color: 'var(--color-charcoal)',
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function GoldDivider() {
  return (
    <div className="relative" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="w-full" style={{ height: '1px', background: 'var(--color-accent-gold)', opacity: 0.4 }} />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4"
        style={{ background: 'var(--color-white)' }}
      >
        <span style={{ color: 'var(--color-accent-gold)', opacity: 0.6, fontSize: '1rem' }}>✦</span>
      </div>
    </div>
  );
}

function Heading({ pre, children }: { pre?: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      {pre && (
        <p className="text-xs uppercase tracking-wider font-mono mb-4" style={{ color: 'var(--color-accent-gold)' }}>
          {pre}
        </p>
      )}
      <h2
        style={{
          fontFamily: 'var(--font-editorial)',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
          color: 'var(--color-charcoal)',
        }}
      >
        {children}
      </h2>
    </div>
  );
}

/* Speaker media. Video = click-to-play; empty video = static photo. aspect defaults to a
   tall portrait but can be overridden per speaker (e.g. a 4:5 credential graphic). */
function SpeakerVideo({
  src,
  poster,
  name,
  aspect = '9 / 16',
}: {
  src?: string;
  poster: string;
  name: string;
  aspect?: string;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '340px',
        aspectRatio: aspect,
        background: 'var(--color-charcoal)',
        overflow: 'hidden',
        border: '2px solid var(--color-charcoal)',
      }}
    >
      {!src ? (
        <img src={poster} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      ) : playing ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="none"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video of ${name}`}
          style={{
            position: 'absolute',
            inset: 0,
            padding: 0,
            border: 'none',
            cursor: 'pointer',
            background: 'transparent',
          }}
        >
          <img src={poster} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <span
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.25)',
            }}
          >
            <span
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              }}
            >
              <span style={{ color: 'var(--color-charcoal)', fontSize: '1.5rem', marginLeft: '4px', lineHeight: 1 }}>▶</span>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

/* ---------- data ---------- */

const speakers = [
  {
    name: 'Coach Chris Scott Jr.',
    titles: [
      'Host · Founder, Legendary Moves',
      '14 Years Inside College & Pro Football Recruiting',
      'Bill Walsh Diversity Coaching Fellow · Washington Commanders',
    ],
    video: '',
    poster: '/images/chris-scott-commanders.jpg',
    aspect: '4 / 5',
    bio: [
      'Coach Chris Scott Jr. spent 14 years in the rooms where scholarships actually get decided, evaluating film, advising families, and watching talented players get passed over for one reason: no one taught them how recruiting really works.',
      'He built his career inside programs at TCU, SMU, the University of Houston, Temple, Grambling State, and the Washington Commanders, and in 2023 was selected for the Bill Walsh Diversity Coaching Fellowship with the Commanders.',
      'He founded Legendary Moves to put that knowledge in one room. In this seminar he breaks down exactly what college coaches look for, how film and social media make or break offers, how NIL and revenue sharing really work, and how families prepare for signing day.',
    ],
  },
];

const roadmap = [
  { grade: '7th – 8th Grade', items: ['Fundamentals first', 'Academics on track', 'Skill development', 'Building good habits'] },
  { grade: '9th – 10th Grade', items: ['Exposure begins', 'First highlight film', 'Showcase participation', 'A clean social presence'] },
  { grade: '11th Grade', items: ['The major recruiting year', 'Coach communication', 'Campus visits', 'Scholarship conversations'] },
  { grade: '12th Grade', items: ['Signing day preparation', 'Roster and walk-on paths', 'Transfer portal education', 'Finding the right fit'] },
];

const divisions = [
  { name: 'NCAA Division I', lines: ['The highest level of competition', 'The largest athletic budgets', 'Full and partial scholarships', 'National television exposure'] },
  { name: 'NCAA Division II', lines: ['Competitive football', 'Scholarship opportunities available', 'A strong balance of academics and athletics'] },
  { name: 'NCAA Division III', lines: ['No athletic scholarships', 'A strong academic focus', 'An excellent student-athlete experience'] },
  { name: 'NAIA', lines: ['Competitive football', 'Athletic scholarships available', 'Smaller campuses and class sizes'] },
  { name: 'Junior College (JUCO)', lines: ['A development opportunity', 'An academic recovery path', 'A route to NCAA programs'] },
];

const sampleBio = [
  'Player Name | QB',
  'Class of 2028',
  '6’2″ · 190 lbs',
  'Baton Rouge, LA',
  'GPA: 3.8',
  'Hudl link',
  'Email address',
];

/* ---------- testimonials (fill with real quotes; empty = section stays hidden) ---------- */
const testimonials: { quote: string; name: string; role: string }[] = [
  {
    quote:
      'You not only get an opportunity to come to this seminar, but you get an opportunity to work with experienced coaches.',
    name: 'Greg Lyons',
    role: 'Parent',
  },
  {
    quote:
      'Any parent looking to get their kids into athletics, especially at the next level, this information is invaluable.',
    name: 'Rodney Johnson',
    role: 'Parent',
  },
];

/* ---------- page ---------- */

export default function CampsPage() {
  return (
    <div style={{ background: 'var(--bg-primary)', paddingBottom: '4.5rem' }}>
      {/* HERO */}
      <section
        className="relative flex items-end"
        style={{ minHeight: '100vh', overflow: 'hidden', paddingBottom: 'clamp(4rem, 8vh, 8rem)' }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/wr-fb.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%) contrast(1.1) brightness(0.55)',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)',
            zIndex: 1,
          }}
        />
        <div className="container-lg w-full" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="divider-gold mb-6" style={{ marginLeft: 0, background: 'var(--accent-gold)' }} />
            <h1
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(4.5rem, 10vw, 8.75rem)',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--text-on-dark)',
                textShadow: '0 2px 24px rgba(0, 0, 0, 0.4)',
                marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)',
              }}
            >
              Before <em style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>signing day</em>.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--accent-gold)',
                marginBottom: '1rem',
              }}
            >
              SIGNING DAY RECRUITING SEMINAR · HOSTED BY COACH CHRIS SCOTT JR.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                fontWeight: 500,
                color: 'var(--text-on-dark)',
                marginBottom: '0.75rem',
              }}
            >
              <strong>{LOCATION}</strong>&nbsp; · &nbsp;{SEMINAR_DATE}&nbsp; · &nbsp;Tickets from $40
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.82)',
                marginBottom: 'clamp(1.75rem, 3.5vh, 2.5rem)',
                maxWidth: '34rem',
              }}
            >
              Everything parents need to know before the December signing period — from the team behind{' '}
              <strong>Tank Dell, Rashee Rice &amp; Courtland Sutton</strong>.
            </p>
            <a
              href={REGISTER_URL}
              onClick={trackCheckout}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
              style={{
                padding: '1rem 2.25rem',
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textDecoration: 'none',
              }}
            >
              Reserve Your Seat ›
            </a>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.7)',
                marginTop: '0.9rem',
              }}
            >
              Seats are limited · Recruiting workbook &amp; resources included with every ticket.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="absolute"
          style={{ bottom: '2rem', right: '2rem', fontSize: '1.5rem', color: 'var(--text-on-dark)', opacity: 0.5, zIndex: 2 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.div>
      </section>

      {/* EVENT DETAILS + REGISTRATION */}
      <section
        id="register"
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: '6rem', paddingBottom: 'var(--spacing-lg)', scrollMarginTop: '80px' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading>
              One city. <em style={{ fontStyle: 'italic', color: MAROON }}>One Saturday.</em>
            </Heading>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-8 border-t-2 pt-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="text-xs uppercase tracking-wider font-mono mb-2" style={{ color: 'var(--color-accent-gold)' }}>
                  {LOCATION} · ONE DAY ONLY
                </p>
                <h3 className="heading-sm uppercase mb-3" style={{ color: 'var(--color-charcoal)' }}>
                  {SEMINAR_DATE}
                </h3>
                <p className="text-sm uppercase tracking-wide font-mono mb-5" style={{ color: 'var(--color-charcoal)' }}>
                  {VENUE}
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6">
                  {schedule.map((s) => (
                    <span key={s.label} className="text-sm uppercase tracking-wide font-mono" style={{ color: 'var(--color-gray-600)' }}>
                      {s.label}: {s.time}
                    </span>
                  ))}
                </div>
                <p className="body-base" style={{ marginBottom: 0, maxWidth: '40rem' }}>
                  The Signing Day Recruiting Seminar is a live, in-person session hosted by Coach Chris Scott Jr. — the
                  up-to-date recruiting education parents, athletes, and coaches need before the December signing period,
                  covering NIL, roster limits, scholarships, recruiting strategy, and signing day preparation.
                </p>

                {/* Pricing */}
                <p className="text-xs uppercase tracking-wider font-mono mb-4 mt-8" style={{ color: MAROON }}>
                  Tickets
                </p>
                <div className="max-w-md mb-6">
                  {pricing.map((p, i) => (
                    <div
                      key={p.tier}
                      className={`flex items-center justify-between border-t-2 pt-3 pb-3 ${i === pricing.length - 1 ? 'border-b-2' : ''}`}
                      style={{ borderColor: 'var(--color-charcoal)' }}
                    >
                      <span className="text-sm uppercase tracking-wide font-mono">{p.tier}</span>
                      <span className="text-sm font-mono font-bold" style={{ color: MAROON }}>{p.price}</span>
                    </div>
                  ))}
                </div>

                <RegisterButton href={REGISTER_URL} label="Reserve Your Seat" />
                <p className="text-xs mt-4" style={{ color: 'var(--color-gray-600)' }}>
                  Secure checkout through Ticket Tailor · Seats are limited.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link href="/book-a-call" className="btn btn-outline uppercase text-xs tracking-wider">
                Have Questions? Book a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* PROOF / TRACK RECORD */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="THE TRACK RECORD">
              Guidance that puts athletes <em style={{ fontStyle: 'italic', color: MAROON }}>on the map</em>.
            </Heading>
            <figure className="mb-10">
              <div style={{ border: '2px solid var(--color-charcoal)', overflow: 'hidden' }}>
                <img
                  src="/images/seminar-room.webp"
                  alt="Parents and athletes at a Legendary Moves recruiting seminar"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
              <figcaption
                className="text-xs uppercase tracking-wider font-mono mt-3"
                style={{ color: 'var(--color-gray-600)' }}
              >
                A recent Legendary Moves recruiting seminar.
              </figcaption>
            </figure>
            <div className="max-w-4xl space-y-6 mb-10">
              <p className="body-base">
                The people behind this seminar have helped develop and place athletes at every level, from Power Five
                signings to the NFL. This is the same knowledge, in one room, for your family.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 max-w-4xl mb-10">
              {[
                'Tank Dell · Houston Texans',
                'Courtland Sutton · Denver Broncos',
                'Rashee Rice · Kansas City Chiefs',
                'Marcus Jones · New England Patriots',
                'Patrick Paul · Miami Dolphins',
                'Jakolby Jones · LSU',
                'Charles Bassey · San Antonio Spurs',
              ].map((n) => (
                <span
                  key={n}
                  className="text-xs uppercase tracking-wider font-mono"
                  style={{ border: '1px solid var(--color-charcoal)', padding: '0.5rem 1rem', color: 'var(--color-charcoal)' }}
                >
                  {n}
                </span>
              ))}
            </div>
            <Link href="/success-stories" className="btn btn-outline uppercase text-xs tracking-wider">
              See the Success Stories
            </Link>
          </motion.div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <>
          <GoldDivider />
          <section
            className="border-b-2"
            style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
          >
            <div className="container-lg">
              <motion.div {...fadeUp}>
                <Heading pre="WHAT PEOPLE SAY">
                  In their own <em style={{ fontStyle: 'italic', color: MAROON }}>words</em>.
                </Heading>
                <div className="grid grid-cols-12 gap-8">
                  {testimonials.map((t) => (
                    <div
                      key={t.name + t.quote.slice(0, 12)}
                      className="col-span-12 md:col-span-6 border-t-2 pt-6"
                      style={{ borderColor: 'var(--color-charcoal)' }}
                    >
                      <p className="body-base" style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <p className="text-xs uppercase tracking-wider font-mono" style={{ color: 'var(--color-accent-gold)' }}>
                        {t.name} · {t.role}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      <GoldDivider />

      {/* YOUR HOST */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="YOUR HOST">
              Led by someone who has <em style={{ fontStyle: 'italic', color: MAROON }}>lived it</em>.
            </Heading>
            <div className="space-y-24">
              {speakers.map((s) => (
                <div key={s.name} className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-12 md:col-span-5 lg:col-span-4 flex justify-center md:justify-start">
                    <SpeakerVideo src={s.video} poster={s.poster} name={s.name} aspect={s.aspect} />
                  </div>
                  <div className="col-span-12 md:col-span-7 lg:col-span-8">
                    <h3 className="heading-sm uppercase" style={{ color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                      {s.name}
                    </h3>
                    <p
                      className="text-xs uppercase tracking-wider font-mono mb-6"
                      style={{ color: 'var(--color-accent-gold)', lineHeight: 1.8 }}
                    >
                      {s.titles.join('  ·  ')}
                    </p>
                    <div className="space-y-4 max-w-3xl">
                      {s.bio.map((p, i) => (
                        <p key={i} className="body-base" style={{ marginBottom: 0 }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* INTRO */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading>
              Everything before <em style={{ fontStyle: 'italic', color: MAROON }}>you sign</em>.
            </Heading>
            <div className="max-w-4xl space-y-6">
              <p className="body-base drop-cap">
                Every year, thousands of talented players miss scholarship opportunities for one reason: no one taught
                their family how recruiting actually works. The film was fine. The athlete was good enough. The knowledge
                was missing.
              </p>
              <p className="body-base">
                This seminar puts that knowledge in one room. In a focused morning, parents, athletes, and coaches break
                down how recruiting works right now, from NIL and revenue sharing to roster limits, scholarships, and the
                timeline by grade, and exactly how to prepare before the December signing period. You leave knowing your
                next move, and when to make it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* AGENDA */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="THE SEMINAR AGENDA">
              What we <em style={{ fontStyle: 'italic', color: MAROON }}>cover</em>.
            </Heading>
            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base drop-cap">
                Eight sessions plus a bonus, built to take your family from where recruiting stands today to a real
                signing-day plan.
              </p>
            </div>
            <MonoRows items={agenda} />
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* NCAA RECRUITING */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="THE NEW ERA OF RECRUITING">
              The recruiting process, <em style={{ fontStyle: 'italic', color: MAROON }}>explained</em>.
            </Heading>
            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base drop-cap">
                Most families have the same questions, usually at the same time, and usually a year later than they
                should. We answer them directly, so you can act on them while there is still time.
              </p>
            </div>
            <div className="mb-16">
              <p className="text-xs uppercase tracking-wider font-mono mb-6" style={{ color: 'var(--color-gray-600)' }}>
                WHAT WE COVER
              </p>
              <MonoRows
                items={[
                  'When recruiting actually starts',
                  'What coaches really look for',
                  'Official versus unofficial visits',
                  'Common recruiting mistakes',
                  'Where the scholarship opportunities are',
                  'Academic requirements and eligibility',
                  'Recruiting timelines by grade level',
                ]}
              />
            </div>

            <p className="text-xs uppercase tracking-wider font-mono mb-6" style={{ color: 'var(--color-accent-gold)' }}>
              THE RECRUITING ROADMAP
            </p>
            <div className="grid grid-cols-12 gap-8">
              {roadmap.map((stage) => (
                <div
                  key={stage.grade}
                  className="col-span-12 md:col-span-6 border-t-2 pt-6"
                  style={{ borderColor: 'var(--color-charcoal)' }}
                >
                  <h3 className="heading-sm uppercase mb-4" style={{ color: 'var(--color-charcoal)' }}>
                    {stage.grade}
                  </h3>
                  <ul className="space-y-2">
                    {stage.items.map((item) => (
                      <li key={item} className="body-base" style={{ marginBottom: 0 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* DIVISIONS */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="NCAA, NAIA & JUCO OPPORTUNITIES">
              Thousands of paths beyond <em style={{ fontStyle: 'italic', color: MAROON }}>Division I</em>.
            </Heading>
            <div className="grid grid-cols-12 gap-8 mb-16">
              {divisions.map((d) => (
                <div
                  key={d.name}
                  className="col-span-12 md:col-span-6 lg:col-span-4 border-t-2 pt-6"
                  style={{ borderColor: 'var(--color-charcoal)' }}
                >
                  <h3 className="heading-sm uppercase mb-4" style={{ color: 'var(--color-charcoal)' }}>
                    {d.name}
                  </h3>
                  <ul className="space-y-2">
                    {d.lines.map((line) => (
                      <li key={line} className="body-base" style={{ marginBottom: 0 }}>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="max-w-3xl border-l-4 pl-6" style={{ borderColor: 'var(--color-accent-gold)' }}>
              <p className="body-base" style={{ marginBottom: 0 }}>
                There are thousands of opportunities to keep playing. The goal was never just Division I. The goal is the{' '}
                <span style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', color: MAROON }}>right fit</span>{' '}
                — the program where your athlete is wanted, can grow, and can graduate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* NIL & REVENUE SHARING */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="SCHOLARSHIPS, NIL & REVENUE SHARING">
              Name, image, <em style={{ fontStyle: 'italic', color: MAROON }}>likeness</em>.
            </Heading>
            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base drop-cap">
                A lot of athletes chase NIL before they have done the work that makes NIL possible. We flip the order. NIL
                and revenue-sharing opportunities are earned through performance, branding, and reputation, and we show
                families how to build all three the right way.
              </p>
            </div>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-wider font-mono mb-6" style={{ color: 'var(--color-gray-600)' }}>
                WHAT FAMILIES LEARN
              </p>
              <MonoRows
                items={[
                  'What NIL and revenue sharing really are, in plain terms',
                  'How scholarships actually work',
                  'Building a personal brand',
                  'Monetizing social media responsibly',
                  'Financial literacy basics',
                  'Protecting your brand and reputation',
                ]}
              />
            </div>
            <div className="max-w-3xl border-l-4 pl-6" style={{ borderColor: 'var(--color-accent-gold)' }}>
              <p className="body-base" style={{ marginBottom: 0 }}>
                The myth is that NIL comes first. The fact is that opportunities follow the athletes who develop, who
                carry themselves well, and who are worth investing in.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* HIGHLIGHT TAPE */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="BUILDING YOUR RECRUITING PROFILE">
              A film that gets <em style={{ fontStyle: 'italic', color: MAROON }}>watched</em>.
            </Heading>
            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base drop-cap">
                A coach decides in the first thirty seconds whether to keep watching. Most highlight films are too long,
                poorly organized, and bury the best plays. This session shows you how to fix that.
              </p>
            </div>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-wider font-mono mb-6" style={{ color: 'var(--color-gray-600)' }}>
                WHAT WE TEACH
              </p>
              <MonoRows
                items={[
                  'The right film length',
                  'Which clips to include, and which to cut',
                  'Position-specific film expectations',
                  'Editing technique',
                  'Hudl best practices',
                  'How to distribute film to coaches',
                ]}
              />
            </div>

            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-6 border-t-2 pt-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="text-xs uppercase tracking-wider font-mono mb-4" style={{ color: 'var(--color-accent-gold)' }}>
                  RECOMMENDED FORMAT
                </p>
                <ul className="space-y-2">
                  {['Three to five minutes, maximum', 'Best plays first', 'Clear player identification', 'Updated regularly'].map(
                    (line) => (
                      <li key={line} className="body-base" style={{ marginBottom: 0 }}>
                        {line}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="col-span-12 md:col-span-6 border-t-2 pt-6" style={{ borderColor: MAROON }}>
                <p className="text-xs uppercase tracking-wider font-mono mb-4" style={{ color: MAROON }}>
                  COMMON MISTAKES
                </p>
                <ul className="space-y-2">
                  {[
                    'Long intros before any football',
                    'Music playing over the film',
                    'Poor clip quality',
                    'No player identification',
                    'Too many average plays',
                  ].map((line) => (
                    <li key={line} className="body-base" style={{ marginBottom: 0 }}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* SOCIAL MEDIA */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="SOCIAL MEDIA RECRUITING">
              Your feed is your <em style={{ fontStyle: 'italic', color: MAROON }}>resume</em>.
            </Heading>
            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base drop-cap">
                College coaches check social media before they ever pick up the phone. A single bad post can end interest
                that took years to build. We show athletes how to make their presence an asset instead of a liability.
              </p>
            </div>

            <div className="grid grid-cols-12 gap-8 mb-16">
              <div className="col-span-12 md:col-span-6 border-t-2 pt-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="text-xs uppercase tracking-wider font-mono mb-4" style={{ color: 'var(--color-accent-gold)' }}>
                  DO
                </p>
                <ul className="space-y-2">
                  {[
                    'Use your real name',
                    'Include your graduation year',
                    'List height and weight',
                    'Post your highlights',
                    'Celebrate your teammates',
                    'Show leadership',
                    'Engage professionally',
                    'Keep your profiles updated',
                  ].map((line) => (
                    <li key={line} className="body-base" style={{ marginBottom: 0 }}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 md:col-span-6 border-t-2 pt-6" style={{ borderColor: MAROON }}>
                <p className="text-xs uppercase tracking-wider font-mono mb-4" style={{ color: MAROON }}>
                  DON&apos;T
                </p>
                <ul className="space-y-2">
                  {[
                    'Post negativity',
                    'Use profanity',
                    'Argue with people online',
                    'Share inappropriate photos',
                    'Complain about coaches',
                    'Air out locker room issues',
                    'Share controversial content',
                  ].map((line) => (
                    <li key={line} className="body-base" style={{ marginBottom: 0 }}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="max-w-md">
              <p className="text-xs uppercase tracking-wider font-mono mb-4" style={{ color: 'var(--color-gray-600)' }}>
                SAMPLE RECRUITING BIO
              </p>
              <div className="border-2 p-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                {sampleBio.map((line, i) => (
                  <p
                    key={line}
                    className={i === 0 ? 'text-sm font-mono uppercase tracking-wide' : 'text-sm font-mono'}
                    style={{ color: i === 0 ? 'var(--color-charcoal)' : 'var(--color-gray-600)', marginBottom: '0.25rem' }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* PARENT SESSION */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="FOR PARENTS">
              What every <em style={{ fontStyle: 'italic', color: MAROON }}>parent</em> should know.
            </Heading>
            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base drop-cap">
                Recruiting is a family decision, and parents are the ones fielding the calls, reading the offers, and
                planning the finances. This session is for you.
              </p>
            </div>
            <MonoRows
              items={[
                'How recruiting actually works',
                'Communicating with college coaches',
                'The real scholarship landscape',
                'NIL and revenue sharing, explained for parents',
                'A transfer portal overview',
                'Academic eligibility requirements',
                'Financial planning, and saving money during recruiting',
              ]}
            />
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* WHAT YOU LEAVE WITH — VIP + RESOURCES */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="WHAT YOU LEAVE WITH">
              You leave with a <em style={{ fontStyle: 'italic', color: MAROON }}>plan</em>.
            </Heading>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-wider font-mono mb-6" style={{ color: 'var(--color-gray-600)' }}>
                INCLUDED WITH EVERY TICKET
              </p>
              <TopicTags tags={includedResources} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-mono mb-6" style={{ color: MAROON }}>
                VIP RECRUITING REVIEW · $150
              </p>
              <MonoRows items={vipBenefits} />
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* FAQ */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="BEFORE YOU ASK">
              Questions, <em style={{ fontStyle: 'italic', color: MAROON }}>answered</em>.
            </Heading>
            <div className="max-w-3xl">
              {faqs.map((f, i) => (
                <div
                  key={f.q}
                  className={`border-t-2 pt-6 pb-6 ${i === faqs.length - 1 ? 'border-b-2' : ''}`}
                  style={{ borderColor: 'var(--color-charcoal)' }}
                >
                  <h3
                    className="mb-2"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-charcoal)' }}
                  >
                    {f.q}
                  </h3>
                  <p className="body-base" style={{ marginBottom: 0 }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* EMAIL CAPTURE — cold traffic not ready to buy */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="NOT READY YET?">
              Get the <em style={{ fontStyle: 'italic', color: MAROON }}>details</em>.
            </Heading>
            <p className="body-base mb-8" style={{ maxWidth: '40rem' }}>
              Drop your email and we&apos;ll send you the seminar details and a reminder before it sells out. No pressure,
              no spam.
            </p>
            <EmailCapture />
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: 'var(--color-navy)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <div className="grid grid-cols-12 gap-4">
              <div
                className="col-span-12 md:col-span-6 border-r-0 md:border-r-2 md:pr-8 pb-8 md:pb-0"
                style={{ borderColor: 'var(--color-gray-600)' }}
              >
                <h2 className="heading-md uppercase mb-6" style={{ color: 'var(--color-white)', fontWeight: 700 }}>
                  RESERVE YOUR SEAT
                </h2>
              </div>
              <div className="col-span-12 md:col-span-6 md:pl-8">
                <p className="body-base mb-8 text-sm" style={{ color: 'var(--color-gray-300)' }}>
                  {SEMINAR_DATE} in {LOCATION}. Tickets start at $40, and seats are limited. Reserve your family&apos;s
                  spot before the December signing period.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={REGISTER_URL}
                    onClick={trackCheckout}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary uppercase text-xs tracking-wider"
                  >
                    Reserve Your Seat
                  </a>
                  <Link
                    href="/book-a-call"
                    className="btn btn-outline uppercase text-xs tracking-wider"
                    style={{ color: 'var(--color-white)', borderColor: 'var(--color-white)' }}
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STICKY CONVERSION BAR */}
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          background: 'var(--color-navy, #1A1D24)',
          borderTop: '2px solid var(--accent-gold)',
          padding: '0.7rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.25)',
        }}
      >
        <span
          className="hidden sm:inline"
          style={{ color: 'var(--color-white)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.02em' }}
        >
          Signing Day Recruiting Seminar · Sun Nov 8 · Baton Rouge · From $40
        </span>
        <a
          href={REGISTER_URL}
          onClick={trackCheckout}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary uppercase text-xs tracking-wider"
          style={{ whiteSpace: 'nowrap' }}
        >
          Reserve Your Seat
        </a>
      </div>
    </div>
  );
}
