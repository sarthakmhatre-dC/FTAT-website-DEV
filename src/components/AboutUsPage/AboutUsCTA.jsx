import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutUsCTA = () => {
  return (
    <section 
      className="relative w-full overflow-hidden flex items-center py-10"
      style={{ 
        /* Fluid padding: scales fluidly to maintain premium whitespace across all devices */
        paddingTop: 'clamp(5rem, 9vw, 7rem)', 
        paddingBottom: 'clamp(5rem, 9vw, 7rem)' 
      }}
    >
      {/* Full Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url('/backgroundImages/FleetPageCTA.webp')`, 
        }}
      />
      
      {/* Dynamic Overlay: Deeper on mobile to ensure accessibility and professional contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b md:bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/95 md:via-[#2D2D2D]/80 to-[#2D2D2D]/60 md:to-transparent" />

      {/* Main Container: Shift to center-alignment on mobile for a "Hero" feel */}
      <div className="relative z-20 max-w-8xl mx-auto px-8 sm:px-16 lg:px-20 w-full text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0 mb-5">
          
          {/* Top Label: Refined tracking for mobile clarity */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <span className="text-[#E23744] font-black para-sm md:para-md uppercase tracking-[0.4em] md:tracking-[0.5em]">Our Legacy</span>
            <div className="h-px w-12 bg-white/20 hidden md:block" />
            <div className="h-1 w-8 bg-[#E23744]/20 md:hidden rounded-full" />
          </div>

          {/* Primary Headline: Utilizing fluid heading-1 for seamless resizing */}
          <h2 className="heading-1 font-bold text-white leading-[1.1] md:leading-[0.95] tracking-tighter mb-8 sm:mb-10">
            Your Corporate <br />
            <span className="text-[#EDA749]">Transportation <br/>
               Partner.</span>
          </h2>

          {/* Description Block: Shifted from border-left to border-top on mobile for better visual balance */}
          <div className="mb-10 sm:mb-12 border-t-2 md:border-t-0 md:border-l-4 border-[#E23744] pt-8 md:pt-0 md:pl-8">
            <p className="para-md lg:para-lg text-gray-300 font-medium text-justify md:text-justify leading-relaxed max-w-2xl mx-auto md:mx-0">
              Facilities Travels Tours & Travels Pvt. Ltd. is a corporate-focused transportation 
              solutions provider delivering reliable, compliant, and scalable employee and 
              executive transport services for businesses and enterprises.
            </p>
          </div>

          {/* Integrated Action Group: Full-width button on mobile for thumb-readiness */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <button className="w-full flex sm:w-auto px-6 py-3 bg-[#E23744] text-white font-bold rounded-full hover:bg-[#E23744]/90 transition-all transform hover:-translate-y-1 shadow-xl uppercase para-sm tracking-widest">
              Discover Our Mission
            </button>
            
            {/* Added Institutional Detail for Mobile */}
            {/* <span className="para-muted md:hidden">Established 2025</span> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsCTA;