import React from 'react';
import { Search, Map, Truck, BarChart3 } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      id: "01",
      title: "Understand Requirements",
      description: "Deep-dive into shift timings, route density, and employee clusters to identify specific logistics needs.",
      icon: <Search size={22} />,
      accent: "bg-[#E23744]"
    },
    {
      id: "02",
      title: "Design Transport Plan",
      description: "Optimizing routes and vehicle allocation to ensure cost-efficiency and minimal travel time for staff.",
      icon: <Map size={22} />,
      accent: "bg-[#3E4D86]"
    },
    {
      id: "03",
      title: "Deploy & Manage Fleet",
      description: "Activation of GPS-enabled vehicles and verified chauffeurs under strict operational SOPs.",
      icon: <Truck size={22} />,
      accent: "bg-[#E23744]"
    },
    {
      id: "04",
      title: "Monitor, Report, Improve",
      description: "Real-time tracking and monthly MIS reporting to continuously refine safety and performance.",
      icon: <BarChart3 size={22} />,
      accent: "bg-[#3E4D86]"
    }
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Subtlety */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,_var(--tw-gradient-stops))] from-[#3E4D86]/5 via-transparent to-transparent opacity-50" />

      <div className="relative z-10 max-w-8xl mx-10 px-8 lg:px-16">
        
        {/* Header Section */}
        <div className="mb-28 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl text-left">
            <span className="text-[#E23744] font-black para-md uppercase tracking-[0.5em] block mb-4">
              Operational Roadmap
            </span>
            <h2 className="heading-1 font-bold text-[#2D2D2D] tracking-tighter uppercase leading-[0.9]">
              How We Work <br />
              <span className="text-[#3E4D86]">For Corporates.</span>
            </h2>
          </div>
          <div className="pb-2 border-b-2 border-[#EDA749]">
            <p className="text-gray-400 para-md font-black uppercase tracking-[0.3em]">
              SLA-Driven Process
            </p>
          </div>
        </div>

        {/* Workflow Strip */}
        <div className="relative">
          
          {/* Elegant Center Timeline Line (Desktop Only) */}
          <div className="absolute top-10 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#EDA749] to-transparent hidden lg:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 group flex flex-col items-center lg:items-start text-center lg:text-left">
                
                {/* Threaded Icon Card */}
                <div className="relative mb-10">
                  <div className={`w-20 h-20 rounded-[1.5rem] ${step.accent} flex items-center justify-center text-white shadow-2xl shadow-gray-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[#3E4D86]/20 border-4 border-white`}>
                    {step.icon}
                  </div>
                  
                  {/* Institutional Numbering */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-white text-[#2D2D2D] para-xs font-black flex items-center justify-center shadow-lg border border-gray-100 uppercase">
                    {step.id}
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex flex-col gap-4">
                  <h3 className="para-lg font-black text-[#2D2D2D] uppercase tracking-tight leading-tight transition-colors duration-300 group-hover:text-[#3E4D86]">
                    {step.title}
                  </h3>
                  <p className="para-md text-gray-500 font-medium leading-relaxed max-w-[280px]">
                    {step.description}
                  </p>
                </div>
                
                {/* Connection Marker for Mobile */}
                <div className="w-1 h-12 bg-[#EDA749]/20 my-4 lg:hidden rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;