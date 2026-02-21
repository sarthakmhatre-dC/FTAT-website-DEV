import React from 'react';
import { Users, Briefcase, DoorClosed, Settings2, Wind, Star } from 'lucide-react';

const ProductShowCase = ({ 
  title = "Toyota Fortuner Rental Service",
  images = [],
  features = [
    { icon: <Users size={20} />, label: "5 Seats" },
    { icon: <Briefcase size={20} />, label: "2 Bags" },
    { icon: <DoorClosed size={20} />, label: "4 Doors" },
    { icon: <Settings2 size={20} />, label: "Manual" },
    { icon: <Wind size={20} />, label: "AC" }
  ],
  rating = "4.9",
  reviews = "15966"
}) => {
  // Default fallback images if none provided
  const displayImages = images.length >= 5 ? images : [
    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1000",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=500",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=500",
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=500",
    "https://images.unsplash.com/photo-1555214107-f2e7c48c636f?q=80&w=500"
  ];

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[#2D2D2D] tracking-tight">
            {title}
          </h2>
          <div className="mt-4 h-1 w-20 bg-[#E23744] mx-auto rounded-full" />
        </div>

        {/* 2. Asymmetric Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-5 h-[70vh]">
          {/* Main Large Image: Occupies 2 rows and 2 columns */}
          <div className="lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img src={displayImages[0]} alt="Main View" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          
          {/* Smaller Grid Images */}
          {displayImages.slice(1, 5).map((img, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-48 lg:h-auto">
              <img src={img} alt={`Detail ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>

        {/* 3. Feature Cards & Rating Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-gray-50">
          
          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center w-24 h-24 bg-[#F4F4F2]/50 border border-gray-100 rounded-2xl p-4 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                <div className="text-[#3E4D86] mb-2">{item.icon}</div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Rating Display */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#EDA749] text-[#EDA749]" />
              ))}
              <span className="ml-2 text-sm font-bold text-[#2D2D2D]">Rating: {rating}</span>
            </div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              {reviews} verified reviews
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowCase;