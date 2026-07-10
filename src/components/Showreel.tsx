import { Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Showreel() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.82, 1, 0.92]);

  return (
    <section className="showreel-reference" ref={ref}>
      <div className="showreel-sticky">
        <h2>Showreel 26©</h2>
        <motion.div className="showreel-frame" style={{ scale }}>
          <div className="showreel-scenes" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <button type="button" aria-label="Play showreel" data-cursor-label="Play">
            <Play size={28} fill="currentColor" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
