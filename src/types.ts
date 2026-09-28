export interface HeroSlide {
  id: number;
  phrase1: string[];
  phrase2Lines?: string[];
  phrase2Lead: string;
  phrase2Accent: string;
  subtext: string;
  ctaText: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  isAccent?: boolean;
}

export interface ArchiveSkill {
  id: string;
  name: string;
  category: string;
  count?: string;
}

export interface MoodboardTile {
  id: string;
  title: string;
  brand: string;
  subtitle: string;
  tag: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  visualType: 'product' | 'packaging' | 'quote' | 'campaign' | 'skincare';
}

export interface BrandLogo {
  id: string;
  name: string;
  fontClass?: string;
  sublabel?: string;
  badgeStyle?: string;
}

export interface WireframeSlot {
  id: string;
  slotNumber: string;
  type: 'video' | 'visual' | 'reel' | 'ad_asset' | 'banner';
  dimensions: string;
  hint: string;
}

export interface CaseStudy {
  id: number;
  categoryTag: string; // e.g. "LAUNCH CAMPAIGNS: LAKMÉ"
  title: string; // e.g. "AHEAD OF THE EVOLUT[AI]ON"
  description: string;
  bullets: string[];
  metrics: {
    label: string;
    value: string;
    isAccent?: boolean;
  }[];
  wireframeLayout: 'lakme' | 'mac-promo' | 'cornetto' | 'novology' | 'mac-threads';
  slots: WireframeSlot[];
}
