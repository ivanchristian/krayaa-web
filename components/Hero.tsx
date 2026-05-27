import Image from 'next/image';

const categories = [
  {
    label: 'K-Beauty',
    tone: 'white',
    images: [1, 2, 15, 16],
    desktopClass: 'hero-category-upper hero-category-left floating left-[1%] top-[15%] lg:left-[3%] 2xl:left-[4%]',
    cardClass: 'h-[285px] w-[360px] -rotate-5 xl:h-[345px] xl:w-[440px]',
    delay: 'reveal-delay-4',
  },
  {
    label: 'Fashion & Apparel',
    tone: 'white',
    images: [14, 17, 18, 20],
    desktopClass: 'hero-category-upper hero-category-right floating-delay right-[0%] top-[14%] lg:right-[2%] 2xl:right-[3%]',
    cardClass: 'h-[285px] w-[380px] rotate-5 xl:h-[345px] xl:w-[470px]',
    delay: 'reveal-delay-5',
  },
  {
    label: 'TCG & Decks',
    tone: 'yellow',
    images: [5, 6, 7, 8],
    desktopClass: 'hero-category-lower hero-category-lower-left floating left-[17%] bottom-[7%] 2xl:left-[19%]',
    cardClass: 'h-[215px] w-[380px] -rotate-2 xl:h-[255px] xl:w-[450px]',
    delay: 'reveal-delay-6',
  },
  {
    label: 'K-pop Merch',
    tone: 'orange',
    images: [9, 10, 11, 13],
    desktopClass: 'hero-category-lower hero-category-lower-right floating-delay right-[17%] bottom-[7%] 2xl:right-[19%]',
    cardClass: 'h-[215px] w-[380px] rotate-2 xl:h-[255px] xl:w-[450px]',
    delay: 'reveal-delay-7',
  },
];

const imageLayouts = [
  'left-[1%] top-[14%] h-[70%] w-[34%] -rotate-8',
  'left-[26%] bottom-[5%] h-[66%] w-[32%] rotate-5',
  'right-[25%] top-[3%] h-[62%] w-[31%] rotate-3',
  'right-[2%] bottom-[12%] h-[60%] w-[30%] rotate-10',
];

function tagClass(tone: string) {
  if (tone === 'yellow') {
    return 'border-[var(--color-accent-yellow)]/34 text-[var(--color-accent-yellow)]';
  }

  if (tone === 'orange') {
    return 'border-[var(--color-accent-primary)]/36 text-[var(--color-accent-primary)]';
  }

  return 'border-white/12 text-white/66';
}

function HeroProductCluster({ category }: { category: (typeof categories)[number] }) {
  return (
    <div className={`hero-product-cluster reveal-pop ${category.delay} relative ${category.cardClass}`}>
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_center,rgba(242,95,43,0.14),rgba(244,183,58,0.07)_44%,transparent_72%)] blur-3xl" />

      {category.images.map((id, index) => (
        <div key={`${category.label}-${id}`} className={`absolute ${imageLayouts[index]}`}>
          <Image
            src={`/assets/product_${id}.png`}
            alt={`${category.label} product ${index + 1}`}
            fill
            priority={id === 1}
            className="object-contain drop-shadow-[0_22px_46px_rgba(0,0,0,0.58)]"
          />
        </div>
      ))}

      <div
        className={`absolute left-4 rounded-full border bg-black/34 text-[9px] font-black uppercase tracking-[0.2em] backdrop-blur-md sm:text-[10px] ${tagClass(category.tone)}`}
        style={{ bottom: category.tone === 'yellow' || category.tone === 'orange' ? '-12px' : '16px', padding: '8px 20px' }}
      >
        {category.label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[linear-gradient(180deg,#0a0405_0%,#0d0505_42%,#150706_76%,#0a0405_100%)] px-0 pb-10 pt-20 md:pb-0 md:pt-24"
    >
      {/* Animated Gradient Background */}
      <div className="hero-gradient absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(242,95,43,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,183,58,0.14),transparent_30%)]" />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,4,5,0.08),rgba(10,4,5,0.18)_52%,rgba(242,95,43,0.16)_100%)]" />

      {/* Center Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,95,43,0.14),transparent_45%)]" />

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-220px] top-[5%] h-[520px] w-[520px] rounded-full bg-[var(--color-accent-primary)]/10 blur-3xl" />
        <div className="absolute right-[-180px] top-[35%] h-[420px] w-[420px] rounded-full bg-[var(--color-accent-yellow)]/10 blur-3xl" />
        <div className="absolute bottom-[-190px] left-1/2 h-[680px] w-[980px] -translate-x-1/2 rounded-full bg-[var(--color-accent-primary)]/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,transparent,rgba(242,95,43,0.055)_42%,rgba(244,183,58,0.035)_100%)]" />
      </div>

      {/* DESKTOP CATEGORY VISUALS */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {categories.map((category) => (
          <div key={category.label} className={`hero-category-cluster absolute ${category.desktopClass}`}>
            <HeroProductCluster category={category} />
          </div>
        ))}
      </div>

      {/* MOBILE PRODUCT VISUALS */}
      <div className="pointer-events-none absolute inset-0 z-0 md:hidden">
        <div className="floating absolute left-[-14px] top-[142px] rotate-[-12deg] opacity-72">
          <div className="reveal-pop reveal-delay-4 relative h-[124px] w-[98px]">
            <Image src="/assets/product_1.png" alt="K-beauty product" fill priority className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.58)]" />
          </div>
        </div>

        <div className="floating-delay absolute right-[-18px] top-[150px] rotate-[11deg] opacity-72">
          <div className="reveal-pop reveal-delay-5 relative h-[124px] w-[124px]">
            <Image src="/assets/product_14.png" alt="Fashion product" fill className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.58)]" />
          </div>
        </div>

        <div className="floating absolute left-[5%] bottom-[150px] rotate-[9deg] opacity-70">
          <div className="reveal-pop reveal-delay-6 relative h-[108px] w-[86px]">
            <Image src="/assets/product_15.png" alt="K-beauty product" fill className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.58)]" />
          </div>
        </div>

        <div className="floating-delay absolute right-[4%] bottom-[154px] rotate-[-9deg] opacity-70">
          <div className="reveal-pop reveal-delay-7 relative h-[110px] w-[88px]">
            <Image src="/assets/product_18.png" alt="Fashion product" fill className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.58)]" />
          </div>
        </div>

        <div className="floating absolute left-[24%] top-[92px] rotate-[8deg] opacity-70">
          <div className="reveal-pop reveal-delay-4 relative h-[98px] w-[74px]">
            <Image src="/assets/product_5.png" alt="TCG card" fill className="object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.58)]" />
          </div>
        </div>

        <div className="floating absolute left-[51%] top-[138px] rotate-[-5deg] opacity-66">
          <div className="reveal-pop reveal-delay-6 relative h-[88px] w-[68px]">
            <Image src="/assets/product_7.png" alt="TCG card" fill className="object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.58)]" />
          </div>
        </div>

        <div className="floating-delay absolute right-[22%] bottom-[66px] rotate-[-8deg] opacity-66">
          <div className="reveal-pop reveal-delay-5 relative h-[100px] w-[78px]">
            <Image src="/assets/product_9.png" alt="K-pop merch" fill className="object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.58)]" />
          </div>
        </div>

        <div className="floating-delay absolute left-[57%] top-[244px] rotate-[5deg] opacity-68">
          <div className="reveal-pop reveal-delay-7 relative h-[78px] w-[58px]">
            <Image src="/assets/product_10.png" alt="K-pop lightstick" fill className="object-contain drop-shadow-[0_0_18px_rgba(244,183,58,0.18),0_16px_30px_rgba(0,0,0,0.54)]" />
          </div>
        </div>

        <div className="floating-delay absolute right-[45%] bottom-[50px] rotate-[8deg] opacity-54">
          <div className="reveal-pop reveal-delay-7 relative h-[82px] w-[66px]">
            <Image src="/assets/product_17.png" alt="Fashion product" fill className="object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.58)]" />
          </div>
        </div>

        <div className="floating absolute left-[44%] bottom-[214px] rotate-[-8deg] opacity-72">
          <div className="reveal-pop reveal-delay-5 relative h-[74px] w-[58px]">
            <Image src="/assets/product_6.png" alt="TCG card" fill className="object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.58)]" />
          </div>
        </div>

      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container-wide hero-content relative z-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          {/* Preheadline */}
          <div className="hero-text-rise mb-5 md:mb-7">
            <span className="inline-block rounded-full border border-[var(--color-accent-primary)] bg-[var(--color-accent-primary)]/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent-primary)]">
              &nbsp; COMING Q3 2026 &nbsp;
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-text-rise reveal-delay-1 max-w-6xl text-center text-[48px] font-black tracking-[-0.06em] text-white sm:text-[56px] md:text-[96px] lg:text-[120px]" style={{ lineHeight: 1.06 }}>
            Korea, Live.
          </h1>

          {/* Subheadline */}
          <p className="hero-text-rise reveal-delay-2 mt-6 max-w-3xl px-2 text-[16px] text-[var(--color-text-secondary)] sm:text-[18px] md:mt-8 md:px-0 md:text-[22px]" style={{ lineHeight: 1.9 }}>
            <span className="hero-subline-1 block">Authentic K-beauty, K-pop merch, Korean TCG, and fashion drops</span>
            <span className="hero-subline-2 block">curated for India, streamed by your favorite creators,</span>
            <span className="hero-subline-3 block">delivered to your door.</span>
          </p>

          {/* CTA */}
          <div className="hero-text-rise reveal-delay-3 flex flex-col items-center gap-5" style={{ marginTop: '10px' }}>
            <a href="#join" className="btn btn-primary px-8 py-1.5 text-base font-semibold shadow-[0_12px_50px_rgba(242,95,43,0.35)] transition-transform duration-300 hover:scale-[1.02] md:px-9 md:py-2 md:text-lg">
              Be first — Join the Waitlist
            </a>

            {/* Trust Signal */}
            <p className="max-w-2xl px-4 text-center text-sm leading-relaxed text-[var(--color-text-secondary)]">5,000+ already on the list · Authentic Korean brands only · Trusted creator partners</p>
          </div>

          {/* Countdown */}
          <div className="hero-text-rise reveal-delay-4 mt-8 flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 backdrop-blur-xl md:mt-9 md:px-8 md:py-3.5">
            <span className="text-sm text-white/70">&nbsp; Launching around August 15, 2026</span>
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-primary)]" />
            <span className="text-sm font-semibold text-[var(--color-accent-primary)]">Countdown Live &nbsp;</span>
          </div>

        </div>
      </div>

      <style jsx>{`
        #hero .hero-text-rise {
          opacity: 0;
          transform: translate3d(0, 26px, 0);
          will-change: opacity, transform;
        }

        #hero .hero-text-rise > p {
          line-height: 1.75;
        }

        :global(.carousel-slide-active) #hero .hero-text-rise {
          animation: heroTextRise 920ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }

        @media (min-width: 768px) {
          #hero .hero-category-cluster {
            opacity: 0.88;
            filter: saturate(0.96) contrast(0.98);
          }

          #hero .hero-category-lower {
            opacity: 0.78;
          }
        }

        @keyframes heroTextRise {
          from {
            opacity: 0;
            transform: translate3d(0, 26px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @media (min-width: 1536px) and (min-height: 821px) {
          #hero .hero-content {
            transform: translateY(-5vh);
          }
        }

        @media (max-height: 820px) and (min-width: 768px) {
          #hero .hero-content {
            transform: translateY(-1.5vh);
          }

          #hero .hero-category-lower {
            animation: none !important;
            opacity: 0.52;
            transform: translateY(9vh) scale(0.76);
          }

          #hero .hero-category-lower-left {
            left: 18%;
          }

          #hero .hero-category-lower-right {
            right: 18%;
          }
        }

        @media (max-height: 720px) and (min-width: 768px) {
          #hero .hero-content {
            transform: translateY(-3vh);
          }

          #hero .hero-category-lower {
            animation: none !important;
            opacity: 0.18;
            transform: translateY(14vh) scale(0.62);
          }

          #hero .hero-category-upper {
            animation: none !important;
            opacity: 0.62;
            transform: scale(0.86);
          }
        }

        /* Reduce cluster size and add extra padding on Full HD-ish screens to avoid overlap */
        @media (min-width: 1000px) and (max-width: 1600px) {
          #hero {
            padding-top: 5.2rem;
            padding-bottom: 4rem;
          }

          #hero .hero-content {
            width: min(90vw, 1180px) !important;
            max-width: 1180px !important;
            margin: 0 auto !important;
            left: auto !important;
            right: auto !important;
            transform: none !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            display: flex !important;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          #hero .hero-content > div {
            width: 100%;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          #hero h1 {
            font-size: clamp(42px, 6vw, 72px) !important;
          }

          #hero .hero-text-rise > p,
          #hero .hero-subline-1,
          #hero .hero-subline-2,
          #hero .hero-subline-3 {
            font-size: 15px !important;
            line-height: 1.8 !important;
            max-width: 760px;
          }

          #hero .hero-category-cluster,
          #hero .hero-product-cluster {
            transform: scale(1.22) translateY(0) !important;
            transform-origin: center center !important;
            opacity: 1 !important;
          }

          #hero .hero-product-cluster.reveal-pop,
          #hero .hero-category-cluster.reveal-pop {
            animation: revealPop 980ms cubic-bezier(0.2, 0.9, 0.2, 1) both !important;
          }

          #hero .hero-category-upper.hero-category-left {
            left: 2% !important;
            top: 14% !important;
          }

          #hero .hero-category-upper.hero-category-right {
            right: 2% !important;
            top: 14% !important;
          }

          #hero .hero-category-lower-left {
            left: 5% !important;
            bottom: 8% !important;
          }

          #hero .hero-category-lower-right {
            right: 5% !important;
            bottom: 8% !important;
          }

          #hero .hero-product-cluster > div:last-child {
            font-size: 0.85rem !important;
            padding: 0.8rem 1.4rem !important;
          }

          #hero .hero-category-cluster {
            opacity: 0.92;
          }
        }

        @media (max-height: 640px) and (min-width: 768px) {
          #hero .hero-category-lower {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
