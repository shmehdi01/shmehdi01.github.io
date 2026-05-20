
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import InternalLink from './InternalLink';

interface HeroProps {
  onNavigate?: (href: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="pt-32 pb-24 min-h-[70vh] flex flex-col justify-center">
      <div className="space-y-6 max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-mono text-zinc-400 tracking-wider uppercase">
            Your Technical Co-Founder
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight leading-[1.1]">
          Got an idea? Let's turn it into a real product — fast.
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
          I'm Syed, founder of CodeSH Lab. I help non-technical founders go from idea to working MVP in a week — so you can test, learn, and move fast without hiring a full team.
        </p>

        <div className="pt-4 flex flex-wrap gap-4 items-center">
          <InternalLink
            href="#contact"
            onNavigate={onNavigate}
            className="inline-flex items-center justify-center px-6 py-3 bg-zinc-100 text-zinc-950 font-mono text-xs uppercase tracking-[0.18em] font-bold hover:bg-zinc-300 transition-colors"
          >
            Let's Build Together
          </InternalLink>
          <InternalLink
            href="#portfolio"
            onNavigate={onNavigate}
            className="inline-flex items-center justify-center px-6 py-3 border border-zinc-800 text-zinc-300 font-mono text-xs uppercase tracking-[0.18em] hover:border-zinc-500 hover:text-zinc-100 transition-colors"
          >
            See past projects ↓
          </InternalLink>
        </div>
        
        <div className="pt-8 flex flex-wrap gap-8 text-sm font-mono text-zinc-500">
          <div className="space-y-1">
            <p className="uppercase text-[10px] tracking-widest text-zinc-600">Experience</p>
            <p className="text-zinc-300">{PERSONAL_INFO.experience}</p>
          </div>
          <div className="space-y-1">
            <p className="uppercase text-[10px] tracking-widest text-zinc-600">Focus</p>
            <p className="text-zinc-300">Android • Flutter • LLD</p>
          </div>
          <div className="space-y-1">
            <p className="uppercase text-[10px] tracking-widest text-zinc-600">Location</p>
            <p className="text-zinc-300">{PERSONAL_INFO.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

