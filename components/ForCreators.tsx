'use client';

import Image from 'next/image';
import { useState } from 'react';

const benefits = [
  'Significantly above standard affiliate rates',
  'Free product samples for every drop you host',
  'First access to exclusive Korean brand launches and limited K-pop drops',
  "Co-marketing in Krayaa's launch campaigns + creator wall",
  'Direct line to founder + ops team. No layers.',
];

const creatorImages = [
  {
    src: 'https://images.pexels.com/photos/6593782/pexels-photo-6593782.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Creator filming a beauty tutorial',
  },
  {
    src: 'https://images.pexels.com/photos/6875113/pexels-photo-6875113.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'K-pop albums and music records',
  },
];

type CreatorForm = {
  name: string;
  handle: string;
  niche: string;
  followers: string;
  about: string;
};

const initialForm: CreatorForm = {
  name: '',
  handle: '',
  niche: '',
  followers: '',
  about: '',
};

function BenefitIcon({ index }: { index: number }) {
  const paths = [
    'M12 3v18M7 8.5a4 4 0 0 1 5-3.8 4.1 4.1 0 0 1 3.6 2M17 15.5a4 4 0 0 1-5 3.8 4.1 4.1 0 0 1-3.6-2M6 12h12',
    'M6.5 9.5h11v10h-11zM8 9.5V7.8A4 4 0 0 1 12 4a4 4 0 0 1 4 3.8v1.7M12 4v15.5M6.5 14.2h11',
    'M12 3l2.1 5.5 5.9.4-4.6 3.8 1.5 5.8-4.9-3.2-4.9 3.2 1.5-5.8L4 8.9l5.9-.4L12 3z',
    'M5 8.5h9.5a4.5 4.5 0 1 1 0 9H5v-9zM5 8.5V6.8A2.8 2.8 0 0 1 7.8 4h1.5A2.8 2.8 0 0 1 12 6.8v1.7M8.5 12.5h6',
    'M7 12a5 5 0 0 1 5-5h3a5 5 0 0 1 0 10h-1.5M17 12a5 5 0 0 1-5 5H9a5 5 0 0 1 0-10h1.5',
  ];

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d={paths[index]} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
    </svg>
  );
}

export default function ForCreators() {
  const [formData, setFormData] = useState<CreatorForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: name === 'about' ? value.slice(0, 200) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section
      id="creators"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#14090b_0%,#1a0f11_52%,#120708_100%)] py-10 text-white sm:py-12 lg:py-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(242,95,43,0.2),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(244,183,58,0.14),transparent_30%)]" />
      <div className="creator-scan pointer-events-none absolute inset-0 opacity-[0.08]" />

      <div className="container-wide relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_0.78fr] lg:gap-10 xl:gap-14">
          <div className="creator-copy">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-[var(--color-accent-yellow)]/35 bg-[var(--color-accent-yellow)]/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.26em] text-[var(--color-accent-yellow)]">
                  For Creators
                </span>

                <h2 className="mt-3 max-w-[780px] text-[34px] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-[44px] md:text-[54px] lg:text-[58px]">
                  K-Beauty Creator? K-Pop Fan Account? Let&apos;s Talk.
                </h2>
              </div>

              <div className="hidden shrink-0 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white/58 backdrop-blur-md lg:block">
                50 launch spots
              </div>
            </div>

            <p className="mt-4 max-w-[760px] text-[15px] leading-[1.65] text-white/68 sm:text-[17px] lg:text-[16px]">
              We&apos;re hand-picking 50 creators for our launch creator partner program. Higher commissions, real authenticated supply, exclusive K-pop drops to host. If you have an audience that loves Korea, you should be on this list.
            </p>

            <div className="mt-6 grid gap-4 xl:grid-cols-[0.78fr_1fr] xl:items-stretch">
              <div className="relative min-h-[220px] overflow-hidden rounded-xl border border-white/12 bg-black/35 shadow-[0_24px_70px_rgba(0,0,0,0.38)] sm:min-h-[280px] xl:min-h-0">
                <Image
                  src={creatorImages[0].src}
                  alt={creatorImages[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover opacity-72 saturate-[0.82]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,9,11,0.1),rgba(20,9,11,0.88))]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-2 inline-flex rounded-full bg-[var(--color-accent-primary)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                    Private partner program
                  </div>
                  <p className="max-w-[300px] text-[24px] font-black leading-[1] tracking-[-0.04em] text-white sm:text-[30px]">
                    Host drops your audience actually wants.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="creator-benefit group grid grid-cols-[auto_1fr] gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-3.5 shadow-[0_18px_42px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent-yellow)]/35 hover:bg-white/[0.075]"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent-primary)] text-white shadow-[0_12px_24px_rgba(242,95,43,0.24)] transition duration-300 group-hover:rotate-3">
                      <BenefitIcon index={index} />
                    </span>
                    <span className="self-center text-[13.5px] font-semibold leading-[1.35] text-white/78 sm:text-[14px]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="creator-form relative">
            <div className="absolute -inset-3 rounded-[28px] bg-[conic-gradient(from_210deg,rgba(242,95,43,0.32),rgba(244,183,58,0.18),transparent,rgba(242,95,43,0.26))] opacity-70 blur-xl" />
            <div className="relative overflow-hidden rounded-xl border border-white/14 bg-[rgba(10,4,5,0.78)] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.52)] backdrop-blur-xl sm:p-5 lg:p-6">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--color-accent-yellow),var(--color-accent-primary),transparent)]" />

              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--color-accent-primary)]">Creator application</div>
                  <h3 className="mt-1 text-[26px] font-black leading-none tracking-[-0.04em] text-white sm:text-[30px]">Apply early</h3>
                </div>
                <div className="rounded-full border border-[var(--color-success)]/30 bg-[var(--color-success)]/12 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--color-success)]">
                  Reviewed by humans
                </div>
              </div>

              {submitted ? (
                <div className="creator-success flex min-h-[430px] flex-col items-center justify-center rounded-lg border border-[var(--color-success)]/25 bg-[var(--color-success)]/10 p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-success)] text-[#051208]">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
                      <path d="M5.5 12.5L10 17L18.5 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
                    </svg>
                  </div>
                  <h4 className="text-[28px] font-black leading-none tracking-[-0.04em] text-white">Got it.</h4>
                  <p className="mt-3 max-w-sm text-[15px] leading-[1.55] text-white/72">
                    We review every application personally. You&apos;ll hear from us within 5 days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-white/14 px-5 py-2.5 text-sm font-bold text-white/82 transition hover:border-[var(--color-accent-primary)]/50 hover:text-white"
                  >
                    Submit another creator
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-3.5">
                  <div>
                    <label htmlFor="creator-name" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                      Name *
                    </label>
                    <input
                      id="creator-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="h-11 w-full rounded-lg border border-white/12 bg-white/[0.06] px-3.5 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[var(--color-accent-primary)] focus:bg-white/[0.09]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="creator-handle" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                      Instagram / YouTube handle *
                    </label>
                    <input
                      id="creator-handle"
                      type="text"
                      name="handle"
                      value={formData.handle}
                      onChange={handleChange}
                      required
                      className="h-11 w-full rounded-lg border border-white/12 bg-white/[0.06] px-3.5 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[var(--color-accent-primary)] focus:bg-white/[0.09]"
                      placeholder="@yourhandle"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="creator-niche" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                        Niche *
                      </label>
                      <select
                        id="creator-niche"
                        name="niche"
                        value={formData.niche}
                        onChange={handleChange}
                        required
                        className="h-11 w-full rounded-lg border border-white/12 bg-[#120708] px-3.5 text-sm text-white outline-none transition focus:border-[var(--color-accent-primary)]"
                      >
                        <option value="">Select niche</option>
                        <option value="K-beauty">K-beauty</option>
                        <option value="K-pop">K-pop</option>
                        <option value="Korean lifestyle">Korean lifestyle</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="creator-followers" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                        Follower range *
                      </label>
                      <select
                        id="creator-followers"
                        name="followers"
                        value={formData.followers}
                        onChange={handleChange}
                        required
                        className="h-11 w-full rounded-lg border border-white/12 bg-[#120708] px-3.5 text-sm text-white outline-none transition focus:border-[var(--color-accent-primary)]"
                      >
                        <option value="">Select range</option>
                        <option value="1K-10K">1K-10K</option>
                        <option value="10K-50K">10K-50K</option>
                        <option value="50K-200K">50K-200K</option>
                        <option value="200K+">200K+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <label htmlFor="creator-about" className="block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                        Tell us about yourself
                      </label>
                      <span className="text-[11px] font-semibold text-white/38">{formData.about.length}/200</span>
                    </div>
                    <textarea
                      id="creator-about"
                      name="about"
                      value={formData.about}
                      onChange={handleChange}
                      maxLength={200}
                      rows={4}
                      className="min-h-[100px] w-full resize-none rounded-lg border border-white/12 bg-white/[0.06] px-3.5 py-3 text-sm leading-[1.45] text-white outline-none transition placeholder:text-white/28 focus:border-[var(--color-accent-primary)] focus:bg-white/[0.09]"
                      placeholder="What do you create, and what does your audience love?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--color-accent-primary)] px-5 text-sm font-black text-white shadow-[0_18px_48px_rgba(242,95,43,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7040]"
                  >
                    Apply as Creator Partner
                  </button>

                  <p className="text-center text-[11px] leading-[1.45] text-white/42">
                    No spam. Just launch partner updates and application status.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .creator-scan {
          background-image:
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(circle at center, black, transparent 74%);
          animation: creatorScan 26s linear infinite;
        }

        .creator-copy,
        .creator-form {
          animation: creatorRise 640ms ease both;
        }

        .creator-form {
          animation-delay: 120ms;
        }

        .creator-benefit {
          animation: creatorRise 560ms ease both;
        }

        .creator-success {
          animation: creatorPop 420ms ease both;
        }

        @keyframes creatorScan {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-72px, -72px, 0); }
        }

        @keyframes creatorRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes creatorPop {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-height: 780px) and (min-width: 1024px) {
          #creators {
            padding-block: 1.25rem;
          }

          #creators h2 {
            font-size: 46px;
          }

          #creators .creator-benefit {
            padding: 0.65rem;
          }

          #creators textarea {
            min-height: 76px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .creator-scan,
          .creator-copy,
          .creator-form,
          .creator-benefit,
          .creator-success {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
