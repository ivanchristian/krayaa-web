export default function WhyKrayaa() {
  const pillars = [
    {
      number: '01',
      title: 'Authentic',
      description: 'Authentic COSRX from Seoul, not Mumbai gray-market. Direct relationships with Korean brands. No fakes.',
    },
    {
      number: '02',
      title: 'Curated',
      description: 'We pick the best—trending K-beauty, verified artists, trusted creators. You get signal, not noise.',
    },
    {
      number: '03',
      title: 'Live',
      description: 'Live shopping events with creators. Q&A with brand founders. Real-time scarcity. FOMO with substance.',
    },
  ];

  return (
    <section id="why-krayaa" style={{ backgroundColor: 'var(--color-bg-primary)' }} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[28px] md:text-[40px] lg:text-[56px] text-center mb-12 font-bold text-white">Why Krayaa?</h2>
        <p className="text-center text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-16">Three things set us apart in a crowded marketplace.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold text-[var(--color-accent-primary)] mb-4">{pillar.number}</div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">{pillar.title}</h3>
              <p className="text-[var(--color-text-secondary)]">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#join" className="btn btn-secondary">
            Join to Access Exclusive Benefits
          </a>
        </div>
      </div>
    </section>
  );
}
