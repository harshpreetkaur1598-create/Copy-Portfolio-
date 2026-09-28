import { HeroSlide, StatItem, ArchiveSkill, MoodboardTile, BrandLogo, CaseStudy } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    phrase1: ['COPY-PASTE', 'GETS CLOCKED.'],
    phrase2Lines: ['GET COPY, CONCEPTS,', 'AND CONTENT'],
    phrase2Lead: 'THAT ',
    phrase2Accent: 'CONVERTS.',
    subtext: "From hooks that stop the scroll to CTAs that get clicked,\nI write copy that doesn't just grab attention, but guides audiences straight to the bottom of the funnel.",
    ctaText: 'EXPLORE WORK'
  },
  {
    id: 2,
    phrase1: ['WEAK BUCKETS', 'DRAIN BUDGETS.'],
    phrase2Lines: ['INVEST IN STRATEGY', 'DESIGNED FOR'],
    phrase2Lead: '',
    phrase2Accent: 'RETENTION.',
    subtext: 'Research-led insights, impactful storytelling, and sharp strategy as my tools, I go beyond ideation and create blueprints that lead to successful campaigns.',
    ctaText: 'EXPLORE WORK'
  },
  {
    id: 3,
    phrase1: ['TRENDS EXPIRE.', 'STORIES STICK.'],
    phrase2Lines: ['EARN LOYALTY', 'WITH CAMPAIGNS'],
    phrase2Lead: 'THAT ',
    phrase2Accent: 'CLICK.',
    subtext: "Touchpoints aren't just boxes to cross off a checklist; they are opportunities to build trust. I create the narrative foundations needed to turn campaigns into lasting emotional connections.",
    ctaText: 'EXPLORE WORK'
  }
];

export const WORK_STATS: StatItem[] = [
  { id: 'exp', value: '5', label: 'YEARS OF EXP.' },
  { id: 'touchpoints', value: '20+', label: 'TOUCHPOINTS ACED' },
  { id: 'brands', value: '30+', label: 'BRANDS ELEVATED' },
  { id: 'campaigns', value: '50+', label: 'CAMPAIGNS CRAFTED' },
  { id: 'ideas', value: '∞', label: 'IDEAS SPARKED', isAccent: true }
];

export const ARCHIVE_SKILLS: ArchiveSkill[] = [
  { id: '1', name: 'META AD COPY', category: 'Performance Copy' },
  { id: '2', name: 'HIGH-RETENTION HOOKS', category: 'Short-Form Video' },
  { id: '3', name: 'SOCIAL CONTENT COPY', category: 'Social Strategy' },
  { id: '4', name: 'E-COMMERCE CONTENT', category: 'D2C & Retail' },
  { id: '5', name: 'WHATSAPP BROADCAST COPY', category: 'Retention & CRM' },
  { id: '6', name: 'Q-COMM BANNERS', category: 'Quick Commerce' },
  { id: '7', name: 'INFLUENCER SCRIPTWRITING', category: 'Creator Economy' },
  { id: '8', name: 'PDP COPY', category: 'Conversion Optimization' },
  { id: '9', name: 'E-COMM STORE COLLATERALS', category: 'Brand Assets' },
  { id: '10', name: 'RETENTION E-MAILERS', category: 'CRM & Lifecycle' },
  { id: '11', name: 'AI PROMPT ENGINEERING', category: 'Generative Campaigns' },
  { id: '12', name: 'BRAND LEXICON & TAXONOMY', category: 'Brand Architecture' },
  { id: '13', name: 'EVENT & FESTIVAL SCRIPTING', category: 'Experiential' },
  { id: '14', name: 'GAMIFIED CAMPAIGN MECHANICS', category: 'Interactive Marketing' }
];

export const MOODBOARD_ITEMS: MoodboardTile[] = [
  {
    id: 'lakme-retinol',
    title: 'RADIANCE RENEWED',
    brand: 'LAKMĒ',
    subtitle: 'RETINOL ADVANCED RENEWAL',
    tag: 'PRODUCT LAUNCH',
    bgColor: '#9A8C98',
    textColor: '#FFFFFF',
    accentColor: '#FFD166',
    visualType: 'product'
  },
  {
    id: 'eyes-prize',
    title: 'ALL EYES ON THE PRIZE',
    brand: 'CREATIVE PROMO',
    subtitle: 'GAMIFIED DIRECT RESPONSE',
    tag: 'EXPERIENCE DESIGN',
    bgColor: '#38A3A5',
    textColor: '#FFFFFF',
    accentColor: '#F77F00',
    visualType: 'campaign'
  },
  {
    id: 'clinique-365',
    title: 'YOU TOOK THE DAY OFF',
    brand: 'CLINIQUE',
    subtitle: '365 TIMES — MOISTURE SURGE',
    tag: 'RETENTION COPY',
    bgColor: '#7209B7',
    textColor: '#FFFFFF',
    accentColor: '#4CC9F0',
    visualType: 'packaging'
  },
  {
    id: 'novology-mini',
    title: 'FADE MAJOR ACNE WITH A MINI',
    brand: 'NOVOLOGY',
    subtitle: 'Acne Clearing Serum • Co-created with Dermatologists',
    tag: 'PDP & LAUNCH COPY',
    bgColor: '#F4F1DE',
    textColor: '#111111',
    accentColor: '#2B9348',
    visualType: 'skincare'
  },
  {
    id: 'mac-holiday',
    title: 'OFF-SEASON FEAST',
    brand: 'M·A·C COSMETICS',
    subtitle: 'SHADE ANCHORED LEXICON',
    tag: 'D2C COMMERCE',
    bgColor: '#1A1A1A',
    textColor: '#FFFFFF',
    accentColor: '#FF0000',
    visualType: 'product'
  },
  {
    id: 'cornetto-cone',
    title: 'CRUNCH THE DISCOURSE',
    brand: 'CORNETTO X ZOMALAND',
    subtitle: 'MASCOT DIALOGUE & ON-GROUND COPY',
    tag: 'EXPERIENTIAL',
    bgColor: '#E63946',
    textColor: '#FFFFFF',
    accentColor: '#F1FAEE',
    visualType: 'campaign'
  }
];

export const BRAND_LOGOS: BrandLogo[] = [
  // Page 5
  { id: 'clinique', name: 'CLINIQUE', sublabel: 'SKINCARE' },
  { id: 'johnsons', name: "Johnson's baby", sublabel: 'CARE' },
  { id: 'mac', name: 'M · A · C', sublabel: 'COSMETICS' },
  { id: 'bobbi-brown', name: 'BOBBI BROWN', sublabel: 'BEAUTY' },
  { id: '7up', name: '7UP', sublabel: 'BEVERAGE' },
  { id: 'charmis', name: 'CHARMIS', sublabel: 'ITC BEAUTY' },
  
  // Page 6
  { id: 'bonito', name: 'BONITO DESIGNS', sublabel: 'INTERIORS' },
  { id: 'sbi-general', name: 'SBI general INSURANCE', sublabel: 'FINANCE' },
  { id: 'cherry', name: 'cherry by kotak', sublabel: 'INVESTING' },
  { id: 'ceat', name: 'CEAT', sublabel: 'AUTOMOTIVE' },
  { id: 'aaj-tak', name: 'आज तक', sublabel: 'BROADCAST NEWS' },
  { id: 'novology', name: 'NOVOLOGY', sublabel: 'DERMA-SCIENCE' },

  // Page 7
  { id: 'cornetto', name: 'Cornetto', sublabel: 'UNILEVER' },
  { id: 'lakme', name: 'LAKMĒ', sublabel: 'BEAUTY' },
  { id: 'bru', name: 'BRU', sublabel: 'COFFEE' },
  { id: 'lux', name: 'LUX', sublabel: 'PERSONAL CARE' },
  { id: 'horlicks', name: 'Horlicks', sublabel: 'NUTRITION' },

  // Page 8
  { id: 'pears', name: 'Pears', sublabel: 'PURE GENTLE' },
  { id: 'dove', name: 'Dove', sublabel: 'SKINCARE' },
  { id: 'knorr', name: 'Knorr', sublabel: 'CULINARY' },
  { id: 'taj-mahal', name: 'TAJ MAHAL', sublabel: 'TEA HOUSE' },
  { id: 'comfort', name: 'Comfort', sublabel: 'FABRIC CARE' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    categoryTag: 'LAUNCH CAMPAIGNS: LAKMÉ',
    title: 'AHEAD OF THE EVOLUT[AI]ON',
    description: 'Before brands trusted AI for BAU, I mastered nascent generative tools in mid-2024 and brought larger-than-life concepts to social feeds.',
    bullets: [
      'Engineered prompts for launch assets.',
      'Scripted Ananya Panday sustenance content.',
      'Wrote copy for e-commerce assets.'
    ],
    metrics: [
      { label: 'TOP ASSET PERFORMANCE:', value: '' },
      { label: 'VIEWS:', value: '2.5M', isAccent: true },
      { label: 'ER:', value: '3.89%', isAccent: true }
    ],
    wireframeLayout: 'lakme',
    slots: [
      { id: 's1', slotNumber: '01', type: 'video', dimensions: '9:16 REEL', hint: 'ANANYA PANDAY SUSTENANCE FILM' },
      { id: 's2', slotNumber: '02', type: 'visual', dimensions: '1:1 STATIC', hint: 'AI GEN-ASSET HERO VISUAL' },
      { id: 's3', slotNumber: '03', type: 'visual', dimensions: '1:1 STATIC', hint: 'PRODUCT RENEWAL CAROUSEL' },
      { id: 's4', slotNumber: '04', type: 'banner', dimensions: '16:9 BANNER', hint: 'E-COMMERCE HERO BANNER' }
    ]
  },
  {
    id: 2,
    categoryTag: 'PROMO: M.A.C. COSMETICS',
    title: 'OFF-SEASON TRADE TRACTION',
    description: 'Turned an off-season slump into a revenue spike by trading generic sale callouts for gamified real-time storytelling.',
    bullets: [
      'Crafted gamified live concept.',
      'Designed interactive engagement mechanics.',
      'Wrote social, D2C copy.'
    ],
    metrics: [
      { label: 'SALES LIFT:', value: '+85%', isAccent: true },
      { label: 'ENGAGEMENT:', value: '200+ DMS', isAccent: true }
    ],
    wireframeLayout: 'mac-promo',
    slots: [
      { id: 's1', slotNumber: '01', type: 'reel', dimensions: '9:16 VERTICAL', hint: 'INTERACTIVE LIVE TEASER' },
      { id: 's2', slotNumber: '02', type: 'reel', dimensions: '9:16 VERTICAL', hint: 'GAMIFIED DM DISPATCH REEL' },
      { id: 's3', slotNumber: '03', type: 'reel', dimensions: '9:16 VERTICAL', hint: 'OFF-SEASON REVENUE CONVERSION' }
    ]
  },
  {
    id: 3,
    categoryTag: 'CORNETTO X ZOMALAND',
    title: 'MAKING OF A MASCOT',
    description: 'How do you make a newcomer stand out among OG icons? Not with flavor notes, but with character personality.',
    bullets: [
      'Defined campaign positioning.',
      'Curated Zomaland multi-city content strategy.',
      'Directed creator content formats.',
      'Executed live on-ground festival coverage.'
    ],
    metrics: [
      { label: 'ASSETS DEPLOYED:', value: '70+', isAccent: true },
      { label: 'CREATOR COLLABS:', value: '15+', isAccent: true }
    ],
    wireframeLayout: 'cornetto',
    slots: [
      { id: 's1', slotNumber: '01', type: 'video', dimensions: '3:4 POSTER', hint: 'MASCOT REVEAL ANTHEM' },
      { id: 's2', slotNumber: '02', type: 'ad_asset', dimensions: '1:1 GRID', hint: 'FESTIVAL ON-GROUND BANNERS' },
      { id: 's3', slotNumber: '03', type: 'ad_asset', dimensions: '1:1 GRID', hint: 'CREATOR TIKTOK / REEL HOOKS' },
      { id: 's4', slotNumber: '04', type: 'ad_asset', dimensions: '1:1 GRID', hint: 'ZOMALAND BOOTH SCRIPTS' },
      { id: 's5', slotNumber: '05', type: 'ad_asset', dimensions: '1:1 GRID', hint: 'MEME & VIRAL COPIES' },
      { id: 's6', slotNumber: '06', type: 'video', dimensions: '9:16 REEL', hint: 'FESTIVAL AFTERMOVIE NARRATIVE' }
    ]
  },
  {
    id: 4,
    categoryTag: 'MARKET ENTRY: NOVOLOGY',
    title: 'DESIRE SYNTHESIS',
    description: 'Strong narratives can be built on minimal budgets and tight timelines too. Leveraging the creator economy turned scarcity into hype.',
    bullets: [
      'Crafted campaign positioning.',
      'Shaped content strategy.',
      'Directed live event coverage.',
      'Led the content team.'
    ],
    metrics: [
      { label: 'ASSETS DEPLOYED OVER A 2HR RUNTIME:', value: '15+', isAccent: true }
    ],
    wireframeLayout: 'novology',
    slots: [
      { id: 's1', slotNumber: '01', type: 'visual', dimensions: '4:5 CLINICAL', hint: 'DERMA SCIENCE CLINICAL BREAKDOWN' },
      { id: 's2', slotNumber: '02', type: 'reel', dimensions: '1:1 GRID', hint: 'MINI SERUM QUICK-COMM HOOK' },
      { id: 's3', slotNumber: '03', type: 'reel', dimensions: '1:1 GRID', hint: 'DERMATOLOGIST CO-CREATION CLIP' },
      { id: 's4', slotNumber: '04', type: 'banner', dimensions: '16:9 BANNER', hint: 'SCARCITY LAUNCH MICROSITE ASSET' },
      { id: 's5', slotNumber: '05', type: 'video', dimensions: '9:16 TALL', hint: 'LIVE CREATOR RUNTIME HARVEST' }
    ]
  },
  {
    id: 5,
    categoryTag: 'HERO MOMENT: M.A.C COSMETICS',
    title: 'NARRATIVE THREADS',
    description: 'Product, campaigns, and culture are tied together with words that define the narrative. Faced with disconnected festive films, I created an enduring naming taxonomy that moved from local launch to the permanent global brand engine.',
    bullets: [
      'Authored shade-anchored brand lexicon.',
      'Designed integrated launch plan.',
      'Unified visual films to product.'
    ],
    metrics: [
      { label: 'ECOSYSTEM CHANNELS:', value: 'SOCIAL + E-COMM', isAccent: true },
      { label: 'GLOBAL RETENTION:', value: 'PERMANENT ENGINE', isAccent: true }
    ],
    wireframeLayout: 'mac-threads',
    slots: [
      { id: 's1', slotNumber: '01', type: 'reel', dimensions: '9:16 COLUMN', hint: 'SHADE LEXICON HERO FILM 01' },
      { id: 's2', slotNumber: '02', type: 'reel', dimensions: '9:16 COLUMN', hint: 'FESTIVE CULTURAL ANCHOR FILM 02' },
      { id: 's3', slotNumber: '03', type: 'reel', dimensions: '9:16 COLUMN', hint: 'E-COMMERCE UNIFIED CONVERSION 03' }
    ]
  }
];

export const WORK_ARCHIVE_DUMP = [
  {
    id: 'w1',
    title: 'Lakmé 9to5 CC Complexion Care',
    category: 'Meta Ad Copy',
    format: 'Short-Form Hook + Visual Brief',
    results: '3.4x ROAS on Meta ads',
    year: '2024',
    snippet: '"Your 8-hour workday doesn’t need an 8-step routine. One pump. Zero cakiness. Meet the sunscreen-primer-tint hybrid."'
  },
  {
    id: 'w2',
    title: 'Clinique Moisture Surge 100H',
    category: 'Retention E-Mailers',
    format: 'Automated Lifecycle Email Flow',
    results: '38% Open Rate, 9.2% CTR',
    year: '2024',
    snippet: '"Subject: Did your skin just take a deep breath?\nPreheader: 100 hours of dewy resilience. Even after washing your face."'
  },
  {
    id: 'w3',
    title: 'Novology Acne Clearing Trio',
    category: 'PDP Copy',
    format: 'D2C Product Description & Claims',
    results: '+42% PDP add-to-cart rate',
    year: '2024',
    snippet: '"Banish the breakout panic. Formulated with clinical actives dermatologists actually endorse—calibrated for high-humidity Indian skin."'
  },
  {
    id: 'w4',
    title: 'Cornetto Zomaland Mascot Teasers',
    category: 'Influencer Scriptwriting',
    format: 'Creator Dialogues & Reel Prompts',
    results: '70+ creator reels posted',
    year: '2023',
    snippet: '"[Creator looks into camera]: You think you know the crunch? Hold the cone. There is someone new backstage who eats chill for breakfast."'
  },
  {
    id: 'w5',
    title: 'M·A·C Festive Edit',
    category: 'E-Commerce Content',
    format: 'Shade Taxonomy & Collection Guide',
    results: '+85% sales lift in off-season',
    year: '2023',
    snippet: '"Not just red. Ruby Woo is the mic drop before you even enter the room. Velvet Teddy is the quiet confidence that stays long after you leave."'
  },
  {
    id: 'w6',
    title: 'Blinkit / Zepto Festive Sprint',
    category: 'Q-Comm Banners',
    format: '10-minute Delivery Copy Banners',
    results: 'Top-ranking banner CTR 4.8%',
    year: '2024',
    snippet: '"Forgot the dessert? Guests arriving in 12 mins. Gelato delivered in 9. Problem solved before the doorbell rings."'
  },
  {
    id: 'w7',
    title: 'Taj Mahal Tea House Heritage Notes',
    category: 'Social Content Copy',
    format: 'Long-form Storytelling Captions',
    results: '14k Saves & Organic Shares',
    year: '2023',
    snippet: '"Wah Ustad was not a catchphrase; it was the acoustic resonance of patience. Real tea doesn’t rush the steep, and real conversations don’t rush the silence."'
  },
  {
    id: 'w8',
    title: 'SBI General Insurance "Suraksha"',
    category: 'Whatsapp Broadcast Copy',
    format: 'High-Conversion Direct Messaging',
    results: '64% Read Rate',
    year: '2024',
    snippet: '"Security isn’t a PDF you lock in a drawer. It’s knowing tomorrow’s hospital bill won’t disrupt next year’s college fees."'
  }
];
