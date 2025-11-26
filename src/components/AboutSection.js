import React from 'react';
import BannerImage from '../assets/NewBannerPortfolio.png';

const AboutSection = ({ translations, language }) => {
  const content = {
    ru: {
      title: "Опыт, который работает на вас",
      subtitle: "5+ лет в разработке высоконагруженных веб-приложений",
      description: "Я не просто пишу код — я создаю решения, которые помогают бизнесу расти. Мой подход основан на глубоком понимании пользовательского опыта и современных технологий. Каждый проект для меня — это возможность создать что-то уникальное и эффективное.",
      stats: [
        { value: "40%", label: "Рост конверсии" },
        { value: "50+", label: "Успешных проектов" },
        { value: "1M+", label: "Пользователей" }
      ]
    },
    en: {
      title: "Experience That Works For You",
      subtitle: "5+ years in high-load web application development",
      description: "I don't just write code — I create solutions that help businesses grow. My approach is based on a deep understanding of user experience and modern technologies. Each project is an opportunity for me to create something unique and effective.",
      stats: [
        { value: "40%", label: "Conversion Growth" },
        { value: "50+", label: "Successful Projects" },
        { value: "1M+", label: "Users Served" }
      ]
    },
    he: {
      title: "ניסיון שעובד בשבילך",
      subtitle: "5+ שנים בפיתוח יישומי רשת בעומס גבוה",
      description: "אני לא רק כותב קוד — אני יוצר פתרונות שעוזרים לעסקים לצמוח. הגישה שלי מבוססת על הבנה עמוקה של חווית משתמש וטכנולוגיות מודרניות. כל פרויקט עבורי הוא הזדמנות ליצור משהו ייחודי ויעיל.",
      stats: [
        { value: "40%", label: "גידול בהמרה" },
        { value: "50+", label: "פרויקטים מוצלחים" },
        { value: "1M+", label: "משתמשים" }
      ]
    }
  };

  const t = content[language] || content.en;

  return (
    <section className="about-section" id="about-section">
      <div className="about-background-overlay"></div>
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="about-title">{t.title}</h2>
            <h3 className="about-subtitle">{t.subtitle}</h3>
            <p className="about-description">{t.description}</p>
            
            <div className="about-stats reveal-children">
              {t.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-banner-container">
            <div className="about-glow"></div>
            <img 
              src={BannerImage} 
              alt="About Yosef Mamedov" 
              className="about-banner-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
