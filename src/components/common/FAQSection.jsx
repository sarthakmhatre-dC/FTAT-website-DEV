import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, X, User, Mail, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { faqSets } from '../../data/faqData'; // Import your data

const FAQSection = ({ setId = "home" }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryData, setQueryData] = useState({ name: '', email: '', query: '' });

  // Get the specific data set based on the prop, fallback to 'home'
  const faqs = faqSets[setId] || faqSets.home;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleQueryChange = (e) => {
    setQueryData({ ...queryData, [e.target.name]: e.target.value });
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    const ownerNumber = "9321685221";
    const message = `New FAQ Query%0a------------------------%0aHi, I am ${queryData.name}%0aEmail: ${queryData.email}%0aQuery: ${queryData.query}`;
    window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');
    setQueryData({ name: '', email: '', query: '' });
    setIsModalOpen(false);
  };

  return (
    <section className="relative w-full bg-[#F4F4F2] flex items-center justify-center overflow-hidden py-30">
      <div className="max-w-7xl mx-10 px-8 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-5">
            <HelpCircle size={20} className="text-[#E23744]" />
            <span className="text-[#E23744] font-bold tracking-[0.3em] para-md uppercase">
              Support & Insights
            </span>
          </div>
          <h2 className="heading-1 font-bold text-[#2D2D2D] tracking-tight mb-6">
            Frequently Asked <span className="text-[#3E4D86]">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between p-6 text-left group">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${openIndex === index ? 'bg-[#E23744] text-white' : 'bg-[#F4F4F2] text-[#3E4D86]'}`}>
                    <HelpCircle size={18} />
                  </div>
                  <span className={`font-bold text-sm md:text-base tracking-tight transition-colors ${openIndex === index ? 'text-[#E23744]' : 'text-[#2D2D2D]'}`}>
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? <ChevronUp size={20} className="text-[#E23744]" /> : <ChevronDown size={20} className="text-gray-400 group-hover:text-[#3E4D86]" />}
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 ml-14 text-gray-500 text-sm md:text-base leading-relaxed border-t border-gray-50 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 font-medium mb-6">
            Still have questions regarding our transport rollouts?
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-[#2D2D2D] text-white font-bold rounded-xl hover:bg-[#E23744] transition-all shadow-lg uppercase text-xs tracking-widest"
          >
            Contact Operations Team
          </button>
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden p-8 animate-in fade-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors">
              <X size={24} />
            </button>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">Send a Query</h3>
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl border border-green-100">
                <FaWhatsapp className="text-green-500" />
                <p className="text-[11px] text-green-700 font-semibold uppercase tracking-wider">You will be redirected to WhatsApp</p>
              </div>
            </div>
            <form onSubmit={handleQuerySubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" name="name" required value={queryData.name} onChange={handleQueryChange} placeholder="Your Full Name" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D]" />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="email" name="email" required value={queryData.email} onChange={handleQueryChange} placeholder="Work Email ID" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D]" />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
                <textarea name="query" required value={queryData.query} onChange={handleQueryChange} rows="4" placeholder="How can our operations team help you?" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D] resize-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-[#E23744] text-white font-bold rounded-xl shadow-lg hover:bg-[#c92f3a] transition-all flex items-center justify-center gap-3">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FAQSection;