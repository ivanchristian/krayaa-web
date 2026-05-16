import Image from 'next/image';

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

      {/* MOBILE CATEGORY VISUALS */}
      <div className="pointer-events-none absolute inset-0 md:hidden">
        <div className="floating absolute left-[-28px] top-[122px] rotate-[-12deg] opacity-78">
          <div className="reveal-pop relative h-[150px] w-[116px]">
            <Image src="/assets/product_1.png" alt="Skin care product" fill priority className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]" />
          </div>
        </div>

        <div className="floating-delay absolute right-[-34px] top-[118px] rotate-[12deg] opacity-78">
          <div className="reveal-pop reveal-delay-1 relative h-[152px] w-[152px]">
            <Image src="/assets/product_4.png" alt="Makeup and beauty product" fill className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]" />
          </div>
        </div>

        <div className="floating absolute bottom-[132px] left-[-22px] rotate-[9deg] opacity-72">
          <div className="reveal-pop reveal-delay-2 relative h-[130px] w-[96px]">
            <Image src="/assets/product_2.png" alt="Makeup product" fill className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]" />
          </div>
        </div>

        <div className="floating-delay absolute bottom-[122px] right-[-18px] rotate-[-9deg] opacity-72">
          <div className="reveal-pop reveal-delay-3 relative h-[126px] w-[108px]">
            <Image src="/assets/product_3.png" alt="Skin care product" fill className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]" />
          </div>
        </div>

        <div className="floating absolute left-[25%] top-[94px] rotate-[8deg] opacity-72">
          <div className="reveal-pop reveal-delay-4 relative h-[98px] w-[72px]">
            <Image src="/assets/product_5.png" alt="Pokemon TCG card" fill className="object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.55)]" />
          </div>
        </div>

        <div className="floating-delay absolute bottom-[86px] right-[25%] rotate-[-10deg] opacity-72">
          <div className="reveal-pop reveal-delay-5 relative h-[98px] w-[72px]">
            <Image src="/assets/product_6.png" alt="Pokemon TCG card" fill className="object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.55)]" />
          </div>
        </div>

        <div className="floating-delay absolute bottom-[212px] left-[20%] rotate-[-8deg] opacity-62">
          <div className="reveal-pop reveal-delay-6 relative h-[108px] w-[86px]">
            <Image src="/assets/product_9.png" alt="K-pop album" fill className="object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.55)]" />
          </div>
        </div>

        <div className="floating absolute right-[20%] top-[230px] rotate-[8deg] opacity-62">
          <div className="reveal-pop reveal-delay-7 relative h-[108px] w-[86px]">
            <Image src="/assets/product_10.png" alt="K-pop light stick" fill className="object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.55)]" />
          </div>
        </div>

      </div>

      {/* DESKTOP CATEGORY VISUALS */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {/* Skin care */}
        <div className="hero-beauty-card hero-beauty-card-left floating absolute left-[3%] top-[13%] lg:left-[4%]">
          <div className="reveal-pop relative h-[315px] w-[245px] rotate-[-9deg] xl:h-[390px] xl:w-[305px]">
            <div className="absolute -inset-4 rounded-[42px] bg-[radial-gradient(circle_at_45%_28%,rgba(242,95,43,0.18),transparent_58%)] blur-xl" />
            <div className="absolute inset-0 rounded-[34px] border border-white/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.1),rgba(255,255,255,0.025)_42%,rgba(242,95,43,0.08))] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm" />
            <Image src="/assets/product_1.png" alt="Skin care product" fill priority className="object-contain p-8 drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/42 text-[10px] font-black uppercase tracking-[0.2em] text-white/62 backdrop-blur-md" style={{ padding: '7px 18px' }}>Skin care</div>
          </div>
        </div>

        {/* Makeup */}
        <div className="hero-beauty-card hero-beauty-card-right floating-delay absolute right-[3%] top-[12%] lg:right-[4%]">
          <div className="reveal-pop reveal-delay-1 relative h-[330px] w-[330px] rotate-[10deg] xl:h-[405px] xl:w-[405px]">
            <div className="absolute -inset-5 rounded-[52px] bg-[radial-gradient(circle_at_52%_35%,rgba(244,183,58,0.16),transparent_58%)] blur-xl" />
            <div className="absolute inset-0 rounded-[42px] border border-white/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.1),rgba(255,255,255,0.024)_44%,rgba(244,183,58,0.07))] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm" />
            <Image src="/assets/product_4.png" alt="Makeup and beauty product" fill className="object-contain p-8 drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]" />
            <div className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-black/42 text-[10px] font-black uppercase tracking-[0.2em] text-white/62 backdrop-blur-md" style={{ padding: '7px 18px' }}>Makeup</div>
          </div>
        </div>

        {/* Makeup + skin care companion */}
        <div className="hero-beauty-card hero-beauty-card-low hero-beauty-card-low-left floating absolute bottom-[5%] left-[8%]">
          <div className="reveal-pop reveal-delay-2 relative h-[255px] w-[205px] rotate-[7deg] xl:h-[325px] xl:w-[260px]">
            <div className="absolute inset-0 rounded-[30px] border border-white/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.085),rgba(255,255,255,0.02),rgba(242,95,43,0.07))] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_26px_70px_rgba(0,0,0,0.34)] backdrop-blur-sm" />
            <Image src="/assets/product_2.png" alt="Makeup product" fill className="object-contain p-7 drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]" />
          </div>
        </div>

        <div className="hero-beauty-card hero-beauty-card-low hero-beauty-card-low-right floating-delay absolute bottom-[6%] right-[8%]">
          <div className="reveal-pop reveal-delay-3 relative h-[245px] w-[210px] rotate-[-7deg] xl:h-[315px] xl:w-[265px]">
            <div className="absolute inset-0 rounded-[30px] border border-white/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.085),rgba(255,255,255,0.02),rgba(244,183,58,0.06))] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_26px_70px_rgba(0,0,0,0.34)] backdrop-blur-sm" />
            <Image src="/assets/product_3.png" alt="Skin care product" fill className="object-contain p-7 drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]" />
          </div>
        </div>

        {/* TCG / decks */}
        <div className="hero-culture-cluster hero-culture-cluster-left floating absolute left-[26%] bottom-[10%] opacity-90">
          <div className="reveal-pop reveal-delay-4 relative h-[230px] w-[286px] xl:h-[270px] xl:w-[330px]">
            <div className="absolute left-0 top-10 h-[156px] w-[112px] rotate-[-9deg] xl:h-[190px] xl:w-[136px]">
              <Image src="/assets/product_5.png" alt="Pokemon TCG card" fill className="object-contain drop-shadow-[0_24px_46px_rgba(0,0,0,0.6)]" />
            </div>
            <div className="absolute left-[82px] top-2 h-[164px] w-[118px] rotate-[5deg] xl:left-[98px] xl:h-[198px] xl:w-[142px]">
              <Image src="/assets/product_6.png" alt="Pokemon TCG card" fill className="object-contain drop-shadow-[0_24px_46px_rgba(0,0,0,0.6)]" />
            </div>
            <div className="absolute right-4 top-14 h-[146px] w-[104px] rotate-[12deg] xl:h-[176px] xl:w-[126px]">
              <Image src="/assets/product_7.png" alt="Pokemon TCG card" fill className="object-contain drop-shadow-[0_24px_46px_rgba(0,0,0,0.6)]" />
            </div>
            <div className="absolute bottom-0 left-12 rounded-full border border-[var(--color-accent-yellow)]/30 bg-black/40 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--color-accent-yellow)] backdrop-blur-md" style={{ padding: '8px 20px' }}>TCG / decks</div>
          </div>
        </div>

        {/* K-pop merch */}
        <div className="hero-culture-cluster hero-culture-cluster-right floating-delay absolute right-[27%] bottom-[10%] opacity-86">
          <div className="reveal-pop reveal-delay-5 relative h-[230px] w-[310px] xl:h-[270px] xl:w-[360px]">
            <div className="absolute left-0 top-6 h-[178px] w-[142px] rotate-[-8deg] xl:h-[218px] xl:w-[174px]">
              <Image src="/assets/product_9.png" alt="K-pop album" fill className="object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.58)]" />
            </div>
            <div className="absolute right-10 top-0 h-[166px] w-[166px] rotate-[8deg] xl:h-[204px] xl:w-[204px]">
              <Image src="/assets/product_10.png" alt="K-pop light stick" fill className="object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.58)]" />
            </div>
            <div className="absolute bottom-0 right-8 rounded-full border border-[var(--color-accent-primary)]/35 bg-black/40 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--color-accent-primary)] backdrop-blur-md" style={{ padding: '8px 20px' }}>K-pop merch</div>
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
          <div className="reveal-rise mb-5 md:mb-7">
            <span className="inline-block rounded-full border border-[var(--color-accent-primary)] bg-[var(--color-accent-primary)]/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent-primary)]">
              &nbsp; COMING Q3 2026 &nbsp;
            </span>
          </div>
          {/* Headline */}
          <h1 className="reveal-rise reveal-delay-1 max-w-6xl text-center text-[48px] font-black leading-[1.02] tracking-[-0.06em] text-white sm:text-[56px] md:text-[96px] md:leading-[1] lg:text-[120px]">Korea, Live.</h1>
          {/* Subheadline */}

          <p className="reveal-rise reveal-delay-2 mt-6 max-w-3xl px-2 text-[16px] leading-[1.75] text-[var(--color-text-secondary)] sm:text-[18px] md:mt-8 md:px-0 md:text-[22px] md:leading-[1.7]">
            Authentic K-beauty, K-pop merch, and Korean culture goods curated for India, streamed by your favorite creators, delivered to your door.
          </p>
          {/* CTA */}
          <div className="reveal-rise reveal-delay-3 flex flex-col items-center gap-5" style={{ marginTop: '10px' }}>
            <a href="#join" className="btn btn-primary px-8 py-1.5 text-base font-semibold shadow-[0_12px_50px_rgba(242,95,43,0.35)] transition-transform duration-300 hover:scale-[1.02] md:px-9 md:py-2 md:text-lg">
              Be first — Join the Waitlist
            </a>

            {/* Trust Signal */}
            <p className="max-w-2xl px-4 text-center text-sm leading-relaxed text-[var(--color-text-secondary)]">5,000+ already on the list · Authentic Korean brands only · Trusted creator partners</p>
          </div>
          {/* Countdown */}
          <div className="reveal-grow reveal-delay-4 mt-8 flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 backdrop-blur-xl md:mt-9 md:px-8 md:py-3.5">
            <span className="text-sm text-white/70">&nbsp; Launching around August 15, 2026</span>

            <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-primary)]" />

            <span className="text-sm font-semibold text-[var(--color-accent-primary)]">Countdown Live &nbsp;</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1536px) and (min-height: 821px) {
          #hero .hero-content {
            transform: translateY(-5vh);
          }
        }

        @media (max-height: 820px) and (min-width: 768px) {
          #hero .hero-content {
            transform: translateY(-1.5vh);
          }

          #hero .hero-culture-cluster {
            animation: none !important;
            opacity: 0.52;
            transform: translateY(9vh) scale(0.76);
          }

          #hero .hero-culture-cluster-left {
            left: 25%;
          }

          #hero .hero-culture-cluster-right {
            right: 25%;
          }

          #hero .hero-beauty-card-low {
            animation: none !important;
            opacity: 0.42;
            transform: translateY(4vh) scale(0.82);
          }
        }

        @media (max-height: 720px) and (min-width: 768px) {
          #hero .hero-content {
            transform: translateY(-3vh);
          }

          #hero .hero-culture-cluster {
            animation: none !important;
            opacity: 0.18;
            transform: translateY(14vh) scale(0.62);
          }

          #hero .hero-beauty-card-low {
            animation: none !important;
            opacity: 0.2;
            transform: translateY(8vh) scale(0.7);
          }

          #hero .hero-beauty-card-left {
            animation: none !important;
            opacity: 0.62;
            transform: translateX(-2vw) scale(0.86);
          }

          #hero .hero-beauty-card-right {
            animation: none !important;
            opacity: 0.62;
            transform: translateX(2vw) scale(0.86);
          }
        }

        @media (max-height: 640px) and (min-width: 768px) {
          #hero .hero-culture-cluster,
          #hero .hero-beauty-card-low {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
