import React, { useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../../data/galleryData';

const ImageGalleryGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const galleryRef = useRef(null);
  
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const imagesPerPage = 12;

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);

  // 1. SCROLL FIX: This effect runs every time currentPage changes
  useEffect(() => {
    if (galleryRef.current) {
      const yOffset = -100; // Adjust for your navbar height
      const y = galleryRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }, [currentPage]); // Triggers on arrow clicks, number clicks, and back/forward navigation

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setSearchParams({ page: pageNumber });
    }
  };

  return (
    <section 
      ref={galleryRef} 
      id="gallery-section" 
      className="relative w-full py-16 md:py-24 bg-[#1e2542] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(62,77,134,0.3)_0%,rgba(20,26,48,1)_100%)] z-0" />

      <div className="relative z-10 max-w-8xl mx-auto px-8 md:px-16 lg:px-20">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div>
            <span className="text-[#E23744] font-bold lg:tracking-[0.3em] uppercase text-sm">
              Curated Fleet Gallery
            </span>
            <h2 className="mt-8 text-4xl md:text-5xl font-black text-white tracking-tight">
              Platform's <span className="text-[#EDA749]">Gallery</span>
            </h2>
            <div className="mt-4 md:mt-6 h-1.5 w-24 bg-[#E23744] rounded-full shadow-[0_0_20px_rgba(226,55,104,0.3)]" />
          </div>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
              View {indexOfFirstImage + 1} - {Math.min(indexOfLastImage, galleryImages.length)} / {galleryImages.length}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 min-h-[600px]">
          {currentImages.map((img) => (
            <div
              key={img.id}
              className="group relative h-[320px] md:h-[400px] rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#2D2D2D] shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 ease-out"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <p className="text-white text-sm font-bold uppercase tracking-widest leading-relaxed">
                  {img.alt}
                </p>
              </div> */}
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-20 hover:bg-[#E23744] transition-all cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i + 1}
                type="button"
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  currentPage === i + 1
                    ? 'bg-[#E23744] text-white shadow-lg'
                    : 'bg-white/5 text-white/40 hover:bg-white/10'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-20 hover:bg-[#E23744] transition-all cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageGalleryGrid;