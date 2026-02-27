import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContentStrategyBlock = ({
  title,
  description,
  sectionHeading,
  points = [],
  bottomTitle,
  bottomDescription
}) => {
  // Dynamic words that should be highlighted in red across different categories
  const highlightWords = ['rental', 'van', 'vans', 'suv', 'suvs', 'sedan', 'sedans', 'premium', 'luxury', 'service', 'services'];

  // Safety check to ensure we have data
  if (!title) return null;

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F4F4F2]/30 -skew-x-12 translate-x-1/2 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#2D2D2D] leading-tight mb-8 tracking-tight">
            {title.split(' ').map((word, i) => {
              // Clean the word of punctuation to check if it matches our highlight list
              const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
              return highlightWords.includes(cleanWord) 
                ? <span key={i} className="text-[#E23744]">{word} </span> 
                : word + ' '
            })}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed font-medium text-justify">
            {description}
          </p>
        </div>

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