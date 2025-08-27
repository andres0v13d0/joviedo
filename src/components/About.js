import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCode, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJsSquare, faNodeJs, faGitAlt, faDocker } from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-content-section" ref={sectionRef}>
            <div className="about-container-wrapper">
                <div className={`about-content-grid ${isVisible ? 'content-visible' : ''}`}>
                    <div className="about-text-container">
                        <div className="section-header-group">
                            <h2 className="section-main-title">{t.about.title}</h2>
                            <div className="title-underline-accent"></div>
                        </div>

                        <div className="about-description-text">
                            <p className="main-description-paragraph">
                                {t.about.description}
                            </p>
                        </div>

                        <div className="highlights-list-container">
                            {t.about.highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className={`highlight-item-card ${isVisible ? 'item-animate' : ''}`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="highlight-icon-wrapper">
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </div>
                                    <span className="highlight-text-content">{highlight}</span>
                                </div>
                            ))}
                        </div>

                        <div className="stats-showcase-grid">
                            {t.about.stats && t.about.stats.map((stat, index) => {
                                // Extraer el número para la animación
                                const numericValue = parseInt(stat.number.replace(/[^0-9]/g, '')) || 0;
                                
                                return (
                                    <div key={index} className="stat-item-card">
                                        <div className="stat-number-display">
                                            <span 
                                                className="stat-count" 
                                                data-count={numericValue}
                                                data-original={stat.number}
                                            >
                                                {stat?.number || '0'}
                                            </span>
                                        </div>
                                        <div className="stat-label-text">{stat?.label || 'N/A'}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="about-visual-container">
                        <div className="profile-image-wrapper">
                            <div className="profile-background-shape">
                                <div className="floating-icons-container">
                                    <div className="tech-icon-item icon-1">
                                        <FontAwesomeIcon icon={faReact} />
                                    </div>
                                    <div className="tech-icon-item icon-2">
                                        <FontAwesomeIcon icon={faJsSquare} />
                                    </div>
                                    <div className="tech-icon-item icon-3">
                                        <FontAwesomeIcon icon={faNodeJs} />
                                    </div>
                                    <div className="tech-icon-item icon-4">
                                        <FontAwesomeIcon icon={faDatabase} />
                                    </div>
                                    <div className="tech-icon-item icon-5">
                                        <FontAwesomeIcon icon={faGitAlt} />
                                    </div>
                                    <div className="tech-icon-item icon-6">
                                        <FontAwesomeIcon icon={faDocker} />
                                    </div>
                                </div>

                                <div className="central-illustration">
                                    <FontAwesomeIcon icon={faCode} className="main-code-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
