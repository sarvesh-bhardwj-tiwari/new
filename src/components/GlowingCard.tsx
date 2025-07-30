import React from 'react';
import { motion } from 'framer-motion';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: number;
}

const GlowingCard: React.FC<GlowingCardProps> = ({ 
  children, 
  className = "",
  glowColor = "cyan",
  hoverScale = 1.05
}) => {
  const glowColors = {
    cyan: "shadow-cyan-500/25 hover:shadow-cyan-500/40 border-cyan-500/30 hover:border-cyan-400/50",
    purple: "shadow-purple-500/25 hover:shadow-purple-500/40 border-purple-500/30 hover:border-purple-400/50",
    blue: "shadow-blue-500/25 hover:shadow-blue-500/40 border-blue-500/30 hover:border-blue-400/50",
    green: "shadow-green-500/25 hover:shadow-green-500/40 border-green-500/30 hover:border-green-400/50",
  };

  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale,
        boxShadow: `0 20px 40px ${glowColor === 'cyan' ? 'rgba(0, 255, 255, 0.4)' : 
                                   glowColor === 'purple' ? 'rgba(147, 51, 234, 0.4)' :
                                   glowColor === 'blue' ? 'rgba(59, 130, 246, 0.4)' :
                                   'rgba(34, 197, 94, 0.4)'}`
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative bg-black/40 backdrop-blur-xl border rounded-2xl p-6 
        transition-all duration-500 group cursor-pointer
        ${glowColors[glowColor as keyof typeof glowColors]}
        ${className}
      `}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
          glowColor === 'cyan' ? 'from-cyan-500/20 via-blue-500/20 to-purple-500/20' :
          glowColor === 'purple' ? 'from-purple-500/20 via-pink-500/20 to-red-500/20' :
          glowColor === 'blue' ? 'from-blue-500/20 via-cyan-500/20 to-teal-500/20' :
          'from-green-500/20 via-emerald-500/20 to-teal-500/20'
        } animate-pulse`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
        glowColor === 'cyan' ? 'bg-cyan-400' :
        glowColor === 'purple' ? 'bg-purple-400' :
        glowColor === 'blue' ? 'bg-blue-400' :
        'bg-green-400'
      } blur-xl`}></div>
    </motion.div>
  );
};

export default GlowingCard;