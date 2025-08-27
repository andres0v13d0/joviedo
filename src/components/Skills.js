import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faDatabase, 
    faServer, 
    faPalette, 
    faTools,
    faGraduationCap,
    faUsers,
    faRocket 
} from '@fortawesome/free-solid-svg-icons';
import { 
    faReact, 
    faJsSquare, 
    faHtml5, 
    faCss3Alt, 
    faNodeJs, 
    faPython, 
    faGitAlt, 
    faDocker, 
    faAws 
} from '@fortawesome/free-brands-svg-icons';
import { SiRedis, SiPostgresql, SiFirebase, SiMysql, SiTypescript, SiNestjs, SiExpress } from 'react-icons/si';
import { Icon } from "@iconify/react";
import './Skills.css';

const Skills = () => {
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
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skillsData = {
        frontend: [
            { name: 'React', icon: faReact, color: '#61DAFB' },
            { name: 'JavaScript', icon: faJsSquare, color: '#F7DF1E' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
            { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: faCss3Alt, color: '#1572B6' },
            { name: 'React Native', icon: faReact, color: '#61DAFB' }
        ],
        backend: [
            { name: 'Node.js', icon: faNodeJs, color: '#339933' },
            { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
            { name: 'Express.js', icon: SiExpress, color: '#000000' },
            { name: 'Python', icon: faPython, color: '#3776AB' },
        ],
        database: [
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
            { name: 'Redis', icon: SiRedis, color: '#DC382D' }
        ],
        tools: [
            { name: 'Git', icon: faGitAlt, color: '#F05032' },
            { name: 'Docker', icon: faDocker, color: '#2496ED' },
            { name: 'VS Code', icon: "simple-icons:visualstudiocode", color: '#007ACC' },
            { name: 'AWS', icon: faAws, color: '#FF9900' },
        ]
    };

    return (
        <section id="skills" className="skills-showcase-section" ref={sectionRef}>
            <div className="skills-container-wrapper">
                <div className="skills-header-section">
                    <h2 className="section-main-title">{t.skills.title}</h2>
                    <div className="title-underline-accent"></div>
                    <p className="section-subtitle-text">
                        {t.skills.subtitle}
                    </p>
                </div>

                <div className={`skills-categories-grid ${isVisible ? 'categories-visible' : ''}`}>
                    {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                        <div
                            key={category}
                            className="skill-category-container"
                            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                        >
                            <div className="category-header-section">
                                <h3 className="category-title-text">
                                    {t.skills.categories[category]}
                                </h3>
                                <div className="category-icon-wrapper">
                                    <FontAwesomeIcon icon={
                                        category === 'frontend' ? faPalette :
                                        category === 'backend' ? faServer :
                                        category === 'database' ? faDatabase :
                                        faTools
                                    } />
                                </div>
                            </div>

                            <div className="skills-grid-container">
                                {skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="skill-item-card"
                                        style={{
                                            animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s`,
                                            '--skill-color': skill.color
                                        }}
                                    >
                                        <div className="skill-icon-container">
                                            {typeof skill.icon === 'function' ? (
                                                <skill.icon style={{ color: skill.color }} />
                                            ) : typeof skill.icon === 'string' ? (
                                                <Icon icon={skill.icon} style={{ color: skill.color, fontSize: '24px' }} />
                                            ) : (
                                                <FontAwesomeIcon
                                                    icon={skill.icon}
                                                    style={{ color: skill.color }}
                                                />
                                            )}
                                        </div>
                                        <span className="skill-name-text">{skill.name}</span>
                                        <div className="skill-hover-effect"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-additional-info">
                    <div className="info-cards-container">
                        <div className="info-card-item">
                            <div className="info-icon-wrapper">
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </div>
                            <div className="info-content-section">
                                <h4 className="info-title-text">{t.skills.additionalInfo.learning.title}</h4>
                                <p className="info-description-text">
                                    {t.skills.additionalInfo.learning.description}
                                </p>
                            </div>
                        </div>

                        <div className="info-card-item">
                            <div className="info-icon-wrapper">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <div className="info-content-section">
                                <h4 className="info-title-text">{t.skills.additionalInfo.teamwork.title}</h4>
                                <p className="info-description-text">
                                    {t.skills.additionalInfo.teamwork.description}
                                </p>
                            </div>
                        </div>

                        <div className="info-card-item">
                            <div className="info-icon-wrapper">
                                <FontAwesomeIcon icon={faRocket} />
                            </div>
                            <div className="info-content-section">
                                <h4 className="info-title-text">{t.skills.additionalInfo.innovation.title}</h4>
                                <p className="info-description-text">
                                    {t.skills.additionalInfo.innovation.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
