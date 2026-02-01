import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Loader2, Image as ImageIcon } from 'lucide-react';
import { AnimateInView } from '../ui/AnimateInView';

export const InteractiveDemo: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setShowResult(false);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <section id="demo" className="py-24 px-4 bg-gradient-to-b from-white to-pastel-mauve/10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Side */}
        <AnimateInView className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-serif text-slate-900 mb-6">
            Generate winning <br/><span className="text-pastel-frosted italic">creatives instantly.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Stop waiting weeks for design teams. Input your product details and let our AI engine build high-ROAS ad creatives in seconds.
          </p>
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-400 font-mono">
            <div className="w-4 h-4 rounded-full bg-pastel-mint animate-pulse"></div>
            Try the demo
          </div>
        </AnimateInView>

        {/* Interaction Side */}
        <AnimateInView delay={0.2} className="flex-1 w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-xl shadow-pastel-mauve/20 border border-white/50 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pastel-lemon via-pastel-rose to-pastel-ice rounded-t-3xl"></div>
            
            <div className="flex flex-col gap-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Product Name</label>
                    <div className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800">
                        Neon Running Shoes
                    </div>
                </div>
                
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Target Audience</label>
                    <div className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800">
                        Marathon Runners, Gen Z
                    </div>
                </div>

                <button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="mt-2 w-full bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-80"
                >
                    {isGenerating ? <Loader2 className="animate-spin" size={18} /> : <Wand2 size={18} className="text-pastel-lemon" />}
                    {isGenerating ? "Designing..." : "Generate Creative"}
                </button>
            </div>

            {/* Result Area */}
            <div className="mt-6 min-h-[200px] relative rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center bg-slate-50 overflow-hidden">
                <AnimatePresence mode="wait">
                    {!showResult && !isGenerating && (
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                            className="text-slate-400 flex flex-col items-center gap-2"
                        >
                            <ImageIcon size={32} />
                            <span className="text-sm">Preview appears here</span>
                        </motion.div>
                    )}

                    {isGenerating && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-10"
                        >
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-full border-4 border-pastel-mauve border-t-transparent animate-spin"></div>
                                <span className="text-xs font-bold text-pastel-mauve animate-pulse">AI is thinking...</span>
                            </div>
                        </motion.div>
                    )}

                    {showResult && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="w-full h-full relative group"
                        >
                            {/* Generated Ad Mock */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pastel-frosted to-pastel-orchid opacity-80"></div>
                            <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                                <span className="bg-black/20 backdrop-blur-md self-start px-2 py-0.5 rounded text-[10px] mb-auto">Sponsored</span>
                                <h3 className="font-serif text-2xl font-bold mb-1">Run on Air.</h3>
                                <p className="text-xs opacity-90 mb-3">Experience the new Neon Boost technology.</p>
                                <button className="bg-white text-slate-900 py-1.5 rounded-lg text-xs font-bold shadow-lg">Shop Now</button>
                            </div>
                            
                            {/* Particles */}
                            <motion.div 
                                initial={{ scale: 0 }} 
                                animate={{ scale: 1.5, opacity: 0 }} 
                                transition={{ duration: 0.6 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/30 rounded-full"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

          </div>
        </AnimateInView>

      </div>
    </section>
  );
};