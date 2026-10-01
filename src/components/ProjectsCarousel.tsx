import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, WireframeSlot } from '../types';
import { ChevronLeft, ChevronRight, UploadCloud, Info, Play } from 'lucide-react';

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

  const project = CASE_STUDIES[currentProjectIndex];

  // Helper renderer for each case study's unique wireframe layout matching PDF wireframes
  const renderWireframeGrid = () => {
    switch (project.wireframeLayout) {
      case 'lakme': {
        return (
          <div className="grid grid-cols-3 gap-3 h-[420px] sm:h-[480px] w-full">
            {project.slots.map((slot, idx) => {
              return (
                <div
                  key={slot.id}
                  onClick={() => setActiveSlot({ project, slot })}
                  className="h-full bg-[#18181A] hover:bg-[#202022] border border-neutral-700/80 flex flex-col justify-between transition-all cursor-pointer group relative overflow-hidden"
                >
                  {slot.url ? (
                    <div className="w-full h-full relative group bg-black flex items-center justify-center overflow-hidden">
                      {isVideoUrl(slot.url) || slot.type === 'video' || slot.type === 'reel' ? (
                        <video
                          src={slot.url}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={slot.url}
                          alt={slot.hint}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between pointer-events-none">
                        <div className="flex justify-between items-center text-[10px] font-courier text-white">
                          <span className="bg-[#FF0000] px-1.5 py-0.5 font-bold">SLOT 0{idx + 1}</span>
                          <span className="bg-black/60 px-1.5 py-0.5">{slot.dimensions}</span>
                        </div>
                        <span className="font-courier text-[10px] text-white font-bold uppercase truncate">
                          {slot.hint}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 flex flex-col justify-between h-full w-full">
                      {/* Slot Top Meta */}
                      <div className="flex justify-between items-center text-[10px] font-courier text-neutral-400">
                        <span className="font-bold bg-black/60 px-1.5 py-0.5 text-neutral-300">
                          SLOT {slot.slotNumber}
                        </span>
                        <span>{slot.dimensions}</span>
                      </div>

                      {/* Slot Center Glyph & Title */}
                      <div className="text-center my-auto px-2">
                        <div className="w-12 h-12 mx-auto bg-neutral-800/80 group-hover:bg-[#FF0000]/20 border border-neutral-700/60 group-hover:border-[#FF0000]/40 flex items-center justify-center mb-3 transition-all rounded-sm">
                          <Play size={18} className="text-neutral-400 group-hover:text-[#FF0000] ml-0.5 transition-colors" />
                        </div>
                        <span className="font-courier text-xs text-neutral-200 uppercase font-bold tracking-wider block mb-1">
                          {slot.hint}
                        </span>
                        <span className="font-courier text-[9px] text-[#FF0000] uppercase tracking-widest font-semibold">
                          [READY FOR CLOUDINARY]
                        </span>
                      </div>

                      {/* Slot Bottom Action */}
                      <div className="flex items-center justify-between font-courier text-[9px] text-neutral-500 pt-2 border-t border-neutral-800">
                        <span className="uppercase">9:16 VERTICAL</span>
                        <span className="group-hover:text-white uppercase transition-colors">
                          [CLICK TO INSPECT]
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      }

      case 'mac-promo':
      case 'mac-threads':
        // 3 tall vertical columns (Pages 10 and 13)
        return (
          <div className="grid grid-cols-3 gap-3 h-[420px] sm:h-[480px]">
            {project.slots.map((slot, idx) => (
              <div
                key={slot.id}
                onClick={() => setActiveSlot({ project, slot })}
                className="h-full bg-[#18181A] hover:bg-[#202022] border border-neutral-700/80 flex flex-col justify-between transition-all cursor-pointer group relative overflow-hidden"
              >
                {slot.url ? (
                  <div className="w-full h-full relative group bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src={slot.url}
                      alt={slot.hint}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between pointer-events-none">
                      <div className="flex justify-between items-center text-[10px] font-courier text-white">
                        <span className="bg-[#FF0000] px-1.5 py-0.5 font-bold">SLOT 0{idx + 1}</span>
                        <span className="bg-black/60 px-1.5 py-0.5">{slot.dimensions}</span>
                      </div>
                      <span className="font-courier text-[10px] text-white font-bold uppercase truncate">
                        {slot.hint}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 flex flex-col justify-between h-full w-full">
                    <div className="flex justify-between items-center text-[10px] font-courier text-neutral-400">
                      <span className="font-bold bg-black/40 px-1.5 py-0.5">
                        SLOT 0{idx + 1}
                      </span>
                      <span>{slot.dimensions}</span>
                    </div>

                    <div className="text-center my-auto">
                      <div className="w-12 h-12 mx-auto bg-neutral-800/80 group-hover:bg-[#FF0000]/20 flex items-center justify-center mb-3 transition-colors">
                        <UploadCloud size={20} className="text-neutral-400 group-hover:text-[#FF0000]" />
                      </div>
                      <span className="font-courier text-xs text-neutral-200 uppercase font-bold tracking-wider block">
                        {slot.hint}
                      </span>
                    </div>

                    <span className="font-courier text-[9px] text-neutral-400 text-right uppercase">
                      [CLICK TO BIND MEDIA]
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'cornetto':
        // Page 11: 1 large left, 4 center squares (2x2), 1 tall right
        return (
          <div className="grid grid-cols-12 gap-3 h-[420px] sm:h-[480px]">
            {/* Slot 1: Left */}
            <div
              onClick={() => setActiveSlot({ project, slot: project.slots[0] })}
              className="col-span-4 bg-[#2C2C2E] hover:bg-[#3A3A3C] p-3 flex flex-col justify-between transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-center text-[9px] font-courier text-neutral-400">
                <span className="font-bold bg-black/40 px-1 py-0.5">SLOT 01</span>
                <span>{project.slots[0].dimensions}</span>
              </div>
              <div className="text-center my-auto">
                <span className="font-courier text-xs text-neutral-200 uppercase font-bold block">
                  {project.slots[0].hint}
                </span>
              </div>
              <span className="font-courier text-[8px] text-neutral-400 text-right uppercase">
                [PENDING MEDIA]
              </span>
            </div>

            {/* 4 Center squares */}
            <div className="col-span-4 grid grid-cols-2 grid-rows-2 gap-2 h-full">
              {[1, 2, 3, 4].map((sIndex) => (
                <div
                  key={`cornetto-s-${sIndex}`}
                  onClick={() =>
                    setActiveSlot({ project, slot: project.slots[sIndex] })
                  }
                  className="bg-[#2C2C2E] hover:bg-[#3A3A3C] p-2 flex flex-col justify-between transition-all cursor-pointer group"
                >
                  <span className="font-courier text-[8px] text-neutral-400 font-bold">
                    SLOT 0{sIndex + 1}
                  </span>
                  <span className="font-courier text-[9px] text-neutral-200 uppercase font-bold text-center">
                    {project.slots[sIndex]?.hint.slice(0, 20)}...
                  </span>
                  <span className="font-courier text-[7px] text-neutral-400 text-right">
                    [BIND]
                  </span>
                </div>
              ))}
            </div>

            {/* Slot 6: Right */}
            <div
              onClick={() => setActiveSlot({ project, slot: project.slots[5] })}
              className="col-span-4 bg-[#2C2C2E] hover:bg-[#3A3A3C] p-3 flex flex-col justify-between transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-center text-[9px] font-courier text-neutral-400">
                <span className="font-bold bg-black/40 px-1 py-0.5">SLOT 06</span>
                <span>{project.slots[5].dimensions}</span>
              </div>
              <div className="text-center my-auto">
                <span className="font-courier text-xs text-neutral-200 uppercase font-bold block">
                  {project.slots[5].hint}
                </span>
              </div>
              <span className="font-courier text-[8px] text-neutral-400 text-right uppercase">
                [PENDING MEDIA]
              </span>
            </div>
          </div>
        );

      case 'novology':
        // Page 12 layout
        return (
          <div className="grid grid-cols-12 gap-3 h-[420px] sm:h-[480px]">
            {/* Slot 1: Left */}
            <div
              onClick={() => setActiveSlot({ project, slot: project.slots[0] })}
              className="col-span-5 bg-[#2C2C2E] hover:bg-[#3A3A3C] p-4 flex flex-col justify-between transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-center text-[10px] font-courier text-neutral-400">
                <span className="font-bold bg-black/40 px-1.5 py-0.5">SLOT 01</span>
                <span>{project.slots[0].dimensions}</span>
              </div>
              <div className="text-center my-auto">
                <span className="font-courier text-xs text-neutral-200 uppercase font-bold block">
                  {project.slots[0].hint}
                </span>
              </div>
              <span className="font-courier text-[9px] text-neutral-400 text-right uppercase">
                [CLINICAL HARVEST]
              </span>
            </div>

            {/* Center + Right */}
            <div className="col-span-4 flex flex-col gap-3 h-full">
              <div
                onClick={() => setActiveSlot({ project, slot: project.slots[1] })}
                className="h-[48%] bg-[#2C2C2E] hover:bg-[#3A3A3C] p-3 flex flex-col justify-between transition-all cursor-pointer group"
              >
                <span className="font-courier text-[9px] text-neutral-400 font-bold">SLOT 02</span>
                <span className="font-courier text-[11px] text-neutral-200 uppercase font-bold text-center">
                  {project.slots[1].hint}
                </span>
                <span className="font-courier text-[8px] text-neutral-400 text-right">[BIND]</span>
              </div>
              <div
                onClick={() => setActiveSlot({ project, slot: project.slots[2] })}
                className="h-[48%] bg-[#2C2C2E] hover:bg-[#3A3A3C] p-3 flex flex-col justify-between transition-all cursor-pointer group"
              >
                <span className="font-courier text-[9px] text-neutral-400 font-bold">SLOT 03</span>
                <span className="font-courier text-[11px] text-neutral-200 uppercase font-bold text-center">
                  {project.slots[2].hint}
                </span>
                <span className="font-courier text-[8px] text-neutral-400 text-right">[BIND]</span>
              </div>
            </div>

            {/* Right Slot */}
            <div
              onClick={() => setActiveSlot({ project, slot: project.slots[4] || project.slots[3] })}
              className="col-span-3 bg-[#2C2C2E] hover:bg-[#3A3A3C] p-3 flex flex-col justify-between transition-all cursor-pointer group"
            >
              <span className="font-courier text-[9px] text-neutral-400 font-bold">SLOT 04</span>
              <span className="font-courier text-[11px] text-neutral-200 uppercase font-bold text-center my-auto">
                {project.slots[3]?.hint}
              </span>
              <span className="font-courier text-[8px] text-neutral-400 text-right">[BIND]</span>
            </div>
          </div>
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
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-8">
          <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-[#FF0000] tracking-tight uppercase leading-none">
            PROJECTS
          </h2>
        </div>

        {/* 2-Column Layout: Left Narrative & Metrics, Right Wireframe Media Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Case Study Narrative, Bullets & Performance */}
          <div className="lg:col-span-5 flex flex-col justify-between min-h-[420px]">
            {(() => {
              const isFirstSlide = currentProjectIndex === 0;
              const isSecondSlide = currentProjectIndex === 1;
              const isThirdSlide = currentProjectIndex === 2;
              const isFourthSlide = currentProjectIndex === 3;
              const isFifthSlide = currentProjectIndex === 4;
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
                ? '45px'
                : '52px';
              const bodyFontSize = isFifthSlide ? '19px' : '17px';
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
                titleClass += 'font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[84px]';
                titleStyle = { fontFamily: 'Bebas Neue, sans-serif', fontSize: '84px', lineHeight: '0.92' };
              } else {
                titleClass += 'font-anton text-3xl sm:text-4xl md:text-5xl';
              }

              return (
                <>
                  <div>
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

        {/* Carousel Pagination & Navigation Controls (Matches Pages 9 to 13 bottom 5 dots) */}
        <div className="flex items-center justify-between mt-10 pt-6">
          <button
            onClick={() =>
              setCurrentProjectIndex(
                (prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length
              )
            }
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
            onClick={() =>
              setCurrentProjectIndex((prev) => (prev + 1) % CASE_STUDIES.length)
            }
            className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Next case study"
          >
            <ChevronRight size={20} />
          </button>
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
