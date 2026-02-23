import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Globe, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/fleet' },
    { name: 'Packages', href: '/packages' },
    { name: 'Testimonials', href: '/clients' },
    { name: 'Terms & Conditions', href: '/resources/terms' },
  ];

  return (
    <footer className="w-full bg-[#1A1A1A] text-white antialiased">
      {/* 1. Pre-footer CTA */}
      <div className="border-b border-white/5">
        <div className="max-w-8xl mx-auto px-8 lg:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/home" className="opacity-90 hover:opacity-100 transition-opacity">
            <img
              src="/logos/Facilities.png"
              alt="Facilities Tours and Travels"
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert" // Inverts logo for dark background
            />
          </Link>
          
          <div className="flex items-center gap-6">
            <span className="hidden lg:block text-sm  font-medium tracking-wide">Ready to book your next journey?</span>
            <a
              href="https://wa.me/9321685221"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-[#25D366] rounded-full hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300"
            >
              <FaWhatsapp size={20} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Live Support</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Philosophy */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="para-sm font-bold uppercase tracking-[0.3em] text-[#EDA749]">Our Excellence</h3>
            <p className="para-sm text-white leading-relaxed  font-light max-w-sm">
              We establish ourselves as a leader in Ground Transportation 
              Business, through wide network, state of art technology, 
              strict quality assurance processes, highly motivated and 
              experienced manpower, to achieve the larger market share,
              higher revenues, higher profitability and most
            reliable service delivery status thus creating value for our Customers.
            </p>
            <div className="flex gap-5 pt-2">
              <Facebook size={18} className=" hover:text-[#EDA749] cursor-pointer transition-all" />
              <Instagram size={18} className=" hover:text-[#EDA749] cursor-pointer transition-all" />
              <Youtube size={18} className=" hover:text-[#EDA749] cursor-pointer transition-all" />
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-6 justify-center items-center">
            <h3 className="para-sm font-bold uppercase tracking-[0.3em] text-[#EDA749]">Explore</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-sm hover:text-white transition-colors duration-300 font-light flex items-center group"
                  >
                    <span className="h-px w-0 group-hover:w-3 bg-[#EDA749] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Branch Office */}
            <div className="space-y-4">
              <h3 className="para-sm font-bold uppercase tracking-[0.3em] text-[#E23744]">Branch Office</h3>
              <div className="space-y-3 text-sm  font-light">
                <div className="flex gap-3">
                  <MapPin size={16} className="shrink-0 text-[#E23744]" />
                  <span>Airoli, Navi Mumbai - 400708</span>
                </div>
                <div className="flex gap-3">
                  <Phone size={16} className="shrink-0 text-[#E23744]" />
                  <span className="leading-relaxed font-normal ">(022) 2589 5714</span>
                </div>
                <div className="flex gap-3">
                  <Mail size={16} className="shrink-0 text-[#E23744]" />
                  <span className="break-all">facilitiestravels@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Registered Office */}
            <div className="space-y-4">
              <h3 className="para-sm font-bold uppercase tracking-[0.3em] text-[#E23744]">Registered Office</h3>
              <div className="space-y-3 text-sm font-light">
                <div className="flex gap-3">
                  <MapPin size={16} className="shrink-0 text-[#E23744]" />
                  <span>Kolshet Road, Thane (W) - 400607</span>
                </div>
                <div className="flex gap-3">
                  <Phone size={16} className="shrink-0 text-[#E23744]" />
                  <span className="font-normal">(+91) 98209 43077</span>
                </div>
                <div className="flex gap-3">
                  <Globe size={16} className="shrink-0 text-[#E23744]" />
                  <span>www.facilitiestravels.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Copyright Bar */}
      <div className="bg-black/40 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} Facilities Tours & Travels. Crafted for Premium Excellence.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em]">
            <Link to="/resources/terms" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/resources/terms" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;