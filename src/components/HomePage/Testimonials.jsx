import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef(null);

  // Logic to slide by exactly one card width
  // Card width (450px) + Gap (32px / gap-8) = 482px
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 482; 
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      scrollRef.current.scrollBy({ 
        left: scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const partners = [
    {
      name: "Priya Singh",
      position: "Logistics Head",
      company: "GLOBAL SOLUTIONS INC.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      message: "Their punctual, seamless, and reliable service has helped strengthening our team focus on our entire productivity."
    },
    {
      name: "Rahul Mehta",
      position: "Operations Manager",
      company: "FINTECH INNOVATIONS HUB",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      message: "We've experienced with their travel for client testing and backup our reflect chauffeurs values. 24/7 help desk is a lifesaver."
    },
    {
      name: "Anjali Verma",
      position: "HR Director",
      company: "CREATIVE DESIGNS LTD.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      message: "Redefining employee commute was easy with Facilities Tours. The drivers are professional and background-verified."
    },
        {
      name: "Priya Singh",
      position: "Logistics Head",
      company: "GLOBAL SOLUTIONS INC.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      message: "Their punctual, seamless, and reliable service has helped strengthening our team focus on our entire productivity."
    },
        {
      name: "Priya Singh",
      position: "Logistics Head",
      company: "GLOBAL SOLUTIONS INC.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      message: "Their punctual, seamless, and reliable service has helped strengthening our team focus on our entire productivity."
    },
        {
      name: "Priya Singh",
      position: "Logistics Head",
      company: "GLOBAL SOLUTIONS INC.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      message: "Their punctual, seamless, and reliable service has helped strengthening our team focus on our entire productivity."
    },
  ];

  return (
    <section className="w-full bg-[#F4F4F2] py-24 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Quote size={20} className="text-[#E23744] fill-[#E23744]" />
            <span className="text-[#E23744] font-bold tracking-[0.3em] text-[10px] uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#2D2D2D] leading-tight tracking-tight max-w-4xl">
            Don’t take our word for it! <br />
            Hear it from our <span className="text-[#3E4D86]">Partners.</span>
          </h2>
          <div className="mt-8 flex items-center gap-4">
             <div className="h-1.5 w-32 bg-[#EDA749] rounded-full" />
             <div className="h-1.5 w-4 bg-[#EDA749] rounded-full" />
          </div>
        </div>

        {/* Card Swiper with Scroll-Snap */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden scroll-smooth gap-8 pb-10"
          >
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="shrink-0 w-[90vw] md:w-[450px] bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-5 mb-8">
                    <div className="shrink-0 w-20 h-20 rounded-full border-4 border-[#E23744] overflow-hidden p-1 bg-white">
                      <img src={partner.image} alt={partner.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="pt-2">
                      <h4 className="font-black text-[#2D2D2D] text-sm uppercase tracking-wide">
                        {partner.company}
                      </h4>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">
                        {partner.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed text-base mb-10">
                    “{partner.message}”
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div>
                    <span className="block font-black text-[#2D2D2D] text-sm uppercase">
                      {partner.name}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      Corporate Partner
                    </span>
                  </div>
                  <div className="text-[#3E4D86] font-black text-xs tracking-tighter uppercase italic">
                    Safety <span className="text-[#E23744]">Operations</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Controls */}
          <div className="flex gap-4 mt-8">
            <button 
              onClick={() => handleScroll('left')}
              className="p-4 bg-white border border-gray-100 rounded-full shadow-lg hover:bg-[#E23744] hover:text-white transition-all text-[#2D2D2D]"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="p-4 bg-white border border-gray-100 rounded-full shadow-lg hover:bg-[#E23744] hover:text-white transition-all text-[#2D2D2D]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;