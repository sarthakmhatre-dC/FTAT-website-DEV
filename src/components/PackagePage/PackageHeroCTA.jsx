import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palmtree, Building2, Globe2 } from 'lucide-react';

const PackageHeroCTA = () => {
    return (
        <section className="relative w-full py-24 bg-white overflow-hidden">
            {/* 1. Background Decorative Layer */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F4F4F2]/40 -skew-x-12 translate-x-1/4 z-0" />

            <div className="relative z-10 max-w-8xl mx-10 px-8 lg:px-16">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-center">

                    {/* Left Content: Typography & Introduction */}
                    <div className="flex-1 max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[#E23744] font-bold text-[10px] uppercase tracking-[0.5em]">Curated Travel</span>
                            <div className="h-px w-12 bg-gray-200" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-[#2D2D2D] leading-[0.95] tracking-tighter uppercase mb-8">
                            Explore Our <br />
                            <span className="text-[#3E4D86]">Premier Packages.</span>
                        </h1>

                        <p className="text-lg text-gray-500 font-medium leading-relaxed text-justify mb-10">
                            Discover a world of seamless travel where luxury meets logistics. From meticulously planned
                            leisure escapes to high-efficiency corporate transit, our packages are designed to provide
                            institutional reliability with a touch of personal refinement.
                        </p>

                        <div className="flex flex-col gap-6 p-8 bg-[#F4F4F2] rounded-[2rem] border-l-8 border-[#EDA749]">
                            <div>
                                <p className="text-xs font-black text-[#2D2D2D] uppercase tracking-widest flex items-center gap-2 mb-2">
                                    <Globe2 size={16} className="text-[#3E4D86]" /> Checkout Our Packages:
                                </p>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-tight">
                                    Choose from our curated vacation escapes or robust business transit solutions.
                                </p>
                            </div>

                            {/* Added Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Link to="/packages/vacation" className="px-6 py-3 bg-[#3E4D86] text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#2D2D2D] transition-all flex items-center gap-2">
                                    Vacation Plans <ArrowRight size={14} />
                                </Link>
                                <Link to="/packages/corporate" className="px-6 py-3 bg-white border border-gray-200 text-[#2D2D2D] text-[10px] font-black uppercase tracking-widest rounded-xl hover:border-[#E23744] hover:text-[#E23744] transition-all flex items-center gap-2">
                                    Corporate Plans <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Content: Premium Visual Cards */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit">
                        {/* Vacation Package Card - Now Clickable */}
                        <Link to="/packages/vacation" className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800"
                                alt="Vacation"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-8 left-8">
                                <Palmtree className="text-[#EDA749] mb-3" size={32} />
                                <h3 className="text-white font-black uppercase text-xl tracking-tighter">Vacation</h3>
                            </div>
                        </Link>

                        {/* Corporate Package Card - Now Clickable */}
                        <Link to="/packages/corporate" className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 sm:mt-12 cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
                                alt="Corporate"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#3E4D86] via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-8 left-8">
                                <Building2 className="text-[#E23744] mb-3" size={32} />
                                <h3 className="text-white font-black uppercase text-xl tracking-tighter">Corporate</h3>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PackageHeroCTA;