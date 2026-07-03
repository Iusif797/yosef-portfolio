import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiMaximize2 } from 'react-icons/fi';

const ProjectCard = ({ project, onImageClick, language }) => {
  const getLinkText = () => {
    if (language === 'en') return 'Visit Website';
    if (language === 'he') return 'בקר באתר';
    return 'Посетить сайт';
  };

  const getPreviewText = () => {
    if (language === 'en') return `Open ${project.title} screenshot`;
    if (language === 'he') return `פתח צילום מסך של ${project.title}`;
    return `Открыть скриншот ${project.title}`;
  };

  return (
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
        onClick={() => onImageClick(project.image)}
        aria-label={getPreviewText()}
      >
        <span className="project-preview__shine" />
        <span className="project-preview__screen">
          <img
            src={project.preview || project.image}
            alt={project.alt}
            className="project-image"
            loading="lazy"
          />
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
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            onClick={(e) => e.stopPropagation()}
          >
            {getLinkText()}
            <FiExternalLink className="link-arrow" aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
