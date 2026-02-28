import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Globe, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Packages', href: '/packages' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Clients', href: '/clients' },
  ];

  return (
    <footer className="w-full bg-[#1A1A1A] text-white antialiased">
      {/* 1. Pre-footer CTA - (Unchanged) */}
      <div className="border-b border-white/5">
        <div className="max-w-8xl mx-auto px-8 sm:px-10 md:px-16 lg:px-20 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-6">
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
            <Link
              to="/contact"
              className="group flex items-center gap-3 px-8 py-4 bg-[#3E4D86] rounded-full hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Phone size={22} />
              <span className="para-md !text-white !tracking-[0.2em] font-black uppercase">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Content - Optimized Two-Column Layout */}
      <div className="max-w-8xl mx-auto px-8 sm:px-10 md:px-16 lg:px-20 py-6 lg:py-10">

        {/* Full-Width Excellence Section - (Unchanged) */}
        <div className="w-full mb-5 space-y-4 border-b border-white/5 pb-10">
          <h3 className="para-lg text-[#EDA749] font-black uppercase tracking-[0.4em]">Our Excellence</h3>
          <p className="para-lg text-white/80 leading-relaxed tracking-wide font-light max-w-6xl text-justify md:text-left">
            We establish ourselves as a leader in Ground Transportation Business, through wide network,
            state of art technology, strict quality assurance processes, highly motivated and experienced
            manpower, to achieve the larger market share, higher revenues, higher profitability and most
            reliable service delivery status thus creating value for our Customers.
          </p>
          <div className="flex gap-8">
            <a
              href="https://www.facebook.com/facilitiestourandtravels/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EDA749] transition-all hover:-translate-y-1"
            >
              <Facebook size={24} className="cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com/facilities_tours_and_travels/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EDA749] transition-all hover:-translate-y-1"
            >
              <Instagram size={24} className="cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Strategic Grid Split: Left (Logistics) | Right (Navigation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* LEFT SIDE: Office Locations & Unified Contacts (8 Columns) */}
          <div className="lg:col-span-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Column 1: Registered Office Address */}
              <div className="space-y-5">
                <h3 className="para-lg text-[#E23744] font-black uppercase tracking-[0.3em]">Registered Office</h3>
                <div className="flex gap-4 items-start group">
                  <div className="p-2.5 rounded-lg bg-[#E23744]/10 text-[#E23744] shrink-0 mt-1 transition-colors group-hover:bg-[#E23744] group-hover:text-white">
                    <MapPin size={18} />
                  </div>
                  <span className="para-md leading-relaxed tracking-[0.1em] font-light text-white/70 ">
                    Office no.45, Vardhaman Vatika, Kolshet Road,
                    opposite to DMart, Thane (W) - 400607
                  </span>
                </div>
              </div>

              {/* Column 2: Branch Offices (Single Column Arrangement) */}
              <div className="space-y-5">
                <h3 className="para-md text-[#E23744] font-black uppercase tracking-[0.3em]">Branch Networks</h3>
                <div className="space-y-5">
                  {/* Branch 1 */}
                  <div className="flex gap-4 items-start group">
                    <div className="p-2.5 rounded-lg bg-[#E23744]/10 text-[#E23744] shrink-0 mt-1 transition-colors group-hover:bg-[#E23744] group-hover:text-white">
                      <MapPin size={18} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="para-sm font-black uppercase tracking-widest text-[#EDA749]/60">Navi Mumbai</span>
                      <span className="para-md leading-relaxed font-light text-white/70">
                        Office no.4, Shree Vihar Apartment, Plot no.48, <br />
                        Sector no.19, Airoli, Navi Mumbai - 400708
                      </span>
                    </div>
                  </div>
                  {/* Branch 2 */}
                  <div className="flex gap-4 items-start group">
                    <div className="p-2.5 rounded-lg bg-[#E23744]/10 text-[#E23744] shrink-0 mt-1 transition-colors group-hover:bg-[#E23744] group-hover:text-white">
                      <MapPin size={18} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="para-sm font-black uppercase tracking-widest text-[#EDA749]/60">Pune Hub</span>
                      <span className="para-md leading-relaxed font-light text-white/70">
                        Office no.214, 2nd Floor, City One Vezdaa, <br />
                        Ravet, Pune - 412101
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unified Digital & Phone Access (Separate Rows as requested) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5 border-t border-white/5">
              <div className="space-y-4">
                <h4 className="para-md font-black uppercase tracking-[0.3em] text-[#EDA749]">Institutional Hotlines</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-white/90">
                    <Phone size={18} className="text-[#E23744]" />
                    <span className="para-md font-bold tracking-wider">98209 43077 / 92232 08344</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                    <Mail size={18} className="text-[#E23744]" />
                    <span className="para-md font-medium">facilitiestravels@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="para-md font-black uppercase tracking-[0.3em] text-[#EDA749]">Digital Presence</h4>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-2 rounded-full bg-[#EDA749]/10 text-[#EDA749] group-hover:bg-[#EDA749] group-hover:text-black transition-all">
                    <Globe size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="para-md font-light text-white/60">Official Website</span>
                    <span className="para-md font-medium text-[#EDA749] underline decoration-[#EDA749]/20 underline-offset-8">www.facilitiestravels.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Quick Links (4 Columns) */}
          <div className="lg:col-span-4 space-y-5 lg:pl-12 lg:border-l lg:border-white/5">
            <h3 className="para-md text-[#EDA749] font-black uppercase tracking-[0.4em]">Quick Navigation</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-8">
              {quickLinks.map((item) => (
                <li key={item.name} className="uppercase tracking-[0.2em]">
                  <Link
                    to={item.href}
                    className="para-md text-white/50 hover:text-white transition-all duration-300 font-semibold flex items-center group py-1"
                  >
                    <span className="h-[2px] w-0 group-hover:w-6 bg-[#E23744] mr-0 group-hover:mr-4 transition-all duration-300 rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright Bar - (Unchanged) */}
      <div className="bg-black py-8">
        <div className="max-w-8xl mx-auto px-8 sm:px-10 md:px-16 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="para-sm !tracking-[0.2em] text-white/80 text-center md:text-left font-medium uppercase">
            © {currentYear} | FACILITIES TOURS & TRAVELS Pvt. Ltd. | All Rights Reserved
          </p>
          <div className="flex gap-10">
            <Link to="/resources/terms" className="para-sm !tracking-[0.15em] text-white/30 hover:text-white transition-all uppercase">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;