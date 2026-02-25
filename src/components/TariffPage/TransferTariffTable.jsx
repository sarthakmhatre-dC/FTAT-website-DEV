import React, { useState } from 'react';
import { useRef } from 'react';
const TransferTariffTable = () => {
  const [location, setLocation] = useState('hub1');

  // 1. Add this state at the top with your other useState hooks
  const [viewOpen, setViewOpen] = useState(false);

  // 2. (Optional but Recommended) Add a ref to handle closing when clicking outside
  const dropdownRef = useRef(null);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setViewOpen((prev) => !prev);
  };

  // Function to handle selection and close the menu
  const handleSelectLocation = (key) => {
    setLocation(key); // Updates the table data
    setViewOpen(false); // Closes the elegant menu
  };

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
      label: "CSMT / Navi Mumbai",
      description: "Includes: Mumbai Central, Navi Mumbai Airport & CSMT"
    }
  };

  const data = [
    { vehicle: "Dzire & Glanza", hub1: ["1500", "1700", "2300"], hub2: ["1600", "1800", "2400"], hub3: ["1700", "2000", "2500"] },
    { vehicle: "Ertiga", hub1: ["1900", "2200", "2800"], hub2: ["2000", "2300", "3000"], hub3: ["2200", "2500", "3200"] },
    { vehicle: "Innova Crysta", hub1: ["2500", "2800", "3600"], hub2: ["2700", "3000", "3800"], hub3: ["3000", "3400", "4200"] }
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 pb-12 md:pb-24 bg-[#F4F4F2]/40">
      <section className="max-w-7xl mx-auto bg-white rounded-[1.5rem] md:rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden mt-6 md:mt-12">

        {/* Header & Filter Section */}
        <div className="p-6 md:p-12 border-b border-gray-50 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="heading-3 text-[#2D2D2D] uppercase mb-2">
              Airport & <span className="text-[#3E4D86]">Railway Transfers</span>
            </h3>

            <div className="flex items-center gap-2 mt-3 animate-in fade-in slide-in-from-left-4 duration-500">
              <div className="w-1 h-4 bg-[#E23744] rounded-full" />
              <p className="para-xs !font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                {locations[location].description}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            {/* Elegant Custom Mobile Dropdown */}
            {/* Elegant Mobile Dropdown - Modified for proper spacing and theme consistency */}
            <div className="relative md:hidden w-full group">
              <div className="relative md:hidden w-full group">
                {/* Elegant Custom Dropdown Toggle */}
                <button
                  onClick={() => setViewOpen(!viewOpen)} // Ensure you add [viewOpen, setViewOpen] = useState(false) at the top
                  className="w-full flex items-center justify-between px-6 py-4 bg-[#eda749] text-white rounded-2xl shadow-xl transition-all duration-300 active:scale-[0.98]"
                >
                  <span className="para-sm !font-black uppercase tracking-[0.2em]">
                    {locations[location].label}
                  </span>
                  <div className={`transition-transform duration-300 ${viewOpen ? 'rotate-180' : ''}`}>
                    <svg width="12" height="8" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {/* Elegant Floating Menu: Exactly the same width as the button */}
                {viewOpen && (
                  <>
                    {/* Invisible backdrop to close menu when clicking outside */}
                    <div className="fixed inset-0 z-30" onClick={() => setViewOpen(false)} />

                    <div className="absolute top-full left-0 right-0 mt-2 z-40 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      {Object.keys(locations).map((key) => (
                        <button
                          key={key}
                          onClick={() => {
                            setLocation(key);
                            setViewOpen(false);
                          }}
                          className={`w-full text-left px-6 py-4 para-sm uppercase tracking-wider transition-colors border-b last:border-none border-gray-50 ${location === key
                            ? 'bg-[#E23744]/5 text-[#E23744] !font-black'
                            : 'text-[#2D2D2D] hover:bg-gray-50'
                            }`}
                        >
                          {locations[key].label}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Institutional Label */}
                <p className="mt-4 para-xs text-gray-400 !font-bold uppercase tracking-[0.15em] flex items-center gap-2 px-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EDA749] animate-pulse" />
                  Select Transfer Destination
                </p>
              </div>

              {/* Refined Label: Uses Mustard dot to signify active selection */}
              <p className="mt-4 para-xs text-gray-400 !font-bold uppercase tracking-[0.15em] flex items-center gap-2 px-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EDA749] animate-pulse" />
                Select Transfer Destination
              </p>
            </div>

            {/* Desktop Segmented Controller */}
            <div className="hidden md:flex items-center p-1.5 bg-[#F4F4F2]/80 backdrop-blur-sm rounded-2xl border border-gray-100/50 shadow-inner">
              {Object.keys(locations).map((key, index) => (
                <React.Fragment key={key}>
                  <button
                    onClick={() => setLocation(key)}
                    className={`px-6 py-3 rounded-xl para-sm !font-black uppercase tracking-widest transition-all duration-500 transform ${location === key
                      ? 'bg-[#E23744] text-white shadow-lg scale-105'
                      : 'text-gray-400 hover:text-[#2D2D2D] hover:bg-white/40 scale-[0.98] hover:scale-100'
                      }`}
                  >
                    {locations[key].label}
                  </button>
                  {index < Object.keys(locations).length - 1 && (
                    <div className={`h-4 w-px bg-gray-300/30 transition-opacity duration-500 ${location === key || location === Object.keys(locations)[index + 1] ? 'opacity-0' : 'opacity-100'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#EDA749] text-white">
                <th className="p-6 text-left para-xs !text-white !font-black uppercase tracking-widest">Vehicle Details</th>
                <th className="p-6 text-center para-xs !text-white !font-black uppercase tracking-widest">Direct Drop</th>
                <th className="p-6 text-center para-xs !text-white !font-black uppercase tracking-widest">Direct Pickup</th>
                <th className="p-6 text-center para-xs !text-white !font-black uppercase tracking-widest">Pickup Seeoff</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-[#F4F4F2]/50 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <span className="para-sm !font-black text-[#2D2D2D] uppercase tracking-tight">{row.vehicle}</span>
                      <span className="bg-[#F4F4F2] text-[#3E4D86] text-[8px] font-black px-2 py-0.5 rounded-md border border-gray-100 group-hover:bg-[#3E4D86] group-hover:text-white transition-colors uppercase">A/c</span>
                    </div>
                  </td>
                  <td className="p-6 text-center para-sm !font-black text-[#2D2D2D]">₹{row[location][0]}/-</td>
                  <td className="p-6 text-center para-sm !font-black text-[#2D2D2D]">₹{row[location][1]}/-</td>
                  <td className="p-6 text-center para-sm !font-black text-[#3E4D86]">₹{row[location][2]}/-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View (Enhanced to fix UI breakdown) */}
        <div className="md:hidden divide-y divide-gray-100">
          {data.map((row, i) => (
            <div key={i} className="p-6 flex flex-col gap-5">
              {/* Header Container: Fixes A/C Tag and Title wrapping */}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex items-center gap-2 max-w-[65%]">
                  <span className="para-sm !font-black text-[#2D2D2D] uppercase tracking-tight">{row.vehicle}</span>
                  <span className="bg-[#3E4D86] text-white text-[8px] font-black px-2 py-0.5 rounded-md uppercase shrink-0">A/c</span>
                </div>
                <div className="px-3 py-1 bg-[#F4F4F2] rounded-lg border border-gray-100">
                  <span className="para-xs text-gray-400 uppercase !font-bold text-[9px] block whitespace-nowrap">
                    Station: {location === 'hub1' ? 'Kurla' : location === 'hub2' ? 'Dadar' : 'CSMT'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#F4F4F2] p-4 rounded-xl border border-gray-50">
                  <p className="para-xs text-gray-400 mb-1 uppercase tracking-tighter">Direct Drop</p>
                  <p className="para-sm !font-black text-[#2D2D2D]">₹{row[location][0]}</p>
                </div>
                <div className="bg-[#F4F4F2] p-4 rounded-xl border border-gray-50">
                  <p className="para-xs text-gray-400 mb-1 uppercase tracking-tighter">Direct Pickup</p>
                  <p className="para-sm !font-black text-[#2D2D2D]">₹{row[location][1]}</p>
                </div>
                <div className="bg-[#3E4D86]/5 border border-[#3E4D86]/10 p-5 rounded-xl col-span-2 flex justify-between items-center shadow-inner">
                  <div>
                    <p className="para-xs text-[#3E4D86] mb-1 uppercase tracking-tighter font-bold">Pickup Seeoff</p>
                    <p className="para-sm !font-black text-[#3E4D86]">₹{row[location][2]}</p>
                  </div>
                  {/* <div className="text-right">
                    <span className="para-xs text-white bg-[#3E4D86] px-2 py-1 rounded-md uppercase text-[8px] font-black">Premium</span>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TransferTariffTable;