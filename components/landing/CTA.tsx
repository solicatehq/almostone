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
            Join hundreds of founders scaling their revenue with Almost Zero's expert guidance.
          </p>

          <button className="group relative inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full text-xl font-medium overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-pastel-mauve/40 hover:shadow-pastel-mauve/60">
            <span className="relative z-10 group-hover:text-pastel-lemon transition-colors">Get Onboarded Now</span>
            <ArrowUpRight className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-pastel-lemon transition-all" />
            <div className="absolute inset-0 bg-rainbow-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </button>
        </AnimateInView>
      </div>
    </footer>
  );
};