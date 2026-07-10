import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { portraitMedia } from '../data/media';
import { testimonials } from '../data/testimonials';

export default function TestimonialsPinnedScene() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const rotateA = useTransform(scrollYProgress, [0, 1], [-10, 8]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [8, -12]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setActive(Math.min(3, Math.floor(value * 4)));
  });

  const current = testimonials[active] ?? testimonials[0];

  return (
    <section className="testimonials-pinned-scene" ref={ref}>
      <div className="testimonials-sticky-inner section-shell">
        <span className="testimonial-label">(Testimonials)</span>
        <motion.div className="floating-testimonial-card bg-a" style={{ rotate: rotateA, y }}>
          <img src={portraitMedia[0].src} alt="" loading="lazy" />
        </motion.div>
        <motion.div className="floating-testimonial-card bg-b" style={{ rotate: rotateB }}>
          <img src={portraitMedia[1].src} alt="" loading="lazy" />
        </motion.div>
        <motion.article
          className="testimonial-main-card"
          key={current.quote}
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
        >
          <blockquote>“{current.quote}”</blockquote>
          <footer>
            <strong>{current.name}</strong>
            <span>{current.role}</span>
          </footer>
        </motion.article>
        <div className="testimonial-counter">{String(active + 1).padStart(2, '0')}/04</div>
      </div>
    </section>
  );
}
