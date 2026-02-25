import React, { useState } from 'react';

const RentalTariffTable = () => {
  const [view, setView] = useState('local'); // 'local' or 'outstation'

  const data = [
    { vehicle: "Dzire & Glanza", capacity: "4 Seater", local: { "4H": "2000", "8H": "2500", "12H": "3800" }, out: "4500", extraKm: "15", extraHr: "150" },
    { vehicle: "Ertiga", capacity: "6 Seater", local: { "4H": "2700", "8H": "3200", "12H": "4800" }, out: "5100", extraKm: "18", extraHr: "200" },
    { vehicle: "Innova Crysta", capacity: "6 Seater", local: { "4H": "3700", "8H": "4200", "12H": "6200" }, out: "6600", extraKm: "22", extraHr: "300" }
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 pt-12 md:pt-24 bg-[#F4F4F2]/40 pt-10 md:pt-15">
      <section className="max-w-7xl mx-auto bg-white rounded-[1.5rem] md:rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">

        {/* Header Section */}
        <div className="p-6 md:p-12 border-b border-gray-50 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="heading-3 text-[#2D2D2D] uppercase mb-2">
              Rental <span className="text-[#3E4D86]">Basis</span>
            </h3>
            <p className="para-xs !font-bold text-gray-400 uppercase tracking-widest">
              Flexible local and long-distance packages
            </p>
          </div>

          {/* View Switcher */}
          {/* Premium Segmented View Switcher */}
          <div className="w-full md:w-auto">
            <div className="flex items-center p-1.5 bg-[#F4F4F2]/80 backdrop-blur-sm rounded-2xl border border-gray-100/50 shadow-inner shrink-0">
              <button
                onClick={() => setView('local')}
                className={`flex-1 md:flex-none px-8 py-3 rounded-xl para-sm !font-black uppercase tracking-widest transition-all duration-500 transform ${view === 'local'
                    ? 'bg-[#E23744] text-white shadow-[0_4px_20px_rgba(226,55,68,0.2)] scale-105'
                    : 'text-gray-400 hover:text-[#2D2D2D] hover:bg-white/40 scale-[0.98] hover:scale-100'
                  }`}
              >
                Local
              </button>

              {/* Elegant Vertical Divider */}
              <div className={`h-4 w-px bg-gray-300/30 transition-opacity duration-500 ${view === 'local' || view === 'outstation' ? 'opacity-0' : 'opacity-100'}`} />

              <button
                onClick={() => setView('outstation')}
                className={`flex-1 md:flex-none px-8 py-3 rounded-xl para-sm !font-black uppercase tracking-widest transition-all duration-500 transform ${view === 'outstation'
                    ? 'bg-[#E23744] text-white shadow-[0_4px_20px_rgba(226,55,68,0.2)] scale-105'
                    : 'text-gray-400 hover:text-[#2D2D2D] hover:bg-white/40 scale-[0.98] hover:scale-100'
                  }`}
              >
                Outstation
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Table View (Visible on md and up) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#EDA749] text-white">
                <th className="p-6 text-left para-xs !text-white !font-black uppercase tracking-widest">Vehicle Details</th>
                {view === 'local' ? (
                  <>
                    <th className="p-6 text-center para-sm !text-white !font-black uppercase tracking-widest">4Hrs/40Kms</th>
                    <th className="p-6 text-center para-sm !text-white !font-black uppercase tracking-widest">8Hrs/80Kms</th>
                    <th className="p-6 text-center para-sm !text-white !font-black uppercase tracking-widest">12Hrs/120Kms</th>
                  </>
                ) : (
                  <th className="p-6 text-center para-sm !text-white !font-black uppercase tracking-widest">12Hrs/300Kms (Out)</th>
                )}
                <th className="p-6 text-center para-sm !text-white !font-black uppercase tracking-widest">Extra Km/Hr</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-[#F4F4F2]/50 transition-colors group">
                  <td className="p-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="para-sm !font-black text-[#2D2D2D] uppercase">{row.vehicle}</span>
                        <span className="bg-[#F4F4F2] text-[#3E4D86] text-[8px] font-black px-2 py-0.5 rounded-md border border-gray-100 group-hover:bg-[#3E4D86] group-hover:text-white transition-colors uppercase">
                          A/c
                        </span>
                      </div>
                      <span className="para-xs text-gray-400 uppercase !font-bold">{row.capacity}</span>
                    </div>
                  </td>
                  {view === 'local' ? (
                    <>
                      <td className="p-6 text-center para-sm !font-black text-[#2D2D2D]">₹{row.local["4H"]}/-</td>
                      <td className="p-6 text-center para-sm !font-black text-[#2D2D2D]">₹{row.local["8H"]}/-</td>
                      <td className="p-6 text-center para-sm !font-black text-[#2D2D2D]">₹{row.local["12H"]}/-</td>
                    </>
                  ) : (
                    <td className="p-6 text-center para-sm !font-black text-[#E23744]">₹{row.out}/-</td>
                  )}
                  <td className="p-6 text-center">
                    <div className="flex flex-col gap-1">
                      <span className="para-sm text-gray-500 !font-bold uppercase">Km: ₹{row.extraKm}</span>
                      <span className="para-sm text-gray-500 !font-bold uppercase">Hr: ₹{row.extraHr}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile "Card" View (Visible only on mobile) */}
        <div className="md:hidden divide-y divide-gray-100">
          {data.map((row, i) => (
            <div key={i} className="p-6 flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="para-sm !font-black text-[#2D2D2D] uppercase tracking-tight">{row.vehicle}</span>
                  <span className="para-xs text-gray-400 uppercase !font-bold">{row.capacity}</span>
                </div>
                <span className="bg-[#3E4D86] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase">A/c</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {view === 'local' ? (
                  <>
                    <div className="bg-[#F4F4F2] p-4 rounded-xl">
                      <p className="para-xs text-gray-400 mb-1 uppercase tracking-tighter">4H/40K</p>
                      <p className="para-sm !font-black text-[#2D2D2D]">₹{row.local["4H"]}</p>
                    </div>
                    <div className="bg-[#F4F4F2] p-4 rounded-xl">
                      <p className="para-xs text-gray-400 mb-1 uppercase tracking-tighter">8H/80K</p>
                      <p className="para-sm !font-black text-[#2D2D2D]">₹{row.local["8H"]}</p>
                    </div>
                    <div className="bg-[#F4F4F2] p-4 rounded-xl col-span-2">
                      <p className="para-xs text-gray-400 mb-1 uppercase tracking-tighter">12H/120K</p>
                      <p className="para-sm !font-black text-[#2D2D2D]">₹{row.local["12H"]}</p>
                    </div>
                  </>
                ) : (
                  <div className="bg-[#F4F4F2] p-4 rounded-xl col-span-2 flex justify-between items-center">
                    <div>
                      <p className="para-xs text-gray-400 mb-1 uppercase tracking-tighter">Outstation (300K)</p>
                      <p className="para-sm !font-black text-[#E23744]">₹{row.out}</p>
                    </div>
                    <div className="text-right">
                      <p className="para-xs text-gray-400 uppercase">Per Day</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div className="flex gap-4">
                  <span className="para-xs !font-bold text-gray-500 uppercase">Extra Km: ₹{row.extraKm}</span>
                  <span className="para-xs !font-bold text-gray-500 uppercase">Extra Hr: ₹{row.extraHr}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RentalTariffTable;