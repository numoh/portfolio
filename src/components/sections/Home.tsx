'use client';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black dark:bg-white text-white dark:text-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">

        <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Nuh Jama
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 mb-4 font-light">
          Software Developer
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          I craft digital experiences that blend innovative design with cutting-edge technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-all font-medium"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-600 text-white px-8 py-4 rounded-full hover:border-gray-400 transition-all font-medium"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}