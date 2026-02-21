import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CorporateSolutions = () => {
  const solutions = [
    {
      title: "Employee Pickup & Drop Services",
      description: "Daily shift transport with SLA-backed reliability",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
      tag: "🚐 Daily Shift"
    },
    {
      title: "Corporate & Airport Transfers",
      description: "Executive and client movement solutions",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
      tag: "✈️ Executive"
    },
    {
      title: "Long-Term Corporate Car Packages",
      description: "Monthly and contract-based vehicle deployments",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
      tag: "📦 Monthly"
    },
    {
      title: "Dedicated Fleet for Enterprises",
      description: "Customized vehicles for your business operations",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2070&auto=format&fit=crop",
      tag: "🧭 Customized"
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-8xl mx-10 px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-16 text-center lg:text-left">
          <span className="text-[#E23744] font-bold tracking-[0.3em] text-[10px] uppercase">
            Tailored Excellence
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-[#2D2D2D] tracking-tight">
            Our Corporate <span className="text-[#3E4D86]">Transportation Solutions</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-[#EDA749] rounded-full" />
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl bg-[#2D2D2D] aspect-[4/5] cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-orange-900/10"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Minimalist Tag */}
                <div className="mb-4 inline-block w-fit px-3 py-1 bg-[#EDA749] rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                  {item.tag}
                </div>

                <h3 className="text-2xl font-black text-white leading-tight mb-2 group-hover:mb-4 transition-all duration-500">
                  {item.title}
                </h3>

                {/* Hidden Description - revealed on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  {/* Premium Action Button */}
                  <button className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:text-[#EDA749] transition-colors">
                    Learn More <ArrowUpRight size={14} className="text-[#E23744]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateSolutions;