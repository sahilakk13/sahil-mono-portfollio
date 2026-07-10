import { Link } from 'react-router-dom';
import { site } from '../data/site';
import Newsletter from './Newsletter';

const pages = [
  ['Home', '/'],
  ['Studio', '/studio'],
  ['Work I', '/work/work-1'],
  ['Work II', '/work/work-2'],
  ['Work III', '/work/work-3'],
  ['Blog I', '/blog/blog-1'],
  ['Blog II', '/blog/blog-2'],
  ['Blog III', '/blog/blog-3'],
  ['Contact I', '/contact/contact-1'],
  ['Contact II', '/contact/contact-2'],
  ['Contact III', '/contact/contact-3'],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-topline">
        <p>Crafting visuals. Shaping stories. Let’s create great work together!</p>
        <Link to="/contact/contact-1" data-cursor-label="Talk">Let’s Collaborate</Link>
      </div>
      <div className="container footer-grid">
        <div>
          <strong className="footer-brand">Sahil Kumar™</strong>
          <Newsletter />
        </div>
        <div className="footer-links">
          <span>(Pages)</span>
          <div>
            {pages.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}
          </div>
        </div>
        <div className="footer-contact">
          <span>(New Projects / Business)</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>(Location)</span>
          <p>{site.location}</p>
          <span>(Social)</span>
          <div>{site.socials.map((social) => <a href={social.href} key={social.label}>{social.label}</a>)}</div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026</span>
        <span>React / Vite / TypeScript</span>
      </div>
    </footer>
  );
}
