import React from 'react';

const LOGOS = [
  "Paradyes", "Skippi", "Bummer", "TagZ", "Hammer", "BlueTea", "Zoff", "Snitch"
];

export const LogoMarquee: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-100 overflow-hidden py-10">
      <div className="container mx-auto px-4 mb-8 text-center">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">As seen on Shark Tank India</span>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-scroll flex space-x-16 whitespace-nowrap py-4">
          {/* Repeat logos multiple times for smooth infinite scroll */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <div key={index} className="flex items-center gap-2 text-2xl font-serif font-bold text-slate-300 hover:text-pastel-mauve transition-colors cursor-default select-none">
              {logo}
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};