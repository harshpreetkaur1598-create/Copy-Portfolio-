import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, ChevronUp, ChevronDown, Maximize2, Sparkles, Film } from 'lucide-react';
import { WireframeSlot } from '../types';

export const ANANYA_VIDEOS = [
  {
    id: 'lakme-ananya-1',
    slotNumber: '01',
    title: 'Ananya Panday Sustenance Film 01',
    subtitle: 'Scripted by Harshpreet Kaur',
    url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Ananya_Video_1.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Rouge_Bloom_Ananya_Video_1',
    dimensions: '9:16 REEL',
    type: 'reel' as const,
    hint: 'ANANYA PANDAY SUSTENANCE FILM 01'
  },
  {
    id: 'lakme-ananya-2',
    slotNumber: '02',
    title: 'Ananya Panday Sustenance Film 02',
    subtitle: 'Scripted by Harshpreet Kaur',
    url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Ananya_Panday_2.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Rouge_Bloom_Ananya_Panday_2',
    dimensions: '9:16 REEL',
    type: 'reel' as const,
    hint: 'ANANYA PANDAY SUSTENANCE FILM 02'
  },
  {
    id: 'lakme-ananya-3',
    slotNumber: '03',
    title: 'Ananya Panday Sustenance Film 03',
    subtitle: 'Scripted by Harshpreet Kaur',
    url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Ananya_Panday_3.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Rouge_Bloom_Ananya_Panday_3',
    dimensions: '9:16 REEL',
    type: 'reel' as const,
    hint: 'ANANYA PANDAY SUSTENANCE FILM 03'
  }
];

export interface AiVisualItem {
  id: string;
  slotNumber: string;
  campaign: 'ROUGE BLOOM' | 'LIP GLAZE';
  title: string;
  subtitle: string;
  url: string;
  dimensions: string;
  hint: string;
}

export const AI_BOXES: AiVisualItem[][] = [
  // Box 01: Rouge Bloom 01 & Lip Glaze 01
  [
    {
      id: 'lakme-ai-1',
      slotNumber: '01',
      campaign: 'ROUGE BLOOM',
      title: 'Rouge Bloom Pre-Buzz 01',
      subtitle: 'Prompt Engineered by Harshpreet Kaur',
      url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Pre_Buzz_2.mp4',
      dimensions: 'AI GEN-ASSET',
      hint: 'ROUGE BLOOM PRE-BUZZ 01'
    },
    {
      id: 'lakme-glaze-1',
      slotNumber: '01',
      campaign: 'LIP GLAZE',
      title: 'Lakmé Lip Glaze AI 01',
      subtitle: 'Prompt Engineered by Harshpreet Kaur',
      url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lakme_Lip_Glaze_AI_video_1.mp4',
      dimensions: 'AI GEN-ASSET',
      hint: 'LAKMÉ LIP GLAZE AI 01'
    }
  ],
  // Box 02: Rouge Bloom 02 & Lip Glaze 02
  [
    {
      id: 'lakme-ai-2',
      slotNumber: '02',
      campaign: 'ROUGE BLOOM',
      title: 'Rouge Bloom Pre-Buzz 02',
      subtitle: 'Prompt Engineered by Harshpreet Kaur',
      url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Ai_Pre_Buzz_1.mp4',
      dimensions: 'AI GEN-ASSET',
      hint: 'ROUGE BLOOM PRE-BUZZ 02'
    },
    {
      id: 'lakme-glaze-2',
      slotNumber: '02',
      campaign: 'LIP GLAZE',
      title: 'Lakmé Lip Glaze AI 02',
      subtitle: 'Prompt Engineered by Harshpreet Kaur',
      url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lip_Glaze_AI_2.mp4',
      dimensions: 'AI GEN-ASSET',
      hint: 'LAKMÉ LIP GLAZE AI 02'
    }
  ],
  // Box 03: Rouge Bloom 03 & Lip Glaze 03
  [
    {
      id: 'lakme-ai-3',
      slotNumber: '03',
      campaign: 'ROUGE BLOOM',
      title: 'Rouge Bloom Pre-Buzz 03',
      subtitle: 'Prompt Engineered by Harshpreet Kaur',
      url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_bloom_pre_buzz_4.mp4',
      dimensions: 'AI GEN-ASSET',
      hint: 'ROUGE BLOOM PRE-BUZZ 03'
    },
    {
      id: 'lakme-glaze-3',
      slotNumber: '03',
      campaign: 'LIP GLAZE',
      title: 'Lakmé Lip Glaze AI 03',
      subtitle: 'Prompt Engineered by Harshpreet Kaur',
      url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lip_Glaze_AI_3.mp4',
      dimensions: 'AI GEN-ASSET',
      hint: 'LAKMÉ LIP GLAZE AI 03'
    }
  ],
  // Box 04: Rouge Bloom 04 & Lip Glaze 04
  [
    {
      id: 'lakme-ai-4',
      slotNumber: '04',
      campaign: 'ROUGE BLOOM',
      title: 'Rouge Bloom Pre-Buzz 04',
      subtitle: 'Prompt Engineered by Harshpreet Kaur',
      url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Pre_Buzz_3.mp4',
      dimensions: 'AI GEN-ASSET',
      hint: 'ROUGE BLOOM PRE-BUZZ 04'
    },
    {
      id: 'lakme-glaze-4',
      slotNumber: '04',
      campaign: 'LIP GLAZE',
      title: 'Lakmé Lip Glaze AI 04',
      subtitle: 'Prompt Engineered by Harshpreet Kaur',
      url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lip_Glaze_4.mp4',
      dimensions: 'AI GEN-ASSET',
      hint: 'LAKMÉ LIP GLAZE AI 04'
    }
  ]
];

interface LakmeShowcaseProps {
  onInspect: (slot: WireframeSlot) => void;
}

export const LakmeShowcase: React.FC<LakmeShowcaseProps> = ({ onInspect }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Ananya Reel Refs
  const reelScrollRef = useRef<HTMLDivElement>(null);
  const reelVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // 4 AI Box Scroll Containers & Video Refs
  const aiBoxScrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const aiVideoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Global Section In-View State
  const [isInView, setIsInView] = useState(false);

  // Ananya Reel States
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isReelMuted, setIsReelMuted] = useState(true);
  const [reelProgress, setReelProgress] = useState(0);

  // 4 AI Boxes States
  const [boxActiveIndices, setBoxActiveIndices] = useState<number[]>([0, 0, 0, 0]);
  const [unmutedAiId, setUnmutedAiId] = useState<string | null>(null);

  // Intersection Observer for Section Visibility
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

  // Handle Ananya Reel Playback
  useEffect(() => {
    reelVideoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (isInView && index === activeReelIndex) {
        video.muted = isReelMuted;
        video.play().catch(() => {
          video.muted = true;
          setIsReelMuted(true);
          video.play().catch(() => {});
        });
      } else {
        video.pause();
      }
    });
  }, [isInView, activeReelIndex, isReelMuted]);

  // Handle AI Videos Playback
  useEffect(() => {
    AI_BOXES.forEach((boxItems, boxIdx) => {
      const activeItem = boxItems[boxActiveIndices[boxIdx]];
      boxItems.forEach((item) => {
        const video = aiVideoRefs.current[item.id];
        if (!video) return;
        const isCurrentActive = item.id === activeItem.id;
        const isUnmuted = unmutedAiId === item.id;
        video.muted = !isUnmuted;

        if (isInView && isCurrentActive) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    });
  }, [isInView, boxActiveIndices, unmutedAiId]);

  // Ananya Reel Controls
  const scrollToReelIndex = useCallback((index: number) => {
    if (!reelScrollRef.current) return;
    const targetEl = reelScrollRef.current.children[index] as HTMLElement;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    setActiveReelIndex(index);
    setReelProgress(0);
  }, []);

  const handleReelEnded = (index: number) => {
    const nextIndex = (index + 1) % ANANYA_VIDEOS.length;
    scrollToReelIndex(nextIndex);
  };

  const handleReelTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      setReelProgress(pct);
    }
  };

  const handleReelScroll = () => {
    if (!reelScrollRef.current) return;
    const container = reelScrollRef.current;
    const scrollPos = container.scrollTop;
    const itemHeight = container.clientHeight;
    if (itemHeight > 0) {
      const newIndex = Math.round(scrollPos / itemHeight);
      if (newIndex >= 0 && newIndex < ANANYA_VIDEOS.length && newIndex !== activeReelIndex) {
        setActiveReelIndex(newIndex);
        setReelProgress(0);
      }
    }
  };

  // Scroll a specific AI Box
  const scrollToBoxIndex = useCallback((boxIdx: number, subIdx: number) => {
    const container = aiBoxScrollRefs.current[boxIdx];
    if (!container) return;
    const targetEl = container.children[subIdx] as HTMLElement;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    setBoxActiveIndices((prev) => {
      const next = [...prev];
      next[boxIdx] = subIdx;
      return next;
    });
  }, []);

  // When video in an AI box finishes -> auto scroll to next visual in that box!
  const handleAiVideoEnded = (boxIdx: number, subIdx: number) => {
    const boxItems = AI_BOXES[boxIdx];
    const nextSubIdx = (subIdx + 1) % boxItems.length;
    scrollToBoxIndex(boxIdx, nextSubIdx);
  };

  // Handle manual scroll inside an AI box
  const handleBoxScroll = (boxIdx: number) => {
    const container = aiBoxScrollRefs.current[boxIdx];
    if (!container) return;
    const scrollPos = container.scrollTop;
    const itemHeight = container.clientHeight;
    if (itemHeight > 0) {
      const newIndex = Math.round(scrollPos / itemHeight);
      if (newIndex >= 0 && newIndex < AI_BOXES[boxIdx].length && newIndex !== boxActiveIndices[boxIdx]) {
        setBoxActiveIndices((prev) => {
          const next = [...prev];
          next[boxIdx] = newIndex;
          return next;
        });
      }
    }
  };

  // Switch all 4 AI boxes at once to a specific campaign (0 for Rouge Bloom, 1 for Lip Glaze)
  const switchAllBoxesTo = (targetIdx: number) => {
    AI_BOXES.forEach((_, boxIdx) => {
      scrollToBoxIndex(boxIdx, targetIdx);
    });
  };

  // Audio Toggle for AI Videos
  const toggleAiAudio = (e: React.MouseEvent, aiId: string) => {
    e.stopPropagation();
    if (unmutedAiId === aiId) {
      setUnmutedAiId(null);
    } else {
      setUnmutedAiId(aiId);
      setIsReelMuted(true); // Mute Ananya reel
    }
  };

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-12 gap-2 sm:gap-3 w-full h-[420px] sm:h-[480px] overflow-hidden"
    >
      {/* LEFT: Grid of 4 Scrollable AI Visuals Boxes */}
      <div className="col-span-7 flex flex-col h-full overflow-hidden">
        {/* Compact Header Bar with Campaign Switcher */}
        <div className="bg-[#18181A] border border-neutral-700/80 px-2.5 py-1 flex items-center justify-between mb-1.5 shrink-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <Sparkles size={11} className="text-[#FF0000] shrink-0" />
            <span className="font-courier text-[9px] sm:text-[10px] text-white uppercase tracking-wider font-bold truncate">
              AI VISUALS: PROMPT ENGINEERED
            </span>
          </div>

          {/* Quick Switcher between Rouge Bloom & Lip Glaze */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => switchAllBoxesTo(0)}
              className="font-courier text-[8px] px-1.5 py-0.5 uppercase tracking-wider border border-neutral-700 bg-black/60 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              title="Show all Rouge Bloom visuals"
            >
              ROUGE BLOOM
            </button>
            <button
              onClick={() => switchAllBoxesTo(1)}
              className="font-courier text-[8px] px-1.5 py-0.5 uppercase tracking-wider border border-[#FF0000] bg-[#FF0000]/10 hover:bg-[#FF0000] text-[#FF0000] hover:text-white transition-colors cursor-pointer"
              title="Show all Lip Glaze visuals"
            >
              LIP GLAZE
            </button>
          </div>
        </div>

        {/* 2x2 Grid of Scrollable Boxes */}
        <div className="grid grid-cols-2 grid-rows-2 gap-1.5 sm:gap-2 flex-1 min-h-0 overflow-hidden">
          {AI_BOXES.map((boxItems, boxIdx) => {
            const currentSubIdx = boxActiveIndices[boxIdx];
            const currentItem = boxItems[currentSubIdx];
            const isUnmuted = unmutedAiId === currentItem.id;

            return (
              <div
                key={boxIdx}
                className="group relative bg-black border border-neutral-700/80 hover:border-neutral-500 overflow-hidden transition-all flex flex-col justify-between"
              >
                {/* Vertical Scroll Reel Viewport for this Box */}
                <div
                  ref={(el) => {
                    aiBoxScrollRefs.current[boxIdx] = el;
                  }}
                  onScroll={() => handleBoxScroll(boxIdx)}
                  className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth relative"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {boxItems.map((item, subIdx) => (
                    <div
                      key={item.id}
                      onClick={() =>
                        onInspect({
                          id: item.id,
                          slotNumber: `0${boxIdx + 1}`,
                          type: 'video',
                          dimensions: item.dimensions,
                          hint: item.hint,
                          url: item.url
                        })
                      }
                      className="w-full h-full snap-start relative flex items-center justify-center bg-black overflow-hidden flex-shrink-0 cursor-pointer"
                    >
                      <video
                        ref={(el) => {
                          aiVideoRefs.current[item.id] = el;
                        }}
                        src={item.url}
                        playsInline
                        muted={unmutedAiId !== item.id}
                        onEnded={() => handleAiVideoEnded(boxIdx, subIdx)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />
                    </div>
                  ))}
                </div>

                {/* Top Badge: Campaign & Slot + Audio Toggle */}
                <div className="absolute top-1.5 left-1.5 right-1.5 flex justify-between items-center z-10 pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const nextSubIdx = (currentSubIdx + 1) % boxItems.length;
                      scrollToBoxIndex(boxIdx, nextSubIdx);
                    }}
                    className="font-courier text-[8px] bg-black/80 border border-neutral-700 text-white px-1.5 py-0.5 uppercase tracking-wider font-bold flex items-center gap-1 hover:border-[#FF0000] cursor-pointer"
                    title="Click to flip campaign"
                  >
                    <span className="text-[#FF0000]">0{boxIdx + 1}</span>
                    <span>•</span>
                    <span className="truncate max-w-[70px] sm:max-w-none">{currentItem.campaign}</span>
                  </button>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => toggleAiAudio(e, currentItem.id)}
                      className={`p-1 rounded-xs transition-colors cursor-pointer ${
                        isUnmuted
                          ? 'bg-[#FF0000] text-white'
                          : 'bg-black/80 text-neutral-300 hover:text-white hover:bg-neutral-800'
                      }`}
                      title={isUnmuted ? 'Mute' : 'Audio'}
                      aria-label={isUnmuted ? 'Mute' : 'Audio'}
                    >
                      {isUnmuted ? <Volume2 size={11} /> : <VolumeX size={11} />}
                    </button>
                  </div>
                </div>

                {/* Right Side Mini Scroll Controls (Flip / Dots) */}
                <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-10 pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const nextSubIdx = (currentSubIdx + 1) % boxItems.length;
                      scrollToBoxIndex(boxIdx, nextSubIdx);
                    }}
                    className="p-1 bg-black/70 hover:bg-neutral-800 text-white border border-neutral-700 rounded-xs transition-colors cursor-pointer"
                    title="Scroll to next visual"
                    aria-label="Next visual in box"
                  >
                    <ChevronDown size={11} />
                  </button>
                </div>

                {/* Bottom Bar: Title & Inspect + 2 Dots */}
                <div className="absolute bottom-1.5 left-1.5 right-1.5 flex justify-between items-center z-10 pointer-events-none">
                  <div className="flex items-center gap-1 overflow-hidden">
                    {boxItems.map((_, dotIdx) => (
                      <div
                        key={dotIdx}
                        className={`h-1 transition-all ${
                          currentSubIdx === dotIdx ? 'w-3 bg-[#FF0000]' : 'w-1 bg-white/40'
                        }`}
                      />
                    ))}
                    <span className="font-courier text-[8px] text-white uppercase tracking-wider font-bold truncate ml-1 drop-shadow">
                      {currentItem.title.replace('Rouge Bloom Pre-Buzz', 'BUZZ').replace('Lakmé Lip Glaze AI', 'GLAZE')}
                    </span>
                  </div>

                  <span className="font-courier text-[8px] text-[#FF0000] font-bold uppercase shrink-0">
                    [INSPECT]
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Scrollable Reel Box featuring Ananya Panday (Scripted by Harshpreet) */}
      <div className="col-span-5 flex flex-col h-full overflow-hidden">
        {/* Compact Header Bar */}
        <div className="bg-[#18181A] border border-neutral-700/80 px-2.5 py-1 flex items-center justify-between mb-1.5 shrink-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <Film size={11} className="text-[#FF0000] shrink-0" />
            <span className="font-courier text-[9px] sm:text-[10px] text-white uppercase tracking-wider font-bold truncate">
              ANANYA PANDAY × LAKMÉ
            </span>
          </div>
          <span className="font-courier text-[8px] bg-[#FF0000] text-white px-1.5 py-0.5 font-bold uppercase tracking-wider shrink-0">
            SCRIPTED
          </span>
        </div>

        {/* Scrollable Reel Box */}
        <div className="relative flex-1 min-h-0 bg-black border border-neutral-700/80 overflow-hidden flex flex-col">
          {/* Top Progress Bar for Active Reel */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-800 z-30">
            <div
              className="h-full bg-[#FF0000] transition-all duration-150 ease-linear"
              style={{ width: `${reelProgress}%` }}
            />
          </div>

          {/* Reel Top Controls: Audio & Fullscreen Inspect */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 z-30">
            <button
              onClick={() => {
                setIsReelMuted(!isReelMuted);
                if (unmutedAiId) setUnmutedAiId(null);
              }}
              className={`p-1 rounded-xs transition-colors cursor-pointer border ${
                !isReelMuted
                  ? 'bg-[#FF0000] border-[#FF0000] text-white'
                  : 'bg-black/80 border-neutral-700 text-neutral-300 hover:text-white'
              }`}
              title={isReelMuted ? 'Unmute Audio' : 'Mute Audio'}
              aria-label={isReelMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {!isReelMuted ? <Volume2 size={12} /> : <VolumeX size={12} />}
            </button>

            <button
              onClick={() =>
                onInspect({
                  id: ANANYA_VIDEOS[activeReelIndex].id,
                  slotNumber: `0${activeReelIndex + 1}`,
                  type: 'reel',
                  dimensions: '9:16 REEL',
                  hint: ANANYA_VIDEOS[activeReelIndex].hint,
                  url: ANANYA_VIDEOS[activeReelIndex].url
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
                scrollToReelIndex(
                  (activeReelIndex - 1 + ANANYA_VIDEOS.length) % ANANYA_VIDEOS.length
                )
              }
              className="p-1 bg-black/70 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-xs transition-colors cursor-pointer"
              aria-label="Previous reel"
            >
              <ChevronUp size={12} />
            </button>
            <button
              onClick={() =>
                scrollToReelIndex((activeReelIndex + 1) % ANANYA_VIDEOS.length)
              }
              className="p-1 bg-black/70 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-xs transition-colors cursor-pointer"
              aria-label="Next reel"
            >
              <ChevronDown size={12} />
            </button>
          </div>

          {/* Vertical Reel Scroll Viewport */}
          <div
            ref={reelScrollRef}
            onScroll={handleReelScroll}
            className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth relative"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {ANANYA_VIDEOS.map((reel, idx) => (
              <div
                key={reel.id}
                className="w-full h-full snap-start relative flex items-center justify-center bg-black overflow-hidden flex-shrink-0"
              >
                <video
                  ref={(el) => {
                    reelVideoRefs.current[idx] = el;
                  }}
                  src={reel.url}
                  playsInline
                  muted={isReelMuted}
                  onEnded={() => handleReelEnded(idx)}
                  onTimeUpdate={idx === activeReelIndex ? handleReelTimeUpdate : undefined}
                  className="w-full h-full object-cover"
                />

                {/* Bottom Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none flex flex-col justify-between p-3 z-20">
                  {/* Top Left Badge */}
                  <div className="flex items-center gap-1.5">
                    <span className="bg-[#FF0000] text-white font-courier text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
                      REEL 0{idx + 1}/03
                    </span>
                  </div>

                  {/* Bottom Text & Next Cue */}
                  <div className="space-y-0.5">
                    <span className="font-courier text-[8px] text-[#FF0000] font-bold uppercase tracking-wider block">
                      SCRIPTED BY HARSHPREET
                    </span>
                    <h5 className="font-anton text-sm sm:text-base text-white uppercase tracking-tight leading-tight truncate">
                      {reel.title}
                    </h5>
                    <div className="flex items-center justify-between text-[8px] font-courier text-neutral-400 pt-0.5 border-t border-neutral-800">
                      <span className="uppercase truncate">
                        AUTO-ADVANCES ON END
                      </span>
                      <span className="text-[#FF0000] font-bold uppercase shrink-0">
                        [SWIPE]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-2 right-3 flex items-center gap-1 z-30">
            {ANANYA_VIDEOS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToReelIndex(dotIdx)}
                className={`h-1 transition-all cursor-pointer ${
                  activeReelIndex === dotIdx
                    ? 'w-4 bg-[#FF0000]'
                    : 'w-1.5 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Jump to reel 0${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
