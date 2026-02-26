import React, { useState, useEffect } from 'react'; // Added useEffect
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FleetShowCase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fleet = [
    {
      title: "Compliance & Safety First",
      description: "Ensures safety and compliance through rigorous driver verification, meticulous documentation, and standardized SOPs.",
      image: "https://images.unsplash.com/photo-1555214107-f2e7c48c636f?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "On-Time, Every Day",
      description: "Guarantees service reliability through process-driven operations paired with continuous real-time monitoring.",
      image: "https://images.unsplash.com/photo-1562610378-51528632f211?q=80&w=1935&auto=format&fit=crop",
    },
    {
      title: "Corporate Billing & MIS",
      description: "Maximizes financial clarity with transparent invoicing, detailed data reports, and strict cost control measures.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
    },
    {
      title: "Real-Time Tracking",
      description: "Optimizes security and efficiency using a GPS-enabled fleet integrated with advanced remote control systems.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    },
    {
      title: "Dedicated Account Management",
      description: "Simplifies communication by providing a dedicated single point of contact for your organization to manage all needs.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === fleet.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? fleet.length - 1 : prevIndex - 1));
  };

  // --- Auto-Play Logic ---
  useEffect(() => {
    // Set the interval for 5 seconds
    const autoPlayTimer = setInterval(() => {
      nextSlide();
    }, 8000);

    // Cleanup function: This resets the timer whenever currentIndex changes 
    // (either via auto-play or manual button click)
    return () => clearInterval(autoPlayTimer);
  }, [currentIndex]);

  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-20">

        {/* Header Section */}
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[#E23744] font-bold lg:tracking-[0.3em] para-md uppercase mb-4 block">
              Our Standards
            </span>
            <h2 className="heading-2">
              Why Companies Choose<br className="hidden sm:block" />
              <span className="text-[#3E4D86]">Facilities Tours and Travels</span>
            </h2>
            <div className="mt-4 md:mt-6 h-1 w-16 md:w-20 bg-[#EDA749] rounded-full" />
          </div>

          {/* Slider Controls */}
          <div className="flex gap-3 md:gap-4 self-start md:self-auto">
            <button
              onClick={prevSlide}
              className="p-3 md:p-4 border border-gray-200 rounded-full hover:bg-[#F4F4F2] hover:border-[#3E4D86] transition-all group focus:outline-none focus:ring-2 focus:ring-[#3E4D86]/20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-[#2D2D2D] group-hover:text-[#3E4D86]" size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 md:p-4 border border-gray-200 rounded-full hover:bg-[#F4F4F2] hover:border-[#3E4D86] transition-all group focus:outline-none focus:ring-2 focus:ring-[#3E4D86]/20"
              aria-label="Next slide"
            >
              <ChevronRight className="text-[#2D2D2D] group-hover:text-[#3E4D86]" size={20} />
            </button>
          </div>
        </div>

        {/* Main Slider Area */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-[#2D2D2D] shadow-2xl">
          {fleet.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentIndex
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-0 scale-105 pointer-events-none"
                }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-60"
              />

              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-tr from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 md:p-16 w-full md:max-w-2xl z-10">
                <h3 className="heading-3 text-white mb-3 md:mb-4">
                  {slide.title}
                </h3>
                <p className="para-lg text-gray-300 mb-6 md:mb-8 max-w-xl">
                  {slide.description}
                </p>
              </div>

              {/* Progress Bar: Visual cue for the 5s timer */}
              {/* <div className="absolute bottom-0 left-0 h-1.5 bg-[#E23744]/20 w-full z-20 overflow-hidden">
                <div
                  key={currentIndex}
                  className="h-full bg-[#E23744] shadow-[0_0_15px_#E23744]"
                  style={{
                    transformOrigin: 'left',

                    transform: index === currentIndex ? 'scaleX(1)' : 'scaleX(0)',
                    width: '100%',

                    transition: index === currentIndex
                      ? 'transform 10000ms linear'
                      : 'none'
                  }}
                />
              </div> */}

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