import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { site } from '../data/site';

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  if (!open) return null;

  return (
    <motion.div
      className="menu-overlay"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="menu-overlay__top">
        <Link to="/" onClick={onClose}>{site.name}</Link>
        <button type="button" onClick={onClose} data-cursor-label="Close">Close</button>
      </div>
      <div className="menu-overlay__panel">
        <div className="menu-overlay__contact">
          <span>(New Projects / Business)</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>(Location)</span>
          <p>{site.location}</p>
        </div>
        <nav aria-label="Overlay navigation">
          {site.nav.map((item) => (
            <Link key={item.href} to={item.href} onClick={onClose} data-cursor-label={item.label}>
              <span>{item.label === 'Work' ? 'Work (6)' : item.label}</span>
              <span aria-hidden="true">{item.label === 'Work' ? 'Work (6)' : item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
