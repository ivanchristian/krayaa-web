export default function WhatsComing() {
  const categories = [
    {
      title: 'Authentic K-Beauty, From Seoul',
      description: "EditB, COSRX, Beauty of Joseon, Laneige, Anua, Medicube and the Korean brands you've been trying to import yourself.",
      tag: 'Phase 1 · Launching Q3 2026',
      icon: '✨',
      accent: 'bg-[var(--color-accent-yellow)]',
    },
    {
      title: 'K-Pop Merch, Authenticated',
      description: 'Photocards, lightsticks, comeback albums, signed exclusives sourced from labels and licensed retailers. Verified for fans who refuse counterfeits.',
      tag: 'Phase 1 · Limited Drop Pilot · Q3 2026',
      icon: '🎵',
      accent: 'bg-[var(--color-accent-primary)]',
    },
    {
      title: 'Korean Lifestyle, Coming',
      description: 'Korean street fashion, snacks, home decor, tech accessories and the rest of Korean culture, brought to India one curated category at a time.',
      tag: 'Phase 2 · 2027',
      icon: '🎨',
      accent: 'bg-[var(--color-accent-primary)]',
    },
  ];

  return (
    <section id="whats-coming" className="relative overflow-hidden bg-[var(--color-bg-card)] py-20 sm:py-24 md:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-140px] top-[8%] h-[260px] w-[260px] rounded-full bg-[var(--color-accent-primary)]/5 blur-3xl sm:left-[-180px] sm:h-[320px] sm:w-[320px]" />
        <div className="absolute right-[-140px] bottom-[6%] h-[220px] w-[220px] rounded-full bg-[var(--color-accent-yellow)]/5 blur-3xl sm:right-[-180px] sm:h-[260px] sm:w-[260px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="container-wide relative z-10">
        {/* HEADER */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-primary)] sm:text-[11px]">Categories</p>

          <h2 className="text-center text-[34px] font-black leading-[0.98] tracking-[-0.05em] text-white sm:text-[46px] md:text-[56px] lg:text-[66px]">What's Coming</h2>

          <p className="mt-5 max-w-3xl text-center text-[14px] leading-[1.9] text-[var(--color-text-secondary)] sm:text-[16px] md:mt-7 md:text-[18px]">
            Three categories. One trusted home for Korean culture in India. Built creator-first, live-first, authenticity-first.
          </p>
        </div>

        {/* CARDS */}
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:mt-14 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[rgba(14,6,7,0.88)] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 sm:p-7"
            >
              {/* Accent Rail */}
              <div className={`absolute left-0 top-0 h-full w-[4px] ${cat.accent}`} />

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,95,43,0.10),transparent_65%)]" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 flex h-full flex-col">
                {/* Icon */}
                <div className="mb-5 text-3xl sm:mb-6 sm:text-4xl">{cat.icon}</div>

                {/* Title */}
                <h3 className="text-[20px] font-black leading-[1.15] tracking-[-0.04em] text-white sm:text-[24px]">{cat.title}</h3>

                {/* Description */}
                <p className="mt-4 text-[13.5px] leading-[1.95] text-[var(--color-text-secondary)] sm:mt-5 sm:text-[14.5px]">{cat.description}</p>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Tag */}
                <div className="mt-6">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10.5px] font-medium tracking-wide text-[var(--color-text-secondary)] backdrop-blur-md sm:px-5 sm:text-[11px]">
                    {cat.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FUTURE CATEGORIES */}
        <div className="mx-auto mt-8 max-w-7xl rounded-[26px] border border-white/10 bg-white/[0.03] px-5 py-7 text-center backdrop-blur-xl sm:px-8 sm:py-9">
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.34em] text-[var(--color-text-secondary)] sm:text-xs">More categories planned</p>

          <p className="mt-4 text-[18px] font-bold leading-[1.5] tracking-[-0.04em] text-white sm:text-[22px] md:text-[30px] lg:text-[38px]">Fashion · Gaming · Food · Events</p>
        </div>
      </div>
    </section>
  );
}
