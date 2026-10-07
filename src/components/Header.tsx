import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenWork: () => void;
  onScrollToContact: () => void;
  onOpenAbout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenWork,
  onScrollToContact,
  onOpenAbout,
}) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isBubbleOpen, setIsBubbleOpen] = useState(false);

  // 3-Minute (180s) Timer Mechanism
  useEffect(() => {
    // Immediate shortcut check via ?sherry or ?about query params for testing
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.has('sherry') || params.has('about') || params.has('secret')) {
        setIsBlinking(true);
        return;
      }
    }

    const STORAGE_KEY = 'portfolio_sherry_timer_start';
    let startTime = 0;
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        startTime = Number(stored);
      } else {
        startTime = Date.now();
        sessionStorage.setItem(STORAGE_KEY, String(startTime));
      }
    } catch {
      startTime = Date.now();
    }

    const checkTimer = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= 180000) {
        // 3 minutes (180,000 ms) reached
        setIsBlinking(true);
      }
    };

    checkTimer();
    const interval = setInterval(checkTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubtitleClick = (e: React.MouseEvent) => {
    if (isBlinking) {
      e.preventDefault();
      e.stopPropagation();
      onOpenAbout?.();
    }
  };

  return (
    <header
      id="top-header"
      className="sticky top-0 z-50 w-full bg-white px-4 sm:px-10 md:px-14 lg:px-20 pt-2.5 pb-2.5 sm:pt-4 sm:pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between relative transition-all min-h-[96px] sm:min-h-[92px] md:min-h-[100px]"
    >
      <style>{`
        @keyframes blinkRedSherry {
          0%, 100% { color: #FF0000; text-shadow: 0 0 10px rgba(255, 0, 0, 0.7); opacity: 1; }
          50% { color: #000000; text-shadow: none; opacity: 0.35; }
        }
      `}</style>

      {/* MOBILE LAYOUT (< sm): 3-tier hierarchy matching mobile reference */}
      <div className="flex flex-col items-center w-full sm:hidden pt-1 pb-1">
        {/* Tier 1: Bold Centered Name */}
        <a
          href="#"
          className="font-anton text-[1.85rem] xs:text-[2.2rem] tracking-tight text-black hover:opacity-95 transition-opacity uppercase leading-none text-center"
        >
          HARSHPREET KAUR
        </a>

        {/* Tier 2: Subtitle strictly constrained to name's width (Blinks red after 3 minutes) */}
        <div
          className="relative inline-block mt-1 group"
          onMouseEnter={() => isBlinking && setIsBubbleOpen(true)}
          onMouseLeave={() => isBlinking && setIsBubbleOpen(false)}
        >
          <span
            onClick={handleSubtitleClick}
            className={`font-courier text-[8.5px] xs:text-[9.5px] tracking-[0.14em] xs:tracking-[0.18em] uppercase font-semibold text-center whitespace-nowrap block transition-colors ${
              isBlinking ? 'cursor-pointer select-none active:scale-95' : 'text-black'
            }`}
            style={isBlinking ? { animation: 'blinkRedSherry 0.9s ease-in-out infinite' } : undefined}
            title={isBlinking ? 'Click to see: Who is sherry?' : undefined}
          >
            COPYWRITER <span className="mx-0.5 text-black font-normal">|</span> CREATIVE STRATEGIST
          </span>

          {/* Secret "Who is sherry?" Chat Bubble on Mobile */}
          {isBlinking && (isBubbleOpen || true) && (
            <div className={`absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2 transition-all duration-200 ${isBubbleOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onOpenAbout?.();
                }}
                className="bg-[#FF0000] text-black px-3.5 py-1.5 rounded-lg shadow-2xl cursor-pointer whitespace-nowrap font-courier font-bold text-xs tracking-wide flex items-center gap-1.5 border border-black/30 hover:bg-[#e00000] active:scale-95 transition-transform animate-bounce relative"
                aria-label="Who is sherry? Click to visit secret about page"
              >
                {/* Chat bubble tail pointing up */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-b-[6px] border-b-[#FF0000]" />
                <span>Who is sherry?</span>
                <span className="text-black font-extrabold text-[10px]" aria-hidden="true">💬</span>
              </button>
            </div>
          )}
        </div>

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

        <div
          className="relative inline-block mt-1.5 group"
          onMouseEnter={() => isBlinking && setIsBubbleOpen(true)}
          onMouseLeave={() => isBlinking && setIsBubbleOpen(false)}
        >
          <span
            onClick={handleSubtitleClick}
            className={`font-courier text-[10px] sm:text-xs md:text-[13px] tracking-[0.22em] uppercase font-semibold whitespace-nowrap block transition-colors ${
              isBlinking ? 'cursor-pointer select-none active:scale-95' : 'text-black'
            }`}
            style={isBlinking ? { animation: 'blinkRedSherry 0.9s ease-in-out infinite' } : undefined}
            title={isBlinking ? 'Click to see: Who is sherry?' : undefined}
          >
            COPYWRITER <span className="mx-1 text-black font-normal">|</span> CREATIVE STRATEGIST
          </span>

          {/* Secret "Who is sherry?" Chat Bubble on Desktop */}
          {isBlinking && (isBubbleOpen || true) && (
            <div className={`absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2 transition-all duration-200 ${isBubbleOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onOpenAbout?.();
                }}
                className="bg-[#FF0000] text-black px-4 py-2 rounded-lg shadow-2xl cursor-pointer whitespace-nowrap font-courier font-extrabold text-xs sm:text-sm tracking-wide flex items-center gap-2 border border-black/30 hover:bg-[#e00000] active:scale-95 transition-transform animate-bounce relative"
                aria-label="Who is sherry? Click to visit secret about page"
              >
                {/* Chat bubble tail pointing up */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-b-[6px] border-b-[#FF0000]" />
                <span>Who is sherry?</span>
                <span className="text-black font-extrabold text-[12px]" aria-hidden="true">💬</span>
              </button>
            </div>
          )}
        </div>
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
