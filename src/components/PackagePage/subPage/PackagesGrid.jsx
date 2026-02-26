import React, { useState } from 'react';
import { X, MapPin, Calendar, Users, ArrowRight, Info, Banknote } from 'lucide-react';

const PackagesGrid = ({
  title = "Our Curated Collections",
  subtitle = "Hand-picked institutional travel experiences",
  packages = []
}) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNow = (pkg) => {
    const ownerNumber = "9321685221";
    const message = `Inquiry for ${pkg.title}%0aRegion: ${pkg.location}%0aPrice: ${pkg.price}%0a------------------------%0aI would like to know more about this package.`;
    window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="w-full py-24 bg-[#F4F4F2]/30">
      <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-20">

        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[#E23744] font-black para-sm md:para-md uppercase tracking-[0.4em] md:tracking-[0.5em]">
              Explore Excellence
            </span>
            <h2 className="heading-1 font-black text-[#2D2D2D] tracking-tighter leading-none mt-5">
              {title.split(' ')[0]} <span className="text-[#3E4D86]">{title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-gray-400 para-sm font-bold uppercase tracking-wide">{subtitle}</p>
          </div>
        </div>

        {/* Premium Separator Line */}
        <div className="relative w-full h-px mb-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <div className="relative w-6 h-6 rounded-full border-4 border-[#3E4D86] bg-[#F4F4F2]/30 backdrop-blur-sm z-10 shadow-sm" />
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-10 w-full transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{pkg.title}</h3>
                <div className="flex items-center gap-4 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#EDA749]" /> {pkg.location}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#EDA749]" /> {pkg.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- RESTRUCTURED MODAL --- */}
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#2D2D2D]/90 backdrop-blur-md animate-in fade-in duration-300">
            <div className="relative bg-white w-full max-w-5xl rounded-[3.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl max-h-[90vh]">
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-8 right-8 z-20 w-12 h-12 bg-white/20 text-[#E23744] hover:rotate-90 transition-transform rounded-2xl flex items-center justify-center backdrop-blur-md"
              >
                <X size={24} />
              </button>

              {/* Modal Left: Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={selectedPackage.image} className="w-full h-full object-cover" alt={selectedPackage.title} />
              </div>

              {/* Modal Right: Restructured Content */}
              <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center overflow-y-auto">
                <span className="text-[#E23744] font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">Package Overview</span>
                <h2 className="text-3xl md:text-4xl font-black text-[#2D2D2D] uppercase tracking-tighter mb-6 leading-none">
                  {selectedPackage.title}
                </h2>

                {/* 1. Description */}
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 text-justify font-medium">
                  {selectedPackage.description}
                </p>

                {/* 2. Specs Grid: Region, Timeframe, Occupancy */}
                <div className="flex items-center justify-between gap-0 mb-8 p-8 bg-[#F4F4F2] rounded-[2rem] border border-gray-100">

                  {/* Left Section: Region */}
                  <div className="flex-1 flex flex-col items-start px-2">
                    <p className="text-[10px] font-black text-[#E23744] uppercase tracking-[0.3em] mb-2">
                      Region
                    </p>
                    <p className="text-xl md:text-2xl font-black text-[#2D2D2D] uppercase leading-none truncate w-full">
                      {selectedPackage.location}
                    </p>
                  </div>

                  {/* Clean Vertical Separator */}
                  <div className="h-12 w-px bg-gray-300 mx-4 md:mx-8" />

                  {/* Right Section: Timeframe */}
                  <div className="flex-1 flex flex-col items-start px-2">
                    <p className="text-[10px] font-black text-[#E23744] uppercase tracking-[0.3em] mb-2">
                      Timeframe
                    </p>
                    <p className="text-xl md:text-2xl font-black text-[#2D2D2D] uppercase leading-none">
                      {selectedPackage.duration}
                    </p>
                  </div>

                </div>

                {/* 3. Pricing Section */}
                <div className="mb-8 px-2 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-[#EDA749] uppercase tracking-[0.2em] mb-1">Institutional Rate</p>
                    <p className="text-3xl font-black text-[#2D2D2D]">{selectedPackage.price}</p>
                  </div>
                  <div className="p-4 bg-[#3E4D86]/5 rounded-2xl">
                    <Banknote size={24} className="text-[#3E4D86]" />
                  </div>
                </div>

                {/* 4. Extra Charges Note */}
                <div className="flex items-start gap-3 mb-10 p-4 border border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
                  <Info size={16} className="text-[#E23744] mt-0.5 shrink-0" />
                  <p className="text-[11px] font-bold text-gray-400 uppercase leading-tight tracking-wide">
                    Please Note: Toll, Parking, and GST will be charged extra as per actuals.
                  </p>
                </div>

                <button
                  onClick={() => handleBookNow(selectedPackage)}
                  className="w-full py-5 bg-[#3E4D86] text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl hover:bg-[#E23744] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-blue-900/10 active:scale-95"
                >
                  Book This Journey <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackagesGrid;