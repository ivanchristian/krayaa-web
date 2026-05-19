'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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
  },
  {
    number: '03',
    label: 'Live',
    icon: 'broadcast',
    image:
      'https://images.pexels.com/photos/6593782/pexels-photo-6593782.jpeg?cs=srgb&dl=pexels-shvetsa-6593782.jpg&fm=jpg',
    imageAlt: 'Beauty creator filming with phone and ring light',
    today: 'Creators recommend products, fans ask questions, then everyone gets sent into link chaos.',
    headline: 'Live, With Creators You Trust.',
    description:
      'K-beauty creators and K-pop fan accounts go live, demo authentic products, and you buy in one tap. No more swipe-up chaos.',
  },
];

function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M6.5 6.5L17.5 17.5M17.5 6.5L6.5 17.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M5.5 12.5L10 17L18.5 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
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
      <path d="M12 3.2L18.4 5.7V11.2C18.4 15.4 15.7 18.9 12 20.8C8.3 18.9 5.6 15.4 5.6 11.2V5.7L12 3.2Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M8.9 12L10.9 14L15.4 9.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function StatusPill({ good }: { good?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] ${good ? 'bg-[var(--color-success)] text-[#04140a]' : 'bg-white/10 text-white/75'}`}>
      {good ? <CheckIcon /> : <CrossIcon />}
      {good ? 'Krayaa' : 'Today'}
    </span>
  );
}

function DesktopComparison({ pillar }: { pillar: (typeof pillars)[number] }) {
  return (
    <div
      className="mx-auto w-full"
      style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 24, maxWidth: 1040 }}
    >
      <div
        className="border border-white/12 bg-[rgba(255,255,255,0.075)] text-left shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl"
        style={{ minHeight: 206, borderRadius: 24, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <div style={{ display: 'grid', gap: 16 }}>
          <StatusPill />
          <h4 className="font-semibold tracking-[-0.018em] text-white" style={{ fontSize: 24, lineHeight: 1.1, fontWeight: 650 }}>
            The current way feels uncertain.
          </h4>
        </div>
        <p className="text-white/70" style={{ marginTop: 24, fontSize: 16, lineHeight: 1.65 }}>
          {pillar.today}
        </p>
      </div>

      <div
        className="border border-[var(--color-success)]/35 bg-[linear-gradient(135deg,rgba(255,232,174,0.98),rgba(255,202,112,0.92))] text-left text-[#150908] shadow-[0_24px_70px_rgba(0,0,0,0.38)]"
        style={{ minHeight: 206, borderRadius: 24, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <div style={{ display: 'grid', gap: 16 }}>
          <StatusPill good />
          <h4 className="font-semibold tracking-[-0.018em]" style={{ fontSize: 28, lineHeight: 1.06, fontWeight: 650 }}>
            {pillar.headline}
          </h4>
        </div>
        <p className="font-semibold text-[#251210]/80" style={{ marginTop: 24, fontSize: 16, lineHeight: 1.58 }}>
          {pillar.description}
        </p>
      </div>
    </div>
  );
}

function MobilePillarCard({ pillar, onDetail }: { pillar: (typeof pillars)[number]; onDetail: () => void }) {
  return (
    <article className="why-krayaa-panel group relative overflow-hidden rounded-2xl border border-white/12 bg-[rgba(16,9,8,0.78)] shadow-[0_18px_52px_rgba(0,0,0,0.4)]">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,var(--color-accent-primary),var(--color-accent-yellow),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(242,95,43,0.12),transparent_48%)]" />

      <div className="relative z-10 grid min-h-[176px] grid-cols-[0.82fr_1.18fr]">
        <div className="relative h-full min-h-[176px] self-stretch overflow-hidden rounded-l-2xl border-r border-white/12 bg-black/35">
          <Image src={pillar.image} alt={pillar.imageAlt} fill sizes="46vw" className="object-cover opacity-[0.86] transition duration-700 group-hover:scale-[1.04]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,4,5,0.04),rgba(10,4,5,0.76))]" />
          <div className="absolute bottom-3 left-3 rounded-full border border-[var(--color-accent-yellow)]/30 bg-black/60 px-2.5 py-1 text-[7px] font-black uppercase tracking-[0.12em] text-white">
            Verified
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-center py-4" style={{ paddingLeft: 34, paddingRight: 18 }}>
          <div className="flex flex-col" style={{ rowGap: 10 }}>
            <div className="flex items-center" style={{ columnGap: 13 }}>
              <span className="text-[29px] font-black leading-none tracking-[-0.055em] text-[var(--color-accent-yellow)]">{pillar.number}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-white/[0.08] text-[var(--color-accent-yellow)]">
                <PillarIcon type={pillar.icon} />
              </span>
            </div>
            <h3 className="text-[23px] font-semibold tracking-[-0.018em] text-white" style={{ lineHeight: 1.12, fontWeight: 650 }}>{pillar.label}</h3>
            <p className="line-clamp-2 text-[12.5px] font-semibold text-white/62" style={{ lineHeight: 1.7 }}>{pillar.headline}</p>
          </div>

          <button
            type="button"
            onClick={onDetail}
            className="inline-flex w-[calc(100%-10px)] items-center justify-center rounded-full border border-[var(--color-accent-primary)]/45 bg-[linear-gradient(135deg,rgba(242,95,43,0.24),rgba(244,183,58,0.08))] px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--color-accent-primary)] shadow-[0_12px_30px_rgba(242,95,43,0.14)]"
            style={{ marginTop: 16 }}
          >
            See detail
          </button>
        </div>
      </div>
    </article>
  );
}

function DetailModal({ pillar, onClose }: { pillar: (typeof pillars)[number]; onClose: () => void }) {
  return (
    <div
      className="why-krayaa-modal fixed inset-0 z-[120] flex items-center justify-center bg-black/74 backdrop-blur-md md:hidden"
      role="dialog"
      aria-modal="true"
      style={{ paddingLeft: 22, paddingRight: 22, paddingTop: 32, paddingBottom: 32 }}
    >
      <div
        className="why-krayaa-modal-card relative overflow-hidden rounded-2xl border border-white/14 bg-[var(--color-bg-card)] shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
        style={{ width: 'calc(100vw - 44px)', maxWidth: 390, padding: '22px 18px 18px' }}
      >
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--color-accent-primary),var(--color-accent-yellow))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(242,95,43,0.13),transparent_42%)]" />
        <button
          type="button"
          aria-label="Close detail"
          onClick={onClose}
          className="absolute z-20 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.08] font-bold text-white transition hover:bg-white/14"
          style={{ right: 14, top: 14, width: 34, height: 34, fontSize: 17 }}
        >
          x
        </button>

        <div className="relative z-10" style={{ paddingRight: 42 }}>
          <p className="font-black uppercase text-[var(--color-accent-primary)]" style={{ fontSize: 10, letterSpacing: '0.22em', lineHeight: 1.2 }}>
            {pillar.number} / {pillar.label}
          </p>
          <h3 className="font-semibold tracking-[-0.018em] text-white" style={{ marginTop: 9, fontSize: 24, lineHeight: 1.08, fontWeight: 650 }}>
            {pillar.headline}
          </h3>
        </div>

        <div className="relative z-10 grid" style={{ marginTop: 18, rowGap: 14 }}>
          <div className="rounded-xl border border-white/12 bg-white/[0.075]" style={{ padding: 15 }}>
            <StatusPill />
            <p className="text-white/72" style={{ marginTop: 11, fontSize: 12.5, lineHeight: 1.62 }}>{pillar.today}</p>
          </div>

          <div
            className="rounded-xl border border-[var(--color-success)]/35 bg-[linear-gradient(135deg,rgba(255,232,174,0.98),rgba(255,202,112,0.92))] text-[#150908]"
            style={{ padding: 15 }}
          >
            <StatusPill good />
            <p className="font-semibold text-[#251210]/82" style={{ marginTop: 11, fontSize: 12.5, lineHeight: 1.58 }}>{pillar.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhyKrayaa() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const activePillar = pillars[activeIndex];
  const nextPillar = pillars[(activeIndex + 1) % pillars.length];
  const modalPillar = modalIndex === null ? null : pillars[modalIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.24, rootMargin: '-8% 0px -8% 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const moveDesktopCarousel = (direction: 'previous' | 'next') => {
    setActiveIndex((current) => (direction === 'previous' ? (current - 1 + pillars.length) % pillars.length : (current + 1) % pillars.length));
  };

  return (
    <section
      id="why-krayaa"
      ref={sectionRef}
      className={`relative flex min-h-[100svh] flex-col overflow-hidden bg-[var(--color-bg-primary)] ${isInView ? 'why-krayaa-visible' : ''}`}
    >
      <Image src="/assets/background_whykrayaa.png" alt="" fill priority sizes="100vw" className="pointer-events-none object-cover opacity-[0.9] sm:opacity-95" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,4,5,0.74),rgba(10,4,5,0.48)_42%,rgba(10,4,5,0.86)),radial-gradient(circle_at_18%_24%,rgba(242,95,43,0.3),transparent_38%),radial-gradient(circle_at_78%_74%,rgba(244,183,58,0.16),transparent_36%)] sm:bg-[linear-gradient(180deg,rgba(10,4,5,0.82),rgba(10,4,5,0.52)_42%,rgba(10,4,5,0.9)),radial-gradient(circle_at_14%_30%,rgba(242,95,43,0.32),transparent_36%),radial-gradient(circle_at_84%_52%,rgba(244,183,58,0.18),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 why-krayaa-noise opacity-[0.035]" />

      <div className="h-2 shrink-0 md:h-4" aria-hidden="true" />

      <div className="container-wide relative z-10 flex flex-1 flex-col justify-center pb-3 pt-1 sm:pb-6 sm:pt-3">
        <div className="mx-auto flex w-full max-w-[1320px] -translate-y-6 flex-col gap-3 sm:translate-y-0 sm:gap-5 lg:-translate-y-2">
          <div className="grid items-end gap-3 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div className="why-krayaa-reveal why-krayaa-delay-0">
              <span className="inline-flex rounded-full border border-[var(--color-accent-primary)]/45 bg-[var(--color-accent-primary)]/12 px-3 py-1 text-[9px] font-black uppercase tracking-[0.26em] text-[var(--color-accent-primary)] sm:px-3.5 sm:py-1.5 sm:text-[10px]">
                &nbsp;Why Krayaa&nbsp;
              </span>
              <h2 className="mt-3 text-[34px] font-black leading-[0.98] tracking-[-0.045em] text-white sm:mt-2 sm:text-[44px] md:text-[52px] lg:text-[56px]">
                Why Krayaa
              </h2>
            </div>

            <p className="why-krayaa-reveal why-krayaa-delay-1 max-w-[660px] text-[13px] leading-[1.45] text-white/66 sm:text-[16px] md:text-[16px] lg:justify-self-end">
              Buying Korean products in India is broken. We&apos;re fixing three things at once.
            </p>
          </div>

          <div className="why-krayaa-reveal why-krayaa-delay-2 mt-5 grid gap-5 sm:hidden">
            {pillars.map((pillar, index) => (
              <MobilePillarCard key={pillar.label} pillar={pillar} onDetail={() => setModalIndex(index)} />
            ))}
          </div>

          <div
            className="why-krayaa-reveal why-krayaa-delay-2 relative hidden overflow-hidden border border-white/12 bg-[rgba(8,4,4,0.64)] shadow-[0_30px_110px_rgba(0,0,0,0.52)] backdrop-blur-md sm:block"
            style={{ minHeight: 548, borderRadius: 34, padding: 38 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.045),transparent_24%,transparent_72%,rgba(34,197,94,0.05))]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
              <Image src={activePillar.image} alt="" fill sizes="1200px" className="object-cover" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(10,4,5,0.18),rgba(10,4,5,0.96)_58%),linear-gradient(90deg,rgba(10,4,5,0.38),rgba(10,4,5,0.84))]" />
            </div>
            <div className="pointer-events-none absolute -right-28 -top-12 h-[360px] w-[440px] overflow-hidden rounded-[46px] opacity-[0.1] blur-[1px]">
              <Image src={nextPillar.image} alt="" fill sizes="520px" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(10,4,5,0.18),rgba(10,4,5,0.96))]" />
            </div>

            <div key={activePillar.label} className="why-krayaa-panel relative z-10 mx-auto flex max-w-[1060px] flex-col" style={{ minHeight: 472, justifyContent: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)', columnGap: 48, alignItems: 'end', marginBottom: 30 }}>
                <div className="text-left">
                  <div style={{ display: 'flex', alignItems: 'center', columnGap: 18 }}>
                    <span className="font-black text-[var(--color-accent-yellow)] drop-shadow-[0_18px_34px_rgba(244,183,58,0.22)]" style={{ fontSize: 74, lineHeight: 0.9, letterSpacing: '-0.075em' }}>
                      {activePillar.number}
                    </span>
                    <span className="flex items-center justify-center rounded-xl border border-white/12 bg-white/[0.08] text-[var(--color-accent-yellow)]" style={{ width: 52, height: 52 }}>
                      <PillarIcon type={activePillar.icon} />
                    </span>
                  </div>
                  <h3 className="font-semibold text-white" style={{ marginTop: 14, fontSize: 52, lineHeight: 0.96, letterSpacing: '-0.025em', fontWeight: 650 }}>
                    {activePillar.label}
                  </h3>
                </div>

                <div className="justify-self-end text-right" style={{ maxWidth: 560 }}>
                  <p className="font-semibold text-white/72" style={{ fontSize: 20, lineHeight: 1.5 }}>
                    {activePillar.headline}
                  </p>
                  <p className="font-black uppercase text-[var(--color-accent-primary)]" style={{ marginTop: 16, fontSize: 11, letterSpacing: '0.2em' }}>
                    {activeIndex + 1} of {pillars.length} reasons
                  </p>
                </div>
              </div>

              <div>
                <DesktopComparison pillar={activePillar} />
              </div>

              <div
                className="mx-auto flex w-full items-center border border-white/10 bg-black/36 text-left shadow-[0_18px_60px_rgba(0,0,0,0.32)]"
                style={{ maxWidth: 1040, marginTop: 28, gap: 16, borderRadius: 22, padding: 13 }}
              >
                <button
                  type="button"
                  aria-label="Previous reason"
                  onClick={() => moveDesktopCarousel('previous')}
                  className="flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/45 text-2xl text-white shadow-[0_12px_34px_rgba(0,0,0,0.35)] transition hover:scale-105 hover:bg-white/10"
                  style={{ width: 46, height: 46 }}
                >
                  {'<'}
                </button>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3" style={{ marginBottom: 10 }}>
                    <span className="text-[11px] font-black uppercase tracking-[0.18em] text-white/48">Next up</span>
                    <span className="truncate text-[13px] font-black text-[var(--color-accent-yellow)]">
                      {nextPillar.number} {nextPillar.label}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-accent-primary),var(--color-accent-yellow))] transition-all duration-500"
                      style={{ width: `${((activeIndex + 1) / pillars.length) * 100}%` }}
                    />
                  </div>
                </div>

                <span className="min-w-16 text-center text-[12px] font-black uppercase tracking-[0.2em] text-white/60">
                  {activeIndex + 1}/{pillars.length}
                </span>

                <button
                  type="button"
                  aria-label="Next reason"
                  onClick={() => moveDesktopCarousel('next')}
                  className="flex shrink-0 items-center justify-center rounded-full border border-[var(--color-accent-primary)]/35 bg-[var(--color-accent-primary)]/18 text-2xl text-white shadow-[0_12px_34px_rgba(242,95,43,0.24)] transition hover:scale-105 hover:bg-[var(--color-accent-primary)]/28"
                  style={{ width: 46, height: 46 }}
                >
                  {'>'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalPillar ? <DetailModal pillar={modalPillar} onClose={() => setModalIndex(null)} /> : null}

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

        .why-krayaa-reveal {
          opacity: 0;
          transform: translate3d(0, 26px, 0) scale(0.975);
          transform-origin: center;
          will-change: opacity, transform;
        }

        .why-krayaa-visible .why-krayaa-reveal {
          animation: whyKrayaaSectionReveal 860ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .why-krayaa-visible .why-krayaa-delay-0 {
          animation-delay: 40ms;
        }

        .why-krayaa-visible .why-krayaa-delay-1 {
          animation-delay: 180ms;
        }

        .why-krayaa-visible .why-krayaa-delay-2 {
          animation-delay: 330ms;
        }

        .why-krayaa-modal {
          animation: whyKrayaaModalFade 220ms ease both;
        }

        .why-krayaa-modal-card {
          animation: whyKrayaaModalPop 340ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }

        @keyframes whyKrayaaDrift {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-38px, -38px, 0); }
        }

        @keyframes whyKrayaaPanelIn {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes whyKrayaaSectionReveal {
          0% { opacity: 0; transform: translate3d(0, 26px, 0) scale(0.975); filter: blur(5px); }
          70% { opacity: 1; filter: blur(0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
        }

        @keyframes whyKrayaaModalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes whyKrayaaModalPop {
          from { opacity: 0; transform: translateY(18px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-krayaa-noise,
          .why-krayaa-reveal,
          .why-krayaa-panel,
          .why-krayaa-modal,
          .why-krayaa-modal-card {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
