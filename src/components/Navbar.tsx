'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
              <img 
                src="/nuh_image.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="hidden sm:flex space-x-8 lg:space-x-12">
            <button onClick={() => scrollTo('home')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">{t('home')}</button>
            <button onClick={() => scrollTo('about')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">{t('about')}</button>
            <button onClick={() => scrollTo('projects')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">{t('work')}</button>
            <button onClick={() => scrollTo('contact')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">{t('contact')}</button>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              {language === 'en' ? 'SV' : 'EN'}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-gray-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <button onClick={() => scrollTo('home')} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2">{t('home')}</button>
              <button onClick={() => scrollTo('about')} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2">{t('about')}</button>
              <button onClick={() => scrollTo('projects')} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2">{t('work')}</button>
              <button onClick={() => scrollTo('contact')} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2">{t('contact')}</button>
              <button onClick={toggleLanguage} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2">{language === 'en' ? 'Svenska' : 'English'}</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}