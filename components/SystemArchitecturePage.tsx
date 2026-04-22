import React from 'react';
import InternalLink from './InternalLink';

interface SystemArchitecturePageProps {
  onNavigate: (href: string) => void;
}

const SystemArchitecturePage: React.FC<SystemArchitecturePageProps> = ({ onNavigate }) => {
  return (
    <section className="pt-32 pb-24 min-h-[70vh]">
      <div className="max-w-3xl space-y-10">
        <div className="space-y-4">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">CodeSH Lab Service</p>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 tracking-tight leading-[1.08]">
            System Architecture &amp; LLD Design
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">
            Build Systems That Scale With Your Growth
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            A strong architecture is the backbone of every successful product. We design{' '}
            <span className="text-zinc-200 font-medium">scalable, maintainable, and high-performance system architectures</span>{' '}
            that support your business as it grows.
          </p>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            From startups to complex platforms, we ensure your system is built right from the ground up.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">What We Offer</h2>
          <ul className="space-y-2 text-zinc-400 text-lg leading-relaxed list-disc pl-6">
            <li>Low-Level Design (LLD) documentation</li>
            <li>Scalable system architecture planning</li>
            <li>Modular and microservices architecture</li>
            <li>Database design &amp; optimization</li>
            <li>Performance and load handling strategies</li>
            <li>API structure and service design</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">Why Our Architecture Stands Out</h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            We don&#39;t just design systems, we build{' '}
            <span className="text-zinc-200 font-medium">future-ready foundations</span> that prevent technical debt and
            ensure long-term efficiency.
          </p>
          <ul className="space-y-2 text-zinc-400 text-lg leading-relaxed list-disc pl-6">
            <li>Clear and developer-friendly LLD</li>
            <li>Scalable and modular systems</li>
            <li>Optimized for performance and reliability</li>
            <li>Designed for real-world production use</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">SEO Keywords Covered</h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            System Architecture Design, Low Level Design, Scalable Architecture, Software Architecture Services, Backend System Design
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">Plan Your System Right</h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">Avoid costly rebuilds later. Start with a strong architecture today.</p>
        </div>

        <div className="pt-2 flex flex-wrap gap-4 items-center">
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

export default SystemArchitecturePage;
