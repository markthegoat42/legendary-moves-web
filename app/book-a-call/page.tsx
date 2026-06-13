'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent, useRef, useEffect } from 'react';
import TypewriterText from '@/components/TypewriterText';

export default function BookACallPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    topic: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [liveRegionMessage, setLiveRegionMessage] = useState('');

  const firstErrorRef = useRef<HTMLInputElement | HTMLSelectElement | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting || isSuccess) return;

    // Validate required fields with production-grade patterns
    const errors: Record<string, string> = {};

    // Name validation: required, 2-100 chars, reasonable pattern
    const nameValue = formData.name.trim();
    if (!nameValue) {
      errors.name = '[ERROR] NAME REQUIRED';
    } else if (nameValue.length < 2) {
      errors.name = '[ERROR] NAME TOO SHORT';
    } else if (nameValue.length > 100) {
      errors.name = '[ERROR] NAME TOO LONG (MAX 100 CHARS)';
    }

    // Email validation: required, realistic RFC-compliant pattern
    const emailValue = formData.email.trim();
    if (!emailValue) {
      errors.email = '[ERROR] EMAIL REQUIRED';
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailValue)) {
      errors.email = '[ERROR] VALID EMAIL REQUIRED';
    } else if (emailValue.length > 254) {
      errors.email = '[ERROR] EMAIL TOO LONG (MAX 254 CHARS)';
    }

    // Phone validation: required, flexible US/international patterns
    const phoneValue = formData.phone.trim();
    if (!phoneValue) {
      errors.phone = '[ERROR] PHONE REQUIRED';
    } else {
      // Strip non-digit characters for validation
      const digitsOnly = phoneValue.replace(/\D/g, '');
      if (digitsOnly.length < 10) {
        errors.phone = '[ERROR] PHONE TOO SHORT (MIN 10 DIGITS)';
      } else if (digitsOnly.length > 15) {
        errors.phone = '[ERROR] PHONE TOO LONG (MAX 15 DIGITS)';
      }
    }

    // Grade validation
    if (!formData.grade) errors.grade = '[ERROR] GRADE REQUIRED';

    // Topic validation
    if (!formData.topic) errors.topic = '[ERROR] TOPIC REQUIRED';

    // Notes validation: optional but limit length
    if (formData.notes.length > 1000) {
      errors.notes = '[ERROR] NOTES TOO LONG (MAX 1000 CHARS)';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);

      // Announce errors to screen readers
      const errorCount = Object.keys(errors).length;
      setLiveRegionMessage(`Form has ${errorCount} error${errorCount > 1 ? 's' : ''}. Please fix the highlighted fields.`);

      // Focus management: move focus to first error
      const firstErrorField = ['name', 'email', 'phone', 'grade', 'topic', 'notes'].find(field => errors[field]);
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField) as HTMLInputElement | HTMLSelectElement | null;
        if (element) {
          element.focus();
          firstErrorRef.current = element;
        }
      }

      return;
    }

    setIsSubmitting(true);
    setError('');
    setFieldErrors({});

    // Network timeout handling: AbortController with 10s timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      // TODO: Replace with real Formspree endpoint after signup
      const response = await fetch('https://formspree.io/f/PLACEHOLDER_REPLACE_ME', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        setIsSuccess(true);
        setLiveRegionMessage('Success! Your call request has been submitted. We will reach out within one business day.');
      } else {
        const errorMsg = 'Something went wrong. Please try again or email info@legendarymoves.com directly.';
        setError(errorMsg);
        setLiveRegionMessage(errorMsg);
      }
    } catch (err) {
      clearTimeout(timeoutId);
      let errorMsg = 'Something went wrong. Please try again or email info@legendarymoves.com directly.';
      if ((err as Error).name === 'AbortError') {
        errorMsg = 'Request timed out. Please check your connection and try again, or email info@legendarymoves.com directly.';
      }
      setError(errorMsg);
      setLiveRegionMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: '',
      });
    }
  };

  return (
    <div className="bg-white">
      {/* ARIA Live Region for Screen Readers */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {liveRegionMessage}
      </div>

      {/* HERO */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '100vh', paddingBottom: 'clamp(4rem, 8vh, 8rem)' }}>
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/floridahandsup.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Dark overlay for text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%)'
          }}
        />

        <div className="container-lg w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            {/* Gold rule */}
            <div className="divider-gold mb-6" style={{ marginLeft: 0 }} />

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(4.5rem, 10vw, 8.75rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--color-white)',
              marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)'
            }}>
              Fifteen <em style={{ fontStyle: 'italic', color: 'var(--color-accent-gold)' }}>minutes</em>.
            </h1>

            {/* Tagline */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: 'clamp(2rem, 4vh, 3rem)'
            }}>
              NO PITCH. NO PRESSURE. JUST AN HONEST CONVERSATION.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute"
          style={{ bottom: '2rem', right: '2rem', fontSize: '1.5rem', color: 'rgba(255, 255, 255, 0.7)', opacity: 0.7 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.div>
      </section>

      {/* SECTION 2 - What This Is */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: '6rem', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
            </div>

            <div className="max-w-4xl">
              <div className="border-l-2 pl-6 space-y-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                <p className="body-base drop-cap">
                  A fifteen-minute consultation call. You tell us where your athlete is, what you're trying to figure out, and what you've tried so far. We tell you whether we can help — and how — or whether you'd be better served somewhere else.
                </p>
                <p className="body-base">
                  That's it. No high-pressure close. No forty-seven-page proposal afterward. If we're a fit, we'll talk about next steps. If we're not, we'll point you in the right direction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="relative" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="w-full"
          style={{
            height: '1px',
            background: 'var(--color-accent-gold)',
            opacity: 0.4,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4" style={{ background: 'var(--color-white)' }}>
          <span style={{ color: 'var(--color-accent-gold)', opacity: 0.6, fontSize: '1rem' }}>✦</span>
        </div>
      </div>

      {/* SECTION 3 - Request a Call (Form) */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
              <div className="border-t-2 pt-6 max-w-3xl" style={{ borderColor: 'var(--color-accent-gold)' }}>
                <p className="body-base text-sm" style={{ color: 'var(--color-gray-600)' }}>
                  Fill in the basics below. We reach out within one business day to schedule.
                </p>
              </div>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="max-w-3xl">
                <div className="space-y-8">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      placeholder="Your name (parent or athlete)"
                      className={`w-full border px-4 py-3 text-base focus:outline-2 focus:outline-offset-2 focus:outline-black ${fieldErrors.name ? 'border-red-600' : 'border-charcoal'}`}
                      style={{
                        borderRadius: 0,
                        fontFamily: 'var(--font-body)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="text-xs uppercase tracking-wider font-mono mt-2" style={{ color: '#dc2626' }} role="alert">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={254}
                      placeholder="you@example.com"
                      className={`w-full border px-4 py-3 text-base focus:outline-2 focus:outline-offset-2 focus:outline-black ${fieldErrors.email ? 'border-red-600' : 'border-charcoal'}`}
                      style={{
                        borderRadius: 0,
                        fontFamily: 'var(--font-body)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="text-xs uppercase tracking-wider font-mono mt-2" style={{ color: '#dc2626' }} role="alert">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                      PHONE
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      maxLength={20}
                      placeholder="(555) 555-5555"
                      className={`w-full border px-4 py-3 text-base focus:outline-2 focus:outline-offset-2 focus:outline-black ${fieldErrors.phone ? 'border-red-600' : 'border-charcoal'}`}
                      style={{
                        borderRadius: 0,
                        fontFamily: 'var(--font-body)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                      aria-invalid={!!fieldErrors.phone}
                      aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                    />
                    {fieldErrors.phone && (
                      <p id="phone-error" className="text-xs uppercase tracking-wider font-mono mt-2" style={{ color: '#dc2626' }} role="alert">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* Grade */}
                  <div>
                    <label htmlFor="grade" className="block text-xs uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                      GRADE / YEAR
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                      className={`w-full border px-4 py-3 text-base focus:outline-2 focus:outline-offset-2 focus:outline-black ${fieldErrors.grade ? 'border-red-600' : 'border-charcoal'}`}
                      style={{
                        borderRadius: 0,
                        fontFamily: 'var(--font-body)',
                        backgroundColor: 'white',
                      }}
                      aria-invalid={!!fieldErrors.grade}
                      aria-describedby={fieldErrors.grade ? 'grade-error' : undefined}
                    >
                      <option value="">Select…</option>
                      <option value="8th grade">8th grade</option>
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="Already in college">Already in college</option>
                      <option value="Other">Other</option>
                    </select>
                    {fieldErrors.grade && (
                      <p id="grade-error" className="text-xs uppercase tracking-wider font-mono mt-2" style={{ color: '#dc2626' }} role="alert">
                        {fieldErrors.grade}
                      </p>
                    )}
                  </div>

                  {/* Topic */}
                  <div>
                    <label htmlFor="topic" className="block text-xs uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                      TOPIC
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                      className={`w-full border px-4 py-3 text-base focus:outline-2 focus:outline-offset-2 focus:outline-black ${fieldErrors.topic ? 'border-red-600' : 'border-charcoal'}`}
                      style={{
                        borderRadius: 0,
                        fontFamily: 'var(--font-body)',
                        backgroundColor: 'white',
                      }}
                      aria-invalid={!!fieldErrors.topic}
                      aria-describedby={fieldErrors.topic ? 'topic-error' : undefined}
                    >
                      <option value="">Select…</option>
                      <option value="NIL deals and contracts">NIL deals and contracts</option>
                      <option value="College recruiting">College recruiting</option>
                      <option value="Both">Both</option>
                      <option value="Parent education">Parent education</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                    {fieldErrors.topic && (
                      <p id="topic-error" className="text-xs uppercase tracking-wider font-mono mt-2" style={{ color: '#dc2626' }} role="alert">
                        {fieldErrors.topic}
                      </p>
                    )}
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-xs uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                      NOTES <span style={{ color: 'var(--color-gray-600)', fontWeight: 400 }}>(OPTIONAL)</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      maxLength={1000}
                      placeholder="Anything else we should know?"
                      className={`w-full border px-4 py-3 text-base resize-none focus:outline-2 focus:outline-offset-2 focus:outline-black ${fieldErrors.notes ? 'border-red-600' : 'border-charcoal'}`}
                      style={{
                        borderRadius: 0,
                        fontFamily: 'var(--font-body)',
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                      }}
                      aria-invalid={!!fieldErrors.notes}
                      aria-describedby={fieldErrors.notes ? 'notes-error' : undefined}
                    />
                    {fieldErrors.notes && (
                      <p id="notes-error" className="text-xs uppercase tracking-wider font-mono mt-2" style={{ color: '#dc2626' }} role="alert">
                        {fieldErrors.notes}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting || isSuccess}
                      className="btn btn-primary uppercase text-xs tracking-wider"
                      style={{
                        opacity: isSubmitting || isSuccess ? 0.6 : 1,
                        cursor: isSubmitting || isSuccess ? 'not-allowed' : 'pointer',
                      }}
                      aria-busy={isSubmitting}
                      aria-disabled={isSubmitting || isSuccess}
                    >
                      {isSubmitting ? 'SUBMITTING…' : isSuccess ? 'SUBMITTED' : 'REQUEST CALL'}
                    </button>
                    {isSubmitting && (
                      <p className="text-xs uppercase tracking-wider font-mono mt-2" style={{ color: 'var(--color-gray-600)' }}>
                        Please wait... Submitting your request.
                      </p>
                    )}
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="text-sm" style={{ color: 'var(--color-crimson)' }}>
                      {error}
                    </div>
                  )}
                </div>
              </form>
            ) : (
              /* Success State */
              <div className="max-w-3xl">
                <div className="border-l-2 pl-6" style={{ borderColor: 'var(--color-charcoal)' }}>
                  <p className="text-xs uppercase tracking-wider mb-6" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                    REQUEST RECEIVED
                  </p>
                  <h2 className="heading-md uppercase mb-6" style={{ fontWeight: 700 }}>
                    THANK YOU.
                  </h2>
                  <p className="body-base">
                    We'll reach out within one business day to schedule your call. If you don't hear back within 24 hours (excluding weekends), email info@legendarymoves.com directly.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - What Happens Next */}
      <section className="border-b-2" style={{ borderColor: 'var(--color-charcoal)', paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-12">
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    01
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    You submit the form above.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    02
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    We reach out within one business day with a few times that work.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    03
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    You confirm a time. We talk for fifteen minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 border-l-2 pl-4" style={{ borderColor: 'oklch(35% 0.14 22)' }}>
                  <div className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontWeight: 400, color: 'oklch(35% 0.14 22)' }}>
                    04
                  </div>
                </div>
                <div className="flex-1">
                  <p className="body-base text-sm">
                    You decide what comes next. No pressure, no follow-up sequence.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
