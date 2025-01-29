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
  FaLightbulb,
  FaQuoteLeft,
} from "react-icons/fa";
import ReactDOM from "react-dom";

// ===== Слайдер для отзывов (Testimonials) =====
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Импорт изображений (no parallax-bg.jpg!)
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
import MacbookAirCastawey from "./assets/Macbook-Air-castawey.netlify.app.png";

// Переводы
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
      djBeckermanWebsiteDescription:
        "Сайт DJ Beckerman представляет собой современную платформу для продвижения музыкальной карьеры DJ Beckerman. Здесь вы найдете информацию о предстоящих мероприятиях, последних треках и эксклюзивных интервью.",
      g3Project: "Проект G-3",
      g3ProjectDescription:
        "Проект G-3 – это инновационное веб-приложение, разработанное для улучшения взаимодействия пользователей с цифровыми сервисами. Включает в себя передовые технологии и интуитивно понятный дизайн.",
      businessCard1: "Бизнес Визитка 1",
      businessCard1Description:
        "Бизнес визитка 1 представляет собой элегантный дизайн, отражающий профессионализм и индивидуальность владельца. Создана с использованием современных графических решений.",
      businessCard2: "Бизнес Визитка 2",
      businessCard2Description:
        "Бизнес визитка 2 сочетает в себе минимализм и функциональность, идеально подходя для современных предпринимателей. Высокое качество печати гарантирует долговечность.",
      businessCard3: "Бизнес Визитка 3",
      businessCard3Description:
        "Бизнес визитка 3 разработана с акцентом на креативность и уникальность, подчеркивая индивидуальный подход к каждому клиенту. Использованы нестандартные материалы для особого эффекта.",
      businessCard7: "Бизнес Визитка 7",
      businessCard7Description:
        "Бизнес визитка 7 – это пример сочетания классического стиля и современных трендов. Идеально подходит для профессионалов, стремящихся к элегантности.",
      rentCarApplication: "Приложение Rent Car",
      rentCarApplicationDescription:
        "Приложение Rent Car позволяет быстро и удобно арендовать автомобили через мобильное устройство. Включает интуитивно понятный интерфейс и широкий выбор моделей.",
      visitCardProject: "Проект Visit Card",
      visitCardProjectDescription:
        "Проект Visit Card предоставляет современные решения для создания виртуальных визиток, интегрированных с социальными сетями и профессиональными платформами.",
      castaweyWebsite: "Сайт Castawey",
      castaweyWebsiteDescription:
        "Сайт Castawey.netlify.app представляет собой современную платформу для демонстрации услуг компании Castawey. Включает портфолио, контактную информацию и интерактивные элементы для взаимодействия с пользователями.",
    },
    pricing: {
      pricing: "Цены",
      mobileApp: "Мобильное Приложение",
      website: "Сайт",
      businessCard: "Бизнес Визитка",
      priceMobileApp: "От 200 $",
      priceWebsite: "От 100 $",
      priceBusinessCard: "От 50 $",
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
    testimonials: {
      title: "Отзывы",
      list: [
        {
          name: "Иван Петров",
          feedback:
            "Отличный специалист, выполнил всё быстро и качественно. Рекомендую!",
        },
        {
          name: "ООО «Прогресс»",
          feedback:
            "Работаем с Юсифом не в первый раз. Всегда на связи, соблюдает сроки, предлагает свежие идеи.",
        },
        {
          name: "Александр",
          feedback:
            "Заказал лендинг, результат превзошёл ожидания. Буду обращаться снова!",
        },
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
  },
  en: {
    title: "Yosef Mamedov's Portfolio - Web Developer",
    description: "Description of your portfolio in English.",
    keywords: "web development, portfolio, Yosef Mamedov",
    author: "Yosef Mamедov",
    header: {
      studioTitle: "My Portfolio",
      aboutMe:
        "Hello! I'm a web developer with experience in creating beautiful and functional websites.",
    },
    projects: {
      myProjects: "My Projects",
      djBeckermanWebsite: "DJ Beckerman Website",
      djBeckermanWebsiteDescription:
        "The DJ Beckerman website serves as a modern platform for promoting DJ Beckerman's musical career. Here you can find information about upcoming events, latest tracks, and exclusive interviews.",
      g3Project: "G-3 Project",
      g3ProjectDescription:
        "The G-3 Project is an innovative web application designed to enhance user interaction with digital services. It incorporates cutting-edge technologies and an intuitive design.",
      businessCard1: "Business Card 1",
      businessCard1Description:
        "Business Card 1 features an elegant design that reflects the professionalism and individuality of the owner. Created using modern graphic solutions.",
      businessCard2: "Business Card 2",
      businessCard2Description:
        "Business Card 2 combines minimalism and functionality, perfect for modern entrepreneurs. High-quality printing ensures durability.",
      businessCard3: "Business Card 3",
      businessCard3Description:
        "Business Card 3 is designed with an emphasis on creativity and uniqueness, highlighting an individual approach to each client. Unconventional materials are used for a special effect.",
      businessCard7: "Business Card 7",
      businessCard7Description:
        "Business Card 7 is an example of combining classic style with modern trends. Perfect for professionals seeking elegance.",
      rentCarApplication: "Rent Car Application",
      rentCarApplicationDescription:
        "The Rent Car application allows you to quickly and conveniently rent cars through a mobile device. It features an intuitive interface and a wide selection of models.",
      visitCardProject: "Visit Card Project",
      visitCardProjectDescription:
        "The Visit Card Project offers modern solutions for creating virtual business cards, integrated with social networks and professional platforms.",
      castaweyWebsite: "Castawey Website",
      castaweyWebsiteDescription:
        "The Castawey.netlify.app website is a modern platform for showcasing Castawey company's services. It includes a portfolio, contact information, and interactive elements for user engagement.",
    },
    pricing: {
      pricing: "Pricing",
      mobileApp: "Mobile Application",
      website: "Website",
      businessCard: "Business Card",
      priceMobileApp: "From 200 $",
      priceWebsite: "From 100 $",
      priceBusinessCard: "From 50 $",
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
    testimonials: {
      title: "Testimonials",
      list: [
        {
          name: "John Doe",
          feedback:
            "Amazing experience! Everything was done quickly and with high quality.",
        },
        {
          name: "TechCorp LLC",
          feedback:
            "We have been collaborating with Yosef multiple times. Always meets deadlines and offers fresh ideas.",
        },
        {
          name: "Alexander",
          feedback:
            "Ordered a landing page, the result exceeded expectations. Will come back again!",
        },
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
      djBeckermanWebsiteDescription:
        "אתר DJ Beckerman מהווה פלטפורמה מודרנית לקידום הקריירה המוזיקלית של DJ Beckerman. כאן תוכלו למצוא מידע על אירועים קרובים, טראקים אחרונים וראיונות בלעדיים.",
      g3Project: "פרויקט G-3",
      g3ProjectDescription:
        "פרויקט G-3 הוא אפליקציית ווב חדשנית שנועדה לשפר את האינטראקציה של המשתמשים עם שירותים דיגיטליים. הוא כולל טכנולוגיות מתקדמות ועיצוב אינטואיטיבי.",
      businessCard1: "כרטיס ביקור 1",
      businessCard1Description:
        "כרטיס ביקור 1 מציג עיצוב אלגנטי שמשקף את המקצועיות והאינדיבידואליות של הבעלים. נוצר תוך שימוש בפתרונות גרפיים מודרניים.",
      businessCard2: "כרטיס ביקור 2",
      businessCard2Description:
        "כרטיס ביקור 2 משלב מינימליזם ופונקציונליות, מושלם ליזמים מודרניים. הדפסה באיכות גבוהה מבטיחה עמידות.",
      businessCard3: "כרטיס ביקור 3",
      businessCard3Description:
        "כרטיס ביקור 3 נוצר עם דגש על יצירתיות וייחודיות, מדגיש גישה אישית לכל לקוח. נעשה שימוש בחומרים לא קונבנציונליים לאפקט מיוחד.",
      businessCard7: "כרטיס ביקור 7",
      businessCard7Description:
        "כרטיס ביקור 7 הוא דוגמה לשילוב של סגנון קלאסי עם מגמות מודרניות. מושלם לאנשי מקצוע המחפשים אלגנטיות.",
      rentCarApplication: "אפליקציית Rent Car",
      rentCarApplicationDescription:
        "אפליקציית Rent Car מאפשרת השכרת רכבים במהירות ובנוחות דרך מכשיר נייד. כוללת ממשק אינטואיטיבי ומבחר רחב של דגמים.",
      visitCardProject: "פרויקט Visit Card",
      visitCardProjectDescription:
        "פרויקט Visit Card מציע פתרונות מודרניים ליצירת כרטיסי ביקור וירטואליים, המשולבים עם רשתות חברתיות ופלטפורמות מקצועיות.",
      castaweyWebsite: "אתר Castawey",
      castaweyWebsiteDescription:
        "אתר Castawey.netlify.app הוא פלטפורמה מודרנית להצגת שירותי חברת Castawey. כולל פורטפוליו, מידע ליצירת קשר ואלמנטים אינטראקטיביים לאינטראקציה עם המשתמשים.",
    },
    pricing: {
      pricing: "מחירים",
      mobileApp: "אפליקציה ניידת",
      website: "אתר",
      businessCard: "כרטיס ביקור",
      priceMobileApp: "מתחיל מ-200 $",
      priceWebsite: "מתחיל מ-100 $",
      priceBusinessCard: "מתחיל מ-50 $",
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
    testimonials: {
      title: "חוות דעת",
      list: [
        {
          name: "דניאל",
          feedback:
            "עבודה מקצועית ומהירה. ממליץ בחום!",
        },
        {
          name: "חברת FutureTech",
          feedback:
            "עובדים עם יוסף כבר כמה פרויקטים, תמיד זמין, עומד בלוחות זמנים, ומציע רעיונות מקוריים.",
        },
        {
          name: "אלכסנדר",
          feedback:
            "הזמנתי עמוד נחיתה, התוצאה עלתה על הציפיות. אפנה שוב!",
        },
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
  },
};

// =========================================
//               КОМПОНЕНТ
// =========================================
function App() {
  // Состояние языка
  const [language, setLanguage] = useState("ru");

  // Для выпадающего списка
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Модальное окно (изображения проектов)
  const [modalImage, setModalImage] = useState(null);

  const closeModal = useCallback(() => {
    setModalImage(null);
    document.body.style.overflow = "auto";
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

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

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  // Смена языка
  const changeLanguage = (lng) => {
    setLanguage(lng);
    if (lng === "he") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
    setDropdownOpen(false);
  };

  // Состояние формы
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: language === "he" ? "אתר" : "Сайт",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  // Обработка формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Валидация
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

  // --- Telegram ---
  const sendToTelegram = (message) => {
    // Вставляем ваш реальный токен
    const telegramBotToken =
      "7024597156:AAGG4sChJgJ8PZQyISPkqbUFZ6KH2zJC1XE";
    // Чат ID:
    const telegramChatId = "1077514837";

    const telegramMessage = encodeURIComponent(message);
    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${telegramMessage}`;

    fetch(telegramUrl)
      .then((res) => res.json())
      .then((data) => {
        if (!data.ok) {
          console.error("Telegram Error:", data);
        }
      })
      .catch((error) => console.error("Telegram Error:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const { name, email, projectType, message } = formData;
    const fullMessage =
      language === "he"
        ? `
      בקשה חדשה מהפורטפוליו:
      שם: ${name}
      אימייל: ${email}
      סוג הפרויקט: ${projectType}
      הודעה: ${message}
    `
        : language === "en"
        ? `
      New request from portfolio:
      Name: ${name}
      Email: ${email}
      Project Type: ${projectType}
      Message: ${message}
    `
        : `
      Новая заявка с портфолио:
      Имя: ${name}
      Email: ${email}
      Тип проекта: ${projectType}
      Сообщение: ${message}
    `;

    // Отправить в Телеграм
    sendToTelegram(fullMessage);

    // Очистка полей
    setFormData({
      name: "",
      email: "",
      projectType:
        language === "he" ? "אתר" : language === "en" ? "Website" : "Сайт",
      message: "",
    });
    setStatus(translations[language].contact.statusSuccess);
    setErrors({});
  };

  // Прокрутка
  const scrollToContact = (e) => {
    e.stopPropagation();
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Скачивание брифа
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Brief_for_Web_or_App_Creation.docx";
    link.download = "Brief_for_Web_or_App_Creation.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Закрытие выпадающего списка при клике вне
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

  // Настройки слайдера (Отзывы)
  const testimonialsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // мобильная адаптация
    responsive: [
      {
        breakpoint: 480, // при 480px и меньше показываем 1 отзыв
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Suspense fallback="Loading...">
      {/* Фон всего приложения */}
      <div
        className="App"
        style={{
          backgroundImage: `url(${BestBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // Закрепляем фон за всем окном
          backgroundAttachment: "fixed",
        }}
      >
        <Helmet
          htmlAttributes={{
            lang: language === "he" ? "he" : language === "ru" ? "ru" : "en",
          }}
        >
          <link
            rel="icon"
            href="/favicon.svg"
            type="image/svg+xml"
            sizes="any"
          />
          <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/favicon.svg" />

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

          {/* Географические мета-теги */}
          <meta name="geo.region" content="CZ-PR" />
          <meta name="geo.placename" content="Prague" />
          <meta name="geo.position" content="50.0755;14.4378" />
          <meta name="ICBM" content="50.0755,14.4378" />

          {/* JSON-LD */}
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
        </Helmet>

        {/* Переключатель языка */}
        <div className="language-switcher" ref={dropdownRef}>
          <button
            className={`language-button ${dropdownOpen ? "active" : ""}`}
            onClick={() => setDropdownOpen((prev) => !prev)}
            aria-label="Select Language"
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
          >
            <span className="language-code">
              {translations[language].languageName}
            </span>
          </button>
          {dropdownOpen && (
            <ul className="language-dropdown" role="listbox">
              {Object.keys(translations).map((lng) => (
                <li key={lng}>
                  <button
                    className="language-option-button"
                    onClick={() => changeLanguage(lng)}
                    role="option"
                    aria-selected={language === lng}
                  >
                    <span className="language-option-code">
                      {lng.toUpperCase()} - {translations[lng].languageName}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Overlay */}
        <div className="background-overlay"></div>

        {/* Модальное окно для картинок */}
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
          <div className="header-decorative decoration-4"></div>
          <div className="header-decorative decoration-5"></div>
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
            <button
              className="contact-button-top"
              onClick={(e) => scrollToContact(e)}
            >
              {translations[language].contact.scrollToContact}
              <span className="arrow"></span>
            </button>
          </div>
        </header>

        {/* Projects (с "псевдо-параллаксом" на CSS) */}
        <section className="projects-section">
          <h2>{translations[language].projects.myProjects}</h2>
          <div className="projects-container">
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
              {
                img: MacbookAirCastawey,
                alt: "Castawey Website",
                title: translations[language].projects.castaweyWebsite,
                description:
                  translations[language].projects.castaweyWebsiteDescription,
                link: "https://castawey.netlify.app/",
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
                        className="project-screenshot"
                      />
                    </div>
                    <div className="project-back">
                      <p>{project.description}</p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          {language === "he"
                            ? "בקר באתר"
                            : language === "en"
                            ? "Visit Website"
                            : "Посетить сайт"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Цены */}
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

        {/* Как я работаю */}
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

        {/* Навыки */}
        <section className="skills">
          <h2>{translations[language].skills.skills}</h2>
          <ul>
            {translations[language].skills.list.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        {/* Отзывы */}
        <section className="testimonials-section">
          <h2>{translations[language].testimonials.title}</h2>
          <Slider {...testimonialsSliderSettings}>
            {translations[language].testimonials.list.map((item, i) => (
              <div className="testimonial-card" key={i}>
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{item.feedback}</p>
                <h4 className="testimonial-name">— {item.name}</h4>
              </div>
            ))}
          </Slider>
        </section>

        {/* Контакты */}
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
                <option
                  value={
                    language === "he"
                      ? "אתר"
                      : language === "en"
                      ? "Website"
                      : "Сайт"
                  }
                >
                  {translations[language].pricing.website}
                </option>
                <option
                  value={
                    language === "he"
                      ? "אפליקציה ניידת"
                      : language === "en"
                      ? "Mobile Application"
                      : "Мобильное приложение"
                  }
                >
                  {translations[language].pricing.mobileApp}
                </option>
                <option
                  value={
                    language === "he"
                      ? "כרטיס ביקור"
                      : language === "en"
                      ? "Business Card"
                      : "Бизнес-визитка"
                  }
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

        {/* Блок футер (бриф) */}
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

        {/* Основной футер */}
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
