import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const swiperRef = useRef(null);

  const partners = [
    { name: "Amit Sharma", location: "Andheri (E)", image: "/testimonials/testimonial_1.jpg", message: "We use their service regularly for corporate travel and Mumbai airport transfers. They are always on time, the cars are clean, and the drivers are professional. Very reliable." },
    { name: "Neha Patel", location: "Lower Parel", image: "/testimonials/testimonial_4.jpg", message: "Have been using them for office travel and airport drops for years now. Never had an issue. Punctual, well-maintained cars and very courteous drivers." },
    { name: "Rahul Mehta", location: "BKC", image: "/testimonials/testimonial_2.jpg", message: "For corporate meetings and airport pickups, this is our go-to travel partner. Always on schedule and very smooth coordination." },
    { name: "Pooja Iyer", location: "Powai", image: "/testimonials/testimonial_7.jpg", message: "Early morning airport transfers are always stress-free with them. The driver arrives on time and the car is clean and comfortable. Highly recommended." },
    { name: "Suresh Nair", location: "Navi Mumbai", image: "/testimonials/testimonial_3.jpg", message: "We book them frequently for corporate guests and senior management travel. Very professional service and dependable every single time." },
    { name: "Ankit Verma", location: "Goregaon", image: "/testimonials/testimonial_5.jpg", message: "Have used their services multiple times for Mumbai airport drops and office travel. The experience has always been smooth and hassle-free." },
    { name: "Ritesh Malhotra", location: "Bandra West", image: "/testimonials/testimonial_9.jpg", message: "Great service for both corporate travel and airport transfers. Booking is easy and they are very punctual. Definitely trustworthy." },
    { name: "Kunal Shah", location: "Worli", image: "/testimonials/testimonial_6.jpg", message: "We rely on them for client pickups from the airport and internal office travel. The service quality has been consistently excellent." },
    { name: "Ramesh Kulkarni", location: "Thane", image: "/testimonials/testimonial_10.jpg", message: "Very professional and reliable. Cars are clean, drivers are polite, and airport transfers are always on time. Perfect for corporate use." },
    { name: "Mohit Agarwal", location: "Sakinaka", image: "/testimonials/testimonial_8.jpg", message: "Been using their services for our company’s travel and airport runs. Always prompt and well-managed. Would strongly recommend for corporate travel in Mumbai." }
  ];

  return (
    <section className="w-full bg-[#F4F4F2] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-16 lg:px-20">

        {/* Header Section (Unchanged) */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <Quote size={20} className="text-[#E23744] fill-[#E23744]" />
            <span className="text-[#E23744] font-bold lg:tracking-[0.3em] para-md uppercase block">
              User Experiences
            </span>
          </div>
          <h2 className="heading-2 font-bold text-[#2D2D2D] leading-tight tracking-tight max-w-4xl">
            Trusted by Travellers<br className="hidden sm:block" />
            Across <span className="text-[#3E4D86]">Mumbai.</span>
          </h2>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-1.5 w-24 md:w-32 bg-[#EDA749] rounded-full" />
          </div>
        </div>

        {/* Swiper Slider Area */}
        <div className="relative testimonial-swiper-container">
          {/* Subtle Desktop Edge Fades (Visual Layer) */}
          <div className="hidden lg:block absolute -left-2 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F4F4F2] to-transparent z-10 pointer-events-none" />
          <div className="hidden lg:block absolute -right-2 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F4F4F2] to-transparent z-10 pointer-events-none" />

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            speed={1200}
            /* 1. Increased top and bottom padding for better vertical breathing room */
            className="py-20 testimonial-swiper"
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {partners.map((partner, index) => (
              /* 2. SwiperSlide must be !h-auto to allow internal card stretching */
              <SwiperSlide key={index} className="!h-auto flex">
                <div
                  /* 3. Fixed Height: Set to 450px to accommodate long messages on most devices */
                  className="flex-1 min-h-70 max-h-70 bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden mt-10 mb-10"
                >
                  <div className="flex items-center gap-4 md:gap-5 mb-8 shrink-0">
                    <div className="shrink-0 w-16 h-16 rounded-full border-4 border-[#E23744] overflow-hidden bg-white">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="para-md !font-black text-[#2D2D2D] tracking-tight">
                        {partner.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[#3E4D86] mt-1">
                        <MapPin size={12} className="fill-[#3E4D86]/20" />
                        <span className="para-xs !font-bold uppercase tracking-widest text-[9px]">
                          {partner.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 4. Scrollable content area for cards with excessive text */}
                  <div className="flex-grow overflow-y-auto no-scrollbar pr-2">
                    <p className="para-sm md:para-md text-gray-500 leading-relaxed tracking-wide italic opacity-90">
                      “{partner.message}”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Controls */}
          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-4 bg-white border border-gray-100 rounded-full shadow-lg hover:bg-[#E23744] hover:text-white transition-all text-[#2D2D2D] active:scale-95 z-20"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-4 bg-white border border-gray-100 rounded-full shadow-lg hover:bg-[#E23744] hover:text-white transition-all text-[#2D2D2D] active:scale-95 z-20"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;