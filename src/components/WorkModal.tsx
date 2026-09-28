import React, { useState } from 'react';
import { WORK_ARCHIVE_DUMP } from '../data/portfolioData';
import { Search, Filter, ArrowRight } from 'lucide-react';

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkModal: React.FC<WorkModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const categories = [
    'ALL',
    'Meta Ad Copy',
    'Retention E-Mailers',
    'PDP Copy',
    'Influencer Scriptwriting',
    'E-Commerce Content',
    'Q-Comm Banners',
    'Social Content Copy',
    'Whatsapp Broadcast Copy'
  ];

  const filteredWork = WORK_ARCHIVE_DUMP.filter((item) => {
    const matchesCategory =
      selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-end sm:justify-center items-center p-0 sm:p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-5xl h-[92vh] sm:h-[88vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-black text-white px-5 sm:px-8 py-4 flex items-center justify-between shrink-0">
          <div>
            <span className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-white">
              WORK REPOSITORY // DUMP VAULT
            </span>
            <span className="font-courier text-xs text-neutral-400 block sm:inline sm:ml-3 uppercase">
              [MASTER COPY DATABASE • MEDIA BINDING SOURCE]
            </span>
          </div>
          <button
            onClick={onClose}
            className="font-courier font-bold text-xs bg-[#FF0000] text-white hover:bg-white hover:text-black px-3.5 py-1.5 transition-colors uppercase cursor-pointer"
            aria-label="Close work vault"
          >
            [CLOSE ESC]
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 bg-neutral-50 shrink-0 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Box */}
            <div className="relative flex-1">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
              />
              <input
                type="text"
                placeholder="SEARCH CAMPAIGNS, HOOKS, FORMATS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-white font-courier text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="font-courier text-xs text-neutral-600 font-bold uppercase shrink-0">
              SHOWING {filteredWork.length} ARCHIVED ASSETS
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 font-courier text-[11px]">
            <span className="text-neutral-500 font-bold uppercase shrink-0 mr-1 flex items-center gap-1">
              <Filter size={11} />
              FORMAT:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 uppercase font-bold transition-colors shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black text-white'
                    : 'bg-white text-neutral-800 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Work Dump Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-white">
          <div className="bg-neutral-100 p-3 font-courier text-xs text-neutral-800">
            <strong>NOTE ON HOMEPAGE LINKING:</strong> The homepage case studies and
            hero carousels are built to dynamically bind images and video clips uploaded into this
            repository.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredWork.map((item) => (
              <div
                key={item.id}
                className="p-5 bg-neutral-50 hover:bg-neutral-100 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-courier text-[10px] font-bold uppercase bg-black text-white px-2 py-0.5">
                      {item.category}
                    </span>
                    <span className="font-courier text-[11px] font-bold text-[#FF0000]">
                      {item.results}
                    </span>
                  </div>

                  <h4 className="font-anton text-2xl text-black uppercase tracking-tight mb-1">
                    {item.title}
                  </h4>
                  <span className="font-courier text-[11px] text-neutral-500 uppercase block mb-3 font-medium">
                    {item.format} // {item.year}
                  </span>

                  <div className="border-l-2 border-[#FF0000] pl-3 py-1 font-courier text-xs text-neutral-800 italic bg-white/70 mb-4 whitespace-pre-line leading-relaxed">
                    {item.snippet}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between font-courier text-[10px] uppercase">
                  <span className="text-neutral-500">HOMEPAGE STATUS: BINDABLE</span>
                  <span className="font-bold text-black hover:text-[#FF0000] flex items-center gap-1 cursor-pointer">
                    <span>ASSET SPECS</span>
                    <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredWork.length === 0 && (
            <div className="text-center py-16 font-courier text-neutral-500">
              NO ASSETS FOUND MATCHING YOUR CRITERIA.
            </div>
          )}
        </div>

        {/* Bottom Modal Action */}
        <div className="bg-neutral-100 px-6 py-3.5 flex items-center justify-between shrink-0 font-courier text-xs">
          <span className="text-neutral-600">
            TOTAL 30+ BRANDS ACED // 50+ CAMPAIGNS CRAFTED
          </span>
          <button
            onClick={onClose}
            className="font-bold text-black hover:text-[#FF0000] uppercase cursor-pointer"
          >
            RETURN TO HOMEPAGE [→]
          </button>
        </div>
      </div>
    </div>
  );
};
