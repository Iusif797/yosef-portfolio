import React, { useState, useRef, useEffect } from 'react';
import { FlagIcon } from 'react-flag-kit';

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
    const flagCodes = { 
      ru: 'BY', // Используем флаг Беларуси как более понятный для русского языка
      en: 'US', 
      he: 'IL'
    };
    const code = flagCodes[lng];
    return code ? <FlagIcon code={code} size={20} /> : <span>🌐</span>;
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className={`language-button ${dropdownOpen ? 'active' : ''}`}
        onClick={() => setDropdownOpen(prev => !prev)}
        aria-label="Select Language"
      >
        <div className="language-flag">{getFlag(language)}</div>
        <span className="language-code">
          {language.toUpperCase()}
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
                <div className="language-flag">{getFlag(lng)}</div>
                <span className="language-option-code">
                  {lng.toUpperCase()}
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