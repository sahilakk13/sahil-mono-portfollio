import { successMedia } from '../data/media';

const stats = [
  ['$40K+', 'decisions supported'],
  ['30%', 'reporting effort reduced'],
  ['20+', 'projects delivered'],
  ['90%+', 'satisfaction target'],
];

export default function StatsSuccessStory() {
  return (
    <section className="stats-success-story">
      <div className="section-shell stats-intro-row">
        <div>
          <span>(Stats)</span>
          <h2>Sahil stands behind the data.</h2>
          <a href="/contact/contact-1" className="white-pill" data-cursor-label="Talk">Get started</a>
        </div>
        <div className="metric-card-grid">
          {stats.map(([value, label], index) => (
            <article className="metric-card" key={value}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{value}</strong>
              <p>{label}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="section-shell success-story-grid">
        <div className="success-image-card">
          <img src={successMedia.src} alt={successMedia.alt} loading="lazy" />
          <span>Measured work</span>
        </div>
        <blockquote className="success-quote-card">
          <span>(Success story)</span>
          “Sahil helped simplify a complex idea into a cleaner product direction, sharper user flow, and a practical build plan that felt ready for real use.”
          <footer>Project Collaborator / Product and analytics work</footer>
        </blockquote>
      </div>
    </section>
  );
}
