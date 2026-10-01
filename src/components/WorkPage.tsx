import React, { useState } from 'react';
import { WORK_FEED_POSTS } from '../data/portfolioData';
import { WorkFeedPost, WorkMediaItem } from '../types';
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';

interface WorkPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onNavigateHome,
  onNavigateContact,
}) => {
  return (
    <div className="min-h-screen bg-neutral-100 text-black font-courier selection:bg-[#FF0000] selection:text-white flex flex-col">
      {/* 1. Header: Exactly consistent with homepage (HOME on left, Name in center, CONTACT on right) */}
      <header
        id="top-header"
        className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xs px-6 sm:px-12 md:px-16 lg:px-20 pt-[47px] pb-4 pl-[79px] flex items-center justify-between relative border-b border-neutral-200"
      >
        {/* Left: HOME link (replaces WORK) */}
        <button
          id="nav-home-btn"
          onClick={onNavigateHome}
          className="font-courier font-bold text-xs sm:text-sm tracking-[0.18em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer z-10"
          aria-label="Return to home page"
        >
          HOME
        </button>

        {/* Center: Name & Subtitle - EXACT DEAD CENTER OF SCREEN */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center pointer-events-auto">
          <button
            onClick={onNavigateHome}
            className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] tracking-tight text-black hover:opacity-95 transition-opacity uppercase leading-none -mt-[23px] h-[53px] flex items-center cursor-pointer"
          >
            HARSHPREET KAUR
          </button>
          <span className="font-courier text-[10px] sm:text-xs md:text-sm tracking-[0.22em] text-black uppercase mt-1.5 font-semibold pt-0 pl-0">
            COPYWRITER <span className="mx-1 text-black font-normal">|</span> CREATIVE STRATEGIST
          </span>
        </div>

        {/* Right: CONTACT link */}
        <button
          id="nav-contact-btn"
          onClick={onNavigateContact}
          className="font-courier font-bold text-xs sm:text-sm tracking-[0.18em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer z-10 pt-0"
          aria-label="Scroll to contact section"
        >
          CONTACT
        </button>
      </header>

      {/* 2. Main Feed: Scrollable Instagram-Style / Editorial Home Feed */}
      <main className="flex-1 w-full max-w-xl sm:max-w-2xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="space-y-10 sm:space-y-14">
          {WORK_FEED_POSTS.map((post) => (
            <FeedPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Feed Bottom Note */}
        <div className="pt-12 pb-16 text-center">
          <div className="inline-block border-t border-b border-neutral-300 py-3 px-6 font-courier text-xs text-neutral-500 uppercase">
            END OF MASTER FEED // ALL ASSETS BINDABLE
          </div>
          <div className="mt-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-courier font-bold text-xs text-black hover:text-[#FF0000] uppercase transition-colors cursor-pointer"
            >
              [BACK TO TOP ↑]
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

interface FeedPostCardProps {
  post: WorkFeedPost;
}

const FeedPostCard: React.FC<FeedPostCardProps> = ({ post }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = post.items.length;
  const currentItem = post.items[activeIndex] || post.items[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < totalItems - 1 ? prev + 1 : 0));
  };

  return (
    <article className="bg-white border border-neutral-300 shadow-sm overflow-hidden select-none">
      {/* Top Bar: Brand Logo & Category (In place of Instagram username) */}
      <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-neutral-200 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Brand Logo Avatar/Badge */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-black text-white flex items-center justify-center font-anton text-sm tracking-wider uppercase shrink-0">
            {post.brandName.slice(0, 2)}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-anton text-base sm:text-lg text-black uppercase tracking-tight leading-none">
                {post.brandName}
              </span>
              {post.brandCategory && (
                <span className="font-courier text-[10px] uppercase font-bold text-[#FF0000] bg-[#FF0000]/10 px-1.5 py-0.5 leading-none">
                  {post.brandCategory}
                </span>
              )}
            </div>
            <span className="font-courier text-[11px] text-neutral-500 uppercase tracking-wide leading-tight mt-0.5">
              {post.campaignTitle}
            </span>
          </div>
        </div>

        {/* Collection slide counter indicator if multi-post */}
        {totalItems > 1 && (
          <div className="font-courier text-[11px] font-bold text-neutral-500 bg-neutral-100 px-2 py-1">
            {activeIndex + 1}/{totalItems}
          </div>
        )}
      </div>

      {/* Post Content / Collection of Posts (Media Canvas) */}
      <div className="relative bg-neutral-900 overflow-hidden flex items-center justify-center">
        {/* Aspect ratio frame */}
        <div
          className={`w-full relative ${
            currentItem?.aspectRatio === '9:16'
              ? 'aspect-[9/16] max-h-[640px]'
              : currentItem?.aspectRatio === '16:9'
              ? 'aspect-[16/9]'
              : currentItem?.aspectRatio === '4:5'
              ? 'aspect-[4/5]'
              : 'aspect-square'
          }`}
        >
          {/* Render Actual Media or Brutalist Wireframe Placeholder */}
          {currentItem?.url ? (
            currentItem.type === 'youtube' || currentItem.url.includes('youtube.com') || currentItem.url.includes('youtu.be') ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${getYouTubeId(
                  currentItem.url
                )}?autoplay=0&rel=0`}
                title={currentItem.title || post.campaignTitle}
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : currentItem.type === 'instagram' || currentItem.url.includes('instagram.com') ? (
              <div className="w-full h-full relative bg-black flex flex-col items-center justify-center">
                <iframe
                  src={`https://www.instagram.com/reel/${getInstagramId(
                    currentItem.url
                  )}/embed/`}
                  title={currentItem.title || post.campaignTitle}
                  className="w-full h-full border-0 absolute inset-0"
                  scrolling="no"
                />
                <a
                  href={currentItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-3 right-3 bg-black/90 hover:bg-[#FF0000] text-white text-[10px] font-courier font-bold uppercase px-2.5 py-1 z-30 flex items-center gap-1.5 transition-colors"
                >
                  <span>WATCH ON INSTAGRAM</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            ) : currentItem.type === 'video' || currentItem.url.endsWith('.mp4') || currentItem.url.endsWith('.webm') || currentItem.url.includes('cloudinary') ? (
              <video
                src={currentItem.url}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            ) : currentItem.type === 'drive' ? (
              <iframe
                src={getDriveEmbedUrl(currentItem.url)}
                title={currentItem.title || post.campaignTitle}
                className="w-full h-full border-0"
                allow="autoplay"
              />
            ) : (
              <img
                src={currentItem.url}
                alt={currentItem.title || post.campaignTitle}
                className="w-full h-full object-contain bg-black"
                loading="lazy"
              />
            )
          ) : (
            /* Architectural Wireframe Media Slot: Ready for Cloudinary / YouTube / Drive links */
            <div className="w-full h-full bg-[#161616] p-6 flex flex-col justify-between text-neutral-300 relative group">
              {/* Background technical grid pattern */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />

              {/* Slot Top: Type & Dimensions */}
              <div className="flex items-center justify-between relative z-10">
                <span className="font-courier text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black bg-white px-2 py-0.5">
                  {currentItem?.dimensionsLabel || 'MEDIA ASSET'}
                </span>
                <span className="font-courier text-[10px] text-neutral-500 uppercase tracking-widest">
                  SLOT 0{activeIndex + 1}
                </span>
              </div>

              {/* Slot Center: Title & Play/Asset Icon */}
              <div className="text-center relative z-10 px-4 my-auto">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#FF0000] group-hover:border-[#FF0000] transition-all">
                  <Play size={18} className="ml-0.5" />
                </div>
                <h4 className="font-anton text-xl sm:text-2xl text-white uppercase tracking-tight mb-1">
                  {currentItem?.title}
                </h4>
                {currentItem?.caption && (
                  <p className="font-courier text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                    {currentItem.caption}
                  </p>
                )}
              </div>

              {/* Slot Bottom: Media Binding Status */}
              <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between font-courier text-[10px] text-neutral-400 uppercase">
                <span className="text-[#FF0000] font-bold">• READY FOR MEDIA LINK</span>
                <span className="text-neutral-500">[CLOUDINARY / YOUTUBE / DRIVE]</span>
              </div>
            </div>
          )}

          {/* Navigation Controls for Carousel collection */}
          {totalItems > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-[#FF0000] text-white flex items-center justify-center transition-colors cursor-pointer z-20"
                aria-label="Previous asset"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-[#FF0000] text-white flex items-center justify-center transition-colors cursor-pointer z-20"
                aria-label="Next asset"
              >
                <ChevronRight size={18} />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                {post.items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 transition-all cursor-pointer ${
                      idx === activeIndex
                        ? 'w-5 bg-[#FF0000]'
                        : 'w-1.5 bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Description / Caption Block Under Media */}
      <div className="p-4 sm:p-5 bg-white space-y-2 border-t border-neutral-100">
        <div className="flex items-baseline gap-2">
          <span className="font-anton text-sm sm:text-base text-black uppercase tracking-tight">
            {post.brandName}
          </span>
          <span className="font-courier text-xs sm:text-sm font-bold text-[#FF0000] uppercase">
            // {post.campaignTitle}
          </span>
        </div>

        {/* Small description of the campaign or post you see */}
        <p className="font-courier text-xs sm:text-sm text-neutral-800 leading-relaxed">
          {post.description}
        </p>

        {/* Current Active Item Detail Note */}
        {currentItem?.caption && (
          <div className="pt-2 text-[11px] font-courier text-neutral-500 border-t border-neutral-100 flex items-start gap-1.5">
            <span className="text-[#FF0000] font-bold">•</span>
            <span>
              <strong>{currentItem.title}:</strong> {currentItem.caption}
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

// Utility to convert YouTube URL to embed ID
function getYouTubeId(url?: string): string {
  if (!url) return '';
  const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch && shortsMatch[1]) return shortsMatch[1];
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2] && match[2].length === 11 ? match[2] : '';
}

// Utility to convert Instagram URL to reel ID
function getInstagramId(url?: string): string {
  if (!url) return '';
  const match = url.match(/\/reel\/([a-zA-Z0-9_-]+)/);
  return match && match[1] ? match[1] : '';
}

// Utility to convert Google Drive URL to preview embed link
function getDriveEmbedUrl(url?: string): string {
  if (!url) return '';
  const match = url.match(/[-\w]{25,}/);
  if (match) {
    return `https://drive.google.com/file/d/${match[0]}/preview`;
  }
  return url;
}
