import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services'
import { LanguageProvider } from './LanguageContext';
import FloatingDarkMode from './components/FloatingDarkMode/FloatingDarkMode';
import SEOTags from './components/SEO/SEOTags';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <LanguageProvider>
          <SEOTags />
          <Header/>
          <main role="main">
            <section id="nosotros">
              <AboutUs/>
            </section>
            <section id="servicios">
              <Services/>
            </section>
            <section id="contacto">
              <ContactForm/>
            </section>
          </main>
          {/* <Footer/> */}
          <FloatingDarkMode />
        </LanguageProvider>
      </BrowserRouter>
    </>
  )
}

export default App