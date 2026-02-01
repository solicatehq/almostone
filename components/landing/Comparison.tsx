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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* VS Badge */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full items-center justify-center font-black text-slate-900 shadow-xl z-20 border-4 border-slate-50">
                VS
            </div>

            {/* Old School Agency */}
            <AnimateInView className="bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-200 text-slate-400 grayscale">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-slate-200 rounded-xl">
                        <AlertCircle size={24} className="text-slate-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-500">Traditional Agency</h3>
                </div>
                
                <ul className="space-y-6">
                    <li className="flex items-center gap-4">
                        <X className="text-red-300 min-w-[20px]" />
                        <span>High Monthly Retainers (₹50k+)</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <X className="text-red-300 min-w-[20px]" />
                        <span>Locked-in 6 Month Contracts</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <X className="text-red-300 min-w-[20px]" />
                        <span>Slow Creative Turnaround (Weeks)</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <X className="text-red-300 min-w-[20px]" />
                        <span>Junior Account Managers</span>
                    </li>
                </ul>
            </AnimateInView>

            {/* Almost Zero */}
            <AnimateInView delay={0.2} className="bg-white p-8 md:p-12 rounded-[2.5rem] border-2 border-slate-900 shadow-xl shadow-pastel-mauve/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pastel-lemon via-pastel-rose to-pastel-ice opacity-30 blur-2xl rounded-bl-full"></div>
                
                <div className="flex items-center gap-3 mb-8 relative z-10">
                    <div className="p-3 bg-slate-900 rounded-xl">
                        <Check size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Almost Zero</h3>
                </div>

                <ul className="space-y-6 relative z-10">
                    <li className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-pastel-mint/30 flex items-center justify-center text-green-700">
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="font-medium text-slate-800">Pay-as-you-go (Starts ₹33/day)</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-pastel-mint/30 flex items-center justify-center text-green-700">
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="font-medium text-slate-800">Cancel Anytime</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-pastel-mint/30 flex items-center justify-center text-green-700">
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="font-medium text-slate-800">Instant AI Creative Gen</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-pastel-mint/30 flex items-center justify-center text-green-700">
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="font-medium text-slate-800">Founder-led Strategy</span>
                    </li>
                </ul>
            </AnimateInView>
        </div>
      </div>
    </section>
  );
};