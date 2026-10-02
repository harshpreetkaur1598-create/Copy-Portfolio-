import { HeroSlide, StatItem, ArchiveSkill, MoodboardTile, BrandLogo, CaseStudy, WorkFeedPost, WorkMediaItem, ArchiveGalleryItem } from '../types';

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
  { id: 'exp', value: '5+', label: 'YEARS OF EXP.' },
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
  { id: '8', name: 'WEBSITE COPY', category: 'Digital Presence' },
  { id: '9', name: 'E-COMM STORE COLLATERALS', category: 'Brand Assets' },
  { id: '10', name: 'RETENTION E-MAILERS', category: 'CRM & Lifecycle' },
  { id: '11', name: 'PERFORMANCE STRATEGY', category: 'Performance Marketing' },
  { id: '12', name: 'CONTENT PLANS', category: 'Content Operations' },
  { id: '13', name: 'CONTENT CALENDARS', category: 'Publishing Architecture' },
  { id: '14', name: 'ANNUAL CONTENT STRATEGY', category: 'Brand Strategy' },
  { id: '15', name: 'BRAND CONTENT AUDIT', category: 'Content Evaluation' },
  { id: '16', name: 'COMPETITOR ANALYSIS', category: 'Market Intelligence' },
  { id: '17', name: 'INSIGHT MINING', category: 'Consumer Research' },
  { id: '18', name: 'TREND FORECASTING & TRACKING', category: 'Cultural Intelligence' }
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
    metricHeading: 'TOP ASSET PERFORMANCE:',
    metrics: [
      { label: 'VIEWS', value: '2.5M', isAccent: true },
      { label: 'ER', value: '3.89%', isAccent: true }
    ],
    wireframeLayout: 'lakme',
    slots: [
      {
        id: 'lakme-ananya-1',
        slotNumber: '01',
        type: 'reel',
        dimensions: '9:16 REEL',
        hint: 'ANANYA PANDAY SUSTENANCE FILM 01 (SCRIPTED BY HARSHPREET)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Ananya_Video_1.mp4'
      },
      {
        id: 'lakme-ananya-2',
        slotNumber: '02',
        type: 'reel',
        dimensions: '9:16 REEL',
        hint: 'ANANYA PANDAY SUSTENANCE FILM 02 (SCRIPTED BY HARSHPREET)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Ananya_Panday_2.mp4'
      },
      {
        id: 'lakme-ananya-3',
        slotNumber: '03',
        type: 'reel',
        dimensions: '9:16 REEL',
        hint: 'ANANYA PANDAY SUSTENANCE FILM 03 (SCRIPTED BY HARSHPREET)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Ananya_Panday_3.mp4'
      },
      {
        id: 'lakme-ai-1',
        slotNumber: '04',
        type: 'video',
        dimensions: 'AI GEN-ASSET',
        hint: 'AI PRE-BUZZ VISUAL 01 (PROMPT ENGINEERED)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Pre_Buzz_2.mp4'
      },
      {
        id: 'lakme-ai-2',
        slotNumber: '05',
        type: 'video',
        dimensions: 'AI GEN-ASSET',
        hint: 'AI PRE-BUZZ VISUAL 02 (PROMPT ENGINEERED)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Ai_Pre_Buzz_1.mp4'
      },
      {
        id: 'lakme-ai-3',
        slotNumber: '06',
        type: 'video',
        dimensions: 'AI GEN-ASSET',
        hint: 'AI PRE-BUZZ VISUAL 03 (PROMPT ENGINEERED)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_bloom_pre_buzz_4.mp4'
      },
      {
        id: 'lakme-ai-4',
        slotNumber: '07',
        type: 'video',
        dimensions: 'AI GEN-ASSET',
        hint: 'AI PRE-BUZZ VISUAL 04 (PROMPT ENGINEERED)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Pre_Buzz_3.mp4'
      },
      {
        id: 'lakme-glaze-1',
        slotNumber: '08',
        type: 'video',
        dimensions: 'AI GEN-ASSET',
        hint: 'LAKMÉ LIP GLAZE AI VISUAL 01 (PROMPT ENGINEERED)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lakme_Lip_Glaze_AI_video_1.mp4'
      },
      {
        id: 'lakme-glaze-2',
        slotNumber: '09',
        type: 'video',
        dimensions: 'AI GEN-ASSET',
        hint: 'LAKMÉ LIP GLAZE AI VISUAL 02 (PROMPT ENGINEERED)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lip_Glaze_AI_2.mp4'
      },
      {
        id: 'lakme-glaze-3',
        slotNumber: '10',
        type: 'video',
        dimensions: 'AI GEN-ASSET',
        hint: 'LAKMÉ LIP GLAZE AI VISUAL 03 (PROMPT ENGINEERED)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lip_Glaze_AI_3.mp4'
      },
      {
        id: 'lakme-glaze-4',
        slotNumber: '11',
        type: 'video',
        dimensions: 'AI GEN-ASSET',
        hint: 'LAKMÉ LIP GLAZE AI VISUAL 04 (PROMPT ENGINEERED)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lip_Glaze_4.mp4'
      }
    ]
  },
  {
    id: 2,
    categoryTag: 'PROMO: M.A.C. COSMETICS',
    title: 'OFF-SEASON TRADE TRACTION',
    description: 'Turned an off-season slump into a revenue spike by trading generic sale callouts for gamified real-time storytelling.',
    bullets: [
      'Conceptualised live gamification through Instagram stories.',
      'Designed interactive engagement mechanics.',
      'Wrote social, D2C copy.'
    ],
    metrics: [
      { label: 'SALES LIFT', value: '+85%', isAccent: true },
      { label: 'ENGAGEMENT', value: '200+ DMS', isAccent: true }
    ],
    wireframeLayout: 'mac-promo',
    slots: [
      {
        id: 'mac-case-study-video',
        slotNumber: '01',
        type: 'reel',
        dimensions: '9:16 VERTICAL',
        hint: 'M·A·C STOCK MARKET CASE STUDY FILM (SCRIPTED BY HARSHPREET)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/MAC_Stock_Market_Case_Study.mp4'
      },
      {
        id: 'mac-screen-1',
        slotNumber: '02',
        type: 'image',
        dimensions: '9:16 VERTICAL',
        hint: 'M·A·C STOCK MARKET: INTERACTIVE LIVE GAMIFICATION (DESIGNED BY HARSHPREET)',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853819/MAC_Stock_Market_1.png'
      },
      {
        id: 'mac-screen-2',
        slotNumber: '03',
        type: 'image',
        dimensions: '9:16 VERTICAL',
        hint: 'M·A·C STOCK MARKET: INTERACTIVE LIVE GAMIFICATION (DESIGNED BY HARSHPREET)',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853819/MAC_Stock_Market_2.png'
      },
      {
        id: 'mac-screen-3',
        slotNumber: '04',
        type: 'image',
        dimensions: '9:16 VERTICAL',
        hint: 'M·A·C STOCK MARKET: INTERACTIVE LIVE GAMIFICATION (DESIGNED BY HARSHPREET)',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853820/MAC_Stock_Market_3.png'
      }
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
      { label: 'ASSETS DEPLOYED', value: '70+', isAccent: true },
      { label: 'CREATOR COLLABS', value: '15+', isAccent: true }
    ],
    wireframeLayout: 'cornetto',
    slots: [
      {
        id: 'cornetto-carousel-1',
        slotNumber: '01',
        type: 'image',
        dimensions: '4:5 CAROUSEL',
        hint: 'CORNETTO MASCOT AUDITION ANNOUNCEMENT CAROUSEL',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730658/Cornetto_flavour_launch_2.png'
      },
      {
        id: 'cornetto-character-reveal',
        slotNumber: '02',
        type: 'image',
        dimensions: '4:5 POST',
        hint: 'CORNETTO OFFICIAL MASCOT CHARACTER ANNOUNCEMENT',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730670/Cornetto_flavour_launch.png'
      },
      {
        id: 'cornetto-event-merch',
        slotNumber: '03',
        type: 'image',
        dimensions: '4:5 POST',
        hint: 'CORNETTO ZOMALAND EVENT MERCHANDISE',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730668/Cornetto_Flavour_launch_3.png'
      },
      {
        id: 'cornetto-video-1',
        slotNumber: '04',
        type: 'reel',
        dimensions: '9:16 REEL',
        hint: 'CORNETTO CREATOR COLLAB REEL 01 (CONCEPTUALISED BY HARSHPREET)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Cornetto_flavour_launch_4.mp4'
      },
      {
        id: 'cornetto-video-2',
        slotNumber: '05',
        type: 'reel',
        dimensions: '9:16 REEL',
        hint: 'CORNETTO CREATOR COLLAB REEL 02 (CONCEPTUALISED BY HARSHPREET)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Cornetto_Flavour_launch_5.mp4'
      },
      {
        id: 'cornetto-video-3',
        slotNumber: '06',
        type: 'reel',
        dimensions: '9:16 REEL',
        hint: 'CORNETTO × ZOMALAND FESTIVAL ANTHEM (CONCEPTUALISED BY HARSHPREET)',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Cornetto_xzomaland.mp4'
      }
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
      { label: '', value: '15+ Assets deployed over 2hr Event Runtime', isAccent: true }
    ],
    wireframeLayout: 'novology',
    slots: [
      {
        id: 'novo-video-invite',
        slotNumber: '01',
        type: 'reel',
        dimensions: '9:16 REEL',
        hint: 'NOVOLOGY PERSONALISED CODED INVITATION',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Novo_launch_3.mp4'
      },
      {
        id: 'novo-video-prkit',
        slotNumber: '02',
        type: 'reel',
        dimensions: '9:16 REEL',
        hint: 'NOVOLOGY INFLUENCER PR KIT UNBOXING',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Novo_launch_2.mp4'
      },
      {
        id: 'novo-video-event-1',
        slotNumber: '03',
        type: 'reel',
        dimensions: '9:16 REEL',
        hint: 'NOVOLOGY ON-GROUND LAUNCH EVENT COVERAGE',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Novo_launch_1.mp4'
      },
      {
        id: 'novo-video-redflags',
        slotNumber: '04',
        type: 'reel',
        dimensions: '9:16 REEL',
        hint: 'NOVOLOGY SKINCARE RED FLAGS CREATOR BYTE',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Novology_Skincare_Red_Flags.mp4'
      },
      {
        id: 'novo-video-event-3',
        slotNumber: '05',
        type: 'reel',
        dimensions: '9:16 REEL',
        hint: 'NOVOLOGY EVENT SHOWCASE & AMBIENCE',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Novology_Event_video_3.mp4'
      }
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
    metrics: [],
    wireframeLayout: 'mac-threads',
    slots: [
      {
        id: 's1',
        slotNumber: '01',
        type: 'image',
        dimensions: '9:16 COLUMN',
        hint: 'M·A·C DIWALI EDIT 01',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853819/Mac_Diwali_Edit_1.png'
      },
      {
        id: 's2',
        slotNumber: '02',
        type: 'image',
        dimensions: '9:16 COLUMN',
        hint: 'M·A·C DIWALI EDIT 02: ORNATE OPULENCE',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853820/MAC_Diwali_Edit_2.png'
      },
      {
        id: 's3',
        slotNumber: '03',
        type: 'image',
        dimensions: '9:16 COLUMN',
        hint: 'M·A·C DIWALI EDIT 03',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853819/MAC_Diwali_Edit_3.png'
      }
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

export const WORK_FEED_POSTS: WorkFeedPost[] = [
  {
    id: 'lakme-launch',
    brandId: 'lakme',
    brandName: 'LAKMĒ',
    brandLogoText: 'LAKMĒ',
    brandCategory: 'LAUNCH CAMPAIGN',
    campaignTitle: 'AHEAD OF THE EVOLUT[AI]ON',
    description: 'Before brands trusted AI for BAU, I mastered nascent generative tools in mid-2024 and brought larger-than-life concepts to social feeds. From prompt engineering for launch assets to scripting Ananya Panday sustenance films and e-commerce copy.',
    items: [
      {
        id: 'lakme-ananya-reel-1',
        type: 'video',
        title: 'Ananya Panday Sustenance Film 01',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Ananya_Video_1.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Celebrity sustenance film scripted by Harshpreet Kaur. Celebrity hook with fast-cut transitions & voiceover rhythm.'
      },
      {
        id: 'lakme-ananya-reel-2',
        type: 'video',
        title: 'Ananya Panday Sustenance Film 02',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Ananya_Panday_2.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'High-energy launch film scripted by Harshpreet Kaur featuring brand ambassador Ananya Panday.'
      },
      {
        id: 'lakme-ananya-reel-3',
        type: 'video',
        title: 'Ananya Panday Sustenance Film 03',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Ananya_Panday_3.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Campaign finale cut scripted by Harshpreet Kaur driving high-intent retail conversion.'
      },
      {
        id: 'lakme-ai-visual-1',
        type: 'video',
        title: 'AI Pre-Buzz Visual 01',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Pre_Buzz_2.mp4',
        dimensionsLabel: 'AI VISUAL',
        aspectRatio: '9:16',
        caption: 'Prompt engineered by Harshpreet Kaur in mid-2024. Futuristic AI aesthetic before AI became BAU.'
      },
      {
        id: 'lakme-ai-visual-2',
        type: 'video',
        title: 'AI Pre-Buzz Visual 02',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Ai_Pre_Buzz_1.mp4',
        dimensionsLabel: 'AI VISUAL',
        aspectRatio: '9:16',
        caption: 'Prompt engineered by Harshpreet Kaur. Ethereal product manifestation and surreal bloom dynamics.'
      },
      {
        id: 'lakme-ai-visual-3',
        type: 'video',
        title: 'AI Pre-Buzz Visual 03',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_bloom_pre_buzz_4.mp4',
        dimensionsLabel: 'AI VISUAL',
        aspectRatio: '9:16',
        caption: 'Prompt engineered by Harshpreet Kaur. Petal-infused texture unveil & color grading.'
      },
      {
        id: 'lakme-ai-visual-4',
        type: 'video',
        title: 'AI Pre-Buzz Visual 04',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Rouge_Bloom_Pre_Buzz_3.mp4',
        dimensionsLabel: 'AI VISUAL',
        aspectRatio: '9:16',
        caption: 'Prompt engineered by Harshpreet Kaur. High-impact visual climax for campaign pre-buzz teaser phase.'
      },
      {
        id: 'lakme-glaze-visual-1',
        type: 'video',
        title: 'Lakmé Lip Glaze AI Visual 01',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lakme_Lip_Glaze_AI_video_1.mp4',
        dimensionsLabel: 'AI VISUAL',
        aspectRatio: '9:16',
        caption: 'Prompt engineered by Harshpreet Kaur. High-shine molten formula aesthetics for Lakmé Lip Glaze.'
      },
      {
        id: 'lakme-glaze-visual-2',
        type: 'video',
        title: 'Lakmé Lip Glaze AI Visual 02',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lip_Glaze_AI_2.mp4',
        dimensionsLabel: 'AI VISUAL',
        aspectRatio: '9:16',
        caption: 'Prompt engineered by Harshpreet Kaur. Macro pigment droplet explosion and light refraction.'
      },
      {
        id: 'lakme-glaze-visual-3',
        type: 'video',
        title: 'Lakmé Lip Glaze AI Visual 03',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lip_Glaze_AI_3.mp4',
        dimensionsLabel: 'AI VISUAL',
        aspectRatio: '9:16',
        caption: 'Prompt engineered by Harshpreet Kaur. Glossy texture reveal & cinematic fluid physics.'
      },
      {
        id: 'lakme-glaze-visual-4',
        type: 'video',
        title: 'Lakmé Lip Glaze AI Visual 04',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lip_Glaze_4.mp4',
        dimensionsLabel: 'AI VISUAL',
        aspectRatio: '9:16',
        caption: 'Prompt engineered by Harshpreet Kaur. Lip Glaze packaging and color saturation showcase.'
      }
    ]
  },
  {
    id: 'mac-promo',
    brandId: 'mac',
    brandName: 'M·A·C COSMETICS',
    brandLogoText: 'M·A·C',
    brandCategory: 'PROMO / DIRECT RESPONSE',
    campaignTitle: 'OFF-SEASON TRADE TRACTION',
    description: 'Turned an off-season slump into a revenue spike by trading generic sale callouts for gamified real-time storytelling. Conceptualized live gamification through Instagram stories, designed interactive engagement mechanics, and wrote social, D2C copy.',
    items: [
      {
        id: 'mac-feed-video-1',
        type: 'video',
        title: 'M·A·C Stock Market Case Study Film',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/MAC_Stock_Market_Case_Study.mp4',
        dimensionsLabel: '9:16 VERTICAL',
        aspectRatio: '9:16',
        caption: 'Complete case study film scripted by Harshpreet Kaur. Detailing the gamified real-time storytelling strategy that drove +85% sales lift.'
      },
      {
        id: 'mac-feed-screen-1',
        type: 'image',
        title: 'Interactive Live Gamification',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853819/MAC_Stock_Market_1.png',
        dimensionsLabel: '9:16 VERTICAL',
        aspectRatio: '9:16',
        caption: 'Interactive live gamification campaign designed by Harshpreet Kaur for M·A·C Cosmetics.'
      },
      {
        id: 'mac-feed-screen-2',
        type: 'image',
        title: 'Interactive Live Gamification',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853819/MAC_Stock_Market_2.png',
        dimensionsLabel: '9:16 VERTICAL',
        aspectRatio: '9:16',
        caption: 'Interactive live gamification campaign designed by Harshpreet Kaur for M·A·C Cosmetics.'
      },
      {
        id: 'mac-feed-screen-3',
        type: 'image',
        title: 'Interactive Live Gamification',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853820/MAC_Stock_Market_3.png',
        dimensionsLabel: '9:16 VERTICAL',
        aspectRatio: '9:16',
        caption: 'Interactive live gamification campaign designed by Harshpreet Kaur for M·A·C Cosmetics.'
      }
    ]
  },
  {
    id: 'cornetto-zomaland',
    brandId: 'cornetto',
    brandName: 'CORNETTO',
    brandLogoText: 'CORNETTO',
    brandCategory: 'EXPERIENTIAL / BRANDING',
    campaignTitle: 'MAKING OF A MASCOT (CORNETTO X ZOMALAND)',
    description: 'How do you make a newcomer stand out among OG icons? Not with flavor notes, but with character personality. Defined campaign positioning, curated Zomaland multi-city content strategy, directed creator content formats, and executed live on-ground festival coverage.',
    items: [
      {
        id: 'cornetto-feed-video-1',
        type: 'video',
        title: 'Festival Creator Collab 01',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Cornetto_flavour_launch_4.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Conceptualised by Harshpreet Kaur. Creator collaboration format enhancing the quirky traits of the new flavor launch character.'
      },
      {
        id: 'cornetto-feed-video-2',
        type: 'video',
        title: 'Festival Creator Collab 02',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Cornetto_Flavour_launch_5.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Conceptualised by Harshpreet Kaur. On-ground flavor tasting and character association challenge.'
      },
      {
        id: 'cornetto-feed-video-3',
        type: 'video',
        title: 'Cornetto × Zomaland Anthem',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Cornetto_xzomaland.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Conceptualised by Harshpreet Kaur. High-energy festival recap celebrating the mascot presence across multi-city stages.'
      },
      {
        id: 'cornetto-feed-carousel-1',
        type: 'image',
        title: 'Audition Announcement Carousel (Cover)',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730658/Cornetto_flavour_launch_2.png',
        dimensionsLabel: '4:5 POST',
        aspectRatio: '4:5',
        caption: 'Mascot talent hunt audition teaser carousel kickoff.'
      },
      {
        id: 'cornetto-feed-carousel-2',
        type: 'image',
        title: 'Audition Criteria & Personality',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730670/Cornetto_flavour_launch_carousel_1.png',
        dimensionsLabel: '4:5 POST',
        aspectRatio: '4:5',
        caption: 'Character personality breakdowns and casting requirements.'
      },
      {
        id: 'cornetto-feed-carousel-3',
        type: 'image',
        title: 'Flavor Association Breakdown',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730669/Cornetto_flavour_launch_carousel_2.png',
        dimensionsLabel: '4:5 POST',
        aspectRatio: '4:5',
        caption: 'Connecting distinct palate notes with mascot behavioral traits.'
      },
      {
        id: 'cornetto-feed-carousel-4',
        type: 'image',
        title: 'Creator Casting Callout',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730664/Cornetto_flavour_launch_carousel_3.jpg',
        dimensionsLabel: '4:5 POST',
        aspectRatio: '4:5',
        caption: 'Direct-to-creator call-to-action for Zomaland auditions.'
      },
      {
        id: 'cornetto-feed-char',
        type: 'image',
        title: 'Official Mascot Character Reveal',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730670/Cornetto_flavour_launch.png',
        dimensionsLabel: '4:5 POST',
        aspectRatio: '4:5',
        caption: 'The final character announcement post introducing the quirky newcomer mascot.'
      },
      {
        id: 'cornetto-feed-merch',
        type: 'image',
        title: 'Zomaland On-Ground Merchandise',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730668/Cornetto_Flavour_launch_3.png',
        dimensionsLabel: '4:5 POST',
        aspectRatio: '4:5',
        caption: 'Limited edition festival merchandise expressing the irreverent personality of the character.'
      }
    ]
  },
  {
    id: 'novology-desire',
    brandId: 'novology',
    brandName: 'NOVOLOGY',
    brandLogoText: 'NOVOLOGY',
    brandCategory: 'MARKET ENTRY',
    campaignTitle: 'DESIRE SYNTHESIS',
    description: 'Strong narratives can be built on minimal budgets and tight timelines too. Leveraging the creator economy turned scarcity into hype. Crafted campaign positioning, shaped content strategy, directed live event coverage, and led the content team.',
    items: [
      {
        id: 'novo-item-1',
        type: 'wireframe',
        title: 'Derma Science Clinical Breakdown',
        dimensionsLabel: '4:5 CLINICAL',
        aspectRatio: '4:5',
        caption: 'Co-created dermatological evidence post validating acne solution claims.'
      },
      {
        id: 'novo-item-2',
        type: 'wireframe',
        title: 'Mini Serum Quick-Comm Hook',
        dimensionsLabel: '1:1 GRID',
        aspectRatio: '1:1',
        caption: 'High-retention product launch clip tailored for 10-minute delivery apps.'
      },
      {
        id: 'novo-item-3',
        type: 'wireframe',
        title: 'Live Creator Runtime Harvest',
        dimensionsLabel: '9:16 TALL',
        aspectRatio: '9:16',
        caption: 'Over 15+ live assets deployed across a continuous 2-hour event runtime.'
      }
    ]
  },
  {
    id: 'mac-threads',
    brandId: 'mac',
    brandName: 'M·A·C COSMETICS',
    brandLogoText: 'M·A·C',
    brandCategory: 'HERO MOMENT',
    campaignTitle: 'NARRATIVE THREADS',
    description: 'Product, campaigns, and culture are tied together with words that define the narrative. Faced with disconnected festive films, I created an enduring naming taxonomy that moved from local launch to the permanent global brand engine.',
    items: [
      {
        id: 'mac-thread-1',
        type: 'image',
        title: 'M·A·C Diwali Edit 01',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853820/MAC_Diwali_Edit_2.png',
        dimensionsLabel: '9:16 COLUMN',
        aspectRatio: '9:16',
        caption: 'Festive edit featuring iconic M·A·C shades and celebratory palette.'
      },
      {
        id: 'mac-thread-2',
        type: 'image',
        title: 'M·A·C Diwali Edit 02',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853819/Mac_Diwali_Edit_1.png',
        dimensionsLabel: '9:16 COLUMN',
        aspectRatio: '9:16',
        caption: 'Shade taxonomy showcase tying product to festive culture.'
      },
      {
        id: 'mac-thread-3',
        type: 'image',
        title: 'M·A·C Diwali Edit 03',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853819/MAC_Diwali_Edit_3.png',
        dimensionsLabel: '9:16 COLUMN',
        aspectRatio: '9:16',
        caption: 'Festive beauty edit and e-commerce conversion campaign static.'
      }
    ]
  },
  {
    id: 'clinique-retention',
    brandId: 'clinique',
    brandName: 'CLINIQUE',
    brandLogoText: 'CLINIQUE',
    brandCategory: 'RETENTION COPY',
    campaignTitle: 'YOU TOOK THE DAY OFF 365 TIMES — MOISTURE SURGE',
    description: '100 hours of dewy resilience. Even after washing your face. Automated lifecycle email copy and D2C product storytelling built for long-term customer retention and habit formation.',
    items: [
      {
        id: 'clinique-item-1',
        type: 'wireframe',
        title: 'Moisture Surge 100H Hero Static',
        dimensionsLabel: '1:1 PACKAGING',
        aspectRatio: '1:1',
        caption: 'Clinical hydra-sensor visual demonstrating 100-hour moisture retention.'
      },
      {
        id: 'clinique-item-2',
        type: 'wireframe',
        title: 'Automated Lifecycle Email Flow',
        dimensionsLabel: '4:5 EDITORIAL',
        aspectRatio: '4:5',
        caption: '38% Open Rate emailer: "Did your skin just take a deep breath?"'
      }
    ]
  },
  {
    id: 'vault-archive',
    brandId: 'archive',
    brandName: 'CONTENT VAULT',
    brandLogoText: 'ARCHIVE',
    brandCategory: 'REELS, FESTIVE & MOMENT MARKETING',
    campaignTitle: 'THE ARCHIVE: HIGH-VELOCITY SOCIAL & CAMPAIGN CONTENT',
    description: 'A dynamic multi-brand curation of creator reels, festive launch films, moment marketing creatives, and D2C campaign assets across Cornetto, Bobbi Brown, Johnson’s Baby, Lakmé, Novology, M·A·C, 7Up, and Clinique.',
    items: [
      {
        id: 'vault-item-1',
        type: 'video',
        title: 'Cornetto BAU Reel',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Cornetto_BAU_2.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Fast-paced BAU reel scripted and conceptualized for Cornetto social handles.'
      },
      {
        id: 'vault-item-2',
        type: 'video',
        title: 'Bobbi Brown Dussehra Festive Reel',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Bobbi_Brown_Dussera.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'High-energy Dussehra festive beauty campaign scripted for Bobbi Brown.'
      },
      {
        id: 'vault-item-3',
        type: 'video',
        title: "Johnson's Baby Halloween Campaign",
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Johnsons_baby_Halloween.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: "Tender, narrative-led Halloween campaign scripted for Johnson's Baby."
      },
      {
        id: 'vault-item-4',
        type: 'video',
        title: 'Lakmé Sunscreen Launch Cut 06',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lakme_sunscreen_launch_6.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'High-octane sunscreen launch reel scripted for Lakmé.'
      },
      {
        id: 'vault-item-5',
        type: 'video',
        title: 'Lakmé Pack Update Reveal',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lakme_pack_update.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Futuristic packaging refresh film scripted for Lakmé.'
      },
      {
        id: 'vault-item-6',
        type: 'video',
        title: 'Novology Mini Wish List',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Novology_Mini_Wish_List.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'D2C festive wishlist conversion film scripted for Novology.'
      },
      {
        id: 'vault-item-7',
        type: 'image',
        title: 'Social Posts Carousel Collection',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790767551/Posts.jpg',
        dimensionsLabel: '16:9 CAROUSEL',
        aspectRatio: '16:9',
        caption: 'Comprehensive curation of high-performing static posts and carousel headlines.'
      },
      {
        id: 'vault-item-8',
        type: 'image',
        title: 'M·A·C Trend Copy',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730665/MAC_trend_Copy.jpg',
        dimensionsLabel: '9:16 EDITORIAL',
        aspectRatio: '9:16',
        caption: 'Trend-jacking beauty editorial copy designed for M·A·C Cosmetics.'
      },
      {
        id: 'vault-item-9',
        type: 'image',
        title: '7Up Moment Marketing Creative',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730660/7Up_Moment_Marketing.png',
        dimensionsLabel: '9:16 CREATIVE',
        aspectRatio: '9:16',
        caption: 'Real-time moment marketing copy conceptualized for 7Up India.'
      },
      {
        id: 'vault-item-10',
        type: 'image',
        title: 'Clinique Pink Friday Promo Copy',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730658/Clinique_Pink_Friday_Copy.png',
        dimensionsLabel: '9:16 RETAIL',
        aspectRatio: '9:16',
        caption: 'Direct response retail conversion poster for Clinique Pink Friday.'
      },
      {
        id: 'vault-item-11',
        type: 'image',
        title: 'Clinique Holi Festive Creative',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730658/Clinique_Holi.png',
        dimensionsLabel: '9:16 FESTIVE',
        aspectRatio: '9:16',
        caption: 'Vibrant cultural storytelling and skincare copy for Clinique Holi campaign.'
      }
    ]
  }
];

export const ARCHIVE_GALLERY_ITEMS: ArchiveGalleryItem[] = [
  {
    id: 'cornetto-bau-2',
    type: 'video',
    brand: 'CORNETTO',
    title: 'Cornetto BAU Reel',
    category: 'REEL / CONTENT',
    videoUrl: 'https://res.cloudinary.com/uybanqfq/video/upload/Cornetto_BAU_2.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Cornetto_BAU_2',
    aspectRatio: 360 / 640 // 0.5625
  },
  {
    id: 'bobbi-brown-dussera',
    type: 'video',
    brand: 'BOBBI BROWN',
    title: 'Dussehra Festive Campaign',
    category: 'FESTIVE / SCRIPT',
    videoUrl: 'https://res.cloudinary.com/uybanqfq/video/upload/Bobbi_Brown_Dussera.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Bobbi_Brown_Dussera',
    aspectRatio: 720 / 1280 // 0.5625
  },
  {
    id: 'johnsons-baby-halloween',
    type: 'video',
    brand: "JOHNSON'S BABY",
    title: 'Halloween Campaign Film',
    category: 'CAMPAIGN / SCRIPT',
    videoUrl: 'https://res.cloudinary.com/uybanqfq/video/upload/Johnsons_baby_Halloween.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Johnsons_baby_Halloween',
    aspectRatio: 720 / 1280 // 0.5625
  },
  {
    id: 'lakme-sunscreen-launch-6',
    type: 'video',
    brand: 'LAKMĒ',
    title: 'Sunscreen Launch Cut 06',
    category: 'LAUNCH SPRINT',
    videoUrl: 'https://res.cloudinary.com/uybanqfq/video/upload/Lakme_sunscreen_launch_6.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Lakme_sunscreen_launch_6',
    aspectRatio: 720 / 1280 // 0.5625
  },
  {
    id: 'lakme-pack-update',
    type: 'video',
    brand: 'LAKMĒ',
    title: 'Pack Update Unveil',
    category: 'PRODUCT PACKAGING',
    videoUrl: 'https://res.cloudinary.com/uybanqfq/video/upload/Lakme_pack_update.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Lakme_pack_update',
    aspectRatio: 720 / 1280 // 0.5625
  },
  {
    id: 'novology-mini-wish-list',
    type: 'video',
    brand: 'NOVOLOGY',
    title: 'Mini Wish List Campaign',
    category: 'D2C CAMPAIGN',
    videoUrl: 'https://res.cloudinary.com/uybanqfq/video/upload/Novology_Mini_Wish_List.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Novology_Mini_Wish_List',
    aspectRatio: 720 / 1280 // 0.5625
  },
  {
    id: 'archive-posts-grid',
    type: 'image',
    brand: 'PORTFOLIO ARCHIVE',
    title: 'Social Posts Collection',
    category: 'CAROUSEL & STATIC DUMP',
    imageUrl: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790767551/Posts.jpg',
    aspectRatio: 858 / 482 // 1.78
  },
  {
    id: 'mac-trend-copy',
    type: 'image',
    brand: 'M·A·C COSMETICS',
    title: 'MAC Trend Copy',
    category: 'PRINT & DIGITAL',
    imageUrl: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730665/MAC_trend_Copy.jpg',
    aspectRatio: 1027 / 1483 // 0.692
  },
  {
    id: '7up-moment-marketing',
    type: 'image',
    brand: '7UP',
    title: 'Moment Marketing Creative',
    category: 'MOMENT MARKETING',
    imageUrl: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730660/7Up_Moment_Marketing.png',
    aspectRatio: 1023 / 1406 // 0.727
  },
  {
    id: 'clinique-pink-friday',
    type: 'image',
    brand: 'CLINIQUE',
    title: 'Pink Friday Copy',
    category: 'PROMO / RETAIL',
    imageUrl: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730658/Clinique_Pink_Friday_Copy.png',
    aspectRatio: 1030 / 1388 // 0.742
  },
  {
    id: 'clinique-holi',
    type: 'image',
    brand: 'CLINIQUE',
    title: 'Holi Festive Campaign',
    category: 'FESTIVE CREATIVE',
    imageUrl: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730658/Clinique_Holi.png',
    aspectRatio: 1033 / 1496 // 0.69
  }
];

