import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageGallery = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const galleryImages = [
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070",
    "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2070",
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070",
    "https://images.unsplash.com/photo-1555214107-f2e7c48c636f?q=80&w=1974",
    "https://images.unsplash.com/photo-1562610378-51528632f211?q=80&w=1935",
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072"
  ];

  const handleManualNav = (direction) => {
    setIsPaused(true);
    if (scrollRef.current) {
      // Dynamic scroll based on screen width
      const scrollAmount = direction === 'left' ? -window.innerWidth * 0.7 : window.innerWidth * 0.7;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-24 overflow-hidden">
      <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-20 mb-10 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="heading-2 font-bold">
              Platform's <span className="text-[#3E4D86]">Gallery</span>
            </h2>
            <p className="mt-3 para-lg text-gray-500 font-medium">
              Want to explore more images?
            </p>
            <div className="mt-4 md:mt-6 h-1.5 w-16 md:w-20 bg-[#EDA749] rounded-full" />
          </div>

          <Link 
            to="/gallery" 
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#2D2D2D] text-white rounded-xl hover:bg-[#E23744] transition-all shadow-xl w-full md:w-auto"
          >
            <span className="para-muted text-white !tracking-widest !text-[10px] md:!text-xs">
              Explore Full Gallery
            </span>
            <ImageIcon size={18} className="group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="relative group">
        {/* Navigation Controls - Now visible on all screens */}
        <button 
          onClick={() => handleManualNav('left')}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-40 p-2.5 md:p-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-[#E23744] hover:text-white"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        <button 
          onClick={() => handleManualNav('right')}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-40 p-2.5 md:p-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-[#E23744] hover:text-white"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* The Marquee Container */}
        <div 
          ref={scrollRef}
          className="overflow-x-hidden scroll-smooth"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`flex whitespace-nowrap w-max animate-marquee-gallery ${isPaused ? 'pause-animation' : ''}`}>
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div 
                key={i} 
                className="inline-block w-[18rem] h-[22rem] sm:w-[25rem] sm:h-[25rem] md:w-[35rem] md:h-[30rem] mx-2 md:mx-3 overflow-hidden rounded-xl md:rounded-2xl bg-[#F4F4F2] shadow-sm border border-gray-100 group/item"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;