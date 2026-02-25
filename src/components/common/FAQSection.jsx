import React, { useState, useRef } from 'react';
import { ChevronDown, HelpCircle, X, User, Mail, MessageSquare, Plus, Minus } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { faqSets } from '../../data/faqData';

const FAQSection = ({ setId = "home" }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [queryData, setQueryData] = useState({ name: '', email: '', query: '' });

  // Ref to anchor the scroll-back position
  const faqTopRef = useRef(null);

  const faqs = faqSets[setId] || faqSets.home;
  const visibleFaqs = isExpanded ? faqs : faqs.slice(0, 5);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /**
   * Handles the precise scroll behavior for the "View Less" action.
   * Ensures the user returns to the exact FAQ starting point.
   */
  const handleToggleExpand = () => {
    if (isExpanded) {
      const offset = 120; // Accounts for sticky navigation height
      const elementPosition = faqTopRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Synchronize state change with the completion of the smooth scroll
      setTimeout(() => setIsExpanded(false), 400);
    } else {
      setIsExpanded(true);
    }
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
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-5">
            <HelpCircle size={20} className="text-[#E23744]" />
            <span className="text-[#E23744] font-black tracking-[0.3em] para-md uppercase">
              Support & Insights
            </span>
          </div>
          <h2 className="heading-2 font-bold text-[#2D2D2D] tracking-tight mb-6">
            Frequently Asked <span className="text-[#3E4D86]">Questions</span>
          </h2>
          {/* Scroll Anchor Point */}
          <div ref={faqTopRef} className="h-1 w-full" />
        </div>

        {/* FAQ Accordion List with Premium Hover Animations */}
        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#E23744]/20 hover:-translate-y-1"
            >
              <button 
                onClick={() => toggleFAQ(index)} 
                className="w-full flex items-center justify-between p-6 text-left group outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl transition-all duration-500 ${openIndex === index ? 'bg-[#E23744] text-white scale-110 shadow-lg shadow-[#E23744]/20' : 'bg-[#F4F4F2] text-[#3E4D86]'}`}>
                    <HelpCircle size={18} />
                  </div>
                  <span className={`font-bold text-sm md:text-base tracking-tight transition-all duration-500 ${openIndex === index ? 'text-[#E23744] translate-x-2' : 'text-[#2D2D2D]'}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`transition-all duration-500 transform ${openIndex === index ? 'rotate-180 text-[#E23744]' : 'text-gray-300'}`}>
                  <ChevronDown size={22} />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-8 pt-2 ml-16 text-gray-500 text-sm md:text-base leading-relaxed border-t border-gray-50/50 text-justify font-medium">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Toggle - Visibility Logic */}
        {faqs.length > 5 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={handleToggleExpand}
              className="flex items-center gap-3 px-10 py-3.5 bg-white border-2 border-gray-100 text-[#2D2D2D] font-black para-sm uppercase tracking-[0.2em] rounded-2xl hover:border-[#E23744] hover:text-[#E23744] hover:shadow-2xl hover:shadow-[#E23744]/10 transition-all duration-500 group active:scale-95"
            >
              {isExpanded ? (
                <>
                  <Minus size={14} className="text-[#E23744] group-hover:scale-125 transition-transform" />
                  View Less Questions
                </>
              ) : (
                <>
                  <Plus size={14} className="text-[#E23744] group-hover:scale-125 transition-transform" />
                  View More Questions
                </>
              )}
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 font-medium mb-8">
            Still have questions regarding our transport rollouts?
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-5 bg-[#2D2D2D] text-white font-bold rounded-2xl hover:bg-[#E23744] transition-all transform hover:-translate-y-1 shadow-2xl uppercase para-sm tracking-[0.25em]"
          >
            Contact Operations Team
          </button>
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
              <h3 className="text-2xl font-black text-[#2D2D2D] mb-2 uppercase tracking-tight">Send a Query</h3>
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl border border-green-100">
                <FaWhatsapp className="text-green-500" />
                <p className="text-[10px] text-green-700 font-black uppercase tracking-widest">You will be redirected to WhatsApp</p>
              </div>
            </div>
            <form onSubmit={handleQuerySubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type="text" name="name" required value={queryData.name} onChange={handleQueryChange} placeholder="Your Full Name" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D] text-sm" />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type="email" name="email" required value={queryData.email} onChange={handleQueryChange} placeholder="Work Email ID" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D] text-sm" />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-400" size={16} />
                <textarea name="query" required value={queryData.query} onChange={handleQueryChange} rows="4" placeholder="How can our operations team help you?" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D] resize-none text-sm" />
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

export default FAQSection;