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
                        Stop settling for <span className="line-through decoration-slate-300 decoration-4 bg-pastel-lemon text-slate-900 px-1">average.</span>
                    </h2>
                    <p className="text-slate-500">The smart alternative to bloated agencies.</p>
                </AnimateInView>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-stretch">
                    {/* VS Badge - Organic Integration */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 blur-2xl opacity-20 animate-pulse"></div>
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-[6px] border-slate-50 shadow-2xl relative z-10">
                                <span className="font-black text-2xl bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent italic pr-1">VS</span>
                            </div>
                        </div>
                    </div>

                    {/* Traditional Agency - The "Office Paperwork" Aesthetic */}
                    <AnimateInView className="group relative h-full">
                        <div className="relative h-full bg-[#F5F5F7] p-8 md:p-12 rounded-[2.5rem] border border-slate-200/60 overflow-hidden transition-all duration-500 hover:border-slate-300">
                            {/* Graph Paper Pattern Background */}
                            <div className="absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                                    backgroundSize: '20px 20px'
                                }}>
                            </div>

                            {/* "Stamped" Header */}
                            <div className="relative z-10 mb-10">
                                <div className="inline-flex items-center gap-3 border-2 border-slate-300/50 rounded-xl px-4 py-2 bg-slate-200/20 backdrop-blur-sm mb-6 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500">
                                    <AlertCircle size={20} className="text-slate-500" />
                                    <span className="font-bold text-slate-500 tracking-wide uppercase text-sm">Legacy Model</span>
                                </div>
                                <h3 className="text-3xl font-serif text-slate-400 mix-blend-multiply group-hover:text-slate-500 transition-colors">Traditional<br />Agency</h3>
                            </div>

                            {/* Red X List - Stamped feel */}
                            <ul className="space-y-6 relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                                {['High Monthly Retainers (₹50k+)', 'Locked-in 6 Month Contracts', 'Slow Creative Turnaround (Weeks)', 'Junior Account Managers'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <X className="text-red-300 min-w-[20px] mt-1" strokeWidth={2.5} />
                                        <span className="font-medium text-slate-500 line-through decoration-slate-300/50">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimateInView>

                    {/* Almost Zero - The "Magical/Premium" Aesthetic */}
                    <AnimateInView delay={0.2} className="group relative h-full">
                        <div className="relative h-full bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02]">

                            {/* Animated Mesh Gradient Background */}
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[spin_15s_linear_infinite]"
                                    style={{
                                        background: 'conic-gradient(from 0deg at 50% 50%, #FFB6C1 0deg, #E6E6FA 60deg, #98FF98 120deg, #87CEFA 180deg, #FFB6C1 360deg)',
                                        filter: 'blur(80px)'
                                    }}>
                                </div>
                            </div>

                            {/* Noise Texture Overlay for Premium Feel */}
                            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
                            </div>

                            {/* Large Watermark Typography */}
                            <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-white/5 leading-none select-none pointer-events-none overflow-hidden">
                                FAST
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Glowing Header Badge */}
                                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    <span className="font-semibold text-white/90 text-sm tracking-widest uppercase">The Future</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 leading-tight">
                                    Almost Zero
                                </h3>
                                <p className="text-white/60 mb-10 text-lg font-light">Creative freedom without the friction.</p>

                                <ul className="space-y-6">
                                    {[
                                        { text: 'Pay-as-you-go (Starts ₹33/day)', highlight: '₹33/day' },
                                        { text: 'Cancel Anytime', highlight: '' },
                                        { text: 'Instant AI Creative Gen', highlight: 'Instant' },
                                        { text: 'Founder-led Strategy', highlight: '' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 group/item">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-900/20 group-hover/item:scale-110 transition-transform duration-300">
                                                <Check size={16} className="text-white" strokeWidth={3} />
                                            </div>
                                            <span className="text-lg font-medium text-white/90">
                                                {item.text.split(item.highlight).map((part, index, array) => (
                                                    <React.Fragment key={index}>
                                                        {part}
                                                        {index < array.length - 1 && <span className="text-green-300 font-bold">{item.highlight}</span>}
                                                    </React.Fragment>
                                                ))}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
};