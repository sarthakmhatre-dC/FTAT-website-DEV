import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 482; // Card width (450px) + Gap (32px)
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      scrollRef.current.scrollBy({ 
        left: scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const partners = [
    {
      name: "Amit Sharma",
      location: "Andheri (E)",
      image: "/testimonials/testimonial_1.jpg",
      message: "We use their service regularly for corporate travel and Mumbai airport transfers. They are always on time, the cars are clean, and the drivers are professional. Very reliable."
    },
    {
      name: "Neha Patel",
      location: "Lower Parel",
      image: "/testimonials/testimonial_4.jpg",
      message: "Have been using them for office travel and airport drops for years now. Never had an issue. Punctual, well-maintained cars and very courteous drivers."
    },
    {
      name: "Rahul Mehta",
      location: "BKC",
      image: "/testimonials/testimonial_2.jpg",
      message: "For corporate meetings and airport pickups, this is our go-to travel partner. Always on schedule and very smooth coordination."
    },
    {
      name: "Pooja Iyer",
      location: "Powai",
      image: "/testimonials/testimonial_7.jpg",
      message: "Early morning airport transfers are always stress-free with them. The driver arrives on time and the car is clean and comfortable. Highly recommended."
    },
    {
      name: "Suresh Nair",
      location: "Navi Mumbai",
      image: "/testimonials/testimonial_3.jpg",
      message: "We book them frequently for corporate guests and senior management travel. Very professional service and dependable every single time."
    },
    {
      name: "Ankit Verma",
      location: "Goregaon",
      image: "/testimonials/testimonial_5.jpg",
      message: "Have used their services multiple times for Mumbai airport drops and office travel. The experience has always been smooth and hassle-free."
    },
    {
      name: "Ritu Malhotra",
      location: "Bandra West",
      image: "/testimonials/testimonial_9.jpg",
      message: "Great service for both corporate travel and airport transfers. Booking is easy and they are very punctual. Definitely trustworthy."
    },
    {
      name: "Kunal Shah",
      location: "Worli",
      image: "/testimonials/testimonial_6.jpg",
      message: "We rely on them for client pickups from the airport and internal office travel. The service quality has been consistently excellent."
    },
    {
      name: "Priya Kulkarni",
      location: "Thane",
      image: "/testimonials/testimonial_10.jpg",
      message: "Very professional and reliable. Cars are clean, drivers are polite, and airport transfers are always on time. Perfect for corporate use."
    },
    {
      name: "Mohit Agarwal",
      location: "Sakinaka",
      image: "/testimonials/testimonial_8.jpg",
      message: "Been using their services for our company’s travel and airport runs. Always prompt and well-managed. Would strongly recommend for corporate travel in Mumbai."
    }
  ];

  return (
    <section className="w-full bg-[#F4F4F2] py-24 overflow-hidden">
      <div className="max-w-8xl mx-auto px-8 lg:px-20">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Quote size={20} className="text-[#E23744] fill-[#E23744]" />
            <span className="text-[#E23744] font-bold tracking-[0.3em] para-md uppercase">
              User Experiences
            </span>
          </div>
          <h2 className="heading-2 font-bold text-[#2D2D2D] leading-tight tracking-tight max-w-4xl">
            Trusted by Professionals <br />
            Across <span className="text-[#3E4D86]">Mumbai.</span>
          </h2>
          <div className="mt-8 flex items-center gap-4">
             <div className="h-1.5 w-32 bg-[#EDA749] rounded-full" />
          </div>
        </div>

        {/* Card Swiper */}
        <div className="relative max-w-8xl mx-auto px-4 md:px-8 lg:px-10">
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden scroll-smooth gap-8 pb-10"
          >
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="shrink-0 w-[85vw] md:w-[400px] bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="shrink-0 w-16 h-16 rounded-full border-2 border-[#E23744] overflow-hidden bg-white">
                      <img 
                        src={partner.image} 
                        alt={partner.name} 
                        className="w-full h-fit object-cover rounded-full transition-all duration-300" 
                      />
                    </div>
                    <div>
                      <h4 className="font-black text-[#2D2D2D] text-lg tracking-tight">
                        {partner.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[#3E4D86]">
                        <MapPin size={12} className="fill-[#3E4D86]/20" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                          {partner.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base mb-6">
                    “{partner.message}”
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Controls */}
          <div className="flex gap-4 mt-8 md:ml-10">
            <button 
              onClick={() => handleScroll('left')}
              className="p-4 bg-white border border-gray-100 rounded-full shadow-lg hover:bg-[#E23744] hover:text-white transition-all text-[#2D2D2D]"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="p-4 bg-white border border-gray-100 rounded-full shadow-lg hover:bg-[#E23744] hover:text-white transition-all text-[#2D2D2D]"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;