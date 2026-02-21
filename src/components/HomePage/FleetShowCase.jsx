import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MoveRight } from 'lucide-react';

const FleetShowCase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fleet = [
    {
      title: "Executive Sedan Prime",
      description: "Ultimate comfort for corporate leaders with premium leather interiors and climate control.",
      image: "https://images.unsplash.com/photo-1555214107-f2e7c48c636f?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "Luxury MPV Collection",
      description: "Spacious multi-purpose vehicles designed for team transfers and group site visits.",
      image: "https://images.unsplash.com/photo-1562610378-51528632f211?q=80&w=1935&auto=format&fit=crop",
    },
    {
      title: "Premium Coach Fleet",
      description: "Large scale transportation solutions for corporate events and employee outings.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
    },
    {
      title: "Eco-Friendly EVs",
      description: "Sustainable corporate mobility solutions reducing your company's carbon footprint.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === fleet.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? fleet.length - 1 : prevIndex - 1));
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* Header Consistent with Solutions Component */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[#E23744] font-bold tracking-[0.3em] text-[10px] uppercase">
              The Fleet Experience
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#2D2D2D] tracking-tight">
              Premium Vehicles for <br />
              <span className="text-[#3E4D86]">Every Corporate Need</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#EDA749] rounded-full" />
          </div>

          {/* Slider Controls */}
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-4 border border-gray-200 rounded-full hover:bg-[#F4F4F2] hover:border-[#3E4D86] transition-all group"
            >
              <ChevronLeft className="text-[#2D2D2D] group-hover:text-[#3E4D86]" size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 border border-gray-200 rounded-full hover:bg-[#F4F4F2] hover:border-[#3E4D86] transition-all group"
            >
              <ChevronRight className="text-[#2D2D2D] group-hover:text-[#3E4D86]" size={24} />
            </button>
          </div>
        </div>

        {/* Main Slider Area */}
        <div className="relative w-full aspect-[21/9] overflow-hidden rounded-[2.5rem] bg-[#2D2D2D] shadow-2xl">
          {fleet.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover opacity-60"
              />
              
              {/* Sophisticated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />

              {/* Bottom-Left Content Placement */}
              <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                  {slide.title}
                </h3>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 font-light">
                  {slide.description}
                </p>
                <button className="flex items-center gap-3 px-8 py-4 bg-[#E23744] text-white font-bold rounded-xl hover:bg-[#E23744]/90 transition-all group">
                  View Full Specifications <MoveRight className="transition-transform group-hover:translate-x-2" />
                </button>
              </div>

              {/* Slide Counter Indicator */}
              <div className="absolute top-10 right-10">
                <span className="text-white/20 text-8xl font-black tracking-tighter">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetShowCase;