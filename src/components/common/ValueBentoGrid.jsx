import React from 'react';
import { RefreshCcw, LayoutGrid, Headset } from 'lucide-react';

const ValueBentoGrid = () => {
    // Utility for card styling to ensure consistency
    const cardBaseStyle = "bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group flex flex-col";

    return (
        <section className="w-full bg-[#F4F4F2]/40 py-16 md:py-24 overflow-hidden">
            <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-20">

                {/* Main 12-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-stretch">

                    {/* Top-Left: Header Section */}
                    <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-center py-6">
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            {/* Switched to para-sm by default (mobile) and para-md for medium screens and up */}
                            <span className="para-md lg:para-lg !text-gray-400">Luxury</span>

                            {/* Circle: w-2/h-2 on mobile, w-3/h-3 on md: screens */}
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-[#E23744] bg-white" />

                            <span className="para-md lg:para-lg !text-gray-400">Comfort</span>

                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-[#E23744] bg-white" />

                            <span className="para-md lg:para-lg !text-gray-400">Convenience</span>
                        </div>

                        <h2 className="heading-2 text-[#2D2D2D] max-w-sm">
                            What makes <br className="hidden lg:block" />
                            <span className="text-[#E23744]">FTAT Mobility</span> <br className="hidden lg:block" />
                            your best choice?
                        </h2>
                    </div>

                    {/* Row 1, Card 2 */}
                    <div className={`${cardBaseStyle} md:col-span-6 lg:col-span-4 justify-center`}>
                        <div className="mb-6 p-4 w-fit rounded-2xl bg-[#F4F4F2] text-[#E23744] group-hover:bg-[#E23744] group-hover:text-white transition-all">
                            <RefreshCcw size={28} />
                        </div>
                        <h3 className="heading-4 text-[#2D2D2D] mb-4 uppercase">
                            Convenience and Flexibility
                        </h3>
                        <p className="para-md text-gray-500 font-medium">
                            Enjoy the convenience and flexibility of having access to a fleet as per your need and comfort.
                        </p>
                    </div>

                    {/* Row 1, Card 3 */}
                    <div className={`${cardBaseStyle} md:col-span-6 lg:col-span-4 justify-center`}>
                        <div className="mb-6 p-4 w-fit rounded-2xl bg-[#F4F4F2] text-[#E23744] group-hover:bg-[#E23744] group-hover:text-white transition-all">
                            <LayoutGrid size={28} />
                        </div>
                        <h3 className="heading-4 text-[#2D2D2D] mb-4 uppercase">
                            Streamlined Management
                        </h3>
                        <p className="para-md text-gray-500 font-medium">
                            Easily track and manage rental bookings and usage data through our integrated online tool.
                        </p>
                    </div>

                    {/* Row 2, Large Card (The key to balancing height) */}
                    <div className={`${cardBaseStyle} md:col-span-12 lg:col-span-8 items-center text-center overflow-hidden`}>
                        <div className="mb-6">
                            <h3 className="heading-3 text-[#2D2D2D] mb-3 uppercase">Wide Range of Cars</h3>
                            <p className="para-md text-gray-500 font-medium max-w-xl mx-auto">
                                From economy cars for everyday use to luxury sedans, we operate a fleet designed for every occasion.
                            </p>
                        </div>
                        {/* Use mt-auto to push image to bottom and aspect-ratio to control height */}
                        <div className="mt-auto w-full flex justify-center pt-4">
                            <img
                                src="/valueBentoGrid.jpg"
                                alt="Fleet Range"
                                className="w-full max-w-2xl aspect-[16/7] md:aspect-auto object-cover md:object-contain rounded-xl transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Row 2, Last Card */}
                    <div className={`${cardBaseStyle} md:col-span-12 lg:col-span-4 justify-center`}>
                        <div className="mb-6 p-4 w-fit rounded-2xl bg-[#F4F4F2] text-[#E23744] group-hover:bg-[#E23744] group-hover:text-white transition-all">
                            <Headset size={28} />
                        </div>
                        <h3 className="heading-4 text-[#2D2D2D] mb-4 uppercase">
                            24/7 Support
                        </h3>
                        <p className="para-md text-gray-500 font-medium">
                            You can rely on our dedicated team to provide prompt assistance whenever needed.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ValueBentoGrid;