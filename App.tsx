import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/landing/Hero';
import { MockSection } from './components/landing/MockSection';
import { LogoMarquee } from './components/landing/LogoMarquee';
import { Comparison } from './components/landing/Comparison';
import { Features } from './components/landing/Features';
import { TechStack } from './components/landing/TechStack';
import { Process } from './components/landing/Process';
import { InteractiveDemo } from './components/landing/InteractiveDemo';
import { Testimonials } from './components/landing/Testimonials';
import { Pricing } from './components/landing/Pricing';
import { Resources } from './components/landing/Resources';
import { FAQ } from './components/landing/FAQ';
import { Footer } from './components/landing/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { FloatingCTA } from './components/ui/FloatingCTA';
import { CTA } from './components/landing/CTA';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-pastel-lemon selection:text-slate-900 cursor-none">
      <CustomCursor />
      <FloatingCTA />
      <Navbar />
      <main>
        <Hero />
        <MockSection />
        <LogoMarquee />
        <Comparison />
        <Features />
        <TechStack />
        <Process />
        <InteractiveDemo />
        <Testimonials />
        <Pricing />
        <Resources />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;