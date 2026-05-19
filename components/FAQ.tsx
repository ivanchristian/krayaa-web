'use client';

import Image from 'next/image';
import { useState } from 'react';

const faqs = [
  {
    q: 'When does Krayaa launch?',
    a: 'We are building toward a Q3 2026 public launch. Waitlist members will get early access before the wider launch window.',
  },
  {
    q: 'Are the products authentic?',
    a: 'Yes. Krayaa is built around verified Korean brand and licensed distributor supply. No mystery listings, no gray-market dilution.',
  },
  {
    q: 'What will be available first?',
    a: 'K-beauty and K-pop drops first, then Korean lifestyle, fashion, food, and culture-led categories.',
  },
  {
    q: 'How do creators work with Krayaa?',
    a: 'Selected launch creators get higher commissions, samples, exclusive drops, and campaign support.',
  },
  {
    q: 'Can Korean brands partner before launch?',
    a: 'Yes. We are speaking with Korean brands and distributors now for India entry, compliance planning, and creator distribution.',
  },
  {
    q: 'Will you ship across India?',
    a: 'That is the plan. The operation is being designed around Indian last-mile delivery, support, and checkout expectations.',
  },
  {
    q: 'Is joining the waitlist free?',
    a: 'Yes. Joining is free and puts you first in line for beta access, drop announcements, and launch updates.',
  },
];

const quickSignals = ['Buyer access', 'Creator partners', 'Korean brands'];

export default function FAQSection() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="faq-section">
      <Image src="/assets/background_whykrayaa.png" alt="" fill sizes="100vw" className="faq-bg-image" />
      <div className="faq-overlay" />
      <div className="faq-orbit" />

      <div className="container-wide faq-container">
        <div className="faq-shell">
          <div className="faq-intro">
            <span className="faq-kicker">FAQ</span>
            <h2>Questions before you join?</h2>
            <p>Quick answers for buyers, creators, Korean brands, and anyone checking whether Krayaa is serious.</p>

            <div className="faq-concierge">
              <div>
                <span>Still unsure?</span>
                <strong>Ask us directly.</strong>
              </div>
              <a href="mailto:hello@krayaa.com">hello@krayaa.com</a>
            </div>

            <div className="faq-signals">
              {quickSignals.map((signal) => (
                <strong key={signal}>{signal}</strong>
              ))}
            </div>
          </div>

          <div className="faq-panel">
            <div className="faq-panel-top">
              <span>Launch answers</span>
              <strong>{String(expandedIdx === null ? 0 : expandedIdx + 1).padStart(2, '0')} / 07</strong>
            </div>

            <div className="faq-list">
              {faqs.map((faq, idx) => {
                const isOpen = expandedIdx === idx;

                return (
                  <article key={faq.q} className={`faq-item ${isOpen ? 'is-open' : ''}`} style={{ animationDelay: `${idx * 55}ms` }}>
                    <button
                      type="button"
                      onClick={() => setExpandedIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span>{faq.q}</span>
                      <i aria-hidden="true">{isOpen ? '×' : '+'}</i>
                    </button>

                    <div id={`faq-answer-${idx}`} className="faq-answer">
                      <div>
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          background: var(--color-bg-primary);
          color: white;
          isolation: isolate;
        }

        .faq-bg-image {
          pointer-events: none;
          object-fit: cover;
          opacity: 0.55;
        }

        .faq-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(10,4,5,0.92), rgba(10,4,5,0.58) 46%, rgba(10,4,5,0.93)),
            radial-gradient(circle at 20% 24%, rgba(242,95,43,0.18), transparent 34%),
            radial-gradient(circle at 84% 70%, rgba(244,183,58,0.14), transparent 34%);
        }

        .faq-orbit {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.16;
          background:
            radial-gradient(ellipse at 74% 45%, transparent 0 42%, rgba(242,95,43,0.28) 42.4%, transparent 43.1%),
            radial-gradient(ellipse at 28% 76%, transparent 0 47%, rgba(244,183,58,0.18) 47.4%, transparent 48%);
          transform: rotate(-7deg) scale(1.18);
          animation: faqDrift 18s ease-in-out infinite alternate;
        }

        .faq-container {
          position: relative;
          z-index: 1;
          display: flex;
          min-height: 100svh;
          align-items: center;
        }

        .faq-shell {
          display: grid;
          width: 100%;
          max-width: 1260px;
          margin: 0 auto;
          grid-template-columns: minmax(0, 0.78fr) minmax(520px, 1fr);
          gap: 68px;
          padding-top: 70px;
          padding-bottom: 70px;
          align-items: center;
        }

        .faq-intro {
          animation: faqIntro 760ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .faq-kicker {
          display: inline-flex;
          border: 1px solid rgba(242,95,43,0.48);
          border-radius: 999px;
          background: rgba(242,95,43,0.12);
          color: var(--color-accent-primary);
          padding: 7px 13px;
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .faq-intro h2 {
          max-width: 560px;
          margin: 18px 0 0;
          color: white;
          font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
          font-size: clamp(34px, 4.2vw, 56px) !important;
          line-height: 1.02;
          font-weight: 700 !important;
          letter-spacing: -0.035em;
        }

        .faq-intro p {
          max-width: 520px;
          margin: 20px 0 0;
          color: rgba(255,255,255,0.66);
          font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.8;
          font-weight: 400;
          letter-spacing: 0;
        }

        .faq-concierge {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          max-width: 520px;
          margin-top: 28px;
          border: 1px solid rgba(242,95,43,0.25);
          border-radius: 24px;
          background:
            linear-gradient(135deg, rgba(242,95,43,0.14), rgba(255,255,255,0.04)),
            rgba(10,4,5,0.56);
          padding: 18px;
          box-shadow: 0 24px 72px rgba(0,0,0,0.3);
          backdrop-filter: blur(18px);
        }

        .faq-concierge span,
        .faq-panel-top span {
          color: var(--color-accent-primary);
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .faq-concierge strong {
          display: block;
          margin-top: 8px;
          color: white;
          font-size: 24px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .faq-concierge a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          color: white;
          padding: 0 16px;
          font-size: 13px;
          font-weight: 700;
        }

        .faq-signals {
          display: flex;
          flex-wrap: wrap;
          max-width: 520px;
          gap: 9px;
          margin-top: 14px;
        }

        .faq-signals strong {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          background: rgba(255,255,255,0.052);
          color: rgba(255,255,255,0.7);
          padding: 10px 12px;
          font-size: 11px;
          line-height: 1;
          font-weight: 750;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .faq-panel {
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025)),
            rgba(10,4,5,0.66);
          box-shadow: 0 34px 110px rgba(0,0,0,0.48);
          padding: 18px;
          backdrop-filter: blur(22px);
          animation: faqPanel 820ms cubic-bezier(0.16, 1, 0.3, 1) 90ms both;
        }

        .faq-panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 8px 8px 16px;
        }

        .faq-panel-top strong {
          border: 1px solid rgba(244,183,58,0.3);
          border-radius: 999px;
          background: rgba(244,183,58,0.1);
          color: var(--color-accent-yellow);
          padding: 8px 12px;
          font-size: 11px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .faq-list {
          display: grid;
          gap: 10px;
        }

        .faq-item {
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          background: rgba(10,4,5,0.58);
          box-shadow: 0 18px 50px rgba(0,0,0,0.22);
          animation: faqItemIn 620ms cubic-bezier(0.16, 1, 0.3, 1) both;
          transition: border-color 220ms ease, background 220ms ease, transform 220ms ease;
        }

        .faq-item:hover,
        .faq-item.is-open {
          border-color: rgba(242,95,43,0.34);
          background: rgba(26,15,17,0.72);
        }

        .faq-item:hover {
          transform: translateX(3px);
        }

        .faq-item button {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border: 0;
          background: transparent;
          color: white;
          padding: 17px 18px;
          text-align: left;
        }

        .faq-item button span {
          font-size: 17px;
          line-height: 1.18;
          font-weight: 700;
          letter-spacing: -0.015em;
        }

        .faq-item button i {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          flex: 0 0 auto;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          color: var(--color-accent-primary);
          font-style: normal;
          font-size: 19px;
          font-weight: 800;
          transition: transform 220ms ease, border-color 220ms ease, background 220ms ease;
        }

        .faq-item.is-open button i {
          transform: rotate(90deg);
          border-color: rgba(242,95,43,0.42);
          background: rgba(242,95,43,0.14);
        }

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 280ms ease, opacity 220ms ease;
        }

        .faq-item.is-open .faq-answer {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .faq-answer > div {
          overflow: hidden;
        }

        .faq-answer p {
          margin: 0;
          border-top: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.64);
          padding: 14px 18px 17px;
          font-size: 14px;
          line-height: 1.55;
          font-weight: 700;
        }

        @keyframes faqDrift {
          from { transform: rotate(-7deg) scale(1.18) translate3d(-18px, 0, 0); }
          to { transform: rotate(-7deg) scale(1.18) translate3d(18px, -10px, 0); }
        }

        @keyframes faqIntro {
          from { opacity: 0; transform: translate3d(-20px, 0, 0); clip-path: inset(0 18% 0 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); clip-path: inset(0); }
        }

        @keyframes faqPanel {
          from { opacity: 0; transform: translate3d(24px, 0, 0) scale(0.98); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes faqItemIn {
          from { opacity: 0; transform: translate3d(12px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @media (max-width: 1180px) {
          .faq-shell {
            grid-template-columns: 1fr;
            max-width: 860px;
            gap: 26px;
          }
        }

        @media (max-width: 767px) {
          .faq-container {
            min-height: 100svh;
            align-items: flex-start;
          }

          .faq-bg-image {
            opacity: 0.42;
          }

          .faq-shell {
            display: block;
            padding-top: 34px;
            padding-bottom: 92px;
          }

          .faq-kicker {
            padding: 6px 10px;
            font-size: 8.5px;
            letter-spacing: 0.18em;
          }

          .faq-intro h2 {
            max-width: 390px;
            margin-top: 13px;
            font-size: 34px !important;
            line-height: 1;
            font-weight: 700 !important;
            letter-spacing: -0.03em;
          }

          .faq-intro p {
            margin-top: 13px;
            font-size: 11.6px;
            line-height: 1.38;
          }

          .faq-concierge {
            margin-top: 14px;
            border-radius: 17px;
            padding: 12px;
          }

          .faq-concierge strong {
            font-size: 17px;
          }

          .faq-concierge a {
            min-height: 34px;
            padding: 0 11px;
            font-size: 10.5px;
          }

          .faq-signals {
            display: none;
          }

          .faq-panel {
            margin-top: 14px;
            border-radius: 22px;
            padding: 10px;
          }

          .faq-panel-top {
            padding: 6px 6px 11px;
          }

          .faq-panel-top span {
            font-size: 8.5px;
            letter-spacing: 0.18em;
          }

          .faq-panel-top strong {
            padding: 7px 10px;
            font-size: 9px;
          }

          .faq-list {
            gap: 7px;
          }

          .faq-item {
            border-radius: 15px;
          }

          .faq-item button {
            gap: 12px;
            padding: 11px 12px;
          }

          .faq-item button span {
            font-size: 12.8px;
            line-height: 1.18;
          }

          .faq-item button i {
            width: 30px;
            height: 30px;
            font-size: 16px;
          }

          .faq-answer p {
            padding: 9px 12px 12px;
            font-size: 11.4px;
            line-height: 1.38;
          }


          .faq-item.is-open {
            background:
              radial-gradient(circle at 85% 20%, rgba(242,95,43,0.1), transparent 36%),
              rgba(26,15,17,0.74);
          }

          .faq-item.is-open button {
            padding-bottom: 10px;
          }
        }

        @media (max-width: 390px) {
          .faq-shell {
            padding-top: 30px;
          }

          .faq-intro h2 {
            font-size: 31px !important;
          }

          .faq-concierge {
            display: block;
          }

          .faq-concierge a {
            margin-top: 10px;
          }

        }

        @media (max-height: 780px) and (min-width: 1024px) {
          .faq-shell {
            padding-top: 44px;
            padding-bottom: 44px;
            gap: 48px;
          }

          .faq-item button {
            padding-top: 14px;
            padding-bottom: 14px;
          }
        }

        @media (max-width: 767px) {
          .faq-shell {
            padding-top: 22px !important;
            transform: translateY(-8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-orbit,
          .faq-intro,
          .faq-panel,
          .faq-item {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
