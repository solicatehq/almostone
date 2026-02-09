import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { AnimateInView } from '../ui/AnimateInView';

export const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24 px-4 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pastel-mauve/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <AnimateInView className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
                        Simple pricing, <span className="text-pastel-mauve italic">maximum ROI.</span>
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        No hidden retainers. No equity demands. Just transparent pricing.
                    </p>
                </AnimateInView>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Growth Plan - The "Beach White" aesthetic */}
                    <AnimateInView className="group relative h-full">
                        <div className="relative h-full bg-gradient-to-br from-[#FFFDF5] to-[#F5FAFF] p-8 md:p-12 rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-[0_20px_50px_rgba(234,179,8,0.1)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(234,179,8,0.15)]">

                            {/* Noise */}
                            <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-white border border-slate-200 mb-8 shadow-sm">
                                    <Sparkles size={12} className="text-amber-400" />
                                    <span className="font-semibold text-slate-700 text-sm tracking-widest uppercase">Most Popular</span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Growth</h3>
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-5xl font-serif font-bold text-slate-900">₹999</span>
                                    <span className="text-slate-500">/month</span>
                                </div>
                                <div className="text-xs text-green-600 font-medium mb-8">approx ₹33/day</div>

                                <p className="text-slate-500 mb-8 border-b border-slate-200 pb-8">The full marketing stack for scaling brands.</p>

                                <ul className="space-y-4 mb-8">
                                    {["Unlimited AI Creative Gen", "Weekly Strategy Calls", "Performance Dashboard", "Competitor Analysis"].map((feat, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-900/20 group-hover:scale-110 transition-transform duration-300">
                                                <Check size={14} className="text-white" strokeWidth={3} />
                                            </div>
                                            <span className="text-slate-700 font-medium">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl">
                                    Get Onboarded
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </AnimateInView>

                    {/* Enterprise Plan - Clean, Corporate but Stylized */}
                    <AnimateInView delay={0.2} className="group relative h-full">
                        <div className="relative h-full bg-[#F5F5F7] p-8 md:p-12 rounded-[2.5rem] border border-slate-200/60 overflow-hidden transition-all duration-500 hover:border-slate-300 hover:shadow-xl">
                            {/* Subtle Grid Background */}
                            <div className="absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                                    backgroundSize: '20px 20px'
                                }}>
                            </div>

                            <div className="relative z-10">
                                <div className="h-[34px] mb-8"></div> {/* Spacer to align with badge */}

                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-5xl font-serif font-bold text-slate-900">Custom</span>
                                </div>
                                <div className="text-xs text-transparent font-medium mb-8 select-none">Pricing</div>


                                <p className="text-slate-500 mb-8 border-b border-slate-200 pb-8">Dedicated agency team for high volume.</p>

                                <ul className="space-y-4 mb-8">
                                    {["Dedicated Account Manager", "Custom Video Production", "Multi-channel Attribution", "Slack Connect Channel"].map((feat, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm">
                                            <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-slate-600">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 rounded-xl font-bold bg-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
};
