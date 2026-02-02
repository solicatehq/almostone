import React, { useState } from 'react';

import { Rocket, Github } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <footer className="relative pt-12 pb-6 overflow-hidden border-t border-slate-200 bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Large Background Text */}
        <span className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 text-[18vw] font-bold text-slate-950/[0.05] whitespace-nowrap select-none tracking-tight">
          AlmostOne
        </span>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-gradient-to-tr from-pastel-frosted to-pastel-ice p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform">
                <Rocket size={20} fill="white" />
              </div>
              <span className="font-serif text-2xl font-bold text-slate-800 tracking-tight">Almost Zero</span>
            </div>

            <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
              Join hundreds of founders scaling their revenue with Almost Zero's expert guidance. Personalized learning that adapts to your needs.
            </p>

            <div className="flex space-x-5 pt-2">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <XIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="md:col-span-2 hidden md:block"></div>

          {/* Resources Column */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-6">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#resources" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-slate-500 relative z-10">
          <p>© {new Date().getFullYear()} Almost Zero. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <span className="text-red-500">❤</span> for Growth.

            <div
              className="relative ml-2 cursor-pointer group flex items-center"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              <span className="flex items-center justify-center w-4 h-4 text-[10px] font-medium text-slate-400 border border-slate-200 rounded-full hover:bg-slate-50 hover:text-slate-600 transition-colors">?</span>

              <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 p-4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl text-left border border-white/20 ring-1 ring-slate-900/5 transition-all duration-300 origin-bottom z-50 ${showTooltip ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <p className="normal-case text-slate-600 text-xs leading-relaxed font-sans">
                  This experience is crafted by <span className="font-medium text-slate-900">Solicate</span>, a creative brand agency.
                </p>
                <div className="mt-2 text-[10px] text-slate-400 font-sans border-t border-slate-100 pt-2">
                  For more details contact <a href="https://solicate.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-900 transition-colors">solicate.in</a>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white/95"></div>
              </div>
            </div>
          </p>
        </div>
      </div>
    </footer>
  );
};