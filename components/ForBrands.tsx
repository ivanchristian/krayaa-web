'use client';

import { useState } from 'react';

export default function ForBrands() {
  const [formData, setFormData] = useState({
    brandName: '',
    email: '',
    category: '',
    website: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Brand inquiry:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ brandName: '', email: '', category: '', website: '', message: '' });
    }, 3000);
  };

  return (
    <section id="brands" style={{ backgroundColor: 'var(--color-bg-card)' }} className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-[var(--color-text-primary)]">For Korean Brands & Distributors</h2>
        <p className="text-[var(--color-text-secondary)] mb-12 text-lg">Access 5,000+ engaged Indian buyers. Launch your brand in India's fastest-growing K-culture market.</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]">Why Krayaa?</h3>
            <ul className="space-y-4">
              {[
                'Direct access to verified Indian buyers',
                'Live streaming partnership opportunities',
                'Co-branded content and marketing',
                'Real-time sales analytics',
                'Support with localization (Hindi, Hinglish)',
                'Zero upfront costs for Q3 launch',
              ].map((benefit, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-[var(--color-accent-primary)] font-bold flex-shrink-0">★</span>
                  <span className="text-[var(--color-text-secondary)]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="p-8 rounded-lg border border-[var(--color-border)]" style={{ backgroundColor: 'rgba(26, 15, 17, 0.8)' }}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl text-[var(--color-success)] mb-4">✓</div>
                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Inquiry Received!</h4>
                <p className="text-[var(--color-text-secondary)]">Our partnerships team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="brand-name" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                    Brand Name *
                  </label>
                  <input
                    id="brand-name"
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)]"
                  />
                </div>

                <div>
                  <label htmlFor="brand-email" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                    Email *
                  </label>
                  <input
                    id="brand-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)]"
                  />
                </div>

                <div>
                  <label htmlFor="brand-category" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                    Category *
                  </label>
                  <select
                    id="brand-category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)]"
                  >
                    <option value="">Select category</option>
                    <option value="beauty">Beauty & Skincare</option>
                    <option value="makeup">Makeup</option>
                    <option value="kpop">K-Pop Merch</option>
                    <option value="fashion">Fashion</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="food">Food & Beverage</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="brand-website" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                    Website
                  </label>
                  <input
                    id="brand-website"
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full px-4 py-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)]"
                  />
                </div>

                <div>
                  <label htmlFor="brand-message" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="brand-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand..."
                    rows={3}
                    className="w-full px-4 py-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)]"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full mt-6">
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
