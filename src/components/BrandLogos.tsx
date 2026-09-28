import React from 'react';

export interface LogoProps {
  className?: string;
}

// 1. Comfort
export const ComfortLogo: React.FC<LogoProps> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 280 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 95C12 95 0 80 0 54C0 25 18 6 43 6C65 6 78 20 78 38C78 45 75 51 70 55C65 59 58 60 48 60C45 60 41 59 36 58C36 74 44 83 56 83C64 83 71 78 75 72L85 81C77 90 66 95 51 95C46 95 38 95 32 95ZM40 47C50 47 57 44 57 37C57 28 50 20 40 20C28 20 20 32 20 48C25 48 33 47 40 47Z"
      fill="#1C2070"
    />
    <path
      d="M102 94C84 94 72 80 72 63C72 45 85 32 103 32C122 32 135 46 135 63C135 81 121 94 102 94ZM103 45C93 45 88 53 88 63C88 73 94 81 103 81C112 81 118 73 118 63C118 53 112 45 103 45Z"
      fill="#1C2070"
    />
    {/* Heart inside the 'o' */}
    <path
      d="M103 69C103 69 98 64 96 61C94 58 94 55 97 53C100 51 102 53 103 55C104 53 106 51 109 53C112 55 112 58 110 61C108 64 103 69 103 69Z"
      fill="#1C2070"
    />
    <path
      d="M140 92V34H154V41C158 35 165 32 173 32C181 32 187 36 190 42C195 35 204 32 212 32C226 32 233 41 233 55V92H218V58C218 49 214 44 207 44C200 44 195 49 195 58V92H180V58C180 49 176 44 169 44C162 44 157 49 157 58V92H140Z"
      fill="#1C2070"
    />
    <path
      d="M239 92V43H232V34H239V24C239 12 247 4 260 4C266 4 272 6 275 9L270 19C268 18 265 17 261 17C256 17 254 21 254 27V34H269V43H254V92H239Z"
      fill="#1C2070"
    />
  </svg>
);

// 2. Taj Mahal Tea House
export const TajMahalLogo: React.FC<LogoProps> = ({ className = 'h-11' }) => (
  <svg viewBox="0 0 150 150" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Scalloped Crest Badge */}
    <path
      d="M75 5C90 5 95 18 105 18C115 18 126 12 134 20C142 28 136 39 136 49C136 59 149 65 149 75C149 85 136 91 136 101C136 111 142 122 134 130C126 138 115 132 105 132C95 132 90 145 75 145C60 145 55 132 45 132C35 132 24 138 16 130C8 122 14 111 14 101C14 91 1 85 1 75C1 65 14 59 14 49C14 39 8 28 16 20C24 12 35 18 45 18C55 18 60 5 75 5Z"
      fill="#0B2341"
      stroke="#D2AF68"
      strokeWidth="2.5"
    />
    <path
      d="M62 25C62 21 75 17 88 25C88 32 62 32 62 25Z"
      fill="#F5E4B7"
      stroke="#D2AF68"
      strokeWidth="0.8"
    />
    <text x="75" y="27" textAnchor="middle" fill="#0B2341" fontSize="7" fontWeight="bold" fontFamily="sans-serif">
      Brooke Bond
    </text>
    <text x="75" y="66" textAnchor="middle" fill="#E8C786" fontSize="24" fontFamily="serif" fontWeight="bold" letterSpacing="2">
      TAJ
    </text>
    <text x="75" y="93" textAnchor="middle" fill="#E8C786" fontSize="24" fontFamily="serif" fontWeight="bold" letterSpacing="2">
      MAHAL
    </text>
    <text x="75" y="112" textAnchor="middle" fill="#E8C786" fontSize="8" fontFamily="serif" letterSpacing="3">
      TEA HOUSE
    </text>
    {/* Flourish */}
    <path
      d="M65 125C70 123 75 127 75 127C75 127 80 123 85 125"
      stroke="#D2AF68"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

// 3. Knorr
export const KnorrLogo: React.FC<LogoProps> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 240 135" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Waving Green Flag */}
    <path
      d="M10 25C70 5 130 50 230 15V110C150 140 80 85 10 115V25Z"
      fill="#007A33"
    />
    <text x="145" y="32" fill="#F4B223" fontSize="10" fontWeight="bold" letterSpacing="1.8" fontFamily="sans-serif">
      SINCE 1838
    </text>
    {/* Knorr stylized script */}
    <text x="120" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="56" fontWeight="bold" fontStyle="italic" fontFamily="'Brush Script MT', 'Bickham Script Pro', cursive, serif">
      Knorr
    </text>
  </svg>
);

// 4. Dove
export const DoveLogo: React.FC<LogoProps> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 240 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="120" y="65" textAnchor="middle" fill="#003B71" fontSize="62" fontFamily="serif" fontStyle="italic" fontWeight="bold">
      Dove
    </text>
    {/* Golden Dove silhouette */}
    <path
      d="M95 78C110 74 125 78 140 86C130 88 115 88 100 84C95 82 92 80 95 78Z"
      fill="url(#doveGold)"
    />
    <defs>
      <linearGradient id="doveGold" x1="95" y1="78" x2="140" y2="86" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E2B768" />
        <stop offset="1" stopColor="#C99742" />
      </linearGradient>
    </defs>
  </svg>
);

// 5. Pears
export const PearsLogo: React.FC<LogoProps> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 260 90" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="125" y="68" textAnchor="middle" fill="#111111" fontSize="76" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="normal">
      Pears
    </text>
    <text x="245" y="28" fill="#111111" fontSize="14" fontFamily="sans-serif">
      ®
    </text>
  </svg>
);

// 6. Horlicks
export const HorlicksLogo: React.FC<LogoProps> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 280 95" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="horlicksGrad" x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#122B7A" />
        <stop offset="0.5" stopColor="#0072BC" />
        <stop offset="1" stopColor="#0E3D96" />
      </linearGradient>
    </defs>
    {/* 3D background drop */}
    <text
      x="138"
      y="70"
      textAnchor="middle"
      fill="#0B1C4D"
      fontSize="64"
      fontFamily="Impact, sans-serif"
      fontStyle="italic"
      transform="skewX(-10)"
    >
      Horlicks
    </text>
    {/* Main letter face */}
    <text
      x="134"
      y="66"
      textAnchor="middle"
      fill="#FFFFFF"
      stroke="#103282"
      strokeWidth="4"
      fontSize="64"
      fontFamily="Impact, sans-serif"
      fontStyle="italic"
      transform="skewX(-10)"
    >
      Horlicks
    </text>
  </svg>
);

// 7. LUX
export const LuxLogo: React.FC<LogoProps> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 220 95" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* LUX classic gold ribbon signature logo */}
    <path
      d="M15 15V62C15 62 45 68 80 68C115 68 135 55 170 30L195 15H172L145 35C125 50 100 56 75 56H38V15H15Z"
      fill="#B88B4A"
    />
    <path
      d="M72 15V52C72 52 85 58 105 58C125 58 135 48 135 32V15H112V32C112 38 108 42 100 42C92 42 90 38 90 32V15H72Z"
      fill="#B88B4A"
    />
    <path
      d="M142 15L180 62H205L168 15H142Z"
      fill="#B88B4A"
    />
    <path
      d="M15 70C55 70 95 78 140 78C180 78 205 72 220 68C210 74 185 82 140 82C95 82 55 74 15 74V70Z"
      fill="#966F33"
    />
  </svg>
);

// 8. BRU
export const BruLogo: React.FC<LogoProps> = ({ className = 'h-11' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Circular Badge with Gold Trim */}
    <circle cx="60" cy="60" r="56" fill="url(#bruGreen)" stroke="#D4AF37" strokeWidth="4" />
    <defs>
      <radialGradient id="bruGreen" cx="45" cy="45" r="55" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3CB043" />
        <stop offset="0.6" stopColor="#1B6A28" />
        <stop offset="1" stopColor="#0B3E14" />
      </radialGradient>
    </defs>
    {/* Center BRU typography */}
    <text
      x="62"
      y="74"
      textAnchor="middle"
      fill="#0B3512"
      fontSize="44"
      fontFamily="Arial Black, Impact, sans-serif"
      fontWeight="900"
    >
      BRU
    </text>
    <text
      x="60"
      y="71"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="44"
      fontFamily="Arial Black, Impact, sans-serif"
      fontWeight="900"
    >
      BRU
    </text>
  </svg>
);

// 9. CLINIQUE
export const CliniqueLogo: React.FC<LogoProps> = ({ className = 'h-9' }) => (
  <svg viewBox="0 0 280 75" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="12" x2="270" y2="12" stroke="#111111" strokeWidth="2" />
    <text
      x="140"
      y="48"
      textAnchor="middle"
      fill="#111111"
      fontSize="36"
      fontFamily="'Baskerville', 'Didot', 'Bodoni MT', serif"
      fontWeight="500"
      letterSpacing="4"
    >
      CLINIQUE
    </text>
    <line x1="10" y1="62" x2="270" y2="62" stroke="#111111" strokeWidth="2" />
  </svg>
);

// 10. M·A·C
export const MacLogo: React.FC<LogoProps> = ({ className = 'h-8' }) => (
  <svg viewBox="0 0 260 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* M */}
    <path
      d="M20 54V20L50 42L80 20V54H68V34L50 48L32 34V54H20Z"
      fill="#111111"
    />
    {/* Dot 1 */}
    <ellipse cx="98" cy="37" rx="5" ry="4" fill="#111111" />
    {/* A */}
    <path
      d="M106 54L136 18L166 54H151L144 45H128L121 54H106ZM136 29L131 37H141L136 29Z"
      fill="#111111"
    />
    {/* Dot 2 */}
    <ellipse cx="174" cy="37" rx="5" ry="4" fill="#111111" />
    {/* C */}
    <path
      d="M245 22H200C185 22 180 32 180 37C180 42 185 52 200 52H245V44H202C195 44 192 40 192 37C192 34 195 30 202 30H245V22Z"
      fill="#111111"
    />
  </svg>
);

// 11. BOBBI BROWN
export const BobbiBrownLogo: React.FC<LogoProps> = ({ className = 'h-8' }) => (
  <svg viewBox="0 0 280 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text
      x="140"
      y="42"
      textAnchor="middle"
      fill="#111111"
      fontSize="26"
      fontFamily="'Helvetica Neue', Arial, sans-serif"
      fontWeight="400"
      letterSpacing="7"
    >
      BOBBI BROWN
    </text>
  </svg>
);

// 12. CHARMIS
export const CharmisLogo: React.FC<LogoProps> = ({ className = 'h-9' }) => (
  <svg viewBox="0 0 200 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="70" fill="#DE0068" rx="4" />
    <text
      x="100"
      y="46"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="27"
      fontFamily="'Century Gothic', 'Tw Cen MT', sans-serif"
      fontWeight="bold"
      letterSpacing="3"
    >
      CHARMIS
    </text>
  </svg>
);

// 13. 7up
export const SevenUpLogo: React.FC<LogoProps> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 160 110" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Green background lozenge */}
    <path d="M45 10H140L115 100H20L45 10Z" fill="#2BB642" />
    <path d="M45 10L140 10L125 45L40 70L45 10Z" fill="#1C8F30" />
    {/* Stylized 7 */}
    <path
      d="M48 20H100L75 88H55L75 36H48V20Z"
      fill="#FFFFFF"
    />
    {/* Red 'up' Circle */}
    <circle cx="95" cy="58" r="22" fill="#E31828" />
    <text
      x="95"
      y="66"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="20"
      fontWeight="bold"
      fontStyle="italic"
      fontFamily="sans-serif"
    >
      up
    </text>
  </svg>
);

// 14. cherry by kotak
export const CherryLogo: React.FC<LogoProps> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 220 85" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cherry pie icon */}
    <circle cx="110" cy="22" r="16" fill="#D92027" />
    <path d="M110 6C112 0 120 0 125 2" stroke="#2D8C3C" strokeWidth="2.5" strokeLinecap="round" />
    {/* Slices inside cherry */}
    <line x1="110" y1="22" x2="110" y2="6" stroke="#FFFFFF" strokeWidth="1" />
    <line x1="110" y1="22" x2="124" y2="14" stroke="#FFFFFF" strokeWidth="1" />
    <line x1="110" y1="22" x2="124" y2="28" stroke="#FFFFFF" strokeWidth="1" />
    {/* cherry text */}
    <text
      x="110"
      y="58"
      textAnchor="middle"
      fill="#4A4A4A"
      fontSize="26"
      fontFamily="sans-serif"
      fontWeight="bold"
    >
      cherry
    </text>
    {/* by kotak */}
    <text x="75" y="76" fill="#4A4A4A" fontSize="12" fontFamily="sans-serif">
      by
    </text>
    {/* Kotak logo */}
    <circle cx="102" cy="73" r="7" fill="#003366" />
    <circle cx="102" cy="73" r="4" fill="#FFFFFF" />
    <circle cx="102" cy="73" r="2.5" fill="#D92027" />
    <text x="114" y="77" fill="#D92027" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
      kotak
    </text>
  </svg>
);

// 15. CEAT
export const CeatLogo: React.FC<LogoProps> = ({ className = 'h-9' }) => (
  <svg viewBox="0 0 220 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* C */}
    <path
      d="M50 15C30 15 15 25 15 40C15 55 30 65 50 65C62 65 72 60 77 55L68 47C64 51 58 54 50 54C38 54 28 48 28 40C28 32 38 26 50 26C58 26 64 29 68 33L77 25C72 20 62 15 50 15Z"
      fill="#005BAB"
    />
    {/* E in Orange 3 horizontal stripes */}
    <rect x="85" y="16" width="38" height="12" fill="#F37023" />
    <rect x="85" y="34" width="38" height="12" fill="#F37023" />
    <rect x="85" y="52" width="38" height="12" fill="#F37023" />
    {/* A */}
    <path
      d="M130 65L148 16H160L178 65H164L160 52H148L144 65H130ZM151 42H157L154 30L151 42Z"
      fill="#005BAB"
    />
    {/* T */}
    <path
      d="M182 28V16H225V28H209V65H197V28H182Z"
      fill="#005BAB"
    />
  </svg>
);

// 16. SBI General Insurance
export const SbiGeneralLogo: React.FC<LogoProps> = ({ className = 'h-10' }) => (
  <svg viewBox="0 0 280 85" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Purple Pill Container */}
    <rect x="10" y="8" width="260" height="50" rx="25" fill="#601A6F" />
    {/* White pill cutout on left for keyhole */}
    <rect x="12" y="10" width="95" height="46" rx="23" fill="#FFFFFF" />
    {/* Cyan SBI Keyhole logo */}
    <circle cx="45" cy="33" r="14" fill="#00A3E0" />
    <rect x="42" y="33" width="6" height="12" fill="#FFFFFF" />
    <circle cx="45" cy="33" r="4.5" fill="#FFFFFF" />
    {/* SBI text */}
    <text x="64" y="42" fill="#0B2046" fontSize="20" fontWeight="900" fontFamily="sans-serif">
      SBI
    </text>
    {/* general INSURANCE */}
    <text x="114" y="36" fill="#FFFFFF" fontSize="20" fontWeight="bold" fontFamily="sans-serif">
      general
    </text>
    <text x="114" y="49" fill="#FFFFFF" fontSize="9" fontWeight="bold" letterSpacing="1" fontFamily="sans-serif">
      INSURANCE
    </text>
    {/* Slogan */}
    <text x="140" y="75" textAnchor="middle" fill="#20113B" fontSize="9" fontWeight="bold" letterSpacing="1.2" fontFamily="sans-serif">
      SURAKSHA AUR BHAROSA DONO
    </text>
  </svg>
);

// 17. Aaj Tak (आज तक)
export const AajTakLogo: React.FC<LogoProps> = ({ className = 'h-11' }) => (
  <svg viewBox="0 0 150 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Red Trapezoid / Quadrilateral with black outline */}
    <polygon
      points="25,10 135,14 146,110 5,100"
      fill="#D5181E"
      stroke="#111111"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    {/* Hindi Text आज */}
    <text
      x="75"
      y="55"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="44"
      fontWeight="900"
      fontFamily="'Noto Sans Devanagari', 'Mangal', 'Lohit Devanagari', sans-serif"
    >
      आज
    </text>
    {/* Hindi Text तक */}
    <text
      x="75"
      y="96"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="44"
      fontWeight="900"
      fontFamily="'Noto Sans Devanagari', 'Mangal', 'Lohit Devanagari', sans-serif"
    >
      तक
    </text>
  </svg>
);

// 18. NOVOLOGY
export const NovologyLogo: React.FC<LogoProps> = ({ className = 'h-9' }) => (
  <svg viewBox="0 0 280 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text
      x="140"
      y="38"
      textAnchor="middle"
      fill="#111111"
      fontSize="36"
      fontFamily="Arial, sans-serif"
      fontWeight="900"
      letterSpacing="5"
    >
      NOVOLOGY
    </text>
    <text
      x="140"
      y="58"
      textAnchor="middle"
      fill="#111111"
      fontSize="9.5"
      fontFamily="sans-serif"
      fontWeight="bold"
      letterSpacing="2.2"
    >
      CO-CREATED WITH DERMATOLOGISTS
    </text>
  </svg>
);
