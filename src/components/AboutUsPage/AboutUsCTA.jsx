import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutUsCTA = () => {
  return (
    <section className="relative w-full py-30 overflow-hidden flex items-center">
      {/* Full Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url('/backgroundImages/FleetPageCTA.webp')`, 
        }}
      />
      
      {/* Deep Luma-Overlay for Professional Legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/80 to-transparent" />

      <div className="relative z-20 max-w-8xl mx-10 px-8 lg:px-16 w-full">
        <div className="max-w-3xl">
          
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[#E23744] font-black para-md uppercase tracking-[0.5em]">Our Legacy</span>
            <div className="h-px w-16 bg-white/20" />
          </div>

          {/* Primary Headline */}
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-10">
            Your Corporate <br />
            <span className="text-[#EDA749]">Transportation Partner.</span>
          </h2>

          {/* Description Block */}
          <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed text-justify mb-12 border-l-4 border-[#E23744] pl-8">
            Facilities Travels Tours & Travels Pvt. Ltd. is a corporate-focused transportation 
            solutions provider delivering reliable, compliant, and scalable employee and 
            executive transport services for businesses and enterprises.
          </p>

          {/* Integrated Action Group */}
          <div className="flex flex-wrap items-center gap-8">
            <button className="px-10 py-5 bg-[#3E4D86] text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-black/20 hover:bg-[#E23744] transition-all duration-500 flex items-center gap-3">
              Discover Our Mission <ArrowRight size={16} />
            </button>
            <div className="h-10 w-px bg-white/10 hidden md:block" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">
                Established
              </span>
              <span className="text-sm font-black text-white uppercase tracking-tighter">
                Since 2025
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsCTA;