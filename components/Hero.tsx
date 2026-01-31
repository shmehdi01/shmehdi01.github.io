
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-24 min-h-[70vh] flex flex-col justify-center">
      <div className="space-y-6 max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-mono text-zinc-400 tracking-wider uppercase">
            Available for technical consultation
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight leading-[1.1]">
          {PERSONAL_INFO.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>
        
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
