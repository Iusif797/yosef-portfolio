import React from 'react';

const ProjectCard = ({ project, onImageClick, language }) => {
  const getLinkText = () => {
    if (language === 'en') return 'Visit Website';
    if (language === 'he') return 'בקר באתר';
    return 'Посетить сайт';
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.alt}
          className="project-image"
          onClick={() => onImageClick(project.image)}
          loading="lazy"
        />
        <div className="project-overlay">
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                {getLinkText()}
                <svg className="link-arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;