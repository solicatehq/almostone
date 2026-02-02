import React from 'react';
import { Rocket, Menu, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 flex justify-center w-full">
      <div className="w-full max-w-5xl bg-white/40 backdrop-blur-md border border-white/40 rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-pastel-mauve/10 transition-all hover:bg-white/60">

        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-gradient-to-tr from-pastel-frosted to-pastel-ice p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform">
            <Rocket size={20} fill="white" />
          </div>
          <span className="font-serif text-2xl font-bold text-slate-800 tracking-tight">Almost Zero</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-slate-900 hover:scale-105 transition-all">Products</a>
          <a href="#pricing" className="hover:text-slate-900 hover:scale-105 transition-all">Pricing</a>
          <a href="#resources" className="hover:text-slate-900 hover:scale-105 transition-all">Resources</a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a href="#" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">Sign In</a>
          <button className="group flex items-center gap-1.5 bg-rainbow-gradient text-slate-900 pl-5 pr-4 py-2 rounded-full text-lg font-serif italic font-bold shadow-md shadow-pastel-mauve/30 hover:shadow-lg hover:shadow-pastel-mauve/40 hover:-translate-y-0.5 hover:scale-105 transition-all active:scale-95">
            Onboard
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="md:hidden text-slate-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};