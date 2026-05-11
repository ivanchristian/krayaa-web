'use client';

import { useState } from 'react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Waitlist signup:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="join" style={{ backgroundColor: 'var(--color-bg-card)' }} className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-6 text-[var(--color-text-primary)]">Be First.</h2>
        <p className="text-lg text-[var(--color-text-secondary)] mb-12">Join 5,000+ people waiting to discover Korea's best culture. Get early access, exclusive drops, and insider updates straight to your inbox.</p>

        {submitted ? (
          <div className="bg-[var(--color-bg-primary)] border border-[var(--color-success)] rounded-lg p-8 max-w-md mx-auto">
            <div className="text-4xl text-[var(--color-success)] mb-4">✓</div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Welcome to Krayaa!</h3>
            <p className="text-[var(--color-text-secondary)]">Check your email for a confirmation link. You'll get first dibs when we launch in Q3 2026.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-accent-primary)]"
            />
            <button type="submit" className="btn btn-primary px-8 py-3">
              Join Now
            </button>
          </form>
        )}

        <p className="text-xs text-[var(--color-text-secondary)] mt-6">No spam. Unsubscribe anytime. We respect your inbox.</p>
      </div>
    </section>
  );
}
