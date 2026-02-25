import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  const data = [
    {
      type: "Mission",
      title: "Our Daily Commitment",
      content: "To deliver dependable, safe, and compliant corporate transportation services that businesses can rely on every day.",
      icon: <Target size={28} />,
      color: "border-[#E23744]",
      bgcolor: "bg-[#E23744]", // Fixed string for tailwind class
      accent: "text-[#E23744]",
      bg: "bg-white/80"
    },
    {
      type: "Vision",
      title: "The Road Ahead",
      content: "To become a trusted corporate mobility partner for enterprises by setting high standards in service quality, safety, and operational transparency.",
      icon: <Eye size={28} />,
      color: "border-[#3E4D86]",
      bgcolor: "bg-[#3E4D86]", // Fixed string for tailwind class
      accent: "text-[#3E4D86]",
      bg: "bg-white/80"
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-[#F8F8F6]">
      {/* Premium Background Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3E4D86]/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E23744]/5 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Container: Replaced mx-10 with mx-auto and responsive px */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Section Header: Reduced mb for mobile */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-24">
          <div className="max-w-xl">
            <span className="text-[#E23744] para-md uppercase md:tracking-[0.25em] sm:tracking-tight block mb-3 md:mb-5 font-bold">
              Strategic Foundation
            </span>
            <h2 className="heading-1 font-bold text-[#2D2D2D] tracking-tighter uppercase">
              Purpose <span className="text-[#3E4D86]">& Ambition.</span>
            </h2>
          </div>
          <div className="pb-2 border-b-2 border-[#EDA749] w-fit">
             <p className="text-gray-400 para-md font-black uppercase md:tracking-[0.25em]">
               Institutional Values
             </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {data.map((item, idx) => (
            <div 
              key={idx}
              className={`relative p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] border-l-[8px] md:border-l-[12px] ${item.color} ${item.bg} backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] group`}
            >
              <div>
                {/* Header within card: reduced mb for mobile */}
                <div className="flex items-center justify-between mb-6 md:mb-10">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center bg-[#F4F4F2] ${item.accent} group-hover:${item.bgcolor} group-hover:text-white transition-all duration-500`}>
                    <div className="scale-90 md:scale-100">
                      {item.icon}
                    </div>
                  </div>
                  <span className={`para-sm md:para-md font-black uppercase tracking-[0.3em] md:tracking-[0.5em] ${item.accent}`}>
                    {item.type}
                  </span>
                </div>

                <h3 className="heading-3 font-bold text-[#2D2D2D] uppercase tracking-tight mb-4 md:mb-6">
                  {item.title}
                </h3>
                
                {/* Content: Replaced fixed text-lg with responsive para-lg */}
                <p className="para-lg text-gray-500 font-medium leading-relaxed text-justify mb-8 tracking-tight">
                  {item.content}
                </p>
              </div>

              {/* Functional Decorative Accent */}
              <div className="flex items-center gap-4">
                <div className={`h-1.5 w-12 md:w-16 rounded-full ${item.accent.replace('text-', 'bg-')} opacity-10 group-hover:opacity-100 group-hover:w-20 md:group-hover:w-24 transition-all duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;