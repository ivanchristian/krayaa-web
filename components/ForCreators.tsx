'use client';

import Image from 'next/image';
import { useState } from 'react';
import { creatorApplicationWhatsappMessage, redirectToWhatsapp } from '../lib/whatsapp';

const benefits = [
  'Significantly above standard affiliate rates',
  'Free product samples for every drop you host',
  'First access to exclusive Korean brand launches and limited K-pop drops',
  "Co-marketing in Krayaa's launch campaigns + creator wall",
  'Direct line to founder + ops team. No layers.',
];

type CreatorForm = {
  name: string;
  handle: string;
  niche: string;
  followers: string;
  about: string;
};

const initialForm: CreatorForm = {
  name: '',
  handle: '',
  niche: '',
  followers: '',
  about: '',
};

function BenefitIcon({ index }: { index: number }) {
  const paths = [
    'M12 3v18M7 8.5a4 4 0 0 1 5-3.8 4.1 4.1 0 0 1 3.6 2M17 15.5a4 4 0 0 1-5 3.8 4.1 4.1 0 0 1-3.6-2M6 12h12',
    'M6.5 9.5h11v10h-11zM8 9.5V7.8A4 4 0 0 1 12 4a4 4 0 0 1 4 3.8v1.7M12 4v15.5M6.5 14.2h11',
    'M12 3l2.1 5.5 5.9.4-4.6 3.8 1.5 5.8-4.9-3.2-4.9 3.2 1.5-5.8L4 8.9l5.9-.4L12 3z',
    'M5 8.5h9.5a4.5 4.5 0 1 1 0 9H5v-9zM5 8.5V6.8A2.8 2.8 0 0 1 7.8 4h1.5A2.8 2.8 0 0 1 12 6.8v1.7M8.5 12.5h6',
    'M7 12a5 5 0 0 1 5-5h3a5 5 0 0 1 0 10h-1.5M17 12a5 5 0 0 1-5 5H9a5 5 0 0 1 0-10h1.5',
  ];

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[index]} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
    </svg>
  );
}

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="fc-label">
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
    <div className="fc-field fc-custom-field">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <button
        id={id}
        type="button"
        className={`fc-custom-select-trigger ${hasError && !value ? 'fc-custom-select-error' : ''}`}
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
        <div className="fc-custom-options" role="listbox" aria-labelledby={id}>
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

export default function ForCreators() {
  const [formData, setFormData] = useState<CreatorForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [openSelect, setOpenSelect] = useState<'niche' | 'followers' | null>(null);
  const [selectError, setSelectError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: name === 'about' ? value.slice(0, 200) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.niche || !formData.followers) {
      setSelectError(true);
      return;
    }

    setSelectError(false);
    setSubmitted(true);
    setOpenSelect(null);
    redirectToWhatsapp(creatorApplicationWhatsappMessage(formData));
    setFormData(initialForm);
  };

  const handleCustomSelect = (name: 'niche' | 'followers', value: string) => {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
    setOpenSelect(null);
    setSelectError(false);
  };

  const applicationContent = (
    <>
      <div className="fc-form-top">
        <div>
          <span>Creator application</span>
          <h3>Apply early</h3>
        </div>
        <strong>Human reviewed</strong>
      </div>

      {submitted ? (
        <div className="fc-success">
          <div className="fc-success-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5.5 12.5L10 17L18.5 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
            </svg>
          </div>
          <h4>Got it.</h4>
          <p>We review every application personally. You&apos;ll hear from us within 5 days.</p>
          <button type="button" onClick={() => setSubmitted(false)}>
            Submit another creator
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="fc-form">
          <div className="fc-field">
            <FieldLabel htmlFor="creator-name">Name *</FieldLabel>
            <input id="creator-name" type="text" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" placeholder="Your name" />
          </div>

          <div className="fc-field">
            <FieldLabel htmlFor="creator-handle">Instagram / YouTube handle *</FieldLabel>
            <input id="creator-handle" type="text" name="handle" value={formData.handle} onChange={handleChange} required placeholder="@yourhandle" />
          </div>

          <div className="fc-field-grid">
            <CustomSelect
              id="creator-niche"
              label="Niche *"
              value={formData.niche}
              placeholder="Select niche"
              options={['K-beauty', 'K-pop', 'Korean lifestyle', 'Other']}
              isOpen={openSelect === 'niche'}
              hasError={selectError}
              onToggle={() => setOpenSelect((current) => (current === 'niche' ? null : 'niche'))}
              onSelect={(value) => handleCustomSelect('niche', value)}
            />

            <CustomSelect
              id="creator-followers"
              label="Follower range *"
              value={formData.followers}
              placeholder="Select range"
              options={['1K-10K', '10K-50K', '50K-200K', '200K+']}
              isOpen={openSelect === 'followers'}
              hasError={selectError}
              onToggle={() => setOpenSelect((current) => (current === 'followers' ? null : 'followers'))}
              onSelect={(value) => handleCustomSelect('followers', value)}
            />
          </div>

          <div className="fc-field">
            <div className="fc-label-row">
              <FieldLabel htmlFor="creator-about">Tell us about yourself</FieldLabel>
              <span>{formData.about.length}/200</span>
            </div>
            <textarea
              id="creator-about"
              name="about"
              value={formData.about}
              onChange={handleChange}
              maxLength={200}
              rows={4}
              placeholder="What do you create, and what does your audience love?"
            />
          </div>

          <button type="submit" className="fc-submit">
            Apply as Creator Partner
          </button>

          <p className="fc-form-note">No spam. Just launch partner updates and application status.</p>
        </form>
      )}
    </>
  );

  return (
    <section id="creators" className="fc-section">
      <Image src="/assets/background_whykrayaa.png" alt="" fill sizes="100vw" className="fc-bg-image" />
      <div className="fc-overlay" />
      <div className="fc-noise" />

      <div className="container-wide fc-container">
        <div className="fc-shell">
          <div className="fc-copy">
            <span className="fc-kicker">For creators</span>
            <h2>K-Beauty Creator? K-Pop Fan Account? Let&apos;s Talk.</h2>
            <p className="fc-subhead">
              We&apos;re hand-picking 50 creators for our launch creator partner program. Higher commissions, real authenticated supply, and exclusive K-pop drops to host.
            </p>

            <button type="button" className="fc-mobile-apply" onClick={() => setIsFormOpen(true)}>
              Apply as Creator Partner
            </button>

            <div className="fc-creator-card">
              <div className="fc-creator-image">
                <Image
                  src="https://images.pexels.com/photos/6593782/pexels-photo-6593782.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Creator filming a beauty tutorial"
                  fill
                  sizes="(max-width: 767px) 100vw, 520px"
                  className="object-cover"
                />
              </div>
              <div className="fc-creator-card-content">
                <span>Private launch circle</span>
                <strong>50 creator seats</strong>
                <p>If your audience loves Korea, this is the early partner list to be on.</p>
              </div>
            </div>

            <div className="fc-benefits">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={benefit} className="fc-benefit" style={{ animationDelay: `${index * 80}ms` }}>
                  <span>
                    <BenefitIcon index={index} />
                  </span>
                  <p>{benefit}</p>
                </div>
              ))}
              <p className="fc-benefit-note">Plus co-marketing and direct founder access during launch.</p>
            </div>
          </div>

          <div className="fc-form-wrap">
            <div className="fc-form-card">{applicationContent}</div>
          </div>
        </div>
      </div>

      {isFormOpen ? (
        <div className="fc-modal" role="dialog" aria-modal="true">
          <div className="fc-modal-card">
            <button type="button" aria-label="Close creator application" className="fc-modal-close" onClick={() => setIsFormOpen(false)}>
              x
            </button>
            {applicationContent}
          </div>
        </div>
      ) : null}

      <style>{`
        .fc-section {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          background: var(--color-bg-primary);
          color: white;
          isolation: isolate;
        }

        .fc-bg-image {
          pointer-events: none;
          object-fit: cover;
          opacity: 0.64;
        }

        .fc-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(10,4,5,0.9), rgba(10,4,5,0.54) 46%, rgba(10,4,5,0.92)),
            radial-gradient(circle at 20% 28%, rgba(242,95,43,0.3), transparent 34%),
            radial-gradient(circle at 78% 72%, rgba(244,183,58,0.18), transparent 36%);
        }

        .fc-noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.055;
          background-image:
            linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(circle at center, black, transparent 78%);
          animation: fcGrid 28s linear infinite;
        }

        .fc-container {
          position: relative;
          z-index: 1;
          display: flex;
          min-height: 100svh;
          align-items: center;
        }

        .fc-shell {
          display: grid;
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          grid-template-columns: minmax(0, 1.04fr) minmax(430px, 0.82fr);
          gap: 56px;
          padding-top: 70px;
          padding-bottom: 70px;
          align-items: center;
        }

        .fc-copy,
        .fc-form-wrap {
          animation: fcRise 820ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .fc-form-wrap {
          animation-delay: 130ms;
        }

        .fc-kicker {
          display: inline-flex;
          border: 1px solid rgba(244,183,58,0.42);
          border-radius: 999px;
          background: rgba(244,183,58,0.1);
          color: var(--color-accent-yellow);
          padding: 7px 13px;
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .fc-copy h2 {
          max-width: 640px;
          margin: 22px 0 0;
          color: white;
          font-size: clamp(34px, 4.2vw, 56px) !important;
          line-height: 0.98;
          font-weight: 700 !important;
          letter-spacing: -0.035em;
        }

        .fc-subhead {
          max-width: 610px;
          margin: 20px 0 0;
          color: rgba(255,255,255,0.68);
          font-size: 16px;
          line-height: 1.58;
          font-weight: 650;
        }

        .fc-mobile-apply {
          display: none;
        }

        .fc-creator-card {
          display: grid;
          grid-template-columns: minmax(210px, 0.74fr) minmax(0, 1fr);
          gap: 14px;
          max-width: 680px;
          margin-top: 24px;
        }

        .fc-creator-image {
          position: relative;
          min-height: 190px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 26px;
          background: rgba(0,0,0,0.35);
          box-shadow: 0 28px 82px rgba(0,0,0,0.42);
        }

        .fc-creator-image img {
          opacity: 0.78;
          filter: saturate(0.85);
        }

        .fc-creator-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10,4,5,0.08), rgba(10,4,5,0.82));
        }

        .fc-creator-card-content {
          display: flex;
          min-height: 190px;
          flex-direction: column;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 26px;
          background:
            linear-gradient(145deg, rgba(242,95,43,0.16), rgba(255,255,255,0.045) 46%, rgba(244,183,58,0.1)),
            rgba(10,4,5,0.62);
          padding: 24px;
          box-shadow: 0 28px 82px rgba(0,0,0,0.36);
          backdrop-filter: blur(18px);
        }

        .fc-creator-card-content span {
          color: var(--color-accent-primary);
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .fc-creator-card-content strong {
          display: block;
          margin-top: 14px;
          color: white;
          font-size: 30px;
          line-height: 0.94;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .fc-creator-card-content p {
          margin: 15px 0 0;
          color: rgba(255,255,255,0.66);
          font-size: 13.5px;
          line-height: 1.5;
          font-weight: 650;
        }

        .fc-benefits {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          max-width: 680px;
          margin-top: 14px;
        }

        .fc-benefit {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 13px;
          align-items: center;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 18px;
          background: rgba(255,255,255,0.055);
          padding: 11px;
          box-shadow: 0 18px 48px rgba(0,0,0,0.23);
          backdrop-filter: blur(16px);
          animation: fcRise 680ms cubic-bezier(0.16, 1, 0.3, 1) both;
          transition: transform 260ms ease, border-color 260ms ease, background 260ms ease;
        }

        .fc-benefit:hover {
          transform: translateY(-3px);
          border-color: rgba(244,183,58,0.34);
          background: rgba(255,255,255,0.075);
        }

        .fc-benefit span {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: var(--color-accent-primary);
          color: white;
          box-shadow: 0 14px 34px rgba(242,95,43,0.28);
        }

        .fc-benefit svg {
          width: 18px;
          height: 18px;
        }

        .fc-benefit p {
          margin: 0;
          color: rgba(255,255,255,0.78);
          font-size: 14px;
          line-height: 1.42;
          font-weight: 650;
        }

        .fc-benefit-note {
          grid-column: 1 / -1;
          margin: 0;
          border: 1px solid rgba(244,183,58,0.18);
          border-radius: 16px;
          background: rgba(244,183,58,0.075);
          color: rgba(255,255,255,0.64);
          padding: 12px 14px;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 800;
        }

        .fc-form-wrap {
          position: relative;
        }

        .fc-form-wrap::before {
          content: '';
          position: absolute;
          inset: -16px;
          z-index: -1;
          border-radius: 36px;
          background: conic-gradient(from 210deg, rgba(242,95,43,0.34), rgba(244,183,58,0.18), transparent, rgba(242,95,43,0.28));
          opacity: 0.78;
          filter: blur(18px);
        }

        .fc-form-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 30px;
          background: rgba(10,4,5,0.78);
          padding: 28px;
          box-shadow: 0 34px 110px rgba(0,0,0,0.58);
          backdrop-filter: blur(24px);
        }

        .fc-form-card::before {
          content: '';
          position: absolute;
          inset: 0 0 auto;
          height: 3px;
          background: linear-gradient(90deg, var(--color-accent-yellow), var(--color-accent-primary), transparent);
        }

        .fc-form-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 24px;
        }

        .fc-form-top span {
          color: var(--color-accent-primary);
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .fc-form-top h3 {
          margin: 9px 0 0;
          color: white;
          font-size: 32px;
          line-height: 0.96;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .fc-form-top strong {
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

        .fc-form {
          display: grid;
          gap: 16px;
        }

        .fc-field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          overflow: visible;
        }

        .fc-custom-field {
          position: relative;
          z-index: 5;
        }

        .fc-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .fc-label-row span {
          color: rgba(255,255,255,0.38);
          font-size: 11px;
          font-weight: 800;
        }

        .fc-label {
          display: block;
          margin-bottom: 8px;
          color: rgba(255,255,255,0.62);
          font-size: 11px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .fc-field input,
        .fc-field select,
        .fc-field textarea {
          width: 100%;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 16px;
          background: rgba(255,255,255,0.065);
          color: white;
          font-size: 14px;
          line-height: 1.35;
          outline: none;
          transition: border-color 220ms ease, background 220ms ease, box-shadow 220ms ease;
        }

        .fc-field input,
        .fc-field select {
          height: 48px;
          padding: 0 15px;
        }

        .fc-field select {
          background-color: #120708;
          color: white;
          color-scheme: dark;
        }

        .fc-field select option {
          background: #1a0f11;
          color: #ffffff;
        }

        .fc-field select option:checked,
        .fc-field select option:hover,
        .fc-field select option:focus {
          background: linear-gradient(135deg, var(--color-accent-primary), #c9451f);
          color: #ffffff;
        }

        .fc-field textarea {
          min-height: 118px;
          resize: none;
          padding: 14px 15px;
        }

        .fc-field input::placeholder,
        .fc-field textarea::placeholder {
          color: rgba(255,255,255,0.3);
        }

        .fc-field input:focus,
        .fc-field select:focus,
        .fc-field textarea:focus {
          border-color: rgba(242,95,43,0.78);
          background: rgba(255,255,255,0.09);
          box-shadow: 0 0 0 4px rgba(242,95,43,0.12);
        }

        .fc-custom-select-trigger {
          display: flex;
          width: 100%;
          height: 48px;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 16px;
          background: rgba(255,255,255,0.065);
          color: white;
          padding: 0 15px;
          text-align: left;
          font-size: 14px;
          font-weight: 750;
          outline: none;
          transition: border-color 220ms ease, background 220ms ease, box-shadow 220ms ease;
        }

        .fc-custom-select-trigger:hover,
        .fc-custom-select-trigger[aria-expanded='true'] {
          border-color: rgba(242,95,43,0.78);
          background: rgba(255,255,255,0.09);
          box-shadow: 0 0 0 4px rgba(242,95,43,0.12);
        }

        .fc-custom-select-trigger svg {
          width: 18px;
          height: 18px;
          flex: 0 0 auto;
          color: rgba(255,255,255,0.78);
          transition: transform 220ms ease;
        }

        .fc-custom-select-trigger[aria-expanded='true'] svg {
          transform: rotate(180deg);
        }

        .fc-custom-select-error {
          border-color: rgba(242,95,43,0.95);
          box-shadow: 0 0 0 4px rgba(242,95,43,0.14);
        }

        .fc-custom-options {
          position: absolute;
          left: 0;
          right: 0;
          top: calc(100% + 8px);
          z-index: 40;
          overflow: hidden;
          border: 1px solid rgba(242,95,43,0.36);
          border-radius: 16px;
          background: #1a0f11;
          box-shadow: 0 22px 64px rgba(0,0,0,0.58);
          padding: 6px;
          animation: fcDropdownIn 180ms ease both;
        }

        .fc-custom-options button {
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

        .fc-custom-options button:hover,
        .fc-custom-options button.is-selected {
          background: linear-gradient(135deg, rgba(242,95,43,0.95), rgba(196,69,31,0.95));
          color: white;
          transform: translateX(2px);
        }

        .fc-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 50px;
          border: 0;
          border-radius: 999px;
          background: var(--color-accent-primary);
          color: white;
          font-size: 14px;
          font-weight: 900;
          box-shadow: 0 20px 54px rgba(242,95,43,0.32);
          transition: transform 240ms ease, background 240ms ease;
        }

        .fc-submit:hover {
          transform: translateY(-2px);
          background: #ff7040;
        }

        .fc-form-note {
          margin: 0;
          color: rgba(255,255,255,0.42);
          text-align: center;
          font-size: 11px;
          line-height: 1.45;
          font-weight: 650;
        }

        .fc-success {
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
          animation: fcPop 420ms ease both;
        }

        .fc-success-icon {
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: var(--color-success);
          color: #051208;
        }

        .fc-success-icon svg {
          width: 30px;
          height: 30px;
        }

        .fc-success h4 {
          margin: 18px 0 0;
          color: white;
          font-size: 32px;
          line-height: 0.96;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .fc-success p {
          max-width: 360px;
          margin: 14px 0 0;
          color: rgba(255,255,255,0.72);
          font-size: 15px;
          line-height: 1.56;
        }

        .fc-success button {
          margin-top: 24px;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          background: transparent;
          color: rgba(255,255,255,0.84);
          padding: 11px 20px;
          font-size: 13px;
          font-weight: 900;
        }

        @keyframes fcGrid {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-48px, -48px, 0); }
        }

        @keyframes fcRise {
          from { opacity: 0; transform: translate3d(0, 22px, 0) scale(0.985); filter: blur(5px); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
        }

        @keyframes fcPop {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fcDropdownIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes fcModalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 1180px) {
          .fc-shell {
            grid-template-columns: 1fr;
            max-width: 880px;
            gap: 34px;
          }
        }

        @media (max-width: 767px) {
          .fc-container {
            min-height: 100svh;
            align-items: flex-start;
          }

          .fc-shell {
            display: block;
            padding-top: 96px;
            padding-bottom: 34px;
          }

          .fc-kicker {
            padding: 7px 12px;
            font-size: 9px;
            letter-spacing: 0.2em;
          }

          .fc-copy h2 {
            margin-top: 18px;
            font-size: 34px !important;
            line-height: 1;
            font-weight: 700 !important;
            letter-spacing: -0.03em;
          }

          .fc-subhead {
            margin-top: 16px;
            font-size: 12.8px;
            line-height: 1.54;
          }

          .fc-mobile-apply {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 48px;
            margin-top: 18px;
            border: 0;
            border-radius: 999px;
            background: var(--color-accent-primary);
            color: white;
            box-shadow: 0 20px 56px rgba(242,95,43,0.34);
            font-size: 13px;
            font-weight: 900;
          }

          .fc-creator-card {
            display: none;
          }

          .fc-benefits {
            grid-template-columns: 1fr;
            gap: 9px;
            margin-top: 16px;
          }

          .fc-benefit {
            grid-template-columns: 36px minmax(0, 1fr);
            gap: 11px;
            border-radius: 15px;
            padding: 10px;
          }

          .fc-benefit span {
            width: 36px;
            height: 36px;
            border-radius: 12px;
          }

          .fc-benefit svg {
            width: 16px;
            height: 16px;
          }

          .fc-benefit p {
            font-size: 12.3px;
            line-height: 1.36;
          }

          .fc-benefit-note {
            padding: 11px 12px;
            font-size: 11.5px;
          }

          .fc-form-wrap {
            display: none;
          }

          .fc-form-wrap::before {
            inset: -9px;
            border-radius: 28px;
          }

          .fc-form-card {
            border-radius: 24px;
            padding: 19px;
          }

          .fc-form-top {
            align-items: flex-start;
            margin-bottom: 18px;
          }

          .fc-form-top h3 {
            font-size: 27px;
          }

          .fc-form-top strong {
            padding: 6px 8px;
            font-size: 8px;
            letter-spacing: 0.11em;
          }

          .fc-form {
            gap: 13px;
          }

          .fc-field-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .fc-label {
            margin-bottom: 7px;
            font-size: 9.5px;
            letter-spacing: 0.12em;
          }

          .fc-field input,
          .fc-field select {
            height: 45px;
            border-radius: 14px;
            font-size: 13px;
          }

          .fc-custom-select-trigger {
            height: 45px;
            border-radius: 14px;
            font-size: 13px;
          }

          .fc-custom-options button {
            font-size: 13px;
            padding: 10px 11px;
          }

          .fc-modal-card .fc-custom-options {
            position: static;
            margin-top: 8px;
            border-radius: 16px;
          }

          .fc-modal-card .fc-custom-field {
            z-index: auto;
          }

          .fc-field textarea {
            min-height: 90px;
            border-radius: 14px;
            font-size: 13px;
          }

          .fc-submit {
            min-height: 46px;
            font-size: 13px;
          }

          .fc-success {
            min-height: 360px;
            border-radius: 18px;
            padding: 24px;
          }

          .fc-modal {
            position: fixed;
            inset: 0;
            z-index: 120;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.74);
            backdrop-filter: blur(12px);
            padding: 22px;
            animation: fcModalFade 220ms ease both;
          }

          .fc-modal-card {
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

          .fc-modal-card::before {
            content: '';
            position: absolute;
            inset: 0 0 auto;
            height: 3px;
            background: linear-gradient(90deg, var(--color-accent-yellow), var(--color-accent-primary), transparent);
          }

          .fc-modal-close {
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
        }

        @media (max-height: 780px) and (min-width: 1024px) {
          .fc-shell {
            padding-top: 44px;
            padding-bottom: 44px;
            gap: 38px;
          }

          .fc-copy h2 {
            font-size: 56px !important;
          }

          .fc-subhead {
            font-size: 15px;
          }

          .fc-creator-card,
          .fc-benefits {
            margin-top: 20px;
          }

          .fc-creator-image,
          .fc-creator-card-content {
            min-height: 208px;
          }

          .fc-field textarea {
            min-height: 86px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fc-noise,
          .fc-copy,
          .fc-form-wrap,
          .fc-benefit,
          .fc-success,
          .fc-modal {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
