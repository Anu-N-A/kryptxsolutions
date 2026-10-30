import React, { useState, useEffect } from 'react';
import { 
  ArrowLeftRight, 
  FileSpreadsheet, 
  BrainCircuit, 
  ShieldCheck, 
  GraduationCap, 
  Sparkles, 
  UserCheck, 
  TrendingUp, 
  TrendingDown,
  CheckCircle2,
  Target,
  Award,
  PieChart,
  Scale,
  ChevronDown,
  ChevronUp,
  Handshake,
  FileCode2,
  Lock,
  Hourglass,
  ScanSearch,
  Search
} from 'lucide-react';

const Services = () => {
  // --- STATE ---
  const [cryptoData, setCryptoData] = useState([
    { symbol: 'BTC', price: 'Loading...', change: 0, image: '' },
    { symbol: 'ETH', price: 'Loading...', change: 0, image: '' },
    { symbol: 'SOL', price: 'Loading...', change: 0, image: '' },
    { symbol: 'USDT', price: 'Loading...', change: 0, image: '' },
  ]);

  // Accordion State (Mobile Only) 
  // SET TO 'buysell' TO OPEN FIRST ITEM BY DEFAULT
  const [openSection, setOpenSection] = useState('buysell');

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // --- FETCH LIVE DATA ---
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,solana,binancecoin,ripple,cardano,dogecoin&order=market_cap_desc'
        );
        const data = await response.json();
        const formattedData = data.map(coin => ({
          id: coin.id,
          symbol: coin.symbol.toUpperCase(),
          price: `$${coin.current_price.toLocaleString()}`,
          change: coin.price_change_percentage_24h.toFixed(2),
          isPositive: coin.price_change_percentage_24h >= 0,
          image: coin.image
        }));
        setCryptoData(formattedData);
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
      }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = [...cryptoData, ...cryptoData, ...cryptoData];

  // --- STYLES ---
  const styles = {
    // Desktop Card Style
    card: "group relative bg-[#0a0a0a] rounded-[32px] border border-white/5 p-8 overflow-hidden hover:border-[#FE601F]/30 transition-all duration-500 flex flex-col justify-between",
    iconWrapper: "w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform duration-500 flex-shrink-0",
    heading: "text-2xl font-bold text-white mb-3",
    paragraph: "text-base text-gray-400 leading-relaxed mb-6",
    featureCard: "p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/20 transition-colors",
    listText: "text-sm text-gray-400 group-hover:text-gray-300 transition-colors",
    
    // Mobile Accordion Styles
    accordionItem: "bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300",
    accordionHeader: "w-full flex items-center justify-between p-5 text-left",
    accordionContent: "px-5 pb-5 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2",
  };

  return (
    <section id="services" className="py-8 px-6 relative overflow-hidden">

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-[#FE601F]/5 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- LIVE MARKET TICKER --- */}
        <div className="mb-24 relative">
          <div className="absolute -top-3 left-6 z-20 px-3 py-1 bg-[#FE601F] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(254,96,31,0.4)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            Live Market
          </div>
          <div 
            className="w-full overflow-hidden bg-white/5 border-y border-white/10 backdrop-blur-md py-4 relative"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <div className="flex w-max animate-scroll">
              {tickerItems.map((coin, index) => (
                <div key={`${coin.symbol}-${index}`} className="flex items-center gap-3 px-8 border-r border-white/5 min-w-[200px]">
                  {coin.image ? (
                    <img src={coin.image} alt={coin.symbol} className="w-6 h-6 rounded-full object-cover" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-white/10 animate-pulse"></div>
                  )}
                  <span className="font-bold text-gray-400 text-sm">{coin.symbol}</span>
                  <span className="font-mono text-white font-medium">{coin.price}</span>
                  <span className={`text-xs font-bold flex items-center gap-1 ${coin.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                    {coin.isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {Math.abs(coin.change)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-10 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 text-[#FE601F] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            Comprehensive Solutions
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE601F] to-[#ff9d3a]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A structured ecosystem designed to enable responsible participation in India's digital asset economy.
          </p>
        </div>

        {/* =======================================================
            MOBILE VIEW: NEO-ACCORDION (< 768px)
           ======================================================= */}
        <div className="md:hidden flex flex-col gap-4">
          
          {/* ITEM 1: BUY & SELL (Active by Default) */}
          <div className={`${styles.accordionItem} ${openSection === 'buysell' ? 'border-[#FE601F]/50 shadow-[0_0_20px_rgba(254,96,31,0.15)]' : ''}`}>
            <button onClick={() => toggleSection('buysell')} className={styles.accordionHeader}>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${openSection === 'buysell' ? 'bg-[#FE601F] text-white' : 'bg-white/5 text-gray-400'}`}>
                  <ArrowLeftRight size={20} />
                </div>
                <span className={`text-lg font-bold ${openSection === 'buysell' ? 'text-white' : 'text-gray-400'}`}>Crypto Buy & Sell</span>
              </div>
              {openSection === 'buysell' ? <ChevronUp size={20} className="text-[#FE601F]" /> : <ChevronDown size={20} className="text-gray-600" />}
            </button>
            
            {/* Expanded Content */}
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openSection === 'buysell' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className={styles.accordionContent}>
                  <p className="mb-4">Experience safe, transparent peer-to-peer cryptocurrency transactions at Kerala's first physical crypto store.</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5"><ShieldCheck size={16} className="text-[#FE601F]"/> <span className="text-sm font-semibold text-white">Verified Platforms</span></div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5"><UserCheck size={16} className="text-[#FE601F]"/> <span className="text-sm font-semibold text-white">Face-to-Face</span></div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5"><TrendingUp size={16} className="text-[#FE601F]"/> <span className="text-sm font-semibold text-white">Live Rates</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 2: CONSULTING */}
          <div className={`${styles.accordionItem} ${openSection === 'consulting' ? 'border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : ''}`}>
            <button onClick={() => toggleSection('consulting')} className={styles.accordionHeader}>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${openSection === 'consulting' ? 'bg-purple-500 text-white' : 'bg-white/5 text-gray-400'}`}>
                  <BrainCircuit size={20} />
                </div>
                <span className={`text-lg font-bold ${openSection === 'consulting' ? 'text-white' : 'text-gray-400'}`}>Crypto Consulting</span>
              </div>
              {openSection === 'consulting' ? <ChevronUp size={20} className="text-purple-500" /> : <ChevronDown size={20} className="text-gray-600" />}
            </button>
            
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openSection === 'consulting' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className={styles.accordionContent}>
                  <p className="mb-4">Expert guidance tailored for individuals and businesses. We help you navigate blockchain with data-driven strategies.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 border-l-2 border-purple-500/30 pl-3"><Target size={16} className="text-purple-400"/> <span className="text-sm text-gray-300">Strategic Planning</span></div>
                    <div className="flex items-center gap-3 p-2 border-l-2 border-purple-500/30 pl-3"><ShieldCheck size={16} className="text-purple-400"/> <span className="text-sm text-gray-300">Risk Management</span></div>
                    <div className="flex items-center gap-3 p-2 border-l-2 border-purple-500/30 pl-3"><PieChart size={16} className="text-purple-400"/> <span className="text-sm text-gray-300">Portfolio Analysis</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 3: TAX */}
          <div className={`${styles.accordionItem} ${openSection === 'tax' ? 'border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)]' : ''}`}>
            <button onClick={() => toggleSection('tax')} className={styles.accordionHeader}>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${openSection === 'tax' ? 'bg-emerald-500 text-white' : 'bg-white/5 text-gray-400'}`}>
                  <FileSpreadsheet size={20} />
                </div>
                <span className={`text-lg font-bold ${openSection === 'tax' ? 'text-white' : 'text-gray-400'}`}>Tax Assistance</span>
              </div>
              {openSection === 'tax' ? <ChevronUp size={20} className="text-emerald-500" /> : <ChevronDown size={20} className="text-gray-600" />}
            </button>
            
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openSection === 'tax' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className={styles.accordionContent}>
                  <p className="mb-4">Stay compliant with Indian tax regulations. We help organize transactions and ensure accurate reporting.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold border border-emerald-500/20">Filing Support</span>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold border border-emerald-500/20">Gains Calc</span>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold border border-emerald-500/20">Documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 4: EDUCATION */}
          <div className={`${styles.accordionItem} ${openSection === 'education' ? 'border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]' : ''}`}>
            <button onClick={() => toggleSection('education')} className={styles.accordionHeader}>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${openSection === 'education' ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-400'}`}>
                  <GraduationCap size={20} />
                </div>
                <span className={`text-lg font-bold ${openSection === 'education' ? 'text-white' : 'text-gray-400'}`}>Crypto Education</span>
              </div>
              {openSection === 'education' ? <ChevronUp size={20} className="text-blue-500" /> : <ChevronDown size={20} className="text-gray-600" />}
            </button>
            
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openSection === 'education' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className={styles.accordionContent}>
                  <p className="mb-4">Demystify cryptocurrency with our practical learning modules. Understand blockchain basics and risk management.</p>
                  <div className="space-y-2">
                     <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> <span className="text-sm">Beginner to Advanced</span></div>
                     <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> <span className="text-sm">Security Best Practices</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 5: ESCROW SETTLEMENT (LAUNCHING SOON) */}
          <div className={`${styles.accordionItem} ${openSection === 'escrow' ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]' : ''}`}>
            <button onClick={() => toggleSection('escrow')} className={styles.accordionHeader}>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${openSection === 'escrow' ? 'bg-cyan-500 text-white' : 'bg-white/5 text-gray-400'}`}>
                  <Handshake size={20} />
                </div>
                <div className="flex flex-col items-start">
                  <span className={`text-lg font-bold ${openSection === 'escrow' ? 'text-white' : 'text-gray-400'}`}>Escrow Settlement</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Launching Soon</span>
                </div>
              </div>
              {openSection === 'escrow' ? <ChevronUp size={20} className="text-cyan-500" /> : <ChevronDown size={20} className="text-gray-600" />}
            </button>

            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openSection === 'escrow' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className={styles.accordionContent}>
                  <p className="mb-4">A smart contract platform that holds funds in escrow and releases them only when the agreed conditions are met. Currently in testing.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 border-l-2 border-cyan-500/30 pl-3"><Lock size={16} className="text-cyan-400"/> <span className="text-sm text-gray-300">Funds held by smart contract</span></div>
                    <div className="flex items-center gap-3 p-2 border-l-2 border-cyan-500/30 pl-3"><FileCode2 size={16} className="text-cyan-400"/> <span className="text-sm text-gray-300">Condition-based release</span></div>
                    <div className="flex items-center gap-3 p-2 border-l-2 border-cyan-500/30 pl-3"><Scale size={16} className="text-cyan-400"/> <span className="text-sm text-gray-300">Dispute resolution process</span></div>
                  </div>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold">Request Early Access</a>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 6: CRYPTO FORENSICS */}
          <div className={`${styles.accordionItem} ${openSection === 'forensics' ? 'border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.15)]' : ''}`}>
            <button onClick={() => toggleSection('forensics')} className={styles.accordionHeader}>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${openSection === 'forensics' ? 'bg-rose-500 text-white' : 'bg-white/5 text-gray-400'}`}>
                  <ScanSearch size={20} />
                </div>
                <span className={`text-lg font-bold ${openSection === 'forensics' ? 'text-white' : 'text-gray-400'}`}>Crypto Forensics</span>
              </div>
              {openSection === 'forensics' ? <ChevronUp size={20} className="text-rose-500" /> : <ChevronDown size={20} className="text-gray-600" />}
            </button>

            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openSection === 'forensics' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className={styles.accordionContent}>
                  <p className="mb-4">Blockchain investigation for individuals, businesses and institutions. Every case is assessed individually, so please contact us to discuss yours.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-rose-500/10 text-rose-400 rounded-full text-xs font-bold border border-rose-500/20">Transaction Tracing</span>
                    <span className="px-3 py-1 bg-rose-500/10 text-rose-400 rounded-full text-xs font-bold border border-rose-500/20">Wallet Analysis</span>
                    <span className="px-3 py-1 bg-rose-500/10 text-rose-400 rounded-full text-xs font-bold border border-rose-500/20">Fraud Investigation</span>
                    <span className="px-3 py-1 bg-rose-500/10 text-rose-400 rounded-full text-xs font-bold border border-rose-500/20">Evidence Reports</span>
                  </div>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold">Contact Us</a>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 7: COMING SOON - SIMPLIFIED */}
          <div className="p-5 rounded-2xl border border-dashed border-white/10 bg-white/5 flex items-center gap-4">
             <div className="p-2 rounded-lg bg-white/10 text-orange-500 flex-shrink-0">
               <Sparkles size={20}/>
             </div>
             <h4 className="text-white font-bold text-sm">More Coming Soon</h4>
          </div>

        </div>


        {/* =======================================================
            DESKTOP VIEW: BENTO GRID (Visible on md+)
           ======================================================= */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-fr">
          
          {/* SERVICE 1: CRYPTO BUY & SELL */}
          <div className={`${styles.card} md:col-span-2 flex flex-col justify-between`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#FE601F]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className={`${styles.iconWrapper} bg-[#FE601F]/10 text-[#FE601F] border-[#FE601F]/20`}>
                <ArrowLeftRight size={28} strokeWidth={2} />
              </div>
              
              <h3 className={`${styles.heading} group-hover:text-[#FE601F] transition-colors`}>Crypto Buy & Sell (P2P)</h3>
              <p className={`${styles.paragraph} max-w-lg`}>
                Experience safe, transparent peer-to-peer cryptocurrency transactions at Kerala's first physical crypto store.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-3 mt-auto pt-8">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <ShieldCheck size={20} className="text-[#FE601F]" />
                  <span className="text-sm font-bold text-gray-300">Verified Platforms</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <UserCheck size={20} className="text-[#FE601F]" />
                  <span className="text-sm font-bold text-gray-300">Physical Store Security</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <TrendingUp size={20} className="text-[#FE601F]" />
                  <span className="text-sm font-bold text-gray-300">Live Market Rates</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <CheckCircle2 size={20} className="text-[#FE601F]" />
                  <span className="text-sm font-bold text-gray-300">Instant Settlement</span>
                </div>
            </div>
          </div>

          {/* SERVICE 2: CONSULTING */}
          <div className={`${styles.card} md:row-span-2 flex flex-col hover:border-purple-500/30`}>
             <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10 flex flex-col h-full">
                <div className={`${styles.iconWrapper} bg-purple-500/10 text-purple-500 border-purple-500/20`}>
                  <BrainCircuit size={28} strokeWidth={2} />
                </div>
                
                <h3 className={`${styles.heading} group-hover:text-purple-400 transition-colors`}>Crypto Consulting</h3>
                <p className={styles.paragraph}>
                  Expert guidance tailored for individuals and businesses. We help you navigate blockchain with data-driven strategies.
                </p>

                <div className="mt-auto space-y-3 pt-6">
                   <div className={styles.featureCard}>
                     <div className="flex items-start gap-3">
                       <Target size={18} className="text-purple-400 mt-0.5" />
                       <div><h4 className="text-white font-semibold text-sm mb-1">Strategic Planning</h4><p className="text-xs text-gray-500">Custom investment roadmaps.</p></div>
                     </div>
                   </div>
                   <div className={styles.featureCard}>
                     <div className="flex items-start gap-3">
                       <ShieldCheck size={18} className="text-purple-400 mt-0.5" />
                       <div><h4 className="text-white font-semibold text-sm mb-1">Risk Management</h4><p className="text-xs text-gray-500">Mitigate volatility & scams.</p></div>
                       </div>
                   </div>
                   <div className={styles.featureCard}>
                     <div className="flex items-start gap-3">
                       <PieChart size={18} className="text-purple-400 mt-0.5" />
                       <div><h4 className="text-white font-semibold text-sm mb-1">Portfolio Analysis</h4><p className="text-xs text-gray-500">Diversification strategies.</p></div>
                     </div>
                   </div>
                </div>
             </div>
          </div>

          {/* SERVICE 3: TAX ASSISTANCE */}
          <div className={`${styles.card} hover:border-emerald-500/30`}>
             <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10">
                <div className={`${styles.iconWrapper} bg-emerald-500/10 text-emerald-500 border-emerald-500/20`}>
                  <FileSpreadsheet size={28} strokeWidth={2} />
                </div>
                
                <h3 className={`${styles.heading} group-hover:text-emerald-400 transition-colors`}>Tax Assistance</h3>
                <p className={styles.paragraph}>
                  Stay compliant with Indian tax regulations. We help organize transactions and ensure accurate reporting.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> <span className={styles.listText}>Transaction documentation</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> <span className={styles.listText}>Capital gains calculation</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> <span className={styles.listText}>Filing support</span></div>
                </div>
             </div>
          </div>

          {/* SERVICE 4: EDUCATION */}
          <div className={`${styles.card} hover:border-blue-500/30`}>
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10">
                <div className={`${styles.iconWrapper} bg-blue-500/10 text-blue-500 border-blue-500/20`}>
                  <GraduationCap size={28} strokeWidth={2} />
                </div>
                
                <h3 className={`${styles.heading} group-hover:text-blue-400 transition-colors`}>Crypto Education</h3>
                <p className={styles.paragraph}>
                  Demystify cryptocurrency with our practical learning modules. Understand blockchain basics and risk management.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> <span className={styles.listText}>Beginner to advanced</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> <span className={styles.listText}>Security best practices</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> <span className={styles.listText}>Market fundamentals</span></div>
                </div>
             </div>
          </div>

          {/* SERVICE 5: ESCROW SETTLEMENT (LAUNCHING SOON) */}
          <div className={`${styles.card} md:col-span-2 hover:border-cyan-500/30`}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div className={`${styles.iconWrapper} bg-cyan-500/10 text-cyan-500 border-cyan-500/20`}>
                  <Handshake size={28} strokeWidth={2} />
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-300">
                  <Hourglass size={12} />
                  Launching Soon &middot; In Testing
                </div>
              </div>

              <h3 className={`${styles.heading} group-hover:text-cyan-400 transition-colors`}>Escrow Settlement Platform</h3>
              <p className={`${styles.paragraph} max-w-xl`}>
                A smart contract platform that holds funds in escrow and releases them only when the agreed conditions are met, so both buyer and seller can settle with confidence.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-3 mt-auto pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <Lock size={20} className="text-cyan-500" />
                <span className="text-sm font-bold text-gray-300">Funds Held by Smart Contract</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <FileCode2 size={20} className="text-cyan-500" />
                <span className="text-sm font-bold text-gray-300">Condition-Based Release</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <Scale size={20} className="text-cyan-500" />
                <span className="text-sm font-bold text-gray-300">Dispute Resolution</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <Search size={20} className="text-cyan-500" />
                <span className="text-sm font-bold text-gray-300">Transparent Audit Trail</span>
              </div>
            </div>
            <a href="#contact" className="relative z-10 mt-6 w-fit inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-bold hover:bg-cyan-500/20 transition-colors">Request Early Access</a>
          </div>

          {/* SERVICE 6: CRYPTO FORENSICS */}
          <div className={`${styles.card} hover:border-rose-500/30`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className={`${styles.iconWrapper} bg-rose-500/10 text-rose-500 border-rose-500/20`}>
                <ScanSearch size={28} strokeWidth={2} />
              </div>

              <h3 className={`${styles.heading} group-hover:text-rose-400 transition-colors`}>Crypto Forensics</h3>
              <p className={styles.paragraph}>
                Blockchain investigation for individuals, businesses and institutions. Every case is assessed individually, so contact us to discuss yours.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-500" /> <span className={styles.listText}>Transaction tracing</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-500" /> <span className={styles.listText}>Wallet &amp; address analysis</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-500" /> <span className={styles.listText}>Scam &amp; fraud investigation</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-500" /> <span className={styles.listText}>Documented evidence reports</span></div>
              </div>
            </div>
            <a href="#contact" className="relative z-10 mt-6 w-fit inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm font-bold hover:bg-rose-500/20 transition-colors">Contact Us</a>
          </div>

          {/* TILE 7: COMING SOON */}
          <div className="md:col-span-3 bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] border border-dashed border-white/10 rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:border-white/20 transition-all">
             <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
             <div className="flex items-center gap-6 z-10">
               <div className={`${styles.iconWrapper} mb-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 text-orange-500 border-white/5`}>
                 <Sparkles size={28} strokeWidth={2} />
               </div>
               <div className="text-center md:text-left">
                 <h3 className={styles.heading + " mb-2"}>More Services Coming Soon</h3>
                 <p className={styles.paragraph + " mb-0"}>We're expanding to bring you cutting-edge solutions in DeFi and enterprise crypto services.</p>
               </div>
             </div>
             <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300 z-10">
               <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
               In Development
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;