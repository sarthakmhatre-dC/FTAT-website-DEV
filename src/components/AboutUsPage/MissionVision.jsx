import React from 'react';
import { Target, Eye, ArrowRight } from 'lucide-react';

const MissionVision = () => {
  const data = [
    {
      type: "Mission",
      title: "Our Daily Commitment",
      content: "To deliver dependable, safe, and compliant corporate transportation services that businesses can rely on every day.",
      icon: <Target size={28} />,
      color: "border-[#E23744]",
      accent: "text-[#E23744]",
      bg: "bg-white/80"
    },
    {
      type: "Vision",
      title: "The Road Ahead",
      content: "To become a trusted corporate mobility partner for enterprises by setting high standards in service quality, safety, and operational transparency.",
      icon: <Eye size={28} />,
      color: "border-[#3E4D86]",
      accent: "text-[#3E4D86]",
      bg: "bg-white/80"
    }
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#F8F8F6]">
      {/* Premium Background Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3E4D86]/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E23744]/5 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-8xl mx-10 px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-xl">
            <span className="text-[#E23744] font-black para-md uppercase tracking-[0.5em] block mb-5">
              Strategic Foundation
            </span>
            <h2 className="heading-1 font-bold text-[#2D2D2D] tracking-tighter uppercase leading-[0.9]">
              Purpose <span className="text-[#3E4D86]">& Ambition.</span>
            </h2>
          </div>
          <div className="pb-2 border-b-2 border-[#EDA749] w-fit">
             <p className="text-gray-400 para-md font-black uppercase tracking-[0.3em]">
               Institutional Values
             </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {data.map((item, idx) => (
            <div 
              key={idx}
              className={`relative p-12 lg:p-16 rounded-[3rem] border-l-[12px] ${item.color} ${item.bg} backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] group`}
            >
              <div>
                <div className="flex items-center justify-between mb-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-[#F4F4F2] ${item.accent} group-hover:bg-[#3E4D86] group-hover:text-white transition-all duration-500`}>
                    {item.icon}
                  </div>
                  <span className={`para-sm font-black uppercase tracking-[0.5em] ${item.accent}`}>
                    {item.type}
                  </span>
                </div>

                <h3 className="heading-3 font-bold text-[#2D2D2D] uppercase tracking-tight mb-6">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-500 font-medium leading-relaxed text-justify mb-8 font-medium tracking-tight">
                  {item.content}
                </p>
              </div>

              {/* Functional Decorative Accent */}
              <div className="flex items-center gap-4">
                <div className={`h-1.5 w-16 rounded-full ${item.accent.replace('text-', 'bg-')} opacity-10 group-hover:opacity-100 group-hover:w-24 transition-all duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;