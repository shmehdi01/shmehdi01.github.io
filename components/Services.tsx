
import React from 'react';
import { SERVICES } from '../constants';
import SectionHeading from './SectionHeading';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 border-t border-zinc-900 scroll-mt-24">
      <SectionHeading title="Services" subtitle="Architecting products from zero to scale." />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-medium text-zinc-100">{service.title}</h3>
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
    </section>
  );
};

export default Services;
