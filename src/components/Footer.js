import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = ({ t, language, onPrivacyClick, onCookieSettingsClick }) => {
  const currentYear = new Date().getFullYear();
  const name = language === 'he' ? 'יוסיף ממדוב' : 'Yosef Mamedov';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-title">{t.footer.aboutTitle}</h3>
              <p className="footer-text">{t.footer.aboutText}</p>
              <div className="footer-social">
                <a href="https://github.com/Iusif797" target="_blank" rel="noopener noreferrer" className="social-link" aria-label={t.footer.github}>
                  <FaGithub aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/iusifmamedov/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label={t.footer.linkedin}>
                  <FaLinkedin aria-hidden="true" />
                </a>
                <a href="https://t.me/beckerman979" target="_blank" rel="noopener noreferrer" className="social-link" aria-label={t.footer.telegram}>
                  <FaTelegram aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">{t.footer.servicesTitle}</h3>
              <ul className="footer-list">
                {t.footer.services.map((service) => (
                  <li key={service} className="footer-list-item">{service}</li>
                ))}
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">{t.footer.contactTitle}</h3>
              <ul className="footer-list">
                <li className="footer-list-item footer-list-item--row">
                  <FaMapMarkerAlt aria-hidden="true" />
                  <span>{t.contact.location}</span>
                </li>
                <li className="footer-list-item footer-list-item--row">
                  <FaEnvelope aria-hidden="true" />
                  <a href="mailto:usifmamedov5@gmail.com">usifmamedov5@gmail.com</a>
                </li>
                <li className="footer-list-item footer-list-item--row">
                  <FaPhone aria-hidden="true" />
                  <a href="tel:+420773975235">+420 773 975 235</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-legal-links">
          <button type="button" className="footer-legal-link" onClick={onPrivacyClick}>{t.legal.footerPrivacy}</button>
          <span className="footer-legal-sep" aria-hidden="true">·</span>
          <button type="button" className="footer-legal-link" onClick={onCookieSettingsClick}>{t.legal.footerCookies}</button>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {name}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
