'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const projects = [
    { 
      title: t('projectTBA'), 
      description: t('projectDescription'),
      tech: ["Babylon.js", "Next.js", "TypeScript", "PostgreSQL"],
      status: t('inDevelopment')
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">{t('selectedWork')}</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-black text-gray-800">0{index + 1}</span>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <button className="text-white hover:text-gray-300 transition-colors font-medium">
                      {t('viewProject')} →
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors font-medium">
                      {t('github')} →
                    </button>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-4 w-full h-full">
                        <div className="bg-white/10 rounded-lg p-4 flex flex-col justify-center items-center">
                          <div className="w-16 h-12 border-2 border-white/30 rounded mb-2"></div>
                          <div className="w-12 h-8 border-2 border-white/30 rounded mb-1"></div>
                          <div className="text-white/50 text-xs">2D Plan</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 flex flex-col justify-center items-center">
                          <div className="w-16 h-12 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-lg mb-2 transform rotate-3"></div>
                          <div className="text-white/50 text-xs">3D Model</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}