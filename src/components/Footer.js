import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = ({ translations = {}, language = 'ru' }) => {

  return (
    <div className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <h3>О разработчике</h3>
          <p>Full-Stack разработчик с 5+ годами опыта. Создаю современные веб-приложения и мобильные решения для бизнеса.</p>
          <div className="social-links">
            <a href="https://github.com/Iusif797" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/iusifmamedov/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://t.me/beckerman979" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="footer-center">
          <h3>Услуги</h3>
          <ul>
            <li>Веб-разработка</li>
            <li>Мобильные приложения</li>
            <li>UI/UX Дизайн</li>
            <li>Консультации</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Контакты</h3>
          <div className="contact-item">
            <div className="contact-icon-circle">
              <FaMapMarkerAlt />
            </div>
            <span>Прага, Чехия</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon-circle">
              <FaEnvelope />
            </div>
            <span>usifmamedov5@gmail.com</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon-circle">
              <FaPhone />
            </div>
            <span>+420 773 975 235</span>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <footer>
        <div className="footer-bottom-content">
          <p>{translations && language && translations[language] && translations[language].footer
            ? translations[language].footer.portfolio
            : '© 2025 Юсиф Мамедов. Все права защищены'}</p>
          <p className="made-with-love">Made with ❤️ in Prague</p>
        </div>
        <div className="social-icons">
          <a href="https://t.me/beckerman979" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/iusifmamedov/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Iusif797" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;