import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = ({ translations, language }) => {
  const currentYear = new Date().getFullYear();
  const rightsText = language === 'ru' 
    ? 'Все права защищены' 
    : language === 'en' 
    ? 'All rights reserved' 
    : 'כל הזכויות שמורות';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-grid">
            {/* About Section */}
            <div className="footer-section">
              <h3 className="footer-title">
                {language === 'ru' ? 'О разработчике' : language === 'en' ? 'About Developer' : 'על המפתח'}
              </h3>
              <p className="footer-text">
                {language === 'ru' 
                  ? 'Full-Stack разработчик с 5+ годами опыта. Создаю современные веб-приложения и мобильные решения для бизнеса.'
                  : language === 'en'
                  ? 'Full-Stack developer with 5+ years of experience. Building modern web applications and mobile solutions for business.'
                  : 'מפתח Full-Stack עם ניסיון של 5+ שנים. בונה אפליקציות רשת מתקדמות ופתרונות מובייל לעסקים.'}
              </p>
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

            {/* Services Section */}
            <div className="footer-section">
              <h3 className="footer-title">
                {language === 'ru' ? 'Услуги' : language === 'en' ? 'Services' : 'שירותים'}
              </h3>
              <ul className="footer-list">
                <li className="footer-list-item">
                  {language === 'ru' ? 'Веб-разработка' : language === 'en' ? 'Web Development' : 'פיתוח אתרים'}
                </li>
                <li className="footer-list-item">
                  {language === 'ru' ? 'Мобильные приложения' : language === 'en' ? 'Mobile Apps' : 'אפליקציות מובייל'}
                </li>
                <li className="footer-list-item">
                  {language === 'ru' ? 'UI/UX Дизайн' : language === 'en' ? 'UI/UX Design' : 'עיצוב UI/UX'}
                </li>
                <li className="footer-list-item">
                  {language === 'ru' ? 'Консультации' : language === 'en' ? 'Consulting' : 'ייעוץ'}
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="footer-section">
              <h3 className="footer-title">
                {language === 'ru' ? 'Контакты' : language === 'en' ? 'Contact' : 'צור קשר'}
              </h3>
              <ul className="footer-list">
                <li className="footer-list-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaMapMarkerAlt style={{ color: 'var(--accent)' }} />
                  <span>{language === 'ru' ? 'Прага, Чехия' : language === 'en' ? 'Prague, Czech Republic' : 'פראג, צ׳כיה'}</span>
                </li>
                <li className="footer-list-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaEnvelope style={{ color: 'var(--accent)' }} />
                  <span>usifmamedov5@gmail.com</span>
                </li>
                <li className="footer-list-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaPhone style={{ color: 'var(--accent)' }} />
                  <span>+420 773 975 235</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} {language === 'he' ? 'יוסיף ממדוב' : 'Yosef Mamedov'}. {rightsText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;