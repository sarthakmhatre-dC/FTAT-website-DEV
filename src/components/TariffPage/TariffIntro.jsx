import React from 'react';
import { ShieldCheck, FileText, BadgeCheck, ArrowDown } from 'lucide-react';

const TariffIntro = () => {
  return (
    <section className="relative w-full pt-32 pb-20 bg-white overflow-hidden">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F4F4F2]/50 -skew-x-12 translate-x-1/2 z-0" />

      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          
          {/* Left Side: Typography */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#E23744] font-bold text-[10px] uppercase tracking-[0.5em]">Standardized Pricing</span>
              <div className="h-px w-12 bg-gray-200" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#2D2D2D] leading-[0.9] tracking-tighter uppercase mb-10">
              Institutional <br />
              <span className="text-[#3E4D86]">Tariff Guide.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed text-justify max-w-2xl">
              At Facilities Tours and Travels, we maintain a strictly transparent pricing architecture designed for corporate mobility. 
              Our rates are structured on a standardized rental basis and specific airport/railway transfer slabs to ensure your 
              logistics planning is seamless and predictable.
            </p>
          </div>

          {/* Right Side: Trust Indicators */}
          <div className="flex flex-col gap-6 lg:mb-4">
            <div className="flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/40">
              <div className="p-3 bg-[#F4F4F2] text-[#3E4D86] rounded-2xl">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-[#2D2D2D] uppercase tracking-widest">Verified Rates</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase mt-1">No Hidden Surcharges</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-[#3E4D86] text-white rounded-3xl shadow-xl shadow-blue-900/20">
              <div className="p-3 bg-white/10 text-[#EDA749] rounded-2xl">
                <FileText size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest">PDF Ready</p>
                <p className="text-[9px] text-white/60 font-bold uppercase mt-1">Institutional Quotation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#E23744] group-hover:bg-[#E23744] group-hover:text-white transition-all duration-300">
            <ArrowDown size={20} className="animate-bounce" />
          </div>
          <span className="text-[10px] font-black text-[#2D2D2D] uppercase tracking-[0.3em]">Explore Rate Matrices</span>
        </div>
      </div>
    </section>
  );
};

export default TariffIntro;