import React, { useState } from 'react';
import { X, MapPin, Calendar, Users, ArrowRight, Info } from 'lucide-react';

const PackagesGrid = ({ 
  title = "Our Curated Collections", 
  subtitle = "Hand-picked institutional travel experiences",
  packages = [] 
}) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section className="w-full py-24 bg-[#F4F4F2]/30">
      <div className="max-w-8xl mx-10 px-8 lg:px-16">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[#E23744] font-bold tracking-[0.5em] text-[10px] uppercase block mb-4">
              Explore Excellence
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#2D2D2D] tracking-tighter uppercase leading-none">
              {title.split(' ')[0]} <span className="text-[#3E4D86]">{title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{subtitle}</p>
          </div>
        </div>

        {/* Premium Separator Line: Faded with Centered Circle */}
        <div className="relative w-full h-px mb-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <div className="relative w-6 h-6 rounded-full border-4 border-[#3E4D86] bg-[#F4F4F2]/30 backdrop-blur-sm z-10 shadow-sm" />
        </div>

        {/* 3x3 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Layer */}
              <img 
                src={pkg.image} 
                alt={pkg.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content Layer */}
              <div className="absolute bottom-0 left-0 p-10 w-full transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
                  {pkg.title}
                </h3>
                <div className="flex items-center gap-4 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#EDA749]" /> {pkg.location}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#EDA749]" /> {pkg.duration}</span>
                </div>
              </div>

              {/* Hover Interaction Label */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#3E4D86]">
                  <Info size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Information Modal */}
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#2D2D2D]/90 backdrop-blur-md animate-in fade-in duration-300">
            <div className="relative bg-white w-full max-w-5xl rounded-[3.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
              <button 
                onClick={() => setSelectedPackage(null)}
                className="absolute top-8 right-8 z-20 w-12 h-12 bg-white/20 hover:bg-white text-white hover:text-[#E23744] rounded-2xl flex items-center justify-center transition-all backdrop-blur-md"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
                <img src={selectedPackage.image} className="w-full h-full object-cover" alt={selectedPackage.title} />
              </div>

              <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                <span className="text-[#E23744] font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">Package Details</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#2D2D2D] uppercase tracking-tighter mb-8 leading-none">
                  {selectedPackage.title}
                </h2>
                
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 text-justify font-medium">
                  {selectedPackage.description}
                </p>

                <div className="grid grid-cols-2 gap-8 mb-12 p-8 bg-[#F4F4F2] rounded-3xl">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Duration</p>
                    <p className="text-sm font-black text-[#3E4D86] uppercase">{selectedPackage.duration}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Capacity</p>
                    <p className="text-sm font-black text-[#3E4D86] uppercase">{selectedPackage.capacity}</p>
                  </div>
                </div>

                <button className="w-full py-5 bg-[#3E4D86] text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl hover:bg-[#E23744] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-blue-900/10">
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