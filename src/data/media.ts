export type MediaAsset = {
  id: string;
  src: string;
  local: string;
  alt: string;
  credit: string;
};

const unsplash = (id: string, width = 1800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const heroMedia: MediaAsset[] = [
  {
    id: 'hero-architecture',
    src: unsplash('photo-1518005020951-eccb494ad742', 2000),
    local: '/media/hero-architecture.jpg',
    alt: 'Minimal monochrome architecture facade',
    credit: 'Unsplash sample media, architecture search category',
  },
  {
    id: 'hero-workspace',
    src: unsplash('photo-1497366754035-f200968a6e72', 2000),
    local: '/media/hero-workspace.jpg',
    alt: 'Creative studio workspace with desks and light',
    credit: 'Unsplash sample media, creative studio workspace category',
  },
  {
    id: 'hero-interior',
    src: unsplash('photo-1497366811353-6870744d04b2', 2000),
    local: '/media/hero-interior.jpg',
    alt: 'Modern interior workspace with editorial shadows',
    credit: 'Unsplash sample media, modern interior shadows category',
  },
  {
    id: 'hero-laptop',
    src: unsplash('photo-1483058712412-4245e9b90334', 2000),
    local: '/media/hero-laptop.jpg',
    alt: 'Laptop on a clean creative desk',
    credit: 'Unsplash sample media, web design studio laptop category',
  },
  {
    id: 'hero-studio',
    src: unsplash('photo-1522202176988-66273c2fd55f', 2000),
    local: '/media/hero-studio.jpg',
    alt: 'Studio collaboration workspace',
    credit: 'Unsplash sample media, creative studio category',
  },
];

export const workMedia: Record<string, MediaAsset> = {
  edmaxex: {
    id: 'work-edmaxex',
    src: unsplash('photo-1460925895917-afdab827c52f', 2200),
    local: '/media/work-edmaxex.jpg',
    alt: 'Laptop analytics dashboard for SEO audit visual',
    credit: 'Unsplash sample media, website analytics dashboard category',
  },
  budgetbites: {
    id: 'work-budgetbites',
    src: unsplash('photo-1414235077428-338989a2e8c0', 2200),
    local: '/media/work-budgetbites.jpg',
    alt: 'Restaurant table scene for app product visual',
    credit: 'Unsplash sample media, restaurant table phone/food app category',
  },
  'hm-bi-analytics': {
    id: 'work-hm-bi',
    src: unsplash('photo-1551288049-bebda4e38f71', 2200),
    local: '/media/work-hm-bi.jpg',
    alt: 'Business analytics dashboard screen',
    credit: 'Unsplash sample media, data analytics screen category',
  },
  'ai-tryon-system': {
    id: 'work-ai-tryon',
    src: unsplash('photo-1509631179647-0177331693ae', 2200),
    local: '/media/work-ai-tryon.jpg',
    alt: 'Fashion editorial studio visual for AI try-on system',
    credit: 'Unsplash sample media, fashion editorial category',
  },
  leadpilot: {
    id: 'work-leadpilot',
    src: unsplash('photo-1552664730-d307ca884978', 2200),
    local: '/media/work-leadpilot.jpg',
    alt: 'Business automation workspace for SaaS dashboard visual',
    credit: 'Unsplash sample media, business automation laptop category',
  },
  'portfolio-website': {
    id: 'work-portfolio',
    src: unsplash('photo-1497366811353-6870744d04b2', 2200),
    local: '/media/work-portfolio.jpg',
    alt: 'Premium web design studio workspace',
    credit: 'Unsplash sample media, portfolio website screen category',
  },
};

export const showreelMedia = {
  poster: {
    id: 'showreel-thumb',
    src: unsplash('photo-1492691527719-9d1e07e534b4', 2200),
    local: '/media/showreel-thumb.jpg',
    alt: 'Cinematic camera and creative studio thumbnail',
    credit: 'Unsplash sample media, creative studio video thumbnail category',
  },
  video: {
    id: 'showreel-video',
    src: 'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4',
    local: '/media/showreel.mp4',
    alt: 'Abstract creative studio sample video',
    credit: 'Pexels sample video, abstract black white video category',
  },
};

export const portraitMedia: MediaAsset[] = [
  {
    id: 'portrait-01',
    src: unsplash('photo-1500648767791-00dcc994a43e', 1200),
    local: '/media/portrait-01.jpg',
    alt: 'Generic monochrome professional portrait sample',
    credit: 'Unsplash sample media, creative professional portrait category',
  },
  {
    id: 'portrait-02',
    src: unsplash('photo-1519085360753-af0119f7cbe7', 1200),
    local: '/media/portrait-02.jpg',
    alt: 'Generic business portrait sample',
    credit: 'Unsplash sample media, business portrait black white category',
  },
  {
    id: 'portrait-03',
    src: unsplash('photo-1507003211169-0a1dd7228f2d', 1200),
    local: '/media/portrait-03.jpg',
    alt: 'Generic studio portrait sample',
    credit: 'Unsplash sample media, studio portrait monochrome category',
  },
];

export const successMedia: MediaAsset = {
  id: 'success-story',
  src: unsplash('photo-1556761175-b413da4baf72', 1800),
  local: '/media/success-story.jpg',
  alt: 'Professional collaboration workspace for success story sample',
  credit: 'Unsplash sample media, business portrait/workspace category',
};

export const contactMedia: MediaAsset = {
  id: 'contact-backdrop',
  src: unsplash('photo-1483058712412-4245e9b90334', 2200),
  local: '/media/contact-backdrop.jpg',
  alt: 'Dark creative desk and laptop contact backdrop',
  credit: 'Unsplash sample media, creative developer workspace category',
};

export const allMediaAssets = [
  ...heroMedia,
  ...Object.values(workMedia),
  showreelMedia.poster,
  showreelMedia.video,
  ...portraitMedia,
  successMedia,
  contactMedia,
];
