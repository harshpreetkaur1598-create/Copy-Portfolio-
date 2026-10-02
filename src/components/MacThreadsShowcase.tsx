import React from 'react';
import { WireframeSlot, CaseStudy } from '../types';
import { Sparkles } from 'lucide-react';

interface MacThreadsShowcaseProps {
  project: CaseStudy;
  onInspect: (slot: WireframeSlot) => void;
}

export const MacThreadsShowcase: React.FC<MacThreadsShowcaseProps> = ({ project, onInspect }) => {
  return (
    <div className="flex flex-col h-[420px] sm:h-[480px] w-full max-w-4xl mx-auto overflow-hidden">
      {/* Top Header Bar */}
      <div className="bg-[#18181A] border border-neutral-700/80 px-2.5 py-1 flex items-center justify-between mb-1.5 shrink-0">
        <div className="flex items-center gap-1.5 min-w-0">
          <Sparkles size={11} className="text-[#FF0000] shrink-0" />
          <span className="font-courier text-[9px] sm:text-[10px] text-white uppercase tracking-wider font-bold truncate">
            CAMPAIGN ASSETS: M·A·C DIWALI EDIT
          </span>
        </div>
      </div>

      {/* Main Clean 3-Box Showcase (Perfect Fit, Zero Cropping, No Overflow) */}
      <div className="flex-1 min-h-0 grid grid-cols-3 gap-2.5 sm:gap-3.5 py-0.5 w-full">
        {project.slots.map((slot, idx) => {
          const isOrnateOpulence = slot.url?.includes('MAC_Diwali_Edit_2') || idx === 1;
          return (
            <div
              key={slot.id}
              onClick={() => onInspect(slot)}
              className="h-full w-full bg-black hover:border-neutral-500 border border-neutral-700/80 flex flex-col justify-between transition-all group relative overflow-hidden cursor-pointer"
            >
              {slot.url ? (
                <div className="w-full h-full relative group bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={slot.url}
                    alt={slot.hint}
                    className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle edge vignette and inspect cue on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/35 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between items-center text-[10px] font-courier text-white">
                      <span className="bg-[#FF0000] px-1.5 py-0.5 font-bold uppercase">
                        {isOrnateOpulence ? 'ORNATE OPULENCE' : `EDIT 0${idx + 1}`}
                      </span>
                      <span className="bg-black/80 px-1.5 py-0.5 font-courier text-[9px] uppercase">
                        [TAP TO ZOOM]
                      </span>
                    </div>
                    <span className="font-courier text-[10px] text-white font-bold uppercase truncate drop-shadow">
                      {slot.hint}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-4 flex flex-col justify-between h-full w-full">
                  <div className="flex justify-between items-center text-[10px] font-courier text-neutral-400">
                    <span className="font-bold bg-black/40 px-1.5 py-0.5">SLOT 0{idx + 1}</span>
                    <span>{slot.dimensions}</span>
                  </div>
                  <span className="font-courier text-xs text-neutral-200 uppercase font-bold text-center my-auto">
                    {slot.hint}
                  </span>
                  <span className="font-courier text-[9px] text-neutral-400 text-right uppercase">
                    [CLICK TO BIND MEDIA]
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
