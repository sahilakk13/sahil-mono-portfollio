import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { heroMedia } from '../data/media';
import { site } from '../data/site';

export default function HeroScene() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const cardY = useTransform(scrollYProgress, [0, 0.75], [0, -160]);
  const collageY = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <section className="hero-scene" ref={ref}>
      <motion.div className="hero-collage-backdrop" style={{ y: collageY }} aria-hidden="true">
        {heroMedia.map((media, index) => (
          <span className={`collage-tile tile-${['a', 'b', 'c', 'd', 'e'][index]}`} key={media.id}>
            <img src={media.src} alt="" loading={index < 2 ? 'eager' : 'lazy'} />
          </span>
        ))}
      </motion.div>
      <div className="hero-sticky">
        <motion.div className="hero-card" style={{ y: cardY }}>
          <div className="hero-card-grid" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <motion.div className="hero-service-list" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { delayChildren: 1, staggerChildren: 0.055 } } }}>
            {site.hero.services.map((service) => (
              <motion.span key={service} variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
                {service}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="hero-copy" initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p>{site.hero.statement}</p>
            <a href="/contact/contact-1" className="black-pill" data-cursor-label="Talk">Let&apos;s talk</a>
          </motion.div>
          <p className="hero-copyright">© 2026 Sahil Kumar</p>
          <h1 className="hero-split-title">
            <motion.span initial={{ y: 110, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.18, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>Sahil™</motion.span>
            <motion.span initial={{ y: 110, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.26, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>Kumar</motion.span>
          </h1>
        </motion.div>
      </div>
      <div className="white-curve" aria-hidden="true" />
    </section>
  );
}
