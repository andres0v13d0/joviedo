import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProjectEntry = ({ project, labels }) => (
  <article className="entry project">
    {project.image && (
      <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
    )}
    <div className="project-body">
      <div className="entry-head">
        <h3>{project.title}</h3>
      </div>
      <p className="entry-sub">{project.meta}</p>
      <p>{project.description}</p>
      <p className="tech-line">
        <strong>{labels.technologies}:</strong> {project.technologies.join(', ')}
      </p>
      {(project.liveUrl || project.githubUrl) && (
        <p className="link-row">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              {labels.visit}
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              {labels.code}
            </a>
          )}
        </p>
      )}
    </div>
  </article>
);

const Projects = () => {
  const { t } = useLanguage();
  const products = t.projects.projectsList.filter((p) => p.group === 'product');
  const academic = t.projects.projectsList.filter((p) => p.group === 'academic');

  return (
    <section id="projects" className="section">
      <h2>{t.projects.title}</h2>

      <h3 className="subsection-title">{t.projects.productsTitle}</h3>
      {products.map((project) => (
        <ProjectEntry key={project.id} project={project} labels={t.projects} />
      ))}

      <h3 className="subsection-title">{t.projects.academicTitle}</h3>
      {academic.map((project) => (
        <ProjectEntry key={project.id} project={project} labels={t.projects} />
      ))}
    </section>
  );
};

export default Projects;
