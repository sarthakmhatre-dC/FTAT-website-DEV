import React, { useState, useRef } from 'react';
import { ChevronDown, HelpCircle, Plus, Minus } from 'lucide-react';
import { faqData } from '../../data/faqData';// Import the new component

const FAQSection = ({ setId = "home" }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Ref to anchor the scroll-back position
  const faqTopRef = useRef(null);

  const faqs = faqData[setId] || faqData.home || [];
  const visibleFaqs = isExpanded ? faqs : faqs.slice(0, 5);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleToggleExpand = () => {
    if (isExpanded) {
      const offset = 120; 
      const elementPosition = faqTopRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => setIsExpanded(false), 400);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section className="relative w-full bg-[#F4F4F2] flex flex-col items-center justify-center overflow-hidden py-30">
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
          <div ref={faqTopRef} className="h-1 w-full" />
        </div>

        {/* FAQ Accordion List */}
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

        {/* View More / View Less Toggle */}
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
        
      </div>
    </section>
  );
};

export default FAQSection;