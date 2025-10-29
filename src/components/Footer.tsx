import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>هتل بهار</h3>
              <p className="logo-subtitle">Hotel Bahar</p>
            </div>
            <p className="footer-description">{t('footer.description')}</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="social-link" aria-label="Telegram">
                📱
              </a>
              <a href="#" className="social-link" aria-label="WhatsApp">
                💬
              </a>
              <a href="#" className="social-link" aria-label="Email">
                ✉️
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('home')}>{t('nav.home')}</button></li>
              <li><button onClick={() => scrollToSection('about')}>{t('nav.about')}</button></li>
              <li><button onClick={() => scrollToSection('gallery')}>{t('nav.gallery')}</button></li>
              <li><button onClick={() => scrollToSection('contact')}>{t('nav.contact')}</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.contactInfo')}</h4>
            <div className="contact-info">
              <p>📍 {t('contact.address').split(':')[1]}</p>
              <p>📞 {t('contact.phone').split(':')[1]}</p>
              <p>✉️ {t('contact.email').split(':')[1]}</p>
              <p>🕒 {t('contact.hours').split(':')[1]}</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>{t('footer.socialMedia')}</h4>
            <div className="social-media">
              <a href="#" className="social-media-link">
                <span className="social-icon">📷</span>
                <span>{language === 'fa' ? 'اینستاگرام' : 'Instagram'}</span>
              </a>
              <a href="#" className="social-media-link">
                <span className="social-icon">📱</span>
                <span>{language === 'fa' ? 'تلگرام' : 'Telegram'}</span>
              </a>
              <a href="#" className="social-media-link">
                <span className="social-icon">💬</span>
                <span>{language === 'fa' ? 'واتساپ' : 'WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 هتل بهار. {language === 'fa' ? 'تمام حقوق محفوظ است.' : 'All rights reserved.'}</p>
            <div className="footer-bottom-links">
              <a href="#">{language === 'fa' ? 'حریم خصوصی' : 'Privacy Policy'}</a>
              <a href="#">{language === 'fa' ? 'شرایط استفاده' : 'Terms of Service'}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
