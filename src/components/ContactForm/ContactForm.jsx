import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../LanguageContext.jsx';
import './ContactForm.css';

const ContactForm = () => {
  const { currentLanguage } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Configuración de EmailJS - Reemplaza con tus valores
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

  // Traducciones
  const translations = {
    es: {
      title: "Cotiza tu Agente de IA",
      description: "¿Listo para transformar tu negocio con inteligencia artificial? Cuéntanos sobre tu proyecto y nuestro equipo te enviará una cotización personalizada para desarrollar el agente de IA perfecto para tus necesidades.",
      features: {
        fastResponse: {
          title: "Respuesta Rápida",
          description: "Te contactamos en menos de 24 horas"
        },
        customSolution: {
          title: "Solución Personalizada",
          description: "Desarrollamos tu agente según tus necesidades específicas"
        },
        detailedAnalysis: {
          title: "Análisis Detallado",
          description: "Evaluamos tu proyecto y te enviamos una propuesta completa"
        }
      },
      form: {
        nameLabel: "Nombre Completo",
        namePlaceholder: "Tu nombre completo",
        emailLabel: "Email",
        emailPlaceholder: "tu@email.com",
        messageLabel: "Descripción del Proyecto",
        messagePlaceholder: "Describe tu proyecto: ¿Qué tipo de agente de IA necesitas? ¿Cuál es tu industria? ¿Qué problemas específicos quieres resolver?",
        submitButton: "Solicitar Cotización",
        submitting: "Enviando...",
        required: "*"
      },
      status: {
        success: "¡Mensaje enviado exitosamente! Te contactaremos pronto.",
        error: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."
      },
      contact: {
        directTitle: "¿Prefieres contactarnos directamente?",
        email: "punatechba@gmail.com"
      }
    },
    en: {
      title: "Quote Your AI Agent",
      description: "Ready to transform your business with artificial intelligence? Tell us about your project and our team will send you a personalized quote to develop the perfect AI agent for your needs.",
      features: {
        fastResponse: {
          title: "Fast Response",
          description: "We contact you in less than 24 hours"
        },
        customSolution: {
          title: "Custom Solution",
          description: "We develop your agent according to your specific needs"
        },
        detailedAnalysis: {
          title: "Detailed Analysis",
          description: "We evaluate your project and send you a complete proposal"
        }
      },
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "Your full name",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        messageLabel: "Project Description",
        messagePlaceholder: "Describe your project: What type of AI agent do you need? What is your industry? What specific problems do you want to solve?",
        submitButton: "Request Quote",
        submitting: "Sending...",
        required: "*"
      },
      status: {
        success: "Message sent successfully! We will contact you soon.",
        error: "There was an error sending the message. Please try again."
      },
      contact: {
        directTitle: "Prefer to contact us directly?",
        email: "punatechba@gmail.com"
      }
    }
  };

  const t = translations[currentLanguage];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Preparar los datos para EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'PunaTech', // Opcional: nombre del destinatario
      };

      // Enviar email usando EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email enviado exitosamente:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section manrope" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">{t.title}</h2>
            <div className="title-underline"></div>
            
            <p className="contact-description">
              {t.description}
            </p>
            
            <div className="contact-features">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div className="feature-content">
                  <h4>{t.features.fastResponse.title}</h4>
                  <p>{t.features.fastResponse.description}</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <div className="feature-content">
                  <h4>{t.features.customSolution.title}</h4>
                  <p>{t.features.customSolution.description}</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div className="feature-content">
                  <h4>{t.features.detailedAnalysis.title}</h4>
                  <p>{t.features.detailedAnalysis.description}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {t.form.nameLabel}
                  <span className="required">{t.form.required}</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={t.form.namePlaceholder}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {t.form.emailLabel}
                  <span className="required">{t.form.required}</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={t.form.emailPlaceholder}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {t.form.messageLabel}
                  <span className="required">{t.form.required}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder={t.form.messagePlaceholder}
                  rows="6"
                  required
                />
              </div>
              
              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    {t.form.submitting}
                  </>
                ) : (
                  <>
                    <span className="btn-icon">📧</span>
                    {t.form.submitButton}
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="status-message success">
                  <span className="status-icon">✅</span>
                  {t.status.success}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="status-message error">
                  <span className="status-icon">❌</span>
                  {t.status.error}
                </div>
              )}
            </form>
            
            <div className="contact-info-card">
              <h3>{t.contact.directTitle}</h3>
              <div className="contact-details">
                <a href="mailto:punatechba@gmail.com" className="contact-link">
                  <span className="contact-icon">📧</span>
                  {t.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;