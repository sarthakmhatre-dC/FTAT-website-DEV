import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Shield, Clock, MapPin, Star, MoveRight } from 'lucide-react';

const ServiceFleetShowcase = ({
  services = [
    { icon: <CheckCircle size={22} />, text: "Quality Vehicles" },
    { icon: <Shield size={22} />, text: "Safe Travels" },
    { icon: <Clock size={22} />, text: "24/7 Support" },
    { icon: <MapPin size={22} />, text: "Multiple Locations" },
    { icon: <Star size={22} />, text: "Premium Service" }
  ],
  fleetImages = [
    { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800", name: "Luxury Sedan", category: "Executive" },
    { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800", name: "Executive SUV", category: "Premium" },
    { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800", name: "Corporate Coach", category: "Institutional" },
    { src: "https://images.unsplash.com/photo-1555214107-f2e7c48c636f?q=80&w=800", name: "Premium Van", category: "Standard" }
  ]
}) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scroll by one full card width plus gap
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-white px-8 md:px-16 lg:px-20 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        
        {/* 1. Optimized Service Bar: Fixed "Absolute Mess" on Mobile */}
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-8">
            <div className="flex-shrink-0 text-center lg:text-left">
              <span className="text-[#E23744] font-black para-sm md:para-md uppercase tracking-[0.4em] md:tracking-[0.5em]">Our Standards</span>
              <h3 className="heading-3 font-black text-[#2D2D2D] uppercase tracking-tighter mt-5">
                We <span className="text-[#3E4D86]">Offer:</span>
              </h3>
            </div>
            
            {/* Mobile: 2-Column Grid | Desktop: Row with Dividers */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row items-center justify-center lg:justify-end gap-y-10 lg:gap-0 flex-grow">
              {services.map((service, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start lg:flex-row lg:px-10 first:pl-0 border-r-0 lg:border-r-[2px] border-gray-100 last:border-none group/service">
                  <div className="flex flex-col items-center lg:items-center gap-4 transition-all duration-300 group-hover/service:-translate-y-1">
                    <div className="text-[#3E4D86] group-hover/service:text-[#E23744]">
                      {service.icon}
                    </div>
                    <span className="para-sm !font-black text-gray-400 group-hover/service:text-[#2D2D2D] uppercase tracking-[0.2em] text-center lg:text-center">
                      {service.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative Divider: Hidden on mobile to prevent clipping */}
          <div className="mt-12 w-full h-px bg-gradient-to-r from-gray-100 via-gray-200 to-transparent hidden lg:block" />
        </div>

        {/* 2. Fleet Slider Architecture: Smooth & Responsive */}
        <div className="relative group">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-md">
              <h4 className="heading-2 font-black text-[#2D2D2D] tracking-tighter mb-4">
                Premier <span className="text-[#3E4D86]">Fleet</span> Selections.
              </h4>
              <p className="para-md text-gray-400 font-medium">Institutionalized safety and luxury across every car class.</p>
            </div>
            
            <div className="flex gap-3 self-end md:self-auto">
              <button 
                onClick={() => scroll('left')}
                className="p-4 rounded-2xl bg-[#F4F4F2] text-[#2D2D2D] hover:bg-[#E23744] hover:text-white transition-all shadow-sm active:scale-90"
              >
                <ChevronLeft size={22} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-4 rounded-2xl bg-[#F4F4F2] text-[#2D2D2D] hover:bg-[#E23744] hover:text-white transition-all shadow-sm active:scale-90"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Slider Track: Optimized for touch-swipe and overflow visibility */}
          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-10"
          >
            {fleetImages.map((car, idx) => (
              <div 
                key={idx} 
                className="min-w-[85%] sm:min-w-[45%] lg:min-w-[calc(33.333%-22px)] snap-start group/card relative h-[450px] md:h-[500px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-[#F4F4F2] shadow-xl shadow-gray-200/40 no-scrollbar"
              >
                <img 
                  src={car.src} 
                  alt={car.name} 
                  className="w-full h-full object-cover scale-110 group-hover/card:scale-100 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-transparent to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                  <span className="text-[#EDA749] para-xs !font-bold tracking-[0.4em] uppercase mb-3 block">
                    {car.category} Class
                  </span>
                  <h5 className="text-white heading-4 font-black uppercase mb-6">
                    {car.name}
                  </h5>
                  
                  {/* <button className="flex items-center gap-3 text-white para-xs !font-bold uppercase tracking-widest opacity-100 lg:opacity-0 group-hover/card:opacity-100 transition-all duration-500">
                    Explore Details <MoveRight size={16} className="text-[#E23744]" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceFleetShowcase;