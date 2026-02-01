import React from 'react';
import { ShoppingBag, BarChart3, Mail, Globe, Database, Zap } from 'lucide-react';
import { AnimateInView } from '../ui/AnimateInView';

const tools = [
    { name: "Shopify", icon: <ShoppingBag />, desc: "Seamless store integration" },
    { name: "Meta Ads", icon: <Globe />, desc: "Direct API connection" },
    { name: "GA4", icon: <BarChart3 />, desc: "Real-time analytics" },
    { name: "Klaviyo", icon: <Mail />, desc: "Email flow automation" },
    { name: "BigQuery", icon: <Database />, desc: "Data warehousing" },
    { name: "Zapier", icon: <Zap />, desc: "Workflow automation" }
];

export const TechStack: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-950 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
            <AnimateInView className="mb-16 md:flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-serif mb-4">We play nice with your stack.</h2>
                    <p className="text-slate-400 max-w-lg">
                        Plug Almost Zero into your existing tools. No complex setups, just one-click integrations.
                    </p>
                </div>
                <button className="hidden md:block px-6 py-3 border border-slate-700 rounded-full text-sm font-medium hover:bg-white hover:text-slate-950 transition-colors">
                    View all 50+ integrations
                </button>
            </AnimateInView>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tools.map((tool, i) => (
                    <AnimateInView key={i} delay={i * 0.1} className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm flex flex-col gap-4">
                        <div className="w-12 h-12 bg-slate-900 rounded-xl border border-white/10 flex items-center justify-center text-pastel-frosted group-hover:scale-110 transition-transform">
                            {tool.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
                            <p className="text-xs text-slate-500">{tool.desc}</p>
                        </div>
                    </AnimateInView>
                ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
                <button className="px-6 py-3 border border-slate-700 rounded-full text-sm font-medium hover:bg-white hover:text-slate-950 transition-colors">
                    View all integrations
                </button>
            </div>
        </div>
    </section>
  );
};