import React from 'react';

const Header = ({ translations, language, scrollToContact }) => {
  return (
    <header className="header" id="header">
      <div className="header-background">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format&q=90" 
          alt="Portfolio Background" 
          className="header-bg-image"
        />
        <div className="header-overlay">
          <div className="floating-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
        </div>
      </div>
      <div className="header-content">
        <div className="header-icon">
          <div className="icon-circle">
            <div className="icon-glow"></div>
            <span className="icon-text">YM</span>
          </div>
        </div>
        <h1 className="header-title">
          {translations[language].header.studioTitle}
        </h1>
        <p className="header-description">
          {translations[language].header.aboutMe}
        </p>
        <button
          className="cta-button"
          onClick={scrollToContact}
        >
          {translations[language].contact.scrollToContact}
          <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;