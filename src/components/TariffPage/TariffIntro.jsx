import React from 'react';
import { ShieldCheck, FileText, ArrowDown } from 'lucide-react';

const TariffIntro = () => {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center bg-white"
      style={{
        /* Unified Fluid Padding to maintain premium whitespace across subpages */
        paddingTop: 'clamp(5rem, 12vw, 9rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)'
      }}
    >
      {/* Decorative Background Accent - Integrated with the new padding logic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F4F4F2]/50 -skew-x-12 translate-x-1/2 z-0" />

      <div className="relative z-10 max-w-8xl mx-auto px-8 md:px-16 lg:px-20 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">

          {/* Left Side: Typography - Unified with Legacy Subpage style */}
          <div className="max-w-3xl">
            {/* Top Label: Consistent with "Our Legacy" tracking and horizontal line */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
              <span className="text-[#E23744] font-black para-sm md:para-md uppercase tracking-[0.4em] md:tracking-[0.5em]">
                Standardized Pricing
              </span>
              <div className="h-px w-12 bg-[#2D2D2D]/10 hidden md:block" />
              <div className="h-1 w-8 bg-[#E23744]/20 md:hidden rounded-full" />
            </div>

            {/* Primary Headline: Fluid heading-1 for seamless resizing */}
            <h1 className="heading-1 font-black text-[#2D2D2D] leading-[1.1] md:leading-[0.95] tracking-tighter mb-10">
              Institutional <br />
              <span className="text-[#3E4D86]">Tariff Guide.</span>
            </h1>

            {/* Description Block: Border-left logic matches subpage partnership/legacy style */}
            <div className="border-t-2 md:border-t-0 md:border-l-4 border-[#E23744] pt-8 md:pt-0 md:pl-8">
              <p className="para-md lg:para-lg text-gray-500 font-medium text-justify leading-relaxed max-w-2xl">
                At Facilities Tours and Travels, we maintain a strictly transparent pricing architecture designed for corporate mobility.
                Our rates are structured on a standardized rental basis and specific airport/railway transfer slabs to ensure your
                logistics planning is seamless and predictable.
              </p>
            </div>
          </div>

          {/* Right Side: Trust Indicators - Maintaining existing high-impact UI */}
          <div className="flex flex-col gap-6 lg:mb-4 w-full sm:w-auto">
            <div className="flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-[1.5rem] md:rounded-3xl shadow-xl shadow-gray-200/40">
              <div className="p-3 bg-[#F4F4F2] text-[#3E4D86] rounded-2xl">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="para-md !font-black text-[#2D2D2D] uppercase tracking-widest">Verified Rates</p>
                <p className="para-xs text-gray-400 !font-bold uppercase mt-1">No Hidden Surcharges</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-[#3E4D86] text-white rounded-[1.5rem] md:rounded-3xl shadow-xl shadow-blue-900/20">
              <div className="p-3 bg-white/10 text-[#EDA749] rounded-2xl">
                <FileText size={24} />
              </div>
              <div>
                <p className="para-md !font-black uppercase tracking-widest">PDF Ready</p>
                <p className="para-xs text-white/60 !font-bold uppercase mt-1">Institutional Quotation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Refined with para-muted utility */}
        <div className="mt-16 md:mt-24 group cursor-pointer w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* 1. Main Action Button: Matches AboutUsCTA styling */}
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#E23744] text-white font-bold rounded-full hover:bg-[#E23744]/90 transition-all transform hover:-translate-y-1 shadow-xl uppercase para-sm tracking-widest">
              Explore Rate Matrices
              <ArrowDown size={18} className="animate-bounce" />
            </button>

            {/* 2. Optional Institutional Detail (Consistent with subpage design) */}
            <div className="hidden md:flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#2D2D2D]/10" />
              <span className="para-md text-gray-600 uppercase tracking-widest">
                Official 2026 Tariffs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TariffIntro;