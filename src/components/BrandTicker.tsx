import React, { useState, useEffect, useRef } from 'react';
import { getLogosFromDB, saveLogosToDB, clearLogosFromDB, StoredLogo } from '../utils/logoStorage';
import regeneratedLogo2 from '../assets/images/regenerated_image_1790432365826.jpg';
import regeneratedLogo13 from '../assets/images/regenerated_image_1790433635874.jpg';
import regeneratedLogo14 from '../assets/images/regenerated_image_1790433636765.jpg';
import regeneratedLogo16 from '../assets/images/regenerated_image_1790434211565.jpg';
import regeneratedLogo17 from '../assets/images/regenerated_image_1790434212801.jpg';
import {
  Upload,
  Play,
  Pause,
  Check,
  Image as ImageIcon,
  ZoomIn,
  ZoomOut,
  Trash2,
  MoveHorizontal
} from 'lucide-react';

// Default initial brand names for reference if no images are uploaded yet
const DEFAULT_BRAND_NAMES = [
  'Comfort', 'Taj Mahal Tea House', 'Knorr', 'Dove', 'Pears',
  'Horlicks', 'LUX', 'BRU', 'CLINIQUE', 'M·A·C',
  'BOBBI BROWN', 'CHARMIS', '7UP', 'cherry by kotak', 'CEAT',
  'SBI general', 'आज तक', 'NOVOLOGY'
];

export const BrandTicker: React.FC = () => {
  const [logos, setLogos] = useState<StoredLogo[]>([]);
  const [isDropActive, setIsDropActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Strip Movement: Paused by default as requested to allow sizing & dragging
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(false);

  // Global Logo Height (in px) - default 44px
  const [baseHeight, setBaseHeight] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('harshpreet_logo_base_height');
      return saved ? parseInt(saved, 10) : 44;
    } catch {
      return 44;
    }
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Mouse Dragging State for Manual Scrolling
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Load saved logos from IndexedDB on mount
  useEffect(() => {
    let isMounted = true;
    getLogosFromDB().then((savedLogos) => {
      if (isMounted && savedLogos && savedLogos.length > 0) {
        setLogos(savedLogos);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleBaseHeightChange = (val: number) => {
    const clamped = Math.max(20, Math.min(84, val));
    setBaseHeight(clamped);
    try {
      localStorage.setItem('harshpreet_logo_base_height', clamped.toString());
    } catch {
      // ignore
    }
  };

  // Convert File to base64 DataURL for persistence
  const fileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Handle uploaded files (bulk or single)
  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setIsUploading(true);

    try {
      const newLogos: StoredLogo[] = [];
      const imageFiles = Array.from(files).filter((file) => file.type.startsWith('image/'));

      for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i];
        const dataUrl = await fileToDataUrl(file);
        const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');
        newLogos.push({
          id: `logo_${Date.now()}_${i}_${Math.random().toString(36).substring(2, 7)}`,
          name: cleanName,
          dataUrl,
          timestamp: Date.now() + i,
          scale: 1.0
        });
      }

      if (newLogos.length > 0) {
        setLogos((prev) => {
          const updated = [...prev, ...newLogos];
          saveLogosToDB(updated);
          return updated;
        });
        showToast(`✓ ${newLogos.length} brand logo${newLogos.length > 1 ? 's' : ''} added! Drag to inspect.`);
      }
    } catch (err) {
      console.error('Failed to read logo files:', err);
      showToast('Failed to load images. Please try again.');
    } finally {
      setIsUploading(false);
      setIsDropActive(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  // Adjust individual logo scale multiplier (e.g. 0.8 to 1.6)
  const adjustLogoScale = (logoId: string, delta: number) => {
    setLogos((prev) => {
      const updated = prev.map((l) => {
        if (l.id === logoId) {
          const currentScale = l.scale || 1.0;
          const nextScale = Math.round(Math.max(0.5, Math.min(2.0, currentScale + delta)) * 10) / 10;
          return { ...l, scale: nextScale };
        }
        return l;
      });
      saveLogosToDB(updated);
      return updated;
    });
  };

  // Remove a single logo
  const handleRemoveSingleLogo = (logoId: string) => {
    setLogos((prev) => {
      const updated = prev.filter((l) => l.id !== logoId);
      saveLogosToDB(updated);
      return updated;
    });
    showToast('Logo removed');
  };

  // Drag over section file drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleClearAll = async () => {
    if (window.confirm('Remove all uploaded brand logos?')) {
      await clearLogosFromDB();
      setLogos([]);
      showToast('All custom logos removed');
    }
  };

  // Manual Drag-to-Scroll on the strip
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsMouseDown(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 4) {
      setHasDragged(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  // Helper to map regenerated image assets to their specific positions
  const getLogoImageSrc = (index: number, fallbackUrl?: string) => {
    if (index === 1) return regeneratedLogo2;
    if (index === 12) return regeneratedLogo13;
    if (index === 13) return regeneratedLogo14;
    if (index === 15) return regeneratedLogo16;
    if (index === 16) return regeneratedLogo17;
    return fallbackUrl || null;
  };

  const hasUploadedLogos = logos.length > 0;

  return (
    <section
      id="brand-ticker-tape"
      className="w-full bg-white py-6 sm:py-8 overflow-hidden select-none relative border-b border-black/5"
      aria-label="Clients I've created for"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {/* Drag & Drop Visual Overlay for File Upload */}
      {isDropActive && (
        <div className="absolute inset-0 z-50 bg-black/85 backdrop-blur-xs flex flex-col items-center justify-center text-white border-2 border-dashed border-white m-3 pointer-events-none">
          <Upload className="w-10 h-10 mb-2 animate-bounce" />
          <p className="font-courier text-sm sm:text-base font-bold tracking-widest uppercase">
            DROP LOGO FILES HERE TO ADD TO TICKER
          </p>
        </div>
      )}

      {/* Main Header & Brutalist Controls Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Section Title */}
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-black shrink-0" />
            <h2 className="font-courier text-xs sm:text-sm font-bold uppercase tracking-widest text-black">
              CLIENT'S I'VE CREATED FOR
            </h2>
          </div>

          {/* Interactive Inspection & Sizing Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
            {/* 1. Global Height Slider */}
            <div className="flex items-center gap-2 bg-neutral-100 px-2.5 py-1 border border-black/10">
              <span className="font-courier text-[10px] sm:text-xs font-bold uppercase text-neutral-600">
                SIZE: {baseHeight}PX
              </span>
              <input
                type="range"
                min="24"
                max="74"
                step="2"
                value={baseHeight}
                onChange={(e) => handleBaseHeightChange(parseInt(e.target.value, 10))}
                className="w-20 sm:w-28 accent-black cursor-pointer"
                title="Adjust base logo height"
              />
            </div>

            {/* 2. Play / Pause Movement Toggle */}
            <button
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className={`flex items-center gap-1.5 px-3 py-1 font-courier font-bold text-[10px] sm:text-xs tracking-wider uppercase transition-all cursor-pointer border ${
                isAutoScrolling
                  ? 'bg-neutral-100 hover:bg-neutral-200 text-black border-black/20'
                  : 'bg-[#FF0000] text-white border-[#FF0000] shadow-xs'
              }`}
              title={isAutoScrolling ? 'Pause ticker movement to drag and adjust sizes' : 'Resume automatic ticker scrolling'}
            >
              {isAutoScrolling ? (
                <>
                  <Pause className="w-3 h-3" />
                  <span>PAUSE STRIP</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" />
                  <span>PAUSED (DRAG MODE)</span>
                </>
              )}
            </button>

            {/* 3. Upload Logos Action */}
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="flex items-center gap-1.5 bg-[#111111] hover:bg-[#FF0000] text-white px-3 sm:px-4 py-1 font-courier font-bold text-[10px] sm:text-xs tracking-wider uppercase transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <Upload className="w-3 h-3" />
              <span>{isUploading ? 'UPLOADING...' : hasUploadedLogos ? `+ ADD (${logos.length})` : 'UPLOAD LOGOS'}</span>
            </button>

            {/* 4. Reset Button */}
            {hasUploadedLogos && (
              <button
                onClick={handleClearAll}
                className="text-[10px] sm:text-xs font-courier uppercase text-neutral-400 hover:text-[#FF0000] px-1.5 py-1 transition-colors cursor-pointer"
                title="Reset all logos"
              >
                [RESET]
              </button>
            )}
          </div>
        </div>

        {/* Inspection drag tip banner */}
        {!isAutoScrolling && (
          <div className="mt-2.5 flex items-center gap-2 text-neutral-500 font-courier text-[10px] sm:text-xs">
            <MoveHorizontal className="w-3.5 h-3.5 text-[#FF0000] animate-pulse" />
            <span>
              Movement paused. <strong>Click & drag the strip left/right</strong> to inspect all logos. Hover any logo to fine-tune individual size (+ / -).
            </span>
          </div>
        )}
      </div>

      {/* Notification Toast */}
      {toastMessage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-2">
          <div className="bg-black text-white text-xs font-courier px-3 py-1.5 inline-flex items-center gap-2 shadow-md">
            <Check className="w-3.5 h-3.5 text-[#00FF66]" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Marquee & Drag Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right gradient masks for smooth edge fade (only when auto-scrolling) */}
        {isAutoScrolling && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          </>
        )}

        {/* Scrollable / Draggable Track Container */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`w-full ${
            isAutoScrolling
              ? 'overflow-hidden'
              : 'overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-none'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Inner content track: either CSS animated ticker or static draggable list */}
          <div
            className={`flex items-center gap-10 sm:gap-14 px-4 ${
              isAutoScrolling ? 'animate-ticker w-max' : 'w-max'
            }`}
          >
            {hasUploadedLogos ? (
              <>
                {/* Loop 1: Uploaded authentic logo images */}
                {logos.map((logo, i) => {
                  const scale = logo.scale || 1.0;
                  const calculatedHeight = Math.round(baseHeight * scale);
                  const logoSrc = getLogoImageSrc(i, logo.dataUrl) || logo.dataUrl;

                  return (
                    <div
                      key={`uploaded-logo-1-${logo.id}-${i}`}
                      className="relative flex items-center gap-6 sm:gap-8 group shrink-0 px-2"
                    >
                      {/* Logo Item Box */}
                      <div
                        className="flex items-center justify-center relative p-2 rounded-xs border border-transparent hover:border-black/20 hover:bg-neutral-50/60 transition-all"
                        style={{ height: `${baseHeight + 24}px` }}
                      >
                        <img
                          src={logoSrc}
                          alt={logo.name}
                          draggable={false}
                          style={{
                            height: `${calculatedHeight}px`,
                            maxHeight: `${calculatedHeight}px`
                          }}
                          className="w-auto max-w-[200px] object-contain transition-all"
                        />

                        {/* Hover Quick Size & Delete Controls */}
                        {!isAutoScrolling && (
                          <div className="absolute -top-3.5 right-0 hidden group-hover:flex items-center bg-black text-white text-[9px] font-courier py-0.5 px-1.5 shadow-md z-20 gap-1 rounded-xs">
                            <span className="text-neutral-300 font-mono text-[8px] mr-0.5">
                              {Math.round(scale * 100)}%
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                adjustLogoScale(logo.id, -0.1);
                              }}
                              className="px-1 hover:text-[#00FF66] cursor-pointer"
                              title="Decrease size by 10%"
                            >
                              -
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                adjustLogoScale(logo.id, 0.1);
                              }}
                              className="px-1 hover:text-[#00FF66] cursor-pointer"
                              title="Increase size by 10%"
                            >
                              +
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveSingleLogo(logo.id);
                              }}
                              className="px-1 hover:text-[#FF0000] cursor-pointer border-l border-white/20 ml-0.5"
                              title="Delete logo"
                            >
                              ✕
                            </button>
                          </div>
                        )}
                      </div>

                      <span className="text-neutral-300 font-courier text-base select-none">
                        /
                      </span>
                    </div>
                  );
                })}

                {/* Loop 2 (only for continuous scrolling when playing) */}
                {isAutoScrolling &&
                  logos.map((logo, i) => {
                    const scale = logo.scale || 1.0;
                    const calculatedHeight = Math.round(baseHeight * scale);
                    const logoSrc = getLogoImageSrc(i, logo.dataUrl) || logo.dataUrl;

                    return (
                      <div
                        key={`uploaded-logo-2-${logo.id}-${i}`}
                        className="flex items-center gap-6 sm:gap-8 group shrink-0 px-2"
                      >
                        <div
                          className="flex items-center justify-center p-2"
                          style={{ height: `${baseHeight + 24}px` }}
                        >
                          <img
                            src={logoSrc}
                            alt={logo.name}
                            draggable={false}
                            style={{
                              height: `${calculatedHeight}px`,
                              maxHeight: `${calculatedHeight}px`
                            }}
                            className="w-auto max-w-[200px] object-contain"
                          />
                        </div>
                        <span className="text-neutral-300 font-courier text-base select-none">
                          /
                        </span>
                      </div>
                    );
                  })}
              </>
            ) : (
              <>
                {/* Fallback Brand list invites file upload */}
                {DEFAULT_BRAND_NAMES.map((name, i) => {
                  const customImg = getLogoImageSrc(i);
                  if (customImg) {
                    return (
                      <div
                        key={`default-brand-1-${name}-${i}`}
                        className="flex items-center gap-6 sm:gap-8 group shrink-0 px-2"
                      >
                        <div
                          className="flex items-center justify-center p-2"
                          style={{ height: `${baseHeight + 24}px` }}
                        >
                          <img
                            src={customImg}
                            alt={name}
                            draggable={false}
                            style={{
                              height: `${baseHeight}px`,
                              maxHeight: `${baseHeight}px`
                            }}
                            className="w-auto max-w-[200px] object-contain"
                          />
                        </div>
                        <span className="text-neutral-300 font-courier text-base select-none">
                          /
                        </span>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={`default-brand-1-${name}-${i}`}
                      onClick={() => {
                        if (!hasDragged) fileInputRef.current?.click();
                      }}
                      className="flex items-center gap-6 sm:gap-8 group cursor-pointer shrink-0 px-2"
                      title={`Click to upload official logo for ${name}`}
                    >
                      <div
                        className="flex flex-col items-center justify-center px-4 py-2 border border-black/15 hover:border-black group-hover:bg-neutral-50 transition-colors"
                        style={{ height: `${baseHeight + 20}px` }}
                      >
                        <span className="font-anton text-xl sm:text-2xl text-neutral-900 group-hover:text-[#FF0000] tracking-tight uppercase transition-colors">
                          {name}
                        </span>
                        <span className="font-courier text-[8px] text-neutral-400 uppercase mt-0.5 flex items-center gap-1">
                          <ImageIcon className="w-2.5 h-2.5" />
                          <span>CLICK TO UPLOAD</span>
                        </span>
                      </div>
                      <span className="text-neutral-300 font-courier text-base select-none">
                        /
                      </span>
                    </div>
                  );
                })}

                {/* Duplicate loop when playing for seamless loop */}
                {isAutoScrolling &&
                  DEFAULT_BRAND_NAMES.map((name, i) => {
                    const customImg = getLogoImageSrc(i);
                    if (customImg) {
                      return (
                        <div
                          key={`default-brand-2-${name}-${i}`}
                          className="flex items-center gap-6 sm:gap-8 group shrink-0 px-2"
                        >
                          <div
                            className="flex items-center justify-center p-2"
                            style={{ height: `${baseHeight + 24}px` }}
                          >
                            <img
                              src={customImg}
                              alt={name}
                              draggable={false}
                              style={{
                                height: `${baseHeight}px`,
                                maxHeight: `${baseHeight}px`
                              }}
                              className="w-auto max-w-[200px] object-contain"
                            />
                          </div>
                          <span className="text-neutral-300 font-courier text-base select-none">
                            /
                          </span>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={`default-brand-2-${name}-${i}`}
                        className="flex items-center gap-6 sm:gap-8 group shrink-0 px-2"
                      >
                        <div
                          className="flex flex-col items-center justify-center px-4 py-2 border border-black/15"
                          style={{ height: `${baseHeight + 20}px` }}
                        >
                          <span className="font-anton text-xl sm:text-2xl text-neutral-900 tracking-tight uppercase">
                            {name}
                          </span>
                        </div>
                        <span className="text-neutral-300 font-courier text-base select-none">
                          /
                        </span>
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
