'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
              <img 
                src="/nuh_image.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex space-x-12">
            <button onClick={() => scrollTo('home')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</button>
            <button onClick={() => scrollTo('about')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</button>
            <button onClick={() => scrollTo('projects')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Work</button>
            <button onClick={() => scrollTo('contact')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Contact</button>
          </div>
          <div></div>

        </div>
      </div>
    </nav>
  );
}