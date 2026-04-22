import React from 'react';
import InternalLink from './InternalLink';

interface WebEngineeringPageProps {
  onNavigate: (href: string) => void;
}

const WebEngineeringPage: React.FC<WebEngineeringPageProps> = ({ onNavigate }) => {
  return (
    <section className="pt-32 pb-24 min-h-[70vh]">
      <div className="max-w-3xl space-y-10">
        <div className="space-y-4">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">CodeSH Lab Service</p>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 tracking-tight leading-[1.08]">
            Web Engineering Services
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">
            Modern, Fast &amp; Scalable Web Applications
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            We build <span className="text-zinc-200 font-medium">high-performance web applications</span> using modern technologies like{' '}
            <span className="text-zinc-200 font-medium">React, TypeScript, and Node.js</span>. Our focus is on delivering fast, secure, and scalable
            solutions tailored to your business goals.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">What We Offer</h2>
          <ul className="space-y-2 text-zinc-400 text-lg leading-relaxed list-disc pl-6">
            <li>Full-stack web application development</li>
            <li>Frontend development with React &amp; TypeScript</li>
            <li>Backend development with Node.js</li>
            <li>REST &amp; GraphQL API development</li>
            <li>Database design and optimization</li>
            <li>Performance tuning and scalability</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">Why Choose Our Web Engineering</h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            We combine <span className="text-zinc-200 font-medium">modern tech stacks with solid engineering practices</span> to deliver applications
            that are reliable and future-proof.
          </p>
          <ul className="space-y-2 text-zinc-400 text-lg leading-relaxed list-disc pl-6">
            <li>Clean and maintainable code</li>
            <li>Scalable backend systems</li>
            <li>SEO-friendly and fast-loading frontend</li>
            <li>Secure and optimized architecture</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">SEO Keywords Covered</h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            Web Development Services, Full Stack Development, React Development, Node.js Development, Scalable Web Applications
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">Build Your Web Platform</h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            Need a powerful web application? Let&#39;s build something that performs and scales.
          </p>
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

export default WebEngineeringPage;
