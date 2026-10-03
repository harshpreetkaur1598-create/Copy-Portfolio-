import React, { useState, useEffect, useRef } from 'react';
import { ARCHIVE_SKILLS, ARCHIVE_GALLERY_ITEMS } from '../data/portfolioData';
import { ArchiveGalleryItem } from '../types';
import { ExternalLink, Volume2, VolumeX, X } from 'lucide-react';

interface ArchiveSectionProps {
  onOpenWork: () => void;
}

export const ArchiveSection: React.FC<ArchiveSectionProps> = ({ onOpenWork }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Active items displayed in 3 dynamic slots
  // Initial seed: pick 3 distinct items (video, image, video) with distinct media URLs
  const [visibleItems, setVisibleItems] = useState<ArchiveGalleryItem[]>(() => {
    const videos = ARCHIVE_GALLERY_ITEMS.filter((item) => item.type === 'video');
    const images = ARCHIVE_GALLERY_ITEMS.filter((item) => item.type === 'image');
    const item0 = videos[0] || ARCHIVE_GALLERY_ITEMS[0];
    const item1 = images[0] || ARCHIVE_GALLERY_ITEMS[1];
    const item2 = videos[1] || ARCHIVE_GALLERY_ITEMS[2];
    return [item0, item1, item2];
  });

  // Ref tracking what is currently occupying (or reserved for) all slots to strictly prevent duplicate items
  const visibleItemsRef = useRef<ArchiveGalleryItem[]>(visibleItems);
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    visibleItemsRef.current = visibleItems;
  }, [visibleItems]);

  // Which slot is currently transitioning / crossfading
  const [fadingSlotIndex, setFadingSlotIndex] = useState<number | null>(null);
  const currentSlotPointer = useRef(0);

  // Active modal inspection item
  const [inspectedItem, setInspectedItem] = useState<ArchiveGalleryItem | null>(null);
  const [isModalMuted, setIsModalMuted] = useState(false);

  // IntersectionObserver to detect when user scrolls to Archive section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Shuffle a specific slot to a new unused item with strict duplicate prevention
  const shuffleNextSlot = () => {
    if (isTransitioningRef.current) return;
    const targetSlot = currentSlotPointer.current;
    currentSlotPointer.current = (currentSlotPointer.current + 1) % 3;

    // Collect all media URLs and IDs currently displayed in any slot
    const activeIds = new Set<string>();
    const activeMediaUrls = new Set<string>();
    visibleItemsRef.current.forEach((item) => {
      if (item) {
        activeIds.add(item.id);
        if (item.videoUrl) activeMediaUrls.add(item.videoUrl.trim().toLowerCase());
        if (item.imageUrl) activeMediaUrls.add(item.imageUrl.trim().toLowerCase());
      }
    });

    // Pool of items NOT currently displayed in any slot and not sharing media URLs
    const eligiblePool = ARCHIVE_GALLERY_ITEMS.filter((item) => {
      if (activeIds.has(item.id)) return false;
      if (item.videoUrl && activeMediaUrls.has(item.videoUrl.trim().toLowerCase())) return false;
      if (item.imageUrl && activeMediaUrls.has(item.imageUrl.trim().toLowerCase())) return false;
      return true;
    });

    if (eligiblePool.length === 0) return;

    // Pick a random candidate from available pool
    const nextItem = eligiblePool[Math.floor(Math.random() * eligiblePool.length)];

    // Immediately reserve this slot in the ref so another check won't pick the same item
    visibleItemsRef.current[targetSlot] = nextItem;
    isTransitioningRef.current = true;

    // Trigger fade out
    setFadingSlotIndex(targetSlot);

    setTimeout(() => {
      setVisibleItems((prev) => {
        const next = [...prev];
        next[targetSlot] = nextItem;
        return next;
      });

      // Trigger fade in
      setTimeout(() => {
        setFadingSlotIndex(null);
        isTransitioningRef.current = false;
      }, 100);
    }, 350);
  };

  // Constant automatic shuffling every 3.8s when in view and not hovered or inspecting
  useEffect(() => {
    if (!isInView || isHovered || inspectedItem !== null) return;

    const interval = setInterval(() => {
      shuffleNextSlot();
    }, 3800);

    return () => clearInterval(interval);
  }, [isInView, isHovered, inspectedItem]);

  return (
    <section
      ref={sectionRef}
      id="archive-section"
      className="w-full bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8 select-none relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header: ARCHIVE title and [SEE ALL] button */}
        <div className="flex items-baseline justify-between pb-4 mb-6 sm:mb-8 border-b border-neutral-200">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-[#FF0000] tracking-tight uppercase leading-none">
              ARCHIVE
            </h2>
            <button
              id="archive-see-all-btn"
              onClick={onOpenWork}
              className="font-courier font-bold text-xs sm:text-sm md:text-base text-black hover:text-[#FF0000] hover:underline underline-offset-4 tracking-wider uppercase flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>[SEE ALL]</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>

        {/* 
          Unified Single Section on all viewports (Mobile, Tablet, Desktop):
          - Left: Scrolling credit roll copy in Courier New (text only, NO numbers, non-clickable)
          - Right: Dynamic Shuffling Media Gallery (Images & Videos never cropped, bounded inside section size)
        */}
        <div className="grid grid-cols-12 gap-3 sm:gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Left Column: Pure Credit Scroll List in Courier New font without any numbers */}
          <div className="col-span-5 sm:col-span-5 md:col-span-4 lg:col-span-4 flex flex-col justify-center">
            <div className="relative h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] overflow-hidden">
              {/* Fade overlays top & bottom */}
              <div className="absolute top-0 inset-x-0 h-8 sm:h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-8 sm:h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

              {/* Animated rolling list in Courier New font, pure text only */}
              <div
                className="flex flex-col space-y-2.5 sm:space-y-3.5 md:space-y-4 animate-credit-roll pointer-events-none select-none"
                style={{ animationDuration: '34s' }}
              >
                {/* First cycle - text only */}
                {ARCHIVE_SKILLS.map((skill) => (
                  <div
                    key={`skill-1-${skill.id}`}
                    className="py-1 flex items-baseline justify-start select-none"
                  >
                    <span className="font-courier font-bold text-[11px] sm:text-xs md:text-sm lg:text-base text-black tracking-wider uppercase leading-snug">
                      {skill.name}
                    </span>
                  </div>
                ))}
                {/* Second duplicated cycle for seamless continuous loop */}
                {ARCHIVE_SKILLS.map((skill) => (
                  <div
                    key={`skill-2-${skill.id}`}
                    className="py-1 flex items-baseline justify-start select-none"
                  >
                    <span className="font-courier font-bold text-[11px] sm:text-xs md:text-sm lg:text-base text-black tracking-wider uppercase leading-snug">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Shuffling Media Gallery - Pure Media without boxes or lines */}
          <div
            className="col-span-7 sm:col-span-7 md:col-span-8 lg:col-span-8 flex flex-col justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Dynamic Bounded Gallery Container - Pure white, no borders or box outlines */}
            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] overflow-hidden bg-white">
              {/* Flex row of dynamic panels */}
              <div className="w-full h-full flex items-center justify-center gap-2 sm:gap-3.5 overflow-hidden">
                {visibleItems.map((item, idx) => {
                  const isFading = fadingSlotIndex === idx;
                  const isVideo = item.type === 'video';

                  return (
                    <div
                      key={`slot-${idx}-${item.id}`}
                      onClick={() => setInspectedItem(item)}
                      style={{
                        // Dynamic flex sizing matching media aspect ratio without overflowing
                        flex: `${item.aspectRatio} 1 0%`,
                        minWidth: 0,
                        height: '100%'
                      }}
                      className={`h-full bg-white relative overflow-hidden group cursor-pointer transition-all duration-700 ease-in-out flex items-center justify-center ${
                        isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                      }`}
                    >
                      {/* Media container: Pure uncropped digital media on white background, no boxes or outlines */}
                      <div className="w-full h-full relative flex items-center justify-center bg-white overflow-hidden">
                        {isVideo && item.videoUrl ? (
                          <video
                            src={item.videoUrl}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-contain bg-white pointer-events-none select-none transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        ) : item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-contain bg-white pointer-events-none select-none transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        ) : null}

                        {/* Subtle minimal hover overlay with Brand & Title */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end pointer-events-none z-20">
                          <span className="font-courier text-[10px] sm:text-xs text-white font-bold uppercase truncate drop-shadow">
                            {item.brand} // {item.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Media Inspection Modal */}
      {inspectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={() => setInspectedItem(null)}
        >
          <div
            className="bg-[#141416] border border-neutral-700 text-white max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#1c1c1f] border-b border-neutral-700/80 px-4 py-2.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="bg-[#FF0000] text-white font-courier text-[10px] font-bold px-2 py-0.5 uppercase">
                  {inspectedItem.brand}
                </span>
                <span className="font-courier text-xs text-white font-bold uppercase truncate">
                  {inspectedItem.title}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {inspectedItem.type === 'video' && (
                  <button
                    onClick={() => setIsModalMuted(!isModalMuted)}
                    className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title={isModalMuted ? 'Unmute' : 'Mute'}
                  >
                    {isModalMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                )}
                <button
                  onClick={() => setInspectedItem(null)}
                  className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close inspection modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Media Display: object-contain guarantees 0 cropping */}
            <div className="flex-1 min-h-[300px] max-h-[60vh] bg-black flex items-center justify-center p-2 relative overflow-hidden">
              {inspectedItem.type === 'video' && inspectedItem.videoUrl ? (
                <video
                  src={inspectedItem.videoUrl}
                  autoPlay
                  loop
                  playsInline
                  muted={isModalMuted}
                  controls
                  className="max-h-full max-w-full object-contain"
                />
              ) : inspectedItem.imageUrl ? (
                <img
                  src={inspectedItem.imageUrl}
                  alt={inspectedItem.title}
                  className="max-h-full max-w-full object-contain"
                />
              ) : null}
            </div>

            {/* Modal Footer: Metadata & Link to Work Page */}
            <div className="bg-[#1c1c1f] border-t border-neutral-700/80 px-4 py-3 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex flex-col">
                <span className="font-courier text-[10px] text-neutral-400 uppercase tracking-widest">
                  CATEGORY: {inspectedItem.category}
                </span>
                <span className="font-courier text-[9px] text-neutral-500 uppercase">
                  HARSHPREET KAUR CREATIVE ARCHIVE
                </span>
              </div>

              <div className="flex items-center gap-3">
                {inspectedItem.embedUrl && (
                  <a
                    href={inspectedItem.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-courier text-[10px] font-bold text-neutral-300 hover:text-white border border-neutral-600 px-2.5 py-1 uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <span>OPEN CLOUDINARY PLAYER</span>
                    <ExternalLink size={11} />
                  </a>
                )}
                <button
                  onClick={() => {
                    setInspectedItem(null);
                    onOpenWork();
                  }}
                  className="font-courier text-[10px] font-bold bg-[#FF0000] hover:bg-white hover:text-black text-white px-3 py-1 uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>SEE IN WORK VAULT</span>
                  <ExternalLink size={11} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
