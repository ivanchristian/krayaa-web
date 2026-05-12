'use client';

const categories = [
  {
    title: 'Authentic K-Beauty, From Seoul',
    description:
      "EditB, COSRX, Beauty of Joseon, Laneige, Anua, Medicube — the Korean brands you've been trying to import yourself.",
    tag: 'Phase 1 · Q3 2026',
    icon: '✨',
    topBar: 'bg-[var(--color-accent-yellow)]',
    glow: 'rgba(244,183,58,0.13)',
  },
  {
    title: 'K-Pop Merch, Authenticated',
    description:
      'Photocards, lightsticks, comeback albums, signed exclusives — sourced from labels and licensed retailers. No fakes, ever.',
    tag: 'Phase 1 · Q3 2026',
    icon: '🎵',
    topBar: 'bg-[var(--color-accent-primary)]',
    glow: 'rgba(242,95,43,0.13)',
  },
  {
    title: 'Korean Lifestyle, Coming',
    description:
      'Street fashion, snacks, home décor, tech accessories — the full range of Korean culture, curated category by category.',
    tag: 'Phase 2 · 2027',
    icon: '🎨',
    topBar: 'bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-yellow)]',
    glow: 'rgba(242,95,43,0.10)',
  },
];

export default function WhatsComing() {
  return (
    <section
      id="whats-coming"
      className="relative flex min-h-svh flex-col overflow-hidden bg-[var(--color-bg-card)]"
    >
      {/* ── Animated background orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-40 top-[30%] h-72 w-72 rounded-full opacity-[0.18] blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--color-accent-primary), transparent 70%)',
            animation: 'orbFloat 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -right-32 bottom-[20%] h-60 w-60 rounded-full opacity-[0.14] blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--color-accent-yellow), transparent 70%)',
            animation: 'orbFloat 18s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute left-1/2 top-[70%] h-48 w-80 -translate-x-1/2 rounded-full opacity-[0.09] blur-3xl"
          style={{
            background: 'radial-gradient(ellipse, var(--color-accent-primary), transparent 65%)',
            animation: 'orbFloat 22s ease-in-out infinite 5s',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* Nav-height spacer — ensures content sits below fixed nav */}
      <div className="h-16 shrink-0 md:h-20" aria-hidden="true" />

      {/* Content fills remaining height and centers vertically */}
      <div className="container-wide relative z-10 flex flex-1 flex-col justify-center py-10 md:py-14">

        {/* ── Header ── */}
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center md:mb-12">
          <span className="mb-4 inline-block rounded-full border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-primary)] sm:text-[11px]">
            Categories
          </span>
          <h2 className="text-[36px] font-black leading-[1] tracking-[-0.045em] text-white sm:text-[46px] md:text-[54px] lg:text-[60px]">
            What&apos;s Coming
          </h2>
          <p className="mt-5 text-[14px] leading-[1.8] text-[var(--color-text-secondary)] sm:text-[15px] md:text-[16px] md:leading-[1.85]">
            Three categories. One trusted home for Korean culture in India —
            creator-first, live-first, authenticity-first.
          </p>
        </div>

        {/* ── Cards: 1-col mobile → 3-col md+ ── */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-5 lg:gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col overflow-hidden rounded-2xl
                         border border-white/[0.09] bg-[rgba(10,5,6,0.82)]
                         p-6 shadow-[0_8px_40px_rgba(0,0,0,0.32)]
                         transition-all duration-500
                         hover:-translate-y-2 hover:border-white/[0.18]
                         hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                         sm:p-7 md:p-5 lg:p-7"
            >
              {/* Top accent bar */}
              <div className={`absolute left-0 top-0 h-[3px] w-full ${cat.topBar}`} />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(ellipse at top, ${cat.glow}, transparent 65%)` }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 text-3xl sm:text-4xl md:text-3xl lg:text-4xl">{cat.icon}</div>

                <h3 className="text-[17px] font-black leading-[1.2] tracking-[-0.03em] text-white sm:text-[20px] md:text-[16px] lg:text-[19px] xl:text-[21px]">
                  {cat.title}
                </h3>

                <p className="mt-3 flex-1 text-[12.5px] leading-[1.9] text-[var(--color-text-secondary)] sm:text-[13.5px] md:text-[12px] lg:text-[13.5px] xl:text-[14.5px]">
                  {cat.description}
                </p>

                <div className="mt-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-medium tracking-wide text-[var(--color-text-secondary)] backdrop-blur-md sm:text-[10.5px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-primary)] opacity-80" />
                    {cat.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Future categories banner ── */}
        <div className="mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-6 text-center backdrop-blur-xl sm:mt-6 md:px-8 md:py-7">
          <p className="mb-2 text-[9.5px] font-semibold uppercase tracking-[0.32em] text-[var(--color-text-secondary)] sm:text-[10.5px]">
            More categories planned
          </p>
          <p className="text-[20px] font-bold tracking-[-0.02em] text-white sm:text-[24px] md:text-[28px] lg:text-[34px]">
            Fashion · Gaming · Food · Events
          </p>
        </div>

      </div>

      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-28px) scale(1.06); }
        }
      `}</style>
    </section>
  );
}
