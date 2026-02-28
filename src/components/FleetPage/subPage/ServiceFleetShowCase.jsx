import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Shield, Clock, MapPin, Star, MoveRight } from 'lucide-react';

const ServiceFleetShowcase = ({
  // Accepts the current category from the parent component (e.g., from useParams)
  currentCategoryId = "sedans", 
  services = [
    { icon: <CheckCircle size={22} />, text: "Quality Vehicles" },
    { icon: <Shield size={22} />, text: "Safe Travels" },
    { icon: <Clock size={22} />, text: "24/7 Support" },
    { icon: <MapPin size={22} />, text: "Multiple Locations" },
    { icon: <Star size={22} />, text: "Premium Service" }
  ],
  // Updated to match your new data structure keys exactly
  fleetCategories = [
    { id: "sedans", src: "/fleet/Sedan/Maruti_Swift_Dzire/Dezire.avif", name: "Premium Sedans", category: "Smart" },
    { id: "suvs", src: "/fleet/SUV/Maruti_Eritiga/front-left-side-47.avif", name: "Spacious SUVs", category: "Rugged" },
    { id: "buses", src: "/fleet/Bus/Force_Urbania/exterior-5-1.jpg", name: "Luxury Coaches", category: "Mass Transit" }
  ]
}) => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-white px-8 md:px-16 lg:px-20 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        
        {/* 1. Optimized Service Bar */}
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-8">
            <div className="flex-shrink-0 text-center lg:text-left">
              <span className="text-[#E23744] font-black para-sm md:para-md uppercase tracking-[0.4em] md:tracking-[0.5em]">Our Standards</span>
              <h3 className="heading-3 font-black text-[#2D2D2D] uppercase tracking-tighter mt-5">
                We <span className="text-[#3E4D86]">Offer:</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row items-center justify-center lg:justify-end gap-y-10 lg:gap-0 flex-grow">
              {services.map((service, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start lg:flex-row lg:px-10 first:pl-0 border-r-0 lg:border-r-[2px] border-gray-100 last:border-none group/service">
                  <div className="flex flex-col items-center lg:items-center gap-4 transition-all duration-300 group-hover/service:-translate-y-1">
                    <div className="text-[#3E4D86] group-hover/service:text-[#E23744]">
                      {service.icon}
                    </div>
                    <span className="para-sm !font-black text-gray-400 group-hover/service:text-[#2D2D2D] uppercase tracking-[0.2em] text-center lg:text-center">
                      {service.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 w-full h-px bg-gradient-to-r from-gray-100 via-gray-200 to-transparent hidden lg:block" />
        </div>

        {/* 2. Fleet Categories Grid */}
        <div className="relative group">
          <div className="mb-12 max-w-md">
            <h4 className="heading-2 font-black text-[#2D2D2D] tracking-tighter mb-4">
              Premier <span className="text-[#3E4D86]">Fleet</span> Selections.
            </h4>
            <p className="para-md text-gray-400 font-medium">Institutionalized safety and luxury across every car class.</p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-10">
            {fleetCategories.map((car, idx) => {
              // Checks if this card matches the URL param passed from the parent
              const isActive = car.id === currentCategoryId;

              return (
                <div 
                  key={idx} 
                  // Clicking an inactive card navigates to its respective fleet page
                  onClick={() => !isActive && navigate(`/fleet/${car.id}`)}
                  className={`group/card relative h-[450px] md:h-[500px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-[#F4F4F2] shadow-xl shadow-gray-200/40 transition-all duration-500 ${
                    isActive ? 'cursor-default' : 'cursor-pointer hover:-translate-y-2 hover:shadow-2xl'
                  }`}
                >
                  <img 
                    src={car.src} 
                    alt={car.name} 
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                      isActive 
                        ? 'grayscale opacity-60 scale-100' 
                        : 'scale-110 group-hover/card:scale-100'
                    }`}
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/40 to-transparent transition-opacity duration-500 ${
                    isActive ? 'opacity-90' : 'opacity-80 group-hover/card:opacity-90'
                  }`} />
                  
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                    <span className="text-[#EDA749] para-sm !font-black tracking-[0.3em] uppercase mb-3 block drop-shadow-md">
                      {car.category} Class
                    </span>
                    <h5 className="text-white heading-3 font-black uppercase mb-6 drop-shadow-md">
                      {car.name}
                    </h5>
                    
                    {/* Dynamic Hover Text */}
                    <div className="flex items-center gap-3 text-white para-sm !font-bold uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-all duration-500">
                      {isActive ? (
                        <span className="text-gray-300 leading-tight">
                          You are currently exploring this page
                        </span>
                      ) : (
                        <>
                          Explore Now <MoveRight size={16} className="text-[#E23744]" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceFleetShowcase;