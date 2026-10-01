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
      className="w-full bg-black/80 backdrop-blur-sm text-white pt-[13px] pb-[9px] px-3 sm:px-6 md:px-10 lg:px-16 select-none relative z-30 -mt-[150px] -ml-[2px] -mb-[2px] border-y border-white/10 shadow-2xl"
    >
      {/* 
        Single complete horizontal strip across all viewports (mobile, tablet, desktop):
        Overlaps directly across Harshpreet's lower torso with reduced 80% opacity so the transparency is registered.
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-2 sm:gap-4 md:gap-8 lg:gap-12 items-center justify-between text-center">
        {WORK_STATS.map((stat) => {
          // Calculate animated value from 0 up to target simultaneously
          let displayValue: React.ReactNode = stat.value;
          if (stat.id === 'exp') {
            displayValue = `${Math.round(5 * progress)}+`;
          } else if (stat.id === 'touchpoints') {
            displayValue = `${Math.round(20 * progress)}+`;
          } else if (stat.id === 'brands') {
            displayValue = `${Math.round(30 * progress)}+`;
          } else if (stat.id === 'campaigns') {
            displayValue = `${Math.round(50 * progress)}+`;
          } else if (stat.id === 'ideas') {
            displayValue = '∞';
          }

          return (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center p-1 sm:p-2 group transition-transform hover:-translate-y-0.5"
            >
              {/* Stat Value in bold Anton font (red accent for infinity symbol matching screenshot) */}
              <div
                className={`font-anton text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-1 transition-all ${
                  stat.isAccent ? 'text-[#FF0000]' : 'text-white'
                } ${
                  stat.id === 'ideas'
                    ? progress > 0.15
                      ? 'opacity-100 scale-100 duration-500'
                      : 'opacity-0 scale-50'
                    : ''
                }`}
              >
                {displayValue}
              </div>

              {/* Stat Label in bold white Courier font with 6px padding */}
              <div className="font-courier text-[7px] sm:text-[9px] md:text-[11px] lg:text-xs tracking-wider sm:tracking-[0.16em] text-white uppercase font-bold leading-tight line-clamp-1 pt-[6px]">
                {stat.label}
              </div>
            </div>
          );
        })}
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
