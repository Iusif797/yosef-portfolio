import React, { useState, useEffect } from 'react';

const MobileMenu = ({ translations, language, scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleContactClick = (e) => {
    scrollToContact(e);
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className={`mobile-menu-button ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
        <nav className="mobile-menu-nav">
          <button 
            className="mobile-menu-item"
            onClick={() => scrollToSection('header')}
          >
            {language === 'ru' ? 'Главная' : language === 'en' ? 'Home' : 'בית'}
          </button>
          <button 
            className="mobile-menu-item"
            onClick={() => scrollToSection('projects-section')}
          >
            {translations[language].projects.myProjects}
          </button>
          <button 
            className="mobile-menu-item"
            onClick={() => scrollToSection('pricing-section')}
          >
            {translations[language].pricing.pricing}
          </button>
          <button 
            className="mobile-menu-item"
            onClick={handleContactClick}
          >
            {translations[language].contact.contact}
          </button>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;