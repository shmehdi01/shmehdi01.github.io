import React from 'react';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import FAQ from './FAQ';
import Roadmap from './Roadmap';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';

interface HomeContentProps {
  onNavigate: (href: string) => void;
}

const HomeContent: React.FC<HomeContentProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <HowItWorks onNavigate={onNavigate} />
      <Roadmap />
      <Portfolio onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <FAQ onNavigate={onNavigate} />
      <Contact />
    </>
  );
};

export default HomeContent;
