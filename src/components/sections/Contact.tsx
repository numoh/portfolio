export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-gray-900">Let's Work Together</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Available for work</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <div className="text-center">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl">@</span>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Email</div>
                    <div className="text-lg sm:text-xl font-medium text-gray-900 break-all">numoh.55@gmail.com</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Phone</div>
                    <div className="text-lg sm:text-xl font-medium text-gray-900">+46765641298</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Location</div>
                    <div className="text-lg sm:text-xl font-medium text-gray-900">Stockholm, Sweden</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex flex-col items-center gap-6">
                  <a 
                    href="https://www.linkedin.com/in/nuhjama" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-16 h-16 bg-black hover:bg-gray-800 rounded-2xl transition-colors flex items-center justify-center group"
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Connect</div>
                    <div className="text-lg sm:text-xl font-medium text-gray-900">LinkedIn</div>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}