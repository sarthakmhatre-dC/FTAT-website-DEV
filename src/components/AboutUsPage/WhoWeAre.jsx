import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      {/* Architectural Background Element */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-[#F4F4F2]/50 -translate-y-1/2 translate-x-1/4 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-8xl mx-10 px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content: Title & Paras (Approx 40% Width) */}
          <div className="w-full lg:w-[40%]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#E23744] font-black para-md uppercase tracking-[0.5em]">Identity</span>
              <div className="h-px w-12 bg-[#3E4D86]/20" />
            </div>

            <h2 className="heading-2 font-bold text-[#2D2D2D] leading-[0.95] tracking-tighter uppercase mb-10">
              Who <span className="text-[#3E4D86]">We Are.</span>
            </h2>

            <div className="space-y-6">
              <p className="para-lg text-[#2D2D2D] font-semibold leading-relaxed text-justify">
                FTAT is a professional corporate transportation company built to serve the evolving 
                mobility needs of businesses. We specialize in managing employee transportation, 
                corporate travel, and dedicated fleet deployments with a strong focus on reliability, 
                safety, and operational excellence.
              </p>
              
              <div className="h-px w-full bg-gradient-to-r from-gray-200 to-transparent" />

              <p className="para-md text-gray-500 font-medium leading-relaxed text-justify">
                We work as an extended operations partner for our clients, ensuring their people 
                move safely, on time, and without operational friction.
              </p>
            </div>

            {/* Micro-Value Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-center gap-3">
                <Target size={18} className="text-[#E23744]" />
                <span className="para-sm font-black text-[#2D2D2D] uppercase tracking-widest">Precision</span>
              </div>
              <div className="flex items-center gap-3">
                <Users size={18} className="text-[#E23744]" />
                <span className="para-sm font-black text-[#2D2D2D] uppercase tracking-widest">Partnership</span>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Anchor (Approx 60% Width) */}
          <div className="w-full lg:w-[60%] relative group">
            {/* Design Element: Floating Frame */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-[#EDA749] z-0 rounded-tl-[3rem]" />
            
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl shadow-gray-300/60 aspect-[16/10]">
              <img 
                src="/who_we_are.webp" 
                alt="FTAT Operations Team" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-[#3E4D86]/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Design Element: Institutional Badge */}
            <div className="absolute -bottom-8 right-12 bg-[#3E4D86] p-8 rounded-[2rem] shadow-2xl hidden md:block">
              <Award className="text-[#EDA749]" size={40} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;