'use client';

import { useEffect, useState } from 'react';
import { trackKrayaaEvent } from '../lib/analytics';

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

              <a
                href="#join"
                onClick={() => trackKrayaaEvent('click_nav_join_waitlist', { source: 'desktop_nav' })}
                className="btn btn-primary shrink-0 px-5 py-1.5 text-sm font-medium shadow-[0_8px_30px_rgba(242,95,43,0.18)] xl:px-6"
              >
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
      <div className={`fixed inset-0 z-[90] bg-[#090203]/96 backdrop-blur-3xl transition-all duration-300 lg:hidden ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-8%] top-[10%] h-[280px] w-[280px] rounded-full bg-[rgba(242,95,43,0.16)] blur-3xl" />
          <div className="absolute right-[-12%] top-[20%] h-[300px] w-[300px] rounded-full bg-[rgba(244,183,58,0.12)] blur-3xl" />
          <div className="absolute left-[12%] bottom-[10%] h-[240px] w-[240px] rounded-full bg-[rgba(255,255,255,0.06)] blur-3xl" />
        </div>

        <div style={{ position: 'relative', minHeight: '100vh', width: '100%', padding: '24px 18px 28px', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
            <a href="#hero" style={{ fontSize: '1.7rem', fontWeight: 900, letterSpacing: '-0.06em', color: 'var(--color-accent-primary)' }}>
              KRAYAA
            </a>
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'grid',
                placeItems: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.12)',
                backgroundColor: 'rgba(255,255,255,0.05)',
                color: '#fff',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(event) => (event.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(event) => (event.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
            >
              <span style={{ fontSize: '1.1rem' }}>✕</span>
            </button>
          </div>

          <div style={{ borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.06)', padding: '22px 18px 20px', boxShadow: '0 30px 90px rgba(0,0,0,0.24)', backdropFilter: 'blur(20px)', marginBottom: '16px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.14)', backgroundColor: 'rgba(255,255,255,0.04)', padding: '6px 14px', fontSize: '10px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--color-accent-primary)' }}>
              Navigation
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.95rem', lineHeight: '1.9', color: 'rgba(255,255,255,0.82)' }}>
              Korea drops, creator programs, and brand entry in one launch story.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '14px', marginBottom: '18px' }}>
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  width: '100%',
                  borderRadius: '28px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  padding: '18px 18px 18px 18px',
                  boxShadow: '0 18px 60px rgba(0,0,0,0.2)',
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                  backdropFilter: 'blur(18px)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = 'rgba(255,149,55,0.9)';
                  event.currentTarget.style.transform = 'translateX(1px)';
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  event.currentTarget.style.transform = 'translateX(0px)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ display: 'grid', placeItems: 'center', width: '44px', height: '44px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.12)', backgroundColor: 'rgba(255,255,255,0.06)', fontSize: '0.95rem', fontWeight: 900, color: 'var(--color-accent-primary)' }}>
                    0{index + 1}
                  </div>
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{link.label}</span>
                </div>
                <span style={{ fontSize: '1.6rem', fontWeight: 900, color: 'rgba(255,149,55,0.95)' }}>→</span>
              </a>
            ))}
          </div>

          <div style={{ borderRadius: '28px', border: '1px solid rgba(255,255,255,0.12)', backgroundColor: 'rgba(255,255,255,0.04)', padding: '22px 20px', boxShadow: '0 32px 90px rgba(0,0,0,0.28)', backdropFilter: 'blur(22px)' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-accent-primary)' }}>
              Private beta access
            </span>
            <p style={{ marginTop: '16px', fontSize: '0.95rem', lineHeight: '1.9', color: 'rgba(255,255,255,0.82)' }}>
              5,000+ already on the waitlist. Early drops go first to people on the list.
            </p>
            <a
              href="#join"
              onClick={() => {
                trackKrayaaEvent('click_nav_join_waitlist', { source: 'mobile_nav' });
                setIsOpen(false);
              }}
              style={{
                display: 'inline-flex',
                width: '100%',
                justifyContent: 'center',
                borderRadius: '999px',
                background: 'linear-gradient(90deg, #f86a2a 0%, #fb8d35 50%, #ffc85e 100%)',
                padding: '16px 20px',
                marginTop: '18px',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#000',
                textDecoration: 'none',
                boxShadow: '0 18px 60px rgba(242,95,43,0.35)',
                transition: 'filter 0.2s ease',
              }}
              onMouseEnter={(event) => (event.currentTarget.style.filter = 'brightness(1.05)')}
              onMouseLeave={(event) => (event.currentTarget.style.filter = 'brightness(1)')}
            >
              Be first - Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
