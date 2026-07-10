import Button from './Button';
import ScrollReveal from './ScrollReveal';

export default function FeatureGrid() {
  return (
    <section className="feature-reference">
      <ScrollReveal className="container feature-reference-grid">
        <div className="feature-card pricing-note">
          <p>Sahil Kumar™</p>
          <h2>Pricing with complete transparency</h2>
          <Button href="/contact/contact-1" cursorLabel="Pricing">View pricing</Button>
        </div>
        <div className="feature-card metric-note">
          <p>(Performance Boost)</p>
          <h3>Page speed +78%</h3>
          <span>Bounce rate -13%</span>
        </div>
        <div className="feature-card chat-note">
          <p>(Live collaboration)</p>
          <div className="chat-bubble">Can we sharpen the dashboard flow?</div>
          <div className="chat-bubble is-reply">Yes. I’ll simplify the hierarchy today.</div>
        </div>
        <div className="feature-card identity-note">
          <span>(Systems / Motion / Data)</span>
          <strong>Built Different</strong>
        </div>
      </ScrollReveal>
    </section>
  );
}
