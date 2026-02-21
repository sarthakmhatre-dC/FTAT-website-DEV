import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IndustryServing = () => {
  const [isPaused, setIsPaused] = useState(false);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const row1Logos = ["Reliance", "Tata Group", "Infosys", "HDFC Bank", "Adani", "ICICI", "Mahindra", "Wipro", "L&T", "Axis Bank", "Airtel", "Jio"];
  const row2Logos = ["Amazon", "Google", "Microsoft", "Accenture", "Deloitte", "KPMG", "Capgemini", "Cognizant", "PwC", "IBM", "Oracle", "SAP"];

  const handleManualNav = (row, direction) => {
    const container = row === 1 ? row1Ref.current : row2Ref.current;
    if (container) {
      const cardWidth = 288; // 256px card + 32px margins
      const scrollTarget = direction === 'left' 
        ? container.scrollLeft - cardWidth 
        : container.scrollLeft + cardWidth;

      container.scrollTo({
        left: scrollTarget,
        behavior: 'smooth'
      });
    }
  };

  const LogoCard = ({ name }) => (
    <div className="flex-shrink-0 w-64 h-32 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center p-6 mx-4 hover:shadow-md transition-all duration-300 group">
      <span className="text-gray-400 font-bold tracking-tight text-xl uppercase opacity-40 group-hover:opacity-100 group-hover:text-[#3E4D86] transition-all">
        {name}
      </span>
    </div>
  );

  return (
    <section className="w-full bg-[#F4F4F2] py-24 overflow-hidden">
      <div className="max-w-8xl mx-10 px-6 lg:px-12 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] tracking-tight">
          Serving Business <span className="text-[#E23744]">Across Industries</span>
        </h2>
        <div className="mt-4 h-1.5 w-20 bg-[#EDA749] rounded-full" />
      </div>

      <div className="space-y-10">
        {/* Row 1 */}
        <div className="relative group">
          <button 
            onClick={() => handleManualNav(1, 'left')}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-white border border-gray-100 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-[#E23744] hover:text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => handleManualNav(1, 'right')}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-white border border-gray-100 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-[#E23744] hover:text-white"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Wrapper */}
          <div 
            ref={row1Ref}
            className="overflow-x-hidden scroll-smooth"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`flex whitespace-nowrap w-max animate-marquee ${isPaused ? 'pause-animation' : ''}`}>
              {[...row1Logos, ...row1Logos, ...row1Logos].map((name, i) => (
                <LogoCard key={`r1-${i}`} name={name} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative group">
          <button 
            onClick={() => handleManualNav(2, 'left')}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-white border border-gray-100 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-[#E23744] hover:text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => handleManualNav(2, 'right')}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-white border border-gray-100 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-[#E23744] hover:text-white"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={row2Ref}
            className="overflow-x-hidden scroll-smooth"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`flex whitespace-nowrap w-max animate-marquee-reverse ${isPaused ? 'pause-animation' : ''}`}>
              {[...row2Logos, ...row2Logos, ...row2Logos].map((name, i) => (
                <LogoCard key={`r2-${i}`} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryServing;