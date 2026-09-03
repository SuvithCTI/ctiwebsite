import React, { useEffect, useState } from 'react';
import { ArrowRight, Code2, Cpu, Globe, Zap } from 'lucide-react';

const TYPED_WORDS = ['high-concurrency', 'enterprise-grade', 'AI-powered', 'cloud-native'];

export const Hero = ({ setActiveTab, openEstimator }) => {
  const [typedIndex, setTypedIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse move parallax handler
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  // Typing effect
  useEffect(() => {
    const word = TYPED_WORDS[typedIndex];
    let timeout;
    if (!isDeleting && displayText.length < word.length) {
      timeout = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 45);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTypedIndex((i) => (i + 1) % TYPED_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, typedIndex]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[calc(100vh-86px)] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-20 pb-8 overflow-hidden bg-gradient-to-br from-sky-50/80 via-white to-indigo-50/60 text-[#050B14]"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-35"
        src="/hero-background.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-white/40" />

      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-300/20 blur-[160px] rounded-full pointer-events-none animate-pulse" />

      {/* Watermark Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full pointer-events-none select-none overflow-hidden opacity-10">
        <span className="font-editorial text-[7rem] sm:text-[13rem] font-black tracking-tighter text-slate-400/40 whitespace-nowrap">
          Building Greater Futures
        </span>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-1 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full">
        <div className="grid items-center gap-8 lg:grid-cols-12 w-full">

          {/* Left / Main Column */}
          <div className="lg:col-span-7 text-center lg:text-left w-full">

            {/* 1. Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.02] text-[#050B14] mb-4 sm:mb-5">
              We build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600">
                {displayText}
              </span>
              <span className="animate-pulse text-sky-600">|</span> <br />
              software for <br />
              brands that <span className="font-italic-accent text-sky-600 italic font-normal">scale.</span>
            </h1>

            {/* 2. Subtitle */}
            <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold mb-5 sm:mb-6">
              Codethrive partners with founders and enterprises to craft high-concurrency digital platforms with architectural rigor, precision, and reliable scalability.
            </p>

            {/* 3. DESKTOP VIEW ONLY: Action Buttons Above Metrics */}
            <div className="hidden lg:flex flex-row items-center justify-start gap-3.5 mb-8">
              <button
                onClick={() => {
                  if (setActiveTab) setActiveTab('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-full text-xs font-black tracking-wide bg-white border border-slate-200 hover:border-slate-400 text-[#050B14] shadow-sm transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <span>See our work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  if (setActiveTab) setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-full text-xs font-black tracking-wide bg-white border border-slate-300 hover:border-sky-500 text-[#050B14] transition-all hover:scale-105 shadow-sm cursor-pointer font-bold"
              >
                Book a call
              </button>
            </div>

            {/* 4. MOBILE VIEW ONLY: Interactive Orbital Animation Graphic in Center */}
            <div className="flex lg:hidden items-center justify-center relative my-6 w-full">
              <div
                style={{
                  transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
                }}
                className="relative w-full max-w-[340px] sm:max-w-[440px] h-[280px] sm:h-[360px] flex items-center justify-center transition-transform duration-300 ease-out"
              >
                {/* Radial Glow Pulse */}
                <div className="absolute inset-0 bg-radial from-sky-300/40 via-purple-300/25 to-transparent blur-3xl rounded-full animate-pulse" />

                {/* Orbit Rings */}
                <div className="absolute w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] rounded-full border border-sky-400/40 animate-spin-slow" />
                <div className="absolute w-[200px] sm:w-[260px] h-[200px] sm:h-[260px] rounded-full border border-dashed border-purple-400/50 animate-reverse-spin" />

                {/* Center Brand Badge */}
                <div className="relative z-20 flex flex-col items-center justify-center animate-float">
                  <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-[1.8rem] sm:rounded-[2rem] p-2.5 sm:p-3 flex items-center justify-center shadow-2xl shadow-sky-400/40 border-2 border-white/90 bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-600 transition-transform duration-300 hover:scale-110">
                    <img
                      src="/brand-symbol-transparent.png"
                      alt="CodeThrive"
                      className="w-full h-full object-contain filter drop-shadow-xl"
                      onError={(e) => { (e.target).src = '/logo.png'; }}
                    />
                  </div>
                  <span className="mt-2 text-[9px] sm:text-xs font-black tracking-widest text-slate-900 uppercase">
                    CODETHRIVE INFOTECH
                  </span>
                </div>

                {/* Capability Badges on Orbital Arc */}
                <div className="absolute top-1 left-0 z-10 animate-float">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-50 via-cyan-50 to-blue-50 border-2 border-sky-400 text-[10px] font-black text-sky-950 shadow-md">
                    <Globe className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Website Development</span>
                  </div>
                </div>

                <div className="absolute top-1 right-0 z-10 animate-float-slow">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-50 via-fuchsia-50 to-pink-50 border-2 border-purple-400 text-[10px] font-black text-purple-950 shadow-md">
                    <Code2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>Mobile App Builder</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 animate-float">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 border-2 border-indigo-500 text-[10px] font-black text-indigo-950 shadow-md">
                    <Cpu className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>AI Systems</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 animate-float-slow">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 border-2 border-emerald-400 text-[10px] font-black text-emerald-950 shadow-md">
                    <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>CRM & ERP</span>
                  </div>
                </div>

                <div className="absolute bottom-1 left-0 z-10 animate-float">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-400 text-[10px] font-black text-amber-950 shadow-md">
                    <Globe className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Cloud Architecture</span>
                  </div>
                </div>

                <div className="absolute bottom-1 right-0 z-10 animate-float-slow">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-50 via-pink-50 to-red-50 border-2 border-rose-400 text-[10px] font-black text-rose-950 shadow-md">
                    <Code2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>Business Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Metrics Bar */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto lg:mx-0">
              <div>
                <div className="text-xl sm:text-3xl font-black text-slate-950 font-editorial">180+</div>
                <div className="text-[8.5px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">PROJECTS SHIPPED</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-black text-slate-950 font-editorial">9.9</div>
                <div className="text-[8.5px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">AVG. CLIENT RATING</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-black text-slate-950 font-editorial">45+</div>
                <div className="text-[8.5px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">GLOBAL CLIENTS</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-black text-slate-950 font-editorial">96%</div>
                <div className="text-[8.5px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">CLIENT RETENTION</div>
              </div>
            </div>

            {/* 6. MOBILE VIEW ONLY: Action Buttons ("See our work" & "Book a call") AT THE VERY BOTTOM */}
            <div className="flex lg:hidden flex-row items-center justify-center gap-3.5 mt-6 pt-4 border-t border-slate-200/60">
              <button
                onClick={() => {
                  if (setActiveTab) setActiveTab('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full text-xs font-black tracking-wide bg-white border border-slate-200 hover:border-slate-400 text-[#050B14] shadow-sm transition-transform active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>See our work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  if (setActiveTab) setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full text-xs font-black tracking-wide bg-white border border-slate-300 hover:border-sky-500 text-[#050B14] transition-all active:scale-95 shadow-sm cursor-pointer font-bold"
              >
                Book a call
              </button>
            </div>

          </div>

          {/* DESKTOP VIEW ONLY: Right Column Orbital Animation Graphic */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative">
            <div
              style={{
                transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
              }}
              className="relative w-full max-w-[460px] h-[390px] flex items-center justify-center transition-transform duration-300 ease-out"
            >
              {/* Radial Glow Pulse */}
              <div className="absolute inset-0 bg-radial from-sky-300/40 via-purple-300/25 to-transparent blur-3xl rounded-full animate-pulse" />

              {/* Orbit Rings */}
              <div className="absolute w-[370px] h-[370px] rounded-full border border-sky-400/40 animate-spin-slow" />
              <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-purple-400/50 animate-reverse-spin" />

              {/* Center Brand Badge */}
              <div className="relative z-20 flex flex-col items-center justify-center animate-float">
                <div className="w-28 h-28 rounded-[2.2rem] p-4 flex items-center justify-center shadow-2xl shadow-sky-400/40 border-2 border-white/90 bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-600 transition-transform duration-300 hover:scale-110">
                  <img
                    src="/brand-symbol-transparent.png"
                    alt="CodeThrive"
                    className="w-full h-full object-contain filter drop-shadow-xl"
                    onError={(e) => { (e.target).src = '/logo.png'; }}
                  />
                </div>
                <span className="mt-2.5 text-xs font-black tracking-widest text-slate-900 uppercase">
                  CODETHRIVE INFOTECH
                </span>
              </div>

              {/* 6 Capability Badges Positioned on Curved Orbital Arc */}
              <div className="absolute top-2 left-6 z-10 animate-float" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-sky-50 via-cyan-50 to-blue-50 border-2 border-sky-400 text-xs font-black text-sky-950 shadow-lg shadow-sky-200/60 hover:scale-105 transition-all cursor-pointer">
                  <Globe className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Website Development</span>
                </div>
              </div>

              <div className="absolute top-2 right-6 z-10 animate-float-slow" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-50 via-fuchsia-50 to-pink-50 border-2 border-purple-400 text-xs font-black text-purple-950 shadow-lg shadow-purple-200/60 hover:scale-105 transition-all cursor-pointer">
                  <Code2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Mobile App Builder</span>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -left-16 z-10 animate-float" style={{ animationDelay: '1.6s' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 border-2 border-indigo-500 text-xs font-black text-indigo-950 shadow-lg shadow-indigo-200/60 hover:scale-105 transition-all cursor-pointer">
                  <Cpu className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>AI & Intelligent Systems</span>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-16 z-10 animate-float-slow" style={{ animationDelay: '2.4s' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 border-2 border-emerald-400 text-xs font-black text-emerald-950 shadow-lg shadow-emerald-200/60 hover:scale-105 transition-all cursor-pointer">
                  <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom CRM & ERP</span>
                </div>
              </div>

              <div className="absolute bottom-2 left-6 z-10 animate-float" style={{ animationDelay: '3.2s' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-400 text-xs font-black text-amber-950 shadow-lg shadow-amber-200/60 hover:scale-105 transition-all cursor-pointer">
                  <Globe className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Cloud Architecture</span>
                </div>
              </div>

              <div className="absolute bottom-2 right-6 z-10 animate-float-slow" style={{ animationDelay: '4.0s' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-red-50 border-2 border-rose-400 text-xs font-black text-rose-950 shadow-lg shadow-rose-200/60 hover:scale-105 transition-all cursor-pointer">
                  <Code2 className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Business Support</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
