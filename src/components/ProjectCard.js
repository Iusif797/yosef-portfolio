import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TILT_RANGE = 8;
const springConfig = { stiffness: 260, damping: 22, mass: 0.6 };

const ProjectCard = ({ project, onImageClick, language }) => {
  const cardRef = useRef(null);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(
    useTransform(pointerY, [0, 1], [TILT_RANGE, -TILT_RANGE]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(pointerX, [0, 1], [-TILT_RANGE, TILT_RANGE]),
    springConfig
  );

  const getLinkText = () => {
    if (language === 'en') return 'Visit Website';
    if (language === 'he') return 'בקר באתר';
    return 'Посетить сайт';
  };

  const handlePointerMove = (event) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };

  const resetTilt = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.alt}
          className="project-image"
          onClick={() => onImageClick(project.image)}
          loading="lazy"
        />
      </div>
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
    </motion.div>
  );
};

export default ProjectCard;
