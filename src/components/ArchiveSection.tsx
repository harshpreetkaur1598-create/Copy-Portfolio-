import React from 'react';
import { ARCHIVE_SKILLS } from '../data/portfolioData';
import { ExternalLink, Play, Image as ImageIcon } from 'lucide-react';

interface ArchiveSectionProps {
  onOpenWork: () => void;
}

export const ArchiveSection: React.FC<ArchiveSectionProps> = ({ onOpenWork }) => {
  return (
    <section
      id="archive-section"
      className="w-full bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header: ARCHIVE title and [SEE ALL] button */}
        <div className="flex items-baseline justify-between pb-4 mb-6 sm:mb-8">
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
          - Right: Media grid showing images/videos pulled from the work page (NO copy/text)
          Never split into two stacked rows.
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

          {/* Right Column: Media Grid (Images and videos only, NO text/copy) */}
          <div className="col-span-7 sm:col-span-7 md:col-span-8 lg:col-span-8 flex flex-col justify-center">
            <div className="grid grid-cols-12 gap-2 sm:gap-3 md:gap-4 h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px]">
              {/* Media Block 1: Tall Left (Video/Visual Reel slot) */}
              <div
                onClick={onOpenWork}
                className="col-span-5 h-full bg-[#E8E5DF] hover:bg-[#DED9D2] relative overflow-hidden group cursor-pointer transition-colors flex items-center justify-center"
                title="Media Slot 01 - Linked to Work Vault"
              >
                <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-neutral-900/0 transition-colors" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/80 text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm z-10">
                  <Play size={16} className="ml-0.5 sm:size-5" />
                </div>
              </div>

              {/* Media Blocks 2 & 3: Middle Column Stacked (2 Image slots) */}
              <div className="col-span-4 flex flex-col gap-2 sm:gap-3 md:gap-4 h-full">
                {/* Media Block 2: Top Image */}
                <div
                  onClick={onOpenWork}
                  className="flex-1 bg-[#D9EAF0] hover:bg-[#CEE2E9] relative overflow-hidden group cursor-pointer transition-colors flex items-center justify-center"
                  title="Media Slot 02 - Linked to Work Vault"
                >
                  <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-neutral-900/0 transition-colors" />
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm z-10">
                    <ImageIcon size={14} className="sm:size-4" />
                  </div>
                </div>

                {/* Media Block 3: Bottom Image */}
                <div
                  onClick={onOpenWork}
                  className="flex-1 bg-[#E4DBEE] hover:bg-[#D9CEE5] relative overflow-hidden group cursor-pointer transition-colors flex items-center justify-center"
                  title="Media Slot 03 - Linked to Work Vault"
                >
                  <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-neutral-900/0 transition-colors" />
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm z-10">
                    <ImageIcon size={14} className="sm:size-4" />
                  </div>
                </div>
              </div>

              {/* Media Block 4: Right Column Tall (Image / Campaign slot) */}
              <div
                onClick={onOpenWork}
                className="col-span-3 h-full bg-[#EBEBED] hover:bg-[#DFDFE3] relative overflow-hidden group cursor-pointer transition-colors flex items-center justify-center"
                title="Media Slot 04 - Linked to Work Vault"
              >
                <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-neutral-900/0 transition-colors" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm z-10">
                  <ImageIcon size={14} className="sm:size-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
