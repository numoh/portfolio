export default function About() {
  const skills = [
    'React & Next.js', 'TypeScript', 'Node.js', 'Python', 
    'AWS', 'Docker', 'PostgreSQL', 'Figma'
  ];

  return (
    <section id="about" className="min-h-screen py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 text-gray-900">About</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <p className="text-2xl text-gray-700 leading-relaxed">
              I'm a software developer working at Ericsson (Cloud RAN) via Combitech as a consultant. 
              I specialize in developing scalable cloud-native solutions and telecommunications infrastructure.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              When I am not working, I try to come up with side projects to build new things and fuel my creative side.
            </p>
            
            <div className="pt-8">
              <a 
                href="/cv.pdf" 
                download
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>

          </div>
          
          <div className="relative">
            <div className="w-96 h-96 rounded-3xl mx-auto relative overflow-hidden group">
              <img 
                src="/nuh_image.png" 
                alt="Nuh Jama" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-lg font-semibold mb-1">Nuh Jama</div>
                <div className="text-sm opacity-80">Software Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}