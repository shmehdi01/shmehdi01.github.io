import React from 'react';
import InternalLink from './InternalLink';

interface ServicePageProps {
  title: string;
  paragraphs: string[];
  onNavigate: (href: string) => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ title, paragraphs, onNavigate }) => {
  return (
    <section className="pt-32 pb-24 min-h-[70vh]">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">CodeSH Lab Service</p>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 tracking-tight leading-[1.08]">{title}</h1>
        </div>

        <div className="space-y-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="pt-4 flex flex-wrap gap-4 items-center">
          <InternalLink
            href="/#contact"
            onNavigate={onNavigate}
            className="inline-flex items-center justify-center px-6 py-3 bg-zinc-100 text-zinc-950 font-mono text-xs uppercase tracking-[0.18em] font-bold hover:bg-zinc-300 transition-colors"
          >
            Start an inquiry
          </InternalLink>
          <InternalLink
            href="/"
            onNavigate={onNavigate}
            className="inline-flex items-center justify-center px-6 py-3 border border-zinc-800 text-zinc-300 font-mono text-xs uppercase tracking-[0.18em] hover:border-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Back to home
          </InternalLink>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
