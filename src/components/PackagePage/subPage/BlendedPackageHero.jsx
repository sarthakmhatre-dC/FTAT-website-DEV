import React from 'react';
import { ArrowDown, Palmtree, Map } from 'lucide-react';

const BlendedPackageHero = ({
  tag = "Exploration",
  title = "Curated Escapes for the Soul.",
  description = "Vacation packages are hand-picked journeys designed to eliminate the stress of planning. We bundle premium accommodation, seamless transit, and unique local experiences into a single, institutionalized itinerary.",
  image = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000"
}) => {

  return (
    <section className="relative w-full min-h-[70vh] flex items-center bg-white overflow-hidden py-20">
      <div className="max-w-8xl mx-10 px-8 lg:px-16 w-full text-left">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Blended Image */}
          <div className="relative w-full lg:w-1/2 h-[500px] group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white z-10 hidden lg:block" />
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover rounded-[3rem] lg:rounded-r-none shadow-2xl transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#EDA749] p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
              <Map className="text-white" size={32} />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Palmtree size={18} className="text-[#E23744]" />
              <span className="text-[#E23744] font-bold text-[10px] uppercase tracking-[0.5em]">
                {tag}
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#2D2D2D] leading-[0.95] tracking-tighter uppercase mb-8">
              {title}
            </h2>

            <p className="text-lg text-gray-500 font-medium leading-relaxed text-justify mb-10 max-w-xl">
              {description}
            </p>

            {/* Static Action Button */}
            <button 
              className="group flex items-center gap-4 px-10 py-5 bg-[#3E4D86] text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-900/20 hover:bg-[#2D2D2D] transition-all duration-300"
            >
              Explore Our Packages 
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlendedPackageHero;