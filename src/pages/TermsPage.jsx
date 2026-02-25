import React from 'react';
import { ShieldAlert, FileText, Clock, Printer } from 'lucide-react';

const TermsPage = () => {
  const lastUpdated = "February 24, 2026"; // Current Date

  const legalSections = [
    {
      title: "1. Acceptance of the Agreement",
      content: "By utilizing the mobility platform or physical transport services provided by Facilities Travels Tours & Travels Pvt. Ltd. (FTAT), you hereby agree to comply with and be bound by the following terms. These terms constitute a legally binding agreement between the user (individual or corporate entity) and FTAT."
    },
    {
      title: "2. Definition of Services",
      content: "FTAT specializes in end-to-end corporate transportation, including employee daily commute, executive airport transfers, and customized vacation travel packages across the Indian subcontinent. Services are delivered through a fleet of GPS-enabled vehicles and verified professional chauffeurs."
    },
    {
      title: "3. Corporate Client Obligations",
      content: "Corporate entities entering into a Service Level Agreement (SLA) must provide accurate employee cluster data for route optimization. Clients are responsible for ensuring that their designated passengers adhere to safety protocols and do not engage in activities that compromise the integrity of the fleet or the safety of the chauffeur."
    },
    {
      title: "4. Safety and Statutory Compliance",
      content: "FTAT operates in strict accordance with Indian Motor Vehicle acts and regional transport regulations. All vehicles maintain valid fitness certificates, comprehensive insurance, and pollution control (PUC) documentation. Chauffeurs undergo rigorous background verification and defensive driving training to ensure institutional-grade safety."
    },
    {
      title: "5. Financial Terms and Billing",
      content: "For corporate accounts, billing cycles are typically monthly unless otherwise specified in the master contract. Ad-hoc vacation bookings require a 50% advance payment to secure vehicle allocation. All applicable GST and regional levies will be billed as per the prevailing government rates at the time of service."
    },
    {
      title: "6. Cancellation and Modification Policy",
      content: "Modifications to corporate shift timings require a minimum notice period of 24 hours to prevent operational friction. For vacation packages, cancellations made less than 48 hours prior to departure are subject to a 25% administrative fee. FTAT reserves the right to cancel services due to extreme weather, civil unrest, or other force majeure events."
    },
    {
      title: "7. Data Privacy and Confidentiality",
      content: "FTAT collects employee residency data solely for route mapping and safety monitoring. We employ industry-standard encryption to protect client data and do not share sensitive corporate information with third-party marketing entities."
    },
    {
      title: "8. Limitation of Liability",
      content: "FTAT shall not be held liable for delays caused by traffic congestion, road construction, or other external variables beyond our reasonable control. Our liability in any service-related dispute is strictly limited to the value of the specific trip or service duration in question."
    },
    {
      title: "9. Dispute Resolution and Jurisdiction",
      content: "Any disagreements arising from these terms shall first be addressed through good-faith arbitration. If unresolved, the matter shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#2D2D2D] font-sans">
      {/* Header Section */}
      <header className="pt-30 md:pt-40 border-b border-gray-100">
        <div className="max-w-8xl mx-10 px-8 lg:px-16">
          <div className="flex items-center gap-3 mb-10">
            <ShieldAlert size={18} className="text-[#E23744]" />
            <span className="text-[#E23744] font-black para-md uppercase tracking-[0.4em]">Legal Framework</span>
          </div>
          <h1 className="heading-1 font-black uppercase tracking-tighter mb-10 leading-none">
            Terms of <span className="text-[#3E4D86]">Service.</span>
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-8 py-30">
        <div className="prose prose-lg max-w-none">
          <div className="mb-20 pb-12 border-b border-gray-100">
            <p className="text-xl text-gray-500 font-bold leading-relaxed italic text-justify">
              "Facilities Travels Tours & Travels Pvt. Ltd. (FTAT) is dedicated to providing reliable, 
              compliant, and scalable transportation solutions. This document outlines the legal 
              obligations and operational standards that govern our partnership with you".
            </p>
          </div>

          <div className="space-y-16">
            {legalSections.map((section, index) => (
              <section key={index} className="group">
                <h2 className="text-2xl font-black uppercase tracking-tight text-[#3E4D86] mb-6 flex items-center gap-4">
                  <span className="text-[#EDA749] opacity-30 text-4xl">/</span>
                  {section.title}
                </h2>
                <div className="pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500">
                  <p className="text-gray-600 font-medium leading-relaxed text-justify">
                    {section.content}
                  </p>
                </div>
              </section>
            ))}
          </div>

          {/* Institutional Closing */}
          {/* <div className="mt-32 p-12 bg-[#F4F4F2] rounded-[2.5rem] border-t-8 border-[#3E4D86]">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="space-y-4">
                <h4 className="font-black uppercase text-sm tracking-widest">Legal & Compliance Office</h4>
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] leading-loose">
                  Facilities Travels Tours & Travels Pvt. Ltd. <br />
                  Mumbai, Maharashtra, India <br />
                  mhatresarthakwork37@gmail.com
                </p>
              </div>
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-3 bg-[#2D2D2D] text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#E23744] transition-all shadow-xl"
              >
                <Printer size={16} /> Print Document
              </button>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default TermsPage;