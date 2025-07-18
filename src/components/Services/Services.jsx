import React from 'react';
import './services.css';
import { useLanguage } from '../../LanguageContext.jsx';

const Services = () => {
    const { currentLanguage } = useLanguage();

    const translations = {
        es: {
            sectionTitle: "Nuestros Servicios",
            sectionSubtitle: "Agentes de IA especializados para automatizar y optimizar tu negocio",
            toolsTitle: "Herramientas:",
            moreInfoButton: "Más información",
            services: [
                {
                    id: 1,
                    title: "AGENTE SECRETARIO PERSONAL",
                    description: "Tiene la capacidad de gestionar reuniones con cualquier persona que desee contactarte, para mantener el control sobre el tiempo operativo de cada emprendedor.",
                    tools: ["WA API", "CHAT GPT", "SUPABASE", "GOOGLE CALENDAR"],
                    icon: "📅"
                },
                {
                    id: 2,
                    title: "AGENTE EXPERTO EN YOUTUBE",
                    description: "Este agente estará constantemente analizando canales de referencia y puede generar guiones totalmente personalizados. Trabajar tu marca personal ya no es excusa.",
                    tools: ["GOOGLE DOCS", "CHAT GPT", "APIFY API", "GMAIL", "RSS"],
                    icon: "🎬"
                },
                {
                    id: 3,
                    title: "AGENTE MANAGER E-COMMERCE",
                    description: "Agente especializado en controlar e informar del estado actual en tiempo real de cualquier e-commerce alojado en la plataforma Shopify. Se encarga de gestionar tu negocio.",
                    tools: ["WA API", "CHAT GPT", "SUPABASE", "SHOPIFY"],
                    icon: "🛒"
                },
                {
                    id: 4,
                    title: "AGENTE AVATAR MARCA PERSONAL",
                    description: "Este agente creará videos en automático con tu avatar realista basándose en las tendencias actuales del mercado. Publicar contenido 100% actualizado nunca fue tan fácil.",
                    tools: ["GOOGLE CALENDAR", "CHAT GPT", "SERP API", "GMAIL", "HEY GEN", "BLOTATO", "PERPLEXITY API"],
                    icon: "🎭"
                },
                {
                    id: 5,
                    title: "AGENTE SEO EXPERTO GENERADOR DE BLOGS",
                    description: "Agente especialista en posicionamiento web que analiza canales de referencia y tendencias de Google, para crear blogs completamente adaptados. Logrará mas visitas con su conocimiento sobre SEO.",
                    tools: ["APIFY API", "CHAT GPT", "SERP API", "PERPLEXITY API"],
                    icon: "📝"
                },
                {
                    id: 6,
                    title: "AGENTE APPOINTMENT SETTER",
                    description: "Agente encargado de brindar información sobre cualquier negocio mediante cualquier red social y con capacidad de agendar llamadas de venta de forma completamente autónoma.",
                    tools: ["CHAT GPT", "SUPABASE", "GOOGLE CALENDAR", "MANY CHAT"],
                    icon: "📞"
                }
            ]
        },
        en: {
            sectionTitle: "Our Services",
            sectionSubtitle: "Specialized AI agents to automate and optimize your business",
            toolsTitle: "Tools:",
            moreInfoButton: "More information",
            services: [
                {
                    id: 1,
                    title: "PERSONAL SECRETARY AGENT",
                    description: "Has the ability to manage meetings with anyone who wants to contact you, to maintain control over the operational time of each entrepreneur.",
                    tools: ["WA API", "CHAT GPT", "SUPABASE", "GOOGLE CALENDAR"],
                    icon: "📅"
                },
                {
                    id: 2,
                    title: "YOUTUBE CONTENT EXPERT AGENT",
                    description: "This agent will constantly analyze reference channels and can generate fully personalized scripts. Working on your personal brand is no longer an excuse.",
                    tools: ["GOOGLE DOCS", "CHAT GPT", "APIFY API", "GMAIL", "RSS"],
                    icon: "🎬"
                },
                {
                    id: 3,
                    title: "E-COMMERCE MANAGER AGENT",
                    description: "Agent specialized in controlling and reporting the current real-time status of any e-commerce hosted on the Shopify platform. Takes care of managing your business.",
                    tools: ["WA API", "CHAT GPT", "SUPABASE", "SHOPIFY"],
                    icon: "🛒"
                },
                {
                    id: 4,
                    title: "PERSONAL BRAND AVATAR AGENT",
                    description: "This agent will automatically create videos with your realistic avatar based on current market trends. Publishing 100% updated content has never been so easy.",
                    tools: ["GOOGLE CALENDAR", "CHAT GPT", "SERP API", "GMAIL", "HEY GEN", "BLOTATO", "PERPLEXITY API"],
                    icon: "🎭"
                },
                {
                    id: 5,
                    title: "SEO EXPERT BLOG GENERATOR AGENT",
                    description: "Agent specialized in web positioning that analyzes reference channels and Google trends, to create fully adapted blogs. Will achieve more visits with their SEO knowledge.",
                    tools: ["APIFY API", "CHAT GPT", "SERP API", "PERPLEXITY API"],
                    icon: "📝"
                },
                {
                    id: 6,
                    title: "APPOINTMENT SETTER AGENT",
                    description: "Agent in charge of providing information about any business through any social network and with the ability to schedule sales calls completely autonomously.",
                    tools: ["CHAT GPT", "SUPABASE", "GOOGLE CALENDAR", "MANY CHAT"],
                    icon: "📞"
                }
            ]
        }
    };

    const currentTranslation = translations[currentLanguage];

    return (
        <section className="services-section manrope">
            <div className="services-container">
                <div className="services-header">
                    <h2 className="services-title">{currentTranslation.sectionTitle}</h2>
                    <p className="services-subtitle">
                        {currentTranslation.sectionSubtitle}
                    </p>
                </div>

                <div className="services-grid">
                    {currentTranslation.services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">
                                <span className="service-emoji">{service.icon}</span>
                            </div>
                            
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                
                                <div className="service-tools">
                                    <h4 className="tools-title">{currentTranslation.toolsTitle}</h4>
                                    <div className="tools-grid">
                                        {service.tools.map((tool, index) => (
                                            <span key={index} className="tool-tag">{tool}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="service-footer">
                                <a href="#contacto">
                                    <button className="service-button">
                                        <span>{currentTranslation.moreInfoButton}</span>
                                        <svg className="button-arrow" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;