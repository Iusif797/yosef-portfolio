import React from "react";
import ProjectCard from "./ProjectCard";
import cafeProject from "../assets/cafe-project.png";
import castawayProject from "../assets/Macbook-Air-castawey.netlify.app.png";
import teonaLending from "../assets/teona-lending.png";
import visitCard from "../assets/visit-card.png";
import filipProject from "../assets/Macbook-Air-filipvekslerpage.netlify.app.png";
import getvisagoProject from "../assets/Macbook-Air-www.getvisago.com.png";
import indonesiaProject from "../assets/Macbook-Air-indonesia-project.netlify.app.png";

const ProjectsSection = ({ translations, language, onImageClick }) => {
  const projectsData = [
    {
      image: indonesiaProject,
      alt: "Indonesia Project",
      title:
        language === "ru"
          ? "Travel Indonesia"
          : language === "en"
          ? "Travel Indonesia"
          : "מסע לאינדונזיה",
      description:
        language === "ru"
          ? "Современный туристический портал с гидом по Индонезии и бронированием туров"
          : language === "en"
          ? "Modern travel portal with Indonesia guide and tour booking"
          : "פורטל תיירות מודרני עם מדריך לאינדונזיה והזמנת סיורים",
      link: "https://indonesia-project.netlify.app/",
    },
    {
      image: cafeProject,
      alt: "Cafe Project",
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
    {
      image: teonaLending,
      alt: "Teona Landing",
      title:
        language === "ru"
          ? "Teona Лендинг"
          : language === "en"
          ? "Teona Landing"
          : "דף נחיתה Teona",
      description:
        language === "ru"
          ? "Стильный лендинг с премиум дизайном, анимациями и высокой конверсией"
          : language === "en"
          ? "Stylish landing page with premium design, animations and high conversion"
          : "דף נחיתה מעוצב עם עיצוב פרימיום, אנימציות והמרה גבוהה",
    },
    {
      image: visitCard,
      alt: "Digital Visit Card",
      title:
        language === "ru"
          ? "Цифровая Визитка Pro"
          : language === "en"
          ? "Digital Visit Card Pro"
          : "כרטיס ביקור דיגיטלי Pro",
      description:
        language === "ru"
          ? "Интерактивная цифровая визитка нового поколения с NFC и QR-кодом"
          : language === "en"
          ? "Next-generation interactive digital business card with NFC and QR code"
          : "כרטיס ביקור דיגיטלי אינטראקטיבי מהדור הבא עם NFC וקוד QR",
    },
    {
      image: filipProject,
      alt: "Filip Project",
      title:
        language === "ru"
          ? "Filip Проект"
          : language === "en"
          ? "Filip Project"
          : "פרויקט Filip",
      description:
        language === "ru"
          ? "Современный веб-проект с уникальным дизайном и передовыми решениями"
          : language === "en"
          ? "Modern web project with unique design and cutting-edge solutions"
          : "פרויקט אינטרנט מודרני עם עיצוב ייחודי ופתרונות מתקדמים",
    },
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
          ? "Комплексная платформа для визовых услуг с автоматизацией процессов"
          : language === "en"
          ? "Comprehensive visa services platform with process automation"
          : "פלטפורמה מקיפה לשירותי ויזה עם אוטומציה של תהליכים",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop&auto=format&q=90",
      alt: "E-Commerce Platform",
      title:
        language === "ru"
          ? "E-Commerce Платформа"
          : language === "en"
          ? "E-Commerce Platform"
          : "פלטפורמת מסחר אלקטרוני",
      description:
        language === "ru"
          ? "Современная платформа интернет-магазина с системой платежей и управлением товарами"
          : language === "en"
          ? "Modern e-commerce platform with payment system and inventory management"
          : "פלטפורמת מסחר אלקטרוני מודרנית עם מערכת תשלומים וניהול מלאי",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&auto=format&q=90",
      alt: "FinTech Dashboard",
      title:
        language === "ru"
          ? "FinTech Дашборд"
          : language === "en"
          ? "FinTech Dashboard"
          : "דשבורד פינטק",
      description:
        language === "ru"
          ? "Аналитическая панель для финансовых данных с интерактивными графиками и отчетами"
          : language === "en"
          ? "Financial data analytics dashboard with interactive charts and reports"
          : "דשבורד אנליטיקה לנתונים פיננסיים עם גרפים אינטראקטיביים ודוחות",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&auto=format&q=90",
      alt: "Corporate Website",
      title:
        language === "ru"
          ? "Корпоративный Сайт"
          : language === "en"
          ? "Corporate Website"
          : "אתר תאגידי",
      description:
        language === "ru"
          ? "Элегантный корпоративный сайт с современным дизайном и CMS системой"
          : language === "en"
          ? "Elegant corporate website with modern design and CMS system"
          : "אתר תאגידי אלגנטי עם עיצוב מודרני ומערכת CMS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format&q=90",
      alt: "Food Delivery App",
      title:
        language === "ru"
          ? "Приложение Доставки Еды"
          : language === "en"
          ? "Food Delivery App"
          : "אפליקציית משלוחי אוכל",
      description:
        language === "ru"
          ? "Мобильное приложение для заказа еды с геолокацией и отслеживанием заказов"
          : language === "en"
          ? "Mobile food ordering app with geolocation and order tracking"
          : "אפליקציה ניידת להזמנת אוכל עם גיאולוקיישן ומעקב הזמנות",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&auto=format&q=90",
      alt: "Digital Business Card",
      title:
        language === "ru"
          ? "Цифровая Визитка"
          : language === "en"
          ? "Digital Business Card"
          : "כרטיס ביקור דיגיטלי",
      description:
        language === "ru"
          ? "Интерактивная цифровая визитка с анимациями и интеграцией социальных сетей"
          : language === "en"
          ? "Interactive digital business card with animations and social media integration"
          : "כרטיס ביקור דיגיטלי אינטראקטיבי עם אנימציות ואינטגרציה לרשתות חברתיות",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format&q=90",
      alt: "Car Rental Platform",
      title:
        language === "ru"
          ? "Платформа Аренды Авто"
          : language === "en"
          ? "Car Rental Platform"
          : "פלטפורמת השכרת רכבים",
      description:
        language === "ru"
          ? "Полнофункциональная платформа аренды автомобилей с бронированием и оплатой"
          : language === "en"
          ? "Full-featured car rental platform with booking and payment system"
          : "פלטפורמת השכרת רכבים מלאה עם מערכת הזמנות ותשלומים",
    },
    {
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop&auto=format&q=90",
      alt: "Restaurant Website",
      title:
        language === "ru"
          ? "Сайт Ресторана"
          : language === "en"
          ? "Restaurant Website"
          : "אתר מסעדה",
      description:
        language === "ru"
          ? "Стильный сайт ресторана с онлайн-меню, бронированием столиков и галереей"
          : language === "en"
          ? "Stylish restaurant website with online menu, table booking and gallery"
          : "אתר מסעדה מסוגנן עם תפריט אונליין, הזמנת שולחנות וגלריה",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=90",
      alt: "Bakery Online Store",
      title:
        language === "ru"
          ? "Интернет-магазин Пекарни"
          : language === "en"
          ? "Bakery Online Store"
          : "חנות אונליין למאפייה",
      description:
        language === "ru"
          ? "Онлайн-магазин пекарни с каталогом продукции и системой предзаказов"
          : language === "en"
          ? "Bakery online store with product catalog and pre-order system"
          : "חנות אונליין למאפייה עם קטלוג מוצרים ומערכת הזמנות מראש",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=90",
      alt: "Creative Agency Portfolio",
      title:
        language === "ru"
          ? "Портфолио Креативного Агентства"
          : language === "en"
          ? "Creative Agency Portfolio"
          : "פורטפוליו סוכנות יצירתית",
      description:
        language === "ru"
          ? "Портфолио креативного агентства с интерактивными элементами и анимациями"
          : language === "en"
          ? "Creative agency portfolio with interactive elements and animations"
          : "פורטפוליו סוכנות יצירתית עם אלמנטים אינטראקטיביים ואנימציות",
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
