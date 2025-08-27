import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEnvelope, 
    faPhone, 
    faMapMarkerAlt, 
    faChevronRight, 
    faPaperPlane, 
    faEye, 
    faChevronUp 
} from '@fortawesome/free-solid-svg-icons';
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
            url: 'https://github.com/andres0v13d0',
            color: '#333333'
        },
        {
            name: 'LinkedIn',
            icon: faLinkedin,
            url: 'https://linkedin.com/in/andres0viedo',
            color: '#0077B5'
        },
        {
            name: 'WhatsApp',
            icon: faWhatsapp,
            url: 'https://wa.me/573016643479',
            color: '#25D366'
        },
        {
            name: 'Email',
            icon: faEnvelope,
            url: 'mailto:oviedojonathan2001@gmail.com',
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
                        <h4 className="footer-column-title">{t.footer.quickNavigation}</h4>
                        <ul className="footer-links-list">
                            {quickLinks.map((link, index) => (
                                <li key={index} className="footer-link-item">
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="footer-nav-link"
                                    >
                                        <FontAwesomeIcon icon={faChevronRight} />
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-contact-column">
                        <h4 className="footer-column-title">{t.footer.contactInfo}</h4>
                        <div className="footer-contact-info">
                            <div className="contact-info-item">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:oviedojonathan2001@gmail.com" className="contact-link">
                                    oviedojonathan2001@gmail.com
                                </a>
                            </div>
                            <div className="contact-info-item">
                                <FontAwesomeIcon icon={faPhone} />
                                <a href="tel:+573016643479" className="contact-link">
                                    +57 301 664 3479
                                </a>
                            </div>
                            <div className="contact-info-item">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span className="contact-text">Cali, Colombia</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-cta-column">
                        <h4 className="footer-column-title">{t.footer.workTogether.title}</h4>
                        <p className="cta-description-text">
                            {t.footer.workTogether.description}
                        </p>
                        <div className="footer-cta-buttons">
                            <a href="mailto:oviedojonathan2001@gmail.com" className="footer-cta-button">
                                <FontAwesomeIcon icon={faPaperPlane} />
                                {t.footer.buttons.contactNow}
                            </a>
                            <button onClick={() => scrollToSection('projects')} className="footer-secondary-button">
                                <FontAwesomeIcon icon={faEye} />
                                {t.footer.buttons.viewProjects}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-divider-line"></div>

                <div className="footer-bottom-section">
                    <div className="footer-copyright-text">
                        <p className="copyright-main-text">
                            © {currentYear} Jonathan Oviedo. {t.footer.rights}.
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
                        <FontAwesomeIcon icon={faChevronUp} />
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
