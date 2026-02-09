import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimateInView } from '../ui/AnimateInView';

const resources = [
    {
        category: "Strategy",
        title: "Why Simple CTAs Win Every Time",
        readTime: "5 min read",
        bg: "bg-pastel-lemon/20",
        hover: "hover:bg-pastel-lemon/30"
    },
    {
        category: "Growth",
        title: "Scaling from 0 to 100Cr: The Blueprint",
        readTime: "8 min read",
        bg: "bg-pastel-ice/20",
        hover: "hover:bg-pastel-ice/30"
    },
    {
        category: "AI Tools",
        title: "Top 5 Chatbot Funnels for 2024",
        readTime: "4 min read",
        bg: "bg-pastel-rose/20",
        hover: "hover:bg-pastel-rose/30"
    }
];

export const Resources: React.FC = () => {
    return (
        <section id="resources" className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <AnimateInView>
                        <h2 className="text-4xl font-serif text-slate-900 mb-2">Knowledge Base</h2>
                        <p className="text-slate-500">Insights from the marketing frontline.</p>
                    </AnimateInView>
                    <a href="#" className="hidden md:flex items-center gap-2 text-slate-900 font-medium hover:text-pastel-mauve transition-colors">
                        View all articles <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((res, i) => (
                        <AnimateInView key={i} delay={i * 0.1} className={`group cursor-pointer rounded-[2rem] p-8 ${res.bg} ${res.hover} transition-colors border border-transparent hover:border-slate-100`}>
                            <div className="flex justify-between items-start mb-8">
                                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wide">{res.category}</span>
                                <span className="text-slate-400 text-xs">{res.readTime}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:underline decoration-2 decoration-pastel-mauve underline-offset-4">{res.title}</h3>
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-600 mt-auto">
                                Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </AnimateInView>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-slate-900 font-medium">
                        View all articles <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};