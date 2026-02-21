import React from 'react';
import { MapPin, Sparkles, Plane, Briefcase } from 'lucide-react';

const ServiceNeeds = () => {
  const needs = [
    {
      icon: <MapPin size={28} />,
      title: "Local & Outstation Trips",
      desc: "Hire a premium car to enjoy a luxurious, comfortable, personalized trip. With comfortable seating, smooth performance, and a professional chauffeur, you can explore city attractions or experience exceptional convenience throughout your journey."
    },
    {
      icon: <Sparkles size={28} />,
      title: "Wedding & Events",
      desc: "Hire a premium car on rent to make your wedding or special occasions like birthdays and anniversaries hassle-free. Our premium cars are the perfect solution that offers spacious seating to accommodate guests with a smooth, stress-free journey."
    },
    {
      icon: <Plane size={28} />,
      title: "Airport & Railway Transfer",
      desc: "Book a premium car for seamless airport and railway station transfers to enjoy a stress-free ride with punctual pickup, luxurious seating, climate control, and ample boot space so that you reach your destination on time with complete peace of mind."
    },
    {
      icon: <Briefcase size={28} />,
      title: "Corporate Needs",
      desc: "Our premium cars are best for corporate teams looking for a trusted rental provider for events, meetings, or outings. Thanks to the spacious interiors and multiple seating capacities, you can have a convenient, professional, and efficient travel experience."
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#1e2542] overflow-hidden">
      {/* 1. Enhanced Dark Blueberry Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(62,77,134,0.3)_0%,rgba(20,26,48,1)_100%)] z-0" />

      {/* 2. Container with max-width 8xl and balanced padding */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Hire Premium Cars as per <span className="text-[#EDA749]">Your Need</span>
          </h2>
          <div className="mt-6 h-1 w-24 bg-[#E23744] mx-auto rounded-full shadow-lg shadow-red-900/20" />
        </div>

        {/* 2x2 Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {needs.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[2rem] p-8 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] hover:-translate-y-2 flex flex-col items-start"
            >
              {/* 3. Fixed Icon Visibility: text color shifts on group hover */}
              <div className="mb-8 p-5 rounded-2xl bg-[#F4F4F2] text-[#E23744] group-hover:bg-[#E23744] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-red-900/30">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-black text-[#2D2D2D] mb-5 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed text-sm md:text-base font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNeeds;