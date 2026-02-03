import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { AnimateInView } from '../ui/AnimateInView';

// Two-card layout: Growth (left) and Enterprise contact (right)
const plans = [
    {
        name: "Growth",
        price: "₹999",
        period: "/month",
        priceNote: "approx ₹33/day",
        desc: "The full marketing stack for scaling brands.",
        features: [
            "Unlimited AI Creative Gen",
            "Weekly Strategy Calls",
            "Performance Dashboard",
            "Competitor Analysis"
        ],
        cta: "Get Onboarded",
        popular: true,
        bg: "bg-slate-900",
        border: "border-slate-900",
        text: "text-white"
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "pricing",
        desc: "Dedicated agency team for high volume.",
        features: [
            "Dedicated Account Manager",
            "Custom Video Production",
            "Multi-channel Attribution",
            "Slack Connect Channel"
        ],
        cta: "Contact Sales",
        popular: false,
        bg: "bg-white",
        border: "border-slate-200"
    }
];

export const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24 px-4 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                <AnimateInView className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
                        Simple pricing, <span className="text-pastel-mauve italic">maximum ROI.</span>
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        No hidden retainers. No equity demands. Just transparent pricing.
                    </p>
                </AnimateInView>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {plans.map((plan, i) => (
                        <AnimateInView key={i} delay={i * 0.1} className={`relative rounded-3xl p-8 border ${plan.border} ${plan.bg} ${plan.popular ? 'shadow-2xl shadow-pastel-mauve/20 scale-105 z-10' : 'shadow-sm'}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pastel-mauve to-pastel-ice text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                                    <Sparkles size={12} /> Most Popular
                                </div>
                            )}
                            
                            <h3 className={`text-xl font-bold mb-2 ${plan.text || 'text-slate-900'}`}>{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className={`text-4xl font-serif font-bold ${plan.text || 'text-slate-900'}`}>{plan.price}</span>
                                {plan.period && <span className={`text-sm ${plan.text ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>}
                            </div>
                            {plan.priceNote && <div className="text-xs text-pastel-mint font-medium mb-6">{plan.priceNote}</div>}
                            {!plan.priceNote && <div className="h-4 mb-6"></div>}

                            <p className={`text-sm mb-8 ${plan.text ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm">
                                        <div className={`mt-0.5 min-w-[16px] h-4 rounded-full flex items-center justify-center ${plan.popular ? 'bg-pastel-mint text-slate-900' : 'bg-slate-100 text-slate-600'}`}>
                                            <Check size={10} strokeWidth={3} />
                                        </div>
                                        <span className={plan.text ? 'text-slate-300' : 'text-slate-600'}>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`group w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                                plan.popular 
                                ? 'bg-white text-slate-900 hover:bg-pastel-lemon hover:scale-105 shadow-lg shadow-black/5' 
                                : 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-[1.02]'
                            }`}>
                                {plan.cta}
                                {plan.popular && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
};
