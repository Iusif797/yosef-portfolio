import React, { useState, useRef, useEffect } from 'react';

const LanguageSwitcher = ({ language, changeLanguage, translations }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLanguageChange = (lng) => {
    changeLanguage(lng);
    setDropdownOpen(false);
  };

  const getFlag = (lng) => {
    const flags = { 
      ru: '🇷🇺', 
      en: '🇺🇸', 
      he: '🇮🇱' 
    };
    return flags[lng] || '🌐';
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className={`language-button ${dropdownOpen ? 'active' : ''}`}
        onClick={() => setDropdownOpen(prev => !prev)}
        aria-label="Select Language"
      >
        <span className="language-flag">{getFlag(language)}</span>
        <span className="language-code">
          {translations[language].languageName}
        </span>
        <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {dropdownOpen && (
        <ul className="language-dropdown">
          {Object.keys(translations).map(lng => (
            <li key={lng}>
              <button
                className="language-option-button"
                onClick={() => handleLanguageChange(lng)}
              >
                <span className="language-flag">{getFlag(lng)}</span>
                <span className="language-option-code">
                  {translations[lng].languageName}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;