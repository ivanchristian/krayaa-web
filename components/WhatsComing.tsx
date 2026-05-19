'use client';

import { useCallback, useLayoutEffect, useRef, useState } from 'react';

const categories = [
  {
    kicker: 'K-Beauty',
    icon: '✦',
    title: 'Authentic K-Beauty, From Seoul',
    description:
      "EditB, COSRX, Beauty of Joseon, Laneige, Anua, Medicube and the Korean brands you've been trying to import yourself.",
    tag: 'Phase 1 · Launching Q3 2026',
    accent: 'var(--color-accent-yellow)',
    wash: 'rgba(244,183,58,0.16)',
  },
  {
    kicker: 'K-Pop Merch',
    icon: '♪',
    title: 'K-Pop Merch, Authenticated',
    description:
      'Photocards, lightsticks, comeback albums, signed exclusives sourced from labels and licensed retailers. Verified for fans who refuse counterfeits.',
    tag: 'Phase 1 · Limited Drop Pilot · Q3 2026',
    accent: 'var(--color-accent-primary)',
    wash: 'rgba(242,95,43,0.17)',
  },
  {
    kicker: 'Future',
    icon: '+',
    title: 'Korean Lifestyle, Coming',
    description:
      'Korean street fashion, snacks, home decor, tech accessories the rest of Korean culture, brought to India one curated category at a time.',
    tag: 'Phase 2 · 2027',
    accent: 'var(--color-accent-yellow)',
    wash: 'rgba(244,183,58,0.12)',
  },
];

const futureCategories = [
  { label: 'Fashion', icon: '👗' },
  { label: 'Gaming', icon: '🎮' },
  { label: 'Food', icon: '🍜' },
  { label: 'Events', icon: '🎟️' },
];

const mobileLoopCopies = 101;
const mobileLoopMiddleCopy = Math.floor(mobileLoopCopies / 2);
const loopedCategories = Array.from({ length: mobileLoopCopies }, () => categories).flat();

export default function WhatsComing() {
  const [activeMobileCard, setActiveMobileCard] = useState(categories.length * mobileLoopMiddleCopy + 1);
  const cardRowRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const shouldAnimateScrollRef = useRef(false);

  const centerMobileCard = useCallback((index: number, smooth = true) => {
    const row = cardRowRef.current;
    const card = cardRefs.current[index];

    if (!row || !card) {
      return;
    }

    const left = card.offsetLeft - (row.clientWidth - card.offsetWidth) / 2;

    if (smooth) {
      row.classList.add('whats-coming-card-row-smooth');
    } else {
      row.classList.remove('whats-coming-card-row-smooth');
    }

    row.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
  }, []);

  useLayoutEffect(() => {
    centerMobileCard(activeMobileCard, shouldAnimateScrollRef.current);
    shouldAnimateScrollRef.current = false;
  }, [activeMobileCard, centerMobileCard]);

  const moveMobileCard = (direction: 'previous' | 'next') => {
    const nextIndex = direction === 'previous' ? activeMobileCard - 1 : activeMobileCard + 1;

    shouldAnimateScrollRef.current = true;
    setActiveMobileCard(nextIndex);
    centerMobileCard(nextIndex);
  };

  return (
    <section
      id="whats-coming"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[var(--color-bg-card)]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,4,5,0.84),rgba(26,15,17,0.94)_34%,rgba(10,4,5,0.9))]" />
        <div className="whats-coming-grid absolute inset-0 opacity-[0.08]" />
        <div className="whats-coming-sweep absolute left-[-18%] top-[-28%] h-[82%] w-[54%] rotate-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(242,95,43,0.16),transparent)] blur-2xl" />
        <div className="whats-coming-sweep whats-coming-sweep-delay absolute bottom-[-36%] right-[-22%] h-[76%] w-[58%] rotate-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(244,183,58,0.12),transparent)] blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="h-8 shrink-0 md:h-10" aria-hidden="true" />

      <div className="container-wide relative z-10 flex flex-1 flex-col justify-center pb-8 pt-3 sm:pb-10 sm:pt-4 md:pb-10 md:pt-5 lg:pb-12 lg:pt-6">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-5 md:-translate-y-5 md:gap-7 lg:-translate-y-6">
          <div className="grid items-end gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div className="reveal-rise">
              <span className="inline-flex rounded-full border border-[var(--color-accent-primary)]/35 bg-[var(--color-accent-primary)]/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.28em] text-[var(--color-accent-primary)]" style={{ padding: '0.35rem', marginBottom: '0.5rem' }}>
                Categories
              </span>
              <h2 className="mt-4 max-w-[680px] text-[34px] font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-[44px] md:text-[52px] lg:text-[56px]">
                What&apos;s Coming
              </h2>
            </div>

            <p className="reveal-rise reveal-delay-1 max-w-[640px] text-[15px] leading-[1.65] text-[var(--color-text-secondary)] sm:text-[16px] md:text-[17px] lg:justify-self-end">
              Three categories. One trusted home for Korean culture in India. Built creator-first,
              live-first, authenticity-first.
            </p>
          </div>

          <div className="relative -mx-6 sm:-mx-8 md:mx-0">
            <button
              type="button"
              aria-label="Previous category"
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-xl font-black text-white shadow-[0_12px_34px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 sm:left-5 md:hidden"
              onClick={() => moveMobileCard('previous')}
            >
              ‹
            </button>

            <button
              type="button"
              aria-label="Next category"
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-xl font-black text-white shadow-[0_12px_34px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 sm:right-5 md:hidden"
              onClick={() => moveMobileCard('next')}
            >
              ›
            </button>

            <div ref={cardRowRef} className="whats-coming-card-row grid auto-cols-[70%] grid-flow-col gap-4 overflow-x-auto px-[15%] pb-3 snap-x snap-mandatory md:auto-cols-auto md:grid-flow-row md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 md:snap-none lg:gap-5">
            {loopedCategories.map((cat, index) => {
              const originalIndex = index % categories.length;
              const isDesktopCard =
                index >= categories.length * mobileLoopMiddleCopy &&
                index < categories.length * (mobileLoopMiddleCopy + 1);

              return (
              <article
                key={`${cat.title}-${index}`}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className={[
                  'reveal-grow group relative min-h-[270px] snap-center overflow-hidden rounded-lg border border-white/[0.09] bg-[rgba(10,4,5,0.76)] py-6 pl-7 pr-7 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-white/20 sm:py-7 sm:pl-8 sm:pr-8 md:min-h-[300px] md:pl-7 md:pr-7 lg:min-h-[314px] lg:py-8 lg:pl-8 lg:pr-8',
                  activeMobileCard === index ? 'border-white/16' : 'md:border-white/[0.09]',
                  isDesktopCard ? '' : 'md:hidden',
                  originalIndex === 0 ? 'reveal-delay-1' : originalIndex === 1 ? 'reveal-delay-2' : 'reveal-delay-3',
                ].join(' ')}
                style={{
                  boxShadow: `0 24px 70px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.04)`,
                }}
              >
                <div
                  className="absolute inset-y-0 left-0 w-[5px]"
                  style={{ background: `linear-gradient(180deg, ${cat.accent}, rgba(255,255,255,0.08))` }}
                />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle at 22% 0%, ${cat.wash}, transparent 46%)` }}
                />
                <div className="whats-coming-card-shine absolute inset-y-0 left-[-48%] w-[42%] rotate-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute right-5 top-5 text-[68px] font-black leading-none text-white/[0.025] transition duration-500 group-hover:scale-110 group-hover:text-white/[0.05] sm:text-[78px]">
                  {cat.icon}
                </div>

                <div
                  className="whats-coming-card-icon absolute left-0 top-0 z-20 flex items-center justify-center rounded-br-lg border-b border-r border-white/10 bg-white/[0.045] text-[26px] font-black leading-none shadow-[0_16px_34px_rgba(0,0,0,0.24)] sm:text-[30px]"
                  style={{ color: cat.accent, height: '3.5rem', width: '3.5rem' }}
                >
                  {cat.icon}
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex flex-1 flex-col" style={{ marginLeft: '0.75rem', paddingTop: '3.75rem' }}>
                    <p
                      className="mb-2 text-[12px] font-black uppercase tracking-[0.22em]"
                      style={{ color: cat.accent, marginTop: '0.25rem' }}
                    >
                      {cat.kicker}
                    </p>
                    <br />
                    <h3 className="max-w-[320px] text-[20px] font-black leading-[1.08] tracking-[-0.032em] text-white sm:text-[22px] md:text-[20px] lg:text-[21px] xl:text-[22px]">
                      {cat.title}
                    </h3>
                    <br />
                    <p className="mt-6 flex-1 text-[13.5px] leading-[1.72] text-[var(--color-text-secondary)] sm:text-[14.5px] md:text-[13.5px] lg:text-[14px]">
                      {cat.description}
                    </p>

                    <div className="mt-2">
                      <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-[11px] font-semibold leading-none text-white/75 sm:text-[11.5px]" style={{ paddingLeft: '0.35rem', paddingTop: "0.35rem", paddingBottom: "0.35rem", paddingRight: "0.5rem", marginBottom: "0.65rem" }}>
                        <span
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: cat.accent, boxShadow: `0 0 18px ${cat.accent}`, padding: '0.3rem' }}
                        />
                        <span className="truncate">{cat.tag}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
              );
            })}
            </div>
          </div>

          <div
            className="reveal-grow reveal-delay-4 relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.035] px-5 text-center backdrop-blur-xl sm:px-8"
            style={{ paddingTop: '1.75rem', paddingBottom: '1.75rem' }}
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--color-accent-primary)] via-[var(--color-accent-yellow)] to-[var(--color-accent-primary)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_top,rgba(244,183,58,0.08),transparent_44%)]" />
            <div className="relative z-10 mx-auto flex w-full flex-col items-center justify-center gap-7">
              <p className="text-center text-[12px] font-black uppercase tracking-[0.32em] text-[var(--color-text-secondary)] sm:text-[13px]">
                More categories planned
              </p>
              <div className="whats-coming-future-row mx-auto grid w-full max-w-[980px] grid-cols-2 items-center justify-center gap-3 px-1 sm:gap-4 md:flex md:flex-nowrap md:overflow-visible">
                {futureCategories.map((item, index) => (
                  <span
                    key={item.label}
                    className={[
                      'reveal-pop group inline-flex min-h-14 w-full min-w-0 shrink-0 items-center justify-center gap-3 rounded-full border border-white/10 bg-[rgba(10,4,5,0.55)] px-4 py-3 text-[14px] font-bold leading-none text-white/90 shadow-[0_12px_34px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.075] sm:min-h-16 sm:px-5 sm:text-[15px] md:w-auto md:min-w-[180px] lg:min-w-[196px]',
                      index === 0 ? 'reveal-delay-2' : index === 1 ? 'reveal-delay-3' : index === 2 ? 'reveal-delay-4' : 'reveal-delay-5',
                    ].join(' ')}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-[17px] shadow-[0_0_18px_rgba(244,183,58,0.18)] sm:h-9 sm:w-9 sm:text-[18px]">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .whats-coming-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, transparent, black 18%, black 82%, transparent);
          animation: whatsComingGrid 18s linear infinite;
        }

        .whats-coming-card-row {
          scrollbar-width: none;
        }

        .whats-coming-card-row-smooth {
          scroll-behavior: smooth;
        }

        .whats-coming-card-row::-webkit-scrollbar {
          display: none;
        }

        .whats-coming-future-row {
          scrollbar-width: none;
        }

        .whats-coming-future-row::-webkit-scrollbar {
          display: none;
        }

        .whats-coming-card-icon {
          animation: whatsComingIconFloat 4.8s ease-in-out infinite;
        }

        .whats-coming-card-shine {
          animation: whatsComingCardShine 3.8s ease-in-out infinite;
        }

        .whats-coming-sweep {
          animation: whatsComingSweep 11s ease-in-out infinite alternate;
        }

        .whats-coming-sweep-delay {
          animation-delay: -5s;
        }

        @keyframes whatsComingGrid {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-42px, -42px, 0); }
        }

        @keyframes whatsComingSweep {
          from { transform: translate3d(-6%, -3%, 0) rotate(-18deg); }
          to { transform: translate3d(8%, 7%, 0) rotate(-18deg); }
        }

        @keyframes whatsComingIconFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -5px, 0); }
        }

        @keyframes whatsComingCardShine {
          0%, 45% { transform: translateX(0) rotate(12deg); }
          100% { transform: translateX(360%) rotate(12deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .whats-coming-grid,
          .whats-coming-sweep,
          .whats-coming-card-icon,
          .whats-coming-card-shine {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
