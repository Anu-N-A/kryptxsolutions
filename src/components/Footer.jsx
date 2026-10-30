import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { COMPANY } from './legalContent';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- MAIN GRID LAYOUT --- */}
        {/* We use a 12-column grid for better control over spacing than standard 3-column */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* 1. BRAND & SOCIALS (Takes up 5/12 columns on large screens) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="KryptX Logo" className="h-8 w-auto object-contain" />
            </div>
            
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Empowering businesses with secure, compliant, and transparent blockchain solutions. 
              We build the trust infrastructure for the decentralized future.
            </p>
            
            {/* Social Icons Container */}
            <div className="flex gap-4 mt-2">
              <a 
                href="https://www.instagram.com/kryptx_solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FE601F] hover:text-white hover:border-[#FE601F] transition-all duration-300 shadow-lg shadow-transparent hover:shadow-orange-500/20"
              >
                <Instagram size={20} />
              </a>

              {[Twitter, Linkedin, Facebook].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FE601F] hover:text-white hover:border-[#FE601F] transition-all duration-300 shadow-lg shadow-transparent hover:shadow-orange-500/20"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS (Takes up 3/12 columns) */}
          <div className="md:col-span-5 lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Our Services', 'About Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`} 
                    className="text-gray-400 hover:text-[#FE601F] text-sm transition-all duration-300 flex items-center gap-2 group w-fit"
                  >
                    <ChevronRight size={14} className="text-[#FE601F]/50 group-hover:text-[#FE601F] group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT INFO (Takes up 4/12 columns) */}
          <div className="md:col-span-7 lg:col-span-4">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Get in Touch</h4>
            <ul className="space-y-6">
              {/* Address */}
              <li className="flex items-start gap-4 text-gray-400 text-sm group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-[#FE601F] group-hover:bg-[#FE601F] group-hover:text-white transition-colors duration-300">
                  <MapPin size={18} />
                </div>
                <span className="mt-2 leading-relaxed">
                  Divine Nagar, Muringoor,<br />
                  Chalakudy, Thrissur,<br />
                  Kerala – 680309
                </span>
              </li>

              {/* Email */}
              <li className="flex items-start gap-4 text-gray-400 text-sm group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-[#FE601F] group-hover:bg-[#FE601F] group-hover:text-white transition-colors duration-300">
                  <Mail size={18} />
                </div>
                <a href="mailto:kryptxsolutions@gmail.com" className="mt-2.5 hover:text-white transition-colors">
                  kryptxsolutions@gmail.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-4 text-gray-400 text-sm group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-[#FE601F] group-hover:bg-[#FE601F] group-hover:text-white transition-colors duration-300">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <a href="tel:+918921237435" className="hover:text-white transition-colors py-1">
                    +91 89212 37435
                  </a>
                  <a href="tel:+919645244272" className="hover:text-white transition-colors">
                    +91 96452 44272
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} KryptX Solutions Pvt Ltd. All Rights Reserved.</p>
            {(COMPANY.cin || COMPANY.fiuIndRegistration) && (
              <p className="mt-1 text-xs text-gray-600">
                {COMPANY.cin && <>CIN: {COMPANY.cin}</>}
                {COMPANY.cin && COMPANY.fiuIndRegistration && ' | '}
                {COMPANY.fiuIndRegistration && <>FIU-IND Registration: {COMPANY.fiuIndRegistration}</>}
              </p>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
            <a href="#privacy-policy" className="text-gray-500 hover:text-[#FE601F] transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-500 hover:text-[#FE601F] transition-colors">Terms</a>
            <a href="#cookies" className="text-gray-500 hover:text-[#FE601F] transition-colors">Cookies</a>
            <a href="#kyc-aml" className="text-gray-500 hover:text-[#FE601F] transition-colors">KYC &amp; AML</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;