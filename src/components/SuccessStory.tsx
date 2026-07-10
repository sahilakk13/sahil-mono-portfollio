import ScrollReveal from './ScrollReveal';

export default function SuccessStory() {
  return (
    <section className="success-story">
      <ScrollReveal className="container success-grid">
        <article className="success-media-card" aria-label="Success story context">
          <span>(Measured work)</span>
          <strong>Clearer flow. Cleaner product. Better decisions.</strong>
          <div className="success-card-meta">
            <p>Project direction</p>
            <p>Data + Development</p>
            <p>Remote collaboration</p>
          </div>
        </article>
        <blockquote>
          <span>(Success stories)</span>
          “Sahil helped simplify a complex idea into a cleaner product direction, sharper user flow, and a practical build plan that felt ready for real use.”
          <footer>
            <strong>Project Collaborator</strong>
            <small>Product and analytics work</small>
          </footer>
        </blockquote>
      </ScrollReveal>
    </section>
  );
}
