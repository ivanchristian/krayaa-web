import Image from 'next/image';

const stats = [
  { value: '5,000+', label: 'Buyer waitlist target' },
  { value: '50+', label: 'Creator partners' },
  { value: '20+', label: 'Brand conversations' },
  { value: 'Q3 2026', label: 'Public launch window' },
];

const proofPoints = [
  {
    label: 'Founder-market fit',
    title: 'Seoul lived-in, India built-for.',
    body: 'A founder story that explains the trust gap clearly for buyers, brands, and investors.',
  },
  {
    label: 'Launch pipeline',
    title: 'Buyers, creators, and brands in one story.',
    body: 'The pre-launch funnel is designed around three audiences, not vanity traffic.',
  },
  {
    label: 'Press narrative',
    title: 'Korean culture commerce, localized for India.',
    body: 'Simple enough for journalists, credible enough for Korean brands entering India.',
  },
];

const signals = ['Korea sourced', 'India first', 'Creator led', 'Authenticated supply'];

export default function Press() {
  return (
    <section id="press" className="press-section">
      <Image src="/assets/background_whykrayaa.png" alt="" fill sizes="100vw" className="press-bg-image" />
      <div className="press-overlay" />
      <div className="press-grid" />

      <div className="container-wide press-container">
        <div className="press-shell">
          <div className="press-copy">
            <span className="press-kicker">Press & credibility</span>
            <h2>Signals that make Krayaa feel real before launch.</h2>
            <p>
              We are pre-launch, so credibility has to come from clarity: a sharp market, verified supply, founder context, and visible momentum.
            </p>
          </div>

          <div className="press-scorecard">
            <div className="press-scorecard-top">
              <div>
                <span>Launch proof</span>
                <strong>Momentum board</strong>
              </div>
              <em>Q3 2026</em>
            </div>

            <div className="press-stats">
              {stats.map((stat, index) => (
                <div key={stat.label} className="press-stat" style={{ animationDelay: `${index * 80}ms` }}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="press-proof-grid">
            {proofPoints.map((point, index) => (
              <article className="press-proof-card" key={point.title} style={{ animationDelay: `${index * 100 + 120}ms` }}>
                <span>{point.label}</span>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
                <small>{`0${index + 1}`}</small>
              </article>
            ))}
          </div>

          <div className="press-bottom-card">
            <div>
              <span>Credibility language</span>
              <h3>Ready for decks, press intros, and Korean brand conversations.</h3>
            </div>
            <div className="press-signal-row">
              {signals.map((signal) => (
                <strong key={signal}>{signal}</strong>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .press-section {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          background: var(--color-bg-primary);
          color: white;
          isolation: isolate;
        }

        .press-bg-image {
          pointer-events: none;
          object-fit: cover;
          opacity: 0.58;
        }

        .press-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(10,4,5,0.92), rgba(10,4,5,0.58) 46%, rgba(10,4,5,0.93)),
            radial-gradient(circle at 18% 20%, rgba(242,95,43,0.2), transparent 32%),
            radial-gradient(circle at 82% 72%, rgba(34,197,94,0.13), transparent 34%);
        }

        .press-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.055;
          background-image:
            linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(circle at center, black, transparent 78%);
          animation: pressGrid 30s linear infinite;
        }

        .press-container {
          position: relative;
          z-index: 1;
          display: flex;
          min-height: 100svh;
          align-items: center;
        }

        .press-shell {
          width: 100%;
          max-width: 1260px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1fr);
          grid-template-areas:
            'copy score'
            'proof proof'
            'bottom bottom';
          gap: 24px;
          padding-top: 70px;
          padding-bottom: 70px;
        }

        .press-copy {
          grid-area: copy;
          align-self: end;
          animation: pressRise 760ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .press-kicker {
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

        .press-copy h2 {
          max-width: 660px;
          margin: 18px 0 0;
          color: white;
          font-size: clamp(34px, 4.2vw, 56px) !important;
          line-height: 1;
          font-weight: 700 !important;
          letter-spacing: -0.035em;
        }

        .press-copy p {
          max-width: 610px;
          margin: 20px 0 0;
          color: rgba(255,255,255,0.66);
          font-size: 16px;
          line-height: 1.58;
          font-weight: 700;
        }

        .press-scorecard {
          grid-area: score;
          align-self: end;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03)),
            rgba(10,4,5,0.62);
          padding: 24px;
          box-shadow: 0 30px 92px rgba(0,0,0,0.38);
          backdrop-filter: blur(20px);
          animation: pressRise 760ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both;
        }

        .press-scorecard-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 18px;
        }

        .press-scorecard-top span,
        .press-bottom-card span,
        .press-proof-card > span {
          color: var(--color-accent-primary);
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .press-scorecard-top strong {
          display: block;
          margin-top: 8px;
          color: white;
          font-size: 32px;
          line-height: 0.96;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .press-scorecard-top em {
          border: 1px solid rgba(244,183,58,0.3);
          border-radius: 999px;
          background: rgba(244,183,58,0.1);
          color: var(--color-accent-yellow);
          padding: 8px 12px;
          font-style: normal;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.12em;
          white-space: nowrap;
        }

        .press-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .press-stat {
          min-height: 114px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border: 1px solid rgba(255,255,255,0.11);
          border-radius: 20px;
          background: rgba(255,255,255,0.052);
          padding: 15px;
          animation: pressRise 680ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .press-stat strong {
          color: var(--color-accent-yellow);
          /* slightly smaller on large screens to fit layout */
          font-size: clamp(22px, 2.2vw, 32px);
          line-height: 0.9;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .press-stat span {
          display: block;
          margin-top: 10px;
          color: rgba(255,255,255,0.5);
          font-size: 10px;
          line-height: 1.25;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .press-proof-grid {
          grid-area: proof;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .press-proof-card {
          position: relative;
          min-height: 230px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 26px;
          background:
            radial-gradient(circle at 20% 0%, rgba(242,95,43,0.12), transparent 40%),
            rgba(10,4,5,0.58);
          padding: 24px;
          box-shadow: 0 24px 72px rgba(0,0,0,0.28);
          backdrop-filter: blur(18px);
          animation: pressRise 760ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .press-proof-card h3 {
          max-width: 330px;
          margin: 24px 0 0;
          color: white;
          font-size: 28px;
          line-height: 0.98;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .press-proof-card p {
          max-width: 360px;
          margin: 16px 0 0;
          color: rgba(255,255,255,0.62);
          font-size: 14px;
          line-height: 1.48;
          font-weight: 700;
        }

        .press-proof-card small {
          position: absolute;
          right: 20px;
          top: 18px;
          color: rgba(255,255,255,0.05);
          font-size: 74px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.08em;
        }

        @media (min-width: 1000px) and (max-width: 1600px) {
          .press-container {
            min-height: auto;
            align-items: flex-start;
          }

          .press-shell {
            gap: 42px;
            padding-top: 92px;
            padding-bottom: 92px;
            align-items: flex-start;
          }

          .press-copy h2 {
            font-size: clamp(38px, 4vw, 52px) !important;
          }

          .press-copy p {
            font-size: 15px;
            line-height: 1.75;
            max-width: 620px;
          }

          .press-scorecard {
            padding: 28px;
          }

          .press-proof-grid {
            gap: 18px;
          }

          .press-proof-card {
            min-height: 248px;
          }

          .press-bottom-card {
            padding: 28px;
          }
        }

        .press-bottom-card {
          grid-area: bottom;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 26px;
          background:
            linear-gradient(135deg, rgba(244,183,58,0.1), rgba(255,255,255,0.035), rgba(34,197,94,0.07)),
            rgba(10,4,5,0.62);
          padding: 24px;
          box-shadow: 0 24px 72px rgba(0,0,0,0.28);
          backdrop-filter: blur(18px);
          animation: pressRise 760ms cubic-bezier(0.16, 1, 0.3, 1) 320ms both;
        }

        .press-bottom-card h3 {
          max-width: 520px;
          margin: 10px 0 0;
          color: white;
          font-size: 28px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .press-signal-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 10px;
        }

        .press-signal-row strong {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          background: rgba(255,255,255,0.055);
          color: rgba(255,255,255,0.76);
          padding: 11px 14px;
          font-size: 12px;
          line-height: 1;
          font-weight: 750;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        @keyframes pressGrid {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-54px, -54px, 0); }
        }

        @keyframes pressRise {
          from { opacity: 0; transform: translate3d(0, 22px, 0) scale(0.985); filter: blur(5px); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
        }

        @media (max-width: 1180px) {
          .press-shell {
            grid-template-columns: 1fr;
            grid-template-areas:
              'copy'
              'score'
              'proof'
              'bottom';
            max-width: 900px;
            gap: 18px;
          }

          .press-copy,
          .press-scorecard {
            align-self: auto;
          }
        }

        @media (max-width: 767px) {
          .press-container {
            min-height: 100svh;
            align-items: flex-start;
          }

          .press-bg-image {
            opacity: 0.46;
          }

          .press-shell {
            display: block;
            padding-top: 38px;
            padding-bottom: 86px;
          }

          .press-kicker {
            padding: 6px 10px;
            font-size: 8.5px;
            letter-spacing: 0.18em;
          }

          .press-copy h2 {
            max-width: 390px;
            margin-top: 13px;
            font-size: 34px !important;
            line-height: 1;
            font-weight: 700 !important;
            letter-spacing: -0.03em;
          }

          .press-copy p {
            max-width: 410px;
            margin-top: 12px;
            font-size: 11.5px;
            line-height: 1.42;
          }

          .press-scorecard {
            margin-top: 15px;
            border-radius: 22px;
            padding: 14px;
          }

          .press-scorecard-top {
            align-items: center;
            margin-bottom: 10px;
          }

          .press-scorecard-top strong {
            margin-top: 6px;
            font-size: 22px;
          }

          .press-scorecard-top em {
            padding: 6px 8px;
            font-size: 8px;
          }

          .press-scorecard-top span,
          .press-bottom-card span,
          .press-proof-card > span {
            font-size: 8.5px;
            letter-spacing: 0.18em;
          }

          .press-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 7px;
          }

          .press-stat {
            min-height: 64px;
            border-radius: 15px;
            padding: 10px 11px;
          }

          .press-stat strong {
            font-size: 22px;
          }

          .press-stat span {
            margin-top: 6px;
            font-size: 7.4px;
            letter-spacing: 0.1em;
          }

          .press-proof-grid {
            margin-top: 9px;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 7px;
          }

          .press-proof-card {
            min-height: 126px;
            border-radius: 16px;
            padding: 12px 10px 11px;
          }

          .press-proof-card h3 {
            max-width: 118px;
            margin-top: 10px;
            font-size: 12.4px;
            line-height: 1.08;
            letter-spacing: -0.035em;
          }

          .press-proof-card p {
            display: block;
            max-width: 118px;
            margin-top: 7px;
            color: rgba(255,255,255,0.56);
            font-size: 9.4px;
            line-height: 1.25;
            font-weight: 750;
          }

          .press-proof-card small {
            right: 9px;
            top: 8px;
            font-size: 34px;
          }

          .press-bottom-card {
            margin-top: 10px;
            display: block;
            border-radius: 18px;
            padding: 13px;
          }

          .press-bottom-card h3 {
            max-width: 380px;
            margin-top: 8px;
            font-size: 16px;
            line-height: 1.08;
            letter-spacing: -0.035em;
          }

          .press-signal-row {
            justify-content: flex-start;
            gap: 6px;
            margin-top: 12px;
          }

          .press-signal-row strong {
            padding: 8px 9px;
            font-size: 8px;
            letter-spacing: 0.06em;
          }

          .press-copy {
            animation-name: pressMobileCopy;
          }

          .press-scorecard {
            animation-name: pressMobilePanel;
          }

          .press-stat,
          .press-proof-card {
            animation-name: pressMobilePop;
          }
        }

        @media (max-width: 390px) {
          .press-copy h2 {
            font-size: 31px !important;
          }

          .press-shell {
            padding-top: 34px;
          }

          .press-proof-card h3 {
            font-size: 11.6px;
          }

          .press-proof-card {
            min-height: 120px;
          }

          .press-proof-card p {
            font-size: 8.8px;
          }

          .press-signal-row strong {
            font-size: 7.4px;
            padding: 7px 8px;
          }
        }

        @media (max-height: 780px) and (min-width: 1024px) {
          .press-shell {
            padding-top: 44px;
            padding-bottom: 44px;
          }

          .press-proof-card {
            min-height: 198px;
          }

          .press-bottom-card {
            padding: 18px 20px;
          }
        }

        @media (max-width: 767px) {
          .press-shell {
            padding-top: 24px !important;
            transform: translateY(-8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .press-grid,
          .press-copy,
          .press-scorecard,
          .press-stat,
          .press-proof-card,
          .press-bottom-card {
            animation: none;
          }
        }

        @keyframes pressMobileCopy {
          from { opacity: 0; transform: translate3d(-18px, 0, 0); clip-path: inset(0 18% 0 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); clip-path: inset(0); }
        }

        @keyframes pressMobilePanel {
          from { opacity: 0; transform: translate3d(0, 14px, 0) scale(0.96); clip-path: inset(18% 0 0 0 round 22px); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); clip-path: inset(0 round 22px); }
        }

        @keyframes pressMobilePop {
          from { opacity: 0; transform: translate3d(0, 10px, 0) scale(0.92) rotate(-1deg); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1) rotate(0); }
        }
      `}</style>
    </section>
  );
}
