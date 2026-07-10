import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { site } from '../data/site';

export default function TopHeader() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 900, 1500], [1, 1, 0]);
  const y = useTransform(scrollY, [0, 1500], [0, -24]);

  return (
    <motion.header className="top-header" style={{ opacity, y }}>
      <Link to="/" className="top-brand" data-cursor-label="Home">{site.name}</Link>
      <nav aria-label="Primary navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/studio">Studio</NavLink>
        <NavLink to="/work/work-1">Work (4)</NavLink>
        <NavLink to="/blog/blog-1">News</NavLink>
        <NavLink to="/contact/contact-1">Contact</NavLink>
      </nav>
      <Link className="top-cta" to="/contact/contact-1" data-cursor-label="Talk">Let&apos;s talk</Link>
    </motion.header>
  );
}
