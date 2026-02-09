import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/landing/Hero';
import { MockSection } from './components/landing/MockSection';
import { LogoMarquee } from './components/landing/LogoMarquee';
import { Comparison } from './components/landing/Comparison';
import { Features } from './components/landing/Features';

import { Process } from './components/landing/Process';

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
        {/* Global Gray Wrapper for Consistent Background & Flow */}
        <div className="relative bg-[#fafafa] overflow-hidden">
          {/* Global Background Decorations */}
          {/* Top Hero Area Decoration */}
          <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[1000px] bg-pastel-lemon/40 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-[5%] right-[-5%] w-[50%] h-[1000px] bg-pastel-mauve/40 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="absolute top-[18%] left-0 -translate-x-1/2 w-[800px] h-[800px] bg-pastel-mauve/50 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-[30%] right-0 translate-x-1/2 w-[600px] h-[600px] bg-pastel-mint/50 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-[45%] left-0 -translate-x-1/2 w-[600px] h-[600px] bg-pastel-lemon/50 rounded-full blur-3xl pointer-events-none"></div>

          {/* Testimonials / Pricing Area */}
          <div className="absolute top-[58%] right-0 translate-x-1/3 w-[700px] h-[700px] bg-pastel-ice/50 rounded-full blur-3xl pointer-events-none"></div>

          {/* Resources / FAQ Area */}
          <div className="absolute top-[72%] left-0 -translate-x-1/2 w-[600px] h-[600px] bg-pastel-rose/50 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-[85%] right-0 translate-x-1/3 w-[600px] h-[600px] bg-pastel-frosted/50 rounded-full blur-3xl pointer-events-none"></div>

          <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-pastel-mauve/50 rounded-full blur-3xl pointer-events-none"></div>

          <Hero />
          <MockSection />
          <LogoMarquee />

          <Comparison />
          <Features />

          <Process />

          <Testimonials />
          <Pricing />
          <Resources />
          <FAQ />
          <CTA />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;