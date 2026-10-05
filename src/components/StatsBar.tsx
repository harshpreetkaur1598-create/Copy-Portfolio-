import React, { useState, useEffect } from 'react';
import { WORK_STATS, HERO_SLIDES } from '../data/portfolioData';

interface StatsBarProps {
  currentSlide?: number;
  onSelectSlide?: (idx: number) => void;
}

export const StatsBar: React.FC<StatsBarProps> = ({ currentSlide = 0, onSelectSlide }) => {
  // Simultaneous count-up animation for all stats on site load
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1800; // 1.8 seconds simultaneous smooth count-up

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const t = Math.min(elapsed / duration, 1);
      // Cubic ease-out curve for natural deceleration
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);

      if (t < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section
      id="work-stats-bar"
      className="w-full bg-black/85 backdrop-blur-md text-white pt-3 pb-2.5 px-3 sm:px-6 md:px-10 lg:px-16 select-none relative z-30 -mt-8 sm:-mt-12 md:-mt-14 border-t border-white/15 shadow-2xl"
    >
      {/* 
        Stats Row:
        - Mobile: 2 rows matching PDF 2 Page 1
        - Desktop: 5-column grid matching PDF 1 Page 1
      */}
      <div className="max-w-7xl mx-auto">
        {/* MOBILE LAYOUT (< sm): Row 1 (5 & 30+), Row 2 (20+, 50+, ∞) */}
        <div className="flex flex-col sm:hidden space-y-2">
          {/* Row 1: 5 & 30+ */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="font-anton text-2xl tracking-tight text-white leading-none">
                {Math.round(5 * progress)}+
              </div>
              <div className="font-courier text-[8px] tracking-wider text-white uppercase font-bold pt-1">
                YEARS OF EXP.
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-anton text-2xl tracking-tight text-white leading-none">
                {Math.round(30 * progress)}+
              </div>
              <div className="font-courier text-[8px] tracking-wider text-white uppercase font-bold pt-1">
                BRANDS ELEVATED
              </div>
            </div>
          </div>

          {/* Row 2: 20+, 50+, ∞ */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center">
              <div className="font-anton text-2xl tracking-tight text-white leading-none">
                {Math.round(20 * progress)}+
              </div>
              <div className="font-courier text-[8px] tracking-wider text-white uppercase font-bold pt-1">
                TOUCHPOINTS ACED
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-anton text-2xl tracking-tight text-white leading-none">
                {Math.round(50 * progress)}+
              </div>
              <div className="font-courier text-[8px] tracking-wider text-white uppercase font-bold pt-1">
                CAMPAIGNS CRAFTED
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-anton text-2xl tracking-tight text-[#FF0000] leading-none">
                ∞
              </div>
              <div className="font-courier text-[8px] tracking-wider text-white uppercase font-bold pt-1">
                IDEAS SPARKED
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP / TABLET LAYOUT (sm and above): 5-column single row */}
        <div className="hidden sm:grid grid-cols-5 gap-4 md:gap-8 lg:gap-12 items-center justify-between text-center">
          {/* 1. 5+ YEARS OF EXP. */}
          <div className="flex flex-col items-center justify-center p-1 group">
            <div className="font-anton text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              {Math.round(5 * progress)}+
            </div>
            <div className="font-courier text-[9px] md:text-[11px] lg:text-xs tracking-[0.16em] text-white uppercase font-bold pt-1.5 whitespace-nowrap">
              YEARS OF EXP.
            </div>
          </div>

          {/* 2. 20+ TOUCHPOINTS ACED */}
          <div className="flex flex-col items-center justify-center p-1 group">
            <div className="font-anton text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              {Math.round(20 * progress)}+
            </div>
            <div className="font-courier text-[9px] md:text-[11px] lg:text-xs tracking-[0.16em] text-white uppercase font-bold pt-1.5 whitespace-nowrap">
              TOUCHPOINTS ACED
            </div>
          </div>

          {/* 3. 30+ BRANDS ELEVATED */}
          <div className="flex flex-col items-center justify-center p-1 group">
            <div className="font-anton text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              {Math.round(30 * progress)}+
            </div>
            <div className="font-courier text-[9px] md:text-[11px] lg:text-xs tracking-[0.16em] text-white uppercase font-bold pt-1.5 whitespace-nowrap">
              BRANDS ELEVATED
            </div>
          </div>

          {/* 4. 50+ CAMPAIGNS CRAFTED */}
          <div className="flex flex-col items-center justify-center p-1 group">
            <div className="font-anton text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              {Math.round(50 * progress)}+
            </div>
            <div className="font-courier text-[9px] md:text-[11px] lg:text-xs tracking-[0.16em] text-white uppercase font-bold pt-1.5 whitespace-nowrap">
              CAMPAIGNS CRAFTED
            </div>
          </div>

          {/* 5. ∞ IDEAS SPARKED */}
          <div className="flex flex-col items-center justify-center p-1 group">
            <div className="font-anton text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none text-[#FF0000]">
              ∞
            </div>
            <div className="font-courier text-[9px] md:text-[11px] lg:text-xs tracking-[0.16em] text-white uppercase font-bold pt-1.5 whitespace-nowrap">
              IDEAS SPARKED
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicator dots centered right below BRANDS ELEVATED with 8px padding */}
      <div className="flex items-center justify-center gap-2 pt-[8px]">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={`hero-dot-${idx}`}
            onClick={() => onSelectSlide?.(idx)}
            className="py-1 px-1 focus:outline-none cursor-pointer"
            aria-label={`Go to service slide ${idx + 1}`}
          >
            <div
              className={`transition-all duration-300 ${
                currentSlide === idx
                  ? 'w-8 sm:w-11 h-1.5 sm:h-2 rounded-full bg-white'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/40 hover:bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
