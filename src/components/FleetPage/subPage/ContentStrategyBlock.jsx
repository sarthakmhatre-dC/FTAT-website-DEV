import React from 'react';
import { ArrowRight, ShieldCheck, Globe, Star } from 'lucide-react';

const ContentStrategyBlock = ({
  title = "Elevate Your Journey with Audi A6 Car Rental Service",
  description = "Welcome to ECO Mobility, your gateway to premium transportation experiences. Our Audi A6 car rental service offers a harmonious blend of performance, luxury, and innovation for your travel needs.",
  sectionHeading = "Perfect for Any Occasion",
  points = [
    { 
      label: "Corporate Travel", 
      text: "Impress clients and colleagues with our Audi A6 car rental service for business meetings, airport transfers, or corporate events." 
    },
    { 
      label: "Weekend Escapes", 
      text: "Whether you're exploring the countryside or cruising through the city, our Audi A6 is the perfect companion for weekend getaways." 
    },
    { 
      label: "Special Events", 
      text: "Make a grand entrance at weddings, galas, or red-carpet events. Its sleek design will leave a lasting impression." 
    }
  ],
  bottomTitle = "Book Your Audi A6 Today",
  bottomDescription = "Ready to experience the epitome of luxury and performance? Contact ECO Mobility today to book your Audi A6 car rental and embark on your next journey."
}) => {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F4F4F2]/30 -skew-x-12 translate-x-1/2 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        {/* 1. Main Header & Intro */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#2D2D2D] leading-tight mb-8 tracking-tight">
            {title.split(' ').map((word, i) => 
              word.toLowerCase().includes('audi') || word.toLowerCase().includes('rental') 
              ? <span key={i} className="text-[#E23744]">{word} </span> 
              : word + ' '
            )}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed font-medium text-justify">
            {description}
          </p>
        </div>

        {/* 2. Key Occasions Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#2D2D2D] mb-10 uppercase tracking-widest border-l-4 border-[#3E4D86] pl-6">
            {sectionHeading}
          </h3>
          
          <div className="space-y-10">
            {points.map((point, idx) => (
              <div key={idx} className="group flex items-start gap-6">
                <div className="mt-1 p-2 bg-[#F4F4F2] rounded-lg text-[#3E4D86] group-hover:bg-[#E23744] group-hover:text-white transition-all duration-300">
                  <ArrowRight size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#2D2D2D] mb-2 tracking-tight">
                    {point.label}:
                  </h4>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Call to Action / Footer */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] leading-tight mb-8 tracking-tight">
            {bottomTitle}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed font-medium text-justify">
            {bottomDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentStrategyBlock;