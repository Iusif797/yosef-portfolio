import React from 'react';

const Header = ({ translations, language, scrollToContact }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-icon">
          <div className="icon-circle">
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