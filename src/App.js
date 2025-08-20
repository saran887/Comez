import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import Download from './components/Download';
import About from './components/About';
import NewFooter from './components/NewFooter';
import Features from './components/Features';

function App() {
  return (
    <div className="relative min-h-screen bg-[#020C14] pt-24">
      <Navbar />
      <Hero />
      <Download />
      <div id="about">
        <About />
        <div id="features">
          <Features />
        </div>
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faqs">
        <FAQs />
      </div>
      <NewFooter />
    </div>
  );
}

export default App;
