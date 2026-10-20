import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const sections = ['about', 'skills', 'experience', 'projects', 'contact'];

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#top" className="site-brand">
          Jonathan Oviedo
        </a>
        <nav className="site-nav" aria-label="Principal">
          {sections.map((id) => (
            <a key={id} href={`#${id}`}>
              {t.nav[id]}
            </a>
          ))}
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
