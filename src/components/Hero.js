import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faDownload, faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Hero.css';

const Hero = () => {
    const { t, language } = useLanguage();
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const titles = useMemo(() => t.hero.titles, [t.hero.titles]);

    useEffect(() => {
        const currentTitle = titles[currentIndex];
        const speed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentTitle.length) {
                    setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % titles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [displayedText, currentIndex, isDeleting, titles]);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const downloadCV = () => {
        const cvFile = language === 'es' ? '/CV - Oviedo.pdf' : '/JonathanOviedo-CV.pdf';
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = cvFile;
        link.click();
    };

    return (
        <section id="home" className="hero-intro-section">
            <div className="hero-content-wrapper">
                <div className="hero-text-container">
                    <div className="hero-greeting-text">
                        <span className="greeting-word">{t.hero.greeting}</span>
                    </div>

                    <h1 className="hero-main-title">
                        <span className="hero-name-text">{t.hero.name}</span>
                    </h1>

                    <div className="hero-title-container">
                        <span className="typing-text">
                            {displayedText}
                            <span className="typing-cursor">|</span>
                        </span>
                    </div>

                    <p className="hero-subtitle-text">
                        {t.hero.subtitle}
                    </p>

                    <div className="hero-action-buttons">
                        <button
                            className="primary-cta-button"
                            onClick={scrollToProjects}
                        >
                            <FontAwesomeIcon icon={faRocket} />
                            {t.hero.cta}
                        </button>

                        <button
                            className="secondary-cta-button"
                            onClick={downloadCV}
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            {t.hero.downloadCV}
                        </button>
                    </div>

                    <div className="hero-social-links">
                        <a href="https://github.com/andres0v13d0" target="_blank" rel="noopener noreferrer" className="social-link-item" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://linkedin.com/in/andres0viedo" target="_blank" rel="noopener noreferrer" className="social-link-item" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://wa.me/+573016643479" target="_blank" rel="noopener noreferrer" className="social-link-item" aria-label="WhatsApp">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="mailto:oviedojonathan2001@gmail.com" className="social-link-item" aria-label="Email">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual-container">
                    <div className="floating-elements">
                        <div className="floating-shape shape-1"></div>
                        <div className="floating-shape shape-2"></div>
                        <div className="floating-shape shape-3"></div>
                        <div className="floating-shape shape-4"></div>
                    </div>

                    <div className="hero-illustration">
                        <div className="code-animation">
                            <div className="code-line"></div>
                            <div className="code-line"></div>
                            <div className="code-line"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span className="scroll-text">Scroll</span>
                <div className="scroll-arrow">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
