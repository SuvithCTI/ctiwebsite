import React, { useState } from 'react';
import { Send, Calendar, MapPin, Mail, Phone, MessageSquare, ShieldCheck, Globe, Clock, ArrowUpRight, HelpCircle, ChevronDown } from 'lucide-react';
import { ScheduleModal } from './ScheduleModal';
import { COMPANY_INFO } from '../../data/mockData';

export const ContactPage = () => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    workEmail: '',
    companyEmail: '',
    projectOverview: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ fullName: '', mobileNumber: '', workEmail: '', companyEmail: '', projectOverview: '' });
    }, 4000);
  };

  const handleChannelClick = (channel) => {
    if (channel === 'CHAT' || channel === 'WHATSAPP') {
      window.open(`https://wa.me/919150781685?text=Hi%20CodeThrive%20team,%20I%20want%20to%20discuss%20a%20project.`, '_blank');
    } else if (channel === 'CALL') {
      window.location.href = `tel:${COMPANY_INFO.phone}`;
    } else if (channel === 'MEET') {
      setIsScheduleOpen(true);
    } else if (channel === 'MAP') {
      window.open(COMPANY_INFO.mapsUrl, '_blank');
    } else if (channel === 'NETWORK') {
      window.open(COMPANY_INFO.socialLinks.linkedin, '_blank');
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FAF5FF] to-[#FFF8F2] text-[#050B14] relative overflow-hidden select-none">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-200/20 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-200/20 blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* TOP HERO BANNER CONTENT */}
        <div className="pt-2 space-y-3 text-center lg:text-left max-w-3xl">
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
            Let's Build Something <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#9333EA] to-[#E11D48]">
              Extraordinary Together.
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 font-bold leading-normal max-w-xl">
            Have a project in mind or need technical advice? Our engineering team in Coimbatore is ready to collaborate.
          </p>

          {/* 3 Compact Trust Metric Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-0.5">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 shadow-xs text-[11px] font-extrabold text-slate-800">
              <Clock className="w-3 h-3 text-sky-600 shrink-0" />
              <span>4-Hour Response</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 shadow-xs text-[11px] font-extrabold text-slate-800">
              <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
              <span>100% Mutual NDA</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 shadow-xs text-[11px] font-extrabold text-slate-800">
              <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
              <span>Coimbatore, India</span>
            </div>
          </div>
        </div>
        
        {/* ROW 1: QUICK CONNECT BAR (White Badge & Compact Box Height) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-4">
          
          {/* Left Title Box */}
          <div className="space-y-2 lg:max-w-xs text-center lg:text-left shrink-0">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-slate-900 border border-slate-200/90 text-xs font-black uppercase tracking-widest shadow-xs">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
              <span>QUICK CONNECT</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-950 font-black leading-relaxed">
              Reach our team in a click — we usually reply within 4 business hours.
            </p>
          </div>

          {/* Right White Rounded Quick Connect Channels Bar (Compact Height) */}
          <div className="bg-white/95 backdrop-blur-md rounded-[2.2rem] border border-slate-200/90 p-3.5 sm:p-4 shadow-xl w-full flex-1 space-y-2.5">
            
            {/* 5 Channels Icon Row */}
            <div className="grid grid-cols-5 gap-1.5 text-center">
              
              {/* CHAT */}
              <button
                onClick={() => handleChannelClick('CHAT')}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#10B981] hover:bg-[#059669] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110 animate-float" style={{ animationDelay: '0s' }}>
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-slate-950 group-hover:text-[#10B981] transition-colors">
                  CHAT
                </span>
              </button>

              {/* CALL */}
              <button
                onClick={() => handleChannelClick('CALL')}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#3B82F6] hover:bg-[#2563EB] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110 animate-float" style={{ animationDelay: '0.8s' }}>
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-slate-950 group-hover:text-[#3B82F6] transition-colors">
                  CALL
                </span>
              </button>

              {/* MEET */}
              <button
                onClick={() => handleChannelClick('MEET')}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#1E293B] hover:bg-[#0F172A] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110 animate-float" style={{ animationDelay: '1.6s' }}>
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-slate-950 group-hover:text-slate-900 transition-colors">
                  MEET
                </span>
              </button>

              {/* MAP */}
              <button
                onClick={() => handleChannelClick('MAP')}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EF4444] hover:bg-[#DC2626] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110 animate-float" style={{ animationDelay: '2.4s' }}>
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-slate-950 group-hover:text-[#EF4444] transition-colors">
                  MAP
                </span>
              </button>

              {/* NETWORK */}
              <button
                onClick={() => handleChannelClick('NETWORK')}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#06B6D4] hover:bg-[#0891B2] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110 animate-float" style={{ animationDelay: '3.2s' }}>
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-slate-950 group-hover:text-[#06B6D4] transition-colors">
                  NETWORK
                </span>
              </button>

            </div>

            {/* Bottom Footer Text */}
            <div className="pt-1.5 border-t border-slate-100 text-center text-[9px] font-black uppercase tracking-widest text-slate-500">
              FAST REPLIES • DIRECT CALLS • EXPERT GUIDANCE
            </div>

          </div>

        </div>

        {/* ROW 2: MAIN BODY GRID (Form Left + 2 Cards Right) */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN: Initiate Project Scope Form (Larger & Expanded on PC View) */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] border border-slate-200/90 p-4 sm:p-7 lg:p-9 shadow-lg flex flex-col justify-between space-y-3 sm:space-y-4 lg:space-y-6">
            
            <div>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                Initiate Project Scope
              </h2>
              <p className="mt-0.5 sm:mt-1 text-xs lg:text-sm font-bold text-slate-500">
                Average reply time: under 4 business hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 lg:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 lg:space-y-3 animate-fade-in my-auto">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl lg:text-2xl font-bold shadow-md">
                  ✓
                </div>
                <h3 className="text-lg lg:text-2xl font-black text-emerald-950 font-editorial">
                  Inquiry Received!
                </h3>
                <p className="text-xs lg:text-sm font-semibold text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you! Our Engineering Leadership team has received your project details and will get back to you within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 lg:space-y-5">
                
                {/* Row 1: Full Name & Mobile Number (2 Columns) */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-5">
                  <div className="space-y-1 lg:space-y-1.5">
                    <label className="text-xs lg:text-sm font-black text-slate-800 block">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-2 sm:p-3 lg:p-3.5 text-xs lg:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 transition shadow-xs"
                    />
                  </div>

                  <div className="space-y-1 lg:space-y-1.5">
                    <label className="text-xs lg:text-sm font-black text-slate-800 block">
                      Mobile / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 91507 81685"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-2 sm:p-3 lg:p-3.5 text-xs lg:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 transition shadow-xs"
                    />
                  </div>
                </div>

                {/* Row 2: Work Email & Company Email (2 Columns) */}
                <div className="grid sm:grid-cols-2 gap-3 lg:gap-5">
                  <div className="space-y-1 lg:space-y-1.5">
                    <label className="text-xs lg:text-sm font-black text-slate-800 block">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@enterprise.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-2 sm:p-3 lg:p-3.5 text-xs lg:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 transition shadow-xs"
                    />
                  </div>

                  <div className="space-y-1 lg:space-y-1.5">
                    <label className="text-xs lg:text-sm font-black text-slate-800 block">
                      Company Email
                    </label>
                    <input
                      type="email"
                      placeholder="contact@company.com"
                      value={formData.companyEmail}
                      onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-2 sm:p-3 lg:p-3.5 text-xs lg:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 transition shadow-xs"
                    />
                  </div>
                </div>

                {/* Row 3: Project Overview */}
                <div className="space-y-1 lg:space-y-1.5">
                  <label className="text-xs lg:text-sm font-black text-slate-800 block">
                    Project Overview & Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your current product, target timeline, and key technical goals..."
                    value={formData.projectOverview}
                    onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-2.5 sm:p-3.5 lg:p-4 text-xs lg:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 transition shadow-xs resize-none"
                  />
                </div>

                {/* Bottom Bar: NDA + Send Inquiry Button */}
                <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 lg:gap-4">
                  <div className="flex items-center gap-2 text-xs lg:text-sm font-bold text-slate-700">
                    <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-600 shrink-0" />
                    <span>Protected by mutual Non-Disclosure Agreement (NDA).</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-2.5 sm:py-3 lg:px-9 lg:py-3.5 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] !text-white font-black text-xs lg:text-sm shadow-md shadow-blue-200 flex items-center justify-center gap-2 transition hover:scale-105 cursor-pointer shrink-0"
                  >
                    <Send className="w-4 h-4 !text-white" />
                    <span className="!text-white">Send Inquiry</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* RIGHT COLUMN: 2 Cards (Expanded & Larger on PC View) */}
          <div className="lg:col-span-5 space-y-5 lg:space-y-6 flex flex-col justify-between">
            
            {/* CARD 1: Book a Consultation */}
            <div className="bg-white rounded-[1.8rem] border border-slate-200/90 p-5 sm:p-5.5 lg:p-8 shadow-lg space-y-3 lg:space-y-5">
              <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-slate-100 border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-800">
                <Calendar className="w-4.5 h-4.5 lg:w-5 lg:h-5 text-slate-800" />
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl lg:text-3xl font-black text-slate-950">
                Book a Consultation
              </h3>

              <p className="text-xs lg:text-sm text-slate-600 font-semibold leading-relaxed">
                Prefer a real-time discussion? Pick a convenient 30-minute window with our Engineering Leadership team.
              </p>

              <button
                onClick={() => setIsScheduleOpen(true)}
                className="w-full py-2.5 sm:py-3 lg:py-3.5 rounded-xl bg-[#3E3846] hover:bg-[#2E2935] !text-white font-black text-xs lg:text-sm flex items-center justify-center gap-2 transition hover:scale-[1.02] shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-white" />
                <span className="text-white">Select Date &amp; Time Slot</span>
              </button>
            </div>

            {/* CARD 2: OFFICIAL HEADQUARTERS & CONTACTS (Expanded & Larger on PC View) */}
            <div className="bg-white rounded-[1.8rem] border border-slate-200/90 p-5 sm:p-5.5 lg:p-8 shadow-lg space-y-3 lg:space-y-5">
              <div className="text-[10px] lg:text-xs font-black tracking-widest text-slate-500 uppercase">
                OFFICIAL HEADQUARTERS &amp; CONTACTS
              </div>

              {/* Address Item (Interactive Tap-Friendly Card for Mobile & PC View) */}
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 lg:p-4.5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/80 border border-slate-200 hover:border-sky-300 transition-all cursor-pointer group active:scale-98 shadow-xs"
                title="Open Google Maps Location"
              >
                <div className="flex items-center justify-between gap-2 text-xs lg:text-sm font-black text-slate-950">
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <span className="text-rose-500 text-sm lg:text-base">📍</span>
                    <span>Coimbatore Office (HQ)</span>
                  </div>
                  <span className="text-[10px] lg:text-xs font-black text-[#0284C7] bg-sky-100 px-2.5 py-1 rounded-full flex items-center gap-1 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                    <span>Map</span>
                    <ArrowUpRight className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                  </span>
                </div>

                <p className="text-xs lg:text-sm font-bold text-slate-700 mt-1.5 lg:mt-2 leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
              </a>

              {/* Email */}
              <div className="flex items-center gap-2.5 text-xs lg:text-sm font-bold text-slate-900 border-t border-slate-100 pt-2.5 lg:pt-3.5">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-sky-600 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 text-xs lg:text-sm font-bold text-slate-900">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-sky-600 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={() => handleChannelClick('WHATSAPP')}
                className="w-full py-2.5 sm:py-3 lg:py-3.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-black text-xs lg:text-sm flex items-center justify-center gap-2 transition hover:scale-[1.02] shadow-md cursor-pointer"
              >
                <span>💬 Chat on WhatsApp ({COMPANY_INFO.phone})</span>
              </button>
            </div>

          </div>
        </div>

        {/* ROW 3: FREQUENTLY ASKED QUESTIONS (FAQ Accordion Section) */}
        <div className="pt-10 border-t border-slate-200/80 space-y-8">
          
          {/* FAQ Section Header */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white border border-slate-200 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-xs">
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Got questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#9333EA] to-[#E11D48]">We have answers.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
              Everything you need to know about starting a project with CodeThrive Infotech.
            </p>
          </div>

          {/* FAQ Accordion Cards Grid (2 Columns on Desktop with Natural Height Alignment) */}
          <div className="grid md:grid-cols-2 gap-4 items-start max-w-6xl mx-auto">
            {[
              {
                q: "How much does custom web or mobile app development cost?",
                a: "Our project budgets start from initial MVP builds up to enterprise platforms. We provide transparent, itemized fixed-sprint quotes after a 30-minute scoping call, with zero hidden charges."
              },
              {
                q: "How fast can CodeThrive Infotech kick off our development sprint?",
                a: "We deploy dedicated senior engineering pods within 3 to 5 business days following scope alignment and NDA execution. Milestone deliverables are shipped in rapid 2-week sprints."
              },
              {
                q: "Do I own 100% of the source code and intellectual property (IP)?",
                a: "Yes, 100%! Upon milestone completion, full ownership of all source code, design assets, repositories, and intellectual property transfers directly to your company."
              },
              {
                q: "Will my project details be protected under a Non-Disclosure Agreement (NDA)?",
                a: "Yes. Every client engagement is protected under a strict mutual Non-Disclosure Agreement (NDA) before any proprietary business logic, code, or ideas are shared."
              },
              {
                q: "What happens after my app or website goes live?",
                a: "We provide 30 days of complimentary post-launch monitoring and bug fixes. Afterwards, we offer flexible SLA plans for continuous feature development, security updates, and cloud scaling."
              },
              {
                q: "Can CodeThrive integrate AI models or LLMs into my existing product?",
                a: "Yes! We specialize in integrating OpenAI, Anthropic, custom RAG knowledge bases, AI agents, and local open-source LLMs into web, mobile, and enterprise platforms."
              },
              {
                q: "Can your engineers work alongside our existing in-house tech team?",
                a: "Definitely. We offer dedicated team augmentation where our senior developers join your Slack, Jira, and GitHub workflows to accelerate delivery and fill technical skill gaps."
              },
              {
                q: "How do you handle project communication and status updates?",
                a: "We hold weekly video demo syncs, maintain live Jira task boards, provide staging build links, and set up a dedicated WhatsApp / Slack channel for instant daily updates."
              },
              {
                q: "Which tech stacks and frameworks do you specialize in?",
                a: "Our core stack includes React 19, Next.js 15, Node.js, Python, Flutter, React Native, Tailwind CSS, PostgreSQL, AWS Cloud, and AI / Machine Learning integrations."
              },
              {
                q: "What if I only have a product idea and no technical specification document?",
                a: "No problem! Our solution architects conduct a 1-on-1 Discovery Session to help define your user flows, wireframes, technical architecture, and a realistic launch roadmap."
              },
              {
                q: "Do you build compliant software for Healthcare, E-Commerce, or FinTech?",
                a: "Yes! We engineer HIPAA-compliant healthcare systems, PCI-DSS compliant e-commerce platforms, and high-concurrency enterprise applications."
              },
              {
                q: "Where is CodeThrive Infotech located and what hours do you operate?",
                a: "Our headquarters is located in Sungam, Coimbatore, Tamil Nadu, India. Our engineering pods operate Monday to Saturday, supporting global timezones across US, Europe, and Asia."
              }
            ].map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className={`${!showAllFaqs && index >= 4 ? 'hidden' : ''} ${!showAllFaqs && index === 3 ? 'hidden md:block' : ''} rounded-2xl border transition-all duration-300 p-5.5 shadow-sm hover:shadow-lg cursor-pointer ${
                    isOpen
                      ? 'bg-gradient-to-br from-sky-50/90 via-white to-purple-50/50 border-sky-500 shadow-sky-100 ring-2 ring-sky-300/50'
                      : 'bg-white border-slate-200/90 hover:border-sky-400 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-sky-600' : 'text-slate-400'}`} />
                      <h3 className="text-sm font-black text-slate-950 leading-snug">
                        {faq.q}
                      </h3>
                    </div>

                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-transform ${
                      isOpen ? 'bg-sky-500 text-white rotate-45 shadow-sm' : 'bg-slate-100 text-slate-800'
                    }`}>
                      +
                    </div>
                  </div>

                  {isOpen && (
                    <div className="pt-3.5 mt-3 border-t border-sky-100/90 text-xs sm:text-sm font-black text-slate-950 leading-relaxed animate-fade-in pl-6">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setShowAllFaqs((current) => !current)}
            aria-label={showAllFaqs ? 'Show fewer frequently asked questions' : 'Show more frequently asked questions'}
            title={showAllFaqs ? 'Show fewer questions' : 'Show more questions'}
            className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-sky-400 text-sky-600 shadow-lg shadow-sky-200/60 transition-transform duration-300 hover:scale-110 hover:bg-sky-50"
          >
            <span className="absolute inset-0 animate-ping rounded-full border border-sky-300 opacity-40" />
            <ChevronDown className={`relative h-6 w-6 animate-bounce transition-transform duration-300 ${showAllFaqs ? 'rotate-180' : ''}`} />
          </button>

        </div>

      </div>

      {/* Schedule Consultation Modal */}
      {isScheduleOpen && (
        <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
      )}

    </div>
  );
};

export default ContactPage;
