import SectionLabel from './SectionLabel';

const stats = [
  ['(Value created)', '$40K+', 'Decisions supported through structured analytics and reporting systems.', 'Decision value'],
  ['(Reporting effort)', '30%', 'Reduced manual reporting effort with cleaner dashboards and workflows.', 'Less manual work'],
  ['(Projects delivered)', '20+', 'Digital products, dashboards, websites, and data systems shaped end to end.', 'Delivered systems'],
  ['(Satisfaction target)', '90%+', 'A practical quality target for clarity, speed, usefulness, and polish.', 'Quality target'],
];

export default function Stats() {
  return (
    <section className="stats-reference">
      <div className="container stats-reference-intro">
        <SectionLabel>(Stats)</SectionLabel>
        <h2>Sahil stands behind the data.</h2>
        <p>Every project is shaped around measurable clarity: faster decisions, cleaner systems, and useful digital work.</p>
      </div>
      <div className="container stats-card-row">
        {stats.map(([label, value, copy, caption], index) => (
          <article className="stat-card" key={label}>
            <span>{label}</span>
            <h3>{value}</h3>
            <p>{copy}</p>
            <div>
              <strong>{caption}</strong>
              <small>CRI {String(index + 1).padStart(3, '0')} ★★★★★</small>
            </div>
          </article>
        ))}
      </div>
      <blockquote className="container success-quote">
        <span>(Success stories)</span>
        “Sahil helped simplify a complex idea into a cleaner product direction, sharper user flow, and a practical build plan that felt ready for real use.”
        <footer>Project Collaborator / Product and analytics work</footer>
      </blockquote>
    </section>
  );
}
