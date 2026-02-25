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
      {/* 1. Pre-footer CTA - Fixed Top Bar */}
      <div className="border-b border-white/5">
        <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/home" className="opacity-90 hover:opacity-100 transition-opacity shrink-0">
            <img
              src="/logos/Facilities.png"
              alt="Facilities Tours and Travels"
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
            />
          </Link>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
            <span className="para-sm font-medium tracking-wide text-white/60 hidden lg:block italic">Ready to book your next journey?</span>
            <a
              href="https://wa.me/9321685221"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-[#25D366] rounded-full hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <FaWhatsapp size={22} />
              <span className="para-md !text-white !tracking-[0.2em] font-black uppercase">Live Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Content - Restructured for Balance */}
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Group 1: Brand & Explore (Left Side) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-6 md:space-y-8">
              <h3 className="para-md text-[#EDA749] font-black uppercase tracking-[0.3em]">Our Excellence</h3>
              <p className="para-md text-white/80 leading-relaxed font-light">
                We establish ourselves as a leader in Ground Transportation
                Business, through wide network, state of art technology,
                strict quality assurance processes, highly motivated and
                experienced manpower, to achieve the larger market share,
                higher revenues, higher profitability and most
                reliable service delivery status thus creating value for our Customers.
              </p>
              <div className="flex gap-6">
                <Facebook size={22} className="hover:text-[#EDA749] cursor-pointer transition-all hover:-translate-y-1" />
                <Instagram size={22} className="hover:text-[#EDA749] cursor-pointer transition-all hover:-translate-y-1" />
                <Youtube size={22} className="hover:text-[#EDA749] cursor-pointer transition-all hover:-translate-y-1" />
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h3 className="para-md text-[#EDA749] font-black uppercase tracking-[0.3em]">Explore</h3>
              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="para-md text-white/70 hover:text-white transition-colors duration-300 font-light flex items-center group"
                    >
                      <span className="h-px w-0 group-hover:w-4 bg-[#EDA749] mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Group 2: Contact Blocks (Right Side - Grouped to fill space) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8">
            {/* Branch Office */}
            <div className="space-y-6">
              <h3 className="para-md text-[#E23744] font-black uppercase tracking-[0.3em]">Branch Office</h3>
              <div className="space-y-5">
                <div className="flex gap-4 items-start min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#E23744]/10 text-[#E23744] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span className="para-sm md:para-md font-light pt-1 break-words">
                    Airoli, Navi Mumbai - 400708
                  </span>
                </div>
                <div className="flex gap-4 items-center min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#E23744]/10 text-[#E23744] shrink-0">
                    <Phone size={18} />
                  </div>
                  <span className="para-sm md:para-md font-normal pt-1">
                    (022) 2589 5714
                  </span>
                </div>
                <div className="flex gap-4 items-center min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#E23744]/10 text-[#E23744] shrink-0">
                    <Mail size={18} />
                  </div>
                  {/* Email break-all ensures it stays inside padding */}
                  <span className="para-sm md:para-md font-light pt-1 break-all">
                    facilitiestravels@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Registered Office */}
            <div className="space-y-6">
              <h3 className="para-md text-[#E23744] font-black uppercase tracking-[0.3em]">Registered Office</h3>
              <div className="space-y-5">
                <div className="flex gap-4 items-start min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#E23744]/10 text-[#E23744] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span className="para-sm md:para-md font-light pt-1 break-words">
                    Kolshet Road, Thane (W) - 400607
                  </span>
                </div>
                <div className="flex gap-4 items-center min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#E23744]/10 text-[#E23744] shrink-0">
                    <Phone size={18} />
                  </div>
                  <span className="para-sm md:para-md font-normal pt-1">
                    (+91) 98209 43077
                  </span>
                </div>
                <div className="flex gap-4 items-center min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#E23744]/10 text-[#E23744] shrink-0">
                    <Globe size={18} />
                  </div>
                  {/* Website break-all ensures it stays inside padding */}
                  <span className="para-sm md:para-md font-light pt-1 break-all hover:text-[#EDA749] transition-colors cursor-pointer underline underline-offset-4 decoration-[#EDA749]/30">
                    www.facilitiestravels.com
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="bg-black py-10">
        <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="para-sm !tracking-[0.2em] text-white/40 text-center md:text-left font-medium">
            © {currentYear} FACILITIES TOURS & TRAVELS • PREMIUM MOBILITY SOLUTIONS
          </p>
          <div className="flex gap-10">
            <Link to="/resources/terms" className="para-sm !tracking-[0.15em] text-white/30 hover:text-white transition-all uppercase">Privacy Policy</Link>
            <Link to="/resources/terms" className="para-sm !tracking-[0.15em] text-white/30 hover:text-white transition-all uppercase">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;