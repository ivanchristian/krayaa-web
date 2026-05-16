'use client';

import Image from 'next/image';
import { useState } from 'react';

const benefits = [
  'End-to-end India distribution: legal, customs, fulfillment, customer support',
  'Direct access to vetted Indian creator partners across K-beauty and K-pop fandoms',
  'CDSCO + BIS compliance handled - no regulatory headaches',
  'Curated, brand-safe distribution - no gray-market dilution',
  'Transparent reporting on every sale, every creator, every campaign',
];

const metrics = [
  { value: 'CDSCO', label: 'compliance support' },
  { value: 'India', label: 'market entry' },
  { value: 'Creators', label: 'launch distribution' },
];

type BrandForm = {
  brandName: string;
  contact: string;
  website: string;
  category: string;
  email: string;
  about: string;
};

const initialForm: BrandForm = {
  brandName: '',
  contact: '',
  website: '',
  category: '',
  email: '',
  about: '',
};

function BenefitMark({ index }: { index: number }) {
  const paths = [
    'M6 7.5h12M6 12h12M6 16.5h7M5 4h14v16H5z',
    'M7 17c1.7-2.4 8.3-2.4 10 0M9 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0zM4 20c2.2-4.2 13.8-4.2 16 0',
    'M12 3.5l6.5 3v5.2c0 4-2.6 7.2-6.5 8.8-3.9-1.6-6.5-4.8-6.5-8.8V6.5l6.5-3zM9 12l2 2 4-4',
    'M5 8l7-4 7 4v8l-7 4-7-4V8zM8.5 10l3.5 2 3.5-2M12 12v4',
    'M5 18V7M5 18h14M9 15v-4M13 15V9M17 15v-7',
  ];

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d={paths[index]} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
    </svg>
  );
}

export default function ForBrands() {
  const [formData, setFormData] = useState<BrandForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: name === 'about' ? value.slice(0, 300) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0b0505_0%,#17100b_48%,#1a0f11_100%)] py-10 text-white sm:py-12 lg:py-10"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-2 bg-[linear-gradient(180deg,var(--color-accent-yellow),rgba(244,183,58,0.1),var(--color-accent-yellow))] lg:block" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(244,183,58,0.18),transparent_30%),radial-gradient(circle_at_86%_76%,rgba(242,95,43,0.12),transparent_32%)]" />
      <div className="brand-map pointer-events-none absolute inset-0 opacity-[0.09]" />

      <div className="container-wide relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.88fr_0.82fr] lg:gap-10 xl:gap-14">
          <div className="brand-copy">
            <span className="inline-flex rounded-full border border-[var(--color-accent-yellow)]/42 bg-[var(--color-accent-yellow)]/12 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.26em] text-[var(--color-accent-yellow)]">
              For Brands
            </span>

            <h2 className="mt-3 max-w-[760px] text-[34px] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-[44px] md:text-[54px] lg:text-[58px]">
              Korean Brand? Looking for India Entry?
            </h2>

            <p className="mt-4 max-w-[760px] text-[15px] leading-[1.65] text-white/68 sm:text-[17px] lg:text-[16px]">
              We are the curated India partner you&apos;ve been looking for. We handle CDSCO compliance, customs, last-mile, and creator distribution. You ship from Seoul. We do the rest.
            </p>

            <div className="mt-6 grid gap-4 xl:grid-cols-[1fr_0.78fr] xl:items-stretch">
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="brand-benefit group grid grid-cols-[auto_1fr] gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-3.5 shadow-[0_18px_42px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent-yellow)]/45 hover:bg-[var(--color-accent-yellow)]/[0.07]"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent-yellow)] text-[#150908] shadow-[0_12px_24px_rgba(244,183,58,0.2)] transition duration-300 group-hover:-rotate-3">
                      <BenefitMark index={index} />
                    </span>
                    <span className="self-center text-[13.5px] font-semibold leading-[1.35] text-white/78 sm:text-[14px]">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="relative min-h-[260px] overflow-hidden rounded-xl border border-[var(--color-accent-yellow)]/20 bg-black/35 shadow-[0_24px_70px_rgba(0,0,0,0.38)] sm:min-h-[300px] xl:min-h-0">
                <Image
                  src="https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Premium skincare bottles for brand distribution"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover opacity-72 saturate-[0.78]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,5,5,0.12),rgba(11,5,5,0.86))]" />
                <div className="absolute left-4 right-4 top-4 grid grid-cols-3 gap-2">
                  {metrics.map((metric) => (
                    <div key={metric.value} className="rounded-lg border border-white/12 bg-black/36 px-2.5 py-2 backdrop-blur-md">
                      <div className="text-[15px] font-black leading-none text-[var(--color-accent-yellow)]">{metric.value}</div>
                      <div className="mt-1 text-[9px] font-bold uppercase leading-[1.15] tracking-[0.12em] text-white/48">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/12 bg-black/42 p-4 backdrop-blur-md">
                  <p className="text-[24px] font-black leading-[1] tracking-[-0.04em] text-white sm:text-[30px]">Seoul supply, India demand, one accountable partner.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="brand-form relative">
            <div className="absolute -inset-3 rounded-[28px] bg-[conic-gradient(from_160deg,rgba(244,183,58,0.3),transparent,rgba(242,95,43,0.16),rgba(244,183,58,0.24))] opacity-70 blur-xl" />
            <div className="relative overflow-hidden rounded-xl border border-white/14 bg-[rgba(10,4,5,0.78)] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.52)] backdrop-blur-xl sm:p-5 lg:p-6">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--color-accent-yellow),rgba(244,183,58,0.25),transparent)]" />

              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--color-accent-yellow)]">Brand partnership</div>
                  <h3 className="mt-1 text-[26px] font-black leading-none tracking-[-0.04em] text-white sm:text-[30px]">Enter India cleanly</h3>
                </div>
                <div className="rounded-full border border-white/12 bg-white/[0.055] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/56">
                  Founder reviewed
                </div>
              </div>

              {submitted ? (
                <div className="brand-success flex min-h-[466px] flex-col items-center justify-center rounded-lg border border-[var(--color-success)]/25 bg-[var(--color-success)]/10 p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-success)] text-[#051208]">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
                      <path d="M5.5 12.5L10 17L18.5 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
                    </svg>
                  </div>
                  <h4 className="text-[28px] font-black leading-none tracking-[-0.04em] text-white">Thanks.</h4>
                  <p className="mt-3 max-w-sm text-[15px] leading-[1.55] text-white/72">
                    Founder will respond personally within 3 business days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-white/14 px-5 py-2.5 text-sm font-bold text-white/82 transition hover:border-[var(--color-accent-yellow)]/50 hover:text-white"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-3.5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="brand-name" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                        Brand name *
                      </label>
                      <input
                        id="brand-name"
                        type="text"
                        name="brandName"
                        value={formData.brandName}
                        onChange={handleChange}
                        required
                        className="h-11 w-full rounded-lg border border-white/12 bg-white/[0.06] px-3.5 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[var(--color-accent-yellow)] focus:bg-white/[0.09]"
                        placeholder="Brand name"
                      />
                    </div>

                    <div>
                      <label htmlFor="brand-contact" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                        Your name + role *
                      </label>
                      <input
                        id="brand-contact"
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="h-11 w-full rounded-lg border border-white/12 bg-white/[0.06] px-3.5 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[var(--color-accent-yellow)] focus:bg-white/[0.09]"
                        placeholder="Name, role"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="brand-website" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                      Brand website / Instagram *
                    </label>
                    <input
                      id="brand-website"
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      required
                      className="h-11 w-full rounded-lg border border-white/12 bg-white/[0.06] px-3.5 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[var(--color-accent-yellow)] focus:bg-white/[0.09]"
                      placeholder="https://... or @brand"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="brand-category" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                        Category *
                      </label>
                      <select
                        id="brand-category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="h-11 w-full rounded-lg border border-white/12 bg-[#120708] px-3.5 text-sm text-white outline-none transition focus:border-[var(--color-accent-yellow)]"
                      >
                        <option value="">Select category</option>
                        <option value="K-beauty">K-beauty</option>
                        <option value="K-pop merch">K-pop merch</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="brand-email" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                        Email *
                      </label>
                      <input
                        id="brand-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="h-11 w-full rounded-lg border border-white/12 bg-white/[0.06] px-3.5 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[var(--color-accent-yellow)] focus:bg-white/[0.09]"
                        placeholder="you@brand.com"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <label htmlFor="brand-about" className="block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                        Tell us about your brand
                      </label>
                      <span className="text-[11px] font-semibold text-white/38">{formData.about.length}/300</span>
                    </div>
                    <textarea
                      id="brand-about"
                      name="about"
                      value={formData.about}
                      onChange={handleChange}
                      maxLength={300}
                      rows={4}
                      className="min-h-[106px] w-full resize-none rounded-lg border border-white/12 bg-white/[0.06] px-3.5 py-3 text-sm leading-[1.45] text-white outline-none transition placeholder:text-white/28 focus:border-[var(--color-accent-yellow)] focus:bg-white/[0.09]"
                      placeholder="What do you sell, where are you distributed today, and what do you want from India?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--color-accent-yellow)] px-5 text-sm font-black text-[#150908] shadow-[0_18px_48px_rgba(244,183,58,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffd166]"
                  >
                    Inquire About Partnership
                  </button>

                  <p className="text-center text-[11px] leading-[1.45] text-white/42">
                    Best for Korean brands, distributors, and licensed operators exploring India.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .brand-map {
          background-image:
            linear-gradient(115deg, transparent 0 42%, rgba(244,183,58,0.2) 42.2%, transparent 42.7%),
            linear-gradient(65deg, transparent 0 58%, rgba(255,255,255,0.12) 58.2%, transparent 58.8%);
          background-size: 180px 180px;
          animation: brandMap 30s linear infinite;
        }

        .brand-copy,
        .brand-form {
          animation: brandRise 640ms ease both;
        }

        .brand-form {
          animation-delay: 120ms;
        }

        .brand-benefit {
          animation: brandRise 560ms ease both;
        }

        .brand-success {
          animation: brandPop 420ms ease both;
        }

        @keyframes brandMap {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-180px, -180px, 0); }
        }

        @keyframes brandRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes brandPop {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-height: 780px) and (min-width: 1024px) {
          #brands {
            padding-block: 1.25rem;
          }

          #brands h2 {
            font-size: 46px;
          }

          #brands .brand-benefit {
            padding: 0.65rem;
          }

          #brands textarea {
            min-height: 76px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-map,
          .brand-copy,
          .brand-form,
          .brand-benefit,
          .brand-success {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
