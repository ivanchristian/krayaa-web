export default function Vision() {
  return (
    <section id="vision" className="py-20 md:py-32 bg-[var(--color-bg-card)]">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/3">
            <div className="aspect-square w-full max-w-[320px] mx-auto rounded-2xl border-2 border-[var(--color-accent-primary)] overflow-hidden bg-[var(--color-border)]">
              <div className="w-full h-full flex items-center justify-center text-gray-500">[Kunzang Photo]</div>
            </div>
            <p className="mt-6 text-center lg:text-left text-sm text-[var(--color-text-secondary)]">
              <span className="text-white font-bold">Kunzang Gyatso</span> • Founder • Seoul Resident
            </p>
          </div>

          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="mb-6 text-white">The Story</h2>
            <p className="text-xl md:text-2xl mb-8 text-white italic font-medium leading-snug">"I lived in Seoul for two years. I saw the gap between Korean quality and Indian access. Krayaa is the bridge."</p>
            <p className="text-[var(--color-text-secondary)] mb-6 text-lg">
              We aren't just a shop. We are building the <span className="text-[var(--color-accent-primary)] font-bold">trust layer</span> for K-culture in India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
