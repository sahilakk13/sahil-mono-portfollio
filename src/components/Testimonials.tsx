import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { testimonials } from '../data/testimonials';
import SectionLabel from './SectionLabel';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const current = testimonials[active];

  return (
    <section className="testimonials-reference" ref={ref}>
      <div className="testimonial-sticky container">
        <SectionLabel>(Testimonials)</SectionLabel>
        <div className="testimonial-composition">
          <motion.div className="testimonial-media-card" style={{ x }}>
            <span>({String(active + 1).padStart(2, '0')}/04)</span>
            <strong>Client clarity, product discipline, practical execution.</strong>
          </motion.div>
          <div className="testimonial-panel">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.quote}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                “{current.quote}”
                <footer>
                  <strong>{current.name}</strong>
                  <span>{current.role}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
            <div className="testimonial-controls" aria-label="Testimonial controls">
              {testimonials.map((item, index) => (
                <button
                  data-cursor-label={String(index + 1).padStart(2, '0')}
                  aria-label={`Show testimonial ${index + 1}: ${item.name}`}
                  className={active === index ? 'is-active' : undefined}
                  key={item.name}
                  onClick={() => setActive(index)}
                  type="button"
                >
                  {String(index + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
