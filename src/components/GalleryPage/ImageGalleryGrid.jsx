import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Heart, Download } from 'lucide-react';

// Sub-component for each independent row
const GalleryRow = ({ images, direction, onImageClick }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Manual navigation moves the scroll position of the wrapper
  const handleManualNav = (dir) => {
    if (scrollRef.current) {
      const cardWidth = 424; // Card (400px) + Gap (24px)
      const scrollAmount = dir === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group w-full mb-8">
      {/* Row Navigation Chevrons */}
      <button 
        onClick={() => handleManualNav('left')}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#E23744] shadow-2xl"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={() => handleManualNav('right')}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#E23744] shadow-2xl"
      >
        <ChevronRight size={24} />
      </button>

      {/* Infinite Scroll Wrapper */}
      <div 
        ref={scrollRef}
        className="overflow-x-hidden scroll-smooth select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* The 'animate' class is applied to this inner div which contains doubled content */}
        <div className={`flex gap-6 w-max ${direction} ${isPaused ? 'pause-animation' : ''}`}>
          {/* Doubling the array ensures the loop is mathematically seamless */}
          {[...images, ...images].map((img, idx) => (
            <div
              key={`${img.id}-${idx}`}
              onClick={() => onImageClick(img)}
              className="relative w-[400px] h-[280px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/5 bg-[#2D2D2D] shadow-lg group/item"
            >
              <img 
                src={img.src} 
                className="w-full h-full object-cover opacity-60 group-hover/item:opacity-100 transition-all duration-700 group-hover/item:scale-110 ease-out" 
                alt={img.title} 
              />
              
              {/* Individual Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-10 flex flex-col justify-end opacity-0 group-hover/item:opacity-100 transition-all duration-500">
                <span className="text-[#E23744] font-bold tracking-[0.3em] text-[9px] uppercase mb-2">Fleet Detail</span>
                <h4 className="text-white font-black uppercase text-xl tracking-tighter">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageGalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Generating 9 Rows with 4 images each (which become 8 for the infinite loop)
  const rowData = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    direction: i % 2 === 0 ? 'animate-gallery-left' : 'animate-gallery-right',
    images: [
      { id: `r${i}-a`, src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800", title: "Premium Ride" },
      { id: `r${i}-b`, src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800", title: "Corporate Class" },
      { id: `r${i}-c`, src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800", title: "Scenic Fleet" },
      { id: `r${i}-d`, src: "https://images.unsplash.com/photo-1555214107-f2e7c48c636f?w=800", title: "Urban Executive" }
    ]
  }));

  return (
    <section className="relative w-full py-24 bg-[#1e2542] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(62,77,134,0.3)_0%,rgba(20,26,48,1)_100%)] z-0" />
      
      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Platform's <span className="text-[#EDA749]">Gallery</span>
          </h2>
          <div className="mt-6 h-1.5 w-24 bg-[#E23744] rounded-full shadow-[0_0_20px_rgba(226,55,104,0.3)]" />
        </div>

        {rowData.map((row) => (
          <GalleryRow 
            key={row.id} 
            images={row.images} 
            direction={row.direction} 
            onImageClick={setSelectedImage} 
          />
        ))}
      </div>

      {/* Premium Detail Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-500">
            <button onClick={() => setSelectedImage(null)} className="absolute top-8 right-8 p-3 bg-gray-100 rounded-full hover:rotate-90 transition-transform z-10">
              <X size={20} />
            </button>
            <div className="md:w-1/2 h-[400px] md:h-auto overflow-hidden">
              <img src={selectedImage.src} className="w-full h-full object-cover" alt="Selected" />
            </div>
            <div className="p-12 md:w-1/2 flex flex-col justify-center">
              <span className="text-[#E23744] font-bold tracking-[0.4em] text-[10px] uppercase mb-4">Enterprise Selection</span>
              <h3 className="text-4xl font-black text-[#2D2D2D] mb-6 tracking-tight">{selectedImage.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-10 text-lg">
                Setting the industry benchmark in corporate travel through 
                unrivaled fleet quality and meticulous safety standards.
              </p>
              <div className="flex gap-4">
                <button className="flex-1 py-5 bg-[#E23744] text-white font-bold rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-red-900/10 hover:shadow-red-900/30 transition-all">
                  Book This Fleet
                </button>
                <button className="flex-1 py-5 border-2 border-gray-100 text-[#2D2D2D] font-bold rounded-2xl text-[10px] uppercase tracking-[0.2em] hover:bg-[#F4F4F2] transition-all">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGalleryGrid;