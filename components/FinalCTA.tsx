'use client';

import Image from 'next/image';
import { useState } from 'react';

const audienceOptions = ['Buyer', 'Creator', 'Brand'];

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [audience, setAudience] = useState('Buyer');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="join" className="relative overflow-hidden bg-[linear-gradient(180deg,#090304_0%,#080203_72%,#070203_100%)] py-10 text-white sm:py-12 lg:py-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(242,95,43,0.26),transparent_34%),radial-gradient(circle_at_22%_72%,rgba(244,183,58,0.14),transparent_30%),linear-gradient(180deg,rgba(26,15,17,0.52),rgba(7,2,3,0.98))]" />
      <div className="final-rings pointer-events-none absolute inset-0 opacity-[0.16]" />

      <div className="container-wide relative z-10">
        <div className="grid items-center gap-7 lg:grid-cols-[0.78fr_1fr] lg:gap-12">
          <div className="final-visual relative mx-auto hidden w-full max-w-[430px] xl:max-w-[470px] lg:block">
            <div className="relative aspect-[0.95] overflow-hidden rounded-[28px] border border-white/12 bg-[rgba(255,255,255,0.045)] shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(242,95,43,0.2),transparent_46%,rgba(244,183,58,0.16))]" />
              <div className="absolute left-[8%] top-[10%] h-[190px] w-[140px] -rotate-12 xl:h-[220px] xl:w-[160px]">
                <Image src="/assets/product_1.png" alt="Korean skincare product" fill sizes="220px" className="object-contain drop-shadow-[0_26px_50px_rgba(0,0,0,0.62)]" />
              </div>
              <div className="absolute right-[2%] top-[6%] h-[210px] w-[210px] rotate-12 xl:h-[240px] xl:w-[240px]">
                <Image src="/assets/product_4.png" alt="Korean beauty product" fill sizes="280px" className="object-contain drop-shadow-[0_26px_50px_rgba(0,0,0,0.62)]" />
              </div>
              <div className="absolute bottom-[12%] left-[24%] h-[190px] w-[140px] rotate-6 xl:h-[220px] xl:w-[160px]">
                <Image src="/assets/product_2.png" alt="Korean serum product" fill sizes="220px" className="object-contain drop-shadow-[0_26px_50px_rgba(0,0,0,0.62)]" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/12 bg-black/44 p-4 backdrop-blur-xl">
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--color-accent-yellow)]">Q3 2026 launch</div>
                <p className="mt-2 text-[24px] font-black leading-[0.95] tracking-[-0.04em] xl:text-[28px]">Korea drops first to the list.</p>
              </div>
            </div>
          </div>

          <div className="final-content mx-auto max-w-[780px] text-center lg:mx-0 lg:text-left">
            <span className="inline-flex rounded-full border border-[var(--color-accent-primary)]/45 bg-[var(--color-accent-primary)]/12 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.26em] text-[var(--color-accent-primary)]">
              Join Krayaa
            </span>
            <h2 className="mt-4 text-[42px] font-black leading-[0.9] tracking-[-0.055em] sm:text-[58px] md:text-[72px] lg:text-[64px] xl:text-[76px]">
              Be first when Korea goes live in India.
            </h2>
            <p className="mx-auto mt-4 max-w-[650px] text-[15px] leading-[1.6] text-white/68 sm:text-[18px] lg:mx-0">
              Get early access to authenticated K-beauty, limited K-pop drops, creator-led launches, and founder notes before the public release.
            </p>

            <div className="mx-auto mt-5 grid max-w-[620px] grid-cols-3 gap-2 rounded-full border border-white/10 bg-white/[0.055] p-1.5 backdrop-blur-md lg:mx-0">
              {audienceOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setAudience(option)}
                  className={`min-h-10 rounded-full text-xs font-black uppercase tracking-[0.12em] transition sm:text-[13px] ${
                    audience === option ? 'bg-[var(--color-accent-primary)] text-white shadow-[0_12px_30px_rgba(242,95,43,0.25)]' : 'text-white/52 hover:text-white'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="final-success mx-auto mt-6 max-w-[620px] rounded-xl border border-[var(--color-success)]/30 bg-[var(--color-success)]/10 p-5 text-center lg:mx-0">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-success)] text-[#051208]">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                    <path d="M5.5 12.5L10 17L18.5 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
                  </svg>
                </div>
                <h3 className="text-[24px] font-black leading-none tracking-[-0.04em]">You are on the list.</h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-white/68">
                  We will send the right early-access updates for {audience.toLowerCase()}s before launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto mt-5 grid max-w-[620px] gap-3 rounded-2xl border border-white/12 bg-white/[0.06] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:grid-cols-[1fr_auto] lg:mx-0">
                <label htmlFor="final-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="final-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                  className="min-h-12 rounded-full border border-white/10 bg-black/28 px-4 text-sm text-white outline-none transition placeholder:text-white/34 focus:border-[var(--color-accent-primary)] focus:bg-black/40"
                />
                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-accent-primary)] px-6 text-sm font-black text-white shadow-[0_18px_42px_rgba(242,95,43,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7040]"
                >
                  Join Waitlist
                </button>
              </form>
            )}

            <div className="mx-auto mt-5 flex max-w-[620px] flex-wrap items-center justify-center gap-3 text-[12px] font-semibold text-white/48 lg:mx-0 lg:justify-start">
              <span>Free to join</span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-accent-primary)]" />
              <span>No spam</span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-accent-primary)]" />
              <span>Early drops first</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .final-rings {
          background:
            repeating-radial-gradient(circle at 50% 40%, transparent 0 78px, rgba(255,255,255,0.09) 80px, transparent 82px);
          animation: finalPulse 8s ease-in-out infinite;
        }

        .final-visual,
        .final-content,
        .final-success {
          animation: finalRise 680ms ease both;
        }

        .final-visual {
          animation-delay: 100ms;
        }

        @keyframes finalPulse {
          0%, 100% { transform: scale(1); opacity: 0.12; }
          50% { transform: scale(1.04); opacity: 0.22; }
        }

        @keyframes finalRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-height: 780px) and (min-width: 1024px) {
          #join h2 {
            font-size: 68px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .final-rings,
          .final-visual,
          .final-content,
          .final-success {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
