import React, { useState, useEffect, useRef } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, WireframeSlot } from '../types';
import { ChevronLeft, ChevronRight, UploadCloud, Info, Play, Pause } from 'lucide-react';
import { LakmeShowcase } from './LakmeShowcase';
import { MacPromoShowcase } from './MacPromoShowcase';
import { CornettoShowcase } from './CornettoShowcase';
import { NovologyShowcase } from './NovologyShowcase';
import { MacThreadsShowcase } from './MacThreadsShowcase';

interface ProjectsCarouselProps {
  onOpenWork: () => void;
}

function getYouTubeId(url?: string): string {
  if (!url) return '';
  const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch && shortsMatch[1]) return shortsMatch[1];
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2] && match[2].length === 11 ? match[2] : '';
}

function getInstagramId(url?: string): string {
  if (!url) return '';
  const match = url.match(/\/reel\/([a-zA-Z0-9_-]+)/);
  return match && match[1] ? match[1] : '';
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

export const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ onOpenWork }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [activeSlot, setActiveSlot] = useState<{
    project: CaseStudy;
    slot: WireframeSlot;
  } | null>(null);

  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [autoplayProgress, setAutoplayProgress] = useState(0);

  // Slide transition animation state (matching HeroCarousel sliding transition)
  const [displayIndex, setDisplayIndex] = useState(currentProjectIndex);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [slidePhase, setSlidePhase] = useState<'idle' | 'exiting' | 'entering'>('idle');

  const touchStartXRef = useRef<number | null>(null);

  const project = CASE_STUDIES[displayIndex];

  const handlePrev = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length
    );
  };

  const handleNext = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

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

  // Auto advance every 30 seconds (at least 30 seconds stay)
  useEffect(() => {
    if (!isAutoPlaying || activeSlot !== null) return;

    const intervalTime = 100;
    const totalDuration = 30000; // 30 seconds stay
    const step = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setAutoplayProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isAutoPlaying, activeSlot, currentProjectIndex]);

  // Reset autoplay progress when slide changes
  useEffect(() => {
    setAutoplayProgress(0);
  }, [currentProjectIndex]);

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeSlot !== null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlot, currentProjectIndex]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Slide transition animation styles (independent, smooth horizontal slide)
  const getSlideAnimationClass = () => {
    if (slidePhase === 'exiting') {
      return slideDirection === 'next'
        ? '-translate-x-14 opacity-0 duration-220 ease-in'
        : 'translate-x-14 opacity-0 duration-220 ease-in';
    }
    if (slidePhase === 'entering') {
      return slideDirection === 'next'
        ? 'translate-x-14 opacity-0 transition-none'
        : '-translate-x-14 opacity-0 transition-none';
    }
    return 'translate-x-0 opacity-100 duration-380 ease-out';
  };

  // Helper renderer for each case study's unique wireframe layout matching PDF wireframes
  const renderWireframeGrid = () => {
    switch (project.wireframeLayout) {
      case 'lakme': {
        return (
          <LakmeShowcase
            onInspect={(slot) => setActiveSlot({ project, slot })}
          />
        );
      }

      case 'mac-promo': {
        return (
          <MacPromoShowcase
            onInspect={(slot) => setActiveSlot({ project, slot })}
          />
        );
      }

      case 'mac-threads':
        return (
          <MacThreadsShowcase
            project={project}
            onInspect={(slot) => setActiveSlot({ project, slot })}
          />
        );

      case 'cornetto':
        return (
          <CornettoShowcase
            onInspect={(slot) => setActiveSlot({ project, slot })}
          />
        );

      case 'novology':
        return (
          <NovologyShowcase
            onInspect={(slot) => setActiveSlot({ project, slot })}
          />
        );

      default:
        return null;
    }
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

  return (
    <section
      id="projects-section"
      className="w-full bg-[#0D0D0D] text-white py-14 sm:py-20 px-4 sm:px-8 select-none relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-neutral-800/80">
          <div className="flex items-center gap-3">
            <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-[#FF0000] tracking-tight uppercase leading-none">
              PROJECTS
            </h2>
            <span className="font-courier text-[10px] text-neutral-400 uppercase tracking-widest hidden sm:inline">
              // CASE STUDIES ARCHIVE
            </span>
          </div>

          {/* 30-Second Autoplay Status in Header */}
          <div className="flex items-center gap-2 bg-[#18181A] px-2.5 py-1 border border-neutral-800">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isAutoPlaying && !activeSlot ? 'bg-[#FF0000] animate-pulse' : 'bg-neutral-500'
              }`}
            />
            <span className="font-courier text-[9px] uppercase tracking-wider text-neutral-300">
              {isAutoPlaying && !activeSlot ? '30S AUTO-CYCLE' : 'PAUSED'}
            </span>
          </div>
        </div>

        {/* 2-Column Layout: Left Narrative & Metrics, Right Wireframe Media Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start transition-all transform will-change-transform ${getSlideAnimationClass()}`}
        >
          {/* Left Column: Case Study Narrative, Bullets & Performance */}
          <div className="lg:col-span-5 flex flex-col justify-between min-h-[420px]">
            {(() => {
              const isFirstSlide = displayIndex === 0;
              const isSecondSlide = displayIndex === 1;
              const isThirdSlide = displayIndex === 2;
              const isFourthSlide = displayIndex === 3;
              const isFifthSlide = displayIndex === 4;
              const hasMetrics = Boolean(
                project.metricHeading || (project.metrics && project.metrics.length > 0)
              );

              // Slide-specific styling
              const categoryFontSize = isThirdSlide
                ? '64px'
                : isSecondSlide
                ? '57px'
                : isFourthSlide
                ? '53px'
                : isFifthSlide
                ? '44px'
                : '52px';
              const bodyFontSize = '17px';
              const metricFontSize = isFourthSlide ? '39px' : '47px';

              let titleClass = 'tracking-tight leading-[0.95] uppercase mb-4 text-white ';
              let titleStyle: React.CSSProperties | undefined;

              if (isFirstSlide) {
                titleClass += 'font-bebas text-4xl sm:text-5xl md:text-[55px]';
                titleStyle = { fontFamily: 'Bebas Neue, sans-serif', fontSize: '55px', lineHeight: '0.95' };
              } else if (isSecondSlide) {
                titleClass += 'font-bebas text-4xl sm:text-5xl md:text-[59px]';
                titleStyle = { fontFamily: 'Bebas Neue, sans-serif', fontSize: '59px', lineHeight: '0.95' };
              } else if (isThirdSlide) {
                titleClass += 'font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[80px]';
                titleStyle = { fontFamily: 'Bebas Neue, sans-serif', fontSize: '80px', lineHeight: '0.92' };
              } else if (isFourthSlide) {
                titleClass += 'font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[87px]';
                titleStyle = { fontFamily: 'Bebas Neue, sans-serif', fontSize: '87px', lineHeight: '0.92' };
              } else if (isFifthSlide) {
                titleClass += 'font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[82px]';
                titleStyle = { fontFamily: 'Bebas Neue, sans-serif', fontSize: '82px', lineHeight: '0.92' };
              } else {
                titleClass += 'font-anton text-3xl sm:text-4xl md:text-5xl';
              }

              return (
                <>
                  <div style={isFifthSlide ? { fontSize: '14px' } : undefined}>
                    {/* Category Tag (in Red Bebas Neue) */}
                    <span
                      className="font-bebas tracking-wide uppercase block mb-1 leading-none font-normal text-[#FF0000]"
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: categoryFontSize,
                        marginTop: isThirdSlide ? '-4px' : undefined,
                      }}
                    >
                      {project.categoryTag}
                    </span>

                    {/* Title */}
                    <h3 className={titleClass} style={titleStyle}>
                      {renderTitle(project.title)}
                    </h3>

                    {/* Body description in Courier New */}
                    <p
                      className="font-courier text-neutral-300 leading-relaxed mb-6 font-medium"
                      style={{ fontSize: bodyFontSize }}
                    >
                      {project.description}
                    </p>

                    {/* Bullet points */}
                    <ul className="space-y-2 mb-8">
                      {project.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="font-courier text-neutral-200 flex items-start gap-2"
                          style={{ fontSize: bodyFontSize }}
                        >
                          <span
                            className="text-[#FF0000] font-bold"
                            style={{ fontSize: bodyFontSize }}
                          >
                            •
                          </span>
                          <span style={{ fontSize: bodyFontSize }}>
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Performance Metrics: Rendered if present, hidden completely on 5th case study */}
                  {hasMetrics && (
                    <div className="pt-4 border-t border-neutral-800/80">
                      {/* Line 1: Top Asset Performance in Bebas Neue, Regular, 47px with colon - only on first case study */}
                      {project.metricHeading && (
                        <div className="mb-2">
                          <span
                            className="font-bebas text-3xl sm:text-4xl lg:text-[47px] text-white tracking-wide uppercase font-normal inline-block bg-black leading-none"
                            style={{
                              fontFamily: 'Bebas Neue, sans-serif',
                              fontSize: '47px',
                              color: '#ffffff',
                              fontWeight: 'normal',
                            }}
                          >
                            {project.metricHeading}
                          </span>
                        </div>
                      )}

                      {/* Line 2: Metrics in Bebas Neue, Regular */}
                      <div className="flex flex-wrap items-baseline gap-x-6 sm:gap-x-8 gap-y-2">
                        {project.metrics
                          .filter((m) => m.value || m.label)
                          .map((metric, idx) => {
                            // If metric has no label, e.g. "15+ Assets deployed over 2hr Event Runtime"
                            if (!metric.label && metric.value) {
                              const match = metric.value.match(/^(\d+\+?)\s*(.*)$/);
                              if (match) {
                                return (
                                  <div key={idx} className="flex items-baseline gap-2">
                                    <span
                                      className="font-bebas text-2xl sm:text-3xl lg:text-[47px] text-[#FF0000] tracking-wide font-normal leading-none"
                                      style={{
                                        fontFamily: 'Bebas Neue, sans-serif',
                                        fontSize: metricFontSize,
                                        color: '#FF0000',
                                        fontWeight: 'normal',
                                      }}
                                    >
                                      {match[1]}
                                    </span>
                                    <span
                                      className="font-bebas text-2xl sm:text-3xl lg:text-[47px] text-white tracking-wide font-normal leading-none"
                                      style={{
                                        fontFamily: 'Bebas Neue, sans-serif',
                                        fontSize: metricFontSize,
                                        color: '#ffffff',
                                        fontWeight: 'normal',
                                      }}
                                    >
                                      {match[2]}
                                    </span>
                                  </div>
                                );
                              }

                              return (
                                <div key={idx} className="flex items-baseline gap-2">
                                  <span
                                    className="font-bebas text-2xl sm:text-3xl lg:text-[47px] text-white tracking-wide font-normal leading-none"
                                    style={{
                                      fontFamily: 'Bebas Neue, sans-serif',
                                      fontSize: metricFontSize,
                                      color: '#ffffff',
                                      fontWeight: 'normal',
                                    }}
                                  >
                                    {metric.value}
                                  </span>
                                </div>
                              );
                            }

                            return (
                              <div key={idx} className="flex items-baseline gap-2">
                                <span
                                  className="font-bebas text-2xl sm:text-3xl lg:text-[47px] text-white uppercase tracking-wide font-normal leading-none"
                                  style={{
                                    fontFamily: 'Bebas Neue, sans-serif',
                                    fontSize: metricFontSize,
                                    color: '#ffffff',
                                    fontWeight: 'normal',
                                  }}
                                >
                                  {metric.label.replace(/:$/, '')}:
                                </span>
                                <span
                                  className="font-bebas text-2xl sm:text-3xl lg:text-[47px] text-[#FF0000] tracking-wide font-normal leading-none"
                                  style={{
                                    fontFamily: 'Bebas Neue, sans-serif',
                                    fontSize: metricFontSize,
                                    color: '#FF0000',
                                    fontWeight: 'normal',
                                  }}
                                >
                                  {metric.value}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>

          {/* Right Column: Wireframe Slots Grid */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Render the specific wireframe layout */}
            {renderWireframeGrid()}
          </div>
        </div>

        {/* Carousel Pagination & Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-neutral-800/80">
          {/* Left: Progress info & status */}
          <div className="flex items-center gap-3">
            <span className="font-courier text-[10px] text-neutral-400 uppercase tracking-widest">
              CASE STUDY 0{displayIndex + 1} / 0{CASE_STUDIES.length}
            </span>
            <div className="w-24 sm:w-32 h-1 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FF0000] transition-all duration-150 ease-linear"
                style={{ width: `${autoplayProgress}%` }}
              />
            </div>
            <span className="font-courier text-[9px] text-neutral-400 uppercase tracking-wider hidden md:inline">
              {isAutoPlaying && !activeSlot ? '30S STAY' : '[PAUSED]'}
            </span>
          </div>

          {/* Center & Right: Navigation Controls & 5 Dots */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous case study"
            >
              <ChevronLeft size={20} />
            </button>

            {/* 5 Dots Indicator matching PDF Pages 9, 10, 11, 12, 13 */}
            <div className="flex items-center gap-2.5">
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
                        ? 'w-3.5 h-3.5 bg-[#FF0000]'
                        : 'w-2 h-2 bg-neutral-600 hover:bg-neutral-400'
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Next case study"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Wireframe Slot Inspector Modal */}
      {activeSlot && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setActiveSlot(null)}
        >
          <div
            className="bg-[#18181A] text-white max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-courier text-xs font-bold bg-[#FF0000] text-white px-2 py-0.5">
                  SLOT {activeSlot.slot.slotNumber}
                </span>
                <span className="font-courier text-xs text-neutral-400 uppercase">
                  {activeSlot.slot.dimensions}
                </span>
              </div>
              <button
                onClick={() => setActiveSlot(null)}
                className="font-courier text-neutral-400 hover:text-white p-1 text-sm font-bold cursor-pointer"
              >
                [ESC]
              </button>
            </div>

            <h4 className="font-anton text-2xl uppercase tracking-tight text-white mb-1">
              {activeSlot.slot.hint}
            </h4>
            <p className="font-courier text-xs text-[#FF0000] font-bold uppercase mb-4">
              {activeSlot.project.categoryTag}
            </p>

            {activeSlot.slot.url && (
              <div className="mb-4 max-h-[340px] overflow-hidden bg-black flex items-center justify-center border border-neutral-700">
                {isVideoUrl(activeSlot.slot.url) || activeSlot.slot.type === 'video' || activeSlot.slot.type === 'reel' ? (
                  <video
                    src={activeSlot.slot.url}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="max-h-[340px] w-full object-contain"
                  />
                ) : (
                  <img
                    src={activeSlot.slot.url}
                    alt={activeSlot.slot.hint}
                    className="max-h-[340px] w-auto object-contain"
                  />
                )}
              </div>
            )}

            {activeSlot.slot.url ? (
              <div className="bg-[#242426] p-3 mb-6 text-xs font-courier leading-relaxed text-neutral-300 border border-neutral-700">
                <div className="flex items-center justify-between text-[10px] text-neutral-400 mb-1">
                  <span className="text-[#FF0000] font-bold uppercase">LIVE CAMPAIGN ASSET</span>
                  <span>{activeSlot.slot.dimensions}</span>
                </div>
                <p className="text-white font-medium">
                  {activeSlot.slot.hint}
                </p>
              </div>
            ) : (
              <div className="bg-[#242426] p-3.5 mb-6 text-xs font-courier leading-relaxed text-neutral-300">
                <div className="flex items-start gap-2 mb-2">
                  <Info size={14} className="text-[#FF0000] shrink-0 mt-0.5" />
                  <span className="text-white font-bold uppercase">
                    HOMEPAGE TO WORK-PAGE MEDIA BINDING ARCHITECTURE:
                  </span>
                </div>
                As designed, this slot will dynamically inherit high-resolution image/video assets
                from the master “Work” dump page once uploaded. The aspect ratio is calibrated to{' '}
                <span className="text-white font-bold">{activeSlot.slot.dimensions}</span>.
              </div>
            )}

            <div className="flex justify-between items-center gap-3">
              <button
                onClick={() => setActiveSlot(null)}
                className="px-4 py-2 font-courier text-xs uppercase bg-neutral-800 hover:bg-neutral-700 cursor-pointer"
              >
                CANCEL
              </button>
              <button
                onClick={() => {
                  setActiveSlot(null);
                  onOpenWork();
                }}
                className="bg-[#FF0000] text-white px-5 py-2 font-courier text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                OPEN WORK VAULT [→]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
