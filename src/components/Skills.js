import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section">
      <h2>{t.skills.title}</h2>
      <dl className="skills-list">
        {t.skills.groups.map((group) => (
          <div key={group.name} className="skills-row">
            <dt>{group.name}</dt>
            <dd>{group.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Skills;
