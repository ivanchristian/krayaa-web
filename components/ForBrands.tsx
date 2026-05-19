'use client';

import Image from 'next/image';
import { useState } from 'react';

const benefits = [
  'Compliance, customs, fulfillment, and customer support handled end-to-end.',
  'Creator-led launch distribution across K-beauty and K-pop fandoms.',
  'Curated, brand-safe drops with transparent reporting from day one.',
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

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="fb-label">
      {children}
    </label>
  );
}

function CustomSelect({
  id,
  label,
  value,
  placeholder,
  options,
  isOpen,
  hasError,
  onToggle,
  onSelect,
}: {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  options: string[];
  isOpen: boolean;
  hasError: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="fb-field fb-custom-field">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <button
        id={id}
        type="button"
        className={`fb-custom-trigger ${hasError && !value ? 'fb-custom-error' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{value || placeholder}</span>
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5.5 7.5L10 12L14.5 7.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>

      {isOpen ? (
        <div className="fb-custom-options" role="listbox" aria-labelledby={id}>
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={value === option}
              className={value === option ? 'is-selected' : ''}
              onClick={() => onSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function ForBrands() {
  const [formData, setFormData] = useState<BrandForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [openSelect, setOpenSelect] = useState<'category' | null>(null);
  const [selectError, setSelectError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((current) => ({
      ...current,
      [name]: name === 'about' ? value.slice(0, 300) : value,
    }));
  };

  const handleCustomSelect = (value: string) => {
    setFormData((current) => ({ ...current, category: value }));
    setOpenSelect(null);
    setSelectError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.category) {
      setSelectError(true);
      setOpenSelect('category');
      return;
    }

    setSelectError(false);
    setOpenSelect(null);
    setSubmitted(true);
    setFormData(initialForm);
  };

  const formContent = (
    <>
      <div className="fb-form-top">
        <div>
          <span>Brand partnership</span>
          <h3>Enter India cleanly</h3>
        </div>
        <strong>Founder reviewed</strong>
      </div>

      {submitted ? (
        <div className="fb-success">
          <div className="fb-success-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5.5 12.5L10 17L18.5 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
            </svg>
          </div>
          <h4>Thanks.</h4>
          <p>Founder will respond personally within 3 business days.</p>
          <button type="button" onClick={() => setSubmitted(false)}>
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="fb-form">
          <div className="fb-field-grid">
            <div className="fb-field">
              <FieldLabel htmlFor="brand-name">Brand name *</FieldLabel>
              <input id="brand-name" type="text" name="brandName" value={formData.brandName} onChange={handleChange} required placeholder="Brand name" />
            </div>

            <div className="fb-field">
              <FieldLabel htmlFor="brand-contact">Your name + role *</FieldLabel>
              <input id="brand-contact" type="text" name="contact" value={formData.contact} onChange={handleChange} required placeholder="Name, role" />
            </div>
          </div>

          <div className="fb-field">
            <FieldLabel htmlFor="brand-website">Brand website / Instagram *</FieldLabel>
            <input id="brand-website" type="text" name="website" value={formData.website} onChange={handleChange} required placeholder="https://... or @brand" />
          </div>

          <div className="fb-field-grid">
            <CustomSelect
              id="brand-category"
              label="Category *"
              value={formData.category}
              placeholder="Select category"
              options={['K-beauty', 'K-pop merch', 'Lifestyle', 'Other']}
              isOpen={openSelect === 'category'}
              hasError={selectError}
              onToggle={() => setOpenSelect((current) => (current === 'category' ? null : 'category'))}
              onSelect={handleCustomSelect}
            />

            <div className="fb-field">
              <FieldLabel htmlFor="brand-email">Email *</FieldLabel>
              <input id="brand-email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@brand.com" />
            </div>
          </div>

          <div className="fb-field">
            <div className="fb-label-row">
              <FieldLabel htmlFor="brand-about">Tell us about your brand</FieldLabel>
              <span>{formData.about.length}/300</span>
            </div>
            <textarea
              id="brand-about"
              name="about"
              value={formData.about}
              onChange={handleChange}
              maxLength={300}
              rows={4}
              placeholder="What do you sell, where are you distributed today, and what do you want from India?"
            />
          </div>

          <button type="submit" className="fb-submit">
            Inquire About Partnership
          </button>

          <p className="fb-form-note">Best for Korean brands, distributors, and licensed operators exploring India.</p>
        </form>
      )}
    </>
  );

  return (
    <section id="brands" className="fb-section">
      <Image src="/assets/background_whykrayaa.png" alt="" fill sizes="100vw" className="fb-bg-image" />
      <div className="fb-overlay" />
      <div className="fb-noise" />

      <div className="container-wide fb-container">
        <div className="fb-shell">
          <div className="fb-copy">
            <span className="fb-kicker">For brands</span>
            <h2>Korean Brand? Looking for India Entry?</h2>
            <p className="fb-subhead">A curated India launch partner for compliance, customs, creator distribution, and brand-safe demand.</p>

            <button type="button" className="fb-mobile-inquire" onClick={() => setIsFormOpen(true)}>
              Inquire About Partnership
            </button>

            <div className="fb-hero-card">
              <div className="fb-product-stage">
                <Image src="/assets/product_16.png" alt="K-beauty brand product" width={210} height={210} />
                <Image src="/assets/product_9.png" alt="K-pop merchandise" width={190} height={190} />
                <Image src="/assets/product_17.png" alt="Korean fashion item" width={190} height={190} />
              </div>

              <div className="fb-hero-card-copy">
                <span>Launch lane</span>
                <strong>Seoul supply. India demand. One accountable partner.</strong>
              </div>
            </div>

            <div className="fb-proof-row">
              <div>
                <strong>CDSCO</strong>
                <span>Compliance support</span>
              </div>
              <div>
                <strong>Customs</strong>
                <span>Import workflow</span>
              </div>
              <div>
                <strong>Creators</strong>
                <span>Launch demand</span>
              </div>
            </div>

            <div className="fb-benefits">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="fb-benefit" style={{ animationDelay: `${index * 90}ms` }}>
                  <span>{`0${index + 1}`}</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fb-form-wrap">
            <div className="fb-form-card">{formContent}</div>
          </div>
        </div>
      </div>

      {isFormOpen ? (
        <div className="fb-modal" role="dialog" aria-modal="true">
          <div className="fb-modal-card">
            <button type="button" aria-label="Close brand inquiry" className="fb-modal-close" onClick={() => setIsFormOpen(false)}>
              x
            </button>
            {formContent}
          </div>
        </div>
      ) : null}

      <style>{`
        .fb-section {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          background: var(--color-bg-primary);
          color: white;
          isolation: isolate;
        }

        .fb-bg-image {
          pointer-events: none;
          object-fit: cover;
          opacity: 0.64;
        }

        .fb-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(10,4,5,0.9), rgba(10,4,5,0.54) 46%, rgba(10,4,5,0.92)),
            radial-gradient(circle at 20% 28%, rgba(244,183,58,0.24), transparent 34%),
            radial-gradient(circle at 78% 72%, rgba(242,95,43,0.16), transparent 36%);
        }

        .fb-noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.05;
          background-image:
            linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(circle at center, black, transparent 78%);
          animation: fbGrid 28s linear infinite;
        }

        .fb-container {
          position: relative;
          z-index: 1;
          display: flex;
          min-height: 100svh;
          align-items: center;
        }

        .fb-shell {
          display: grid;
          width: 100%;
          max-width: 1260px;
          margin: 0 auto;
          grid-template-columns: minmax(0, 0.92fr) minmax(430px, 0.78fr);
          gap: 64px;
          padding-top: 68px;
          padding-bottom: 66px;
          align-items: center;
        }

        .fb-copy,
        .fb-form-wrap {
          animation: fbRise 820ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .fb-form-wrap {
          position: relative;
          animation-delay: 130ms;
        }

        .fb-form-wrap::before {
          content: '';
          position: absolute;
          inset: -16px;
          z-index: -1;
          border-radius: 36px;
          background: conic-gradient(from 210deg, rgba(244,183,58,0.34), rgba(242,95,43,0.18), transparent, rgba(244,183,58,0.28));
          opacity: 0.7;
          filter: blur(18px);
        }

        .fb-kicker {
          display: inline-flex;
          border: 1px solid rgba(244,183,58,0.48);
          border-radius: 999px;
          background: rgba(244,183,58,0.12);
          color: var(--color-accent-yellow);
          padding: 7px 13px;
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .fb-copy h2 {
          max-width: 620px;
          margin: 20px 0 0;
          color: white;
          font-size: clamp(34px, 4.2vw, 56px) !important;
          line-height: 0.98;
          font-weight: 700 !important;
          letter-spacing: -0.035em;
        }

        .fb-subhead {
          max-width: 590px;
          margin: 20px 0 0;
          color: rgba(255,255,255,0.68);
          font-size: 16px;
          line-height: 1.58;
          font-weight: 700;
        }

        .fb-mobile-inquire {
          display: none;
        }

        .fb-hero-card {
          display: grid;
          grid-template-columns: minmax(210px, 0.82fr) minmax(0, 1fr);
          gap: 16px;
          max-width: 680px;
          margin-top: 26px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 28px;
          background:
            linear-gradient(145deg, rgba(244,183,58,0.12), rgba(255,255,255,0.045) 48%, rgba(242,95,43,0.1)),
            rgba(10,4,5,0.58);
          box-shadow: 0 30px 88px rgba(0,0,0,0.38);
          overflow: hidden;
          backdrop-filter: blur(18px);
        }

        .fb-product-stage {
          position: relative;
          min-height: 220px;
          background: radial-gradient(circle at 50% 45%, rgba(244,183,58,0.14), transparent 62%);
        }

        .fb-product-stage img {
          position: absolute;
          object-fit: contain;
          filter: drop-shadow(0 22px 34px rgba(0,0,0,0.46));
        }

        .fb-product-stage img:nth-child(1) {
          left: 18px;
          top: 24px;
          width: 92px;
          height: 130px;
          transform: rotate(-7deg);
        }

        .fb-product-stage img:nth-child(2) {
          left: 98px;
          top: 42px;
          width: 112px;
          height: 126px;
          transform: rotate(6deg);
        }

        .fb-product-stage img:nth-child(3) {
          right: 8px;
          bottom: 18px;
          width: 122px;
          height: 116px;
          transform: rotate(-9deg);
        }

        .fb-hero-card-copy {
          display: flex;
          min-height: 220px;
          flex-direction: column;
          justify-content: center;
          padding: 26px 28px 26px 0;
        }

        .fb-hero-card-copy span {
          color: var(--color-accent-yellow);
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .fb-hero-card-copy strong {
          display: block;
          max-width: 340px;
          margin-top: 14px;
          color: white;
          font-size: 34px;
          line-height: 0.96;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .fb-proof-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          max-width: 680px;
          margin-top: 14px;
        }

        .fb-proof-row div {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 18px;
          background: rgba(255,255,255,0.055);
          padding: 15px;
          backdrop-filter: blur(16px);
        }

        .fb-proof-row strong {
          display: block;
          color: var(--color-accent-yellow);
          font-size: 17px;
          line-height: 1;
          font-weight: 900;
        }

        .fb-proof-row span {
          display: block;
          margin-top: 6px;
          color: rgba(255,255,255,0.55);
          font-size: 11px;
          line-height: 1.25;
          font-weight: 850;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .fb-benefits {
          display: grid;
          grid-template-columns: 1fr;
          gap: 9px;
          max-width: 680px;
          margin-top: 14px;
        }

        .fb-benefit {
          display: grid;
          grid-template-columns: 40px minmax(0, 1fr);
          gap: 14px;
          align-items: center;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          background: rgba(255,255,255,0.048);
          padding: 12px 14px;
          box-shadow: 0 18px 48px rgba(0,0,0,0.18);
          backdrop-filter: blur(16px);
          animation: fbRise 680ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .fb-benefit span {
          color: var(--color-accent-yellow);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .fb-benefit p {
          margin: 0;
          color: rgba(255,255,255,0.72);
          font-size: 13px;
          line-height: 1.35;
          font-weight: 650;
        }

        .fb-form-card {
          position: relative;
          overflow: visible;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 30px;
          background: rgba(10,4,5,0.78);
          padding: 28px;
          box-shadow: 0 34px 110px rgba(0,0,0,0.58);
          backdrop-filter: blur(24px);
        }

        .fb-form-card::before {
          content: '';
          position: absolute;
          inset: 0 0 auto;
          height: 3px;
          border-radius: 30px 30px 0 0;
          background: linear-gradient(90deg, var(--color-accent-yellow), var(--color-accent-primary), transparent);
        }

        .fb-form-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 24px;
        }

        .fb-form-top span {
          color: var(--color-accent-yellow);
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .fb-form-top h3 {
          margin: 9px 0 0;
          color: white;
          font-size: 32px;
          line-height: 0.96;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .fb-form-top strong {
          display: inline-flex;
          white-space: nowrap;
          border: 1px solid rgba(34,197,94,0.32);
          border-radius: 999px;
          background: rgba(34,197,94,0.12);
          color: var(--color-success);
          padding: 7px 10px;
          font-size: 9px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .fb-form {
          display: grid;
          gap: 16px;
        }

        .fb-field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          overflow: visible;
        }

        .fb-custom-field {
          position: relative;
          z-index: 5;
        }

        .fb-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .fb-label-row span {
          color: rgba(255,255,255,0.38);
          font-size: 11px;
          font-weight: 800;
        }

        .fb-label {
          display: block;
          margin-bottom: 8px;
          color: rgba(255,255,255,0.62);
          font-size: 11px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .fb-field input,
        .fb-field textarea,
        .fb-custom-trigger {
          width: 100%;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 16px;
          background: rgba(255,255,255,0.065);
          color: white;
          font-size: 14px;
          line-height: 1.35;
          font-weight: 750;
          outline: none;
          transition: border-color 220ms ease, background 220ms ease, box-shadow 220ms ease;
        }

        .fb-field input {
          height: 48px;
          padding: 0 15px;
        }

        .fb-field textarea {
          min-height: 118px;
          resize: none;
          padding: 14px 15px;
        }

        .fb-field input::placeholder,
        .fb-field textarea::placeholder {
          color: rgba(255,255,255,0.3);
        }

        .fb-field input:focus,
        .fb-field textarea:focus,
        .fb-custom-trigger:hover,
        .fb-custom-trigger[aria-expanded='true'] {
          border-color: rgba(244,183,58,0.78);
          background: rgba(255,255,255,0.09);
          box-shadow: 0 0 0 4px rgba(244,183,58,0.12);
        }

        .fb-custom-trigger {
          display: flex;
          height: 48px;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 0 15px;
          text-align: left;
        }

        .fb-custom-trigger svg {
          width: 18px;
          height: 18px;
          flex: 0 0 auto;
          color: rgba(255,255,255,0.78);
          transition: transform 220ms ease;
        }

        .fb-custom-trigger[aria-expanded='true'] svg {
          transform: rotate(180deg);
        }

        .fb-custom-error {
          border-color: rgba(242,95,43,0.95);
          box-shadow: 0 0 0 4px rgba(242,95,43,0.14);
        }

        .fb-custom-options {
          position: absolute;
          left: 0;
          right: 0;
          top: calc(100% + 8px);
          z-index: 40;
          overflow: hidden;
          border: 1px solid rgba(244,183,58,0.36);
          border-radius: 16px;
          background: #1a0f11;
          box-shadow: 0 22px 64px rgba(0,0,0,0.58);
          padding: 6px;
          animation: fbDropdownIn 180ms ease both;
        }

        .fb-custom-options button {
          display: flex;
          width: 100%;
          align-items: center;
          border: 0;
          border-radius: 11px;
          background: transparent;
          color: rgba(255,255,255,0.86);
          padding: 11px 12px;
          text-align: left;
          font-size: 14px;
          font-weight: 750;
          transition: background 160ms ease, color 160ms ease, transform 160ms ease;
        }

        .fb-custom-options button:hover,
        .fb-custom-options button.is-selected {
          background: linear-gradient(135deg, rgba(244,183,58,0.98), rgba(242,95,43,0.95));
          color: #140705;
          transform: translateX(2px);
        }

        .fb-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 50px;
          border: 0;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--color-accent-yellow), var(--color-accent-primary));
          color: #160705;
          font-size: 14px;
          font-weight: 900;
          box-shadow: 0 20px 54px rgba(244,183,58,0.24);
          transition: transform 240ms ease, filter 240ms ease;
        }

        .fb-submit:hover {
          transform: translateY(-2px);
          filter: brightness(1.06);
        }

        .fb-form-note {
          margin: 0;
          color: rgba(255,255,255,0.42);
          text-align: center;
          font-size: 11px;
          line-height: 1.45;
          font-weight: 650;
        }

        .fb-success {
          display: flex;
          min-height: 470px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(34,197,94,0.25);
          border-radius: 22px;
          background: rgba(34,197,94,0.1);
          padding: 32px;
          text-align: center;
          animation: fbPop 420ms ease both;
        }

        .fb-success-icon {
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: var(--color-success);
          color: #051208;
        }

        .fb-success-icon svg {
          width: 30px;
          height: 30px;
        }

        .fb-success h4 {
          margin: 18px 0 0;
          color: white;
          font-size: 32px;
          line-height: 0.96;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .fb-success p {
          max-width: 360px;
          margin: 14px 0 0;
          color: rgba(255,255,255,0.72);
          font-size: 15px;
          line-height: 1.56;
        }

        .fb-success button {
          margin-top: 24px;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          background: transparent;
          color: rgba(255,255,255,0.84);
          padding: 11px 20px;
          font-size: 13px;
          font-weight: 900;
        }

        .fb-modal {
          display: none;
        }

        @keyframes fbGrid {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-48px, -48px, 0); }
        }

        @keyframes fbRise {
          from { opacity: 0; transform: translate3d(0, 22px, 0) scale(0.985); filter: blur(5px); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
        }

        @keyframes fbPop {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fbDropdownIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes fbModalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 1180px) {
          .fb-shell {
            grid-template-columns: 1fr;
            max-width: 880px;
            gap: 34px;
          }
        }

        @media (max-width: 767px) {
          .fb-container {
            min-height: 100svh;
            align-items: flex-start;
          }

          .fb-shell {
            display: block;
            padding-top: 88px;
            padding-bottom: 34px;
          }

          .fb-kicker {
            padding: 7px 12px;
            font-size: 9px;
            letter-spacing: 0.2em;
          }

          .fb-copy h2 {
            margin-top: 18px;
            font-size: 34px !important;
            line-height: 1;
            font-weight: 700 !important;
            letter-spacing: -0.03em;
          }

          .fb-subhead {
            margin-top: 16px;
            font-size: 13px;
            line-height: 1.54;
          }

          .fb-mobile-inquire {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 48px;
            margin-top: 18px;
            border: 0;
            border-radius: 999px;
            background: linear-gradient(135deg, var(--color-accent-yellow), var(--color-accent-primary));
            color: #160705;
            box-shadow: 0 20px 56px rgba(244,183,58,0.24);
            font-size: 13px;
            font-weight: 900;
          }

          .fb-hero-card {
            margin-top: 18px;
            grid-template-columns: 0.72fr 1fr;
            gap: 0;
            border-radius: 23px;
          }

          .fb-product-stage {
            min-height: 154px;
          }

          .fb-product-stage img:nth-child(1) {
            left: 10px;
            top: 18px;
            width: 58px;
            height: 82px;
          }

          .fb-product-stage img:nth-child(2) {
            left: 50px;
            top: 26px;
            width: 72px;
            height: 82px;
          }

          .fb-product-stage img:nth-child(3) {
            right: 2px;
            bottom: 14px;
            width: 74px;
            height: 70px;
          }

          .fb-hero-card-copy {
            min-height: 154px;
            padding: 18px 16px 18px 4px;
          }

          .fb-hero-card-copy span {
            font-size: 9px;
            letter-spacing: 0.18em;
          }

          .fb-hero-card-copy strong {
            margin-top: 10px;
            font-size: 23px;
          }

          .fb-proof-row {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 7px;
            margin-top: 10px;
          }

          .fb-proof-row div {
            border-radius: 14px;
            padding: 10px 8px;
          }

          .fb-proof-row strong {
            font-size: 12px;
          }

          .fb-proof-row span {
            margin-top: 5px;
            font-size: 8px;
            line-height: 1.15;
          }

          .fb-benefits {
            gap: 8px;
            margin-top: 11px;
          }

          .fb-benefit {
            grid-template-columns: 32px minmax(0, 1fr);
            gap: 10px;
            border-radius: 14px;
            padding: 10px 11px;
          }

          .fb-benefit:nth-child(n + 3) {
            display: none;
          }

          .fb-benefit p {
            font-size: 11.5px;
            line-height: 1.28;
          }

          .fb-form-wrap {
            display: none;
          }

          .fb-modal {
            position: fixed;
            inset: 0;
            z-index: 120;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.74);
            backdrop-filter: blur(12px);
            padding: 22px;
            animation: fbModalFade 220ms ease both;
          }

          .fb-modal-card {
            position: relative;
            width: min(100%, 410px);
            max-height: calc(100svh - 56px);
            overflow: auto;
            border: 1px solid rgba(255,255,255,0.14);
            border-radius: 24px;
            background: rgba(10,4,5,0.92);
            box-shadow: 0 34px 110px rgba(0,0,0,0.68);
            padding: 20px;
          }

          .fb-modal-card::before {
            content: '';
            position: absolute;
            inset: 0 0 auto;
            height: 3px;
            background: linear-gradient(90deg, var(--color-accent-yellow), var(--color-accent-primary), transparent);
          }

          .fb-modal-close {
            position: absolute;
            right: 14px;
            top: 14px;
            z-index: 2;
            display: grid;
            place-items: center;
            width: 34px;
            height: 34px;
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 50%;
            background: rgba(255,255,255,0.08);
            color: white;
            font-size: 17px;
            font-weight: 900;
          }

          .fb-form-card {
            border-radius: 24px;
            padding: 19px;
          }

          .fb-form-top {
            margin-bottom: 18px;
          }

          .fb-form-top h3 {
            font-size: 27px;
          }

          .fb-form-top strong {
            padding: 6px 8px;
            font-size: 8px;
            letter-spacing: 0.11em;
          }

          .fb-form {
            gap: 13px;
          }

          .fb-field-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .fb-label {
            margin-bottom: 7px;
            font-size: 9.5px;
            letter-spacing: 0.12em;
          }

          .fb-field input,
          .fb-custom-trigger {
            height: 45px;
            border-radius: 14px;
            font-size: 13px;
          }

          .fb-custom-options {
            position: static;
            margin-top: 8px;
            border-radius: 16px;
          }

          .fb-custom-options button {
            font-size: 13px;
            padding: 10px 11px;
          }

          .fb-custom-field {
            z-index: auto;
          }

          .fb-field textarea {
            min-height: 90px;
            border-radius: 14px;
            font-size: 13px;
          }

          .fb-submit {
            min-height: 46px;
            font-size: 13px;
          }
        }

        @media (max-width: 380px) {
          .fb-copy h2 {
            font-size: 34px !important;
          }

          .fb-hero-card {
            display: none;
          }

          .fb-proof-row {
            margin-top: 16px;
          }
        }

        @media (max-height: 780px) and (min-width: 1024px) {
          .fb-shell {
            padding-top: 44px;
            padding-bottom: 44px;
            gap: 44px;
          }

          .fb-copy h2 {
            font-size: 56px !important;
          }

          .fb-subhead {
            font-size: 15px;
          }

          .fb-hero-card {
            margin-top: 20px;
          }

          .fb-product-stage,
          .fb-hero-card-copy {
            min-height: 186px;
          }

          .fb-benefits {
            display: none;
          }

          .fb-field textarea {
            min-height: 86px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fb-noise,
          .fb-copy,
          .fb-form-wrap,
          .fb-benefit,
          .fb-success,
          .fb-modal {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
