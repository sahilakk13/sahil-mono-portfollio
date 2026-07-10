import { Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { showreelMedia } from '../data/media';

export default function ShowreelPinnedScene() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.78, 1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.45, 1, 0.85]);

  return (
    <section className="showreel-pinned-scene" ref={ref}>
      <div className="showreel-sticky-inner">
        <motion.div className="showreel-media-cloud" style={{ opacity }}>
          <span><img src={showreelMedia.poster.src} alt="" loading="lazy" /><i /></span>
          <span><img src={showreelMedia.poster.src} alt="" loading="lazy" /><i /></span>
          <span><img src={showreelMedia.poster.src} alt="" loading="lazy" /><i /></span>
          <span><img src={showreelMedia.poster.src} alt="" loading="lazy" /><i /></span>
        </motion.div>
        <motion.div className="showreel-main-tile" style={{ scale }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={showreelMedia.poster.src}
            aria-label={showreelMedia.video.alt}
          >
            <source src={showreelMedia.video.src} type="video/mp4" />
          </video>
          <div className="showreel-frame-lines" aria-hidden="true"><span /><span /><span /></div>
          <h2>Showreel 26©</h2>
          <button type="button" aria-label="Play showreel" data-cursor-label="Play"><Play size={28} fill="currentColor" /></button>
        </motion.div>
      </div>
    </section>
  );
}
