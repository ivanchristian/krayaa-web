'use client';

import { useState } from 'react';

export default function ForCreators() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    platform: '',
    followers: '',
    niche: '',
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
    // In a real app, send to backend/email service
    console.log('Creator signup:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', platform: '', followers: '', niche: '' });
    }, 3000);
  };

  return (
    <section id="creators" style={{ backgroundColor: 'var(--color-bg-primary)' }} className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-[var(--color-text-primary)]">For K-Culture Creators</h2>
        <p className="text-[var(--color-text-secondary)] mb-12 text-lg">Partner with Krayaa. Host live shopping. Earn commissions. Build your audience.</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]">What You Get</h3>
            <ul className="space-y-4">
              {['Commissions on every sale you drive', 'Early access to limited products', 'Co-marketing with Krayaa', 'Direct access to Korean brands', 'Weekly live shopping slots', 'Community of 1000+ creators'].map((benefit, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-[var(--color-success)] font-bold flex-shrink-0">✓</span>
                  <span className="text-[var(--color-text-secondary)]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="p-8 rounded-lg border border-[var(--color-border)]" style={{ backgroundColor: 'rgba(10, 4, 5, 0.6)' }}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl text-[var(--color-success)] mb-4">✓</div>
                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Thanks for applying!</h4>
                <p className="text-[var(--color-text-secondary)]">We'll review your application and get back to you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="creator-name" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                    Name *
                  </label>
                  <input
                    id="creator-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)]"
                  />
                </div>

                <div>
                  <label htmlFor="creator-email" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                    Email *
                  </label>
                  <input
                    id="creator-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)]"
                  />
                </div>

                <div>
                  <label htmlFor="creator-platform" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                    Primary Platform *
                  </label>
                  <select
                    id="creator-platform"
                    name="platform"
                    value={formData.platform}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)]"
                  >
                    <option value="">Select platform</option>
                    <option value="instagram">Instagram</option>
                    <option value="youtube">YouTube</option>
                    <option value="tiktok">TikTok</option>
                    <option value="twitch">Twitch</option>
                    <option value="pinterest">Pinterest</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="creator-followers" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                    Followers *
                  </label>
                  <input
                    id="creator-followers"
                    type="text"
                    name="followers"
                    value={formData.followers}
                    onChange={handleChange}
                    placeholder="e.g., 50K"
                    required
                    className="w-full px-4 py-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)]"
                  />
                </div>

                <div>
                  <label htmlFor="creator-niche" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                    Content Niche *
                  </label>
                  <input
                    id="creator-niche"
                    type="text"
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    placeholder="e.g., K-beauty, K-pop, Fashion"
                    required
                    className="w-full px-4 py-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)]"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full mt-6">
                  Apply Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
