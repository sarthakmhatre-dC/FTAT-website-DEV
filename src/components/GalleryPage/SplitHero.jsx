import React from 'react';
import { ShieldCheck, Clock, UserCheck, ArrowRight } from 'lucide-react';

const SplitHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden py-20">
      
      {/* 1. Integrated Hero Image */}
      <div className="absolute inset-0 lg:left-[40%] z-0 overflow-hidden">
        {/* The Image with Ken Burns */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=3200&auto=format&fit=crop&crop=focalpoint&fp-y=0.5')`, 
          }}
        />
        
        {/* 2. The "Mixing" Gradient Overlay */}
        {/* This creates the smooth blend from white text area to the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/40 z-10" />
        
        {/* Bottom Fade to blend with next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      {/* 3. Typographic Content Overlay */}
      <div className="relative z-20 max-w-8xl mx-auto px-8 md:px-16 lg:px-24 min-h-screen flex flex-col justify-center">
        <div className="w-full lg:w-[55%] animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          
          <span className="block text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 mb-6">
            Premier Corporate Mobility
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#2D2D2D] leading-[1.1] tracking-tighter mb-8">
            Redefining <br />
            <span className="font-black text-[#3E4D86]">Excellence</span> in Travel
          </h1>

          <p className="max-w-md text-lg text-gray-500 leading-relaxed mb-12 font-medium">
            Tailored transportation solutions designed for your business, 
            ensuring scale, safety, and institutionalized compliance.
          </p>

          <div className="flex items-start gap-6">
            <button className="px-10 py-5 bg-[#E23744] text-white font-bold rounded-2xl shadow-xl shadow-red-900/10 hover:shadow-red-900/30 hover:-translate-y-1 transition-all duration-300 uppercase text-[11px] tracking-widest">
              Request a Proposal
            </button>
            
            <button className="group flex items-center gap-3 px-10 py-5 border-2 border-gray-200 text-[#2D2D2D] font-bold rounded-2xl hover:bg-[#F4F4F2] hover:border-[#3E4D86] transition-all duration-300 uppercase text-[11px] tracking-widest hover:shadow-red-900/30 hover:-translate-y-1">
              Explore Fleet 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Floating Trust Bar - Repositioned for integrated look */}
      <div className="absolute bottom-12 right-8 lg:right-24 z-30">
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl flex items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-2">
            <Clock size={18} className="text-[#2D2D2D]" />
            <span className="text-[9px] font-bold text-[#2D2D2D] uppercase tracking-widest">24/7 Support</span>
          </div>
          <div className="w-px h-8 bg-[#2D2D2D]/10" />
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck size={18} className="text-[#2D2D2D]" />
            <span className="text-[9px] font-bold text-[#2D2D2D] uppercase tracking-widest">Verified Fleet</span>
          </div>
          <div className="w-px h-8 bg-[#2D2D2D]/10" />
          <div className="flex flex-col items-center gap-2">
            <UserCheck size={18} className="text-[#2D2D2D]" />
            <span className="text-[9px] font-bold text-[#2D2D2D] uppercase tracking-widest">Pro Drivers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;