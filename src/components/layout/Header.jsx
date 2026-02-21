import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // 1. Updated Navigation Links from image_646b7b
  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Car Package Services', href: '/fleet' },
    { name: 'Tarrif Rate', href: '/rates' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Terms & Condition', href: '/terms' },
    { name: 'Corporate Cab', href: '/corporate' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Enquiry', href: '/enquiry' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="w-full bg-[#F4F4F2]">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* Top Row: Logo and Brand Info (Revised as per image_6467b9) */}
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

      {/* 2. Updated Navbar Row - Using Spicy Mustard (#EDA749) */}
      <nav className="w-full bg-[#EDA749] shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap items-center justify-center md:justify-between py-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-white font-bold text-[13px] uppercase tracking-wide px-3 py-2 transition-all duration-200 hover:bg-white/20 rounded-md"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;