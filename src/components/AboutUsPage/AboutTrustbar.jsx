import React from 'react';
import { Zap, ShieldCheck, Headphones, Layers } from 'lucide-react';

const AboutTrustBar = () => {
  const metrics = [
    {
      icon: <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-[#3E4D86]" />,
      label: "SLA-Driven Operations",
      value: "100",
      symbol: "%"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-[#3E4D86]" />,
      label: "Safety & Compliance",
      value: "100",
      symbol: "%"
    },
    {
      icon: <Headphones className="w-5 h-5 lg:w-6 lg:h-6 text-[#3E4D86]" />,
      label: "Dedicated Support",
      value: "24",
      symbol: "/7"
    },
    {
      icon: <Layers className="w-5 h-5 lg:w-6 lg:h-6 text-[#3E4D86]" />,
      label: "Scalable Process",
      value: "50",
      symbol: "+"
    }
  ];

  return (
    <section className="w-full bg-[#F4F4F2] py-8 lg:py-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Grid Logic Synchronized: 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-8">
          {metrics.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              
              {/* Icon Container: Matching TrustBar style */}
              <div className="mb-4 p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                {item.icon}
              </div>

              {/* Value with Dynamic Symbol */}
              <div className="flex items-baseline justify-center mb-1">
                <span className="text-2xl md:text-3xl lg:text-4xl font-black text-[#E23744]">
                  {item.value}
                </span>
                <span className="text-lg md:text-xl font-bold text-[#EDA749] ml-0.5">
                    {item.symbol}
                </span>
              </div>
              
              {/* Label: Matching scannability logic */}
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-[#2D2D2D] max-w-[120px] md:max-w-none leading-tight">
                {item.label}
              </span>

              {/* Mobile Divider Logic */}
              {index % 2 === 0 && (
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-300 lg:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTrustBar;