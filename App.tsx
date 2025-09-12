
import React, { useRef } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import DetailedBenefits from './components/DetailedBenefits';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const offerSectionRef = useRef<HTMLDivElement>(null);

  const scrollToOffer = () => {
    offerSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#111827] text-[#F9FAFB] font-sans antialiased overflow-x-hidden">
      <main>
        <Hero onGetAccessClick={scrollToOffer} />
        <Benefits />
        <DetailedBenefits />
        <div ref={offerSectionRef}>
          <Offer />
        </div>
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;