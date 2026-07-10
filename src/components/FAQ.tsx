import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import SectionLabel from './SectionLabel';

const faqs = [
  ['What services do you offer?', 'Web design, BI dashboards, frontend development, data analytics, SEO optimization, automation, and AI product flows.'],
  ['How do you determine the right strategy?', 'I start with the goal, audience, constraints, and available data, then shape the simplest useful route from problem to result.'],
  ['How long does a project take?', 'Focused builds usually take one to three weeks. Larger systems are scoped around milestones.'],
  ['Do you work with international clients?', 'Yes. I work from Pakistan with remote clients and collaborators worldwide.'],
  ['Can you build dashboards and websites together?', 'Yes. That is a strong fit when a project needs a polished public experience and useful internal reporting.'],
  ['What do you need before starting?', 'A goal, rough content, examples of taste, access to any required data, and a clear decision maker.'],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-reference">
      <div className="container faq-reference-layout">
        <SectionLabel>(FAQ)</SectionLabel>
        <div className="faq-grid">
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index;
            const id = `faq-${index}`;
            return (
              <div className="faq-item" key={question}>
                <button
                  aria-controls={id}
                  aria-expanded={isOpen}
                  data-cursor-label={isOpen ? 'Close' : 'Open'}
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{question}</strong>
                  <i aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="faq-answer"
                    >
                      <p>{answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
