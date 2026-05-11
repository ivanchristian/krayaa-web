export default function Press() {
  const testimonials = [
    {
      quote: 'Krayaa is solving a real problem—authentic K-culture access in India.',
      author: 'K-Beauty Buyer, Delhi',
      role: 'Waitlist Signup',
    },
    {
      quote: 'Finally a platform I can trust for authentic Korean products.',
      author: 'Content Creator, Mumbai',
      role: 'Creator Partner',
    },
    {
      quote: 'The market for K-culture in India is huge. Krayaa has the right approach.',
      author: 'Beauty Industry Expert',
      role: 'Advisor',
    },
  ];

  const partners = [
    { name: 'COSRX', type: 'K-Beauty' },
    { name: 'Medicube', type: 'K-Beauty' },
    { name: 'Amorepacific', type: 'Beauty' },
  ];

  return (
    <section id="press" style={{ backgroundColor: 'var(--color-bg-primary)' }} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-4 text-[var(--color-text-primary)]">Trusted By</h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-16">Real people, real partnerships, real momentum.</p>

        {/* Partner Logos Section */}
        <div className="mb-20">
          <p className="text-center text-sm font-semibold text-[var(--color-text-secondary)] mb-8">PARTNER BRANDS & PLATFORMS</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {partners.map((partner, idx) => (
              <div key={idx} className="px-6 py-4 rounded-lg border border-[var(--color-border)]" style={{ backgroundColor: 'rgba(10, 4, 5, 0.6)' }}>
                <p className="font-semibold text-[var(--color-text-primary)]">{partner.name}</p>
                <p className="text-xs text-[var(--color-text-secondary)]">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <p className="text-center text-sm font-semibold text-[var(--color-text-secondary)] mb-8">WHAT PEOPLE ARE SAYING</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 rounded-lg border border-[var(--color-border)]" style={{ backgroundColor: 'rgba(10, 4, 5, 0.6)' }}>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-[var(--color-accent-yellow)]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-6 italic text-[var(--color-text-primary)]">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[var(--color-text-primary)]">{testimonial.author}</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credibility Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          {[
            { number: '5,000+', label: 'Waitlist Members' },
            { number: '50+', label: 'Creator Partners' },
            { number: '20+', label: 'Brand Partners' },
            { number: '100%', label: 'Authentic Products' },
          ].map((stat, idx) => (
            <div key={idx}>
              <p className="text-3xl font-bold text-[var(--color-accent-primary)]">{stat.number}</p>
              <p className="text-sm text-[var(--color-text-secondary)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
