import Navbar from '@/components/Navbar';
import Home from '@/components/sections/Home';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function Page() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}