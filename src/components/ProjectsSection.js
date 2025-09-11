import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ translations, language, onImageClick }) => {
  const projectsData = [
    {
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&auto=format&q=80',
      alt: 'DJ Beckerman Website',
      title: translations[language].projects.djBeckermanWebsite,
      description: translations[language].projects.djBeckermanWebsiteDescription,
    },
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&auto=format&q=80',
      alt: 'G-3 Project',
      title: translations[language].projects.g3Project,
      description: translations[language].projects.g3ProjectDescription,
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7bf7042?w=600&h=400&fit=crop&auto=format&q=80',
      alt: 'Business Card 1',
      title: translations[language].projects.businessCard1,
      description: translations[language].projects.businessCard1Description,
    },
    {
      image: 'https://images.unsplash.com/photo-1586717791821-3bd1f9e58e8c?w=600&h=400&fit=crop&auto=format&q=80',
      alt: 'Business Card 2',
      title: translations[language].projects.businessCard2,
      description: translations[language].projects.businessCard2Description,
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format&q=80',
      alt: 'Business Card 3',
      title: translations[language].projects.businessCard3,
      description: translations[language].projects.businessCard3Description,
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format&q=80',
      alt: 'Rent Car Application',
      title: translations[language].projects.rentCarApplication,
      description: translations[language].projects.rentCarApplicationDescription,
    },
    {
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&auto=format&q=80',
      alt: 'Cafe Project',
      title: translations[language].projects.cafeProject,
      description: translations[language].projects.cafeProjectDescription,
    },
    {
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&auto=format&q=80',
      alt: 'Bakery Project',
      title: translations[language].projects.baceryProject,
      description: translations[language].projects.baceryProjectDescription,
    },
    {
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop&auto=format&q=80',
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