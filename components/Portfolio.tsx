
import React from 'react';
import { PROJECTS } from '../constants';
import SectionHeading from './SectionHeading';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 border-t border-zinc-900 scroll-mt-24">
      <SectionHeading title="Portfolio" subtitle="Selected lab projects and experiments." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="glass p-8 group hover:border-zinc-500 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-semibold text-zinc-100">{project.name}</h3>
              {project.link && (
                <a 
                  href={project.link} 
                  className="text-zinc-500 hover:text-zinc-100 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              )}
            </div>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
