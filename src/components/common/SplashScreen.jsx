import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen = ({ onComplete, duration = 2000 }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 400);
    }, duration);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        clearTimeout(timer);
        setIsExiting(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 200);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [duration, onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 200);
  };

  return (
    <AnimatePresence mode="wait">
      {!isExiting && (
        <motion.div
          key="optimized-splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.98,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
          }}
          className="splash-screen fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#05070D] text-white overflow-hidden select-none"
          style={{
            transform: 'translate3d(0,0,0)',
            backfaceVisibility: 'hidden',
            willChange: 'opacity, transform'
          }}
        >
          {/* High-Performance Smooth CSS Radial Aura (Zero GPU Blur lag) */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 48%, rgba(14, 165, 233, 0.16) 0%, rgba(16, 185, 129, 0.10) 35%, transparent 65%)'
            }}
          />

          {/* Minimalist Skip Button */}
          <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSkip}
              className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-slate-300 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.05] active:bg-white/20 transition-colors cursor-pointer"
              style={{ color: '#cbd5e1' }}
            >
              Skip
            </motion.button>
          </div>

          {/* Central Monolith Brand Container */}
          <div className="relative z-10 flex flex-col items-center max-w-lg px-4 sm:px-6 text-center w-full">
            
            {/* Top Accent Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 90, opacity: 0.8 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-5 sm:mb-6"
            />

            {/* Logo Emblem */}
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.05
              }}
              className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 sm:mb-5 flex items-center justify-center"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Light Sweep Highlight */}
              <motion.div
                initial={{ x: '-150%', opacity: 0 }}
                animate={{ x: '180%', opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 0.9,
                  delay: 0.35,
                  ease: 'easeInOut'
                }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none z-20"
              />

              {/* Logo Image */}
              <img
                src="/brand-symbol-transparent.png"
                alt="CodeThrive Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(56,189,248,0.5)] z-10"
                onError={(e) => {
                  e.target.src = '/logo.png';
                }}
              />
            </motion.div>

            {/* Typography Reveal */}
            <div className="space-y-2 sm:space-y-3 flex flex-col items-center w-full">
              
              {/* Brand Title */}
              <div className="overflow-hidden py-0.5">
                <motion.h1
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight font-display flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5"
                >
                  <span 
                    className="tracking-tight"
                    style={{ 
                      color: '#FFFFFF',
                      textShadow: '0 2px 15px rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    CODETHRIVE
                  </span>
                  <span 
                    className="tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent"
                    style={{
                      filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.45))'
                    }}
                  >
                    INFOTECH
                  </span>
                </motion.h1>
              </div>

              {/* Tagline: Sequential Reveal */}
              <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase pt-0.5">
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.35 }}
                  style={{ color: '#E2E8F0', fontWeight: '600' }}
                >
                  Progress
                </motion.span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.38, duration: 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                />
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.35 }}
                  style={{ color: '#E2E8F0', fontWeight: '600' }}
                >
                  Cultivate
                </motion.span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.52, duration: 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                />
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.35 }}
                  style={{ color: '#E2E8F0', fontWeight: '600' }}
                >
                  Innovate
                </motion.span>
              </div>

              {/* Bottom Subtle Laser Line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.4 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-36 sm:w-48 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2 sm:mt-3"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
