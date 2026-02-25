import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Heart, Download, ImageIcon } from 'lucide-react';
import { galleryImages } from '../../data/galleryData';

const ImageGalleryGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const imagesPerPage = 12;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#1e2542] overflow-hidden">
      {/* Brand Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(62,77,134,0.3)_0%,rgba(20,26,48,1)_100%)] z-0" />

      <div className="relative z-10 max-w-8xl mx-auto px-8 md:px-16 lg:px-20">
        {/* Header Section */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div>
            <span className="text-[#E23744] font-bold lg:tracking-[0.3em] para-md uppercase">
              Curated Fleet Gallery
            </span>
            <h2 className="mt-8 text-4xl md:text-5xl font-black text-white tracking-tight">
              Platform's <span className="text-[#EDA749]">Gallery</span>
            </h2>
            <div className="mt-4 md:mt-6 h-1.5 w-20 md:w-24 bg-[#E23744] rounded-full shadow-[0_0_20px_rgba(226,55,104,0.3)]" />
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl self-start md:self-auto">
            <p className="text-white/60 para-sm !font-bold uppercase tracking-widest">
              Showing {indexOfFirstImage + 1} - {Math.min(indexOfLastImage, galleryImages.length)} of {galleryImages.length} Assets
            </p>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {currentImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative h-[320px] md:h-[400px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/5 bg-[#2D2D2D] shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 ease-out"
                onError={(e) => {
                  // If the constructed path (e.g. .jpg) fails, try the other common extension
                  const currentSrc = e.target.src;
                  if (currentSrc.endsWith('.jpg')) {
                    e.target.src = currentSrc.replace('.jpg', '.webp');
                  } else if (currentSrc.endsWith('.webp')) {
                    e.target.src = currentSrc.replace('.webp', '.jpg');
                  }
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-transparent to-transparent p-8 md:p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[#E23744] para-xs !font-bold uppercase mb-2">
                  {img.category} Selection
                </span>
                <h4 className="text-white heading-4 uppercase">
                  {img.title}
                </h4>
                <div className="mt-4 flex items-center gap-2 text-white/60 para-xs !font-bold uppercase tracking-widest">
                  <ImageIcon size={14} /> View Details
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Pagination Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-[#E23744] transition-all"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-xl para-sm !font-bold transition-all ${currentPage === i + 1
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
            className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-[#E23744] transition-all"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-xl">
          <div className="relative w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-gray-100 rounded-full hover:rotate-90 transition-transform z-10">
              <X size={20} />
            </button>
            <div className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-auto overflow-hidden">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 ease-out"
                onError={(e) => {
                  // If the constructed path (e.g. .jpg) fails, try the other common extension
                  const currentSrc = e.target.src;
                  if (currentSrc.endsWith('.jpg')) {
                    e.target.src = currentSrc.replace('.jpg', '.webp');
                  } else if (currentSrc.endsWith('.webp')) {
                    e.target.src = currentSrc.replace('.webp', '.jpg');
                  }
                }}
              />
            </div>
            <div className="p-8 md:p-12 lg:p-16 w-full md:w-1/2 flex flex-col justify-center">
              <span className="text-[#E23744] para-muted block mb-4">Enterprise Selection</span>
              <h3 className="heading-3 text-[#2D2D2D] mb-6 uppercase">{selectedImage.title}</h3>
              <p className="para-lg text-gray-500 mb-8 md:mb-10">
                {selectedImage.description} {/* This now pulls dynamically from your data */}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-4 md:py-5 bg-[#E23744] text-white font-bold rounded-2xl para-xs uppercase !tracking-[0.2em] shadow-xl hover:-translate-y-1 transition-all">
                  Book This Fleet
                </button>
                <button className="flex-1 py-4 md:py-5 border-2 border-gray-100 text-[#2D2D2D] font-bold rounded-2xl para-xs uppercase !tracking-[0.2em] hover:bg-[#F4F4F2] transition-all">
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