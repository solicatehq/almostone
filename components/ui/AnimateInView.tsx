import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimateInViewProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimateInView: React.FC<AnimateInViewProps> = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};