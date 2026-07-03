import React from 'react';

const LANGUAGES = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'he', label: 'HE' },
];

const LanguageSwitcher = ({ language, changeLanguage }) => (
  <div className="lang-segment" role="group" aria-label="Language">
    {LANGUAGES.map(({ code, label }) => (
      <button
        key={code}
        type="button"
        className={`lang-segment__btn${language === code ? ' is-active' : ''}`}
        onClick={() => changeLanguage(code)}
        aria-pressed={language === code}
      >
        {label}
      </button>
    ))}
  </div>
);

export default LanguageSwitcher;
