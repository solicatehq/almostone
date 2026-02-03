import React from 'react';
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const testimonialsRaw = [
  {
    quote: "We were burning cash on Facebook ads. Almost One fixed our creative strategy and ROAS jumped to 4x in 3 weeks.",
    author: "Priya S.",
    role: "Founder, D2C Beauty",
    bg: "bg-pastel-ice/20",
    border: "border-pastel-ice/50"
  },
  {
    quote: "It feels like having a CMO in your pocket. The 'Shark Tank' expertise really shows in their growth hacks.",
    author: "Rahul M.",
    role: "CEO, Tech Startup",
    bg: "bg-emerald-50/50",
    border: "border-emerald-200"
  },
  {
    quote: "The AI creative generator is a game changer. We produce 10x more ad variations now for a fraction of the cost.",
    author: "Sarah L.",
    role: "Marketing Head",
    bg: "bg-yellow-50/50",
    border: "border-yellow-200"
  },
  {
    quote: "Finally an agency that understands speed. We launched 5 new product lines in a month.",
    author: "Arjun K.",
    role: "Co-Founder, SaaS",
    bg: "bg-pastel-orchid/20",
    border: "border-pastel-orchid/50"
  }
];

// Duplicate to have enough items for scrolling
const testimonials = [
  ...testimonialsRaw,
  ...testimonialsRaw,
  ...testimonialsRaw,
  ...testimonialsRaw
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className={cn(
      "flex w-[450px] flex-col justify-center gap-5 rounded-3xl p-6 transition-transform hover:scale-[1.02] border mx-4 select-none whitespace-normal h-full",
      testimonial.bg,
      testimonial.border
    )}>
      <p className="text-lg text-slate-700 font-medium leading-snug">"{testimonial.quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-sm font-bold text-slate-700 shrink-0">
          {testimonial.author[0]}
        </div>
        <div>
          <div className="text-slate-900 font-bold text-sm">{testimonial.author}</div>
          <div className="text-slate-500 text-xs uppercase tracking-wide">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

const MarqueeRow = ({
  items,
  direction = "left",
  speed = 40
}: {
  items: typeof testimonials,
  direction?: "left" | "right",
  speed?: number
}) => {
  return (
    <div className="relative flex w-full overflow-hidden py-4">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="flex">
          {items.map((item, idx) => (
            <TestimonialCard key={`orig-${idx}`} testimonial={item} />
          ))}
        </div>
        <div className="flex">
          {items.map((item, idx) => (
            <TestimonialCard key={`dup-${idx}`} testimonial={item} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export const Testimonials: React.FC = () => {
  const firstRow = testimonials.slice(0, 6);
  const secondRow = testimonials.slice(6, 12);

  return (
    <section className="py-24 overflow-hidden relative z-10">
      <div className="max-w-6xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl font-serif text-slate-900 mb-4">Trusted by 500+ Founders</h2>
        <p className="text-slate-500">Join the fastest growing brands in India.</p>
      </div>

      <div className="flex flex-col gap-6 relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <MarqueeRow items={firstRow} direction="left" speed={60} />
        <MarqueeRow items={secondRow} direction="right" speed={60} />
      </div>
    </section>
  );
};