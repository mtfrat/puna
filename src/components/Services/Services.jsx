import React from 'react';
import './Services.css';
import { useLanguage } from '../../LanguageContext.jsx';

const Services = () => {
    const { currentLanguage } = useLanguage();

    const translations = {
        es: {
            sectionTitle: "Servicios de Automatización con Inteligencia Artificial",
            sectionSubtitle: "Agentes de IA personalizados y soluciones de marketing digital para empresas argentinas. Automatización empresarial de vanguardia.",
            toolsTitle: "Herramientas:",
            moreInfoButton: "Más información",
            services: [
                {
                    id: 1,
                    title: "Agente Secretario IA - Gestión Automatizada de Reuniones",
                    description: "Chatbot inteligente con capacidad de gestionar reuniones automatizadamente. Optimiza tu tiempo operativo mediante inteligencia artificial avanzada para emprendedores y empresarios.",
                    tools: ["WA API", "CHAT GPT", "SUPABASE", "GOOGLE CALENDAR"],
                    icon: "📅"
                },
                {
                    id: 2,
                    title: "Agente Marketing Digital - Creación de Contenido YouTube",
                    description: "Sistema de IA que analiza tendencias y genera guiones personalizados para YouTube. Automatiza tu estrategia de marketing digital y construye tu marca personal con contenido optimizado.",
                    tools: ["GOOGLE DOCS", "CHAT GPT", "APIFY API", "GMAIL", "RSS"],
                    icon: "🎬"
                },
                {
                    id: 3,
                    title: "Agente E-commerce IA - Automatización Shopify",
                    description: "Agente de inteligencia artificial especializado en gestión de e-commerce. Monitoreo en tiempo real, automatización de procesos y optimización de ventas para tiendas Shopify.",
                    tools: ["WA API", "CHAT GPT", "SUPABASE", "SHOPIFY"],
                    icon: "🛒"
                },
                {
                    id: 4,
                    title: "Agente Avatar IA - Videos Automatizados con IA",
                    description: "Crea videos automatizados con tu avatar digital realista. Generación de contenido basada en tendencias de mercado para tu estrategia de marketing digital y marca personal.",
                    tools: ["GOOGLE CALENDAR", "CHAT GPT", "SERP API", "GMAIL"],
                    hiddenTools: ["HEY GEN", "BLOTATO", "PERPLEXITY API"],
                    icon: "🎭"
                },
                {
                    id: 5,
                    title: "Agente SEO IA - Generador Automatizado de Blogs",
                    description: "Especialista en SEO y posicionamiento web con IA. Analiza tendencias Google y crea contenido optimizado. Incrementa tráfico orgánico mediante blogs automatizados con inteligencia artificial.",
                    tools: ["APIFY API", "CHAT GPT", "SERP API", "PERPLEXITY API"],
                    icon: "📝"
                },
                {
                    id: 6,
                    title: "Agente Ventas IA - Appointment Setter Automatizado",
                    description: "Bot conversacional para redes sociales con capacidad de agendar citas de venta autónomamente. Automatiza tu proceso de ventas y generación de leads con inteligencia artificial.",
                    tools: ["CHAT GPT", "SUPABASE", "GOOGLE CALENDAR", "MANY CHAT"],
                    icon: "📞"
                }
            ]
        },
        en: {
            sectionTitle: "AI-Powered Business Automation Services",
            sectionSubtitle: "Custom AI agents and digital marketing solutions for enterprises. Advanced business automation technology.",
            toolsTitle: "Tools:",
            moreInfoButton: "More information",
            services: [
                {
                    id: 1,
                    title: "AI Secretary Agent - Automated Meeting Management",
                    description: "Intelligent chatbot with automated meeting management capabilities. Optimize your operational time through advanced artificial intelligence for entrepreneurs and business owners.",
                    tools: ["WA API", "CHAT GPT", "SUPABASE", "GOOGLE CALENDAR"],
                    icon: "📅"
                },
                {
                    id: 2,
                    title: "Digital Marketing AI - YouTube Content Creation",
                    description: "AI system that analyzes trends and generates personalized YouTube scripts. Automate your digital marketing strategy and build your personal brand with optimized content.",
                    tools: ["GOOGLE DOCS", "CHAT GPT", "APIFY API", "GMAIL", "RSS"],
                    icon: "🎬"
                },
                {
                    id: 3,
                    title: "E-commerce AI Agent - Shopify Automation",
                    description: "Artificial intelligence agent specialized in e-commerce management. Real-time monitoring, process automation and sales optimization for Shopify stores.",
                    tools: ["WA API", "CHAT GPT", "SUPABASE", "SHOPIFY"],
                    icon: "🛒"
                },
                {
                    id: 4,
                    title: "Avatar AI Agent - Automated AI-Generated Videos",
                    description: "Creates automated videos with your realistic digital avatar. Content generation based on market trends for your digital marketing strategy and personal branding.",
                    tools: ["GOOGLE CALENDAR", "CHAT GPT", "SERP API", "GMAIL"],
                    hiddenTools: ["HEY GEN", "BLOTATO", "PERPLEXITY API"],
                    icon: "🎭"
                },
                {
                    id: 5,
                    title: "SEO AI Agent - Automated Blog Generator",
                    description: "SEO and web positioning specialist with AI. Analyzes Google trends and creates optimized content. Increase organic traffic through AI-automated blogs.",
                    tools: ["APIFY API", "CHAT GPT", "SERP API", "PERPLEXITY API"],
                    icon: "📝"
                },
                {
                    id: 6,
                    title: "Sales AI Agent - Automated Appointment Setter",
                    description: "Conversational bot for social media with autonomous sales appointment scheduling capabilities. Automate your sales process and lead generation with artificial intelligence.",
                    tools: ["CHAT GPT", "SUPABASE", "GOOGLE CALENDAR", "MANY CHAT"],
                    icon: "📞"
                }
            ]
        }
    };

    const currentTranslation = translations[currentLanguage];

    return (
        <section className="services-section manrope" id="services">
            <div className="services-container">
                <header className="services-header">
                    <h2 className="services-title">{currentTranslation.sectionTitle}</h2>
                    <p className="services-subtitle">
                        {currentTranslation.sectionSubtitle}
                    </p>
                </header>

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
                                        {service.hiddenTools && (
                                            <div className="more-tools-indicator">
                                                <span className="tool-tag more-tools">+{service.hiddenTools.length}</span>
                                                <div className="hidden-tools-tooltip">
                                                    {service.hiddenTools.map((tool, index) => (
                                                        <span key={index} className="hidden-tool">{tool}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="service-footer">
                                <a href="#contact">
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