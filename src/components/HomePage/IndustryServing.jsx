import React, { useState, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { industryLogos } from '../../data/industryData';

const IndustryServing = () => {
  // Separate states for hover-pause functionality
  const [isPaused1, setIsPaused1] = useState(false);
  const [isPaused2, setIsPaused2] = useState(false);
  
  // Ref for manual scrolling overrides
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // Duplicate data for seamless looping
  const fullRow1 = [...industryLogos.row1, ...industryLogos.row1, ...industryLogos.row1];
  const fullRow2 = [...industryLogos.row2, ...industryLogos.row2, ...industryLogos.row2];

  /**
   * Manual Navigation Handler
   * Uses clientWidth to move the row by 50% of the visible area
   */
  const handleManualNav = (row, direction) => {
    const container = row === 1 ? row1Ref.current : row2Ref.current;
    if (container) {
      const scrollAmount = container.clientWidth / 2;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const LogoCard = ({ logo }) => (
    <motion.div 
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex-shrink-0 w-48 h-24 md:w-64 md:h-32 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-6 mx-3 md:mx-4 transition-all duration-500 hover:shadow-2xl hover:border-[#3E4D86]/30 group cursor-default"
    >
      <img 
        src={logo.src} 
        alt={logo.name} 
        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500"
      />
    </motion.div>
  );

  return (
    <section className="w-full bg-[#F4F4F2] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-16 lg:px-20 mb-12 md:mb-16">
        <h2 className="heading-2 font-bold text-[#2D2D2D] tracking-tight">
          Serving Business <span className="text-[#E23744]">Across Industries</span>
        </h2>
        <div className="mt-4 h-1.5 w-24 md:w-32 bg-[#EDA749] rounded-full" />
      </div>

      <div className="space-y-12 md:space-y-16 relative">
        
        {/* Row 1 Wrapper */}
        <div className="relative group/row overflow-hidden">
          {/* Left Control */}
          <button 
            onClick={() => handleManualNav(1, 'left')}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/90 backdrop-blur-md border border-gray-100 rounded-full shadow-2xl transition-all hover:bg-[#E23744] hover:text-white active:scale-90 opacity-100 lg:opacity-0 lg:group-hover/row:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Control */}
          <button 
            onClick={() => handleManualNav(1, 'right')}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/90 backdrop-blur-md border border-gray-100 rounded-full shadow-2xl transition-all hover:bg-[#E23744] hover:text-white active:scale-90 opacity-100 lg:opacity-0 lg:group-hover/row:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={row1Ref}
            className="flex overflow-x-auto no-scrollbar touch-pan-x"
            onMouseEnter={() => setIsPaused1(true)}
            onMouseLeave={() => setIsPaused1(false)}
          >
            <motion.div 
              className="flex"
              animate={{ x: isPaused1 ? 0 : ["0%", "-33.33%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {fullRow1.map((logo, i) => (
                <LogoCard key={`r1-${i}`} logo={logo} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 2 Wrapper */}
        <div className="relative group/row overflow-hidden">
          {/* Left Control */}
          <button 
            onClick={() => handleManualNav(2, 'left')}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/90 backdrop-blur-md border border-gray-100 rounded-full shadow-2xl transition-all hover:bg-[#E23744] hover:text-white active:scale-90 opacity-100 lg:opacity-0 lg:group-hover/row:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Control */}
          <button 
            onClick={() => handleManualNav(2, 'right')}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/90 backdrop-blur-md border border-gray-100 rounded-full shadow-2xl transition-all hover:bg-[#E23744] hover:text-white active:scale-90 opacity-100 lg:opacity-0 lg:group-hover/row:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={row2Ref}
            className="flex overflow-x-auto no-scrollbar touch-pan-x"
            onMouseEnter={() => setIsPaused2(true)}
            onMouseLeave={() => setIsPaused2(false)}
          >
            <motion.div 
              className="flex"
              animate={{ x: isPaused2 ? 0 : ["-33.33%", "0%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 45,
                  ease: "linear",
                },
              }}
            >
              {fullRow2.map((logo, i) => (
                <LogoCard key={`r2-${i}`} logo={logo} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryServing;