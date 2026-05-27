const footerGroups = [
  {
    title: 'Platform',
    links: [
      { label: "What's Coming", href: '#whats-coming' },
      { label: 'Why Krayaa', href: '#why-krayaa' },
      { label: 'Vision', href: '#vision' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Partner',
    links: [
      { label: 'For Creators', href: '#creators' },
      { label: 'For Brands', href: '#brands' },
      { label: 'Press & Credibility', href: '#press' },
      { label: 'Join Waitlist', href: '#join' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'hello@krayaa.com', href: 'mailto:hello@krayaa.com' },
      { label: 'Instagram', href: 'https://instagram.com/krayaa', external: true },
      { label: 'X / Twitter', href: 'https://twitter.com/krayaa', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/krayaa', external: true },
    ],
  },
];

const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Contact', href: 'mailto:hello@krayaa.com' },
];

function SocialIcon({ label }: { label: string }) {
  if (label === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (label === 'X / Twitter') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path d="M5 5l14 14M19 5L5 19" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M6.5 10v8M6.5 7v.1M11 18v-5.2A2.8 2.8 0 0 1 13.8 10 3.2 3.2 0 0 1 17 13.2V18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.9" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-bg" />
      <div className="footer-line" />

      <div className="footer-container">
        <div className="footer-brand footer-rise">
          <a href="#hero" className="footer-logo">
            KRAYAA
          </a>
          <p>Authentic Korean culture commerce for India. Verified supply, creator-led drops, and a launch built for people who already love Korea.</p>

          <div className="footer-tags">
            {['Q3 2026', 'India first', 'Seoul sourced'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="footer-note footer-rise">
          <span>Pre-launch note</span>
          <strong>Korea drops first to the list.</strong>
          <p>Krayaa is preparing buyer access, creator partnerships, and Korean brand onboarding for the Q3 2026 launch window.</p>
        </div>

        <div className="footer-links">
          {footerGroups.map((group, groupIndex) => (
            <div key={group.title} className="footer-group footer-rise" style={{ animationDelay: `${groupIndex * 70}ms` }}>
              <h3>{group.title}</h3>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined}>
                      {link.external ? (
                        <span className="footer-social">
                          <SocialIcon label={link.label} />
                        </span>
                      ) : null}
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom footer-rise">
          <p>Copyright {currentYear} Krayaa. All rights reserved.</p>
          <div>
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          position: relative;
          overflow: hidden;
          background: #070203;
          color: white;
          padding: 58px 0 34px;
          isolation: isolate;
        }

        .footer-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(7,2,3,0.88), rgba(7,2,3,0.96)),
            radial-gradient(circle at 15% 0%, rgba(242,95,43,0.2), transparent 28%),
            radial-gradient(circle at 78% 6%, rgba(244,183,58,0.12), transparent 30%),
            linear-gradient(90deg, rgba(242,95,43,0.08), transparent 34%, rgba(244,183,58,0.05));
        }

        .footer-bg::after {
          content: '';
          position: absolute;
          inset: -20%;
          opacity: 0.075;
          background-image:
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 46px 46px;
          mask-image: radial-gradient(circle at center, black, transparent 72%);
          animation: footerGrid 32s linear infinite;
        }

        .footer-line {
          position: absolute;
          inset: 0 0 auto;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(242,95,43,0.58), rgba(244,183,58,0.28), transparent);
        }

        .footer-container {
          position: relative;
          z-index: 2;
          width: min(1220px, calc(100% - 48px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 0.66fr) minmax(480px, 1fr);
          gap: 42px;
          align-items: start;
        }

        .footer-logo {
          display: inline-flex;
          color: var(--color-accent-primary);
          font-size: 28px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.045em;
        }

        .footer-brand p {
          margin: 16px 0 0;
          max-width: 430px;
          color: rgba(255,255,255,0.62);
          font-size: 14px;
          line-height: 1.72;
          font-weight: 600;
        }

        .footer-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
        }

        .footer-tags span {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          background: rgba(255,255,255,0.055);
          color: rgba(255,255,255,0.58);
          padding: 8px 10px;
          font-size: 9px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .footer-note {
          border: 1px solid rgba(242,95,43,0.22);
          border-radius: 22px;
          background:
            linear-gradient(145deg, rgba(242,95,43,0.12), rgba(244,183,58,0.055)),
            rgba(10,4,5,0.5);
          padding: 20px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.34);
          backdrop-filter: blur(18px);
        }

        .footer-note span,
        .footer-group h3 {
          color: var(--color-accent-primary);
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .footer-note strong {
          display: block;
          margin-top: 11px;
          color: white;
          font-size: 23px;
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .footer-note p {
          margin: 12px 0 0;
          color: rgba(255,255,255,0.56);
          font-size: 13px;
          line-height: 1.62;
          font-weight: 650;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .footer-group ul {
          display: grid;
          gap: 13px;
          margin-top: 17px;
          list-style: none;
        }

        .footer-group a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.62);
          font-size: 14px;
          font-weight: 750;
          transition: color 180ms ease, transform 180ms ease;
        }

        .footer-group a:hover {
          color: white;
          transform: translateX(2px);
        }

        .footer-social {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.58);
          transition: border-color 180ms ease, color 180ms ease;
        }

        .footer-group a:hover .footer-social {
          border-color: rgba(242,95,43,0.45);
          color: var(--color-accent-primary);
        }

        .footer-bottom {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
          margin-top: 12px;
          padding-top: 24px;
          color: rgba(255,255,255,0.4);
          font-size: 12px;
          font-weight: 650;
        }

        .footer-bottom div {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }

        .footer-bottom a {
          transition: color 180ms ease;
        }

        .footer-bottom a:hover {
          color: white;
        }

        .footer-rise {
          animation: footerRise 620ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes footerGrid {
          to { transform: translate3d(-46px, -46px, 0); }
        }

        @keyframes footerRise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1080px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .footer-links {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .site-footer {
            padding: 30px 0 82px;
          }

          .footer-container {
            width: min(100% - 38px, 430px);
            gap: 18px;
          }

          .footer-logo {
            font-size: 25px;
          }

          .footer-brand p {
            margin-top: 11px;
            font-size: 11.8px;
            line-height: 1.5;
          }

          .footer-tags {
            margin-top: 13px;
            gap: 7px;
          }

          .footer-tags span {
            padding: 7px 9px;
            font-size: 8px;
          }

          .footer-note {
            padding: 14px;
            border-radius: 17px;
          }

          .footer-note strong {
            margin-top: 9px;
            font-size: 17px;
          }

          .footer-note p {
            margin-top: 8px;
            font-size: 11.4px;
            line-height: 1.45;
          }

          .footer-links {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px 18px;
          }

          .footer-group:last-child {
            grid-column: 1 / -1;
          }

          .footer-group ul {
            gap: 9px;
            margin-top: 12px;
          }

          .footer-group a {
            font-size: 11.8px;
          }

          .footer-group h3,
          .footer-note span {
            font-size: 8.8px;
            letter-spacing: 0.18em;
          }

          .footer-social {
            width: 27px;
            height: 27px;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
            margin-top: 2px;
            padding-top: 18px;
            padding-bottom: 8px;
            font-size: 10.8px;
          }

          .footer-bottom div {
            gap: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-bg::after,
          .footer-rise {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
}
