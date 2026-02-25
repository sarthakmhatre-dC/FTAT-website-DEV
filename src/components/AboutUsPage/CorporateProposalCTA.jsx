import React from 'react';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';

const CorporateProposalCTA = () => {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-40 overflow-hidden bg-[#F8F8F6]">
      {/* Background Architectural Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center opacity-10"
        style={{ backgroundImage: `url('/backgroundImages/FleetPageCTA.webp')` }}
      />
      
      {/* Responsive Container: Changed mx-10 to mx-auto px-6 */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="bg-[#2D2D2D] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/5">
          
          {/* Left Side: Impactful Typography */}
          <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="text-[#EDA749] font-black para-sm uppercase !tracking-[0.3em] md:!tracking-[0.5em]">Engagement</span>
              <div className="h-px w-8 md:w-12 bg-white/20" />
            </div>

            <h2 className="heading-1 font-bold text-white mb-8 md:mb-12">
              Let’s Build Your <br className="hidden sm:block" />
              <span className="text-[#EDA749]">Corporate Transport Solution.</span>
            </h2>

            <div className="flex flex-wrap gap-8 items-center">
              <button className="w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 bg-[#E23744] text-white font-black para-md uppercase tracking-[0.1em] md:tracking-[0.2em] rounded-2xl shadow-xl shadow-black/20 hover:bg-white hover:text-[#2D2D2D] transition-all duration-500 flex items-center justify-center gap-3 group">
                Request a Corporate Proposal 
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Trust Indicators */}
          <div className="w-full lg:w-2/5 bg-[#3E4D86] p-8 md:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
            {/* Design Element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
            
            <div className="space-y-10 md:space-y-16 lg:space-y-20 relative z-10">
              {/* Indicator 1 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#EDA749]">
                  <FileText size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase para-md tracking-widest mb-2">Customized Strategy</h4>
                  <p className="text-white/60 para-sm leading-relaxed font-medium">Tailored route mapping and fleet allocation for your specific enterprise needs.</p>
                </div>
              </div>

              {/* Indicator 2 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#EDA749]">
                  <ShieldCheck size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase para-md tracking-widest mb-2">Full Compliance</h4>
                  <p className="text-white/60 para-sm leading-relaxed font-medium">Ensuring every trip meets institutional safety and statutory standards.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CorporateProposalCTA;