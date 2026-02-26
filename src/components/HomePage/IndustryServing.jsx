import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { industryLogos } from '../../data/industryData';

const IndustryServing = () => {
  // Independent states to control the "paused" property
  const [isPaused1, setIsPaused1] = useState(false);
  const [isPaused2, setIsPaused2] = useState(false);

  // Refs to handle the mobile resume delay timers cleanly
  const timer1Ref = useRef(null);
  const timer2Ref = useRef(null);

  // Triple the data for a mathematically seamless infinite loop
  const row1Items = [...industryLogos.row1, ...industryLogos.row1, ...industryLogos.row1];
  const row2Items = [...industryLogos.row2, ...industryLogos.row2, ...industryLogos.row2];

  // Cleanup timers to prevent memory leaks if component unmounts
  useEffect(() => {
    return () => {
      if (timer1Ref.current) clearTimeout(timer1Ref.current);
      if (timer2Ref.current) clearTimeout(timer2Ref.current);
    };
  }, []);

  // --- Row 1 Interaction Handlers ---
  const handleStart1 = () => {
    if (timer1Ref.current) clearTimeout(timer1Ref.current);
    setIsPaused1(true);
  };

  const handleEnd1 = (isMobile = false) => {
    if (isMobile) {
      // 2.5 second delay before resuming on mobile
      timer1Ref.current = setTimeout(() => setIsPaused1(false), 2500);
    } else {
      // Resume immediately when mouse leaves on desktop
      setIsPaused1(false);
    }
  };

  // --- Row 2 Interaction Handlers ---
  const handleStart2 = () => {
    if (timer2Ref.current) clearTimeout(timer2Ref.current);
    setIsPaused2(true);
  };

  const handleEnd2 = (isMobile = false) => {
    if (isMobile) {
      timer2Ref.current = setTimeout(() => setIsPaused2(false), 2500);
    } else {
      setIsPaused2(false);
    }
  };

  const LogoCard = ({ logo }) => (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="flex-shrink-0 w-44 h-24 md:w-64 md:h-32 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-6 mx-3 md:mx-4 hover:shadow-xl hover:border-[#3E4D86]/20 cursor-pointer will-change-transform"
    >
      <img 
        src={logo.src} 
        alt={logo.name} 
        className="max-w-full max-h-full object-contain pointer-events-none"
      />
    </motion.div>
  );

  return (
    <section className="w-full bg-[#F4F4F2] py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Injecting custom keyframes directly for portability. 
        Alternatively, you can move these to your index.css or tailwind.config.js 
      */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }
      `}</style>

      <div className="max-w-8xl mx-auto px-6 md:px-16 lg:px-20 mb-12 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="heading-2 font-bold text-[#2D2D2D] tracking-tight">
              Serving Business <span className="text-[#E23744]">Across Industries</span>
            </h2>
            <div className="mt-4 h-1.5 w-24 md:w-32 bg-[#EDA749] rounded-full" />
          </div>

          <Link 
            to="/clients" 
            className="group flex items-center gap-3 px-8 py-4 bg-[#2D2D2D] text-white rounded-xl hover:bg-[#E23744] transition-all shadow-xl w-fit"
          >
            <span className="para-muted text-white !tracking-widest !text-[10px] md:!text-xs uppercase font-black">
              Explore Our Clients
            </span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="space-y-8 md:space-y-12">
        {/* Row 1: Infinite Leftward Scroll */}
        <div 
          className="relative flex overflow-hidden py-4"
          onMouseEnter={handleStart1}
          onMouseLeave={() => handleEnd1(false)}
          onTouchStart={handleStart1}
          onTouchEnd={() => handleEnd1(true)}
        >
          <div 
            className="flex animate-scroll-left will-change-transform"
            style={{ animationPlayState: isPaused1 ? 'paused' : 'running' }}
          >
            {row1Items.map((logo, i) => (
              <LogoCard key={`row1-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Row 2: Infinite Rightward Scroll */}
        <div 
          className="relative flex overflow-hidden py-4"
          onMouseEnter={handleStart2}
          onMouseLeave={() => handleEnd2(false)}
          onTouchStart={handleStart2}
          onTouchEnd={() => handleEnd2(true)}
        >
          <div 
            className="flex animate-scroll-right will-change-transform"
            style={{ animationPlayState: isPaused2 ? 'paused' : 'running' }}
          >
            {row2Items.map((logo, i) => (
              <LogoCard key={`row2-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryServing;