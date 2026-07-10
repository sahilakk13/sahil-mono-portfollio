import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';

const stats = ['+3 years building', '20+ projects', 'Remote worldwide', 'Data + Development'];

export default function AboutPreview() {
  return (
    <section className="about-reference section-white">
      <ScrollReveal className="container about-reference-grid">
        <div className="about-labels">
          <SectionLabel>(Who we are)</SectionLabel>
          <p>Sahil Kumar™</p>
        </div>
        <div className="about-main">
          <h2>We shape digital products with focus, intention, and measurable impact.</h2>
          <div className="about-detail-grid">
            <p>
              I work across analytics, dashboards, web design, and development to turn practical ideas into clear,
              usable systems.
            </p>
            <div className="about-stat-card">
              <strong>+13</strong>
              <span>Systems, dashboards, and product flows shaped across the last cycle.</span>
            </div>
            <div className="about-profile-card">
              <span>(Team of one)</span>
              <strong>Data Analyst • Developer</strong>
              <small>Pakistan / Remote Worldwide</small>
            </div>
          </div>
          <div className="about-stats">
            {stats.map((stat) => <span key={stat}>{stat}</span>)}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
