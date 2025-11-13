'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black dark:bg-white text-white dark:text-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Nuh Jama
          </span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-4 font-light">
          {t('softwareDeveloper')}
        </p>
        <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          {t('heroDescription')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-all font-medium"
          >
            {t('viewMyWork')}
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-600 text-white px-8 py-4 rounded-full hover:border-gray-400 transition-all font-medium"
          >
            {t('getInTouch')}
          </button>
        </div>
      </div>
    </section>
  );
}