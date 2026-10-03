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
  // --- PRIMARY WORK BLOCKS (READY TO LINK CONTENT) ---
  {
    id: 'work-lakme-sunscreen-launch',
    brandId: 'lakme',
    brandName: 'Lakmé',
    brandCategory: 'LAUNCH CAMPAIGN',
    campaignTitle: 'Sunscreen launch',
    description: "As Senior Copywriter for Lakmé's Dry Matte Fluid Sunscreen launch, I built the campaign architecture around its core USP: 5-Second Absorption. I created the central selling idea—turning the sun-shielding hand gesture into 'Give Me 5' (5 seconds to absorb + a celebratory high five). The 360° launch spanned pitch ideation, Key Visual design, social launch cuts, experiential pop-ups, live absorption tests, and on-ground college activations.",
    items: [
      {
        id: 'lakme-sunscreen-deck-2',
        type: 'image',
        title: 'Pitch Deck Slide 01: Ideation',
        mediaCategory: 'Pitch Deck Slides',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730665/Lakme_sunscreen_launch_deck_2.jpg',
        dimensionsLabel: '16:9 PITCH DECK',
        aspectRatio: '16:9',
        caption: 'The original strategy slide breaking down consumer hesitation and pitching the 5-second absorption angle.'
      },
      {
        id: 'lakme-sunscreen-deck-1',
        type: 'image',
        title: 'Pitch Deck Slide 02: The Selling Idea',
        mediaCategory: 'Pitch Deck Slides',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730664/Lakme_Sunscreen_launch_deck.jpg',
        dimensionsLabel: '16:9 PITCH DECK',
        aspectRatio: '16:9',
        caption: "The selling idea that sold the room: transforming the sun-shielding hand gesture into 'Give Me 5' (5 seconds to absorb + a celebratory high five)."
      },
      {
        id: 'lakme-sunscreen-kv',
        type: 'image',
        title: 'Campaign Key Visual (KV)',
        mediaCategory: 'Launch Assets',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790767403/IMG_0457.jpg',
        dimensionsLabel: '4:5 KEY VISUAL',
        aspectRatio: '4:5',
        caption: "The finalized hero Key Visual bringing the 'Give Me 5' hand gesture and Dry Matte Fluid pack to life across media."
      },
      {
        id: 'lakme-sunscreen-cut-6',
        type: 'video',
        title: 'Social Launch Cut 06',
        mediaCategory: 'Launch Assets',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929491/Lakme_sunscreen_launch_6.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Fast-paced social launch film scripting the 5-second absorption proposition for mobile feeds.'
      },
      {
        id: 'lakme-sunscreen-cut-5',
        type: 'video',
        title: 'Social Launch Cut 05',
        mediaCategory: 'Launch Assets',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929484/Lakme_sunscreen_launch_5.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Bite-sized social film highlighting the ultra-matte fluid texture and zero-white-cast finish.'
      },
      {
        id: 'lakme-sunscreen-cut-2',
        type: 'video',
        title: 'Metro Interactive Pop-Up Experience',
        mediaCategory: 'On-Ground Activation',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929486/Lakme_sunscreen_launch_2.mp4',
        dimensionsLabel: '9:16 ON-GROUND',
        aspectRatio: '9:16',
        caption: 'Multi-metro experiential pop-up designed with a claw machine, charm bar, 3D display, and automated dispensers so people outdoors could test the 5-second dry matte feel under direct sunlight.'
      },
      {
        id: 'lakme-sunscreen-cut-1',
        type: 'video',
        title: 'Live Public Absorption Test & Reactions',
        mediaCategory: 'On-Ground Activation',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929488/Lakme_sunscreen_launch_1.mp4',
        dimensionsLabel: '9:16 LIVE TEST',
        aspectRatio: '9:16',
        caption: "Real consumers testing the formulation live under the sun, reacting to instant absorption that doesn't even feel like it's there."
      },
      {
        id: 'lakme-sunscreen-cut-7',
        type: 'video',
        title: 'Influencer Absorption Test Amplification',
        mediaCategory: 'Influencer Amplification',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929492/Lakme_sunscreen_launch_7.mp4',
        dimensionsLabel: '9:16 INFLUENCER',
        aspectRatio: '9:16',
        caption: 'Digital creator amplification putting the 5-second absorption clock to the test on camera.'
      },
      {
        id: 'lakme-sunscreen-cut-3',
        type: 'video',
        title: 'College Fest Gen-Z Activation 01',
        mediaCategory: 'College Fest Coverage',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929487/Lakme_sunscreen_launch_3.mp4',
        dimensionsLabel: '9:16 CAMPUS',
        aspectRatio: '9:16',
        caption: 'Bringing the pop-up into college fests to engage Gen Z directly in high-energy outdoor campus grounds.'
      },
      {
        id: 'lakme-sunscreen-cut-4',
        type: 'video',
        title: 'College Fest Gen-Z Activation 02',
        mediaCategory: 'College Fest Coverage',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/Lakme_sunscreen_launch_4.mp4',
        dimensionsLabel: '9:16 SUSTENANCE',
        aspectRatio: '9:16',
        caption: 'Sustenance content capturing youth excitement, high-five photo ops, and mass product trial.'
      }
    ]
  },
  {
    id: 'work-clinique-sunscreen-launch',
    brandId: 'clinique',
    brandName: 'Clinique',
    brandCategory: 'LAUNCH CAMPAIGN',
    campaignTitle: 'Sunscreen launch',
    description: 'This launch happened in collaboration with three influencers to capture an effortlessly fun summer vibe. I ideated and directed the launch film, building the entire creative architecture—from foundational moodboards and visual pacing to high-converting, trend-first social amplification carousels.',
    items: [
      {
        id: 'clinique-sunscreen-launch-ad',
        type: 'video',
        title: 'Clinique Sunscreen Launch Film',
        mediaCategory: 'Launch Film',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929008/Clinique_Launch_Ad.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Ideated and directed the launch film in collaboration with three influencers to capture a fun, high-energy summer vibe.'
      },
      {
        id: 'clinique-sunscreen-moodboard-1',
        type: 'image',
        title: 'Moodboard Carousel // 01',
        mediaCategory: 'Moodboard Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791012666/Screenshot_2026-10-03_125936.png',
        dimensionsLabel: '4:5 MOODBOARD',
        aspectRatio: '4:5',
        caption: 'Creative direction and visual moodboard establishing the vibrant summer atmosphere and influencer styling.'
      },
      {
        id: 'clinique-sunscreen-moodboard-2',
        type: 'image',
        title: 'Moodboard Carousel // 02',
        mediaCategory: 'Moodboard Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791012665/Screenshot_2026-10-03_125918.png',
        dimensionsLabel: '4:5 MOODBOARD',
        aspectRatio: '4:5',
        caption: 'Framing tone, color palette, and candid sunshine moments for multi-influencer content generation.'
      },
      {
        id: 'clinique-sunscreen-moodboard-3',
        type: 'image',
        title: 'Moodboard Carousel // 03',
        mediaCategory: 'Moodboard Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791012665/Screenshot_2026-10-03_125844.png',
        dimensionsLabel: '4:5 MOODBOARD',
        aspectRatio: '4:5',
        caption: 'Product interaction, texture cues, and sun-safety storytelling guidelines.'
      },
      {
        id: 'clinique-sunscreen-trend-1',
        type: 'image',
        title: 'Trend Format Carousel // 01',
        mediaCategory: 'Trend Format Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791012666/Screenshot_2026-10-03_125959.png',
        dimensionsLabel: '1:1 TREND CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Trend-first social format scripted for playful engagement and thumb-stopping discovery.'
      },
      {
        id: 'clinique-sunscreen-trend-2',
        type: 'image',
        title: 'Trend Format Carousel // 02',
        mediaCategory: 'Trend Format Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791012666/Screenshot_2026-10-03_130037.png',
        dimensionsLabel: '1:1 TREND CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Bite-sized visual cues translating SPF benefits into viral social formats.'
      },
      {
        id: 'clinique-sunscreen-trend-3',
        type: 'image',
        title: 'Trend Format Carousel // 03',
        mediaCategory: 'Trend Format Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791012670/Screenshot_2026-10-03_130022.png',
        dimensionsLabel: '1:1 TREND CAROUSEL',
        aspectRatio: '1:1',
        caption: 'High-conversion social cut linking influencer authenticity with clinical sunscreen efficacy.'
      }
    ]
  },
  {
    id: 'work-clinique-topicals',
    brandId: 'clinique',
    brandName: 'Clinique',
    brandCategory: 'BAU, TRENDS & MOMENTS',
    campaignTitle: 'Topicals, Trends & Moments',
    description: 'Topical copywriting, agile trend carousels, and moment marketing for Clinique. Connecting dermatological skincare and hydration with cultural calendar milestones—from Tourism Day to Pink Friday flash drops, festive Holi skincare routines, and viral trend storytelling.',
    items: [
      {
        id: 'clinique-topical-tourism-day',
        type: 'image',
        title: 'World Tourism Day',
        mediaCategory: 'Topical Moment',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790943943/copy_of_posts.jpg',
        dimensionsLabel: '1:1 STATIC',
        aspectRatio: '1:1',
        caption: 'Topical moment creative spotlighting Clinique product minis as essential wanderlust travel companions.'
      },
      {
        id: 'clinique-topical-pink-friday',
        type: 'image',
        title: 'Pink Friday Sale // High-Intent Promo',
        mediaCategory: 'Moment Marketing',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730658/Clinique_Pink_Friday_Copy.png',
        dimensionsLabel: '4:5 STATIC',
        aspectRatio: '4:5',
        caption: 'High-conversion retail offer copy crafted for Clinique’s flagship Pink Friday annual shopping event.'
      },
      {
        id: 'clinique-topical-holi',
        type: 'image',
        title: 'Holi Festival // Skin Prep & Recovery',
        mediaCategory: 'Festive Topical',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730658/Clinique_Holi.png',
        dimensionsLabel: '4:5 STATIC',
        aspectRatio: '4:5',
        caption: 'Festive skin defense guide educating users on pre-Holi barrier prep and post-color deep cleansing.'
      },
      {
        id: 'clinique-trend-carousel-1',
        type: 'image',
        title: 'Clinique Trend Carousel // Slide 01',
        mediaCategory: 'Trend Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791030898/Screenshot_2026-10-03_180422.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'High-engagement trend carousel translating pop beauty conversation into clinical skincare truths.'
      },
      {
        id: 'clinique-trend-carousel-2',
        type: 'image',
        title: 'Clinique Trend Carousel // Slide 02',
        mediaCategory: 'Trend Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791030899/Screenshot_2026-10-03_180430.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Relatable skincare dilemma breakdown highlighting barrier repair and moisture retention.'
      },
      {
        id: 'clinique-trend-carousel-3',
        type: 'image',
        title: 'Clinique Trend Carousel // Slide 03',
        mediaCategory: 'Trend Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791030899/Screenshot_2026-10-03_180445.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Clear, actionable resolution card guiding followers toward Clinique dermatologist-tested essentials.'
      }
    ]
  },
  {
    id: 'work-lakme-retinol-range-ai',
    brandId: 'lakme',
    brandName: 'Lakmé',
    brandCategory: 'AI RANGE LAUNCH',
    campaignTitle: 'Retinol Range AI Launch',
    description: "This was a mini digital launch for which we used AI video and image generation to bring Lakmé's Retinol Range to life. I wrote the prompts, developed the visual concepts, and crafted the copy across all AI films and educational carousels.",
    items: [
      {
        id: 'lakme-retinol-video-1',
        type: 'video',
        title: 'Pack Update // AI Film',
        mediaCategory: 'AI Launch Film',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929485/Lakme_pack_update.mp4',
        dimensionsLabel: '9:16 AI REEL',
        aspectRatio: '9:16',
        caption: 'AI video generation showcasing the updated pack architecture and premium formulation cues.'
      },
      {
        id: 'lakme-retinol-video-2',
        type: 'video',
        title: 'Retinol Routine // AI Film 01',
        mediaCategory: 'AI Launch Film',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929483/Lakme_retinol_1.mp4',
        dimensionsLabel: '9:16 AI REEL',
        aspectRatio: '9:16',
        caption: 'Prompt-engineered AI film visualizing retinol absorption, skin renewal, and radiant hydration.'
      },
      {
        id: 'lakme-retinol-video-3',
        type: 'video',
        title: 'Retinol Renewal // AI Film 02',
        mediaCategory: 'AI Launch Film',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1791015559/Lakme_Retinol_3.mp4',
        dimensionsLabel: '9:16 AI REEL',
        aspectRatio: '9:16',
        caption: 'Dynamic AI video cut crafted with custom prompts to emphasize overnight skin cell turnover.'
      },
      {
        id: 'lakme-retinol-edu1-1',
        type: 'image',
        title: 'Educational Carousel 01 // Slide 01',
        mediaCategory: 'Educational Carousel 01',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015540/Screenshot_2026-10-03_134557.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Cover slide unpacking the gold standard anti-ageing active for modern Indian skincare routines.'
      },
      {
        id: 'lakme-retinol-edu1-2',
        type: 'image',
        title: 'Educational Carousel 01 // Slide 02',
        mediaCategory: 'Educational Carousel 01',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015541/Screenshot_2026-10-03_134609.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Educational breakdown of cellular turnover and fine line smoothing.'
      },
      {
        id: 'lakme-retinol-edu1-3',
        type: 'image',
        title: 'Educational Carousel 01 // Slide 03',
        mediaCategory: 'Educational Carousel 01',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015541/Screenshot_2026-10-03_134622.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Routine guidelines: how to layer with hydrating actives and daily sun protection.'
      },
      {
        id: 'lakme-retinol-edu1-4',
        type: 'image',
        title: 'Educational Carousel 01 // Slide 04',
        mediaCategory: 'Educational Carousel 01',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015541/Screenshot_2026-10-03_134630.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Closing takeaway and regimen checklist driving community saves and shares.'
      },
      {
        id: 'lakme-retinol-edu2-1',
        type: 'image',
        title: 'Educational Carousel 02 // Slide 01',
        mediaCategory: 'Educational Carousel 02',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015542/Screenshot_2026-10-03_134643.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Beginner-friendly introductory hook demystifying common retinol fears.'
      },
      {
        id: 'lakme-retinol-edu2-2',
        type: 'image',
        title: 'Educational Carousel 02 // Slide 02',
        mediaCategory: 'Educational Carousel 02',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015542/Screenshot_2026-10-03_134651.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Concentration guides: starting slow with the sandwich technique for sensitive skin.'
      },
      {
        id: 'lakme-retinol-edu2-3',
        type: 'image',
        title: 'Educational Carousel 02 // Slide 03',
        mediaCategory: 'Educational Carousel 02',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015541/Screenshot_2026-10-03_134658.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Dispelling the purging myth: what to expect in weeks 1 through 4.'
      },
      {
        id: 'lakme-retinol-edu2-4',
        type: 'image',
        title: 'Educational Carousel 02 // Slide 04',
        mediaCategory: 'Educational Carousel 02',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015542/Screenshot_2026-10-03_134705.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Regimen synergies: combining retinol with ceramides and barrier support.'
      },
      {
        id: 'lakme-retinol-edu2-5',
        type: 'image',
        title: 'Educational Carousel 02 // Slide 05',
        mediaCategory: 'Educational Carousel 02',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015542/Screenshot_2026-10-03_134712.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Product lineup and nighttime routine recommendation card.'
      },
      {
        id: 'lakme-retinol-edu3-1',
        type: 'image',
        title: 'Educational Carousel 03 // Slide 01',
        mediaCategory: 'Educational Carousel 03',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015543/Screenshot_2026-10-03_134727.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Visual hook contrasting common skincare misconceptions against dermatological realities.'
      },
      {
        id: 'lakme-retinol-edu3-2',
        type: 'image',
        title: 'Educational Carousel 03 // Slide 02',
        mediaCategory: 'Educational Carousel 03',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015544/Screenshot_2026-10-03_134734.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Deep-dive into skin barrier preservation during early retinol adaptation.'
      },
      {
        id: 'lakme-retinol-edu3-3',
        type: 'image',
        title: 'Educational Carousel 03 // Slide 03',
        mediaCategory: 'Educational Carousel 03',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015545/Screenshot_2026-10-03_134741.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Day-after SPF protection imperatives to lock in overnight renewal benefits.'
      },
      {
        id: 'lakme-retinol-edu3-4',
        type: 'image',
        title: 'Educational Carousel 03 // Slide 04',
        mediaCategory: 'Educational Carousel 03',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791015545/Screenshot_2026-10-03_134748.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Summary checklist and saveable cheat-sheet for daily routine application.'
      }
    ]
  },
  {
    id: 'work-lux-bodywash-ai-launch',
    brandId: 'lux',
    brandName: 'LUX',
    brandCategory: 'AI LAUNCH CAMPAIGN',
    campaignTitle: 'Bodywash AI Launch',
    description: 'This was another AI launch for LUX Bodywash. The assets created were used across performance marketing and social publishing, utilizing AI video and image generation to translate sensorial floral indulgence into high-converting digital creative.',
    items: [
      {
        id: 'lux-bodywash-static-4',
        type: 'image',
        title: 'Sensorial Botanical Key Visual',
        mediaCategory: 'AI Launch Static',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730667/Lux_4.png',
        dimensionsLabel: '4:5 STATIC',
        aspectRatio: '4:5',
        caption: 'AI-generated sensorial key visual crafted for performance campaigns and organic social publishing.'
      },
      {
        id: 'lux-bodywash-video-1',
        type: 'video',
        title: 'Sensorial Cut 01 // Perfume Bloom',
        mediaCategory: 'AI Performance Video',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928829/Lux_1.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'AI video visualizing luxurious fragrance diffusion, rich lather, and soft-focus floral aesthetics.'
      },
      {
        id: 'lux-bodywash-video-2',
        type: 'video',
        title: 'Sensorial Cut 02 // Lather & Glow',
        mediaCategory: 'AI Performance Video',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928830/Lux_2.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Sensory-rich visual cut engineered for mobile feeds, highlighting skin-nourishing botanical oils.'
      },
      {
        id: 'lux-bodywash-video-3',
        type: 'video',
        title: 'Sensorial Cut 03 // Liquid Gold',
        mediaCategory: 'AI Performance Video',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928828/Lux_3.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Performance-led reel script and visual rhythm capturing irresistible indulgence in under 10 seconds.'
      },
      {
        id: 'lux-bodywash-video-5',
        type: 'video',
        title: 'Sensorial Cut 04 // Golden Hour',
        mediaCategory: 'AI Performance Video',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928828/Lux_5.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'High-conversion short-form cut blending prompt-generated motion with aspirational beauty codes.'
      }
    ]
  },
  {
    id: 'work-7up-topicals-bau',
    brandId: '7up',
    brandName: '7Up',
    brandCategory: 'BAU & TOPICALS',
    campaignTitle: 'BAU & Topicals',
    description: 'Always-on BAU storytelling and agile moment marketing for 7Up. Spanning high-energy social video scripts, brand announcements, and reactive topical moments like Victory Day, this work delivers witty conversational copy designed for rapid cultural relevance and feed engagement.',
    items: [
      {
        id: '7up-bau-video-1',
        type: 'video',
        title: '7Up BAU // Social Video',
        mediaCategory: 'BAU Video',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929583/7Up_BAU.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'High-energy BAU reel capturing brand refreshment, playful banter, and quick-witted copy hooks.'
      },
      {
        id: '7up-announcement-video',
        type: 'video',
        title: '7Up Announcement // Video Copy',
        mediaCategory: 'BAU Video',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929576/7Up_announcement_Cooy.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Snappy brand announcement cut scripted for high completion rates and immediate community reaction.'
      },
      {
        id: '7up-victory-day-video',
        type: 'video',
        title: 'Victory Day // Topical Reel',
        mediaCategory: 'Topical Video',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929578/7Up_Victory_day_Copy.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Moment marketing film celebrating Victory Day with celebratory emotion rooted in 7Up refreshment.'
      },
      {
        id: '7up-topical-copy-image',
        type: 'image',
        title: 'Topical Moment // Creative Static',
        mediaCategory: 'Topical Static',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730662/7Up_Topical_Copy.png',
        dimensionsLabel: '4:5 STATIC',
        aspectRatio: '4:5',
        caption: 'Real-time cultural post capitalizing on live conversation trends with punchy, conversational copy.'
      },
      {
        id: '7up-moment-marketing-image',
        type: 'image',
        title: 'Moment Marketing // Social Static',
        mediaCategory: 'Topical Static',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730660/7Up_Moment_Marketing.png',
        dimensionsLabel: '4:5 STATIC',
        aspectRatio: '4:5',
        caption: 'Quick-turnaround topical static leveraging cultural wit and relatable everyday thirst moments.'
      }
    ]
  },
  {
    id: 'work-cornetto-bau',
    brandId: 'cornetto',
    brandName: 'Cornetto',
    brandCategory: 'BAU & TRENDS',
    campaignTitle: 'BAU, Trends & Holiday Carousels',
    description: 'Gen-Z relationship humor, reel scripts, reactive trend-jacking, and holiday carousels for Cornetto. From real-time cultural moments like Squid Game Season 2 to witty New Year & Christmas storytelling, this work captures youth romance and relatable snacking banter.',
    items: [
      {
        id: 'cornetto-bau-reel',
        type: 'video',
        title: 'Cornetto BAU // Reel Script',
        mediaCategory: 'BAU Reel',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929587/Cornetto_BAU_2.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Fast-paced reel script combining dating humor with the irresistible cone-crunch hook.'
      },
      {
        id: 'cornetto-bau-static',
        type: 'image',
        title: 'Cornetto BAU // Conversation Static',
        mediaCategory: 'BAU Static',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791017373/Screenshot_2026-10-03_141848.png',
        dimensionsLabel: '4:5 STATIC',
        aspectRatio: '4:5',
        caption: 'Always-on social banter engineered to spark comments and couple tagging on Instagram.'
      },
      {
        id: 'cornetto-trend-squid-game',
        type: 'image',
        title: 'Trend Jack // Squid Game S2 Release',
        mediaCategory: 'Trend Jack',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791017373/Screenshot_2026-10-03_141746.png',
        dimensionsLabel: '1:1 TREND',
        aspectRatio: '1:1',
        caption: 'Agile pop-culture trend jack tapping into Squid Game Season 2 excitement with playful Cornetto wit.'
      },
      {
        id: 'cornetto-ny-topical',
        type: 'image',
        title: 'New Year Topical // Midnight Craving',
        mediaCategory: 'Topical Static',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730665/Cornetto_BAU_1.png',
        dimensionsLabel: '4:5 STATIC',
        aspectRatio: '4:5',
        caption: 'Celebratory countdown static connecting New Year energy with sweet celebratory indulgence.'
      },
      {
        id: 'cornetto-ny-carousel-1',
        type: 'image',
        title: 'New Year Carousel // Slide 01',
        mediaCategory: 'New Year Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791017371/Screenshot_2026-10-03_141615.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'New Year storytelling carousel exploring relatable dating resolutions and crushes.'
      },
      {
        id: 'cornetto-ny-carousel-2',
        type: 'image',
        title: 'New Year Carousel // Slide 02',
        mediaCategory: 'New Year Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791017370/Screenshot_2026-10-03_141608.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Humorous breakdown of expectations vs. reality when celebrating with someone special.'
      },
      {
        id: 'cornetto-ny-carousel-3',
        type: 'image',
        title: 'New Year Carousel // Slide 03',
        mediaCategory: 'New Year Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791017371/Screenshot_2026-10-03_141625.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Snackable relationship copy designed to maximize saves and story reshares.'
      },
      {
        id: 'cornetto-ny-carousel-4',
        type: 'image',
        title: 'New Year Carousel // Slide 04',
        mediaCategory: 'New Year Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791017370/Screenshot_2026-10-03_141553.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'The ultimate Cornetto resolution: never skipping the chocolate tip.'
      },
      {
        id: 'cornetto-ny-carousel-5',
        type: 'image',
        title: 'New Year Carousel // Slide 05',
        mediaCategory: 'New Year Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791017371/Screenshot_2026-10-03_141637.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Closing wish and call-to-action inviting followers to tag their New Year date.'
      },
      {
        id: 'cornetto-xmas-carousel-1',
        type: 'image',
        title: 'Christmas Carousel // Slide 01',
        mediaCategory: 'Christmas Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791017372/Screenshot_2026-10-03_141711.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Festive holiday carousel exploring cozy winter romance and cute gifting moments.'
      },
      {
        id: 'cornetto-xmas-carousel-2',
        type: 'image',
        title: 'Christmas Carousel // Slide 02',
        mediaCategory: 'Christmas Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791017372/Screenshot_2026-10-03_141723.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Whimsical winter scenarios pairing holiday traditions with sweet Cornetto bites.'
      },
      {
        id: 'cornetto-xmas-carousel-3',
        type: 'image',
        title: 'Christmas Carousel // Slide 03',
        mediaCategory: 'Christmas Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791017373/Screenshot_2026-10-03_141717.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Playful mistletoe banters and witty captions crafted for viral audience engagement.'
      },
      {
        id: 'cornetto-xmas-carousel-4',
        type: 'image',
        title: 'Christmas Carousel // Slide 04',
        mediaCategory: 'Christmas Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791017373/Screenshot_2026-10-03_141732.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Holiday finale card delivering warm holiday greetings and sweet cone recommendations.'
      }
    ]
  },
  {
    id: 'work-mac-trends-topicals',
    brandId: 'mac',
    brandName: 'M.A.C Cosmetics',
    brandCategory: 'TRENDS & TOPICALS',
    campaignTitle: 'Trends, Holiday & Pre-Buzz',
    description: 'Trend-jacking beauty editorial copy, holiday glam narratives, and high-anticipation launch teasers for M.A.C Cosmetics. Translating viral runway aesthetics into thumb-stopping social carousels and driving pre-buzz hype for the flagship Studio Radiance launch.',
    items: [
      {
        id: 'mac-trend-carousel-1',
        type: 'image',
        title: 'Beauty Trend Carousel // Slide 01',
        mediaCategory: 'Trend Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730658/Trend_Copy.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'High-editorial beauty trend storytelling translating viral makeup aesthetics into bold M.A.C artistry.'
      },
      {
        id: 'mac-trend-carousel-2',
        type: 'image',
        title: 'Beauty Trend Carousel // Slide 02',
        mediaCategory: 'Trend Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730670/MAC_trend_Copy_3.png',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Product spotlight and pigment breakdown crafted with sharp, voice-driven beauty copy.'
      },
      {
        id: 'mac-trend-carousel-3',
        type: 'image',
        title: 'Beauty Trend Carousel // Slide 03',
        mediaCategory: 'Trend Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730665/MAC_trend_Copy.jpg',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Step-by-step application guide and finishing recommendation driving community saves and shares.'
      },
      {
        id: 'mac-xmas-carousel-1',
        type: 'image',
        title: 'Holiday Glam Carousel // Slide 01',
        mediaCategory: 'Christmas Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791029474/Screenshot_2026-10-03_173104.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Festive holiday glam hook showcasing show-stopping party makeup inspirations.'
      },
      {
        id: 'mac-xmas-carousel-2',
        type: 'image',
        title: 'Holiday Glam Carousel // Slide 02',
        mediaCategory: 'Christmas Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791029474/Screenshot_2026-10-03_173114.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Curated seasonal shades and glitter accents tailored for festive night-outs.'
      },
      {
        id: 'mac-xmas-carousel-3',
        type: 'image',
        title: 'Holiday Glam Carousel // Slide 03',
        mediaCategory: 'Christmas Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791029474/Screenshot_2026-10-03_173122.png',
        dimensionsLabel: '1:1 CAROUSEL',
        aspectRatio: '1:1',
        caption: 'Holiday gifting curation and finish recommendations to lock in all-night celebration glam.'
      },
      {
        id: 'mac-radiance-prebuzz-1',
        type: 'image',
        title: 'Studio Radiance Pre-Buzz // Teaser 01',
        mediaCategory: 'Launch Teaser',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791029474/Screenshot_2026-10-03_173338.png',
        dimensionsLabel: '1:1 TEASER',
        aspectRatio: '1:1',
        caption: 'Pre-launch teaser building anticipation for M.A.C Studio Radiance Serum-Powered Foundation.'
      },
      {
        id: 'mac-radiance-prebuzz-2',
        type: 'image',
        title: 'Studio Radiance Pre-Buzz // Teaser 02',
        mediaCategory: 'Launch Teaser',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730670/MAC_Studio_Radiance.png',
        dimensionsLabel: '4:5 TEASER',
        aspectRatio: '4:5',
        caption: 'High-impact pre-buzz static highlighting serum hydration, skin barrier glow, and radiant finish.'
      },
      {
        id: 'mac-thread-1',
        type: 'image',
        title: 'Diwali Festive Edit // Glow Edit 01',
        mediaCategory: 'Festive Campaign',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853820/MAC_Diwali_Edit_2.png',
        dimensionsLabel: '9:16 COLUMN',
        aspectRatio: '9:16',
        caption: 'Festive edit featuring iconic M·A·C shades and celebratory celebratory glow palette.'
      },
      {
        id: 'mac-thread-2',
        type: 'image',
        title: 'Diwali Festive Edit // Shade Taxonomy 02',
        mediaCategory: 'Festive Campaign',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853819/Mac_Diwali_Edit_1.png',
        dimensionsLabel: '9:16 COLUMN',
        aspectRatio: '9:16',
        caption: 'Shade taxonomy showcase tying product to Indian festive culture and wedding glam.'
      },
      {
        id: 'mac-thread-3',
        type: 'image',
        title: 'Diwali Festive Edit // Beauty Edit 03',
        mediaCategory: 'Festive Campaign',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790853819/MAC_Diwali_Edit_3.png',
        dimensionsLabel: '9:16 COLUMN',
        aspectRatio: '9:16',
        caption: 'Festive beauty edit and e-commerce conversion campaign static.'
      }
    ]
  },
  {
    id: 'work-johnsons-baby-topicals',
    brandId: 'johnsons-baby',
    brandName: "Johnson's Baby",
    brandCategory: 'TOPICALS & MOMENTS',
    campaignTitle: 'Festive Moments & Topicals',
    description: "Heartwarming festive storytelling and tender moment marketing for Johnson's Baby. Scripting emotionally grounded video films celebrating Ganesh Chaturthi, Krishna Janmashtami, and Halloween through the lens of gentle innocence and parent-baby bonding.",
    items: [
      {
        id: 'jb-ganesh-chaturthi',
        type: 'video',
        title: 'Ganesh Chaturthi // Festive Film',
        mediaCategory: 'Festive Film',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929586/Johnsons_baby_Ganesh_Chaturthi.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Heartwarming festive narrative celebrating little beginnings, sweet modak moments, and gentle childhood blessings.'
      },
      {
        id: 'jb-krishna-janmashtami',
        type: 'video',
        title: 'Krishna Janmashtami // Little Kanha Film',
        mediaCategory: 'Festive Film',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929579/Johnson_s_baby_Krishna_Janamashtami.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Tender festive film capturing the playful innocence, feather crowns, and butter-loving joy of baby Krishna.'
      },
      {
        id: 'jb-halloween',
        type: 'video',
        title: 'Halloween // Gentle Spookiness',
        mediaCategory: 'Topical Film',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790929577/Johnsons_baby_Halloween.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Playful, sweet, and zero-fear Halloween cut celebrating cute costumes and gentle bedtime giggles.'
      }
    ]
  },
  {
    id: 'work-novology-bau-promos',
    brandId: 'novology',
    brandName: 'Novology',
    brandCategory: 'PERFORMANCE, LAUNCHES & BAU',
    campaignTitle: 'Performance, Launches & BAU',
    description: 'End-to-end creative copywriting for Novology, bridging clinical dermatological science with high-converting digital communication. Spanning high-ROAS performance ads, brand anniversary campaigns, pack update announcements, concert trend-jacking, holiday wishlists, and educational science carousels.',
    items: [
      {
        id: 'novo-pma-static-1',
        type: 'image',
        title: 'Performance Ad // Active Barrier Repair',
        mediaCategory: 'Performance Ad',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730657/Novo_PMA_5.png',
        dimensionsLabel: '4:5 PERFORMANCE',
        aspectRatio: '4:5',
        caption: 'High-conversion direct-response static highlighting dermatologist-backed active efficacy.'
      },
      {
        id: 'novo-pma-static-2',
        type: 'image',
        title: 'Performance Ad // Ingredient Spotlight',
        mediaCategory: 'Performance Ad',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730661/Novo_PMA_copy.png',
        dimensionsLabel: '4:5 PERFORMANCE',
        aspectRatio: '4:5',
        caption: 'Punchy ingredient-first copy designed to stop mid-feed scrollers and clarify clinical skin benefits.'
      },
      {
        id: 'novo-pma-static-3',
        type: 'image',
        title: 'Performance Ad // Formulation Proof',
        mediaCategory: 'Performance Ad',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730662/Novo_Pma_3.png',
        dimensionsLabel: '1:1 PERFORMANCE',
        aspectRatio: '1:1',
        caption: 'Focused product proof creative addressing key skincare concerns with clinical clarity.'
      },
      {
        id: 'novo-pma-hook-1',
        type: 'image',
        title: 'Performance Hook // D2C Conversion',
        mediaCategory: 'Performance Hook',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730663/Novology_Hook_1.png',
        dimensionsLabel: '4:5 PERFORMANCE',
        aspectRatio: '4:5',
        caption: 'Direct-to-consumer hook copy tested for maximum click-through rate and product page conversion.'
      },
      {
        id: 'novo-pma-video-4',
        type: 'video',
        title: 'Performance Reel // Active Science Cut 01',
        mediaCategory: 'Performance Reel',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928677/Novo_PMA_4.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'High-retention reel script combining quick visual hooks with active ingredient science.'
      },
      {
        id: 'novo-pma-video-5',
        type: 'video',
        title: 'Performance Reel // Active Science Cut 02',
        mediaCategory: 'Performance Reel',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928677/Novo_PMA_5.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Fast-paced video creative testing problem-agitate-solve angles to drive D2C acquisition.'
      },
      {
        id: 'novo-birthday-video-2',
        type: 'video',
        title: 'Brand Birthday // Celebration Film 01',
        mediaCategory: 'Birthday Campaign',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928755/Novo_Birthday_2.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Milestone celebration video script reflecting on skin science innovation and community trust.'
      },
      {
        id: 'novo-birthday-video-1',
        type: 'video',
        title: 'Brand Birthday // Celebration Film 02',
        mediaCategory: 'Birthday Campaign',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928755/Novo_Birthday_1.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'High-energy birthday promotional reel driving limited-edition anniversary skincare offers.'
      },
      {
        id: 'novo-pack-update-reel-1',
        type: 'video',
        title: 'Pack Update // Launch Reel 01',
        mediaCategory: 'Pack Announcement',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928677/Novology_Pack_Update_Reel.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Sleek pack redesign reveal communicating upgraded clinical aesthetics and ergonomic dispensing.'
      },
      {
        id: 'novo-pack-update-reel-2',
        type: 'video',
        title: 'Pack Update // Launch Reel 02',
        mediaCategory: 'Pack Announcement',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928680/Novology_pack_update_Reel_2.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Dynamic close-up product showcase highlighting new packaging finishes and clinical precision.'
      },
      {
        id: 'novo-no-smell-announcement',
        type: 'video',
        title: 'Formulation Update // Fragrance-Free Announcement',
        mediaCategory: 'Pack Announcement',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928677/Novo_No_smell_announcement.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Consumer-first announcement addressing feedback with an upgraded 100% fragrance-free formula.'
      },
      {
        id: 'novo-concert-video',
        type: 'video',
        title: 'Concert Season // Skin Defense Reel',
        mediaCategory: 'Moment Marketing',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928677/Novology_Concert.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Agile moment video connecting festival sweat, pollution, and late nights with barrier recovery.'
      },
      {
        id: 'novo-trend-static',
        type: 'image',
        title: 'Culture Trend // Agile Topical Static',
        mediaCategory: 'Trend Jack',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730664/Novo_Trend.png',
        dimensionsLabel: '4:5 TREND',
        aspectRatio: '4:5',
        caption: 'Real-time cultural post capitalizing on viral social conversations with clever skincare humor.'
      },
      {
        id: 'novo-xmas-wishlist',
        type: 'video',
        title: 'Holiday Season // Mini Wishlist Reel',
        mediaCategory: 'Holiday Special',
        url: 'https://res.cloudinary.com/uybanqfq/video/upload/v1790928677/Novology_Mini_Wish_List.mp4',
        dimensionsLabel: '9:16 REEL',
        aspectRatio: '9:16',
        caption: 'Festive holiday wishlist cut curating dermatologist-approved winter skincare gifting routines.'
      },
      {
        id: 'novo-edu-carousel-1',
        type: 'image',
        title: 'Derm Education // Slide 01',
        mediaCategory: 'Educational Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730668/Novo_Carousel_1.jpg',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Educational carousel cover breaking down active skincare chemistry into digestible daily routines.'
      },
      {
        id: 'novo-edu-carousel-2',
        type: 'image',
        title: 'Derm Education // Slide 02',
        mediaCategory: 'Educational Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730671/Novo_Carousel_2.jpg',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Ingredient pairing guide explaining which active percentages maximize efficacy without irritation.'
      },
      {
        id: 'novo-edu-carousel-3',
        type: 'image',
        title: 'Derm Education // Slide 03',
        mediaCategory: 'Educational Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730665/Novo_Carousel_3.jpg',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Common skincare myths debunked using peer-reviewed dermatological science and formulation facts.'
      },
      {
        id: 'novo-edu-carousel-4',
        type: 'image',
        title: 'Derm Education // Slide 04',
        mediaCategory: 'Educational Carousel',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790730671/Novo_Carousel_4.jpg',
        dimensionsLabel: '4:5 CAROUSEL',
        aspectRatio: '4:5',
        caption: 'Step-by-step personalized regimen blueprint driving save rates and direct product consideration.'
      }
    ]
  },
  {
    id: 'work-lakme-ecommerce-content',
    brandId: 'lakme',
    brandName: 'Lakmé',
    brandCategory: 'E-COMMERCE & PDP ASSETS',
    campaignTitle: 'E-Commerce Content & A+ Banners',
    description: 'Conversion-optimized e-commerce content architecture for Lakmé across Amazon, Nykaa, and D2C marketplaces. Crafting full-length vertical A+ infographic banners, benefit breakdowns, swatch charts, clinical claim matrices, and step-by-step usage routines designed to maximize add-to-cart rates.',
    items: [
      {
        id: 'lakme-ecomm-aplus-banner',
        type: 'image',
        title: 'Amazon & Nykaa A+ // Full Infographic Banner',
        mediaCategory: 'A+ Rich Content',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790767401/IMG_0548.webp',
        dimensionsLabel: 'A+ INFOGRAPHIC STRIP',
        aspectRatio: '9:16',
        caption: 'Comprehensive vertical A+ content layout combining brand storytelling, ingredient science, and full beauty routine architecture.'
      },
      {
        id: 'lakme-ecomm-si-1',
        type: 'image',
        title: 'E-Comm SI // Benefit Breakdown 01',
        mediaCategory: 'Secondary Image (SI)',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790767401/IMG_0543.jpg',
        dimensionsLabel: '1:1 PDP GALLERY',
        aspectRatio: '1:1',
        caption: 'High-intent secondary listing image breaking down product finish, texture, and active efficacy for e-retail shoppers.'
      },
      {
        id: 'lakme-ecomm-si-2',
        type: 'image',
        title: 'E-Comm SI // Shade & Swatch Proof',
        mediaCategory: 'Secondary Image (SI)',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790767400/IMG_0545.jpg',
        dimensionsLabel: '1:1 PDP GALLERY',
        aspectRatio: '1:1',
        caption: 'Clear, inclusive shade matching and swatch visualization tailored for rapid D2C add-to-cart decisions.'
      },
      {
        id: 'lakme-ecomm-si-3',
        type: 'image',
        title: 'E-Comm SI // Formula & Efficacy Claims',
        mediaCategory: 'Secondary Image (SI)',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790767399/IMG_0544.jpg',
        dimensionsLabel: '1:1 PDP GALLERY',
        aspectRatio: '1:1',
        caption: 'Clinical trial proof points, wear-time metrics, and consumer claims formatted for scannable PDP viewing.'
      },
      {
        id: 'lakme-ecomm-si-4',
        type: 'image',
        title: 'E-Comm SI // How-To Routine Guide',
        mediaCategory: 'Secondary Image (SI)',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790767402/IMG_0547.jpg',
        dimensionsLabel: '1:1 PDP GALLERY',
        aspectRatio: '1:1',
        caption: 'Step-by-step application regimen guiding the shopper from skin prep to final radiant setting.'
      },
      {
        id: 'lakme-ecomm-si-5',
        type: 'image',
        title: 'E-Comm SI // Consumer Results & Proof',
        mediaCategory: 'Secondary Image (SI)',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1790767402/IMG_0546.jpg',
        dimensionsLabel: '1:1 PDP GALLERY',
        aspectRatio: '1:1',
        caption: 'Before-and-after visual proof and key skincare active highlights engineered to reduce return rates.'
      }
    ]
  },
  {
    id: 'work-sbi-general-bau-topicals',
    brandId: 'sbi-general',
    brandName: 'SBI General Insurance',
    brandCategory: 'FINANCE & MOMENT MARKETING',
    campaignTitle: 'BAU & Topical Campaigns',
    description: 'Clear, consumer-first financial communication and cultural moment marketing for SBI General Insurance. Demystifying health, motor, and life protection policies through empathetic social storytelling, actionable risk-preparedness copy, and agile topical creatives.',
    items: [
      {
        id: 'sbig-bau-1',
        type: 'image',
        title: 'Protection BAU // Health & Motor Advisory 01',
        mediaCategory: 'Financial BAU',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791030603/IMG_7798.jpg',
        dimensionsLabel: '4:5 ADVISORY',
        aspectRatio: '4:5',
        caption: 'Accessible, reassuring insurance copy translating complex policy safeguards into relatable daily security.'
      },
      {
        id: 'sbig-bau-2',
        type: 'image',
        title: 'Protection BAU // Policy Safeguard 02',
        mediaCategory: 'Financial BAU',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791030603/IMG_7797.jpg',
        dimensionsLabel: '4:5 ADVISORY',
        aspectRatio: '4:5',
        caption: 'Proactive financial awareness static guiding families through claim confidence and risk prevention.'
      },
      {
        id: 'sbig-topical-1',
        type: 'image',
        title: 'Cultural Topical // Timely Moment Creative',
        mediaCategory: 'Topical Creative',
        url: 'https://res.cloudinary.com/uybanqfq/image/upload/v1791030603/IMG_7796.jpg',
        dimensionsLabel: '4:5 TOPICAL',
        aspectRatio: '4:5',
        caption: 'Agile moment marketing static connecting cultural conversations with essential insurance preparedness.'
      }
    ]
  }
];

// Helper to generate a comprehensive, strictly deduplicated Archive Gallery
// from all campaign media items featured across the portfolio work feed
function buildArchiveGallery(): ArchiveGalleryItem[] {
  const items: ArchiveGalleryItem[] = [];
  const seenUrls = new Set<string>();

  // Include Bobbi Brown Dussehra campaign film
  const bobbiBrownItem: ArchiveGalleryItem = {
    id: 'bobbi-brown-dussera',
    type: 'video',
    brand: 'BOBBI BROWN',
    title: 'Dussehra Festive Campaign',
    category: 'FESTIVE / SCRIPT',
    videoUrl: 'https://res.cloudinary.com/uybanqfq/video/upload/Bobbi_Brown_Dussera.mp4',
    embedUrl: 'https://player.cloudinary.com/embed/?cloud_name=uybanqfq&public_id=Bobbi_Brown_Dussera',
    aspectRatio: 720 / 1280
  };
  items.push(bobbiBrownItem);
  seenUrls.add(bobbiBrownItem.videoUrl!);

  // Flatten every campaign media item across all active work blocks
  for (const post of WORK_FEED_POSTS) {
    for (const media of post.items) {
      if (!media.url || media.type === 'wireframe') continue;

      // Exclude presentation / pitch deck slides from the home page Archive section overview
      // (Deck slides remain in full strategic context on the Work page)
      const isDeckSlide =
        media.id?.toLowerCase().includes('deck') ||
        media.title?.toLowerCase().includes('deck') ||
        media.title?.toLowerCase().includes('pitch deck') ||
        media.mediaCategory?.toLowerCase().includes('deck') ||
        media.dimensionsLabel?.toLowerCase().includes('deck') ||
        media.url?.toLowerCase().includes('deck');

      if (isDeckSlide) continue;

      const cleanUrl = media.url.trim();
      if (seenUrls.has(cleanUrl)) continue;
      seenUrls.add(cleanUrl);

      const isVideo =
        media.type === 'video' ||
        cleanUrl.endsWith('.mp4') ||
        cleanUrl.includes('/video/upload/');

      const ar =
        media.aspectRatio === '1:1'
          ? 1.0
          : media.aspectRatio === '4:5'
          ? 0.8
          : 0.5625;

      items.push({
        id: 'archive-' + media.id,
        type: isVideo ? 'video' : 'image',
        title: media.title || post.campaignTitle,
        brand: post.brandName.toUpperCase(),
        videoUrl: isVideo ? cleanUrl : undefined,
        embedUrl: isVideo ? cleanUrl : undefined,
        imageUrl: !isVideo ? cleanUrl : undefined,
        category: media.mediaCategory || post.brandCategory || 'CAMPAIGN',
        aspectRatio: ar
      });
    }
  }

  return items;
}

export const ARCHIVE_GALLERY_ITEMS: ArchiveGalleryItem[] = buildArchiveGallery();
