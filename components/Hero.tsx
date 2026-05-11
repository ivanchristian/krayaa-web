import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[85vh] items-center overflow-hidden bg-[var(--color-bg-primary)] pt-24 md:min-h-screen">
      {/* Animated Gradient Background */}
      <div className="hero-gradient absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(242,95,43,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,183,58,0.14),transparent_30%)]" />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.45))]" />

      {/* Center Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,95,43,0.14),transparent_45%)]" />

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-220px] top-[5%] h-[520px] w-[520px] rounded-full bg-[var(--color-accent-primary)]/10 blur-3xl" />

        <div className="absolute right-[-180px] top-[35%] h-[420px] w-[420px] rounded-full bg-[var(--color-accent-yellow)]/10 blur-3xl" />

        <div className="absolute bottom-[-240px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--color-accent-primary)]/10 blur-3xl" />
      </div>

      {/* MOBILE PRODUCT VISUALS */}
      <div className="pointer-events-none absolute inset-0 md:hidden">
        {/* Top Left */}
        <div className="floating absolute left-[-10px] top-[120px] rotate-[-12deg] opacity-80">
          <div className="relative h-[140px] w-[100px]">
            <Image src="/assets/product_1.png" alt="COSRX Product" fill priority className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]" />
          </div>
        </div>

        {/* Top Right */}
        <div className="floating-delay absolute right-[-20px] top-[110px] rotate-[12deg] opacity-80">
          <div className="relative h-[150px] w-[150px]">
            <Image src="/assets/product_4.png" alt="Laneige Product" fill className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]" />
          </div>
        </div>

        {/* Bottom Left */}
        <div className="floating absolute bottom-[120px] left-[-15px] rotate-[10deg] opacity-75">
          <div className="relative h-[130px] w-[100px]">
            <Image src="/assets/product_2.png" alt="Beauty of Joseon Product" fill className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]" />
          </div>
        </div>

        {/* Bottom Right */}
        <div className="floating-delay absolute bottom-[100px] right-[-10px] rotate-[-10deg] opacity-75">
          <div className="relative h-[130px] w-[110px]">
            <Image src="/assets/product_3.png" alt="EditB Product" fill className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]" />
          </div>
        </div>
      </div>

      {/* DESKTOP PRODUCT VISUALS */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {/* COSRX */}
        <div className="floating absolute left-[4%] top-[14%] rotate-[-10deg] opacity-95">
          <div className="relative h-[260px] w-[180px] xl:h-[340px] xl:w-[240px]">
            <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm" />

            <Image src="/assets/product_1.png" alt="COSRX Product" fill priority className="object-contain p-5 drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]" />
          </div>
        </div>

        {/* Laneige */}
        <div className="floating-delay absolute right-[4%] top-[14%] rotate-[12deg] opacity-95">
          <div className="relative h-[280px] w-[280px] xl:h-[360px] xl:w-[360px]">
            <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm" />

            <Image src="/assets/product_4.png" alt="Laneige Product" fill className="object-contain p-5 drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]" />
          </div>
        </div>

        {/* Beauty of Joseon */}
        <div className="floating absolute bottom-[8%] left-[10%] rotate-[8deg] opacity-95">
          <div className="relative h-[260px] w-[190px] xl:h-[340px] xl:w-[240px]">
            <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm" />

            <Image src="/assets/product_2.png" alt="Beauty of Joseon Product" fill className="object-contain p-5 drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]" />
          </div>
        </div>

        {/* EditB */}
        <div className="floating-delay absolute bottom-[10%] right-[10%] rotate-[-8deg] opacity-95">
          <div className="relative h-[250px] w-[200px] xl:h-[320px] xl:w-[250px]">
            <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm" />

            <Image src="/assets/product_3.png" alt="EditB Product" fill className="object-contain p-5 drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]" />
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
      <div className="container-wide relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          {/* Preheadline */}
          <div className="mb-10 md:mb-12">
            <span className="inline-block rounded-full border border-[var(--color-accent-primary)] bg-[var(--color-accent-primary)]/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent-primary)]">
              &nbsp; COMING Q3 2026 &nbsp;
            </span>
          </div>
          <br />
          {/* Headline */}
          <h1 className="max-w-6xl text-center text-[48px] font-black leading-[1.02] tracking-[-0.06em] text-white sm:text-[56px] md:text-[96px] md:leading-[1] lg:text-[120px]">Korea, Live.</h1>
          <br />
          {/* Subheadline */}

          <p className="mt-10 max-w-3xl px-2 text-[16px] leading-[1.95] text-[var(--color-text-secondary)] sm:text-[18px] md:mt-14 md:px-0 md:text-[22px] md:leading-[1.85]">
            Authentic K-beauty, K-pop merch, and Korean culture goods curated for India, streamed by your favorite creators, delivered to your door.
          </p>
          <br />
          {/* CTA */}
          <div className="mt-14 flex flex-col items-center gap-8 md:mt-20">
            <a href="#join" className="btn btn-primary px-8 py-4 text-base font-semibold shadow-[0_12px_50px_rgba(242,95,43,0.35)] transition-transform duration-300 hover:scale-[1.02] md:px-9 md:text-lg">
              Be first — Join the Waitlist
            </a>

            {/* Trust Signal */}
            <p className="max-w-2xl px-4 text-center text-sm leading-relaxed text-[var(--color-text-secondary)]">5,000+ already on the list · Authentic Korean brands only · Trusted creator partners</p>
          </div>
          {/* Countdown */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl md:mt-16 md:px-6 md:py-3.5">
            <span className="text-sm text-white/70">Launching around August 15, 2026</span>

            <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-primary)]" />

            <span className="text-sm font-semibold text-[var(--color-accent-primary)]">Countdown Live</span>
          </div>
        </div>
      </div>
    </section>
  );
}
