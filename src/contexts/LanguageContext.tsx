'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sv';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    work: 'Work',
    contact: 'Contact',
    
    // Home section
    softwareDeveloper: 'Software Developer',
    heroDescription: 'Building software solutions and learning new technologies',
    viewMyWork: 'View My Work',
    getInTouch: 'Get In Touch',
    
    // About section
    aboutTitle: 'About',
    aboutDescription1: "I'm a software developer working at Ericsson (Cloud RAN) via Combitech as a consultant.",
    aboutDescription2: 'When I am not working, I try to come up with side projects to build new things and fuel my creative side.',
    downloadCV: 'Download CV',
    
    // Projects section
    selectedWork: 'Selected Work',
    projectTBA: 'Project TBA',
    projectDescription: 'An exciting new project currently in development. More details coming soon',
    inDevelopment: 'In Development',
    viewProject: 'View Project',
    github: 'GitHub',
    
    // Contact section
    letsWorkTogether: "Let's Work Together",
    contactDescription: "Have a project in mind? Let's discuss how we can bring your ideas to life.",
    availableForWork: 'Available for work',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    connect: 'Connect',
    
    // Footer
    allRightsReserved: 'All rights reserved',
    backToTop: 'Back to top'
  },
  sv: {
    // Navbar
    home: 'Hem',
    about: 'Om',
    work: 'Arbete',
    contact: 'Kontakt',
    
    // Home section
    softwareDeveloper: 'Mjukvaruutvecklare',
    heroDescription: 'Bygger mjukvarulösningar och lär mig nya teknologier',
    viewMyWork: 'Se Mitt Arbete',
    getInTouch: 'Kontakta Mig',
    
    // About section
    aboutTitle: 'Om',
    aboutDescription1: 'Jag är en mjukvaruutvecklare som arbetar på Ericsson (Cloud RAN) via Combitech som konsult.',
    aboutDescription2: 'När jag inte jobbar försöker jag komma på sidoprojekt för att bygga nya saker och mata min kreativa sida.',
    downloadCV: 'Ladda ner CV',
    
    // Projects section
    selectedWork: 'Utvalt Arbete',
    projectTBA: 'Projekt TBA',
    projectDescription: 'Ett spännande nytt projekt som för närvarande är under utveckling. Mer information kommer snart',
    inDevelopment: 'Under Utveckling',
    viewProject: 'Se Projekt',
    github: 'GitHub',
    
    // Contact section
    letsWorkTogether: 'Låt Oss Arbeta Tillsammans',
    contactDescription: 'Har du ett projekt i åtanke? Låt oss diskutera hur vi kan förverkliga dina idéer.',
    availableForWork: 'Tillgänglig för arbete',
    email: 'E-post',
    phone: 'Telefon',
    location: 'Plats',
    connect: 'Anslut',
    
    // Footer
    allRightsReserved: 'Alla rättigheter förbehållna',
    backToTop: 'Tillbaka till toppen'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sv' : 'en');
  };

  const t = (key: string): string => {
    const translation = translations[language] as Record<string, string>;
    return translation[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}