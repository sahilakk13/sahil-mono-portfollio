import { Link } from 'react-router-dom';
import { workMedia } from '../data/media';
import { projects } from '../data/projects';
import ProjectMediaPoster from './ProjectMediaPoster';

export default function WorkStickyStack() {
  const items = projects.slice(0, 4);

  return (
    <section className="work-sticky-stack" id="work">
      <div className="section-shell work-layout">
        <aside className="work-left-rail">
          <span>(Portfolio 26©)</span>
          <h2>Work(4)</h2>
          <i />
          <Link to="/work/work-1" className="black-pill" data-cursor-label="View">View all work</Link>
        </aside>
        <div className="work-card-stack">
          {items.map((project, index) => (
            <Link className="work-large-card" key={project.slug} to={`/project/${project.slug}`} data-cursor-label="View Work">
              <ProjectMediaPoster
                index={index}
                label={project.title}
                imageSrc={workMedia[project.slug]?.src}
                imageAlt={workMedia[project.slug]?.alt ?? `${project.title} project media`}
              />
              <div>
                <h3>{project.title}</h3>
                <span>{project.type} / {project.year} ©</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
