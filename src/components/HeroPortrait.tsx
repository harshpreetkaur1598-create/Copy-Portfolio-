import React, { useEffect } from 'react';
import hero1 from '../assets/images/Hero_1.png';
import hero2 from '../assets/images/Hero_2.png';
import hero3 from '../assets/images/Hero_3.png';

interface HeroPortraitProps {
  slideIndex: number;
  slidePhase?: 'idle' | 'exiting' | 'entering';
  slideDirection?: 'next' | 'prev';
  onNext?: () => void;
}

// 3 uploaded hero assets:
// Slide 0: Expressive / Laughing (hero1)
// Slide 1: Composed / Serious (hero2)
// Slide 2: Confident Smile (hero3)
const HERO_PORTRAITS = [
  { id: 'hero-1', src: hero1, alt: 'Harshpreet Kaur - Expressive' },
  { id: 'hero-2', src: hero2, alt: 'Harshpreet Kaur - Composed' },
  { id: 'hero-3', src: hero3, alt: 'Harshpreet Kaur - Confident Smile' },
];

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  slideIndex,
  slidePhase = 'idle',
  slideDirection = 'next',
  onNext,
}) => {
  // Clear any legacy localStorage items from prior debugging
  useEffect(() => {
    try {
      localStorage.removeItem('harshpreet_photo_0');
      localStorage.removeItem('harshpreet_photo_1');
      localStorage.removeItem('harshpreet_photo_2');
    } catch {
      // Ignore storage errors
    }
  }, []);

  const activeIndex = Math.abs(slideIndex) % HERO_PORTRAITS.length;

  // Container slide offset during phase transitions
  const getPhaseTransitionStyle = () => {
    if (slidePhase === 'exiting') {
      return slideDirection === 'next'
        ? '-translate-x-10 opacity-30 scale-[0.98] duration-220 ease-in'
        : 'translate-x-10 opacity-30 scale-[0.98] duration-220 ease-in';
    }
    if (slidePhase === 'entering') {
      return slideDirection === 'next'
        ? 'translate-x-10 opacity-30 scale-[0.98] transition-none'
        : '-translate-x-10 opacity-30 scale-[0.98] transition-none';
    }
    return 'translate-x-0 opacity-100 scale-100 duration-450 ease-out';
  };

  const phaseClass = getPhaseTransitionStyle();

  return (
    <div
      onClick={onNext}
      title="Click to cycle portrait"
      className={`relative w-[300px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[540px] 2xl:w-[580px] h-[460px] sm:h-[520px] md:h-[580px] lg:h-[640px] xl:h-[700px] flex items-end justify-center select-none mx-auto group z-20 overflow-visible cursor-pointer transition-all transform ${phaseClass}`}
    >
      {/* Floating breathing wrapper active during idle state */}
      <div
        className={`w-full h-full relative flex items-end justify-center ${
          slidePhase === 'idle' ? 'animate-portrait-float' : ''
        }`}
      >
        {HERO_PORTRAITS.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <img
              key={item.id}
              src={item.src}
              alt={item.alt}
              className={`hero-portrait-img absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-contain object-bottom pointer-events-none transform origin-bottom transition-all ${
                isActive
                  ? 'opacity-100 scale-100 translate-y-0 z-10 duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025] group-hover:-translate-y-1.5'
                  : 'opacity-0 scale-[0.96] translate-y-4 z-0 pointer-events-none duration-400 ease-in'
              }`}
              style={{
                mixBlendMode: 'multiply',
                objectFit: 'contain',
              }}
              loading="eager"
              decoding="async"
            />
          );
        })}
      </div>
    </div>
  );
};
