import React from 'react';
import { AnimateInView } from '../ui/AnimateInView';

const testimonials = [
    {
        quote: "We were burning cash on Facebook ads. Almost Zero fixed our creative strategy and ROAS jumped to 4x in 3 weeks.",
        author: "Priya S.",
        role: "Founder, D2C Beauty",
        bg: "bg-pastel-ice/20",
        border: "border-pastel-ice/50"
    },
    {
        quote: "It feels like having a CMO in your pocket. The 'Shark Tank' expertise really shows in their growth hacks.",
        author: "Rahul M.",
        role: "CEO, Tech Startup",
        bg: "bg-pastel-orchid/20",
        border: "border-pastel-orchid/50"
    },
    {
        quote: "The AI creative generator is a game changer. We produce 10x more ad variations now for a fraction of the cost.",
        author: "Sarah L.",
        role: "Marketing Head",
        bg: "bg-pastel-lemon/20",
        border: "border-pastel-lemon/50"
    }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">Trusted by 500+ Founders</h2>
          <p className="text-slate-500">Join the fastest growing brands in India.</p>
        </AnimateInView>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
                <AnimateInView key={i} delay={i * 0.1} className={`p-8 rounded-[2rem] ${t.bg} border ${t.border} flex flex-col justify-between h-full hover:scale-[1.02] transition-transform`}>
                    <p className="text-lg text-slate-700 font-medium leading-relaxed mb-6">"{t.quote}"</p>
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-sm font-bold text-slate-700`}>
                            {t.author[0]}
                        </div>
                        <div>
                            <div className="text-slate-900 font-bold text-sm">{t.author}</div>
                            <div className="text-slate-500 text-xs uppercase tracking-wide">{t.role}</div>
                        </div>
                    </div>
                </AnimateInView>
            ))}
        </div>
      </div>
    </section>
  );
};