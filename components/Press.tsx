const credibility = [
  { name: 'KRAFTON', note: 'Korea-India ecosystem signal' },
  { name: 'Medicube', note: 'K-beauty demand proof' },
  { name: 'Creator Network', note: 'Private launch pipeline' },
  { name: 'Seoul Supply', note: 'Brand-first sourcing model' },
];

const stats = [
  { value: '5,000+', label: 'buyer waitlist target' },
  { value: '50+', label: 'creator partners' },
  { value: '20+', label: 'brand conversations' },
  { value: '<50%', label: 'bounce-rate target' },
];

const signals = [
  {
    title: 'Founder-market fit',
    body: 'Built by a founder who lived in Seoul and understands the trust gap Indian K-culture buyers face.',
  },
  {
    title: 'Clear launch narrative',
    body: 'Pre-launch now, creator beta next, Q3 2026 public launch with authenticated Korean supply.',
  },
  {
    title: 'Press-ready positioning',
    body: 'A focused India entry story for Korean brands, creators, investors, and culture journalists.',
  },
];

export default function Press() {
  return (
    <section id="press" className="relative overflow-hidden bg-[var(--color-bg-primary)] py-10 text-white sm:py-12 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(242,95,43,0.18),transparent_30%),radial-gradient(circle_at_82%_70%,rgba(34,197,94,0.1),transparent_28%)]" />
      <div className="press-lines pointer-events-none absolute inset-0 opacity-[0.08]" />

      <div className="container-wide relative z-10">
        <div className="grid gap-7 lg:grid-cols-[0.72fr_1fr] lg:items-end lg:gap-12">
          <div className="press-rise">
            <span className="inline-flex rounded-full border border-[var(--color-accent-primary)]/42 bg-[var(--color-accent-primary)]/12 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.26em] text-[var(--color-accent-primary)]">
              Press & Credibility
            </span>
            <h2 className="mt-3 max-w-[640px] text-[34px] font-black leading-[0.98] tracking-[-0.045em] sm:text-[44px] md:text-[54px] lg:text-[58px]">
              Built to look credible before launch.
            </h2>
          </div>

          <p className="press-rise max-w-[680px] text-[15px] leading-[1.65] text-white/68 sm:text-[17px] lg:justify-self-end">
            Krayaa needs to work for buyers, creators, brands, VCs, and press from day one. This section turns the pre-launch story into clear signals of momentum.
          </p>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-5">
          <div className="overflow-hidden rounded-xl border border-white/12 bg-white/[0.045] shadow-[0_26px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl">
            <div className="grid border-b border-white/10 text-center sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="press-card border-b border-white/10 p-4 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="text-[28px] font-black leading-none tracking-[-0.045em] text-[var(--color-accent-yellow)] sm:text-[32px]">{stat.value}</div>
                  <div className="mt-2 text-[10px] font-bold uppercase leading-[1.2] tracking-[0.16em] text-white/48">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-3 p-3 sm:grid-cols-2 lg:p-4">
              {credibility.map((item, index) => (
                <div
                  key={item.name}
                  className="press-card rounded-lg border border-white/10 bg-[rgba(10,4,5,0.58)] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent-primary)]/35"
                  style={{ animationDelay: `${index * 90 + 120}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[22px] font-black uppercase leading-none tracking-[-0.03em] text-white sm:text-[26px]">{item.name}</div>
                      <p className="mt-2 text-[13px] leading-[1.45] text-white/58">{item.note}</p>
                    </div>
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-primary)] text-sm font-black text-white">
                      {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {signals.map((signal, index) => (
              <article
                key={signal.title}
                className="press-card rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.26)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent-yellow)]/35"
                style={{ animationDelay: `${index * 90 + 180}ms` }}
              >
                <div className="mb-3 h-1.5 w-12 rounded-full bg-[linear-gradient(90deg,var(--color-accent-primary),var(--color-accent-yellow))]" />
                <h3 className="text-[20px] font-black leading-[1.05] tracking-[-0.03em]">{signal.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.5] text-white/62">{signal.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .press-lines {
          background-image:
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(circle at center, black, transparent 76%);
          animation: pressLines 28s linear infinite;
        }

        .press-rise,
        .press-card {
          animation: pressRise 620ms ease both;
        }

        @keyframes pressLines {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-54px, -54px, 0); }
        }

        @keyframes pressRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .press-lines,
          .press-rise,
          .press-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
