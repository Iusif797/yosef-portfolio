import React from 'react';
import heroBackground from '../assets/best-background.jpg';
import portraitImage from '../assets/Linkedin_Portfolio.webp';

const Header = ({ t, scrollToContact }) => (
  <header className="header" id="header">
    <div className="header-background">
      <img src={heroBackground} alt="" className="header-bg-image" loading="eager" fetchPriority="high" />
      <div className="header-overlay">
        <div className="floating-particles">
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </div>
      </div>
    </div>
    <div className="header-content">
      <div className="header-visual">
        <div className="portrait-container">
          <img src={portraitImage} alt={t.author} className="portrait-image" loading="eager" />
          <div className="portrait-glow" />
        </div>
      </div>
      <div className="header-text">
        <h1 className="header-title">{t.header.studioTitle}</h1>
        <p className="header-description">{t.header.aboutMe}</p>
        <button type="button" className="cta-button" onClick={scrollToContact}>
          {t.contact.scrollToContact}
          <svg className="cta-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
