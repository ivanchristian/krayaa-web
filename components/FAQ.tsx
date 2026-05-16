'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'When does Krayaa launch?',
    a: 'We are building toward a Q3 2026 public launch. Waitlist members will get early access before the wider launch window.',
  },
  {
    q: 'Are the products authentic?',
    a: 'Yes. Krayaa is built around verified Korean brand and licensed distributor supply. No mystery listings, no gray-market dilution.',
  },
  {
    q: 'What will be available first?',
    a: 'We are starting with K-beauty and K-pop drops, then expanding into Korean lifestyle, fashion, food, and culture-led categories.',
  },
  {
    q: 'How do creators work with Krayaa?',
    a: 'Creators can apply for the private launch partner program. Selected partners get higher commissions, samples, exclusive drops, and launch campaign support.',
  },
  {
    q: 'Can Korean brands partner before launch?',
    a: 'Yes. We are speaking with Korean brands and distributors now for India entry, compliance planning, creator distribution, and launch campaigns.',
  },
  {
    q: 'Will you ship across India?',
    a: 'That is the plan. The launch operation is being designed around Indian last-mile delivery, customer support, and localized checkout expectations.',
  },
  {
    q: 'Is joining the waitlist free?',
    a: 'Yes. Joining is free, and it puts you first in line for beta access, drop announcements, creator launches, and launch updates.',
  },
];

export default function FAQSection() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[var(--color-bg-card)] py-10 text-white sm:py-12 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(244,183,58,0.12),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(242,95,43,0.14),transparent_30%)]" />
      <div className="faq-glow pointer-events-none absolute inset-0 opacity-[0.08]" />

      <div className="container-wide relative z-10">
        <div className="grid gap-7 lg:grid-cols-[0.68fr_1fr] lg:gap-12">
          <div className="faq-intro">
            <span className="inline-flex rounded-full border border-white/12 bg-white/[0.055] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.26em] text-white/62">
              FAQ
            </span>
            <h2 className="mt-3 max-w-[560px] text-[34px] font-black leading-[0.98] tracking-[-0.045em] sm:text-[44px] md:text-[54px] lg:text-[58px]">
              Questions before you join?
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-[1.65] text-white/64 sm:text-[17px]">
              Quick answers for buyers, creators, Korean brands, and anyone checking whether Krayaa is serious. Short version: yes, very.
            </p>

            <div className="mt-6 rounded-xl border border-[var(--color-accent-primary)]/25 bg-[var(--color-accent-primary)]/10 p-4">
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--color-accent-primary)]">Still unsure?</div>
              <p className="mt-2 text-[14px] leading-[1.5] text-white/70">
                Send us the question. We are pre-launch, so useful questions help shape the product.
              </p>
              <a
                href="mailto:hello@krayaa.com"
                className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full border border-white/14 px-4 text-sm font-bold text-white transition hover:border-[var(--color-accent-primary)]/60"
              >
                hello@krayaa.com
              </a>
            </div>
          </div>

          <div className="grid gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = expandedIdx === idx;

              return (
                <div
                  key={faq.q}
                  className="faq-item overflow-hidden rounded-xl border border-white/10 bg-[rgba(10,4,5,0.54)] shadow-[0_18px_48px_rgba(0,0,0,0.24)] backdrop-blur-md transition duration-300 hover:border-[var(--color-accent-yellow)]/28"
                  style={{ animationDelay: `${idx * 55}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedIdx(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="text-[15px] font-black leading-[1.25] tracking-[-0.02em] text-white sm:text-[17px]">{faq.q}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.055] text-[var(--color-accent-primary)] transition duration-300 ${
                        isOpen ? 'rotate-45 border-[var(--color-accent-primary)]/45 bg-[var(--color-accent-primary)]/14' : ''
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${idx}`}
                    className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-white/10 px-4 pb-4 pt-3 text-[14px] leading-[1.6] text-white/64 sm:px-5">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .faq-glow {
          background-image:
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0);
          background-size: 30px 30px;
          mask-image: linear-gradient(90deg, transparent, black 20%, black 80%, transparent);
          animation: faqGlow 24s linear infinite;
        }

        .faq-intro,
        .faq-item {
          animation: faqRise 600ms ease both;
        }

        @keyframes faqGlow {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-30px, -30px, 0); }
        }

        @keyframes faqRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-glow,
          .faq-intro,
          .faq-item {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
