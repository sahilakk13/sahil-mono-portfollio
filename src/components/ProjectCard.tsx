import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { type Project } from '../data/projects';
import MediaPlaceholder from './MediaPlaceholder';

type ProjectCardProps = {
  project: Project;
  index: number;
  large?: boolean;
};

export default function ProjectCard({ project, index, large }: ProjectCardProps) {
  return (
    <motion.article className={large ? 'project-card is-large' : 'project-card'} initial="rest" whileHover="hover" animate="rest" variants={{ rest: { y: 0 }, hover: { y: -10 } }} transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}>
      <Link to={`/project/${project.slug}`} aria-label={`Open ${project.title} project`} data-cursor-label="View">
        <MediaPlaceholder
          label={project.title}
          eyebrow={project.accentLabel}
          dark={index % 2 === 1}
          tall={large}
          variant={index}
        />
        <div className="project-card-meta">
          <h3>{project.title}</h3>
          <span>{project.year} ©</span>
        </div>
        <p>{project.type}</p>
      </Link>
    </motion.article>
  );
}
