'use client';

import Image from 'next/image';
import { useState } from 'react';
import { redirectToWhatsapp, waitlistWhatsappMessage } from '../lib/whatsapp';

const audienceOptions = ['Buyer', 'Creator', 'Brand'];
const proofItems = ['Free to join', 'No spam', 'Early drops first'];

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [audience, setAudience] = useState('Buyer');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirectToWhatsapp(waitlistWhatsappMessage(audience, email));
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="join" className="final-section">
      <Image src="/assets/background_whykrayaa.png" alt="" fill sizes="100vw" className="final-bg" priority={false} />
      <div className="final-wash" />
      <div className="final-glow final-glow-one" />
      <div className="final-glow final-glow-two" />

      <div className="final-container">
        <div className="final-copy">
          <span className="final-kicker">Join Krayaa</span>
          <h2>Be first when Korea goes live in India.</h2>
          <p>Early access to authenticated K-beauty, limited K-pop merch, creator-led launches, and founder notes before the public release.</p>

          <div className="final-proof">
            {proofItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="final-card" aria-label="Join Krayaa waitlist">
          <div className="final-card-top">
            <span>Private beta access</span>
            <strong>Q3 2026</strong>
          </div>

          <div className="final-product-stage" aria-hidden="true">
            <div className="final-product final-product-one">
              <Image src="/assets/product_1.png" alt="" fill sizes="120px" className="object-contain" />
            </div>
            <div className="final-product final-product-two">
              <Image src="/assets/product_9.png" alt="" fill sizes="160px" className="object-contain" />
            </div>
            <div className="final-product final-product-three">
              <Image src="/assets/product_6.png" alt="" fill sizes="150px" className="object-contain" />
            </div>
          </div>

          <div className="final-tabs" role="tablist" aria-label="Audience type">
            {audienceOptions.map((option) => (
              <button key={option} type="button" onClick={() => setAudience(option)} className={audience === option ? 'is-active' : ''}>
                {option}
              </button>
            ))}
          </div>

          <div className="final-form-area">
            {submitted ? (
              <div className="final-success">
                <span>OK</span>
                You're on the list.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="final-form">
                <label htmlFor="final-email" className="sr-only">
                  Email address
                </label>
                <input id="final-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required autoComplete="email" />
                <button type="submit">Join Waitlist</button>
              </form>
            )}
          </div>

          <div className="final-card-note">
            <b>{audience}</b>
            <span>Gets launch priority, drop alerts, and private beta updates.</span>
          </div>
        </div>
      </div>

      <style>{`
        .final-section {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          background: #070203;
          color: white;
          isolation: isolate;
          display: flex;
          align-items: center;
          padding: 72px 0;
        }

        .final-bg {
          position: absolute !important;
          inset: 0;
          object-fit: cover;
          opacity: 0.5;
          pointer-events: none;
          transform: scale(1.04);
        }

        .final-wash {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(7,2,3,0.92), rgba(10,4,5,0.62) 48%, rgba(7,2,3,0.94)),
            radial-gradient(circle at 18% 28%, rgba(242,95,43,0.22), transparent 30%),
            radial-gradient(circle at 82% 70%, rgba(244,183,58,0.18), transparent 32%);
        }

        .final-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(46px);
          opacity: 0.45;
          animation: finalGlow 9s ease-in-out infinite alternate;
        }

        .final-glow-one {
          left: 8%;
          top: 26%;
          width: 260px;
          height: 120px;
          background: rgba(242,95,43,0.28);
        }

        .final-glow-two {
          right: 10%;
          bottom: 18%;
          width: 320px;
          height: 140px;
          background: rgba(244,183,58,0.16);
          animation-delay: 500ms;
        }

        .final-container {
          position: relative;
          z-index: 2;
          width: min(1220px, calc(100% - 48px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(420px, 0.78fr);
          gap: 56px;
          align-items: center;
        }

        .final-copy {
          max-width: 790px;
          animation: finalCopyIn 760ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .final-kicker {
          display: inline-flex;
          border: 1px solid rgba(242,95,43,0.54);
          border-radius: 999px;
          background: rgba(242,95,43,0.13);
          color: var(--color-accent-primary);
          padding: 8px 14px;
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .final-copy h2 {
          margin: 22px 0 0;
          color: white;
          font-size: clamp(34px, 4.2vw, 56px) !important;
          line-height: 1;
          font-weight: 700 !important;
          letter-spacing: -0.035em;
          max-width: 850px;
        }

        .final-copy p {
          margin: 26px 0 0;
          max-width: 690px;
          color: rgba(255,255,255,0.68);
          font-size: 19px;
          line-height: 1.75;
          font-weight: 500;
        }

        .final-proof {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .final-proof span {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          background: rgba(255,255,255,0.055);
          color: rgba(255,255,255,0.66);
          padding: 10px 13px;
          font-size: 11px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          backdrop-filter: blur(14px);
        }

        .final-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.14);
          border-top-color: rgba(242,95,43,0.74);
          border-radius: 34px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.085), rgba(255,255,255,0.026)),
            rgba(10,4,5,0.7);
          padding: 26px;
          box-shadow: 0 34px 110px rgba(0,0,0,0.48), 0 0 0 1px rgba(244,183,58,0.06) inset;
          backdrop-filter: blur(24px);
          animation: finalCardIn 820ms cubic-bezier(0.16, 1, 0.3, 1) 120ms both;
        }

        .final-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 78% 18%, rgba(244,183,58,0.14), transparent 32%),
            radial-gradient(circle at 16% 84%, rgba(242,95,43,0.16), transparent 36%);
        }

        .final-card-top,
        .final-tabs,
        .final-form-area,
        .final-card-note {
          position: relative;
          z-index: 2;
        }

        .final-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .final-card-top span {
          color: var(--color-accent-primary);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .final-card-top strong {
          border: 1px solid rgba(244,183,58,0.26);
          border-radius: 999px;
          background: rgba(244,183,58,0.1);
          color: var(--color-accent-yellow);
          padding: 8px 12px;
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .final-product-stage {
          position: relative;
          height: 190px;
          margin: 20px 0 18px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 26px;
          background:
            linear-gradient(135deg, rgba(242,95,43,0.14), transparent 48%, rgba(244,183,58,0.1)),
            rgba(0,0,0,0.22);
        }

        .final-product {
          position: absolute;
          filter: drop-shadow(0 24px 42px rgba(0,0,0,0.54));
          animation: finalFloat 5.6s ease-in-out infinite;
        }

        .final-product-one {
          left: 10%;
          bottom: 18%;
          width: 86px;
          height: 132px;
          transform: rotate(-12deg);
        }

        .final-product-two {
          left: 38%;
          top: 14%;
          width: 132px;
          height: 132px;
          transform: rotate(-7deg);
          animation-delay: 360ms;
        }

        .final-product-three {
          right: 8%;
          top: 14%;
          width: 112px;
          height: 142px;
          transform: rotate(10deg);
          animation-delay: 720ms;
        }

        .final-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 18px;
          background: rgba(255,255,255,0.045);
          padding: 7px;
        }

        .final-tabs button {
          min-height: 42px;
          border: 0;
          border-radius: 13px;
          background: transparent;
          color: rgba(255,255,255,0.52);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 200ms ease, background 200ms ease, transform 200ms ease;
        }

        .final-tabs button:hover {
          color: white;
          background: rgba(255,255,255,0.06);
        }

        .final-tabs button.is-active {
          color: #140604;
          background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-yellow));
          box-shadow: 0 14px 34px rgba(242,95,43,0.24);
        }

        .final-form-area {
          margin-top: 16px;
        }

        .final-form {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 10px;
        }

        .final-form input {
          min-width: 0;
          height: 54px;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 17px;
          background: rgba(255,255,255,0.06);
          color: white;
          padding: 0 18px;
          font-size: 15px;
          font-weight: 700;
          outline: none;
          transition: border-color 200ms ease, background 200ms ease, box-shadow 200ms ease;
        }

        .final-form input::placeholder {
          color: rgba(255,255,255,0.34);
        }

        .final-form input:focus {
          border-color: rgba(242,95,43,0.58);
          background: rgba(255,255,255,0.085);
          box-shadow: 0 0 0 4px rgba(242,95,43,0.12);
        }

        .final-form button {
          height: 54px;
          border: 0;
          border-radius: 17px;
          background: var(--color-accent-primary);
          color: white;
          padding: 0 22px;
          font-size: 14px;
          font-weight: 900;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 18px 46px rgba(242,95,43,0.28);
          transition: transform 200ms ease, filter 200ms ease;
        }

        .final-form button:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
        }

        .final-success {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 54px;
          border: 1px solid rgba(34,197,94,0.28);
          border-radius: 17px;
          background: rgba(34,197,94,0.1);
          color: white;
          font-size: 15px;
          font-weight: 900;
        }

        .final-success span {
          display: grid;
          place-items: center;
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: var(--color-success);
          color: #051208;
          font-size: 12px;
          font-weight: 900;
        }

        .final-card-note {
          display: flex;
          gap: 10px;
          margin-top: 15px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 17px;
          background: rgba(0,0,0,0.2);
          padding: 13px 14px;
          color: rgba(255,255,255,0.58);
          font-size: 12px;
          line-height: 1.45;
          font-weight: 700;
        }

        .final-card-note b {
          color: var(--color-accent-yellow);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @keyframes finalGlow {
          from { transform: translate3d(-10px, 0, 0) scale(0.96); }
          to { transform: translate3d(16px, -8px, 0) scale(1.06); }
        }

        @keyframes finalCopyIn {
          from { opacity: 0; transform: translate3d(-18px, 18px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes finalCardIn {
          from { opacity: 0; transform: translate3d(24px, 16px, 0) scale(0.98); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes finalFloat {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -10px; }
        }

        @media (max-width: 1023px) {
          .final-section {
            align-items: flex-start;
            padding: 44px 0 84px;
          }

          .final-container {
            width: min(100% - 44px, 620px);
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .final-copy {
            text-align: left;
          }

          .final-copy h2 {
            max-width: 560px;
            font-size: clamp(40px, 11vw, 58px);
          }

          .final-copy p {
            max-width: 560px;
            margin-top: 15px;
            font-size: 15px;
            line-height: 1.5;
          }

          .final-proof {
            margin-top: 16px;
          }

          .final-card {
            border-radius: 28px;
            padding: 16px;
          }

          .final-product-stage {
            height: 116px;
            margin: 14px 0 13px;
          }

          .final-product-one {
            left: 9%;
            width: 50px;
            height: 82px;
          }

          .final-product-two {
            left: 40%;
            width: 78px;
            height: 78px;
          }

          .final-product-three {
            right: 8%;
            width: 68px;
            height: 86px;
          }

          .final-form {
            grid-template-columns: 1fr;
          }

          .final-form input,
          .final-form button {
            height: 48px;
          }
        }

        @media (max-width: 420px) {
          .final-section {
            padding-top: 34px;
          }

          .final-container {
            width: min(100% - 38px, 420px);
          }

          .final-kicker {
            padding: 6px 10px;
            font-size: 8.5px;
            letter-spacing: 0.18em;
          }

          .final-copy h2 {
            margin-top: 13px;
            font-size: 34px !important;
            line-height: 1;
            font-weight: 700 !important;
            letter-spacing: -0.03em;
          }

          .final-copy p {
            font-size: 12.4px;
            line-height: 1.46;
          }

          .final-proof {
            display: flex;
            gap: 7px;
            margin-top: 13px;
          }

          .final-proof span {
            width: fit-content;
            padding: 7px 8px;
            font-size: 8px;
            letter-spacing: 0.08em;
          }

          .final-card {
            padding: 14px;
            border-radius: 24px;
          }

          .final-card-top span {
            font-size: 8.5px;
            letter-spacing: 0.18em;
          }

          .final-card-top strong {
            font-size: 8.5px;
          }

          .final-product-stage {
            height: 92px;
            border-radius: 20px;
          }

          .final-product-one {
            left: 12%;
            width: 38px;
            height: 68px;
          }

          .final-product-two {
            left: 42%;
            width: 62px;
            height: 62px;
          }

          .final-product-three {
            right: 10%;
            width: 54px;
            height: 70px;
          }

          .final-tabs button {
            min-height: 34px;
            font-size: 8.7px;
            letter-spacing: 0.08em;
          }

          .final-tabs {
            gap: 5px;
            padding: 5px;
            border-radius: 15px;
          }

          .final-form-area {
            margin-top: 11px;
          }

          .final-form input,
          .final-form button {
            height: 44px;
            border-radius: 14px;
            font-size: 13px;
          }

          .final-form input {
            padding: 0 15px;
          }

          .final-card-note {
            display: block;
            margin-top: 11px;
            padding: 10px 11px;
            border-radius: 14px;
            font-size: 9.8px;
            line-height: 1.35;
          }

          .final-card-note span {
            display: block;
            margin-top: 5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .final-glow,
          .final-product,
          .final-copy,
          .final-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
