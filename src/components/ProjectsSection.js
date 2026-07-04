import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS, PROJECT_TYPES, getDomain, localized } from '../data/projects';
import { getPublicAsset } from '../utils/publicUrl';

const FILTERS = [
  { id: 'all', labelKey: 'filterAll' },
  { id: 'web', labelKey: 'filterWeb' },
  { id: 'app', labelKey: 'filterApp' },
];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const ProjectsSection = ({ t, language, onImageClick }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const p = t.projects;

  const filtered = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return PROJECT_TYPES[project.typeKey].category === activeFilter;
  });

  return (
    <section className="projects-section" id="projects-section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{p.myProjects}</h2>
          <p className="section-subtitle">{p.subtitle}</p>
        </div>
        <div className="projects-filters" role="tablist" aria-label="Project filters">
          {FILTERS.map(({ id, labelKey }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeFilter === id}
              className={`projects-filter${activeFilter === id ? ' is-active' : ''}`}
              onClick={() => setActiveFilter(id)}
            >
              {p[labelKey]}
            </button>
          ))}
        </div>
        <motion.div
          className="projects-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={activeFilter}
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={{
                preview: getPublicAsset(`/projects/previews/${project.slug}.webp`),
                image: getPublicAsset(`/projects/previews/${project.slug}.webp`),
                alt: project.name,
                title: project.name,
                type: localized(PROJECT_TYPES[project.typeKey], language),
                tags: project.tags,
                domain: getDomain(project.link),
                description: localized(project.desc, language),
                link: project.link,
              }}
              onImageClick={onImageClick}
              labels={p}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
