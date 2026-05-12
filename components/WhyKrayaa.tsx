'use client';

const pillars = [
  {
    number: '01',
    title: 'Authentic',
    description:
      'Direct sourcing from Korean brands — COSRX from Seoul, not the gray-market. Every product verified at the source.',
    icon: '🔒',
    bar: 'from-[var(--color-accent-primary)] to-[var(--color-accent-yellow)]',
  },
  {
    number: '02',
    title: 'Curated',
    description:
      'We pick the best — trending K-beauty, verified artists, trusted creators. You get signal, not noise.',
    icon: '✦',
    bar: 'from-[var(--color-accent-yellow)] to-[var(--color-accent-primary)]',
  },
  {
    number: '03',
    title: 'Live',
    description:
      'Live shopping with creators. Q&A with brand founders. Real-time scarcity. Meaningful FOMO, every drop.',
    icon: '⚡',
    bar: 'from-[var(--color-accent-primary)] via-[var(--color-accent-yellow)] to-[var(--color-accent-primary)]',
  },
];

export default function WhyKrayaa() {
  return (
    <section
      id="why-krayaa"
      className="relative flex min-h-svh flex-col overflow-hidden bg-[var(--color-bg-primary)]"
    >
      {/* ── Animated background ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full opacity-[0.08] blur-3xl"
          style={{
            background: 'radial-gradient(ellipse, var(--color-accent-primary), transparent 65%)',
            animation: 'wkFloat1 16s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -left-20 bottom-[15%] h-72 w-[450px] rounded-full opacity-[0.06] blur-3xl"
          style={{
            background: 'radial-gradient(ellipse, var(--color-accent-yellow), transparent 65%)',
            animation: 'wkFloat2 20s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute right-0 top-[40%] h-64 w-[380px] rounded-full opacity-[0.06] blur-3xl"
          style={{
            background: 'radial-gradient(ellipse, var(--color-accent-primary), transparent 65%)',
            animation: 'wkFloat1 24s ease-in-out infinite 6s',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Nav-height spacer */}
      <div className="h-16 shrink-0 md:h-20" aria-hidden="true" />

      {/* Content fills remaining height and centers vertically */}
      <div className="container-wide relative z-10 flex flex-1 flex-col justify-center py-10 md:py-14">

        {/* ── Header ── */}
        <div className="mx-auto mb-10 flex max-w-xl flex-col items-center text-center md:mb-12">
          <span className="mb-4 inline-block rounded-full border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-primary)] sm:text-[11px]">
            Our Difference
          </span>
          <h2 className="text-[36px] font-black leading-[1] tracking-[-0.045em] text-white sm:text-[46px] md:text-[54px] lg:text-[60px]">
            Why Krayaa?
          </h2>
          <p className="mt-5 text-[14px] leading-[1.8] text-[var(--color-text-secondary)] sm:text-[15px] md:text-[16px]">
            Three things set us apart in a crowded marketplace.
          </p>
        </div>

        {/* ── Pillar Cards: 1-col mobile → 3-col md+ ── */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-5 lg:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col overflow-hidden rounded-2xl
                         border border-white/[0.09] bg-[rgba(10,5,6,0.82)]
                         p-6 shadow-[0_8px_40px_rgba(0,0,0,0.32)]
                         transition-all duration-500
                         hover:-translate-y-2 hover:border-white/[0.18]
                         hover:shadow-[0_20px_60px_rgba(242,95,43,0.12)]
                         sm:p-7 md:p-5 lg:p-7"
            >
              {/* Top gradient bar */}
              <div className={`absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r ${pillar.bar}`} />

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,95,43,0.09),transparent_60%)]" />
              </div>

              {/* Watermark number */}
              <div className="pointer-events-none absolute right-3 top-3 select-none text-[72px] font-black leading-none tracking-tighter text-white opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08] sm:right-5 sm:top-5 sm:text-[88px] md:text-[72px] lg:text-[88px]">
                {pillar.number}
              </div>

              <div className="relative z-10 flex h-full flex-col">
                {/* Badge + icon row */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-md border border-[var(--color-accent-primary)]/25 bg-[var(--color-accent-primary)]/10 px-2 py-0.5 text-[10.5px] font-black tracking-[0.1em] text-[var(--color-accent-primary)]">
                    {pillar.number}
                  </span>
                  <span className="text-lg sm:text-xl md:text-lg lg:text-xl">{pillar.icon}</span>
                </div>

                <h3 className="text-[24px] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[28px] md:text-[22px] lg:text-[27px] xl:text-[30px]">
                  {pillar.title}
                </h3>

                <p className="mt-3 flex-1 text-[12.5px] leading-[1.9] text-[var(--color-text-secondary)] sm:text-[14px] md:text-[12px] lg:text-[13.5px] xl:text-[14.5px]">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-8 flex justify-center md:mt-10">
          <a
            href="#join"
            className="btn btn-primary px-8 py-4 text-[14px] font-semibold
                       shadow-[0_12px_44px_rgba(242,95,43,0.28)]
                       transition-all duration-300
                       hover:scale-[1.04] hover:shadow-[0_18px_56px_rgba(242,95,43,0.38)]
                       sm:px-10 sm:text-[15px] md:px-12 md:text-base"
          >
            Join to Access Exclusive Benefits
          </a>
        </div>

      </div>

      <style>{`
        @keyframes wkFloat1 {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-22px); }
        }
        @keyframes wkFloat2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </section>
  );
}
