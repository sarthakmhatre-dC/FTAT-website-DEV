import React, { useState } from 'react';
import { Users, Luggage, Thermometer, ShieldCheck, ArrowRight, FileText, User, Mail, Phone, MapPin, Calendar, FileText as DetailsIcon, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const TariffRateList = () => {
  const [activeTab, setActiveTab] = useState('rental');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const initialFormState = {
    name: '', email: '', phone: '', pickupCity: '', date: '', details: ''
  };
  const [formData, setFormData] = useState(initialFormState);

  const tariffData = {
    rental: [
      { id: 1, category: "Economy Sedan", sub: "Dzire / Glanza", price: "2000", unit: "/ 4Hrs", capacity: "4 Seater", luggage: "2 Bags", features: ["AC Included", "40 Kms Limit", "Professional Driver"], details: "Base local rental package" },
      { id: 2, category: "Family MPV", sub: "Ertiga", price: "2700", unit: "/ 4Hrs", capacity: "6 Seater", luggage: "3 Bags", features: ["AC Included", "40 Kms Limit", "Comfort Seating"], details: "Base local rental package" },
      { id: 3, category: "Premium MPV", sub: "Innova Crysta", price: "3700", unit: "/ 4Hrs", capacity: "6 Seater", luggage: "4 Bags", features: ["Premium Comfort", "40 Kms Limit", "Institutional Standards"], details: "Base local rental package" }
    ],
    airport: [
      { id: 4, category: "Economy Sedan", sub: "Dzire / Glanza", price: "1500", unit: "/ drop", capacity: "4 Seater", luggage: "2 Bags", features: ["Airport/Station Drop", "On-time Pickup", "Flight Tracking"], details: "To Airport / Kurla / Kalyan / Borivali" },
      { id: 5, category: "Family MPV", sub: "Ertiga", price: "1900", unit: "/ drop", capacity: "6 Seater", luggage: "3 Bags", features: ["Spacious for Family", "Airport/Station Drop", "Professional Service"], details: "To Airport / Kurla / Kalyan / Borivali" },
      { id: 6, category: "Premium MPV", sub: "Innova Crysta", price: "2500", unit: "/ drop", capacity: "6 Seater", luggage: "4 Bags", features: ["Elite Transfer", "Airport/Station Drop", "Extra Legroom"], details: "To Airport / Kurla / Kalyan / Borivali" }
    ]
  };

  const handleBookClick = (pkg) => {
    setSelectedPackage(pkg);
    setShowForm(true);
  };

  const handleBackToGrid = () => {
    setShowForm(false);
    setSelectedPackage(null);
    setFormData(initialFormState);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const ownerNumber = import.meta.env.VITE_CLIENT_CONTACT;
    const type = activeTab === 'rental' ? 'Local Rental' : 'Airport Drop';

    const message = `*New Tariff Booking Request*%0a` +
      `------------------------%0a` +
      `*Service:* ${type}%0a` +
      `*Vehicle:* ${selectedPackage.category} (${selectedPackage.sub})%0a` +
      `*Base Rate:* ₹${selectedPackage.price} ${selectedPackage.unit}%0a` +
      `------------------------%0a` +
      `*Client Details:*%0a` +
      `*Name:* ${formData.name}%0a` +
      `*Email:* ${formData.email}%0a` +
      `*Phone:* ${formData.phone}%0a` +
      `*Pickup City/Location:* ${formData.pickupCity}%0a` +
      `*Date:* ${formData.date}%0a` +
      `*Additional Details:* ${formData.details ? formData.details : 'None provided'}`;

    window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');

    handleBackToGrid();
  };

  return (

    <section className="w-full py-16 md:py-24 bg-[#F4F4F2]/50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="heading-2 text-[#2D2D2D] mb-8">
            Tariff<span className="text-[#3E4D86]">Overview</span>
          </h2>

          {/* Hide tab selector when form is open */}
          {!showForm && (
            <div className="sticky top-4 z-50 md:relative md:top-0 flex justify-center w-full px-2">
              <div className="flex p-1.5 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl md:shadow-sm w-full max-w-sm sm:max-w-md animate-in fade-in duration-500">
                {['rental', 'airport'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 whitespace-nowrap px-2 sm:px-8 py-3 rounded-xl para-muted !text-[10px] sm:!text-xs font-bold transition-all duration-300 ${activeTab === tab
                        ? 'bg-[#3E4D86] text-white shadow-lg'
                        : 'text-gray-400 hover:text-[#2D2D2D]'
                      }`}
                  >
                    {tab === 'rental' ? 'Car Rental' : 'Airport / Station'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Conditional Rendering: Grid vs Form */}
        {!showForm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 animate-in slide-in-from-bottom-8 duration-500">
            {tariffData[activeTab].map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-[2rem] border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 flex justify-between items-start">
                    <div>
                      <h3 className="heading-3 text-[#2D2D2D] uppercase">{item.category}</h3>
                      <p className="para-sm !font-bold text-[#E23744] uppercase !tracking-widest mt-1">{item.sub}</p>
                    </div>
                    <div className="p-3 bg-[#F4F4F2] rounded-xl text-[#3E4D86] shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                  </div>

                  {/* Icons Area */}
                  <div className="flex gap-4 mb-8">
                    <div className="flex items-center gap-2 para-xs !font-bold text-gray-400 uppercase">
                      <Users size={18} className="text-[#EDA749]" /> {item.capacity}
                    </div>
                    <div className="flex items-center gap-2 para-xs !font-bold text-gray-400 uppercase">
                      <Luggage size={18} className="text-[#EDA749]" /> {item.luggage}
                    </div>
                    <div className="flex items-center gap-2 para-xs !font-bold text-gray-400 uppercase">
                      <Thermometer size={18} className="text-[#EDA749]" /> AC
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="mb-8 p-6 bg-[#F4F4F2] rounded-2xl border-l-4 border-[#3E4D86] group-hover:bg-white group-hover:shadow-inner transition-colors duration-500">
                    <span className="para-xs !font-bold text-gray-400 uppercase">Base Rate</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="heading-1 !text-2xl sm:!text-3xl font-black text-[#2D2D2D]">₹{item.price}</span>
                      <span className="para-sm font-bold text-gray-400">{item.unit}</span>
                    </div>
                    <p className="para-xs text-[#3E4D86] !font-bold mt-2 italic uppercase break-words">*{item.details}</p>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 para-sm font-bold text-gray-500 uppercase tracking-tight leading-tight">
                        <div className="w-1.5 h-1.5 bg-[#E23744] rounded-full mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => handleBookClick(item)}
                    className="w-full whitespace-nowrap px-4 py-4 border-2 border-[#E23744] text-[#E23744] font-black rounded-xl transition-all duration-300 hover:bg-[#E23744] hover:text-white uppercase para-sm !tracking-widest flex items-center justify-center gap-2 group/btn"
                  >
                    Book This Package <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Inline Booking Form View */
          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-gray-100 p-8 md:p-12 shadow-2xl mb-16 animate-in slide-in-from-right-8 duration-500">

            <div className="mb-8">
              <span
                className="text-[#3E4D86] font-black text-[10px] md:text-xs uppercase tracking-widest mb-4 flex items-center gap-2 cursor-pointer hover:text-[#E23744] transition-colors w-fit"
                onClick={handleBackToGrid}
              >
                <ArrowRight size={14} className="rotate-180" /> Back to Packages
              </span>
              <h2 className="text-3xl font-black text-[#2D2D2D] leading-tight tracking-tight">
                Complete Booking Details
              </h2>
              <div className="mt-4 p-4 bg-[#F4F4F2] rounded-xl inline-block border-l-4 border-[#E23744]">
                <p className="para-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Selected Package</p>
                <p className="text-lg font-black text-[#2D2D2D] uppercase">{selectedPackage.category} <span className="text-[#3E4D86]">({selectedPackage.sub})</span></p>
                <p className="para-xs font-bold text-[#E23744] mt-1">₹{selectedPackage.price} {selectedPackage.unit}</p>
              </div>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] transition-colors group-focus-within:text-[#E23744]" size={18} />
                <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#3E4D86]/20 rounded-xl outline-none text-sm font-semibold text-[#2D2D2D] transition-all" required />
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] transition-colors group-focus-within:text-[#E23744]" size={18} />
                <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Email" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#3E4D86]/20 rounded-xl outline-none text-sm font-semibold text-[#2D2D2D] transition-all" required />
              </div>

              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] transition-colors group-focus-within:text-[#E23744]" size={18} />
                <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} placeholder="Phone" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#3E4D86]/20 rounded-xl outline-none text-sm font-semibold text-[#2D2D2D] transition-all" required />
              </div>

              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] transition-colors group-focus-within:text-[#E23744]" size={18} />
                <input type="text" name="pickupCity" value={formData.pickupCity} onChange={handleFormChange} placeholder="Pickup City / Location" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#3E4D86]/20 rounded-xl outline-none text-sm font-semibold text-[#2D2D2D] transition-all" required />
              </div>

              <div className="relative group">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] transition-colors group-focus-within:text-[#E23744]" size={18} />
                <input type="date" name="date" min={today} value={formData.date} onChange={handleFormChange} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#3E4D86]/20 rounded-xl outline-none text-sm font-semibold text-[#2D2D2D] transition-all cursor-pointer" required />
              </div>

              <div className="relative group sm:col-span-2">
                <DetailsIcon className="absolute left-4 top-4 text-[#3E4D86] transition-colors group-focus-within:text-[#E23744]" size={18} />
                <textarea name="details" value={formData.details} onChange={handleFormChange} placeholder="Special requirements or questions..." rows="3" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#3E4D86]/20 rounded-xl outline-none text-sm font-semibold text-[#2D2D2D] transition-all resize-none" />
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full py-4 sm:py-5 bg-[#3E4D86] hover:bg-[#2D2D2D] text-white font-black rounded-xl shadow-xl shadow-[#3E4D86]/20 transition-all duration-300 flex items-center justify-center gap-2 
                  uppercase text-[10px] sm:text-sm tracking-[0.1em] sm:tracking-[0.2em] group whitespace-normal sm:whitespace-nowrap">
                  Confirm & Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="flex flex-col items-center justify-center gap-6 py-10 border-t border-gray-200">
          <p className="para-sm text-gray-500 text-center max-w-2xl px-2">
            The rates above reflect base packages. For full details including 8Hr/80Km, 12Hr/120Km,
            Outstation rates, and detailed station-wise drops, please refer to our complete price list.
          </p>
          <Link
            to="/resources/tariff"
            className="w-full sm:w-auto group flex items-center justify-center gap-3 px-6 sm:px-12 py-5 bg-[#3E4D86] text-white font-bold rounded-2xl hover:bg-[#2D2D2D] transition-all duration-300 shadow-xl uppercase para-xs !tracking-[0.2em] whitespace-nowrap">
            <FileText size={20} className="text-[#EDA749]" />
            <span className="shrink-0">Detailed Tariff Rates</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TariffRateList;