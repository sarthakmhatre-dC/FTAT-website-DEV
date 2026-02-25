import React, { useState } from 'react';
import { ShieldAlert, Clock, MapPin, BadgePercent, Moon, PhoneCall, X, User, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const TariffNotes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryData, setQueryData] = useState({ name: '', email: '', query: '' });

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

  const handleQueryChange = (e) => {
    setQueryData({ ...queryData, [e.target.name]: e.target.value });
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    const ownerNumber = "9321685221";
    const message = `Tariff Inquiry%0a------------------------%0aHi, I am ${queryData.name}%0aEmail: ${queryData.email}%0aQuery: ${queryData.query}`;
    window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');
    setQueryData({ name: '', email: '', query: '' });
    setIsModalOpen(false);
  };

  return (
    <section className="w-full px-6 md:px-8 lg:px-16 py-12 md:py-24 bg-[#F4F4F2]/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-16">
          <div className="h-px flex-grow bg-gray-200" />
          <h4 className="para-md font-black text-gray-400 uppercase tracking-[0.5em] whitespace-nowrap">
            Statutory Conditions
          </h4>
          <div className="h-px flex-grow bg-gray-200" />
        </div>

        {/* Enhanced Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {notes.map((note, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-l-[10px] ${note.accent} shadow-2xl shadow-gray-200/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[240px] group`}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  {/* Unified Icon Logic: Background and Icon color switch on hover for ALL cards */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 bg-[#F4F4F2] text-[#3E4D86] group-hover:bg-[#3E4D86] group-hover:text-white`}>
                    {note.icon}
                  </div>
                  <h5 className="text-sm font-black text-[#2D2D2D] uppercase tracking-widest">
                    {note.title}
                  </h5>
                </div>

                <p className="text-[13px] text-gray-500 leading-relaxed font-bold uppercase tracking-tight">
                  {note.content}
                </p>
              </div>

              {/* Enhanced Action Button: Consistent with AboutUsCTA and SplitHero buttons */}
              {note.isCTA && (
                <div className="mt-6">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-[#E23744] text-white font-black rounded-full shadow-lg hover:bg-[#2D2D2D] transition-all transform hover:-translate-y-1 active:scale-95 uppercase para-xs tracking-widest"
                  >
                    Inquire Now
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/40 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden p-8 animate-in fade-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-[#E23744] transition-colors">
              <X size={24} />
            </button>
            <div className="mb-8">
              <h3 className="heading-3 text-[#2D2D2D] mb-2 uppercase tracking-tight">Tariff Inquiry</h3>
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl border border-green-100">
                <FaWhatsapp className="text-green-500" />
                <p className="para-xs text-green-700 !font-black uppercase tracking-widest">Redirecting to WhatsApp</p>
              </div>
            </div>
            <form onSubmit={handleQuerySubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type="text" name="name" required value={queryData.name} onChange={handleQueryChange} placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-xs !font-medium text-[#2D2D2D]" />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type="email" name="email" required value={queryData.email} onChange={handleQueryChange} placeholder="Work Email ID" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-xs !font-medium text-[#2D2D2D]" />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-400" size={16} />
                <textarea name="query" required value={queryData.query} onChange={handleQueryChange} rows="4" placeholder="Mention vehicle class or specific duty requirements..." className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-xs !font-medium text-[#2D2D2D] resize-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-[#E23744] text-white font-black rounded-xl shadow-lg hover:bg-[#2D2D2D] transition-all flex items-center justify-center gap-3 uppercase para-sm tracking-widest">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default TariffNotes;