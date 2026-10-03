// Direct imports of brand logos used across the portfolio ticker tape
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
import logoJohnsonsBaby from '../assets/images/JohnsonsBaby_Logo.svg';

const BRAND_LOGO_MAP: Record<string, string> = {
  // Lakme
  'lakme': logoLakme,
  'lakmé': logoLakme,

  // Clinique
  'clinique': logoClinique,

  // Lux
  'lux': logoLux,

  // 7Up
  '7up': logo7Up,

  // Cornetto
  'cornetto': logoCornetto,

  // MAC
  'mac': logoMAC,
  'm.a.c': logoMAC,
  'm·a·c': logoMAC,
  'm.a.c cosmetics': logoMAC,
  'm·a·c cosmetics': logoMAC,

  // Johnson's Baby
  'johnsons-baby': logoJohnsonsBaby,
  'johnsons': logoJohnsonsBaby,
  "johnson's baby": logoJohnsonsBaby,
  "johnson's": logoJohnsonsBaby,

  // Novology
  'novology': logoNovology,

  // SBI General Insurance
  'sbi-general': logoSBIG,
  'sbig': logoSBIG,
  'sbi general insurance': logoSBIG,
  'sbi general': logoSBIG,

  // Bobbi Brown
  'bobbi-brown': logoBobbiBrown,
  'bobbi brown': logoBobbiBrown,

  // Others in portfolio
  'comfort': logoComfort,
  'tmth': logoTMTH,
  'taj mahal tea house': logoTMTH,
  'knorr': logoKnorr,
  'dove': logoDove,
  'pears': logoPears,
  'horlicks': logoHorlicks,
  'bru': logoBru,
  'charmis': logoCharmis,
  'cherry': logoKotakCherry,
  'kotak-cherry': logoKotakCherry,
  'ceat': logoCEAT,
  'aaj-tak': logoAajTak,
  'aaj tak': logoAajTak,
  'glow-and-lovely': logoGlowAndLovely,
  'pepsodent': logoPepsodent,
  'surf-excel': logoSurfExcel,
};

export function getBrandLogo(brandIdOrName?: string): string | null {
  if (!brandIdOrName) return null;
  const normalized = brandIdOrName.trim().toLowerCase();
  
  // Exact lookup
  if (BRAND_LOGO_MAP[normalized]) {
    return BRAND_LOGO_MAP[normalized];
  }

  // Partial matches
  if (normalized.includes('lakm')) return logoLakme;
  if (normalized.includes('clinique')) return logoClinique;
  if (normalized.includes('lux')) return logoLux;
  if (normalized.includes('7up')) return logo7Up;
  if (normalized.includes('cornetto')) return logoCornetto;
  if (normalized.includes('mac') || normalized.includes('m.a.c') || normalized.includes('m·a·c')) return logoMAC;
  if (normalized.includes('johnson')) return logoJohnsonsBaby;
  if (normalized.includes('novology')) return logoNovology;
  if (normalized.includes('sbi')) return logoSBIG;
  if (normalized.includes('bobbi')) return logoBobbiBrown;
  if (normalized.includes('charmis')) return logoCharmis;
  if (normalized.includes('cherry')) return logoKotakCherry;
  if (normalized.includes('dove')) return logoDove;
  if (normalized.includes('horlicks')) return logoHorlicks;

  return null;
}
