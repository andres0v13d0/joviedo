import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faLayerGroup, 
    faCode, 
    faMobileScreen, 
    faEye,
    faExternalLinkAlt,
    faArrowRight,
    faTimes,
    faBuilding,
    faUser,
    faClock,
    faCheck
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';

const Projects = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [imageLayout, setImageLayout] = useState('portrait'); // 'landscape' or 'portrait'
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Usar proyectos del contexto de idioma
    const projectsData = t.projects.projectsList;

    const categories = [
        { id: 'all', name: t.projects.categories.all, icon: faLayerGroup },
        { id: 'web', name: t.projects.categories.web, icon: faCode },
        { id: 'mobile', name: t.projects.categories.mobile, icon: faMobileScreen },
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    const openProjectModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
        
        // Detectar orientación de la imagen
        const img = new Image();
        img.onload = () => {
            const aspectRatio = img.width / img.height;
            // Si la imagen es más ancha que alta (aspect ratio > 1.3), usar layout landscape
            setImageLayout(aspectRatio > 1.3 ? 'landscape' : 'portrait');
        };
        img.src = project.image;
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
        setImageLayout('portrait'); // Reset a portrait por defecto
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="projects" className="projects-showcase-section" ref={sectionRef}>
            <div className="projects-container-wrapper">
                <div className="projects-header-section">
                    <h2 className="section-main-title">{t.projects.title}</h2>
                    <div className="title-underline-accent"></div>
                    <p className="section-subtitle-text">
                        {t.projects.subtitle}
                    </p>
                </div>

                <div className="projects-filter-navigation">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`filter-category-button ${selectedCategory === category.id ? 'filter-active' : ''}`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            <FontAwesomeIcon icon={category.icon} />
                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>

                <div className={`projects-grid-container ${isVisible ? 'projects-visible' : ''}`}>
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => openProjectModal(project)}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-main-image" />
                                <div className="project-overlay-content">
                                    <div className="overlay-icons-section">
                                        <button className="overlay-action-button">
                                            <FontAwesomeIcon icon={faEye} />
                                        </button>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="overlay-action-button"
                                                onClick={(e) => e.stopPropagation()}
                                                title="Ver código en GitHub"
                                            >
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="overlay-action-button"
                                                onClick={(e) => e.stopPropagation()}
                                                title="Ver proyecto en vivo"
                                            >
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="project-content-section">
                                <div className="project-header-info">
                                    <h3 className="project-title-text">{project.title}</h3>
                                    <div className="project-meta-info">
                                        <span className="project-company-text">
                                            <FontAwesomeIcon icon={faBuilding} />
                                            {project.company}
                                        </span>
                                        <span className="project-year-text">{project.year}</span>
                                    </div>
                                </div>

                                <p className="project-description-text">{project.description}</p>

                                <div className="project-technologies-section">
                                    <div className="tech-tags-container">
                                        {project.technologies.slice(0, 3).map((tech, idx) => (
                                            <span key={idx} className="tech-tag-item">{tech}</span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="tech-more-indicator">+{project.technologies.length - 3}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="project-actions-footer">
                                    <button className="view-details-button">
                                        {t.projects.viewDetails}
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                    <div className="project-status-badge">
                                        <span className={`status-indicator ${project.status === 'Completado' || project.status === 'Completed' ? 'status-completed' : 'status-progress'}`}></span>
                                        {project.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Modal */}
                {selectedProject && (
                    <div className="project-modal-overlay" onClick={closeProjectModal}>
                        <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close-button" onClick={closeProjectModal}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>

                            <div className={`modal-content-wrapper ${imageLayout}-layout`}>
                                <div className="modal-image-section">
                                    <img src={selectedProject.image} alt={selectedProject.title} className="modal-project-image" />
                                </div>

                                <div className="modal-info-section">
                                    <div className="modal-header-section">
                                        <h3 className="modal-project-title">{selectedProject.title}</h3>
                                        <div className="modal-project-meta">
                                            <span className="modal-company-info">
                                                <FontAwesomeIcon icon={faBuilding} />
                                                {selectedProject.company}
                                            </span>
                                            <span className="modal-client-info">
                                                <FontAwesomeIcon icon={faUser} />
                                                {t.projects.client}: {selectedProject.client}
                                            </span>
                                            <span className="modal-duration-info">
                                                <FontAwesomeIcon icon={faClock} />
                                                {t.projects.duration}: {selectedProject.duration}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="modal-description-section">
                                        <h4>{t.projects.projectDescription}</h4>
                                        <p>{selectedProject.longDescription}</p>
                                    </div>

                                    <div className="modal-features-section">
                                        <h4>{t.projects.keyFeatures}</h4>
                                        <ul className="features-list-container">
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx} className="feature-item-text">
                                                    <FontAwesomeIcon icon={faCheck} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="modal-technologies-section">
                                        <h4>{t.projects.technologies}</h4>
                                        <div className="modal-tech-tags">
                                            {selectedProject.technologies.map((tech, idx) => (
                                                <span key={idx} className="modal-tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="modal-actions-section">
                                        {selectedProject.githubUrl && (
                                            <a
                                                href={selectedProject.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="modal-action-button secondary-action"
                                            >
                                                <FontAwesomeIcon icon={faGithub} />
                                                {t.projects.viewCode}
                                            </a>
                                        )}
                                        {selectedProject.liveUrl && (
                                            <a
                                                href={selectedProject.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="modal-action-button primary-action"
                                            >
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                {t.projects.viewProject}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
