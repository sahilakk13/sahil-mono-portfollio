import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const phases = ['Built Different', 'Design with purpose', 'Code with passion', 'Create with vision', 'Innovate always'];

function PhaseText({ text, index, progress }: { text: string; index: number; progress: MotionValue<number> }) {
  const start = index * 0.16;
  const mid = start + 0.08;
  const end = start + 0.18;
  const opacity = useTransform(progress, [start, mid, end], [0, 1, 0]);
  const y = useTransform(progress, [start, mid, end], [54, 0, -54]);
  const filter = useTransform(progress, [start, mid, end], ['blur(2px)', 'blur(0px)', 'blur(2px)']);
  return <motion.h2 style={{ opacity, y, filter }}>{text}</motion.h2>;
}

export default function VisionScrollScene() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const imageOpacity = useTransform(scrollYProgress, [0.84, 0.96], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.84, 1], [0.82, 1]);

  return (
    <section className="vision-scroll-scene" ref={ref}>
      <div className="vision-sticky-inner">
        <div className="vision-support-grid" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="vision-top-label">(Our Vision)</span>
        <div className="vision-phase-stage">
          {phases.map((phase, index) => <PhaseText key={phase} text={phase} index={index} progress={scrollYProgress} />)}
          <motion.div className="vision-final-media" style={{ opacity: imageOpacity, scale: imageScale }}>
            <span />
          </motion.div>
        </div>
        <div className="vision-bottom-label"><i /> (Scroll for more)</div>
      </div>
    </section>
  );
}
