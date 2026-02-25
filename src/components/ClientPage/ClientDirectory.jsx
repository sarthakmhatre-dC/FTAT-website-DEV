import React from 'react';

const ClientDirectory = ({
    categories = [
        {
            name: "Investment & Venture Capital",
            clients: [
                { id: 1, logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=300&h=100&auto=format&fit=crop", name: "Alpha Ventures" },
                { id: 2, logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=300&h=100&auto=format&fit=crop", name: "Global Equity" },
                { id: 3, logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300&h=100&auto=format&fit=crop", name: "Peak Capital" },
                { id: 4, logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&h=100&auto=format&fit=crop", name: "Aashra Group" },
                { id: 5, logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&h=100&auto=format&fit=crop", name: "Tech Equity" },
                { id: 6, logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=300&h=100&auto=format&fit=crop", name: "Visionary Fund" }
            ]
        },
        {
            name: "BFSI (Banking & Finance)",
            clients: [
                { id: 7, logo: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=300&h=100&auto=format&fit=crop", name: "National Bank" },
                { id: 8, logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=300&h=100&auto=format&fit=crop", name: "Rising Sun Finance" },
                { id: 9, logo: "https://images.unsplash.com/photo-1526303328194-ed2522899420?q=80&w=300&h=100&auto=format&fit=crop", name: "Digital Mint" },
                { id: 10, logo: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=300&h=100&auto=format&fit=crop", name: "Horizon Trust" },
                { id: 11, logo: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=300&h=100&auto=format&fit=crop", name: "Paisa Wealth" },
                { id: 12, logo: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=300&h=100&auto=format&fit=crop", name: "WelFra Advisory" }
            ]
        },
        {
            name: "Travel & Hospitality",
            clients: [
                { id: 13, logo: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=300&h=100&auto=format&fit=crop", name: "Voyage Co" },
                { id: 14, logo: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=300&h=100&auto=format&fit=crop", name: "Hotel Tunga" },
                { id: 15, logo: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=300&h=100&auto=format&fit=crop", name: "Luxe Travels" },
                { id: 16, logo: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=300&h=100&auto=format&fit=crop", name: "Skyline Resorts" },
                { id: 17, logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=300&h=100&auto=format&fit=crop", name: "Regency Hub" },
                { id: 18, logo: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=300&h=100&auto=format&fit=crop", name: "The Project Cafe" },
                { id: 19, logo: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=300&h=100&auto=format&fit=crop", name: "The Project Cafe" }
            ]
        }
    ]
}) => {
    return (
        <section className="w-full py-16 lg:py-32 bg-[#F4F4F2]/40">
            <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-20">

                {/* Page Header: Editorial Style */}
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

                {/* Categories Loop */}
                <div className="space-y-32">
                    {categories.map((category, catIdx) => (
                        <div key={catIdx} className="group/cat animate-in fade-in slide-in-from-bottom-8 duration-1000">

                            {/* Category Label */}
                            <div className="flex items-center gap-6 mb-12">
                                <h3 className="para-sm font-black text-[#2D2D2D] uppercase lg:tracking-[0.4em] whitespace-nowrap">
                                    {category.name}
                                </h3>
                                <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent" />
                            </div>

                            {/* Premium White Grid with Faded Separators */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/30">
                                {category.clients.map((client, index) => (
                                    <div
                                        key={client.id}
                                        className="relative group/logo bg-white p-6 flex flex-col items-center justify-between min-h-[200px] transition-all duration-500 hover:z-20"
                                    >
                                        {/* 1. Maximized Logo Area */}
                                        {/* 1. Maximized Logo Area */}
                                        <div className="w-full flex-grow flex items-center justify-center transition-transform duration-500 group-hover/logo:scale-105">
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                /* Increased max-h from 90px to 120px and removed px-2 */
                                                className="w-full h-auto max-h-[120px] object-contain"
                                            />
                                        </div>

                                        {/* 2. Persistent Client Label */}
                                        {/* Reduced padding from pb-4 pt-4 to pb-2 pt-2 to allow logo expansion */}
                                        <div className="pb-2 pt-2 text-center">
                                            <span className="text-[10px] font-black text-gray-400 group-hover/logo:text-[#3E4D86] uppercase tracking-[0.15em] transition-colors duration-300 text-nowrap">
                                                {client.name}
                                            </span>
                                        </div>

                                        {/* 3. Faded Vertical Separator */}
                                        {/* Hidden on the last item of each row via CSS or manual logic */}
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block" />

                                        {/* 4. Blueberry Interactive Bottom Border */}
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