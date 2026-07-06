'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MAROON = 'oklch(35% 0.14 22)';

// Registration — live Ticket Tailor event page for the $50 symposium.
// Payments run through the connected Stripe account.
const REGISTER_HOUSTON = 'https://buytickets.at/legendarymoves/2266774';

// Event details — edit in one place.
// TODO: confirm the exact seminar START TIME with O-D and update SEMINAR_TIME below.
const SEMINAR_DATE = 'Saturday, July 18, 2026';
const SEMINAR_TIME = 'Start time TBD — confirm with O-D';
const VENUE = 'Houston Christian University';

// Renders a register button. If the href is an external Stripe link it opens in a
// new tab; the internal placeholder navigates normally.
function RegisterButton({ href, label }: { href: string; label: string }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="btn btn-primary uppercase text-xs tracking-wider inline-block"
    >
      {label}
    </a>
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

/* Click-to-play video: poster image until tapped, then loads/plays. preload="none" keeps the page light. */
function SpeakerVideo({ src, poster, name }: { src?: string; poster: string; name: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '340px',
        aspectRatio: '9 / 16',
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
      '14 Years Inside College Football Recruiting',
    ],
    video: '',
    poster: '/images/chris-scott-commanders.jpg',
    bio: [
      'Coach Chris Scott Jr. spent 14 years in the rooms where scholarships actually get decided — evaluating film, advising families, and watching talented players get passed over for one reason: no one taught them how recruiting really works.',
      'He built Legendary Moves to put that knowledge in one room. In this symposium he breaks down exactly what college coaches look for, how film and social media make or break offers, how NIL really works, and the paths beyond Division I that most families never hear about.',
    ],
  },
  {
    name: 'Kenneth Scott',
    titles: [
      'Former O-D All-American',
      'Adjunct Professor, Rice University',
      'Former Professional Athlete',
      'Author',
      'Creator, Social Health Brand',
      'Founder of REACH',
    ],
    video: '/videos/kenneth-scott.mp4',
    poster: '/images/speaker-kenneth-scott.jpg',
    bio: [
      'Kenneth Scott helps students and student-athletes understand who they are, communicate their value, build meaningful relationships, and create opportunities with intention. Through workshops, programs, and the REACH platform, he equips athletes and families with practical strategies to navigate recruiting, evaluate opportunities, and prepare for success beyond the game.',
      'In this session, Kenneth shares lessons from his own journey as an O-D All-American, Division I athlete, and professional football player, helping athletes and parents understand the recruiting process, what coaches are evaluating, how relationships influence opportunities, and how to make informed decisions throughout their journey.',
    ],
  },
  {
    name: 'Coach Wade Mouton',
    titles: [
      'Founder, Student Athlete Grind Therapy (SAGT)',
      'Athlete Mentorship & Development',
    ],
    video: '/videos/wade-mouton.mp4',
    poster: '/images/speaker-wade-mouton.jpg',
    bio: [
      'Coach Wade Mouton founded Student Athlete Grind Therapy (SAGT) to bridge the gap between talent and character. Built on the GRIND principles of Grit, Resilience, Integrity, Navigation, and Determination, SAGT develops the whole athlete through leadership training, academic accountability, character development, athletic mentorship, and life-skills education.',
      'His work meets families where they are. Through online mentorship, exposure opportunities, recruiting and NIL education, and personal development programs, SAGT prepares athletes ages 7 to 18 to compete at a high level while becoming confident leaders and responsible young adults.',
      'His message is direct. Athletic ability creates opportunities, but discipline, leadership, and work ethic are what turn them into lasting success on the field, in the classroom, and beyond the game.',
    ],
  },
  {
    name: 'Desmond Johnson',
    titles: [
      'Founder, Team 28',
      'Mentor & Motivational Speaker',
    ],
    video: '',
    poster: '/images/speaker-desmond-johnson.webp',
    bio: [
      'Desmond Johnson is a mentor, motivational speaker, and youth development advocate, and the founder of Team 28. He has committed himself to equipping student-athletes and young leaders with the tools to succeed on and off the field through discipline, accountability, and personal growth.',
      'Drawing on real-life experience and a passion for serving others, he speaks on leadership, resilience, character development, overcoming adversity, building a winning mindset, and the life skills that matter beyond sports. His ability to connect with athletes, parents, coaches, and community leaders has made him a respected voice in athlete development.',
      'Through Team 28, he creates opportunities and life-changing experiences that challenge the next generation to lead with purpose, integrity, and excellence.',
    ],
  },
  {
    name: 'Will Baggett',
    titles: [
      'Top 25 National Speaker',
      'Former Chief of Staff, College Football Playoff',
      'Personal Branding & Leadership',
    ],
    video: '',
    poster: '/images/speaker-william-baggett.webp',
    bio: [
      'Nationally recognized as a Top 25 Speaker, Will Baggett brings an unmatched level of energy and engagement to every audience he addresses. From 2017 to 2020, he served as Operations Coordinator and Chief of Staff for the College Football Playoff, where the White House Department of Communications recognized him for his operational excellence and communication skills.',
      'Over a decade of service to the sports industry, Will helped produce events including the Super Bowl, the Peach Bowl, the Final Four, and a host of college football bowl games.',
      'Widely considered a leading authority on personal branding, body language, and soft-skills leadership, he uses his personality and quick wit to leave teams more inspired and connected than ever before.',
    ],
  },
];

const roadmap = [
  { grade: '7th – 8th Grade', items: ['Fundamentals first', 'Academics on track', 'Skill development', 'Building good habits'] },
  { grade: '9th – 10th Grade', items: ['Exposure begins', 'First highlight film', 'Camp participation', 'A clean social presence'] },
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

const whyAttend = [
  'Elite coaching',
  'Position development',
  'Live competition',
  'Recruiting education',
  'NIL education',
  'Parent symposium',
  'Exposure opportunities',
  'O-D All-American Bowl selection',
];

const sampleBio = [
  'Player Name | QB',
  'Class of 2028',
  '6’2″ · 190 lbs',
  'Houston, TX',
  'GPA: 3.8',
  'Hudl link',
  'Email address',
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
              More than <em style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>exposure</em>.
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
              RECRUITING &amp; NIL SYMPOSIUM · HOSTED BY COACH CHRIS SCOTT JR.
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
              <strong>$50 per athlete</strong>&nbsp; · &nbsp;Saturday, July 18, 2026&nbsp; · &nbsp;Houston Christian University
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
              From the team behind <strong>Tank Dell, Rashee Rice &amp; Courtland Sutton</strong> — in one room with
              your family for one day.
            </p>
            <a
              href="#register"
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
              Reserve Your Seat · $50 ›
            </a>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.7)',
                marginTop: '0.9rem',
              }}
            >
              Seats are limited · Full refund if it&apos;s not worth your time.
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

      {/* DATES & LOCATIONS + per-city registration */}
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
                  HOUSTON · ONE DAY ONLY
                </p>
                <h3 className="heading-sm uppercase mb-2" style={{ color: 'var(--color-charcoal)' }}>
                  {SEMINAR_DATE}
                </h3>
                <p className="text-sm uppercase tracking-wide font-mono mb-6" style={{ color: 'var(--color-gray-600)' }}>
                  {VENUE} · {SEMINAR_TIME}
                </p>
                <p className="body-base" style={{ marginBottom: 0, maxWidth: '38rem' }}>
                  The Recruiting &amp; NIL Symposium is a live, in-person session hosted by Coach Chris Scott Jr., held
                  during the Offense-Defense Camp. Open to camp athletes and to families who register online.
                </p>
                <p className="text-xs uppercase tracking-wider font-mono mb-4 mt-6" style={{ color: MAROON }}>
                  Symposium · $50 per athlete
                </p>
                <RegisterButton href={REGISTER_HOUSTON} label="Reserve Your Seat · $50" />
                <p className="text-xs mt-4" style={{ color: 'var(--color-gray-600)' }}>
                  Seats are limited · Full refund if it&apos;s not worth your time.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link href="/book-a-call" className="btn btn-outline uppercase text-xs tracking-wider">
                Have Questions? Book a Call
              </Link>
              <span className="text-sm" style={{ color: 'var(--color-gray-600)' }}>
                Seats are limited.
              </span>
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
              Coaching that puts athletes <em style={{ fontStyle: 'italic', color: MAROON }}>on the map</em>.
            </Heading>
            <div className="max-w-4xl space-y-6 mb-10">
              <p className="body-base">
                The people behind this symposium have helped develop and place athletes at every level — from Power Five
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

      <GoldDivider />

      {/* GUEST SPEAKERS */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="GUEST SPEAKERS">
              Taught by people who have <em style={{ fontStyle: 'italic', color: MAROON }}>lived it</em>.
            </Heading>
            <div className="space-y-24">
              {speakers.map((s, i) => (
                <div
                  key={s.name}
                  className="grid grid-cols-12 gap-8 items-start"
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid oklch(from var(--color-accent-gold) l c h / 0.25)',
                    paddingTop: i === 0 ? 0 : 'var(--space-xl)',
                  }}
                >
                  <div className="col-span-12 md:col-span-5 lg:col-span-4 flex justify-center md:justify-start">
                    <SpeakerVideo src={s.video} poster={s.poster} name={s.name} />
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
              Education for the entire <em style={{ fontStyle: 'italic', color: MAROON }}>journey</em>.
            </Heading>
            <div className="max-w-4xl space-y-6">
              <p className="body-base drop-cap">
                Every year, thousands of talented players miss scholarship opportunities for one reason: no one taught
                their family how recruiting actually works. The film was fine. The athlete was good enough. The knowledge
                was missing.
              </p>
              <p className="body-base">
                At Offense-Defense Football Camps, development happens on the field and off it. Inside the Recruiting and
                Player Development Symposium, athletes and parents sit down with former college coaches, recruiting
                coordinators, personnel staff, NIL professionals, and people who have spent their careers inside the game.
                You leave knowing what to do next, and when to do it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* PLAYER DEVELOPMENT */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="PLAYER DEVELOPMENT">
              What it takes to play at the <em style={{ fontStyle: 'italic', color: MAROON }}>next level</em>.
            </Heading>
            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base drop-cap">
                Talent gets an athlete looked at. Habits, character, and preparation are what keep college coaches
                interested. This session is about closing the gap between the two.
              </p>
            </div>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-wider font-mono mb-6" style={{ color: 'var(--color-gray-600)' }}>
                WHAT ATHLETES LEARN
              </p>
              <MonoRows
                items={[
                  'How college coaches evaluate prospects',
                  'Building a year-round training plan',
                  'Leadership and character development',
                  'Confidence and mental toughness',
                  'Position-specific expectations at the college level',
                  'What separates elite athletes from everyone else',
                ]}
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-mono mb-6" style={{ color: 'var(--color-gray-600)' }}>
                TOPICS COVERED
              </p>
              <TopicTags
                tags={[
                  'Football IQ',
                  'Leadership',
                  'Accountability',
                  'Time Management',
                  'Academic Success',
                  'Strength & Conditioning',
                  'Nutrition & Recovery',
                ]}
              />
            </div>
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
            <Heading pre="UNDERSTANDING NCAA RECRUITING">
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
                WHAT OUR EXPERTS COVER
              </p>
              <MonoRows
                items={[
                  'When recruiting actually starts',
                  'How coaches evaluate prospects',
                  'Official versus unofficial visits',
                  'Camp and showcase strategy',
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
            <Heading pre="UNDERSTANDING THE DIVISIONS">
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

      {/* NIL */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="NIL EDUCATION">
              Name, image, <em style={{ fontStyle: 'italic', color: MAROON }}>likeness</em>.
            </Heading>
            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base drop-cap">
                A lot of athletes chase NIL before they have done the work that makes NIL possible. We flip the order. NIL
                opportunities are earned through performance, branding, and reputation, and we show families how to build
                all three the right way.
              </p>
            </div>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-wider font-mono mb-6" style={{ color: 'var(--color-gray-600)' }}>
                WHAT FAMILIES LEARN
              </p>
              <MonoRows
                items={[
                  'What NIL really is, in plain terms',
                  'Building a personal brand',
                  'Monetizing social media responsibly',
                  'Building real partnerships',
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
            <Heading pre="HIGHLIGHT TAPE WORKSHOP">
              A film that gets <em style={{ fontStyle: 'italic', color: MAROON }}>watched</em>.
            </Heading>
            <div className="max-w-4xl space-y-6 mb-12">
              <p className="body-base drop-cap">
                A coach decides in the first thirty seconds whether to keep watching. Most highlight films are too long,
                poorly organized, and bury the best plays. Our recruiting staff will sit with athletes and fix that.
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
            <Heading pre="PARENT RECRUITING SESSION">
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
                'NIL, explained for parents',
                'A transfer portal overview',
                'Academic eligibility requirements',
                'Financial planning for college',
              ]}
            />
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* WHY ATTEND */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="WHY ATTEND O-D">
              Everything in <em style={{ fontStyle: 'italic', color: MAROON }}>one weekend</em>.
            </Heading>
            <div className="grid grid-cols-12 gap-x-8 gap-y-0 max-w-4xl">
              {whyAttend.map((reason) => (
                <div
                  key={reason}
                  className="col-span-12 md:col-span-6 border-t-2 pt-4 pb-4"
                  style={{ borderColor: 'var(--color-charcoal)' }}
                >
                  <p className="text-sm uppercase tracking-wide font-mono">{reason}</p>
                </div>
              ))}
            </div>
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
                  The symposium is $50 per athlete, Saturday, July 18 in Houston, and seats are limited. Full refund if
                  it&apos;s not worth your time — reserve your seat.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#register" className="btn btn-primary uppercase text-xs tracking-wider">
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

      {/* STICKY CONVERSION BAR — always-visible register CTA (goes straight to checkout) */}
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
          Recruiting &amp; NIL Symposium · Sat July 18 · Houston · $50
        </span>
        <a
          href={REGISTER_HOUSTON}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary uppercase text-xs tracking-wider"
          style={{ whiteSpace: 'nowrap' }}
        >
          Reserve Your Seat · $50
        </a>
      </div>
    </div>
  );
}
