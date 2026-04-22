import React from 'react';
import InternalLink from './InternalLink';

interface MobileAppDevelopmentPageProps {
  onNavigate: (href: string) => void;
}

const MobileAppDevelopmentPage: React.FC<MobileAppDevelopmentPageProps> = ({ onNavigate }) => {
  return (
    <section className="pt-32 pb-24 min-h-[70vh]">
      <div className="max-w-3xl space-y-10">
        <div className="space-y-4">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">CodeSH Lab Service</p>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 tracking-tight leading-[1.08]">
            Mobile App Development Services
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">
            Build Scalable, High-Performance Mobile Apps
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            We deliver <span className="text-zinc-200 font-medium">production-ready mobile applications</span> designed for performance, scalability, and user engagement. Whether you&#39;re a startup or an enterprise, we transform your idea into a reliable mobile product.
          </p>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            Our expertise includes <span className="text-zinc-200 font-medium">Native Android (Kotlin)</span> and <span className="text-zinc-200 font-medium">Flutter</span>, allowing us to build both platform-specific and cross-platform applications efficiently.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">What We Offer</h2>
          <ul className="space-y-2 text-zinc-400 text-lg leading-relaxed list-disc pl-6">
            <li>Custom mobile app development (Android &amp; Flutter)</li>
            <li>End-to-end product lifecycle (design, development, deployment)</li>
            <li>API integrations and backend connectivity</li>
            <li>Real-time features (chat, notifications, live updates)</li>
            <li>App performance optimization</li>
            <li>Google Play Store deployment &amp; maintenance</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">Why Choose Our Mobile Development</h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            We focus on <span className="text-zinc-200 font-medium">clean architecture, smooth UI/UX, and long-term maintainability</span>. Every app we build is optimized for speed, security, and scalability.
          </p>
          <ul className="space-y-2 text-zinc-400 text-lg leading-relaxed list-disc pl-6">
            <li>Production-ready codebase</li>
            <li>Scalable architecture for future growth</li>
            <li>User-centric design approach</li>
            <li>Fast and transparent development process</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">SEO Keywords Covered</h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            Mobile App Development, Android App Development, Flutter App Development, Custom Mobile Apps, App Development Company India
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">Let&#39;s Build Your App</h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            Looking to build or scale your mobile application? We&#39;re ready to turn your vision into reality.
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

export default MobileAppDevelopmentPage;
