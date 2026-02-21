import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    'Home', 'About Us', 'Why Us', 'Testimonials', 
    'Services', 'Enquiry', 'Terms', 'Contact'
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200 font-sans antialiased">

      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-10">
        
        {/* 2. Brand Summary (Full Width Top) */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-4">About Facilities Tours & Travels</h2>
          <p className="text-sm text-[#2D2D2D]/80 leading-relaxed max-w-5xl">
            We establish ourselves as a leader in Ground Transportation Business, through wide network, 
            state of art technology, strict quality assurance processes, highly motivated and experienced 
            manpower, to achieve the larger market share, higher revenues, higher profitability and most 
            reliable service delivery status thus creating value for our Customers.
          </p>
        </div>

        {/* 3. Placeholder Logo */}
        <div className="mb-10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#E23744] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-xl font-black text-[#2D2D2D] uppercase tracking-tighter">
              Facilities <span className="text-[#E23744]">Tours & Travels</span>
            </span>
          </div>
        </div>

        {/* 4. Multi-Column Content (Adjusted for Right Alignment and Spacing) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
          
          {/* Column 1: Branch Office (Expanded to 5 columns) */}
          <div className="lg:col-span-5 space-y-4 text-sm border-r border-gray-100 pr-4">
            <h3 className="font-bold uppercase tracking-wider text-[#E23744]">Branch Office</h3>
            <p className="leading-relaxed text-[#2D2D2D]/90">
              Office No. 4, Shree Vihar Apt., Plot No. 48 Sector No. 19, Airoli Navi Mumbai - 400708
            </p>
            <div className="pt-1">
              <p className="font-bold">TELEPHONE: (022) 2589 5714,</p>
              <p>(022) 2589 8871, (022) 2589 8031, (022) 2779 3141</p>
              <p className="font-bold mt-2">MOBILE: (+91) 98209 55077</p>
            </div>
            <div className="text-[#3E4D86] font-medium pt-1">
              <p>Email: facilitiestravels@gmail.com</p>
              <p>Website: www.facilitiestravels.com</p>
            </div>
          </div>

          {/* Column 2: Register Office (Expanded to 5 columns) */}
          <div className="lg:col-span-5 space-y-4 text-sm pr-4">
            <h3 className="font-bold uppercase tracking-wider text-[#E23744]">Register Office</h3>
            <p className="leading-relaxed text-[#2D2D2D]/90">
              Office No. 45, Vardhaman Vatika, Kolshet Road, Opp. D' Mart Thane (w) - 400607
            </p>
            <div className="pt-1">
              <p className="font-bold">TELEPHONE: (022) 2589 5714,</p>
              <p>(022) 2589 8871, (022) 2589 8031, (022) 2779 3141</p>
              <p className="font-bold mt-2">MOBILE: (+91) 92232 08344, (+91) 98209 43077</p>
            </div>
            <div className="text-[#3E4D86] font-medium pt-1">
              <p>Email: facilitiestravels@gmail.com</p>
              <p>Website: www.facilitiestravels.com</p>
            </div>
          </div>

          {/* Column 3: Quick Links (Occupies 2 columns, Right Aligned) */}
          <div className="lg:col-span-2 space-y-4 lg:text-right flex flex-col items-start lg:items-end">
            <h3 className="font-bold uppercase tracking-wider text-[#E23744]">Explore</h3>
            <ul className="space-y-2 text-sm text-[#2D2D2D]/70">
              {quickLinks.map((link) => (
                <li key={link} className="hover:text-[#E23744] cursor-pointer transition-colors block">
                  {link}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 pt-4">
              <Facebook size={18} className="text-[#2D2D2D]/60 hover:text-[#E23744] cursor-pointer transition-all" />
              <Instagram size={18} className="text-[#2D2D2D]/60 hover:text-[#E23744] cursor-pointer transition-all" />
              <Youtube size={18} className="text-[#2D2D2D]/60 hover:text-[#E23744] cursor-pointer transition-all" />
            </div>
          </div>

        </div>

        {/* 5. Copyright Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[11px] text-[#2D2D2D]/60 flex flex-wrap justify-center items-center gap-2">
            <span>© {currentYear} Facilities Tours & Travels. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>Premium Transportation Services</span>
          </div>
          <div className="text-[11px] text-[#3E4D86] font-medium">
            www.facilitiestravels.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;