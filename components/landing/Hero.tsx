import React from 'react';
import { ArrowRight, TrendingUp, BarChart3 } from 'lucide-react';
import { AnimateInView } from '../ui/AnimateInView';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-soft-glow -z-10 pointer-events-none opacity-80 blur-3xl" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center z-10">
        
        <AnimateInView delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-white/60 border border-pastel-mauve/30 px-3 py-1 rounded-full text-xs font-semibold text-slate-600 mb-6 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-pastel-mint"></span>
                Trusted by 500+ Founders
            </div>
        </AnimateInView>

        <AnimateInView delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Get ₹120 Cr+ Worth of <br />
            Marketing Experience in just <span className="bg-clip-text text-transparent bg-rainbow-gradient italic px-2">₹33/day.</span>
          </h1>
        </AnimateInView>

        <AnimateInView delay={0.3}>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bridge the gap between DIY tools and expensive agencies. Access expert strategy, performance marketing, and AI-driven content creation instantly.
          </p>
        </AnimateInView>

        <AnimateInView delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <button className="relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-all shadow-xl shadow-pastel-mauve/20 group">
            <div className="absolute inset-0 bg-gradient-to-r from-pastel-mauve/20 to-pastel-frosted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <TrendingUp size={20} className="relative z-10 text-pastel-lemon group-hover:rotate-12 group-hover:scale-110 transition-transform" />
            <span className="relative z-10">Start Scaling</span>
          </button>
          <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all">
            See the Strategy
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </AnimateInView>

        {/* Ad Performance Visual */}
        <AnimateInView delay={0.6} className="mt-20 w-full max-w-5xl relative">
            {/* Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-pastel-rose rounded-full opacity-60 blur-2xl animate-pulse"></div>
            <div className="absolute top-20 -right-20 w-40 h-40 bg-pastel-ice rounded-full opacity-60 blur-3xl"></div>

            <div className="animate-float relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-2xl shadow-pastel-mauve/20 p-2 md:p-4 ring-1 ring-slate-900/5">
                {/* Simulated Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100/50 mb-4">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-pastel-rose/80"></div>
                        <div className="w-3 h-3 rounded-full bg-pastel-lemon/80"></div>
                        <div className="w-3 h-3 rounded-full bg-pastel-mint/80"></div>
                    </div>
                    <div className="mx-auto text-[10px] text-slate-400 font-mono bg-slate-50 px-3 py-1 rounded-full">almostzero.io/dashboard</div>
                </div>

                {/* Dashboard Content */}
                <div className="grid grid-cols-12 gap-4 h-[400px] md:h-[500px] overflow-hidden rounded-xl bg-slate-50/50 p-4">
                     {/* Sidebar */}
                     <div className="hidden md:flex col-span-2 flex-col gap-4">
                        <div className="h-8 w-24 bg-slate-200/50 rounded-lg"></div>
                        <div className="h-4 w-16 bg-slate-200/50 rounded-lg mt-4"></div>
                        <div className="h-4 w-20 bg-slate-200/50 rounded-lg"></div>
                        <div className="h-4 w-12 bg-slate-200/50 rounded-lg"></div>
                        <div className="mt-auto h-12 w-12 bg-pastel-ice/30 rounded-full self-center"></div>
                     </div>
                     
                     {/* Main Area */}
                     <div className="col-span-12 md:col-span-10 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-8">
                             <div>
                                <h3 className="font-serif text-2xl text-slate-800">Campaign Performance</h3>
                                <p className="text-sm text-slate-400">Live Real-time Data</p>
                             </div>
                             <div className="flex items-center gap-2 bg-pastel-mint/20 text-green-700 px-3 py-1 rounded-full text-sm font-bold border border-pastel-mint/50">
                                <TrendingUp size={14} />
                                ROAS 4.5x
                             </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Total Spend</p>
                                <p className="text-xl font-bold text-slate-900">₹12.4L</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Conversions</p>
                                <p className="text-xl font-bold text-slate-900">842</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <p className="text-xs text-slate-400 uppercase tracking-wide">CPC</p>
                                <p className="text-xl font-bold text-slate-900">₹14.20</p>
                            </div>
                        </div>

                        {/* Graph Visual Mock */}
                        <div className="flex-1 bg-gradient-to-t from-slate-50 to-white rounded-xl relative border-b border-l border-slate-100 flex items-end px-4 pb-4 gap-2">
                            {[40, 60, 45, 70, 50, 80, 65, 90, 75, 100].map((h, i) => (
                                <div key={i} className="flex-1 bg-pastel-frosted rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                            ))}
                            {/* Line overlay */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
                                <path d="M0 100 Q 50 50, 100 0" stroke="url(#gradient)" strokeWidth="4" fill="none" className="opacity-0" /> 
                            </svg>
                        </div>

                     </div>
                </div>
            </div>
        </AnimateInView>
      </div>
    </section>
  );
};