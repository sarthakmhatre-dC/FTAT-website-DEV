import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Prevent background scrolling and "jumpy" layout
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Packages', href: '/packages' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Clients', href: '/clients' },
  ];

  const resourceItems = [
    { name: 'Blogs', href: '/resources/blogs' },
    { name: 'Terms and Conditions', href: '/resources/terms' },
    { name: 'Tariff Rates', href: '/resources/tariff' },
  ];

  // Logic to check if any resource sub-item (or its subpages like /blogs/:id) is active
  const isResourcePathActive = resourceItems.some(item => 
    location.pathname === item.href || location.pathname.startsWith(`${item.href}/`)
  );

  // Helper function to determine if a general nav link is active
  const isLinkActive = (href) => {
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  return (
    <header className="w-full bg-[#EDA749] lg:bg-[#F4F4F2] font-sans relative z-[100] block">
      {/* 1. Top Row: Logo & Action Buttons */}
      <div className="bg-[#F4F4F2] w-full border-b border-gray-100 lg:border-none">
        <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between py-4">
            <Link to="/home" className="flex-shrink-0">
              <img
                src="/logos/Facilities.png"
                alt="Facilities Tours and Travels"
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="text-[11px] font-bold uppercase tracking-widest px-6 py-2.5 bg-[#3E4D86] text-white hover:bg-[#2D2D2D] transition-all rounded-full shadow-md"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/9321685221"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full hover:shadow-lg transition-all"
              >
                <FaWhatsapp size={18} />
                <span className="text-[11px] font-black uppercase tracking-widest">WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#3E4D86] relative z-[110]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={30} className="text-[#3E4D86]" /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Navbar Row (Desktop) */}
      <nav className="hidden lg:block w-full bg-[#EDA749] shadow-md relative h-14">
        <div className="max-w-8xl mx-auto px-8 lg:px-16 h-full">
          <ul className="flex items-center justify-center h-full">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <li key={link.name} className="h-full relative">
                  <Link
                    to={link.href}
                    className={`text-white font-bold para-sm uppercase tracking-widest px-5 py-4 transition-all duration-300 hover:bg-black/10 flex items-center h-full relative`}
                  >
                    {link.name}
                    {/* Cranberry Active Underline */}
                    {active && (
                      <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#E23744] animate-in fade-in slide-in-from-bottom-1" />
                    )}
                  </Link>
                </li>
              );
            })}

            {/* Resources Dropdown */}
            <li
              className="relative group h-full"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button className={`text-white font-bold para-sm uppercase tracking-widest px-5 py-4 transition-all duration-300 hover:bg-black/10 flex items-center gap-1 outline-none h-full relative`}>
                Resources 
                <ChevronDown size={14} className={`transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                {/* Active Underline for Resources (Active if any sub-item matches) */}
                {isResourcePathActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#E23744]" />
                )}
              </button>

              {/* Invisible Bridge & Dropdown Container */}
              <div
                className={`absolute top-full left-0 w-72 pt-0 transition-all duration-300 origin-top z-[120] ${
                  isResourcesOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
                }`}
              >
                {/* Premium Dropdown Menu */}
                <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-b-2xl border-t-[3px] border-[#E23744] overflow-hidden">
                  <div className="flex flex-col py-2">
                    {resourceItems.map((item) => {
                      const isSubActive = isLinkActive(item.href);
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`px-7 py-4 para-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-between group/item
                            ${isSubActive 
                                ? 'bg-gray-50 text-[#E23744] border-l-4 border-[#E23744]' 
                                : 'text-[#2D2D2D] hover:bg-[#EDA749] hover:text-white border-l-4 border-transparent'
                            }`}
                        >
                          <span>{item.name}</span>
                          {isSubActive && <div className="w-1.5 h-1.5 rounded-full bg-[#E23744]" />}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* 3. Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[105] bg-[#F4F4F2] transition-transform duration-500 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col h-full w-full">
          <div className="h-20" />
          <div className="flex-grow overflow-y-auto px-10 py-10">
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-black uppercase tracking-widest ${
                      active ? 'text-[#E23744]' : 'text-[#3E4D86]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="h-px w-24 bg-[#EDA749]/30" />
              {resourceItems.map((item) => {
                const isSubActive = isLinkActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-bold uppercase tracking-widest ${
                      isSubActive ? 'text-[#E23744]' : 'text-gray-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-8 flex flex-col gap-4 w-full max-w-sm">
                <Link
                  to="/contact"
                  className="w-full py-4 bg-[#3E4D86] text-white text-center rounded-full font-bold uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <a
                  href="https://wa.me/9321685221"
                  className="w-full py-4 bg-[#25D366] text-white text-center rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={22} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;