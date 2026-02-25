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
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-8xl mx-auto">

        {/* Header Section */}
        <div className="mb-12 md:mb-16 lg:text-left">
          <div className="max-w-2xl">
            <span className="text-[#E23744] font-bold lg:tracking-[0.3em] para-md uppercase">
              Tailored Excellence
            </span>
            <h2 className="heading-2 font-black text-[#2D2D2D] tracking-tight">
              Our Corporate <br className="hidden sm:block" />
              <span className="text-[#3E4D86]">Transportation Solutions</span>
            </h2>
            <div className="mt-6 h-1.5 w-20 bg-[#EDA749] rounded-full" />
          </div>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => (
            <div
              key={index}
              /* Modified: Added group-active: and focus: for mobile touch interaction */
              className="group relative overflow-hidden rounded-[2rem] md:rounded-3xl bg-[#2D2D2D] aspect-[4/5] cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-orange-900/10 active:scale-95 touch-manipulation"
              tabIndex="0"
            >
              {/* Background Image: Scale handled for both hover and mobile focus */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110 opacity-70 group-hover:opacity-40 group-focus:opacity-40"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Minimalist Tag */}
                <div className="mb-4 inline-block w-fit px-3 py-1 bg-[#EDA749] rounded-full para-xs font-black text-white uppercase tracking-widest">
                  {item.tag}
                </div>

                <h3 className="heading-4 !font-black text-white leading-tight mb-2 group-hover:mb-4 group-focus:mb-4 transition-all duration-500">
                  {item.title}
                </h3>

                {/* Content revealed on Desktop Hover OR Mobile Focus/Touch */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 group-focus:max-h-40 transition-all duration-500 ease-in-out">
                  <p className="para-sm text-gray-300 mb-6 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Premium Action Button */}
                  <button className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest hover:text-[#EDA749] transition-colors">
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