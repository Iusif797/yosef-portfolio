import React, { useState, useCallback, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

// Компоненты
import LanguageSwitcher from './components/LanguageSwitcher';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import PricingSection from './components/PricingSection';
import ContactForm from './components/ContactForm';
import Modal from './components/Modal';

// Переводы
const translations = {
  ru: {
    title: 'Портфолио Юсифа Мамедова - Веб-разработчик',
    description: 'Профессиональная веб-разработка в Чехии и Европе. Создание современных сайтов, мобильных приложений и бизнес-решений.',
    keywords: 'веб-разработка, портфолио, Юсиф Мамедов',
    author: 'Юсиф Мамедов',
    languageName: 'Русский',
    header: {
      studioTitle: 'Моё Портфолио',
      aboutMe: 'Full-Stack разработчик с 5+ годами опыта. Создаю современные веб-приложения, которые увеличивают конверсию на 40% и привлекают миллионы пользователей. Специализируюсь на React, Node.js и современных технологиях.',
    },
    projects: {
      myProjects: 'Мои Проекты',
      djBeckermanWebsite: 'Сайт DJ Beckerman',
      djBeckermanWebsiteDescription: 'Современная платформа для продвижения музыкальной карьеры с информацией о мероприятиях и треках.',
      g3Project: 'Проект G-3',
      g3ProjectDescription: 'Инновационное веб-приложение для улучшения взаимодействия пользователей с цифровыми сервисами.',
      businessCard1: 'Бизнес Визитка 1',
      businessCard1Description: 'Элегантный дизайн, отражающий профессионализм и индивидуальность владельца.',
      businessCard2: 'Бизнес Визитка 2',
      businessCard2Description: 'Минимализм и функциональность для современных предпринимателей.',
      businessCard3: 'Бизнес Визитка 3',
      businessCard3Description: 'Креативный дизайн с акцентом на уникальность и индивидуальный подход.',
      rentCarApplication: 'Приложение Rent Car',
      rentCarApplicationDescription: 'Удобное мобильное приложение для аренды автомобилей с интуитивным интерфейсом.',
      cafeProject: 'Кафе-проект',
      cafeProjectDescription: 'Современный сайт для уютного кафе с интерактивным меню и системой бронирования.',
      baceryProject: 'Пекарня-проект',
      baceryProjectDescription: 'Инновационный веб-сайт пекарни с каталогом продукции и онлайн-заказами.',
      castaweyWebsite: 'Сайт Castawey',
      castaweyWebsiteDescription: 'Современная платформа для демонстрации услуг с портфолио и интерактивными элементами.',
    },
    pricing: {
      pricing: 'Цены',
      mobileApp: 'Мобильное Приложение',
      website: 'Сайт',
      businessCard: 'Бизнес Визитка',
      priceMobileApp: 'От 200 $',
      priceWebsite: 'От 100 $',
      priceBusinessCard: 'От 50 $',
    },
    contact: {
      contact: 'Связаться со мной',
      yourName: 'Ваше Имя',
      yourEmail: 'Ваш Email',
      message: 'Ваше Сообщение',
      send: 'Отправить',
      scrollToContact: 'Связаться со мной',
      nameRequired: 'Пожалуйста, введите ваше имя.',
      emailRequired: 'Пожалуйста, введите ваш Email.',
      emailInvalid: 'Пожалуйста, введите корректный Email.',
      messageRequired: 'Пожалуйста, введите сообщение.',
      statusSuccess: 'Сообщение успешно отправлено!',
    },
  },
  en: {
    title: "Yosef Mamedov's Portfolio - Web Developer",
    description: 'Professional web development in Czech Republic and Europe. Creating modern websites, mobile applications and business solutions.',
    keywords: 'web development, portfolio, Yosef Mamedov',
    author: 'Yosef Mamedov',
    languageName: 'English',
    header: {
      studioTitle: 'My Portfolio',
      aboutMe: "Full-Stack Developer with 5+ years of experience. I create modern web applications that increase conversion by 40% and attract millions of users. Specialized in React, Node.js and cutting-edge technologies.",
    },
    projects: {
      myProjects: 'My Projects',
      djBeckermanWebsite: 'DJ Beckerman Website',
      djBeckermanWebsiteDescription: 'Modern platform for promoting musical career with event information and tracks.',
      g3Project: 'G-3 Project',
      g3ProjectDescription: 'Innovative web application to enhance user interaction with digital services.',
      businessCard1: 'Business Card 1',
      businessCard1Description: 'Elegant design reflecting professionalism and individuality of the owner.',
      businessCard2: 'Business Card 2',
      businessCard2Description: 'Minimalism and functionality for modern entrepreneurs.',
      businessCard3: 'Business Card 3',
      businessCard3Description: 'Creative design with emphasis on uniqueness and individual approach.',
      rentCarApplication: 'Rent Car Application',
      rentCarApplicationDescription: 'Convenient mobile application for car rental with intuitive interface.',
      cafeProject: 'Cafe Project',
      cafeProjectDescription: 'Modern website for cozy cafe with interactive menu and booking system.',
      baceryProject: 'Bakery Project',
      baceryProjectDescription: 'Innovative bakery website with product catalog and online orders.',
      castaweyWebsite: 'Castawey Website',
      castaweyWebsiteDescription: 'Modern platform for showcasing services with portfolio and interactive elements.',
    },
    pricing: {
      pricing: 'Pricing',
      mobileApp: 'Mobile Application',
      website: 'Website',
      businessCard: 'Business Card',
      priceMobileApp: 'From 200 $',
      priceWebsite: 'From 100 $',
      priceBusinessCard: 'From 50 $',
    },
    contact: {
      contact: 'Contact Me',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      message: 'Your Message',
      send: 'Send',
      scrollToContact: 'Contact Me',
      nameRequired: 'Please enter your name.',
      emailRequired: 'Please enter your Email.',
      emailInvalid: 'Please enter a valid Email.',
      messageRequired: 'Please enter a message.',
      statusSuccess: 'Message sent successfully!',
    },
  },
  he: {
    title: 'פורטפוליו של יוסף ממדוב - מפתח אתרים',
    description: 'פיתוח אתרים מקצועי בצ\'כיה ואירופה. יצירת אתרים מודרניים, אפליקציות ניידות ופתרונות עסקיים.',
    keywords: 'פיתוח אתרים, פורטפוליו, יוסף ממדוב',
    author: 'יוסף ממדוב',
    languageName: 'עברית',
    header: {
      studioTitle: 'הפורטפוליו שלי',
      aboutMe: 'מפתח Full-Stack עם 5+ שנות ניסיון. יוצר אפליקציות ווב מודרניות שמגדילות המרה ב-40% ומושכות מיליוני משתמשים. מתמחה ב-React, Node.js וטכנולוגיות מתקדמות.',
    },
    projects: {
      myProjects: 'הפרויקטים שלי',
      djBeckermanWebsite: 'אתר DJ Beckerman',
      djBeckermanWebsiteDescription: 'פלטפורמה מודרנית לקידום קריירה מוזיקלית עם מידע על אירועים וטראקים.',
      g3Project: 'פרויקט G-3',
      g3ProjectDescription: 'אפליקציית ווב חדשנית לשיפור האינטראקציה של המשתמשים עם שירותים דיגיטליים.',
      businessCard1: 'כרטיס ביקור 1',
      businessCard1Description: 'עיצוב אלגנטי המשקף מקצועיות ואינדיבידואליות של הבעלים.',
      businessCard2: 'כרטיס ביקור 2',
      businessCard2Description: 'מינימליזם ופונקציונליות ליזמים מודרניים.',
      businessCard3: 'כרטיס ביקור 3',
      businessCard3Description: 'עיצוב יצירתי עם דגש על ייחודיות וגישה אישית.',
      rentCarApplication: 'אפליקציית השכרת רכב',
      rentCarApplicationDescription: 'אפליקציה ניידת נוחה להשכרת רכבים עם ממשק אינטואיטיבי.',
      cafeProject: 'פרויקט בית קפה',
      cafeProjectDescription: 'אתר מודרני לבית קפה נעים עם תפריט אינטראקטיבי ומערכת הזמנות.',
      baceryProject: 'פרויקט מאפייה',
      baceryProjectDescription: 'אתר מאפייה חדשני עם קטלוג מוצרים והזמנות אונליין.',
      castaweyWebsite: 'אתר Castawey',
      castaweyWebsiteDescription: 'פלטפורמה מודרנית להצגת שירותים עם פורטפוליו ואלמנטים אינטראקטיביים.',
    },
    pricing: {
      pricing: 'מחירים',
      mobileApp: 'אפליקציה ניידת',
      website: 'אתר',
      businessCard: 'כרטיס ביקור',
      priceMobileApp: 'מ-200 $',
      priceWebsite: 'מ-100 $',
      priceBusinessCard: 'מ-50 $',
    },
    contact: {
      contact: 'צור קשר',
      yourName: 'שמך',
      yourEmail: 'האימייל שלך',
      message: 'ההודעה שלך',
      send: 'שלח',
      scrollToContact: 'צור קשר',
      nameRequired: 'אנא הכנס את שמך.',
      emailRequired: 'אנא הכנס את האימייל שלך.',
      emailInvalid: 'אנא הכנס אימייל תקין.',
      messageRequired: 'אנא הכנס הודעה.',
      statusSuccess: 'ההודעה נשלחה בהצלחה!',
    },
  },
};

function App() {
  const [language, setLanguage] = useState('ru');
  const [modalImage, setModalImage] = useState(null);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    document.body.dir = lng === 'he' ? 'rtl' : 'ltr';
  };

  const openModal = useCallback((imageSrc) => {
    setModalImage(imageSrc);
  }, []);

  const closeModal = useCallback(() => {
    setModalImage(null);
  }, []);

  const scrollToContact = useCallback((e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <Helmet
          htmlAttributes={{
            lang: language === 'he' ? 'he' : language === 'ru' ? 'ru' : 'en',
          }}
        >
          <title>{translations[language].title}</title>
          <meta name="description" content={translations[language].description} />
          <meta name="keywords" content={translations[language].keywords} />
          <meta name="author" content={translations[language].author} />
          
          {/* Open Graph */}
          <meta property="og:title" content={translations[language].title} />
          <meta property="og:description" content={translations[language].description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.yosef-portfolio.ru/" />
          
          {/* Структурированные данные */}
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Юсиф Мамедов',
              jobTitle: 'Веб-разработчик',
              url: 'https://www.yosef-portfolio.ru/',
              sameAs: [
                'https://github.com/Iusif797',
                'https://www.linkedin.com/in/iusifmamedov/',
                'https://t.me/beckerman979'
              ]
            })}
          </script>
        </Helmet>

        <LanguageSwitcher
          language={language}
          changeLanguage={changeLanguage}
          translations={translations}
        />

        <Header
          translations={translations}
          language={language}
          scrollToContact={scrollToContact}
        />

        <ProjectsSection
          translations={translations}
          language={language}
          onImageClick={openModal}
        />

        <PricingSection
          translations={translations}
          language={language}
        />

        <ContactForm
          translations={translations}
          language={language}
        />

        <Modal
          imageSrc={modalImage}
          onClose={closeModal}
        />
      </div>
    </Suspense>
  );
}

export default App;