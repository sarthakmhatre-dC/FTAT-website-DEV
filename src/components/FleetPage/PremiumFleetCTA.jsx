import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { ArrowRight, Circle } from 'lucide-react';

const PremiumFleetCTA = () => {
  const cars = [
    {
      name: "Toyota Innova Hycross",
      image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=2070&auto=format&fit=crop",
      path: "/fleet/innova-hycross" // Matches your dynamic route pattern
    },
    {
      name: "Toyota Fortuner",
      image: "https://images.unsplash.com/photo-1632245889029-e406fbdd14ec?q=80&w=2070&auto=format&fit=crop",
      path: "/fleet/fortuner"
    },
    {
      name: "Audi A6",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop",
      path: "/fleet/audi-a6"
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* 1. Subtle Light Theme Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,244,242,1)_0%,rgba(255,255,255,1)_100%)]" />

      <div className="relative z-10 max-w-8xl mx-10 px-8 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-20 ">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Premium</span>
            <Circle size={4} className="fill-[#E23744] text-[#E23744]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Comfort</span>
            <Circle size={4} className="fill-[#E23744] text-[#E23744]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Convenience</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#2D2D2D] tracking-tight mb-10">
            Types of <span className="text-[#3E4D86]">Premium Cars for Rent</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed text-justify md:text-[17px] font-medium">
              Our premium car rental range includes some of the most trusted and admired models in India. 
              The Toyota Innova Hycross is known for its modern design and smooth performance, making it 
              ideal for groups who prefer style with practicality. The Toyota Innova Crysta gives exceptional 
              space and strength, which is perfect for long trips and family tours. For those who want a bold 
              and powerful presence on the road, the Toyota Fortuner stands out with its commanding design 
              and superior road performance.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify md:text-[17px] font-medium">
              Renting a premium car from us ensures the chosen car delivers reliability, comfort, and a refined 
              travel experience for any occasion. Hiring a premium car on rent from our collection always 
              provides you with a way to ride in style.
            </p>
          </div>
          
          <div className="mt-10 h-1.5 w-20 bg-[#EDA749] mx-auto rounded-full shadow-sm" />
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cars.map((car, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(226,55,68,0.08)] hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-8 text-center">
                <h3 className="text-xl font-black text-[#2D2D2D] mb-6 tracking-tight uppercase">
                  {car.name}
                </h3>
                
                {/* Updated Button to Link for Routing */}
                <Link 
                  to={car.path}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-[#E23744] text-[#E23744] font-bold rounded-full transition-all group-hover:bg-[#E23744] group-hover:text-white uppercase text-[11px] tracking-widest"
                >
                  Explore Details <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFleetCTA;