import React, { useState, useEffect, useRef } from 'react';
import defaultHeroImage from '../assets/images/regenerated_image_1790430600332.png';
import { removeWhiteBackgroundFromImage } from '../utils/imageProcessing';
import { Camera, Check, Sparkles } from 'lucide-react';

interface HeroPortraitProps {
  slideIndex: number;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ slideIndex }) => {
  // Store custom transparent photos per slide in memory & localStorage
  const [slidePhotos, setSlidePhotos] = useState<Record<number, string>>(() => {
    try {
      const saved0 = localStorage.getItem('harshpreet_photo_0');
      const saved1 = localStorage.getItem('harshpreet_photo_1');
      const saved2 = localStorage.getItem('harshpreet_photo_2');
      const initial: Record<number, string> = {};
      if (saved0) initial[0] = saved0;
      if (saved1) initial[1] = saved1;
      if (saved2) initial[2] = saved2;
      return initial;
    } catch {
      return {};
    }
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if user uploaded files exist in public folder
  useEffect(() => {
    const candidatePaths = [
      `/harshpreet-${slideIndex + 1}.png`,
      `/harshpreet_${slideIndex + 1}.png`,
      slideIndex === 0 ? '/Harshpreet Kaur.png' : `/Harshpreet Kaur ${slideIndex + 1}.png`
    ];

    const checkCandidate = async () => {
      if (slidePhotos[slideIndex]) return;

      for (const path of candidatePaths) {
        try {
          const res = await fetch(path, { method: 'HEAD' });
          if (res.ok) {
            const transparentUrl = await removeWhiteBackgroundFromImage(path);
            setSlidePhotos((prev) => {
              const updated = { ...prev, [slideIndex]: transparentUrl };
              try {
                localStorage.setItem(`harshpreet_photo_${slideIndex}`, transparentUrl);
              } catch {
                // Ignore storage limits
              }
              return updated;
            });
            break;
          }
        } catch {
          // Continue to next candidate
        }
      }
    };

    checkCandidate();
  }, [slideIndex, slidePhotos]);

  // Handle file drop or selection
  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setIsProcessing(true);

    try {
      const file = files[0];
      const transparentDataUrl = await removeWhiteBackgroundFromImage(file);

      setSlidePhotos((prev) => {
        const next = { ...prev, [slideIndex]: transparentDataUrl };
        try {
          localStorage.setItem(`harshpreet_photo_${slideIndex}`, transparentDataUrl);
        } catch {
          // ignore
        }
        return next;
      });

      // If user uploaded multiple files (e.g. all 3 at once)
      if (files.length >= 2) {
        for (let i = 1; i < Math.min(files.length, 3); i++) {
          const targetIndex = (slideIndex + i) % 3;
          const otherUrl = await removeWhiteBackgroundFromImage(files[i]);
          setSlidePhotos((prev) => {
            const next = { ...prev, [targetIndex]: otherUrl };
            try {
              localStorage.setItem(`harshpreet_photo_${targetIndex}`, otherUrl);
            } catch {
              // ignore
            }
            return next;
          });
        }
      }

      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to process image:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const activePhoto = slidePhotos[slideIndex] || defaultHeroImage;

  return (
    <div
      className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px] h-[460px] sm:h-[540px] md:h-[600px] lg:h-[660px] xl:h-[720px] flex items-end justify-center select-none mx-auto group relative z-20 overflow-visible"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => handleFileUpload(e.target.files)}
      />

      {/* Render the actual photo if loaded/uploaded (fully visible, zero cropping, initial slide-up entrance animation) */}
      {activePhoto ? (
        <img
          src={activePhoto}
          alt="Harshpreet Kaur"
          className={`w-full h-full object-contain object-bottom pointer-events-none transition-all duration-1000 ease-out transform origin-bottom group-hover:scale-[1.02] relative z-10 ${
            hasMounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        />
      ) : (
        /* Editorial illustration precisely capturing the authentic pose, aviators, open laugh with teeth, and dark shirt */
        <div
          className={`w-full h-full flex items-end justify-center relative transform origin-bottom transition-all duration-1000 ease-out z-10 ${
            hasMounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <svg
            viewBox="0 0 500 660"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-contain object-bottom filter drop-shadow-sm transition-all duration-300"
          >
            <defs>
              <linearGradient id="shirtDark" x1="250" y1="280" x2="250" y2="660" gradientUnits="userSpaceOnUse">
                <stop stopColor="#252422" />
                <stop offset="0.4" stopColor="#1A1918" />
                <stop offset="0.8" stopColor="#111110" />
                <stop offset="1" stopColor="#0B0B0A" />
              </linearGradient>
              <linearGradient id="hairHighlight" x1="180" y1="80" x2="320" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3A322C" />
                <stop offset="0.3" stopColor="#241E1A" />
                <stop offset="0.7" stopColor="#181412" />
                <stop offset="1" stopColor="#100D0B" />
              </linearGradient>
              <linearGradient id="skinTone" x1="250" y1="90" x2="250" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E4DCD3" />
                <stop offset="0.5" stopColor="#D5CBBF" />
                <stop offset="1" stopColor="#BEB1A1" />
              </linearGradient>
              <linearGradient id="aviatorLens" x1="200" y1="170" x2="230" y2="225" gradientUnits="userSpaceOnUse">
                <stop stopColor="#303030" />
                <stop offset="0.5" stopColor="#181818" />
                <stop offset="1" stopColor="#0A0A0A" />
              </linearGradient>
            </defs>

            {/* Back Hair Mass */}
            <path
              d="M165 95 C115 130 85 240 80 370 C75 450 95 530 125 570 C145 530 165 440 175 380 C185 320 185 260 175 190 Z"
              fill="url(#hairHighlight)"
            />
            <path
              d="M335 95 C385 130 415 240 420 370 C425 450 405 530 375 570 C355 530 335 440 325 380 C315 320 315 260 325 190 Z"
              fill="url(#hairHighlight)"
            />
            <path
              d="M160 120 C180 80 220 65 250 65 C280 65 320 80 340 120 C325 100 295 88 250 88 C205 88 175 100 160 120 Z"
              fill="#181412"
            />

            {/* Shoulders, arms and black button-down shirt */}
            <path
              d="M120 660 L140 430 C150 380 185 360 250 360 C315 360 350 380 360 430 L380 660 Z"
              fill="url(#shirtDark)"
            />
            {/* Left Arm & Rolled Sleeve */}
            <path
              d="M135 660 C100 590 80 500 75 420 C70 380 100 360 140 350 L160 420 L135 660 Z"
              fill="#161514"
            />
            {/* Right Arm & Rolled Sleeve */}
            <path
              d="M365 660 C400 590 420 500 425 420 C430 380 400 360 360 350 L340 420 L365 660 Z"
              fill="#161514"
            />
            {/* Belt & Trouser Top (Emerging below stats bar) */}
            <rect x="190" y="610" width="120" height="20" fill="#0A0A0A" />
            <rect x="235" y="612" width="30" height="16" stroke="#555555" strokeWidth="2" fill="none" />
            <path d="M190 630 L200 660 L300 660 L310 630 Z" fill="#121212" />

            {/* Shirt Placket & Buttons */}
            <path d="M250 360 L250 610" stroke="#101010" strokeWidth="4" />
            <circle cx="250" cy="420" r="3" fill="#3A3A3A" />
            <circle cx="250" cy="470" r="3" fill="#3A3A3A" />
            <circle cx="250" cy="520" r="3" fill="#3A3A3A" />
            <circle cx="250" cy="570" r="3" fill="#3A3A3A" />

            {/* Neck & Open Collar V-Neck */}
            <path
              d="M210 290 C210 335 225 365 250 365 C275 365 290 335 290 290 Z"
              fill="url(#skinTone)"
            />
            {/* Shirt Collar flaps */}
            <path d="M210 330 L185 385 L235 375 Z" fill="#201E1D" />
            <path d="M290 330 L315 385 L265 375 Z" fill="#201E1D" />

            {/* Gold Pendant Necklace */}
            <path d="M228 325 Q250 348 272 325" stroke="#C5A059" strokeWidth="1.5" fill="none" />
            <circle cx="250" cy="348" r="3" fill="#D4AF37" />

            {/* Face Shape */}
            <path
              d="M195 170 C190 230 205 285 250 290 C295 285 310 230 305 170 C300 110 280 95 250 95 C220 95 200 110 195 170 Z"
              fill="url(#skinTone)"
            />

            {/* Radiant Open Laughing Mouth with Clean Teeth (Exact pose in IMG_0439.jpeg) */}
            {/* Lip Outline & Mouth cavity */}
            <path
              d="M224 242 Q250 238 276 242 Q278 266 250 268 Q222 266 224 242 Z"
              fill="#1C0D0E"
            />
            {/* Upper Teeth Row */}
            <path
              d="M227 243 Q250 241 273 243 C272 251 262 254 250 254 C238 254 228 251 227 243 Z"
              fill="#FFFFFF"
            />
            {/* Lower Lip definition */}
            <path
              d="M228 263 Q250 273 272 263"
              stroke="#A87A6C"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Aviator Sunglasses (Teardrop lenses with double bridge) */}
            {/* Left Lens */}
            <path
              d="M198 178 C198 168 232 168 236 180 C238 194 233 216 222 220 C208 224 198 214 198 178 Z"
              fill="url(#aviatorLens)"
              stroke="#1C1C1C"
              strokeWidth="2"
            />
            {/* Right Lens */}
            <path
              d="M302 178 C302 168 268 168 264 180 C262 194 267 216 278 220 C292 224 302 214 302 178 Z"
              fill="url(#aviatorLens)"
              stroke="#1C1C1C"
              strokeWidth="2"
            />
            {/* Top Brow Bar & Nose Bridge */}
            <line x1="228" y1="172" x2="272" y2="172" stroke="#222222" strokeWidth="2.5" />
            <line x1="234" y1="184" x2="266" y2="184" stroke="#222222" strokeWidth="2.5" />
            {/* Lens Glare Reflection */}
            <path d="M206 182 Q214 176 224 180" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.45" fill="none" />
            <path d="M276 182 Q284 176 294 180" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.45" fill="none" />

            {/* Front Wavy Hair Cascading Over Shoulders */}
            <path
              d="M185 140 C170 190 160 260 172 350 C180 400 195 450 205 500 C195 450 180 390 175 340 C170 290 180 230 192 185 Z"
              fill="#241E1A"
            />
            <path
              d="M315 140 C330 190 340 260 328 350 C320 400 305 450 295 500 C305 450 320 390 325 340 C330 290 320 230 308 185 Z"
              fill="#241E1A"
            />
            {/* Subtle warm highlights */}
            <path d="M188 190 Q178 270 198 380" stroke="#4A3B30" strokeWidth="3" fill="none" strokeOpacity="0.6" />
            <path d="M312 190 Q322 270 302 380" stroke="#4A3B30" strokeWidth="3" fill="none" strokeOpacity="0.6" />
          </svg>
        </div>
      )}

      {/* Discreet floating action trigger positioned in the corner */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 opacity-70 group-hover:opacity-100 transition-opacity z-30 pointer-events-auto">
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isProcessing}
          className="bg-black/90 hover:bg-[#FF0000] text-white text-[8px] sm:text-[10px] font-courier font-bold tracking-wider uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-none flex items-center gap-1 transition-all shadow-md cursor-pointer border border-neutral-700 whitespace-nowrap"
          title="Upload photo - white background is automatically removed"
        >
          {isProcessing ? (
            <>
              <Sparkles size={10} className="animate-spin text-white" />
              <span>REMOVING BG...</span>
            </>
          ) : uploadSuccess ? (
            <>
              <Check size={10} className="text-emerald-400" />
              <span>UPDATED!</span>
            </>
          ) : (
            <>
              <Camera size={10} />
              <span>{activePhoto ? 'REPLACE' : 'UPLOAD PHOTO'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
