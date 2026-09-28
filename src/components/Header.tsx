import React from 'react';

interface HeaderProps {
  onOpenWork: () => void;
  onScrollToContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWork, onScrollToContact }) => {
  return (
    <header
      id="top-header"
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xs px-6 sm:px-12 md:px-16 lg:px-20 pt-[47px] pb-4 pl-[79px] flex items-center justify-between relative"
    >
      {/* Left: WORK link */}
      <button
        id="nav-work-btn"
        onClick={onOpenWork}
        className="font-courier font-bold text-xs sm:text-sm tracking-[0.18em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer z-10"
        aria-label="View all work"
      >
        WORK
      </button>

      {/* Center: Name & Subtitle - EXACT DEAD CENTER OF SCREEN */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center pointer-events-auto">
        <a
          href="#"
          className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] tracking-tight text-black hover:opacity-95 transition-opacity uppercase leading-none -mt-[23px] h-[53px] flex items-center"
        >
          HARSHPREET KAUR
        </a>
        <span className="font-courier text-[10px] sm:text-xs md:text-sm tracking-[0.22em] text-black uppercase mt-1.5 font-semibold pt-0 pl-0">
          COPYWRITER <span className="mx-1 text-black font-normal">|</span> CREATIVE STRATEGIST
        </span>
      </div>

      {/* Right: CONTACT link */}
      <button
        id="nav-contact-btn"
        onClick={onScrollToContact}
        className="font-courier font-bold text-xs sm:text-sm tracking-[0.18em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer z-10 pt-0"
        aria-label="Scroll to contact section"
      >
        CONTACT
      </button>
    </header>
  );
};
