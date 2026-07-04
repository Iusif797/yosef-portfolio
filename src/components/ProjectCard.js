import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiMaximize2 } from 'react-icons/fi';

const ProjectCard = ({ project, onImageClick, labels }) => (
  <motion.article
    className="project-card"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
  >
    <button
      className="project-preview"
      type="button"
      onClick={() => onImageClick(project.image, project.alt)}
      aria-label={`${labels.openPreview} ${project.title}`}
    >
      <span className="project-preview__shine" />
      <span className="project-preview__screen">
        <img src={project.preview} alt={project.alt} className="project-image" loading="lazy" />
      </span>
      <span className="project-preview__action" aria-hidden="true">
        <FiMaximize2 />
      </span>
    </button>
    <div className="project-info">
      <div className="project-meta">
        <span className="project-kicker">{project.type}</span>
        <span className="project-domain">{project.domain}</span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags" aria-label="Project tags">
        {project.tags.map((tag) => (
          <span className="project-tag" key={tag}>{tag}</span>
        ))}
      </div>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          {labels.visitSite}
          <FiExternalLink className="link-arrow" aria-hidden="true" />
        </a>
      )}
    </div>
  </motion.article>
);

export default ProjectCard;
