import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext'
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();

  // Textos en diferentes idiomas
  const translations = {
    es: {
      about: 'Nosotros',
      services: 'Servicios',
      contact: 'Contacto',
      language: 'Idioma'
    },
    en: {
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      language: 'Language'
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsMenuOpen(false); // Cerrar menú después de cambiar idioma
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="puna-logo">
            <div className="puna-mountains">
              <div className="puna-triangle puna-triangle-1"></div>
              <div className="puna-triangle puna-triangle-2"></div>
              <div className="puna-triangle puna-triangle-3"></div>
            </div>
            <div className="puna-text-container">
              <h1 className="puna-text">PUNA</h1>
              <p className="puna-tech">TECH</p>
            </div>
          </div>
        </div>

        {/* Menu hamburguesa para móvil */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`navbar-toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`navbar-toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`navbar-toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
        </div>

        {/* Navigation Links */}
        <div className="navbar-right manrope">
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar-item">
              <a href="#nosotros" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                {translations[currentLanguage].about}
              </a>
            </li>
            <li className="navbar-item">
              <a href="#servicios" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                {translations[currentLanguage].services}
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contacto" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                {translations[currentLanguage].contact}
              </a>
            </li>
            
            {/* Selector de idioma en menú móvil */}
            <li className="navbar-item mobile-language-selector">
              <div className="mobile-language-container">
                <span className="language-label">{translations[currentLanguage].language}:</span>
                <div className="language-selector">
                  <button 
                    className={`lang-btn ${currentLanguage === 'es' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('es')}
                  >
                    ES
                  </button>
                  <button 
                    className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    EN
                  </button>
                </div>
              </div>
            </li>
          </ul>

          {/* Selector de idioma desktop */}
          <div className="navbar-controls desktop-only">
            <div className="language-selector">
              <button 
                className={`lang-btn ${currentLanguage === 'es' ? 'active' : ''}`}
                onClick={() => changeLanguage('es')}
              >
                ES
              </button>
              <button 
                className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;