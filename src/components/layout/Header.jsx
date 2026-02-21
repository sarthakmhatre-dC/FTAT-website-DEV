import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header className="w-full bg-[#F4F4F2] font-sans">
      {/* 1. Top Row: Logo & Action Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/home" className="flex-shrink-0">
            <img 
              src="/logos/Facilities.png" 
              alt="Facilities Tours and Travels" 
              className="h-8 md:h-12 w-auto object-contain"
            />
          </Link>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/contact"
              className="text-[11px] font-bold uppercase tracking-widest px-6 py-2.5 bg-[#3E4D86] text-white hover:bg-[#2D2D2D] transition-all rounded-full shadow-sm"
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
            className="md:hidden p-2 text-[#3E4D86]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 2. Navbar Row (Desktop) */}
      <nav className="hidden md:block w-full bg-[#EDA749] shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center gap-2 py-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-white font-bold text-[12px] uppercase tracking-widest px-5 py-4 transition-all duration-300 hover:bg-black/10 flex items-center"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Resources Dropdown */}
            <li 
              className="relative group"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button className="text-white font-bold text-[12px] uppercase tracking-widest px-5 py-4 transition-all duration-300 hover:bg-black/10 flex items-center gap-1 outline-none">
                Resources <ChevronDown size={14} className={`transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full left-0 w-60 bg-white shadow-2xl border-t-4 border-[#3E4D86] transition-all duration-300 origin-top ${isResourcesOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
                {resourceItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className="block px-6 py-3.5 text-[11px] font-bold text-[#2D2D2D] uppercase tracking-wider hover:bg-[#F4F4F2] hover:text-[#3E4D86] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* 3. Mobile Menu (Overlay) */}
      <div className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} className="text-gray-800" />
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-[#3E4D86] uppercase tracking-tighter"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-px w-20 bg-gray-200" />
            
            {resourceItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-500 uppercase tracking-widest"
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-8 flex flex-col gap-4 w-full px-12">
              <Link 
                to="/contact" 
                className="w-full py-4 bg-[#3E4D86] text-white text-center rounded-xl font-bold uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <a 
                href="https://wa.me/9321685221" 
                className="w-full py-4 bg-[#25D366] text-white text-center rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={20} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;