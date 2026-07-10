export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'dashboard-decisions',
    title: 'Building dashboards that make decisions easier',
    date: 'November 11, 2026',
    excerpt: 'A good dashboard should reduce confusion, not add another layer of reporting noise.',
    body: [
      'Dashboards work best when they are built around decisions, not just charts.',
      'The goal is to make performance visible, highlight what changed, and help the user understand what action should happen next.',
      'Clear hierarchy, useful filters, and focused KPIs matter more than filling every corner with visuals.',
    ],
  },
  {
    slug: 'idea-to-execution',
    title: 'From idea to execution: building products that last',
    date: 'October 1, 2026',
    excerpt: 'Strong products are shaped through clear constraints, useful flows, and careful execution.',
    body: [
      'A product idea becomes stronger when the flow is simple enough for real users to understand quickly.',
      'Before adding features, it is better to define the core job, the primary user, and the result the product must create.',
      'Execution is not only code. It is structure, polish, speed, and the ability to maintain the product later.',
    ],
  },
  {
    slug: 'portfolio-clarity',
    title: 'Why great portfolios are built on clarity',
    date: 'October 3, 2026',
    excerpt: 'A portfolio should make your direction obvious within seconds.',
    body: [
      'A strong portfolio is not about showing everything. It is about showing the right work with the right framing.',
      'Good case studies explain the problem, the thinking, the execution, and the result without unnecessary noise.',
      'Visual quality matters, but clarity decides whether people understand your value.',
    ],
  },
  {
    slug: 'scalable-digital-systems',
    title: 'Designing digital systems that scale',
    date: 'October 4, 2026',
    excerpt: 'Scalable systems feel simple on the surface because the complexity is handled underneath.',
    body: [
      'A scalable digital system starts with reusable structure and clear data flow.',
      'Design, code, and content should work together instead of being treated as separate layers.',
      'The best systems are easy to extend without breaking the experience already built.',
    ],
  },
];
