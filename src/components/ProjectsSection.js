import React from "react";
import ProjectCard from "./ProjectCard";
import getvisagoProject from "../assets/Macbook-Air-www.getvisago.com.png";
import mindviaProject from "../assets/Macbook-Air-www.psymindvia.com.png";
import indonesiaProject from "../assets/Macbook-Air-indonesia-project.netlify.app.png";
import filipProject from "../assets/Macbook-Air-filipvekslerpage.netlify.app.png";
import latteCafeProject from "../assets/Macbook-Air-cafe-nine-zeta.vercel.app.png";
import cafeProject from "../assets/cafe-project.png";
import castawayProject from "../assets/Macbook-Air-castawey.netlify.app.png";

const ProjectsSection = ({ translations, language, onImageClick }) => {
  const projectsData = [
    {
      image: getvisagoProject,
      alt: "GetVisago Platform",
      title:
        language === "ru"
          ? "GetVisago Платформа"
          : language === "en"
          ? "GetVisago Platform"
          : "פלטפורמת GetVisago",
      description:
        language === "ru"
          ? "Комплексная визовая платформа с автоматизацией процесса получения eVisa"
          : language === "en"
          ? "Comprehensive visa platform with automated eVisa application process"
          : "פלטפורמת ויזה מקיפה עם תהליך בקשת eVisa אוטומטי",
      link: "https://www.getvisago.com/",
    },
    {
      image: mindviaProject,
      alt: "MindVia Psychology School",
      title:
        language === "ru"
          ? "MindVia Школа Психологии"
          : language === "en"
          ? "MindVia Psychology School"
          : "בית ספר לפסיכולוגיה MindVia",
      description:
        language === "ru"
          ? "Школа психологии с курсами, консультациями и пространством для саморазвития"
          : language === "en"
          ? "Psychology school with courses, consultations and personal growth space"
          : "בית ספר לפסיכולוגיה עם קורסים, ייעוץ ומרחב לצמיחה אישית",
      link: "https://www.psymindvia.com/",
    },
    {
      image: indonesiaProject,
      alt: "Indonesia Travel Project",
      title:
        language === "ru"
          ? "Discover Indonesia"
          : language === "en"
          ? "Discover Indonesia"
          : "גלה את אינדונזיה",
      description:
        language === "ru"
          ? "Туристический портал для исследования красот Индонезии"
          : language === "en"
          ? "Travel portal to explore the natural beauty of Indonesia"
          : "פורטל תיירות לחקור את יופי הטבע של אינדונזיה",
      link: "https://indonesia-project.netlify.app/",
    },
    {
      image: filipProject,
      alt: "Filip Veksler Portfolio",
      title:
        language === "ru"
          ? "Filip Veksler"
          : language === "en"
          ? "Filip Veksler"
          : "Filip Veksler",
      description:
        language === "ru"
          ? "Персональный сайт учёного, преподавателя и консультанта"
          : language === "en"
          ? "Personal website of a scientist, educator and consultant"
          : "אתר אישי של מדען, מחנך ויועץ",
      link: "https://filipvekslerpage.netlify.app/",
    },
    {
      image: latteCafeProject,
      alt: "Latte Cafe",
      title:
        language === "ru"
          ? "Latte Cafe"
          : language === "en"
          ? "Latte Cafe"
          : "Latte Cafe",
      description:
        language === "ru"
          ? "Элегантный сайт кафе со специальным кофе и простой едой"
          : language === "en"
          ? "Elegant cafe website with specialty coffee and simple food"
          : "אתר בית קפה אלגנטי עם קפה מיוחד ואוכל פשוט",
      link: "https://cafe-nine-zeta.vercel.app/",
    },
    {
      image: cafeProject,
      alt: "Premium Cafe Project",
      title:
        language === "ru"
          ? "Премиум Кафе"
          : language === "en"
          ? "Premium Cafe"
          : "בית קפה פרימיום",
      description:
        language === "ru"
          ? "Элегантный сайт кафе с современным дизайном, меню и системой онлайн-бронирования"
          : language === "en"
          ? "Elegant cafe website with modern design, menu and online booking system"
          : "אתר בית קפה אלגנטי עם עיצוב מודרני, תפריט ומערכת הזמנות",
    },
    {
      image: castawayProject,
      alt: "Castaway Platform",
      title:
        language === "ru"
          ? "Castaway Платформа"
          : language === "en"
          ? "Castaway Platform"
          : "פלטפורמת Castaway",
      description:
        language === "ru"
          ? "Инновационная веб-платформа с интерактивным интерфейсом и современными технологиями"
          : language === "en"
          ? "Innovative web platform with interactive interface and modern technologies"
          : "פלטפורמת אינטרנט חדשנית עם ממשק אינטראקטיבי וטכנולוגיות מודרניות",
      link: "https://castawey.netlify.app/",
    },
  ];

  return (
    <section className="projects-section" id="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">
            {translations[language].projects.myProjects}
          </h2>
          <p className="projects-subtitle">
            {language === "ru"
              ? "Избранные работы, демонстрирующие мой опыт и навыки"
              : language === "en"
              ? "Selected works showcasing my experience and skills"
              : "עבודות נבחרות המציגות את הניסיון והכישורים שלי"}
          </p>
        </div>
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
