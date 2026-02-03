import React from 'react';
import { Check, X, AlertCircle } from 'lucide-react';
import { AnimateInView } from '../ui/AnimateInView';

export const Comparison: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pastel-mauve/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <AnimateInView className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
                        Stop settling for <span className="line-through decoration-slate-300 decoration-4">average.</span>
                    </h2>
                    <p className="text-slate-500">The smart alternative to bloated agencies.</p>
                </AnimateInView>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-center">
                    {/* VS Badge */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center font-black text-slate-900 shadow-xl shadow-slate-200/50 border-4 border-slate-50 relative">
                            <span className="relative z-10 text-lg">VS</span>
                            <div className="absolute inset-0 bg-white/50 animate-ping rounded-full opacity-20 duration-1000"></div>
                        </div>
                    </div>

                    {/* Traditional Agency - The "Old Way" */}
                    <AnimateInView className="group relative">
                        <div className="absolute inset-0 bg-slate-200/50 rounded-[2.5rem] transform translate-y-4 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="relative bg-slate-50/80 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-200 transition-all duration-500 group-hover:scale-[0.98] group-hover:bg-slate-100/80">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-4 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <div className="p-3 bg-slate-200 rounded-2xl">
                                    <AlertCircle size={24} className="text-slate-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-600 font-serif">Traditional Agency</h3>
                            </div>

                            <p className="text-slate-400 mb-8 pl-1">The old, slow, and expensive way.</p>

                            {/* List */}
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 text-slate-500 group-hover:text-slate-600 transition-colors">
                                    <X className="text-slate-300 min-w-[20px] mt-1 group-hover:text-red-400 transition-colors" />
                                    <span>High Monthly Retainers (₹50k+)</span>
                                </li>
                                <li className="flex items-start gap-4 text-slate-500 group-hover:text-slate-600 transition-colors">
                                    <X className="text-slate-300 min-w-[20px] mt-1 group-hover:text-red-400 transition-colors" />
                                    <span>Locked-in 6 Month Contracts</span>
                                </li>
                                <li className="flex items-start gap-4 text-slate-500 group-hover:text-slate-600 transition-colors">
                                    <X className="text-slate-300 min-w-[20px] mt-1 group-hover:text-red-400 transition-colors" />
                                    <span>Slow Creative Turnaround (Weeks)</span>
                                </li>
                                <li className="flex items-start gap-4 text-slate-500 group-hover:text-slate-600 transition-colors">
                                    <X className="text-slate-300 min-w-[20px] mt-1 group-hover:text-red-400 transition-colors" />
                                    <span>Junior Account Managers</span>
                                </li>
                            </ul>
                        </div>
                    </AnimateInView>

                    {/* Almost Zero - The "New Way" */}
                    <AnimateInView delay={0.2} className="group relative">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-pastel-mauve/30 to-pastel-ice/30 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 -z-10"></div>

                        <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-pastel-mauve/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-pastel-mauve/20 overflow-hidden">
                            {/* Decorative Gradient Blob */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pastel-lemon/20 via-pastel-rose/10 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Header */}
                            <div className="flex items-center gap-4 mb-4 relative z-10">
                                <div className="p-3 bg-slate-900 rounded-2xl shadow-lg shadow-slate-900/10 group-hover:rotate-3 transition-transform duration-500">
                                    <Check size={24} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 font-serif">Almost Zero</h3>
                            </div>

                            <p className="text-slate-500 mb-8 pl-1 font-medium">The modern, fast, and flexible way.</p>

                            {/* List */}
                            <ul className="space-y-5 relative z-10">
                                <li className="flex items-start gap-4">
                                    <div className="min-w-[24px] h-[24px] rounded-full bg-green-50 flex items-center justify-center text-green-600 mt-0.5 group-hover:scale-110 transition-transform duration-300 delay-75">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="font-semibold text-slate-900">Pay-as-you-go (Starts ₹33/day)</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="min-w-[24px] h-[24px] rounded-full bg-green-50 flex items-center justify-center text-green-600 mt-0.5 group-hover:scale-110 transition-transform duration-300 delay-100">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="font-semibold text-slate-900">Cancel Anytime</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="min-w-[24px] h-[24px] rounded-full bg-green-50 flex items-center justify-center text-green-600 mt-0.5 group-hover:scale-110 transition-transform duration-300 delay-150">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="font-semibold text-slate-900">Instant AI Creative Gen</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="min-w-[24px] h-[24px] rounded-full bg-green-50 flex items-center justify-center text-green-600 mt-0.5 group-hover:scale-110 transition-transform duration-300 delay-200">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="font-semibold text-slate-900">Founder-led Strategy</span>
                                </li>
                            </ul>
                        </div>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
};