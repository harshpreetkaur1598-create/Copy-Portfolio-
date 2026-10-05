import React from 'react';

interface HeaderProps {
  onOpenWork: () => void;
  onScrollToContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWork, onScrollToContact }) => {
  return (
    <header
      id="top-header"
      className="sticky top-0 z-50 w-full bg-white px-4 sm:px-10 md:px-14 lg:px-20 pt-2.5 pb-2.5 sm:pt-4 sm:pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between relative transition-all min-h-[96px] sm:min-h-[92px] md:min-h-[100px]"
    >
      {/* MOBILE LAYOUT (< sm): 3-tier hierarchy matching mobile reference */}
      <div className="flex flex-col items-center w-full sm:hidden pt-1 pb-1">
        {/* Tier 1: Bold Centered Name */}
        <a
          href="#"
          className="font-anton text-[1.85rem] xs:text-[2.2rem] tracking-tight text-black hover:opacity-95 transition-opacity uppercase leading-none text-center"
        >
          HARSHPREET KAUR
        </a>

        {/* Tier 2: Subtitle strictly constrained to name's width */}
        <span className="font-courier text-[8.5px] xs:text-[9.5px] tracking-[0.14em] xs:tracking-[0.18em] text-black uppercase mt-1 font-semibold text-center whitespace-nowrap block">
          COPYWRITER <span className="mx-0.5 text-black font-normal">|</span> CREATIVE STRATEGIST
        </span>

        {/* Tier 3: Centered Nav Buttons Row underneath */}
        <div className="flex items-center justify-between w-full max-w-[280px] xs:max-w-[320px] mt-2 px-3">
          <button
            id="nav-work-btn"
            onClick={onOpenWork}
            className="font-courier font-bold text-xs xs:text-sm tracking-[0.18em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer"
            aria-label="View all work"
          >
            WORK
          </button>

          <button
            id="nav-contact-btn"
            onClick={onScrollToContact}
            className="font-courier font-bold text-xs xs:text-sm tracking-[0.18em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer"
            aria-label="Scroll to contact section"
          >
            CONTACT
          </button>
        </div>
      </div>

      {/* DESKTOP & TABLET LAYOUT (sm and above): WORK left, Name + Subtitle centered inside header, CONTACT right */}
      <button
        id="nav-work-btn-desktop"
        onClick={onOpenWork}
        className="hidden sm:block font-courier font-bold text-xs sm:text-sm tracking-[0.18em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer z-10"
        aria-label="View all work"
      >
        WORK
      </button>

      {/* Center: Name & Subtitle - EXACT DEAD CENTER OF SCREEN, fully contained with generous padding */}
      <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center pointer-events-auto">
        <a
          href="#"
          className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] tracking-tight text-black hover:opacity-95 transition-opacity uppercase leading-none"
        >
          HARSHPREET KAUR
        </a>
        <span className="font-courier text-[10px] sm:text-xs md:text-[13px] tracking-[0.22em] text-black uppercase mt-1.5 font-semibold whitespace-nowrap">
          COPYWRITER <span className="mx-1 text-black font-normal">|</span> CREATIVE STRATEGIST
        </span>
      </div>

      {/* Right: CONTACT link */}
      <button
        id="nav-contact-btn-desktop"
        onClick={onScrollToContact}
        className="hidden sm:block font-courier font-bold text-xs sm:text-sm tracking-[0.18em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer z-10"
        aria-label="Scroll to contact section"
      >
        CONTACT
      </button>
    </header>
  );
};
