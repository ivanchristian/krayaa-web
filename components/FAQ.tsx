'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

export default function FAQSection(): ReactNode {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: 'When does Krayaa launch?',
      a: "Q3 2026. Waitlist members get early access 48 hours before the public launch. We're also running a limited beta with creators in Q2.",
    },
    {
      q: 'Are the products authentic?',
      a: 'Yes. We source directly from Korean brands or official distributors. No gray market, no fakes. Every product is verified before it ships.',
    },
    {
      q: 'How do you keep prices competitive?',
      a: 'Direct partnerships with Korean brands cut out middlemen. No gray-market markups. Plus, our commission model is lean—we make money from volume, not margins.',
    },
    {
      q: "What's the shipping time?",
      a: 'Most items ship from our warehouse in Delhi within 48 hours. Delivery is typically 3-5 days across India. We also offer express options.',
    },
    {
      q: 'Can I return or exchange?',
      a: "Yes. 30-day returns on unopened items. We want you to feel safe buying. If it's damaged or wrong, we fix it.",
    },
    {
      q: 'Is there a membership fee?',
      a: "No membership fee. Waitlist access is free. When we launch, you'll get 48-hour early access to drops as a bonus.",
    },
    {
      q: 'How do I become a creator partner?',
      a: 'Go to the "For Creators" section and fill out the form. We look for 10K+ followers, authentic engagement, and K-culture interest. We\'ll review and get back within 48 hours.',
    },
    {
      q: 'What payment methods do you accept?',
      a: "We accept UPI, credit/debit cards, and digital wallets (Google Pay, Apple Pay, Paytm). We're also integrating Buy Now Pay Later options for Q3 launch.",
    },
  ];

  return (
    <section id="faq" style={{ backgroundColor: 'var(--color-bg-card)' }} className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-4 text-[var(--color-text-primary)]">Frequently Asked</h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-12">Got a question? We probably have an answer.</p>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-[var(--color-border)] rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(10, 4, 5, 0.6)' }}>
              <button onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)} className="w-full px-6 py-4 flex justify-between items-center hover:bg-[var(--color-bg-primary)] transition-colors">
                <h3 className="text-left font-semibold text-[var(--color-text-primary)]">{faq.q}</h3>
                <span className={`text-[var(--color-accent-primary)] transform transition-transform ${expandedIdx === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {expandedIdx === idx && (
                <div className="px-6 py-4 border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
                  <p className="text-[var(--color-text-secondary)]">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--color-text-secondary)] mb-4">Can't find your answer?</p>
          <a href="mailto:hello@krayaa.com" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
