import React from 'react';
import { Users, Briefcase, DoorClosed, Settings2, Wind, Star } from 'lucide-react';

const ProductShowCase = ({ 
  title = "Toyota Fortuner Rental Service",
  images = [],
  features = [
    { icon: <Users size={20} />, label: "5 Seats" },
    { icon: <Briefcase size={20} />, label: "2 Bags" },
    { icon: <DoorClosed size={20} />, label: "4 Doors" },
    { icon: <Settings2 size={20} />, label: "Manual" },
    { icon: <Wind size={20} />, label: "AC" }
  ],
  rating = "4.9",
  reviews = "15,966"
}) => {
  const displayImages = images.length >= 5 ? images : [
    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=500",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=500",
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=500",
    "https://images.unsplash.com/photo-1555214107-f2e7c48c636f?q=80&w=500"
  ];

  return (
    <section 
      className="relative w-full overflow-hidden flex flex-col items-center"
      style={{ 
        /* Consistent Fluid Padding as per AboutUsCTA */
        paddingTop: 'clamp(5rem, 9vw, 7rem)', 
        paddingBottom: 'clamp(5rem, 9vw, 7rem)' 
      }}
    >
      {/* 1. Consistent Background Layer (Optional: replace URL with showcase-specific background if needed) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url('/backgroundImages/FleetPageCTA.webp')`, 
          opacity: 0.10 // Low opacity to keep it white-themed but textured like the CTA
        }}
      />

      <div className="relative z-20 max-w-8xl mx-auto px-8 sm:px-16 lg:px-20 w-full">
        
        {/* 2. Header Section: Aligned with AboutUsCTA Label Logic */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <span className="text-[#E23744] font-black para-md md:para-md uppercase tracking-[0.4em] md:tracking-[0.5em]">
              Fleet Excellence
            </span>
            <div className="h-px w-12 bg-[#2D2D2D]/10 hidden md:block" />
            <div className="h-1 w-8 bg-[#E23744]/20 md:hidden rounded-full" />
          </div>

          <h2 className="heading-1 font-bold text-[#2D2D2D] leading-[1.1] md:leading-[0.95] tracking-tighter">
            {title}
          </h2>
          <div className="mt-8 h-1.5 w-24 bg-[#E23744] rounded-full hidden md:block" />
        </div>

        {/* 3. Image Grid: Maintained structure but refined borders to match CTA "Premium" look */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-12 lg:h-[75vh]">
          <div className="col-span-2 lg:row-span-2 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 h-[300px] md:h-[450px] lg:h-auto">
            <img 
              src={displayImages[0]} 
              alt="Main View" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" 
            />
          </div>
          
          {displayImages.slice(1, 5).map((img, idx) => (
            <div 
              key={idx} 
              className="col-span-1 rounded-[1.2rem] md:rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 h-32 sm:h-48 lg:h-auto"
            >
              <img 
                src={img} 
                alt={`Detail ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 ease-out" 
              />
            </div>
          ))}
        </div>

        {/* 4. Footer Section: Refined Rating & Features */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-12 border-t-2 border-[#E23744]/10">
          
          {/* Feature Badges */}
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-3 md:gap-5 w-full md:w-auto">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center aspect-square sm:w-24 sm:h-24 bg-white shadow-md border border-gray-100 rounded-2xl md:rounded-3xl p-3 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className="text-[#3E4D86] group-hover:text-[#E23744] transition-colors duration-300 mb-2">
                  {item.icon}
                </div>
                <span className="para-xs !font-bold text-gray-500 uppercase tracking-widest text-center leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Rating Display using CTA-style typography focus */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <div className="flex items-center gap-1.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#EDA749] text-[#EDA749]" />
              ))}
              <span className="ml-2 para-sm !font-black text-[#2D2D2D]">
                Rating: {rating}
              </span>
            </div>
            <p className="para-xs text-gray-400 uppercase tracking-[0.2em]">
              {reviews} verified reviews
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowCase;