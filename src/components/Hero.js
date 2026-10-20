import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="top" className="hero">
      <h1>{t.hero.name}</h1>
      <p className="hero-title">{t.hero.title}</p>
      <p className="hero-subtitle">{t.hero.subtitle}</p>
      <p className="link-row">
        <a href="/CV_Jonathan_Oviedo.pdf" download>
          {t.hero.downloadCV}
        </a>
        <a href="https://github.com/andres0v13d0" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/andres0viedo" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:oviedojonathan2001@gmail.com">oviedojonathan2001@gmail.com</a>
      </p>
    </section>
  );
};

export default Hero;
