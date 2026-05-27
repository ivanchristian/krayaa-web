'use client';

import Image from 'next/image';
import { useState } from 'react';

const proofPoints = [
  {
    label: 'Seoul lived-in',
    value: '2 years',
  },
  {
    label: 'Launch window',
    value: 'Q3 2026',
  },
  {
    label: 'Built for',
    value: 'India',
  },
];

const storyBeats = [
  'Verified Korean brands and licensed distributors, not gray-market guesswork.',
  'Creator-led discovery that feels closer to a live Seoul haul than marketplace search.',
  'A trusted India entry point for K-beauty, K-pop merch, TCG, and culture drops.',
];

const productCloud = [
  {
    src: '/assets/product_1.png',
    alt: 'Korean skincare bottle',
    className: 'vision-product vision-product-one',
  },
  {
    src: '/assets/product_4.png',
    alt: 'Korean beauty jar',
    className: 'vision-product vision-product-two',
  },
  {
    src: '/assets/product_2.png',
    alt: 'Korean skincare tube',
    className: 'vision-product vision-product-three',
  },
  {
    src: '/assets/product_9.png',
    alt: 'K-pop album',
    className: 'vision-product vision-product-four',
  },
];

export default function Vision() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <section id="vision" className="vision-section relative flex min-h-[100svh] overflow-hidden bg-[var(--color-bg-primary)] text-white">
      <Image src="/assets/background_whykrayaa.png" alt="" fill sizes="100vw" className="pointer-events-none object-cover opacity-[0.72]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,4,5,0.88),rgba(10,4,5,0.58)_45%,rgba(10,4,5,0.9)),radial-gradient(circle_at_18%_28%,rgba(242,95,43,0.34),transparent_34%),radial-gradient(circle_at_82%_70%,rgba(244,183,58,0.16),transparent_32%)]" />
      <div className="vision-grain pointer-events-none absolute inset-0 opacity-[0.055]" />

      <div className="container-wide relative z-10 flex w-full items-center">
        <div className="vision-shell mx-auto grid w-full max-w-[1320px] items-center">
          <div className="vision-copy">
            <span className="vision-kicker">Vision / Founder Story</span>

            <div className="vision-title-row">
              <div className="vision-mobile-founder-mini">
                <Image src="/assets/product_1.png" alt="Korean skincare product" fill sizes="76px" className="object-contain" />
                <span>KR</span>
              </div>
              <h2 className="vision-title">Built between Seoul and India.</h2>
            </div>

            <p className="vision-quote">
              &quot;I lived in Seoul for two years. I saw the gap between Korean quality and Indian access. Krayaa is the bridge.&quot;
            </p>

            <p className="vision-body">
              Krayaa is building the trust layer for K-culture in India, starting with authenticated K-beauty and expanding into the culture drops fans already chase.
            </p>

            <div className="vision-proof-grid">
              {proofPoints.map((point) => (
                <div key={point.label} className="vision-proof-card">
                  <div className="vision-proof-value">{point.value}</div>
                  <div className="vision-proof-label">{point.label}</div>
                </div>
              ))}
            </div>

            <div className="vision-actions">
              <a href="#join" className="vision-button vision-button-primary">
                Join the waitlist
              </a>
              <a href="#creators" className="vision-button vision-button-secondary">
                Partner with Krayaa
              </a>
              <button type="button" className="vision-mobile-details-button" onClick={() => setIsDetailsOpen(true)}>
                See what Krayaa stands for
              </button>
            </div>
          </div>

          <div className="vision-stage">
            <div className="vision-stage-glow" />

            <div className="vision-lens">
              <div className="vision-lens-top">
                <span>Founder lens</span>
                <span>Seoul sourced</span>
              </div>

              <div className="vision-product-cloud">
                {productCloud.map((product) => (
                  <div key={product.src} className={product.className}>
                    <Image src={product.src} alt={product.alt} fill sizes="220px" className="object-contain" />
                  </div>
                ))}
              </div>

              <div className="vision-founder-card">
                <div>
                  <p>Kunzang Gyatso</p>
                  <span>Founder - Seoul resident</span>
                </div>
                <strong>KR</strong>
              </div>
            </div>

            <div className="vision-standards">
              <div className="vision-standards-header">
                <span>What Krayaa stands for</span>
                <b>03</b>
              </div>

              <div className="vision-beats">
                {storyBeats.map((beat, index) => (
                  <div key={beat} className="vision-beat">
                    <span>{index + 1}</span>
                    <p>{beat}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="vision-beta-card">
              <span>Limited beta</span>
              <p>First access goes to buyers, creators, and Korean brands joining before launch.</p>
            </div>
          </div>
        </div>
      </div>

      {isDetailsOpen ? (
        <div className="vision-modal" role="dialog" aria-modal="true">
          <div className="vision-modal-card">
            <button type="button" aria-label="Close vision details" className="vision-modal-close" onClick={() => setIsDetailsOpen(false)}>
              x
            </button>
            <span className="vision-modal-kicker">What Krayaa stands for</span>
            <h3>Seoul quality, India access.</h3>
            <div className="vision-modal-beats">
              {storyBeats.map((beat, index) => (
                <div key={beat} className="vision-modal-beat">
                  <span>{index + 1}</span>
                  <p>{beat}</p>
                </div>
              ))}
            </div>
            <div className="vision-modal-beta">
              <strong>Limited beta</strong>
              <p>First access goes to buyers, creators, and Korean brands joining before launch.</p>
            </div>
          </div>
        </div>
      ) : null}

      <style>{`
        .vision-section {
          isolation: isolate;
        }

        .vision-grain {
          background-image:
            linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: radial-gradient(circle at 50% 50%, black, transparent 78%);
          animation: visionGridDrift 26s linear infinite;
        }

        .vision-shell {
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 56px;
          padding-top: 72px;
          padding-bottom: 72px;
        }

        .vision-copy,
        .vision-stage {
          animation: visionPremiumRise 820ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .vision-stage {
          animation-delay: 140ms;
        }

        .vision-kicker {
          display: inline-flex;
          border: 1px solid rgba(242,95,43,0.45);
          background: rgba(242,95,43,0.12);
          color: var(--color-accent-primary);
          border-radius: 999px;
          padding: 7px 14px;
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .vision-title {
          margin-top: 22px;
          max-width: 680px;
          color: white;
          font-size: clamp(34px, 4.2vw, 56px) !important;
          line-height: 0.98;
          font-weight: 700 !important;
          letter-spacing: -0.035em;
        }

        .vision-mobile-founder-mini,
        .vision-mobile-details-button,
        .vision-modal {
          display: none;
        }

        .vision-quote {
          margin-top: 26px;
          max-width: 650px;
          color: rgba(255,255,255,0.92);
          font-size: clamp(20px, 1.9vw, 28px);
          line-height: 1.28;
          font-weight: 700;
          font-style: italic;
          letter-spacing: -0.018em;
        }

        .vision-body {
          margin-top: 22px;
          max-width: 600px;
          color: rgba(255,255,255,0.68);
          font-size: 17px;
          line-height: 1.68;
          font-weight: 600;
        }

        .vision-proof-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
          margin-top: 30px;
          max-width: 620px;
        }

        .vision-proof-card {
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.035));
          border-radius: 18px;
          padding: 18px 18px 16px;
          box-shadow: 0 20px 56px rgba(0,0,0,0.28);
          backdrop-filter: blur(14px);
        }

        .vision-proof-value {
          color: var(--color-accent-yellow);
          font-size: 26px;
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -0.05em;
        }

        .vision-proof-label {
          margin-top: 9px;
          color: rgba(255,255,255,0.52);
          font-size: 10px;
          line-height: 1.2;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .vision-actions {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .vision-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          border-radius: 999px;
          padding: 0 22px;
          font-size: 14px;
          font-weight: 900;
          text-decoration: none;
          transition: transform 260ms ease, border-color 260ms ease, background 260ms ease;
        }

        .vision-button:hover {
          transform: translateY(-2px);
        }

        .vision-button-primary {
          background: var(--color-accent-primary);
          color: white;
          box-shadow: 0 18px 50px rgba(242,95,43,0.28);
        }

        .vision-button-secondary {
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.055);
          color: rgba(255,255,255,0.84);
          backdrop-filter: blur(16px);
        }

        .vision-stage {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(250px, 0.95fr);
          gap: 18px;
          min-height: 560px;
        }

        .vision-stage-glow {
          position: absolute;
          inset: -12%;
          z-index: -1;
          background:
            radial-gradient(circle at 42% 34%, rgba(242,95,43,0.2), transparent 38%),
            radial-gradient(circle at 78% 70%, rgba(244,183,58,0.16), transparent 32%);
          filter: blur(4px);
        }

        .vision-lens,
        .vision-standards,
        .vision-beta-card {
          border: 1px solid rgba(255,255,255,0.13);
          background: rgba(10,4,5,0.58);
          box-shadow: 0 30px 100px rgba(0,0,0,0.44);
          backdrop-filter: blur(22px);
        }

        .vision-lens {
          position: relative;
          min-height: 560px;
          overflow: hidden;
          border-radius: 34px;
          background:
            linear-gradient(150deg, rgba(242,95,43,0.18), rgba(255,255,255,0.04) 38%, rgba(244,183,58,0.14)),
            rgba(10,4,5,0.58);
        }

        .vision-lens::before {
          content: '';
          position: absolute;
          inset: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 26px;
          pointer-events: none;
        }

        .vision-lens-top {
          position: absolute;
          z-index: 3;
          left: 28px;
          right: 28px;
          top: 26px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .vision-lens-top span {
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(0,0,0,0.28);
          padding: 7px 11px;
          color: rgba(255,255,255,0.72);
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          backdrop-filter: blur(12px);
        }

        .vision-product-cloud {
          position: absolute;
          inset: 0;
          animation: visionFloat 7s ease-in-out infinite;
        }

        .vision-product {
          position: absolute;
          filter: drop-shadow(0 30px 46px rgba(0,0,0,0.62));
        }

        .vision-product-one {
          left: 11%;
          top: 26%;
          width: 116px;
          height: 210px;
          transform: rotate(-11deg);
        }

        .vision-product-two {
          right: 7%;
          top: 17%;
          width: 230px;
          height: 230px;
          transform: rotate(10deg);
        }

        .vision-product-three {
          right: 20%;
          bottom: 22%;
          width: 142px;
          height: 210px;
          transform: rotate(4deg);
        }

        .vision-product-four {
          left: 18%;
          bottom: 16%;
          width: 168px;
          height: 168px;
          opacity: 0.72;
          transform: rotate(-8deg);
        }

        .vision-founder-card {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(0,0,0,0.46);
          border-radius: 22px;
          padding: 18px 20px;
          backdrop-filter: blur(18px);
        }

        .vision-founder-card p {
          margin: 0;
          color: white;
          font-size: 28px;
          line-height: 0.95;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .vision-founder-card span {
          display: block;
          margin-top: 8px;
          color: var(--color-accent-primary);
          font-size: 11px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .vision-founder-card strong {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-yellow));
          color: #150908;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .vision-standards {
          border-radius: 30px;
          padding: 28px;
        }

        .vision-standards-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .vision-standards-header span {
          color: rgba(255,255,255,0.56);
          font-size: 10px;
          line-height: 1.3;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .vision-standards-header b {
          color: rgba(244,183,58,0.72);
          font-size: 32px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.06em;
        }

        .vision-beats {
          display: grid;
          gap: 14px;
          margin-top: 20px;
        }

        .vision-beat {
          display: grid;
          grid-template-columns: 32px minmax(0, 1fr);
          gap: 13px;
          align-items: start;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.045);
          border-radius: 18px;
          padding: 15px;
        }

        .vision-beat span {
          display: grid;
          place-items: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-accent-primary);
          color: white;
          font-size: 12px;
          font-weight: 900;
        }

        .vision-beat p {
          margin: 0;
          color: rgba(255,255,255,0.74);
          font-size: 14px;
          line-height: 1.48;
          font-weight: 650;
        }

        .vision-beta-card {
          grid-column: 2;
          border-radius: 26px;
          padding: 24px 26px;
          background:
            linear-gradient(135deg, rgba(244,183,58,0.18), rgba(242,95,43,0.08)),
            rgba(10,4,5,0.56);
        }

        .vision-beta-card span {
          display: block;
          color: var(--color-accent-yellow);
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .vision-beta-card p {
          margin: 12px 0 0;
          color: rgba(255,255,255,0.76);
          font-size: 15px;
          line-height: 1.55;
          font-weight: 700;
        }

        @keyframes visionGridDrift {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-42px, -42px, 0); }
        }

        @keyframes visionPremiumRise {
          from { opacity: 0; transform: translate3d(0, 22px, 0) scale(0.985); filter: blur(5px); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
        }

        @keyframes visionFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes visionModalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes visionModalPop {
          from { opacity: 0; transform: translate3d(0, 16px, 0) scale(0.94); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }

        @media (max-width: 1180px) {
          .vision-shell {
            grid-template-columns: 1fr;
            gap: 42px;
            max-width: 880px;
          }

          .vision-copy {
            text-align: center;
          }

          .vision-title,
          .vision-quote,
          .vision-body,
          .vision-proof-grid {
            margin-left: auto;
            margin-right: auto;
          }

          .vision-actions {
            justify-content: center;
          }
        }

        @media (max-width: 767px) {
          .vision-section {
            min-height: 100svh;
          }

          .vision-shell {
            display: block;
            padding-top: 54px;
            padding-bottom: 36px;
            transform: translateY(-12px);
          }

          .vision-copy {
            text-align: left;
          }

          .vision-title,
          .vision-quote,
          .vision-body,
          .vision-proof-grid {
            margin-left: 0;
            margin-right: 0;
          }

          .vision-kicker {
            padding: 7px 12px;
            font-size: 9px;
            letter-spacing: 0.22em;
          }

          .vision-title-row {
            display: grid;
            grid-template-columns: 74px minmax(0, 1fr);
            gap: 15px;
            align-items: center;
            margin-top: 18px;
          }

          .vision-mobile-founder-mini {
            position: relative;
            display: block;
            width: 74px;
            height: 92px;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.13);
            border-radius: 20px;
            background: radial-gradient(circle at 42% 28%, rgba(242,95,43,0.26), transparent 46%), rgba(255,255,255,0.05);
            box-shadow: 0 20px 58px rgba(0,0,0,0.36);
          }

          .vision-mobile-founder-mini img {
            transform: rotate(-8deg) scale(0.94);
            filter: drop-shadow(0 16px 22px rgba(0,0,0,0.55));
          }

          .vision-mobile-founder-mini span {
            position: absolute;
            right: 8px;
            bottom: 8px;
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-yellow));
            color: #160807;
            font-size: 10px;
            line-height: 1;
            font-weight: 900;
          }

          .vision-title {
            margin-top: 0;
            font-size: 34px !important;
            line-height: 1;
            font-weight: 700 !important;
            letter-spacing: -0.03em;
          }

          .vision-quote {
            margin-top: 19px;
            font-size: 16px;
            line-height: 1.38;
          }

          .vision-body {
            margin-top: 14px;
            font-size: 12.8px;
            line-height: 1.55;
          }

          .vision-proof-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 8px;
            margin-top: 18px;
          }

          .vision-proof-card {
            border-radius: 14px;
            padding: 13px 9px 12px;
          }

          .vision-proof-value {
            font-size: 19px;
          }

          .vision-proof-label {
            margin-top: 7px;
            font-size: 8px;
            letter-spacing: 0.12em;
          }

          .vision-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 18px;
          }

          .vision-button {
            width: 100%;
            min-height: 44px;
            font-size: 13px;
          }

          .vision-mobile-details-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 42px;
            border: 1px solid rgba(244,183,58,0.24);
            border-radius: 999px;
            background: rgba(244,183,58,0.08);
            color: var(--color-accent-yellow);
            font-size: 11px;
            font-weight: 900;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }

          .vision-stage {
            display: none;
          }

          .vision-lens {
            min-height: 260px;
            border-radius: 24px;
          }

          .vision-lens::before {
            inset: 12px;
            border-radius: 18px;
          }

          .vision-lens-top {
            left: 18px;
            right: 18px;
            top: 16px;
          }

          .vision-lens-top span {
            padding: 6px 8px;
            font-size: 8px;
            letter-spacing: 0.14em;
          }

          .vision-product-one {
            left: 9%;
            top: 26%;
            width: 64px;
            height: 124px;
          }

          .vision-product-two {
            right: 8%;
            top: 19%;
            width: 124px;
            height: 124px;
          }

          .vision-product-three {
            right: 26%;
            bottom: 23%;
            width: 74px;
            height: 116px;
          }

          .vision-product-four {
            left: 24%;
            bottom: 18%;
            width: 86px;
            height: 86px;
          }

          .vision-founder-card {
            left: 16px;
            right: 16px;
            bottom: 16px;
            border-radius: 16px;
            padding: 13px 14px;
          }

          .vision-founder-card p {
            font-size: 21px;
          }

          .vision-founder-card span {
            margin-top: 6px;
            font-size: 9px;
            letter-spacing: 0.16em;
          }

          .vision-founder-card strong {
            width: 38px;
            height: 38px;
            font-size: 12px;
          }

          .vision-standards {
            border-radius: 22px;
            padding: 17px;
          }

          .vision-standards-header {
            padding-bottom: 12px;
          }

          .vision-standards-header span {
            font-size: 9px;
            letter-spacing: 0.18em;
          }

          .vision-standards-header b {
            font-size: 24px;
          }

          .vision-beats {
            gap: 9px;
            margin-top: 13px;
          }

          .vision-beat {
            grid-template-columns: 25px minmax(0, 1fr);
            gap: 10px;
            border-radius: 14px;
            padding: 11px;
          }

          .vision-beat span {
            width: 25px;
            height: 25px;
            font-size: 10px;
          }

          .vision-beat p {
            font-size: 11.5px;
            line-height: 1.42;
          }

          .vision-beta-card {
            grid-column: auto;
            border-radius: 20px;
            padding: 16px;
          }

          .vision-beta-card p {
            margin-top: 9px;
            font-size: 12px;
            line-height: 1.45;
          }

          .vision-modal {
            position: fixed;
            inset: 0;
            z-index: 120;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.72);
            backdrop-filter: blur(12px);
            padding: 24px;
            animation: visionModalFade 220ms ease both;
          }

          .vision-modal-card {
            position: relative;
            width: min(100%, 390px);
            max-height: calc(100svh - 72px);
            overflow: auto;
            border: 1px solid rgba(255,255,255,0.14);
            border-radius: 24px;
            background: linear-gradient(150deg, rgba(242,95,43,0.16), rgba(10,4,5,0.96) 42%, rgba(244,183,58,0.12)), var(--color-bg-card);
            box-shadow: 0 34px 110px rgba(0,0,0,0.68);
            padding: 22px 18px 18px;
            animation: visionModalPop 340ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
          }

          .vision-modal-close {
            position: absolute;
            right: 14px;
            top: 14px;
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

          .vision-modal-kicker {
            display: inline-flex;
            border: 1px solid rgba(242,95,43,0.42);
            border-radius: 999px;
            background: rgba(242,95,43,0.12);
            color: var(--color-accent-primary);
            padding: 7px 10px;
            font-size: 9px;
            line-height: 1;
            font-weight: 900;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }

          .vision-modal-card h3 {
            margin: 14px 48px 0 0;
            color: white;
            font-size: 28px;
            line-height: 1.02;
            font-weight: 700;
            letter-spacing: -0.03em;
          }

          .vision-modal-beats {
            display: grid;
            gap: 11px;
            margin-top: 18px;
          }

          .vision-modal-beat {
            display: grid;
            grid-template-columns: 28px minmax(0, 1fr);
            gap: 11px;
            align-items: start;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 16px;
            background: rgba(255,255,255,0.055);
            padding: 12px;
          }

          .vision-modal-beat span {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: var(--color-accent-primary);
            color: white;
            font-size: 11px;
            font-weight: 900;
          }

          .vision-modal-beat p {
            margin: 0;
            color: rgba(255,255,255,0.74);
            font-size: 12.2px;
            line-height: 1.52;
            font-weight: 650;
          }

          .vision-modal-beta {
            margin-top: 13px;
            border: 1px solid rgba(244,183,58,0.24);
            border-radius: 18px;
            background: rgba(244,183,58,0.1);
            padding: 14px;
          }

          .vision-modal-beta strong {
            color: var(--color-accent-yellow);
            font-size: 10px;
            line-height: 1;
            font-weight: 900;
            letter-spacing: 0.2em;
            text-transform: uppercase;
          }

          .vision-modal-beta p {
            margin: 9px 0 0;
            color: rgba(255,255,255,0.75);
            font-size: 12px;
            line-height: 1.5;
            font-weight: 700;
          }
        }

        @media (max-height: 760px) and (min-width: 1024px) {
          .vision-shell {
            padding-top: 42px;
            padding-bottom: 42px;
            gap: 38px;
          }

          .vision-title {
            font-size: 56px !important;
          }

          .vision-quote {
            font-size: 21px;
          }

          .vision-body {
            font-size: 15px;
          }

          .vision-stage,
          .vision-lens {
            min-height: 470px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vision-grain,
          .vision-copy,
          .vision-stage,
          .vision-product-cloud {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
