'use client';

import Image from 'next/image';

const pillars = [
  {
    number: '01',
    label: 'Authentic',
    icon: 'shield',
    image:
      'https://images.pexels.com/photos/8102132/pexels-photo-8102132.jpeg?cs=srgb&dl=pexels-polina-kovaleva-8102132.jpg&fm=jpg',
    imageAlt: 'Skincare products on a dark fabric background',
    today: 'Gray-market sellers, mystery listings, and products you cannot fully trust.',
    headline: '100% Authentic. Ever.',
    description:
      "Every product comes from a verified Korean brand or licensed distributor. No gray market. Buy with the same trust you'd have walking into Olive Young in Seoul.",
    position: 'lg:left-0 lg:top-0 lg:w-[57%]',
  },
  {
    number: '02',
    label: 'Curated',
    icon: 'spark',
    image:
      'https://images.pexels.com/photos/6875113/pexels-photo-6875113.jpeg?cs=srgb&dl=pexels-cottonbro-6875113.jpg&fm=jpg',
    imageAlt: 'Albums and records displayed on a wall',
    today: 'Endless marketplace search, random resellers, and no clear signal on what is worth buying.',
    headline: 'Curated Drops. Not Marketplace Noise.',
    description:
      'The right K-beauty, K-pop, and culture drops without endless marketplace hunting. Krayaa curates what fans and creators already care about.',
    position: 'lg:right-0 lg:top-[30%] lg:w-[51%]',
  },
  {
    number: '03',
    label: 'Live',
    icon: 'broadcast',
    image:
      'https://images.pexels.com/photos/6593782/pexels-photo-6593782.jpeg?cs=srgb&dl=pexels-shvetsa-6593782.jpg&fm=jpg',
    imageAlt: 'Beauty creator filming with phone and ring light',
    today: 'Creators recommend products, fans ask questions, then everyone gets sent into link chaos.',
    headline: 'Live, With the Creators You Already Trust.',
    description:
      'K-beauty creators and K-pop fan accounts go live, demo authentic products, and you buy in one tap. No more swipe-up chaos.',
    position: 'lg:left-0 lg:bottom-0 lg:w-[52%]',
  },
];

function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
      <path
        d="M6.5 6.5L17.5 17.5M17.5 6.5L6.5 17.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
      <path
        d="M5.5 12.5L10 17L18.5 7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function PillarIcon({ type }: { type: string }) {
  if (type === 'spark') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path d="M12 2L14.2 8.6L21 11L14.2 13.4L12 20L9.8 13.4L3 11L9.8 8.6L12 2Z" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'broadcast') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M8.2 15.8A5.4 5.4 0 0 1 8.2 8.2M15.8 8.2A5.4 5.4 0 0 1 15.8 15.8M5.1 18.9A9.7 9.7 0 0 1 5.1 5.1M18.9 5.1A9.7 9.7 0 0 1 18.9 18.9"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.9"
        />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 3.2L18.4 5.7V11.2C18.4 15.4 15.7 18.9 12 20.8C8.3 18.9 5.6 15.4 5.6 11.2V5.7L12 3.2Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M8.9 12L10.9 14L15.4 9.4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function MiniCard({
  tone,
  children,
}: {
  tone: 'bad' | 'good';
  children: React.ReactNode;
}) {
  const isGood = tone === 'good';

  return (
    <div
      className={[
        'relative rounded-lg border p-3 shadow-[0_16px_36px_rgba(0,0,0,0.3)] backdrop-blur-md sm:p-3.5 lg:p-3',
        isGood
          ? 'border-[var(--color-success)]/35 bg-[linear-gradient(135deg,rgba(255,232,174,0.96),rgba(255,202,112,0.9))] text-[#150908]'
          : 'border-white/12 bg-[rgba(255,255,255,0.09)] text-white',
      ].join(' ')}
    >
      <div
        className={[
          'mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em]',
          isGood ? 'bg-[var(--color-success)] text-[#04140a]' : 'bg-white/10 text-white/75',
        ].join(' ')}
      >
        {isGood ? <CheckIcon /> : <CrossIcon />}
        {isGood ? 'Krayaa' : 'Today'}
      </div>
      {children}
    </div>
  );
}

function PillarCard({ pillar, index }: { pillar: (typeof pillars)[number]; index: number }) {
  const isWide = index === 0;

  return (
    <article
      className={[
        'why-krayaa-panel group relative grid overflow-hidden rounded-xl border border-white/12 bg-[rgba(16,9,8,0.76)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.44)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[var(--color-accent-yellow)]/35 sm:p-5 lg:absolute lg:p-4',
        pillar.position,
      ].join(' ')}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,var(--color-accent-primary),var(--color-accent-yellow),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(244,183,58,0.16),transparent_34%),radial-gradient(circle_at_86%_82%,rgba(34,197,94,0.1),transparent_30%)] opacity-80" />
      <div className="absolute right-4 top-4 text-[80px] font-black leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[104px] lg:text-[92px]">
        {pillar.number}
      </div>

      <div className="relative z-10 grid gap-3 md:grid-cols-[0.82fr_1.18fr] md:items-stretch lg:gap-3">
        <div className="flex min-w-0 flex-col">
          <div className="flex items-start gap-3">
            <span className="text-[48px] font-black leading-none tracking-[-0.07em] text-[var(--color-accent-yellow)] drop-shadow-[0_12px_26px_rgba(244,183,58,0.22)] sm:text-[58px] lg:text-[52px]">
              {pillar.number}
            </span>
            <div className="pt-1">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-white/[0.08] text-[var(--color-accent-yellow)]">
                <PillarIcon type={pillar.icon} />
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/65">{pillar.number}</div>
              <h3 className="mt-1 text-[24px] font-black leading-none tracking-[-0.04em] text-white sm:text-[28px] lg:text-[25px]">
                {pillar.label}
              </h3>
            </div>
          </div>

          <div className="relative mt-3 min-h-[130px] flex-1 overflow-hidden rounded-lg border border-white/12 bg-black/35 sm:min-h-[160px] lg:min-h-[122px]">
            <Image
              src={pillar.image}
              alt={pillar.imageAlt}
              fill
              sizes={isWide ? '(max-width: 768px) 100vw, 380px' : '(max-width: 768px) 100vw, 310px'}
              className="object-cover opacity-80 saturate-[0.82] transition duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,4,5,0.08),rgba(10,4,5,0.78))]" />
            <div className="absolute bottom-3 left-3 rounded-full border border-[var(--color-accent-yellow)]/30 bg-black/50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">
              Verified source
            </div>
          </div>
        </div>

        <div className="grid min-w-0 gap-3 self-center sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
          <MiniCard tone="bad">
            <p className="text-[12.5px] leading-[1.45] text-white/75 sm:text-[13px] lg:text-[12px]">{pillar.today}</p>
          </MiniCard>

          <MiniCard tone="good">
            <h4 className="text-[17px] font-black leading-[1.05] tracking-[-0.03em] sm:text-[19px] lg:text-[17px]">{pillar.headline}</h4>
            <p className="mt-2 text-[11.5px] font-medium leading-[1.38] text-[#251210]/78 sm:text-[12px] lg:text-[11.5px]">
              {pillar.description}
            </p>
          </MiniCard>
        </div>
      </div>
    </article>
  );
}

export default function WhyKrayaa() {
  return (
    <section
      id="why-krayaa"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[var(--color-bg-primary)]"
    >
      <Image
        src="/assets/background_whykrayaa.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,4,5,0.92),rgba(10,4,5,0.72)_42%,rgba(10,4,5,0.94)),radial-gradient(circle_at_16%_26%,rgba(242,95,43,0.2),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 why-krayaa-noise opacity-[0.035]" />

      <div className="h-3 shrink-0 md:h-4" aria-hidden="true" />

      <div className="container-wide relative z-10 flex flex-1 flex-col justify-start pb-5 pt-2 sm:pt-3 md:pb-6 md:pt-3">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 md:gap-5">
          <div className="grid items-end gap-4 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
            <div>
              <span className="inline-flex rounded-full border border-[var(--color-accent-primary)]/45 bg-[var(--color-accent-primary)]/12 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.28em] text-[var(--color-accent-primary)]">
                Why Krayaa
              </span>
              <h2 className="mt-2 max-w-[680px] text-[34px] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-[44px] md:text-[52px] lg:text-[54px]">
                Why Krayaa
              </h2>
            </div>

            <p className="max-w-[660px] text-[15px] leading-[1.55] text-white/66 sm:text-[16px] md:text-[16px] lg:justify-self-end">
              Buying Korean products in India is broken. We&apos;re fixing three things at once.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/12 bg-[rgba(8,4,4,0.56)] p-3 shadow-[0_30px_110px_rgba(0,0,0,0.5)] backdrop-blur-md sm:p-4 md:p-4">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.045),transparent_20%,transparent_72%,rgba(34,197,94,0.055))]" />
            <div className="relative z-10">
              <div className="hidden grid-cols-[1fr_1.2fr_1.2fr] border-b border-white/10 px-2 pb-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/68 md:grid">
                <div>Focus</div>
                <div>How India buys Korean today</div>
                <div>How Krayaa changes it</div>
              </div>

              <div className="relative mt-3 grid gap-4 lg:h-[505px] lg:grid-cols-none lg:grid-rows-none lg:gap-0 lg:pb-0 xl:h-[520px]">
                <div className="pointer-events-none absolute left-[30%] top-[28%] hidden h-[40%] w-[45%] rounded-full border border-[var(--color-accent-yellow)]/20 opacity-60 lg:block" />
                <div className="pointer-events-none absolute left-[34%] top-[45%] hidden h-px w-[30%] rotate-[-10deg] bg-[linear-gradient(90deg,transparent,rgba(244,183,58,0.45),transparent)] lg:block" />
                {pillars.map((pillar, index) => (
                  <PillarCard key={pillar.label} pillar={pillar} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .why-krayaa-noise {
          background-image:
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: radial-gradient(circle at center, black, transparent 78%);
          animation: whyKrayaaDrift 24s linear infinite;
        }

        .why-krayaa-panel {
          animation: whyKrayaaPanelIn 620ms ease both;
        }

        @keyframes whyKrayaaDrift {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-38px, -38px, 0); }
        }

        @keyframes whyKrayaaPanelIn {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-krayaa-noise,
          .why-krayaa-panel {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
