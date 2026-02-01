import React from 'react';
import { AnimateInView } from '../ui/AnimateInView';
import { Palette, TrendingUp, Zap, Tv } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
            Why Founders <span className="text-pastel-mauve italic">Love Us.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Marketing-as-a-Service that combines the speed of AI with the strategic depth of a CMO.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto_auto] gap-6">
          
          {/* Card 1: AI Ads Generator */}
          <AnimateInView className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white to-pastel-rose/10 border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-pastel-rose/30 rounded-2xl flex items-center justify-center mb-6 text-slate-800">
                <Palette size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">AI Ad Creative Gen</h3>
              <p className="text-slate-500 max-w-sm">Generate high-converting ad visuals in seconds. Our AI analyzes top-performing creatives to build assets that stop the scroll.</p>
            </div>
            
            {/* Visual Abstract */}
            <div className="absolute right-0 bottom-0 w-1/2 h-3/4 bg-white rounded-tl-3xl shadow-xl border-l border-t border-slate-100 p-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
                 <div className="flex flex-col gap-2 h-full">
                     <div className="h-32 w-full bg-slate-200 rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-pastel-lemon to-pastel-rose opacity-50"></div>
                        <div className="absolute bottom-2 left-2 bg-white/80 px-2 py-1 rounded text-[10px] font-bold">Sponsored</div>
                     </div>
                     <div className="h-2 w-full bg-slate-100 rounded"></div>
                     <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                     <button className="mt-auto w-full bg-slate-900 text-white text-xs py-2 rounded">Shop Now</button>
                 </div>
            </div>
          </AnimateInView>

          {/* Card 2: Expert Strategy */}
          <AnimateInView delay={0.1} className="min-h-[300px] rounded-[2.5rem] bg-gradient-to-br from-white to-pastel-lemon/20 border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="w-12 h-12 bg-pastel-lemon/50 rounded-2xl flex items-center justify-center mb-6 text-slate-800">
                <Tv size={24} />
            </div>
             <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Expert Strategy</h3>
                <p className="text-slate-500 text-sm">"Shark Tank" level expertise without the equity cost. Led by founders who have scaled brands.</p>
             </div>
             <div className="mt-4 flex items-center gap-2 bg-white/60 p-2 rounded-lg border border-pastel-mauve/20">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-xs font-bold text-slate-700">Strategy Session Active</span>
             </div>
          </AnimateInView>

          {/* Card 3: Instant Scale */}
          <AnimateInView delay={0.2} className="min-h-[300px] rounded-[2.5rem] bg-gradient-to-br from-white to-pastel-ice/20 border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
             <div className="relative z-10">
                <div className="w-12 h-12 bg-pastel-ice/40 rounded-2xl flex items-center justify-center mb-6 text-slate-800">
                    <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Instant Scale</h3>
                <p className="text-slate-500 text-sm">From 0 to ₹120Cr+ ad spend managed profitably.</p>
             </div>
             
             {/* Big Number Visual */}
             <div className="mt-4">
                 <span className="text-5xl font-serif font-bold text-slate-900 tracking-tighter">120<span className="text-pastel-mauve">Cr+</span></span>
             </div>
          </AnimateInView>

        </div>
      </div>
    </section>
  );
};