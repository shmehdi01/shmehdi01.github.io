
import React from 'react';
import SectionHeading from './SectionHeading';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 border-t border-zinc-900 scroll-mt-24">
      <SectionHeading title="Inquiry" subtitle="Let's discuss architecture and product vision." />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              I am currently open to discussing new mobile initiatives, system audits, or senior engineering roles.
            </p>
            
            <div className="space-y-4 pt-4">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Direct Channel</span>
              <a 
                href="mailto:syed@codesh.in" 
                className="block text-2xl font-medium text-zinc-100 hover:text-zinc-400 transition-colors underline decoration-zinc-800 underline-offset-8"
              >
                syed@codesh.in
              </a>
            </div>
          </div>

          <div className="space-y-4">
             <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Availability</span>
             <p className="text-zinc-300 font-mono text-sm">Mon — Fri, 09:00 — 18:00 UTC</p>
          </div>
          
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 pt-8 border-t border-zinc-900 w-fit">
            <a href="https://www.linkedin.com/in/shmehdi01/" className="hover:text-zinc-100 transition-colors">LinkedIn</a>
            <a href="http://github.com/shmehdi01" className="hover:text-zinc-100 transition-colors">GitHub</a>
            <a href="https://x.com/shmehdi01" className="hover:text-zinc-100 transition-colors">Twitter</a>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-zinc-900 flex justify-between items-center">
        <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
          © 2026 CodeSH Lab • Engineered for longevity
        </p>
      </div>
    </section>
  );
};

export default Contact;
