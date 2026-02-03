import React from 'react';
import { UserPlus, Search, Rocket, TrendingUp } from 'lucide-react';
import { AnimateInView } from '../ui/AnimateInView';

const steps = [
    {
        icon: <UserPlus size={24} />,
        title: "Onboard",
        desc: "Connect your ad accounts and fill a 5-min brand questionnaire.",
        color: "bg-pastel-lemon"
    },
    {
        icon: <Search size={24} />,
        title: "Audit & Strategy",
        desc: "Our experts audit your past data and build a custom growth roadmap.",
        color: "bg-pastel-rose"
    },
    {
        icon: <Rocket size={24} />,
        title: "Launch",
        desc: "We deploy high-converting AI creatives and campaign structures.",
        color: "bg-pastel-ice"
    },
    {
        icon: <TrendingUp size={24} />,
        title: "Scale",
        desc: "Weekly optimization cycles to scale budget while maintaining ROAS.",
        color: "bg-pastel-mint"
    }
];

export const Process: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <AnimateInView className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
                        From onboarding to scaling <br />
                        <span className="text-slate-400">in just 7 days.</span>
                    </h2>
                </AnimateInView>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -z-10"></div>

                    {steps.map((step, i) => (
                        <AnimateInView key={i} delay={i * 0.2} className="relative flex flex-col items-center text-center">
                            <div className={`w-24 h-24 rounded-full ${step.color} border-4 border-white shadow-lg flex items-center justify-center text-slate-900 mb-6 relative z-10 transition-transform hover:scale-110`}>
                                {step.icon}
                                <div className="absolute -right-2 -top-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                                    {i + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed px-4">
                                {step.desc}
                            </p>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
};