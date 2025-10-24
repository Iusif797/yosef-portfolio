import React from 'react';
import ProjectCard from './ProjectCard';
import djWebsite from '../assets/DJ-beckerman.png';
import eShop from '../assets/image.png';
import teonaPsychology from '../assets/teona-lending.png';
import vineProject from '../assets/cafe-project.png';
import israeldelcargoVisitCard from '../assets/visit-card.png';

const ProjectsSection = ({ translations, language, onImageClick }) => {
  const projectsData = [
    {
      image: vineProject,
      alt: 'LE CORTE Wine Boutique',
      title: language === 'ru' ? 'LE CORTE - Винный Бутик' :
        language === 'en' ? 'LE CORTE - Wine Boutique' :
          'LE CORTE - בוטיק יין',
      description: language === 'ru' ? 'Роскошный сайт винного бутика с эксклюзивными коллекциями вин. Включает интерактивный каталог редких вин, систему онлайн-записи на дегустации, истории винтажных коллекций и элегантную галерею. Премиальный дизайн передает атмосферу изысканности и благородства винной культуры.' :
        language === 'en' ? 'Luxurious wine boutique website with exclusive wine collections. Features interactive catalog of rare wines, online tasting booking system, vintage collection stories and elegant gallery. Premium design conveys atmosphere of sophistication and nobility of wine culture.' :
          'אתר בוטיק יין יוקרתי עם אוספי יין בלעדיים. כולל קטלוג אינטראקטיבי של יינות נדירים, מערכת הזמנת טעימות מקוונת, סיפורי אוספים וינטג\' וגלריה אלגנטית. עיצוב פרימיום המעביר אווירה של תחכום ואצילות של תרבות היין.',
      link: 'https://wine-iusif-project.vercel.app/',
    },
    {
      image: israeldelcargoVisitCard,
      alt: 'IsraelDelCargo Digital Card',
      title: language === 'ru' ? 'IsraelDelCargo - Цифровая Визитка' :
        language === 'en' ? 'IsraelDelCargo - Digital Card' :
          'IsraelDelCargo - כרטיס ביקור דיגיטלי',
      description: language === 'ru' ? 'Современная цифровая визитка для службы доставки посылок в Израиль. Минималистичный дизайн с быстрым доступом ко всем каналам связи: телефон, WhatsApp, Telegram, email. Мгновенное сохранение контакта одной кнопкой. Адаптивный интерфейс для всех устройств.' :
        language === 'en' ? 'Modern digital business card for Israeli parcel delivery service. Minimalist design with quick access to all communication channels: phone, WhatsApp, Telegram, email. Instant contact saving with one button. Responsive interface for all devices.' :
          'כרטיס ביקור דיגיטלי מודרני עבור שירות משלוח חבילות לישראל. עיצוב מינימליסטי עם גישה מהירה לכל ערוצי התקשורת: טלפון, WhatsApp, Telegram, אימייל. שמירת איש קשר מיידית בלחיצת כפתור אחת. ממשק רספונסיבי לכל המכשירים.',
      link: 'https://israeldelcargo.info/',
    },
    {
      image: djWebsite,
      alt: 'DJ Beckerman Website',
      title: language === 'ru' ? 'DJ Beckerman - Официальный Сайт' :
        language === 'en' ? 'DJ Beckerman - Official Website' :
          'DJ Beckerman - אתר רשמי',
      description: language === 'ru' ? 'Премиум веб-сайт для профессионального диджея с интерактивным плеером, расписанием выступлений и динамической галереей. Современный дизайн с плавными анимациями и адаптивной версткой для всех устройств.' :
        language === 'en' ? 'Premium website for professional DJ featuring interactive player, performance schedule and dynamic gallery. Modern design with smooth animations and responsive layout for all devices.' :
          'אתר פרימיום עבור DJ מקצועי עם נגן אינטראקטיבי, לוח זמנים של הופעות וגלריה דינמית. עיצוב מודרני עם אנימציות חלקות ועיצוב רספונסיבי לכל המכשירים.',
      link: 'https://dj-beckerman.vercel.app/',
    },
    {
      image: eShop,
      alt: 'LUXE Fashion Store',
      title: language === 'ru' ? 'LUXE - Магазин Премиум Одежды' :
        language === 'en' ? 'LUXE - Premium Fashion Store' :
          'LUXE - חנות אופנה פרמיום',
      description: language === 'ru' ? 'Элегантный интернет-магазин премиум одежды и аксессуаров с корзиной покупок, системой фильтрации товаров и интеграцией платежей. Минималистичный дизайн подчеркивает роскошь бренда.' :
        language === 'en' ? 'Elegant e-commerce store for premium clothing and accessories with shopping cart, product filtering system and payment integration. Minimalist design emphasizes brand luxury.' :
          'חנות מקוונת אלגנטית לבגדים ואביזרים פרמיום עם עגלת קניות, מערכת סינון מוצרים ואינטגרציית תשלומים. עיצוב מינימליסטי המדגיש את היוקרה של המותג.',
      link: 'https://luxe-shop-theta.vercel.app/',
    },
    {
      image: teonaPsychology,
      alt: 'PsyMindVia - Теона Хаметова',
      title: language === 'ru' ? 'PsyMindVia - Психологические Услуги' :
        language === 'en' ? 'PsyMindVia - Psychology Services' :
          'PsyMindVia - שירותי פסיכולוגיה',
      description: language === 'ru' ? 'Профессиональный сайт психолога Теоны Хаметовой в Баку. Включает онлайн-запись на консультации, информацию об услугах, блог со статьями и систему обратной связи. Спокойный дизайн создает атмосферу доверия.' :
        language === 'en' ? 'Professional website for psychologist Teona Khametova in Baku. Features online appointment booking, service information, blog with articles and feedback system. Calm design creates atmosphere of trust.' :
          'אתר מקצועי עבור הפסיכולוגית טאונה ח\'מטובה בבאקו. כולל הזמנת תורים מקוונת, מידע על שירותים, בלוג עם מאמרים ומערכת משוב. עיצוב רגוע יוצר אווירה של אמון.',
      link: 'https://www.psymindvia.com/',
    },
    {
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'E-Commerce Platform',
      title: language === 'ru' ? 'E-Commerce Платформа' : language === 'en' ? 'E-Commerce Platform' : 'פלטפורמת מסחר אלקטרוני',
      description: language === 'ru' ? 'Современная платформа интернет-магазина с системой платежей и управлением товарами' :
        language === 'en' ? 'Modern e-commerce platform with payment system and inventory management' :
          'פלטפורמת מסחר אלקטרוני מודרנית עם מערכת תשלומים וניהול מלאי',
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'FinTech Dashboard',
      title: language === 'ru' ? 'FinTech Дашборд' : language === 'en' ? 'FinTech Dashboard' : 'דשבורד פינטק',
      description: language === 'ru' ? 'Аналитическая панель для финансовых данных с интерактивными графиками и отчетами' :
        language === 'en' ? 'Financial data analytics dashboard with interactive charts and reports' :
          'דשבורד אנליטיקה לנתונים פיננסיים עם גרפים אינטראקטיביים ודוחות',
    },
    {
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Corporate Website',
      title: language === 'ru' ? 'Корпоративный Сайт' : language === 'en' ? 'Corporate Website' : 'אתר תאגידי',
      description: language === 'ru' ? 'Элегантный корпоративный сайт с современным дизайном и CMS системой' :
        language === 'en' ? 'Elegant corporate website with modern design and CMS system' :
          'אתר תאגידי אלגנטי עם עיצוב מודרני ומערכת CMS',
    },
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Food Delivery App',
      title: language === 'ru' ? 'Приложение Доставки Еды' : language === 'en' ? 'Food Delivery App' : 'אפליקציית משלוחי אוכל',
      description: language === 'ru' ? 'Мобильное приложение для заказа еды с геолокацией и отслеживанием заказов' :
        language === 'en' ? 'Mobile food ordering app with geolocation and order tracking' :
          'אפליקציה ניידת להזמנת אוכל עם גיאולוקיישן ומעקב הזמנות',
    },
    {
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Digital Business Card',
      title: language === 'ru' ? 'Цифровая Визитка' : language === 'en' ? 'Digital Business Card' : 'כרטיס ביקור דיגיטלי',
      description: language === 'ru' ? 'Интерактивная цифровая визитка с анимациями и интеграцией социальных сетей' :
        language === 'en' ? 'Interactive digital business card with animations and social media integration' :
          'כרטיס ביקור דיגיטלי אינטראקטיבי עם אנימציות ואינטגרציה לרשתות חברתיות',
    },
    {
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Car Rental Platform',
      title: language === 'ru' ? 'Платформа Аренды Авто' : language === 'en' ? 'Car Rental Platform' : 'פלטפורמת השכרת רכבים',
      description: language === 'ru' ? 'Полнофункциональная платформа аренды автомобилей с бронированием и оплатой' :
        language === 'en' ? 'Full-featured car rental platform with booking and payment system' :
          'פלטפורמת השכרת רכבים מלאה עם מערכת הזמנות ותשלומים',
    },
    {
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Restaurant Website',
      title: language === 'ru' ? 'Сайт Ресторана' : language === 'en' ? 'Restaurant Website' : 'אתר מסעדה',
      description: language === 'ru' ? 'Стильный сайт ресторана с онлайн-меню, бронированием столиков и галереей' :
        language === 'en' ? 'Stylish restaurant website with online menu, table booking and gallery' :
          'אתר מסעדה מסוגנן עם תפריט אונליין, הזמנת שולחנות וגלריה',
    },
    {
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Bakery Online Store',
      title: language === 'ru' ? 'Интернет-магазин Пекарни' : language === 'en' ? 'Bakery Online Store' : 'חנות אונליין למאפייה',
      description: language === 'ru' ? 'Онлайн-магазин пекарни с каталогом продукции и системой предзаказов' :
        language === 'en' ? 'Bakery online store with product catalog and pre-order system' :
          'חנות אונליין למאפייה עם קטלוג מוצרים ומערכת הזמנות מראש',
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=90',
      alt: 'Creative Agency Portfolio',
      title: language === 'ru' ? 'Портфолио Креативного Агентства' : language === 'en' ? 'Creative Agency Portfolio' : 'פורטפוליו סוכנות יצירתית',
      description: language === 'ru' ? 'Портфолио креативного агентства с интерактивными элементами и анимациями' :
        language === 'en' ? 'Creative agency portfolio with interactive elements and animations' :
          'פורטפוליו סוכנות יצירתית עם אלמנטים אינטראקטיביים ואנימציות',
      link: 'https://castawey.netlify.app/',
    },
  ];

  return (
    <section className="projects-section" id="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">{translations[language].projects.myProjects}</h2>
          <p className="projects-subtitle">
            {language === 'ru' ? 'Избранные работы, демонстрирующие мой опыт и навыки' :
              language === 'en' ? 'Selected works showcasing my experience and skills' :
                'עבודות נבחרות המציגות את הניסיון והכישורים שלי'}
          </p>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onImageClick={onImageClick}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;