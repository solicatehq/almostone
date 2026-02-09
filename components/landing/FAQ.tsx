import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimateInView } from '../ui/AnimateInView';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: "How does the AI Ad Creative Generator work?",
        a: "Our engine analyzes millions of high-performing ads across Meta and Google. It then combines your brand assets with proven design frameworks to generate conversion-focused creatives in seconds."
    },
    {
        q: "Do I get a dedicated account manager?",
        a: "On the 'Enterprise' plan, yes. On the 'Growth' plan (₹33/day), you get access to our expert strategy team via weekly group calls and priority email support."
    },
    {
        q: "Is there a minimum contract period?",
        a: "Almost One means almost one risk. We operate on a monthly subscription model. You can cancel anytime with just one click from your dashboard."
    },
    {
        q: "Can you handle ad spend over ₹1 Crore?",
        a: "Absolutely. Our team has managed over ₹120 Crores in ad spend. We have specialized infrastructure and agency-level partnerships for high-volume accounts."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-4 bg-[#fafafa]">
            <div className="max-w-3xl mx-auto">
                <AnimateInView className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-slate-900">Common Questions</h2>
                </AnimateInView>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <AnimateInView key={i} delay={i * 0.1}>
                            <div
                                className={`transition-all cursor-pointer border-b ${openIndex === i ? 'border-slate-800' : 'border-slate-200 hover:border-slate-300'}`}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <div className="py-5 flex justify-between items-center gap-4">
                                    <h3 className="font-medium text-slate-800 text-lg">{faq.q}</h3>
                                    <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                                        <Plus size={20} className={`text-slate-400 ${openIndex === i ? 'opacity-0' : 'opacity-100'} absolute transition-opacity`} />
                                        <Minus size={20} className={`text-slate-800 ${openIndex === i ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-6 text-slate-600 leading-relaxed max-w-2xl">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
};
