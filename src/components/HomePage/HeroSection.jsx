import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden py-30">
      {/* Background Image Logic */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ 
          backgroundImage: `url('/backgroundImages/Herobackground.webp')`, // Replace with your actual travel image
        }}
      />
      
      {/* Premium Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-[#2D2D2D]/60 via-[#2D2D2D]/40 to-[#2D2D2D]/70" />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl px-6 text-center mb-5">
        {/* Animated Badge */}
        <span className="inline-block px-4 py-1.5 mb-6 para-xs font-bold tracking-[0.3em] uppercase bg-[#E23744] text-white rounded-full shadow-lg mt-5">
          Since 1997
        </span>

        <h1 className="heading-1 font-bold text-white leading-[1.1] md:leading-[1.05] tracking-tighter sm:mb-10 mb-10">
          Corporate Cab & Employee<br />
          <span className="text-[#EDA749]">Transportation Services in Mumbai</span>
        </h1>

        <p className="para-lg text-white/90 leading-relaxed tracking-wide mb-10 max-w-2xl mx-auto text-justify md:text-center">
          Reliable, compliant, and scalable transport services for enterprises, IT parks, factories, and growing businesses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
          <Link 
          to = "/packages"
          className="w-full sm:w-auto px-6 py-3 bg-[#E23744] text-white font-bold rounded-full hover:bg-[#E23744]/90 transition-all transform hover:-translate-y-1 shadow-xl uppercase text-sm tracking-widest">
            Explore our Packages
          </Link>
          <Link
          to="/fleet" 
          className="w-full sm:w-auto px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all transform hover:-translate-y-1 uppercase text-sm tracking-widest">
            Explore Our Fleet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;