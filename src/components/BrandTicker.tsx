import React, { useEffect } from 'react';

// Direct imports of all uploaded brand logo assets
import logoComfort from '../assets/images/Comfort_Logo.PNG';
import logoTMTH from '../assets/images/TMTH_Logo.PNG';
import logoKnorr from '../assets/images/Knorr_Logo.PNG';
import logoDove from '../assets/images/Dove_Logo.PNG';
import logoPears from '../assets/images/Pears_Logo.PNG';
import logoHorlicks from '../assets/images/Horlicks_Logo.PNG';
import logoLux from '../assets/images/Lux_Logo.PNG';
import logoBru from '../assets/images/Bru_Logo.jpg';
import logoClinique from '../assets/images/Clinique_Logo.PNG';
import logoMAC from '../assets/images/MAC_Logo.jpg';
import logoBobbiBrown from '../assets/images/BobbiBrown_Logo.jpg';
import logoCharmis from '../assets/images/Charmis_Logo.jpg';
import logo7Up from '../assets/images/7Up_Logo.jpg';
import logoKotakCherry from '../assets/images/KotakCherry_Logo.jpg';
import logoCEAT from '../assets/images/CEAT_Logo.jpg';
import logoSBIG from '../assets/images/SBIG_Logo.jpg';
import logoAajTak from '../assets/images/AajTak_Logo.PNG';
import logoNovology from '../assets/images/Novology_Logo.jpg';
import logoGlowAndLovely from '../assets/images/Glow_and_Lovely_Logo.PNG';
import logoCornetto from '../assets/images/Cornetto_Logo.JPG';
import logoLakme from '../assets/images/Lakme_Logo.jpg';
import logoPepsodent from '../assets/images/Pepsodent_Logo.PNG';
import logoSurfExcel from '../assets/images/Surf_Excel_Logo.PNG';

interface BrandItem {
  id: string;
  name: string;
  image: string;
  maxHeightClass?: string;
}

// 23 curated client brands, each appearing exactly once in the list
const BRAND_LIST: BrandItem[] = [
  { id: 'comfort', name: 'Comfort', image: logoComfort },
  { id: 'tmth', name: 'Taj Mahal Tea House', image: logoTMTH },
  { id: 'knorr', name: 'Knorr', image: logoKnorr },
  { id: 'dove', name: 'Dove', image: logoDove },
  { id: 'pears', name: 'Pears', image: logoPears },
  { id: 'horlicks', name: 'Horlicks', image: logoHorlicks },
  { id: 'lux', name: 'LUX', image: logoLux },
  { id: 'bru', name: 'BRU', image: logoBru },
  { id: 'clinique', name: 'CLINIQUE', image: logoClinique },
  { id: 'mac', name: 'M · A · C', image: logoMAC },
  { id: 'bobbi-brown', name: 'BOBBI BROWN', image: logoBobbiBrown },
  { id: 'charmis', name: 'CHARMIS', image: logoCharmis },
  { id: '7up', name: '7UP', image: logo7Up },
  { id: 'kotak-cherry', name: 'cherry by kotak', image: logoKotakCherry },
  { id: 'ceat', name: 'CEAT', image: logoCEAT }, // Exactly once
  { id: 'sbi-general', name: 'SBI general', image: logoSBIG },
  { id: 'aaj-tak', name: 'आज तक', image: logoAajTak },
  { id: 'novology', name: 'NOVOLOGY', image: logoNovology },
  { id: 'glow-and-lovely', name: 'Glow & Lovely', image: logoGlowAndLovely },
  { id: 'cornetto', name: 'Cornetto', image: logoCornetto },
  { id: 'lakme', name: 'LAKMĒ', image: logoLakme },
  { id: 'pepsodent', name: 'Pepsodent', image: logoPepsodent },
  { id: 'surf-excel', name: 'Surf Excel', image: logoSurfExcel },
];

export const BrandTicker: React.FC = () => {
  // Clear any legacy localStorage keys from prior sessions
  useEffect(() => {
    try {
      localStorage.removeItem('harshpreet_logo_base_height');
      localStorage.removeItem('harshpreet_custom_logos');
    } catch {
      // Ignore storage errors
    }
  }, []);

  const renderBrandItem = (brand: BrandItem, keyPrefix: string) => {
    return (
      <div
        key={`${keyPrefix}-${brand.id}`}
        className="flex items-center gap-8 sm:gap-12 shrink-0 group px-2"
      >
        <div className="flex items-center justify-center h-14 sm:h-16 px-2">
          <img
            src={brand.image}
            alt={brand.name}
            className="h-9 sm:h-11 w-auto max-w-[170px] sm:max-w-[200px] object-contain transition-transform duration-300 ease-out group-hover:scale-105 pointer-events-none select-none"
            style={{
              mixBlendMode: 'multiply',
              objectFit: 'contain',
            }}
            loading="eager"
            decoding="async"
          />
        </div>
        <span className="text-neutral-300 font-courier text-lg select-none">
          /
        </span>
      </div>
    );
  };

  return (
    <section
      id="brand-ticker-tape"
      className="w-full bg-white py-6 sm:py-8 overflow-hidden select-none relative border-b border-black/5"
      aria-label="Brands I've created for"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-black shrink-0" />
            <h2 className="font-courier text-xs sm:text-sm font-bold uppercase tracking-widest text-black">
              BRANDS I'VE CREATED FOR
            </h2>
          </div>
          <span className="font-courier text-[10px] text-neutral-400 uppercase hidden sm:inline-block">
            [ CONTINUOUS TICKER • HOVER TO PAUSE ]
          </span>
        </div>
      </div>

      {/* Marquee Ticker Track */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left & Right gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Infinite CSS Marquee: 2 identical sequences of all 23 unique brands for seamless loop */}
        <div className="flex w-max animate-ticker items-center">
          {BRAND_LIST.map((brand) => renderBrandItem(brand, 'seq1'))}
          {BRAND_LIST.map((brand) => renderBrandItem(brand, 'seq2'))}
        </div>
      </div>
    </section>
  );
};
