import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ translations, language, onImageClick }) => {
  const projectsData = [
    {
      unsplashId: '1461988320302-91bde64fc8e4',
      alt: 'DJ Beckerman Website',
      title: translations[language].projects.djBeckermanWebsite,
      description: translations[language].projects.djBeckermanWebsiteDescription,
    },
    {
      unsplashId: '1498050108023-c5249f4df085',
      alt: 'G-3 Project',
      title: translations[language].projects.g3Project,
      description: translations[language].projects.g3ProjectDescription,
    },
    {
      unsplashId: '1507003211169-0a1dd7bf7042',
      alt: 'Business Card 1',
      title: translations[language].projects.businessCard1,
      description: translations[language].projects.businessCard1Description,
    },
    {
      unsplashId: '1586717791821-3bd1f9e58e8c',
      alt: 'Business Card 2',
      title: translations[language].projects.businessCard2,
      description: translations[language].projects.businessCard2Description,
    },
    {
      unsplashId: '1551650975-87deedd944c3',
      alt: 'Business Card 3',
      title: translations[language].projects.businessCard3,
      description: translations[language].projects.businessCard3Description,
    },
    {
      unsplashId: '1460925895917-afdab827c52f',
      alt: 'Rent Car Application',
      title: translations[language].projects.rentCarApplication,
      description: translations[language].projects.rentCarApplicationDescription,
    },
    {
      unsplashId: '1517077304055-6e89abbf09b0',
      alt: 'Cafe Project',
      title: translations[language].projects.cafeProject,
      description: translations[language].projects.cafeProjectDescription,
    },
    {
      unsplashId: '1509440159596-0249088772ff',
      alt: 'Bakery Project',
      title: translations[language].projects.baceryProject,
      description: translations[language].projects.baceryProjectDescription,
    },
    {
      unsplashId: '1522335789203-aabd1fc54bc9',
      alt: 'Castawey Website',
      title: translations[language].projects.castaweyWebsite,
      description: translations[language].projects.castaweyWebsiteDescription,
      link: 'https://castawey.netlify.app/',
    },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">{translations[language].projects.myProjects}</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onImageClick={onImageClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;