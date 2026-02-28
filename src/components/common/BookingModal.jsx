import React, { useState, useEffect } from 'react';
import { X, User, Mail, Phone, MapPin, Car, Calendar, Users, Briefcase, FileText } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const today = new Date().toISOString().split('T')[0];

  // Independent Internal State
  const initialState = {
    name: '', email: '', phone: '', pickupCity: '',
    vehicle: 'Select Vehicle', date: '', travelers: '',
    purpose: 'Select Rental Purpose', details: ''
  };

  const [formData, setFormData] = useState(initialState);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

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

    const ownerNumber = import.meta.env.VITE_CLIENT_CONTACT;
    const message = `*New Booking Request*%0a` +
      `------------------------%0a` +
      `*Name:* ${formData.name}%0a` +
      `*Email:* ${formData.email}%0a` +
      `*Phone:* ${formData.phone}%0a` +
      `*City:* ${formData.pickupCity}%0a` +
      `*Vehicle:* ${formData.vehicle}%0a` +
      `*Date:* ${formData.date}%0a` +
      `*Travelers:* ${formData.travelers}%0a` +
      `*Purpose:* ${formData.purpose}%0a` +
      `*Details:* ${formData.details}`;

    window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');

    // Self-reset and close after action
    setFormData(initialState);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Premium Backdrop with Blur */}
      <div
        className="absolute inset-0 bg-[#2D2D2D]/70 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-500 max-h-[95vh] flex flex-col">

        {/* Header Area */}
        <div className="p-8 md:p-12 pb-0 flex justify-between items-start">
          <div className="max-w-xl">
            <span className="text-[#E23744] font-bold lg:tracking-[0.3em] text-xs md:text-sm uppercase block mb-2">
              Premium Mobility
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2D2D2D] tracking-tighter uppercase leading-none">
              Request a <span className="text-[#3E4D86]">Booking.</span>
            </h2>
            <div className="mt-4 h-1.5 w-16 bg-[#EDA749] rounded-full" />
          </div>

          <button
            onClick={onClose}
            className="p-3 bg-[#F4F4F2] text-[#2D2D2D] rounded-full hover:bg-[#E23744] hover:text-white transition-all duration-300 group shadow-md"
          >
            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-8 md:p-12 pt-8 overflow-y-auto custom-scrollbar">
          <form onSubmit={handleWhatsAppRedirect} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: 'name', icon: <User />, placeholder: 'Full Name', type: 'text' },
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
                  className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-2 border-transparent focus:bg-white focus:border-[#3E4D86]/10 rounded-2xl outline-none text-sm font-semibold text-[#2D2D2D] transition-all shadow-inner"
                  required
                />
              </div>
            ))}

            <div className="relative group">
              <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <select name="vehicle" value={formData.vehicle} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-2xl outline-none text-sm font-semibold text-[#2D2D2D] appearance-none cursor-pointer" required>
                <option disabled value="Select Vehicle">Select Vehicle</option>
                <option>Premium Sedan</option>
                <option>Luxury SUV</option>
                <option>Executive Coach</option>
              </select>
            </div>

            <div className="relative group">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="date" name="date" min={today} value={formData.date} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-2xl outline-none text-sm font-semibold text-[#2D2D2D] cursor-pointer" required />
            </div>

            <div className="relative group">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="number" name="travelers" min="1" value={formData.travelers} onChange={handleChange} placeholder="Travelers" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-2xl outline-none text-sm font-semibold text-[#2D2D2D]" required />
            </div>

            <div className="relative group">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <select name="purpose" value={formData.purpose} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-2xl outline-none text-sm font-semibold text-[#2D2D2D] appearance-none cursor-pointer" required>
                <option disabled value="Select Rental Purpose">Select Purpose</option>
                <option>Corporate Event</option>
                <option>Airport Transfer</option>
                <option>Monthly Subscription</option>
              </select>
            </div>

            <div className="relative sm:col-span-2 lg:col-span-1">
              <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
              <input type="text" name="details" value={formData.details} onChange={handleChange} placeholder="Specific Requirements" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-2xl outline-none text-sm font-semibold text-[#2D2D2D]" />
            </div>

            <div className="sm:col-span-2 lg:col-span-3 mt-4 mb-6">
              <button type="submit" className="w-full py-5 bg-[#E23744] text-white font-black rounded-2xl shadow-xl shadow-red-500/10 hover:bg-[#2D2D2D] hover:-translate-y-1.5 transition-all duration-500 uppercase text-xs md:text-sm tracking-[0.3em]">
                Submit & Open WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;