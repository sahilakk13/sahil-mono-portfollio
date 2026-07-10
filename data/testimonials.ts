export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: 'The work felt clear, structured, and practical from the first version. Every section had a reason behind it.',
    name: 'Client Partner',
    role: 'Website Project',
  },
  {
    quote: 'The dashboard direction made the data easier to understand and reduced the time spent searching for answers.',
    name: 'Business User',
    role: 'Analytics Project',
  },
  {
    quote: 'The product flow was simple enough for users to follow without explanation, which made the demo much stronger.',
    name: 'Project Owner',
    role: 'AI Product',
  },
  {
    quote: 'Clean execution, fast communication, and a result that looked far more polished than the initial idea.',
    name: 'Remote Client',
    role: 'Development Project',
  },
];
