import React, { useState } from 'react';
import { Cookie } from 'lucide-react';

const KEY = 'kryptx_cookie_consent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    try { return !window.localStorage.getItem(KEY); } catch { return true; }
  });

  const choose = (value) => {
    try { window.localStorage.setItem(KEY, value); } catch { /* storage unavailable */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div role="dialog" aria-label="Cookie notice" className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[100]">
      <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-[#FE601F]/10 text-[#FE601F] flex items-center justify-center shrink-0"><Cookie size={18} /></div>
          <p className="text-sm text-gray-400 leading-relaxed">
            We use only the cookies and storage needed to run this site, and some embedded third-party content may set its own. See our{' '}
            <a href="#cookies" className="text-white underline underline-offset-2 hover:text-[#FE601F]">Cookie Policy</a> and{' '}
            <a href="#privacy-policy" className="text-white underline underline-offset-2 hover:text-[#FE601F]">Privacy Policy</a>.
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => choose('accepted')} className="flex-1 px-4 py-2.5 rounded-full bg-[#FE601F] text-white text-sm font-bold hover:bg-[#ff7a40] transition-colors">Accept</button>
          <button onClick={() => choose('essential')} className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-bold hover:bg-white/10 transition-colors">Essential only</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
