import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import LegalPage from './components/LegalPage';
import CookieBanner from './components/CookieBanner';

const LEGAL_ROUTES = ['privacy-policy', 'terms', 'cookies', 'kyc-aml'];
const HOME_TITLE = 'KryptX Solutions | VDA Services in Kerala, India';
const PAGE_TITLES = {
  'privacy-policy': 'Privacy Policy | KryptX Solutions',
  terms: 'Terms of Service | KryptX Solutions',
  cookies: 'Cookie Policy | KryptX Solutions',
  'kyc-aml': 'KYC & AML Policy | KryptX Solutions',
};
const getRoute = () => {
  if (typeof window === 'undefined') return null;
  const h = window.location.hash.replace('#', '');
  return LEGAL_ROUTES.includes(h) ? h : null;
};

const App = () => {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Legal pages open at the top; returning home scrolls to the requested section
  useEffect(() => {
    document.title = route ? PAGE_TITLES[route] : HOME_TITLE;
    if (route) {
      window.scrollTo(0, 0);
    } else {
      const id = window.location.hash.replace('#', '');
      const el = id ? document.getElementById(id) : null;
      if (el) setTimeout(() => el.scrollIntoView(), 0);
      else window.scrollTo(0, 0);
    }
  }, [route]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden relative">
      
      {/* Global CSS for Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(40px, -40px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes floatCard { 
          0%, 100% { transform: translateY(0) rotate(0deg); } 
          50% { transform: translateY(-25px) rotate(-2deg); } 
        }
        @keyframes floatCardBack {
          0%, 100% { transform: rotate(8deg) scale(0.92) translateY(0); }
          50% { transform: rotate(6deg) scale(0.92) translateY(-15px); }
        }
        .animate-float { animation: float 10s infinite ease-in-out; }
        .animate-float-card { animation: floatCard 6s ease-in-out infinite; }
        .animate-float-card-back { animation: floatCardBack 7s ease-in-out infinite; }
      `}</style>

      {/* Background Mesh (Global) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[700px] h-[700px] bg-[#2B1B47] rounded-full blur-[120px] opacity-30 animate-float"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#FE601F] rounded-full blur-[120px] opacity-15 animate-float" style={{animationDelay: '-5s'}}></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[100px] opacity-20"></div>
      </div>

      {route ? (
        <>
          <LegalPage docId={route} />
          <Footer />
        </>
      ) : (
        <>
          <a href="#services" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-full focus:bg-[#FE601F] focus:text-white">Skip to services</a>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}

      <CookieBanner />
    </div>
  );
};

export default App;