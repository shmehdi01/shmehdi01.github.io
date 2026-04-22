
import React from 'react';
import { SERVICES } from '../constants';
import SectionHeading from './SectionHeading';
import InternalLink from './InternalLink';

interface ServicesProps {
  onNavigate: (href: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-24 border-t border-zinc-900 scroll-mt-24">
      <SectionHeading title="Services" subtitle="Architecting products from zero to scale." />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <div key={index} className="space-y-4">
            {service.href ? (
              <InternalLink
                href={service.href}
                onNavigate={onNavigate}
                className="inline-flex items-baseline gap-2 group"
              >
                <h3 className="text-lg font-medium text-zinc-100 group-hover:underline underline-offset-4 decoration-zinc-700">
                  {service.title}
                </h3>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.22em] group-hover:text-zinc-300 transition-colors">
                  View
                </span>
              </InternalLink>
            ) : (
              <h3 className="text-lg font-medium text-zinc-100">{service.title}</h3>
            )}
            <p className="text-zinc-400 leading-relaxed text-sm">
              {service.description}
            </p>
            {service.note && (
              <p className="text-[11px] font-mono text-zinc-500 border-l border-zinc-700 pl-3">
                {service.note}
              </p>
            )}
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-zinc-500 leading-relaxed max-w-3xl">
        Explore the service pages for{' '}
        <InternalLink href="/services/mobile-app-development" onNavigate={onNavigate} className="text-zinc-300 hover:text-zinc-100 underline underline-offset-4 decoration-zinc-700">
          mobile app development
        </InternalLink>
        ,{' '}
        <InternalLink href="/services/system-architecture" onNavigate={onNavigate} className="text-zinc-300 hover:text-zinc-100 underline underline-offset-4 decoration-zinc-700">
          system architecture and LLD design
        </InternalLink>
        ,{' '}
        <InternalLink href="/services/flutter-app-development" onNavigate={onNavigate} className="text-zinc-300 hover:text-zinc-100 underline underline-offset-4 decoration-zinc-700">
          Flutter app development
        </InternalLink>
        ,{' '}
        <InternalLink href="/services/web-app-development" onNavigate={onNavigate} className="text-zinc-300 hover:text-zinc-100 underline underline-offset-4 decoration-zinc-700">
          web app development for startups
        </InternalLink>
        , and{' '}
        <InternalLink href="/services/ui-ux-design" onNavigate={onNavigate} className="text-zinc-300 hover:text-zinc-100 underline underline-offset-4 decoration-zinc-700">
          UI/UX design
        </InternalLink>
        .
      </p>
    </section>
  );
};

export default Services;
