import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Circle } from 'lucide-react';

const PremiumFleetCTA = () => {
  const cars = [
    {
      name: "Toyota Innova Hycross",
      image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=2070&auto=format&fit=crop",
      path: "/fleet/innova-hycross"
    },
    {
      name: "Toyota Fortuner",
      image: "https://images.unsplash.com/photo-1632245889029-e406fbdd14ec?q=80&w=2070&auto=format&fit=crop",
      path: "/fleet/fortuner"
    },
    {
      name: "Audi A6",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop",
      path: "/fleet/audi-a6"
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* 1. Subtle Light Theme Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,244,242,1)_0%,rgba(255,255,255,1)_100%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-8 md:px-16 lg:px-20">

        {/* Header Section */}
        <div className=" md:text-center mb-12 md:mb-20">
          <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
            {/* Switched to para-sm by default (mobile) and para-md for medium screens and up */}
            <span className="para-md lg:para-lg !text-gray-400">Premium</span>

            {/* Circle: w-2/h-2 on mobile, w-3/h-3 on md: screens */}
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-[#E23744] bg-white" />

            <span className="para-md lg:para-lg !text-gray-400">Comfort</span>

            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-[#E23744] bg-white" />

            <span className="para-md lg:para-lg !text-gray-400">Convenience</span>
          </div>

          <h2 className="heading-2 mb-8 md:mb-10">
            Types of <span className="text-[#3E4D86]">Premium Cars for Rent</span>
          </h2>

          <div className="max-w-6xl mx-auto space-y-6">
            <p className="para-lg text-gray-600 text-center font-medium">
              Our premium car rental range includes some of the most trusted and admired models in India.
              The Toyota Innova Hycross is known for its modern design and smooth performance, making it
              ideal for groups who prefer style with practicality. For those who want a bold
              and powerful presence on the road, the Toyota Fortuner stands out with its commanding design
              and superior road performance.
            </p>
            <p className="para-lg text-gray-600 text-center font-medium">
              Renting a premium car from us ensures the chosen car delivers reliability, comfort, and a refined
              travel experience for any occasion. Hiring a premium car on rent from our collection always
              provides you with a way to ride in style.
            </p>
          </div>

          <div className="mt-8 md:mt-10 h-1.5 w-20 bg-[#EDA749] rounded-full shadow-sm md:mx-auto" />
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {cars.map((car, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(226,55,68,0.08)] hover:-translate-y-2 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 md:p-8 text-center flex-grow flex flex-col justify-between items-center">
                <h3 className="heading-4 text-[#2D2D2D] mb-6 uppercase">
                  {car.name}
                </h3>

                <Link
                  to={car.path}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white border-2 border-[#E23744] text-[#E23744] rounded-full transition-all group-hover:bg-[#E23744] group-hover:text-white"
                >
                  <span className="para-sm !text-inherit !tracking-widest">Explore Details</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFleetCTA;