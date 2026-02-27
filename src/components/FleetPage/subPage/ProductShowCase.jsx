import React, { useState } from 'react';
import { Users, Briefcase, DoorClosed, Settings2, Wind, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductShowCase = ({
  categoryTitle = "Fleet Showcase",
  cars = []
}) => {
  const [activeCarIndex, setActiveCarIndex] = useState(0);

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState(0);

  if (!cars || cars.length === 0) return null;

  const activeCar = cars[activeCarIndex];
  // Retrieve all images (the 5 displayed + the extras we added in the data)
  const allImages = activeCar.images || [];

  const dynamicFeatures = [
    { icon: <Users size={20} />, label: activeCar.features?.seats || "5 Seats" },
    { icon: <Briefcase size={20} />, label: activeCar.features?.bags || "2 Bags" },
    { icon: <DoorClosed size={20} />, label: activeCar.features?.doors || "4 Doors" },
    { icon: <Settings2 size={20} />, label: activeCar.features?.transmission || "Automatic" },
    { icon: <Wind size={20} />, label: activeCar.features?.ac || "AC" }
  ];

  const displayImages = allImages.slice(0, 5); // Display only the first 5 in the grid

  // Modal Controls
  const openModal = (index) => {
    setCurrentModalImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = (e) => {
    e.stopPropagation(); // Prevents clicking the arrow from closing the modal
    setCurrentModalImage((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation(); // Prevents clicking the arrow from closing the modal
    setCurrentModalImage((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center"
      style={{
        paddingTop: 'clamp(5rem, 9vw, 7rem)',
        paddingBottom: 'clamp(5rem, 9vw, 7rem)'
      }}
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('/backgroundImages/FleetPageCTA.webp')`,
          opacity: 0.10
        }}
      />

      <div className="relative z-20 max-w-8xl mx-auto px-8 sm:px-16 lg:px-20 w-full">

        {/* Header Container */}
        <div className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="text-center lg:text-left flex-1">
            <div className="flex flex-col md:flex-row items-center lg:justify-start justify-center gap-4 mb-6">
              <span className="text-[#E23744] font-black para-md md:para-md uppercase tracking-[0.4em] md:tracking-[0.5em]">
                {categoryTitle}
              </span>
              <div className="h-px w-12 bg-[#2D2D2D]/10 hidden md:block" />
              <div className="h-1 w-8 bg-[#E23744]/20 md:hidden rounded-full" />
            </div>

            <h2 className="heading-1 font-bold text-[#2D2D2D] leading-[1.1] md:leading-[0.95] tracking-tighter">
              {activeCar.title}
            </h2>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="flex items-stretch p-1 sm:p-1.5 bg-[#F4F4F2]/80 backdrop-blur-sm rounded-[1rem] sm:rounded-2xl border border-gray-100/50 shadow-inner w-full sm:w-auto">
              {cars.map((car, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCarIndex(idx);
                    setIsModalOpen(false); // Reset modal if switching cars
                  }}
                  className={`flex-1 sm:flex-none flex items-center justify-center text-center px-2 sm:px-8 py-2.5 sm:py-3 rounded-xl text-[10px] sm:text-sm !font-black uppercase tracking-wider sm:tracking-widest transition-all duration-500 transform leading-tight sm:whitespace-nowrap ${activeCarIndex === idx
                    ? 'bg-[#3E4D86] text-white shadow-[0_4px_15px_rgba(62,77,134,0.3)] scale-[1.02] sm:scale-105 z-10'
                    : 'text-gray-400 hover:text-[#2D2D2D] hover:bg-white/40 scale-100 z-0'
                    }`}
                >
                  <span className="max-w-full drop-shadow-sm">
                    {car.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-12 lg:h-[75vh]">
          {/* Main Large Image */}
          <div
            key={`${activeCarIndex}-main`}
            onClick={() => openModal(0)}
            className="col-span-2 lg:row-span-2 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 h-[300px] md:h-[450px] lg:h-auto group cursor-pointer relative"
          >
            <img
              src={displayImages[0]}
              alt="Main View"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Hover overlay for premium feel */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Gallery</span>
            </div>
          </div>

          {/* 4 Smaller Grid Images */}
          {displayImages.slice(1, 5).map((img, idx) => (
            <div
              key={`${activeCarIndex}-${idx}`}
              onClick={() => openModal(idx + 1)} // idx + 1 because we sliced the first one off
              className="col-span-1 rounded-[1.2rem] md:rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 h-32 sm:h-48 lg:h-auto group cursor-pointer relative"
            >
              <img
                src={img}
                alt={`Detail ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Footer: Features & Ratings */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-12 border-t-2 border-[#E23744]/10">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-5 w-full md:w-auto">
            {dynamicFeatures.map((item, idx) => (
              <div
                key={idx}
                // Slightly increased min-w to 105px to prevent longer words from squeezing
                className="flex flex-col items-center justify-center w-[30%] min-w-[105px] max-w-[120px] sm:w-24 sm:max-w-none lg:w-28 aspect-square bg-white shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100/80 rounded-[1.2rem] md:rounded-[1.5rem] p-2 sm:p-3 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group shrink-0"
              >
                <div className="text-[#3E4D86] group-hover:text-[#E23744] transition-all duration-300 mb-1.5 sm:mb-2 transform group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Removed break-words so text wraps naturally by word, not by letter */}
                <span className="text-[10px] md:text-xs font-black text-gray-500 group-hover:text-gray-700 transition-colors duration-300 uppercase tracking-wider sm:tracking-widest text-center leading-tight px-1 w-full">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <div className="flex items-center gap-1.5 mb-2">
              {[...Array(5)].map((_, i) => {
                // Calculates how much of the current star should be filled (e.g., 0%, 70%, 100%)
                const fillPercentage = Math.min(Math.max(activeCar.rating - i, 0), 1) * 100;

                return (
                  <div key={i} className="relative inline-block">
                    {/* Background outline star (shows when not fully filled) */}
                    <Star size={18} className="text-gray-300" />

                    {/* Foreground colored star, cropped by percentage */}
                    <div
                      className="absolute top-0 left-0 overflow-hidden h-full"
                      style={{ width: `${fillPercentage}%` }}
                    >
                      <Star size={18} className="fill-[#EDA749] text-[#EDA749]" />
                    </div>
                  </div>
                );
              })}
              <span className="ml-2 para-sm !font-black text-[#2D2D2D]">
                Rating: {activeCar.rating}
              </span>
            </div>
            <p className="para-xs text-gray-400 uppercase tracking-[0.2em]">
              {activeCar.reviews} verified reviews
            </p>
          </div>
        </div>
      </div>

      {/* INFINITE IMAGE GALLERY MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={closeModal} // Clicking the background closes it
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 md:top-8 md:right-8 z-50 p-2 bg-white/10 hover:bg-[#E23744] text-white rounded-full transition-all duration-300"
          >
            <X size={28} />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 z-50 p-3 bg-white/10 hover:bg-white text-white hover:text-[#2D2D2D] rounded-full transition-all duration-300"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Main Image Container */}
          <div
            className="relative w-full max-w-[90vw] md:max-w-[80vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Clicking the image shouldn't close the modal
          >
            <img
              src={allImages[currentModalImage]}
              alt={`${activeCar.name} Gallery ${currentModalImage + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />

            {/* Image Counter */}
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-white/70 font-bold tracking-widest text-sm uppercase">
              {currentModalImage + 1} / {allImages.length}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 z-50 p-3 bg-white/10 hover:bg-white text-white hover:text-[#2D2D2D] rounded-full transition-all duration-300"
          >
            <ChevronRight size={32} />
          </button>

        </div>
      )}
    </section>
  );
};

export default ProductShowCase;