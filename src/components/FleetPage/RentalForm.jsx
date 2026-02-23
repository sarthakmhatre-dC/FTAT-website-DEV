import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Car, Calendar, Users, Briefcase, FileText } from 'lucide-react';

const RentalForm = () => {
  const today = new Date().toISOString().split('T')[0];

  // Define initial state for easy resetting
  const initialState = {
    name: '',
    email: '',
    phone: '',
    pickupCity: '',
    vehicle: 'Select Vehicle',
    date: '',
    travelers: '',
    purpose: 'Select Rental Purpose',
    details: ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'travelers' && value !== '' && parseInt(value) < 1) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();

    // 1. Validate Selections
    if (formData.vehicle === 'Select Vehicle' || formData.purpose === 'Select Rental Purpose') {
      alert("Please select a vehicle and a rental purpose.");
      return;
    }

    const ownerNumber = "9321685221"; 

    // 2. Construct Message
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

    const whatsappUrl = `https://wa.me/${ownerNumber}?text=${message}`;
    
    // 3. Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // 4. CLEAR THE FORM
    setFormData(initialState);
  };

  return (
    <section className="relative w-full pb-24 max-w-8xl mx-auto">
      {/* ... Hero Header Area remains the same ... */}
      <div className="relative w-full h-[90vh] flex overflow-hidden ">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/backgroundImages/FleetPageCTA.webp')` }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/80 to-transparent" />
        <div className="relative z-20 max-w-8xl mx-10 px-8 lg:px-16 w-full mt-30">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Premium Car <br />
            <span className="text-[#EDA749]">Rental Service</span>
          </h2>
        </div>
      </div>

      <div className="relative z-30 max-w-6xl mx-auto px-6 lg:px-12 -mt-50">
        <div className="bg-white rounded-[1.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-gray-100 p-4 md:p-6">
          
          <form onSubmit={handleWhatsAppRedirect} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D]" required />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email Id" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D]" required />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone No" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D]" required />
            </div>

            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="text" name="pickupCity" value={formData.pickupCity} onChange={handleChange} placeholder="Enter Pickup City" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D]" required />
            </div>

            <div className="relative">
              <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <select name="vehicle" value={formData.vehicle} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D] appearance-none" required>
                <option disabled value="Select Vehicle">Select Vehicle</option>
                <option>Premium Sedan</option>
                <option>Luxury SUV</option>
                <option>Executive Coach</option>
              </select>
            </div>

            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="date" name="date" min={today} value={formData.date} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D]" required />
            </div>

            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="number" name="travelers" min="1" value={formData.travelers} onChange={handleChange} placeholder="No. of Travelers" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D]" required />
            </div>

            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <select name="purpose" value={formData.purpose} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D] appearance-none" required>
                <option disabled value="Select Rental Purpose">Select Rental Purpose</option>
                <option>Corporate Event</option>
                <option>Airport Transfer</option>
                <option>Monthly Subscription</option>
              </select>
            </div>

            <div className="relative lg:col-span-1">
               <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
               <input type="text" name="details" value={formData.details} onChange={handleChange} placeholder="Requirement Details" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D]" />
            </div>

            <div className="lg:col-span-3 mt-4">
              <button type="submit" className="w-full py-5 bg-[#E23744] text-white font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-[0.2em] text-sm">
                Confirm your Booking Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RentalForm;