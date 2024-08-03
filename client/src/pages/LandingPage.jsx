import React from 'react';
import Hero from '../components/landing-page/Hero';
import Faq from '../components/landing-page/Faq';
import ClientTestimonials from '../components/landing-page/ClientTestimonials';
import HowToUse from '../components/landing-page/HowToUse';

const LandingPage = () => {
  return (
    <div className="flex flex-col my-[1rem] gap-[1rem]">
      <div className="px-4 md:px-6">
        <Hero />
      </div>
      <div className="px-4 md:px-6">
        <HowToUse />
      </div>
      <ClientTestimonials />
      <div className="px-4 md:px-6">
        <Faq />
      </div>
    </div>
  );
};

export default LandingPage;
