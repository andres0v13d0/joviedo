import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBuilding, 
    faMapMarkerAlt, 
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

const Experience = () => {
    const { t, language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [activeExperience, setActiveExperience] = useState(0);
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

    // Usar los datos de experiencia del contexto
    const experienceData = t.experience?.experiences || [];

    return (
        <section id="experience" className="experience-timeline-section" ref={sectionRef}>
            <div className="experience-container-wrapper">
                <div className="experience-header-section">
                    <h2 className="section-main-title">{t.experience?.title || 'Experiencia Profesional'}</h2>
                    <div className="title-underline-accent"></div>
                    <p className="section-subtitle-text">
                        {language === 'es' 
                            ? 'Mi trayectoria profesional y los proyectos que me han permitido crecer como desarrollador'
                            : 'My professional journey and the projects that have allowed me to grow as a developer'
                        }
                    </p>
                </div>

                <div className={`experience-content-layout ${isVisible ? 'content-visible' : ''}`}>
                    <div className="experience-navigation-panel">
                        {experienceData.map((exp, index) => (
                            <button
                                key={exp.id}
                                className={`nav-experience-item ${activeExperience === index ? 'nav-item-active' : ''}`}
                                onClick={() => setActiveExperience(index)}
                            >
                                <div className="nav-item-indicator"></div>
                                <div className="nav-item-content">
                                    <div className="nav-company-name">{exp.company}</div>
                                    <div className="nav-position-title">{exp.title}</div>
                                    <div className="nav-period-text">{exp.period}</div>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="experience-details-container">
                        {experienceData.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`experience-detail-card ${activeExperience === index ? 'detail-active' : ''}`}
                            >
                                <div className="experience-header-info">
                                    <div className="position-title-section">
                                        <h3 className="position-main-title">{exp.title}</h3>
                                        <div className="company-location-info">
                                            <span className="company-name-text">
                                                <FontAwesomeIcon icon={faBuilding} />
                                                {exp.company}
                                            </span>
                                            <span className="location-text">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="period-type-section">
                                        <div className="period-display-text">{exp.period}</div>
                                        <div className="employment-type-badge">{exp.type}</div>
                                    </div>
                                </div>

                                <div className="experience-description-section">
                                    <p className="description-main-text">{exp.description}</p>
                                </div>

                                <div className="technologies-achievements-grid">
                                    <div className="technologies-used-section">
                                        <h4 className="section-subtitle-title">
                                            {language === 'es' ? 'Tecnologías:' : 'Technologies:'}
                                        </h4>
                                        <div className="tech-tags-container">
                                            {(exp.technologies || []).map((tech, idx) => (
                                                <span key={idx} className="tech-tag-item">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="achievements-section">
                                        <h4 className="section-subtitle-title">
                                            {language === 'es' ? 'Logros Destacados:' : 'Key Achievements:'}
                                        </h4>
                                        <ul className="achievements-list-container">
                                            {(exp.achievements || []).map((achievement, idx) => (
                                                <li key={idx} className="achievement-item-text">
                                                    <FontAwesomeIcon icon={faStar} />
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
