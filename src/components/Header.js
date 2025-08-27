import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const Header = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`header-container ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-content-wrapper">
                <div className="logo-brand-section">
                    <img src="/logo.png" alt="{t.hero.name}" className="brand-logo" />
                </div>

                <nav className={`nav-menu-list ${isMobileMenuOpen ? 'nav-mobile-open' : ''}`}>
                    <ul className="nav-items-container">
                        <li className="nav-list-item">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="nav-link-button"
                            >
                                {t.nav.home}
                            </button>
                        </li>
                        <li className="nav-list-item">
                            <button
                                onClick={() => scrollToSection('about')}
                                className="nav-link-button"
                            >
                                {t.nav.about}
                            </button>
                        </li>
                        <li className="nav-list-item">
                            <button
                                onClick={() => scrollToSection('skills')}
                                className="nav-link-button"
                            >
                                {t.nav.skills}
                            </button>
                        </li>
                        <li className="nav-list-item">
                            <button
                                onClick={() => scrollToSection('experience')}
                                className="nav-link-button"
                            >
                                {t.nav.experience}
                            </button>
                        </li>
                        <li className="nav-list-item">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="nav-link-button"
                            >
                                {t.nav.projects}
                            </button>
                        </li>
                        <li className="nav-list-item">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="nav-link-button"
                            >
                                {t.nav.contact}
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions-section">
                    <button
                        onClick={toggleLanguage}
                        className="language-switcher"
                        aria-label="Toggle Language"
                    >
                        <span className={`lang-option ${language === 'es' ? 'lang-active' : ''}`}>ES</span>
                        <span className="lang-divider">|</span>
                        <span className={`lang-option ${language === 'en' ? 'lang-active' : ''}`}>EN</span>
                    </button>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span className={`hamburger-line ${isMobileMenuOpen ? 'line-rotate-1' : ''}`}></span>
                        <span className={`hamburger-line ${isMobileMenuOpen ? 'line-hide' : ''}`}></span>
                        <span className={`hamburger-line ${isMobileMenuOpen ? 'line-rotate-2' : ''}`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
