import React from 'react';
import { MapPin, Mail, Phone, Clock, Users, MessageSquare, ArrowRight, Lock } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

export const LeadershipAndContactSection = ({ setActiveTab }) => {
  const leadership = [
    {
      id: 'suchitra',
      initial: 'S',
      name: 'Suchitra',
      role: 'Founder & CEO',
      avatarBg: 'bg-[#0284C7]',
      cardBg: 'bg-gradient-to-b from-white to-sky-50/70 border-sky-200/90 shadow-sky-100 hover:shadow-sky-200'
    },
    {
      id: 'engineering',
      initial: 'E',
      name: 'Engineering Lead',
      role: 'Head of Development',
      avatarBg: 'bg-[#9333EA]',
      cardBg: 'bg-gradient-to-b from-white to-purple-50/70 border-purple-200/90 shadow-purple-100 hover:shadow-purple-200'
    },
    {
      id: 'design',
      initial: 'D',
      name: 'Design Lead',
      role: 'Head of UI/UX',
      avatarBg: 'bg-[#E11D48]',
      cardBg: 'bg-gradient-to-b from-white to-pink-50/70 border-pink-200/90 shadow-pink-100 hover:shadow-pink-200'
    },
    {
      id: 'architect',
      initial: 'A',
      name: 'Solutions Architect',
      role: 'Cloud & AI Systems',
      avatarBg: 'bg-[#059669]',
      cardBg: 'bg-gradient-to-b from-white to-emerald-50/70 border-emerald-200/90 shadow-emerald-100 hover:shadow-emerald-200'
    }
  ];

  const handleStartConsultation = () => {
    if (setActiveTab) setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreWork = () => {
    if (setActiveTab) setActiveTab('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 py-10 bg-gradient-to-b from-white via-slate-50/50 to-white text-[#050B14] border-t border-slate-200/80 select-none">
      
      {/* SECTION 1: MEET THE LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[10px] font-black tracking-widest uppercase shadow-xs">
            THE PEOPLE
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Meet the Leadership
          </h2>

          <p className="text-slate-600 text-xs font-semibold max-w-xl mx-auto leading-relaxed">
            A passionate group of engineers, designers, and strategists — united by a love for building great software.
          </p>
        </div>

        {/* 4 Leadership Cards Grid (2 Rows & 2 Columns on Mobile View) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {leadership.map((l) => (
            <div
              key={l.id}
              className={`rounded-2xl border ${l.cardBg} p-3.5 sm:p-5 text-center space-y-2.5 sm:space-y-3 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer`}
            >
              {/* Initial Avatar Square Box */}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${l.avatarBg} text-white font-black text-lg sm:text-xl flex items-center justify-center mx-auto shadow-md group-hover:scale-105 transition-transform`}>
                {l.initial}
              </div>

              {/* Name & Role */}
              <div className="space-y-0.5">
                <h3 className="text-xs sm:text-base font-black font-editorial text-slate-950 leading-tight">
                  {l.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-extrabold text-[#0284C7] leading-tight">
                  {l.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pill Badge */}
        <div className="flex justify-center pt-1">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-xs">
            <Users className="w-3.5 h-3.5 text-sky-600" />
            <span>And 60+ more senior engineers & product specialists across India</span>
          </div>
        </div>

      </section>

      {/* SECTION 2: GET IN TOUCH (Sleek Compact Heights) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6 border-t border-slate-200/80">
        
        {/* Header */}
        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-slate-200 text-[#0284C7] text-[10px] font-black tracking-widest uppercase shadow-xs">
            FIND US
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] via-[#0284C7] to-[#9333EA]">Touch</span>
          </h2>
        </div>

        {/* 2-Column Split: Spacious 2x2 Grid Left + Long Exceptional Consultation Box Right */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT SIDE: 4 Long Colorful Cards in 2 Columns & 2 Rows */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-2.5 sm:gap-3">
            
            {/* ROW 1 - COL 1: ADDRESS (Hot Pink) */}
            <div
              onClick={() => window.open('https://maps.google.com/?q=Coimbatore,TamilNadu', '_blank')}
              className="bg-gradient-to-br from-white via-pink-100 to-rose-200/90 rounded-xl sm:rounded-2xl border-2 border-pink-400 p-2 sm:p-5 space-y-1 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col justify-between min-h-0 sm:min-h-[120px]"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#E11D48] text-white flex items-center justify-center shadow-md shrink-0">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-[8px] sm:text-[9.5px] font-black tracking-widest uppercase text-[#E11D48]">
                  ADDRESS (MAP)
                </div>
              </div>

              <p className="text-[9.5px] sm:text-xs font-extrabold text-slate-950 leading-tight">
                {COMPANY_INFO.address}
              </p>
            </div>

            {/* ROW 1 - COL 2: EMAIL (Electric Blue) */}
            <div
              onClick={() => window.location.href = `mailto:${COMPANY_INFO.email}`}
              className="bg-gradient-to-br from-white via-sky-100 to-cyan-200/90 rounded-xl sm:rounded-2xl border-2 border-sky-400 p-2 sm:p-5 space-y-1 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col justify-between min-h-0 sm:min-h-[120px]"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#0284C7] text-white flex items-center justify-center shadow-md shrink-0">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-[8px] sm:text-[9.5px] font-black tracking-widest uppercase text-[#0284C7]">
                  EMAIL (SEND)
                </div>
              </div>

              <p className="text-[9.5px] sm:text-xs font-extrabold text-slate-950 truncate">
                {COMPANY_INFO.email}
              </p>
            </div>

            {/* ROW 2 - COL 1: PHONE (Royal Purple) */}
            <div
              onClick={() => window.location.href = `tel:${COMPANY_INFO.phone}`}
              className="bg-gradient-to-br from-white via-purple-100 to-indigo-200/90 rounded-xl sm:rounded-2xl border-2 border-purple-400 p-2 sm:p-5 space-y-1 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col justify-between min-h-0 sm:min-h-[120px]"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#9333EA] text-white flex items-center justify-center shadow-md shrink-0">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-[8px] sm:text-[9.5px] font-black tracking-widest uppercase text-[#9333EA]">
                  PHONE (CALL)
                </div>
              </div>

              <p className="text-[9.5px] sm:text-xs font-extrabold text-slate-950">
                {COMPANY_INFO.phone}
              </p>
            </div>

            {/* ROW 2 - COL 2: WORKING HOURS (Golden Amber) */}
            <div
              onClick={() => window.open(`https://wa.me/919150781685?text=Hi%20CodeThrive%20team,%20I%20want%20to%20know%20your%20working%20hours%20and%20schedule%20a%20call.`, '_blank')}
              className="bg-gradient-to-br from-white via-amber-100 to-yellow-200/90 rounded-xl sm:rounded-2xl border-2 border-amber-400 p-2 sm:p-5 space-y-1 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col justify-between min-h-0 sm:min-h-[120px]"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#D97706] text-white flex items-center justify-center shadow-md shrink-0">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-[8px] sm:text-[9.5px] font-black tracking-widest uppercase text-[#D97706]">
                  WORKING HOURS
                </div>
              </div>

              <p className="text-[9.5px] sm:text-xs font-extrabold text-slate-950 leading-tight">
                Mon - Sat: 10 AM - 5 PM
              </p>
            </div>

          </div>

          {/* RIGHT SIDE: Long & Spacious Exceptional Consultation Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#E0F7FF] via-white to-[#F3E8FF] border-2 border-sky-300 rounded-3xl p-4 sm:p-6 shadow-xl space-y-3.5 flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-3">
              
              {/* Top Row: ENGINEERING TEAM ONLINE Badge Left + Lock Icon Right */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-emerald-100/90 border border-emerald-300/90 text-emerald-800 text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>ENGINEERING TEAM ONLINE</span>
                </div>

                <div className="text-slate-400">
                  <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="font-editorial text-xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">
                  Ready to build something exceptional?
                </h3>

                <p className="text-[11px] sm:text-xs text-slate-600 font-semibold leading-relaxed">
                  Our lead architects review product scopes and respond with technical proposals within 24 hours.
                </p>
              </div>

            </div>

            {/* Action Buttons Row */}
            <div className="space-y-2 pt-2 border-t border-slate-200/60">
              <button
                onClick={handleStartConsultation}
                className="w-full py-2.5 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#06B6D4] to-[#9333EA] hover:from-[#0891B2] hover:to-[#7E22CE] text-white font-black text-xs sm:text-sm shadow-md shadow-purple-200 flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                <span className="text-white font-black">Start A Project Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </button>

              <button
                onClick={handleExploreWork}
                className="w-full py-2 sm:py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-xs sm:text-sm border border-slate-200/90 shadow-xs flex items-center justify-center transition-all cursor-pointer"
              >
                Explore Case Studies &amp; Work
              </button>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default LeadershipAndContactSection;
