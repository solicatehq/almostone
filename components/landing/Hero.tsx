import React from 'react';
import { ArrowRight, TrendingUp, Target, PieChart, Tag, Rocket } from 'lucide-react';
import { AnimateInView } from '../ui/AnimateInView';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden bg-white">
      {/* Background Gradients/Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pastel-lemon/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pastel-mauve/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center z-10 relative">

        {/* Top Pill Badge */}
        <AnimateInView delay={0.1}>
          <div className="inline-flex items-center gap-2 bg-white/60 border border-pastel-mauve/30 px-3 py-1 rounded-full text-xs font-semibold text-slate-600 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-pastel-mint"></span>
            Trusted by 500+ Founders
          </div>
        </AnimateInView>

        {/* Headline - Trimmed & Punched Up */}
        <AnimateInView delay={0.2} className="relative z-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-[1.1] mb-6 tracking-tight">
            ₹120 Cr+ Marketing <br />
            Experience. Just <span className="bg-clip-text text-transparent bg-rainbow-gradient italic px-2">₹33/day.</span>
          </h1>
        </AnimateInView>

        {/* Description - Trimmed for impact */}
        <AnimateInView delay={0.3} className="relative z-20">
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Expert strategy, performance marketing, and AI content. <br className="hidden md:block" />
            Bridge the gap between DIY tools and expensive agencies.
          </p>
        </AnimateInView>

        {/* Buttons */}
        <AnimateInView delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center relative z-20">
          <button className="relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-all shadow-xl shadow-pastel-mauve/20 group">
            <div className="absolute inset-0 bg-gradient-to-r from-pastel-mauve/20 to-pastel-frosted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Rocket size={20} className="relative z-10 text-pastel-lemon group-hover:rotate-12 group-hover:scale-110 transition-transform" />
            <span className="relative z-10">Start Scaling</span>
          </button>

          <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all">
            See the Strategy
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </AnimateInView>

      </div>

      {/* Floating Cards - Marketing Specific Stats */}

      {/* Top Left: ROAS */}
      <div className="absolute top-[15%] sm:top-[22%] left-[2%] sm:left-[10%] xl:left-[15%] 2xl:left-[22%] scale-[0.55] sm:scale-75 md:scale-90 xl:scale-100 origin-center z-0" style={{ animationDelay: '0s' }}>
        <div className="animate-float">
          <div className="bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex items-center gap-4 transform rotate-[-3deg]">
            <div className="p-2.5 bg-pastel-mint/30 rounded-lg text-emerald-700">
              <TrendingUp size={24} />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-slate-900">4.5x</p>
              <p className="text-sm text-slate-500 font-medium">Avg. ROAS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Right: Leads Generated */}
      <div className="absolute top-[15%] sm:top-[25%] right-[2%] sm:right-[10%] xl:right-[15%] 2xl:right-[22%] scale-[0.55] sm:scale-75 md:scale-90 xl:scale-100 origin-center z-0" style={{ animationDelay: '1.5s' }}>
        <div className="animate-float">
          <div className="bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex items-center gap-4 transform rotate-[2deg]">
            <div className="text-left">
              <p className="text-2xl font-bold text-slate-900">50k+</p>
              <p className="text-sm text-slate-500 font-medium">Leads Generated</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-pastel-mauve/30 flex items-center justify-center text-purple-700">
              <Target size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Middle Left: Ad Spend */}
      <div className="absolute bottom-[8%] sm:bottom-[15%] left-[2%] sm:left-[10%] xl:left-[15%] 2xl:left-[22%] scale-[0.55] sm:scale-75 md:scale-90 xl:scale-100 origin-center z-0" style={{ animationDelay: '0.8s' }}>
        <div className="animate-float">
          <div className="bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex items-center gap-3 transform rotate-2">
            <div className="w-10 h-10 bg-pastel-ice/30 rounded-full flex items-center justify-center text-blue-600">
              <PieChart size={20} />
            </div>
            <div className="text-left pr-2">
              <p className="text-lg font-bold text-slate-900 leading-tight">₹50 Cr+</p>
              <p className="text-xs text-slate-500 font-medium leading-tight">Ad Spend<br />Managed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Right: CPA */}
      <div className="absolute bottom-[8%] sm:bottom-[15%] right-[2%] sm:right-[10%] xl:right-[15%] 2xl:right-[22%] scale-[0.55] sm:scale-75 md:scale-90 xl:scale-100 origin-center z-0" style={{ animationDelay: '2.2s' }}>
        <div className="animate-float">
          <div className="bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex items-center gap-3 transform -rotate-2">
            <div className="text-left pl-1">
              <p className="text-lg font-bold text-slate-900 leading-tight">₹12</p>
              <p className="text-xs text-slate-500 font-medium leading-tight">Avg. Cost<br />Per Lead</p>
            </div>
            <div className="w-10 h-10 bg-pastel-rose/30 rounded-full flex items-center justify-center text-rose-600">
              <Tag size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trusted Text */}
      <div className="absolute bottom-4 left-0 w-full text-center z-10">
        <p className="text-slate-500 text-sm">Trusted by leading companies worldwide</p>
      </div>
    </section>
  );
};