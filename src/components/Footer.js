import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} Jonathan Oviedo. {t.footer.rights}.
      </p>
    </footer>
  );
};

export default Footer;
