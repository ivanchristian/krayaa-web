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
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#100504_0%,#070203_36%,#070203_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(242,95,43,0.22),transparent_24%),radial-gradient(circle_at_84%_6%,rgba(244,183,58,0.1),transparent_28%)]" />
      <div className="footer-grid pointer-events-none absolute inset-0 opacity-[0.075]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,95,43,0.55),rgba(244,183,58,0.28),transparent)]" />

      <div className="container-wide relative z-10 py-10 sm:py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.35fr] lg:gap-16 xl:gap-20">
          <div className="footer-rise max-w-xl">
            <a href="#hero" className="inline-flex text-[28px] font-black leading-none tracking-[-0.045em] text-[var(--color-accent-primary)] sm:text-[32px]">
              KRAYAA
            </a>
            <p className="mt-4 max-w-md text-[14px] leading-[1.7] text-white/62 sm:text-[15px]">
              Authentic Korean culture commerce for India. Verified supply, creator-led drops, and a launch built for people who already love Korea.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {['Q3 2026', 'India first', 'Seoul sourced'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-white/56 shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 max-w-lg rounded-xl border border-[var(--color-accent-primary)]/20 bg-[rgba(242,95,43,0.075)] p-4 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-md">
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--color-accent-primary)]">Pre-launch note</div>
              <p className="mt-2.5 text-[13px] leading-[1.6] text-white/56">
                Krayaa is currently preparing buyer access, creator partnerships, and Korean brand onboarding for the Q3 2026 launch window.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:pt-1">
            {footerGroups.map((group, groupIndex) => (
              <div key={group.title} className="footer-rise" style={{ animationDelay: `${groupIndex * 80}ms` }}>
                <h3 className="text-[10px] font-black uppercase tracking-[0.24em] text-white/40">{group.title}</h3>
                <ul className="mt-4 grid gap-3.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="group inline-flex items-center gap-2.5 text-[14px] font-semibold text-white/62 transition hover:text-white"
                      >
                        {link.external ? (
                          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-white/56 transition group-hover:border-[var(--color-accent-primary)]/45 group-hover:text-[var(--color-accent-primary)]">
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
        </div>

        <div className="my-8 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)] lg:my-10" />

        <div className="footer-rise flex flex-col gap-4 text-[12px] text-white/42 md:flex-row md:items-center md:justify-between">
          <p>Copyright {currentYear} Krayaa. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-rise mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center text-[12px] font-semibold leading-[1.55] text-white/44 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-5">
          Built for K-culture lovers in India, Korean brands entering India, and creators ready to host what fans actually want.
        </div>
      </div>

      <style>{`
        .footer-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: radial-gradient(circle at center, black, transparent 78%);
          animation: footerGrid 30s linear infinite;
        }

        .footer-rise {
          animation: footerRise 620ms ease both;
        }

        @keyframes footerGrid {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-42px, -42px, 0); }
        }

        @keyframes footerRise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-grid,
          .footer-rise {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
}
