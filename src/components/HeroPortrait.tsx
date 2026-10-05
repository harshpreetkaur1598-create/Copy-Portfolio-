import React from 'react';
import hero2 from '../assets/images/Hero_2.png';

interface HeroPortraitProps {
  onNext?: () => void;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ onNext }) => {
  return (
    <div
      onClick={onNext}
      className="relative w-full h-full flex items-end justify-center select-none cursor-pointer"
    >
      {/* Soft ambient radial gradient behind portrait matching layout reference images */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] md:w-[560px] lg:w-[680px] xl:w-[760px] h-[340px] sm:h-[460px] md:h-[560px] lg:h-[680px] xl:h-[760px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(200, 200, 200, 0.45) 0%, rgba(230, 230, 230, 0.25) 50%, rgba(255, 255, 255, 0) 72%)',
          filter: 'blur(30px)'
        }}
      />

      {/* Hero 2 Portrait Image - Tall, uncropped, grounded at bottom */}
      <img
        src={hero2}
        alt="Harshpreet Kaur - Copywriter & Creative Strategist"
        className="h-full w-auto max-h-[84vh] object-contain object-bottom pointer-events-none select-none transition-transform duration-500 ease-out hover:scale-[1.01]"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
