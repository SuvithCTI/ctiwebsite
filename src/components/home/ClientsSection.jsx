import React, { useState, useEffect } from 'react';
import { ExternalLink, RotateCcw, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const ClientsSection = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const clients = [
    {
      id: 'samyuktha',
      name: 'Samyuktha Tours',
      fullName: 'Samyuktha Tours & Travels',
      tagline: 'Enterprise Booking Engine',
      industry: 'TRAVEL',
      metricPill: '+140% Bookings',
      location: 'Coimbatore',
      logo: '/clients/samyuktha.png',
      screenshot: '/clients/preview-samyuktha.png',
      description: 'End-to-end digital travel booking & customer portal.',
      bullets: [
        'Automated Itinerary Engine',
        'Online Ticket Booking API',
        'Customer CRM & SMS Alerts'
      ],
      metrics: '12,000+ monthly bookings',
      bg: 'bg-[#FFFBF2]',
      darkBg: 'bg-[#1E1910]',
      border: 'border-amber-300/90',
      boxBg: 'bg-white border-amber-200',
      chipBg: 'bg-amber-200/80 text-amber-950 border-amber-300',
      titleColor: 'text-[#5C2B0E]',
      link: 'https://codethriveinfotech.in'
    },
    {
      id: 'maduraitour',
      name: 'Madurai Tour Taxi',
      fullName: 'Madurai Tour Taxi',
      tagline: 'AI Fleet Dispatch Suite',
      industry: 'MOBILITY',
      metricPill: '< 2 min Dispatch',
      location: 'Madurai',
      logo: '/clients/madurai-tour-taxi.png',
      screenshot: '/clients/preview-madurai-taxi.png',
      description: 'Scalable fleet management and automated booking platform.',
      bullets: [
        'Real-time GPS Dispatch',
        'Driver Telemetry Dashboard',
        'Instant Fare Calculator'
      ],
      metrics: 'Sub-3-second driver allocation',
      bg: 'bg-[#F2FCFF]',
      darkBg: 'bg-[#0B1E28]',
      border: 'border-cyan-300/90',
      boxBg: 'bg-white border-cyan-200',
      chipBg: 'bg-cyan-200/80 text-cyan-950 border-cyan-300',
      titleColor: 'text-[#064E63]',
      link: 'https://codethriveinfotech.in'
    },
    {
      id: 'maduraibest',
      name: 'Madurai Best Tours',
      fullName: 'Madurai Best Tours & Travels',
      tagline: 'Multi-Day Tour Checkout',
      industry: 'HOSPITALITY',
      metricPill: '99.99% Uptime',
      location: 'Madurai',
      logo: '/clients/madurai-best.png',
      screenshot: '/clients/preview-madurai-best.png',
      description: 'Tourism experience platforms with multi-day tour packages.',
      bullets: [
        'Multi-Day Tour Builder',
        'Payment Gateway Integration',
        'Multi-Language Portal'
      ],
      metrics: '3.8x increase in online bookings',
      bg: 'bg-[#FAF5FF]',
      darkBg: 'bg-[#1F1035]',
      border: 'border-purple-300/90',
      boxBg: 'bg-white border-purple-200',
      chipBg: 'bg-purple-200/80 text-purple-950 border-purple-300',
      titleColor: 'text-[#4C1D95]',
      link: 'https://codethriveinfotech.in'
    },
    {
      id: 'therapyuniverse',
      name: 'Therapy Universe',
      fullName: 'The Therapy Universe',
      tagline: 'EHR Clinician Portal',
      industry: 'HEALTHCARE',
      metricPill: '4.9/5 Rating',
      location: 'Chennai',
      logo: '/clients/therapy-universe.png',
      screenshot: '/clients/preview-madurai-therapy.png',
      description: 'Modern healthcare management and patient portal.',
      bullets: [
        'HIPAA/EHR Patient Portal',
        'Smart Appointment Booking',
        'Physio Rehab Tracker'
      ],
      metrics: '99.9% uptime with encrypted EHR',
      bg: 'bg-[#F0FDF4]',
      darkBg: 'bg-[#0B2319]',
      border: 'border-emerald-300/90',
      boxBg: 'bg-white border-emerald-200',
      chipBg: 'bg-emerald-200/80 text-emerald-950 border-emerald-300',
      titleColor: 'text-[#064E3B]',
      link: 'https://codethriveinfotech.in'
    },
    {
      id: 'amfstudio',
      name: 'AMF Studio',
      fullName: 'AMF Studio',
      tagline: '4K Cloud Asset Pipeline',
      industry: 'MEDIA',
      metricPill: '5x Faster Video',
      location: 'Bangalore',
      logo: '/clients/amf-studio.png',
      screenshot: '/clients/preview-amf-studio.png',
      description: 'Enterprise video production workflows and cloud proofing.',
      bullets: [
        '4K Media Storage Pipeline',
        'Client Proofing & Reviews',
        'Automated Cloud Transcoding'
      ],
      metrics: '500GB+ daily media transcoding',
      bg: 'bg-[#FFF5F9]',
      darkBg: 'bg-[#2A0B1A]',
      border: 'border-pink-300/90',
      boxBg: 'bg-white border-pink-200',
      chipBg: 'bg-pink-200/80 text-pink-950 border-pink-300',
      titleColor: 'text-[#831843]',
      link: 'https://codethriveinfotech.in'
    }
  ];

  // Auto-Changing Mobile Timer (Advances by 2 so clients do not repeat across steps)
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 2) % clients.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [clients.length]);

  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev + 2) % clients.length);
  };

  const handleMobilePrev = () => {
    setMobileIndex((prev) => (prev - 2 + clients.length) % clients.length);
  };

  // Get unique clients for Mobile 1-Row 2-Column view without repetition (No duplicate Samyuktha)
  const mobileVisibleClients = mobileIndex === 4
    ? [clients[4]]
    : [clients[mobileIndex], clients[mobileIndex + 1]];

  // Helper Card Renderer
  const renderCard = (c, isCompact = false) => {
    const isFlipped = !!flippedCards[c.id];
    return (
      <div
        key={c.id}
        onClick={() => toggleFlip(c.id)}
        className={`perspective-[1000px] ${isCompact ? 'h-[175px] max-w-[175px]' : 'h-[310px]'} cursor-pointer group w-full mx-auto`}
      >
        <div
          className={`relative w-full h-full duration-700 transition-transform [transform-style:preserve-3d] ${
            isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
          }`}
        >
          
          {/* FRONT SIDE */}
          <div
            className={`absolute inset-0 w-full h-full [backface-visibility:hidden] ${c.bg} ${c.border} border ${isCompact ? 'rounded-xl p-1.5' : 'rounded-2xl p-2.5'} shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden`}
          >
            <div className={isCompact ? 'space-y-0.5' : 'space-y-1.5'}>
              
              {/* Top White Logo Box */}
              <div className={`bg-white border border-slate-200/90 ${isCompact ? 'rounded-lg h-11 p-1' : 'rounded-xl h-20 p-1.5'} flex items-center justify-center shadow-xs overflow-hidden`}>
                <img
                  src={c.logo}
                  alt={c.name}
                  className={`${isCompact ? 'h-8 w-[95%] max-h-full object-contain scale-110' : 'h-14 max-h-full max-w-full object-contain'} filter drop-shadow-md group-hover:scale-115 transition-transform duration-300`}
                  onError={(e) => {
                    (e.target).src = '/logo.png';
                  }}
                />
              </div>

              {/* Second Row: Industry Tag + Metric Pill */}
              <div className="flex items-center gap-1 flex-wrap pt-0.5">
                <div className={`px-2 py-0.5 rounded-full text-[8.5px] font-black tracking-wider uppercase border ${c.chipBg}`}>
                  {c.industry}
                </div>

                <div className="px-2 py-0.5 rounded-full text-[8.5px] font-black bg-slate-200/80 text-slate-900 border border-slate-300/80 truncate max-w-[100px] sm:max-w-[120px]">
                  {c.metricPill}
                </div>
              </div>

              {/* Title & Subtitle Tagline */}
              <div className="space-y-0">
                <h3 className={`${isCompact ? 'text-xs' : 'text-base'} font-black font-editorial leading-tight ${c.titleColor}`}>
                  {c.name}
                </h3>
                <div className="text-[9.5px] font-extrabold text-slate-900 leading-tight truncate">
                  {c.tagline}
                </div>
              </div>

              {/* Short Description */}
              <p className="text-[9.5px] font-bold text-slate-700 leading-tight line-clamp-1">
                {c.description}
              </p>

            </div>

            {/* Bullets List with Green Checkmarks */}
            <div className={`pt-1 border-t border-slate-200/60 ${isCompact ? 'space-y-0.5' : 'space-y-1.5'}`}>
              {(c.bullets || []).slice(0, isCompact ? 2 : 3).map((b, idx) => (
                <div key={idx} className="flex items-start gap-1 text-[9.5px] font-extrabold text-slate-900 leading-tight truncate">
                  <span className="text-emerald-600 font-black">✓</span>
                  <span className="truncate">{b}</span>
                </div>
              ))}

              {/* Bottom Bar: Location + Tech Flip */}
              <div className="pt-0.5 flex items-center justify-between text-[9px] font-black border-t border-slate-200/50 text-slate-900">
                <span>{c.location}</span>
                <div className="flex items-center gap-0.5 text-sky-600">
                  <span>Preview</span>
                  <RotateCcw className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-600" />
                </div>
              </div>
            </div>

          </div>

          {/* BACK SIDE (100% Full Uncropped Website Screenshot Display) */}
          <div
            className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] ${c.darkBg} ${c.border} border ${isCompact ? 'rounded-2xl p-2' : 'rounded-3xl p-3'} shadow-2xl flex flex-col justify-between text-white overflow-hidden`}
          >
            <div className="space-y-1">
              
              {/* Browser Frame Showcase Container */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-slate-950 flex flex-col">
                
                {/* Top Browser Window Controls */}
                <div className="bg-slate-900 px-2 py-0.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedScreenshot(c);
                    }}
                    className="flex items-center gap-1 text-[8px] font-bold text-sky-400 hover:text-sky-300 transition"
                  >
                    <span>Full View</span>
                    <Maximize2 className="w-2.5 h-2.5" />
                  </button>
                </div>

                {/* 100% Uncropped Full Image View Container */}
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedScreenshot(c);
                  }}
                  className={`relative ${isCompact ? 'h-18' : 'h-42'} w-full overflow-hidden bg-slate-950 flex items-center justify-center p-1 group/img`}
                >
                  <img
                    src={c.screenshot}
                    alt={`${c.fullName} Website Screenshot`}
                    className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target).src = '/codethrive-hero.png';
                    }}
                  />

                  {/* Full View Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-2 py-0.5 rounded-full bg-sky-500 text-white text-[8.5px] font-bold flex items-center gap-1 shadow-lg">
                      <Maximize2 className="w-2.5 h-2.5" />
                      <span>View Full</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Title & Description */}
              <div className="space-y-0.5 px-1">
                <h4 className="text-[10.5px] sm:text-xs font-black font-editorial text-white leading-tight truncate">
                  {c.fullName}
                </h4>
                <p className="text-[9px] sm:text-[10px] text-slate-300 font-semibold leading-tight line-clamp-1">
                  {c.description}
                </p>
              </div>

            </div>

            {/* Bottom Metric */}
            <div className="pt-0.5 border-t border-slate-800/80 flex items-center justify-between gap-1 px-1">
              <span className="text-[8.5px] sm:text-[9.5px] font-black text-sky-400 leading-tight truncate">
                {c.metrics}
              </span>
            </div>

          </div>

        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white text-[#050B14] relative overflow-hidden select-none">
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Top Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-black tracking-widest uppercase border border-slate-200 shadow-xs mb-2">
            OUR CLIENTS
          </div>

          <h2 className="font-editorial text-3xl sm:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-1 sm:mb-2">
            Our Clients
          </h2>

          <p className="text-slate-600 text-xs sm:text-base font-semibold max-w-xl mx-auto">
            Trusted by forward-thinking organizations across multiple industries.
          </p>
        </div>

        {/* 1. MOBILE VIEW: Exactly 1 Row, 2 Columns with Auto Rotation */}
        <div className="block sm:hidden space-y-3">
          
          {/* Top Hint Bar */}
          <div className="flex items-center justify-end px-1">
            <div className="text-[9px] font-bold text-slate-400">
              Tap card to flip screenshot
            </div>
          </div>

          {/* 1 Row 2 Column Grid Container (Consistently sized max-w-[190px] cards) */}
          <div className={`grid gap-2 mx-auto ${mobileVisibleClients.length === 1 ? 'grid-cols-1 max-w-[190px]' : 'grid-cols-2 max-w-[390px]'}`}>
            {mobileVisibleClients.map((c) => renderCard(c, true))}
          </div>

          {/* Centered Manual Arrow Buttons & Pagination Dots Bar */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <button
              onClick={handleMobilePrev}
              className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md active:scale-95 transition"
              title="Previous Client"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots (3 Slides) */}
            <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-3.5 py-1 rounded-full">
              {[0, 2, 4].map((pairIndex, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(pairIndex)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    mobileIndex === pairIndex
                      ? 'bg-sky-600 w-4'
                      : 'bg-slate-300 w-1.5'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleMobileNext}
              className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md active:scale-95 transition"
              title="Next Client"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* 2. DESKTOP & TABLET VIEW: All 5 Cards Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
          {clients.map((c) => renderCard(c, false))}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX POPUP MODAL FOR 100% UN-CROPPED FULL RESOLUTION SCREENSHOT */}
      {selectedScreenshot && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg sm:text-xl font-black font-editorial text-white">
                  {selectedScreenshot.fullName}
                </h3>
                <p className="text-xs text-sky-400 font-bold">
                  {selectedScreenshot.metrics}
                </p>
              </div>
              
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 100% Full Un-cropped Image View */}
            <div className="py-4 my-auto overflow-y-auto max-h-[70vh] flex items-center justify-center bg-slate-950 rounded-2xl border border-slate-800 p-2">
              <img
                src={selectedScreenshot.screenshot}
                alt={`${selectedScreenshot.fullName} Full Screenshot`}
                className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Modal Footer Link */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">
                Click anywhere outside or X to close
              </span>
              <a
                href={selectedScreenshot.link || 'https://codethriveinfotech.in'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-md"
              >
                <span>Visit Live Client Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default ClientsSection;
