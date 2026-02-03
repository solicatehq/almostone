import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AnimateInView } from '../ui/AnimateInView';

export const CTA: React.FC = () => {
  return (
    <footer className="relative pt-32 pb-12 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-pastel-ice/20 to-white -z-20"></div>

      <div className="max-w-4xl mx-auto text-center">
        <AnimateInView>
          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tight">
            Ready to dominate <br />
            <span className="bg-clip-text text-transparent bg-rainbow-gradient">your market?</span>
          </h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
            Join hundreds of founders scaling their revenue with Almost One's expert guidance.
          </p>

          <div className="relative group inline-flex">
            <div className="absolute -inset-1 bg-rainbow-gradient rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500 will-change-transform"></div>
            <button className="relative flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full text-xl font-medium transition-all hover:scale-105">
              <span className="relative z-10">Get Onboarded Now</span>
              <ArrowUpRight className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </AnimateInView>
      </div>
    </footer>
  );
};