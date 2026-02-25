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
    <section className="relative w-full py-16 md:py-24 bg-[#1e2542] overflow-hidden">
      {/* 1. Enhanced Dark Blueberry Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(62,77,134,0.3)_0%,rgba(20,26,48,1)_100%)] z-0" />

      {/* 2. Responsive Container */}
      <div className="relative z-10 max-w-8xl mx-auto px-8 md:px-16 lg:px-20">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="heading-2 text-white">
            Hire Premium Cars as per <span className="text-[#EDA749]">Your Need</span>
          </h2>
          <div className="mt-4 md:mt-6 h-1 w-20 md:w-24 bg-[#E23744] mx-auto rounded-full shadow-lg shadow-red-900/20" />
        </div>

        {/* 2x2 Grid Structure - Responsive Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16">
          {needs.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] hover:-translate-y-2 flex flex-col items-start"
            >
              {/* 3. Responsive Icon Container */}
              <div className="mb-6 md:mb-8 p-4 md:p-5 rounded-2xl bg-[#F4F4F2] text-[#E23744] group-hover:bg-[#E23744] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-red-900/30 shrink-0">
                <div className="scale-90 md:scale-100">
                   {item.icon}
                </div>
              </div>

              {/* Text Content using Custom Classes */}
              <h3 className="heading-3 text-[#2D2D2D] mb-4 md:mb-5">
                {item.title}
              </h3>
              
              <p className="para-md text-gray-500 font-medium">
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