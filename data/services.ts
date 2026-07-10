export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 'web-design',
    index: '001',
    title: 'Web Design',
    description: 'Clean, responsive, conversion-focused websites designed with premium spacing, sharp content flow, and simple user journeys.',
  },
  {
    id: 'bi-dashboards',
    index: '002',
    title: 'BI Dashboards',
    description: 'Decision-focused dashboards that turn messy business data into clear visuals, filters, and practical reporting views.',
  },
  {
    id: 'development',
    index: '003',
    title: 'Development',
    description: 'Modern frontend and product development using clean structure, reusable components, and performance-minded implementation.',
  },
  {
    id: 'data-analytics',
    index: '004',
    title: 'Data Analytics',
    description: 'Data cleaning, analysis, modeling, and storytelling that helps teams understand what is happening and what to do next.',
  },
  {
    id: 'seo-optimization',
    index: '005',
    title: 'SEO Optimization',
    description: 'Technical and content-focused optimization plans for better crawlability, structure, page speed, and search visibility.',
  },
];
