import React from 'react';
import { useLanguage } from '../../LanguageContext';

const SEOTags = ({ 
  title, 
  description, 
  keywords,
  ogTitle,
  ogDescription, 
  canonicalUrl,
  customSchema 
}) => {
  const { currentLanguage } = useLanguage();

  // Default values based on language
  const defaults = {
    es: {
      title: 'Puna Tech - Agencia de IA y Marketing Digital en Argentina',
      description: 'Desarrollamos agentes de inteligencia artificial y estrategias de marketing digital innovadoras. Especialistas en automatización empresarial.',
      keywords: 'agentes IA, inteligencia artificial, marketing digital, automatización empresarial, desarrollo AI, agencia digital Argentina'
    },
    en: {
      title: 'Puna Tech - AI Agents & Digital Marketing Agency in Argentina', 
      description: 'We develop custom artificial intelligence agents and innovative digital marketing strategies. Business automation specialists.',
      keywords: 'AI agents, artificial intelligence, digital marketing, business automation, AI development, digital agency Argentina'
    }
  };

  const seoData = {
    title: title || defaults[currentLanguage].title,
    description: description || defaults[currentLanguage].description,
    keywords: keywords || defaults[currentLanguage].keywords,
    ogTitle: ogTitle || title || defaults[currentLanguage].title,
    ogDescription: ogDescription || description || defaults[currentLanguage].description,
    canonicalUrl: canonicalUrl || 'https://puna-tech.vercel.app/'
  };

  React.useEffect(() => {
    // Update document title
    document.title = seoData.title;
    
    // Update meta tags
    const updateMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    const updatePropertyTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Update basic meta tags
    updateMetaTag('description', seoData.description);
    updateMetaTag('keywords', seoData.keywords);
    
    // Update Open Graph tags
    updatePropertyTag('og:title', seoData.ogTitle);
    updatePropertyTag('og:description', seoData.ogDescription);
    updatePropertyTag('og:locale', currentLanguage === 'es' ? 'es_AR' : 'en_US');
    
    // Update canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.href = seoData.canonicalUrl;
    }

    // Update lang attribute
    document.documentElement.lang = currentLanguage;

    // Add custom schema if provided
    if (customSchema) {
      let schemaScript = document.querySelector('#custom-schema');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'custom-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(customSchema);
    }

  }, [currentLanguage, seoData.title, seoData.description, seoData.keywords, customSchema]);

  // This component doesn't render anything visible
  return null;
};

export default SEOTags;