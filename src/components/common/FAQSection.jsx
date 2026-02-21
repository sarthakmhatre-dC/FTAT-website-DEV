import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does FTAT provide?",
      answer: "FTAT provides end-to-end corporate transportation solutions including employee pickup and drop services, corporate and airport transfers, long-term corporate car packages, and dedicated fleet deployments for enterprises."
    },
    {
      question: "Do you only work with corporate clients?",
      answer: "Yes. FTAT is focused on serving businesses, enterprises, and institutions with structured, SLA-driven transportation services designed for professional and large-scale operations."
    },
    {
      question: "How do you ensure safety and compliance?",
      answer: "All drivers undergo background verification and training. Our vehicles are regularly inspected and maintained, and our operations follow defined SOPs with GPS tracking and monitoring for every trip."
    },
    {
      question: "Are your vehicles GPS-tracked?",
      answer: "Yes. All our vehicles are GPS-enabled, allowing real-time tracking, route monitoring, and operational control to ensure safety and on-time performance."
    },
    {
      question: "Can you handle large-scale employee transportation?",
      answer: "Absolutely. Our operations are designed to scale, and we manage both small and large fleets for enterprises with multiple routes, shifts, and locations."
    },
    {
      question: "How does billing and invoicing work?",
      answer: "We provide centralized, transparent billing with detailed trip reports and MIS as per your company’s requirements. Invoicing can be customized for monthly or contract-based billing cycles."
    },
    {
      question: "What happens in case of vehicle breakdown or emergencies?",
      answer: "We have backup vehicles and an escalation process in place. Our 24/7 operations team ensures quick replacements and minimal disruption to your operations."
    },
    {
      question: "What makes FTAT different from aggregators or local operators?",
      answer: "FTAT is a corporate-focused transport partner offering SLA-driven operations, compliance, dedicated account management, structured processes, and enterprise-grade reporting — not just on-demand rides."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F4F4F2] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <HelpCircle size={20} className="text-[#E23744]" />
            <span className="text-[#E23744] font-bold tracking-[0.3em] text-[10px] uppercase">
              Support & Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#2D2D2D] tracking-tight mb-6">
            Frequently Asked <span className="text-[#3E4D86]">Questions</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Everything you need to know about our corporate transport processes, 
            safety standards, and compliance.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${openIndex === index ? 'bg-[#E23744] text-white' : 'bg-[#F4F4F2] text-[#3E4D86]'}`}>
                    <HelpCircle size={18} />
                  </div>
                  <span className={`font-bold text-sm md:text-base tracking-tight transition-colors ${openIndex === index ? 'text-[#E23744]' : 'text-[#2D2D2D]'}`}>
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-[#E23744]" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400 group-hover:text-[#3E4D86]" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
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
          <button className="px-8 py-4 bg-[#2D2D2D] text-white font-bold rounded-xl hover:bg-[#E23744] transition-all shadow-lg uppercase text-xs tracking-widest">
            Contact Operations Team
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;