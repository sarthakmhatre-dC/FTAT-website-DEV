import React from 'react';
import { ShieldCheck, Clock, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const SplitHero = () => {
  return (
    <section 
      className="relative w-full overflow-hidden flex items-center bg-white"
      style={{ 
        /* Fluid padding: Unified with AboutUsCTA to maintain premium whitespace */
        paddingTop: 'clamp(5rem, 12vw, 9rem)', 
        paddingBottom: 'clamp(5rem, 12vw, 9rem)',
        minHeight: '85vh'
      }}
    >
      
      {/* 1. Integrated Hero Image & Consistent Gradients */}
      <div className="absolute inset-0 lg:left-[35%] z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns scale-110"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=3200&auto=format&fit=crop&crop=focalpoint&fp-y=0.5')`, 
          }}
        />
        
        {/* Consistent Dynamic Overlay: Matches the depth of your CTA components */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b md:bg-gradient-to-r from-white via-white/95 md:via-white/80 to-white/60 md:to-transparent" />
        
        {/* Bottom Fade to blend with next sections */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      {/* 2. Typographic Content Overlay: Unified with CTA Layout */}
      <div className="relative z-20 max-w-8xl mx-auto px-8 sm:px-16 lg:px-20 w-full">
        <div className="w-full lg:w-[60%] xl:w-[55%] animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          
          {/* Top Label: Consistent with "Our Legacy" style */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <span className="text-[#E23744] font-black para-md md:para-md uppercase tracking-[0.4em] md:tracking-[0.5em]">
              Premier Mobility
            </span>
            <div className="h-px w-12 bg-[#2D2D2D]/10 hidden md:block" />
            <div className="h-1 w-8 bg-[#E23744]/20 md:hidden rounded-full" />
          </div>

          {/* Primary Headline: Fluid heading-1 consistent with subpages */}
          <h1 className="heading-1 font-bold text-[#2D2D2D] leading-[1.1] md:leading-[0.95] tracking-tighter mb-8 sm:mb-10">
            Redefining <br className="hidden sm:block" />
            <span className="text-[#3E4D86]">Excellence</span> <br/>
            in Travel
          </h1>

          {/* Description Block: Consistent with AboutUsCTA border-logic */}
          <div className="mb-10 sm:mb-12 border-t-2 md:border-t-0 md:border-l-4 border-[#E23744] pt-8 md:pt-0 md:pl-8">
            <p className="para-md lg:para-lg text-gray-500 font-medium leading-relaxed max-w-xl">
              Tailored transportation solutions designed for your business, 
              ensuring scale, safety, and institutionalized compliance.
            </p>
          </div>

          {/* Action Group: Consistent Button Styling */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="w-full sm:w-auto px-10 py-4 bg-[#E23744] text-white font-bold rounded-full hover:bg-[#E23744]/90 transition-all transform hover:-translate-y-1 shadow-xl uppercase para-sm tracking-widest">
              Request a Proposal
            </button>
            
            <Link
            to ="/fleet"
            className="w-full sm:w-auto group flex items-center justify-center gap-3 px-10 py-4 border-2 border-gray-100 text-[#2D2D2D] font-bold rounded-full hover:bg-[#F4F4F2] transition-all uppercase para-sm tracking-widest">
              Explore Fleet 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Floating Trust Bar: Re-styled for better integration with white background */}
      <div className="absolute bottom-6 md:bottom-12 left-6 right-6 md:left-auto md:right-12 lg:right-16 z-30">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl flex items-center justify-around md:justify-start gap-4 md:gap-12">
          
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <Clock size={16} className="text-[#3E4D86] group-hover:text-[#E23744] transition-colors" />
            <span className="para-xs !font-bold text-[#2D2D2D] text-center uppercase">24/7 Support</span>
          </div>
          
          <div className="w-px h-6 md:h-8 bg-[#2D2D2D]/10" />
          
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <ShieldCheck size={16} className="text-[#3E4D86] group-hover:text-[#E23744] transition-colors" />
            <span className="para-xs !font-bold text-[#2D2D2D] text-center uppercase">Verified Fleet</span>
          </div>
          
          <div className="w-px h-6 md:h-8 bg-[#2D2D2D]/10" />
          
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <UserCheck size={16} className="text-[#3E4D86] group-hover:text-[#E23744] transition-colors" />
            <span className="para-xs !font-bold text-[#2D2D2D] text-center uppercase">Pro Drivers</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SplitHero;