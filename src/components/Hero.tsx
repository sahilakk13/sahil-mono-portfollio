import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { site } from '../data/site';
import Button from './Button';

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 0.8], [0, -120]);
  const mediaY = useTransform(scrollYProgress, [0.1, 1], [120, -180]);

  return (
    <section className="hero-track" ref={ref} aria-labelledby="home-hero-title">
      <div className="hero-first">
        <div className="hero-hairlines" aria-hidden="true">
          <span className="hero-dot dot-a" />
          <span className="hero-dot dot-b" />
          <span className="hero-dot dot-c" />
          <span className="hero-dot dot-d" />
        </div>
        <motion.div className="hero-services" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: 0.28 } } }}>
          {site.hero.services.map((service) => (
            <motion.span key={service} variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
              {service}
            </motion.span>
          ))}
        </motion.div>
        <motion.div className="hero-statement" initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}>
          <p>{site.hero.statement}</p>
          <Button href="/contact/contact-1" cursorLabel="Talk">Let&apos;s talk</Button>
        </motion.div>
        <p className="hero-meta">© 2026 Sahil Kumar</p>
        <motion.h1 className="hero-title" id="home-hero-title" style={{ y: titleY }}>
          <motion.span initial={{ y: 96, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}>Sahil</motion.span>
          <motion.span initial={{ y: 96, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}>Kumar™</motion.span>
        </motion.h1>
      </div>
      <motion.div className="hero-continuation" style={{ y: mediaY }} aria-hidden="true">
        <div className="hero-continuation__poster poster-a" />
        <div className="hero-continuation__poster poster-b" />
        <div className="hero-continuation__poster poster-c" />
      </motion.div>
    </section>
  );
}
