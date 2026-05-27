'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type CarouselItem = {
  key: string;
  label: string;
  render: () => ReactNode;
};

export default function VerticalCategoryCarousel({ items }: { items: CarouselItem[] }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const transitionTimeoutRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInCarousel, setIsInCarousel] = useState(true);

  const safeItems = useMemo(() => (items?.length ? items : []), [items]);

  const scrollToIndex = useCallback((index: number) => {
    const target = slideRefs.current[index];

    if (!target) return;

    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current);
    }

    isAnimatingRef.current = true;
    activeIndexRef.current = index;
    setActiveIndex(index);

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    transitionTimeoutRef.current = window.setTimeout(() => {
      isAnimatingRef.current = false;
      transitionTimeoutRef.current = null;
    }, 850);
  }, []);

  const goToAdjacent = useCallback(
    (direction: 1 | -1) => {
      const nextIndex = Math.max(0, Math.min(safeItems.length - 1, activeIndexRef.current + direction));
      scrollToIndex(nextIndex);
    },
    [safeItems.length, scrollToIndex]
  );

  useEffect(() => {
    if (!safeItems.length) return;

    let frame = 0;

    const updateActiveSlide = () => {
      window.cancelAnimationFrame(frame);

      frame = window.requestAnimationFrame(() => {
        const root = rootRef.current;
        if (!root) return;

        const rootBounds = root.getBoundingClientRect();
        setIsInCarousel(rootBounds.top < window.innerHeight && rootBounds.bottom > 0);

        if (isAnimatingRef.current) return;

        const viewportMiddle = window.innerHeight / 2;
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        slideRefs.current.forEach((slide, index) => {
          if (!slide) return;

          const bounds = slide.getBoundingClientRect();
          const slideMiddle = bounds.top + bounds.height / 2;
          const distance = Math.abs(viewportMiddle - slideMiddle);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        activeIndexRef.current = closestIndex;
        setActiveIndex(closestIndex);
      });
    };

    updateActiveSlide();
    window.addEventListener('scroll', updateActiveSlide, { passive: true });
    window.addEventListener('resize', updateActiveSlide);

    return () => {
      window.cancelAnimationFrame(frame);
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
      window.removeEventListener('scroll', updateActiveSlide);
      window.removeEventListener('resize', updateActiveSlide);
    };
  }, [safeItems.length]);

  useEffect(() => {
    if (!safeItems.length) return;

    const canControlCarousel = () => {
      const root = rootRef.current;
      if (!root) return false;

      const bounds = root.getBoundingClientRect();
      return bounds.top < window.innerHeight && bounds.bottom > 0;
    };

    const moveByGesture = (direction: 1 | -1) => {
      if (isAnimatingRef.current || !canControlCarousel()) return;

      const currentIndex = activeIndexRef.current;
      const nextIndex = Math.max(0, Math.min(safeItems.length - 1, currentIndex + direction));

      if (nextIndex === currentIndex) return;

      scrollToIndex(nextIndex);
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (Math.abs(e.deltaY) < 8) return;
      if (!canControlCarousel()) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentIndex = activeIndexRef.current;
      const isBoundaryScroll = (currentIndex === 0 && direction === -1) || (currentIndex === safeItems.length - 1 && direction === 1);

      if (isBoundaryScroll) return;

      e.preventDefault();
      moveByGesture(direction);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e: TouchEvent) => {
      const startY = touchStartYRef.current;
      const currentY = e.touches[0]?.clientY;

      if (startY === null || currentY === undefined || !canControlCarousel()) return;

      const deltaY = startY - currentY;
      if (Math.abs(deltaY) < 48) return;

      const direction = deltaY > 0 ? 1 : -1;
      const currentIndex = activeIndexRef.current;
      const isBoundarySwipe = (currentIndex === 0 && direction === -1) || (currentIndex === safeItems.length - 1 && direction === 1);

      if (isBoundarySwipe) return;

      e.preventDefault();
      touchStartYRef.current = null;
      moveByGesture(direction);
    };

    const onTouchEnd = () => {
      touchStartYRef.current = null;
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [safeItems.length, scrollToIndex]);

  useEffect(() => {
    if (!safeItems.length) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (!isInCarousel) return;
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

      e.preventDefault();
      goToAdjacent(e.key === 'ArrowDown' ? 1 : -1);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goToAdjacent, isInCarousel, safeItems.length]);

  if (!safeItems.length) return null;

  const showBackToTop = activeIndex > 0;

  return (
    <div ref={rootRef} className="vertical-page-carousel relative bg-[var(--color-bg-primary)]" aria-label="Vertical page carousel">
      <div className="sr-only">Scroll the page vertically to move through sections.</div>

      {safeItems.map((item, index) => (
        <div
          key={item.key}
          ref={(node) => {
            slideRefs.current[index] = node;
          }}
          className={[
            index === activeIndex ? 'carousel-slide-active section-active' : 'carousel-slide-inactive',
            item.key === 'hero'
              ? 'min-h-[100svh] bg-[linear-gradient(180deg,#0a0405_0%,#0d0505_44%,#180706_78%,#0a0405_100%)] [scroll-snap-align:start] [&>section]:!min-h-[100svh] lg:h-[100svh] lg:overflow-hidden lg:[&>section]:!h-[100svh]'
              : item.key === 'footer'
                ? '-mt-16 bg-[#070203] [scroll-snap-align:start] md:-mt-20'
                : 'min-h-[100svh] pt-16 [scroll-snap-align:start] md:pt-20 [&>section]:!min-h-[calc(100svh-4rem)] md:[&>section]:!min-h-[calc(100svh-5rem)] lg:[&>section]:flex lg:[&>section]:items-center lg:[&>section]:justify-center',
            item.key === 'hero' || item.key === 'footer'
              ? ''
              : item.key === 'final'
              ? 'lg:min-h-[100svh] lg:[&>section]:!min-h-[calc(100svh-5rem)]'
              : 'lg:h-[100svh] lg:overflow-hidden lg:[&>section]:!h-[calc(100svh-5rem)] lg:[&>section]:!min-h-[calc(100svh-5rem)]',
            item.key === 'hero'
              ? 'bg-[linear-gradient(180deg,#0a0405_0%,#0d0505_44%,#180706_78%,#0a0405_100%)]'
              : item.key === 'final'
                ? 'bg-[linear-gradient(180deg,#090304_0%,#080203_70%,#070203_100%)]'
                : item.key === 'footer'
                  ? 'bg-[#070203]'
                  : 'bg-[var(--color-bg-primary)]',
          ].join(' ')}
        >
          {item.render()}
        </div>
      ))}

      <div
        className={`pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 transition-opacity duration-200 sm:inset-x-auto sm:bottom-auto sm:right-4 sm:top-1/2 sm:-translate-y-1/2 sm:justify-start ${
          isInCarousel ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-2 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:flex-col">
          <button
            type="button"
            onClick={() => goToAdjacent(-1)}
            disabled={activeIndex === 0}
            className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Previous section"
          >
            &uarr;
          </button>

          {safeItems.map((item, idx) => (
            <button
              type="button"
              key={item.key}
              onClick={() => scrollToIndex(idx)}
              className={
                idx === activeIndex
                  ? 'h-2.5 w-2.5 rounded-full bg-[var(--color-accent-primary)]'
                  : 'h-2.5 w-2.5 rounded-full bg-white/35 transition hover:bg-white/70'
              }
              aria-label={`Go to ${item.label}`}
              aria-current={idx === activeIndex ? 'true' : undefined}
            />
          ))}

          <button
            type="button"
            onClick={() => goToAdjacent(1)}
            disabled={activeIndex === safeItems.length - 1}
            className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Next section"
          >
            &darr;
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToIndex(0)}
        className={`back-to-top-button ${showBackToTop && isInCarousel ? 'is-visible' : ''}`}
        aria-label="Back to top"
      >
        <span aria-hidden="true">&uarr;</span>
        <strong>Top</strong>
      </button>

      <style>{`
        .back-to-top-button {
          position: fixed;
          left: 22px;
          bottom: 22px;
          z-index: 60;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 44px;
          border: 1px solid rgba(242,95,43,0.32);
          border-radius: 999px;
          background:
            linear-gradient(135deg, rgba(242,95,43,0.18), rgba(244,183,58,0.08)),
            rgba(7,2,3,0.74);
          color: white;
          padding: 0 15px 0 10px;
          box-shadow: 0 18px 56px rgba(0,0,0,0.44), 0 0 0 1px rgba(255,255,255,0.05) inset;
          backdrop-filter: blur(18px);
          cursor: pointer;
          opacity: 0;
          pointer-events: none;
          transform: translate3d(0, 12px, 0) scale(0.94);
          transition: opacity 220ms ease, transform 220ms ease, border-color 220ms ease, background 220ms ease;
        }

        .back-to-top-button.is-visible {
          opacity: 1;
          pointer-events: auto;
          transform: translate3d(0, 0, 0) scale(1);
        }

        .back-to-top-button:hover {
          border-color: rgba(242,95,43,0.62);
          background:
            linear-gradient(135deg, rgba(242,95,43,0.28), rgba(244,183,58,0.13)),
            rgba(7,2,3,0.84);
          transform: translate3d(0, -2px, 0) scale(1.01);
        }

        .back-to-top-button span {
          display: grid;
          place-items: center;
          width: 26px;
          height: 26px;
          border-radius: 999px;
          background: var(--color-accent-primary);
          color: white;
          font-size: 15px;
          font-weight: 700;
          line-height: 1;
        }

        .back-to-top-button strong {
          font-size: 11px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .vertical-page-carousel button,
        .vertical-page-carousel button *,
        .vertical-page-carousel .btn,
        .vertical-page-carousel .btn *,
        .vertical-page-carousel a[href="#join"],
        .vertical-page-carousel a[href="#join"] * {
          font-weight: 600 !important;
        }

        .section-active > section:is(#vision, #creators, #brands, #press, #faq, #join) {
          animation: sectionActiveFrame 1200ms cubic-bezier(0.16, 1, 0.3, 1) both !important;
        }

        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .vision-shell,
        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .fc-copy,
        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .fc-form-wrap,
        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .fb-copy,
        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .fb-form-wrap,
        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .press-copy,
        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .press-scorecard,
        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .press-proof-grid,
        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .press-bottom-card,
        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .faq-intro,
        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .faq-panel,
        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .final-copy,
        .section-active section:is(#vision, #creators, #brands, #press, #faq, #join) .final-card {
          animation: sectionActiveGrow 1280ms cubic-bezier(0.16, 1, 0.3, 1) both !important;
        }

        .section-active section:is(#creators, #brands, #press, #faq, #join) .fc-form-wrap,
        .section-active section:is(#creators, #brands, #press, #faq, #join) .fb-form-wrap,
        .section-active section:is(#creators, #brands, #press, #faq, #join) .press-scorecard,
        .section-active section:is(#creators, #brands, #press, #faq, #join) .faq-panel,
        .section-active section:is(#creators, #brands, #press, #faq, #join) .final-card {
          animation-delay: 180ms !important;
        }

        .section-active footer,
        .section-active .footer-shell {
          animation: sectionActiveGrow 1280ms cubic-bezier(0.16, 1, 0.3, 1) both !important;
        }

        @keyframes sectionActiveFrame {
          from {
            opacity: 0.72;
            transform: translate3d(0, 26px, 0) scale(0.992);
            filter: saturate(0.88) blur(2px);
          }
          55% {
            opacity: 1;
            filter: saturate(1.08) blur(0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: saturate(1) blur(0);
          }
        }

        @keyframes sectionActiveGrow {
          from {
            opacity: 0;
            transform: translate3d(0, 34px, 0) scale(0.965);
            filter: blur(8px);
          }
          60% {
            opacity: 1;
            filter: blur(0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }

        @media (max-width: 640px) {
          .back-to-top-button {
            left: 16px;
            bottom: 16px;
            min-height: 30px;
            gap: 5px;
            padding: 0 9px 0 6px;
          }

          .back-to-top-button span {
            width: 20px;
            height: 20px;
            font-size: 12px;
          }

          .back-to-top-button strong {
            font-size: 8px;
            letter-spacing: 0.1em;
          }
        }
      `}</style>
    </div>
  );
}
