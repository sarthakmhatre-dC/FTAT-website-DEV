import React, { useState } from 'react';
import { Users, Luggage, Thermometer, ShieldCheck, Info, ArrowRight } from 'lucide-react';

const TariffRateList = () => {
  const [activeTab, setActiveTab] = useState('local');

  const tariffData = {
    local: [
      {
        id: 1,
        category: "Executive Sedan",
        sub: "Toyota Etios / Dzire",
        price: "2,200",
        capacity: "4+1 Seater",
        luggage: "2 Large",
        features: ["Dual AC", "Professional Driver", "Clean Interiors"],
        details: "8hrs / 80km package"
      },
      {
        id: 2,
        category: "Premium SUV",
        sub: "Innova Crysta",
        price: "3,500",
        capacity: "6+1 Seater",
        luggage: "4 Large",
        features: ["Climate Control", "Premium Leather", "GPS Tracked"],
        details: "8hrs / 80km package"
      },
      {
        id: 3,
        category: "Luxury Coach",
        sub: "Urbania / Traveller",
        price: "5,500",
        capacity: "12+1 Seater",
        luggage: "10 Large",
        features: ["Dual AC", "Recliner Seats", "SLA Backed"],
        details: "8hrs / 80km package"
      }
    ],
    outstation: [
      {
        id: 4,
        category: "Executive Sedan",
        sub: "Toyota Etios / Dzire",
        price: "15",
        unit: "/ km",
        capacity: "4+1 Seater",
        luggage: "2 Large",
        features: ["Min 250km/day", "Driver Batta: ₹300", "AC / Heater"],
        details: "Ideal for Inter-city"
      },
      {
        id: 5,
        category: "Premium SUV",
        sub: "Innova Hycross",
        price: "22",
        unit: "/ km",
        capacity: "6+1 Seater",
        luggage: "4 Large",
        features: ["Min 250km/day", "Driver Batta: ₹500", "Hybrid Quietness"],
        details: "Long distance comfort"
      },
      {
        id: 6,
        category: "Luxury Coach",
        sub: "Mercedes Bus / Volvo",
        price: "45",
        unit: "/ km",
        capacity: "25+1 Seater",
        luggage: "25 Large",
        features: ["Min 300km/day", "Dual Driver Support", "On-board MIS"],
        details: "Corporate events"
      }
    ]
  };

  return (
    <section className="w-full py-24 bg-[#F4F4F2]/50">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        
        {/* Header & Segment Controller */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#2D2D2D] tracking-tight mb-8">
            Transparent <span className="text-[#3E4D86]">Tariff Rates</span>
          </h2>
          
          <div className="inline-flex p-1.5 bg-white border border-gray-100 rounded-2xl shadow-sm">
            {['local', 'outstation'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab 
                  ? 'bg-[#3E4D86] text-white shadow-lg -translate-y-0.5' 
                  : 'text-gray-400 hover:text-[#2D2D2D]'
                }`}
              >
                {tab === 'local' ? 'Local Trip' : 'Outstation'}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid with Native Tailwind Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500">
          {tariffData[activeTab].map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-2xl hover:shadow-[#3E4D86]/5 transition-all duration-500 ease-out flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Header */}
                <div className="mb-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-black text-[#2D2D2D] uppercase tracking-tight">{item.category}</h3>
                    <p className="text-xs font-bold text-[#E23744] uppercase tracking-widest mt-1">{item.sub}</p>
                  </div>
                  <div className="p-2.5 bg-[#F4F4F2] rounded-xl text-[#3E4D86]">
                    <ShieldCheck size={20} />
                  </div>
                </div>

                {/* Quick-Look Metrics */}
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

                {/* Pricing Block */}
                <div className="mb-8 p-6 bg-[#F4F4F2] rounded-2xl border-l-4 border-[#3E4D86] group-hover:bg-white group-hover:shadow-inner transition-colors duration-500">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Starting From</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-black text-[#2D2D2D]">₹{item.price}</span>
                    <span className="text-sm font-bold text-gray-400">{item.unit || '/ trip'}</span>
                  </div>
                  <p className="text-[11px] text-[#3E4D86] font-bold mt-2 italic uppercase">*{item.details}</p>
                </div>

                {/* Feature List */}
                <ul className="space-y-4 mb-10">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[13px] font-bold text-gray-500 uppercase tracking-tight">
                      <div className="w-1.5 h-1.5 bg-[#E23744] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA & T&C */}
              <div className="space-y-6">
                <button className="w-full py-4 border-2 border-[#E23744] text-[#E23744] font-bold rounded-xl transition-all duration-300 group-hover:bg-[#E23744] group-hover:text-white uppercase text-[11px] tracking-widest flex items-center justify-center gap-2">
                  Book This Class <ArrowRight size={16} />
                </button>
                <button className="w-full flex items-center justify-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest hover:text-[#2D2D2D] transition-colors">
                  <Info size={12} /> T&C Apply: Toll & Parking Excluded
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TariffRateList;