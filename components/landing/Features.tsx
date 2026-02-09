import React from 'react';
import { AnimateInView } from '../ui/AnimateInView';
import { Palette, TrendingUp, Zap, Tv, Target } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-4 relative">
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

          {/* Card 1: AI Ads Generator - Premium Redesign (Performance Predator) */}
          <AnimateInView className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-slate-200 border border-slate-300 p-8 shadow-2xl shadow-emerald-900/5 hover:shadow-emerald-900/10 transition-all duration-500">
            {/* Background Gradients & Noise */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-slate-200 to-teal-50/30 opacity-60"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-pastel-mint/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp size={28} />
                </div>
                <h3 className="text-3xl font-serif font-medium text-slate-900 mb-3">Full-Funnel Growth</h3>
                <p className="text-slate-500 max-w-sm text-lg leading-relaxed">From click to customer. We optimize every touchpoint in the funnel to lower CPA and increase <span className="font-semibold text-emerald-600">LTV.</span></p>
              </div>

              {/* Visual Abstract - Concept: The Conversion Flow */}
              <div className="relative flex-grow min-h-[220px] mt-4 select-none flex items-center justify-center">

                {/* Connecting Line */}
                <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-slate-200 via-emerald-200 to-emerald-500 -translate-x-1/2 z-0"></div>

                <div className="flex flex-col gap-4 w-full max-w-[280px] relative z-10">

                  {/* Step 1: Acquisition (Traffic) */}
                  <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm flex items-center justify-between group-hover:translate-y-1 transition-transform duration-700">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                        <Zap size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-medium">Acquisition</div>
                        <div className="text-sm font-bold text-slate-700">High Intent Traffic</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">24k</span>
                  </div>

                  {/* Step 2: Optimization (The Filter) */}
                  <div className="bg-white border border-emerald-100 p-3 rounded-xl shadow-lg shadow-emerald-100/50 flex items-center justify-between scale-105 z-20 ring-4 ring-white">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <Target size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Optimized</div>
                        <div className="text-sm font-bold text-slate-900">Conversion Rate</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded flex items-center gap-1">
                      <TrendingUp size={10} /> +2.8%
                    </span>
                  </div>

                  {/* Step 3: Retention (Revenue) */}
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 p-3 rounded-xl shadow-xl flex items-center justify-between group-hover:-translate-y-1 transition-transform duration-700">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-400">
                        <div className="font-serif italic font-bold">₹</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-medium">Revenue</div>
                        <div className="text-sm font-bold text-white">Maximized LTV</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  </div>
                </div>

              </div>
            </div>
          </AnimateInView>

          {/* Card 2: Expert Strategy */}
          <AnimateInView delay={0.1} className="min-h-[300px] rounded-[2.5rem] bg-gradient-to-br from-slate-200 to-pastel-lemon/20 border border-slate-300 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
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
          <AnimateInView delay={0.2} className="min-h-[300px] rounded-[2.5rem] bg-gradient-to-br from-slate-200 to-pastel-ice/20 border border-slate-300 p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
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