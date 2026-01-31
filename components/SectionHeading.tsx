
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">{title}</h2>
    {subtitle && <p className="text-2xl font-medium text-zinc-100">{subtitle}</p>}
    <div className="h-px w-12 bg-zinc-800 mt-4"></div>
  </div>
);

export default SectionHeading;
