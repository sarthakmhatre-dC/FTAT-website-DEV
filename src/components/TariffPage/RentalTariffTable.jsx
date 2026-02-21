import React, { useState } from 'react';

const RentalTariffTable = () => {
  const [view, setView] = useState('local'); // 'local' or 'outstation'

  const data = [
    { vehicle: "Dzire & Glanza", capacity: "4 Seater", local: { "4H": "2000", "8H": "2500", "12H": "3800" }, out: "4500", extraKm: "15", extraHr: "150" },
    { vehicle: "Ertiga", capacity: "6 Seater", local: { "4H": "2700", "8H": "3200", "12H": "4800" }, out: "5100", extraKm: "18", extraHr: "200" },
    { vehicle: "Innova Crysta", capacity: "6 Seater", local: { "4H": "3700", "8H": "4200", "12H": "6200" }, out: "6600", extraKm: "22", extraHr: "300" }
  ];

  return (
    <div className="w-full px-8 lg:px-16 pt-30 bg-[#F4F4F2]/40 pb-5">
      <section className="max-w-7xl mx-auto py-10 bg-white rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
        <div className="px-8 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-[#2D2D2D] uppercase tracking-tighter mb-2">
              Rental <span className="text-[#3E4D86]">Basis</span>
            </h3>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              Flexible local and long-distance packages
            </p>
          </div>
          
          <div className="flex p-1 bg-[#F4F4F2] rounded-xl">
            <button 
              onClick={() => setView('local')} 
              className={`px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${view === 'local' ? 'bg-white text-[#3E4D86] shadow-sm' : 'text-gray-400'}`}
            >
              Local
            </button>
            <button 
              onClick={() => setView('outstation')} 
              className={`px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${view === 'outstation' ? 'bg-white text-[#3E4D86] shadow-sm' : 'text-gray-400'}`}
            >
              Outstation
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#EDA749] text-white">
                <th className="p-6 text-left text-[10px] font-black uppercase tracking-widest">Vehicle Details</th>
                {view === 'local' ? (
                  <>
                    <th className="p-6 text-center text-[10px] font-black uppercase tracking-widest">4Hrs/40Kms</th>
                    <th className="p-6 text-center text-[10px] font-black uppercase tracking-widest">8Hrs/80Kms</th>
                    <th className="p-6 text-center text-[10px] font-black uppercase tracking-widest">12Hrs/120Kms</th>
                  </>
                ) : (
                  <th className="p-6 text-center text-[10px] font-black uppercase tracking-widest">12Hrs/300Kms (Out)</th>
                )}
                <th className="p-6 text-center text-[10px] font-black uppercase tracking-widest">Extra Km/Hr</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-[#F4F4F2]/50 transition-colors group">
                  <td className="p-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-[#2D2D2D] uppercase tracking-tight">{row.vehicle}</span>
                        {/* Premium A/c Tag */}
                        <span className="bg-[#F4F4F2] text-[#3E4D86] text-[8px] font-black px-2 py-0.5 rounded-md border border-gray-100 group-hover:bg-[#3E4D86] group-hover:text-white transition-colors uppercase">
                          A/c
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{row.capacity}</span>
                    </div>
                  </td>
                  {view === 'local' ? (
                    <>
                      <td className="p-6 text-center font-black text-[#2D2D2D]">₹{row.local["4H"]}/-</td>
                      <td className="p-6 text-center font-black text-[#2D2D2D]">₹{row.local["8H"]}/-</td>
                      <td className="p-6 text-center font-black text-[#2D2D2D]">₹{row.local["12H"]}/-</td>
                    </>
                  ) : (
                    <td className="p-6 text-center font-black text-[#E23744]">₹{row.out}/-</td>
                  )}
                  <td className="p-6 text-center">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Km: ₹{row.extraKm}</span>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Hr: ₹{row.extraHr}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default RentalTariffTable;