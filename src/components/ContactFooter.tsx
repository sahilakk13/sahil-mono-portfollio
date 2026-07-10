import { Link } from 'react-router-dom';
import { contactMedia } from '../data/media';
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

export default function ContactFooter() {
  return (
    <footer className="contact-footer">
      <section className="contact-image-section">
        <div className="contact-backdrop" aria-hidden="true">
          <img src={contactMedia.src} alt="" loading="lazy" />
        </div>
        <div className="contact-side-copy" aria-hidden="true">
          <span>(Contact us)</span>
          <strong>Data, design, and development work built with practical intent.</strong>
        </div>
        <form className="contact-form-panel">
          <span>(Contact us)</span>
          <h2>Let&apos;s talk.</h2>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="hello@example.com" />
          </label>
          <label>
            Project
            <textarea placeholder="Tell me what you are building" />
          </label>
          <button type="submit" data-cursor-label="Send">Send request</button>
        </form>
      </section>
      <div className="section-shell footer-collab">
        <p>Crafting visuals. Shaping systems. Let’s create great work together!</p>
        <Link to="/contact/contact-1" data-cursor-label="Talk">Let’s Collaborate</Link>
      </div>
      <div className="section-shell footer-main-grid">
        <div>
          <strong>Sahil Kumar™</strong>
          <Newsletter />
        </div>
        <nav>
          <span>(Pages)</span>
          {pages.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}
        </nav>
        <div>
          <span>(New Projects / Business)</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>(Location)</span>
          <p>{site.location}</p>
          <span>(Social)</span>
          {site.socials.map((social) => <a href={social.href} key={social.label}>{social.label}</a>)}
        </div>
      </div>
      <div className="section-shell footer-bottom-row">
        <span>© 2026</span>
        <span>React / Vite / TypeScript</span>
      </div>
    </footer>
  );
}
