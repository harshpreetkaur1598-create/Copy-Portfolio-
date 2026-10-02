import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, ChevronUp, ChevronDown, Maximize2, Film, Sparkles, Code2, Video } from 'lucide-react';
import { WireframeSlot } from '../types';

export const NOVOLOGY_BOX_1_VIDEOS = [
  {
    id: 'novo-video-invite',
    slotNumber: '01',
    tag: 'CODED INVITE',
    title: 'Personalised Coded Invitation',
    subtitle: 'Interactive digital invite mechanism',
    url: 'https://res.cloudinary.com/uybanqfq/video/upload/Novo_launch_3.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Novo_launch_3',
    dimensions: '9:16 REEL',
    type: 'reel' as const,
    hint: 'NOVOLOGY PERSONALISED CODED INVITATION'
  },
  {
    id: 'novo-video-prkit',
    slotNumber: '02',
    tag: 'PR KIT UNBOXING',
    title: 'Influencer PR Kit Experience',
    subtitle: 'Exclusive launch kit packaging & unboxing',
    url: 'https://res.cloudinary.com/uybanqfq/video/upload/Novo_launch_2.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Novo_launch_2',
    dimensions: '9:16 REEL',
    type: 'reel' as const,
    hint: 'NOVOLOGY INFLUENCER PR KIT UNBOXING'
  }
];

export const NOVOLOGY_BOX_2_VIDEOS = [
  {
    id: 'novo-video-event-1',
    slotNumber: '03',
    tag: 'ON-GROUND 01',
    title: 'On-Ground Launch Event Coverage',
    subtitle: 'Live event experience & brand reveal',
    url: 'https://res.cloudinary.com/uybanqfq/video/upload/Novo_launch_1.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Novo_launch_1',
    dimensions: '9:16 REEL',
    type: 'reel' as const,
    hint: 'NOVOLOGY ON-GROUND LAUNCH EVENT COVERAGE'
  },
  {
    id: 'novo-video-redflags',
    slotNumber: '04',
    tag: 'CREATOR BYTE',
    title: 'Skincare Red Flags',
    subtitle: 'On-ground attendee & creator bytes',
    url: 'https://res.cloudinary.com/uybanqfq/video/upload/Novology_Skincare_Red_Flags.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Novology_Skincare_Red_Flags',
    dimensions: '9:16 REEL',
    type: 'reel' as const,
    hint: 'NOVOLOGY SKINCARE RED FLAGS CREATOR BYTE'
  },
  {
    id: 'novo-video-event-3',
    slotNumber: '05',
    tag: 'ON-GROUND 03',
    title: 'Event Showcase & Keynote',
    subtitle: 'Brand story and product demonstrations',
    url: 'https://res.cloudinary.com/uybanqfq/video/upload/Novology_Event_video_3.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Novology_Event_video_3',
    dimensions: '9:16 REEL',
    type: 'reel' as const,
    hint: 'NOVOLOGY EVENT SHOWCASE & AMBIENCE'
  }
];

interface NovologyShowcaseProps {
  onInspect: (slot: WireframeSlot) => void;
}

export const NovologyShowcase: React.FC<NovologyShowcaseProps> = ({ onInspect }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Box 1 (Invite & PR Kit - 2 videos)
  const box1ScrollRef = useRef<HTMLDivElement>(null);
  const box1VideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeBox1Index, setActiveBox1Index] = useState(0);
  const [isBox1Muted, setIsBox1Muted] = useState(true);
  const [box1Progress, setBox1Progress] = useState(0);

  // Box 2 (Event Videos - 3 videos)
  const box2ScrollRef = useRef<HTMLDivElement>(null);
  const box2VideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeBox2Index, setActiveBox2Index] = useState(0);
  const [isBox2Muted, setIsBox2Muted] = useState(true);
  const [box2Progress, setBox2Progress] = useState(0);

  // Section in-view state
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer
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

  // Box 1 Video Playback
  useEffect(() => {
    box1VideoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (isInView && index === activeBox1Index) {
        video.muted = isBox1Muted;
        video.play().catch(() => {
          video.muted = true;
          setIsBox1Muted(true);
          video.play().catch(() => {});
        });
      } else {
        video.pause();
      }
    });
  }, [isInView, activeBox1Index, isBox1Muted]);

  // Box 2 Video Playback
  useEffect(() => {
    box2VideoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (isInView && index === activeBox2Index) {
        video.muted = isBox2Muted;
        video.play().catch(() => {
          video.muted = true;
          setIsBox2Muted(true);
          video.play().catch(() => {});
        });
      } else {
        video.pause();
      }
    });
  }, [isInView, activeBox2Index, isBox2Muted]);

  // Box 1 Navigation
  const scrollToBox1Index = useCallback((index: number) => {
    if (!box1ScrollRef.current) return;
    const targetEl = box1ScrollRef.current.children[index] as HTMLElement;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    setActiveBox1Index(index);
    setBox1Progress(0);
  }, []);

  const handleBox1Ended = (index: number) => {
    const nextIndex = (index + 1) % NOVOLOGY_BOX_1_VIDEOS.length;
    scrollToBox1Index(nextIndex);
  };

  const handleBox1TimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      setBox1Progress(pct);
    }
  };

  const handleBox1Scroll = () => {
    if (!box1ScrollRef.current) return;
    const container = box1ScrollRef.current;
    const scrollPos = container.scrollTop;
    const itemHeight = container.clientHeight;
    if (itemHeight > 0) {
      const newIndex = Math.round(scrollPos / itemHeight);
      if (newIndex >= 0 && newIndex < NOVOLOGY_BOX_1_VIDEOS.length && newIndex !== activeBox1Index) {
        setActiveBox1Index(newIndex);
        setBox1Progress(0);
      }
    }
  };

  // Box 2 Navigation
  const scrollToBox2Index = useCallback((index: number) => {
    if (!box2ScrollRef.current) return;
    const targetEl = box2ScrollRef.current.children[index] as HTMLElement;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    setActiveBox2Index(index);
    setBox2Progress(0);
  }, []);

  const handleBox2Ended = (index: number) => {
    const nextIndex = (index + 1) % NOVOLOGY_BOX_2_VIDEOS.length;
    scrollToBox2Index(nextIndex);
  };

  const handleBox2TimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      setBox2Progress(pct);
    }
  };

  const handleBox2Scroll = () => {
    if (!box2ScrollRef.current) return;
    const container = box2ScrollRef.current;
    const scrollPos = container.scrollTop;
    const itemHeight = container.clientHeight;
    if (itemHeight > 0) {
      const newIndex = Math.round(scrollPos / itemHeight);
      if (newIndex >= 0 && newIndex < NOVOLOGY_BOX_2_VIDEOS.length && newIndex !== activeBox2Index) {
        setActiveBox2Index(newIndex);
        setBox2Progress(0);
      }
    }
  };

  const currentBox1Video = NOVOLOGY_BOX_1_VIDEOS[activeBox1Index];
  const currentBox2Video = NOVOLOGY_BOX_2_VIDEOS[activeBox2Index];

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full h-[420px] sm:h-[480px] overflow-hidden max-w-4xl mx-auto"
    >
      {/* BOX 1: Coded Invite & PR Kit (2 Scrollable Reels) */}
      <div className="flex flex-col h-full overflow-hidden">
        {/* Compact Header Bar */}
        <div className="bg-[#18181A] border border-neutral-700/80 px-2.5 py-1 flex items-center justify-between mb-1.5 shrink-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <Code2 size={11} className="text-[#FF0000] shrink-0" />
            <span className="font-courier text-[9px] sm:text-[10px] text-white uppercase tracking-wider font-bold truncate">
              01 • CODED INVITE & PR KIT
            </span>
          </div>
          <span className="font-courier text-[8px] bg-[#FF0000] text-white px-1.5 py-0.5 font-bold uppercase tracking-wider shrink-0">
            {activeBox1Index + 1}/{NOVOLOGY_BOX_1_VIDEOS.length}
          </span>
        </div>

        {/* Reel Box Viewport */}
        <div className="relative flex-1 min-h-0 bg-black border border-neutral-700/80 hover:border-neutral-500 overflow-hidden flex flex-col transition-all">
          {/* Top Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-800 z-30">
            <div
              className="h-full bg-[#FF0000] transition-all duration-150 ease-linear"
              style={{ width: `${box1Progress}%` }}
            />
          </div>

          {/* Controls: Audio & Fullscreen Inspect */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 z-30">
            <button
              onClick={() => setIsBox1Muted(!isBox1Muted)}
              className={`p-1 rounded-xs transition-colors cursor-pointer border ${
                !isBox1Muted
                  ? 'bg-[#FF0000] border-[#FF0000] text-white'
                  : 'bg-black/80 border-neutral-700 text-neutral-300 hover:text-white'
              }`}
              title={isBox1Muted ? 'Unmute Audio' : 'Mute Audio'}
              aria-label={isBox1Muted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {!isBox1Muted ? <Volume2 size={12} /> : <VolumeX size={12} />}
            </button>

            <button
              onClick={() =>
                onInspect({
                  id: currentBox1Video.id,
                  slotNumber: currentBox1Video.slotNumber,
                  type: 'reel',
                  dimensions: '9:16 REEL',
                  hint: currentBox1Video.hint,
                  url: currentBox1Video.url
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
                scrollToBox1Index(
                  (activeBox1Index - 1 + NOVOLOGY_BOX_1_VIDEOS.length) % NOVOLOGY_BOX_1_VIDEOS.length
                )
              }
              className="p-1 bg-black/70 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-xs transition-colors cursor-pointer"
              aria-label="Previous video"
            >
              <ChevronUp size={12} />
            </button>
            <button
              onClick={() =>
                scrollToBox1Index((activeBox1Index + 1) % NOVOLOGY_BOX_1_VIDEOS.length)
              }
              className="p-1 bg-black/70 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-xs transition-colors cursor-pointer"
              aria-label="Next video"
            >
              <ChevronDown size={12} />
            </button>
          </div>

          {/* Vertical Reel Scroll Viewport */}
          <div
            ref={box1ScrollRef}
            onScroll={handleBox1Scroll}
            className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth relative"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {NOVOLOGY_BOX_1_VIDEOS.map((video, idx) => (
              <div
                key={video.id}
                className="w-full h-full snap-start relative flex items-center justify-center bg-black overflow-hidden flex-shrink-0"
              >
                <video
                  ref={(el) => {
                    box1VideoRefs.current[idx] = el;
                  }}
                  src={video.url}
                  playsInline
                  muted={isBox1Muted}
                  onEnded={() => handleBox1Ended(idx)}
                  onTimeUpdate={idx === activeBox1Index ? handleBox1TimeUpdate : undefined}
                  className="w-full h-full object-cover"
                />

                {/* Bottom Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none flex flex-col justify-between p-3 z-20">
                  {/* Top Left Badge */}
                  <div className="flex items-center gap-1.5">
                    <span className="bg-[#FF0000] text-white font-courier text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
                      {video.tag}
                    </span>
                  </div>

                  {/* Bottom Text & Next Cue */}
                  <div className="space-y-0.5">
                    <span className="font-courier text-[8px] text-[#FF0000] font-bold uppercase tracking-wider block">
                      PRE-LAUNCH ACTIVATION
                    </span>
                    <h5 className="font-anton text-sm sm:text-base text-white uppercase tracking-tight leading-tight truncate">
                      {video.title}
                    </h5>
                    <p className="font-courier text-[8px] text-neutral-300 truncate">
                      {video.subtitle}
                    </p>
                    <div className="flex items-center justify-between text-[8px] font-courier text-neutral-400 pt-0.5 border-t border-neutral-800">
                      <span className="uppercase truncate">
                        AUTO-ADVANCES ON END
                      </span>
                      <span className="text-[#FF0000] font-bold uppercase shrink-0">
                        [SCROLL]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-2 right-3 flex items-center gap-1 z-30">
            {NOVOLOGY_BOX_1_VIDEOS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToBox1Index(dotIdx)}
                className={`h-1 transition-all cursor-pointer ${
                  activeBox1Index === dotIdx
                    ? 'w-4 bg-[#FF0000]'
                    : 'w-1.5 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Jump to video 0${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* BOX 2: Event Coverage, Skincare Red Flags, & Showcase (3 Scrollable Reels) */}
      <div className="flex flex-col h-full overflow-hidden">
        {/* Compact Header Bar */}
        <div className="bg-[#18181A] border border-neutral-700/80 px-2.5 py-1 flex items-center justify-between mb-1.5 shrink-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <Video size={11} className="text-[#FF0000] shrink-0" />
            <span className="font-courier text-[9px] sm:text-[10px] text-white uppercase tracking-wider font-bold truncate">
              02 • ON-GROUND EVENT FILMS
            </span>
          </div>
          <span className="font-courier text-[8px] bg-[#FF0000] text-white px-1.5 py-0.5 font-bold uppercase tracking-wider shrink-0">
            {activeBox2Index + 1}/{NOVOLOGY_BOX_2_VIDEOS.length}
          </span>
        </div>

        {/* Reel Box Viewport */}
        <div className="relative flex-1 min-h-0 bg-black border border-neutral-700/80 hover:border-neutral-500 overflow-hidden flex flex-col transition-all">
          {/* Top Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-800 z-30">
            <div
              className="h-full bg-[#FF0000] transition-all duration-150 ease-linear"
              style={{ width: `${box2Progress}%` }}
            />
          </div>

          {/* Controls: Audio & Fullscreen Inspect */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 z-30">
            <button
              onClick={() => setIsBox2Muted(!isBox2Muted)}
              className={`p-1 rounded-xs transition-colors cursor-pointer border ${
                !isBox2Muted
                  ? 'bg-[#FF0000] border-[#FF0000] text-white'
                  : 'bg-black/80 border-neutral-700 text-neutral-300 hover:text-white'
              }`}
              title={isBox2Muted ? 'Unmute Audio' : 'Mute Audio'}
              aria-label={isBox2Muted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {!isBox2Muted ? <Volume2 size={12} /> : <VolumeX size={12} />}
            </button>

            <button
              onClick={() =>
                onInspect({
                  id: currentBox2Video.id,
                  slotNumber: currentBox2Video.slotNumber,
                  type: 'reel',
                  dimensions: '9:16 REEL',
                  hint: currentBox2Video.hint,
                  url: currentBox2Video.url
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
                scrollToBox2Index(
                  (activeBox2Index - 1 + NOVOLOGY_BOX_2_VIDEOS.length) % NOVOLOGY_BOX_2_VIDEOS.length
                )
              }
              className="p-1 bg-black/70 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-xs transition-colors cursor-pointer"
              aria-label="Previous video"
            >
              <ChevronUp size={12} />
            </button>
            <button
              onClick={() =>
                scrollToBox2Index((activeBox2Index + 1) % NOVOLOGY_BOX_2_VIDEOS.length)
              }
              className="p-1 bg-black/70 hover:bg-neutral-800 text-white border border-neutral-700/80 rounded-xs transition-colors cursor-pointer"
              aria-label="Next video"
            >
              <ChevronDown size={12} />
            </button>
          </div>

          {/* Vertical Reel Scroll Viewport */}
          <div
            ref={box2ScrollRef}
            onScroll={handleBox2Scroll}
            className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth relative"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {NOVOLOGY_BOX_2_VIDEOS.map((video, idx) => (
              <div
                key={video.id}
                className="w-full h-full snap-start relative flex items-center justify-center bg-black overflow-hidden flex-shrink-0"
              >
                <video
                  ref={(el) => {
                    box2VideoRefs.current[idx] = el;
                  }}
                  src={video.url}
                  playsInline
                  muted={isBox2Muted}
                  onEnded={() => handleBox2Ended(idx)}
                  onTimeUpdate={idx === activeBox2Index ? handleBox2TimeUpdate : undefined}
                  className="w-full h-full object-cover"
                />

                {/* Bottom Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none flex flex-col justify-between p-3 z-20">
                  {/* Top Left Badge */}
                  <div className="flex items-center gap-1.5">
                    <span className="bg-[#FF0000] text-white font-courier text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
                      {video.tag}
                    </span>
                  </div>

                  {/* Bottom Text & Next Cue */}
                  <div className="space-y-0.5">
                    <span className="font-courier text-[8px] text-[#FF0000] font-bold uppercase tracking-wider block">
                      EVENT FILMS
                    </span>
                    <h5 className="font-anton text-sm sm:text-base text-white uppercase tracking-tight leading-tight truncate">
                      {video.title}
                    </h5>
                    <p className="font-courier text-[8px] text-neutral-300 truncate">
                      {video.subtitle}
                    </p>
                    <div className="flex items-center justify-between text-[8px] font-courier text-neutral-400 pt-0.5 border-t border-neutral-800">
                      <span className="uppercase truncate">
                        AUTO-ADVANCES ON END
                      </span>
                      <span className="text-[#FF0000] font-bold uppercase shrink-0">
                        [SCROLL]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-2 right-3 flex items-center gap-1 z-30">
            {NOVOLOGY_BOX_2_VIDEOS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToBox2Index(dotIdx)}
                className={`h-1 transition-all cursor-pointer ${
                  activeBox2Index === dotIdx
                    ? 'w-4 bg-[#FF0000]'
                    : 'w-1.5 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Jump to video 0${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
