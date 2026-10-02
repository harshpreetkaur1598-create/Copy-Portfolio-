import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Maximize2, Film, Sparkles } from 'lucide-react';
import { WireframeSlot } from '../types';

export const CORNETTO_CAMPAIGN_SLIDES = [
  {
    id: 'cornetto-slide-1',
    slideNumber: 1,
    tag: 'MASCOT REVEAL',
    title: 'Official Mascot Character Reveal',
    subtitle: 'Flavor launch character announcement',
    url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730670/Cornetto_flavour_launch.png',
    dimensions: '4:5 POST',
    hint: 'CORNETTO OFFICIAL MASCOT CHARACTER REVEAL'
  },
  {
    id: 'cornetto-slide-2',
    slideNumber: 2,
    tag: 'AUDITION CAROUSEL 01',
    title: 'Audition Announcement (Cover)',
    subtitle: 'Mascot talent hunt audition teaser carousel kickoff',
    url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730658/Cornetto_flavour_launch_2.png',
    dimensions: '4:5 CAROUSEL',
    hint: 'CORNETTO AUDITION ANNOUNCEMENT COVER'
  },
  {
    id: 'cornetto-slide-3',
    slideNumber: 3,
    tag: 'AUDITION CAROUSEL 02',
    title: 'Audition Requirements & Personality',
    subtitle: 'Character personality breakdowns and casting requirements',
    url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730670/Cornetto_flavour_launch_carousel_1.png',
    dimensions: '4:5 CAROUSEL',
    hint: 'CORNETTO AUDITION REQUIREMENTS & PERSONALITY'
  },
  {
    id: 'cornetto-slide-4',
    slideNumber: 4,
    tag: 'AUDITION CAROUSEL 03',
    title: 'Flavor Association & Quirks',
    subtitle: 'Connecting distinct palate notes with mascot behavioral traits',
    url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730669/Cornetto_flavour_launch_carousel_2.png',
    dimensions: '4:5 CAROUSEL',
    hint: 'CORNETTO FLAVOR ASSOCIATION & QUIRKS'
  },
  {
    id: 'cornetto-slide-5',
    slideNumber: 5,
    tag: 'AUDITION CAROUSEL 04',
    title: 'Call For Creator Auditions',
    subtitle: 'Direct-to-creator call-to-action for Zomaland auditions',
    url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730664/Cornetto_flavour_launch_carousel_3.jpg',
    dimensions: '4:5 CAROUSEL',
    hint: 'CORNETTO CALL FOR CREATOR AUDITIONS'
  },
  {
    id: 'cornetto-slide-6',
    slideNumber: 6,
    tag: 'EVENT MERCH',
    title: 'Zomaland Festival Merchandise',
    subtitle: 'Limited edition merch expressing the mascot personality',
    url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730668/Cornetto_Flavour_launch_3.png',
    dimensions: '4:5 POST',
    hint: 'CORNETTO ZOMALAND FESTIVAL MERCHANDISE'
  }
];

export const CORNETTO_VIDEOS = [
  {
    id: 'cornetto-video-1',
    slotNumber: '04',
    title: 'Creator Collab: Mascot Personality 01',
    subtitle: 'Conceptualised by Harshpreet Kaur',
    url: 'https://res.cloudinary.com/uybanqfq/video/upload/Cornetto_flavour_launch_4.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Cornetto_flavour_launch_4',
    dimensions: '9:16 REEL',
    type: 'reel' as const,
    hint: 'CORNETTO CREATOR COLLAB 01 (CONCEPTUALISED BY HARSHPREET)'
  },
  {
    id: 'cornetto-video-2',
    slotNumber: '05',
    title: 'Creator Collab: Flavor Association 02',
    subtitle: 'Conceptualised by Harshpreet Kaur',
    url: 'https://res.cloudinary.com/uybanqfq/video/upload/Cornetto_Flavour_launch_5.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Cornetto_Flavour_launch_5',
    dimensions: '9:16 REEL',
    type: 'reel' as const,
    hint: 'CORNETTO CREATOR COLLAB 02 (CONCEPTUALISED BY HARSHPREET)'
  },
  {
    id: 'cornetto-video-3',
    slotNumber: '06',
    title: 'Festival On-Ground Mascot Anthem',
    subtitle: 'Conceptualised by Harshpreet Kaur',
    url: 'https://res.cloudinary.com/uybanqfq/video/upload/Cornetto_xzomaland.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Cornetto_xzomaland',
    dimensions: '9:16 REEL',
    type: 'reel' as const,
    hint: 'CORNETTO × ZOMALAND FESTIVAL ANTHEM (CONCEPTUALISED BY HARSHPREET)'
  }
];

interface CornettoShowcaseProps {
  onInspect: (slot: WireframeSlot) => void;
}

export const CornettoShowcase: React.FC<CornettoShowcaseProps> = ({ onInspect }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Video Reel Refs & States
  const reelScrollRef = useRef<HTMLDivElement>(null);
  const reelVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isReelMuted, setIsReelMuted] = useState(true);
  const [reelProgress, setReelProgress] = useState(0);

  // Single Swipeable Box for all Static Images
  const carouselScrollRef = useRef<HTMLDivElement>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Section in-view state
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle Video Playback when in view
  useEffect(() => {
    reelVideoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (isInView && index === activeReelIndex) {
        video.muted = isReelMuted;
        video.play().catch(() => {
          video.muted = true;
          setIsReelMuted(true);
          video.play().catch(() => {});
        });
      } else {
        video.pause();
      }
    });
  }, [isInView, activeReelIndex, isReelMuted]);

  // Video Reel Navigation
  const scrollToReelIndex = useCallback((index: number) => {
    if (!reelScrollRef.current) return;
    const targetEl = reelScrollRef.current.children[index] as HTMLElement;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    setActiveReelIndex(index);
    setReelProgress(0);
  }, []);

  const handleReelEnded = (index: number) => {
    const nextIndex = (index + 1) % CORNETTO_VIDEOS.length;
    scrollToReelIndex(nextIndex);
  };

  const handleReelTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      setReelProgress(pct);
    }
  };

  const handleReelScroll = () => {
    if (!reelScrollRef.current) return;
    const container = reelScrollRef.current;
    const scrollPos = container.scrollTop;
    const itemHeight = container.clientHeight;
    if (itemHeight > 0) {
      const newIndex = Math.round(scrollPos / itemHeight);
      if (newIndex >= 0 && newIndex < CORNETTO_VIDEOS.length && newIndex !== activeReelIndex) {
        setActiveReelIndex(newIndex);
        setReelProgress(0);
      }
    }
  };

  // Static Images Carousel Scroll Handlers
  const scrollToSlide = (index: number) => {
    if (!carouselScrollRef.current) return;
    const targetEl = carouselScrollRef.current.children[index] as HTMLElement;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
    setActiveSlideIndex(index);
  };

  const handleCarouselScroll = () => {
    if (!carouselScrollRef.current) return;
    const container = carouselScrollRef.current;
    const scrollPos = container.scrollLeft;
    const itemWidth = container.clientWidth;
    if (itemWidth > 0) {
      const newIndex = Math.round(scrollPos / itemWidth);
      if (newIndex >= 0 && newIndex < CORNETTO_CAMPAIGN_SLIDES.length && newIndex !== activeSlideIndex) {
        setActiveSlideIndex(newIndex);
      }
    }
  };

  const currentSlide = CORNETTO_CAMPAIGN_SLIDES[activeSlideIndex];

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-12 gap-2 sm:gap-3 w-full h-[420px] sm:h-[480px] overflow-hidden"
    >
      {/* LEFT: 1 Single Swipeable Box with all images (Mascot Reveal -> Audition Carousel -> Merch) */}
      <div className="col-span-7 flex flex-col h-full overflow-hidden">
        {/* Compact Header Bar */}
        <div className="bg-[#18181A] border border-neutral-700/80 px-2.5 py-1 flex items-center justify-between mb-1.5 shrink-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <Sparkles size={11} className="text-[#FF0000] shrink-0" />
            <span className="font-courier text-[9px] sm:text-[10px] text-white uppercase tracking-wider font-bold truncate">
              CAMPAIGN ASSETS: CORNETTO × ZOMALAND
            </span>
          </div>
          <span className="font-courier text-[8px] text-[#FF0000] uppercase tracking-widest shrink-0 hidden sm:inline font-bold">
            [SWIPEABLE 6 ASSETS]
          </span>
        </div>

        {/* The 1 Single Swipeable Box */}
        <div className="flex-1 min-h-0 bg-black border border-neutral-700/80 hover:border-neutral-500 overflow-hidden flex flex-col relative group transition-all">
          {/* Horizontal Snap-Scroll Viewport */}
          <div
            ref={carouselScrollRef}
            onScroll={handleCarouselScroll}
            className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth relative"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {CORNETTO_CAMPAIGN_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                onClick={() =>
                  onInspect({
                    id: slide.id,
                    slotNumber: `0${idx + 1}`,
                    type: 'image',
                    dimensions: slide.dimensions,
                    hint: slide.hint,
                    url: slide.url
                  })
                }
                className="w-full h-full snap-center shrink-0 relative flex items-center justify-center bg-black overflow-hidden cursor-pointer"
              >
                <img
                  src={slide.url}
                  alt={slide.hint}
                  className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle Edge Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Top Badges: Current Phase Tag + Slide Counter */}
          <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-20 pointer-events-none">
            <span className="font-courier text-[8px] sm:text-[9px] bg-black/85 border border-neutral-700 text-white px-2 py-0.5 uppercase tracking-wider font-bold truncate max-w-[200px]">
              {currentSlide.tag}
            </span>
            <span className="font-courier text-[8px] sm:text-[9px] bg-[#FF0000] text-white px-2 py-0.5 uppercase font-bold tracking-wider shrink-0">
              {activeSlideIndex + 1}/{CORNETTO_CAMPAIGN_SLIDES.length}
            </span>
          </div>

          {/* Left & Right Chevron Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const prev =
                (activeSlideIndex - 1 + CORNETTO_CAMPAIGN_SLIDES.length) %
                CORNETTO_CAMPAIGN_SLIDES.length;
              scrollToSlide(prev);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/75 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-xs z-20 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={14} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const next =
                (activeSlideIndex + 1) % CORNETTO_CAMPAIGN_SLIDES.length;
              scrollToSlide(next);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/75 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-xs z-20 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={14} />
          </button>

          {/* Bottom Caption, Instagram Dots, & Zoom Cue */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end z-20 pointer-events-none">
            <div className="overflow-hidden min-w-0 pr-2">
              <span className="font-courier text-[9px] sm:text-[10px] text-white uppercase tracking-wider font-bold block truncate drop-shadow">
                {currentSlide.title}
              </span>
              {/* Instagram Dots */}
              <div className="flex items-center gap-1 mt-1">
                {CORNETTO_CAMPAIGN_SLIDES.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSlide(dotIdx);
                    }}
                    className={`h-1 transition-all pointer-events-auto cursor-pointer ${
                      activeSlideIndex === dotIdx
                        ? 'w-3.5 bg-[#FF0000]'
                        : 'w-1.5 bg-white/40 hover:bg-white/80'
                    }`}
                    aria-label={`Jump to slide ${dotIdx + 1}`}
                  />
                ))}
                <span className="font-courier text-[7px] text-neutral-400 uppercase tracking-widest ml-1 hidden sm:inline">
                  SWIPE [6 ASSETS]
                </span>
              </div>
            </div>

            <span className="font-courier text-[8px] text-[#FF0000] font-bold uppercase shrink-0">
              [TAP TO ZOOM]
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: Scrollable Videos Slot (Ananya-style Reel Slot) */}
      <div className="col-span-5 flex flex-col h-full overflow-hidden">
        {/* Compact Header Bar */}
        <div className="bg-[#18181A] border border-neutral-700/80 px-2.5 py-1 flex items-center justify-between mb-1.5 shrink-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <Film size={11} className="text-[#FF0000] shrink-0" />
            <span className="font-courier text-[9px] sm:text-[10px] text-white uppercase tracking-wider font-bold truncate">
              ZOMALAND CREATOR COLLABS
            </span>
          </div>
          <span className="font-courier text-[8px] bg-[#FF0000] text-white px-1.5 py-0.5 font-bold uppercase tracking-wider shrink-0">
            CONCEPTUALISED
          </span>
        </div>

        {/* Scrollable Reel Box */}
        <div className="relative flex-1 min-h-0 bg-black border border-neutral-700/80 overflow-hidden flex flex-col">
          {/* Top Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-800 z-30">
            <div
              className="h-full bg-[#FF0000] transition-all duration-150 ease-linear"
              style={{ width: `${reelProgress}%` }}
            />
          </div>

          {/* Reel Top Controls: Audio & Fullscreen Inspect */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 z-30">
            <button
              onClick={() => setIsReelMuted(!isReelMuted)}
              className={`p-1 rounded-xs transition-colors cursor-pointer border ${
                !isReelMuted
                  ? 'bg-[#FF0000] border-[#FF0000] text-white'
                  : 'bg-black/80 border-neutral-700 text-neutral-300 hover:text-white'
              }`}
              title={isReelMuted ? 'Unmute Audio' : 'Mute Audio'}
              aria-label={isReelMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {!isReelMuted ? <Volume2 size={12} /> : <VolumeX size={12} />}
            </button>

            <button
              onClick={() =>
                onInspect({
                  id: CORNETTO_VIDEOS[activeReelIndex].id,
                  slotNumber: `0${activeReelIndex + 1}`,
                  type: 'reel',
                  dimensions: '9:16 REEL',
                  hint: CORNETTO_VIDEOS[activeReelIndex].hint,
                  url: CORNETTO_VIDEOS[activeReelIndex].url
                })
              }
              className="p-1 bg-black/80 border border-neutral-700 text-neutral-300 hover:text-white rounded-xs transition-colors cursor-pointer"
              title="Fullscreen Inspect"
            >
              <Maximize2 size={12} />
            </button>
          </div>

          {/* Up / Down Navigation Chevrons */}
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-30 pointer-events-auto">
            <button
              onClick={() =>
                scrollToReelIndex(
                  (activeReelIndex - 1 + CORNETTO_VIDEOS.length) % CORNETTO_VIDEOS.length
                )
              }
              className="p-1 bg-black/70 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-xs transition-colors cursor-pointer"
              aria-label="Previous reel"
            >
              <ChevronUp size={12} />
            </button>
            <button
              onClick={() =>
                scrollToReelIndex((activeReelIndex + 1) % CORNETTO_VIDEOS.length)
              }
              className="p-1 bg-black/70 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-xs transition-colors cursor-pointer"
              aria-label="Next reel"
            >
              <ChevronDown size={12} />
            </button>
          </div>

          {/* Vertical Reel Scroll Viewport */}
          <div
            ref={reelScrollRef}
            onScroll={handleReelScroll}
            className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth relative"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {CORNETTO_VIDEOS.map((reel, idx) => (
              <div
                key={reel.id}
                className="w-full h-full snap-start relative flex items-center justify-center bg-black overflow-hidden flex-shrink-0"
              >
                <video
                  ref={(el) => {
                    reelVideoRefs.current[idx] = el;
                  }}
                  src={reel.url}
                  playsInline
                  muted={isReelMuted}
                  onEnded={() => handleReelEnded(idx)}
                  onTimeUpdate={idx === activeReelIndex ? handleReelTimeUpdate : undefined}
                  className="w-full h-full object-cover"
                />

                {/* Bottom Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none flex flex-col justify-between p-3 z-20">
                  {/* Top Left Badge */}
                  <div className="flex items-center gap-1.5">
                    <span className="bg-[#FF0000] text-white font-courier text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
                      REEL 0{idx + 1}/03
                    </span>
                  </div>

                  {/* Bottom Text & Next Cue */}
                  <div className="space-y-0.5">
                    <span className="font-courier text-[8px] text-[#FF0000] font-bold uppercase tracking-wider block">
                      CONCEPTUALISED BY HARSHPREET
                    </span>
                    <h5 className="font-anton text-sm sm:text-base text-white uppercase tracking-tight leading-tight truncate">
                      {reel.title}
                    </h5>
                    <div className="flex items-center justify-between text-[8px] font-courier text-neutral-400 pt-0.5 border-t border-neutral-800">
                      <span className="uppercase truncate">
                        AUTO-ADVANCES ON END
                      </span>
                      <span className="text-[#FF0000] font-bold uppercase shrink-0">
                        [SWIPE]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-2 right-3 flex items-center gap-1 z-30">
            {CORNETTO_VIDEOS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToReelIndex(dotIdx)}
                className={`h-1 transition-all cursor-pointer ${
                  activeReelIndex === dotIdx
                    ? 'w-4 bg-[#FF0000]'
                    : 'w-1.5 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Jump to reel 0${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
