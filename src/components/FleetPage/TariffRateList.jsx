import React, { useState } from 'react';
import { Users, Luggage, Thermometer, ShieldCheck, Info, ArrowRight, FileText } from 'lucide-react';

const TariffRateList = () => {
  // Tabs updated to match the new table categories
  const [activeTab, setActiveTab] = useState('rental');

  const tariffData = {
    // Data extracted from "Quotation for Car on Rental Basis"
    rental: [
      {
        id: 1,
        category: "Economy Sedan",
        sub: "Dzire / Glanza",
        price: "2000",
        unit: "/ 4Hrs",
        capacity: "4 Seater",
        luggage: "2 Bags",
        features: ["AC Included", "40 Kms Limit", "Professional Driver"],
        details: "Base local rental package"
      },
      {
        id: 2,
        category: "Family MPV",
        sub: "Ertiga",
        price: "2700",
        unit: "/ 4Hrs",
        capacity: "6 Seater",
        luggage: "3 Bags",
        features: ["AC Included", "40 Kms Limit", "Comfort Seating"],
        details: "Base local rental package"
      },
      {
        id: 3,
        category: "Premium MPV",
        sub: "Innova Crysta",
        price: "3700",
        unit: "/ 4Hrs",
        capacity: "6 Seater",
        luggage: "4 Bags",
        features: ["Premium Comfort", "40 Kms Limit", "Institutional Standards"],
        details: "Base local rental package"
      }
    ],

    // Data extracted from "Airport & Railway Station Drop & Pickup"
    airport: [
      {
        id: 4,
        category: "Economy Sedan",
        sub: "Dzire / Glanza",
        price: "1500",
        unit: "/ drop",
        capacity: "4 Seater",
        luggage: "2 Bags",
        features: ["Airport/Station Drop", "On-time Pickup", "Flight Tracking"],
        details: "To Airport / Kurla / Kalyan / Borivali"
      },
      {
        id: 5,
        category: "Family MPV",
        sub: "Ertiga",
        price: "1900",
        unit: "/ drop",
        capacity: "6 Seater",
        luggage: "3 Bags",
        features: ["Spacious for Family", "Airport/Station Drop", "Professional Service"],
        details: "To Airport / Kurla / Kalyan / Borivali"
      },
      {
        id: 6,
        category: "Premium MPV",
        sub: "Innova Crysta",
        price: "2500",
        unit: "/ drop",
        capacity: "6 Seater",
        luggage: "4 Bags",
        features: ["Elite Transfer", "Airport/Station Drop", "Extra Legroom"],
        details: "To Airport / Kurla / Kalyan / Borivali"
      }
    ]
  };

  return (
    <section className="w-full py-24 bg-[#F4F4F2]/50">
      <div className="max-w-8xl mx-10 px-8 lg:px-16">

        {/* Header & Segment Controller */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#2D2D2D] tracking-tight mb-8">
            Tariff<span className="text-[#3E4D86]">Overview</span>
          </h2>

          <div className="inline-flex p-1.5 bg-white border border-gray-100 rounded-2xl shadow-sm">
            {['rental', 'airport'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                    ? 'bg-[#3E4D86] text-white shadow-lg -translate-y-0.5'
                    : 'text-gray-400 hover:text-[#2D2D2D]'
                  }`}
              >
                {tab === 'rental' ? 'Car Rental Basis' : 'Airport / Station'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tariffData[activeTab].map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-2xl hover:shadow-[#3E4D86]/5 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-black text-[#2D2D2D] uppercase tracking-tight">{item.category}</h3>
                    <p className="text-xs font-bold text-[#E23744] uppercase tracking-widest mt-1">{item.sub}</p>
                  </div>
                  <div className="p-2.5 bg-[#F4F4F2] rounded-xl text-[#3E4D86]">
                    <ShieldCheck size={20} />
                  </div>
                </div>

                <div className="flex gap-4 mb-8">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-bold uppercase">
                    <Users size={14} className="text-[#EDA749]" /> {item.capacity}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-bold uppercase">
                    <Luggage size={14} className="text-[#EDA749]" /> {item.luggage}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-bold uppercase">
                    <Thermometer size={14} className="text-[#EDA749]" /> AC
                  </div>
                </div>

                <div className="mb-8 p-6 bg-[#F4F4F2] rounded-2xl border-l-4 border-[#3E4D86] group-hover:bg-white group-hover:shadow-inner transition-colors duration-500">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Base Rate</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-black text-[#2D2D2D]">₹{item.price}</span>
                    <span className="text-sm font-bold text-gray-400">{item.unit}</span>
                  </div>
                  <p className="text-[11px] text-[#3E4D86] font-bold mt-2 italic uppercase">*{item.details}</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[13px] font-bold text-gray-500 uppercase tracking-tight">
                      <div className="w-1.5 h-1.5 bg-[#E23744] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <button className="w-full py-4 border-2 border-[#E23744] text-[#E23744] font-bold rounded-xl transition-all duration-300 group-hover:bg-[#E23744] group-hover:text-white uppercase text-[11px] tracking-widest flex items-center justify-center gap-2">
                  Check Availability <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Footer CTA for Full Tariff */}
        <div className="flex flex-col items-center justify-center gap-6 py-10 border-t border-gray-200">
            <p className="text-gray-500 font-medium text-sm text-center max-w-2xl">
                The rates above reflect base packages. For full details including 8Hr/80Km, 12Hr/120Km, 
                Outstation rates, and detailed station-wise drops, please refer to our complete price list.
            </p>
            <button className="group flex items-center gap-3 px-10 py-5 bg-[#3E4D86] text-white font-bold rounded-2xl hover:bg-[#2D2D2D] transition-all duration-300 shadow-xl shadow-blue-900/10 uppercase text-[11px] tracking-[0.2em]">
                <FileText size={18} className="text-[#EDA749]" /> 
                View Detailed Tariff Rates 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default TariffRateList;