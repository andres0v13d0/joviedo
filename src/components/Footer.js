import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const quickLinks = [
        { name: t.nav.home, id: 'home' },
        { name: t.nav.about, id: 'about' },
        { name: t.nav.skills, id: 'skills' },
        { name: t.nav.experience, id: 'experience' },
        { name: t.nav.projects, id: 'projects' },
        { name: t.nav.contact, id: 'contact' }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: faGithub,
            url: 'https://github.com/jonathan-oviedo',
            color: '#333333'
        },
        {
            name: 'LinkedIn',
            icon: faLinkedin,
            url: 'https://linkedin.com/in/jonathan-oviedo',
            color: '#0077B5'
        },
        {
            name: 'WhatsApp',
            icon: faWhatsapp,
            url: 'https://wa.me/593991234567',
            color: '#25D366'
        },
        {
            name: 'Email',
            icon: faEnvelope,
            url: 'mailto:jonathan.oviedo@ejemplo.com',
            color: '#C03C84'
        }
    ];

    return (
        <footer className="footer-main-container">
            <div className="footer-content-wrapper">
                <div className="footer-top-section">
                    <div className="footer-brand-column">
                        <div className="brand-logo-section">
                            <h3 className="brand-name-text">{t.hero.name}</h3>
                        </div>
                        <p className="brand-description-text">
                            {t.hero.subtitle}
                        </p>
                        <div className="footer-social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    style={{ '--social-color': social.color }}
                                    aria-label={social.name}
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links-column">
                        <h4 className="footer-column-title">Navegación Rápida</h4>
                        <ul className="footer-links-list">
                            {quickLinks.map((link, index) => (
                                <li key={index} className="footer-link-item">
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="footer-nav-link"
                                    >
                                        <i className="fas fa-chevron-right"></i>
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-contact-column">
                        <h4 className="footer-column-title">Información de Contacto</h4>
                        <div className="footer-contact-info">
                            <div className="contact-info-item">
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:tu-email@ejemplo.com" className="contact-link">
                                    tu-email@ejemplo.com
                                </a>
                            </div>
                            <div className="contact-info-item">
                                <i className="fas fa-phone"></i>
                                <a href="tel:+593XXXXXXXXX" className="contact-link">
                                    +593 XX XXX XXXX
                                </a>
                            </div>
                            <div className="contact-info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="contact-text">Ecuador</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-cta-column">
                        <h4 className="footer-column-title">¿Trabajamos Juntos?</h4>
                        <p className="cta-description-text">
                            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
                        </p>
                        <div className="footer-cta-buttons">
                            <a href="mailto:tu-email@ejemplo.com" className="footer-cta-button">
                                <i className="fas fa-paper-plane"></i>
                                Contactar Ahora
                            </a>
                            <button onClick={() => scrollToSection('projects')} className="footer-secondary-button">
                                <i className="fas fa-eye"></i>
                                Ver Proyectos
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-divider-line"></div>

                <div className="footer-bottom-section">
                    <div className="footer-copyright-text">
                        <p className="copyright-main-text">
                            © {currentYear} Andrés Oviedo. {t.footer.rights}.
                        </p>
                        <p className="copyright-sub-text">
                            {t.footer.built}
                        </p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="scroll-to-top-button"
                        aria-label="Scroll to top"
                    >
                        <i className="fas fa-chevron-up"></i>
                    </button>
                </div>
            </div>

            <div className="footer-background-pattern">
                <div className="pattern-dot dot-1"></div>
                <div className="pattern-dot dot-2"></div>
                <div className="pattern-dot dot-3"></div>
                <div className="pattern-dot dot-4"></div>
                <div className="pattern-dot dot-5"></div>
                <div className="pattern-dot dot-6"></div>
            </div>
        </footer>
    );
};

export default Footer;
