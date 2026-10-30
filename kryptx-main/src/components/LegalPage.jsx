import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import { LEGAL_DOCS, LAST_UPDATED, COMPANY } from './legalContent';

const TABS = [
  { id: 'privacy-policy', label: 'Privacy Policy' },
  { id: 'terms', label: 'Terms' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'kyc-aml', label: 'KYC & AML' },
];

const LegalPage = ({ docId }) => {
  const doc = LEGAL_DOCS[docId];
  if (!doc) return null;

  return (
    <div className="relative z-10">
      {/* Header */}
      <header className="border-b border-white/5 bg-black/40 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" aria-label="KryptX home">
            <img src={logo} alt="KryptX Logo" className="h-8 w-auto object-contain" />
          </a>
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-[#FE601F] transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Tabs */}
        <nav className="flex flex-wrap gap-2 mb-10" aria-label="Legal pages">
          {TABS.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                t.id === docId
                  ? 'bg-[#FE601F] border-[#FE601F] text-white'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {t.label}
            </a>
          ))}
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">{doc.title}</h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: {LAST_UPDATED}</p>
        <p className="text-gray-400 leading-relaxed mb-10">{doc.intro}</p>

        <div className="space-y-10">
          {doc.sections.map((sec) => (
            <section key={sec.h}>
              <h2 className="text-xl font-bold text-white mb-3">{sec.h}</h2>
              <div className="space-y-3 text-gray-400 leading-relaxed text-[15px]">
                {sec.p.map((item, i) =>
                  typeof item === 'string' ? (
                    <p key={i}>{item}</p>
                  ) : (
                    <ul key={i} className="list-disc pl-6 space-y-2 marker:text-[#FE601F]">
                      {item.list.map((li, j) => <li key={j}>{li}</li>)}
                    </ul>
                  )
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#FE601F] shrink-0"><Mail size={18} /></div>
          <div className="text-sm text-gray-400 leading-relaxed">
            Questions about this document? Write to{' '}
            <a href={`mailto:${COMPANY.email}`} className="text-white hover:text-[#FE601F] transition-colors">{COMPANY.email}</a>.
            {(COMPANY.cin || COMPANY.fiuIndRegistration) && (
              <div className="mt-2 text-gray-500">
                {COMPANY.name}
                {COMPANY.cin && <> &middot; CIN: {COMPANY.cin}</>}
                {COMPANY.fiuIndRegistration && <> &middot; FIU-IND Registration: {COMPANY.fiuIndRegistration}</>}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalPage;
