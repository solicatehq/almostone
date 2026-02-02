import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const FloatingCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button after scrolling down a bit (e.g., past the hero section)
    // Or maybe always show it? User said "exact button... at the place of thumb".
    // Usually floating CTAs appear after scroll. But let's make it always visible or after a small delay/scroll.
    // Let's implement scroll reveal to avoid cluttering the initial hero view if the hero already has the button.
    // Actually, the user said "exact button in bottom right corner". 
    // If the hero already has "Start Scaling" (which is effectively the CTA), maybe we don't need it immediately.
    // However, often these are always present. Let's make it appear after 100px scroll to be safe/cleaner?
    // Let's check `Hero.tsx`. It has "Start Scaling" and "See the Strategy".
    // "Onboard Now" in Navbar is the one they want copied.
    // I'll make it appear after a short scroll threshold (e.g., 200px) so it doesn't overlap/compete with the main visual immediately, 
    // or just always have it if they want it "at the place of thumb".
    // Let's go with a slight scroll threshold for better UX, fading it in.

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
                >
                    <button className="group flex items-center gap-1.5 bg-rainbow-gradient text-slate-900 pl-5 pr-4 py-3 rounded-full text-lg font-serif italic font-bold shadow-lg shadow-pastel-mauve/40 hover:shadow-xl hover:shadow-pastel-mauve/50 hover:scale-105 transition-all active:scale-95">
                        Onboard
                        <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
