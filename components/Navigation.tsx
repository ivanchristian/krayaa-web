'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Why Krayaa', href: '#why-krayaa' },
    { label: 'Vision', href: '#vision' },
    { label: 'For Creators', href: '#creators' },
    { label: 'For Brands', href: '#brands' },
  ];

  return (
    <>
      <nav className="fixed top-0 z-[100] w-full border-b border-white/5 bg-[rgba(10,4,5,0.72)] backdrop-blur-xl">
        <div className="nav-shell">
          <div className="flex h-16 w-full items-center justify-between gap-4 md:h-20">
            {/* Logo */}
            <a href="#hero" className="shrink-0 text-xl font-black tracking-[-0.04em] text-[var(--color-accent-primary)] transition-opacity hover:opacity-90 md:text-2xl">
              KRAYAA
            </a>

            {/* Desktop Navigation */}
            <div className="hidden flex-1 items-center justify-end gap-4 lg:flex xl:gap-7">
              <div className="flex min-w-0 items-center justify-end gap-4 xl:gap-7">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="whitespace-nowrap text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>

              <a href="#join" className="btn btn-primary shrink-0 px-5 py-1.5 text-sm font-medium shadow-[0_8px_30px_rgba(242,95,43,0.18)] xl:px-6">
                Join Waitlist
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)} className="relative flex h-10 w-10 items-center justify-center lg:hidden">
              <div className="relative h-5 w-6">
                <span className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-white transition-all duration-300 ${isOpen ? 'translate-y-[9px] rotate-45' : ''}`} />

                <span className={`absolute left-0 top-[9px] h-[2px] w-full rounded-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />

                <span className={`absolute left-0 top-[18px] h-[2px] w-full rounded-full bg-white transition-all duration-300 ${isOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[90] bg-[var(--color-bg-primary)]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div
          style={{ paddingLeft: '1.25rem', paddingRight: '1.25rem', paddingTop: '6rem' }}
          className="flex min-h-screen w-full flex-col sm:pt-28"
        >
          <div className="flex w-full flex-col gap-4 sm:gap-5">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="w-full border-b border-white/8 pb-4 text-[22px] font-bold tracking-[-0.03em] text-white transition-opacity hover:opacity-80 sm:pb-5 sm:text-[28px]"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 w-full sm:mt-10">
            <a
              href="#join"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary w-full justify-center py-1.5 text-base font-medium shadow-[0_10px_40px_rgba(242,95,43,0.25)] sm:text-lg"
            >
              Be first — Join the Waitlist
            </a>
            <p className="mt-4 text-center text-sm leading-relaxed text-[var(--color-text-secondary)]">
              5,000+ already on the waitlist
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
