import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { site } from '../data/site';

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const heroLimit = 3520;
      const footer = document.querySelector<HTMLElement>('.site-footer');
      const footerTop = footer ? footer.getBoundingClientRect().top + window.scrollY : Number.POSITIVE_INFINITY;
      const nearFooter = current + window.innerHeight > footerTop - 80;
      const scrollingUp = current < previous;

      setVisible(current > heroLimit && scrollingUp && !nearFooter);
      previous = Math.max(current, 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className="floating-nav"
      aria-label="Floating navigation"
      initial={false}
      animate={{ y: visible ? 0 : '150%', opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <NavLink to="/" data-cursor-label="Home">Home</NavLink>
      <NavLink to="/studio" data-cursor-label="Studio">Studio</NavLink>
      <NavLink className="floating-brand" to="/" data-cursor-label="Home">{site.name}</NavLink>
      <NavLink to="/work/work-1" data-cursor-label="Work">Work (6)</NavLink>
      <NavLink to="/contact/contact-1" data-cursor-label="Contact">Contact</NavLink>
    </motion.nav>
  );
}
