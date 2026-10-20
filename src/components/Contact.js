import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceID = 'service_s0c2e5w';
      const templateID = 'template_a343c5h';
      const publicKey = 'yHE_T7SENJdKd_roU';

      const templateParams = {
        title: t.contact.form.subject,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString('es-CO', {
          timeZone: 'America/Bogota',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
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

  return (
    <section id="contact" className="section">
      <h2>{t.contact.title}</h2>
      <p>{t.contact.intro}</p>

      <dl className="skills-list">
        <div className="skills-row">
          <dt>{t.contact.email}</dt>
          <dd>
            <a href="mailto:oviedojonathan2001@gmail.com">oviedojonathan2001@gmail.com</a>
          </dd>
        </div>
        <div className="skills-row">
          <dt>{t.contact.phone}</dt>
          <dd>
            <a href="tel:+573016643479">+57 301 664 3479</a>
          </dd>
        </div>
        <div className="skills-row">
          <dt>{t.contact.location}</dt>
          <dd>{t.contact.locationValue}</dd>
        </div>
        <div className="skills-row">
          <dt>Web</dt>
          <dd>
            <a href="https://github.com/andres0v13d0" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {' · '}
            <a href="https://linkedin.com/in/andres0viedo" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            {' · '}
            <a href="https://wa.me/573016643479" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </dd>
        </div>
      </dl>

      <h3 className="subsection-title">{t.contact.form.title}</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">{t.contact.form.name}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
        />

        <label htmlFor="email">{t.contact.form.email}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
        />

        <label htmlFor="message">{t.contact.form.message}</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t.contact.form.sending : t.contact.form.send}
        </button>

        {submitStatus && (
          <p className={`form-status ${submitStatus}`} role="status">
            {submitStatus === 'success' ? t.contact.form.success : t.contact.form.error}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
