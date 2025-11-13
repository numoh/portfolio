'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">© 2025 Nuh Jama. All rights reserved.</p>
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Back to top ↑
            </button>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}