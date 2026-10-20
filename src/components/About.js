import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <h2>{t.about.title}</h2>
      {t.about.paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </section>
  );
};

export default About;
