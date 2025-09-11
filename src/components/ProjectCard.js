import React from 'react';

const ProjectCard = ({ project, onImageClick }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={`https://images.unsplash.com/photo-${project.unsplashId}?w=600&h=400&fit=crop&auto=format`}
          alt={project.alt}
          className="project-image"
          onClick={() => onImageClick(`https://images.unsplash.com/photo-${project.unsplashId}?w=1200&h=800&fit=crop&auto=format`)}
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
                Посетить сайт
                <svg className="link-arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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