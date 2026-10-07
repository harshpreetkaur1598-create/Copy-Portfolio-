import React, { useState } from 'react';
import { WORK_FEED_POSTS } from '../data/portfolioData';
import { WorkFeedPost, WorkMediaItem } from '../types';
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';
import { getBrandLogo } from '../utils/brandLogos';

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
        className="sticky top-0 z-50 w-full bg-white px-4 sm:px-10 md:px-14 lg:px-20 pt-2.5 pb-2.5 sm:pt-4 sm:pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between relative border-b border-neutral-200 transition-all min-h-[96px] sm:min-h-[92px] md:min-h-[100px]"
      >
        {/* MOBILE LAYOUT (< sm): 3-tier hierarchy exactly matching homepage in positioning and scale */}
        <div className="flex flex-col items-center w-full sm:hidden pt-1 pb-1">
          {/* Tier 1: Bold Centered Name */}
          <button
            onClick={onNavigateHome}
            className="font-anton text-[1.85rem] xs:text-[2.2rem] tracking-tight text-black hover:opacity-95 transition-opacity uppercase leading-none text-center cursor-pointer"
            aria-label="Return to home page"
          >
            HARSHPREET KAUR
          </button>

          {/* Tier 2: Subtitle strictly constrained to name's width */}
          <span className="font-courier text-[8.5px] xs:text-[9.5px] tracking-[0.14em] xs:tracking-[0.18em] uppercase font-semibold text-center whitespace-nowrap block text-black mt-1">
            COPYWRITER <span className="mx-0.5 text-black font-normal">|</span> CREATIVE STRATEGIST
          </span>

          {/* Tier 3: Centered Nav Buttons Row underneath */}
          <div className="flex items-center justify-between w-full max-w-[280px] xs:max-w-[320px] mt-2 px-3">
            <button
              id="nav-home-btn"
              onClick={onNavigateHome}
              className="font-courier font-bold text-xs xs:text-sm tracking-[0.18em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer"
              aria-label="Return to home page"
            >
              HOME
            </button>

            <button
              id="nav-contact-btn"
              onClick={onNavigateContact}
              className="font-courier font-bold text-xs xs:text-sm tracking-[0.18em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer"
              aria-label="Scroll to contact section"
            >
              CONTACT
            </button>
          </div>
        </div>

        {/* DESKTOP & TABLET LAYOUT (sm and above): WORK/HOME left, Name + Subtitle centered, CONTACT right */}
        <button
          id="nav-home-btn-desktop"
          onClick={onNavigateHome}
          className="hidden sm:block font-courier font-bold text-xs sm:text-sm tracking-[0.18em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer z-10"
          aria-label="Return to home page"
        >
          HOME
        </button>

        {/* Center: Name & Subtitle - EXACT DEAD CENTER OF SCREEN */}
        <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center pointer-events-auto">
          <button
            onClick={onNavigateHome}
            className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] tracking-tight text-black hover:opacity-95 transition-opacity uppercase leading-none cursor-pointer"
          >
            HARSHPREET KAUR
          </button>
          <span className="font-courier text-[10px] sm:text-xs md:text-sm tracking-[0.22em] text-black uppercase mt-1 sm:mt-1.5 font-semibold">
            COPYWRITER <span className="mx-1 text-black font-normal">|</span> CREATIVE STRATEGIST
          </span>
        </div>

        {/* Right: CONTACT link */}
        <button
          id="nav-contact-btn-desktop"
          onClick={onNavigateContact}
          className="hidden sm:block font-courier font-bold text-xs sm:text-sm tracking-[0.18em] uppercase text-black hover:text-[#FF0000] transition-colors py-1 cursor-pointer z-10"
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

function isVideoItem(item?: WorkMediaItem): boolean {
  if (!item || !item.url) return false;
  if (item.type === 'video') return true;
  if (item.type === 'image') return false;
  const cleanUrl = item.url.toLowerCase();
  if (
    cleanUrl.endsWith('.jpg') ||
    cleanUrl.endsWith('.jpeg') ||
    cleanUrl.endsWith('.png') ||
    cleanUrl.endsWith('.webp') ||
    cleanUrl.endsWith('.gif') ||
    cleanUrl.includes('/image/upload/')
  ) {
    return false;
  }
  return (
    cleanUrl.endsWith('.mp4') ||
    cleanUrl.endsWith('.webm') ||
    cleanUrl.endsWith('.mov') ||
    cleanUrl.includes('/video/upload/') ||
    cleanUrl.includes('player.cloudinary.com/embed')
  );
}

function resolveMediaUrl(url?: string): string {
  if (!url) return '';
  if (url.includes('player.cloudinary.com/embed')) {
    try {
      const parsed = new URL(url);
      const publicId = parsed.searchParams.get('public_id');
      const cloudName = parsed.searchParams.get('cloud_name') || 'uybanqfq';
      if (publicId) {
        return `https://res.cloudinary.com/${cloudName}/video/upload/${publicId}.mp4`;
      }
    } catch {
      // ignore parsing error and return original url
    }
  }
  return url;
}

function getBrandInitials(name: string): string {
  if (name.includes('M.A.C') || name.includes('MAC')) return 'MAC';
  if (name.includes('7Up') || name.includes('7UP')) return '7UP';
  if (name.toLowerCase().includes('sbi')) return 'SBIG';
  if (name.toLowerCase().includes('johnson')) return 'JB';
  if (name.toLowerCase().includes('lakm')) return 'LK';
  if (name.toLowerCase().includes('lux')) return 'LUX';
  const cleanParts = name.replace(/[^a-zA-Z0-9 ]/g, '').trim().split(/\s+/);
  if (cleanParts.length >= 2) return (cleanParts[0][0] + cleanParts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
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

  const brandLogoUrl = getBrandLogo(post.brandId || post.brandName);

  return (
    <article className="bg-white border border-neutral-300 shadow-sm overflow-hidden select-none">
      {/* Top Bar: Brand Logo & Category (In place of Instagram username) */}
      <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-neutral-200 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Brand Logo Avatar (Profile picture picking official logo from homepage ticker tape) */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 bg-white p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
            {brandLogoUrl ? (
              <img
                src={brandLogoUrl}
                alt={`${post.brandName} official logo`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-black text-white rounded-full flex items-center justify-center font-anton text-xs uppercase">
                {getBrandInitials(post.brandName)}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-anton text-base sm:text-lg text-black uppercase tracking-tight leading-none">
              {post.brandName}
            </span>
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
          {/* Top media category badge overlay on the media display */}
          {currentItem?.url && (currentItem?.mediaCategory || currentItem?.dimensionsLabel) && (
            <div className="absolute top-3 left-3 z-30 pointer-events-none flex items-center gap-2">
              <span className="font-courier text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black bg-white px-2.5 py-1 shadow-md border border-neutral-300 flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 bg-[#FF0000] inline-block" />
                {currentItem.mediaCategory || currentItem.dimensionsLabel}
              </span>
            </div>
          )}

          {/* Top-right counter badge on the media display if multi-item */}
          {currentItem?.url && totalItems > 1 && (
            <div className="absolute top-3 right-3 z-30 pointer-events-none">
              <span className="font-courier text-[10px] font-bold text-white bg-black/80 backdrop-blur-sm px-2 py-1 uppercase tracking-wider border border-white/20 select-none">
                0{activeIndex + 1} / {totalItems < 10 ? `0${totalItems}` : totalItems}
              </span>
            </div>
          )}

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
            ) : isVideoItem(currentItem) ? (
              <video
                key={resolveMediaUrl(currentItem.url)}
                src={resolveMediaUrl(currentItem.url)}
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
                key={currentItem.url}
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
                  {currentItem?.mediaCategory || currentItem?.dimensionsLabel || 'MEDIA ASSET'}
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
      <div className="p-4 sm:p-5 bg-white space-y-3 border-t border-neutral-100">
        {post.brandCategory && (
          <div>
            <span className="font-courier text-[10px] sm:text-xs uppercase font-bold text-[#FF0000] bg-[#FF0000]/10 px-2 py-0.5 w-fit inline-block">
              {post.brandCategory}
            </span>
          </div>
        )}

        {/* Current Active Item Detail Note */}
        {(currentItem?.mediaCategory || currentItem?.title || currentItem?.caption) && (
          <div className="py-2.5 px-3 bg-neutral-50 border border-neutral-200/80 rounded-sm flex items-start gap-2.5">
            <span className="text-[#FF0000] font-bold text-xs mt-0.5">•</span>
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                {currentItem?.mediaCategory && (
                  <span className="font-bold text-[10px] uppercase bg-black text-white px-1.5 py-0.5 tracking-wider">
                    {currentItem.mediaCategory}
                  </span>
                )}
                {currentItem?.title && (
                  <span className="font-bold text-xs text-black uppercase tracking-wide">
                    {currentItem.title}
                  </span>
                )}
              </div>
              {currentItem?.caption && (
                <p className="text-[11px] font-courier text-neutral-600 leading-relaxed">
                  {currentItem.caption}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Small description of the campaign or post you see */}
        {post.description && (
          <p className="font-courier text-xs sm:text-sm text-neutral-800 leading-relaxed">
            {post.description}
          </p>
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
