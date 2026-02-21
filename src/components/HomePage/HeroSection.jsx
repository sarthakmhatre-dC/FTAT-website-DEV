import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden py-30">
      {/* Background Image Logic */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')`, // Replace with your actual travel image
        }}
      />
      
      {/* Premium Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-[#2D2D2D]/60 via-[#2D2D2D]/40 to-[#2D2D2D]/70" />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl px-6 text-center">
        {/* Animated Badge */}
        <span className="inline-block px-4 py-1.5 mb-6 para-xs font-bold tracking-[0.3em] uppercase bg-[#E23744] text-white rounded-full shadow-lg mt-5">
          Since 1997
        </span>

        <h1 className="heading-1 font-semibold text-white leading-[1.1] mb-10 tracking-[-0.05em] ">
          Experience the World <br />
          <span className="text-[#EDA749]">Without Boundaries.</span>
        </h1>

        <p className="para-md text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto text-justify md:text-center">
          We establish ourselves as a leader in Ground Transportation through a wide network, 
          state-of-the-art technology, and highly motivated expertise. Delivering 
          reliable service status that creates lasting value for our global customers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
          <button className="w-full sm:w-auto px-6 py-3 bg-[#E23744] text-white font-bold rounded-full hover:bg-[#E23744]/90 transition-all transform hover:-translate-y-1 shadow-xl uppercase text-sm tracking-widest">
            Book a Package
          </button>
          <button className="w-full sm:w-auto px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all transform hover:-translate-y-1 uppercase text-sm tracking-widest">
            Our Fleet
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;