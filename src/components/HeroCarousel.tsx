import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../data/portfolioData';
import { HeroPortrait } from './HeroPortrait';

interface HeroCarouselProps {
  onExploreWork: () => void;
  currentSlide?: number;
  onSlideChange?: (idx: number) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onExploreWork,
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Slide transition animation state
  const [displaySlide, setDisplaySlide] = useState(currentSlide);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [slidePhase, setSlidePhase] = useState<'idle' | 'exiting' | 'entering'>('idle');

  // Typewriter animation on the right-side subcopy on initial site load
  const [subcopyTypedChars, setSubcopyTypedChars] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Touch swipe support
  const touchStartXRef = useRef<number | null>(null);

  // Typewriter effect on the active banner's right-side subcopy (runs for each banner)
  useEffect(() => {
    setSubcopyTypedChars(0);
    setIsTypingDone(false);

    const fullText = HERO_SLIDES[displaySlide]?.subtext || '';
    if (!fullText) return;

    let intervalId: any = null;
    const delayTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        setSubcopyTypedChars((prev) => {
          if (prev >= fullText.length) {
            if (intervalId) clearInterval(intervalId);
            setIsTypingDone(true);
            return fullText.length;
          }
          return prev + 1;
        });
      }, 15); // ~15ms per character for smooth, crisp cadence
    }, 180);

    return () => {
      clearTimeout(delayTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [displaySlide]);

  // Handle slide transitions with visible sliding animation
  useEffect(() => {
    if (currentSlide === displaySlide) return;

    // Determine direction: forward (swipe left) vs backward (swipe right)
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
    }, 220);

    return () => clearTimeout(exitTimer);
  }, [currentSlide, displaySlide]);

  // Auto advance every 10 seconds (longer stay as requested)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % HERO_SLIDES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, currentSlide]);

  // Navigation handlers
  const handlePrevSlide = () => {
    const prevIdx = (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    setCurrentSlide(prevIdx);
  };

  const handleNextSlide = () => {
    const nextIdx = (currentSlide + 1) % HERO_SLIDES.length;
    setCurrentSlide(nextIdx);
  };

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevSlide();
      if (e.key === 'ArrowRight') handleNextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next
        handleNextSlide();
      } else {
        // Swiped right -> prev
        handlePrevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    setMousePos({ x: 0, y: 0 });
  };

  const slide = HERO_SLIDES[displaySlide];

  // Slide transition animation styles (independent of mouse parallax)
  const getSlideAnimationClass = () => {
    if (slidePhase === 'exiting') {
      return slideDirection === 'next'
        ? '-translate-x-16 opacity-0 duration-200 ease-in'
        : 'translate-x-16 opacity-0 duration-200 ease-in';
    }
    if (slidePhase === 'entering') {
      return slideDirection === 'next'
        ? 'translate-x-16 opacity-0 transition-none'
        : '-translate-x-16 opacity-0 transition-none';
    }
    return 'translate-x-0 opacity-100 duration-400 ease-out';
  };

  const slideAnimClass = getSlideAnimationClass();

  // Subcopy text calculation for typewriter
  const renderSubcopy = () => {
    const fullText = slide.subtext;
    if (isTypingDone) {
      return fullText;
    }
    const visibleText = fullText.slice(0, subcopyTypedChars);
    return (
      <>
        {visibleText}
        <span className="inline-block w-1.5 sm:w-2 h-[0.9em] bg-[#FF0000] ml-1 align-middle animate-pulse" />
      </>
    );
  };

  return (
    <section
      id="hero-services-carousel"
      className="relative w-full bg-white overflow-visible select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Previous Banner Arrow Button */}
      <button
        id="hero-prev-btn"
        onClick={handlePrevSlide}
        className="absolute left-1 sm:left-2 md:left-3 lg:left-4 top-[35%] -translate-y-1/2 z-30 p-2 sm:p-2.5 text-black/50 hover:text-black hover:bg-black/5 active:scale-95 transition-all cursor-pointer group"
        aria-label="Previous banner"
      >
        <span className="font-courier font-bold text-xl sm:text-2xl transition-transform group-hover:-translate-x-1 inline-block">
          ‹
        </span>
      </button>

      {/* Next Banner Arrow Button */}
      <button
        id="hero-next-btn"
        onClick={handleNextSlide}
        className="absolute right-1 sm:right-2 md:right-3 lg:right-4 top-[35%] -translate-y-1/2 z-30 p-2 sm:p-2.5 text-black/50 hover:text-black hover:bg-black/5 active:scale-95 transition-all cursor-pointer group"
        aria-label="Next banner"
      >
        <span className="font-courier font-bold text-xl sm:text-2xl transition-transform group-hover:translate-x-1 inline-block">
          ›
        </span>
      </button>

      {/* 
        Hero Composition matching locked desktop layout:
        - Left: Massive bold Anton headline (locked desktop position & scale, clean bold typography without typewriter)
        - Center: Harshpreet transparent cutout portrait LOCKED IN DEAD CENTER (strictly under HARSHPREET KAUR)
        - Right: Courier New subcopy with typewriter animation + EXPLORE WORK CTA (locked desktop position & scale)
      */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-3 sm:pt-4 md:pt-6 pb-2 sm:pb-4 flex flex-col md:flex-row justify-between items-start md:items-end min-h-[500px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[680px] xl:min-h-[740px] overflow-visible relative">
        {/* 1. Left: BOLD, MASSIVE Anton Headline with visible swipe transition */}
        <div
          className="w-full md:w-[36%] lg:w-[35%] xl:w-[36%] flex flex-col justify-start text-left z-10 self-start pt-2 sm:pt-3 md:pt-4 lg:pt-5"
          style={{
            transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * -4}px, 0)`,
            transition: mousePos.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out'
          }}
        >
          {/* Inner animated element for slide transition */}
          <div className={`w-full transition-all transform ${slideAnimClass}`}>
            <h1 className="font-anton text-4xl sm:text-5xl md:text-5xl lg:text-[4.2rem] xl:text-[5.2rem] 2xl:text-[5.8rem] tracking-tight leading-[1.04] text-black uppercase">
              {/* Phrase 1 with comfortable line spacing */}
              <span className="flex flex-col space-y-1 sm:space-y-1.5 md:space-y-2">
                {slide.phrase1.map((line, idx) => (
                  <span key={`p1-${idx}`} className="block leading-[1.04]">
                    {line}
                  </span>
                ))}
              </span>

              {/* Distinct editorial gap between the two headline phrases */}
              <span className="flex flex-col mt-5 sm:mt-6 md:mt-7 lg:mt-8 space-y-1 sm:space-y-1.5 md:space-y-2">
                {slide.phrase2Lines?.map((line, idx) => (
                  <span key={`p2-line-${idx}`} className="block whitespace-nowrap leading-[1.04]">
                    {line}
                  </span>
                ))}
                {/* Last line with lead text in black and accent word in red */}
                <span className="block whitespace-nowrap leading-[1.04]">
                  <span>{slide.phrase2Lead}</span>
                  <span className="text-[#FF0000]">{slide.phrase2Accent}</span>
                </span>
              </span>
            </h1>
          </div>
        </div>

        {/* 2. Center: Portrait Cutout DEAD CENTER OF SCREEN (strictly under HARSHPREET KAUR, desktop position LOCKED) */}
        <div
          className="w-full md:w-auto md:absolute md:left-1/2 md:bottom-0 flex justify-center items-end z-20 overflow-visible"
          style={{
            transform: `translate3d(calc(-50% + ${mousePos.x * 10}px), ${mousePos.y * 6}px, 0)`,
            transition: mousePos.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out'
          }}
        >
          <HeroPortrait slideIndex={displaySlide} />
        </div>

        {/* 3. Right: Subcopy with Typewriter animation & EXPLORE WORK CTA Button with visible swipe transition */}
        <div
          className="w-full md:w-[32%] lg:w-[30%] xl:w-[28%] flex flex-col justify-center text-left z-10 self-center md:pb-16 lg:pb-24 xl:pb-28"
          style={{
            transform: `translate3d(${mousePos.x * -5}px, ${mousePos.y * -3}px, 0)`,
            transition: mousePos.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out'
          }}
        >
          {/* Inner animated element for slide transition */}
          <div className={`w-full transition-all transform ${slideAnimClass}`}>
            {/* Subcopy in Courier New with Typewriter effect on Banner 1 */}
            <p className="font-courier text-xs sm:text-sm md:text-[14px] lg:text-[16px] xl:text-[18px] leading-relaxed text-black font-medium max-w-sm lg:max-w-md xl:max-w-lg min-h-[4.5em]">
              {renderSubcopy()}
            </p>

            {/* Explore Work CTA Button */}
            <div className="mt-5 sm:mt-6 lg:mt-8">
              <button
                id="hero-explore-work-btn"
                onClick={onExploreWork}
                className="bg-[#111111] hover:bg-[#FF0000] text-white px-7 py-3.5 sm:px-8 sm:py-4 font-courier font-bold text-xs sm:text-sm tracking-[0.16em] uppercase active:translate-y-0.5 transition-all cursor-pointer shadow-md inline-block text-center"
              >
                {slide.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
