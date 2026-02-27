import React, { useState, useEffect } from 'react';
import { X, MapPin, Calendar, ArrowRight, Info, Banknote, User, Mail, Phone, FileText, CheckCircle2 } from 'lucide-react';

const PackagesGrid = ({
  title = "Our Curated Collections",
  subtitle = "Hand-picked institutional travel experiences",
  packages = []
}) => {
  const today = new Date().toISOString().split('T')[0];

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const initialFormState = {
    name: '', email: '', phone: '', date: '', details: ''
  };
  const [formData, setFormData] = useState(initialFormState);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (selectedPackage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPackage]);

  // Reset states when modal completely closes
  const handleCloseModal = () => {
    setSelectedPackage(null);
    setTimeout(() => {
      setShowBookingForm(false);
      setFormData(initialFormState);
    }, 300); // Wait for fade out
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const ownerNumber = "9321685221"; 
    
    // Combine Form Data with Selected Package Data
    const message = `*New Package Booking Request*%0a` +
      `------------------------%0a` +
      `*Package:* ${selectedPackage.title}%0a` +
      `*Region:* ${selectedPackage.location}%0a` +
      `*Duration:* ${selectedPackage.duration}%0a` +
      `*Quoted Price:* ${selectedPackage.price}%0a` +
      `------------------------%0a` +
      `*Client Details:*%0a` +
      `*Name:* ${formData.name}%0a` +
      `*Email:* ${formData.email}%0a` +
      `*Phone:* ${formData.phone}%0a` +
      `*Preferred Date:* ${formData.date}%0a` +
      `*Additional Details:* ${formData.details ? formData.details : 'None provided'}`;

    window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');
    handleCloseModal();
  };

  return (
    <section className="w-full py-24 bg-[#F4F4F2]/30">
      <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-20">

        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[#E23744] font-black para-sm md:para-md uppercase tracking-[0.4em] md:tracking-[0.5em]">
              Explore Excellence
            </span>
            <h2 className="heading-1 font-black text-[#2D2D2D] tracking-tighter leading-none mt-5">
              {title.split(' ')[0]} <span className="text-[#3E4D86]">{title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-gray-400 para-sm font-bold uppercase tracking-wide">{subtitle}</p>
          </div>
        </div>

        {/* Premium Separator Line */}
        <div className="relative w-full h-px mb-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <div className="relative w-6 h-6 rounded-full border-4 border-[#3E4D86] bg-[#F4F4F2]/30 backdrop-blur-sm z-10 shadow-sm" />
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-10 w-full transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{pkg.title}</h3>
                <div className="flex items-center gap-4 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#EDA749]" /> {pkg.location}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#EDA749]" /> {pkg.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- DYNAMIC MODAL --- */}
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#2D2D2D]/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative bg-white w-full max-w-5xl rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-h-[95vh] md:max-h-[90vh]">

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-20 w-10 h-10 md:w-12 md:h-12 bg-gray-100 hover:bg-[#E23744] text-gray-500 hover:text-white transition-all duration-300 rounded-full flex items-center justify-center shadow-sm"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

              {/* Left Side: Image Header (Always Visible) */}
              <div className="w-full md:w-[45%] h-56 sm:h-72 md:h-auto relative shrink-0">
                <img
                  src={selectedPackage.image}
                  className="w-full h-full object-cover"
                  alt={selectedPackage.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Package Info Overlay on Image */}
                <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-[#EDA749] mb-1">
                     {selectedPackage.location}
                   </p>
                   <h3 className="text-2xl font-black leading-tight tracking-tight shadow-sm">
                     {selectedPackage.title}
                   </h3>
                </div>
              </div>

              {/* Right Side: Dynamic Content Area */}
              <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-14 flex flex-col overflow-y-auto">
                
                {!showBookingForm ? (
                  // VIEW 1: PREMIUM PACKAGE DETAILS
                  <div className="animate-in slide-in-from-right-8 duration-500 flex flex-col h-full">
                    
                    <div className="mb-8">
                      <span className="text-[#E23744] font-black text-[10px] md:text-xs uppercase tracking-widest mb-3 block">
                        Package Overview
                      </span>
                      <h2 className="text-3xl md:text-4xl font-black text-[#2D2D2D] leading-tight tracking-tight mb-6">
                        {selectedPackage.title}
                      </h2>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                        {selectedPackage.description}
                      </p>
                    </div>

                    {/* Specs Grid: Region & Timeframe */}
                    <div className="flex items-center bg-gray-50 rounded-[2rem] border border-gray-100 p-6 md:p-8 mb-8 shrink-0">
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                          Region
                        </p>
                        <p className="text-lg md:text-xl font-black text-[#2D2D2D] leading-tight">
                          {selectedPackage.location}
                        </p>
                      </div>

                      {/* Clean Vertical Separator */}
                      <div className="h-10 w-px bg-gray-200 mx-4 md:mx-6 shrink-0" />

                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                          Timeframe
                        </p>
                        <p className="text-lg md:text-xl font-black text-[#2D2D2D] leading-tight">
                          {selectedPackage.duration}
                        </p>
                      </div>
                    </div>

                    {/* Pricing Section (Premium Callout Card) */}
                    <div className="flex items-center justify-between p-6 md:p-8 bg-[#3E4D86] text-white rounded-[2rem] mb-8 shrink-0 shadow-lg shadow-[#3E4D86]/20">
                      <div>
                        <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">
                          Institutional Rate
                        </p>
                        <p className="text-3xl md:text-4xl font-black tracking-tight">
                          {selectedPackage.price}
                        </p>
                      </div>
                      <div className="p-3 bg-white/10 rounded-2xl shrink-0 backdrop-blur-md">
                        <Banknote size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Extra Charges Note */}
                    <div className="flex items-start gap-3 p-5 bg-[#F4F4F2] rounded-2xl shrink-0 mb-6">
                      <Info size={18} className="text-[#E23744] mt-0.5 shrink-0" />
                      <p className="text-xs font-semibold text-gray-500 leading-relaxed">
                        <span className="text-gray-700 font-bold uppercase tracking-wider text-[10px] block mb-0.5">Please Note</span>
                        Toll, Parking, and GST will be charged extra as per actuals.
                      </p>
                    </div>

                    {/* CTA Button */}
                    <button 
                      onClick={() => setShowBookingForm(true)}
                      className="mt-auto w-full py-5 bg-[#E23744] hover:bg-[#2D2D2D] text-white font-black rounded-2xl shadow-xl shadow-[#E23744]/20 transition-all duration-300 flex items-center justify-center gap-3 uppercase text-sm tracking-[0.2em] group shrink-0"
                    >
                      Request This Package
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                  </div>

                ) : (

                  // VIEW 2: BOOKING FORM
                  <div className="animate-in slide-in-from-left-8 duration-500 flex flex-col h-full">
                    <div className="mb-8">
                      <span className="text-[#3E4D86] font-black text-[10px] md:text-xs uppercase tracking-widest mb-2 block flex items-center gap-2 cursor-pointer hover:text-[#E23744] transition-colors" onClick={() => setShowBookingForm(false)}>
                        <ArrowRight size={14} className="rotate-180" /> Back to Details
                      </span>
                      <h2 className="text-3xl font-black text-[#2D2D2D] leading-tight tracking-tight mt-4">
                        Client Details
                      </h2>
                    </div>

                    <form onSubmit={handleWhatsAppSubmit} className="space-y-4 flex-1">
                      
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] transition-colors group-focus-within:text-[#E23744]" size={18} />
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Full Name" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#3E4D86]/20 rounded-xl outline-none text-sm font-semibold text-[#2D2D2D] transition-all" required />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] transition-colors group-focus-within:text-[#E23744]" size={18} />
                          <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Email" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#3E4D86]/20 rounded-xl outline-none text-sm font-semibold text-[#2D2D2D] transition-all" required />
                        </div>
                        <div className="relative group">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] transition-colors group-focus-within:text-[#E23744]" size={18} />
                          <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} placeholder="Phone" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#3E4D86]/20 rounded-xl outline-none text-sm font-semibold text-[#2D2D2D] transition-all" required />
                        </div>
                      </div>

                      <div className="relative group">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] transition-colors group-focus-within:text-[#E23744]" size={18} />
                        <input type="date" name="date" min={today} value={formData.date} onChange={handleFormChange} className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#3E4D86]/20 rounded-xl outline-none text-sm font-semibold text-[#2D2D2D] transition-all cursor-pointer" required />
                      </div>

                      <div className="relative group">
                        <FileText className="absolute left-4 top-4 text-[#3E4D86] transition-colors group-focus-within:text-[#E23744]" size={18} />
                        <textarea name="details" value={formData.details} onChange={handleFormChange} placeholder="Special requirements or questions..." rows="3" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#3E4D86]/20 rounded-xl outline-none text-sm font-semibold text-[#2D2D2D] transition-all resize-none" />
                      </div>

                      <button type="submit" className="mt-6 w-full py-5 bg-[#3E4D86] hover:bg-[#2D2D2D] text-white font-black rounded-xl shadow-xl shadow-[#3E4D86]/20 transition-all duration-300 flex items-center justify-center gap-2 uppercase text-sm tracking-[0.2em] group">
                        Confirm & Send
                        <CheckCircle2 size={18} className="group-hover:scale-110 transition-transform" />
                      </button>

                    </form>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackagesGrid;