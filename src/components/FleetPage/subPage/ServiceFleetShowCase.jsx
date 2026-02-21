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
      const cardWidth = scrollRef.current.offsetWidth / 3;
      const scrollTo = direction === 'left' ? scrollRef.current.scrollLeft - cardWidth : scrollRef.current.scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-32 bg-white px-6 lg:px-12 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        
        {/* 1. Refined Service Bar */}
        <div className="mb-24 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="flex-shrink-0">
              <span className="text-[#E23744] font-bold tracking-[0.5em] text-[10px] uppercase block mb-2">Our Standards</span>
              <h3 className="text-2xl font-black text-[#2D2D2D] uppercase tracking-tighter">
                We <span className="text-[#3E4D86]">Offer:</span>
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-y-10 flex-grow justify-end">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center group/service">
                  <div className="flex flex-col gap-4 px-10 first:pl-0 border-r border-gray-100 last:border-none">
                    <div className="text-[#3E4D86] group-hover/service:text-[#E23744] group-hover/service:-translate-y-1 transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-black text-gray-400 group-hover/service:text-[#2D2D2D] uppercase tracking-[0.2em] whitespace-nowrap transition-colors">
                      {service.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-10 left-0 w-full h-px bg-gradient-to-r from-gray-100 via-gray-200 to-transparent" />
        </div>

        {/* 2. Fleet Slider Architecture */}
        <div className="relative group">
          {/* Header & Controls */}
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-md">
              <h4 className="text-4xl font-black text-[#2D2D2D] tracking-tighter leading-none mb-4 uppercase">
                Premier <span className="text-[#3E4D86]">Fleet</span> Selections.
              </h4>
              <p className="text-gray-400 text-sm font-medium">Institutionalized safety and luxury across every car class.</p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => scroll('left')}
                className="p-4 rounded-2xl bg-[#F4F4F2] text-[#2D2D2D] hover:bg-[#E23744] hover:text-white hover:-translate-x-1 transition-all duration-300 shadow-sm"
              >
                <ChevronLeft size={22} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-4 rounded-2xl bg-[#F4F4F2] text-[#2D2D2D] hover:bg-[#E23744] hover:text-white hover:translate-x-1 transition-all duration-300 shadow-sm"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Slider Track */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden scroll-smooth snap-x snap-mandatory pb-10"
          >
            {fleetImages.map((car, idx) => (
              <div 
                key={idx} 
                className="min-w-full md:min-w-[calc(33.333%-22px)] snap-start group/card relative h-[500px] rounded-[3rem] overflow-hidden bg-[#F4F4F2] shadow-xl shadow-gray-200/40"
              >
                {/* Image: Reverse Zoom Interaction */}
                <img 
                  src={car.src} 
                  alt={car.name} 
                  className="w-full h-full object-cover scale-110 group-hover/card:scale-100 transition-transform duration-1000 ease-out"
                />
                
                {/* Visual Depth Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-transparent to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                  <span className="text-[#EDA749] font-bold tracking-[0.4em] text-[10px] uppercase mb-3 block">
                    {car.category} Class
                  </span>
                  <h5 className="text-white font-black uppercase text-2xl tracking-tighter mb-6">
                    {car.name}
                  </h5>
                  
                  <button className="flex items-center gap-3 text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover/card:translate-x-0">
                    Explore Details <MoveRight size={16} className="text-[#E23744]" />
                  </button>
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