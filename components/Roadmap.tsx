
import React from 'react';
import { ROADMAP } from '../constants';
import SectionHeading from './SectionHeading';

const Roadmap: React.FC = () => {
  return (
    <section id="journey" className="py-24 border-t border-zinc-900 scroll-mt-24">
      <SectionHeading title="Roadmap" subtitle="A 7-year progression of technical growth." />
      
      <div className="space-y-12">
        {ROADMAP.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 relative">
            <div className="md:w-32 flex-shrink-0">
              <span className="font-mono text-zinc-400 text-sm">{item.year}</span>
            </div>
            <div className="hidden md:block absolute left-36 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2"></div>
            <div className="md:pl-12">
              <h3 className="text-xl font-semibold text-zinc-100 mb-1">{item.phase}</h3>
              
              <div className="flex items-center gap-2 mb-3">
                <small className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {item.company}
                </small>
                <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                <small className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {item.designation}
                </small>
              </div>

              <p className="text-zinc-400 max-w-2xl leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
