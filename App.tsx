
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = ['Journey', 'Portfolio', 'Services', 'Contact'];

  return (
    <div className="min-h-screen grid-pattern selection:bg-zinc-800 selection:text-zinc-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${isMenuOpen ? 'bg-black' : 'glass border-b border-zinc-900/50'}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative z-[120]">
          <a href="#" onClick={() => setIsMenuOpen(false)} className="font-mono font-bold text-lg tracking-tighter hover:opacity-70 transition-opacity">
            CODESH<span className="text-zinc-500">LAB</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors p-2 -mr-2"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black z-[110] md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center min-h-screen pt-20 gap-8">
            {navItems.map((item, idx) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-3xl font-mono uppercase tracking-[0.4em] text-zinc-500 hover:text-zinc-100 transition-all duration-500 transform py-4 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {item}
              </a>
            ))}
            
            <div className={`mt-12 pt-12 border-t border-zinc-900 w-48 flex justify-center gap-6 transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
               <a href="https://github.com/shmehdi01" target="_blank" className="text-zinc-600 hover:text-zinc-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
               </a>
               <a href="https://www.linkedin.com/in/shmehdi01/" target="_blank" className="text-zinc-600 hover:text-zinc-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
               </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Roadmap />
        <Portfolio />
        <Services />
        <Contact />
      </main>

      {/* Footer minimal info */}
      <footer className="py-12 border-t border-zinc-900 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
             <p className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest">
              CodeSH Lab • Noida, Uttar Pradesh, India
            </p>
            <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.2em]">
              Mobile & Web Engineering Specialist
            </p>
          </div>
          <p className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest">
            Last updated Q1 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
