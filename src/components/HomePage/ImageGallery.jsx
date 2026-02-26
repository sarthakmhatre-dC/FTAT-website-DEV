import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageGallery = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const galleryImages = [
    "/galleryImages/galleryImage1.webp",
    "/galleryImages/galleryImage3.webp",
    "/galleryImages/galleryImage4.webp",
    "/galleryImages/galleryImage5.webp",
    "/galleryImages/galleryImage7.jpg",
    "/galleryImages/galleryImage8.webp",
    "/galleryImages/galleryImage10.webp",
  ];

  // Logic to handle scroll position and button states
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleManualNav = (direction) => {
    if (scrollRef.current) {
      // Moves by exactly one card width + gap for smooth 1-by-1 transition
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile 
        ? scrollRef.current.clientWidth 
        : scrollRef.current.clientWidth / 3; 

      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="w-full bg-white py-24 md:py-40 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-16 lg:px-20 mb-10 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          
          <div className="max-w-2xl">
            <h2 className="heading-1 font-bold text-[#2D2D2D]">
              Our <span className="text-[#3E4D86]">Gallery</span>
            </h2>
            <p className="mt-3 para-lg text-gray-500 font-medium">
              Want to explore our images?
            </p>
            <div className="mt-4 md:mt-6 h-1.5 w-16 md:w-20 bg-[#EDA749] rounded-full" />
          </div>

          {/* Navigation Controls Beside CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleManualNav('left')}
                disabled={!canScrollLeft}
                className="p-4 bg-[#F4F4F2] text-[#2D2D2D] rounded-xl hover:bg-[#E23744] hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-sm active:scale-95"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => handleManualNav('right')}
                disabled={!canScrollRight}
                className="p-4 bg-[#F4F4F2] text-[#2D2D2D] rounded-xl hover:bg-[#E23744] hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-sm active:scale-95"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <Link 
              to="/gallery" 
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#2D2D2D] text-white rounded-xl hover:bg-[#E23744] transition-all shadow-xl w-full sm:w-auto"
            >
              <span className="para-md text-white !tracking-widest uppercase">
                Explore Full Gallery
              </span>
              <ImageIcon size={18} className="group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Desktop Elegant Fades */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Gallery Grid Wrapper */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-6 md:px-32 gap-4 md:gap-6"
        >
          {galleryImages.map((img, i) => (
            <div 
              key={i} 
              className="shrink-0 w-full md:w-[calc(33.333%-16px)] h-[22rem] md:h-[30rem] overflow-hidden rounded-2xl bg-[#F4F4F2] border border-gray-100 group/item snap-center shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              <img 
                src={img} 
                alt={`Gallery Asset ${i}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;