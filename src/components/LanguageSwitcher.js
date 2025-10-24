import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FlagRU = () => (
  <svg className="language-flag" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#fff" width="9" height="3" />
    <rect fill="#d52b1e" y="3" width="9" height="3" />
    <rect fill="#0039a6" y="2" width="9" height="2" />
  </svg>
);

const FlagUS = () => (
  <svg className="language-flag" viewBox="0 0 7410 3900" xmlns="http://www.w3.org/2000/svg">
    <rect width="7410" height="3900" fill="#b22234" />
    <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300" />
    <rect width="2964" height="2100" fill="#3c3b6e" />
  </svg>
);

const FlagIL = () => (
  <svg className="language-flag" viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="160" fill="#fff" />
    <rect y="15" width="220" height="25" fill="#0038b8" />
    <rect y="120" width="220" height="25" fill="#0038b8" />
    <polygon points="110,50 120,73 145,73 125,87 134,110 110,95 86,110 95,87 75,73 100,73" fill="none" stroke="#0038b8" strokeWidth="5" />
  </svg>
);

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
      ru: { flag: <FlagRU />, name: 'Русский', code: 'RU' },
      en: { flag: <FlagUS />, name: 'English', code: 'US' },
      he: { flag: <FlagIL />, name: 'עברית', code: 'IL' }
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
        {currentLang.flag}
        <span className="language-code">{currentLang.code}</span>
        <FaChevronDown className="dropdown-arrow" size={12} />
      </button>

      {dropdownOpen && (
        <div className="language-dropdown">
          {Object.keys(translations).map(lng => {
            const langInfo = getLanguageInfo(lng);
            return (
              <button
                key={lng}
                className={`language-option-button ${language === lng ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lng)}
              >
                {langInfo.flag}
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