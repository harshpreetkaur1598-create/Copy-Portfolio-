import React, { useState, useEffect, useRef } from 'react';
import { ARCHIVE_ACCORDION_CATEGORIES } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Check } from 'lucide-react';

interface ArchiveSectionProps {
  onOpenWork: () => void;
}

export const ArchiveSection: React.FC<ArchiveSectionProps> = ({ onOpenWork }) => {
  // Active accordion section: 'social' | 'performance' | 'ecommerce' (or null if all collapsed)
  const [activeCategory, setActiveCategory] = useState<'social' | 'performance' | 'ecommerce' | null>('social');

  // Active slide index within each category
  const [mediaIndices, setMediaIndices] = useState<Record<string, number>>({
    social: 0,
    performance: 0,
    ecommerce: 0
  });

  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const handlePrevMedia = (catId: string, total: number) => {
    setMediaIndices((prev) => ({
      ...prev,
      [catId]: (prev[catId] - 1 + total) % total
    }));
  };

  const handleNextMedia = (catId: string, total: number) => {
    setMediaIndices((prev) => ({
      ...prev,
      [catId]: (prev[catId] + 1) % total
    }));
  };

  const handleSetMediaIndex = (catId: string, idx: number) => {
    setMediaIndices((prev) => ({
      ...prev,
      [catId]: idx
    }));
  };

  const toggleCategory = (catId: 'social' | 'performance' | 'ecommerce') => {
    setActiveCategory((prev) => (prev === catId ? null : catId));
  };

  // Auto-swipe / advance media automatically every 4 seconds for active category (pauses while hovering)
  useEffect(() => {
    if (!activeCategory || activeCategory === 'ecommerce' || isHovered) return;

    const currentCatObj = ARCHIVE_ACCORDION_CATEGORIES.find((c) => c.id === activeCategory);
    if (!currentCatObj || currentCatObj.media.length <= 1) return;

    const timer = setInterval(() => {
      setMediaIndices((prev) => ({
        ...prev,
        [activeCategory]: ((prev[activeCategory] || 0) + 1) % currentCatObj.media.length
      }));
    }, 4000);

    return () => clearInterval(timer);
  }, [activeCategory, isHovered]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (catId: string, total: number, e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNextMedia(catId, total);
    } else if (diff < -40) {
      handlePrevMedia(catId, total);
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="archive-section"
      className="w-full bg-white text-black py-12 sm:py-16 md:py-20 px-3 sm:px-6 md:px-8 lg:px-12 select-none"
    >
      <div className="max-w-[1520px] mx-auto">
        {/* ========================================================= */}
        {/* DESKTOP ACCORDION (md and above): Horizontal Expanding Tabs */}
        {/* ========================================================= */}
        <div className="hidden md:flex w-full h-[620px] lg:h-[680px] xl:h-[720px] bg-black border border-neutral-800 rounded-none overflow-hidden relative shadow-2xl">
          {ARCHIVE_ACCORDION_CATEGORIES.map((cat, catIdx) => {
            const isExpanded = activeCategory === cat.id;
            const currentMediaIdx = mediaIndices[cat.id] || 0;
            const activeMedia = cat.media[currentMediaIdx] || cat.media[0];
            const isSocial = cat.id === 'social';

            if (!isExpanded) {
              // COLLAPSED VERTICAL TAB (Desktop)
              return (
                <div
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="w-20 lg:w-24 shrink-0 bg-black hover:bg-neutral-950 transition-all duration-500 ease-out cursor-pointer relative flex flex-col items-center justify-between py-8 px-2 border-r border-neutral-800 last:border-r-0 select-none group"
                  title={`Open ${cat.title}`}
                >
                  {/* Top Chevron Indicator */}
                  <div className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {catIdx === 0 ? (
                      <ChevronRight className="w-4 h-4" />
                    ) : (
                      <ChevronLeft className="w-4 h-4" />
                    )}
                  </div>

                  {/* Vertical Bold Anton Category Title */}
                  <div className="flex-1 flex items-center justify-center py-6">
                    <span className="font-anton text-3xl lg:text-4xl xl:text-5xl text-[#FF0000] tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 group-hover:scale-105 transition-transform whitespace-nowrap">
                      {cat.title}
                    </span>
                  </div>
                </div>
              );
            }

            // EXPANDED HORIZONTAL PANEL (Desktop)
            return (
              <div
                key={cat.id}
                className="flex-1 bg-black p-8 lg:p-12 xl:p-14 flex items-center justify-between gap-8 lg:gap-12 transition-all duration-500 ease-out overflow-hidden border-r border-neutral-800 last:border-r-0"
              >
                {/* Left Column: Category Title, Red-Square Bullets & Explore Work CTA */}
                <div className="w-[42%] lg:w-[40%] xl:w-[38%] flex flex-col justify-between h-full py-2">
                  <div>
                    {/* Category Title in Giant Red Anton */}
                    <h2 className="font-anton text-6xl lg:text-7xl xl:text-8xl text-[#FF0000] uppercase tracking-tight leading-none mb-8">
                      {cat.title}
                    </h2>

                    {/* Bullet Points with Solid Red Squares */}
                    <div className="space-y-4 lg:space-y-4.5">
                      {cat.bullets.map((bullet, bIdx) => (
                        <div key={`bullet-${bIdx}`} className="flex items-center space-x-3">
                          <span className="w-2.5 h-2.5 bg-[#FF0000] shrink-0" />
                          <span className="font-courier text-xs sm:text-sm lg:text-[14px] xl:text-[15px] font-bold tracking-[0.14em] uppercase text-white leading-tight">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Work CTA Button */}
                  <div className="pt-8">
                    <button
                      onClick={onOpenWork}
                      className="bg-white text-black hover:bg-[#FF0000] hover:text-white px-7 py-3.5 font-courier font-bold text-xs sm:text-sm tracking-[0.16em] uppercase transition-all shadow-md active:scale-95 cursor-pointer inline-block"
                    >
                      EXPLORE WORK
                    </button>
                  </div>
                </div>

                {/* Right Column: Media Preview Card with Carousel Controls or Stacked Banners for Ecommerce */}
                {cat.id === 'ecommerce' ? (
                  <div className="w-[58%] lg:w-[60%] xl:w-[62%] h-full flex flex-col justify-center items-center gap-4 lg:gap-5 px-4">
                    {cat.media.map((item, idx) => (
                      <div
                        key={item.id || idx}
                        className="w-full max-w-[560px] lg:max-w-[620px] xl:max-w-[680px] bg-neutral-900 border border-neutral-700/80 shadow-2xl overflow-hidden flex items-center justify-center group"
                      >
                        <img
                          src={item.url}
                          alt={item.title || 'Lakmé A+ Banner'}
                          className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="w-[58%] lg:w-[60%] xl:w-[62%] h-full flex items-center justify-center relative px-4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Creative Frame */}
                    <div className="w-full max-w-[460px] lg:max-w-[490px] xl:max-w-[530px] max-h-[580px] bg-neutral-900 border border-neutral-700/80 shadow-2xl flex flex-col overflow-hidden relative group">
                      {/* Social Post Top Bar (if social category) */}
                      {isSocial && (
                        <div className="bg-black/90 px-3.5 py-2.5 border-b border-neutral-800 flex items-center text-white z-10 shrink-0">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] font-bold text-white uppercase">
                              {(activeMedia.accountHandle || 'M').charAt(0)}
                            </div>
                            <span className="font-courier text-xs font-bold text-white tracking-wider">
                              {activeMedia.accountHandle || 'clinique_in'}
                            </span>
                            {activeMedia.isVerified && (
                              <span className="w-3.5 h-3.5 rounded-full bg-[#3897f0] flex items-center justify-center text-[9px] text-white font-bold">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Creative Media Image or Video */}
                      <div className="relative w-full flex-1 bg-black flex items-center justify-center overflow-hidden">
                        {activeMedia.type === 'video' || activeMedia.url.endsWith('.mp4') ? (
                          <video
                            key={activeMedia.url}
                            src={activeMedia.url}
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            className="w-full h-full object-contain max-h-[460px] lg:max-h-[500px]"
                          />
                        ) : (
                          <img
                            key={activeMedia.url}
                            src={activeMedia.url}
                            alt={activeMedia.title || cat.title}
                            className="w-full h-full object-contain max-h-[460px] lg:max-h-[500px]"
                            loading="lazy"
                          />
                        )}

                        {/* Carousel Indicator Dots at Bottom Right (▪▪▪▫) */}
                        <div className="absolute bottom-3 right-3 flex items-center space-x-1.5 bg-black/60 backdrop-blur-xs px-2 py-1 rounded-sm z-20">
                          {cat.media.map((_, dotIdx) => (
                            <button
                              key={`desktop-dot-${cat.id}-${dotIdx}`}
                              onClick={() => handleSetMediaIndex(cat.id, dotIdx)}
                              className={`transition-all ${
                                currentMediaIdx === dotIdx
                                  ? 'w-2.5 h-2.5 bg-white'
                                  : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                              }`}
                              aria-label={`View slide ${dotIdx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* MOBILE ACCORDION (< md): Vertical Stacked Cards Matching PDF 2 */}
        {/* ========================================================= */}
        <div className="flex md:hidden flex-col space-y-3 w-full">
          {ARCHIVE_ACCORDION_CATEGORIES.map((cat) => {
            const isExpanded = activeCategory === cat.id;
            const currentMediaIdx = mediaIndices[cat.id] || 0;
            const activeMedia = cat.media[currentMediaIdx] || cat.media[0];
            const isSocial = cat.id === 'social';

            if (!isExpanded) {
              // COLLAPSED HORIZONTAL BAR (Mobile)
              return (
                <div
                  key={`mobile-collapsed-${cat.id}`}
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full bg-black border border-neutral-800 px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-neutral-950 transition-colors shadow-lg active:scale-[0.99]"
                >
                  <h3 className="font-anton text-4xl sm:text-5xl text-[#FF0000] uppercase tracking-tight leading-none">
                    {cat.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-md">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              );
            }

            // EXPANDED VERTICAL CARD (Mobile)
            return (
              <div
                key={`mobile-expanded-${cat.id}`}
                className="w-full bg-black border border-neutral-800 p-5 flex flex-col space-y-5 shadow-2xl transition-all"
              >
                {/* Category Title */}
                <h3 className="font-anton text-5xl sm:text-6xl text-[#FF0000] uppercase tracking-tight leading-none">
                  {cat.title}
                </h3>

                {/* Bullets in 2-Column Grid */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 pt-1">
                  {cat.bullets.map((bullet, bIdx) => (
                    <div key={`m-bullet-${bIdx}`} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-[#FF0000] shrink-0" />
                      <span className="font-courier text-[10px] sm:text-xs font-bold tracking-wider uppercase text-white leading-tight">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Media Creative Preview or Stacked Banners for Ecommerce */}
                {cat.id === 'ecommerce' ? (
                  <div className="flex flex-col space-y-3 w-full pt-1">
                    {cat.media.map((item, idx) => (
                      <div
                        key={`m-ecomm-${idx}`}
                        className="w-full bg-neutral-900 border border-neutral-700/80 shadow-md overflow-hidden"
                      >
                        <img
                          src={item.url}
                          alt={item.title || 'Lakmé A+ Banner'}
                          className="w-full h-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="w-full bg-neutral-900 border border-neutral-700/80 shadow-xl flex flex-col overflow-hidden relative"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(cat.id, cat.media.length, e)}
                  >
                    {/* Social Header if Social */}
                    {isSocial && (
                      <div className="bg-black/90 px-3 py-2 border-b border-neutral-800 flex items-center text-white shrink-0">
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[9px] font-bold text-white uppercase">
                            {(activeMedia.accountHandle || 'M').charAt(0)}
                          </div>
                          <span className="font-courier text-[11px] font-bold text-white tracking-wider">
                            {activeMedia.accountHandle || 'clinique_in'}
                          </span>
                          {activeMedia.isVerified && (
                            <span className="w-3 h-3 rounded-full bg-[#3897f0] flex items-center justify-center text-[8px] text-white font-bold">
                              <Check className="w-2 h-2 stroke-[3]" />
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Creative Media Image or Video */}
                    <div className="relative w-full bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[400px]">
                      {activeMedia.type === 'video' || activeMedia.url.endsWith('.mp4') ? (
                        <video
                          key={activeMedia.url}
                          src={activeMedia.url}
                          autoPlay
                          loop
                          muted
                          playsInline
                          controls
                          className="w-full h-full object-contain max-h-[380px]"
                        />
                      ) : (
                        <img
                          key={activeMedia.url}
                          src={activeMedia.url}
                          alt={activeMedia.title || cat.title}
                          className="w-full h-full object-contain max-h-[380px]"
                          loading="lazy"
                        />
                      )}

                      {/* Dots at bottom right */}
                      <div className="absolute bottom-2.5 right-2.5 flex items-center space-x-1.5 bg-black/60 px-2 py-1 rounded-sm z-20">
                        {cat.media.map((_, dotIdx) => (
                          <button
                            key={`mobile-dot-${cat.id}-${dotIdx}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSetMediaIndex(cat.id, dotIdx);
                            }}
                            className={`transition-all ${
                              currentMediaIdx === dotIdx
                                ? 'w-2 h-2 bg-white'
                                : 'w-1.5 h-1.5 bg-white/40'
                            }`}
                            aria-label={`View slide ${dotIdx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Explore Work Button & Collapse Toggle Button */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={onOpenWork}
                    className="bg-white text-black hover:bg-[#FF0000] hover:text-white px-6 py-2.5 font-courier font-bold text-xs tracking-[0.16em] uppercase transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    EXPLORE WORK
                  </button>

                  {/* Collapse Chevron Button (Red circle with ChevronUp) */}
                  <button
                    onClick={() => toggleCategory(cat.id)}
                    className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-md active:scale-95 cursor-pointer"
                    aria-label="Collapse section"
                  >
                    <ChevronUp className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
