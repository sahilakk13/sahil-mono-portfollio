export type Project = {
  slug: string;
  title: string;
  year: string;
  type: string;
  services: string[];
  short: string;
  challenge: string;
  solution: string;
  result: string;
  accentLabel: string;
};

export const projects: Project[] = [
  {
    slug: 'edmaxex',
    title: 'EdMaxEx',
    year: '26',
    type: 'SEO / Website Optimization',
    services: ['SEO Audit', 'Technical SEO', 'Content Strategy', 'Performance'],
    short: 'A structured SEO and website optimization plan focused on clearer rankings, better content architecture, and stronger technical performance.',
    challenge: 'The website needed a clearer technical foundation, stronger search visibility, and a more structured roadmap for ranking-focused improvements.',
    solution: 'Created a practical optimization plan covering technical SEO, content hierarchy, metadata, internal links, page speed, schema, and priority implementation steps.',
    result: 'Delivered a clear SEO roadmap that can be implemented step by step without disturbing the existing website experience.',
    accentLabel: 'Growth System',
  },
  {
    slug: 'budgetbites',
    title: 'BudgetBites',
    year: '25',
    type: 'Mobile App',
    services: ['Flutter', 'Firebase', 'Recommendation System', 'UI Flow'],
    short: 'A mobile restaurant discovery app designed around budget-friendly choices and simple customer/restaurant-owner workflows.',
    challenge: 'Users needed a simple way to discover affordable food options while restaurant owners needed a manageable menu and profile system.',
    solution: 'Built Flutter/Firebase flows for customer login, restaurant owner login, menus, reviews, chat, and recommendations.',
    result: 'Produced a functional app concept with clear roles, structured data, and recommendation-driven discovery.',
    accentLabel: 'Mobile Product',
  },
  {
    slug: 'hm-bi-analytics',
    title: 'H&M BI Analytics',
    year: '26',
    type: 'BI / Machine Learning',
    services: ['Power BI', 'Python', 'Machine Learning', 'Data Modeling'],
    short: 'A BI and ML project analyzing customer behavior, repeat purchase patterns, and business-level insights from large-scale fashion data.',
    challenge: 'Large transaction data needed to be converted into actionable business insights and repeat-purchase prediction outputs.',
    solution: 'Built analytical outputs with Python and Power BI, then used machine learning to predict repeat purchase behavior.',
    result: 'Created dashboards, model outputs, and structured insights for customer behavior and sales analysis.',
    accentLabel: 'Data Intelligence',
  },
  {
    slug: 'ai-tryon-system',
    title: 'AI Try-On System',
    year: '26',
    type: 'AI Product',
    services: ['React', 'Supabase', 'Image Workflow', 'Exhibition UX'],
    short: 'An exhibition-ready fashion try-on experience with a polished web interface, output frame, and mobile-friendly QR sharing.',
    challenge: 'The experience needed to feel simple for exhibition users while handling uploads, outputs, and sharing in a polished branded flow.',
    solution: 'Designed and built a React/Supabase web app with guided input, branded output frame, and QR/download behavior.',
    result: 'Delivered a clean hosted product flow ready for public demonstration and testing.',
    accentLabel: 'AI Experience',
  },
  {
    slug: 'leadpilot',
    title: 'LeadPilot',
    year: '26',
    type: 'SaaS / Automation',
    services: ['Next.js', 'Supabase', 'Python Worker', 'Lead Auditing'],
    short: 'A lead generation and business audit system combining dashboard workflows, CSV imports, lead records, and automated analysis.',
    challenge: 'Lead data needed a structured place to live, with repeatable workflows for importing, auditing, and reviewing businesses.',
    solution: 'Created a monorepo SaaS flow with a web dashboard, Supabase data layer, CSV import, and worker-based audit pipeline.',
    result: 'Built the foundation for a practical automation product with organized lead management and audit-ready workflows.',
    accentLabel: 'Automation SaaS',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    year: '26',
    type: 'Interactive Web',
    services: ['React', 'GSAP', 'Three.js', 'Motion Design'],
    short: 'A cinematic personal portfolio direction using interactive storytelling, motion, and data/development-focused positioning.',
    challenge: 'The portfolio needed to stand out visually without becoming unclear or overloaded with animation.',
    solution: 'Structured a premium interactive direction with focused sections, motion storytelling, and clear positioning.',
    result: 'Created a stronger visual foundation for presenting data, development, and product work.',
    accentLabel: 'Interactive Identity',
  },
];
