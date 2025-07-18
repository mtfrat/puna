import React from 'react';
import './AboutUs.css';
import { useLanguage } from '../../LanguageContext.jsx';

const AboutUs = () => {
    // Usar el contexto global en lugar de estado local
    const { currentLanguage } = useLanguage();

    // Textos en diferentes idiomas
    const translations = {
        es: {
            sectionTitle: 'Sobre Nosotros',
            introText: 'En Puna Tech, somos pioneros en la transformación digital, especializados en el desarrollo de agentes de inteligencia artificial y estrategias de marketing digital innovadoras que impulsan el crecimiento de tu negocio.',
            missionTitle: 'Nuestra Misión',
            missionText: 'Democratizar el acceso a la inteligencia artificial y el marketing digital avanzado, proporcionando soluciones personalizadas que optimizan procesos empresariales y maximizan el retorno de inversión de nuestros clientes.',
            visionTitle: 'Nuestra Visión',
            visionText: 'Ser la empresa líder en soluciones de IA y marketing digital en Latinoamérica, reconocida por nuestra innovación, excelencia técnica y compromiso con el éxito de nuestros clientes.',
            valuesTitle: 'Nuestros Valores',
            values: {
                innovation: {
                    title: 'Innovación',
                    description: 'Adoptamos las últimas tecnologías para crear soluciones vanguardistas'
                },
                results: {
                    title: 'Resultados',
                    description: 'Nos enfocamos en generar impacto medible y resultados tangibles'
                },
                trust: {
                    title: 'Confianza',
                    description: 'Construimos relaciones sólidas basadas en transparencia y honestidad'
                },
                agility: {
                    title: 'Agilidad',
                    description: 'Adaptamos nuestros servicios a las necesidades cambiantes del mercado'
                }
            },
            stats: {
                projects: 'Proyectos Completados',
                clients: 'Clientes Satisfechos',
                support: 'Soporte Técnico',
                success: 'Tasa de Éxito'
            }
        },
        en: {
            sectionTitle: 'About Us',
            introText: 'At Puna Tech, we are pioneers in digital transformation, specialized in developing artificial intelligence agents and innovative digital marketing strategies that drive your business growth.',
            missionTitle: 'Our Mission',
            missionText: 'Democratize access to artificial intelligence and advanced digital marketing, providing personalized solutions that optimize business processes and maximize our clients\' return on investment.',
            visionTitle: 'Our Vision',
            visionText: 'To be the leading company in AI and digital marketing solutions in Latin America, recognized for our innovation, technical excellence and commitment to our clients\' success.',
            valuesTitle: 'Our Values',
            values: {
                innovation: {
                    title: 'Innovation',
                    description: 'We adopt the latest technologies to create cutting-edge solutions'
                },
                results: {
                    title: 'Results',
                    description: 'We focus on generating measurable impact and tangible results'
                },
                trust: {
                    title: 'Trust',
                    description: 'We build solid relationships based on transparency and honesty'
                },
                agility: {
                    title: 'Agility',
                    description: 'We adapt our services to the changing needs of the market'
                }
            },
            stats: {
                projects: 'Completed Projects',
                clients: 'Satisfied Clients',
                support: 'Technical Support',
                success: 'Success Rate'
            }
        }
    };

    return (
        <section className="about-us manrope" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">{translations[currentLanguage].sectionTitle}</h2>
                        <div className="title-underline"></div>
                        
                        <p className="intro-text">
                            {translations[currentLanguage].introText.split('Puna Tech')[0]}
                            <span className="brand-name">Puna Tech</span>
                            {translations[currentLanguage].introText.split('Puna Tech')[1]}
                        </p>
                        
                        <div className="mission-vision">
                            <div className="mission">
                                <h3>{translations[currentLanguage].missionTitle}</h3>
                                <p>{translations[currentLanguage].missionText}</p>
                            </div>
                            
                            <div className="vision">
                                <h3>{translations[currentLanguage].visionTitle}</h3>
                                <p>{translations[currentLanguage].visionText}</p>
                            </div>
                        </div>
                        
                        <div className="values">
                            <h3>{translations[currentLanguage].valuesTitle}</h3>
                            <div className="values-grid">
                                <div className="value-item">
                                    <div className="value-icon">🚀</div>
                                    <h4>{translations[currentLanguage].values.innovation.title}</h4>
                                    <p>{translations[currentLanguage].values.innovation.description}</p>
                                </div>
                                <div className="value-item">
                                    <div className="value-icon">🎯</div>
                                    <h4>{translations[currentLanguage].values.results.title}</h4>
                                    <p>{translations[currentLanguage].values.results.description}</p>
                                </div>
                                <div className="value-item">
                                    <div className="value-icon">🤝</div>
                                    <h4>{translations[currentLanguage].values.trust.title}</h4>
                                    <p>{translations[currentLanguage].values.trust.description}</p>
                                </div>
                                <div className="value-item">
                                    <div className="value-icon">⚡</div>
                                    <h4>{translations[currentLanguage].values.agility.title}</h4>
                                    <p>{translations[currentLanguage].values.agility.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-stats">
                        <div className="stat-item">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">{translations[currentLanguage].stats.projects}</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">{translations[currentLanguage].stats.clients}</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">{translations[currentLanguage].stats.support}</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">{translations[currentLanguage].stats.success}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;