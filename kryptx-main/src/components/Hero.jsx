import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap,
  Building2
} from 'lucide-react';

const Hero = () => {
  
  // --- ASSETS ---
  const logos = {
    btc: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
    eth: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg",
    usdt: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=029",
    sol: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
    xrp: "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=029",
    bnb: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=029",
    ada: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=029",
    usdc: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
  };

  const innerRing = [logos.eth, logos.sol, logos.bnb, logos.ada, logos.xrp, logos.usdt, logos.usdc, logos.eth];
  const middleRing = [logos.eth, logos.sol, logos.bnb, logos.ada, logos.xrp, logos.usdt, logos.usdc, logos.eth, logos.sol, logos.bnb, logos.ada, logos.xrp];
  const outerRing = [logos.eth, logos.sol, logos.bnb, logos.ada, logos.xrp, logos.usdt, logos.usdc, logos.eth, logos.sol, logos.bnb, logos.ada, logos.xrp, logos.usdt, logos.usdc, logos.eth, logos.sol];

  // --- ORBITAL RING RENDERER ---
  const renderOrbitalRing = (config) => {
    const { radius, count, items, iconSize, speed, direction } = config;
    const elements = [];
    const step = 360 / count;

    for (let i = 0; i < count; i++) {
      const angle = (i * step * Math.PI) / 180;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const currentItem = items[i % items.length];

      elements.push(
        <div key={`icon-${i}-${radius}`} className="absolute" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}>
          <div className="relative rounded-full bg-black/60 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center justify-center border border-white/10 hover:border-[#FE601F]/50 transition-all duration-300" style={{ width: `${iconSize}px`, height: `${iconSize}px` }}>
            <img src={currentItem} alt="" aria-hidden="true" className="object-contain opacity-90" style={{ width: `${iconSize * 0.6}px`, height: `${iconSize * 0.6}px` }} />
          </div>
        </div>
      );
    }

    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute rounded-full border border-dashed border-white/10 opacity-40" style={{ width: radius * 2, height: radius * 2 }} />
        <div className="orbital-ring absolute inset-0" style={{ animation: direction === 'cw' ? `spin-smooth ${speed} linear infinite` : `spin-reverse-smooth ${speed} linear infinite` }}>
          {elements}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      
      {/* --- ANIMATIONS --- */}
      <style>{`
        @keyframes spin-smooth { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes spin-reverse-smooth { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
        @keyframes pulse-gold { 0%, 100% { box-shadow: 0 0 30px rgba(247,147,26,0.1); } 50% { box-shadow: 0 0 60px rgba(247,147,26,0.3); } }
        
        @keyframes radiate-far {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(6.5); opacity: 0; }
        }
        .orbital-ring { will-change: transform; transform: translate3d(0, 0, 0); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; }
      `}</style>

      <section id="home" className="relative z-10 min-h-screen flex items-center pt-32 pb-16 px-6 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* =========================================
              LEFT CONTENT
             ========================================= */}
          <div className="text-center lg:text-left z-20 flex flex-col gap-10">
            
            {/* 1. Live Status Badge */}
            <div className="flex justify-center lg:justify-start">
               <div className="pl-2 pr-4 py-1.5 rounded-full bg-[#FE601F]/10 border border-[#FE601F]/20 backdrop-blur-md flex items-center gap-3 shadow-[0_0_20px_rgba(254,96,31,0.15)] transition-all duration-300 hover:bg-[#FE601F]/20 hover:border-[#FE601F]/50 hover:shadow-[0_0_30px_rgba(254,96,31,0.4)] hover:-translate-y-1 cursor-default">
                 <div className="bg-[#FE601F] rounded-full p-1">
                    <Zap size={12} className="text-white fill-white" />
                 </div>
                 <span className="text-[#FE601F] text-xs font-bold uppercase tracking-wider">
                   Kerala's First Trusted Cryptocurrency Store
                 </span>
               </div>
            </div>

            {/* 2. Impact Typography */}
            <div>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
                  Secure. Physical.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE601F] via-[#FF8F50] to-[#FFB088] drop-shadow-[0_0_30px_rgba(254,96,31,0.3)]">
                    Fully Compliant.
                  </span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                  No more anonymous online risks. Visit our government-registered store for secure crypto trading, instant settlements, and expert tax advice—<span className="text-white font-medium">real people, real trust.</span>
                </p>
            </div>

            {/* 3. Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a href="#contact" className="group px-8 py-4 bg-[#FE601F] text-white rounded-full font-bold shadow-[0_0_40px_rgba(254,96,31,0.4)] hover:shadow-[0_0_60px_rgba(254,96,31,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Visit Our Office
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full text-white font-semibold backdrop-blur-md transition-all flex items-center justify-center gap-2">
                Contact Us
              </a>
            </div>

            {/* 4. TRUST BADGES (Fixed Alignment) */}
            <div className="pt-8 flex justify-center lg:justify-start">
               {/* CHANGED: 
                 'items-center' -> 'items-start md:items-center'
                 This aligns icons to the left on mobile, while keeping them centered vertically on desktop row.
               */}
               <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 px-6 py-4 md:py-2.5 rounded-2xl md:rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors shadow-lg cursor-default">
                  
                  {/* Item 1 */}
                  <div className="flex items-center gap-2">
                     <ShieldCheck size={15} className="text-green-500 flex-shrink-0" />
                     <span className="text-xs font-semibold text-gray-300 tracking-wide">Govt. Registered</span>
                  </div>

                  {/* Divider (Hidden on Mobile) */}
                  <div className="hidden md:block w-px h-3 bg-white/10"></div>

                  {/* Item 2 */}
                  <div className="flex items-center gap-2">
                     <Building2 size={15} className="text-blue-500 flex-shrink-0" />
                     <span className="text-xs font-semibold text-gray-300 tracking-wide">Physical Store</span>
                  </div>

                  {/* Divider (Hidden on Mobile) */}
                  <div className="hidden md:block w-px h-3 bg-white/10"></div>

                  {/* Item 3 */}
                  <div className="flex items-center gap-2">
                     <Zap size={15} className="text-[#FE601F] flex-shrink-0" />
                     <span className="text-xs font-semibold text-gray-300 tracking-wide">Instant Settlements</span>
                  </div>

               </div>
            </div>

          </div>

          {/* =========================================
              RIGHT VISUAL (ORBITAL ANIMATION)
             ========================================= */}
          <div className="relative h-[700px] w-full flex items-center justify-center hidden lg:flex" style={{ perspective: '1000px' }}>
              
              {/* Background Atmosphere */}
              <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-orange-600/10 to-purple-900/10 rounded-full blur-[100px]"></div>

              {/* RINGS */}
              {renderOrbitalRing({ radius: 280, count: 16, items: outerRing, iconSize: 50, speed: '180s', direction: 'cw' })}
              {renderOrbitalRing({ radius: 200, count: 12, items: middleRing, iconSize: 60, speed: '120s', direction: 'ccw' })}
              {renderOrbitalRing({ radius: 120, count: 8, items: innerRing, iconSize: 50, speed: '60s', direction: 'cw' })}

              {/* --- CENTER: FAR-REACHING SMOOTH WAVE --- */}
              <div className="relative z-50 flex items-center justify-center">
                  
                  {/* Wave 1 */}
                  <div className="absolute inset-0 rounded-full blur-md mix-blend-screen" style={{ width: '130px', height: '130px', background: 'radial-gradient(circle, rgba(247,147,26,0) 20%, rgba(247,147,26,0.6) 50%, rgba(247,147,26,0) 70%)', animation: 'radiate-far 5s ease-out infinite' }}></div>
                  {/* Wave 2 */}
                  <div className="absolute inset-0 rounded-full blur-md mix-blend-screen" style={{ width: '130px', height: '130px', background: 'radial-gradient(circle, rgba(247,147,26,0) 20%, rgba(247,147,26,0.5) 50%, rgba(247,147,26,0) 70%)', animation: 'radiate-far 5s ease-out infinite', animationDelay: '1.6s' }}></div>
                  {/* Wave 3 */}
                  <div className="absolute inset-0 rounded-full blur-md mix-blend-screen" style={{ width: '130px', height: '130px', background: 'radial-gradient(circle, rgba(247,147,26,0) 20%, rgba(247,147,26,0.4) 50%, rgba(247,147,26,0) 70%)', animation: 'radiate-far 5s ease-out infinite', animationDelay: '3.2s' }}></div>
                  
                  {/* Solid Core */}
                  <div className="relative w-32 h-32 rounded-full bg-[#0a0a0a] border-2 border-[#F7931A]/50 flex items-center justify-center shadow-[0_0_60px_rgba(247,147,26,0.3)] animate-[pulse-gold_4s_ease-in-out_infinite] z-20">
                    <img src={logos.btc} alt="Bitcoin" className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(247,147,26,0.6)]" />
                  </div>
              </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Hero;