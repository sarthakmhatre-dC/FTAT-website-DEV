import React from 'react';
import { ShieldAlert, Clock, MapPin, BadgePercent, Moon, PhoneCall } from 'lucide-react';

const TariffNotes = () => {
  const notes = [
    {
      icon: <ShieldAlert size={28} />,
      title: "Outdoor Duty",
      content: "A Driver Allowance of Rs. 300/- will be charged for all outdoor duty assignments.",
      accent: "border-[#E23744]"
    },
    {
      icon: <MapPin size={28} />,
      title: "Calculation Base",
      content: "Time and Kms will be calculated strictly from our office-to-office.",
      accent: "border-[#3E4D86]"
    },
    {
      icon: <Moon size={28} />,
      title: "Night Charges",
      content: "Rs. 150/- will be charged for services rendered between 11:00 PM to 5:00 AM.",
      accent: "border-[#EDA749]"
    },
    {
      icon: <BadgePercent size={28} />,
      title: "Statutory Extras",
      content: "All tolls, parking, and taxes will be charged extra at actual cost.",
      accent: "border-[#3E4D86]"
    },
    {
      icon: <Clock size={28} />,
      title: "Outstation Halt",
      content: "For outstation duty, a night halt charge of Rs. 500/- per night will be applicable.",
      accent: "border-[#E23744]"
    },
    {
      icon: <PhoneCall size={28} />,
      title: "Custom Support",
      content: "For long-term corporate contracts or special events, contact our support desk.",
      accent: "border-[#3E4D86]",
      isCTA: true
    }
  ];

  return (
    <section className="w-full px-8 lg:px-16 pt-10 pb-32 bg-[#F4F4F2]/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-16">
          <div className="h-px flex-grow bg-gray-200" />
          <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.5em] whitespace-nowrap">
            Statutory Conditions
          </h4>
          <div className="h-px flex-grow bg-gray-200" />
        </div>

        {/* Enhanced Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notes.map((note, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white p-10 rounded-[2.5rem] border-l-[10px] ${note.accent} shadow-2xl shadow-gray-200/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[220px] group`}
            >
              <div className="flex flex-col gap-6">
                {/* Header: Icon and Title on Right */}
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${note.isCTA ? 'bg-[#3E4D86] text-white' : 'bg-[#F4F4F2] text-[#3E4D86] group-hover:bg-[#3E4D86] group-hover:text-white'}`}>
                    {note.icon}
                  </div>
                  <h5 className="text-sm font-black text-[#2D2D2D] uppercase tracking-widest">
                    {note.title}
                  </h5>
                </div>

                {/* Content: Increased Text Size */}
                <p className="text-[13px] text-gray-500 leading-relaxed font-bold uppercase tracking-tight">
                  {note.content}
                </p>
              </div>

              {/* Action for the last card */}
              {note.isCTA && (
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <span className="text-[10px] font-black text-[#E23744] uppercase tracking-widest flex items-center gap-2 cursor-pointer hover:gap-4 transition-all">
                    Inquire Now <div className="h-px w-8 bg-[#E23744]" />
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TariffNotes;