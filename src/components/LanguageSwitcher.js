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

  const getLanguageInfo = (lng) => {
    const languages = {
      ru: { flag: '🇷🇺', name: 'Русский', code: 'RU' },
      en: { flag: '🇺🇸', name: 'English', code: 'EN' },
      he: { flag: '🇮🇱', name: 'עברית', code: 'HE' }
    };
    return languages[lng];
  };

  const currentLang = getLanguageInfo(language);

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className={`language-button ${dropdownOpen ? 'active' : ''}`}
        onClick={() => setDropdownOpen(prev => !prev)}
        aria-label="Select Language"
      >
        <span className="language-flag">{currentLang.flag}</span>
        <span className="language-code">{currentLang.code}</span>
        <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {dropdownOpen && (
        <div className="language-dropdown">
          {Object.keys(translations).map(lng => {
            const langInfo = getLanguageInfo(lng);
            return (
              <button
                key={lng}
                className="language-option-button"
                onClick={() => handleLanguageChange(lng)}
              >
                <span className="language-flag">{langInfo.flag}</span>
                <span className="language-name">{langInfo.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;