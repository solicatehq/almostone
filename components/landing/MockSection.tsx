import React from 'react';
import { TrendingUp } from 'lucide-react';
import { AnimateInView } from '../ui/AnimateInView';

export const MockSection: React.FC = () => {
    return (
        <section className="relative px-4 pt-10 pb-20 md:pb-32 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center z-10">

                {/* Ad Performance Visual */}
                <AnimateInView delay={0.6} className="w-full max-w-5xl relative">
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
                            <div className="mx-auto text-[10px] text-slate-400 font-mono bg-slate-50 px-3 py-1 rounded-full">almostone.io/dashboard</div>
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
