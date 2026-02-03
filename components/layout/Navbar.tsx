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
          <span className="font-serif text-2xl font-bold text-slate-800 tracking-tight">Almost One</span>
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
          <div className="relative group inline-flex">
            <div className="absolute -inset-0.5 bg-rainbow-gradient rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500 will-change-transform"></div>
            <button className="relative flex items-center gap-2 bg-white text-slate-900 px-6 py-2.5 rounded-full text-base font-bold font-serif italic transition-all hover:scale-105">
              <span className="relative z-10">Onboard</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <button className="md:hidden text-slate-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};