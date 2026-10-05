import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../data/portfolioData';

// User-cropped Cloudinary portrait asset
const PORTRAIT_URL = 'https://res.cloudinary.com/uybanqfq/image/upload/v1791220241/copy_of_img_0510.png';

interface HeroCarouselProps {
  onExploreWork: () => void;
  currentSlide?: number;
  onSlideChange?: (idx: number) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  currentSlide: controlledSlide,
  onSlideChange
}) => {
  const [internalSlide, setInternalSlide] = useState(0);
  const isControlled = controlledSlide !== undefined;
  const currentSlide = isControlled ? controlledSlide : internalSlide;

  const setCurrentSlide = (idx: number) => {
    if (onSlideChange) onSlideChange(idx);
    if (!isControlled) setInternalSlide(idx);
  };

  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Slide transition animation state
  const [displaySlide, setDisplaySlide] = useState(currentSlide);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [slidePhase, setSlidePhase] = useState<'idle' | 'exiting' | 'entering'>('idle');

  // Stats count-up animation state
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1800;
    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) requestAnimationFrame(animate);
    };
    const animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // Touch swipe support
  const touchStartXRef = useRef<number | null>(null);

  // Handle slide transitions with smooth animation
  useEffect(() => {
    if (currentSlide === displaySlide) return;

    const isForward =
      (currentSlide > displaySlide && !(displaySlide === 0 && currentSlide === HERO_SLIDES.length - 1)) ||
      (displaySlide === HERO_SLIDES.length - 1 && currentSlide === 0);

    const dir = isForward ? 'next' : 'prev';
    setSlideDirection(dir);
    setSlidePhase('exiting');

    const exitTimer = setTimeout(() => {
      setDisplaySlide(currentSlide);
      setSlidePhase('entering');

      const enterTimer = setTimeout(() => {
        setSlidePhase('idle');
      }, 40);

      return () => clearTimeout(enterTimer);
    }, 200);

    return () => clearTimeout(exitTimer);
  }, [currentSlide, displaySlide]);

  // Auto advance every 7 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, currentSlide]);

  const handlePrevSlide = () => {
    const prevIdx = (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    setCurrentSlide(prevIdx);
  };

  const handleNextSlide = () => {
    const nextIdx = (currentSlide + 1) % HERO_SLIDES.length;
    setCurrentSlide(nextIdx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevSlide();
      if (e.key === 'ArrowRight') handleNextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNextSlide();
      else handlePrevSlide();
    }
    touchStartXRef.current = null;
  };

  const slide = HERO_SLIDES[displaySlide];

  const getSlideAnimationClass = () => {
    if (slidePhase === 'exiting') {
      return slideDirection === 'next'
        ? '-translate-x-10 opacity-0 duration-200 ease-in'
        : 'translate-x-10 opacity-0 duration-200 ease-in';
    }
    if (slidePhase === 'entering') {
      return slideDirection === 'next'
        ? 'translate-x-10 opacity-0 transition-none'
        : '-translate-x-10 opacity-0 transition-none';
    }
    return 'translate-x-0 opacity-100 duration-350 ease-out';
  };

  const slideAnimClass = getSlideAnimationClass();

  return (
    <section
      id="hero-services-carousel"
      className="relative w-full bg-white select-none overflow-hidden h-[calc(100vh-96px)] sm:h-[calc(100vh-92px)] md:h-[calc(100vh-100px)] min-h-[580px] max-h-[1050px]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle Arrow Controls (z-40) */}
      <button
        id="hero-prev-btn"
        onClick={handlePrevSlide}
        className="absolute left-2 sm:left-4 top-[40%] -translate-y-1/2 z-40 p-2 text-black/25 hover:text-black hover:bg-black/5 active:scale-95 transition-all cursor-pointer"
        aria-label="Previous banner"
      >
        <span className="font-courier font-bold text-2xl inline-block">‹</span>
      </button>

      <button
        id="hero-next-btn"
        onClick={handleNextSlide}
        className="absolute right-2 sm:right-4 top-[40%] -translate-y-1/2 z-40 p-2 text-black/25 hover:text-black hover:bg-black/5 active:scale-95 transition-all cursor-pointer"
        aria-label="Next banner"
      >
        <span className="font-courier font-bold text-2xl inline-block">›</span>
      </button>

      {/* 2. COPY LAYER (z-10): Left High Headline & Right Low Headline */}
      {/* MOBILE HEADLINE (< md): Stacked clean lines at top matching reference */}
      <div className="w-full pt-3 xs:pt-4 pb-1 px-3 flex flex-col items-center text-center md:hidden z-10 relative">
        <div className={`transition-all transform ${slideAnimClass} flex flex-col items-center w-full`}>
          {/* Line 1: Single line "COPY-PASTE GETS CLOCKED." */}
          <h1 className="font-anton text-[24px] xs:text-[27px] sm:text-3xl text-black uppercase tracking-tight leading-[1.08] whitespace-nowrap text-center">
            {slide.phrase1.join(' ')}
          </h1>

          {/* Line 2: Single line "I CREATE CONTENT THAT CONVERTS." */}
          <h2 className="font-anton text-[24px] xs:text-[27px] sm:text-3xl text-black uppercase tracking-tight leading-[1.08] whitespace-nowrap text-center mt-1">
            <span>{slide.phrase2Lines?.join(' ') || 'I CREATE CONTENT'} </span>
            <span>{slide.phrase2Lead}</span>
            <span className="text-[#FF0000]">{slide.phrase2Accent}</span>
          </h2>
        </div>
      </div>

      {/* Left High Headline (Desktop): Positioned high up; Banner 1 adjusted inward while Banners 2 & 3 remain in their perfect position */}
      <div
        className={`hidden md:block absolute ${
          displaySlide === 0
            ? 'left-8 sm:left-12 md:left-16 lg:left-24 xl:left-32 2xl:left-40'
            : 'left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 2xl:left-24'
        } top-[8%] sm:top-[9%] lg:top-[11%] z-10 text-left max-w-[260px] md:max-w-[280px] lg:max-w-[360px] xl:max-w-[460px] 2xl:max-w-[540px] transition-all`}
      >
        <div className={`w-full transition-all transform ${slideAnimClass}`}>
          <h1 className="font-anton text-3xl md:text-[2.35rem] lg:text-[3.2rem] xl:text-[4.4rem] 2xl:text-[5.4rem] text-black uppercase tracking-tight leading-[1.05]">
            {slide.phrase1.map((line, idx) => (
              <span key={`p1-${idx}`} className="block whitespace-nowrap leading-[1.05] m-0 p-0">
                {line}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* Right Low Headline (Desktop): Identical increased leading, placed farther away from bottom stats strip */}
      <div
        className="hidden md:block absolute right-4 sm:right-6 md:right-8 lg:left-auto lg:right-12 xl:right-16 2xl:right-24 bottom-[165px] sm:bottom-[175px] md:bottom-[185px] lg:bottom-[195px] xl:bottom-[210px] 2xl:bottom-[225px] z-10 text-left max-w-[260px] md:max-w-[280px] lg:max-w-[360px] xl:max-w-[460px] 2xl:max-w-[540px]"
      >
        <div className={`w-full transition-all transform ${slideAnimClass}`}>
          <h2 className="font-anton text-3xl md:text-[2.35rem] lg:text-[3.2rem] xl:text-[4.4rem] 2xl:text-[5.4rem] text-black uppercase tracking-tight leading-[1.05]">
            {slide.phrase2Lines?.map((line, idx) => (
              <span key={`p2-line-${idx}`} className="block whitespace-nowrap leading-[1.05] m-0 p-0">
                {line}
              </span>
            ))}
            <span className="block whitespace-nowrap leading-[1.05] m-0 p-0">
              <span>{slide.phrase2Lead}</span>
              <span className="text-[#FF0000]">{slide.phrase2Accent}</span>
            </span>
          </h2>
        </div>
      </div>

      {/* 3. PHOTO LAYER (z-20): Centered, head starts cleanly under mobile headline, body extends down behind stats bar */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[78px] xs:top-[84px] sm:top-[92px] md:top-0 bottom-[-24px] xs:bottom-[-28px] md:bottom-0 h-auto md:h-full w-full md:w-auto max-w-[88vw] xs:max-w-[84vw] sm:max-w-[72vw] md:max-w-[40vw] lg:max-w-[42vw] xl:max-w-[46vw] 2xl:max-w-[50vw] flex items-start justify-center z-20 pointer-events-none select-none"
      >
        <img
          src={PORTRAIT_URL}
          alt="Harshpreet Kaur"
          className="h-full w-auto max-h-full max-w-full object-contain object-top pointer-events-none select-none"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* 4. FROSTED TRANSPARENT BLACK STATS STRIP (z-30): Frosted glass blur overlaying portrait at bottom-0 */}
      <div
        id="work-stats-bar"
        className="absolute bottom-0 left-0 w-full z-30 bg-black/65 backdrop-blur-md text-white pt-3 pb-2.5 sm:pb-2.5 px-3 sm:px-6 md:px-10 lg:px-16 select-none border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* MOBILE LAYOUT (< sm): 2 Rows matching mobile reference */}
          <div className="flex flex-col sm:hidden space-y-2.5">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="font-anton text-3xl xs:text-4xl tracking-tight text-white leading-none">
                  {Math.round(5 * progress)}+
                </div>
                <div className="font-courier text-[9px] xs:text-[10px] tracking-wider text-white uppercase font-bold pt-1">
                  YEARS OF EXP.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-anton text-3xl xs:text-4xl tracking-tight text-white leading-none">
                  {Math.round(30 * progress)}+
                </div>
                <div className="font-courier text-[9px] xs:text-[10px] tracking-wider text-white uppercase font-bold pt-1">
                  BRANDS ELEVATED
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center pt-0.5">
              <div className="flex flex-col items-center">
                <div className="font-anton text-2xl xs:text-[1.75rem] tracking-tight text-white leading-none">
                  {Math.round(20 * progress)}+
                </div>
                <div className="font-courier text-[8px] xs:text-[9px] tracking-wider text-white uppercase font-bold pt-1">
                  TOUCHPOINTS ACED
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-anton text-2xl xs:text-[1.75rem] tracking-tight text-white leading-none">
                  {Math.round(50 * progress)}+
                </div>
                <div className="font-courier text-[8px] xs:text-[9px] tracking-wider text-white uppercase font-bold pt-1">
                  CAMPAIGNS CRAFTED
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-anton text-2xl xs:text-[1.75rem] tracking-tight text-[#FF0000] leading-none">
                  ∞
                </div>
                <div className="font-courier text-[8px] xs:text-[9px] tracking-wider text-white uppercase font-bold pt-1">
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

        {/* Carousel Indicator Pills Centered Directly Below */}
        <div className="flex items-center justify-center gap-2 pt-2.5 pb-2 sm:pb-0.5">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={`hero-dot-${idx}`}
              onClick={() => setCurrentSlide(idx)}
              className="py-1 px-1 focus:outline-none cursor-pointer"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`transition-all duration-300 ${
                  currentSlide === idx
                    ? 'w-10 sm:w-14 h-1.5 sm:h-2 rounded-full bg-white shadow-sm'
                    : 'w-2 sm:w-2.5 h-1.5 sm:h-2 rounded-full bg-white/40 hover:bg-white/70'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
