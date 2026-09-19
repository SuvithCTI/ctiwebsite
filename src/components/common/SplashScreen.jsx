import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen = ({ onComplete, duration = 2000 }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 450);
    }, duration);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        clearTimeout(timer);
        setIsExiting(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 250);
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
    }, 250);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="minimal-splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
          }}
          className="splash-screen fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#05070D] text-white overflow-hidden select-none"
        >
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ 
                scale: [0.9, 1.15, 1],
                opacity: [0.25, 0.5, 0.35]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-tr from-sky-500/20 via-cyan-500/15 to-emerald-500/20 blur-[100px]"
            />
          </div>

          {/* Minimalist Skip Button */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              whileHover={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={handleSkip}
              className="text-xs font-mono tracking-widest uppercase text-slate-400 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.03] backdrop-blur-md transition-all cursor-pointer"
              style={{ color: '#94a3b8' }}
            >
              Skip
            </motion.button>
          </div>

          {/* Central Monolith Brand Container */}
          <div className="relative z-10 flex flex-col items-center max-w-2xl px-6 text-center">
            
            {/* Elegant Minimal Logo Reveal with Reflection */}
            <div className="relative mb-5 flex flex-col items-center">
              
              {/* Expanding Horizontal Accent Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 140, opacity: 0.8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-5"
              />

              {/* Logo Emblem */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.88 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.05
                }}
                className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center"
              >
                {/* Soft Specular Light Sweep */}
                <motion.div
                  initial={{ x: '-150%', opacity: 0 }}
                  animate={{ x: '180%', opacity: [0, 0.7, 0] }}
                  transition={{
                    duration: 1,
                    delay: 0.45,
                    ease: 'easeInOut'
                  }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/45 to-transparent skew-x-12 pointer-events-none z-20"
                />

                {/* Main Logo Image */}
                <img
                  src="/brand-symbol-transparent.png"
                  alt="CodeThrive Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(56,189,248,0.55)] z-10"
                  onError={(e) => {
                    e.target.src = '/logo.png';
                  }}
                />
              </motion.div>

              {/* Soft Glass Floor Mirror Reflection */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.18 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-28 sm:w-36 h-10 overflow-hidden pointer-events-none select-none -mt-2 blur-[2px]"
                style={{
                  transform: 'scaleY(-1)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), transparent)'
                }}
              >
                <img
                  src="/brand-symbol-transparent.png"
                  alt=""
                  className="w-full h-full object-contain opacity-50"
                  onError={(e) => {
                    e.target.src = '/logo.png';
                  }}
                />
              </motion.div>
            </div>

            {/* Clean Masked Typography Reveal */}
            <div className="space-y-2.5 flex flex-col items-center">
              
              {/* Brand Title: Smooth Slide from Mask */}
              <div className="overflow-hidden py-1">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight font-display flex items-center justify-center gap-2.5 sm:gap-3.5"
                >
                  <span 
                    className="tracking-tight"
                    style={{ 
                      color: '#FFFFFF',
                      textShadow: '0 2px 20px rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    CODETHRIVE
                  </span>
                  <span 
                    className="tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.45))'
                    }}
                  >
                    INFOTECH
                  </span>
                </motion.h1>
              </div>

              {/* Tagline: Sequential Word Manifesto Reveal */}
              <div className="flex items-center justify-center gap-3 sm:gap-5 text-sm sm:text-base font-semibold tracking-[0.25em] uppercase pt-1">
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  style={{ color: '#E2E8F0', fontWeight: '600' }}
                >
                  Progress
                </motion.span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.48, duration: 0.25 }}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                />
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.56, duration: 0.4 }}
                  style={{ color: '#E2E8F0', fontWeight: '600' }}
                >
                  Cultivate
                </motion.span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.64, duration: 0.25 }}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                />
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.72, duration: 0.4 }}
                  style={{ color: '#E2E8F0', fontWeight: '600' }}
                >
                  Innovate
                </motion.span>
              </div>

              {/* Bottom Subtle Laser Horizon Line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.4 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-48 sm:w-64 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-3"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
