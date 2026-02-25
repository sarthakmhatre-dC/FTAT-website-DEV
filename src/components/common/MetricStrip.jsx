import React from 'react';
import { Users, Building2, Map, ShieldCheck } from 'lucide-react';

const MetricStrip = () => {
  const stats = [
    {
      icon: <Users size={20} />,
      label: "Active Passengers",
      value: "25,000"
    },
    {
      icon: <Building2 size={20} />,
      label: "Corporate Partners",
      value: "150"
    },
    {
      icon: <Map size={20} />,
      label: "Cities Covered",
      value: "12"
    },
    {
      icon: <ShieldCheck size={20} />,
      label: "Safety Compliance",
      value: "100",
      unit: "%"
    }
  ];

  return (
    <section className="w-full py-12 bg-linear-to-r from-[#2D2D2D] via-[#2D2D2D] to-[#3E4D86]/90">
      <div className="w-full mx-auto px-6z lg:px-12">
        {/* Premium Gradient Bar */}
        <div className="relative overflow-hidden shadow-2xl shadow-blue-900/10">
          {/* Subtle Peppercorn to Dark Blueberry Gradient */}
          <div className="absolute inset-0 " />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center px-6 py-4 transition-all duration-500 hover:bg-white/5 group"
              >
                {/* Icon with Glassmorphism Effect */}
                <div className="mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all group-hover:scale-110 group-hover:border-white/30 group-hover:bg-white/10">
                  {stat.icon}
                </div>

                {/* Number and Plus Sign */}
                <div className="flex items-baseline gap-1">
                  <span className="heading-3 font-black text-white tracking-tighter">
                    {stat.value}{stat.unit}
                  </span>
                  {!stat.unit && (
                    <span className="heading-3 font-bold text-[#E23744]">+</span>
                  )}
                </div>

                {/* Refined Label */}
                <span className="mt-2 para-sm font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors justify-center text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricStrip;