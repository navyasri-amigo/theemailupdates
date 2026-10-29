import React from 'react';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Showcase } from './components/Showcase';
import { WhyUs } from './components/WhyUs';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink focus:shadow-soft">
          
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Services />
          <Showcase />
          <WhyUs />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </MotionConfig>);

}