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

  return (
    <div ref={rootRef} className="relative bg-[var(--color-bg-primary)]" aria-label="Vertical page carousel">
      <div className="sr-only">Scroll the page vertically to move through sections.</div>

      {safeItems.map((item, index) => (
        <div
          key={item.key}
          ref={(node) => {
            slideRefs.current[index] = node;
          }}
          className="min-h-svh scroll-mt-16 [scroll-snap-align:start] [&>section]:min-h-svh md:scroll-mt-20"
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
    </div>
  );
}
