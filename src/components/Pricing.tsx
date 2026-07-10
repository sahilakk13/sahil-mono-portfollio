import Button from './Button';
import SectionLabel from './SectionLabel';

const plans = [
  {
    name: 'Starter',
    price: '$300',
    desc: 'Built for focused pages, small dashboards, and launch-ready digital presence.',
    bullets: ['Tailored page layout', 'Responsive interface', 'Core performance pass', 'Clean handoff'],
  },
  {
    name: 'Growth',
    price: '$700',
    desc: 'Designed for product flows, analytics views, and stronger content systems.',
    bullets: ['High-end UI direction', 'Dashboard or app flow', 'Reusable components', 'SEO structure'],
  },
];

export default function Pricing() {
  return (
    <section className="pricing-reference">
      <div className="container pricing-reference-layout">
        <div className="pricing-intro">
          <SectionLabel>(Pricing)</SectionLabel>
          <h2>Pick Smart.<br />Pay Less.<br />Build Better.</h2>
          <p>Choose the plan that fits you best.</p>
        </div>
        <div className="pricing-cards">
          {plans.map((plan) => (
            <article className="price-card" key={plan.name}>
              <div>
                <h3>{plan.name}</h3>
                <p>{plan.desc}</p>
              </div>
              <strong>{plan.price}</strong>
              <ul>
                {plan.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <Button href="/contact/contact-1" cursorLabel="Book">Book a call</Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
