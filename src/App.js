// src/App.js

import React, {
  useState,
  useCallback,
  useEffect,
  Suspense,
  useRef,
} from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import {
  FaTelegram,
  FaLinkedin,
  FaGithub,
  FaMobileAlt,
  FaLaptopCode,
  FaIdBadge,
  FaTimes,
  FaLightbulb, // Иконка для раздела "Как я работаю"
} from "react-icons/fa";
import ReactDOM from "react-dom";

// Импорт изображений из src/assets
import BestBackground from "./assets/best-background.jpg";
import DJBeckerman from "./assets/DJ-beckerman.png";
import G3 from "./assets/G-3.jpg";
import BusinessCard from "./assets/business-card.png";
import BusinessCard2 from "./assets/business-card2.png";
import BusinessCard3 from "./assets/business-card3.png";
import BusinessCard7 from "./assets/business-card7.png";
import RentCar from "./assets/rent-car.png";
import VisitCard from "./assets/visit-card.png";
import PortfolioIcon from "./assets/portfolio-icon.png";

// Импорт флагов
import RuFlag from "./assets/flags/ru.webp";
import EnFlag from "./assets/flags/en.webp";
import HeFlag from "./assets/flags/he.png";

function App() {
  // Переводы для разных языков
  const translations = {
    ru: {
      title: "Портфолио Юсифа Мамедова - Веб-разработчик",
      description: "Описание вашего портфолио на русском языке.",
      keywords: "веб-разработка, портфолио, Юсиф Мамедов",
      author: "Юсиф Мамедов",
      header: {
        studioTitle: "Моё Портфолио",
        aboutMe:
          "Привет! Я веб-разработчик с опытом создания красивых и функциональных сайтов.",
      },
      projects: {
        myProjects: "Мои Проекты",
        djBeckermanWebsite: "Сайт DJ Beckerman",
        djBeckermanWebsiteDescription: "Описание проекта сайта DJ Beckerman.",
        g3Project: "Проект G-3",
        g3ProjectDescription: "Описание проекта G-3.",
        businessCard1: "Бизнес Визитка 1",
        businessCard1Description: "Описание бизнес визитки 1.",
        businessCard2: "Бизнес Визитка 2",
        businessCard2Description: "Описание бизнес визитки 2.",
        businessCard3: "Бизнес Визитка 3",
        businessCard3Description: "Описание бизнес визитки 3.",
        businessCard7: "Бизнес Визитка 7",
        businessCard7Description: "Описание бизнес визитки 7.",
        rentCarApplication: "Приложение Rent Car",
        rentCarApplicationDescription: "Описание приложения Rent Car.",
        visitCardProject: "Проект Visit Card",
        visitCardProjectDescription: "Описание проекта Visit Card.",
      },
      pricing: {
        pricing: "Цены",
        mobileApp: "Мобильное Приложение",
        website: "Сайт",
        businessCard: "Бизнес Визитка",
        priceMobileApp: "От 5000 ₽",
        priceWebsite: "От 3000 ₽",
        priceBusinessCard: "От 1000 ₽",
      },
      howIWork: {
        title: "Как Я Работаю",
        steps: [
          {
            title: "Анализ",
            description: "Понимание ваших потребностей и целей.",
          },
          {
            title: "Дизайн",
            description: "Создание привлекательного и удобного дизайна.",
          },
          {
            title: "Разработка",
            description: "Кодирование и реализация функционала.",
          },
          {
            title: "Тестирование",
            description: "Проверка на наличие ошибок и оптимизация.",
          },
          {
            title: "Запуск",
            description: "Размещение сайта в интернете и поддержка.",
          },
        ],
      },
      skills: {
        skills: "Навыки",
        list: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "Git",
          "Responsive Design",
          "SEO",
        ],
      },
      contact: {
        contact: "Связаться со мной",
        yourName: "Ваше Имя",
        yourEmail: "Ваш Email",
        message: "Ваше Сообщение",
        projectType: "Тип Проекта",
        website: "Сайт",
        mobileApp: "Мобильное Приложение",
        businessCard: "Бизнес Визитка",
        send: "Отправить",
        scrollToContact: "Связаться со мной",
        nameRequired: "Пожалуйста, введите ваше имя.",
        emailRequired: "Пожалуйста, введите ваш Email.",
        emailInvalid: "Пожалуйста, введите корректный Email.",
        messageRequired: "Пожалуйста, введите сообщение.",
        statusSuccess: "Сообщение успешно отправлено!",
      },
      footer: {
        footerSection: {
          header: "Заполните бриф",
          description: "Получите бесплатную консультацию по вашему проекту.",
          fillBrief: "Заполнить бриф",
        },
        portfolio: "© 2024 Портфолио Юсифа Мамедова",
      },
      languageName: "Русский",
      languageFlag: RuFlag,
    },
    en: {
      title: "Yosef Mamedov's Portfolio - Web Developer",
      description: "Description of your portfolio in English.",
      keywords: "web development, portfolio, Yosef Mamedov",
      author: "Yosef Mamedov",
      header: {
        studioTitle: "My Portfolio",
        aboutMe:
          "Hello! I'm a web developer with experience in creating beautiful and functional websites.",
      },
      projects: {
        myProjects: "My Projects",
        djBeckermanWebsite: "DJ Beckerman Website",
        djBeckermanWebsiteDescription:
          "Description of DJ Beckerman's website project.",
        g3Project: "G-3 Project",
        g3ProjectDescription: "Description of the G-3 project.",
        businessCard1: "Business Card 1",
        businessCard1Description: "Description of Business Card 1.",
        businessCard2: "Business Card 2",
        businessCard2Description: "Description of Business Card 2.",
        businessCard3: "Business Card 3",
        businessCard3Description: "Description of Business Card 3.",
        businessCard7: "Business Card 7",
        businessCard7Description: "Description of Business Card 7.",
        rentCarApplication: "Rent Car Application",
        rentCarApplicationDescription:
          "Description of the Rent Car application.",
        visitCardProject: "Visit Card Project",
        visitCardProjectDescription: "Description of the Visit Card project.",
      },
      pricing: {
        pricing: "Pricing",
        mobileApp: "Mobile Application",
        website: "Website",
        businessCard: "Business Card",
        priceMobileApp: "From 5000 ₽",
        priceWebsite: "From 3000 ₽",
        priceBusinessCard: "From 1000 ₽",
      },
      howIWork: {
        title: "How I Work",
        steps: [
          {
            title: "Analysis",
            description: "Understanding your needs and goals.",
          },
          {
            title: "Design",
            description: "Creating an attractive and user-friendly design.",
          },
          {
            title: "Development",
            description: "Coding and implementing functionality.",
          },
          {
            title: "Testing",
            description: "Checking for errors and optimization.",
          },
          {
            title: "Launch",
            description: "Deploying the website and providing support.",
          },
        ],
      },
      skills: {
        skills: "Skills",
        list: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "Git",
          "Responsive Design",
          "SEO",
        ],
      },
      contact: {
        contact: "Contact Me",
        yourName: "Your Name",
        yourEmail: "Your Email",
        message: "Your Message",
        projectType: "Project Type",
        website: "Website",
        mobileApp: "Mobile Application",
        businessCard: "Business Card",
        send: "Send",
        scrollToContact: "Contact Me",
        nameRequired: "Please enter your name.",
        emailRequired: "Please enter your Email.",
        emailInvalid: "Please enter a valid Email.",
        messageRequired: "Please enter a message.",
        statusSuccess: "Message sent successfully!",
      },
      footer: {
        footerSection: {
          header: "Fill Out the Brief",
          description: "Get a free consultation for your project.",
          fillBrief: "Fill Out Brief",
        },
        portfolio: "© 2024 Yosef Mamedov's Portfolio",
      },
      languageName: "English",
      languageFlag: EnFlag,
    },
    he: {
      title: "פורטפוליו של יוסף ממדוב - מפתח אתרים",
      description: "תיאור הפורטפוליו שלך בעברית.",
      keywords: "פיתוח אתרים, פורטפוליו, יוסף ממדוב",
      author: "יוסף ממדוב",
      header: {
        studioTitle: "הפורטפוליו שלי",
        aboutMe:
          "שלום! אני מפתח אתרים עם ניסיון ביצירת אתרים יפים ופונקציונליים.",
      },
      projects: {
        myProjects: "הפרויקטים שלי",
        djBeckermanWebsite: "אתר DJ Beckerman",
        djBeckermanWebsiteDescription: "תיאור פרויקט האתר של DJ Beckerman.",
        g3Project: "פרויקט G-3",
        g3ProjectDescription: "תיאור פרויקט G-3.",
        businessCard1: "כרטיס ביקור 1",
        businessCard1Description: "תיאור כרטיס ביקור 1.",
        businessCard2: "כרטיס ביקור 2",
        businessCard2Description: "תיאור כרטיס ביקור 2.",
        businessCard3: "כרטיס ביקור 3",
        businessCard3Description: "תיאור כרטיס ביקור 3.",
        businessCard7: "כרטיס ביקור 7",
        businessCard7Description: "תיאור כרטיס ביקור 7.",
        rentCarApplication: "אפליקציית Rent Car",
        rentCarApplicationDescription: "תיאור אפליקציית Rent Car.",
        visitCardProject: "פרויקט Visit Card",
        visitCardProjectDescription: "תיאור פרויקט Visit Card.",
      },
      pricing: {
        pricing: "מחירים",
        mobileApp: "אפליקציה ניידת",
        website: "אתר",
        businessCard: "כרטיס ביקור",
        priceMobileApp: "מתחיל מ-5000 ₽",
        priceWebsite: "מתחיל מ-3000 ₽",
        priceBusinessCard: "מתחיל מ-1000 ₽",
      },
      howIWork: {
        title: "איך אני עובד",
        steps: [
          {
            title: "אנליזה",
            description: "הבנת הצרכים והמטרות שלך.",
          },
          {
            title: "עיצוב",
            description: "יצירת עיצוב אטרקטיבי וידידותי למשתמש.",
          },
          {
            title: "פיתוח",
            description: "קידוד ויישום הפונקציונליות.",
          },
          {
            title: "בדיקות",
            description: "בדיקה לאיתור שגיאות ואופטימיזציה.",
          },
          {
            title: "השקה",
            description: "פריסת האתר ומתן תמיכה.",
          },
        ],
      },
      skills: {
        skills: "כישורים",
        list: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "Git",
          "עיצוב רספונסיבי",
          "SEO",
        ],
      },
      contact: {
        contact: "צור קשר",
        yourName: "שמך",
        yourEmail: "האימייל שלך",
        message: "ההודעה שלך",
        projectType: "סוג הפרויקט",
        website: "אתר",
        mobileApp: "אפליקציה ניידת",
        businessCard: "כרטיס ביקור",
        send: "שלח",
        scrollToContact: "צור קשר",
        nameRequired: "אנא הכנס את שמך.",
        emailRequired: "אנא הכנס את האימייל שלך.",
        emailInvalid: "אנא הכנס אימייל תקין.",
        messageRequired: "אנא הכנס הודעה.",
        statusSuccess: "ההודעה נשלחה בהצלחה!",
      },
      footer: {
        footerSection: {
          header: "מלא את הבריף",
          description: "קבל ייעוץ חינמי לפרויקט שלך.",
          fillBrief: "מלא בריף",
        },
        portfolio: "© 2024 פורטפוליו של יוסף ממדוב",
      },
      languageName: "עברית",
      languageFlag: HeFlag,
    },
  };

  // Состояние для выбранного языка
  const [language, setLanguage] = useState("ru");

  // Ref для закрытия выпадающего списка при клике вне
  const dropdownRef = useRef(null);

  // Функция для изменения языка
  const changeLanguage = (lng) => {
    setLanguage(lng);
    // Изменение направления текста для иврита
    if (lng === "he") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
    setDropdownOpen(false); // Закрыть выпадающий список после выбора
  };

  // Состояния для модального окна и формы
  const [modalImage, setModalImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: language === "he" ? "אתר" : "Сайт",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  // Закрыть модальное окно
  const closeModal = useCallback(() => {
    setModalImage(null);
    document.body.style.overflow = "auto";
  }, []);

  // Обработчик клавиши Esc
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  // useEffect для добавления/удаления слушателя событий
  useEffect(() => {
    if (modalImage) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalImage, handleKeyDown]);

  // Открыть модальное окно
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    document.body.style.overflow = "hidden"; // Отключить прокрутку при открытом модале
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
      [name]: "",
    }));
  };

  // Валидация формы
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim())
      newErrors.name = translations[language].contact.nameRequired;
    if (!formData.email.trim()) {
      newErrors.email = translations[language].contact.emailRequired;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = translations[language].contact.emailInvalid;
    }
    if (!formData.message.trim())
      newErrors.message = translations[language].contact.messageRequired;
    return newErrors;
  };

  // Функция для отправки сообщения в Telegram
  const sendToTelegram = (message) => {
    const telegramBotToken = "YOUR_TELEGRAM_BOT_TOKEN"; // Замените на ваш токен бота
    const telegramChatId = "1077514837";
    const telegramMessage = encodeURIComponent(message);
    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${telegramMessage}`;

    fetch(telegramUrl)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          console.error("Telegram Error:", data);
        }
      })
      .catch((error) => console.error("Telegram Error:", error));
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
    const fullMessage =
      language === "he"
        ? `
      בקשה חדשה מהפורטפוליו:
      שם: ${name}
      אימייל: ${email}
      סוג הפרויקט: ${projectType}
      הודעה: ${message}
    `
        : `
      Новая заявка с портфолио:
      Имя: ${name}
      Email: ${email}
      Тип проекта: ${projectType}
      Сообщение: ${message}
    `;

    // Отправка сообщения в Telegram
    sendToTelegram(fullMessage);

    // Очистка формы и отображение статуса
    setFormData({
      name: "",
      email: "",
      projectType: language === "he" ? "אתר" : "Сайт",
      message: "",
    });
    setStatus(translations[language].contact.statusSuccess);
    setErrors({});
  };

  // Функция для плавного прокручивания к контактной секции
  const scrollToContact = (e) => {
    e.stopPropagation(); // Останавливаем всплытие события
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Функция для скачивания брифа
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Brief_for_Web_or_App_Creation.docx";
    link.download = "Brief_for_Web_or_App_Creation.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Состояние для управления выпадающим списком
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Обработчик клика вне выпадающего списка для его закрытия
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <Suspense fallback="Loading...">
      <div
        className="App"
        style={{
          backgroundImage: `url(${BestBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Meta Tags и Google Analytics */}
        <Helmet
          htmlAttributes={{
            lang: language === "he" ? "he" : language === "ru" ? "ru" : "en",
          }}
        >
          {/* Favicon и иконки */}
          <link
            rel="icon"
            href="/favicon.svg"
            type="image/svg+xml"
            sizes="any"
          />
          <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/favicon.svg" />

          {/* Основные мета-теги */}
          <title>{translations[language].title}</title>
          <meta
            name="description"
            content={translations[language].description}
          />
          <meta name="keywords" content={translations[language].keywords} />
          <meta name="author" content={translations[language].author} />

          {/* Open Graph */}
          <meta property="og:title" content={translations[language].title} />
          <meta
            property="og:description"
            content={translations[language].description}
          />
          <meta property="og:image" content="/favicon.svg" />
          <meta property="og:url" content="https://www.yosef-portfolio.ru/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:locale"
            content={
              language === "he"
                ? "he_IL"
                : language === "ru"
                ? "ru_RU"
                : "en_US"
            }
          />
          <meta property="og:locale:alternate" content="ru_RU" />
          <meta property="og:locale:alternate" content="en_US" />
          <meta property="og:locale:alternate" content="he_IL" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={translations[language].title} />
          <meta
            name="twitter:description"
            content={translations[language].description}
          />
          <meta name="twitter:image" content="/favicon.svg" />

          {/* Географические мета-теги для Праги */}
          <meta name="geo.region" content="CZ-PR" />
          <meta name="geo.placename" content="Prague" />
          <meta name="geo.position" content="50.0755;14.4378" />
          <meta name="ICBM" content="50.0755,14.4378" />

          {/* Структурированные данные */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Yosef Mamedov's Portfolio",
              url: "https://www.yosef-portfolio.ru/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.yosef-portfolio.ru/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 50.0755,
                longitude: 14.4378,
              },
            })}
          </script>

          {/* Google Analytics */}
          {/* Google tag (gtag.js) */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-VGNWSHB9TC"
          ></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-VGNWSHB9TC', {
                'page_location': window.location.href,
                'page_path': window.location.pathname
              });
            `}
          </script>
        </Helmet>

        {/* Переключатель языков (Кастомный выпадающий список с флагами) */}
        <div className="language-switcher" ref={dropdownRef}>
          <button
            className="language-button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            aria-label="Select Language"
          >
            <img
              src={translations[language].languageFlag}
              alt={`${translations[language].languageName} flag`}
              className="language-flag-image"
            />
            <span className="language-code">{language.toUpperCase()}</span>
            <span
              className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`}
            ></span>
          </button>
          {dropdownOpen && (
            <ul className="language-dropdown">
              {Object.keys(translations).map((lng) => (
                <li key={lng}>
                  <button
                    className="language-option-button"
                    onClick={() => changeLanguage(lng)}
                  >
                    <img
                      src={translations[lng].languageFlag}
                      alt={`${translations[lng].languageName} flag`}
                      className="language-option-flag"
                    />
                    <span className="language-option-code">
                      {lng.toUpperCase()}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Overlay */}
        <div className="background-overlay"></div>

        {/* Модальное окно */}
        {modalImage &&
          ReactDOM.createPortal(
            <div
              className="modal"
              onClick={closeModal}
              aria-modal="true"
              role="dialog"
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close-button"
                  onClick={closeModal}
                  aria-label="Close Modal"
                >
                  <FaTimes size={24} />
                </button>
                <img
                  src={modalImage}
                  alt="Project Fullscreen"
                  className="modal-image"
                />
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
            <img
              src={PortfolioIcon}
              alt="Моё портфолио иконка"
              className="portfolio-icon"
            />
            <h1 className="studio-title">
              {translations[language].header.studioTitle}
            </h1>
            <p className="about-me">{translations[language].header.aboutMe}</p>
            {/* Кнопка "Связаться со мной" без вызова модала */}
            <button
              className="contact-button-top"
              onClick={(e) => scrollToContact(e)}
            >
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
                alt: "DJ Beckerman Website",
                title: translations[language].projects.djBeckermanWebsite,
                description:
                  translations[language].projects.djBeckermanWebsiteDescription,
              },
              {
                img: G3,
                alt: "G-3 Project",
                title: translations[language].projects.g3Project,
                description:
                  translations[language].projects.g3ProjectDescription,
              },
              {
                img: BusinessCard,
                alt: "Business Card 1",
                title: translations[language].projects.businessCard1,
                description:
                  translations[language].projects.businessCard1Description,
              },
              {
                img: BusinessCard2,
                alt: "Business Card 2",
                title: translations[language].projects.businessCard2,
                description:
                  translations[language].projects.businessCard2Description,
              },
              {
                img: BusinessCard3,
                alt: "Business Card 3",
                title: translations[language].projects.businessCard3,
                description:
                  translations[language].projects.businessCard3Description,
              },
              {
                img: BusinessCard7,
                alt: "Business Card 7",
                title: translations[language].projects.businessCard7,
                description:
                  translations[language].projects.businessCard7Description,
              },
              {
                img: RentCar,
                alt: "Rent Car Application",
                title: translations[language].projects.rentCarApplication,
                description:
                  translations[language].projects.rentCarApplicationDescription,
              },
              {
                img: VisitCard,
                alt: "Visit Card Project",
                title: translations[language].projects.visitCardProject,
                description:
                  translations[language].projects.visitCardProjectDescription,
              },
            ].map((project, index) => (
              <div className="project-item" key={index}>
                <div
                  className="floating-container"
                  onClick={() => openModal(project.img)}
                >
                  <div className="project-inner">
                    <div className="project-front">
                      <img
                        src={project.img}
                        alt={project.alt}
                        className={`project-screenshot ${
                          project.title ===
                          translations[language].projects.rentCarApplication
                            ? "rent-car-screenshot"
                            : ""
                        } ${
                          project.title ===
                          translations[language].projects.visitCardProject
                            ? "visit-card-screenshot"
                            : ""
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
              <p className="price">
                {translations[language].pricing.priceMobileApp}
              </p>
            </div>
            <div className="pricing-card">
              <FaLaptopCode className="pricing-icon" />
              <h3>{translations[language].pricing.website}</h3>
              <p className="price">
                {translations[language].pricing.priceWebsite}
              </p>
            </div>
            <div className="pricing-card">
              <FaIdBadge className="pricing-icon" />
              <h3>{translations[language].pricing.businessCard}</h3>
              <p className="price">
                {translations[language].pricing.priceBusinessCard}
              </p>
            </div>
          </div>
        </section>

        {/* How I Work Section */}
        <section className="how-i-work-section">
          <h2>{translations[language].howIWork.title}</h2>
          <div className="steps-container">
            {translations[language].howIWork.steps.map((step, index) => (
              <div className="step-card" key={index}>
                <FaLightbulb className="step-icon" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
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
                className={`contact-input ${errors.name ? "error" : ""}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={translations[language].contact.yourEmail}
                required
                className={`contact-input ${errors.email ? "error" : ""}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div className="form-group">
              <select
                name="projectType"
                className="styled-select contact-input"
                required
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value={language === "he" ? "אתר" : "Сайт"}>
                  {translations[language].pricing.website}
                </option>
                <option
                  value={
                    language === "he"
                      ? "אפליקציה ניידת"
                      : "Мобильное приложение"
                  }
                >
                  {translations[language].pricing.mobileApp}
                </option>
                <option
                  value={language === "he" ? "כרטיס ביקור" : "Бизнес-визитка"}
                >
                  {translations[language].pricing.businessCard}
                </option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={translations[language].contact.message}
                required
                className={`contact-textarea ${errors.message ? "error" : ""}`}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>
            <button type="submit" className="contact-button">
              {translations[language].contact.send}
            </button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </section>

        {/* Новая Footer Section */}
        <div className="footer-section">
          <div className="footer-content">
            <h2>{translations[language].footer.footerSection.header}</h2>
            <p>{translations[language].footer.footerSection.description}</p>
            <button className="footer-button" onClick={handleDownload}>
              {translations[language].footer.footerSection.fillBrief}
              <span className="arrow"></span>
            </button>
          </div>
        </div>

        {/* Существующий Footer */}
        <footer>
          <p>{translations[language].footer.portfolio}</p>
          <div className="social-icons">
            <a
              href="https://t.me/beckerman979"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/iusifmamedov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Iusif797"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </footer>
      </div>
    </Suspense>
  );
}

export default App;
