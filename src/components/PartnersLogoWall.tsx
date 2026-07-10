const marks = ['ED', 'BB', 'BI', 'AI', 'LP', 'SEO', 'UX', 'API', 'ML', 'CRM', 'ETL', 'RPT', 'WEB', 'APP', 'DASH', 'SYS'];

export default function PartnersLogoWall() {
  return (
    <section className="partners-logo-wall">
      <div className="section-shell">
        <div className="partners-meta">
          <span>(Partners)</span>
          <span>2011-26©</span>
        </div>
        <div className="partners-grid">
          {marks.map((mark) => <span key={mark}>{mark}</span>)}
        </div>
      </div>
    </section>
  );
}
