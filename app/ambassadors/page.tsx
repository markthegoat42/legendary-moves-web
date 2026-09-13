'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MAROON = 'oklch(35% 0.14 22)';

// Where ambassador applications go. Same Formspree form as the booking page,
// labeled by subject so they're easy to filter.
const FORM_ENDPOINT = 'https://formspree.io/f/xkopobeq';

// NOTE FOR THE OWNER: rewards are deliberately tied to SEMINAR TICKETS, not to
// signing athletes to representation. Rewarding an athlete with representation for
// recruiting other athletes is the highest-risk version of this program. Get an
// attorney's sign-off before changing these.
const rewardTiers = [
  { count: '5 registrations', reward: 'Your own seminar ticket, free' },
  { count: '10 registrations', reward: 'Free VIP Recruiting Review (a $150 value)' },
  { count: '25 registrations', reward: 'Legendary Moves gear and a feature on our channels' },
];

const steps = [
  {
    n: '01',
    title: 'Apply',
    body: 'Fill out the form below. It takes about two minutes. We review every application by hand.',
  },
  {
    n: '02',
    title: 'Get your code',
    body: 'Approved ambassadors get a personal discount code and a share link. Families who use your code save money at checkout.',
  },
  {
    n: '03',
    title: 'Earn',
    body: 'Every registration that uses your code is tracked automatically. Hit a tier, claim your reward.',
  },
];

const rules = [
  'Say you are an ambassador when you promote. If you post about the seminar, disclose that you work with Legendary Moves.',
  'If you are a current athlete, confirm with your coach or athletic director that participating follows your school and state association rules before you start. Ask us and we will help you check.',
  'If you are under 18, a parent or guardian has to approve your participation with you.',
  'Your code is yours. Do not share it as a coupon site listing, and do not run paid ads using our name without written permission.',
  'Be honest. Never promise anyone a scholarship, an offer, or a result. We do not, and neither can you.',
  'We can pause or retire a code at any time, for any reason.',
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

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

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: '2px solid var(--color-charcoal)',
  padding: '0.85rem 1rem',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  background: 'var(--color-white)',
  color: 'var(--color-charcoal)',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'var(--color-gray-600)',
  marginBottom: '0.5rem',
};

export default function AmbassadorsPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Athlete',
    organization: '',
    city: '',
    socials: '',
    under18: 'No',
    guardianName: '',
    guardianEmail: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'Ambassador application' }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      {/* HERO */}
      <section
        className="border-b-2"
        style={{
          borderColor: 'var(--color-charcoal)',
          paddingTop: '9rem',
          paddingBottom: 'var(--spacing-lg)',
        }}
      >
        <div className="container-lg">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="divider-gold mb-6" style={{ marginLeft: 0, background: 'var(--accent-gold)' }} />
            <p
              className="text-xs uppercase tracking-wider font-mono mb-4"
              style={{ color: 'var(--color-accent-gold)' }}
            >
              LEGENDARY MOVES AMBASSADOR PROGRAM
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--color-charcoal)',
                marginBottom: '1.5rem',
              }}
            >
              Put your people <em style={{ fontStyle: 'italic', color: MAROON }}>on</em>.
            </h1>
            <p className="body-base" style={{ maxWidth: '44rem' }}>
              You already tell people where to go and who to trust. Now you get credit for it. Share your code, families
              save on their seminar registration, and you earn as they sign up.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#apply" className="btn btn-primary uppercase text-xs tracking-wider">
                Apply to Be an Ambassador
              </a>
              <Link href="/camps" className="btn btn-outline uppercase text-xs tracking-wider">
                See the Seminar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading>
              How it <em style={{ fontStyle: 'italic', color: MAROON }}>works</em>.
            </Heading>
            <div className="grid grid-cols-12 gap-10">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="col-span-12 md:col-span-4 border-t-2 pt-6"
                  style={{ borderColor: 'var(--color-charcoal)' }}
                >
                  <p className="font-mono mb-3" style={{ fontSize: '0.85rem', color: 'var(--color-accent-gold)' }}>
                    {s.n}
                  </p>
                  <h3 className="heading-sm uppercase mb-3" style={{ color: 'var(--color-charcoal)' }}>
                    {s.title}
                  </h3>
                  <p className="body-base" style={{ marginBottom: 0 }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU EARN */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading>
              What you <em style={{ fontStyle: 'italic', color: MAROON }}>earn</em>.
            </Heading>
            <div className="grid grid-cols-12 gap-6">
              {rewardTiers.map((t) => (
                <div
                  key={t.count}
                  className="col-span-12 md:col-span-4"
                  style={{ border: '2px solid var(--color-charcoal)', padding: '2rem 1.75rem', background: 'var(--color-white)' }}
                >
                  <p
                    className="font-mono uppercase mb-4"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--color-gray-600)' }}
                  >
                    {t.count}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-editorial)',
                      fontSize: '1.5rem',
                      lineHeight: 1.3,
                      color: MAROON,
                      margin: 0,
                    }}
                  >
                    {t.reward}
                  </p>
                </div>
              ))}
            </div>
            <p className="body-base mt-10" style={{ maxWidth: '44rem' }}>
              Your code also gives every family who uses it a discount on their registration. That is what makes people
              actually use it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE RULES */}
      <section
        className="border-b-2"
        style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading pre="READ THIS PART">
              The <em style={{ fontStyle: 'italic', color: MAROON }}>rules</em>.
            </Heading>
            <div className="max-w-3xl">
              {rules.map((r, i) => (
                <div
                  key={r}
                  className={`border-t-2 pt-6 pb-6 ${i === rules.length - 1 ? 'border-b-2' : ''}`}
                  style={{ borderColor: 'var(--color-charcoal)' }}
                >
                  <p className="body-base" style={{ marginBottom: 0 }}>
                    {r}
                  </p>
                </div>
              ))}
            </div>
            <p className="body-base mt-8" style={{ maxWidth: '44rem', color: 'var(--color-gray-600)' }}>
              Being an ambassador is a promotional role. It is not an agency agreement, and it does not guarantee any
              recruiting outcome. See our <Link href="/terms" style={{ color: MAROON, textDecoration: 'underline' }}>Terms of Use</Link>{' '}
              and <Link href="/disclaimer" style={{ color: MAROON, textDecoration: 'underline' }}>Disclaimer</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* APPLY */}
      <section
        id="apply"
        style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)', scrollMarginTop: '80px' }}
      >
        <div className="container-lg">
          <motion.div {...fadeUp}>
            <Heading>
              Apply to be an <em style={{ fontStyle: 'italic', color: MAROON }}>ambassador</em>.
            </Heading>

            {status === 'sent' ? (
              <div className="border-2 p-8" style={{ borderColor: MAROON, maxWidth: '44rem' }}>
                <p className="body-base" style={{ marginBottom: 0 }}>
                  Application received. We review every one by hand and will email you within a few business days. If
                  you are approved, that email will include your personal code and share link.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ maxWidth: '44rem' }}>
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-6">
                    <label style={labelStyle} htmlFor="name">Full name</label>
                    <input id="name" required style={inputStyle} value={form.name} onChange={(e) => update('name', e.target.value)} />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <label style={labelStyle} htmlFor="email">Email</label>
                    <input id="email" type="email" required style={inputStyle} value={form.email} onChange={(e) => update('email', e.target.value)} />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <label style={labelStyle} htmlFor="phone">Phone</label>
                    <input id="phone" required style={inputStyle} value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <label style={labelStyle} htmlFor="role">I am a</label>
                    <select id="role" style={inputStyle} value={form.role} onChange={(e) => update('role', e.target.value)}>
                      <option>Athlete</option>
                      <option>Parent / Guardian</option>
                      <option>Coach</option>
                      <option>Trainer</option>
                      <option>Organization (7v7, youth league, etc.)</option>
                    </select>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <label style={labelStyle} htmlFor="organization">School or organization</label>
                    <input id="organization" style={inputStyle} value={form.organization} onChange={(e) => update('organization', e.target.value)} />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <label style={labelStyle} htmlFor="city">City, state</label>
                    <input id="city" style={inputStyle} value={form.city} onChange={(e) => update('city', e.target.value)} />
                  </div>
                  <div className="col-span-12">
                    <label style={labelStyle} htmlFor="socials">Social handles (Instagram, X)</label>
                    <input id="socials" style={inputStyle} value={form.socials} onChange={(e) => update('socials', e.target.value)} />
                  </div>

                  <div className="col-span-12 md:col-span-4">
                    <label style={labelStyle} htmlFor="under18">Are you under 18?</label>
                    <select id="under18" style={inputStyle} value={form.under18} onChange={(e) => update('under18', e.target.value)}>
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>

                  {form.under18 === 'Yes' && (
                    <>
                      <div className="col-span-12 md:col-span-4">
                        <label style={labelStyle} htmlFor="guardianName">Parent / guardian name</label>
                        <input id="guardianName" required style={inputStyle} value={form.guardianName} onChange={(e) => update('guardianName', e.target.value)} />
                      </div>
                      <div className="col-span-12 md:col-span-4">
                        <label style={labelStyle} htmlFor="guardianEmail">Parent / guardian email</label>
                        <input id="guardianEmail" type="email" required style={inputStyle} value={form.guardianEmail} onChange={(e) => update('guardianEmail', e.target.value)} />
                      </div>
                    </>
                  )}
                </div>

                <label className="flex gap-3 mt-8" style={{ alignItems: 'flex-start', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    style={{ marginTop: '0.35rem', width: '1.1rem', height: '1.1rem', flexShrink: 0 }}
                  />
                  <span className="body-base" style={{ marginBottom: 0, fontSize: '1rem' }}>
                    I have read the rules above. If I am a current athlete, I will confirm with my coach or athletic
                    director that participating follows my school and state association rules. If I am under 18, my
                    parent or guardian approves.
                  </span>
                </label>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button type="submit" disabled={status === 'sending'} className="btn btn-primary uppercase text-xs tracking-wider">
                    {status === 'sending' ? 'Sending…' : 'Submit Application'}
                  </button>
                  {status === 'error' && (
                    <span className="text-sm" style={{ color: MAROON }}>
                      Something went wrong. Please try again, or email info@mylegendarymoves.com.
                    </span>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
