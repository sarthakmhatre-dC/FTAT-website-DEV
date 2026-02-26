import React from 'react';
import { Package, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Subtle Premium White Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1)_0%,rgba(244,244,242,1)_100%)]" />

      {/* Floating Decorative Accents (Subtle Brand Presence) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EDA749]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3E4D86]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-10 lg:px-20">
        <div className="flex flex-col items-center text-center">

          {/* Section Indicator */}
          <span className="text-[#E23744] font-bold lg:tracking-[0.3em] para-md uppercase mb-6">
            Partner with Excellence
          </span>

          {/* Headline with Increased Spacing and Weight */}
          <h2 className="heading-1 font-bold text-[#2D2D2D] leading-tight tracking-tight mb-15 max-w-4xl">
            Looking for a Reliable <br />
            <span className="text-[#3E4D86]">Corporate Transport Partner?</span>
          </h2>

          {/* Subtext with High Readability */}
          <p className="para-lg text-gray-500 font-medium leading-relaxed mb-12 max-w-2xl">
            Let’s design a transport solution that fits your business,<br/>
            scale, and compliance needs.
          </p>

          {/* Premium Conversion Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-5">
            <Link 
            to="/packages"
            className="group relative flex items-center gap-3 px-10 py-5 bg-[#E23744] text-white font-bold rounded-2xl shadow-xl shadow-red-900/10 hover:shadow-red-900/20 hover:-translate-y-1 transition-all duration-300 uppercase para-xs tracking-widest">
              <Package size={18} className="transition-transform group-hover:rotate-12" />
              Our Packages
            </Link>

            <Link
              to="/fleet"
              className="group relative flex items-center gap-3 px-10 py-5 bg-white border border-gray-200 text-[#2D2D2D] font-bold rounded-2xl hover:bg-[#F4F4F2] hover:border-[#3E4D86] hover:-translate-y-1 transition-all duration-300 uppercase para-xs tracking-widest">
              <Car size={18} className="text-[#3E4D86] transition-transform group-hover:rotate-12" />
              Our Fleet
            </Link>
          </div>

          {/* Legacy Badge */}
          <div className="mt-16 flex items-center gap-3 opacity-30 grayscale">
            <div className="h-px w-12 bg-black" />
            <span className="para-sm font-bold uppercase tracking-[0.2em]">Trusted Since 1997</span>
            <div className="h-px w-12 bg-black" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;