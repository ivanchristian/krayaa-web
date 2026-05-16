import Image from 'next/image';

const proofPoints = [
  {
    label: 'Seoul lived-in',
    value: '2 years',
  },
  {
    label: 'Launch window',
    value: 'Q3 2026',
  },
  {
    label: 'Built for',
    value: 'India',
  },
];

const storyBeats = [
  'Authentic Korean brands and licensed distributors, not gray-market guesswork.',
  'Creator-led discovery that feels closer to a live Seoul haul than a marketplace search.',
  'A trusted India entry point for K-beauty, K-pop merch, and future K-culture drops.',
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative flex min-h-[100svh] overflow-hidden bg-[var(--color-bg-card)] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(242,95,43,0.18),transparent_32%),radial-gradient(circle_at_82%_72%,rgba(244,183,58,0.12),transparent_30%),linear-gradient(180deg,rgba(10,4,5,0.26),rgba(10,4,5,0.9))]" />
      <div className="vision-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="container-wide relative z-10 flex w-full items-center py-5 sm:py-7 lg:py-8">
        <div className="grid w-full items-center gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-14">
          <div className="vision-copy mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <span className="inline-flex rounded-full border border-[var(--color-accent-primary)]/45 bg-[var(--color-accent-primary)]/12 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-[var(--color-accent-primary)] sm:text-[11px]">
              Vision / Founder Story
            </span>

            <h2 className="mt-3 text-[34px] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-[44px] md:text-[52px] lg:text-[58px]">
              Built between Seoul and India.
            </h2>

            <p className="mt-4 text-[18px] font-semibold italic leading-[1.35] text-white sm:text-[21px] md:text-[23px]">
              &quot;I lived in Seoul for two years. I saw the gap between Korean quality and Indian access. Krayaa is the bridge.&quot;
            </p>

            <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-[1.65] text-white/68 sm:text-[16px] lg:mx-0">
              Krayaa is not just another shop. We are building the trust layer for K-culture in India, starting with verified K-beauty and expanding into the culture drops fans already chase.
            </p>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-lg border border-white/10 bg-white/[0.055] px-4 py-3 text-left shadow-[0_18px_44px_rgba(0,0,0,0.24)] backdrop-blur-md"
                >
                  <div className="text-[22px] font-black leading-none tracking-[-0.04em] text-[var(--color-accent-yellow)] sm:text-[24px]">
                    {point.value}
                  </div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/52">{point.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#join"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--color-accent-primary)] px-5 text-sm font-bold text-white shadow-[0_16px_44px_rgba(242,95,43,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7040] sm:w-auto"
              >
                Join the waitlist
              </a>
              <a
                href="#creators"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/14 bg-white/[0.055] px-5 text-sm font-bold text-white/82 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent-yellow)]/45 hover:text-white sm:w-auto"
              >
                Partner with Krayaa
              </a>
            </div>
          </div>

          <div className="vision-stage relative mx-auto w-full max-w-[600px] lg:max-w-none">
            <div className="relative overflow-hidden rounded-xl border border-white/12 bg-[rgba(10,4,5,0.62)] p-3 shadow-[0_28px_100px_rgba(0,0,0,0.46)] backdrop-blur-xl sm:p-4 lg:p-5">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,var(--color-accent-primary),var(--color-accent-yellow),transparent)]" />
              <div className="grid gap-3 sm:grid-cols-[0.95fr_1.05fr] lg:gap-4">
                <div className="relative min-h-[210px] overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(160deg,rgba(242,95,43,0.22),rgba(255,255,255,0.045)_42%,rgba(244,183,58,0.12))] sm:min-h-[360px] lg:min-h-[430px]">
                  <div className="absolute left-4 top-4 z-20 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/76 backdrop-blur-md">
                    Founder lens
                  </div>
                  <div className="absolute inset-x-5 bottom-5 z-20 rounded-lg border border-white/12 bg-black/42 p-4 backdrop-blur-xl">
                    <div className="text-[24px] font-black leading-none tracking-[-0.05em] text-white sm:text-[28px]">Kunzang Gyatso</div>
                    <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent-primary)]">
                      Founder - Seoul resident
                    </div>
                  </div>

                  <div className="vision-orbit absolute inset-0">
                    <div className="absolute left-[13%] top-[22%] h-[132px] w-[92px] -rotate-12 sm:h-[168px] sm:w-[118px]">
                      <Image src="/assets/product_1.png" alt="Korean skincare product" fill sizes="150px" className="object-contain drop-shadow-[0_24px_38px_rgba(0,0,0,0.58)]" />
                    </div>
                    <div className="absolute right-[8%] top-[9%] h-[150px] w-[150px] rotate-12 sm:h-[190px] sm:w-[190px]">
                      <Image src="/assets/product_4.png" alt="Korean beauty jar" fill sizes="220px" className="object-contain drop-shadow-[0_26px_44px_rgba(0,0,0,0.58)]" />
                    </div>
                    <div className="absolute bottom-[21%] right-[14%] h-[130px] w-[100px] rotate-6 sm:h-[170px] sm:w-[130px]">
                      <Image src="/assets/product_2.png" alt="Korean serum bottle" fill sizes="160px" className="object-contain drop-shadow-[0_26px_44px_rgba(0,0,0,0.62)]" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4 backdrop-blur-md">
                    <div className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-white/48">What Krayaa stands for</div>
                    <div className="space-y-3">
                      {storyBeats.map((beat, index) => (
                        <div key={beat} className="flex gap-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-primary)] text-[10px] font-black text-white">
                            {index + 1}
                          </span>
                          <p className="text-[13px] leading-[1.45] text-white/72 sm:text-[13.5px]">{beat}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-[var(--color-accent-yellow)]/22 bg-[linear-gradient(135deg,rgba(244,183,58,0.18),rgba(242,95,43,0.08))] p-4 backdrop-blur-md">
                    <div className="text-[28px] font-black leading-[0.9] tracking-[-0.05em] text-white sm:text-[34px]">Be first.</div>
                    <p className="mt-3 text-[13px] leading-[1.5] text-white/68">
                      Limited beta access goes first to buyers, creators, and Korean brands joining before launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .vision-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(circle at center, black, transparent 76%);
          animation: visionGridDrift 28s linear infinite;
        }

        .vision-copy,
        .vision-stage {
          animation: visionRise 680ms ease both;
        }

        .vision-stage {
          animation-delay: 120ms;
        }

        .vision-orbit {
          animation: visionFloat 7s ease-in-out infinite;
        }

        @keyframes visionGridDrift {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-44px, -44px, 0); }
        }

        @keyframes visionRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes visionFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (max-height: 760px) and (min-width: 1024px) {
          #vision .container-wide {
            padding-block: 1rem;
          }

          #vision h2 {
            font-size: 46px;
          }

          #vision .vision-stage [class*="lg:min-h-[430px]"] {
            min-height: 360px;
          }
        }

        @media (max-height: 700px) and (max-width: 767px) {
          #vision .vision-stage {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vision-grid,
          .vision-copy,
          .vision-stage,
          .vision-orbit {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
