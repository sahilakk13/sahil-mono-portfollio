import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Button from './Button';

const partnerMarks = ['NX', 'BI', 'AI', 'SEO', 'UX', 'DB', 'API', 'ML', 'QA', 'KP', 'CRM', 'DEV', 'ETL', 'RPT', 'APP', 'SYS'];

function WorkPoster({ index }: { index: number }) {
  return (
    <div className={`work-poster work-poster-${index + 1}`} aria-hidden="true">
      <div className="poster-window">
        <span />
        <span />
        <span />
      </div>
      <div className="poster-grid">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="poster-lines">
        <span />
        <span />
        <span />
        <span />
      </div>
      <strong>{String(index + 1).padStart(2, '0')}</strong>
    </div>
  );
}

export default function WorkPreview() {
  const primary = projects.slice(0, 4);

  return (
    <section className="work-reference-section" id="work">
      <div className="container partners-row">
        <span>(Partners)</span>
        <span>2011-26©</span>
      </div>
      <div className="container logo-grid">
        {partnerMarks.map((mark) => (
          <div key={mark} className="logo-mark">{mark}</div>
        ))}
      </div>
      <div className="container work-reference-layout">
        <aside className="work-rail">
          <span>(Portfolio 26©)</span>
          <h2>Work(4)</h2>
          <Button href="/work/work-1" cursorLabel="Work">View all work</Button>
        </aside>
        <div className="work-stack">
          {primary.map((project, index) => (
            <motion.article
              className="work-stack-card"
              key={project.slug}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/project/${project.slug}`} data-cursor-label="View Work">
                <WorkPoster index={index} />
                <div className="work-card-meta">
                  <h3>{project.title}</h3>
                  <span>{project.year} ©</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
