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
    <section className="w-full bg-white py-12 md:py-24">
      {/* Container: Changed mx-10 to responsive mx-auto with horizontal padding */}
      <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-20">
        
        {/* Header Section */}
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[#E23744] font-bold lg:tracking-[0.4em] para-md uppercase mb-4 block">
              The Fleet Experience
            </span>
            <h2 className="heading-2">
              Premium Vehicles for <br className="hidden sm:block" />
              <span className="text-[#3E4D86]">Every Corporate Need</span>
            </h2>
            <div className="mt-4 md:mt-6 h-1 w-16 md:w-20 bg-[#EDA749] rounded-full" />
          </div>

          {/* Slider Controls: Centered on mobile for better thumb reach */}
          <div className="flex gap-3 md:gap-4 self-start md:self-auto">
            <button 
              onClick={prevSlide}
              className="p-3 md:p-4 border border-gray-200 rounded-full hover:bg-[#F4F4F2] hover:border-[#3E4D86] transition-all group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-[#2D2D2D] group-hover:text-[#3E4D86]" size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 md:p-4 border border-gray-200 rounded-full hover:bg-[#F4F4F2] hover:border-[#3E4D86] transition-all group"
              aria-label="Next slide"
            >
              <ChevronRight className="text-[#2D2D2D] group-hover:text-[#3E4D86]" size={20} />
            </button>
          </div>
        </div>

        {/* Main Slider Area: Changed aspect ratio for mobile (taller) */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-[#2D2D2D] shadow-2xl">
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
              
              {/* Sophisticated Gradient Overlay: Adjusted for mobile readability */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-tr from-black/90 via-black/40 to-transparent" />

              {/* Content Placement */}
              <div className="absolute bottom-0 left-0 p-6 md:p-16 w-full md:max-w-2xl z-10">
                <h3 className="heading-3 text-white mb-3 md:mb-4">
                  {slide.title}
                </h3>
                <p className="para-lg text-gray-300 mb-6 md:mb-8 max-w-lg">
                  {slide.description}
                </p>
                <button className="flex items-center justify-center md:justify-start gap-3 w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#E23744] text-white font-bold rounded-xl hover:bg-[#E23744]/90 transition-all group">
                  <span className="para-md font-bold">View Full Specifications</span>
                  <MoveRight size={20} className="transition-transform group-hover:translate-x-2" />
                </button>
              </div>

              {/* Slide Counter Indicator: Scaled down for mobile */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 pointer-events-none">
                <span className="text-white/10 text-6xl md:text-8xl font-black tracking-tighter">
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