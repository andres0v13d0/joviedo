import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section">
      <h2>{t.experience.title}</h2>

      {t.experience.experiences.map((job) => (
        <article key={`${job.company}-${job.period}`} className="entry">
          <div className="entry-head">
            <h3>{job.company}</h3>
            <span className="entry-date">{job.period}</span>
          </div>
          <p className="entry-sub">
            {job.role} · {job.place}
          </p>
          {job.summary && <p>{job.summary}</p>}
          <ul>
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}

      <h3 className="subsection-title">{t.experience.educationTitle}</h3>
      {t.experience.education.map((item) => (
        <article key={item.title} className="entry">
          <div className="entry-head">
            <h3>{item.school}</h3>
            <span className="entry-date">{item.period}</span>
          </div>
          <p className="entry-sub">{item.title}</p>
          {item.note && <p>{item.note}</p>}
        </article>
      ))}
    </section>
  );
};

export default Experience;
