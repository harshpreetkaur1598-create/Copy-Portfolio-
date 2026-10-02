import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, Maximize2, Film, Layers, ChevronUp, ChevronDown } from 'lucide-react';
import { WireframeSlot } from '../types';

export const MAC_VIDEO = {
  id: 'mac-case-study-video',
  slotNumber: '01',
  title: 'M·A·C Stock Market Case Study Film',
  subtitle: 'Scripted by Harshpreet Kaur',
  url: 'https://res.cloudinary.com/uybanqfq/video/upload/MAC_Stock_Market_Case_Study.mp4',
  embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=MAC_Stock_Market_Case_Study',
  dimensions: '9:16 VERTICAL',
  type: 'reel' as const,
  hint: 'M·A·C STOCK MARKET CASE STUDY (SCRIPTED BY HARSHPREET)'
};

export const MAC_SCREENSHOTS = [
  {
    id: 'mac-screen-1',
    slotNumber: '02',
    title: 'Interactive Live Gamification',
    subtitle: 'Designed by Harshpreet Kaur',
    tag: 'LIVE CAMPAIGN',
    url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853819/MAC_Stock_Market_1.png',
    dimensions: '9:16 VERTICAL',
    type: 'image' as const,
    hint: 'M·A·C STOCK MARKET: INTERACTIVE LIVE GAMIFICATION (01/03)'
  },
  {
    id: 'mac-screen-2',
    slotNumber: '03',
    title: 'Interactive Live Gamification',
    subtitle: 'Designed by Harshpreet Kaur',
    tag: 'LIVE CAMPAIGN',
    url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853819/MAC_Stock_Market_2.png',
    dimensions: '9:16 VERTICAL',
    type: 'image' as const,
    hint: 'M·A·C STOCK MARKET: INTERACTIVE LIVE GAMIFICATION (02/03)'
  },
  {
    id: 'mac-screen-3',
    slotNumber: '04',
    title: 'Interactive Live Gamification',
    subtitle: 'Designed by Harshpreet Kaur',
    tag: 'LIVE CAMPAIGN',
    url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853820/MAC_Stock_Market_3.png',
    dimensions: '9:16 VERTICAL',
    type: 'image' as const,
    hint: 'M·A·C STOCK MARKET: INTERACTIVE LIVE GAMIFICATION (03/03)'
  }
];

interface MacPromoShowcaseProps {
  onInspect: (slot: WireframeSlot) => void;
}

export const MacPromoShowcase: React.FC<MacPromoShowcaseProps> = ({ onInspect }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const screenScrollRef = useRef<HTMLDivElement>(null);

  // States
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Intersection Observer for autoplay when user scrolls onto section
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

  // Handle Video playback when in view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.muted = isMuted;
      video.play().catch(() => {
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    } else {
      video.pause();
    }
  }, [isInView, isMuted]);

  // Video progress
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      setVideoProgress(pct);
    }
  };

  // Scroll Screenshot Reel smoothly to index
  const scrollToScreenIndex = useCallback((index: number) => {
    if (!screenScrollRef.current) return;
    const targetEl = screenScrollRef.current.children[index] as HTMLElement;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    setActiveScreenIndex(index);
  }, []);

  // Handle user manual scroll inside screenshot reel
  const handleScreenScroll = () => {
    if (!screenScrollRef.current) return;
    const container = screenScrollRef.current;
    const scrollPos = container.scrollTop;
    const itemHeight = container.clientHeight;
    if (itemHeight > 0) {
      const newIndex = Math.round(scrollPos / itemHeight);
      if (newIndex >= 0 && newIndex < MAC_SCREENSHOTS.length && newIndex !== activeScreenIndex) {
        setActiveScreenIndex(newIndex);
      }
    }
  };

  // Gentle auto-slide cycle for screenshots (every 6s when in view)
  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setActiveScreenIndex((prev) => {
        const next = (prev + 1) % MAC_SCREENSHOTS.length;
        if (screenScrollRef.current) {
          const targetEl = screenScrollRef.current.children[next] as HTMLElement;
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
        return next;
      });
    }, 6000);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-12 gap-2 sm:gap-3 w-full h-[420px] sm:h-[480px] overflow-hidden"
    >
      {/* LEFT: Case Study Video (Scripted by Harshpreet) */}
      <div className="col-span-6 flex flex-col h-full overflow-hidden">
        {/* Compact Header Bar */}
        <div className="bg-[#18181A] border border-neutral-700/80 px-2.5 py-1 flex items-center justify-between mb-1.5 shrink-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <Film size={11} className="text-[#FF0000] shrink-0" />
            <span className="font-courier text-[9px] sm:text-[10px] text-white uppercase tracking-wider font-bold truncate">
              CASE STUDY FILM
            </span>
          </div>
          <span className="font-courier text-[8px] bg-[#FF0000] text-white px-1.5 py-0.5 font-bold uppercase tracking-wider shrink-0">
            SCRIPTED
          </span>
        </div>

        {/* Video Reel Box */}
        <div
          onClick={() =>
            onInspect({
              id: MAC_VIDEO.id,
              slotNumber: MAC_VIDEO.slotNumber,
              type: MAC_VIDEO.type,
              dimensions: MAC_VIDEO.dimensions,
              hint: MAC_VIDEO.hint,
              url: MAC_VIDEO.url
            })
          }
          className="group relative flex-1 min-h-0 bg-black border border-neutral-700/80 hover:border-neutral-500 overflow-hidden flex flex-col cursor-pointer transition-all"
        >
          {/* Top Progress Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-800 z-30">
            <div
              className="h-full bg-[#FF0000] transition-all duration-150 ease-linear"
              style={{ width: `${videoProgress}%` }}
            />
          </div>

          {/* Top Controls: Audio Unmute & Fullscreen Inspect */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 z-30 pointer-events-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              className={`p-1 rounded-xs transition-colors cursor-pointer border ${
                !isMuted
                  ? 'bg-[#FF0000] border-[#FF0000] text-white'
                  : 'bg-black/80 border-neutral-700 text-neutral-300 hover:text-white'
              }`}
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {!isMuted ? <Volume2 size={12} /> : <VolumeX size={12} />}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onInspect({
                  id: MAC_VIDEO.id,
                  slotNumber: MAC_VIDEO.slotNumber,
                  type: MAC_VIDEO.type,
                  dimensions: MAC_VIDEO.dimensions,
                  hint: MAC_VIDEO.hint,
                  url: MAC_VIDEO.url
                });
              }}
              className="p-1 bg-black/80 border border-neutral-700 text-neutral-300 hover:text-white rounded-xs transition-colors cursor-pointer"
              title="Fullscreen Inspect"
            >
              <Maximize2 size={12} />
            </button>
          </div>

          {/* Video Element */}
          <video
            ref={videoRef}
            src={MAC_VIDEO.url}
            loop
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none flex flex-col justify-between p-3 z-20">
            {/* Top Left Badge */}
            <div className="flex items-center gap-1.5">
              <span className="bg-[#FF0000] text-white font-courier text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
                VIDEO 01
              </span>
              <span className="bg-black/80 font-courier text-[8px] text-neutral-300 px-1.5 py-0.5 uppercase border border-neutral-700">
                9:16 REEL
              </span>
            </div>

            {/* Bottom Meta */}
            <div className="space-y-0.5">
              <span className="font-courier text-[8px] text-[#FF0000] font-bold uppercase tracking-wider block">
                SCRIPTED BY HARSHPREET KAUR
              </span>
              <h5 className="font-anton text-sm sm:text-base text-white uppercase tracking-tight leading-tight truncate">
                M·A·C STOCK MARKET CASE STUDY
              </h5>
              <div className="flex items-center justify-between text-[8px] font-courier text-neutral-400 pt-0.5 border-t border-neutral-800">
                <span className="uppercase truncate">
                  OFF-SEASON TRADE LIFT
                </span>
                <span className="text-[#FF0000] font-bold uppercase shrink-0">
                  [INSPECT]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Single Screenshot Scrollable Reel (Like Ananya Section) */}
      <div className="col-span-6 flex flex-col h-full overflow-hidden">
        {/* Compact Header Bar */}
        <div className="bg-[#18181A] border border-neutral-700/80 px-2.5 py-1 flex items-center justify-between mb-1.5 shrink-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <Layers size={11} className="text-[#FF0000] shrink-0" />
            <span className="font-courier text-[9px] sm:text-[10px] text-white uppercase tracking-wider font-bold truncate">
              CAMPAIGN DESIGN
            </span>
          </div>
          <span className="font-courier text-[8px] bg-[#FF0000] text-white px-1.5 py-0.5 font-bold uppercase tracking-wider shrink-0">
            HARSHPREET
          </span>
        </div>

        {/* Scrollable Screenshot Reel Box */}
        <div className="relative flex-1 min-h-0 bg-black border border-neutral-700/80 overflow-hidden flex flex-col">
          {/* Top Progress Line for Screenshots */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-800 z-30">
            <div
              className="h-full bg-[#FF0000] transition-all duration-300 ease-out"
              style={{
                width: `${((activeScreenIndex + 1) / MAC_SCREENSHOTS.length) * 100}%`
              }}
            />
          </div>

          {/* Top-Right Inspect Fullscreen Button */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 z-30 pointer-events-auto">
            <button
              onClick={() =>
                onInspect({
                  id: MAC_SCREENSHOTS[activeScreenIndex].id,
                  slotNumber: MAC_SCREENSHOTS[activeScreenIndex].slotNumber,
                  type: MAC_SCREENSHOTS[activeScreenIndex].type,
                  dimensions: MAC_SCREENSHOTS[activeScreenIndex].dimensions,
                  hint: MAC_SCREENSHOTS[activeScreenIndex].hint,
                  url: MAC_SCREENSHOTS[activeScreenIndex].url
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
                scrollToScreenIndex(
                  (activeScreenIndex - 1 + MAC_SCREENSHOTS.length) % MAC_SCREENSHOTS.length
                )
              }
              className="p-1 bg-black/70 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-xs transition-colors cursor-pointer"
              aria-label="Previous screenshot"
            >
              <ChevronUp size={12} />
            </button>
            <button
              onClick={() =>
                scrollToScreenIndex((activeScreenIndex + 1) % MAC_SCREENSHOTS.length)
              }
              className="p-1 bg-black/70 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-xs transition-colors cursor-pointer"
              aria-label="Next screenshot"
            >
              <ChevronDown size={12} />
            </button>
          </div>

          {/* Vertical Snap-Scroll Viewport */}
          <div
            ref={screenScrollRef}
            onScroll={handleScreenScroll}
            className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth relative"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {MAC_SCREENSHOTS.map((screen, idx) => (
              <div
                key={screen.id}
                onClick={() =>
                  onInspect({
                    id: screen.id,
                    slotNumber: screen.slotNumber,
                    type: screen.type,
                    dimensions: screen.dimensions,
                    hint: screen.hint,
                    url: screen.url
                  })
                }
                className="w-full h-full snap-start relative flex items-center justify-center bg-black overflow-hidden flex-shrink-0 cursor-pointer group"
              >
                {/* Screenshot Image: object-contain inside black viewport ensures 100% of the graphic is crisp and complete */}
                <img
                  src={screen.url}
                  alt={screen.hint}
                  className="w-full h-full object-contain bg-black group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Subtle vignette gradient for readable text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none flex flex-col justify-between p-3 z-20">
                  {/* Top-Left Slot Badge */}
                  <div className="flex items-center gap-1.5">
                    <span className="bg-[#FF0000] text-white font-courier text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
                      SCREENSHOT 0{idx + 1}/03
                    </span>
                    <span className="bg-black/80 font-courier text-[8px] text-neutral-300 px-1.5 py-0.5 uppercase border border-neutral-700">
                      {screen.tag}
                    </span>
                  </div>

                  {/* Bottom Text Description */}
                  <div className="space-y-0.5">
                    <span className="font-courier text-[8px] text-[#FF0000] font-bold uppercase tracking-wider block">
                      DESIGNED BY HARSHPREET KAUR
                    </span>
                    <h5 className="font-anton text-sm sm:text-base text-white uppercase tracking-tight leading-tight truncate">
                      INTERACTIVE LIVE GAMIFICATION
                    </h5>
                    <div className="flex items-center justify-between text-[8px] font-courier text-neutral-400 pt-0.5 border-t border-neutral-800">
                      <span className="uppercase truncate">
                        SWIPE TO EXPLORE
                      </span>
                      <span className="text-[#FF0000] font-bold uppercase shrink-0">
                        [TAP TO ZOOM]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-2 right-3 flex items-center gap-1 z-30">
            {MAC_SCREENSHOTS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToScreenIndex(dotIdx)}
                className={`h-1 transition-all cursor-pointer ${
                  activeScreenIndex === dotIdx
                    ? 'w-4 bg-[#FF0000]'
                    : 'w-1.5 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Jump to screenshot 0${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
