import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, WireframeSlot } from '../types';
import { ChevronLeft, ChevronRight, UploadCloud, Info } from 'lucide-react';

interface ProjectsCarouselProps {
  onOpenWork: () => void;
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
      case 'lakme':
        // 4 slots: 1 tall left, 2 upper right, 1 wide lower right
        return (
          <div className="grid grid-cols-12 gap-3 h-[420px] sm:h-[480px]">
            {/* Slot 1: Tall vertical */}
            <div
              onClick={() => setActiveSlot({ project, slot: project.slots[0] })}
              className="col-span-5 sm:col-span-5 h-full bg-[#2C2C2E] hover:bg-[#3A3A3C] p-4 flex flex-col justify-between transition-all cursor-pointer group relative"
            >
              <div className="flex justify-between items-center text-[10px] font-courier text-neutral-400">
                <span className="font-bold bg-black/40 px-1.5 py-0.5">
                  SLOT 01
                </span>
                <span>{project.slots[0].dimensions}</span>
              </div>
              <div className="text-center my-auto">
                <div className="w-12 h-12 mx-auto bg-neutral-800/80 group-hover:bg-[#FF0000]/20 flex items-center justify-center mb-2 transition-colors">
                  <UploadCloud size={20} className="text-neutral-400 group-hover:text-[#FF0000]" />
                </div>
                <span className="font-courier text-xs text-neutral-200 uppercase font-bold tracking-wider block">
                  {project.slots[0].hint}
                </span>
              </div>
              <span className="font-courier text-[9px] text-neutral-400 text-right uppercase">
                [CLICK TO BIND MEDIA]
              </span>
            </div>

            {/* Right side container */}
            <div className="col-span-7 sm:col-span-7 flex flex-col gap-3 h-full">
              {/* Top row: 2 boxes */}
              <div className="grid grid-cols-2 gap-3 h-[48%]">
                <div
                  onClick={() => setActiveSlot({ project, slot: project.slots[1] })}
                  className="bg-[#2C2C2E] hover:bg-[#3A3A3C] p-3 flex flex-col justify-between transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-center text-[9px] font-courier text-neutral-400">
                    <span className="font-bold bg-black/40 px-1 py-0.5">SLOT 02</span>
                    <span>{project.slots[1].dimensions}</span>
                  </div>
                  <div className="text-center my-auto">
                    <span className="font-courier text-[11px] text-neutral-200 uppercase font-bold block">
                      {project.slots[1].hint}
                    </span>
                  </div>
                  <span className="font-courier text-[8px] text-neutral-400 text-right uppercase">
                    [PENDING MEDIA]
                  </span>
                </div>

                <div
                  onClick={() => setActiveSlot({ project, slot: project.slots[2] })}
                  className="bg-[#2C2C2E] hover:bg-[#3A3A3C] p-3 flex flex-col justify-between transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-center text-[9px] font-courier text-neutral-400">
                    <span className="font-bold bg-black/40 px-1 py-0.5">SLOT 03</span>
                    <span>{project.slots[2].dimensions}</span>
                  </div>
                  <div className="text-center my-auto">
                    <span className="font-courier text-[11px] text-neutral-200 uppercase font-bold block">
                      {project.slots[2].hint}
                    </span>
                  </div>
                  <span className="font-courier text-[8px] text-neutral-400 text-right uppercase">
                    [PENDING MEDIA]
                  </span>
                </div>
              </div>

              {/* Bottom wide banner */}
              <div
                onClick={() => setActiveSlot({ project, slot: project.slots[3] })}
                className="h-[48%] bg-[#2C2C2E] hover:bg-[#3A3A3C] p-3 flex flex-col justify-between transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-center text-[9px] font-courier text-neutral-400">
                  <span className="font-bold bg-black/40 px-1.5 py-0.5">SLOT 04</span>
                  <span>{project.slots[3].dimensions}</span>
                </div>
                <div className="text-center my-auto">
                  <span className="font-courier text-xs text-neutral-200 uppercase font-bold block">
                    {project.slots[3].hint}
                  </span>
                </div>
                <span className="font-courier text-[8px] text-neutral-400 text-right uppercase">
                  [PENDING MEDIA]
                </span>
              </div>
            </div>
          </div>
        );

      case 'mac-promo':
      case 'mac-threads':
        // 3 tall vertical columns (Pages 10 and 13)
        return (
          <div className="grid grid-cols-3 gap-3 h-[420px] sm:h-[480px]">
            {project.slots.map((slot, idx) => (
              <div
                key={slot.id}
                onClick={() => setActiveSlot({ project, slot })}
                className="h-full bg-[#2C2C2E] hover:bg-[#3A3A3C] p-4 flex flex-col justify-between transition-all cursor-pointer group relative"
              >
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

  return (
    <section
      id="projects-section"
      className="w-full bg-[#0D0D0D] text-white py-14 sm:py-20 px-4 sm:px-8 select-none relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-baseline justify-between pb-4 mb-8">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-[#FF0000] tracking-tight uppercase leading-none">
              PROJECTS
            </h2>
            <span className="font-courier text-xs sm:text-sm text-neutral-400 uppercase tracking-widest font-semibold">
              // CASE STUDIES WIREFRAME (0{currentProjectIndex + 1} OF 05)
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-courier text-neutral-400">
            <span className="hidden sm:inline">
              WIRE-MEDIA READY • CONNECTS TO WORK REPOSITORY
            </span>
          </div>
        </div>

        {/* 2-Column Layout: Left Narrative & Metrics, Right Wireframe Media Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Case Study Narrative, Bullets & Performance */}
          <div className="lg:col-span-5 flex flex-col justify-between min-h-[420px]">
            <div>
              {/* Category Tag (in Red) */}
              <span className="font-anton text-lg sm:text-xl md:text-2xl text-[#FF0000] tracking-tight uppercase block mb-1">
                {project.categoryTag}
              </span>

              {/* Title in bold Anton */}
              <h3 className="font-anton text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[0.95] uppercase mb-4">
                {project.title}
              </h3>

              {/* Body description in Courier New */}
              <p className="font-courier text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-medium">
                {project.description}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 mb-8">
                {project.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="font-courier text-xs sm:text-sm text-neutral-200 flex items-start gap-2"
                  >
                    <span className="text-[#FF0000] font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance Metrics (Red accents) */}
            <div className="pt-4">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-baseline gap-1.5">
                    <span className="font-courier text-xs text-neutral-400 uppercase font-semibold">
                      {metric.label}
                    </span>
                    {metric.value && (
                      <span className="font-anton text-xl sm:text-2xl text-[#FF0000] tracking-tight">
                        {metric.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Wireframe Slots Grid */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex justify-between items-center mb-2 font-courier text-[11px] text-neutral-400 uppercase">
              <span>WIREFRAME MEDIA STAGING AREA</span>
              <span className="text-neutral-500">[SLOTS CONFIGURED]</span>
            </div>

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
