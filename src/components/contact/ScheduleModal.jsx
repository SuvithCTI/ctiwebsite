import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Calendar, CheckCircle2, Video } from 'lucide-react';
export const ScheduleModal = ({ isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState('2026-09-02');
    const [selectedTime, setSelectedTime] = useState('02:00 PM');
    const [meetingType, setMeetingType] = useState('Architecture Review & Feasibility (30m)');
    const [fullName, setFullName] = useState('');
    const [workEmail, setWorkEmail] = useState('');
    const [isBooked, setIsBooked] = useState(false);
    if (!isOpen)
        return null;
    const timeSlots = ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'];
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsBooked(true);
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.7 } });
    };
    return (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#FFFFFF] border border-[#E2E8F0] rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 text-[#0F172A]">
        
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition">
          <X className="w-5 h-5"/>
        </button>

        {!isBooked ? (<div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] flex items-center justify-center">
                <Calendar className="w-5 h-5"/>
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#0F172A]">Schedule Discovery Session</h3>
                <p className="text-xs text-[#475569]">Direct 1-on-1 with an Engineering Partner</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">Meeting Focus</label>
                <select value={meetingType} onChange={(e) => setMeetingType(e.target.value)} className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-xs text-[#0F172A] outline-none">
                  <option>Architecture Review & Feasibility (30m)</option>
                  <option>AI / LLM Integration Scoping (30m)</option>
                  <option>Dedicated Pod Staffing & Roadmap (30m)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">Select Date</label>
                  <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-xs text-[#0F172A] outline-none"/>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">Time Slot</label>
                  <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-xs text-[#0F172A] outline-none">
                    {timeSlots.map((ts) => (<option key={ts} value={ts}>{ts}</option>))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">Your Full Name</label>
                  <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="e.g. Alex Morgan" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-xs text-[#0F172A] outline-none"/>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">Work Email</label>
                  <input type="email" required value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} placeholder="alex@company.com" className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-xs text-[#0F172A] outline-none"/>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#475569] flex items-center gap-2">
                <Video className="w-4 h-4 text-[#0F172A] shrink-0"/>
                <span>Google Meet link will be automatically generated and emailed to you.</span>
              </div>

              <button type="submit" className="w-full py-3.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#0F172A] hover:bg-[#1E293B] shadow-md transition">
                Confirm Consultation Slot
              </button>
            </form>
          </div>) : (<div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8"/>
            </div>
            <h3 className="font-editorial text-3xl font-bold text-[#0F172A]">Consultation Confirmed</h3>
            <p className="text-xs text-[#475569] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-[#0F172A] font-bold">{fullName}</span>. An invitation with the Google Meet conference link has been dispatched to <span className="text-[#0F172A] font-mono font-bold">{workEmail}</span>.
            </p>
            <div className="p-3 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569] font-mono inline-block">
              📅 {selectedDate} at {selectedTime}
            </div>
            <div className="pt-2">
              <button onClick={onClose} className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B]">
                Close
              </button>
            </div>
          </div>)}

      </div>
    </div>);
};
