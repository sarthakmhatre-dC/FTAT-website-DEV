import React from 'react';
import { Car, UserCheck, MapPin, Headset } from 'lucide-react';

const TrustBar = () => {
  const metrics = [
    {
      icon: <Car className="w-5 h-5 lg:w-6 lg:h-6 text-[#3E4D86]" />,
      label: "New & Clean Cars",
      value: "500"
    },
    {
      icon: <UserCheck className="w-5 h-5 lg:w-6 lg:h-6 text-[#3E4D86]" />,
      label: "Trained Drivers",
      value: "450"
    },
    {
      icon: <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-[#3E4D86]" />,
      label: "GPS-Tracked",
      value: "100"
    },
    {
      icon: <Headset className="w-5 h-5 lg:w-6 lg:h-6 text-[#3E4D86]" />,
      label: "24/7 Support",
      value: "24"
    }
  ];

  return (
    <section className="w-full bg-[#F4F4F2] py-8 lg:py-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Grid Logic:
            - 2 columns on mobile (grid-cols-2)
            - 4 columns on large screens (lg:grid-cols-4)
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-8">
          {metrics.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              
              {/* Icon Container with subtle hover animation */}
              <div className="mb-4 p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                {item.icon}
              </div>

              {/* Value with Plus Sign */}
              <div className="flex items-baseline justify-center mb-1">
                <span className="text-2xl md:text-3xl lg:text-4xl font-black text-[#E23744]">
                  {item.value}
                </span>
                <span className="text-lg md:text-xl font-bold text-[#EDA749] ml-0.5">+</span>
              </div>
              
              {/* Label: Adjusted font sizes for mobile scannability */}
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-[#2D2D2D] max-w-[120px] md:max-w-none leading-tight">
                {item.label}
              </span>

              {/* Divider for mobile (Visible only on mobile/tablet between items) */}
              {index % 2 === 0 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-200 lg:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;