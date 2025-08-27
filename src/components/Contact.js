import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import { 
    faEnvelope, 
    faPhone, 
    faMapMarkedAlt, 
    faSpinner, 
    faPaperPlane, 
    faCheckCircle, 
    faExclamationCircle,
    faEye 
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Configuración de EmailJS
            const serviceID = 'YOUR_SERVICE_ID'; // Reemplaza con tu Service ID
            const templateID = 'YOUR_TEMPLATE_ID'; // Reemplaza con tu Template ID
            const publicKey = 'YOUR_PUBLIC_KEY'; // Reemplaza con tu Public Key

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'oviedojonathan2001@gmail.com'
            };

            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const contactInfo = [
        {
            icon: faEnvelope,
            title: t.contact.email,
            value: 'oviedojonathan2001@gmail.com', // Cambia por tu email real
            link: 'mailto:oviedojonathan2001@gmail.com',
            color: '#C03C84'
        },
        {
            icon: faPhone,
            title: t.contact.phone,
            value: '+57 301 664 3479', // Cambia por tu teléfono real
            link: 'tel:+573016643479',
            color: '#26A3D4'
        },
        {
            icon: faMapMarkedAlt,
            title: t.contact.location,
            value: 'Cali, Colombia', // Cambia por tu ubicación real
            link: '#',
            color: '#578828'
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: faGithub,
            url: 'https://github.com/andres0v13d0', // Cambia por tu GitHub
            color: '#333333'
        },
        {
            name: 'LinkedIn',
            icon: faLinkedinIn,
            url: 'https://linkedin.com/in/andres0viedo', // Cambia por tu LinkedIn
            color: '#0077B5'
        },
        {
            name: 'WhatsApp',
            icon: faWhatsapp,
            url: 'https://wa.me/573016643479', // Cambia por tu WhatsApp
            color: '#25D366'
        },
        {
            name: 'Email',
            icon: faEnvelope,
            url: 'mailto:oviedojonathan2001@gmail.com', // Cambia por tu email
            color: '#C03C84'
        }
    ];

    return (
        <section id="contact" className="contact-section-container" ref={sectionRef}>
            <div className="contact-wrapper-content">
                <div className="contact-header-section">
                    <h2 className="section-main-title">{t.contact.title}</h2>
                    <div className="title-underline-accent"></div>
                    <p className="section-subtitle-text">
                        {t.contact.subtitle}
                    </p>
                </div>

                <div className={`contact-content-grid ${isVisible ? 'content-visible' : ''}`}>
                    <div className="contact-info-container">
                        <div className="contact-intro-section">
                            <h3 className="intro-title-text">{t.contact.intro.title}</h3>
                            <p className="intro-description-text">
                                {t.contact.intro.description}
                            </p>
                        </div>

                        <div className="contact-details-list">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="contact-detail-item"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div
                                        className="contact-icon-wrapper"
                                        style={{ background: `linear-gradient(135deg, ${info.color}, ${info.color}aa)` }}
                                    >
                                        <FontAwesomeIcon icon={info.icon} />
                                    </div>
                                    <div className="contact-detail-content">
                                        <h4 className="contact-detail-title">{info.title}</h4>
                                        <a href={info.link} className="contact-detail-value">
                                            {info.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="social-links-section">
                            <h4 className="social-section-title">{t.contact.social}</h4>
                            <div className="social-links-container">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link-button"
                                        style={{
                                            '--social-color': social.color,
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                        aria-label={social.name}
                                    >
                                        <FontAwesomeIcon icon={social.icon} />
                                        <span className="social-tooltip">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <div className="form-header-section">
                            <h3 className="form-title-text">{t.contact.form.title}</h3>
                            <p className="form-subtitle-text">
                                {t.contact.form.subtitle}
                            </p>
                        </div>

                        <form className="contact-form-wrapper" onSubmit={handleSubmit}>
                            <div className="form-group-container">
                                <label className="form-input-label" htmlFor="name">
                                    {t.contact.form.name}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="form-input-field"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="form-group-container">
                                <label className="form-input-label" htmlFor="email">
                                    {t.contact.form.email}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="form-input-field"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="form-group-container">
                                <label className="form-input-label" htmlFor="message">
                                    {t.contact.form.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="form-textarea-field"
                                    rows="6"
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="form-submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <FontAwesomeIcon icon={faSpinner} spin />
                                        {t.contact.form.sending}
                                    </>
                                ) : (
                                    <>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                        {t.contact.form.send}
                                    </>
                                )}
                            </button>

                            {submitStatus && (
                                <div className={`form-status-message ${submitStatus === 'success' ? 'status-success' : 'status-error'}`}>
                                    {submitStatus === 'success' ? (
                                        <>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                            {t.contact.form.success}
                                        </>
                                    ) : (
                                        <>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                            {t.contact.form.error}
                                        </>
                                    )}
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                <div className="contact-cta-section">
                    <div className="cta-content-wrapper">
                        <h3 className="cta-title-text">{t.contact.cta.title}</h3>
                        <p className="cta-description-text" style={{ marginBottom: '2rem' }}>
                            {t.contact.cta.description}
                        </p>
                        <div className="cta-buttons-container">
                            <a href="#projects" className="cta-primary-button">
                                <FontAwesomeIcon icon={faEye} />
                                {t.contact.cta.viewWork}
                            </a>
                            <a href="mailto:oviedojonathan2001@gmail.com" className="cta-secondary-button">
                                <FontAwesomeIcon icon={faEnvelope} />
                                {t.contact.cta.contactNow}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
