import React from 'react';
import { ShieldAlert, FileText, Clock, Printer, MapPin, Mail, Phone } from 'lucide-react';

const TermsPage = () => {
  const lastUpdated = "January 1, 2026";

  return (
    <div className="w-full min-h-screen bg-white text-[#2D2D2D] selection:bg-[#3E4D86] selection:text-white">
      {/* Header Section */}
      <header className="pt-24 md:pt-36 border-b border-gray-100 bg-[#F9F9FB]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-10 md:pb-16">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <ShieldAlert size={18} className="text-[#E23744]" />
              <span className="para-muted text-[#E23744] font-black tracking-[0.4em] text-sm md:text-base">Legal Framework</span>
            </div>
            <h1 className="heading-1 uppercase mb-6 md:mb-8">
              Terms & <span className="text-[#3E4D86]">Conditions.</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-400 font-bold uppercase tracking-widest">
              <div className="para-xs flex items-center gap-2">
                <Clock size={14} />
                Effective: {lastUpdated}
              </div>
              <div className="para-xs flex items-center gap-2">
                <FileText size={14} />
                Corporate v1.0
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">

          {/* Introductory Text */}
          <div className="pb-8 md:pb-12 border-b border-gray-100 space-y-4 md:space-y-5">
            <p className="para-xl text-gray-500 italic text-justify leading-relaxed">
              Welcome to the official website and services of Facilities Tours & Travels Pvt. Ltd. By accessing our website or engaging our corporate transportation services, you agree to comply with and be bound by the following Terms and Conditions.
            </p>

            <p className="para-xl text-gray-500 italic text-justify leading-relaxed">
              These Terms govern the use of our services and apply to all corporate clients, representatives, employees, and authorized users.
            </p>
          </div>

          {/* Legal Sections List (Unrolled) */}
          <div className="space-y-12 md:space-y-20">

            <section id="section-0" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                1. Company Overview
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500 space-y-4">
                <p className="para-xl text-gray-600 text-justify leading-7">
                  Facilities Tours & Travels Pvt. Ltd. is a corporate-focused transportation company based in Mumbai, Maharashtra, India. We provide employee transportation services, corporate airport transfers, dedicated fleet services, and customized corporate mobility solutions.
                </p>
                <p className="para-xl text-gray-600 text-justify leading-7" >
                  All services are subject to availability, contractual agreements, and operational feasibility.
                </p>
              </div>
            </section>

            <section id="section-1" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                2. Scope of Services
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500">
                <p className="para-xl text-gray-600 text-justify leading-7 mb-4">
                  We provide structured corporate transportation solutions including but not limited to:
                </p>
                <ul className="list-disc pl-4 md:pl-5 space-y-2 text-gray-600 mb-4 para-xl">
                  <li>Employee pickup and drop services</li>
                  <li>Corporate and executive airport transfers</li>
                  <li>Dedicated fleet deployment</li>
                  <li>Long-term transport contracts</li>
                  <li>Customized corporate transport packages</li>
                </ul>
                <p className="para-xl text-gray-800 italic leading-7">
                  The exact scope of services shall be defined in the client proposal, service agreement, or contract.
                </p>
              </div>
            </section>

            <section id="section-2" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                3. Service Agreements and Contracts
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500 space-y-4 para-xl text-gray-600 text-justify leading-7">
                <p>
                  All corporate transportation services are governed by a formal agreement or written confirmation between Facilities Tours & Travels Pvt. Ltd. and the client organization.
                </p>
                <p className="font-semibold">
                  The agreement may include:
                </p>
                <p className="leading-tight px-4 md:px-5">
                  Service-level standards, Route and schedule details, Fleet deployment plan, Pricing structure, Billing terms, Contract duration, Escalation and support process
                </p>
                <p className="para-xl text-gray-600 leading-7">
                  In case of any conflict between these Terms and a signed contract, the signed contract shall prevail.
                </p>

              </div>
            </section>

            <section id="section-3" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                4. Booking and Service Requests
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500 para-xl text-gray-600 text-justify leading-7 space-y-4">
                <p>
                  All bookings must be made through authorized communication channels, including email, written confirmation, or official company representatives.
                </p>
                <p>
                  For airport transfers or executive travel, advance booking timelines may apply. Emergency or last-minute bookings are subject to vehicle availability.
                </p>
                <p>
                  Facilities Tours & Travels Pvt. Ltd. reserves the right to refuse service in cases where requests fall outside agreed operational parameters.
                </p>
              </div>
            </section>

            <section id="section-4" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                5. Pricing and Payment Terms
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500 para-xl text-gray-600 text-justify leading-7 space-y-4">
                <p>
                  Pricing shall be as per the mutually agreed proposal or contract.
                </p>
                <p>
                  Charges may be calculated based on vehicle type, usage duration, distance, contract term, or customized package structure.
                </p>
                <p>
                  Invoices are generally raised on a monthly basis unless otherwise agreed in writing.
                </p>
                <p>
                  Payments must be made within the agreed credit period. Delayed payments may attract applicable interest charges as specified in the contract.
                </p>
                <p>
                  Any additional services outside the agreed scope may be billed separately.
                </p>
              </div>
            </section>

            <section id="section-5" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                6. Cancellation and Rescheduling Policy
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500 para-xl text-gray-600 text-justify leading-7 space-y-4">
                <p>
                  For contract-based employee transportation services, route changes or cancellations must be communicated in advance as per the agreed notice period.
                </p>
                <p>
                  For airport transfers or one-time bookings, cancellation timelines may apply as defined in the service confirmation.
                </p>
                <p>
                  Repeated last-minute cancellations or operational disruptions caused by the client may result in additional charges.
                </p>
              </div>
            </section>

            <section id="section-6" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                7. Safety and Compliance
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500">
                <p className="para-xl text-gray-600 text-justify leading-7 mb-4">
                  Facilities Tours & Travels Pvt. Ltd. prioritizes safety and compliance in all corporate transport operations.
                </p>
                <p className="para-xl text-gray-600 text-justify leading-7 mb-4">
                  We ensure:
                </p>
                <ul className="list-disc pl-4 md:pl-5 space-y-2 text-gray-600 mb-4 para-xl">
                  <li>Drivers are background verified and licensed</li>
                  <li>Vehicles carry valid permits, insurance, and fitness certifications
                  </li>
                  <li>Regular maintenance and inspection checks are conducted</li>
                  <li>GPS-enabled monitoring systems are operational</li>
                </ul>
                <p className="para-xl text-gray-800 italic leading-7">
                  Clients are expected to cooperate with safety protocols and ensure that passengers follow vehicle conduct guidelines.
                </p>
              </div>
            </section>

            <section id="section-7" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                8. Passenger Conduct
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500">
                <p className="para-xl text-gray-600 text-justify leading-7 mb-4">
                  Passengers are expected to maintain appropriate conduct during travel.
                </p>
                <p className="para-xl text-gray-600 text-justify leading-7 mb-4">
                  The following are strictly prohibited:
                </p>
                <ul className="list-disc pl-4 md:pl-5 space-y-2 text-gray-600 mb-4 para-xl">
                  <li>Damage to vehicles</li>
                  <li>Harassment or misconduct toward drivers
                  </li>
                  <li>Illegal activities during travel</li>
                  <li>Carrying prohibited or hazardous materials
                  </li>
                </ul>
                <p className="para-xl text-gray-800 italic leading-7">
                  Facilities Tours & Travels Pvt. Ltd. reserves the right to suspend services in cases of serious misconduct.
                </p>
              </div>
            </section>

            <section id="section-8" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                9. Delays and Force Majeure
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500">
                <p className="para-xl text-gray-600 text-justify leading-7 mb-4">
                  Facilities Tours & Travels Pvt. Ltd. shall not be held liable for delays caused by circumstances beyond reasonable control, including but not limited to:
                </p>
                <ul className="list-disc pl-4 md:pl-5 space-y-2 text-gray-600 mb-4 para-xl">
                  <li>Traffic congestion</li>
                  <li>Road closures
                  </li>
                  <li>Weather conditions</li>
                  <li>Natural disasterss
                  </li>
                  <li>Government restrictions</li>
                  <li>Strikes or civil disturbances</li>
                </ul>
                <p className="para-xl text-gray-800 italic leading-7">
                 In such cases, reasonable efforts will be made to minimize disruption.
                </p>
              </div>
            </section>

            <section id="section-9" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                10. Liability Limitations
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500">
                <p className="para-xl text-gray-600 text-justify leading-7 mb-4">
                  While every effort is made to ensure safe and timely services, Facilities Tours & Travels Pvt. Ltd. shall not be liable for:
                </p>
                <ul className="list-disc pl-4 md:pl-5 space-y-2 text-gray-600 mb-4 para-xl">
                  <li>Indirect or consequential losses</li>
                  <li>Business interruption losses
                  </li>
                  <li>Delays due to external circumstances</li>
                  <li>Loss of personal belongings left inside vehicles</li>
                </ul>
                <p className="para-xl text-gray-800 italic leading-7">
                 Clients are advised to ensure appropriate insurance coverage where necessary.
                </p>
              </div>
            </section>

            <section id="section-10" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                11. Confidentiality
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500 space-y-4">
                <p className="para-xl text-gray-600 text-justify leading-7">
                  Facilities Tours & Travels Pvt. Ltd. respects the confidentiality of corporate clients.
                </p>
                <p className="para-xl text-gray-600 text-justify leading-7">
                  Any operational information, employee details, routes, or contractual terms shared during the course of service shall be treated as confidential and not disclosed to third parties without authorization, except where required by law.
                </p>
              </div>
            </section>

            <section id="section-11" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                12. Data Protection
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500 space-y-4">
                <p className="para-xl text-gray-600 text-justify leading-7">
                  Personal information collected for operational purposes shall be used solely for providing transportation services and internal record-keeping.
                </p>
                <p className="para-xl text-gray-600 text-justify leading-7">
                  We do not sell or share client data with unauthorized third parties.
                </p>
              </div>
            </section>

            <section id="section-12" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                13. Service Suspension or Termination
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500">
                <p className="para-xl text-gray-600 text-justify leading-7 mb-4">
                  Facilities Tours & Travels Pvt. Ltd. reserves the right to suspend or terminate services in the event of:
                </p>
                <ul className="list-disc pl-4 md:pl-5 space-y-2 text-gray-600 mb-4 para-xl">
                  <li>Non-payment of dues</li>
                  <li>Violation of contractual obligations
                  </li>
                  <li>Safety or compliance risks</li>
                  <li>Misconduct affecting operations
                  </li>
                </ul>
                <p className="para-xl text-gray-800 italic leading-7">
                 Termination terms shall be governed by the signed service agreement.
                </p>
              </div>
            </section>

            <section id="section-13" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                14. Governing Law and Jurisdiction
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500 space-y-4">
                <p className="para-xl text-gray-600 text-justify leading-7">
                  These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India.
                </p>
                <p className="para-xl text-gray-600 text-justify leading-7">
                  Any disputes arising out of or in connection with these Terms or services provided shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                </p>
              </div>
            </section>

            <section id="section-14" className="group">
              <h2 className="heading-2 uppercase text-[#3E4D86] mb-4 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="text-[#EDA749] opacity-30 text-2xl md:text-4xl">/</span>
                15. Amendments
              </h2>
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500 space-y-4">
                <p className="para-xl text-gray-600 text-justify leading-7">
                  Facilities Tours & Travels Pvt. Ltd. reserves the right to update or modify these Terms and Conditions at any time. Updated versions shall be published on the official website.
                </p>
                <p className="para-xl text-gray-600 text-justify leading-7">
                  Continued use of services after such updates constitutes acceptance of the revised Terms.
                </p>
              </div>
            </section>

          </div>

          {/* Official Contact Footer Section */}
          <div className="mt-16 md:mt-32 p-6 md:p-12 bg-[#F9F9FB] rounded-2xl md:rounded-[2rem] border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
              <div className="space-y-6">
                <h4 className="para-xl text-[#3E4D86] tracking-widest font-black uppercase">Registered Office</h4>
                <div className="space-y-5 text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                  <p className="para-md flex items-start gap-3 font-bold">
                    <MapPin size={16} className="text-[#EDA749] shrink-0 translate-y-1" />
                    <span>Office No. 45, Vardhaman Vatika, Kolshet Road, <br className="hidden md:block" /> Opposite to DMart, Thane (W) - 400607 </span>
                  </p>
                  <p className="para-md flex items-center gap-3 font-bold">
                    <Mail size={16} className="text-[#EDA749]" />
                    facilitiestravels@gmail.com
                  </p>
                  <p className="para-md flex items-center gap-3 font-bold">
                    <Phone size={16} className="text-[#EDA749]" />
                    +91 98209 43077 / 92232 08344
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-end md:items-end gap-8">
                <div className="text-left md:text-right">
                  <p className="para-md leading-relaxed uppercase tracking-[0.01em] font-bold text-[#EDA749]">
                    Facilities Tours & Travels Pvt. Ltd.  <br />
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              
            </div>
          </div>

          <section id="section-15" className="group">
              <div className="pl-4 md:pl-8 border-l-2 border-gray-100 group-hover:border-[#EDA749] transition-colors duration-500 space-y-4">
                <p className="heading-4 text-gray-600 text-justify leading-loose">
                  <span className="uppercase font-black tracking-wide text-[#E23744] mr-3 md:mr-5">
                    Note :
                  </span>
                    Continued use of services after such updates constitutes acceptance of the revised Terms.
                </p>
              </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsPage;