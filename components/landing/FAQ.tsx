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
        a: "On the 'Scale' plan, yes. On the 'Growth' plan (₹33/day), you get access to our expert strategy team via weekly group calls and priority email support."
    },
    {
        q: "Is there a minimum contract period?",
        a: "Almost Zero means almost zero risk. We operate on a monthly subscription model. You can cancel anytime with just one click from your dashboard."
    },
    {
        q: "Can you handle ad spend over ₹1 Crore?",
        a: "Absolutely. Our team has managed over ₹120 Crores in ad spend. We have specialized infrastructure and agency-level partnerships for high-volume accounts."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-4 bg-slate-50">
            <div className="max-w-3xl mx-auto">
                <AnimateInView className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-slate-900">Common Questions</h2>
                </AnimateInView>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <AnimateInView key={i} delay={i * 0.1}>
                            <div 
                                className={`bg-white rounded-2xl overflow-hidden border transition-all cursor-pointer ${openIndex === i ? 'border-pastel-mauve shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <div className="p-6 flex justify-between items-center gap-4">
                                    <h3 className="font-bold text-slate-800 text-lg">{faq.q}</h3>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-pastel-mauve text-white' : 'bg-slate-100 text-slate-500'}`}>
                                        {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
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
                                            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
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