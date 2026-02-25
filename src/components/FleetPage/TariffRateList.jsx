import React, { useState } from 'react';
import { Users, Luggage, Thermometer, ShieldCheck, ArrowRight, FileText } from 'lucide-react';

const TariffRateList = () => {
  const [activeTab, setActiveTab] = useState('rental');

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

  return (
    <section className="w-full py-16 md:py-24 bg-[#F4F4F2]/50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="heading-2 text-[#2D2D2D] mb-8">
            Tariff<span className="text-[#3E4D86]">Overview</span>
          </h2>

          {/* Sticky Selector - Pinned in Mobile View */}
          <div className="sticky top-4 z-50 md:relative md:top-0 flex justify-center w-full px-2">
            <div className="flex p-1.5 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl md:shadow-sm w-full max-w-sm sm:max-w-md">
              {['rental', 'airport'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 whitespace-nowrap px-2 sm:px-8 py-3 rounded-xl para-muted !text-[10px] sm:!text-xs font-bold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[#3E4D86] text-white shadow-lg'
                      : 'text-gray-400 hover:text-[#2D2D2D]'
                  }`}
                >
                  {tab === 'rental' ? 'Car Rental' : 'Airport / Station'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {tariffData[activeTab].map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[2rem] border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 flex justify-between items-start">
                  <div>
                    <h3 className="heading-3 text-[#2D2D2D] uppercase">{item.category}</h3>
                    <p className="para-xs !font-bold text-[#E23744] uppercase !tracking-widest mt-1">{item.sub}</p>
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
                <button className="w-full whitespace-nowrap px-4 py-4 border-2 border-[#E23744] text-[#E23744] font-black rounded-xl transition-all duration-300 group-hover:bg-[#E23744] group-hover:text-white uppercase para-xs !tracking-widest flex items-center justify-center gap-2">
                  Check Availability <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="flex flex-col items-center justify-center gap-6 py-10 border-t border-gray-200">
            <p className="para-sm text-gray-500 text-center max-w-2xl px-2">
                The rates above reflect base packages. For full details including 8Hr/80Km, 12Hr/120Km, 
                Outstation rates, and detailed station-wise drops, please refer to our complete price list.
            </p>
            <button className="w-full sm:w-auto group flex items-center justify-center gap-3 px-6 sm:px-12 py-5 bg-[#3E4D86] text-white font-bold rounded-2xl hover:bg-[#2D2D2D] transition-all duration-300 shadow-xl uppercase para-xs !tracking-[0.2em] whitespace-nowrap">
                <FileText size={20} className="text-[#EDA749]" /> 
                <span className="shrink-0">Detailed Tariff Rates</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default TariffRateList;