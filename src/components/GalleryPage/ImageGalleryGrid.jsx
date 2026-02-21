import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Heart, Download, ImageIcon } from 'lucide-react';
import { galleryImages } from '../../data/galleryData'; // Import your data

const ImageGalleryGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const imagesPerPage = 12; // 3 columns x 4 rows
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  
  // Pagination Logic
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Optional: scroll to grid top
  };

  return (
    <section className="relative w-full py-24 bg-[#1e2542] overflow-hidden">
      {/* Brand Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(62,77,134,0.3)_0%,rgba(20,26,48,1)_100%)] z-0" />
      
      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[#E23744] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
              Curated Fleet Gallery
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              Platform's <span className="text-[#EDA749]">Gallery</span>
            </h2>
            <div className="mt-6 h-1.5 w-24 bg-[#E23744] rounded-full shadow-[0_0_20px_rgba(226,55,104,0.3)]" />
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
              Showing {indexOfFirstImage + 1} - {Math.min(indexOfLastImage, galleryImages.length)} of {galleryImages.length} Assets
            </p>
          </div>
        </div>

        {/* 3x4 Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {currentImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/5 bg-[#2D2D2D] shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img 
                src={img.src} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 ease-out" 
                alt={img.title} 
              />
              
              {/* Premium Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-transparent to-transparent p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[#E23744] font-bold tracking-[0.3em] text-[9px] uppercase mb-2">
                  {img.category} Selection
                </span>
                <h4 className="text-white font-black uppercase text-2xl tracking-tighter">
                  {img.title}
                </h4>
                <div className="mt-4 flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                  <ImageIcon size={14} /> View Details
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Pagination Controls */}
        <div className="flex items-center justify-center gap-4">
          <button 
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            className="p-4 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-[#E23744] transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-12 h-12 rounded-xl font-bold transition-all ${
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
            disabled={currentPage === totalPages}
            onClick={() => paginate(currentPage + 1)}
            className="p-4 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-[#E23744] transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Detail Modal (Preserved from existing UI) */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl transition-all duration-300">
          <div className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <button onClick={() => setSelectedImage(null)} className="absolute top-8 right-8 p-3 bg-gray-100 rounded-full hover:rotate-90 transition-transform z-10">
              <X size={20} />
            </button>
            <div className="md:w-1/2 h-[450px] md:h-auto overflow-hidden">
              <img src={selectedImage.src} className="w-full h-full object-cover" alt="Detail" />
            </div>
            <div className="p-12 md:w-1/2 flex flex-col justify-center">
              <span className="text-[#E23744] font-bold tracking-[0.4em] text-[10px] uppercase mb-4">Enterprise Selection</span>
              <h3 className="text-4xl font-black text-[#2D2D2D] mb-6 tracking-tight">{selectedImage.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-10 text-lg">
                Setting the industry benchmark in corporate travel through 
                unrivaled fleet quality and meticulous safety standards.
              </p>
              <div className="flex gap-4">
                <button className="flex-1 py-5 bg-[#E23744] text-white font-bold rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-xl hover:-translate-y-1 transition-all">
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