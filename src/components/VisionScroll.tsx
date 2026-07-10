import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const phrases = ['Built Different', 'Design with purpose', 'Code with passion', 'Create with vision', 'Innovate always'];

function VisionPhrase({ phrase, index, progress }: { phrase: string; index: number; progress: MotionValue<number> }) {
  const start = index / phrases.length;
  const center = (index + 0.5) / phrases.length;
  const end = (index + 1) / phrases.length;
  const opacity = useTransform(progress, [start, center, end], [0.08, 1, 0.08]);
  const y = useTransform(progress, [start, center, end], [58, 0, -58]);

  return (
    <motion.h2 style={{ opacity, y }}>
      {phrase}
    </motion.h2>
  );
}

export default function VisionScroll() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section className="vision-scroll" ref={ref}>
      <div className="vision-sticky">
        <span className="vision-label">(Our Vision)</span>
        <div className="vision-phrases">
          {phrases.map((phrase, index) => (
            <VisionPhrase key={phrase} phrase={phrase} index={index} progress={scrollYProgress} />
          ))}
        </div>
        <span className="vision-scroll-label">(Scroll for more)</span>
      </div>
    </section>
  );
}
