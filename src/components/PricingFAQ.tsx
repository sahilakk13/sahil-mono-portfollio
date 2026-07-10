import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  ['What services do you offer?', 'Web design, BI dashboards, development, analytics, SEO, automation, and AI product flows.'],
  ['How long does a project take?', 'Focused builds usually take one to three weeks. Larger systems are scoped by milestones.'],
  ['Can dashboards and websites combine?', 'Yes. That is ideal when a project needs both a public experience and practical reporting.'],
  ['Do you work remotely?', 'Yes. I work from Pakistan with clients and collaborators worldwide.'],
];

const plans = [
  ['Starter', '$300', 'Focused pages, compact dashboards, and launch-ready digital presence.'],
  ['Growth', '$700', 'Product flows, richer analytics, stronger content systems, and motion polish.'],
];

export default function PricingFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="pricing-faq">
      <div className="showreel-to-white-curve" aria-hidden="true" />
      <div className="section-shell pricing-layout">
        <div className="pricing-heading">
          <span>(Pricing)</span>
          <h2>Pick Smart.<br />Pay Less.<br />Build Better.</h2>
        </div>
        <div className="pricing-plan-row">
          {plans.map(([name, price, copy]) => (
            <article key={name} className="pricing-card">
              <span>{name}</span>
              <strong>{price}</strong>
              <p>{copy}</p>
              <a className="black-pill" href="/contact/contact-1" data-cursor-label="Book">Book a call</a>
            </article>
          ))}
        </div>
      </div>
      <div className="section-shell faq-layout">
        <span>(FAQ)</span>
        <div className="faq-card-grid">
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <article key={question} className="faq-card">
                <button type="button" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen} data-cursor-label={isOpen ? 'Close' : 'Open'}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{question}</strong>
                  <i />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                      {answer}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
      <div className="section-shell looking-more">
        <div className="avatar-cluster"><span /><span /><span /></div>
        <strong>Looking for more?</strong>
        <a href="/contact/contact-1" className="black-pill" data-cursor-label="Talk">Let&apos;s talk</a>
      </div>
    </section>
  );
}
