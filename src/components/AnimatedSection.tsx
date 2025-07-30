import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 60 };
      case 'down':
        return { opacity: 0, y: -60 };
      case 'left':
        return { opacity: 0, x: -60 };
      case 'right':
        return { opacity: 0, x: 60 };
      case 'scale':
        return { opacity: 0, scale: 0.8 };
      case 'rotate':
        return { opacity: 0, rotate: -10, scale: 0.9 };
      default:
        return { opacity: 0, y: 60 };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'rotate':
        return { opacity: 1, rotate: 0, scale: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={isInView ? getAnimateState() : getInitialState()}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;