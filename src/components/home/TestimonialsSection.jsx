import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../../data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-br from-pink-100/70 via-rose-50 to-fuchsia-100/50 text-[#050B14] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/25 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 border border-pink-300 text-pink-800 text-xs font-black uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-600" />
            Client Endorsements
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-black text-[#050B14] tracking-tight">
            What Leaders Say About CodeThrive
          </h2>
        </div>

        {/* 1. MOBILE VIEW: 1 Single Testimonial Card */}
        <div className="block sm:hidden">
          {(() => {
            const testimonial = TESTIMONIALS[currentIndex % TESTIMONIALS.length];
            return (
              <article
                key={testimonial.author}
                className="relative rounded-3xl bg-white p-4.5 border border-pink-200 shadow-xl transition-all duration-500 max-w-md mx-auto"
              >
                <Quote className="w-6 h-6 text-pink-300 mb-1.5" />

                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="font-sans text-sm font-semibold text-slate-800 leading-snug mb-3 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-pink-400 shadow-md"
                    onError={(e) => {
                      (e.target).src = '/team/suchitra.png';
                    }}
                  />
                  <div>
                    <h4 className="font-sans text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {testimonial.author}
                    </h4>
                    <p className="font-sans text-[11px] font-medium text-pink-600 mt-0.5">
                      {testimonial.role} — <span className="text-slate-600">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </article>
            );
          })()}
        </div>

        {/* 2. DESKTOP & TABLET VIEW: 2 Testimonial Cards Side by Side */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-4">
          {[0, 1].map((offset) => {
            const testimonial = TESTIMONIALS[(currentIndex + offset) % TESTIMONIALS.length];

            return (
              <article
                key={`${testimonial.author}-${offset}`}
                className="relative rounded-3xl bg-white p-5 border border-pink-200 shadow-xl transition-all duration-500 animate-testimonial-change"
              >
                <Quote className="w-7 h-7 text-pink-200 mb-2" />

                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="font-sans text-base sm:text-lg font-semibold text-slate-800 leading-snug mb-3 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-pink-400 shadow-md"
                    onError={(e) => {
                      (e.target).src = '/team/suchitra.png';
                    }}
                  />
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900 leading-tight">
                      {testimonial.author}
                    </h4>
                    <p className="font-sans text-[11px] font-medium text-pink-600 mt-0.5">
                      {testimonial.role} — <span className="text-slate-600">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination controls keep the remaining testimonials available manually */}
        <div className="flex items-center justify-center gap-2 mt-3">
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
            className="p-2.5 rounded-full bg-pink-100 hover:bg-pink-200 text-slate-700 hover:text-pink-700 transition cursor-pointer"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
            className="p-2.5 rounded-full bg-pink-100 hover:bg-pink-200 text-slate-700 hover:text-pink-700 transition cursor-pointer"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
