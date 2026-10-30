import React, { useState, useRef } from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Building2, 
  Fingerprint, 
  Crown,
  MapPin, 
  Users, 
  Zap,
  Activity,
  CheckCircle2,
  FileText,
  Scale,
  TrendingUp
} from 'lucide-react';

// --- DATA ---
const advantageCards = [
  { 
    id: "01",
    icon: UserCheck, 
    title: "Face-to-Face Accountability", 
    desc: "Algorithms don't have empathy. Speak to real professionals who value long-term relationships over quick transactions." 
  },
  { 
    id: "02",
    icon: Building2, 
    title: "Institutional Standards", 
    desc: "We operate as a registered Private Limited company with strict internal audits, KYC protocols, and compliance standards." 
  },
  { 
    id: "03",
    icon: Fingerprint, 
    title: "Complete Lifecycle Support", 
    desc: "We don't just sell you crypto. From your first purchase to tax filing and portfolio rebalancing, we are with you." 
  }
];

const steps = [
  { 
    id: "01", 
    icon: MapPin, 
    title: "Visit Store", 
    desc: "Walk into our Divine Nagar office. No appointment needed.",
    status: "Start"
  },
  { 
    id: "02", 
    icon: Users, 
    title: "Consultation", 
    desc: "Define your buying or selling needs with our experts.",
    status: "Planning"
  },
  { 
    id: "03", 
    icon: ShieldCheck, 
    title: "Verification", 
    desc: "Quick, secure KYC check to ensure compliance.",
    status: "Security"
  },
  { 
    id: "04", 
    icon: Zap, 
    title: "Execution", 
    desc: "Instant transaction & settlement with zero hidden fees.",
    status: "Done"
  }
];

const About = () => {
  // State for Mobile Carousel Indicators
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Handle scroll to update active dot
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden ">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[10%] right-0 w-[600px] h-[600px] bg-[#FE601F]/5 blur-[120px] rounded-full"></div>
         <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FE601F]/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col gap-32">

            {/* =========================================
                PART 1: WHO WE ARE
               ========================================= */}
            <div>
                {/* Header Section */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FE601F] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(254,96,31,0.2)]">
                    <Building2 size={14} />
                    Who We Are
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE601F] via-[#ff8c5a] to-[#ffa07a]">KryptX Solutions</span>
                  </h2>
                </div>

                {/* --- CORPORATE DASHBOARD CARD --- */}
                <div className="relative rounded-[40px] bg-[#0a0a0a] group shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  
                  {/* Smooth Border Overlay */}
                  <div className="absolute inset-0 rounded-[40px] border border-white/10 pointer-events-none z-20 transition-colors duration-500 group-hover:border-[#FE601F]/50"></div>
                  
                  {/* Soft Inner Glow */}
                  <div className="absolute inset-0 rounded-[40px] bg-[#FE601F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
                    
                    {/* LEFT COLUMN: THE STORY (7 Cols) */}
                    <div className="lg:col-span-7 p-8 md:p-12 lg:border-r border-white/5 flex flex-col justify-center">
                       
                       {/* Identity Tag */}
                       <div className="flex flex-wrap gap-3 mb-8">
                         {/* Green Tag */}
                         <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 cursor-default">
                             <CheckCircle2 size={14} className="text-green-500" />
                             <span className="text-xs font-bold text-green-500 tracking-wide uppercase">Govt. Registered Entity</span>
                         </div>
                         {/* Blue Tag */}
                         <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-default">
                             <FileText size={14} className="text-blue-500" />
                             <span className="text-xs font-bold text-blue-500 tracking-wide uppercase">Licensed & Compliant</span>
                         </div>
                       </div>

                       <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                         Structured. Compliant.<br />
                         <span className="text-gray-400">Built for the Digital Future.</span>
                       </h3>
                       
                       <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                         <p>
                           <strong className="text-[#FE601F] group-hover:text-[#ff8c5a] transition-colors duration-300">KryptX Solutions Private Limited</strong> is dedicated to secure and compliance-oriented crypto services. We operate with a strict focus on <span className="text-white">transparency, internal controls, and risk management.</span>
                         </p>
                         <p>
                           Our services include crypto buy and sell facilitation, professional consulting, tax assistance, educational support, crypto forensics, and an escrow settlement platform launching soon, designed to ensure you can participate in the digital asset market safely and responsibly.
                         </p>
                       </div>
                    </div>

                    {/* RIGHT COLUMN: THE PILLARS (5 Cols) */}
                    <div className="lg:col-span-5 bg-[#111]/40 p-8 md:p-12 flex flex-col justify-center gap-4">
                       
                       <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                         <ShieldCheck size={20} className="text-[#FE601F]" />
                         Operational Focus
                       </h4>

                       {/* Pillar 1 */}
                       <div className="p-5 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-[#FE601F]/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group/card">
                         <div className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-lg bg-[#FE601F]/10 flex items-center justify-center text-[#FE601F] flex-shrink-0 group-hover/card:bg-[#FE601F]/20 transition-all">
                             <Scale size={20} />
                           </div>
                           <div>
                             <h5 className="text-white font-semibold text-base mb-1 group-hover/card:text-[#FE601F] transition-colors">Regulatory Alignment</h5>
                             <p className="text-xs text-gray-500 leading-relaxed group-hover/card:text-gray-400 transition-colors">Strict adherence to Indian government rules and KYC verification standards.</p>
                           </div>
                         </div>
                       </div>

                       {/* Pillar 2 */}
                       <div className="p-5 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group/card">
                         <div className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 flex-shrink-0 group-hover/card:bg-purple-500/20 transition-all">
                             <TrendingUp size={20} />
                           </div>
                           <div>
                             <h5 className="text-white font-semibold text-base mb-1 group-hover/card:text-purple-400 transition-colors">Prudent Growth</h5>
                             <p className="text-xs text-gray-500 leading-relaxed group-hover/card:text-gray-400 transition-colors">Focusing on long-term safety and building real investor confidence.</p>
                           </div>
                         </div>
                       </div>

                       {/* Service Tags */}
                       <div className="pt-4 flex flex-wrap gap-2">
                          {['Buy & Sell', 'Tax Assistance', 'Consulting', 'Learn', 'Escrow', 'Forensics'].map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] uppercase font-bold text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all cursor-default">
                              {tag}
                            </span>
                          ))}
                       </div>

                    </div>

                  </div>
                </div>
            </div>

            {/* =========================================
                PART 2: THE ADVANTAGE
               ========================================= */}
            <div>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FE601F] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                    <Crown size={14} />
                    Why Choose Us
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE601F] to-[#ff9d3a]">KryptX Advantage</span>
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    In a world of faceless apps, we bring trust back to the equation. Experience the security of a physical store.
                  </p>
                </div>

                <div className="relative">
                  <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="
                      flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 
                      pb-12 pt-10 -mx-6 px-6 
                      md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:mx-0 md:px-0 md:py-0
                      [&::-webkit-scrollbar]:hidden
                    "
                  >
                    {advantageCards.map((card, idx) => (
                      <div 
                        key={idx} 
                        className="
                          group relative p-8 rounded-[32px] bg-[#0a0a0a] border border-white/5 hover:border-[#FE601F]/40 transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col
                          min-w-[85%] sm:min-w-[400px] md:min-w-0 snap-center shadow-lg
                        "
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FE601F]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -right-4 -top-4 text-[120px] font-bold text-white/5 leading-none select-none group-hover:text-[#FE601F]/10 transition-colors duration-500 font-mono">
                          {card.id}
                        </div>
                        <div className="relative z-10 flex flex-col h-full">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[#FE601F]/30 transition-all duration-500 shadow-lg">
                            <card.icon size={32} className="text-[#FE601F] drop-shadow-[0_0_10px_rgba(254,96,31,0.3)]" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FE601F] transition-colors duration-300">{card.title}</h3>
                          <p className="text-gray-400 leading-relaxed text-base border-t border-white/5 pt-6 mt-auto group-hover:border-white/10 transition-colors">{card.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex md:hidden justify-center items-center gap-2 -mt-4 mb-4">
                    {advantageCards.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`
                          h-1.5 rounded-full transition-all duration-300
                          ${activeIndex === idx ? 'w-8 bg-[#FE601F]' : 'w-2 bg-white/20'}
                        `}
                      />
                    ))}
                  </div>
                </div>
            </div>

            {/* =========================================
                PART 3: THE PROCESS (UPDATED FOR MOBILE ALIGNMENT)
               ========================================= */}
            <div id="process">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FE601F] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                    <Activity size={14} />
                    How It Works
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                    Streamlined <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE601F] to-[#ff9d3a]">Execution</span>
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Simple. Secure. Fast. From initial consultation to final execution in 4 seamless steps.
                  </p>
                </div>

                {/* PROCESS TRACK */}
                <div className="relative max-w-6xl mx-auto">
                  
                  {/* MAIN TRACK LINE (Desktop) */}
                  <div className="hidden md:block absolute top-[28px] left-0 w-full h-1 bg-[#1a1a1a] rounded-full">
                    <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-[#FE601F] to-[#4c1d95]/50 rounded-full"></div>
                  </div>

                  {/* MAIN TRACK LINE (Mobile - FIXED) 
                      - Added `-translate-x-1/2` to perfectly center the line on `left-[28px]`
                  */}
                  <div className="md:hidden absolute left-[28px] -translate-x-1/2 top-0 bottom-0 w-1 bg-[#1a1a1a] rounded-full">
                     <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-[#FE601F] to-[#4c1d95]/50 rounded-full"></div>
                  </div>

                  {/* STEPS GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
                    {steps.map((step, idx) => (
                      <div key={idx} className="group relative pl-20 md:pl-0 pt-0 md:pt-16">
                        
                        {/* ICON CHECKPOINT (FIXED) 
                            - Mobile: Changed `top-0` to `top-10` to align icon with card content better.
                            - Kept desktop positioning intact.
                        */}
                        <div className="absolute left-[28px] top-10 md:left-1/2 md:top-[28px] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#050505] border-4 border-[#FE601F] flex items-center justify-center z-20 shadow-[0_0_20px_rgba(254,96,31,0.4)] transition-transform duration-300 group-hover:scale-110">
                          <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center">
                            <step.icon size={20} className="text-white group-hover:text-[#FE601F] transition-colors duration-300" />
                          </div>
                          
                          {/* Vertical Connector (Desktop) */}
                          <div className="md:block hidden absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#FE601F] to-white/10 -translate-x-1/2"></div>
                          {/* Horizontal Connector (Mobile) */}
                          <div className="md:hidden block absolute left-full top-1/2 h-0.5 w-8 bg-gradient-to-r from-[#FE601F] to-white/10 -translate-y-1/2"></div>
                        </div>

                        {/* TEXT CARD */}
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 text-left md:text-center hover:border-[#FE601F]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] h-full relative overflow-hidden">
                          
                          {/* PROCESS NUMBER */}
                          <div className="absolute -right-2 -top-2 text-7xl font-bold text-white/5 leading-none select-none group-hover:text-[#FE601F]/10 transition-colors duration-500 font-mono">
                            {step.id}
                          </div>

                          <div className="inline-flex md:mx-auto mb-3 items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FE601F]/10 border border-[#FE601F]/20 text-[10px] font-bold uppercase text-[#FE601F] relative z-10">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FE601F] animate-pulse"></div>
                            {step.status}
                          </div>

                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FE601F] transition-colors relative z-10">
                            {step.title}
                          </h3>
                          
                          <p className="text-sm text-gray-400 leading-snug relative z-10">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;