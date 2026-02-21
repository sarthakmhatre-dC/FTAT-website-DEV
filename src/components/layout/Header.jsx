import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle, ArrowUpRight } from 'lucide-react';

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Packages', href: '/packages' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Clients', href: '/clients' },
  ];

  // Simplified Resources Content
  const resourceItems = [
    { name: 'Blogs', href: '/resources/blogs' },
    { name: 'Terms and Conditions', href: '/resources/terms' },
  ];

  return (
    <header className="w-full bg-[#F4F4F2]">
      {/* 1. Top Row: Logo and Brand Info */}
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E23744] rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#2D2D2D]">
              FACILITIES<span className="text-[#E23744]">.</span>
            </span>
          </div>
          
          <div className="hidden md:flex flex-col items-end gap-0">
            <span className="text-[10px] font-bold text-[#2D2D2D] leading-none">Since 1997</span>
            <h2 className="text-xl font-bold tracking-tight text-[#E23744]">
              Facilities Tours and Travels Pvt. Ltd.
            </h2>
            <p className="text-sm italic font-medium text-[#3E4D86] tracking-wide leading-none">
              Top Travels, Best Service!
            </p>
          </div>
        </div>
      </div>

      {/* 2. Simplified Navbar Row */}
      <nav className="w-full bg-[#EDA749] shadow-md relative z-50">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <ul className="flex items-center justify-center lg:justify-between py-1.5">
            
            {/* Nav Links Group */}
            <div className="flex items-center">
              {navLinks.map((link) => (
                <li key={link.name} className="list-none">
                  <Link
                    to={link.href}
                    className="text-white font-bold text-[12px] uppercase tracking-widest px-4 py-3.5 transition-all duration-300 hover:bg-white/10 flex items-center h-full"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* 3. Simplified Resources Dropdown */}
              <li 
                className="list-none relative group h-full"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button className="text-white font-bold text-[12px] uppercase tracking-widest px-4 py-3.5 transition-all duration-300 hover:bg-white/10 flex items-center gap-1 h-full outline-none">
                  Resources <ChevronDown size={14} className={`transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Simplified Dropdown Menu */}
                <div className={`absolute top-full left-0 w-64 bg-white rounded-b-2xl shadow-2xl border-t-4 border-[#E23744] transition-all duration-300 origin-top ${isResourcesOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
                  <div className="py-2">
                    {resourceItems.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.href} 
                        className="block px-6 py-4 text-[11px] font-black text-[#2D2D2D] uppercase tracking-widest hover:bg-[#F4F4F2] hover:text-[#E23744] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  {/* <div className="bg-[#F4F4F2] px-6 py-4 flex justify-between items-center">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Enterprise Support</span>
                    <ArrowUpRight size={14} className="text-gray-300" />
                  </div> */}
                </div>
              </li>
            </div>

            {/* 4. Action Buttons */}
            <div className="flex items-center gap-2 ml-4">
              <Link 
                to="/contact"
                className="text-white font-bold text-[12px] uppercase tracking-widest px-6 py-2.5 bg-[#3E4D86] hover:bg-[#2D2D2D] transition-all rounded-full border border-white/10 shadow-sm"
              >
                Contact Us
              </Link>
              
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all"
              >
                <div className="bg-white rounded-full p-1 group-hover:rotate-12 transition-transform">
                  <MessageCircle size={14} className="text-[#25D366] fill-[#25D366]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest hidden xl:inline">WhatsApp</span>
              </a>
            </div>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;