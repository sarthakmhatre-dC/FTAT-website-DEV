import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Car, Calendar, Users, Briefcase, FileText } from 'lucide-react';

const RentalForm = () => {
  const today = new Date().toISOString().split('T')[0];

  const initialState = {
    name: '', email: '', phone: '', pickupCity: '',
    vehicle: 'Select Vehicle', date: '', travelers: '',
    purpose: 'Select Rental Purpose', details: ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'travelers' && value !== '' && parseInt(value) < 1) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    if (formData.vehicle === 'Select Vehicle' || formData.purpose === 'Select Rental Purpose') {
      alert("Please select a vehicle and a rental purpose.");
      return;
    }
    const ownerNumber = "9321685221"; 
    const message = `New Booking Request%0a` +
      `------------------------%0a` +
      `Name: ${formData.name}%0a` +
      `Email: ${formData.email}%0a` +
      `Phone: ${formData.phone}%0a` +
      `City: ${formData.pickupCity}%0a` +
      `Vehicle: ${formData.vehicle}%0a` +
      `Date: ${formData.date}%0a` +
      `Travelers: ${formData.travelers}%0a` +
      `Purpose: ${formData.purpose}%0a` +
      `Details: ${formData.details}`;

    window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');
    setFormData(initialState);
  };

  return (
    <section className="relative w-full pb-16 md:pb-24">
      {/* 1. Integrated Hero Background - Height managed via flex/padding */}
      <div className="min-h-[90vh] absolute top-0 inset-x-0 h-[70%] md:h-[65%] z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/backgroundImages/FleetPageCTA.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto">
        {/* Header Title Area */}
        <div className="pt-30 pb-32 md:pb-40 px-8 md:px-16 lg:px-20">
          <h2 className="heading-1 text-white font-bold">
            Premium Car <br className="hidden md:block" />
            <span className="text-[#EDA749]">Rental Service</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-[#EDA749] rounded-full" />
        </div>

        {/* 2. Form Container - Negative margin pulls it into the image area */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 p-6 md:p-10 lg:p-12">
            
            <div className="mb-8 md:mb-10">
               <span className="para-md text-[#E23744] uppercase font-bold tracking-[0.2em]">Reservation Details</span>
               <h3 className="heading-3 text-[#2D2D2D] mt-2">Instant Booking Request</h3>
            </div>

            <form onSubmit={handleWhatsAppRedirect} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { name: 'name', icon: <User />, placeholder: 'Your Name', type: 'text' },
                { name: 'email', icon: <Mail />, placeholder: 'Email Address', type: 'email' },
                { name: 'phone', icon: <Phone />, placeholder: 'Phone Number', type: 'tel' },
                { name: 'pickupCity', icon: <MapPin />, placeholder: 'Pickup City', type: 'text' },
              ].map((input) => (
                <div key={input.name} className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] group-focus-within:text-[#E23744] transition-colors">
                    {React.cloneElement(input.icon, { size: 18 })}
                  </div>
                  <input 
                    type={input.type} 
                    name={input.name} 
                    value={formData[input.name]} 
                    onChange={handleChange} 
                    placeholder={input.placeholder} 
                    className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-2 border-transparent focus:border-[#3E4D86]/20 rounded-xl outline-none para-sm font-medium text-[#2D2D2D] transition-all" 
                    required 
                  />
                </div>
              ))}

              <div className="relative group">
                <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                <select name="vehicle" value={formData.vehicle} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-sm font-medium text-[#2D2D2D] appearance-none cursor-pointer" required>
                  <option disabled value="Select Vehicle">Select Vehicle</option>
                  <option>Premium Sedan</option>
                  <option>Luxury SUV</option>
                  <option>Executive Coach</option>
                </select>
              </div>

              <div className="relative group">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                <input type="date" name="date" min={today} value={formData.date} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-sm font-medium text-[#2D2D2D] cursor-pointer" required />
              </div>

              <div className="relative group">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                <input type="number" name="travelers" min="1" value={formData.travelers} onChange={handleChange} placeholder="Travelers" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-sm font-medium text-[#2D2D2D]" required />
              </div>

              <div className="relative group">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                <select name="purpose" value={formData.purpose} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-sm font-medium text-[#2D2D2D] appearance-none cursor-pointer" required>
                  <option disabled value="Select Rental Purpose">Select Purpose</option>
                  <option>Corporate Event</option>
                  <option>Airport Transfer</option>
                  <option>Monthly Subscription</option>
                </select>
              </div>

              <div className="relative sm:col-span-2 lg:col-span-1">
                 <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                 <input type="text" name="details" value={formData.details} onChange={handleChange} placeholder="Specific Requirements" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-sm font-medium text-[#2D2D2D]" />
              </div>

              <div className="sm:col-span-2 lg:col-span-3 mt-4">
                <button type="submit" className="w-full py-5 bg-[#E23744] text-white font-bold rounded-2xl shadow-xl hover:shadow-red-900/20 hover:-translate-y-1 transition-all duration-300 uppercase para-md !tracking-[0.2em]">
                  Confirm Request Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalForm;