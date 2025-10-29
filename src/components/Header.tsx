import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';

const Header: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>هتل بهار</h1>
            <span className="logo-subtitle">Hotel Bahar</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('home')}>{t('nav.home')}</button></li>
              <li><button onClick={() => scrollToSection('about')}>{t('nav.about')}</button></li>
              <li><button onClick={() => scrollToSection('gallery')}>{t('nav.gallery')}</button></li>
              <li><button onClick={() => scrollToSection('contact')}>{t('nav.contact')}</button></li>
              <li>
                <button 
                  className="reservation-btn"
                  onClick={() => window.open('https://booking.com', '_blank')}
                >
                  {t('nav.reservation')}
                </button>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button 
              className="language-toggle"
              onClick={toggleLanguage}
              title={language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
            >
              {language === 'fa' ? 'EN' : 'فا'}
            </button>
            
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
