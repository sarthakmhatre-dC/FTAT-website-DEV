import React from 'react';
import { Car, UserCheck, MapPin, Headset } from 'lucide-react';

const TrustBar = () => {
  const metrics = [
    {
      icon: <Car size={24} className="text-[#3E4D86]" />,
      label: "New and Clean Cars",
      value: "500"
    },
    {
      icon: <UserCheck size={24} className="text-[#3E4D86]" />,
      label: "Verified and Trained Drivers",
      value: "450"
    },
    {
      icon: <MapPin size={24} className="text-[#3E4D86]" />,
      label: "GPS-Tracked Fleet",
      value: "100"
    },
    {
      icon: <Headset size={24} className="text-[#3E4D86]" />,
      label: "24/7 Support Services",
      value: "24"
    }
  ];

  return (
    <section className="w-full bg-[#F4F4F2] py-5 border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {metrics.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2">
              {/* Row 1: Icon and Label (No-wrap) */}
              <div className="flex items-center gap-3 whitespace-nowrap">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-[#2D2D2D]">
                  {item.label}
                </span>
              </div>
              
              {/* Row 2: Number with Plus Sign */}
              <div className="flex items-center justify-center">
                <span className="text-3xl font-bold text-[#E23744] flex items-center">
                  {item.value}<span className="text-xl ml-0.5 text-[#EDA749]">+</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;