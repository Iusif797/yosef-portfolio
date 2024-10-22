// src/App.js

import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import {
  FaTelegram,
  FaLinkedin,
  FaGithub,
  FaMobileAlt,
  FaLaptopCode,
  FaIdBadge,
  FaGlobe,
  FaTimes, // Иконка крестика для закрытия
} from 'react-icons/fa';
import ReactDOM from 'react-dom';

// Импорт изображений из src/assets
import BestBackground from './assets/best-background.jpg';
import DJBeckerman from './assets/DJ-beckerman.png';
import G3 from './assets/G-3.jpg';
import BusinessCard from './assets/business-card.png';
import BusinessCard2 from './assets/business-card2.png'; // Новый проект
import BusinessCard3 from './assets/business-card3.png'; // Новый проект
import BusinessCard7 from './assets/business-card7.png'; // Новый проект
import RentCar from './assets/rent-car.png';
import VisitCard from './assets/visit-card.png';
import PortfolioIcon from './assets/portfolio-icon.png';

function App() {
  // Переводы для разных языков
  const translations = {
    ru: {
      title: "Портфолио Юсифа Мамедова - Веб-разработчик",
      description:
        "Портфолио веб-разработчика Юсифа Мамедова: создание сайтов и мобильных приложений на React, Wix, WordPress, Flutter и React Native.",
      keywords:
        "web development, React, Wix, WordPress, Flutter, React Native, Юсиф Мамедов, портфолио, веб-разработчик",
      author: "Юсиф Мамедов",
      header: {
        studioTitle: "Портфолио Web-Studio",
        aboutMe:
          "Привет! Меня зовут Юсиф, я веб-разработчик с опытом создания сайтов на React, Wix, WordPress, а также разработки мобильных приложений на Flutter и React Native. Я стремлюсь создавать красивые и функциональные решения для бизнеса и частных клиентов.",
      },
      projects: {
        myProjects: "Мои проекты",
        djBeckermanWebsite: "Сайт DJ Beckerman",
        g3Project: "Проект G-3",
        businessCard1: "Бизнес-визитка 1",
        businessCard2: "Бизнес-визитка 2",
        businessCard3: "Бизнес-визитка 3",
        businessCard7: "Бизнес-визитка 7",
        rentCarApplication: "Приложение Rent Car",
        visitCardProject: "Проект визитки",
        djBeckermanWebsiteDescription:
          "Создание сайта для DJ Beckerman на React и CSS Grid. Интерактивный дизайн и адаптивная верстка для всех устройств.",
        g3ProjectDescription:
          "Разработка веб-приложения G-3 для управления бизнес-процессами с использованием React и интеграцией внешних API.",
        businessCard1Description:
          "Разработка бизнес-визитки на WordPress с использованием современных плагинов для расширения функционала.",
        businessCard2Description:
          "Вторая версия бизнес-визитки с улучшенной интерактивностью и SEO-оптимизацией для лучшей видимости.",
        businessCard3Description:
          "Третья версия бизнес-визитки с анимациями и интеграцией с CRM-системами для автоматизации процессов.",
        businessCard7Description:
          "Лендинг для диджея с акцентом на привлечение аудитории, оптимизированный для мобильных устройств.",
        rentCarApplicationDescription:
          "Создание приложения Rent Car на React Native и Flutter с интеграцией платежных систем и геолокации.",
        visitCardProjectDescription:
          "Цифровая визитка с анимациями и интерактивными элементами для повышения вовлеченности клиентов.",
      },
      pricing: {
        pricing: "Прайс",
        mobileApp: "Мобильное приложение",
        website: "Сайт",
        businessCard: "Бизнес-визитка",
        priceMobileApp: "$1000",
        priceWebsite: "$500",
        priceBusinessCard: "$100", // Изменено с $30 на $100
      },
      skills: {
        skills: "Навыки",
        list: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "React Native",
          "Flutter",
          "WordPress",
          "Wix",
          "Git",
          "UI/UX Design",
        ],
      },
      contact: {
        contact: "Связаться со мной",
        yourName: "Ваше имя",
        yourEmail: "Ваш email",
        projectType: "Тип проекта",
        message: "Ваше сообщение",
        send: "Отправить",
        statusSuccess: "Ваше сообщение успешно отправлено!",
        nameRequired: "Имя обязательно",
        emailRequired: "Email обязателен",
        emailInvalid: "Неверный формат email",
        messageRequired: "Сообщение обязательно",
        scrollToContact: "Связаться со мной",
      },
      footer: {
        portfolio: "Портфолио Юсифа Мамедова",
      },
    },
    en: {
      title: "Yosef Mamedov's Portfolio - Web Developer",
      description:
        "Portfolio of web developer Yosef Mamedov: creating websites and mobile applications using React, Wix, WordPress, Flutter, and React Native.",
      keywords:
        "web development, React, Wix, WordPress, Flutter, React Native, Yosef Mamedov, portfolio, web developer",
      author: "Yosef Mamedov",
      header: {
        studioTitle: "Web-Studio Portfolio",
        aboutMe:
          "Hello! I'm Yosef, a web developer experienced in creating websites with React, Wix, WordPress, and developing mobile applications with Flutter and React Native. I strive to create beautiful and functional solutions for businesses and private clients.",
      },
      projects: {
        myProjects: "My Projects",
        djBeckermanWebsite: "DJ Beckerman Website",
        g3Project: "G-3 Project",
        businessCard1: "Business Card 1",
        businessCard2: "Business Card 2",
        businessCard3: "Business Card 3",
        businessCard7: "Business Card 7",
        rentCarApplication: "Rent Car Application",
        visitCardProject: "Visit Card Project",
        djBeckermanWebsiteDescription:
          "Developed a website for DJ Beckerman using React and CSS Grid. Interactive design and responsive layout for all devices.",
        g3ProjectDescription:
          "Built the G-3 web application for managing business processes with React and external API integrations.",
        businessCard1Description:
          "Created a business card on WordPress using modern plugins to extend functionality.",
        businessCard2Description:
          "Second version of the business card with enhanced interactivity and SEO optimization for better visibility.",
        businessCard3Description:
          "Third version of the business card with animations and CRM system integrations for process automation.",
        businessCard7Description:
          "Landing page for a DJ focused on audience engagement, optimized for mobile devices.",
        rentCarApplicationDescription:
          "Developed the Rent Car application using React Native and Flutter with payment systems and geolocation integration.",
        visitCardProjectDescription:
          "Digital business card with animations and interactive elements to boost client engagement.",
      },
      pricing: {
        pricing: "Pricing",
        mobileApp: "Mobile Application",
        website: "Website",
        businessCard: "Business Card",
        priceMobileApp: "$1000",
        priceWebsite: "$500",
        priceBusinessCard: "$100", // Изменено с $30 на $100
      },
      skills: {
        skills: "Skills",
        list: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "React Native",
          "Flutter",
          "WordPress",
          "Wix",
          "Git",
          "UI/UX Design",
        ],
      },
      contact: {
        contact: "Contact Me",
        yourName: "Your Name",
        yourEmail: "Your Email",
        projectType: "Project Type",
        message: "Your Message",
        send: "Send",
        statusSuccess: "Your message has been successfully sent!",
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Invalid email format",
        messageRequired: "Message is required",
        scrollToContact: "Contact Me",
      },
      footer: {
        portfolio: "Yosef Mamedov's Portfolio",
      },
    },
    he: {
      title: "פורטפוליו של יוסף ממדוב - מפתח אתרים",
      description:
        "פורטפוליו של מפתח אתרים יוסף ממדוב: יצירת אתרים ואפליקציות ניידות באמצעות React, Wix, WordPress, Flutter ו-React Native.",
      keywords:
        "פיתוח אתרים, React, Wix, WordPress, Flutter, React Native, יוסף ממדוב, פורטפוליו, מפתח אתרים",
      author: "יוסף ממדוב",
      header: {
        studioTitle: "פורטפוליו Web-Studio",
        aboutMe:
          "שלום! אני יוסף, מפתח אתרים עם ניסיון ביצירת אתרים ב-React, Wix, WordPress ופיתוח אפליקציות ניידות ב-Flutter ו-React Native. אני שואף ליצור פתרונות יפים ופונקציונליים לעסקים וללקוחות פרטיים.",
      },
      projects: {
        myProjects: "הפרויקטים שלי",
        djBeckermanWebsite: "אתר DJ Beckerman",
        g3Project: "פרויקט G-3",
        businessCard1: "כרטיס ביקור 1",
        businessCard2: "כרטיס ביקור 2",
        businessCard3: "כרטיס ביקור 3",
        businessCard7: "כרטיס ביקור 7",
        rentCarApplication: "אפליקציית השכרת רכבים",
        visitCardProject: "פרויקט כרטיס ביקור",
        djBeckermanWebsiteDescription:
          "פיתחנו אתר ל-DJ Beckerman באמצעות React ו-CSS Grid. עיצוב אינטראקטיבי ותצוגה רספונסיבית לכל המכשירים.",
        g3ProjectDescription:
          "בניית אפליקציית ה-G-3 לניהול תהליכים עסקיים ב-React עם שילוב APIs חיצוניים.",
        businessCard1Description:
          "יצירת כרטיס ביקור ב-WordPress תוך שימוש בתוספים מודרניים להרחבת הפונקציונליות.",
        businessCard2Description:
          "גרסה שנייה של כרטיס ביקור עם אינטראקטיביות משופרת ואופטימיזציה ל-SEO לנראות טובה יותר.",
        businessCard3Description:
          "גרסה שלישית של כרטיס ביקור עם אנימציות והטמעת מערכות CRM לאוטומציה של תהליכים.",
        businessCard7Description:
          "דף נחיתה לדיג'יי המתמקד במעורבות קהל, מותאם למכשירים ניידים.",
        rentCarApplicationDescription:
          "פיתוח אפליקציית Rent Car ב-React Native ו-Flutter עם שילוב מערכות תשלום וגאולוקציה.",
        visitCardProjectDescription:
          "כרטיס ביקור דיגיטלי עם אנימציות ואלמנטים אינטראקטיביים להגברת מעורבות הלקוחות.",
      },
      pricing: {
        pricing: "מחירים",
        mobileApp: "אפליקציה ניידת",
        website: "אתר",
        businessCard: "כרטיס ביקור",
        priceMobileApp: "$1000",
        priceWebsite: "$500",
        priceBusinessCard: "$100", // Изменено с $30 на $100
      },
      skills: {
        skills: "כישורים",
        list: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "React Native",
          "Flutter",
          "WordPress",
          "Wix",
          "Git",
          "UI/UX Design",
        ],
      },
      contact: {
        contact: "צור קשר איתי",
        yourName: "שמך",
        yourEmail: "האימייל שלך",
        projectType: "סוג הפרויקט",
        message: "ההודעה שלך",
        send: "שלח",
        statusSuccess: "ההודעה שלך נשלחה בהצלחה!",
        nameRequired: "שם נדרש",
        emailRequired: "אימייל נדרש",
        emailInvalid: "פורמט האימייל אינו תקין",
        messageRequired: "ההודעה נדרשת",
        scrollToContact: "צור קשר איתי",
      },
      footer: {
        portfolio: "פורטפוליו של יוסף ממדוב",
      },
    },
  };

  // Состояние для выбранного языка
  const [language, setLanguage] = useState('ru');

  // Функция для изменения языка
  const changeLanguage = (lng) => {
    setLanguage(lng);
    // Изменение направления текста для иврита
    if (lng === 'he') {
      document.body.dir = 'rtl';
    } else {
      document.body.dir = 'ltr';
    }
  };

  // Состояния для модального окна и формы
  const [modalImage, setModalImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: language === 'he' ? 'אתר' : 'Сайт',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  // Закрыть модальное окно
  const closeModal = useCallback(() => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  // Обработчик клавиши Esc
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  // useEffect для добавления/удаления слушателя событий
  useEffect(() => {
    if (modalImage) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalImage, handleKeyDown]);

  // Открыть модальное окно
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Отключить прокрутку при открытом модале
  };

  // Обработка изменений в форме
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Удалить ошибку при изменении
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  // Валидация формы
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = translations[language].contact.nameRequired;
    if (!formData.email.trim()) {
      newErrors.email = translations[language].contact.emailRequired;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = translations[language].contact.emailInvalid;
    }
    if (!formData.message.trim()) newErrors.message = translations[language].contact.messageRequired;
    return newErrors;
  };

  // Обработка отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const { name, email, projectType, message } = formData;

    // Формирование сообщения
    const fullMessage = language === 'he' ? `
      בקשה חדשה מהפורטפוליו:
      שם: ${name}
      אימייל: ${email}
      סוג הפרויקט: ${projectType}
      הודעה: ${message}
    ` : `
      Новая заявка с портфолио:
      Имя: ${name}
      Email: ${email}
      Тип проекта: ${projectType}
      Сообщение: ${message}
    `;

    // Кодирование сообщения для URL
    const encodedMessage = encodeURIComponent(fullMessage);

    // Ваш номер WhatsApp в международном формате (без плюса)
    const whatsappNumber = '972528057734';

    // Ссылка для WhatsApp Click-to-Chat
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Перенаправление на WhatsApp
    window.open(whatsappLink, '_blank');

    // Очистка формы и отображение статуса
    setFormData({
      name: '',
      email: '',
      projectType: language === 'he' ? 'אתר' : 'Сайт',
      message: '',
    });
    setStatus(translations[language].contact.statusSuccess);
    setErrors({});
  };

  // Функция для плавного прокручивания к контактной секции
  const scrollToContact = (e) => {
    e.stopPropagation(); // Останавливаем всплытие события
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Suspense fallback="Loading...">
      <div
        className="App"
        style={{
          backgroundImage: `url(${BestBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Meta Tags и Google Analytics */}
        <Helmet>
          {/* Favicon и иконки */}
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
          <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/favicon.svg" />

          {/* Основные мета-теги */}
          <title>{translations[language].title}</title>
          <meta name="description" content={translations[language].description} />
          <meta name="keywords" content={translations[language].keywords} />
          <meta name="author" content={translations[language].author} />

          {/* Open Graph */}
          <meta property="og:title" content={translations[language].title} />
          <meta property="og:description" content={translations[language].description} />
          <meta property="og:image" content="/favicon.svg" />
          <meta property="og:url" content="https://www.yosef-portfolio.ru/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:locale"
            content={language === 'he' ? 'he_IL' : language === 'ru' ? 'ru_RU' : 'en_US'}
          />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={translations[language].title} />
          <meta name="twitter:description" content={translations[language].description} />
          <meta name="twitter:image" content="/favicon.svg" />

          {/* Hreflang Tags */}
          <link rel="alternate" hrefLang="ru" href="https://www.yosef-portfolio.ru/" />
          <link rel="alternate" hrefLang="en" href="https://www.yosef-portfolio.ru/en" />
          <link rel="alternate" hrefLang="he" href="https://www.yosef-portfolio.ru/he" />

          {/* Структурированные данные */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Yosef Mamedov's Portfolio",
              "url": "https://www.yosef-portfolio.ru/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.yosef-portfolio.ru/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            })}
          </script>

          {/* Google Analytics */}
          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-VGNWSHB9TC"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-VGNWSHB9TC');
            `}
          </script>
        </Helmet>

        {/* Переключатель языков */}
        <div className="language-switcher">
          <FaGlobe size={20} />
          <button onClick={() => changeLanguage('ru')}>RU</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('he')}>HE</button>
        </div>

        {/* Overlay */}
        <div className="background-overlay"></div>

        {/* Модальное окно */}
        {modalImage && ReactDOM.createPortal(
          <div className="modal" onClick={closeModal} aria-modal="true" role="dialog">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-button" onClick={closeModal} aria-label="Close Modal">
                <FaTimes size={24} />
              </button>
              <img src={modalImage} alt="Project Fullscreen" className="modal-image" />
            </div>
          </div>,
          document.body
        )}

        {/* Header */}
        <header className="App-header">
          {/* Оставляем только квадраты и треугольники */}
          <div className="header-decorative decoration-4"></div>
          <div className="header-decorative decoration-5"></div>

          {/* Удалён обработчик onClick с header-content */}
          <div className="header-content">
            <img src={PortfolioIcon} alt="Моё портфолио иконка" className="portfolio-icon" />
            <h1 className="studio-title">{translations[language].header.studioTitle}</h1>
            <p className="about-me">{translations[language].header.aboutMe}</p>
            {/* Кнопка "Связаться со мной" без вызова модала */}
            <button className="contact-button-top" onClick={(e) => scrollToContact(e)}>
              {translations[language].contact.scrollToContact}
              <span className="arrow"></span>
            </button>
          </div>
        </header>

        {/* Projects Section */}
        <section className="projects-section">
          <h2>{translations[language].projects.myProjects}</h2>
          <div className="projects-container">
            {/* Карточки проектов */}
            {[
              {
                img: DJBeckerman,
                alt: 'DJ Beckerman Website',
                title: translations[language].projects.djBeckermanWebsite,
                description: translations[language].projects.djBeckermanWebsiteDescription,
              },
              {
                img: G3,
                alt: 'G-3 Project',
                title: translations[language].projects.g3Project,
                description: translations[language].projects.g3ProjectDescription,
              },
              {
                img: BusinessCard,
                alt: 'Business Card 1',
                title: translations[language].projects.businessCard1,
                description: translations[language].projects.businessCard1Description,
              },
              {
                img: BusinessCard2,
                alt: 'Business Card 2',
                title: translations[language].projects.businessCard2,
                description: translations[language].projects.businessCard2Description,
              },
              {
                img: BusinessCard3,
                alt: 'Business Card 3',
                title: translations[language].projects.businessCard3,
                description: translations[language].projects.businessCard3Description,
              },
              {
                img: BusinessCard7,
                alt: 'Business Card 7',
                title: translations[language].projects.businessCard7,
                description: translations[language].projects.businessCard7Description,
              },
              {
                img: RentCar,
                alt: 'Rent Car Application',
                title: translations[language].projects.rentCarApplication,
                description: translations[language].projects.rentCarApplicationDescription,
              },
              {
                img: VisitCard,
                alt: 'Visit Card Project',
                title: translations[language].projects.visitCardProject,
                description: translations[language].projects.visitCardProjectDescription,
              },
            ].map((project, index) => (
              <div className="project-item" key={index}>
                <div className="floating-container" onClick={() => openModal(project.img)}>
                  <div className="project-inner">
                    <div className="project-front">
                      <img
                        src={project.img}
                        alt={project.alt}
                        className={`project-screenshot ${
                          project.title === translations[language].projects.rentCarApplication
                            ? 'rent-car-screenshot'
                            : ''
                        } ${
                          project.title === translations[language].projects.visitCardProject
                            ? 'visit-card-screenshot'
                            : ''
                        }`}
                      />
                    </div>
                    <div className="project-back">
                      {/* Убрано название проекта */}
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section">
          <h2>{translations[language].pricing.pricing}</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <FaMobileAlt className="pricing-icon" />
              <h3>{translations[language].pricing.mobileApp}</h3>
              <p className="price">{translations[language].pricing.priceMobileApp}</p>
            </div>
            <div className="pricing-card">
              <FaLaptopCode className="pricing-icon" />
              <h3>{translations[language].pricing.website}</h3>
              <p className="price">{translations[language].pricing.priceWebsite}</p>
            </div>
            <div className="pricing-card">
              <FaIdBadge className="pricing-icon" />
              <h3>{translations[language].pricing.businessCard}</h3>
              <p className="price">{translations[language].pricing.priceBusinessCard}</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <h2>{translations[language].skills.skills}</h2>
          <ul>
            {translations[language].skills.list.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact-section">
          <h2>{translations[language].contact.contact}</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={translations[language].contact.yourName}
                required
                className={`contact-input ${errors.name ? 'error' : ''}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={translations[language].contact.yourEmail}
                required
                className={`contact-input ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <select
                name="projectType"
                className="styled-select contact-input"
                required
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value={language === 'he' ? 'אתר' : 'Сайт'}>
                  {translations[language].pricing.website}
                </option>
                <option value={language === 'he' ? 'אפליקציה ניידת' : 'Мобильное приложение'}>
                  {translations[language].pricing.mobileApp}
                </option>
                <option value={language === 'he' ? 'כרטיס ביקור' : 'Бизнес-визитка'}>
                  {translations[language].pricing.businessCard}
                </option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={translations[language].contact.message}
                required
                className={`contact-textarea ${errors.message ? 'error' : ''}`}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            <button type="submit" className="contact-button">
              {translations[language].contact.send}
            </button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </section>

        {/* Footer */}
        <footer>
          <p>{translations[language].footer.portfolio}</p>
          <div className="social-icons">
            <a href="https://t.me/beckerman979" target="_blank" rel="noopener noreferrer">
              <FaTelegram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/iusifmamedov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Iusif797" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
          </div>
        </footer>
      </div>
    </Suspense>
  );
}

export default App;
