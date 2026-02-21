import React from 'react';
import { User, Mail, Phone, MapPin, Car, Calendar, Users, Briefcase, FileText } from 'lucide-react';

const RentalForm = () => {
  return (
    <section className="relative w-full pb-24">
      {/* 1. Hero Header Area with Background Image */}
      <div className="relative w-full h-[90vh] flex overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop')`, 
          }}
        />
        {/* Subtle Brand Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/80 to-transparent" />

        <div className="relative z-20 max-w-8xl mx-auto px-6 lg:px-12 w-full mt-30">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Premium Car <br />
            <span className="text-[#EDA749]">Rental Service</span>
          </h2>
        </div>
      </div>

      {/* 2. Floating Form Component */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 lg:px-12 -mt-50">
        <div className="bg-white rounded-[1.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-gray-100 p-4 md:p-6">
          
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Input Groups */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="text" placeholder="Enter Your Name" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] placeholder:text-gray-400" />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="email" placeholder="Enter Email Id" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] placeholder:text-gray-400" />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="tel" placeholder="Phone No" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] placeholder:text-gray-400" />
            </div>

            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="text" placeholder="Enter Pickup City" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] placeholder:text-gray-400" />
            </div>

            <div className="relative">
              <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <select className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] appearance-none">
                <option>Select Vehicle</option>
                <option>Premium Sedan</option>
                <option>Luxury SUV</option>
                <option>Executive Coach</option>
              </select>
            </div>

            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="date" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D]" />
            </div>

            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="number" placeholder="No. of Travelers" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] placeholder:text-gray-400" />
            </div>

            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <select className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] appearance-none">
                <option>Select Rental Purpose</option>
                <option>Corporate Event</option>
                <option>Airport Transfer</option>
                <option>Monthly Subscription</option>
              </select>
            </div>

            <div className="relative lg:col-span-1">
               <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
               <input type="text" placeholder="Requirement Details" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] placeholder:text-gray-400" />
            </div>

            {/* Submission Button */}
            <div className="lg:col-span-3 mt-4">
              <button className="w-full py-5 bg-[#E23744] text-white font-bold rounded-2xl shadow-xl shadow-red-900/10 hover:shadow-red-900/20 hover:-translate-y-1 transition-all duration-300 uppercase tracking-[0.2em] text-sm">
                Confirm Booking Request
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default RentalForm;