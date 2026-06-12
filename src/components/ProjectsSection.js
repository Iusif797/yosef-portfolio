import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const PROJECTS = [
  {
    slug: "prague-carsharing",
    name: "Prague Carsharing",
    link: "https://prague-carsharing-website.usifmamedov5.workers.dev",
    desc: {
      ru: "Платформа поминутной аренды авто в Праге с картой и бронированием.",
      en: "Per-minute car-sharing platform in Prague with live map and booking.",
      he: "פלטפורמת שיתוף רכב לפי דקות בפראג עם מפה והזמנה.",
    },
  },
  {
    slug: "dodge-challenger",
    name: "Dodge Challenger",
    link: "https://dodge-challenger-lending.vercel.app/",
    desc: {
      ru: "Кинематографичный лендинг мускул-кара с динамичными анимациями.",
      en: "Cinematic muscle-car landing page with dynamic motion.",
      he: "עמוד נחיתה קולנועי לרכב שריר עם אנימציות דינמיות.",
    },
  },
  {
    slug: "neran",
    name: "Neran",
    link: "https://neran.io/",
    desc: {
      ru: "Современный продуктовый сайт бренда с чистой типографикой.",
      en: "Modern product brand site with clean editorial typography.",
      he: "אתר מותג מוצר מודרני עם טיפוגרפיה נקייה.",
    },
  },
  {
    slug: "getvisago",
    name: "GetVisago",
    link: "https://www.getvisago.com",
    desc: {
      ru: "Визовая платформа с автоматизацией процесса получения eVisa.",
      en: "Visa platform with an automated eVisa application flow.",
      he: "פלטפורמת ויזה עם תהליך eVisa אוטומטי.",
    },
  },
  {
    slug: "luxe-shop",
    name: "LUXE",
    link: "https://luxe-shop-theta.vercel.app",
    desc: {
      ru: "E-commerce премиальной моды: каталог и минималистичный UI.",
      en: "Premium fashion e-commerce with a refined minimalist UI.",
      he: "מסחר אופנה פרימיום עם ממשק מינימליסטי.",
    },
  },
  {
    slug: "wine",
    name: "Wine House",
    link: "https://wine-iusif-project.vercel.app",
    desc: {
      ru: "Атмосферный сайт винного бренда с дегустациями и каталогом.",
      en: "Atmospheric winery site with tastings and catalog.",
      he: "אתר יקב אווירתי עם טעימות וקטלוג.",
    },
  },
  {
    slug: "mindvia",
    name: "MindVia",
    link: "https://www.psymindvia.com",
    desc: {
      ru: "Школа психологии с курсами, консультациями и блогом.",
      en: "Psychology school with courses, consultations and blog.",
      he: "בית ספר לפסיכולוגיה עם קורסים וייעוץ.",
    },
  },
  {
    slug: "cleaningtwg-cz",
    name: "Cleaning TWG",
    link: "https://cleaningtwg.cz",
    desc: {
      ru: "Профессиональный клининг в Праге с онлайн-заказом.",
      en: "Professional cleaning service in Prague with online booking.",
      he: "שירות ניקיון מקצועי בפראג עם הזמנה מקוונת.",
    },
  },
  {
    slug: "cleaningtwg-netlify",
    name: "Cleaning TWG — Web",
    link: "https://cleaningtwg.netlify.app",
    desc: {
      ru: "Альтернативная сборка сайта клининговой компании.",
      en: "Alternative build of the cleaning company website.",
      he: "גרסה חלופית של אתר חברת הניקיון.",
    },
  },
  {
    slug: "web-studio",
    name: "Web Studio",
    link: "https://web-studio-contacts.netlify.app",
    desc: {
      ru: "Сайт веб-студии: услуги, портфолио и форма контакта.",
      en: "Web studio site: services, portfolio and contact flow.",
      he: "אתר סטודיו ווב: שירותים, תיק עבודות וטופס יצירת קשר.",
    },
  },
  {
    slug: "cafe",
    name: "Latte Cafe",
    link: "https://cafe-nine-zeta.vercel.app",
    desc: {
      ru: "Элегантный сайт кофейни со спешелти-кофе и меню.",
      en: "Elegant cafe website with specialty coffee and menu.",
      he: "אתר בית קפה אלגנטי עם קפה איכותי ותפריט.",
    },
  },
  {
    slug: "bakery",
    name: "Bakery",
    link: "https://bakeryiusifdeveloping.netlify.app",
    desc: {
      ru: "Тёплый сайт пекарни с витриной выпечки и заказом.",
      en: "Warm bakery site with a product showcase and ordering.",
      he: "אתר מאפייה חמים עם מוצרים והזמנה.",
    },
  },
  {
    slug: "dubai-realty",
    name: "Dubai Realty",
    link: "https://dubai-appartmentsproject.netlify.app",
    desc: {
      ru: "Премиальная недвижимость Дубая: каталог и консультации.",
      en: "Premium Dubai real estate: listings and consultations.",
      he: "נדל\"ן יוקרה בדובאי: מודעות וייעוץ.",
    },
  },
  {
    slug: "indonesia",
    name: "Discover Indonesia",
    link: "https://indonesia-project.netlify.app",
    desc: {
      ru: "Тревел-портал для путешествий по Индонезии.",
      en: "Travel portal to explore the beauty of Indonesia.",
      he: "פורטל תיירות לחקר יופייה של אינדונזיה.",
    },
  },
  {
    slug: "filip-veksler",
    name: "Filip Veksler",
    link: "https://filipvekslerpage.netlify.app",
    desc: {
      ru: "Персональный сайт учёного, преподавателя и консультанта.",
      en: "Personal site of a scientist, educator and consultant.",
      he: "אתר אישי של מדען, מחנך ויועץ.",
    },
  },
  {
    slug: "dj-beckerman",
    name: "DJ Beckerman",
    link: "https://dj-beckerman.netlify.app",
    desc: {
      ru: "Сайт диджея: афиша, миксы и бронирование выступлений.",
      en: "DJ website: events, mixes and performance booking.",
      he: "אתר די-ג'יי: אירועים, מיקסים והזמנות.",
    },
  },
  {
    slug: "iskatel",
    name: "Iskatel School",
    link: "https://www.iskatel.school/",
    desc: {
      ru: "Образовательная платформа школы «Искатель» с курсами, расписанием и программами обучения.",
      en: "Educational platform of the 'Iskatel' school with courses, schedules, and learning programs.",
      he: "פלטפורמת חינוך של בית הספר 'איסקטל' עם קורסים, לוחות זמנים ותוכניות לימוד.",
    },
  },
  {
    slug: "chabad-shifts",
    name: "Chabad Shifts",
    link: "https://chabad-shifts.netlify.app",
    desc: {
      ru: "Приложение учёта смен и расписания для команды.",
      en: "Shift and schedule management app for teams.",
      he: "אפליקציית ניהול משמרות ולוח זמנים.",
    },
  },
  {
    slug: "djbeckerman-2",
    name: "DJ Beckerman — Live",
    link: "https://djbeckerman.vercel.app/",
    desc: {
      ru: "Промо-сайт диджея с акцентом на живые выступления.",
      en: "DJ promo site focused on live performances.",
      he: "אתר פרומו לדי-ג'יי בדגש על הופעות חיות.",
    },
  },
  {
    slug: "homework",
    name: "Mini App",
    link: "https://iusif797.github.io/Homework_04.10.2025/",
    desc: {
      ru: "Учебный мини-проект на чистом JavaScript.",
      en: "Educational mini-project built with vanilla JavaScript.",
      he: "מיני-פרויקט לימודי ב-JavaScript.",
    },
  },
];

const localized = (field, language) => field[language] ?? field.en;

const ProjectsSection = ({ translations, language, onImageClick }) => {
  const subtitle =
    language === "ru"
      ? "Избранные работы, демонстрирующие мой опыт и навыки"
      : language === "he"
        ? "עבודות נבחרות המציגות את הניסיון והכישורים שלי"
        : "Selected works showcasing my experience and skills";

  return (
    <section className="projects-section" id="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">
            {translations[language].projects.myProjects}
          </h2>
          <p className="projects-subtitle">{subtitle}</p>
        </div>
        <motion.div
          className="projects-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.slug}
              project={{
                image: `/projects/${project.slug}.png`,
                alt: project.name,
                title: project.name,
                description: localized(project.desc, language),
                link: project.link,
              }}
              onImageClick={onImageClick}
              language={language}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
