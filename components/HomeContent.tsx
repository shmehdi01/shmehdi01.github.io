import React from 'react';
import Hero from './Hero';
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
      <Hero />
      <Roadmap />
      <Portfolio />
      <Services onNavigate={onNavigate} />
      <Contact />
    </>
  );
};

export default HomeContent;
