import React from 'react';

// Passing 'categories' as a prop
const ClientDirectory = ({ categories }) => {
    // Safety check in case categories is undefined
    if (!categories) return null;

    return (
        <section className="w-full py-16 lg:py-32 bg-[#F4F4F2]/40">
            <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-20">

                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[#E23744] font-bold lg:tracking-[0.3em] para-md uppercase block mb-4">
                            Corporate Ecosystem
                        </span>
                        <h2 className="heading-1 font-black text-[#2D2D2D] tracking-tighter uppercase leading-[0.9]">
                            Our <span className="text-[#3E4D86]">Partners.</span>
                        </h2>
                    </div>
                    <div className="pb-2">
                        <div className="h-1.5 w-24 bg-[#EDA749] rounded-full shadow-sm" />
                    </div>
                </div>

                <div className="space-y-32">
                    {categories.map((category, catIdx) => (
                        <div key={catIdx} className="group/cat animate-in fade-in slide-in-from-bottom-8 duration-1000">

                            <div className="flex items-center gap-6 mb-12">
                                <h3 className="para-sm font-black text-[#2D2D2D] uppercase lg:tracking-[0.4em] whitespace-nowrap">
                                    {category.name}
                                </h3>
                                <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent" />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/30">
                                {category.clients.map((client) => (
                                    <div
                                        key={client.id}
                                        className="relative group/logo bg-white p-6 flex flex-col items-center justify-between min-h-[200px] transition-all duration-500 hover:z-20"
                                    >
                                        <div className="w-full flex-grow flex items-center justify-center transition-transform duration-500 group-hover/logo:scale-105">
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                className="w-full h-auto max-h-[120px] object-contain"
                                            />
                                        </div>

                                        <div className="pb-2 pt-2 text-center">
                                            <span className="text-[10px] font-black text-gray-600 group-hover/logo:text-[#3E4D86] uppercase tracking-[0.15em] transition-colors duration-300">
                                                {client.name}
                                            </span>
                                        </div>

                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block" />
                                        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#3E4D86] transform scale-x-0 group-hover/logo:scale-x-100 transition-transform duration-500 origin-left" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientDirectory;