import React from 'react';
import { Rocket, Code2, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';

export const WhyCodeThrive = () => {
  const features = [
    {
      id: 'agile',
      title: '2-Week Agile Velocity',
      badge: 'SPRINT SPEED',
      description: 'Rapid bi-weekly sprint cycles with continuous demo deliveries, automated staging, and live progress dashboards.',
      icon: <Rocket className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />,
      iconBg: 'bg-[#FF7A00]',
      badgeStyle: 'bg-[#FFF3E4] text-[#C25E00] border-[#FFD8B3]',
      cardBg: 'bg-[#FFF0DC] border-2 border-[#FFB866]',
      titleColor: 'text-[#4A2400]',
      animationStyle: { animation: 'floatSlow 4.5s ease-in-out infinite', animationDelay: '0s' }
    },
    {
      id: 'no-debt',
      title: 'Zero Technical Debt',
      badge: 'CLEAN CODE',
      description: 'Clean architecture, strict domain-driven design, mandatory code reviews, and >85% automated test coverage.',
      icon: <Code2 className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-500" />,
      iconBg: 'bg-[#06B6D4]',
      badgeStyle: 'bg-[#E6F8FF] text-[#085C77] border-[#A5F0FF]',
      cardBg: 'bg-[#DDFBFF] border-2 border-[#67E8F9]',
      titleColor: 'text-[#085C77]',
      animationStyle: { animation: 'floatSlow 4.5s ease-in-out infinite', animationDelay: '1.1s' }
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      badge: 'SOC-2 READY',
      description: 'Engineered to satisfy SOC 2 Type II, HIPAA, ISO 27001, and PCI-DSS requirements with zero-trust protocols.',
      icon: <ShieldCheck className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-500" />,
      iconBg: 'bg-[#8B5CF6]',
      badgeStyle: 'bg-[#F3E8FF] text-[#5B21B6] border-[#DDD6FE]',
      cardBg: 'bg-[#F1E5FF] border-2 border-[#C4B5FD]',
      titleColor: 'text-[#4C1D95]',
      animationStyle: { animation: 'floatSlow 4.5s ease-in-out infinite', animationDelay: '2.2s' }
    },
    {
      id: 'senior-pods',
      title: 'Dedicated Senior Pods',
      badge: 'ELITE TEAM',
      description: 'Cross-functional elite squads comprising Principal Architects, Senior Engineers, and Product Specialists.',
      icon: <Users className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-500" />,
      iconBg: 'bg-[#10B981]',
      badgeStyle: 'bg-[#E6F9F0] text-[#065F46] border-[#A7F3D0]',
      cardBg: 'bg-[#E2FFF0] border-2 border-[#6EE7B7]',
      titleColor: 'text-[#065F46]',
      animationStyle: { animation: 'floatSlow 4.5s ease-in-out infinite', animationDelay: '3.3s' }
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white text-[#050B14] relative overflow-hidden select-none border-t border-slate-200/80">
      
      {/* Keyframe Float Animation Styles */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
      `}</style>

      {/* Background ambient lighting & server image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-enterprise-bg.jpg"
          alt="Server Infrastructure"
          className="w-full h-full object-cover opacity-10"
          onError={(e) => {
            (e.target).src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Text & Colorful Guarantee Box */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* PHILOSOPHY & PRACTICE Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white text-[10px] font-black tracking-widest uppercase shadow-md shadow-sky-500/20">
              <span className="font-black text-amber-300">#</span>
              <span>PHILOSOPHY &amp; PRACTICE</span>
            </div>

            {/* Headline */}
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
              Why founders &amp; <br />
              enterprises choose <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#9333EA] to-[#E11D48]">CodeThrive</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed">
              We operate as your dedicated technical partner, embedding senior architectural rigor into your product roadmap to ensure long-term scalability and market leadership.
            </p>

            {/* Colorful Guarantee Card */}
            <div className="bg-gradient-to-br from-sky-50/90 via-indigo-50/70 to-purple-50/80 rounded-3xl border-2 border-sky-200/90 p-4 sm:p-6 shadow-xl space-y-3 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/90 border border-emerald-200/80 text-xs sm:text-sm font-bold text-slate-900 shadow-xs">
                <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-extrabold text-slate-900">100% Intellectual Property (IP) Ownership Transferred</span>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/90 border border-sky-200/80 text-xs sm:text-sm font-bold text-slate-900 shadow-xs">
                <div className="w-7 h-7 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-extrabold text-slate-900">Direct Real-Time Collaboration in Slack &amp; MS Teams</span>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/90 border border-purple-200/80 text-xs sm:text-sm font-bold text-slate-900 shadow-xs">
                <div className="w-7 h-7 rounded-xl bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-extrabold text-slate-900">SLA-Backed Performance &amp; Uptime Warranties</span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Colorful Cards Grid (2 Columns on Mobile View) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-6">
            {features.map((f) => (
              <div
                key={f.id}
                style={f.animationStyle}
                className={`group rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 ${f.cardBg} hover:scale-105 transition-all duration-300 flex flex-col justify-between cursor-pointer space-y-3 sm:space-y-5 shadow-xl min-h-[170px] sm:min-h-[220px]`}
              >
                {/* Top Row: Icon Box Left + Badge Right */}
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-2xl ${f.iconBg} flex items-center justify-center shadow-md`}>
                    {f.icon}
                  </div>

                  <div className={`px-3 py-1 rounded-full text-[9px] font-black tracking-wider uppercase border ${f.badgeStyle}`}>
                    {f.badge}
                  </div>
                </div>

                {/* Body: Title & Description */}
                <div className="space-y-2">
                  <h3 className={`text-xl font-black font-editorial leading-tight ${f.titleColor}`}>
                    {f.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                    {f.description}
                  </p>
                </div>

                {/* Footer Row: Code Thrive Engineering -> */}
                <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between text-[10px] font-bold text-slate-500">
                  <span>Code Thrive Engineering</span>
                  <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyCodeThrive;
