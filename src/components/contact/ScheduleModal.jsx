import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Calendar, CheckCircle2, Video, Clock, Sparkles, User, Mail } from 'lucide-react';

export const ScheduleModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('2026-09-05');
  const [selectedTime, setSelectedTime] = useState('02:00 PM');
  const [meetingType, setMeetingType] = useState('🚀 Custom Web & Mobile App Development (30m)');
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const timeSlots = ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);
    confetti({ particleCount: 140, spread: 80, origin: { y: 0.6 } });
  };

  const handleClose = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-white border border-slate-200/90 rounded-3xl shadow-2xl overflow-hidden text-slate-900 select-none">
        
        {/* Top Gold & Purple Accent Ribbon */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#FF2A6D] via-[#9333EA] to-[#0284C7]" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-8">
          {!isBooked ? (
            <div className="space-y-6">
              
              {/* Modal Header */}
              <div className="flex items-start gap-3.5 pr-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 text-amber-950 flex items-center justify-center shrink-0 shadow-xs">
                  <Calendar className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-editorial text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">
                      Schedule Discovery Session
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-600 mt-0.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Direct 1-on-1 with an Engineering Partner</span>
                  </p>
                </div>
              </div>

              {/* Form Controls */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Meeting Focus */}
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1.5 flex items-center justify-between">
                    <span>Meeting Focus</span>
                    <span className="text-[10px] text-purple-600 font-extrabold normal-case">30-min 1-on-1 Session</span>
                  </label>
                  <select
                    value={meetingType}
                    onChange={(e) => setMeetingType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 rounded-xl px-3.5 py-2.5 text-xs font-black text-slate-900 outline-none transition cursor-pointer shadow-xs"
                  >
                    <option value="🚀 Custom Web & Mobile App Development (30m)">🚀 Custom Web &amp; Mobile App Development (30m)</option>
                    <option value="⚡ Architecture Review & Feasibility Audit (30m)">⚡ Architecture Review &amp; Feasibility Audit (30m)</option>
                    <option value="🤖 AI & LLM Automation Scoping (30m)">🤖 AI &amp; LLM Automation Scoping (30m)</option>
                    <option value="🛒 E-Commerce, POS & Headless Retail (30m)">🛒 E-Commerce, POS &amp; Headless Retail (30m)</option>
                    <option value="🏥 Healthcare, EHR & HIPAA Compliance (30m)">🏥 Healthcare, EHR &amp; HIPAA Compliance (30m)</option>
                    <option value="💼 Dedicated Engineering Team & Staffing (30m)">💼 Dedicated Engineering Team &amp; Staffing (30m)</option>
                    <option value="📊 Project Scope, Timeline & Cost Estimation (30m)">📊 Project Scope, Timeline &amp; Cost Estimation (30m)</option>
                  </select>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>Select Date</span>
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 outline-none transition shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>Time Slot</span>
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 outline-none transition cursor-pointer shadow-xs"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts}>{ts}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Name & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1">
                      <User className="w-3 h-3 text-slate-400" />
                      <span>Your Full Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-slate-50 border border-slate-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 placeholder-slate-400 outline-none transition shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1">
                      <Mail className="w-3 h-3 text-slate-400" />
                      <span>Work Email</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-50 border border-slate-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 placeholder-slate-400 outline-none transition shadow-xs"
                    />
                  </div>
                </div>

                {/* Google Meet Banner */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border border-sky-200/90 text-xs font-extrabold text-sky-950 flex items-center gap-3 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="leading-snug">
                    Google Meet link will be automatically generated and emailed to your address.
                  </span>
                </div>

                {/* Action Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-xs font-black tracking-wider uppercase text-white bg-gradient-to-r from-[#FF2A6D] via-[#9333EA] to-[#0284C7] hover:scale-[1.01] active:scale-98 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Confirm Consultation Slot
                </button>
              </form>
            </div>
          ) : (
            /* Confirmation Success State */
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-editorial text-3xl font-black text-slate-950">
                  Consultation Confirmed!
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <span className="text-slate-950 font-black">{fullName}</span>. An invitation with the Google Meet conference link has been dispatched to <span className="text-purple-600 font-mono font-black">{workEmail}</span>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-bold inline-flex items-center gap-3 shadow-xs">
                <span className="flex items-center gap-1 text-purple-700 font-black">
                  <Calendar className="w-4 h-4 text-purple-600" /> {selectedDate}
                </span>
                <span className="text-slate-300">|</span>
                <span className="flex items-center gap-1 text-amber-700 font-black">
                  <Clock className="w-4 h-4 text-amber-600" /> {selectedTime}
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-800 shadow-md transition cursor-pointer"
                >
                  Close &amp; Return
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ScheduleModal;
