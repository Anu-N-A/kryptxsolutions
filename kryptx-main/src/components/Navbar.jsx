import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; // Import the logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Ref to detect clicks outside
  const navRef = useRef(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  // --- 1. HANDLE SCROLL ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 150; 
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // --- 2. HANDLE CLICK OUTSIDE ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);


  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); 
    
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const showBackground = scrolled || isMobileMenuOpen;

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${scrolled ? 'py-3' : 'py-6'}`}
    >
      
      {/* --- MAIN NAVBAR WRAPPER --- */}
      <div className="relative w-[90%] md:w-full max-w-6xl z-50">
        
        {/* Background Layer */}
        <div 
          className={`absolute inset-0 rounded-full border border-white/10 transition-opacity duration-300 ease-in-out pointer-events-none
            ${showBackground ? 'opacity-100' : 'opacity-0'}
            bg-[#0f0f0f]/80 backdrop-blur-xl shadow-2xl
          `}
        ></div>

        {/* Content Layer */}
        <div className="relative px-6 py-3 flex justify-between items-center rounded-full">
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer group select-none"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            {/* INCREASED SIZE: Changed h-9 to h-12 */}
            <img 
              src={logo} 
              alt="KryptX Logo" 
              className="h-8 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
            />
          
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full p-1.5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`
                    relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out whitespace-nowrap
                    ${isActive 
                      ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] scale-105' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 transform active:scale-95 whitespace-nowrap"
          >
            Visit Our Office <ArrowRight size={16} />
          </a>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors active:scale-90 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <div 
        className={`
          absolute top-full left-0 right-0 px-6 mt-4 md:hidden z-40
          transform-gpu transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top
          ${isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible scale-100' 
            : 'opacity-0 -translate-y-8 invisible scale-95 pointer-events-none'
          }
        `}
      >
        <div className="bg-[#0f0f0f]/90 border border-white/10 rounded-[24px] p-2 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5 overflow-hidden">
          <div className="flex flex-col">
            {navItems.map((item) => {
               const isActive = activeSection === item.id;
               return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`
                    px-6 py-4 rounded-xl text-base font-medium transition-colors duration-200 text-left
                    ${isActive 
                      ? 'text-[#FE601F] bg-[#FE601F]/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {item.label}
                </a>
               );
            })}
            
            <div className="h-px bg-white/10 my-2 mx-4"></div>
            
            <div className="p-2">
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="flex w-full items-center justify-center gap-2 bg-[#FE601F] text-white px-6 py-4 rounded-xl text-base font-bold active:scale-95 transition-transform shadow-lg shadow-orange-500/20"
              >
                Visit Our Office <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;