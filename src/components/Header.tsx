import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { site } from '../data/site';
import MenuOverlay from './MenuOverlay';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="site-header"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <NavLink className="brand-mark" to="/" aria-label="Sahil Kumar home" data-cursor-label="Home">
          {site.name}
        </NavLink>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <NavLink key={item.href} to={item.href} data-cursor-label={item.label}>
              {item.label === 'Work' ? 'Work (6)' : item.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="hamburger-button"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          data-cursor-label="Menu"
        >
          <span />
          <span />
        </button>
      </motion.header>
      <AnimatePresence>
        <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      </AnimatePresence>
    </>
  );
}
