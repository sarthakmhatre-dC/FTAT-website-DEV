import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  UserCheck, 
  ClipboardCheck, 
  Clock, 
  RotateCcw 
} from 'lucide-react';

const SafetyOperations = () => {
  const safetyFeatures = [
    {
      items: [
        {
          icon: <Truck size={24} className="text-[#E23744]" />,
          title: "Real Fleet & Operations Images",
          desc: "Transparent gallery of our actual vehicle deployments."
        },
        {
          icon: <ShieldCheck size={24} className="text-[#E23744]" />,
          title: "Company-Approved Vehicles",
          desc: "Every vehicle undergoes a strict 50-point quality check."
        },
        {
          icon: <UserCheck size={24} className="text-[#E23744]" />,
          title: "Background-Verified Drivers",
          desc: "Police and independent 3rd party verified chauffeurs."
        }
      ]
    },
    {
      items: [
        {
          icon: <ClipboardCheck size={24} className="text-[#EDA749]" />,
          title: "Regular Audits & Safety Checks",
          desc: "Weekly safety compliance audits and route monitoring."
        },
        {
          icon: <Clock size={24} className="text-[#EDA749]" />,
          title: "24/7 Operations & Escalation",
          desc: "Dedicated help desk with immediate management oversight."
        },
        {
          icon: <RotateCcw size={24} className="text-[#EDA749]" />,
          title: "Backup & Contingency Planning",
          desc: "Guaranteed backup vehicles within 30-45 minutes."
        }
      ]
    }
  ];

  return (
    <section className="relative w-full py-32 text-white overflow-hidden bg-[#1A1A1A]">
      {/* 1. Subtle Premium Gradient Layer */}
      <div className="absolute inset-0 z-0">
        {/* Deep Radial Glow to lift the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,45,45,1)_0%,rgba(26,26,26,1)_100%)]" />
        
        {/* Very subtle brand-colored corner accent */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E23744]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
        
        {/* Header Section: Left Aligned */}
        <div className="max-w-3xl mb-14">
          <span className="text-[#E23744] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
            Institutional Safety
          </span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Fleet, Safety & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Operations</span>
          </h2>
          <p className="text-lg text-gray-400 font-medium tracking-wide max-w-2xl">
            Reinforce reliability & risk management through institutionalized safety protocols and real-time monitoring.
          </p>
        </div>

        {/* Horizontal Separator with Gradient */}
        <div className="w-full h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent mb-20" />

        {/* Two-Column Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
          
          {/* Left Column Group */}
          <div className="space-y-14">
            {safetyFeatures[0].items.map((item, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="shrink-0 w-16 h-16 rounded-2xl border border-white/5 flex items-center justify-center bg-white/[0.03] backdrop-blur-sm transition-all duration-500 group-hover:border-[#E23744]/50 group-hover:bg-[#E23744]/5 group-hover:shadow-[0_0_30px_rgba(226,55,68,0.1)]">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#E23744] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column Group */}
          <div className="space-y-14">
            {safetyFeatures[1].items.map((item, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="shrink-0 w-16 h-16 rounded-2xl border border-white/5 flex items-center justify-center bg-white/[0.03] backdrop-blur-sm transition-all duration-500 group-hover:border-[#EDA749]/50 group-hover:bg-[#EDA749]/5 group-hover:shadow-[0_0_30px_rgba(237,167,73,0.1)]">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#EDA749] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SafetyOperations;