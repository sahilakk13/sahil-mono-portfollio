import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';

export default function BottomFloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      const footer = document.querySelector<HTMLElement>('.contact-footer');
      const footerTop = footer ? footer.getBoundingClientRect().top + current : Number.POSITIVE_INFINITY;
      const afterWorkStart = current > 3300;
      const nearFooter = current + window.innerHeight > footerTop - 120;
      const scrollingUp = current < last || current < 5200;
      setVisible(afterWorkStart && scrollingUp && !nearFooter);
      last = Math.max(current, 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className="bottom-floating-nav"
      aria-label="Floating navigation"
      initial={false}
      animate={{ y: visible ? 0 : 110, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/">Home</Link>
      <Link to="/work/work-1">Work(4)</Link>
      <Link to="/" className="bottom-brand">{site.name}</Link>
      <Link to="/studio">Studio</Link>
      <Link to="/contact/contact-1">Contact</Link>
    </motion.nav>
  );
}
