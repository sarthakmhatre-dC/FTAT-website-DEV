import React from 'react';
import { Circle, RefreshCcw, LayoutGrid, Headset } from 'lucide-react';

const ValueBentoGrid = () => {
    return (
        <section className="w-full bg-[#F4F4F2]/40 py-24 overflow-hidden">
            <div className="max-w-8xl mx-10 px-8 lg:px-16">

                {/* Main 12-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">

                    {/* Top-Left: Header Section (Occupies 4 columns) */}
                    <div className="md:col-span-4 flex flex-col justify-center py-3">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Luxury</span>
                            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#E23744] bg-white" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Comfort</span>
                            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#E23744] bg-white" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Convenience</span>
                        </div>

                        <h2 className="heading-2 font-medium text-[#2D2D2D] leading-tight tracking-tight">
                            What makes <br />
                            <span className="text-[#E23744]">FTAT Mobility</span> <br />
                            your best choice?
                        </h2>
                    </div>

                    {/* Top-Right: Two Smaller Feature Cards (Each 4 columns) */}
                    <div className="md:col-span-4 bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group flex flex-col justify-center h-[55vh]">
                        <div className="mb-6 p-4 w-fit rounded-2xl bg-[#F4F4F2] text-[#E23744] group-hover:bg-[#E23744] group-hover:text-white transition-all">
                            <RefreshCcw size={28} />
                        </div>
                        <h3 className="text-xl font-black text-[#2D2D2D] mb-4 tracking-tight uppercase">
                            Convenience and Flexibility
                        </h3>
                        <p className="text-gray-500 text-md leading-relaxed font-medium">
                            Enjoy the convenience and flexibility of having access to a fleet of cars as per your need and comfort, tailored for every business requirement.
                           
                        </p>
                    </div>

                    <div className="md:col-span-4 bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group flex flex-col justify-center h-[55vh]">
                        <div className="mb-6 p-4 w-fit rounded-2xl bg-[#F4F4F2] text-[#E23744] group-hover:bg-[#E23744] group-hover:text-white transition-all">
                            <LayoutGrid size={28} />
                        </div>
                        <h3 className="text-xl font-black text-[#2D2D2D] mb-4 tracking-tight uppercase">
                            Streamlined Management
                        </h3>
                        <p className="text-gray-500 text-md leading-relaxed font-medium">
                            Easily track and manage rental bookings, expenses, and usage data through our online booking tool that integrates with corporate travel desks.
                            
                        </p>
                    </div>

                    {/* Bottom-Left: Large "Wide Range" Card (Occupies 8 columns) */}
                    <div className="md:col-span-8 bg-white rounded-[3rem] p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-[55vh]">
                        <h3 className="text-2xl font-black text-[#2D2D2D] mb-4 tracking-tight uppercase">
                            Wide Range of Cars
                        </h3>
                        <p className="text-gray-500 text-md leading-relaxed font-medium max-w-xl mb-5">
                            From economy cars for everyday use to luxury sedans for executive travel, we operate a fleet designed for every occasion.
                        </p>
                        <div className="relative w-fit h-fit mb-5 justify-center">
                            <img
                                src="/valueBentoGrid.jpg"
                                alt="Fleet Range"
                                className="w-fit h-50 object-contain transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Bottom-Right: 24/7 Support Card (Occupies 4 columns) */}
                    <div className="md:col-span-4 bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group flex flex-col justify-center h-[55vh]">
                        <div className="mb-6 p-4 w-fit rounded-2xl bg-[#F4F4F2] text-[#E23744] group-hover:bg-[#E23744] group-hover:text-white transition-all">
                            <Headset size={28} />
                        </div>
                        <h3 className="text-xl font-black text-[#2D2D2D] mb-4 tracking-tight uppercase">
                            24/7 Support
                        </h3>
                        <p className="text-gray-500 text-md leading-relaxed font-medium">
                            You can rely on our dedicated team to provide prompt assistance whenever needed, ensuring your operations never stop.
                            
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ValueBentoGrid;