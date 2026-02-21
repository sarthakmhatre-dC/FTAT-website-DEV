import React, { useState } from 'react';

const TransferTariffTable = () => {
  const [location, setLocation] = useState('hub1');

  // Clean data structure mapping the Quotation Table
  const locations = {
    hub1: {
      label: "Kurla / Borivali",
      description: "Includes: Airport, Kurla (LTT), Kalyan & Borivali"
    },
    hub2: {
      label: "Dadar / Bandra",
      description: "Includes: Dadar (T) & Bandra (T)"
    },
    hub3: {
      label: "CSTM / Navi Mumbai",
      description: "Includes: Mumbai Central, Navi Mumbai Airport & CSTM"
    }
  };

  const data = [
    { vehicle: "Dzire & Glanza", hub1: ["1500", "1700", "2300"], hub2: ["1600", "1800", "2400"], hub3: ["1700", "2000", "2500"] },
    { vehicle: "Ertiga", hub1: ["1900", "2200", "2800"], hub2: ["2000", "2300", "3000"], hub3: ["2200", "2500", "3200"] },
    { vehicle: "Innova Crysta", hub1: ["2500", "2800", "3600"], hub2: ["2700", "3000", "3800"], hub3: ["3000", "3400", "4200"] }
  ];

  return (
    <div className="w-full px-8 lg:px-16 pt-5 bg-[#F4F4F2]/40 pb-30">
      <section className="max-w-7xl mx-auto py-10 bg-white rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden mt-12">
        
        {/* Header & Filter Section: Aligned with Rental Table */}
        <div className="px-8 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-[#2D2D2D] uppercase tracking-tighter mb-2">
              Airport & <span className="text-[#3E4D86]">Railway Transfers</span>
            </h3>
            {/* Dynamic subtitle to explain the filter cleanly */}
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] animate-in fade-in duration-500">
              {locations[location].description}
            </p>
          </div>
          
          {/* Segmented Controller: Right Aligned */}
          <div className="flex p-1 bg-[#F4F4F2] rounded-xl shrink-0 overflow-x-auto">
            {Object.keys(locations).map(key => (
              <button 
                key={key} 
                onClick={() => setLocation(key)} 
                className={`px-5 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${location === key ? 'bg-white text-[#3E4D86] shadow-sm' : 'text-gray-400 hover:text-[#2D2D2D]'}`}
              >
                {locations[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              {/* Specialized Header Color to differentiate from Rental */}
              <tr className="bg-[#EDA749] text-white">
                <th className="p-6 text-left text-[10px] font-black uppercase tracking-widest">Vehicle Details</th>
                <th className="p-6 text-center text-[10px] font-black uppercase tracking-widest">Direct Drop</th>
                <th className="p-6 text-center text-[10px] font-black uppercase tracking-widest">Direct Pickup</th>
                <th className="p-6 text-center text-[10px] font-black uppercase tracking-widest">Pickup Seeoff</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-[#F4F4F2]/50 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-black text-[#2D2D2D] uppercase tracking-tight">
                        {row.vehicle}
                      </span>
                      {/* Integrated A/c Tag */}
                      <span className="bg-[#F4F4F2] text-[#3E4D86] text-[8px] font-black px-2 py-0.5 rounded-md border border-gray-100 group-hover:bg-[#3E4D86] group-hover:text-white transition-colors uppercase">
                        A/c
                      </span>
                    </div>
                  </td>
                  <td className="p-6 text-center font-black text-[#2D2D2D]">₹{row[location][0]}/-</td>
                  <td className="p-6 text-center font-black text-[#2D2D2D]">₹{row[location][1]}/-</td>
                  <td className="p-6 text-center font-black text-[#3E4D86]">₹{row[location][2]}/-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TransferTariffTable;