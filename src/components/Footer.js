import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = ({ translations, language }) => {
  const currentYear = new Date().getFullYear();

  const footerTranslations = {
    ru: {
      aboutTitle: 'О разработчике',
      aboutText: 'Full-Stack разработчик с 5+ годами опыта. Создаю современные веб-приложения и мобильные решения для бизнеса.',
      servicesTitle: 'Услуги',
      contactTitle: 'Контакты',
      followTitle: 'Социальные сети',
      location: 'Прага, Чехия',
      email: 'usifmamedov5@gmail.com',
      phone: '+420 773 975 235',
      rights: 'Все права защищены',
      services: [
        'Веб-разработка',
        'Мобильные приложения',
        'UI/UX Дизайн',
        'Консультации'
      ]
    },
    en: {
      aboutTitle: 'About Developer',
      aboutText: 'Full-Stack Developer with 5+ years of experience. Creating modern web applications and mobile solutions for business.',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      followTitle: 'Social Media',
      location: 'Prague, Czech Republic',
      email: 'usifmamedov5@gmail.com',
      phone: '+420 773 975 235',
      rights: 'All rights reserved',
      services: [
        'Web Development',
        'Mobile Applications',
        'UI/UX Design',
        'Consulting'
      ]
    },
    he: {
      aboutTitle: 'אודות המפתח',
      aboutText: 'מפתח Full-Stack עם 5+ שנות ניסיון. יוצר אפליקציות ווב מודרניות ופתרונות ניידים לעסקים.',
      servicesTitle: 'שירותים',
      contactTitle: 'יצירת קשר',
      followTitle: 'רשתות חברתיות',
      location: 'פראג, צ\'כיה',
      email: 'usifmamedov5@gmail.com',
      phone: '+420 773 975 235',
      rights: 'כל הזכויות שמורות',
      services: [
        'פיתוח אתרים',
        'אפליקציות ניידות',
        'עיצוב UI/UX',
        'ייעוץ'
      ]
    }
  };

  const t = footerTranslations[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-title">{t.aboutTitle}</h3>
              <p className="footer-text">{t.aboutText}</p>
              <div className="footer-social">
                <a href="https://github.com/Iusif797" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/iusifmamedov/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="https://t.me/beckerman979" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaTelegram />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">{t.servicesTitle}</h3>
              <ul className="footer-list">
                {t.services.map((service, index) => (
                  <li key={index} className="footer-list-item">{service}</li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">{t.contactTitle}</h3>
              <div className="footer-contact">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>{t.location}</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:usifmamedov5@gmail.com">{t.email}</a>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <a href="tel:+420773975235">{t.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Юсиф Мамедов. {t.rights}</p>
            <div className="footer-links">
              <span>Made with ❤️ in Prague</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;