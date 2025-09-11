import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ translations, language, onImageClick }) => {
  const projectsData = [
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'DJ Beckerman Website',
      title: translations[language].projects.djBeckermanWebsite,
      description: translations[language].projects.djBeckermanWebsiteDescription,
    },
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'G-3 Project',
      title: translations[language].projects.g3Project,
      description: translations[language].projects.g3ProjectDescription,
    },
    {
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Business Card 1',
      title: translations[language].projects.businessCard1,
      description: translations[language].projects.businessCard1Description,
    },
    {
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Business Card 2',
      title: translations[language].projects.businessCard2,
      description: translations[language].projects.businessCard2Description,
    },
    {
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Business Card 3',
      title: translations[language].projects.businessCard3,
      description: translations[language].projects.businessCard3Description,
    },
    {
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Rent Car Application',
      title: translations[language].projects.rentCarApplication,
      description: translations[language].projects.rentCarApplicationDescription,
    },
    {
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Cafe Project',
      title: translations[language].projects.cafeProject,
      description: translations[language].projects.cafeProjectDescription,
    },
    {
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Bakery Project',
      title: translations[language].projects.baceryProject,
      description: translations[language].projects.baceryProjectDescription,
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Castawey Website',
      title: translations[language].projects.castaweyWebsite,
      description: translations[language].projects.castaweyWebsiteDescription,
      link: 'https://castawey.netlify.app/',
    },
  ];

  return (
    <section className="projects-section" id="projects-section">
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