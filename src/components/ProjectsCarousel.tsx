import React, { useState, useEffect, useRef } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { Volume2, VolumeX } from 'lucide-react';

interface ProjectsCarouselProps {
  onOpenWork: () => void;
}

function isVideoUrl(url?: string): boolean {
  if (!url) return false;
  const cleanUrl = url.toLowerCase();
  return (
    cleanUrl.endsWith('.mp4') ||
    cleanUrl.endsWith('.webm') ||
    cleanUrl.endsWith('.mov') ||
    cleanUrl.endsWith('.m4v') ||
    cleanUrl.includes('/video/upload/') ||
    (cleanUrl.includes('cloudinary.com') && cleanUrl.includes('/video/'))
  );
}

const CASE_STUDY_METADATA: Record<number, { client: string; category: string }> = {
  1: { client: 'Lakmé', category: 'PRODUCT LAUNCH' },
  2: { client: 'M·A·C Cosmetics', category: 'FLASH CAMPAIGN' },
  3: { client: 'Cornetto', category: 'FLAVOUR LAUNCH' },
  4: { client: 'Novology', category: 'EXPERIENTIAL CAMPAIGN' },
  5: { client: 'M·A·C Cosmetics', category: 'FESTIVE LAUNCH' },
};

const METRIC_HEADINGS: Record<number, string> = {
  1: 'TOP ASSET PERFORMANCE:',
  2: 'IMPACT:',
  3: 'CAMPAIGN SCALE:',
  4: 'OUTPUT:',
  5: 'METRICS:',
};

export const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ onOpenWork }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [mediaProgress, setMediaProgress] = useState(0);

  // Slide transition animation state
  const [displayIndex, setDisplayIndex] = useState(currentProjectIndex);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [slidePhase, setSlidePhase] = useState<'idle' | 'exiting' | 'entering'>('idle');

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);

  const project = CASE_STUDIES[displayIndex] || CASE_STUDIES[0];
  const metadata = CASE_STUDY_METADATA[project.id] || {
    client: 'Client',
    category: project.categoryTag.replace(/^.*:\s*/, '') || 'PROJECT',
  };

  // All slots available for the case study (scrollable strip)
  const availableSlots = project.slots && project.slots.length > 0 ? project.slots : [];
  const activeSlot = availableSlots[activeSlotIndex] || availableSlots[0];

  // When project slide changes, reset active asset to 0
  useEffect(() => {
    setActiveSlotIndex(0);
    setMediaProgress(0);
  }, [displayIndex]);

  // When active slot changes, play video if video
  useEffect(() => {
    setMediaProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [activeSlotIndex]);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeBtn = thumbnailContainerRef.current.querySelector(
        `[data-slot-idx="${activeSlotIndex}"]`
      ) as HTMLElement | null;
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: 'smooth',
          inline: 'nearest',
          block: 'nearest',
        });
      }
    }
  }, [activeSlotIndex]);

  // Handle slide transitions with visible sliding animation
  useEffect(() => {
    if (currentProjectIndex === displayIndex) return;

    const isForward =
      (currentProjectIndex > displayIndex &&
        !(displayIndex === 0 && currentProjectIndex === CASE_STUDIES.length - 1)) ||
      (displayIndex === CASE_STUDIES.length - 1 && currentProjectIndex === 0);

    const dir = isForward ? 'next' : 'prev';
    setSlideDirection(dir);
    setSlidePhase('exiting');

    const exitTimer = setTimeout(() => {
      setDisplayIndex(currentProjectIndex);
      setSlidePhase('entering');

      const enterTimer = setTimeout(() => {
        setSlidePhase('idle');
      }, 40);

      return () => clearTimeout(enterTimer);
    }, 220);

    return () => clearTimeout(exitTimer);
  }, [currentProjectIndex, displayIndex]);

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentProjectIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
      }
      if (e.key === 'ArrowRight') {
        setCurrentProjectIndex((prev) => (prev + 1) % CASE_STUDIES.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track video progress during playback
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const prog = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setMediaProgress(Math.min(100, Math.max(0, prog)));
    }
  };

  // When video ends playing, automatically move to the next asset in the thumbnail row
  const handleVideoEnded = () => {
    setMediaProgress(0);
    if (availableSlots.length > 1) {
      setActiveSlotIndex((prev) => (prev + 1) % availableSlots.length);
    }
  };

  // For static images, automatically advance to next asset after 5 seconds with animated progress
  useEffect(() => {
    if (!activeSlot?.url) return;
    const isVideo = isVideoUrl(activeSlot.url) || activeSlot.type === 'video' || activeSlot.type === 'reel';
    if (isVideo) return;

    setMediaProgress(0);
    const duration = 5000;
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setMediaProgress((prev) => {
        if (prev >= 100) {
          if (availableSlots.length > 1) {
            setActiveSlotIndex((curr) => (curr + 1) % availableSlots.length);
          }
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeSlot, availableSlots.length]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        setCurrentProjectIndex((prev) => (prev + 1) % CASE_STUDIES.length);
      } else {
        setCurrentProjectIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
      }
    }
    touchStartXRef.current = null;
  };

  // Helper to highlight [AI] in red in titles like "Ahead of the Evolut[AI]on"
  const renderTitle = (title: string) => {
    const regex = /(\[AI\])/i;
    if (regex.test(title)) {
      const parts = title.split(regex);
      return (
        <>
          {parts.map((part, i) =>
            regex.test(part) ? (
              <span key={i} className="text-[#FF0000]">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </>
      );
    }
    return title;
  };

  // Slide transition animation styles
  const getSlideAnimationClass = () => {
    if (slidePhase === 'exiting') {
      return slideDirection === 'next'
        ? '-translate-x-12 opacity-0 duration-220 ease-in'
        : 'translate-x-12 opacity-0 duration-220 ease-in';
    }
    if (slidePhase === 'entering') {
      return slideDirection === 'next'
        ? 'translate-x-12 opacity-0 transition-none'
        : '-translate-x-12 opacity-0 transition-none';
    }
    return 'translate-x-0 opacity-100 duration-350 ease-out';
  };

  const metricHeading = METRIC_HEADINGS[project.id] || project.metricHeading || 'METRICS:';

  return (
    <section
      id="projects-section"
      className="w-full bg-black text-white py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-14 select-none relative min-h-[calc(100vh-90px)] flex flex-col justify-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle Right Arrow Control (On desktop: vertically centered at side; on mobile: moved down next to dots) */}
      <button
        id="projects-next-btn"
        onClick={() => setCurrentProjectIndex((prev) => (prev + 1) % CASE_STUDIES.length)}
        className="absolute bottom-4 sm:bottom-6 md:bottom-auto md:top-1/2 right-[calc(50%-88px)] md:right-2 lg:right-4 md:-translate-y-1/2 z-40 p-2 text-white/40 hover:text-white hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
        aria-label="Next case study"
      >
        <span className="font-courier font-bold text-2xl sm:text-3xl inline-block">›</span>
      </button>

      {/* Subtle Left Arrow Control (On desktop: vertically centered at side; on mobile: moved down next to dots) */}
      <button
        id="projects-prev-btn"
        onClick={() => setCurrentProjectIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length)}
        className="absolute bottom-4 sm:bottom-6 md:bottom-auto md:top-1/2 left-[calc(50%-88px)] md:left-2 lg:left-4 md:-translate-y-1/2 z-40 p-2 text-white/40 hover:text-white hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
        aria-label="Previous case study"
      >
        <span className="font-courier font-bold text-2xl sm:text-3xl inline-block">‹</span>
      </button>

      <div className="max-w-[1360px] mx-auto w-full">
        {/* Main 2-Column Content: Left Copy & Narrative, Right Hero Media + Scrollable Thumbnail Strip */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center transition-all transform will-change-transform ${getSlideAnimationClass()}`}
        >
          {/* Left Column: Number + Category + Client, Monospace Title, Description, Contribution, Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Top Number + Category + Client Lockup */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
              {/* Giant Red Number */}
              <span className="font-anton text-6xl sm:text-7xl lg:text-[5.5rem] text-[#FF0000] leading-[0.85] tracking-normal sm:tracking-wide pr-1 shrink-0 select-none">
                0{displayIndex + 1}
              </span>

              <div className="flex flex-col justify-start pt-1">
                {/* Category Title in Red Anton with breathable kerning */}
                <h2
                  className="font-anton text-2xl sm:text-3xl lg:text-[45.2px] text-[#FF0000] uppercase leading-none mb-2"
                  style={{ letterSpacing: '0.08em' }}
                >
                  {metadata.category}
                </h2>

                {/* Client in Courier Monospace */}
                <span className="font-courier text-xs sm:text-sm text-white tracking-[0.16em] uppercase font-medium">
                  Client: {metadata.client}
                </span>
              </div>
            </div>

            {/* Headline in Courier New Monospace (with [AI] highlighted in red) */}
            <h3 className="font-courier text-base sm:text-lg lg:text-[1.25rem] font-bold text-white tracking-[0.12em] uppercase mb-4 leading-snug">
              {renderTitle(project.title)}
            </h3>

            {/* Description in Courier New Monospace (16px pure white) */}
            <p className="font-courier text-[16px] text-white leading-relaxed mb-5 font-normal max-w-xl">
              {project.description}
            </p>

            {/* Contribution Subheading & Red Square Bullets (16px / 15px pure white) */}
            <div className="mb-5 sm:mb-6">
              <h4 className="font-courier text-[16px] text-white uppercase tracking-[0.16em] mb-2.5 font-semibold">
                Contribution:
              </h4>
              <ul className="space-y-2">
                {project.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="font-courier text-[15px] text-white flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="w-2 h-2 bg-[#FF0000] shrink-0 mt-1.5" />
                    <span className="text-white">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance Metrics Block with Custom Headings (16px / 17px) */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h4 className="font-courier text-[16px] text-white uppercase tracking-[0.16em] mb-2 font-semibold">
                  {metricHeading}
                </h4>
                <div className="font-courier text-[16px] text-white flex flex-wrap items-center gap-x-3 gap-y-1.5 tracking-wider">
                  {project.metrics.map((metric, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && <span className="text-white text-[17px] mx-1">|</span>}
                      <span>
                        {metric.label && <span className="text-white text-[16px]">{metric.label}: </span>}
                        <span className="text-[#FF0000] text-[16px] font-bold">{metric.value}</span>
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Hero Preview Box + Scrollable Thumbnail Strip */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Primary Hero Box: 1 piece of media at a time */}
            <div className="w-full max-w-[420px] sm:max-w-[440px] h-[340px] sm:h-[390px] lg:h-[430px] bg-neutral-900/90 border border-neutral-800 shadow-2xl flex items-center justify-center overflow-hidden relative group">
              {activeSlot?.url ? (
                isVideoUrl(activeSlot.url) || activeSlot.type === 'video' || activeSlot.type === 'reel' ? (
                  <>
                    <video
                      ref={videoRef}
                      key={activeSlot.url}
                      src={activeSlot.url}
                      autoPlay
                      muted={isMuted}
                      playsInline
                      onTimeUpdate={handleTimeUpdate}
                      onEnded={handleVideoEnded}
                      className="w-full h-full object-contain"
                    />
                    {/* Audio Mute/Unmute Toggle */}
                    <button
                      onClick={() => setIsMuted((prev) => !prev)}
                      className="absolute bottom-3 right-3 p-1.5 bg-black/70 hover:bg-black text-white/80 hover:text-white rounded-none border border-neutral-700 transition-colors z-20 cursor-pointer"
                      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    >
                      {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    </button>
                  </>
                ) : (
                  <img
                    key={activeSlot.url}
                    src={activeSlot.url}
                    alt={activeSlot.hint || project.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                )
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-neutral-500 font-courier text-xs p-4 text-center">
                  <span className="text-neutral-400 mb-1 uppercase font-bold">[PREVIEW ASSET]</span>
                  <span>{activeSlot?.hint || 'Media showcase preview'}</span>
                </div>
              )}

              {/* Timeline Seeker Bar at bottom of media window */}
              <div className="absolute bottom-0 left-0 w-full h-1 sm:h-1.5 bg-white/20 z-30 overflow-hidden pointer-events-none">
                <div
                  className="h-full bg-[#FF0000] transition-all duration-75 ease-linear shadow-[0_0_8px_rgba(255,0,0,0.8)]"
                  style={{ width: `${mediaProgress}%` }}
                />
              </div>
            </div>

            {/* Scrollable Thumbnail Strip */}
            {availableSlots.length > 0 && (
              <div className="w-full max-w-[420px] sm:max-w-[440px] mt-3 sm:mt-3.5 relative">
                <div
                  ref={thumbnailContainerRef}
                  className="flex gap-2 sm:gap-2.5 overflow-x-auto pb-2 scroll-smooth select-none"
                  style={{ scrollbarWidth: 'thin' }}
                >
                  {availableSlots.map((slot, idx) => {
                    const isSelected = activeSlotIndex === idx;
                    const isVideo = isVideoUrl(slot.url) || slot.type === 'video' || slot.type === 'reel';

                    return (
                      <button
                        key={slot.id || idx}
                        data-slot-idx={idx}
                        onClick={() => setActiveSlotIndex(idx)}
                        className={`aspect-square w-[74px] sm:w-[78px] shrink-0 bg-neutral-900 border transition-all cursor-pointer overflow-hidden relative group p-0 text-left ${
                          isSelected
                            ? 'border-2 border-[#FF0000] ring-1 ring-[#FF0000]/60 scale-[1.02]'
                            : 'border-neutral-800 hover:border-neutral-500 opacity-70 hover:opacity-100'
                        }`}
                        aria-label={`View asset ${idx + 1}: ${slot.hint || slot.slotNumber}`}
                      >
                        {slot.url ? (
                          isVideo ? (
                            <video
                              src={slot.url}
                              muted
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-cover pointer-events-none"
                            />
                          ) : (
                            <img
                              src={slot.url}
                              alt=""
                              className="w-full h-full object-cover pointer-events-none"
                              loading="lazy"
                            />
                          )
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-600 font-courier text-[10px]">
                            0{idx + 1}
                          </div>
                        )}

                        {/* Small index badge */}
                        <span
                          className={`absolute top-1 left-1 font-courier text-[8px] font-bold px-1 leading-none ${
                            isSelected ? 'bg-[#FF0000] text-white' : 'bg-black/80 text-white/70'
                          }`}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Subtle indicator when study has more than 5 assets */}
                {availableSlots.length > 5 && (
                  <div className="flex items-center justify-between text-[9px] font-courier text-neutral-400 mt-1 px-1">
                    <span>
                      ASSET {String(activeSlotIndex + 1).padStart(2, '0')} / {String(availableSlots.length).padStart(2, '0')}
                    </span>
                    <span className="text-neutral-500 uppercase tracking-widest text-[8px]">
                      ← SCROLL TO VIEW ALL {availableSlots.length} ASSETS →
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Minimalist 5 Dots Pagination Centered at Bottom */}
        <div className="flex items-center justify-center gap-2.5 pt-6 sm:pt-8">
          {CASE_STUDIES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentProjectIndex(idx)}
              className="py-2 px-1 focus:outline-none cursor-pointer"
              aria-label={`Go to case study ${idx + 1}`}
            >
              <div
                className={`transition-all duration-300 rounded-full ${
                  currentProjectIndex === idx
                    ? 'w-3 h-3 bg-[#FF0000]'
                    : 'w-2 h-2 bg-neutral-600 hover:bg-neutral-400'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
