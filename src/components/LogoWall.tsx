import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';

const partners = ['Acme', 'NOVA', 'Atlas', 'Radius', 'Signal', 'Loop', 'North', 'Prism', 'Monogram', 'Auralis', 'Circle', 'LogoIpsum', 'Forma', 'Nero', 'One Step', 'Bold'];

export default function LogoWall() {
  return (
    <section className="section logo-wall">
      <div className="container logo-wall-head">
        <SectionLabel>(Partners)</SectionLabel>
        <span className="wall-dot" />
        <strong>2026©</strong>
      </div>
      <ScrollReveal className="container logo-grid">
        {partners.map((partner) => (
          <div className="logo-card" key={partner}>
            <span className="logo-symbol" />
            <strong>{partner}</strong>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
